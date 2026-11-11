"""Recortes SVG fiéis de páginas PDF, com texto/vetores preservados.

Imagens originalmente raster permanecem raster dentro do SVG. JPEGs CMYK são
normalizados para RGB porque o Chromium não aplica a inversão Adobe usada
nesses arquivos; a conversão de cor final é feita pelo próprio MuPDF.
"""
from io import BytesIO
import base64
import html
import re

import pymupdf
from PIL import Image, ImageOps

JPEG = re.compile(r'data:image/jpeg;base64,([^\"]+)', re.S)
IMAGE = re.compile(r'<image\b[^>]*?/>', re.I | re.S)


def accessible(svg, alt):
    match = re.search(r'<svg\b[^>]*>', svg)
    assert match, 'Elemento SVG raiz não encontrado'
    root = match.group(0)
    labelled = root[:-1] + f' role="img" aria-label="{html.escape(alt, quote=True)}"><title>{html.escape(alt)}</title>'
    return svg[:match.start()] + labelled + svg[match.end():]


def normalize_cmyk_images(svg):
    converted = 0

    def normalize(match):
        nonlocal converted
        data = base64.b64decode(re.sub(r'\s+', '', match.group(1)))
        image = Image.open(BytesIO(data))
        if image.mode != 'CMYK':
            return match.group(0)
        inverted = Image.merge('CMYK', [ImageOps.invert(channel) for channel in image.split()])
        cmyk = pymupdf.Pixmap(pymupdf.csCMYK, inverted.width, inverted.height, inverted.tobytes(), False)
        rgb = pymupdf.Pixmap(pymupdf.csRGB, cmyk)
        normalized = Image.frombytes('RGB', (rgb.width, rgb.height), rgb.samples)
        buffer = BytesIO()
        normalized.save(buffer, 'JPEG', quality=96, subsampling=0, optimize=True)
        converted += 1
        return 'data:image/jpeg;base64,' + base64.b64encode(buffer.getvalue()).decode('ascii')

    return JPEG.sub(normalize, svg), converted


def remove_raster_images(svg, indexes=None):
    """Remove todas as imagens ou somente os índices estáveis já auditados."""
    index = -1
    removed = 0
    selected = None if indexes is None else set(indexes)

    def remove(match):
        nonlocal index, removed
        index += 1
        if selected is None or index in selected:
            removed += 1
            return ''
        return match.group(0)

    result = IMAGE.sub(remove, svg)
    if selected is not None:
        assert index + 1 > max(selected, default=-1), 'Índice de raster inexistente'
        assert removed == len(selected), 'Nem todos os rasters auditados foram localizados'
    return result, removed


def pdf_clip_svg(source, page_no, coords, alt, *, pure=False, prune_images=()):
    clip = pymupdf.Rect(*coords)
    document = pymupdf.open()
    try:
        page = document.new_page(width=clip.width, height=clip.height)
        page.show_pdf_page(page.rect, source, page_no - 1, clip=clip)
        svg = accessible(page.get_svg_image(text_as_path=True), alt)
    finally:
        document.close()
    converted = 0
    removed = 0
    if pure:
        svg, removed = remove_raster_images(svg)
    else:
        svg, converted = normalize_cmyk_images(svg)
        if prune_images:
            svg, removed = remove_raster_images(svg, prune_images)
    assert not re.search(r'<script\b|javascript:', svg, re.I), 'Conteúdo indevido no SVG'
    paths = len(re.findall(r'<path\b', svg, re.I))
    assert paths > 0, 'SVG sem conteúdo vetorial'
    return svg, {
        'rasterImages': len(re.findall(r'<image\b', svg, re.I)),
        'paths': paths,
        'convertedCmyk': converted,
        'removedImages': removed,
    }
