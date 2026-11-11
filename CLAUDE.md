# CLAUDE.md — Guia Operacional do Projeto Acervo de Vestibulares

Leia imediatamente [`MANUAL_OPERACIONAL_IA.md`](./MANUAL_OPERACIONAL_IA.md) e [`AGENTS.md`](./AGENTS.md) antes de realizar qualquer alteração.

## Comandos Principais
- `npm run dev`: inicia o servidor Vite de desenvolvimento.
- `npm run build`: compila a aplicação para produção em `dist/`.
- `python3 scripts/inspecionar_pdf.py <caminho-do-pdf>`: inspeciona páginas do PDF, coordenadas `(x0, y0, x1, y1)` de imagens/vetores e detecta automaticamente todas as palavras sublinhadas (`<u>...</u>`).
- `python3 scripts/baixar_elite_campinas.py <ano> <pasta-destino>`: baixa as páginas HTML de resolução comentada do Elite Campinas.
- `python3 scripts/exemplos/unifesp-2023/verificar_unifesp2023.py`: executa a auditoria completa de documentos, SVGs, gabarito oficial, sublinhados e duplo gabarito (use como template para novos anos).

## Regras Críticas
1. **PDFs de Provas Futuras**: Os PDFs oficiais da UNIFESP (2021 a 2026) já estão disponíveis em `public/documentos/unifesp<ano>/`, e o mapeamento completo do Google Drive está em `scripts/catalogo-fontes-drive.json`.
2. **SVGs Vetoriais**: Use sempre `scripts/svg_clip.py` (`pdf_clip_svg`). Nunca use PNG/JPG rasterizado de captura de página. Sempre incremente `VERSION` em `src/data/unifesp-helpers.js` ao modificar SVGs.
3. **Sublinhados (`<u>...</u>`)**: Verifique todos os traços horizontais finos do PDF com `scripts/inspecionar_pdf.py` e aplique `<u>...</u>` no enunciado e nas alternativas.
4. **Duplo Gabarito Discursivo**: Toda questão discursiva exige `expected` + `criteria` (Critério Oficial VUNESP conciso) + `expectedImages` (SVGs do caderno de critérios) E `detailed` + `detailedSource: 'Resolução comentada Elite Campinas'`.
