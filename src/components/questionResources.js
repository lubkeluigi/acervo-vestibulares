export function hasImageCollection(value) {
  if (!Array.isArray(value)) return false;
  return value.some((image) => {
    if (typeof image === 'string') return Boolean(image.trim());
    return Boolean(image && typeof image === 'object' && String(image.src || '').trim());
  });
}

export function hasAlternativeImageCollection(value) {
  if (Array.isArray(value)) return value.some((group) => hasImageCollection(group));
  if (value && typeof value === 'object') return Object.values(value).some((group) => hasImageCollection(group));
  return false;
}

export function getQuestionVisualLabel(question) {
  if (question.diagram || question.afterDiagram) return 'Com diagrama';
  if ((question.tables?.length || 0) + (question.afterTables?.length || 0) > 0) return 'Com tabela';
  if (
    hasImageCollection(question.images)
    || hasImageCollection(question.afterImages)
    || hasAlternativeImageCollection(question.alternativeImages)
  ) return 'Com imagens';
  return null;
}
