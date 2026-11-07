import { underline } from './uea2025ce-helpers.js';

const TIRINHA = {
  statement: 'Considere a tirinha de Eduardo Arruda, publicada no perfil @eduardobarruda do Instagram em 25.01.2025, para responder às questões 25 e 26.',
  blockTypes: ['label'],
  image: {
    file: 'uea2025ce-q25-tirinha-perfeccionismo.svg',
    alt: 'Tirinha: “Era perfeccionista. Tão perfeccionista que, para evitar qualquer falha, nem começava.” Os três primeiros quadros mostram uma mão desenhando; no último, o lápis permanece sobre a mesa.',
  },
};

const TRISTE = `Leia o trecho do romance Triste fim de Policarpo Quaresma, de Lima Barreto, para responder às questões de 27 a 31.

1  Ricardo agarrou o cálice com delicadeza e respeito, levou-o aos lábios e foi como se todo ele bebesse o licor nacional.

2  — Está bom, hein? — indagou o major.

3  — Magnífico — fez Ricardo, estalando os lábios.

4  — É de Angra. Agora tu vais ver que magnífico vinho do Rio Grande temos… Qual Borgonha! Qual Bordeaux! Temos no Sul muito melhores…

5  E o jantar correu assim, nesse tom. Quaresma exaltando os produtos nacionais: a banha, o toucinho e o arroz; a irmã fazia pequenas objeções e Ricardo dizia: “É, é, não há dúvida” — rolando nas órbitas os olhos pequenos, franzindo a testa diminuta que se sumia no cabelo áspero, forçando muito a sua fisionomia miúda e dura a adquirir uma expressão sincera de delicadeza e satisfação.

6  Acabado o jantar foram ver o jardim. Era uma maravilha; não tinha nem uma flor… Certamente não se podia tomar por tal míseros beijos-de-frade, palmas-de-santa-rita, quaresmas lutulentas¹, manacás melancólicos e outros belos exemplares dos nossos campos e prados. Como em tudo o mais, o major era em jardinagem essencialmente nacional. Nada de rosas, de crisântemos, de magnólias — flores exóticas; as nossas terras tinham outras mais belas, mais expressivas, mais olentes², como aquelas que ele tinha ali.

7  Ricardo ainda uma vez concordou e os dois entraram na sala, quando o crepúsculo vinha devagar, muito vagaroso e lento, como se fosse um longo adeus saudoso do sol ao deixar a terra, pondo nas coisas a sua poesia dolente³ e a sua deliquescência⁴.

8  Mal foi aceso o gás, o mestre de violão empunhou o instrumento, apertou as cravelhas, correu a escala, abaixando-se sobre ele como se o quisesse beijar. Tirou alguns acordes, para experimentar; e dirigiu-se ao discípulo, que já tinha o seu em posição:

9  — Vamos ver. Tire a escala, major.

(Triste fim de Policarpo Quaresma, 2010.)

1 lutulento: lamacento, lodoso.
2 olente: cheiroso, perfumado.
3 dolente: lamentosa, queixosa.
4 deliquescência: propriedade que certas substâncias têm de extrair água.`;
const tristeText = {
  statement: TRISTE,
  blockTypes: ['label', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'source', 'note'],
  works: ['Triste fim de Policarpo Quaresma'],
};

const CALIGRAFIA = `Leia o trecho do conto “A caligrafia de Deus”, de Márcio Souza.

Na loucura da Zona Franca, o povo era tão afável na sua ironia que chamava aquilo de bairro. Em dez anos, aquelas colinas suaves cortadas por um igarapé viram desaparecer os buritizais e a mata quase cerrada, as chácaras e os banhos, para dar lugar a um conjunto habitacional do BNH e às adesões provocadas pela iniciativa particular dos ribeirinhos que chegavam com a anual subida das águas. O conjunto habitacional nunca ficaria pronto, e era um inferno de calor e poeira ao meio-dia, uma geladeira tropical de umidade e bruma durante a noite. Nada mais restava da antiga mata e o deserto estendia-se pelo lado das casas dos ribeirinhos. Nos meses de chuva formava-se um atoleiro que era um verdadeiro nirvana para os porcos; nos meses sem chuva, uma paisagem marcada com todo o charme de um barro avermelhado que empoava as crianças e as galinhas.

(Márcio Souza. A caligrafia de Deus, 2007.)`;
const caligrafiaText = {
  statement: CALIGRAFIA,
  blockTypes: ['label', 'quote', 'source'],
  works: ['A caligrafia de Deus'],
};

