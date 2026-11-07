export const tex = String.raw;
export const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const VERSION = '20261105-uea2024ce-1';

const CIRANDA = `Leia o trecho do romance Ciranda de pedra, de Lygia Fagundes Telles, para responder às questões de 26 a 30.

Virgínia subiu precipitadamente a escada e trancou-se no quarto.

— Abre, menina — ordenou Luciana do lado de fora.

Virgínia encostou-se à parede e pôs-se a roer as unhas, seguindo com o olhar uma formiguinha que subia pelo batente da porta. “Se entrar aí nessa fresta, você morre!”, sussurrou soprando-a para o chão. “Eu te salvo, bobinha, não tenha medo”, disse em voz alta. E afastou-a com o indicador. Nesse instante fixou o olhar na unha roída até a carne. Pensou nas unhas de Otávia. E esmagou a formiga.

— Virgínia, eu não estou brincando, menina. Abre logo, anda!

— Agora não posso.

— Não pode por quê?

— Estou fazendo uma coisa — respondeu evasivamente.

Pensava em Conrado a lhe explicar que os bichos são como gente, têm alma de gente, e que matar um bichinho era o mesmo que matar uma pessoa. “Se você for má e começar a matar só por gosto, na outra vida você será bicho também, mas um desses bichos horríveis, cobra, rato, aranha...” Deitou-se no assoalho e começou a se espojar angustiosamente, avançando de rastros até o meio do quarto.

— Ou você abre ou conto para o seu tio. É isto que você quer, é isto?

Virgínia imobilizou-se. Ser cobra machucava os cotovelos, melhor ser borboleta. Mas quem ia ser borboleta decerto era Otávia, que era linda. “E eu sou feia e ruim, ruim, ruim!”, exclamou dando murros no chão. Ergueu a cabeça num desafio:

— Pode contar tudo, tio Daniel não me manda, quem manda em mim é meu pai, ouviu? Meu pai.

(Ciranda de pedra, 2009.)`;

const SERIAL = `Considere o texto “Serial lover”, escrito por Carpinejar, para responder às questões de 32 a 35.

Existe uma infidelidade mais secreta e menos evidente, que acontece depois do relacionamento. Só acontece depois. É uma traição póstuma, retardatária, residual.

É quando você repete os mesmos lugares, os mesmos apelos, as mesmas confidências com outro. É quando você insiste em escrever e tecer declarações exatamente iguais.

É uma extorsão sentimental colocar um desejo para sua nova companhia como se fosse inédito.

Pois a paixão só é idêntica para quem não enxerga as diferenças.

É como remanejar presentes, aproveitar alianças antigas.

Você prova que não tem criatividade nenhuma, demonstra a maior apatia: refaz os passeios que já realizou, leva para os restaurantes que frequentava, as baladas e festas conhecidas, reincide nos roteiros de viagem, destina sonhos e palavras já gastos, reemprega até os nomes aprovados para quando nascessem seus filhos.

Mudou a pessoa, mas não o seu jeito de seduzir. Mudou a pessoa, mas não sua rotina de amar. Mudou a pessoa, mas não seu script.

É uma melancólica sobreposição, desastrada colagem.

Nem precisa cometer o ato falho de trocar o nome do atual pelo ex, porque estará revisitando atmosferas e cenários. Experimenta locações contaminadas por juras velhas.

Não há sensação mais ingrata para seu namorado anterior ao perceber que era mais um. Um qualquer, nem um pouco especial. Um sósia de cenas românticas. Um dublê da adrenalina e dos feromônios.

Você oferece um passado usado sob o disfarce de futuro. Alcança aquilo que foi ensaiado com o antecessor. Não se dá o luxo de disfarçar, o trabalho de maquiar, colocar uma manta no mobiliário da memória.

Recorrendo à fórmula fixa de história feliz, estabelece uma competição imaginária, anula a individualidade do seu par, apaga a invenção a dois e a costura por caminhos surpreendentes e inesquecíveis.

Acredita em sua inocência porque ninguém comentará o assunto. Desfruta da tolerância dos garçons, dos colegas, dos amigos, dos parentes. É realmente um segredo com pequenas chances de ser revelado, porém a consciência não é boba e um dia se vinga.

O que vive está longe de ser amor, é obsessão.

(Carpinejar. Para onde vai o amor, 2015.)`;

