# Taxonomia do acervo

## Objetivo

Os filtros usam três níveis estáveis:

1. **Matéria**: disciplina principal.
2. **Conteúdo**: área ampla e reutilizável, útil para revisão geral.
3. **Subtema**: recorte intermediário, útil para montar listas específicas.

O nome fino que antes ocupava `content` não foi descartado: fica em **`detail`**. Ele continua pesquisável e aparece nos resultados do Fazedor de listas.

Exemplos:

| Matéria | Conteúdo | Subtema | Detail |
|---|---|---|---|
| Biologia | Fisiologia humana | Sistema endócrino | Pâncreas endócrino e mobilização do tecido adiposo |
| Física | Mecânica | Dinâmica | Máquina de Atwood e segunda lei de Newton |
| Matemática | Geometria plana | Áreas de figuras planas | Área do triângulo em sistema de coordenadas |

## Implementação

- `src/data/taxonomy.js` contém as regras por disciplina.
- `src/data/questions.js` aplica `withTaxonomy` a todas as questões na agregação.
- `getContents(subject)` e `getSubtopics(subject, content)` fornecem opções dependentes.
- O banco e o Fazedor de listas filtram pelos três níveis.
- O banco também oferece o filtro independente **Tipo → Objetivas ou Discursivas**; ele não altera a taxonomia.
- Ao trocar matéria ou conteúdo, os níveis dependentes são reiniciados.
- Configurações antigas com valores que não existem mais voltam para “Todos”.

Nos lotes de questões, continue escrevendo o assunto específico em `content`. A agregação o preserva como `detail` e calcula os dois níveis superiores. Não duplique manualmente `content`, `subtopic` e `detail` nos arquivos de cada prova.

## Como ampliar ou corrigir a classificação

1. Acrescente ou refine uma regra em `src/data/taxonomy.js`.
2. Prefira regras baseadas no assunto central, não em qualquer palavra mencionada no enunciado.
3. Coloque regras mais específicas antes das genéricas.
4. Rode a validação estática e a suíte de taxonomia.
5. Revise questões classificadas como “Temas integradores” ou “Temas gerais”; o estado aprovado não possui esses fallbacks.
6. Verifique se os filtros geram listas úteis, e não dezenas de opções com apenas uma questão.
