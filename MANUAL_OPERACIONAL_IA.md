# Blueprint Técnico & Manual Operacional para IA — Acervo de Vestibulares de Medicina

Este documento contém **100% das especificações técnicas, regras de negócio, estrutura de código, esquemas de dados, scripts de extração vetorial (`scripts/`) e checklists de auditoria** do projeto **Acervo de Vestibulares de Medicina**.

Qualquer IA de programação (Claude Code, Cursor, Windsurf, OpenAI Codex, GitHub Copilot, Antigravity, Devin, etc.) que abrir este repositório ou receber este documento deve seguir **rigorosamente** todas as diretrizes abaixo.

---

## 1. Prompt Pronto para Copiar e Colar na Outra IA

```markdown
Você vai assumir a manutenção e expansão do projeto "Acervo de Questões de Vestibulares de Medicina" (React + Vite), disponível neste repositório.
Antes de iniciar qualquer tarefa, leia integralmente o arquivo `MANUAL_OPERACIONAL_IA.md` e `scripts/catalogo-fontes-drive.json` na raiz do projeto.

Siga rigorosamente o estilo de trabalho e o protocolo abaixo em todas as provas que eu pedir para subir ou verificar:

1. FONTES OFICIAIS E DUPLO GABARITO:
   - Cadernos de prova, gabaritos oficiais e critérios de correção estão mapeados em `scripts/catalogo-fontes-drive.json` (e os PDFs das próximas provas da UNIFESP já estão pré-salvos em `public/documentos/unifesp<ano>/`).
   - Sempre mantenha os PDFs oficiais em `public/documentos/<exame><ano>/`.
   - Para questões OBJETIVAS: transcreva 100% verbatim o texto e alternativas do PDF, mantenha a resposta oficial da banca (`answer: 'A'..'E'`), escreva uma justificativa completa para a alternativa correta (`why`) e explique individualmente o erro de cada uma das 4 alternativas incorretas (`wrong: { 0: '...', ... }`).
   - Para questões DISCURSIVAS: implemente obrigatoriamente o **Duplo Gabarito** em cada subitem (`a` e `b`):
     a) `expected` + `criteria`: Resposta esperada concisa e direta nos moldes exatos dos Critérios de Correção da própria banca (ex.: VUNESP), detalhando quanto vale cada passo (`1 ponto`), o que "Foram aceitas" e o que "Não foram aceitas".
     b) `detailed` + `detailedSource`: Resolução comentada didática, teórica e passo a passo para treino, extraída do site do Elite Campinas (use `scripts/baixar_elite_campinas.py` ou `https://sisq.elitecampinas.com.br/GabaritoVestibulares/ListarVestibulares?sem_layout=false`), citando sempre `detailedSource: 'Resolução comentada Elite Campinas'`.

2. IMAGENS 100% VETORIZADAS (SVG) E TRÊS PAPÉIS VISUAIS:
   - Nunca use recortes rasterizados borrados (PNG/JPG de print de página). Extraia todas as figuras, gráficos, tirinhas, tabelas visuais, esquemas biológicos, estruturas químicas e circuitos como **SVG vetorial puro** a partir do PDF usando `scripts/svg_clip.py` (`pdf_clip_svg` com PyMuPDF `text_as_path=True` e conversão automática CMYK -> RGB) e salve em `public/images/<exame><ano>/`.
   - Rode `python3 scripts/inspecionar_pdf.py <caminho-do-pdf>` para inspecionar coordenadas (`get_drawings()`, `get_images()`, `get_text("blocks")`) na página do PDF para que nenhum eixo, título de gráfico (ex.: Gráfico 1, 2, 3, 4), legenda ou fonte seja cortado nas bordas.
   - Separe as imagens em 3 categorias conforme a função:
     a) `visuals` / `afterVisuals`: Imagens que pertencem ao enunciado da questão. Se houver texto entre duas imagens no PDF (ex.: foto da cúrcuma + estruturas químicas), gere 2 SVGs separados. Se o texto/fala já está desenhado dentro do SVG (ex.: tirinha/cartum), NÃO duplique esse texto no enunciado.
     b) `responseTemplate`: Quando a questão fornece um gráfico em branco, malha quadriculada, plano cartesiano ou esquema no quadro de resposta para o aluno desenhar/preencher, recorte o molde EM BRANCO e coloque em `part.responseTemplate`. Ele será exibido dentro do box de resposta na tela e também nas listas impressas em PDF. Nunca coloque a imagem já respondida no enunciado.
     c) `expectedImages`: Quando o caderno de critérios de correção da banca traz desenhos oficiais de resolução (estruturas de Lewis, fórmulas estruturais, diagrama de forças, óptica, geometria, gráficos), recorte-os do PDF de critérios e coloque em `part.expectedImages`.
   - Sempre que atualizar ou substituir um SVG existente, atualize a constante `VERSION` no helper (ex.: `src/data/unifesp-helpers.js`) para invalidar o cache do navegador.

