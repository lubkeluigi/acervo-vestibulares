export const tex = String.raw;
const VERSION = '20261105-famema-5';

export function createFamema(year) {
  if (year < 2020 || year > 2026) throw new Error(`Edição FAMEMA inválida: ${year}`);
  const prefix = `famema${year}`;
  const originalUrl = `/documentos/${prefix}/prova.pdf`;
  const officialAnswerUrl = year === 2023
    ? 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/famema/famema2023.aspx'
    : `/documentos/${prefix}/gabarito.pdf`;
  const shared = {
    exam: 'FAMEMA — Medicina e Enfermagem', year, accessYear: year,
    booklet: `Vestibular ${year}`, institution: 'FAMEMA',
    banca: year === 2022 ? 'FGV' : 'VUNESP', modality: 'medicina-enfermagem',
    examId: `famema-${year}`, originalUrl,
    ...(year === 2022 ? { editorialNotice: 'Edição elaborada pela FGV, e não pela VUNESP; por isso, o estilo das questões pode parecer diferente das demais edições.' } : {}),
  };
  const editorialNotes = [
    'Proposta de correção elaborada pelo acervo para autoavaliação; não é um documento oficial de respostas esperadas da FAMEMA ou da banca.',
    'Rubrica editorial de estudo: cada item vale até 2 pontos, distribuídos entre as respostas solicitadas. A pontuação não reproduz critérios oficiais de correção.',
  ];
  if (year === 2022) editorialNotes.push('O gabarito objetivo disponível no PDF está identificado como preliminar; a sequência do Tipo 1 coincide com a tabela anual da Objetivo.');
  if (year === 2023) editorialNotes.push('O caderno FMMA2201 apresenta ordem de alternativas diferente da resolução comentada da Objetivo. A chave objetiva foi remapeada pelo conteúdo das alternativas do caderno e conferida pelos cálculos e conceitos correspondentes.');

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
    if (correct < 0 || alternatives?.length !== 5) throw new Error(`Configuração inválida: FAMEMA ${year}, Prova II, Q${n}`);
    const analyses = alternatives.map((_, index) => {
      if (index === correct) return `${config.annulled ? 'Referência do gabarito.' : 'Correta.'} ${why}`;
      if (!wrong[index]) throw new Error(`Análise ausente: FAMEMA ${year}, Prova II, Q${n}, alternativa ${'ABCDE'[index]}`);
      return `Incorreta. ${wrong[index]}`;
    });
    const statement = config.statement || '';
    return {
      ...shared, phase: 'Prova II', kind: 'objective', correctionOrigin: 'official', officialAnswerUrl,
      id: `${prefix}-p2-q${String(n).padStart(2, '0')}`,
      number: `Questão ${String(n).padStart(2, '0')}`,
      subject, content, difficulty, statement,
      blockTypes: config.blockTypes || statement.split('\n\n').map(() => 'prose'),
      alternatives, correct, resolution: extra.resolution || [why], analyses,
      ...resources(config), ...extra,
    };
  }

  function d(config) {
    const { n, subject, content, difficulty = 'Média', parts, visuals, afterVisuals, alternativeVisuals, ...extra } = config;
    if (!parts?.length) throw new Error(`Itens ausentes: FAMEMA ${year}, Prova I, Q${n}`);
    const statement = config.statement || '';
    return {
      ...shared, phase: 'Prova I', kind: 'discursive', correctionOrigin: 'editorial', officialAnswerUrl: null,
      id: `${prefix}-p1-q${String(n).padStart(2, '0')}`,
      number: `Questão ${String(n).padStart(2, '0')}`,
      subject, content, difficulty, statement,
      blockTypes: config.blockTypes || statement.split('\n\n').map(() => 'prose'),
      studyNotes: config.studyNotes || editorialNotes,
      parts: parts.map((part, index) => ({
        id: part.id || String.fromCharCode(97 + index), maxScore: 2,
        criteria: part.criteria || [{ points: 2, text: 'Apresenta as respostas solicitadas com justificativa, cálculo ou equação quando couber.' }],
        ...part,
      })),
      preview: config.preview || parts.map((part) => part.prompt).join(' '),
      ...resources(config), ...extra,
    };
  }

  function essay(config) {
    const { visuals, afterVisuals, alternativeVisuals, ...extra } = config;
    const statement = config.statement || '';
    return {
      ...shared, phase: 'Prova III — Redação', kind: 'essay', correctionOrigin: 'editorial', officialAnswerUrl: null,
      id: `${prefix}-redacao`, number: 'Redação', subject: 'Português', content: 'Produção textual', difficulty: 'Média',
      statement, blockTypes: config.blockTypes || statement.split('\n\n').map(() => 'prose'),
      resolution: [], analyses: [], studyNotes: config.studyNotes || [
        'Orientação editorial, não oficial: produza texto dissertativo-argumentativo, com tese clara, argumentação consistente e uso da norma-padrão.',
        'A redação não recebe nota automática nem deve ser comparada a um gabarito de alternativa.',
      ],
      ...resources(config), ...extra,
    };
  }

  return { q, d, essay, img, shared, tex };
}
