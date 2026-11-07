const EXAM_URL = '/documentos/uea2025/vestibular-2025-conhecimentos-gerais.pdf';
const ANSWER_URL = '/documentos/uea2025/vestibular-2025-conhecimentos-gerais-gabarito.pdf';
const VERSION = '20261105-uea2025vu-7';

export const shared = {
  exam: 'UEA — Vestibular Unificado', year: 2025, phase: 'Conhecimentos Gerais',
  originalUrl: EXAM_URL, officialAnswerUrl: ANSWER_URL,
  kind: 'objective', correctionOrigin: 'official',
  examId: 'uea-vestibular-2025-conhecimentos-gerais',
  institution: 'UEA', banca: 'VUNESP', modality: 'vestibular-unificado',
};
export const tex = String.raw;
export const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');
export const img = (file, alt, caption = '') => ({
  src: `/images/uea2025vu/${file}?v=${VERSION}`, alt, ...(caption ? { caption } : {}),
});

export function q({ n, subject, content, difficulty = 'Média', statement = '', alternatives, answer, why, wrong = {}, ...extra }) {
  const correct = 'ABCDE'.indexOf(answer);
  if (correct < 0 || alternatives.length !== 5) throw new Error(`Configuração inválida na questão UEA VU 2025 ${n}`);
  const analyses = alternatives.map((_, index) => index === correct
    ? `Correta. ${why}`
    : `Incorreta. ${wrong[index] || 'A alternativa não atende ao enunciado nem aos dados apresentados.'}`);
  return {
    ...shared, id: `uea2025vu-q${String(n).padStart(2, '0')}`,
    number: `Questão ${String(n).padStart(2, '0')}`, subject, content, difficulty,
    statement, alternatives, correct, resolution: extra.resolution || [why], analyses, ...extra,
  };
}

export const tirinhaText = {
  statement: 'Considere a tirinha a seguir, publicada no perfil @devaneioshq do Instagram em 11.06.2025, para responder às questões 01 e 02.',
  blockTypes: ['label'],
  images: [img('uea2025vu-q01-tirinha.svg', 'Tirinha: “Hoje eu tirei o dia pra mim”; “E foi muito bom”; “Pensar um pouco”; “Me estressar com mais calma”.')],
};

const IA_CINEMA = `Para responder às questões de 03 a 06, considere o artigo escrito por Rafael Magalhães dos Santos e editado por Layse Ventura.

A televisão já foi vista como o fim do cinema. Mas, em vez de morrer, a sétima arte evoluiu: criou novas linguagens, reinventou formatos e encontrou seu próprio espaço. Hoje, a Inteligência Artificial é tratada como a próxima ameaça às indústrias criativas. Será? A história mostra que, diante de grandes mudanças, quem inova sobrevive — e ainda brilha.

Para salvar a experiência do cinema diante da televisão, a indústria apostou na inovação técnica e estética. Vieram o widescreen, o 3D e o som multicanal, criando um espetáculo que nenhuma TV da época podia replicar. As produções também aceleraram a adoção do filme colorido e passaram a se associar a eventos de “alta cultura”, como teatro e ópera, com filmes mais longos, aberturas e intervalos.

Nem todas as ideias pegaram — e algumas soaram até ridículas, como o “smell-o-vision”, que liberava cheiros durante o filme Scent of Mystery (1960). Ainda assim, o esforço de inovar transformou a própria linguagem do cinema.

O impacto foi tão profundo que o cinema deixou de disputar espaço com a TV e criou uma experiência sensorial própria. Inovar não era apenas uma questão de sobrevivência, era uma forma de transformar limitações em novas possibilidades estéticas. Em vez de resistir à mudança, o cinema a incorporou como motor de evolução.

A Inteligência Artificial gera hoje o mesmo frio na barriga que a televisão causou décadas atrás. Textos, músicas, pinturas e roteiros podem ser produzidos em minutos, desafiando a ideia de autoria e talento humano. Mas, assim como o cinema não desapareceu, a criação humana também não precisa ser substituída, ela pode evoluir junto.

A IA não é apenas uma máquina de cópias. Ela pode ser uma ferramenta de experimentação, inspiração e até democratização do acesso criativo. Em vez de temer o que a tecnologia pode fazer, a chave está em usá-la para ampliar o que só os humanos conseguem transmitir: emoção, nuance, surpresa.

A Inteligência Artificial pode ser a faísca de uma nova era nas artes. A criatividade continua a ser um terreno humano — e, agora, com novos instrumentos para explorá-lo como nunca antes.

(www.olhardigital.com.br, 02.05.2025. Adaptado.)`;
export const iaCinemaText = {
  statement: IA_CINEMA,
  blockTypes: ['label', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'source'],
};

