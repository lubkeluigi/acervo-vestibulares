export const tex = String.raw;
const VERSION = '20261106-famerp-4';

export function createFamerp(year) {
  if (year < 2015 || year > 2026) throw new Error(`Edição FAMERP inválida: ${year}`);
  const prefix = `famerp${year}`;
  const document = (file) => `/documentos/${prefix}/${file}`;
  const shared = {
    exam: 'FAMERP — Medicina', year, accessYear: year,
    booklet: `Vestibular ${year}`, institution: 'FAMERP', banca: 'VUNESP',
    modality: 'medicina', examId: `famerp-${year}`,
  };
  const visual = (item) => {
    const genericCaption = /^Recorte vetorial do caderno oficial, página \d+\.$/.test(item.caption || '');
    const { caption, ...withoutCaption } = item;
    return { ...(genericCaption ? withoutCaption : item), src: `${item.src}?v=${VERSION}` };
  };
  const resources = (config) => {
    const images = (config.images || []).map(visual);
    const afterImages = (config.afterImages || []).map(visual);
    const groups = 'abcde'.split('').map((letter) => (config.alternativeImages?.[letter] || []).map(visual));
    return {
      ...(config.images ? { images } : {}),
      ...(config.afterImages ? { afterImages } : {}),
      ...(config.alternativeImages ? { alternativeImages: groups } : {}),
    };
  };
  const part = (value) => ({
    ...value,
    ...(value.expectedImages ? { expectedImages: value.expectedImages.map(visual) } : {}),
  });

  function q(config) {
    const correct = 'ABCDE'.indexOf(config.answer);
    if (correct < 0 || config.alternatives?.length !== 5 || config.analyses?.length !== 5) {
      throw new Error(`Configuração inválida: FAMERP ${year}, Prova I, Q${config.n}`);
    }
    return {
      ...shared, phase: 'Prova I — Conhecimentos gerais', kind: 'objective',
      originalUrl: document('prova-objetiva.pdf'), officialAnswerUrl: document('gabarito-objetivo.pdf'),
      ...config,
      id: config.id || `${prefix}-p1-q${String(config.n).padStart(2, '0')}`,
      number: `Questão ${String(config.n).padStart(2, '0')}`,
      correct,
      ...resources(config),
    };
  }

  function d(config) {
    if (!config.parts?.length) throw new Error(`Itens ausentes: FAMERP ${year}, Prova II, Q${config.n}`);
    return {
      ...shared, phase: 'Prova II — Conhecimentos específicos', kind: 'discursive',
      originalUrl: document('prova-discursiva.pdf'),
      officialAnswerUrl: config.correctionOrigin === 'official' ? document('criterios-discursivas.pdf') : null,
      ...config,
      id: config.id || `${prefix}-p2-q${String(config.n).padStart(2, '0')}`,
      number: `Questão ${String(config.n).padStart(2, '0')}`,
      parts: config.parts.map(part),
      ...resources(config),
    };
  }

  function essay(config) {
    return {
      ...shared, phase: 'Prova II — Redação', kind: 'essay',
      originalUrl: document('prova-discursiva.pdf'),
      officialAnswerUrl: config.correctionOrigin === 'official' ? document('criterios-redacao.pdf') : null,
      ...config,
      id: `${prefix}-redacao`, number: 'Redação',
      parts: (config.parts || []).map(part),
      resolution: [], analyses: [],
      ...resources(config),
    };
  }

  return { q, d, essay, shared, tex };
}
