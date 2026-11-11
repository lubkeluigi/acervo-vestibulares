# Acervo de Questões de Medicina & Sofia IA 🎓

Plataforma completa de questões comentadas, resoluções pedagógicas e fichas de estudo para os principais vestibulares paulistas e nacionais de Medicina (**FAMERP, FAMEMA, FUVEST, UNICAMP, UNESP, UEA, UERJ e ENEM**).

## 🚀 Funcionalidades

- **Acervo Extensivo:** Mais de 2.990 questões catalogadas por exame, disciplina, matéria e ano.
- **Sofia IA Integrada:** Tutora virtual especializada em vestibulares com dicas sem spoiler, análise de distratores, resoluções comentadas passo a passo e tabelas conceituais formatadas.
- **Suporte Multiprovedores de IA:** Conexão nativa e gratuita com **Groq Cloud** (Llama 3.1 / 3.3 com latência recorde de ~300ms), **Google Gemini** (Gemini 2.0 / 1.5 Flash), **OpenRouter** ou **Motor Local Autônomo**.
- **Aba Listas:** Coletâneas temáticas de alta incidência, incluindo lista completa de questões de *El Niño e La Niña*.
- **Fichas de Estudo Ilustradas:** Resumos de alta frequência para Biologia, Física, Química e Geografia.
- **Fórmulas Matemáticas & Químicas:** Renderização de fórmulas em alta definição com KaTeX.
- **Interface Responsiva & Redimensionável:** Pop-up flutuante com modo compacto, modo amplo de tela cheia e redimensionamento livre por arrasto.

## 📦 Tecnologias

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
- [KaTeX](https://katex.org/)
- [Marked](https://marked.js.org/)

## 🛠️ Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Pré-visualizar build
npm run preview
```

## 🤖 Handoff para IA & Manual Operacional de Subida de Provas

Se você for um agente de IA (Claude Code, Cursor, Windsurf, Codex, Copilot, Antigravity, etc.) assumindo a manutenção deste repositório, **leia imediatamente**:

- **[`MANUAL_OPERACIONAL_IA.md`](./MANUAL_OPERACIONAL_IA.md)**: Blueprint técnico completo com todas as regras de transcrição *verbatim*, extração vetorial de SVGs (`scripts/svg_clip.py`), detecção automática de sublinhados `<u>...</u>` (`scripts/inspecionar_pdf.py`), duplo gabarito nas discursivas (Critérios Oficiais VUNESP + Resolução Comentada Elite Campinas via `scripts/baixar_elite_campinas.py`), esquemas de dados e checklist de auditoria.
- **[`AGENTS.md`](./AGENTS.md)** / **[`CLAUDE.md`](./CLAUDE.md)** / **[`.cursorrules`](./.cursorrules)**: Arquivos de instruções automáticas na raiz do projeto.
- **[`scripts/catalogo-fontes-drive.json`](./scripts/catalogo-fontes-drive.json)**: Catálogo completo com os IDs do Google Drive de todas as pastas e provas do acervo.

