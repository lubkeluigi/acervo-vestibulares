export const tex = String.raw;
const VERSION = '20261111-unifesp2023-2';

export function createUnifesp(year) {
  if (year < 2021 || year > 2026) throw new Error(`Edição UNIFESP inválida: ${year}`);
  const prefix = `unifesp${year}`;
  const originalUrl = `/documentos/${prefix}/prova1-linguagens-redacao-${year}.pdf`;
  const originalUrl2 = `/documentos/${prefix}/prova2-conhecimentos-especificos-${year}.pdf`;
  const officialAnswerUrl1 = `/documentos/${prefix}/prova1-gabarito-${year}.pdf`;
  const officialAnswerUrl2 = `/documentos/${prefix}/prova2-criterios-correcao-${year}.pdf`;
  const officialEssayUrl = `/documentos/${prefix}/prova1-criterios-redacao-${year}.pdf`;

  const shared = {
    exam: 'UNIFESP', year, accessYear: year,
    booklet: `Vestibular ${year}`, institution: 'UNIFESP',
    banca: 'VUNESP', modality: 'medicina-sistema-misto',
    examId: `unifesp-${year}`, originalUrl,
  };

  const img = (file, alt, caption = '') => ({
    src: `/images/${prefix}/${file}?v=${VERSION}`, alt,
    ...(caption ? { caption } : {}),
  });
  const visual = (item) => ({
    ...img(item.file, item.alt, item.caption || ''),
    ...(item.className ? { className: item.className } : {}),
  });
  const resources = (config) => {
    const images = (config.visuals || []).map(visual);
    const afterImages = (config.afterVisuals || []).map(visual);
    const alternativeImages = config.alternativeVisuals?.map((group) => group.map(visual));
    return {
      ...(images.length ? { images } : {}),
      ...(afterImages.length ? { afterImages } : {}),
      ...(alternativeImages ? { alternativeImages } : {}),
    };
  };

  function q(config) {
    const {
      n, subject, content, difficulty = 'Média', alternatives, answer, why, wrong = {},
      visuals, afterVisuals, alternativeVisuals, ...extra
    } = config;
    const correct = 'ABCDE'.indexOf(answer);
    if (correct < 0 || alternatives?.length !== 5) throw new Error(`Configuração inválida: UNIFESP ${year}, 1º Dia, Q${n}`);
    const analyses = alternatives.map((_, index) => {
      if (index === correct) return `${config.annulled ? 'Referência do gabarito.' : 'Correta.'} ${why}`;
      if (!wrong[index]) throw new Error(`Análise ausente: UNIFESP ${year}, 1º Dia, Q${n}, alternativa ${'ABCDE'[index]}`);
      return `Incorreta. ${wrong[index]}`;
    });
    const statement = config.statement || '';
    return {
      ...shared, phase: '1º Dia · Língua Portuguesa e Língua Inglesa', kind: 'objective',
      correctionOrigin: 'official', officialAnswerUrl: officialAnswerUrl1,
      id: `${prefix}-d1-q${String(n).padStart(2, '0')}`,
      number: `Questão ${String(n).padStart(2, '0')}`,
      subject, content, difficulty, statement,
      blockTypes: config.blockTypes || statement.split('\n\n').map(() => 'prose'),
      alternatives, correct, resolution: extra.resolution || [why], analyses,
      ...resources(config), ...extra,
    };
  }

  function d(config) {
    const { n, subject, content, difficulty = 'Média', parts, visuals, afterVisuals, alternativeVisuals, ...extra } = config;
    if (!parts?.length) throw new Error(`Itens ausentes: UNIFESP ${year}, 2º Dia, Q${n}`);
    const statement = config.statement || '';
    return {
      ...shared, phase: '2º Dia · Conhecimentos Específicos', kind: 'discursive',
      correctionOrigin: 'official', officialAnswerUrl: officialAnswerUrl2, originalUrl: originalUrl2,
      id: `${prefix}-d2-q${String(n).padStart(2, '0')}`,
      number: `Questão ${String(n).padStart(2, '0')}`,
      subject, content, difficulty, statement,
      blockTypes: config.blockTypes || statement.split('\n\n').map(() => 'prose'),
      parts: parts.map((part, index) => {
        const expectedImages = part.expectedImages?.map((item) => (item.file ? visual(item) : item));
        const responseTemplate = part.responseTemplate
          ? (part.responseTemplate.file ? visual(part.responseTemplate) : part.responseTemplate)
          : undefined;
        const criteria = part.criteria || [{ points: 2, text: 'Apresenta a resposta esperada conforme critérios oficiais da VUNESP.' }];
        const maxScore = part.maxScore ?? criteria.reduce((sum, c) => sum + (c.points || 0), 0);
        return {
          id: part.id || String.fromCharCode(97 + index),
          maxScore,
          criteria,
          ...part,
          ...(expectedImages?.length ? { expectedImages } : {}),
          ...(responseTemplate ? { responseTemplate } : {}),
        };
      }),
      preview: config.preview || parts.map((part) => part.prompt).join(' '),
      ...resources(config), ...extra,
    };
  }

  function essay(config) {
    const { visuals, afterVisuals, alternativeVisuals, ...extra } = config;
    const statement = config.statement || '';
    return {
      ...shared, phase: '1º Dia · Redação', kind: 'essay', correctionOrigin: 'official',
      officialAnswerUrl: officialEssayUrl,
      id: `${prefix}-redacao`, number: 'Redação', subject: 'Português', content: 'Produção de texto dissertativo-argumentativo', difficulty: 'Média',
      statement, blockTypes: config.blockTypes || statement.split('\n\n').map(() => 'prose'),
      resolution: [], analyses: [],
      ...resources(config), ...extra,
    };
  }

  return { q, d, essay, img, shared, tex };
}
