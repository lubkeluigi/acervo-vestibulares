import { createFmabc } from './fmabc-helpers.js';

const { q } = createFmabc(2027);

const SONETO_BLOCKS = ['label', 'poem', 'poem', 'poem', 'poem', 'source', 'note', 'command'];
const soneto = (command) => ({
  statement: `Para responder às questões de 01 a 07, leia o soneto “No campo”, da poeta Francisca Júlia, figura emblemática do Parnasianismo brasileiro.

O olhar choroso sob as negras sobrancelhas,
Costas abaixo solta a negra trança basta¹,
A campônia² vai guiando, a picadinhas d’hasta³,
Um rebanho gentil de cândidas ovelhas.

Uma junta de bois morosa, em meio à vasta
Nava⁴, arrastando vai umas charruas⁵ velhas...
E escutando o raspar monótono das relhas⁶,
Queda-se na planície um grande boi que pasta...

E some-se o rebanho. Uma sombra flutuante
Paira sobre a extensão da planície, distante...
Na espessura a campônia esconde-se depois.

E, ao longe, sob o céu, como uma prece estranha
Que desperta a mudez do campo e da montanha,
Chora no ar o mugir dos fatigados bois.

(Mármores, 2022.)

¹ basta: densa.
² campônia: camponesa.
³ picadinhas d’hasta: leves toques com a ponta de uma vara.
⁴ nava: planície cercada por montanhas.
⁵ charrua: arado de tração animal.
⁶ relha: peça da charrua que tem a função de revolver o solo.

${command}`,
  blockTypes: SONETO_BLOCKS,
  works: ['Mármores, 2022.'],
  preview: command,
});

const AIRES_BLOCKS = [
  'label', 'subheading',
  'prose', 'prose', 'prose', 'prose', 'prose', 'prose',
  'subheading', 'prose', 'prose', 'prose',
  'source',
];

const aires = (prompt, { works = [], extraBlocks = ['command'] } = {}) => ({
  statement: `Para responder às questões de 11 a 19, leia o trecho do romance Memorial de Aires, de Machado de Assis, publicado originalmente em 1908.

29 de maio

Ontem, na reunião do Aguiar, pude verificar que o jovem advogado [Osório] está mordido pela viúva [Fidélia]. Não têm outra explicação os olhos que lhe deita; são daqueles que nunca mais acabam. Realmente, é tímido, mas de uma timidez que se confunde com respeito e adoração. Se houvesse dança, ele apenas lhe pediria uma quadrilha; duvido que a convidasse a valsar. Conversaram alguns minutos largos, e por duas vezes, e ainda assim foi ela que principalmente falou. Osório gastou o mais do tempo em mirá-la, e fazia bem, porque o gesto da dama era cheio de graça, sem perder a tristeza do estado.

Também eu lhe falei o meu pouco, à janela. Ambos éramos de acordo que não há baía no mundo que vença a do nosso Rio de Janeiro.

— Não vi muitas — disse ela —, mas nenhuma achei que se aproxime desta.

Sobre isto dissemos cousas interessantes — ela, ao menos —, mas estou que também eu. [...] Conversamos da cidade e suas diversões. Não vai a teatro, qualquer que seja, nada sabe de dramas nem de óperas; não insisti no assunto. Apenas me servi da segunda parte, a parte lírica, para lhe falar dos seus talentos de pianista, que ouvira gabar muito.

— São impressões de amigos — respondeu sorrindo.

Depois confessou-me que há muito não toca, e provavelmente esquecerá o que sabe. Talvez não fosse sincera nesta conjetura, mas tudo se há de perdoar ao ofício da modéstia, e ela parece modesta. Guiei a conversação de modo que mais ouvisse que falasse, e Fidélia não se recusou a essa distribuição de papéis. Disse pouco de si e muito da gente Aguiar. Neste ponto falou com algum calor; não me deu cousas novas, mas o que sentia dos dous foi expresso com alma. Contou-me até que entre d. Carmo e a mãe dela achava semelhanças que lhe faziam lembrar alguma vez a finada — ou seria simplesmente a afeição que aquela lhe tem. Enfim, separamo-nos quase amigos. [...]

Fim de maio

Acaba hoje o mês. Maio é também cantado na nossa poesia como o mês das flores — e aliás todo o ano se pode dizer delas. A mim custou-me bastante aceitar aquelas passagens de estação que achei em terras alheias.

A viúva Noronha, ao contrário, pelo que me disse na última noite do Flamengo, achou deliciosa essa impressão lá fora, apesar de nascida aqui e criada na roça. Há pessoas que parecem nascer errado, em clima diverso ou contrário ao de que precisam; se lhes acontece sair de um para outro é como se fossem restituídas ao próprio. Não serão comuns tais organismos, mas eu não escrevi que Fidélia seja comum.

A descrição que ela me fez da impressão que teve lá fora com a entrada da primavera foi animada e interessante, não menos que a do inverno com os seus gelos. A mim mesmo perguntei se ela não estaria destinada a passar dos gelos às flores pela ação daquele bacharel Osório... Ponho aqui a reticência que deixei então no meu espírito.

(Memorial de Aires, 2022.)

${prompt}`,
  blockTypes: [...AIRES_BLOCKS, ...extraBlocks],
  works: ['Memorial de Aires', '29 de maio', 'Fim de maio', ...works],
  preview: prompt,
});