3. SUBLINHADOS, TIPOGRAFIA, TABELAS E FÓRMULAS (KaTeX):
   - Rode `python3 scripts/inspecionar_pdf.py <caminho-do-pdf>` para detectar automaticamente todos os retângulos finos horizontais (`page.get_drawings()`) do PDF original e identificar TODAS as palavras, verbos, pronomes ou expressões sublinhadas, envolvendo-as em `<u>...</u>` tanto no enunciado quanto nas alternativas.
   - Preserve itálicos em nomes científicos (*Avicennia sp.*, *Danio rerio*) e estrangeirismos.
   - Use KaTeX válido (`$...$` inline e `$$...$$` em bloco): barras superiores em segmentos geométricos (`\overline{AB}`, `\overline{RS}`), conjuntos (`\mathbb{R}`), ângulos (`30^\circ`), setas químicas (`\longrightarrow`, `\rightleftharpoons`), íons (`\text{Ba}^{2+}`, `\text{SO}_4^{2-}`) e unidades com espaço (`140\text{ J}`, `40\ \Omega`). Cuidado com o escape de barras (`\\text`, `\\frac`, `\\overline`) em geradores Python.
   - Estruture tabelas usando a propriedade `tables` ou formatação limpa, nunca como texto quebrado.

4. PROTOCOLO DE VERIFICAÇÃO PÓS-SUBIDA:
   - Após criar os arquivos da prova, execute sempre um script de auditoria nos moldes de `scripts/exemplos/unifesp-2023/verificar_unifesp2023.py` conferindo: presença dos PDFs em `public/documentos/`, integridade dos SVGs em `public/images/`, gabarito oficial de todas as objetivas, presença de todos os `<u>...</u>`, texto verbatim de todas as discursivas, duplo gabarito + fonte Elite Campinas e proposta de redação.
   - Rode `npm run build` para garantir zero erros de compilação e faça `git commit` e `git push origin main`.
