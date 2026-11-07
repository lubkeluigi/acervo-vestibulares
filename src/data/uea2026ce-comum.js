import { underline } from './uea2026ce-helpers.js';

const JARDIM = `Leia o poema de Ana Martins Marques para responder às questões de 25 a 27.

Jardim

Se o jardineiro abandonasse no meio a tarefa
e cansado se sentasse numa cadeira
e gastasse toda a tarde
sob rosas gordas que são apenas rosas
e cegam de alegria
enquanto o jardim
nele mesmo
se contorce
tirando de dentro de si
o sexo intrincado das camélias
e a morte e a loucura dos lírios
e o tédio suburbano das goiabas
sob comoções antigas
talvez se sentisse um poeta
olhando o poema
que não sabe terminar.

(A vida submarina, 2021.)`;
const jardimBlocks = ['label', 'poem-title', 'poem', 'source'];
const jardimText = { statement: JARDIM, blockTypes: jardimBlocks, works: ['A vida submarina'] };

const TRISTE = `Leia o trecho do romance Triste fim de Policarpo Quaresma, de Lima Barreto, para responder às questões de 28 a 32.

1  Não fora ele, porém, quem se lembrara; fora a afilhada que lhe trouxe à ideia aquele doce acabar para a sua vida. Vendo-o naquele estado de abatimento, triste e taciturno, sem coragem de sair, enclausurado em sua casa de São Cristóvão, Olga dirigiu-se um dia ao padrinho meiga e filialmente:

— O padrinho por que não compra um sítio? Seria tão bom fazer as suas culturas, ter o seu pomar, a sua horta... não acha?

Tão taciturno que ele estivesse, não pôde deixar de modificar imediatamente a sua fisionomia à lembrança da moça. Era um velho desejo seu, esse de tirar da terra o alimento, a alegria e a fortuna; e foi lembrando dos seus antigos projetos que respondeu à afilhada:

— É verdade, minha filha. Que magnífica ideia tens tu! Há por aí tantas terras férteis sem emprego... A nossa terra tem os terrenos mais férteis do mundo... O milho pode dar até duas colheitas e quatrocentos por um...

5  A moça esteve quase arrependida da sua lembrança. Pareceu-lhe que ia atear no espírito do padrinho manias já extintas.

— Em toda a parte — não acha, meu padrinho? — há terras férteis.

— Mas como no Brasil, apressou-se ele em dizer, há poucos países que as tenham.

(Triste fim de Policarpo Quaresma, 2021.)`;
const tristeText = {
  statement: TRISTE,
  blockTypes: ['label', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'source'],
  works: ['Triste fim de Policarpo Quaresma'],
};

const SANTO = `Leia o trecho inicial do texto “Santo de casa não faz milagre”, de Vera Iaconelli, para responder às questões de 33 a 35.

1  Você pode ter a seu lado o melhor dos companheiros, daqueles que não acham que estão te fazendo um favor ao “ajudar” e que sinceramente sabem suas responsabilidades junto aos filhos. Um cara maduro o suficiente para não sentir sua virilidade ameaçada por cuidar de crianças, nem obcecado pela carreira de tal forma que eliminaria qualquer chance de conviver com a família. Um tipo de homem que já foi inimaginável e tão fácil de encontrar quanto um unicórnio passa a ser cada vez mais comum, cultuado e exigido. Talvez você seja a sortuda que se casou com um.

Tendo a melhor aposta de pai e companheiro a seu lado, vocês decidem ter filhos. Cinquenta/cinquenta, não é? Não.

Haja a revolução social que houver, o ciclo gravidez, parto e pós-parto cobra um preço inexorável de quem gesta. Os enjoos e o sono do primeiro trimestre — tente escrever uma tese com as pálpebras fechando! —, as infindáveis consultas, as avaliações médicas, a abstinência alcoólica, a experiência acachapante do parto, a corrida de obstáculos da amamentação tiram qualquer dúvida de que a conta não é divisível por dois.

Na reprodução humana, o corpo de quem gesta está totalmente comprometido por, no mínimo, um ano — mas, de fato, eternamente.

5  Os homens, mesmo os descritos antes, não têm como dividir isso com a mulher, e por vezes chegam a invejar a experiência que jamais terão — nesse sentido, temos que dar graças aos céus por pelo menos um ficar fora dessa loucura.

Além disso, por esse recolhimento, necessário para termos filhos, as mulheres são penalizadas em suas carreiras de forma clara. O famoso “quem pariu Mateus o embale” funciona de forma exemplar, sobretudo se ela trabalha — o que implica a maioria absoluta das mulheres hoje. Enquanto o homem recebe felicitações no trabalho pela futura paternidade, o afastamento físico, cognitivo e psíquico da gestante cobra seu preço na carreira e na vida pessoal.

(Felicidade ordinária, 2024.)`;
const santoText = {
  statement: SANTO,
  blockTypes: ['label', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'source'],
  works: ['Santo de casa não faz milagre', 'Felicidade ordinária'],
};

