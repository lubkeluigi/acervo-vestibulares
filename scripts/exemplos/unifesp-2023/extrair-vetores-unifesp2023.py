#!/usr/bin/env python3
import sys
from pathlib import Path
import pymupdf

ROOT = Path(__file__).resolve().parent.parent.parent.parent
sys.path.insert(0, str(ROOT / 'scripts'))
from svg_clip import pdf_clip_svg

# Usa public/documentos/unifesp2023 (versionado no Git) como fonte padrão
DOC_DIR = ROOT / 'public/documentos/unifesp2023'
doc1 = pymupdf.open(str(DOC_DIR / 'prova1-linguagens-redacao-2023.pdf'))
doc2 = pymupdf.open(str(DOC_DIR / 'prova2-conhecimentos-especificos-2023.pdf'))
doc_crit2 = pymupdf.open(str(DOC_DIR / 'prova2-criterios-correcao-2023.pdf'))

out_dir = ROOT / 'public/images/unifesp2023'
out_dir.mkdir(parents=True, exist_ok=True)

clips = [
    # Prova 1 (Línguas e Redação)
    (doc1, 3, (69, 77, 256, 278), 'p1-q01-cartum-lobo.svg', 'Cartum Will Santino - Os três porquinhos e o lobo'),
    (doc1, 9, (300, 62, 566, 260), 'p1-q25-cartoon-joel-pett.svg', 'Cartoon Joel Pett - Humans and tree'),

    # Prova 2 (Conhecimentos Específicos)
    (doc2, 3, (168, 126, 470, 253), 'p2-q01-celula-hibrida.svg', 'Esquema da formação da célula híbrida com proteínas marcadas'),
    (doc2, 4, (135, 92, 416, 290), 'p2-q02-pneumatoforos.svg', 'Raízes do tipo pneumatóforos em Avicennia sp'),
    (doc2, 5, (72, 250, 582, 406), 'p2-q03-graficos-fsh-lh.svg', 'Gráficos 1, 2 e 3 da concentração de FSH e LH'),
    (doc2, 8, (34, 79, 187, 247), 'p2-q06-planeta-marte.svg', 'Fotografia do Planeta Marte'),
    (doc2, 9, (230, 117, 408, 168), 'p2-q07-reacao-oxido-etileno.svg', 'Equação química de obtenção do monoetilenoglicol a partir de óxido de etileno'),
    (doc2, 11, (235, 88, 400, 221), 'p2-q09-pilha-eletroquimica.svg', 'Esquema da célula eletroquímica de cobre e prata'),
    (doc2, 12, (220, 93, 331, 175), 'p2-q10-curcuma.svg', 'Fotografia da cúrcuma (açafrão-da-terra)'),
    (doc2, 12, (19, 207, 535, 300), 'p2-q10-estruturas-curcumina.svg', 'Formas tautoméricas 1a, 1b e 1c da curcumina'),
    (doc2, 13, (187, 116, 461, 305), 'p2-q11-trajetoria-lancamento.svg', 'Trajetória do lançamento oblíquo da bola a partir da encosta do morro'),
    (doc2, 14, (132, 103, 432, 272), 'p2-q12-cilindro-embolo.svg', 'Diagrama P x V da transformação cíclica ABCA do gás monoatômico ideal'),
    (doc2, 15, (195, 119, 441, 338), 'p2-q13-tanque-tabua.svg', 'Pessoa sobre a tábua articulada no pino P sobre o tanque contendo água'),
    (doc2, 16, (135, 128, 431, 312), 'p2-q14-onda-mar-banhista.svg', 'Figuras 1 e 2 da onda senoidal e do banhista nos instantes t = 0 e t = 3 s'),
    (doc2, 17, (108, 118, 538, 255), 'p2-q15-circuito-e-grafico.svg', 'Circuito elétrico com lâmpadas L1 e L2 e gráfico da corrente elétrica i x t'),
    (doc2, 19, (173, 152, 467, 292), 'p2-q17-fio-quadrado.svg', 'Fio dobrado em ângulos retos nos pontos Q e R e encaixe no quadrado TSUP'),
    (doc2, 20, (62, 128, 505, 231), 'p2-q18-grafico-onda-seno.svg', 'Gráfico da função seno modelando a onda marítima no plano cartesiano'),

    # Critérios oficiais (resolução esperada da banca VUNESP)
    (doc_crit2, 2, (416, 573, 484, 603), 'p2-q06-solucao-lewis.svg', 'Gabarito Oficial: Fórmula de Lewis (por pontos) do dióxido de carbono'),
    (doc_crit2, 2, (59, 634, 142, 694), 'p2-q06-solucao-estados.svg', 'Gabarito Oficial: Representação das 9 moléculas de CO2 no estado gasoso (verão)'),
    (doc_crit2, 2, (65, 718, 102, 753), 'p2-q06-solucao-solido.svg', 'Gabarito Oficial: Representação das 9 moléculas de CO2 no estado sólido (inverno)'),
    (doc_crit2, 3, (59, 190, 195, 249), 'p2-q07-solucao-formula-meg.svg', 'Gabarito Oficial: Fórmula estrutural plana do monoetilenoglicol'),
    (doc_crit2, 5, (53, 448, 216, 578), 'p2-q13-solucao-forcas.svg', 'Gabarito Oficial: Diagrama de forças sobre a tábua em equilíbrio'),
    (doc_crit2, 5, (67, 646, 215, 774), 'p2-q13-solucao-espelho.svg', 'Gabarito Oficial: Formação da imagem E linha da extremidade E na superfície da água'),
    (doc_crit2, 7, (144, 175, 377, 285), 'p2-q15-solucao-circuito.svg', 'Gabarito Oficial: Circuito elétrico e associação das lâmpadas L1 e L2'),
    (doc_crit2, 7, (61, 531, 194, 777), 'p2-q17-solucao-geometria-a.svg', 'Gabarito Oficial: Triângulos retângulos PQR e QRS para o cálculo de PR e QS'),
    (doc_crit2, 8, (48, 168, 212, 302), 'p2-q17-solucao-geometria-b.svg', 'Gabarito Oficial: Triângulo retângulo SVP e quadrado TSUP'),
    (doc_crit2, 8, (61, 542, 227, 668), 'p2-q18-solucao-grafico.svg', 'Gabarito Oficial: Gráfico da função g(x) = 3 + sen(pi x / 2)'),
]

if __name__ == '__main__':
    for doc, pno, coords, fname, alt in clips:
        svg, meta = pdf_clip_svg(doc, pno, coords, alt)
        (out_dir / fname).write_text(svg, encoding='utf-8')
        p_cnt = meta['paths']
        r_cnt = meta['rasterImages']
        print(f'Salvo {fname} ({p_cnt} paths, {r_cnt} rasters, {len(svg)} B)')
