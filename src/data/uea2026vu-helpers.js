const EXAM_URL = '/documentos/uea2026/vestibular-2026-conhecimentos-gerais.pdf';
const ANSWER_URL = '/documentos/uea2026/vestibular-2026-conhecimentos-gerais-gabarito.pdf';
const VERSION = '20261104-uea2026vu-2';

export const shared = {
  exam: 'UEA — Vestibular Unificado', year: 2026, phase: 'Conhecimentos Gerais',
  originalUrl: EXAM_URL, officialAnswerUrl: ANSWER_URL,
  kind: 'objective', correctionOrigin: 'official',
  examId: 'uea-vestibular-2026-conhecimentos-gerais',
  institution: 'UEA', banca: 'VUNESP', modality: 'vestibular-unificado',
};
export const tex = String.raw;
export const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');
export const img = (file, alt, caption = '') => ({
  src: `/images/uea2026vu/${file}?v=${VERSION}`, alt, ...(caption ? { caption } : {}),
});

export function q({ n, subject, content, difficulty = 'Média', statement = '', alternatives, answer, why, wrong = {}, ...extra }) {
  const correct = 'ABCDE'.indexOf(answer);
  if (correct < 0 || alternatives.length !== 5) throw new Error(`Configuração inválida na questão UEA VU 2026 ${n}`);
  const analyses = alternatives.map((_, index) => index === correct
    ? `Correta. ${why}`
    : `Incorreta. ${wrong[index] || 'A alternativa não atende ao enunciado nem aos dados apresentados.'}`);
  return {
    ...shared, id: `uea2026vu-q${String(n).padStart(2, '0')}`,
    number: `Questão ${String(n).padStart(2, '0')}`, subject, content, difficulty,
    statement, alternatives, correct, resolution: extra.resolution || [why], analyses, ...extra,
  };
}

const MACUNAIMA = `Leia o trecho, retirado do romance Macunaíma, de Mário de Andrade, para responder às questões de 02 a 05.

Quando chegaram ao bosque da Saúde o herói murmurou:

— Aqui serve.

Dispôs os manos nas esperas, botou fogo no bosque e ficou também amoitado esperando que saísse algum viado mateiro pra ele caçar. Porém não tinha nenhum viado lá e quando queimada acabou, jacaré saiu? pois nem viado mateiro nem viado catingueiro, saíram só dois ratos chamuscados. Então o herói caçou os ratos chamuscados, comeu-os e sem chamar os manos voltou pra pensão.

Lá chegado ajuntou os vizinhos, criados a patroa cunhãs datilógrafas estudantes empregados-públicos, muitos empregados-públicos! todos esses vizinhos e contou pra eles que tinha ido caçar na feira do Arouche e matara dois...

— ...mateiros, não eram viados mateiros não, dois viados catingueiros que comi com os manos. Até vinha trazendo um naco pra vocês mas porém escorreguei na esquina, caí derrubei o embrulho e cachorro comeu tudo.

Toda a gente se sarapantou com o sucedido e desconfiaram do herói. Quando Maanape e Jiguê voltaram, os vizinhos foram perguntar pra eles si era verdade que Macunaíma caçara dois catingueiros na feira do Arouche. Os manos ficaram muito enquizilados¹ porque não sabiam mentir e exclamaram irritadíssimos:

— Mas que catingueiros esses! O herói nunca matou viado! Não tinha nenhum viado na caçada não! Gato miador, pouco caçador, gente! Em vez foram dois ratos chamuscados que Macunaíma pegou e comeu.

(Macunaíma, 2022.)

¹ enquizilado: aborrecido.`;
export const macunaimaText = {
  statement: MACUNAIMA,
  blockTypes: ['label', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'source', 'note'],
  works: ['Macunaíma'],
};

const ARTE_ABSTRATA = `Para responder às questões de 06 a 08, leia um trecho do livro Isto é arte?, de Will Gompertz.

“Arte abstrata” designa pinturas ou esculturas que não imitam ou mesmo tentam representar um objeto físico, como uma casa ou um cão. Fazê-lo seria um fracasso aos olhos do artista abstrato, que visa produzir uma obra de arte que seja uma façanha da imaginação, em que sejamos incapazes de reconhecer alguma coisa de nosso mundo conhecido. Por vezes ela é chamada de “arte não figurativa”.

Você conhece esse tipo de coisa, aqueles rabiscos e quadrados aparentemente aleatórios que nos levam a pensar: “Uma criança de cinco anos poderia ter feito isso.” O que poderia ser o caso, mas na realidade é muito improvável. É algo surpreendentemente difícil definir com clareza o que é que torna essas linhas de alguma maneira diferentes daquelas que você ou eu poderíamos desenhar, mas existe alguma coisa. Há algo relacionado à sua fluidez, ou composição, ou forma, que leva milhões de nós às galerias de arte moderna [...]. De alguma maneira, os artistas abstratos conseguiram arranjar suas formas e pinceladas em desenhos capazes de estabelecer uma conexão significativa conosco, sem que saibamos como ou por quê. A verdade é que a arte abstrata encerra certo mistério; algo que confunde nossos cérebros racionais quando acreditamos que pinturas e esculturas precisam contar uma história. Trata-se de uma ideia complexa que é tipicamente expressada de maneira simples.

(Isto é arte?, 2013. Adaptado.)`;
export const arteAbstrataText = {
  statement: ARTE_ABSTRATA,
  blockTypes: ['label', 'quote', 'quote', 'source'],
  works: ['Isto é arte?'],
};

const RAINFORESTS = `Leia o texto para responder às questões de 09 a 11.

Interesting facts about rainforests

1. Rainforests are home to more than half of the world’s plant and animal species, making them critical for global biodiversity.
2. Rainforests play a major role in regulating the global climate by absorbing carbon dioxide and helping stabilize weather patterns.
3. By generating moisture¹ and rainfall, rainforests contribute to the water cycle, which supports ecosystems both locally and far away.
4. Deforestation puts rainforests at risk, leading to habitat loss, species declines, and negative impacts on the climate and indigenous communities.
5. Restoring rainforests supports critical ecosystem services, like clean air, soil stability, and cultural heritage.

(Meaghan Weeden. https://onetreeplanted.org, 22.06.2026. Adaptado.)

¹ moisture: very small drops of water.`;
export const rainforestsText = {
  statement: RAINFORESTS,
  blockTypes: ['label', 'headline', 'quote', 'source', 'note'],
  images: [img('uea2026vu-q09-floresta.webp', 'Floresta tropical úmida entre a névoa.')],
};
