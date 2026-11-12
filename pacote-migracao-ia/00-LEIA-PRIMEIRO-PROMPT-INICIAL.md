# 📦 Pacote Completo de Migração para Outra IA — Acervo de Vestibulares de Medicina

Esta pasta reúne **todos os manuais, regras de negócio, prompts, catálogos do Google Drive, scripts de extração vetorial (SVG), detectores de sublinhados e códigos-modelo** necessários para que qualquer outra IA continue o projeto exatamente no seu padrão.

---

## 📂 O que há dentro desta pasta (`pacote-migracao-ia/`)

1. **`00-LEIA-PRIMEIRO-PROMPT-INICIAL.md`** *(este arquivo)*:
   - Como enviar os arquivos para a nova IA e o **Prompt Inicial pronto para copiar e colar**.
2. **`01-MANUAL-OPERACIONAL-COMPLETO.md`**:
   - Blueprint técnico detalhado: arquitetura do repositório, fluxo de extração de SVGs (`svg_clip.py`), separação dos 3 tipos de imagem (`visuals`, `responseTemplate` e `expectedImages`), detecção automática de sublinhados (`<u>...</u>`), Duplo Gabarito (Critérios Oficiais VUNESP + Resolução Comentada Elite Campinas), formatação KaTeX, regras das listas públicas/impressão A4 em 2 colunas e Checklist de 10 pontos.
3. **`02-REGRAS-INVIOLAVEIS-DO-AGENTE.md`**:
   - Resumo executivo das regras inegociáveis (também salvo na raiz do projeto como `AGENTS.md`, `CLAUDE.md` e `.cursorrules` para leitura automática).
4. **`03-TAXONOMIA-E-FILTROS.md`**:
   - Explicação da árvore taxonômica de 3 níveis (`Matéria -> Conteúdo -> Subtema -> Detail`) usada no Banco de Questões e no Fazedor de Listas.
5. **`04-CATALOGO-FONTES-GOOGLE-DRIVE.json`**:
   - Mapeamento completo com todos os IDs das pastas e arquivos PDF no Google Drive (`Banco de questões/`, `Públicas`, `Privadas`, `UNIFESP 2021 a 2026`, `FAMERP`, `FAMEMA`, `FUVEST`, `UNICAMP`, `UNESP`, etc.) e URLs do Elite Campinas.
6. **`scripts-ferramentas/`**:
   - `svg_clip.py`: Motor de recorte vetorial PDF $\to$ SVG puro com conversão automática de imagens CMYK para RGB.
   - `inspecionar_pdf.py`: Script que analisa qualquer PDF de prova e lista automaticamente as coordenadas `(x0, y0, x1, y1)` de todas as figuras e **todas as palavras sublinhadas (`<u>...</u>`)** da prova.
   - `baixar_elite_campinas.py`: Script que baixa automaticamente os gabaritos comentados do Elite Campinas.
7. **`exemplos-codigo-padrao/`**:
   - `unifesp-helpers.js`: Helper fábrica das questões (`q`, `d`, `essay`, `img`, `VERSION`).
   - `taxonomy.js`: Regras completas de classificação automática por disciplina/tema/subtema.
   - `unifesp2023-objetivas.js`: Modelo real perfeito das 25 questões objetivas do 1º Dia (com `<u>...</u>`, `why` e `wrong`).
   - `unifesp2023-discursivas.js`: Modelo real perfeito das 20 questões discursivas do 2º Dia (com **Duplo Gabarito**: VUNESP Oficial + Elite Campinas, além de `expectedImages` vetorizados).
   - `unifesp2023-redacao.js`: Modelo real perfeito da proposta de redação + grade oficial de critérios.
   - `extrair-vetores-unifesp2023.py`: Modelo de script de extração das figuras em SVG.
   - `verificar_unifesp2023.py`: Modelo de script de auditoria e verificação pós-subida.

---

## 🚀 Passo a Passo: Como Usar na Nova IA

### Caso 1: A nova IA tem acesso ao GitHub (Claude Code, Cursor, Windsurf, Antigravity, Codex, Devin)
1. Conecte o repositório **`https://github.com/lubkeluigi/acervo-vestibulares.git`** na nova IA.
2. Todos os arquivos desta pasta (e também os PDFs oficiais da **UNIFESP 2024, 2025 e 2026** em `public/documentos/unifesp2024`, `unifesp2025` e `unifesp2026`) **já estão salvos dentro do repositório**.
3. Basta colar o **Prompt Inicial** abaixo!

### Caso 2: Você vai enviar arquivos manualmente pelo chat da IA (ChatGPT, Claude Web, Gemini, etc.)
1. Baixe o arquivo **`pacote-instrucoes-e-scripts-ia.zip`** (disponível nesta pasta ou em `public/download-ia/`).
2. Anexe os arquivos desta pasta no chat da IA (ou o `.zip` diretamente) junto com o **Prompt Inicial** abaixo.