```

---

## 2. Arquitetura do Repositório e Ferramentas Versionadas

### Estrutura de Pastas Principal
```text
/
├── MANUAL_OPERACIONAL_IA.md         # Este manual técnico completo para handoff entre IAs
├── AGENTS.md                        # Instruções automáticas para Codex / Cursor / Windsurf / Copilot / Antigravity
├── CLAUDE.md                        # Instruções automáticas para Claude Code
├── .cursorrules                     # Regras automáticas para Cursor IDE
├── api/
│   └── lists.js                     # Serverless function (Vercel + local) para salvar/listar listas públicas
├── scripts/                         # Utilitários Python e catálogos versionados no Git para a IA usar
│   ├── svg_clip.py                  # Motor central de recorte vetorial PDF -> SVG (PyMuPDF + PIL CMYK->RGB)
│   ├── inspecionar_pdf.py           # Detector automático de bboxes de imagens, vetores e sublinhados <u>...</u>
│   ├── baixar_elite_campinas.py     # Downloader automático das resoluções comentadas do Elite Campinas
│   ├── catalogo-fontes-drive.json   # Catálogo completo com IDs do Google Drive de todas as pastas e PDFs
│   ├── TAXONOMIA.md                 # Documentação da taxonomia de 3 níveis (Matéria -> Conteúdo -> Subtema)
│   └── exemplos/
│       └── unifesp-2023/            # Scripts modelo (extrair-vetores, verificar) da UNIFESP 2023
├── public/
│   ├── custom-lists.json            # Banco JSON persistente das listas personalizadas criadas pelos usuários
│   ├── documentos/                  # PDFs oficiais servidos publicamente no site (UNIFESP 2021 a 2026, etc.)
│   │   ├── unifesp2021/
│   │   ├── unifesp2022/
│   │   ├── unifesp2023/
│   │   ├── unifesp2024/
│   │   ├── unifesp2025/
│   │   └── unifesp2026/
│   └── images/                      # SVGs vetoriais servidos publicamente
│       ├── unifesp2021/
│       ├── unifesp2022/
│       └── unifesp2023/
├── src/
│   ├── App.jsx                      # Estado global, navegação entre Banco, Resolver, Listas, Fichas e Impressão
│   ├── components/
│   │   ├── QuestionContent.jsx      # Renderizador de enunciados, imagens, tabelas e alternativas
│   │   ├── MathText.jsx             # Parser de LaTeX/KaTeX ($...$, $$...$$) e tags HTML seguras (<u>, <em>, <strong>)
│   │   ├── OpenResponse.jsx         # Editor e revisor de discursivas/redação (suporta responseTemplate, expectedImages, detailed)
│   │   ├── ListBuilder.jsx          # Construtor de listas personalizadas com botão cumulativo "Selecionar todas"
│   │   ├── ListsView.jsx            # Galeria de listas curadas e listas públicas da comunidade
│   │   └── PrintList.jsx            # Motor de paginação A4 em 2 colunas para impressão/PDF
│   ├── data/
│   │   ├── questions.js             # Agregador central de todas as provas + exportação com withTaxonomy
│   │   ├── taxonomy.js              # Classificador hierárquico canônico (Matéria -> Tema -> Subtema)
│   │   ├── customListsStore.js      # Cliente de sincronização de listas personalizadas (API + localStorage)
│   │   ├── unifesp-helpers.js       # Fábrica padronizada (q, d, essay, img, tex) para provas da UNIFESP
│   │   ├── famerp-helpers.js        # Fábrica padronizada para provas da FAMERP
│   │   ├── famema-helpers.js        # Fábrica padronizada para provas da FAMEMA
│   │   └── unifesp2023*.js          # Módulos de dados de cada prova
│   └── styles.css                   # Estilos globais e regras @media print A4 portrait
├── server.mjs                       # Servidor HTTP local (porta 4177) servindo dist/ + rota /api/lists
└── package.json                     # Scripts: npm run dev, npm run build, npm run preview
```

---

## 3. Como Coletar as Fontes (Google Drive + Elite Campinas)

### 3.1. Catálogo de Provas e Google Drive (`scripts/catalogo-fontes-drive.json`)
- **PDFs já incluídos no repositório**:
  - Os 5 PDFs oficiais de **UNIFESP 2021, 2022, 2023, 2024, 2025 e 2026** já estão salvos diretamente em `public/documentos/unifesp<ANO>/`!
  - As páginas HTML do **Elite Campinas** para UNIFESP 2024 e 2025 também já estão salvas em `scripts/fontes-unifesp/`!
- **Para qualquer outra prova no Google Drive**:
  - Consulte `scripts/catalogo-fontes-drive.json`, que contém todos os IDs das pastas (`Públicas`, `Privadas`, `Unifesp`, `Famerp`, `Famema`, `Fuvest`, `Unesp`, `Unicamp`, etc.).
  - Qualquer arquivo do Google Drive com `<FILE_ID>` pode ser baixado via CLI (`gdrive readonly download <FILE_ID> --out destino.pdf`) ou diretamente via HTTP/curl usando:
    ```bash
    curl -sL "https://drive.google.com/uc?export=download&id=<FILE_ID>" -o destino.pdf
    ```
- **Nomes obrigatórios em `public/documentos/unifesp<ANO>/`**:
  Os 5 arquivos devem ter estes nomes exatos para que `src/data/unifesp-helpers.js` gere os links funcionais:
  1. `prova1-linguagens-redacao-<ANO>.pdf`
  2. `prova1-gabarito-<ANO>.pdf`
  3. `prova1-criterios-redacao-<ANO>.pdf`
  4. `prova2-conhecimentos-especificos-<ANO>.pdf`
  5. `prova2-criterios-correcao-<ANO>.pdf`

### 3.2. Portal Elite Campinas (Gabarito Detalhado)
- **Script pronto**:
  ```bash
  python3 scripts/baixar_elite_campinas.py 2024 provas/unifesp-2024/elite
  ```
- **URL Índice Geral**: `https://sisq.elitecampinas.com.br/GabaritoVestibulares/ListarVestibulares?sem_layout=false#unifesp`

---

## 4. Pipeline de Extração Vetorial SVG (`scripts/svg_clip.py`)