// A ordem canônica é a do Grupo 1. Cada vetor indica quais alternativas
// canônicas aparecem em A, B, C, D e E nos demais cadernos.
const ORDERS = {
  1: {},
  2: {
    25: [0, 4, 3, 2, 1], 26: [1, 2, 0, 4, 3], 27: [0, 1, 4, 2, 3],
    28: [0, 2, 3, 1, 4], 29: [2, 3, 1, 0, 4], 30: [3, 0, 1, 4, 2],
    31: [1, 3, 0, 2, 4], 32: [4, 3, 0, 2, 1], 33: [1, 0, 4, 2, 3],
    34: [0, 4, 3, 2, 1], 35: [2, 3, 1, 0, 4], 36: [4, 1, 0, 2, 3],
  },
  3: {
    25: [0, 4, 2, 1, 3], 26: [2, 1, 4, 3, 0], 27: [3, 1, 2, 0, 4],
    28: [2, 3, 1, 0, 4], 29: [3, 0, 1, 4, 2], 30: [1, 3, 2, 0, 4],
    31: [1, 3, 0, 2, 4], 32: [1, 2, 3, 0, 4], 33: [0, 4, 2, 1, 3],
    34: [0, 4, 3, 2, 1], 35: [1, 0, 3, 2, 4], 36: [3, 4, 2, 0, 1],
  },
};

