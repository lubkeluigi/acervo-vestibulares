#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Auditoria e Verificação Completa: UNIFESP 2023
Segue integralmente o protocolo de verificação VUNESP (MANUAL_OPERACIONAL_IA.md):
- 25 Questões Objetivas (1º Dia) + verificação de sublinhados (<u>...</u>)
- 1 Proposta de Redação (1º Dia)
- 20 Questões Discursivas com Duplo Gabarito (2º Dia: Biologia, Química, Física, Matemática)
- 27 Recursos visuais vetorizados (SVGs de enunciados e de gabaritos oficiais)
- Documentos originais em public/documentos/unifesp2023/
"""
from pathlib import Path
import re
import subprocess
import pymupdf

ROOT = Path(__file__).resolve().parent.parent.parent.parent

# 1. Documentos
docs = [
    'public/documentos/unifesp2023/prova1-linguagens-redacao-2023.pdf',
    'public/documentos/unifesp2023/prova1-gabarito-2023.pdf',
    'public/documentos/unifesp2023/prova1-criterios-redacao-2023.pdf',
    'public/documentos/unifesp2023/prova2-conhecimentos-especificos-2023.pdf',
    'public/documentos/unifesp2023/prova2-criterios-correcao-2023.pdf',
]
for d in docs:
    p = ROOT / d
    assert p.exists() and p.stat().st_size > 0, f'Arquivo ausente: {d}'
print('1. Documentos PDF em public/documentos/unifesp2023: TODOS PRESENTES (5/5)')

# 2. Imagens / SVGs
svgs = [
    'p1-q01-cartum-lobo.svg',
    'p1-q25-cartoon-joel-pett.svg',
    'p2-q01-celula-hibrida.svg',
    'p2-q02-pneumatoforos.svg',
    'p2-q03-graficos-fsh-lh.svg',
    'p2-q06-planeta-marte.svg',
    'p2-q07-reacao-oxido-etileno.svg',
    'p2-q09-pilha-eletroquimica.svg',
    'p2-q10-curcuma.svg',
    'p2-q10-estruturas-curcumina.svg',
    'p2-q11-trajetoria-lancamento.svg',
    'p2-q12-cilindro-embolo.svg',
    'p2-q13-tanque-tabua.svg',
    'p2-q14-onda-mar-banhista.svg',
    'p2-q15-circuito-e-grafico.svg',
    'p2-q17-fio-quadrado.svg',
    'p2-q18-grafico-onda-seno.svg',
    'p2-q06-solucao-lewis.svg',
    'p2-q06-solucao-estados.svg',
    'p2-q06-solucao-solido.svg',
    'p2-q07-solucao-formula-meg.svg',
    'p2-q13-solucao-forcas.svg',
    'p2-q13-solucao-espelho.svg',
    'p2-q15-solucao-circuito.svg',
    'p2-q17-solucao-geometria-a.svg',
    'p2-q17-solucao-geometria-b.svg',
    'p2-q18-solucao-grafico.svg',
]
for s in svgs:
    p = ROOT / 'public/images/unifesp2023' / s
    assert p.exists() and p.stat().st_size > 0, f'SVG ausente: {s}'
    content = p.read_text(encoding='utf-8')
    assert '<svg' in content and '</svg>' in content, f'SVG malformado: {s}'
    assert '<path' in content, f'SVG sem elementos vetoriais: {s}'
print(f'2. Imagens vetoriais (SVG) em public/images/unifesp2023: TODAS PRESENTES ({len(svgs)}/{len(svgs)})')

# 3. Verificação do Gabarito Oficial e Sublinhados de Prova 1
p1_ans_file = ROOT / 'src/data/unifesp2023-objetivas.js'
code_obj = p1_ans_file.read_text(encoding='utf-8')

gabarito_oficial_p1 = {
    1: 'C', 2: 'A', 3: 'C', 4: 'E', 5: 'D', 6: 'B', 7: 'D', 8: 'C', 9: 'A', 10: 'E',
    11: 'C', 12: 'D', 13: 'A', 14: 'B', 15: 'E', 16: 'C', 17: 'D', 18: 'A', 19: 'B', 20: 'A',
    21: 'C', 22: 'E', 23: 'E', 24: 'C', 25: 'D',
}

with pymupdf.open(ROOT / docs[1]) as pdf_gabarito:
    texto_gabarito = ''.join(page.get_text() for page in pdf_gabarito)
gabarito_pdf = {int(n): answer for n, answer in re.findall(r'(?m)^\s*(\d{1,2})\s*-\s*([A-E])\s*$', texto_gabarito)}
assert gabarito_pdf == gabarito_oficial_p1, 'Gabarito de referência diverge do PDF oficial'

for qnum, expected_ans in gabarito_oficial_p1.items():
    m = re.search(rf'n:\s*{qnum},.*?answer:\s*[\'\"]([A-E])[\'\"]', code_obj, re.DOTALL)
    assert m, f'Questão {qnum} sem answer em unifesp2023-objetivas.js'
    actual_ans = m.group(1)
    assert actual_ans == expected_ans, f'Q{qnum}: esperado {expected_ans}, encontrado {actual_ans}'

# Verificação de sublinhados (<u>...</u>) obrigatórios
underlines_expected = [
    'e <u>mesmo</u> a recebeu',
    'substituto <u>para</u> a razão',
    'em que <u>a</u> apresentei',
    'nos dá <u>a</u> opção',
    'de que <u>a</u> emoção',
    'com <u>a</u> emoção',
    'para reagir <u>a</u> uma ameaça',
    'tudo <u>daria</u> certo',
    'a emoção <u>era</u> um substituto',
    '“<u>construí</u> a hipótese',
    'que <u>apresentavam</u> deficiências',
    'O raciocínio nos <u>dá</u> a opção',
    '“<u>they</u>’re able to stay',
    '“<u>Yet</u>, the most popular method',
    '“an <u>unprecedented</u> loss',
]
for u in underlines_expected:
    assert u in code_obj, f'Sublinhado ausente em unifesp2023-objetivas.js: {u}'
print(f'3. Gabarito Oficial (25/25) e Sublinhados <u>...</u> ({len(underlines_expected)}/{len(underlines_expected)}) do 1º Dia: 100% CONFERIDOS')

# 4. Verificação das Discursivas
code_disc = (ROOT / 'src/data/unifesp2023-discursivas.js').read_text(encoding='utf-8')

verbatim_checks = {
    1: ['proteínas colinérgicas encontradas na membrana plasmática de um dendrito neuronal do sistema nervoso parassimpático humano', 'Receptores de neurotransmissores'],
    2: ['Avicennia sp', 'Rhizobium'],
    3: ['NES/T', 'Gráfico 2'],
    4: ['Leonardo da Vinci não se casou nem teve filhos', '3/64'],
    5: ['zebrafish (Danio rerio)', 'Quarto nível trófico', '100%'],
    6: ['Sergio Pilling', 'p2-q06-solucao-lewis.svg', 'p2-q06-solucao-estados.svg'],
    7: ['monoetilenoglicol', 'p2-q07-solucao-formula-meg.svg', '488,9'],
    8: ['resolução 430/2011', '3,65'],
    9: ['célula eletroquímica ilustrada a seguir', '0,46'],
    10: ['p2-q10-curcuma.svg', 'p2-q10-estruturas-curcumina.svg', 'fenol', 'éter'],
    11: ['encosta de um morro', '140', r'3\\text{ s}'],
    12: ['gás monoatômico ideal', r'0,25\\text{ mol}', r'6 \\times 10^5'],
    13: ['peixe parado dentro do tanque', r'1\\,400\\text{ N}', r'30^\\circ', r'2,7\\text{ m}', 'p2-q13-solucao-forcas.svg', 'p2-q13-solucao-espelho.svg'],
    14: ['figuras 1 e 2 mostram o banhista', r'1,5\\text{ m/s}'],
    15: ['três lâmpadas idênticas L2', r'300\\text{ W}', r'40\\ \\Omega', 'p2-q15-solucao-circuito.svg'],
    16: ['estime a idade de João hoje', r'92,5\\text{ mg}', r'58\\text{ anos}'],
    17: [r'\\overline{RS}', r'\\overline{PS}', r'\\overline{PR}', r'\\overline{QS}', r'37,5\\text{ mm}', '769', 'p2-q17-solucao-geometria-a.svg', 'p2-q17-solucao-geometria-b.svg'],
    18: [r'\\frac{\\pi x}{2}', r'4\\text{ m}', 'p2-q18-solucao-grafico.svg'],
    19: [r'10\\,944 = 0'],
    20: [r'500\\%'],
}

for qnum in range(1, 21):
    m_js = re.search(rf'n:\s*{qnum},.*?(?=n:\s*{qnum+1},|$)', code_disc, re.DOTALL)
    assert m_js, f'Questão discursiva {qnum} ausente no JS'
    chunk = m_js.group(0)

    assert "id: 'a'" in chunk and "id: 'b'" in chunk, f'Q{qnum} sem itens a e b'
    assert 'expected:' in chunk, f'Q{qnum} sem gabarito oficial esperado'
    assert 'detailed:' in chunk, f'Q{qnum} sem resolução detalhada'
    assert 'Resolução comentada Elite Campinas' in chunk, f'Q{qnum} sem citação da fonte Elite Campinas'
    assert 'criteria:' in chunk, f'Q{qnum} sem critérios de pontuação'
    for kw in verbatim_checks.get(qnum, []):
        assert kw in chunk, f'Q{qnum}: termo obrigatório ausente: {kw}'

# Importa os objetos reais: cada um dos 40 itens deve ter os dois gabaritos.
subprocess.run(['node', '--input-type=module', '-e', r'''
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { unifesp2023Questions as questions } from './src/data/unifesp2023.js';
assert.equal(questions.length, 46);
let parts = 0;
const files = new Set();
for (const q of questions) {
  for (const image of [...(q.images || []), ...(q.afterImages || [])]) files.add(image.src);
  if (q.kind !== 'discursive') continue;
  assert.deepEqual(q.parts.map(p => p.id), ['a', 'b']);
  for (const part of q.parts) {
    parts++;
    assert(part.expected?.trim(), q.id + part.id + ': expected');
    assert(part.detailed?.trim(), q.id + part.id + ': detailed');
    assert.equal(part.detailedSource, 'Resolução comentada Elite Campinas');
    assert(part.criteria?.length);
    assert.equal(part.criteria.reduce((n, c) => n + c.points, 0), 2);
    assert.equal(part.maxScore, 2);
    for (const image of part.expectedImages || []) files.add(image.src);
    if (part.responseTemplate) files.add(part.responseTemplate.src);
  }
}
assert.equal(parts, 40);
assert.equal(files.size, 27);
for (const url of files) assert(fs.existsSync('public' + url.split('?')[0]), url);
'''], cwd=ROOT, check=True)
print('4. Questões Discursivas (01 a 20): CAMPOS DE DUPLO GABARITO E TRECHOS TEXTUAIS ESPERADOS PRESENTES')

# 5. Redação
code_red = (ROOT / 'src/data/unifesp2023-redacao.js').read_text(encoding='utf-8')
assert 'É possível conciliar mérito e bem comum?' in code_red
assert 'Critério A (Tema)' in code_red
assert 'Critério B (Gênero e Coerência)' in code_red
assert 'Critério C (Modalidade e Coesão)' in code_red
print('5. Redação: tema e campos esperados da grade oficial presentes')

from verificar_recortes_unifesp2023 import verificar
verificar()
print('\n>>> VERIFICAÇÕES AUTOMATIZADAS UNIFESP 2023 CONCLUÍDAS. <<<')