Todas as figuras são extraídas diretamente dos PDFs originais usando `scripts/svg_clip.py`:

```python
import sys
from pathlib import Path
import pymupdf

sys.path.insert(0, str(Path('scripts').resolve()))
from svg_clip import pdf_clip_svg

doc2 = pymupdf.open('public/documentos/unifesp2023/prova2-conhecimentos-especificos-2023.pdf')
# coords = (x0, y0, x1, y1) em pontos do PDF (página 595 x 842 pt)
svg, meta = pdf_clip_svg(doc2, page_no=5, coords=(95, 250, 565, 380), alt='Gráficos 1, 2, 3 e 4 de FSH e LH')
```

### Como encontrar as coordenadas exatas `(x0, y0, x1, y1)` e os sublinhados `<u>...</u>`:
Antes de definir os recortes em `extrair-vetores-<exame><ano>.py`, rode o utilitário `scripts/inspecionar_pdf.py`:
```bash
python3 scripts/inspecionar_pdf.py public/documentos/unifesp2024/prova1-linguagens-redacao-2024.pdf --saida-txt /tmp/p1-2024.txt
python3 scripts/inspecionar_pdf.py public/documentos/unifesp2024/prova2-conhecimentos-especificos-2024.pdf --saida-txt /tmp/p2-2024.txt
python3 scripts/inspecionar_pdf.py public/documentos/unifesp2024/prova2-criterios-correcao-2024.pdf --saida-txt /tmp/crit2-2024.txt
```
- O script imprime página por página:
  1. As coordenadas exatas `(x0, y0, x1, y1)` de cada imagem raster;
  2. Todas as palavras sublinhadas (`<u>...</u>`) detectadas pelos traços horizontais finos (`height < 2.5 pt`) da VUNESP;
  3. O envelope de vetores de cada página.
- Adicione sempre **5 a 10 pontos de margem** ao redor do `BBOX` dos vetores e dos rótulos de texto da figura (como títulos de eixos, números de gráficos `1, 2, 3, 4` e legendas de fonte), cuidando para não invadir o texto do enunciado acima ou abaixo.

---

## 5. Esquemas Exatos de Dados (`src/data/`)

### 5.1. Questão Objetiva (`q` em `src/data/unifesp<ANO>-objetivas.js`)
```javascript
import { createUnifesp } from './unifesp-helpers.js';

const { q } = createUnifesp(2023);

export const unifesp2023Objetivas = [
  q({
    n: 10,
    subject: 'Português', // 'Português' | 'Inglês' | 'Biologia' | 'Química' | 'Física' | 'Matemática' | 'História' | 'Geografia' | ...
    content: 'Morfossintaxe: classes de palavras (preposição essencial)',
    difficulty: 'Média', // 'Fácil' | 'Média' | 'Difícil'
    statement: `${TEXTO_APOIO}\n\nO termo sublinhado em “nunca afirmei que a emoção era um substituto <u>para</u> a razão” (1º parágrafo) pertence à mesma classe gramatical do termo sublinhado em:`,
    // Opcional: visuals: [{ file: 'p1-q01-cartum.svg', alt: '...', caption: '...' }],
    // Opcional: afterVisuals: [{ file: '...', alt: '...' }],
    alternatives: [
      '“na época em que <u>a</u> apresentei muita gente estranhou” (1º parágrafo).',
      '“O raciocínio nos dá <u>a</u> opção de pensar com inteligência” (2º parágrafo).',
      '“a hipótese de que <u>a</u> emoção era parte integrante do processo de raciocínio” (1º parágrafo).',
      '“com <u>a</u> emoção desempenhando vários papéis no processo de raciocínio” (3º parágrafo).',
      '“Um esquilo ou um pássaro não pensa para reagir <u>a</u> uma ameaça” (2º parágrafo).',
    ],
    answer: 'E',
    why: 'Explicação completa do gabarito oficial...',
    wrong: {
      0: 'Explicação do erro da alternativa A...',
      1: 'Explicação do erro da alternativa B...',
      2: 'Explicação do erro da alternativa C...',
      3: 'Explicação do erro da alternativa D...',
    },
  }),
];
```