const SPECS = [
  {
    n: 25, subject: 'Literatura', content: 'Metalinguagem e estrutura do poema Jardim', ...jardimText,
    statementAfter: 'Na estrutura estabelecida pelo eu lírico, “poema” é comparado a', afterBlockTypes: ['command'],
    alternatives: ['“jardineiro”.', '“sexo”.', '“poeta”.', '“tédio”.', '“jardim”.'], answer: 'E',
    why: 'O eu lírico estabelece uma analogia entre o jardim e o poema: ambos parecem exigir trabalho e condução, mas também escapam ao controle de quem os cultiva ou escreve.',
    wrong: { 0: 'O jardineiro é comparado ao poeta, não ao poema.', 1: 'O “sexo intrincado das camélias” integra as imagens do jardim, mas não é o referente da comparação com poema.', 2: 'O poeta ocupa a posição de quem contempla e tenta elaborar o poema.', 3: 'O tédio é uma das sensações associadas às goiabas, não o elemento comparado ao poema.' },
  },
  {
    n: 26, subject: 'Literatura', content: 'Metalinguagem na poesia contemporânea', ...jardimText,
    statementAfter: 'O poema de Ana Martins Marques caracteriza-se, sobretudo, por seu teor', afterBlockTypes: ['command'],
    alternatives: ['metalinguístico.', 'político-social.', 'nostálgico.', 'satírico.', 'místico.'], answer: 'A',
    why: 'O poema reflete sobre o próprio fazer poético: o eu lírico imagina o jardineiro como poeta diante de um poema que não sabe terminar, caracterizando metalinguagem.',
    wrong: { 1: 'Não há discussão político-social central no texto.', 2: 'O poema não se organiza pela saudade ou pela evocação nostálgica do passado.', 3: 'Não predomina a sátira ou a ironia contra alguém.', 4: 'As imagens do jardim não constroem uma experiência mística ou religiosa.' },
  },
  {
    n: 27, subject: 'Português', content: 'Orações subordinadas adjetivas e funções sintáticas', ...jardimText,
    statementAfter: `Em “sob rosas gordas ${underline('que são apenas rosas')}”, o trecho sublinhado é uma oração que exerce a mesma função sintática do elemento sublinhado em:`, afterBlockTypes: ['command'],
    alternatives: [`“Se o jardineiro abandonasse no meio ${underline('a tarefa')}”.`, `“e cansado se sentasse ${underline('numa cadeira')}”.`, `“e ${underline('cegam')} de alegria”.`, `“o sexo ${underline('intrincado')} das camélias”.`, `“e a ${underline('morte')} e a loucura dos lírios”.`], answer: 'D',
    why: '“Que são apenas rosas” é oração subordinada adjetiva e caracteriza “rosas”, assim como o adjetivo “intrincado” caracteriza o substantivo “sexo”.',
    wrong: { 0: '“A tarefa” funciona como objeto direto de “abandonasse”, não como termo caracterizador de um substantivo.', 1: '“Numa cadeira” é adjunto adverbial de lugar.', 2: '“Cegam” é forma verbal, e não termo com função adjetiva.', 4: '“Morte” é substantivo, não um modificador adjetivo de outro nome.' },
  },
  {
    n: 28, subject: 'Literatura', content: 'Nacionalismo em Triste fim de Policarpo Quaresma', ...tristeText,
    statementAfter: `“A moça esteve quase arrependida da sua lembrança. Pareceu-lhe que ia atear no espírito do padrinho ${underline('manias já extintas')}.” (5º parágrafo)\n\nNo contexto do romance, a expressão sublinhada faz referência à seguinte característica de Policarpo:`, afterBlockTypes: ['quote', 'command'],
    alternatives: ['sua tendência a falar muito.', 'seu nacionalismo extremado.', 'seu apego excessivo ao dinheiro.', 'sua dificuldade de se comunicar.', 'seu receio de estar sendo perseguido.'], answer: 'B',
    why: 'As “manias” retomam o ufanismo e o nacionalismo extremado de Policarpo, reativados pela conversa sobre a fertilidade excepcional das terras brasileiras.',
    wrong: { 0: 'A expressão não se refere a loquacidade, mas às ideias nacionalistas do personagem.', 2: 'O episódio não trata de avareza ou acúmulo de dinheiro.', 3: 'Policarpo se comunica com Olga sem dificuldade; o traço retomado é seu nacionalismo.', 4: 'Não há menção a perseguição nesse trecho.' },
  },
  {
    n: 29, subject: 'Português', content: 'Sentido figurado e conotação', ...tristeText,
    statementAfter: 'Está empregada em sentido figurado a palavra a sublinhada em:', afterBlockTypes: ['command'],
    alternatives: [`“Era um ${underline('velho')} desejo seu” (3º parágrafo).`, `“Olga dirigiu-se um dia ao padrinho ${underline('meiga')} e filialmente” (1º parágrafo).`, `“aquele ${underline('doce')} acabar para a sua vida” (1º parágrafo).`, `“estado de abatimento, ${underline('triste')} e taciturno” (1º parágrafo).`, `“Há por aí tantas terras ${underline('férteis')} sem emprego” (4º parágrafo).`], answer: 'C',
    why: '“Doce” qualifica figuradamente o acabar da vida, atribuindo-lhe suavidade e acolhimento; não se refere ao sentido literal de sabor açucarado.',
    wrong: { 0: '“Velho” indica que o desejo existia havia muito tempo, em sentido temporal direto.', 1: '“Meiga” descreve diretamente a maneira carinhosa de Olga se dirigir ao padrinho.', 3: '“Triste” descreve diretamente o estado emocional de Policarpo.', 4: '“Férteis” tem sentido literal: terras aptas à produção agrícola.' },
  },
  {
    n: 30, subject: 'Português', content: 'Orações subordinadas adverbiais concessivas', ...tristeText,
    statementAfter: `“${underline('Tão taciturno que ele estivesse')}, não pôde deixar de modificar imediatamente a sua fisionomia à lembrança da moça.” (3º parágrafo)\n\nMantendo o sentido original da frase, a oração sublinhada pode ser substituída por:`, afterBlockTypes: ['quote', 'command'],
    alternatives: ['Como se ele estivesse tão taciturno.', 'Uma vez que ele estava tão taciturno.', 'Contanto que ele estava tão taciturno.', 'Desde que ele estava tão taciturno.', 'Ainda que ele estivesse tão taciturno.'], answer: 'E',
    why: 'A oração admite uma condição que não impede a ação principal; “ainda que” preserva adequadamente esse valor concessivo e a forma verbal “estivesse”.',
    wrong: { 0: '“Como se” introduz comparação ou suposição, não concessão.', 1: '“Uma vez que” estabelece relação causal.', 2: '“Contanto que” introduz condição necessária.', 3: '“Desde que” também tem valor condicional nesse contexto.' },
  },
  {
    n: 31, subject: 'Português', content: 'Voz passiva no infinitivo', ...tristeText,
    statementAfter: 'Transposta para a voz passiva, a oração “tirar da terra o alimento” (3º parágrafo) assume a forma:', afterBlockTypes: ['command'],
    alternatives: ['o alimento é tirado da terra.', 'o alimento será tirado da terra.', 'o alimento seria tirado da terra.', 'o alimento ser tirado da terra.', 'o alimento foi tirado da terra.'], answer: 'D',
    why: 'Como o verbo está no infinitivo, a passiva deve conservar esse tempo: “ser tirado”, com “o alimento” assumindo a função de sujeito paciente.',
    wrong: { 0: '“É tirado” desloca a construção para o presente do indicativo.', 1: '“Será tirado” introduz o futuro do presente.', 2: '“Seria tirado” introduz o futuro do pretérito.', 4: '“Foi tirado” desloca a construção para o pretérito perfeito.' },
  },
  {
    n: 32, subject: 'Português', content: 'Referenciação pronominal em Triste fim de Policarpo Quaresma', ...tristeText,
    statementAfter: `“Não fora ${underline('ele')}, porém, quem se lembrara; fora a afilhada que ${underline('lhe')} trouxe à ideia aquele doce acabar para a sua vida. Vendo-${underline('o')} naquele estado de abatimento, triste e taciturno, sem coragem de sair, enclausurado em sua casa de São Cristóvão” (1º parágrafo).\n\nOs pronomes sublinhados referem-se`, afterBlockTypes: ['quote', 'command'],
    alternatives: ['todos a Policarpo.', 'a Olga, a Policarpo e a Policarpo, respectivamente.', 'a Olga, a Olga e a Policarpo, respectivamente.', 'a Policarpo, a Olga e a Olga, respectivamente.', 'todos a Olga.'], answer: 'A',
    why: 'Os três pronomes retomam Policarpo: ele não tivera a lembrança, a ideia foi trazida a ele pela afilhada e Olga o observava abatido.',
    wrong: { 1: 'O primeiro “ele” não retoma Olga; refere-se a Policarpo.', 2: 'Nenhum dos três pronomes tem Olga como referente.', 3: '“Lhe” e “o” não se referem a Olga, mas a Policarpo.', 4: 'Olga é a afilhada que realiza as ações de trazer a ideia e observar, não o referente dos pronomes.' },
  },
  {
    n: 33, subject: 'Português', content: 'Interpretação e divisão do trabalho reprodutivo', ...santoText,
    statementAfter: 'No trecho “Cinquenta/cinquenta, não é? Não.” (2º parágrafo), a autora contesta a ideia de que', afterBlockTypes: ['command'],
    alternatives: ['o ônus da reprodução humana pode ser dividido simetricamente entre o casal.', 'a maternidade inevitavelmente afasta as mulheres de suas atividades profissionais.', 'as mulheres possuem uma habilidade natural para cuidar dos filhos.', 'os homens têm dificuldade em reconhecer suas responsabilidades na criação dos filhos.', 'a chegada dos filhos transforma profundamente a vida afetiva do casal.'], answer: 'A',
    why: 'A resposta negativa desfaz a sugestão de igualdade “cinquenta/cinquenta”: gestação, parto e amamentação impõem à mulher um ônus que não pode ser dividido igualmente.',
    wrong: { 1: 'A autora discute penalizações profissionais, mas não afirma que todo afastamento seja inevitável nem é essa a ideia contestada no trecho.', 2: 'O texto critica a naturalização do cuidado, em vez de defender uma habilidade feminina inata.', 3: 'O trecho trata da divisão do ônus reprodutivo, não da dificuldade masculina de reconhecer responsabilidades.', 4: 'A transformação da vida afetiva não é o ponto negado pela autora.' },
  },
  {
    n: 34, subject: 'Português', content: 'Vocabulário em contexto e sinonímia', ...santoText,
    statementAfter: `“Um tipo de homem que já foi inimaginável e tão fácil de encontrar quanto um unicórnio passa a ser cada vez mais ${underline('comum')}, cultuado e exigido. Talvez você seja a sortuda que se casou com um.” (1º parágrafo)\n\nSem alterar o sentido do texto, a palavra sublinhada pode ser substituída por:`, afterBlockTypes: ['quote', 'command'],
    alternatives: ['simples.', 'frequente.', 'público.', 'superficial.', 'desimportante.'], answer: 'B',
    why: '“Comum” significa frequente: aquele tipo de homem antes considerado raro passa a ser encontrado com maior frequência.',
    wrong: { 0: '“Simples” não expressa frequência de ocorrência.', 2: '“Público” não substitui o sentido de algo que se torna frequente.', 3: '“Superficial” introduz um juízo sobre profundidade ausente do trecho.', 4: '“Desimportante” é contrário à valorização presente em “cultuado e exigido”.' },
  },
  {
    n: 35, subject: 'Português', content: 'Interlocução e imperativo', ...santoText,
    statementAfter: 'A autora dirige-se explicitamente a seu leitor em:', afterBlockTypes: ['command'],
    alternatives: ['“Os homens, mesmo os descritos antes, não têm como dividir isso com a mulher, e por vezes chegam a invejar a experiência que jamais terão” (5º parágrafo).', '“Na reprodução humana, o corpo de quem gesta está totalmente comprometido por, no mínimo, um ano — mas, de fato, eternamente” (4º parágrafo).', '“Os enjoos e o sono do primeiro trimestre — tente escrever uma tese com as pálpebras fechando” (3º parágrafo).', '“Haja a revolução social que houver, o ciclo gravidez, parto e pós-parto cobra um preço inexorável de quem gesta” (3º parágrafo).', '“Enquanto o homem recebe felicitações no trabalho pela futura paternidade, o afastamento físico, cognitivo e psíquico da gestante cobra seu preço na carreira e na vida pessoal” (6º parágrafo).'], answer: 'C',
    why: 'O imperativo “tente” convoca diretamente o leitor a realizar mentalmente a experiência descrita, marcando interlocução explícita.',
    wrong: { 0: 'A passagem descreve os homens em terceira pessoa, sem chamamento direto do leitor.', 1: 'A frase apresenta uma afirmação sobre a reprodução, sem dirigir uma ação ao leitor.', 3: '“Haja” introduz uma concessão hipotética, não um convite direto ao leitor.', 4: 'O período expõe um contraste social, sem interpelar explicitamente quem lê.' },
  },
  {
    n: 36, subject: 'Literatura', content: 'Parnasianismo e arte pela arte',
    statement: `“Entre esses valores, está a escolha de poemas com versos fechados, como o soneto — em virtude do culto à forma —, a preocupação em evitar excessos, bem como os clichês, as imagens vulgarizadas, os hiatos nos versos, as rimas óbvias (-ão, -ar, -oso).\n\nO ideário poético desse movimento era a busca da perfeição formal, a ‘arte pela arte’, sem preocupação com a realidade social. Segundo tal conceito, o mais importante para um artista era a busca da perfeição estética, do verso e da palavra com precisão.”\n\n(Celso Leopoldo Pagnan. Manual compacto de Literatura Brasileira, 2010. Adaptado.)`,
    blockTypes: ['quote', 'quote', 'source'],
    statementAfter: 'Esse excerto refere-se ao seguinte movimento literário:', afterBlockTypes: ['command'],
    alternatives: ['Naturalismo.', 'Barroco.', 'Simbolismo.', 'Romantismo.', 'Parnasianismo.'], answer: 'E',
    why: 'O culto à forma, o soneto, a precisão vocabular e a “arte pela arte” são marcas centrais do Parnasianismo.',
    wrong: { 0: 'O Naturalismo privilegia a representação determinista da realidade, não a arte pela arte.', 1: 'O Barroco é marcado por rebuscamento, contrastes e conflitos, não por essa poética de contenção e perfeição formal.', 2: 'O Simbolismo valoriza sugestão, musicalidade e mistério, distinguindo-se da precisão parnasiana descrita.', 3: 'O Romantismo enfatiza emoção, subjetividade e nacionalismo, em vez da “arte pela arte”.' },
  },
];

export function commonQuestions(q, group) {
  return SPECS.map((spec) => {
    const order = ORDERS[group][spec.n] || [0, 1, 2, 3, 4];
    const canonicalCorrect = 'ABCDE'.indexOf(spec.answer);
    const wrong = {};
    order.forEach((canonicalIndex, newIndex) => {
      if (canonicalIndex !== canonicalCorrect) wrong[newIndex] = spec.wrong[canonicalIndex];
    });
    return q({
      ...spec,
      alternatives: order.map((index) => spec.alternatives[index]),
      answer: 'ABCDE'[order.indexOf(canonicalCorrect)],
      wrong,
    });
  });
}