const ARTE = `Leia o texto de Dan Ariely, traduzido por Ivo Korytowski, para responder às questões de 33 a 36.

O chamado da arte

1  Em abril de 2011, o programa de rádio This American Life apresentou uma matéria sobre Dan Weiss, um jovem universitário que trabalhava no Centro John F. Kennedy de Artes Cênicas, em Washington. Sua função era cuidar do estoque das lojas de suvenires do centro, onde uma equipe de 300 voluntários bem-intencionados — em sua maioria, aposentados que adoravam teatro e música — vendia as mercadorias aos visitantes.

2  As lojas de suvenires eram administradas como barracas de limonada. Não havia caixas registradoras, apenas caixas de papel onde os voluntários depositavam o dinheiro e de onde pegavam o troco. As lojinhas eram um ótimo negócio, com mais de 400 mil dólares em vendas de mercadorias anualmente. Mas tinham um grande problema: daquela quantia, uns 150 mil dólares desapareciam a cada ano.

3  Quando foi promovido a gerente, Dan assumiu a tarefa de capturar o ladrão. Começou a suspeitar de outro jovem funcionário cujo trabalho era levar o dinheiro ao banco. Contratou um detetive para montar uma operação e, numa noite de fevereiro, armaram a cilada. Dan colocou notas marcadas na caixa de papel e partiu. Depois, ele e o detetive se esconderam atrás de umas árvores ali por perto, aguardando pelo suspeito. Quando acabou o expediente e o membro suspeito da equipe foi embora, eles o abordaram e acharam algumas das notas marcadas no seu bolso. Caso encerrado, certo?

4  Não exatamente, como se constatou depois. O jovem empregado furtou apenas 60 dólares naquela noite, e, mesmo após sua demissão, o dinheiro e as mercadorias continuaram desaparecendo. O próximo passo de Dan foi criar um sistema de estoque com listas de preços e registros de vendas. Ele orientou os aposentados a anotarem o que era vendido e o que recebiam, e os furtos cessaram. O problema não era um único ladrão, mas a multidão de voluntários idosos, bem-intencionados, amantes das artes que se apropriavam dos produtos e do dinheiro que estavam ali de bobeira.

5  A moral dessa história não é nada edificante. Nas palavras de Dan: “Nós vamos nos apropriar de coisas que não nos pertencem se tivermos uma chance. (...) Muitas pessoas precisam de alguma forma de controle para fazerem a coisa certa.”

(A (honesta) verdade sobre a desonestidade, 2021. Adaptado.)`;
const arteText = {
  statement: ARTE,
  blockTypes: ['label', 'heading', 'quote', 'quote', 'quote', 'quote', 'quote', 'source'],
  works: ['A (honesta) verdade sobre a desonestidade'],
};

// A ordem canônica é a do Grupo 1. Os demais cadernos só poderão usar este
// módulo depois que suas permutações forem conferidas alternativa por alternativa.
const ORDERS = {
  1: {},
  2: {
    25: [2, 0, 3, 1, 4], 26: [0, 2, 3, 4, 1], 27: [2, 1, 4, 3, 0],
    28: [0, 3, 1, 2, 4], 29: [1, 2, 0, 4, 3], 30: [0, 2, 3, 4, 1],
    31: [2, 1, 0, 4, 3], 32: [0, 2, 1, 4, 3], 33: [4, 0, 3, 2, 1],
    34: [2, 0, 4, 1, 3], 35: [1, 0, 2, 3, 4], 36: [2, 1, 3, 4, 0],
  },
  3: {
    25: [0, 3, 2, 4, 1], 26: [2, 0, 3, 4, 1], 27: [4, 3, 2, 0, 1],
    28: [2, 3, 1, 0, 4], 29: [2, 3, 0, 4, 1], 30: [4, 2, 3, 1, 0],
    31: [4, 2, 0, 3, 1], 32: [0, 2, 1, 3, 4], 33: [1, 0, 2, 3, 4],
    34: [1, 0, 2, 3, 4], 35: [4, 2, 1, 3, 0], 36: [2, 0, 1, 3, 4],
  },
};

