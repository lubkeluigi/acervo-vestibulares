export const tex = String.raw;
const VERSION = '20261118-fmabc2027-1';

export function createFmabc(year) {
  if (year !== 2027) throw new Error(`Edição FMABC inválida: ${year}`);
  const prefix = `fmabc${year}`;
  const originalUrl = `/documentos/${prefix}/prova-objetiva-${year}.pdf`;
  const officialAnswerUrl = `/documentos/${prefix}/gabarito-objetiva-${year}.pdf`;

  const shared = {
    exam: 'FMABC', year, accessYear: year,
    booklet: `Vestibular Medicina ${year}`, institution: 'FMABC',
    banca: 'VUNESP', modality: 'medicina',
    examId: `fmabc-${year}`, originalUrl,
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
    if (correct < 0 || alternatives?.length !== 5) throw new Error(`Configuração inválida: FMABC ${year}, Q${n}`);
    const analyses = alternatives.map((_, index) => {
      if (index === correct) return `${config.annulled ? 'Referência do gabarito.' : 'Correta.'} ${why}`;
      if (!wrong[index]) throw new Error(`Análise ausente: FMABC ${year}, Q${n}, alternativa ${'ABCDE'[index]}`);
      return `Incorreta. ${wrong[index]}`;
    });
    const statement = config.statement || '';
    return {
      ...shared, phase: 'Conhecimentos Gerais', kind: 'objective',
      correctionOrigin: 'official', officialAnswerUrl,
      id: `${prefix}-q${String(n).padStart(2, '0')}`,
      number: `Questão ${String(n).padStart(2, '0')}`,
      subject, content, difficulty, statement,
      blockTypes: config.blockTypes || statement.split('\n\n').map(() => 'prose'),
      alternatives, correct, resolution: extra.resolution || [why], analyses,
      ...resources(config), ...extra,
    };
  }

  function essay(config) {
    const { visuals, afterVisuals, alternativeVisuals, ...extra } = config;
    const statement = config.statement || '';
    return {
      ...shared, phase: 'Redação', kind: 'essay', correctionOrigin: 'editorial',
      id: `${prefix}-redacao`, number: 'Redação', subject: 'Português',
      content: 'Produção de texto dissertativo-argumentativo', difficulty: 'Média',
      statement, blockTypes: config.blockTypes || statement.split('\n\n').map(() => 'prose'),
      resolution: [], analyses: [],
      ...resources(config), ...extra,
    };
  }

  return { q, essay, img, shared, tex };
}