const COMMON = {
  ciranda: {
    statement: CIRANDA,
    blockTypes: ['label', ...Array(11).fill('quote'), 'source'],
    works: ['Ciranda de pedra'],
  },
  serial: {
    statement: SERIAL,
    blockTypes: ['label', ...Array(14).fill('quote'), 'source'],
    works: ['Para onde vai o amor'],
  },
};

export function createGroup(group) {
  if (![1, 2, 3].includes(group)) throw new Error(`Grupo UEA inválido: ${group}`);
  const prefix = `uea2024ce${group}`;
  const shared = {
    exam: `UEA — Conhecimentos Específicos · Grupo ${group}`,
    year: 2024,
    accessYear: 2025,
    booklet: 'Vestibular 2024 — Acesso 2025',
    phase: 'Conhecimentos Específicos e Redação',
    originalUrl: `/documentos/uea2024/especificos-grupo${group}-prova.pdf`,
    officialAnswerUrl: `/documentos/uea2024/especificos-grupo${group}-gabarito.pdf`,
    kind: 'objective', correctionOrigin: 'official',
    examId: `uea-2024-especificos-grupo${group}`,
    institution: 'UEA', banca: 'VUNESP', modality: 'conhecimentos-especificos',
  };
  const img = (file, alt, caption = '') => ({
    src: `/images/uea2024ce${group}/${file}?v=${VERSION}`, alt, ...(caption ? { caption } : {}),
  });
  const visual = (item) => img(item.file, item.alt, item.caption || '');

  function q(config) {
    const {
      n, subject, content, difficulty = 'Média', alternatives, answer, why, wrong = {},
      common, visuals = [], afterVisuals = [], alternativeVisuals, ...extra
    } = config;
    const base = COMMON[common] || {};
    const correct = 'ABCDE'.indexOf(answer);
    if (correct < 0 || alternatives.length !== 5) throw new Error(`Configuração inválida em ${prefix} Q${n}`);
    const analyses = alternatives.map((_, index) => {
      if (index === correct) return `Correta. ${why}`;
      if (!wrong[index]) throw new Error(`Análise ausente: ${prefix} Q${String(n).padStart(2, '0')}, alternativa ${'ABCDE'[index]}`);
      return `Incorreta. ${wrong[index]}`;
    });
    const statement = config.statement ?? base.statement ?? '';
    const blockTypes = config.blockTypes ?? base.blockTypes ?? statement.split('\n\n').map(() => 'prose');
    const images = visuals.map(visual);
    const afterImages = afterVisuals.map(visual);
    const alternativeImages = alternativeVisuals?.map((group) => group.map(visual));
    return {
      ...shared, ...base,
      id: `${prefix}-q${String(n).padStart(2, '0')}`,
      number: `Questão ${String(n).padStart(2, '0')}`, subject, content, difficulty,
      statement, blockTypes, alternatives, correct,
      resolution: extra.resolution || [why], analyses,
      ...(images.length ? { images } : {}),
      ...(afterImages.length ? { afterImages } : {}),
      ...(alternativeImages ? { alternativeImages } : {}),
      ...extra,
    };
  }

  function essay(config) {
    const { visuals = [], ...extra } = config;
    return {
      ...shared,
      id: `${prefix}-redacao`, number: 'Redação', kind: 'essay', correctionOrigin: 'editorial', officialAnswerUrl: null,
      subject: 'Português', content: 'Produção textual', difficulty: 'Média',
      resolution: [], analyses: [],
      ...extra,
      ...(visuals.length ? { images: visuals.map(visual) } : {}),
    };
  }

  return { q, img, essay, shared };
}
