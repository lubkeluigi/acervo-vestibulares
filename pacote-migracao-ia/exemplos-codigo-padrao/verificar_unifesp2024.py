#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Auditoria e Verificação Completa: UNIFESP 2024
Segue o mesmo protocolo de verificação VUNESP aplicado à UNIFESP 2023:
- 25 Questões Objetivas (1º Dia) + verificação de sublinhados (<u>...</u>)
- 1 Proposta de Redação (1º Dia)
- 20 Questões Discursivas (2º Dia: Biologia, Química, Física, Matemática), com a Q18 anulada
- 24 Recursos visuais vetorizados (SVGs de enunciados e de gabaritos oficiais)
- Documentos originais em public/documentos/unifesp2024/
"""
from pathlib import Path
import re
import subprocess
import pymupdf

ROOT = Path(__file__).resolve().parent.parent.parent.parent

# 1. Documentos
docs = [
    'public/documentos/unifesp2024/prova1-linguagens-redacao-2024.pdf',
    'public/documentos/unifesp2024/prova1-gabarito-2024.pdf',
    'public/documentos/unifesp2024/prova1-criterios-redacao-2024.pdf',
    'public/documentos/unifesp2024/prova2-conhecimentos-especificos-2024.pdf',
    'public/documentos/unifesp2024/prova2-criterios-correcao-2024.pdf',
]
for d in docs:
    p = ROOT / d
    assert p.exists() and p.stat().st_size > 0, f'Arquivo ausente: {d}'
print('1. Documentos PDF em public/documentos/unifesp2024: TODOS PRESENTES (5/5)')

# 2. Imagens / SVGs
svgs = [
    'p1-q01-tirinha-caco-galhardo.svg',
    'p1-q06-meme-vikings.svg',
    'p1-q16-grafico-china.svg',
    'p1-q23-economist-headline.svg',
    'p1-redacao-texto1-imagem.svg',
    'p2-q01-fluxo-energia.svg',
    'p2-q03-hemoglobina.svg',
    'p2-q04-heredograma.svg',
    'p2-q06-fluxograma-tungstenio.svg',
    'p2-q07-aparato-vidraria.svg',
    'p2-q08-benzoato-estruturas.svg',
    'p2-q09-decaimento-enxofre.svg',
    'p2-q10-miconazol.svg',
    'p2-q10-solucao-miconazol-carbono.svg',
    'p2-q11-barra-ab-figuras.svg',
    'p2-q11-solucao-forcas-fig1.svg',
    'p2-q11-solucao-forcas-fig2.svg',
    'p2-q13-aquario-glicerina.svg',
    'p2-q14-cordas-ondas.svg',
    'p2-q15-boneco-circuito.svg',
    'p2-q15-solucao-circuito-rt-rp.svg',
    'p2-q16-palmeiras.svg',
    'p2-q17-grafico-parabola.svg',
    'p2-q20-tabela-turistas.svg',
]
for s in svgs:
    p = ROOT / 'public/images/unifesp2024' / s
    assert p.exists() and p.stat().st_size > 0, f'SVG ausente: {s}'
    content = p.read_text(encoding='utf-8')
    assert '<svg' in content and '</svg>' in content, f'SVG malformado: {s}'
    assert '<path' in content or '<image' in content, f'SVG sem elementos vetoriais/raster: {s}'
print(f'2. Imagens vetoriais (SVG) em public/images/unifesp2024: TODAS PRESENTES ({len(svgs)}/{len(svgs)})')

# 3. Verificação do Gabarito Oficial e Sublinhados de Prova 1
p1_ans_file = ROOT / 'src/data/unifesp2024-objetivas.js'
code_obj = p1_ans_file.read_text(encoding='utf-8')

gabarito_oficial_p1 = {
    1: 'E', 2: 'C', 3: 'A', 4: 'C', 5: 'A', 6: 'B', 7: 'E', 8: 'C', 9: 'D', 10: 'D',
    11: 'B', 12: 'E', 13: 'C', 14: 'A', 15: 'A', 16: 'B', 17: 'D', 18: 'C', 19: 'E', 20: 'D',
    21: 'A', 22: 'B', 23: 'C', 24: 'A', 25: 'A',
}

with pymupdf.open(ROOT / docs[1]) as pdf_gabarito:
    texto_gabarito = ''.join(page.get_text() for page in pdf_gabarito)
gabarito_pdf = {int(n): answer for n, answer in re.findall(r'(?m)^\s*(\d{1,2})\s*-\s*([A-E])\s*$', texto_gabarito)}
assert gabarito_pdf == gabarito_oficial_p1, f'Gabarito de referência diverge do PDF oficial: {gabarito_pdf}'

for qnum, expected_ans in gabarito_oficial_p1.items():
    m = re.search(rf'n:\s*{qnum},.*?answer:\s*[\'\"]([A-E])[\'\"]', code_obj, re.DOTALL)
    assert m, f'Questão {qnum} sem answer em unifesp2024-objetivas.js'
    actual_ans = m.group(1)
    assert actual_ans == expected_ans, f'Q{qnum}: esperado {expected_ans}, encontrado {actual_ans}'

# Verificação de sublinhados (<u>...</u>) obrigatórios
underlines_expected = [
    '<u>ainda que para alguns seja ele fácil e leve, e para outros pesado e custoso</u>',
    'dizer a <u>quem</u>',
    'desandar-<u>lhe</u>',
    '<u>neste mundo</u>',
    '<u>grande fortuna</u>',
    '<u>seu antigo estado</u>',
    '<u>a hora de pagar o tributo</u>',
    '<u>Aquele</u> canta e ri',
    '<u>o mundo</u> adora',
    'não acha <u>bem</u>',
    '<u>that number</u>',
    'particularly <u>as</u> old people',
    '<u>though</u> the rise in longevity',
]
for u in underlines_expected:
    assert u in code_obj, f'Sublinhado ausente em unifesp2024-objetivas.js: {u}'
print(f'3. Gabarito Oficial (25/25) e Sublinhados <u>...</u> ({len(underlines_expected)}/{len(underlines_expected)}) do 1º Dia: 100% CONFERIDOS')

# 4. Verificação das Discursivas
code_disc = (ROOT / 'src/data/unifesp2024-discursivas.js').read_text(encoding='utf-8')

verbatim_checks = {
    1: ['PPB é a produtividade primária bruta', '8 833 kcal'],
    2: ['dengue', 'parasita intracelular obrigatório'],
    3: ['anemia falciforme', 'Plasmodium' ],
    4: ['albinismo', 'polidactilia', '3/16'],
    5: ['guarás (Eudocimus ruber)', 'carotenoides'],
    6: ['scheelita (CaWO4)', '144 kg'],
    7: ['carbonato de cálcio impuro', '0,002 mol', '0,05 g'],
    8: ['benzoato de sódio', 'pH = 9'],
    9: ['enxofre-35', '160 MBq'],
    10: ['miconazol', 'p2-q10-solucao-miconazol-carbono.svg', 'éter'],
    11: ['barra AB', '100√2 N', '40 N'],
    12: ['vazão constante de 4,5 L/min', '500 g', '10 cubos'],
    13: ['glicerina', '2,0', '30°'],
    14: ['densidades lineares de massa', 'f1 = 2 Hz', '√3'],
    15: ['boneco', 'p2-q15-solucao-circuito-rt-rp.svg', '17RB/12'],
    16: ['31 palmeiras', '15 m', '41 min'],
    17: ['parábola', 'F = (4, –4)', 'x² + y² + 2xy'],
    18: ['pirâmide oblíqua', 'annulled: true', 'anulada'],
    19: ['linguagem de programação Julia', '213213', '1423'],
    20: ['distribuição de turistas', '9/50', '28/65'],
}

for qnum in range(1, 21):
    m_js = re.search(rf'n:\s*{qnum},.*?(?=\n  d\(\{{\n    n:\s*{qnum+1},|\Z)', code_disc, re.DOTALL)
    assert m_js, f'Questão discursiva {qnum} ausente no JS'
    chunk = m_js.group(0)

    assert "id: 'a'" in chunk and "id: 'b'" in chunk, f'Q{qnum} sem itens a e b'
    assert 'expected:' in chunk, f'Q{qnum} sem gabarito oficial esperado'
    assert 'criteria:' in chunk, f'Q{qnum} sem critérios de pontuação'
    for kw in verbatim_checks.get(qnum, []):
        assert kw in chunk, f'Q{qnum}: termo obrigatório ausente: {kw}'

# Importa os objetos reais: verificação estrutural completa.
subprocess.run(['node', '--input-type=module', '-e', r'''
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { unifesp2024Questions as questions } from './src/data/unifesp2024.js';
assert.equal(questions.length, 46);
let parts = 0;
const files = new Set();
let annulledCount = 0;
for (const q of questions) {
  for (const image of [...(q.images || []), ...(q.afterImages || [])]) files.add(image.src);
  if (q.kind !== 'discursive') continue;
  if (q.annulled) annulledCount++;
  assert.deepEqual(q.parts.map(p => p.id), ['a', 'b']);
  for (const part of q.parts) {
    parts++;
    assert(part.expected?.trim(), q.id + part.id + ': expected');
    assert(part.criteria?.length);
    assert.equal(part.criteria.reduce((n, c) => n + c.points, 0), 2);
    assert.equal(part.maxScore, 2);
    for (const image of part.expectedImages || []) files.add(image.src);
    if (part.responseTemplate) files.add(part.responseTemplate.src);
  }
}
assert.equal(parts, 40);
assert.equal(annulledCount, 1);
assert.equal(files.size, 24);
for (const url of files) assert(fs.existsSync("public" + url.split("?")[0]), url);
console.log("Node: 46 questoes, 40 partes discursivas, 1 anulada, " + files.size + " arquivos de imagem conferidos.");
'''], cwd=ROOT, check=True)
print('4. Questões Discursivas (01 a 20, com Q18 anulada): CAMPOS DE GABARITO E TRECHOS TEXTUAIS ESPERADOS PRESENTES')

# 5. Redação
code_red = (ROOT / 'src/data/unifesp2024-redacao.js').read_text(encoding='utf-8')
assert 'O fim do anonimato digital reduziria danos causados pelo discurso de ódio?' in code_red
assert 'Critério A (Tema)' in code_red
assert 'Critério B (Gênero/Tipo de texto e Coerência)' in code_red
assert 'Critério C (Elementos Linguísticos' in code_red
print('5. Redação: tema e campos esperados da grade oficial presentes')

print('\n>>> VERIFICAÇÕES AUTOMATIZADAS UNIFESP 2024 CONCLUÍDAS. <<<')