const SPECS = [
  {
    n: 25, subject: 'Português', content: 'Relações semânticas de causa e consequência', ...TIRINHA,
    statementAfter: 'Na situação exposta na tirinha, a informação “nem começava” representa', afterBlockTypes: ['command'],
    alternatives: ['a causa de ser “perfeccionista”.', 'uma consequência de ser “perfeccionista”.', 'a finalidade de ser “perfeccionista”.', 'uma condição necessária para ser “perfeccionista”.', 'uma comparação com a ideia de ser “perfeccionista”.'], answer: 'B',
    why: 'O perfeccionismo extremo leva o personagem a evitar qualquer falha e, como consequência, a nem começar a atividade.',
    wrong: { 0: 'A relação é invertida: o perfeccionismo é apresentado como causa, e não começar é o resultado.', 2: 'Não começar não é uma finalidade deliberada do perfeccionismo, mas seu desdobramento.', 3: 'A tirinha não apresenta deixar de começar como requisito para ser perfeccionista.', 4: 'Não há comparação entre dois comportamentos; há uma relação de causa e consequência.' },
  },
  {
    n: 26, subject: 'Português', content: 'Metalinguagem e criação artística', ...TIRINHA,
    statementAfter: 'A tirinha pode ser entendida como uma reflexão metalinguística. Nessa interpretação, a metalinguagem decorreria de a tirinha propor uma reflexão sobre', afterBlockTypes: ['command'],
    alternatives: ['a beleza dos pequenos acontecimentos.', 'a evolução dos materiais.', 'a falta de sentido da vida.', 'a psicologia humana.', 'a criação artística.'], answer: 'E',
    why: 'Ao usar o desenho e a representação de alguém que não consegue desenhar por receio de falhar, a tirinha reflete sobre o próprio processo de criação artística.',
    wrong: { 0: 'Os pequenos acontecimentos não são o objeto da autorreferência da tirinha.', 1: 'Lápis e papel são suportes da cena, não tema de uma evolução de materiais.', 2: 'A tirinha não discute o sentido da existência.', 3: 'O perfeccionismo tem dimensão psicológica, mas a metalinguagem está na reflexão sobre fazer arte.' },
  },
  {
    n: 27, subject: 'Literatura', content: 'Nacionalismo em Triste fim de Policarpo Quaresma', ...tristeText,
    statementAfter: 'Uma característica do personagem Policarpo Quaresma que o acompanha ao longo de todo o romance e que está presente nesse trecho é sua obsessão', afterBlockTypes: ['command'],
    alternatives: ['pela pátria.', 'pela flora.', 'pela música.', 'pela irmã.', 'pela comida.'], answer: 'A',
    why: 'A exaltação dos vinhos, dos alimentos e das plantas nacionais expressa o ufanismo de Policarpo e sua obsessão pela pátria.',
    wrong: { 1: 'A preferência pelas plantas nacionais é uma manifestação do ufanismo, não uma obsessão botânica isolada.', 2: 'A música aparece na cena, mas não organiza a característica recorrente destacada no romance.', 3: 'A irmã participa do jantar, sem ser objeto da obsessão do personagem.', 4: 'A comida nacional é outro exemplo do patriotismo exagerado, não sua causa ou essência.' },
  },
  {
    n: 28, subject: 'Literatura', content: 'Ironia no romance de Lima Barreto', ...tristeText,
    statementAfter: 'O narrador do romance manifesta-se ironicamente, em tom jocoso, em:', afterBlockTypes: ['command'],
    alternatives: ['“Ricardo ainda uma vez concordou e os dois entraram na sala” (7º parágrafo).', '“Ricardo agarrou o cálice com delicadeza e respeito, levou-o aos lábios e foi como se todo ele bebesse o licor nacional” (1º parágrafo).', '“o crepúsculo vinha devagar, muito vagaroso e lento, como se fosse um longo adeus saudoso do sol” (7º parágrafo).', '“Acabado o jantar foram ver o jardim. Era uma maravilha; não tinha nem uma flor” (6º parágrafo).', '“apertou as cravelhas, correu a escala, abaixando-se sobre ele como se o quisesse beijar” (8º parágrafo).'], answer: 'D',
    why: 'Chamar de “maravilha” um jardim que “não tinha nem uma flor” cria contraste jocoso entre o elogio ufanista e a realidade observada.',
    wrong: { 0: 'A frase apenas relata a concordância de Ricardo e o deslocamento das personagens.', 1: 'A expressão valoriza o gesto de Ricardo diante da bebida nacional, sem a contradição irônica explícita da alternativa D.', 2: 'O trecho é lírico e personifica o crepúsculo, sem o efeito jocoso pedido.', 4: 'A comparação com um beijo descreve o cuidado do músico com o instrumento.' },
  },
  {
    n: 29, subject: 'Português', content: 'Valor semântico de expressões temporais', ...tristeText,
    statementAfter: 'No contexto em que está inserido, o trecho sublinhado expressa um tempo em:', afterBlockTypes: ['command'],
    alternatives: [
      `“E o jantar correu ${underline('assim, nesse tom')}” (5º parágrafo).`,
      `“Tirou alguns acordes, para experimentar; e dirigiu-se ao discípulo, ${underline('que já tinha o seu em posição')}” (8º parágrafo).`,
      `“${underline('Mal foi aceso o gás')}, o mestre de violão empunhou o instrumento” (8º parágrafo).`,
      `“Ricardo agarrou o cálice ${underline('com delicadeza e respeito')}” (1º parágrafo).`,
      `“Como ${underline('em tudo o mais')}, o major era em jardinagem essencialmente nacional” (6º parágrafo).`,
    ], answer: 'C',
    why: '“Mal” equivale a “assim que”: o mestre empunhou o violão imediatamente depois de o gás ser aceso, estabelecendo relação temporal.',
    wrong: { 0: '“Assim, nesse tom” caracteriza o modo como o jantar se desenvolveu.', 1: 'A oração sublinhada caracteriza a situação do discípulo e de seu instrumento, sem introduzir a relação temporal pedida.', 3: '“Com delicadeza e respeito” indica o modo da ação de agarrar o cálice.', 4: '“Em tudo o mais” insere a jardinagem em um conjunto de outros domínios, sem indicar tempo.' },
  },
  {
    n: 30, subject: 'Português', content: 'Classes de palavras e equivalência adverbial', ...tristeText,
    statementAfter: `“Qual Borgonha! Qual Bordeaux! Temos no Sul ${underline('muito')} melhores…” (4º parágrafo)\n\nMantendo a correção gramatical e o sentido original do texto, a palavra sublinhada pode ser substituída por:`, afterBlockTypes: ['quote', 'command'],
    alternatives: ['bem.', 'outros.', 'frequentemente.', 'comparativamente.', 'vários.'], answer: 'A',
    why: 'Tanto “muito” quanto “bem” podem intensificar o adjetivo “melhores”: “Temos no Sul bem melhores”.',
    wrong: { 1: '“Outros” é pronome ou determinante e não exerce a função de intensificar o adjetivo.', 2: '“Frequentemente” indica frequência e altera o sentido da frase.', 3: '“Comparativamente” não preserva o valor intensificador de “muito”.', 4: '“Vários” acompanha substantivo e não pode substituir o advérbio que modifica “melhores”.' },
  },
  {
    n: 31, subject: 'Português', content: 'Transitividade verbal e objeto direto', ...tristeText,
    statementAfter: `“e foi como se todo ele ${underline('bebesse')} o licor nacional” (1º parágrafo)\n\nNessa frase, o verbo sublinhado tem um objeto direto — “o licor nacional” —, isto é, o verbo tem um complemento e é ligado a ele diretamente, sem a presença de uma preposição.\n\nO verbo sublinhado tem também um objeto direto em:`, afterBlockTypes: ['quote', 'prose', 'command'],
    alternatives: [`“E o jantar ${underline('correu')} assim, nesse tom” (5º parágrafo)`, `“quando o crepúsculo ${underline('vinha')} devagar” (7º parágrafo)`, `“${underline('Está')} bom, hein?” (2º parágrafo)`, `“o major ${underline('era')} em jardinagem essencialmente nacional” (6º parágrafo)`, `“como aquelas que ele ${underline('tinha')} ali” (6º parágrafo)`], answer: 'E',
    why: 'Em “ele tinha [aquelas plantas] ali”, o verbo “tinha” é transitivo direto; “aquelas” funciona como objeto direto na construção relativa.',
    wrong: { 0: '“Correu” é intransitivo nesse contexto; “assim, nesse tom” é uma circunstância de modo.', 1: '“Vinha” é intransitivo e “devagar” é adjunto adverbial.', 2: '“Está” é verbo de ligação, seguido do predicativo “bom”.', 3: '“Era” é verbo de ligação e não recebe objeto direto.' },
  },
  {
    n: 32, subject: 'Literatura', content: 'Crítica urbana em Márcio Souza', ...caligrafiaText,
    statementAfter: 'O ambiente apresentado, em que vive o “povo” referido no início do trecho, colabora no conto para estabelecer', afterBlockTypes: ['command'],
    alternatives: ['um posicionamento favorável à integração dos povos originários ao espaço urbano da cidade de Manaus.', 'uma crítica aberta ao precário processo de modernização da cidade de Manaus.', 'uma defesa ponderada dos benefícios trazidos pela modernização à cidade de Manaus.', 'um lamento saudosista acerca da diminuição do ritmo de crescimento da cidade de Manaus.', 'um retrato idealizado da natureza exuberante que atravessa a cidade de Manaus.'], answer: 'B',
    why: 'A destruição da mata, o conjunto habitacional inacabado, o calor, a poeira e o atoleiro compõem uma crítica à modernização precária de Manaus.',
    wrong: { 0: 'O trecho não apresenta uma integração favorável de povos originários; descreve degradação e precariedade.', 2: 'Os efeitos descritos são negativos, não uma defesa dos benefícios da modernização.', 3: 'O problema não é a diminuição do crescimento, mas a forma excludente e degradante como ele ocorre.', 4: 'A natureza exuberante é apagada pela ocupação, e não idealizada como paisagem preservada.' },
  },
  {
    n: 33, subject: 'Português', content: 'Interpretação e inferência causal', ...arteText,
    statementAfter: 'De acordo com o texto, a explicação correta para o desaparecimento de grande quantia de dinheiro das lojas era:', afterBlockTypes: ['command'],
    alternatives: ['o administrador das lojas tinha errado nas contas ao somar o dinheiro.', 'os funcionários tinham dificuldade de fazer as contas durante as vendas.', 'um dos funcionários furtava o dinheiro quando o levava ao banco.', 'vários funcionários furtavam pequenas quantias ao longo do ano.', 'o administrador das lojas furtava uma pequena quantia várias vezes no ano.'], answer: 'D',
    why: 'Os furtos continuaram após a demissão do suspeito e cessaram com o controle de todos os voluntários, mostrando que muitas pessoas se apropriavam de pequenas quantias.',
    wrong: { 0: 'O texto não atribui o desaparecimento a erros de soma do administrador.', 1: 'A dificuldade de cálculo não é apresentada como causa; os registros revelam apropriações.', 2: 'O jovem suspeito furtou apenas 60 dólares, e os desaparecimentos continuaram após sua demissão.', 4: 'Dan investigava os furtos e implantou o controle; não é identificado como o responsável.' },
  },
  {
    n: 34, subject: 'Português', content: 'Comparação e organização no texto', ...arteText,
    statementAfter: 'A característica das lojas de suvenires que as fazia semelhantes a “barracas de limonada” (2º parágrafo) era que as lojas', afterBlockTypes: ['command'],
    alternatives: ['tinham uma estrutura organizacional precária.', 'funcionavam como uma instituição de caridade.', 'vendiam outros produtos além dos suvenires.', 'utilizavam mão de obra não remunerada para funcionar.', 'geravam um grande lucro aos proprietários.'], answer: 'A',
    why: 'A ausência de caixas registradoras, o uso de caixas de papel e a falta de controle de estoque revelam organização administrativa precária.',
    wrong: { 1: 'As lojas vendiam suvenires e não são descritas como instituição de caridade.', 2: 'A comparação não decorre da diversidade de produtos.', 3: 'Embora houvesse voluntários, a explicação imediata da semelhança está na ausência de controles e registros.', 4: 'O texto informa vendas e perdas, sem atribuir grande lucro a proprietários.' },
  },
  {
    n: 35, subject: 'Português', content: 'Voz passiva e concordância verbal', ...arteText,
    statementAfter: `“Dan ${underline('assumiu')} a tarefa de capturar o ladrão” (3º parágrafo)\n\nAo se transpor a oração centrada no verbo sublinhado para a voz passiva, esse verbo assume a forma:`, afterBlockTypes: ['quote', 'command'],
    alternatives: ['assumir.', 'era assumida.', 'foi assumido.', 'assumiu.', 'foi assumida.'], answer: 'E',
    why: 'Na passiva, “a tarefa” vira sujeito: “A tarefa de capturar o ladrão foi assumida por Dan”. O pretérito perfeito e o feminino singular são preservados.',
    wrong: { 0: '“Assumir” permanece no infinitivo e não forma a voz passiva exigida.', 1: '“Era assumida” muda o tempo verbal para o pretérito imperfeito.', 2: 'O particípio deve concordar com “tarefa”: “assumida”, não “assumido”.', 3: '“Assumiu” mantém a forma ativa.' },
  },
  {
    n: 36, subject: 'Português', content: 'Regência e pronomes relativos', ...arteText,
    statementAfter: `“Começou a suspeitar de outro jovem funcionário cujo ${underline('trabalho era levar o dinheiro ao banco')}.” (3º parágrafo)\n\nSuponha que o trecho sublinhado seja substituído por “era destinada a tarefa de levar o dinheiro ao banco”. Para manter a correção gramatical, na nova frase a palavra “cujo” deve ser substituída por:`, afterBlockTypes: ['quote', 'command'],
    alternatives: ['de quem.', 'à qual.', 'o qual.', 'do qual.', 'a quem.'], answer: 'E',
    why: 'A tarefa era destinada ao funcionário. O relativo retoma “funcionário” e recebe a preposição exigida por “destinada a”: “funcionário a quem era destinada a tarefa...”.',
    wrong: { 0: '“De quem” indicaria posse ou origem e não atende à regência de “destinada a”.', 1: '“À qual” retoma inadequadamente um antecedente feminino ou inanimado, não “funcionário”.', 2: 'Falta a preposição “a” exigida pela construção.', 3: '“Do qual” usa a preposição “de”, incompatível com “destinada a”.' },
  },
];

export function commonQuestions(q, group, img) {
  if (!ORDERS[group]) throw new Error(`Permutações das questões comuns ainda não conferidas para o Grupo ${group}.`);
  return SPECS.map((spec) => {
    const { image, ...base } = spec;
    const order = ORDERS[group][spec.n] || [0, 1, 2, 3, 4];
    const canonicalCorrect = 'ABCDE'.indexOf(spec.answer);
    const wrong = {};
    order.forEach((canonicalIndex, newIndex) => {
      if (canonicalIndex !== canonicalCorrect) wrong[newIndex] = spec.wrong[canonicalIndex];
    });
    return q({
      ...base,
      ...(image ? { images: [img(image.file, image.alt)] } : {}),
      alternatives: order.map((index) => spec.alternatives[index]),
      answer: 'ABCDE'[order.indexOf(canonicalCorrect)],
      wrong,
    });
  });
}
