const EXAM_URL = 'https://tmpfiles.org/wvALoOsbxAea/provaobjetiva-2exame.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wxA0odsMNlbQ/gabarito2examedequalificacao.pdf';
const VERSION = '20261105-uerj-eq2-2';

export const shared = {
  exam: 'UERJ', examId: 'uerj-2027-eq2', year: 2027, phase: '2º Exame de Qualificação',
  originalUrl: EXAM_URL, officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
export const tex = String.raw;
export const img = (file, alt, caption = '') => ({
  src: `/images/uerj2027eq2/${file}?v=${VERSION}`, alt, ...(caption ? { caption } : {}),
});

export function q({ n, subject, content, difficulty = 'Média', statement = '', alternatives, answer, why, wrong = {}, ...extra }) {
  const correct = 'ABCD'.indexOf(answer);
  if (correct < 0 || alternatives.length !== 4) throw new Error(`Configuração inválida na questão UERJ EQ2 ${n}`);
  for (let index = 0; index < 4; index += 1) {
    if (index !== correct && !wrong[index]) throw new Error(`Análise da alternativa ${'ABCD'[index]} ausente na questão UERJ EQ2 ${n}`);
  }
  const analyses = alternatives.map((_, index) => index === correct ? `Correta. ${why}` : `Incorreta. ${wrong[index]}`);
  return {
    ...shared, id: `uerj2027eq2-q${String(n).padStart(2, '0')}`,
    number: `Questão ${String(n).padStart(2, '0')}`, subject, content, difficulty,
    statement, alternatives, correct, resolution: extra.resolution || [why], analyses, ...extra,
  };
}

export const SENTIDOS = `As questões 01 a 08 relacionam-se com o texto base.

OS SERES HUMANOS PODEM TER ATÉ 33 SENTIDOS

Presos em frente às telas o dia todo, muitas vezes ignoramos nossos sentidos além da audição e da visão. E, no entanto, eles estão sempre em ação. Quando estamos mais alertas, sentimos as superfícies ásperas e lisas dos objetos, a rigidez nos ombros, a maciez do pão. Pela manhã, podemos sentir o formigamento da pasta de dente, ouvir e sentir a água corrente no chuveiro, o cheiro do xampu e, mais tarde, o aroma do café fresco.

Aristóteles nos disse que existiam cinco sentidos. Mas ele também nos disse que o mundo era composto por cinco elementos, e já não acreditamos nisso. E pesquisas modernas mostram que podemos, na verdade, ter dezenas de sentidos. Quase toda a nossa experiência é multissensorial. Não vemos, ouvimos, cheiramos e tocamos em partes separadas. Elas ocorrem simultaneamente em uma experiência unificada do mundo ao nosso redor e de nós mesmos.

O que sentimos afeta o que vemos e o que vemos afeta o que ouvimos. Diferentes aromas no xampu podem afetar a forma como percebemos a textura do cabelo. O aroma de rosas, por exemplo, faz com que o cabelo pareça mais sedoso. Os aromas em iogurtes com baixo teor de gordura podem torná-los mais ricos e espessos no paladar sem a necessidade de adicionar mais emulsificantes. A percepção dos odores na boca, que sobem até as vias nasais, é modificada pela viscosidade dos líquidos que consumimos.

Neurocientistas acreditam que existam entre 22 e 33 sentidos. Entre eles, está a propriocepção, que nos permite saber onde estão nossos membros sem precisar olhar para eles. Nosso senso de equilíbrio depende do sistema vestibular dos canais auditivos, bem como da visão e da propriocepção. Outro exemplo é a interocepção, pela qual percebemos mudanças em nossos próprios corpos, como um leve aumento da frequência cardíaca e a fome.

Alguns dos sentidos tradicionais são combinações de vários sentidos. O tato, por exemplo, envolve dor, temperatura, coceira e sensações táteis. Quando provamos algo, na verdade estamos experimentando uma combinação de três sentidos: tato, olfato e paladar (ou gustação), que se combinam para produzir os sabores que percebemos nos alimentos e bebidas. A gustação engloba as sensações produzidas pelos receptores na língua, que nos permitem detectar salgado, doce, azedo, amargo e umami (saboroso).

E quanto à menta, manga, melão, morango, framboesa? Não temos receptores de framboesa na língua, nem o sabor da framboesa é uma combinação de doce, azedo e amargo. Não existe uma aritmética gustativa para os sabores das frutas. Nós os percebemos através da ação conjunta da língua e do nariz. É o olfato que contribui com a maior parte do que chamamos de paladar. Ao mastigar ou beber algo, os compostos odoríferos são liberados, viajando da boca para o nariz através da nasofaringe, na parte posterior da garganta.

O tato também desempenha um papel importante, conectando sabores e cheiros e definindo nossas preferências por ovos com gema mole ou firme, e pela textura aveludada e cremosa do chocolate.

A visão é influenciada pelo nosso sistema vestibular. Quando você estiver a bordo de uma aeronave no solo, olhe para baixo, para a cabine. Olhe novamente quando estiver subindo. Você terá a impressão de que a parte dianteira da cabine está mais alta do que você, embora, opticamente, tudo esteja na mesma proporção que estava no solo. O que você “vê” é o efeito combinado da visão e dos seus canais auditivos, que lhe dizem que você está se inclinando para trás.

Sempre há muitas coisas ao seu redor que mostram o quão complexos são seus sentidos; basta parar por um momento para absorver tudo. Então, da próxima vez que você sair para caminhar ou saborear uma refeição, reserve um momento para apreciar como seus sentidos trabalham juntos para ajudá-lo a sentir todas as sensações envolvidas.

BARRY SMITH
Adaptado de oglobo.globo.com, 24/12/2025.`;
export const sentidosText = {
  statement: SENTIDOS,
  blockTypes: ['label', 'headline', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'source'],
};

const EMOTIONS = `Leia o texto em inglês para responder às questões 23 a 27.

THE NEUROSCIENCE OF EMOTIONS: HOW THE BRAIN CREATES FEAR, JOY, AND LOVE

Emotions are among the most profound and mysterious aspects of human experience. They shape our thoughts, behaviors, and decisions, influence our relationships, and define what it means to be human. From the contagious joy of a child’s laughter to the growing fear in a moment of danger, emotions color our entire perception of the world. But are emotions purely abstract?

Neuroscience, the study of the nervous system and the brain, has made extraordinary progress in uncovering the biological foundations of emotions. Far from being abstract or purely psychological, emotions emerge from concrete physical processes − patterns of neural activity that evolved to help organisms survive, adapt, and connect with others. Understanding the neuroscience of emotions illuminates why humans behave the way they do and offers insights into mental health and disease. It deepens our appreciation of how biology and consciousness intertwine.

Emotions are not random sensations, as they represent complex biological mechanisms. They are shaped by evolution to guide behavior in ways that increase survival and reproduction. Long before humans developed language or culture, emotional systems helped our ancestors react quickly to threats, seek nourishment, form social bonds, and reproduce. Fear, for example, evolved as a survival mechanism to prepare the body for danger − either to fight, flee, or freeze. Joy, or positive affect, reinforces behaviors that are beneficial, such as finding food, achieving goals, or bonding with others. Joy and love are both positive feelings and have to do with pleasant moments. The latter, however, represents a more complete and profound experience, as it binds individuals together, ensuring mutual care, protection, and the raising of offspring.

Emotions, therefore, function as the brain’s motivational compass. They provide rapid, often unconscious assessments of the environment and trigger physiological responses before conscious thought catches up. Modern neuroscience has shown that they are neither purely instinctual nor purely rational.

Emotions are thus shaped by a delicate balance between these chemical messengers. Their interactions create the spectrum of feelings that define our mental and social lives. Joy, happiness, and pleasure represent positive emotional states that signal well-being and success in achieving goals. These feelings are primarily governed by the brain’s reward system. Emotions guide the priorities of thought, while cognition refines emotional impulses. Together, they form the essence of intelligence.

In short, emotions are not mysterious forces dissociated from biology, or simply neural or physiological responses − they are the very essence of how the brain connects body, mind, and world. The neuroscience of emotions reveals that what we call the heart is, in many ways, the work of the brain. Yet, understanding this does not diminish the beauty of emotion − it enhances it. Every fear conquered, every joy shared, every love felt, is a testament to the extraordinary intricacy of the brain and its ability to make meaning out of personal experience. Emotions are how the brain translates the physical world into the poetry of human life.

Adaptado de sciencenewstoday.org, 05/11/2025.`;
export const emotionsText = {
  statement: EMOTIONS,
  blockTypes: ['label', 'headline', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'source'],
};

export const ferroText = {
  statement: 'Com base no texto a seguir, responda às questões 38 e 39.\n\nO ferro é um metal de transição que forma os íons Fe²⁺, encontrado nas carnes vermelhas, e Fe³⁺, mais comum em vegetais como o feijão. O intestino humano absorve, mais facilmente, o ferro Fe²⁺; já o Fe³⁺, para ser melhor captado, precisa ser convertido em Fe²⁺ por meio de substâncias como a vitamina C. Sabe-se que a ingestão de alimentos ricos em cálcio e a ingestão de bebidas ricas em taninos, como café e chás, dificulta a absorção desse mineral.',
  blockTypes: ['label', 'quote'],
};