const MACUNAIMA_2025 = `Leia o trecho a seguir, retirado do romance Macunaíma, de Mário de Andrade, para responder às questões 07 e 08.

Uma feita a Sol cobrira os três manos duma escaminha de suor e Macunaíma se lembrou de tomar banho. Porém no rio era impossível por causa das piranhas tão vorazes que de quando em quando, na luta pra pegar um naco de irmã espedaçada, pulavam aos cachos pra fora d’água metro e mais. Então Macunaíma enxergou numa lapa bem no meio do rio uma cova cheia d’água. E a cova era que nem a marca dum pé gigante. Abicaram. O herói depois de muitos gritos por causa do frio da água entrou na cova e se lavou inteirinho. Mas a água era encantada porque aquele buraco na lapa era marca do pezão do Sumé, do tempo em que andava pregando o evangelho de Jesus pra indiada brasileira. Quando o herói saiu do banho estava branco loiro e de olhos azuizinhos, água lavara o pretume dele. E ninguém não seria capaz mais de indicar nele um filho da tribo retinta dos Tapanhumas.

Nem bem Jiguê percebeu o milagre, se atirou na marca do pezão do Sumé. Porém a água já estava muito suja da negrura do herói e por mais que Jiguê esfregasse feito maluco atirando água pra todos os lados só conseguiu ficar da cor do bronze novo. Macunaíma teve dó e consolou:

— Olhe, mano Jiguê, branco você ficou não, porém pretume foi-se e antes fanhoso que sem nariz.

(Macunaíma, 2013.)`;
export const macunaima2025Text = {
  statement: MACUNAIMA_2025,
  blockTypes: ['label', 'quote', 'quote', 'quote', 'source'],
  works: ['Macunaíma'],
};

const SDGS = `Leia o texto para responder às questões de 09 a 11.

The Sustainable Development Goals (SDGs) were adopted by all United Nations Member States in 2015 to end poverty, reduce inequality and build more peaceful, prosperous societies by 2030.

The widespread destruction of the natural world is weakening the achievement of the SDGs and exposing humanity’s future to danger. A human-induced triple planetary crisis of climate change, nature and biodiversity loss, and pollution and waste is pushing nature to the breaking point. That is putting at risk the food we eat, the air we breathe, the water we drink and the materials and resources upon which our societies are built.

The triple planetary crisis is stressing most heavily the vulnerable, including the poor, women and indigenous peoples. Unless humanity reverses its environmental course, it will be impossible to achieve the SDGs.

(www.unep.org. Adaptado.)`;
export const sdgsText = {
  statement: SDGS,
  blockTypes: ['label', 'quote', 'quote', 'quote', 'source'],
  images: [img('uea2025vu-q09-solar.svg', 'Painéis solares azuis em fileiras diagonais, com vegetação verde em primeiro plano.')],
};

const TRANSAMAZONICA = `Leia o texto para responder às questões 23 e 24.

A construção da Rodovia Transamazônica serviu de alavanca para um ambicioso programa de colonização que incluía o deslocamento de quase 1 milhão de pessoas com o objetivo de ocupar estrategicamente a região, não deixar despovoado nenhum espaço do território nacional e tamponar a área de fronteiras. A estrada foi inaugurada pelo presidente Emílio Garrastazu Médici em 27 de setembro de 1972 e utilizada para potencializar uma imagem ufanista do Brasil, compartilhar o sentimento de que estava em curso um processo formidável de modernização do país e produzir identidade. Mas não foi bem assim. A construção da Transamazônica massacrou a floresta, consumiu bilhões de dólares e até hoje a estrada tem trechos intransitáveis por conta das chuvas, dos desmoronamentos e das enchentes dos rios.

(Lilia M. Schwarcz e Heloisa M. Starling. Brasil: uma biografia, 2015. Adaptado.)`;
export const transamazonicaText = {
  statement: TRANSAMAZONICA,
  blockTypes: ['label', 'quote', 'source'],
  works: ['Brasil: uma biografia'],
};

const CELULA_ACINOSA = `Analise a fotografia de uma célula acinosa pancreática, obtida por microscopia eletrônica, para responder às questões 37 e 38.

Cinco componentes celulares internos, 1, 2, 3, 4 e 5, estão devidamente indicados e numerados.`;
export const celulaAcinosaText = {
  statement: CELULA_ACINOSA,
  blockTypes: ['label', 'prose'],
  images: [img('uea2025vu-q37-celula-acinosa.svg', 'Micrografia eletrônica de uma célula acinosa pancreática com cinco componentes celulares numerados de 1 a 5.')],
};