export const fmabc2027Lote01 = [
  q({
    n: 1,
    subject: 'Literatura',
    content: 'Parnasianismo',
    difficulty: 'Fácil',
    ...soneto('Uma característica da estética parnasiana presente no soneto de Francisca Júlia é a'),
    alternatives: [
      'contenção lírica.',
      'expressão subjetiva.',
      'temática exótica.',
      'tonalidade mística.',
      'preocupação social.',
    ],
    answer: 'A',
    why: 'O soneto adota postura descritiva e distanciada diante da cena rural, evitando extravasamentos sentimentais e privilegiando o rigor formal (versos alexandrinos, rimas regulares e precisão plástica), traços típicos da contenção lírica parnasiana.',
    wrong: {
      1: 'O Parnasianismo busca a impessoalidade e o equilíbrio formal, em oposição ao derramamento subjetivo do Romantismo.',
      2: 'A cena retratada envolve elementos rurais e campestres simples (camponesa, ovelhas, bois e arado), sem apelo ao exotismo oriental ou mitológico.',
      3: 'Não há perspectiva mística ou religiosa transcendental; a comparação “como uma prece estranha” apenas qualifica o som do mugido ao entardecer.',
      4: 'O poema limita-se à observação plástica e sonora da paisagem rural, sem denúncia social ou crítica às condições de trabalho no campo.',
    },
  }),
  q({
    n: 2,
    subject: 'Literatura',
    content: 'Parnasianismo e tradição clássica',
    difficulty: 'Média',
    ...soneto('O soneto de Francisca Júlia dialoga, sobretudo, com o seguinte tópico da tradição clássica:'),
    alternatives: [
      'locus amoenus (“lugar aprazível”).',
      'amor fati (“aceitação do destino”).',
      'memento mori (“lembra da morte”).',
      'fugere urbem (“fugir da cidade”).',
      'carpe diem (“aproveita o momento”).',
    ],
    answer: 'A',
    why: 'O poema constrói uma cena pastoril e bucólica ambientada em uma planície serena com ovelhas, bois e montanhas ao entardecer, retomando o tópico clássico do locus amoenus (espaço campestre idealizado e ameno).',
    wrong: {
      1: 'Não há tematização filosófica de aceitação do destino ou resignação trágica no soneto.',
      2: 'Embora o entardecer e o silêncio sugiram quietude e cansaço, o poema não adverte o leitor sobre a inevitabilidade da morte.',
      3: 'O poema não estabelece oposição explícita entre os vícios da cidade e as virtudes do campo como convite à fuga urbana.',
      4: 'Não há exortação para aproveitar o instante presente diante da fugacidade do tempo.',
    },
  }),
  q({
    n: 3,
    subject: 'Literatura',
    content: 'Figuras de linguagem',
    difficulty: 'Fácil',
    ...soneto('O eu lírico lança mão da figura de linguagem denominada personificação no seguinte trecho do soneto:'),
    alternatives: [
      '“Uma junta de bois morosa, em meio à vasta / Nava, arrastando vai umas charruas velhas...” (2ª estrofe)',
      '“O olhar choroso sob as negras sobrancelhas, / Costas abaixo solta a negra trança basta,” (1ª estrofe)',
      '“E escutando o raspar monótono das relhas, / Queda-se na planície um grande boi que pasta...” (2ª estrofe)',
      '“E, ao longe, sob o céu, como uma prece estranha / Que desperta a mudez do campo e da montanha,” (4ª estrofe)',
      '“E some-se o rebanho. Uma sombra flutuante / Paira sobre a extensão da planície, distante...” (3ª estrofe)',
    ],
    answer: 'D',
    why: 'Atribuir “mudez” ao “campo” e à “montanha” e afirmar que essa mudez pode ser “despertada” confere características e comportamentos humanos a elementos inanimados da natureza, configurando personificação (prosopopeia).',
    wrong: {
      0: 'Descreve literalmente uma junta de bois lenta puxando arados antigos, sem atribuição de traços humanos a seres inanimados.',
      1: 'Refere-se à camponesa, um ser humano cujo olhar e cabelo são descritos de forma direta.',
      2: 'Embora “escutando” se associe ao boi (animal), a personificação plena na questão aparece na atribuição de mudez e despertar a seres inanimados na 4ª estrofe.',
      4: '“Sombra flutuante” que “paira” descreve poeticamente o escurecimento gradual sobre a planície, sem atribuir ações ou sentimentos humanos.',
    },
  }),
  q({
    n: 4,
    subject: 'Português',
    content: 'Pronomes relativos e coesão referencial',
    difficulty: 'Média',
    ...soneto('Os dois pronomes relativos que constam do soneto referem-se, respectivamente, a'),
    alternatives: [
      '“planície” (2ª estrofe) e “prece” (4ª estrofe).',
      '“boi” (2ª estrofe) e “prece” (4ª estrofe).',
      '“campônia” (1ª estrofe) e “rebanho” (3ª estrofe).',
      '“campônia” (1ª estrofe) e “sombra” (3ª estrofe).',
      '“boi” (2ª estrofe) e “sombra” (3ª estrofe).',
    ],
    answer: 'B',
    why: 'No verso “Queda-se na planície um grande boi que pasta...” (2ª estrofe), o pronome relativo “que” retoma “um grande boi”. No verso “como uma prece estranha / Que desperta a mudez do campo e da montanha,” (4ª estrofe), o pronome relativo “Que” retoma “uma prece estranha”.',
    wrong: {
      0: 'Quem pasta é o “grande boi”, e não a “planície”.',
      2: 'Não há pronome relativo retomando “campônia” nem “rebanho” no soneto.',
      3: 'Nenhum dos dois pronomes relativos do texto tem como antecedente “campônia” ou “sombra”.',
      4: 'O primeiro pronome de fato retoma “boi”, mas o segundo retoma “prece” (“uma prece estranha / Que desperta...”), e não “sombra”.',
    },
  }),
  q({
    n: 5,
    subject: 'Português',
    content: 'Formação de palavras',
    difficulty: 'Fácil',
    ...soneto(`Além dos processos de formação vocabular que consistem em acréscimo ou subtração de afixos a um radical, um vocábulo também pode ser formado quando passa de uma classe gramatical a outra, aparentemente sem alterações formais. É o que se denomina conversão.

(Valter Kehdi. Formação de palavras em português, 1992. Adaptado.)

Verifica-se um exemplo de conversão no seguinte verso:`),
    blockTypes: ['label', 'poem', 'poem', 'poem', 'poem', 'source', 'note', 'prose', 'source', 'command'],
    works: ['Mármores, 2022.', 'Formação de palavras em português'],
    preview: 'Verifica-se um exemplo de conversão no seguinte verso:',
    alternatives: [
      '“Na espessura a campônia esconde-se depois.” (3ª estrofe)',
      '“Queda-se na planície um grande boi que pasta...” (2ª estrofe)',
      '“E escutando o raspar monótono das relhas,” (2ª estrofe)',
      '“Um rebanho gentil de cândidas ovelhas.” (1ª estrofe)',
      '“Que desperta a mudez do campo e da montanha,” (4ª estrofe)',
    ],
    answer: 'C',
    why: 'No trecho “o raspar monótono das relhas”, o verbo no infinitivo “raspar” é precedido pelo artigo definido “o” e modificado pelo adjetivo “monótono”, passando a atuar como substantivo — processo denominado conversão (ou derivação imprópria).',
    wrong: {
      0: 'Todas as palavras mantêm sua classe gramatical original (“espessura” é substantivo formado por derivação sufixal, não por conversão).',
      1: 'Os verbos “queda-se” e “pasta” e os substantivos “planície” e “boi” exercem suas classes habituais.',
      3: '“Rebanho”, “gentil”, “cândidas” e “ovelhas” mantêm suas classes gramaticais originárias.',
      4: '“Mudez” é formado por derivação sufixal (mudo + -ez), e não por mudança de classe sem alteração formal.',
    },
  }),
  q({
    n: 6,
    subject: 'Português',
    content: 'Ordem direta e sintaxe da oração',
    difficulty: 'Fácil',
    ...soneto('Por razões estilísticas, Francisca Júlia recorre a várias inversões sintáticas. Está reescrito em ordem direta o seguinte trecho do soneto:'),
    alternatives: [
      '“Na espessura a campônia esconde-se depois.” (3ª estrofe) → Esconde-se depois a campônia na espessura.',
      '“Na espessura a campônia esconde-se depois.” (3ª estrofe) → Na espessura esconde-se a campônia depois.',
      '“Queda-se na planície um grande boi que pasta...” (2ª estrofe) → Queda-se um grande boi que pasta na planície.',
      '“Chora no ar o mugir dos fatigados bois.” (4ª estrofe) → No ar chora o mugir dos bois fatigados.',
      '“Queda-se na planície um grande boi que pasta...” (2ª estrofe) → Um grande boi que pasta queda-se na planície.',
    ],
    answer: 'E',
    why: 'A ordem direta (sujeito + verbo + complementos/adjuntos) do trecho é iniciada pelo sujeito “Um grande boi que pasta”, seguido pelo verbo pronominal “queda-se” e pelo adjunto adverbial de lugar “na planície”.',
    wrong: {
      0: 'Mantém o verbo (“Esconde-se”) anteposto ao sujeito (“a campônia”), permanecendo em ordem inversa.',
      1: 'Inicia a frase pelo adjunto adverbial (“Na espessura”) antes do verbo e do sujeito.',
      2: 'Coloca o verbo “Queda-se” antes do sujeito “um grande boi que pasta”.',
      3: 'Mantém o adjunto adverbial “No ar” e o verbo “chora” antepostos ao sujeito “o mugir dos bois fatigados”.',
    },
  }),
  q({
    n: 7,
    subject: 'Português',
    content: 'Semântica e vocabulário',
    difficulty: 'Fácil',
    ...soneto('No contexto do soneto, o termo que qualifica o substantivo na expressão “negra trança” (1ª estrofe) tem sentido oposto ao termo que qualifica o substantivo em'),
    alternatives: [
      '“cândidas ovelhas” (1ª estrofe).',
      '“rebanho gentil” (1ª estrofe).',
      '“sombra flutuante” (3ª estrofe).',
      '“prece estranha” (4ª estrofe).',
      '“fatigados bois” (4ª estrofe).',
    ],
    answer: 'A',
    why: 'O adjetivo “negra” remete à cor escura/preta, ao passo que “cândidas”, em “cândidas ovelhas”, significa brancas, alvas, estabelecendo oposição cromática direta.',
    wrong: {
      1: '“Gentil” refere-se a docilidade/suavidade, não sendo antônimo de “negra”.',
      2: '“Flutuante” indica movimento suspenso, sem oposição semântica a “negra”.',
      3: '“Estranha” significa incomum/singular, sem relação de antonímia com a cor escura.',
      4: '“Fatigados” significa cansados, não havendo oposição a “negra”.',
    },
  }),
  q({
    n: 8,
    subject: 'Português',
    content: 'Leitura de gênero visual e humor crítico',
    difficulty: 'Média',
    statement: 'Examine o cartum de Rafa Figueiredo, publicado pelo perfil @defeito_de_fabrica no Instagram em 27.07.2026.',
    blockTypes: ['label'],
    visuals: [{
      file: 'q08-cartum-petroleo.svg',
      alt: 'Cartum "PETRÓLEO" de Rafa Figueiredo: dinossauro amarelo dizendo em balão de fala "Eu vou morrer, mas em 66 milhões de anos eu volto para destruir este planeta".',
    }],
    statementAfter: 'Na construção de seu sentido crítico, o cartum explora, sobretudo, a noção de',
    afterBlockTypes: ['command'],
    alternatives: [
      'nostalgia.',
      'burocracia.',
      'anacronia.',
      'sincronia.',
      'utopia.',
    ],
    answer: 'C',
    why: 'O cartum articula tempos históricos incompatíveis — um dinossauro pré-histórico projetando em 66 milhões de anos sua volta como petróleo para destruir o planeta —, explorando a anacronia (deslocamento ou mistura de épocas distintas) para criticar a crise climática associada aos combustíveis fósseis.',
    wrong: {
      0: 'Não há idealização saudosa do passado, mas projeção irônica da extinção rumo à crise ambiental atual.',
      1: 'O texto não aborda trâmites administrativos ou entraves institucionais.',
      3: 'Sincronia designa coincidência no mesmo tempo histórico, exatamente o contrário do salto de 66 milhões de anos encenado.',
      4: 'O desfecho apresentado é destrutivo (“destruir este planeta”), distante de qualquer ideal utópico.',
    },
  }),
  q({
    n: 9,
    subject: 'Literatura',
    content: 'Romantismo e subjetividade na arte moderna',
    difficulty: 'Média',
    statement: `There is, in fact, no product of modern art, no emotional impulse, no impression or mood of the modern man, which does not owe its delicacy and variety to the sensitiveness which developed out of this movement. The whole exuberance, anarchy and violence of modern art, its drunken, stammering lyricism, its unrestrained, unsparing exhibitionism, is derived from it. And this subjective, egocentric attitude has become so much a matter of course for us, so absolutely inevitable, that we find it impossible to reproduce even an abstract train of thought without talking about our feelings. The intellectual passion, the fervour of reason, the artistic productivity of rationalism have been so completely forgotten that we are only able to understand classical art itself as the expression of that same subjective sensibility.

(Arnold Hauser. The social history of art, 1999. Adaptado.)

O movimento a que o excerto se refere é o`,
    blockTypes: ['prose', 'source', 'command'],
    works: ['The social history of art'],
    alternatives: [
      'Barroco.',
      'Romantismo.',
      'Arcadismo.',
      'Realismo.',
      'Naturalismo.',
    ],
    answer: 'B',
    why: 'Arnold Hauser destaca o surgimento de uma sensibilidade centrada no impulso emocional, no lirismo exacerbado e na atitude subjetiva e egocêntrica que se opôs ao racionalismo clássico — características fundadoras do Romantismo.',
    wrong: {
      0: 'O Barroco antecede o triunfo do racionalismo neoclássico e pauta-se pelo conflito teocêntrico/antropocêntrico e pelo cultismo/conceptismo, não pela ruptura subjetivista moderna descrita.',
      2: 'O Arcadismo retoma o racionalismo clássico, o equilíbrio e a contenção da emoção, justamente o que o texto diz ter sido esquecido após o movimento citado.',
      3: 'O Realismo reage contra o subjetivismo romântico, privilegiando a observação objetiva e a análise social.',
      4: 'O Naturalismo radicaliza a objetividade realista com base no determinismo científico, em sentido oposto à exaltação egocêntrica dos sentimentos.',
    },
  }),
  q({
    n: 10,
    subject: 'Português',
    content: 'Semântica: homofonia',
    difficulty: 'Fácil',
    statement: 'Leia o post publicado pelo perfil da Bienal de São Paulo, @bienalsaopaulo, no Instagram, em 28.04.2025.',
    blockTypes: ['label'],
    visuals: [{
      file: 'q10-post-oswald.svg',
      alt: 'Post da Bienal de São Paulo com a frase de Oswald de Andrade sobre fundo verde-escuro: "A gente escreve o que ouve, não o que houve."',
      className: 'compact-image',
    }],
    statementAfter: 'Na construção do sentido de sua frase, o escritor Oswald de Andrade explora o seguinte fenômeno linguístico:',
    afterBlockTypes: ['command'],
    alternatives: [
      'hiponímia.',
      'homografia.',
      'sinonímia.',
      'homofonia.',
      'antonímia.',
    ],
    answer: 'D',
    why: 'As formas verbais “ouve” (verbo ouvir) e “houve” (verbo haver) apresentam exatamente a mesma pronúncia, mas grafias e significados distintos — relação semântica e fonológica denominada homofonia.',
    wrong: {
      0: 'Hiponímia é a relação de inclusão semântica entre um termo mais específico e outro mais abrangente (hiperônimo).',
      1: 'Homografia ocorre quando palavras possuem a mesma grafia (homógrafas), o que não se verifica entre “ouve” e “houve”.',
      2: 'Sinonímia designa semelhança ou equivalência de sentido entre termos distintos.',
      4: 'Antonímia refere-se à oposição de significados entre palavras, relação ausente entre “ouve” e “houve”.',
    },
  }),
  q({
    n: 11,
    subject: 'Literatura',
    content: 'Machado de Assis e metalinguagem',
    difficulty: 'Fácil',
    ...aires('Procedimento característico da prosa madura de Machado de Assis, o narrador recorre à metalinguagem em:'),
    alternatives: [
      '“A mim mesmo perguntei se ela não estaria destinada a passar dos gelos às flores pela ação daquele bacharel Osório...” (9º parágrafo)',
      '“Conversaram alguns minutos largos, e por duas vezes, e ainda assim foi ela que principalmente falou.” (1º parágrafo)',
      '“Sobre isto dissemos cousas interessantes — ela, ao menos —, mas estou que também eu.” (4º parágrafo)',
      '“Também eu lhe falei o meu pouco, à janela.” (2º parágrafo)',
      '“Ponho aqui a reticência que deixei então no meu espírito.” (9º parágrafo)',
    ],
    answer: 'E',
    why: 'Ao afirmar “Ponho aqui a reticência que deixei então no meu espírito”, o Conselheiro Aires explicita o próprio ato da escrita e o uso do sinal gráfico no registro do diário, caracterizando a metalinguagem.',
    wrong: {
      0: 'O trecho registra uma indagação íntima e metafórica sobre o futuro de Fidélia, sem comentar o próprio fazer textual.',
      1: 'Relata apenas um episódio da conversa observada na reunião, sem autorreferência à escrita.',
      2: 'Traz uma avaliação irônica sobre o diálogo mantido à janela, não sobre a elaboração do texto.',
      3: 'Consiste em simples relato factual da interação com a viúva.',
    },
  }),
  q({
    n: 12,
    subject: 'Literatura',
    content: 'Machado de Assis: ironia e foco narrativo',
    difficulty: 'Média',
    ...aires(`“Talvez não fosse sincera nesta conjetura, mas tudo se há de perdoar ao ofício da modéstia, e ela parece modesta.” (6º parágrafo)

A modéstia que o narrador atribui ironicamente à viúva Fidélia também é por ele encenada no seguinte trecho:`, { extraBlocks: ['prose', 'command'] }),
    alternatives: [
      '“Depois confessou-me que há muito não toca, e provavelmente esquecerá o que sabe.” (6º parágrafo)',
      '“Sobre isto dissemos cousas interessantes — ela, ao menos —, mas estou que também eu.” (4º parágrafo)',
      '“Ambos éramos de acordo que não há baía no mundo que vença a do nosso Rio de Janeiro.” (2º parágrafo)',
      '“Não serão comuns tais organismos, mas eu não escrevi que Fidélia seja comum.” (8º parágrafo)',
      '“A mim mesmo perguntei se ela não estaria destinada a passar dos gelos às flores pela ação daquele bacharel Osório...” (9º parágrafo)',
    ],
    answer: 'B',
    why: 'Ao dizer “dissemos cousas interessantes — ela, ao menos —, mas estou que também eu”, o narrador ensaia uma falsa modéstia ao ressalvar o mérito da interlocutora para logo em seguida reafirmar a própria sagacidade.',
    wrong: {
      0: 'Nesse trecho, é Fidélia quem se diminui ao falar da própria habilidade ao piano, e não uma encenação do próprio narrador sobre si.',
      2: 'Expressa concordância elogiosa em relação à beleza natural da Baía de Guanabara, sem encenação de modéstia pessoal.',
      3: 'Trata-se de uma ressalva retórica sobre o caráter singular de Fidélia, e não de falsa modéstia do narrador.',
      4: 'Formula uma hipótese amorosa sobre Fidélia e Osório, sem referência avaliativa ao próprio desempenho do narrador.',
    },
  }),
  q({
    n: 13,
    subject: 'Português',
    content: 'Semântica e operadores argumentativos',
    difficulty: 'Fácil',
    ...aires(`“Não têm outra explicação os olhos que lhe deita; são daqueles que nunca mais acabam. <u>Realmente</u>, é tímido, mas de uma timidez que se confunde com respeito e adoração.” (1º parágrafo)

O termo sublinhado pode ser substituído, sem prejuízo para o sentido do texto, por:`, { extraBlocks: ['prose', 'command'] }),
    alternatives: [
      'Com efeito.',
      'Muito embora.',
      'Em suma.',
      'Mesmo assim.',
      'Não obstante.',
    ],
    answer: 'A',
    why: 'No contexto, “Realmente” equivale a “de fato”, “efetivamente”, confirmando uma constatação sobre o comportamento de Osório — sentido perfeitamente preservado por “Com efeito.”.',
    wrong: {
      1: '“Muito embora” introduz ideia de concessão, alterando o sentido confirmativo original.',
      2: '“Em suma” tem valor conclusivo ou sintetizador, não de confirmação factual.',
      3: '“Mesmo assim” expressa oposição/concessão contrária ao que se esperaria, incompatível com o trecho.',
      4: '“Não obstante” indica contraste/ressalva adversativa ou concessiva, não confirmação.',
    },
  }),
  q({
    n: 14,
    subject: 'Português',
    content: 'Variação linguística e registros',
    difficulty: 'Fácil',
    ...aires('Considerando o contexto, verifica-se expressão de caráter coloquial no seguinte trecho:'),
    alternatives: [
      '“Ambos éramos de acordo que não há baía no mundo que vença a do nosso Rio de Janeiro.” (2º parágrafo)',
      '“Guiei a conversação de modo que mais ouvisse que falasse, e Fidélia não se recusou a essa distribuição de papéis.” (6º parágrafo)',
      '“Apenas me servi da segunda parte, a parte lírica, para lhe falar dos seus talentos de pianista, que ouvira gabar muito.” (4º parágrafo)',
      '“A mim custou-me bastante aceitar aquelas passagens de estação que achei em terras alheias.” (7º parágrafo)',
      '“Ontem, na reunião do Aguiar, pude verificar que o jovem advogado está mordido pela viúva.” (1º parágrafo)',
    ],
    answer: 'E',
    why: 'A expressão “está mordido pela viúva” emprega sentido figurado popular (“apaixonado”, “fisgado”), conferindo marca de coloquialidade em contraste com o tom refinado predominante na escrita do Conselheiro Aires.',
    wrong: {
      0: 'Mantém registro culto e formal adequado à prosa memorialística machadiana.',
      1: 'Emprega léxico culto (“conversação”, “distribuição de papéis”) e sintaxe formal.',
      2: 'Apresenta padrão formal, inclusive com uso do pretérito mais-que-perfeito simples (“ouvira”) e próclise culta.',
      3: 'Combina objeto indireto pleonástico e construções sintáticas próprias do estilo culto clássico.',
    },
  }),
  q({
    n: 15,
    subject: 'Português',
    content: 'Morfossintaxe e valores da palavra "se"',
    difficulty: 'Média',
    ...aires('Estabelece uma relação de condição a palavra sublinhada no seguinte trecho:'),
    alternatives: [
      '“Talvez não fosse sincera nesta conjetura, mas tudo <u>se</u> há de perdoar ao ofício da modéstia, e ela parece modesta.” (6º parágrafo)',
      '“Há pessoas que parecem nascer errado, em clima diverso ou contrário ao de que precisam; se lhes acontece sair de um para outro é como <u>se</u> fossem restituídas ao próprio.” (8º parágrafo)',
      '“Há pessoas que parecem nascer errado, em clima diverso ou contrário ao de que precisam; <u>se</u> lhes acontece sair de um para outro é como se fossem restituídas ao próprio.” (8º parágrafo)',
      '“Realmente, é tímido, mas de uma timidez que <u>se</u> confunde com respeito e adoração.” (1º parágrafo)',
      '“A mim mesmo perguntei <u>se</u> ela não estaria destinada a passar dos gelos às flores pela ação daquele bacharel Osório...” (9º parágrafo)',
    ],
    answer: 'C',
    why: 'Em “<u>se</u> lhes acontece sair de um para outro é como se fossem restituídas ao próprio”, o primeiro “se” introduz a condição (“caso lhes aconteça sair de um para outro”) para que ocorra o efeito descrito na oração seguinte.',
    wrong: {
      0: 'Em “tudo se há de perdoar”, o vocábulo “se” funciona como partícula apassivadora.',
      1: 'O segundo “se”, na locução “como se fossem restituídas”, integra uma oração subordinada adverbial comparativa (hipótese comparativa), diferentemente da conjunção condicional pura destacada em C.',
      3: 'Em “que se confunde”, o “se” é parte integrante de verbo pronominal (ou pronome reflexivo/apassivador), sem valor condicional.',
      4: 'Em “perguntei se ela não estaria...”, trata-se de conjunção integrante introduzindo oração subordinada substantiva objetiva direta.',
    },
  }),
  q({
    n: 16,
    subject: 'Português',
    content: 'Discurso direto e discurso indireto',
    difficulty: 'Média',
    ...aires(`“— Não vi muitas — disse ela —, mas nenhuma achei que se aproxime desta.” (3º parágrafo)

Ao se transpor a fala da viúva Fidélia para o discurso indireto, com o deslocamento do centro temporal e espacial da enunciação, sofrem alteração os seguintes termos:`, { extraBlocks: ['prose', 'command'] }),
    alternatives: [
      '“vi”, “achei” e “desta”, apenas.',
      '“vi”, “achei” e “aproxime”, apenas.',
      '“achei” e “aproxime”, apenas.',
      '“vi”, “achei”, “aproxime” e “desta”.',
      '“aproxime” e “desta”, apenas.',
    ],
    answer: 'D',
    why: 'Na passagem para o discurso indireto com verbo dicendi no passado (“Ela disse que não tinha visto/vira muitas, mas nenhuma achara/tinha achado que se aproximasse daquela”), alteram-se os verbos no pretérito perfeito (“vi”, “achei”) e no presente do subjuntivo (“aproxime” → pretérito imperfeito do subjuntivo “aproximasse”), além do dêitico espacial próximo ao falante (“desta” → “daquela”).',
    wrong: {
      0: 'Desconsidera que “aproxime” (presente do subjuntivo) também recua para o pretérito imperfeito do subjuntivo (“aproximasse”).',
      1: 'Desconsidera que o demonstrativo “desta” (referente ao espaço da enunciação direta) passa a “daquela”.',
      2: 'Omite a alteração da forma verbal “vi” e do pronome demonstrativo “desta”.',
      4: 'Ignora as mudanças de pessoa e tempo nos verbos “vi” e “achei”.',
    },
  }),
  q({
    n: 17,
    subject: 'Português',
    content: 'Orações subordinadas adverbiais',
    difficulty: 'Média',
    ...aires(`“Guiei a conversação <u>de modo que mais ouvisse que falasse</u>” (6º parágrafo)

Em relação à oração que a antecede, o trecho sublinhado expressa ideia de`, { extraBlocks: ['prose', 'command'] }),
    alternatives: [
      'consequência.',
      'causa.',
      'proporção.',
      'comparação.',
      'finalidade.',
    ],
    answer: 'E',
    why: 'A locução “de modo que” seguida de verbo no subjuntivo (“ouvisse”, “falasse”) traduz o objetivo intencional do narrador ao conduzir o diálogo (“para que eu mais ouvisse do que falasse”), configurando ideia de finalidade.',
    wrong: {
      0: 'Se expressasse consequência, a locução “de modo que” estaria normalmente construída com verbo no indicativo para indicar resultado efetivado, e não intenção no subjuntivo.',
      1: 'O trecho não apresenta o motivo pelo qual o narrador guiou a conversa, mas o propósito pretendido.',
      2: 'Não há relação de variação simultânea ou proporcional entre dois fatos.',
      3: 'Embora contenha uma comparação interna (“mais ouvisse que falasse”), a oração subordinada como um todo estabelece relação final em relação a “Guiei a conversação”.',
    },
  }),
  q({
    n: 18,
    subject: 'Português',
    content: 'Funções sintáticas e pleonasmo',
    difficulty: 'Fácil',
    ...aires(`Com a finalidade de realçá-lo, costuma-se repetir o objeto indireto. Essa reiteração recebe o nome de objeto indireto pleonástico. Nele, uma das formas é obrigatoriamente um pronome pessoal átono.

(Celso Cunha. Gramática essencial, 2013. Adaptado.)

O narrador faz uso desse recurso expressivo no seguinte trecho:`, { works: ['Gramática essencial'], extraBlocks: ['prose', 'source', 'command'] }),
    alternatives: [
      '“A mim custou-me bastante aceitar aquelas passagens de estação que achei em terras alheias.” (7º parágrafo)',
      '“A mim mesmo perguntei se ela não estaria destinada a passar dos gelos às flores pela ação daquele bacharel Osório...” (9º parágrafo)',
      '“Contou-me até que entre d. Carmo e a mãe dela achava semelhanças que lhe faziam lembrar alguma vez a finada — ou seria simplesmente a afeição que aquela lhe tem.” (6º parágrafo)',
      '“Se houvesse dança, ele apenas lhe pediria uma quadrilha; duvido que a convidasse a valsar.” (1º parágrafo)',
      '“Há pessoas que parecem nascer errado, em clima diverso ou contrário ao de que precisam; se lhes acontece sair de um para outro é como se fossem restituídas ao próprio.” (8º parágrafo)',
    ],
    answer: 'A',
    why: 'Em “A mim custou-me bastante...”, o objeto indireto do verbo “custar” aparece duplamente expresso pela forma tônica preposicionada (“A mim”) e pelo pronome oblíquo átono (“-me”), constituindo objeto indireto pleonástico.',
    wrong: {
      1: '“A mim mesmo” ocorre uma única vez, sem retomada por pronome átono (“-me”) junto ao verbo “perguntei”.',
      2: 'Os pronomes “-me” e “lhe” referem-se a referentes distintos em diferentes orações, sem reduplicação de um mesmo objeto indireto.',
      3: '“Lhe” não é reiterado por nenhuma expressão nominal ou pronominal tônica equivalente na mesma oração.',
      4: '“Lhes” aparece isoladamente como objeto indireto de “acontece”, sem repetição enfática.',
    },
  }),
  q({
    n: 19,
    subject: 'Português',
    content: 'Morfossintaxe e funções do "que"',
    difficulty: 'Fácil',
    ...aires('Exerce função anafórica a palavra sublinhada no seguinte trecho:'),
    alternatives: [
      '“Guiei a conversação de modo que mais ouvisse <u>que</u> falasse, e Fidélia não se recusou a essa distribuição de papéis.” (6º parágrafo)',
      '“Ambos éramos de acordo <u>que</u> não há baía no mundo que vença a do nosso Rio de Janeiro.” (2º parágrafo)',
      '“— Não vi muitas — disse ela —, mas nenhuma achei <u>que</u> se aproxime desta.” (3º parágrafo)',
      '“Depois confessou-me <u>que</u> há muito não toca, e provavelmente esquecerá o que sabe.” (6º parágrafo)',
      '“Se houvesse dança, ele apenas lhe pediria uma quadrilha; duvido <u>que</u> a convidasse a valsar.” (1º parágrafo)',
    ],
    answer: 'C',
    why: 'Em “nenhuma achei <u>que</u> se aproxime desta”, o vocábulo “que” é pronome relativo que retoma anaforicamente “nenhuma” (subentendendo “baía”), exercendo papel de sujeito na oração adjetiva.',
    wrong: {
      0: 'Trata-se de conjunção comparativa (“mais ... que ...”), sem papel referencial anafórico.',
      1: 'Funciona como conjunção integrante que introduz complemento oracional de “de acordo”, não retomando termo anterior.',
      3: 'É conjunção integrante que introduz o objeto direto oracional de “confessou-me”.',
      4: 'É conjunção integrante que introduz o objeto direto oracional de “duvido”.',
    },
  }),
  q({
    n: 20,
    subject: 'Literatura',
    content: 'Terceira fase do Modernismo e Guimarães Rosa',
    difficulty: 'Fácil',
    statement: `Este escritor foi saudado pela crítica como um revolucionário da linguagem pelo caráter experimental de sua prosa, que revelava um traço regionalista mais amplo e mais sonhador, se comparado com o dos escritores que haviam anteriormente explorado o filão sertanejo. Em sua prosa poética, associa preocupações filosóficas à ousadia formal, imprimindo-lhe um sentido de universalidade, na medida em que focaliza o sertanejo em suas perplexidades metafísicas. Esta preocupação com a essência íntima da realidade, com o sentido último da existência, indo além do que mostram as aparências, torna sua obra de interesse universal, pois a focalização de tais aspectos sempre atraíra o ser humano, independentemente do tempo ou da geografia em que viva.

(Dácio Antônio de Castro, 1993. Adaptado.)

O excerto trata do seguinte escritor:`,
    blockTypes: ['prose', 'source', 'command'],
    alternatives: [
      'José de Alencar.',
      'Guimarães Rosa.',
      'Graciliano Ramos.',
      'Euclides da Cunha.',
      'Mário de Andrade.',
    ],
    answer: 'B',
    why: 'João Guimarães Rosa revolucionou a prosa brasileira na Terceira Geração Modernista ao fundir o regionalismo sertanejo com inventividade lexical/sintática e inquietações metafísicas de alcance universal, como em Sagarana e Grande Sertão: Veredas.',
    wrong: {
      0: 'Romântico do século XIX, José de Alencar buscou criar uma língua nacional com regionalismo idealizado, mas não praticou a prosa experimental metafísica descrita.',
      2: 'Representante do Romance de 30, Graciliano Ramos caracteriza-se pelo estilo seco, conciso e realista-social, distinto da prosa poética e experimental descrita.',
      3: 'Euclides da Cunha retratou o sertão em Os Sertões sob viés científico-jornalístico determinista, e não por meio de ficção experimental metafísica.',
      4: 'Mário de Andrade foi figura central da Primeira Geração Modernista e explorou o Brasil em perspectiva rapsódica e etnográfica (Macunaíma), sem se centrar no filão sertanejo-metafísico descrito.',
    },
  }),
];
