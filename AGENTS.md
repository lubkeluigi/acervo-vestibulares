# Instruções Obrigatórias do Agente — Acervo de Vestibulares de Medicina

Antes de executar qualquer tarefa de adição, correção ou verificação de provas neste repositório, **leia integralmente o arquivo [`MANUAL_OPERACIONAL_IA.md`](./MANUAL_OPERACIONAL_IA.md)** e consulte o catálogo de fontes em [`scripts/catalogo-fontes-drive.json`](./scripts/catalogo-fontes-drive.json).

## Regras Inegociáveis do Usuário

1. **Idioma**: Responda sempre em **Português**.
2. **Transcrição 100% Verbatim**:
   - Nunca resuma, parafraseie ou altere a ordem de enunciados, textos de apoio, comandos (`a)` e `b)`) ou alternativas (`A` a `E`).
3. **Sublinhados (`<u>...</u>`)**:
   - Na VUNESP/UNIFESP, palavras sublinhadas no PDF são desenhadas como traços vetoriais finos abaixo da palavra.
   - Sempre rode `python3 scripts/inspecionar_pdf.py <pdf>` para listar todos os sublinhados da prova e envolva cada palavra/expressão exatamente em `<u>...</u>` (inclusive palavras de 1 letra como `<u>a</u>` nas alternativas!).
4. **Imagens 100% Vetorizadas em SVG (`scripts/svg_clip.py`)**:
   - Nunca use capturas de tela PNG/JPG borradas. Extraia cada figura, gráfico, tirinha, estrutura química ou esquema biológico em SVG vetorial usando `scripts/svg_clip.py` (`pdf_clip_svg`) e salve em `public/images/<exame><ano>/`.
   - Verifique as coordenadas `(x0, y0, x1, y1)` com margem de 5–10 pt para que nenhum título de gráfico (`Gráfico 1, 2, 3, 4`), eixo, legenda ou fonte seja cortado.
   - Separe as imagens conforme sua função:
     - `visuals` / `afterVisuals`: figuras do enunciado (se houver texto entre duas figuras, gere 2 SVGs separados; se a fala já estiver dentro do cartum/tirinha, não duplique a fala no texto).
     - `responseTemplate`: figuras em branco (planos cartesianos, malhas, esquemas para preencher) que pertencem ao quadro de resposta do aluno.
     - `expectedImages`: diagramas, fórmulas estruturais, estruturas de Lewis, circuitos e gráficos pertencentes ao **Critério de Correção Oficial da Banca**.
   - Sempre atualize a constante `VERSION` em `src/data/<exame>-helpers.js` ao alterar qualquer SVG.
5. **Duplo Gabarito nas Questões Discursivas**:
   - Cada item (`a` e `b`) de questão discursiva deve ter:
     - `expected` + `criteria`: Gabarito oficial conciso nos moldes exatos dos Critérios de Correção da banca (com pontuação de cada passo, *"Foram aceitas"* e *"Não foram aceitas"*).
     - `detailed` + `detailedSource`: Resolução comentada passo a passo e didática para treino, extraída do **Elite Campinas** (`scripts/baixar_elite_campinas.py`), citando `'Resolução comentada Elite Campinas'`.
6. **Não Quebrar Recursos Existentes do Site**:
   - Listas personalizadas públicas (`api/lists.js` e `public/custom-lists.json`).
   - Botão **"Selecionar todas as filtradas"** cumulativo em `src/components/ListBuilder.jsx` (nunca substituir seleções anteriores).
   - Impressão de listas em PDF em 2 colunas A4 retrato (`@page { size: A4 portrait; margin: 0; }` em `src/styles.css` e `src/components/PrintList.jsx`).
7. **Verificação Pós-Subida**:
   - Rode um script de verificação completo (modelo em `scripts/exemplos/unifesp-2023/verificar_unifesp2023.py`) e `npm run build` antes de commitar e fazer `git push origin main`.