### 5.2. Questão Discursiva com Duplo Gabarito (`d` em `src/data/unifesp<ANO>-discursivas.js`)
```javascript
import { createUnifesp } from './unifesp-helpers.js';

const { d } = createUnifesp(2023);

export const unifesp2023Discursivas = [
  d({
    n: 13,
    subject: 'Física',
    content: 'Estática do Corpo Extenso e Óptica Geométrica: equilíbrio de torques em alavanca, Lei de Snell-Descartes e imagem em espelho plano',
    difficulty: 'Média',
    statement: `Texto integral e verbatim do enunciado...`,
    visuals: [
      { file: 'p2-q13-tanque-tabua.svg', alt: 'Descrição acessível', caption: 'Legenda opcional' },
    ],
    // Opcional: tables: [{ ariaLabel: '...', headerRows: [['Col1', 'Col2']], rows: [['Val1', 'Val2']] }],
    parts: [
      {
        id: 'a',
        prompt: 'Comando verbatim do item a)...',
        // Opcional (quando há figura em branco para preencher no quadro de resposta):
        // responseTemplate: { file: 'p2-q07-eixos-resposta.svg', alt: '...', caption: '...' },
        expected: `Gabarito Oficial Conciso da Banca VUNESP (com pontuação de cada etapa, 'Foram aceitas' e 'Não foram aceitas')...`,
        // Opcional (quando há figura no gabarito oficial da banca):
        expectedImages: [
          { file: 'p2-q13-solucao-forcas.svg', alt: 'Gabarito Oficial: Diagrama de forças sobre a tábua em equilíbrio' },
        ],
        criteria: [
          { points: 1, text: 'Calcula a intensidade da força aplicada pela pessoa sobre a tábua: 700 N.' },
          { points: 1, text: 'Calcula a intensidade da força aplicada pelo pino P sobre a tábua: 1 400 N.' },
        ],
        detailed: `Resolução comentada passo a passo e fundamentação teórica completa para estudo...`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Comando verbatim do item b)...',
        expected: `...`,
        expectedImages: [
          { file: 'p2-q13-solucao-espelho.svg', alt: 'Gabarito Oficial: Formação da imagem E linha' },
        ],
        criteria: [
          { points: 1, text: '...' },
          { points: 1, text: '...' },
        ],
        detailed: `...`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),
];
```

### 5.3. Proposta de Redação (`essay` em `src/data/unifesp<ANO>-redacao.js`)
```javascript
import { createUnifesp } from './unifesp-helpers.js';

const { essay } = createUnifesp(2023);

export const unifesp2023Redacao = essay({
  statement: `REDAÇÃO\n\nTexto 1\n\n...\n\n(Fonte 1)\n\nCom base nos textos apresentados e em seus próprios conhecimentos, escreva um texto dissertativo-argumentativo, empregando a norma-padrão da língua portuguesa, sobre o tema:`,
  blockTypes: [
    'label',
    'subheading', 'prose', 'source',
    // um tipo para cada bloco separado por \n\n em statement
    'command',
  ],
  statementTail: 'Tema da redação em destaque?',
  tailBlockTypes: ['headline'],
  parts: [{
    id: 'T',
    prompt: 'Produza um texto dissertativo-argumentativo em norma-padrão da língua portuguesa sobre o tema: “...”.',
    expected: 'Síntese completa dos encaminhamentos esperados pela banca segundo a grade oficial de correção...',
    criteria: [
      { points: 1, text: 'Critério A (Tema): ...' },
      { points: 1, text: 'Critério B (Gênero e Coerência): ...' },
      { points: 1, text: 'Critério C (Modalidade e Coesão): ...' },
    ],
  }],
  studyNotes: [
    'Critério oficial VUNESP: ...',
    'Repertórios produtivos frequentes: ...',
  ],
});
```

### 5.4. Agregador da Prova (`src/data/unifesp<ANO>.js`) e Registro (`src/data/questions.js`)
- Em `src/data/unifesp<ANO>.js`:
  ```javascript
  import { unifesp2023Objetivas } from './unifesp2023-objetivas.js';
  import { unifesp2023Redacao } from './unifesp2023-redacao.js';
  import { unifesp2023Discursivas } from './unifesp2023-discursivas.js';

  export const unifesp2023Questions = [
    ...unifesp2023Objetivas,
    unifesp2023Redacao,
    ...unifesp2023Discursivas,
  ];
  ```
- Em `src/data/questions.js`:
  Importar `unifesp<ANO>Questions` e adicioná-lo ao array `allQuestions`. Todas as questões passam automaticamente por `withTaxonomy` (`src/data/taxonomy.js`), que preserva o campo `content` original em `question.detail` e mapeia `question.content` (Tema Canônico) e `question.subtopic` (Subtema Canônico) para os filtros cascata.

