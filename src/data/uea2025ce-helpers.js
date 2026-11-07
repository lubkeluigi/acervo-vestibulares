export const tex = String.raw;
export const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const VERSION = '20261105-uea2025ce-1';

export function createGroup(group) {
  if (![1, 2, 3].includes(group)) throw new Error(`Grupo UEA inválido: ${group}`);
  const prefix = `uea2025ce${group}`;
  const shared = {
    exam: `UEA — Conhecimentos Específicos · Grupo ${group}`,
    year: 2025,
    phase: 'Conhecimentos Específicos e Redação',
    originalUrl: `/documentos/uea2025/especificos-grupo${group}-prova.pdf`,
    officialAnswerUrl: `/documentos/uea2025/especificos-grupo${group}-gabarito.pdf`,
    kind: 'objective', correctionOrigin: 'official',
    examId: `uea-2025-especificos-grupo${group}`,
    institution: 'UEA', banca: 'VUNESP', modality: 'conhecimentos-especificos',
  };
  const img = (file, alt, caption = '') => ({
    src: `/images/uea2025ce/${file}?v=${VERSION}`, alt, ...(caption ? { caption } : {}),
  });

  function q({ n, subject, content, difficulty = 'Média', statement = '', alternatives, answer, why, wrong = {}, ...extra }) {
    const correct = 'ABCDE'.indexOf(answer);
    if (correct < 0 || alternatives.length !== 5) throw new Error(`Configuração inválida em ${prefix} Q${n}`);
    const analyses = alternatives.map((_, index) => index === correct
      ? `Correta. ${why}`
      : `Incorreta. ${wrong[index] || 'A alternativa não atende ao enunciado nem aos dados apresentados.'}`);
    return {
      ...shared, id: `${prefix}-q${String(n).padStart(2, '0')}`,
      number: `Questão ${String(n).padStart(2, '0')}`, subject, content, difficulty,
      statement, alternatives, correct, resolution: extra.resolution || [why], analyses, ...extra,
    };
  }

  function essay() {
    return {
      ...shared,
      id: `${prefix}-redacao`, number: 'Redação', kind: 'essay', correctionOrigin: 'editorial', officialAnswerUrl: null,
      subject: 'Português', content: 'Produção textual', difficulty: 'Média',
      statement: 'REDAÇÃO\n\nTexto 1',
      blockTypes: ['label', 'subheading'],
      images: [img('uea2025ce-redacao-turismo.svg', 'Charge de Gilmar Fraga: placa “Você está no leito de um rio” em paisagem amazonense ressecada, com fumaça e fogo ao fundo.')],
      statementAfter: REDACTION_AFTER,
      afterBlockTypes: ['subheading', 'quote', 'quote', 'quote', 'source', 'subheading', 'quote', 'quote', 'source', 'subheading', 'quote', 'quote', 'quote', 'source', 'command'],
      statementTail: 'Turismo na Amazônia: entre o desenvolvimento socioeconômico e os impactos ambientais',
      tailBlockTypes: ['headline'],
      parts: [{
        id: 'T', prompt: 'Produza um texto dissertativo-argumentativo em norma-padrão da língua portuguesa.',
        expected: 'Não há resposta única. A proposta editorial espera uma discussão sobre como o turismo na Amazônia pode promover desenvolvimento socioeconômico com preservação ambiental, articulando os textos motivadores e conhecimentos próprios.',
      }],
      studyNotes: [
        'Orientação editorial, não oficial: apresente uma tese clara sobre o turismo na Amazônia, discuta benefícios socioeconômicos e impactos ambientais e proponha caminhos compatíveis com a sustentabilidade e a valorização das comunidades locais.',
        'A redação não recebe nota automática nem deve ser comparada a um gabarito de alternativa.',
      ],
      resolution: [], analyses: [],
    };
  }

  return { q, img, essay, shared };
}

const REDACTION_AFTER = `Texto 2

A Amazônia, com sua vasta biodiversidade e riqueza cultural, tem sido palco de diversas iniciativas de turismo sustentável que buscam harmonizar a preservação ambiental com o desenvolvimento socioeconômico das comunidades locais. Essas ações destacam-se por promover práticas responsáveis e valorizar os recursos naturais e culturais da região.

No Amazonas, o governo estadual, por meio da Amazonastur, tem implementado ações para fortalecer o turismo sustentável. Em Tefé, por exemplo, foi realizado o Workshop Turismo Sustentável e lançada a plataforma “Amazonas To Go”, iniciativas que visam capacitar os moradores locais e promover o ecoturismo na região.

O Prêmio Braztoa de Sustentabilidade 2025 abriu inscrições com novidades e destaque na Amazônia, reconhecendo iniciativas que integrem impactos ambientais, sociais, culturais e econômicos de forma equilibrada. Mais de 90% das iniciativas premiadas nas últimas edições contemplam ações ambientais e sociais, demonstrando a força do turismo como agente de transformação na região.

(Caio Vinícius Vilaça. “Turismo sustentável na Amazônia: iniciativas promissoras para a preservação e desenvolvimento local”. https://agroflorestamazonia.com, 19.03.2025. Adaptado.)

Texto 3

O ano de 2024 terminou com um alerta contundente: foi o mais quente da história recente, registrando temperatura média global 1,6 °C acima dos níveis pré-industriais. Com a realização da COP30 (30ª Conferência das Nações Unidas sobre Mudanças Climáticas) em Belém (PA), em 2025, o país tem uma oportunidade única de liderar a agenda do turismo sustentável — setor que representa cerca de 7% do PIB nacional e emprega milhões de brasileiros.

O turismo sustentável oferece caminhos reais para preservar o meio ambiente ao mesmo tempo em que gera renda, empregos e oportunidades. Em um mundo em transformação, onde crises climáticas e transições tecnológicas se entrelaçam, o turismo responsável é mais do que tendência: é uma necessidade.

(Alexandre Sampaio e Luciana De Lamare. “Turismo sustentável é oportunidade estratégica para o Brasil em 2025”. https://exame.com, 06.04.2025. Adaptado.)

Texto 4

A professora Isabel Grimm, doutora em meio ambiente e desenvolvimento pela Universidade Federal do Paraná (UFPR), destaca que, quando se fala de crise climática e turismo, há de se pensar também sobre a responsabilidade que o próprio setor possui nos impactos ao meio ambiente.

“O turismo impacta com as emissões de gases do efeito estufa, principalmente por causa dos transportes. E o transporte aéreo é um dos que mais têm emitido gases. Mas há também o uso excessivo de água e de energia elétrica nos locais turísticos, que produzem impactos muito relevantes. Precisamos pensar em alternativas para o que chamamos de turismo de massas, com menores impactos aos ecossistemas”, diz Isabel.

A especialista reforça que toda a cadeia turística deve se envolver na mitigação dos custos ambientais: os povos locais, as empresas, os governos e os próprios turistas. Um dos pontos fundamentais, nesse sentido, é repensar a própria concentração de pessoas em destinos mais badalados e midiáticos, e valorizar outras experiências possíveis dentro do país.

(Rafael Cardoso. “Turismo e crise climática: os caminhos sustentáveis para a Amazônia”. https://agenciabrasil.ebc.com.br, 12.01.2025. Adaptado.)

Com base nos textos apresentados e em seus próprios conhecimentos, escreva um texto dissertativo-argumentativo, empregando a norma-padrão da língua portuguesa, sobre o tema:`;
