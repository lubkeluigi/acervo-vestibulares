const EXAM_URL = '/documentos/uea2024/vestibular-2024-conhecimentos-gerais.pdf';
const ANSWER_URL = '/documentos/uea2024/vestibular-2024-conhecimentos-gerais-gabarito.pdf';
const VERSION = '20261105-uea2024vu-1';

export const shared = {
  exam: 'UEA — Vestibular Unificado', year: 2024, phase: 'Conhecimentos Gerais',
  accessYear: 2025, booklet: 'Vestibular 2024 — Acesso 2025',
  originalUrl: EXAM_URL, officialAnswerUrl: ANSWER_URL,
  kind: 'objective', correctionOrigin: 'official',
  examId: 'uea-vestibular-2024-conhecimentos-gerais',
  institution: 'UEA', banca: 'VUNESP', modality: 'vestibular-unificado',
};
export const tex = String.raw;
export const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');
export const img = (file, alt, caption = '') => ({
  src: `/images/uea2024vu/${file}?v=${VERSION}`, alt, ...(caption ? { caption } : {}),
});
const visual = (item) => img(item.file, item.alt, item.caption || '');

const DANTO = `Leia o texto de Debora Pazetto Ferreira para responder às questões de 02 a 05.

Danto¹ introduz o problema da interpretação de obras de arte propondo, como de costume, um experimento mental: imaginar duas obras de arte que sejam sensorialmente indiscerníveis, mas que foram produzidas em épocas e lugares diferentes. Esse experimento tem o objetivo de mostrar que, embora os objetos materiais que as corporificam sejam idênticos, as referidas obras são distintas, uma vez que têm significados diferentes. Danto concorda, portanto, com a tese wölffliniana² de que nem tudo é possível em qualquer época, ou seja, os significados artísticos são condicionados pelo seu contexto histórico. Desse modo, o problema da interpretação está inserido no cerne da definição de arte.

(Revista Kriterion, 2018. Adaptado.)

¹ Arthur Danto (1924-2013): filósofo e crítico de arte estadunidense.
² Heinrich Wölfflin (1864-1945): filósofo e crítico de arte suíço.`;

const CAPITAES = `Leia o trecho do romance Capitães da areia, de Jorge Amado, para responder às questões de 06 a 08.

Pedro Bala e João Grande abalaram pela ladeira da Praça. Barandão abriu no mundo também. Mas o Sem-Pernas ficou encurralado na rua. Jogava picula¹ com os guardas. Estes tinham se despreocupado dos outros, pensavam que já era alguma coisa pegar aquele coxo. Sem-Pernas corria de um lado para outro da rua, os guardas avançavam. Ele fez que ia escapulir por outro lado, driblou um dos guardas, saiu pela ladeira. Mas em vez de descer e tomar pela Baixa dos Sapateiros, se dirigiu para a praça do Palácio. Porque Sem-Pernas sabia que se corresse na rua o pegariam com certeza. Eram homens, de pernas maiores que as suas, e além do mais ele era coxo, pouco podia correr. E acima de tudo não queria que o pegassem. Lembrava-se da vez que fora à polícia. Dos sonhos das suas noites más. Não o pegariam e enquanto corre este é o único pensamento que vai com ele. [...] Não o levarão. Vêm em seus calcanhares, mas não o levarão. Pensam que ele vai parar junto ao grande elevador. Mas Sem-Pernas não para. Sobe para o pequeno muro, volve o rosto para os guardas que ainda correm, ri com toda a força do seu ódio, cospe na cara de um que se aproxima estendendo os braços, se atira de costas no espaço como se fosse um trapezista de circo.

A praça toda fica em suspenso por um momento. “Se jogou”, diz uma mulher, e desmaia. Sem-Pernas se rebenta na montanha como um trapezista de circo que não tivesse alcançado o outro trapézio. O cachorro late entre as grades do muro.

(Capitães da areia, 2008.)

¹ picula: brincadeira infantil também conhecida como pega-pega, pegador e manja-pega.`;

const MISINFORMATION = `Leia o texto para responder às questões 10 e 11.

Misinformation and disinformation

Misinformation is false or inaccurate information — getting the facts wrong. Disinformation is false information, which is deliberately intended to mislead — intentionally misstating the facts.

The spread of misinformation and disinformation has affected our ability to improve public health, address climate change, maintain a stable democracy, and more. By providing valuable insight into how and why we are likely to believe misinformation and disinformation, psychological science can inform how we protect ourselves against its ill effects.

(www.apa.org. Adaptado.)`;

const COMMON = {
  danto: { statement: DANTO, blockTypes: ['label', 'quote', 'source', 'prose'] },
  capitaes: { statement: CAPITAES, blockTypes: ['label', 'quote', 'quote', 'source', 'prose'], works: ['Capitães da areia'] },
  misinformation: { statement: MISINFORMATION, blockTypes: ['label', 'prose', 'quote', 'quote', 'source'] },
};

export function q(config) {
  const {
    n, subject, content, difficulty = 'Média', alternatives, answer, why, wrong = {},
    common, visuals = [], afterVisuals = [], alternativeVisuals, ...extra
  } = config;
  const base = COMMON[common] || {};
  const correct = 'ABCDE'.indexOf(answer);
  if (correct < 0 || alternatives.length !== 5) throw new Error(`Configuração inválida na questão UEA VU 2024 ${n}`);
  const analyses = alternatives.map((_, index) => {
    if (index === correct) return `Correta. ${why}`;
    if (!wrong[index]) throw new Error(`Análise ausente: UEA 2024 Q${String(n).padStart(2, '0')}, alternativa ${'ABCDE'[index]}`);
    return `Incorreta. ${wrong[index]}`;
  });
  const statement = config.statement ?? base.statement ?? '';
  const blockTypes = config.blockTypes ?? base.blockTypes ?? statement.split('\n\n').map(() => 'prose');
  const images = visuals.map(visual);
  const afterImages = afterVisuals.map(visual);
  const alternativeImages = alternativeVisuals?.map((group) => group.map(visual));
  return {
    ...shared, ...base,
    id: `uea2024vu-q${String(n).padStart(2, '0')}`,
    number: `Questão ${String(n).padStart(2, '0')}`, subject, content, difficulty,
    statement, blockTypes, alternatives, correct,
    resolution: extra.resolution || [why], analyses,
    ...(images.length ? { images } : {}),
    ...(afterImages.length ? { afterImages } : {}),
    ...(alternativeImages ? { alternativeImages } : {}),
    ...extra,
  };
}