---

## 6. Funcionalidades Críticas da Plataforma (Não Quebrar!)

1. **Layout de Imagem no Box de Resposta (`responseTemplate`)**:
   - Renderizado em `src/components/OpenResponse.jsx` (na visualização interativa) e em `src/components/PrintList.jsx` (nas listas impressas em PDF, classe `.pdf-response-template-container`).
   - Exibe o SVG vetorial ao lado/acima das linhas de escrita do aluno.
2. **Listas Personalizadas Públicas para Todos**:
   - Criadas em `src/components/ListBuilder.jsx`, gerenciadas por `src/data/customListsStore.js` e persistidas no backend via `POST /api/lists` (`api/lists.js` e `public/custom-lists.json`).
   - Qualquer lista salva no site fica visível para todos os usuários na aba **Listas**.
3. **Botão "Selecionar todas" Cumulativo no Construtor de Listas**:
   - Em `src/components/ListBuilder.jsx`, quando o usuário filtra por Matéria/Tema/Subtema e clica em **"Selecionar todas as filtradas"**, as questões filtradas são **adicionadas** ao `list.selectedIds` existente (`Array.from(new Set([...list.selectedIds, ...filteredIds]))`), **nunca** apagando ou substituindo questões selecionadas em buscas anteriores.
4. **Impressão de Listas em PDF (2 Colunas Simétricas em A4 Retrato)**:
   - Em `src/components/PrintList.jsx` e `src/styles.css`:
     - A regra CSS `@page { size: A4 portrait; margin: 0; }` é mandatória para que o Chrome não gire a folha para paisagem ("deitado").
     - As páginas têm dimensão fixa `794px × 1123px` (proporção A4 a 96 DPI), com área útil `698px × 1020px` dividida em **2 colunas fixas de `333px` separadas por `32px`** (CSS Grid determinístico calculado por medição real de altura no DOM), garantindo que em qualquer navegador/dispositivo (Chrome, Safari, iPad, mobile) as duas colunas saiam perfeitamente alinhadas no PDF.

---

## 7. Checklist Obrigatório de Verificação Final

Antes de dar qualquer prova como concluída, execute todos os itens abaixo:

- [ ] **1. Documentos PDF Públicos**: Os 5 PDFs oficiais existem em `public/documentos/<exame><ano>/` e têm tamanho `> 0`.
- [ ] **2. SVGs Vetoriais**: Todos os SVGs de enunciado (`visuals`), folha de resposta (`responseTemplate`) e gabarito oficial (`expectedImages`) existem em `public/images/<exame><ano>/`, contêm `<path` e não estão cortados nas margens.
- [ ] **3. Cache Busting**: A constante `VERSION` em `src/data/<exame>-helpers.js` foi atualizada após qualquer modificação em SVGs.
- [ ] **4. Gabarito Oficial do 1º Dia**: Todas as questões objetivas batem 100% com o PDF de gabarito oficial da banca.
- [ ] **5. Sublinhados (`<u>...</u>`)**: Todas as palavras/orações sublinhadas no PDF original foram verificadas via `python3 scripts/inspecionar_pdf.py` e estão com `<u>...</u>` no enunciado e nas alternativas.
- [ ] **6. Enunciados e Alternativas *Verbatim***: Nenhuma questão ou alternativa foi parafraseada, resumida ou trocada de ordem em relação ao PDF original.
- [ ] **7. Duplo Gabarito nas Discursivas**: Todas as 20 discursivas possuem itens `a` e `b` com `expected` (critério conciso da banca + pontuações + aceites/recusas), `criteria`, `detailed` (resolução passo a passo) e `detailedSource: 'Resolução comentada Elite Campinas'`.
- [ ] **8. Fórmulas KaTeX e Escape**: Zero barras invertidas engolidas pelo Python/JS (como `\t` em `\text` ou `\f` em `\frac`); segmentos geométricos com `\overline{...}` e unidades formatadas.
- [ ] **9. Taxonomia**: Nenhuma questão da nova prova cai em fallback genérico; todas aparecem corretamente nos filtros de Matéria, Tema e Subtema.
- [ ] **10. Build e Deploy**: Script `verificar_<exame><ano>.py` retorna código `0`, `npm run build` compila sem erros e `git push origin main` foi executado.
