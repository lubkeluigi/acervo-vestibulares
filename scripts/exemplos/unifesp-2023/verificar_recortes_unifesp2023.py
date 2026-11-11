#!/usr/bin/env python3
"""Regressão dos recortes: limites visuais conferidos nos PDFs oficiais.

As áreas protegidas abaixo incluem rótulos, eixos, fontes e pontas de setas;
não são derivadas do tamanho do SVG (que aceitava os recortes antigos).
Compara também o SVG publicado com uma nova extração da fonte oficial.
Fotografias e desenhos que já são bitmap no PDF preservam esse conteúdo;
os vetores do PDF não são rasterizados.
"""
from pathlib import Path
import runpy
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[3]
sys.path.insert(0, str(ROOT / 'scripts'))
from svg_clip import pdf_clip_svg
import pymupdf

# Coordenadas de conteúdo, em pontos, revisadas sobre as páginas oficiais.
AREAS = {
    'p1-q01-cartum-lobo.svg': (74.76, 82.93, 250.47, 273.00),
    'p1-q25-cartoon-joel-pett.svg': (306.25, 63.51, 562.26, 256.60),
    'p2-q01-celula-hibrida.svg': (174.20, 126.32, 463.47, 248.74),
    'p2-q02-pneumatoforos.svg': (143.40, 98.30, 409.30, 285.00),
    'p2-q03-graficos-fsh-lh.svg': (78.18, 255.16, 575.58, 400.13),
    'p2-q06-planeta-marte.svg': (39.50, 84.20, 181.60, 240.00),
    'p2-q07-reacao-oxido-etileno.svg': (236.93, 122.94, 401.33, 162.96),
    'p2-q09-pilha-eletroquimica.svg': (241.81, 92.69, 392.87, 217.76),
    'p2-q10-curcuma.svg': (228.20, 98.70, 324.50, 169.60),
    'p2-q10-estruturas-curcumina.svg': (25.53, 210.24, 529.30, 294.20),
    'p2-q11-trajetoria-lancamento.svg': (193.00, 123.00, 454.00, 298.50),
    'p2-q12-cilindro-embolo.svg': (139.54, 107.63, 425.32, 268.93),
    'p2-q13-tanque-tabua.svg': (204.00, 126.00, 430.00, 332.00),
    'p2-q14-onda-mar-banhista.svg': (141.55, 128.36, 424.66, 307.56),
    'p2-q15-circuito-e-grafico.svg': (115.41, 122.52, 530.52, 249.49),
    'p2-q17-fio-quadrado.svg': (179.79, 153.66, 460.73, 286.14),
    'p2-q18-grafico-onda-seno.svg': (69.53, 134.56, 498.43, 224.48),
    'p2-q06-solucao-lewis.svg': (420.05, 578.09, 478.80, 598.74),
    'p2-q06-solucao-estados.svg': (65.10, 636.29, 135.66, 691.34),
    'p2-q06-solucao-solido.svg': (70.40, 723.79, 95.90, 747.99),
    'p2-q07-solucao-formula-meg.svg': (64.45, 192.79, 189.34, 247.84),
    'p2-q13-solucao-forcas.svg': (58.20, 449.83, 209.05, 572.53),
    'p2-q13-solucao-espelho.svg': (72.45, 646.00, 209.03, 768.72),
    'p2-q15-solucao-circuito.svg': (150.85, 181.54, 369.95, 281.69),
    'p2-q17-solucao-geometria-a.svg': (61.35, 531.01, 187.05, 770.91),
    'p2-q17-solucao-geometria-b.svg': (54.45, 173.14, 205.49, 295.84),
    'p2-q18-solucao-grafico.svg': (61.30, 547.48, 220.45, 662.03),
}


def verificar():
    data = runpy.run_path(str(Path(__file__).with_name('extrair-vetores-unifesp2023.py')))
    clips = data['clips']
    assert {c[3] for c in clips} == set(AREAS), 'Recorte sem área visual auditada'
    output = ROOT / 'public/images/unifesp2023'
    for doc, page, coords, filename, alt in clips:
        clip = pymupdf.Rect(coords)
        # Pequena tolerância apenas para arredondamento a duas casas decimais.
        protected = pymupdf.Rect(AREAS[filename])
        assert (clip + (-0.02, -0.02, 0.02, 0.02)).contains(protected), f'Conteúdo cortado: {filename}'
        svg = (output / filename).read_text(encoding='utf-8')
        xml = ET.fromstring(svg)
        expected_box = [0, 0, clip.width, clip.height]
        assert list(map(float, xml.attrib['viewBox'].split())) == expected_box, f'viewBox incorreto: {filename}'
        assert xml.attrib.get('role') == 'img' and xml.attrib.get('aria-label'), f'Acessibilidade ausente: {filename}'
        regenerated, _ = pdf_clip_svg(doc, page, coords, alt)
        assert svg == regenerated, f'SVG desatualizado em relação ao PDF e às coordenadas: {filename}'
    print(f'6. Recortes: {len(clips)} áreas protegidas completas; SVGs idênticos à extração dos PDFs oficiais.')


if __name__ == '__main__':
    verificar()