---

## 📋 Prompt Inicial (Copie e Cole na Outra IA)

```markdown
Você está assumindo a manutenção e expansão do projeto "Acervo de Questões de Vestibulares de Medicina" (React + Vite).
Antes de executar qualquer tarefa, leia integralmente todos os arquivos da pasta `pacote-migracao-ia/` (especialmente `01-MANUAL-OPERACIONAL-COMPLETO.md`, `02-REGRAS-INVIOLAVEIS-DO-AGENTE.md` e `04-CATALOGO-FONTES-GOOGLE-DRIVE.json`), bem como os exemplos de código em `pacote-migracao-ia/exemplos-codigo-padrao/`.

Siga rigorosamente o meu padrão em todas as provas que eu pedir para subir ou verificar:

1. TRANSCRIÇÃO 100% VERBATIM E SUBLINHADOS (`<u>...</u>`):
   - Os PDFs oficiais já estão em `public/documentos/<exame><ano>/` (e mapeados em `04-CATALOGO-FONTES-GOOGLE-DRIVE.json`).
   - Nunca resuma, parafraseie ou mude a ordem de enunciados, textos de apoio, comandos (`a)` e `b)`) ou alternativas (`A` a `E`).
   - Sempre rode `python3 scripts/inspecionar_pdf.py <pdf>` para detectar automaticamente todos os traços horizontais finos do PDF e envolver 100% das palavras/expressões sublinhadas em `<u>...</u>` (tanto nos enunciados quanto nas alternativas, inclusive palavras de 1 letra como `<u>a</u>`).

2. IMAGENS 100% VETORIZADAS EM SVG (`scripts/svg_clip.py`):
   - Nunca use prints borrados em PNG/JPG. Recorte todas as figuras, gráficos, tirinhas, estruturas químicas e esquemas diretamente do PDF em SVG vetorial usando `scripts/svg_clip.py` (`pdf_clip_svg`) e salve em `public/images/<exame><ano>/`.
   - Confira sempre as coordenadas `(x0, y0, x1, y1)` com margem de 5 a 10 pt para não cortar títulos (`Gráfico 1, 2, 3, 4`), eixos, legendas ou fontes.
   - Separe as imagens conforme sua função:
     * `visuals` / `afterVisuals`: figuras do enunciado (se houver texto entre duas figuras, gere 2 SVGs separados; se a fala já estiver dentro do cartum/tirinha, não duplique no texto).
     * `responseTemplate`: figuras em branco (planos cartesianos, malhas, esquemas para preencher) que pertencem ao quadro de resposta do aluno.
     * `expectedImages`: diagramas, estruturas de Lewis, fórmulas estruturais, circuitos e gráficos extraídos do PDF de Critérios de Correção Oficial da banca.
   - Sempre atualize a constante `VERSION` em `src/data/<exame>-helpers.js` ao criar ou editar SVGs.

3. DUPLO GABARITO NAS QUESTÕES DISCURSIVAS (PADRÃO OURO):
   - Em todas as questões discursivas, cada subitem (`a` e `b`) deve ter obrigatoriamente os dois gabaritos:
     * `expected` + `criteria` + `expectedImages`: Gabarito Oficial conciso nos moldes exatos dos Critérios de Correção da banca (ex.: VUNESP), informando quanto vale cada etapa (`1 ponto`), o que "Foram aceitas" e o que "Não foram aceitas".
     * `detailed` + `detailedSource`: Resolução comentada passo a passo e didática para estudo/treino, extraída do Elite Campinas (`scripts/baixar_elite_campinas.py`), citando sempre `detailedSource: 'Resolução comentada Elite Campinas'`.

4. NÃO QUEBRAR RECURSOS DO SITE:
   - Mantenha funcionando: salvamento público de listas personalizadas (`/api/lists` e `public/custom-lists.json`), botão cumulativo "Selecionar todas as filtradas" (`ListBuilder.jsx`) e impressão de listas em PDF em 2 colunas simétricas A4 retrato (`PrintList.jsx` e `@page { size: A4 portrait; margin: 0; }`).

5. PROTOCOLO DE VERIFICAÇÃO PÓS-SUBIDA:
   - Ao terminar qualquer prova, crie e rode o script `verificar_<exame><ano>.py` (seguindo o modelo `exemplos-codigo-padrao/verificar_unifesp2023.py`), rode `npm run build` e faça `git commit` e `git push origin main`.

Confirme que leu todas as instruções da pasta `pacote-migracao-ia/` e me diga que está pronto para continuar a subida das provas (começando pela UNIFESP 2024, cujos PDFs já estão em `public/documentos/unifesp2024/`).
```
