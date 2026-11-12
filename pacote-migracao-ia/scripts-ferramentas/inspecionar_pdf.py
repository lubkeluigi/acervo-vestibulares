#!/usr/bin/env python3
"""Utilitário de inspeção de PDF de provas (VUNESP / UNIFESP / FAMERP / FAMEMA / FUVEST).

Uso:
  python3 scripts/inspecionar_pdf.py <caminho-do-pdf> [--saida-txt <arquivo.txt>]

Funcionalidades:
1. Extrai e exibe a contagem de páginas, imagens raster (com seus bboxes x0, y0, x1, y1)
   e agrupamentos de desenhos vetoriais por página (para definir os `clips` do `svg_clip.py`).
2. Detecta automaticamente TODAS as palavras sublinhadas na prova (traços horizontais finos
   com altura < 2.5 pt logo abaixo de palavras) para garantir que nenhum `<u>...</u>` seja esquecido.
3. Opcionalmente salva o texto completo extraído página a página em `--saida-txt`.
"""
import argparse
from pathlib import Path
import pymupdf


def inspect_pdf(pdf_path: Path, out_txt: Path | None = None):
    doc = pymupdf.open(str(pdf_path))
    print(f"============================================================")
    print(f"PDF: {pdf_path} ({len(doc)} páginas)")
    print(f"============================================================")

    full_text_pages = []

    for pno in range(1, len(doc) + 1):
        page = doc[pno - 1]
        rect = page.rect
        text = page.get_text("text")
        full_text_pages.append(f"=== PÁGINA {pno} ({rect.width:.1f} x {rect.height:.1f}) ===\n{text}\n")

        # 1. Imagens raster e seus bounding boxes
        img_infos = []
        for img in page.get_images(full=True):
            xref = img[0]
            bboxes = page.get_image_rects(xref)
            for b in bboxes:
                # Ignora logotipos de cabeçalho/rodapé muito próximos às bordas (y0 < 55 ou y1 > 790)
                if b.y0 >= 55 and b.y1 <= 795:
                    img_infos.append((xref, b))

        # 2. Sublinhados (retângulos/linhas horizontais finas sob palavras)
        words = page.get_text("words")
        drawings = page.get_drawings()
        underlines = []
        vector_bboxes = []

        for d in drawings:
            r = d["rect"]
            w = r.x1 - r.x0
            h = r.y1 - r.y0
            # Ignora cabeçalho/rodapé padrão VUNESP
            if r.y0 < 55 or r.y1 > 785:
                continue
            # Traço horizontal fino (possível sublinhado de texto)
            if h < 2.5 and 8 < w < 240:
                matched_words = []
                for wx0, wy0, wx1, wy1, wtext, *_ in words:
                    if abs(wy1 - r.y0) < 4.5 and (wx1 > r.x0 + 2 and wx0 < r.x1 - 2):
                        matched_words.append(wtext)
                if matched_words:
                    underlines.append(
                        (
                            (round(r.x0, 1), round(r.y0, 1), round(r.x1, 1), round(r.y1, 1)),
                            " ".join(matched_words),
                        )
                    )
                    continue
            # Desenhos vetoriais relevantes (esquemas, fórmulas, gráficos, tabelas)
            if w > 5 or h > 5:
                vector_bboxes.append(r)

        if img_infos or underlines or len(vector_bboxes) > 5:
            print(f"\n--- Página {pno} ---")
            if img_infos:
                print("  [Imagens Raster]:")
                for xref, b in img_infos:
                    print(f"    xref={xref}: bbox=({b.x0:.1f}, {b.y0:.1f}, {b.x1:.1f}, {b.y1:.1f})")
            if underlines:
                print("  [Sublinhados detectados -> usar <u>...</u>]:")
                for bbox, phrase in underlines:
                    print(f"    bbox={bbox} -> <u>{phrase}</u>")
            if len(vector_bboxes) > 5:
                vx0 = min(b.x0 for b in vector_bboxes)
                vy0 = min(b.y0 for b in vector_bboxes)
                vx1 = max(b.x1 for b in vector_bboxes)
                vy1 = max(b.y1 for b in vector_bboxes)
                print(
                    f"  [Elementos Vetoriais]: {len(vector_bboxes)} paths "
                    f"(envelope geral: x0={vx0:.1f}, y0={vy0:.1f}, x1={vx1:.1f}, y1={vy1:.1f})"
                )

    if out_txt:
        out_txt.parent.mkdir(parents=True, exist_ok=True)
        out_txt.write_text("\n".join(full_text_pages), encoding="utf-8")
        print(f"\nTexto completo salvo em: {out_txt}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Inspeciona PDF de prova (imagens, vetores e sublinhados).")
    parser.add_argument("pdf", type=Path, help="Caminho para o arquivo PDF")
    parser.add_argument("--saida-txt", type=Path, default=None, help="Arquivo .txt opcional para salvar o texto extraído")
    args = parser.parse_args()
    inspect_pdf(args.pdf, args.saida_txt)
