import { createUnifesp } from './unifesp-helpers.js';

const { q } = createUnifesp(2024);

const TEXTO_TIRINHA_CACO = `Examine a tirinha de Caco Galhardo.

(Caco Galhardo. Cinco mil anos, 2019.)`;

const TEXTO_MEMORIAS_LEONARDO = `Leia um trecho do romance Memórias de um sargento de milícias, do escritor Manuel Antônio de Almeida, para responder às questões de 02 a 05.

Cremos, pelo que temos referido, que para nenhum dos leitores será ainda duvidoso que chegara ao Leonardo a hora de pagar o tributo de que ninguém escapa neste mundo, ainda que para alguns seja ele fácil e leve, e para outros pesado e custoso: o rapaz amava. É escusado dizer a quem.

Como é que a sobrinha de D. Maria, que a princípio tanto desafiara a sua hilaridade por esquisita e feia, lhe viera depois a inspirar amor, é isso segredo do coração do rapaz que nos não é dado penetrar: o fato é que ele a amava, e isto nos basta. Convém lembrar que se pela sorte de um pai se pode augurar¹ a de um filho, o Leonardo em matéria de amor não prometia decerto grande fortuna. E com efeito, logo depois da noite do fogo no Campo², em que as coisas começavam a tomar vulto, principiou a roda a desandar-lhe em quase todos os sentidos. Luisinha, uma vez extinto o entusiasmo que, suscitado pelas emoções que experimentara na noite do fogo, a acordara da sua apatia, voltara de novo ao seu antigo estado: e, como de tudo esquecida, na primeira visita que o barbeiro e o Leonardo fizeram a D. Maria depois desses acontecimentos, nem para este último levantara os olhos; conservara-se de cabeça baixa e olhos no chão.

(Memórias de um sargento de milícias, 2003.)

¹ augurar: adivinhar.
² fogo no Campo: referência à Festa do Divino (celebração religiosa de origem católica), comemorada com fogos de artifício.`;

const TEXTO_MEME_VIKINGS = `Examine o meme publicado pelo perfil "Art Memes Central" no Instagram, em 17.05.2023.`;

const TEXTO_CRITICA_GUIMARAES_ROSA = `Nota-se em sua obra um sentido de aprofundamento das coisas e dos seres e um uso experimental do idioma que se opõem, de certa forma, aos escritos mais característicos da prosa regionalista, tendendo a superar tanto o mero pitoresco quanto o realismo documental. Por outro lado, embora revele um notável e incomum domínio artesanal, sua linguagem não se confunde com a dos estilistas da Língua. O seu palavreado diferente não é constituído propriamente de vocábulos “difíceis” ou desusados, mas de recriações e invenções forjadas a partir das virtualidades do idioma, que levam o leitor a constantes descobertas. Com seu léxico e sua sintaxe peculiares, não canônicos, mas coerentemente articulados, esse(a) autor(a) nos força a uma experiência viva com a linguagem.

(José Paulo Paes e Massaud Moisés (orgs.). Pequeno dicionário de literatura brasileira, 1980. Adaptado.)`;

const TEXTO_SONETO_BOCAGE = `Leia o soneto de Manuel Maria Barbosa du Bocage para responder às questões de 08 a 12.

Nos campos o vilão¹ sem sustos passa,
Inquieto na corte o nobre mora;
O que é ser infeliz aquele ignora,
Este encontra nas pompas a desgraça.
Aquele canta e ri; não se embaraça
Com essas coisas vãs que o mundo adora;
Este (oh, cega ambição!) mil vezes chora,
Porque não acha bem que o satisfaça.
Aquele dorme em paz no chão deitado,
Este, no ebúrneo² leito precioso,
Nutre, exaspera velador cuidado³.
Triste! Sai do palácio majestoso:
Se hás-de ser cortesão, mas desgraçado,
Antes ser camponês e venturoso!

(Bocage. Poemas escolhidos, 1974.)

¹ vilão: camponês.
² ebúrneo: feito de marfim.
³ cuidado: preocupação, inquietação.`;

const TEXTO_CRONICA_DICIONARIO = `Para responder às questões 13 e 14, leia a crônica “Nós, o dicionário e a professora Dina” da escritora angolana Ana Paula Tavares.

O dicionário e a professora Dina entraram nas nossas vidas ao mesmo tempo. Também as palavras tática, guerra, resistência. A professora Dina pretendia domesticar o nosso português corta-mato, infalível nas batalhas de rua, eficaz no nosso ódio à ordem, disciplina. Era um português praticado na rua pedindo de empréstimo às outras línguas palavras, construções, tudo o que pudesse facilitar a frase curta, intensa, eficaz. A professora […] apresentou-nos o Dicionário. A partir daquele dia tal livrinho devia permanecer aberto para sempre nas nossas vidas. A professora Dina acreditava […] que “se olhássemos tempo suficiente para o escuro, acabaríamos por ver aí alguma coisa”. Descobrimos juntos a história dos dicionários e da língua. Fomos à procura da palavra através da “compilação completa ou parcial das unidades léxicas de uma língua (palavras, locuções, afixos) ou de certas categorias dessa língua, organizadas numa certa ordem convencionada, geralmente alfabética, e que fornece, além das definições, informações sobre sinônimos, antônimos, ortografia, pronúncia, classe gramatical e etimologia”. Descobrimos os mais variados dicionários, desde os especializados na linguagem de uma época, ou de um escritor determinado, aos das diferentes áreas do saber. A história da língua tornou-se-nos familiar através da origem das palavras e da sua evolução no tempo.

Fomos tomando posse de uma língua que era a nossa língua materna mas da qual só conhecíamos o ruído, o grito, a ponta afiada para ser usada na rua. O silêncio, as formas de pensar e julgar, e as escalas de valor foram aprofundados com a consulta do dicionário. […] Um dicionário, mesmo de recursos simples, oferece palavras e expressões saídas da poeira da memória, que voltam aqui prontas para nosso serviço […]. A linguagem em si não é precisa nem imprecisa. Nós é que a podemos usar de forma menos cuidada, alterando os caminhos que a semântica nos propõe. […] A sugestão continua a ser: mantenham o dicionário sempre aberto, em revisita aos falares e sabores em e da língua portuguesa e de todas as outras que nos rodeiam.

(Ana Paula Tavares. Um rio preso nas mãos, 2019.)`;

const TEXTO_NATURALISMO = `A more deliberate kind of realism in novels, stories, and plays, usually involving a view of human beings as passive victims of natural forces and social environment. As a literary movement, was initiated in France by Jules and Edmond Goncourt with their novel Germinie Lacerteux (1865), but it came to be led by Émile Zola, who claimed a “scientific” status for his studies of impoverished characters miserably subjected to hunger, sexual obsession, and hereditary defects in Thérèse Raquin (1867), Germinal (1885), and many other novels. This fiction aspired to a sociological objectivity, offering detailed and fully researched investigations into unexplored corners of modern society, while enlivening this with a new sexual sensationalism.

(Chris Baldick. The concise Oxford dictionary of literary terms, 2001. Adaptado.)`;

const TEXTO_BABY_BUST = `Leia o texto para responder às questões de 16 a 22.

The great global baby bust is under way

Across the world, birth rates are declining more rapidly than expected. That worries retired people and policymakers. In 2010, there were 98 nations and territories with fertility rates below 2.1 (known as the replacement rate) according to the United Nations. In 2021, that number had risen to 124, or more than half the countries for which data were available. The world’s 15 largest economies all have fertility rates below the replacement rate.

As the proportion of children declines, average ages rise, particularly as old people live longer (though the rise in longevity has slowed in recent years: in Britain lifespans are flatlining and in America they are falling). Some long-running demographic trends are changing, too. Educated women have for decades tended to have fewer children. Nevertheless, fertility among the less educated is now falling.

China, population aged 21-30

All of this poses a huge economic challenge. In parts of the world where birth rates were already low, the shortfall of young employees, who are needed to subsidise the retired, will be felt intensely. In China, the number of workers aged between 21 and 30 has already declined from 232 million in 2012, to 181 million in 2021. By the mid-2050s the United Nations forecasts there will be fewer than 100 million (see chart). China’s one-child — and later two-child — policy has contributed to the country’s decline in young workers. Recent history has shown that it is much more difficult to raise fertility levels than it is to crush them in the first place.

(www.economist.com, 14.06.2023. Adaptado.)`;

const TEXTO_EDITORS_NOTE = `Leia a chamada e o título de uma matéria do The Economist, acompanhados da nota do Editor, para responder às questões de 23 a 25.

Editor’s note (June 9th): The original headline in this article attracted criticism for the phrase “A land of useless workers”. We have changed it to make clear that we are analysing the social and economic costs of low productivity. Our aim is to draw attention to the structural causes of low average labour productivity in Latin American countries, including powerful oligopolies that mute competition and a large informal sector which forces many businesses to remain subscale. As the article makes clear, all of this is beyond the control of individual Latin Americans, whose living standards have suffered. We end with a call for better policymaking.

(www.economist.com, 09.06.2023. Adaptado.)`;

export const unifesp2024Objetivas = [
  // ==========================================
  // LÍNGUA PORTUGUESA (QUESTÕES 01 A 15)
  // ==========================================
  q({
    n: 1,
    subject: 'Português',
    content: 'Interpretação de texto multissemiótico (tirinha): caracterização de personagem',
    difficulty: 'Fácil',
    statement: `${TEXTO_TIRINHA_CACO}

Na tirinha, o chefe`,
    visuals: [{ file: 'p1-q01-tirinha-caco-galhardo.svg', alt: 'Tirinha de Caco Galhardo: "El Diablo" convoca uma reunião no inferno para discutir ideias contra a crise, pois a taxa de rejeição caiu 1% nas últimas pesquisas', caption: 'Caco Galhardo. Cinco mil anos, 2019.' }],
    alternatives: [
      'acredita que a taxa de rejeição observada nas pesquisas seja um caminho para superar a crise no inferno.',
      'pretende reverter a tendência observada nas pesquisas de modo a tornar novamente o inferno um lugar mais atraente.',
      'acredita que seja possível superar a crise no inferno se a tendência observada nas pesquisas for mantida.',
      'pretende diminuir a taxa de rejeição observada nas pesquisas a partir da discussão de novas ideias para o inferno.',
      'acredita que o inferno esteja em crise por conta da diminuição da taxa de rejeição observada nas pesquisas.',
    ],
    answer: 'E',
    why: 'O chefe convoca a reunião dizendo que a taxa de rejeição do inferno caiu 1% nas últimas pesquisas, e associa esse dado à ideia de uma "crise" que precisa ser "abafada". Ou seja, ele interpreta a diminuição da rejeição ao inferno (as pessoas estarem menos "assustadas" com ele) como a própria causa da crise, pois um inferno menos temido perderia sua função dissuasória.',
    wrong: {
      0: 'A queda na taxa de rejeição é apresentada como o problema (a causa da crise), não como um caminho para resolvê-la.',
      1: 'O chefe não busca tornar o inferno "mais atraente"; ao contrário, ele quer aumentar a rejeição/o temor que o inferno inspira, revertendo a queda observada.',
      2: 'A manutenção da tendência (queda contínua da rejeição) é exatamente o que agravaria a crise, e não a solucionaria.',
      3: 'O chefe não quer diminuir ainda mais a taxa de rejeição; ele busca ideias justamente para reverter essa queda e aumentar a rejeição ao inferno.',
    },
  }),

  q({
    n: 2,
    subject: 'Português',
    content: 'Análise do viés narrativo no primeiro parágrafo de Memórias de um sargento de milícias',
    difficulty: 'Média',
    statement: `${TEXTO_MEMORIAS_LEONARDO}

O primeiro parágrafo caracteriza-se, sobretudo, pelo seu viés`,
    alternatives: [
      'nostálgico.',
      'histórico.',
      'metalinguístico.',
      'idealizante.',
      'moralizante.',
    ],
    answer: 'C',
    why: 'No primeiro parágrafo, o narrador comenta o próprio ato de narrar e antecipa dados sobre o enredo ao leitor ("Cremos, pelo que temos referido, que para nenhum dos leitores será ainda duvidoso que..."), numa postura que reflete e comenta a própria construção da narrativa — traço metalinguístico típico do narrador onisciente e irônico de Manuel Antônio de Almeida.',
    wrong: {
      0: 'Não há evocação saudosa de um passado pessoal ou de uma época idealizada; o foco está no comentário direto do narrador sobre o enredo que conduz.',
      1: 'O parágrafo não contextualiza fatos históricos ou sociais da época; ele trata do amor de Leonardo de modo ficcional e autorreferente.',
      3: 'Não há enaltecimento ou embelezamento idealizado do rapaz ou da situação; ao contrário, o tom é ameno e irônico quanto ao "tributo" do amor.',
      4: 'O narrador não emite juízos de valor moral ou lições de conduta; ele apenas antecipa comentando o processo da narrativa.',
    },
  }),

  q({
    n: 3,
    subject: 'Português',
    content: 'Foco narrativo: não onisciência do narrador em Memórias de um sargento de milícias',
    difficulty: 'Média',
    statement: `${TEXTO_MEMORIAS_LEONARDO}

A não onisciência do narrador das Memórias de um sargento de milícias está bem exemplificada no seguinte trecho:`,
    alternatives: [
      '“é isso segredo do coração do rapaz que nos não é dado penetrar” (2º parágrafo).',
      '“É escusado dizer a quem” (1º parágrafo).',
      '“o fato é que ele a amava, e isto nos basta” (2º parágrafo).',
      '“pela sorte de um pai se pode augurar a de um filho” (2º parágrafo).',
      '“principiou a roda a desandar-lhe em quase todos os sentidos” (2º parágrafo).',
    ],
    answer: 'A',
    why: 'Em “é isso segredo do coração do rapaz que nos não é dado penetrar”, o narrador declara explicitamente seus limites de conhecimento: ele não tem acesso total à interioridade do personagem, diferentemente do narrador onisciente clássico, que tudo sabe e tudo vê. Essa confissão de ignorância evidencia a não onisciência narrativa.',
    wrong: {
      1: '“É escusado dizer a quem” é um comentário irônico do narrador que pressupõe que o leitor já sabe a quem Leonardo ama (Luisinha), não uma confissão de desconhecimento.',
      2: 'O trecho mostra o narrador afirmando com segurança um fato (“ele a amava”), sem declarar limitação de conhecimento.',
      3: 'Trata-se de um comentário genérico do narrador sobre a sorte dos filhos em relação à dos pais, sem relação com os limites do seu saber sobre a interioridade da personagem.',
      4: 'O trecho apenas relata o desenrolar dos infortúnios de Leonardo, sem qualquer ressalva sobre os limites do conhecimento do narrador.',
    },
  }),

  q({
    n: 4,
    subject: 'Português',
    content: 'Valor semântico de conjunção subordinativa concessiva ("ainda que")',
    difficulty: 'Média',
    statement: `${TEXTO_MEMORIAS_LEONARDO}

“chegara ao Leonardo a hora de pagar o tributo de que ninguém escapa neste mundo, <u>ainda que para alguns seja ele fácil e leve, e para outros pesado e custoso</u>” (1º parágrafo)

Em relação ao trecho que o antecede, o trecho sublinhado expressa ideia de`,
    alternatives: [
      'comparação.',
      'condição.',
      'concessão.',
      'consequência.',
      'causa.',
    ],
    answer: 'C',
    why: 'A conjunção “ainda que” introduz uma oração subordinada adverbial concessiva: o trecho sublinhado admite um fato (a variação na dificuldade do tributo do amor para diferentes pessoas) que, em princípio, poderia contrariar ou relativizar a afirmação principal, mas não a anula. Essa ressalva que não invalida a ideia central é a marca da concessão.',
    wrong: {
      0: 'Comparação estabeleceria um paralelo de igualdade ou diferença entre dois elementos (como "assim como" ou "tanto quanto"), e não uma ressalva concessiva.',
      1: 'Condição exprimiria uma hipótese da qual dependeria o fato principal (como "se", "caso"), o que não ocorre, pois o tributo é apresentado como certo e inevitável.',
      3: 'Consequência indicaria um efeito ou resultado decorrente do que antecede (como "de modo que", "portanto"), relação ausente aqui.',
      4: 'Causa indicaria o motivo pelo qual o fato principal ocorre (como "porque", "já que"), o que não corresponde ao sentido concessivo de "ainda que".',
    },
  }),

  q({
    n: 5,
    subject: 'Português',
    content: 'Sintaxe: função sintática de pronome oblíquo dativo (objeto indireto)',
    difficulty: 'Média',
    statement: `${TEXTO_MEMORIAS_LEONARDO}

A expressão sublinhada em “É escusado dizer a <u>quem</u>” (1º parágrafo) exerce a mesma função sintática daquela sublinhada em:`,
    alternatives: [
      '“principiou a roda a desandar-<u>lhe</u> em quase todos os sentidos” (2º parágrafo).',
      '“ninguém escapa <u>neste mundo</u>” (1º parágrafo).',
      '“o Leonardo em matéria de amor não prometia decerto <u>grande fortuna</u>” (2º parágrafo).',
      '“Luisinha […] voltara de novo ao <u>seu antigo estado</u>” (2º parágrafo).',
      '“chegara ao Leonardo <u>a hora de pagar o tributo</u>” (1º parágrafo).',
    ],
    answer: 'A',
    why: 'Em “É escusado dizer a quem”, o pronome interrogativo “quem”, regido pela preposição “a”, é o objeto indireto do verbo “dizer” (dizer a quem = a alguém). Na alternativa A, o pronome oblíquo átono “lhe”, em “desandar-lhe”, também funciona como objeto indireto (complemento de interesse do verbo “desandar”, equivalente a “desandar para ele”), exercendo a mesma função sintática.',
    wrong: {
      1: 'Em “ninguém escapa neste mundo”, a expressão sublinhada “neste mundo” é um adjunto adverbial de lugar, e não um objeto indireto.',
      2: 'Em “não prometia decerto grande fortuna”, a expressão sublinhada “grande fortuna” é objeto direto do verbo transitivo direto “prometia”.',
      3: 'Em “voltara de novo ao seu antigo estado”, a expressão sublinhada funciona como adjunto adverbial (complemento circunstancial que indica a situação para a qual Luisinha retornou), não como objeto indireto de um verbo que rege preposição como complemento essencial.',
      4: 'Em “chegara ao Leonardo a hora de pagar o tributo”, a expressão sublinhada “a hora de pagar o tributo” é o sujeito da oração (sujeito posposto do verbo “chegara”), e não um objeto indireto.',
    },
  }),

  q({
    n: 6,
    subject: 'Português',
    content: 'Interpretação de texto multissemiótico (meme): identificação de recurso expressivo (ironia)',
    difficulty: 'Fácil',
    statement: `${TEXTO_MEME_VIKINGS}

Na construção de seu sentido, o meme explora fundamentalmente o seguinte recurso expressivo:`,
    visuals: [{ file: 'p1-q06-meme-vikings.svg', alt: 'Meme publicado pelo perfil "Art Memes Central" no Instagram em 17.05.2023', caption: 'Art Memes Central (Instagram, 17.05.2023).' }],
    alternatives: [
      'pleonasmo.',
      'ironia.',
      'personificação.',
      'paradoxo.',
      'ambiguidade.',
    ],
    answer: 'B',
    why: 'O humor do meme decorre da ironia: há uma contradição proposital entre o que seria esperado da cena/legenda retratada e o comentário irônico que a acompanha, de modo que o sentido literal é subvertido para produzir um efeito crítico ou cômico sobre a situação representada.',
    wrong: {
      0: 'Pleonasmo é a repetição enfática e redundante de uma mesma ideia com os mesmos termos ou sentido, recurso que não constrói o efeito de humor do meme.',
      2: 'Personificação consiste em atribuir características humanas a seres inanimados ou abstratos, recurso não central para a construção de sentido do meme.',
      3: 'Paradoxo seria a aproximação de ideias logicamente contraditórias numa mesma afirmação, diferente da contradição entre expectativa e enunciado que caracteriza a ironia explorada aqui.',
      4: 'Ambiguidade seria a possibilidade de duplo sentido não intencionalmente resolvido, o que não é o mecanismo central do humor do meme, construído por contradição irônica deliberada.',
    },
  }),

  q({
    n: 7,
    subject: 'Português',
    content: 'História literária: identificação de autor a partir de comentário crítico (João Guimarães Rosa)',
    difficulty: 'Média',
    statement: `${TEXTO_CRITICA_GUIMARAES_ROSA}

Tal comentário refere-se a`,
    alternatives: [
      'Clarice Lispector.',
      'Machado de Assis.',
      'Euclides da Cunha.',
      'Graciliano Ramos.',
      'João Guimarães Rosa.',
    ],
    answer: 'E',
    why: 'O comentário descreve um escritor cujo "léxico e sintaxe peculiares, não canônicos" e cujas "recriações e invenções forjadas a partir das virtualidades do idioma" superam tanto o pitoresco quanto o realismo documental da prosa regionalista — características centrais e amplamente reconhecidas do projeto literário de João Guimarães Rosa, autor de uma linguagem extremamente inventiva e experimental (como em Grande sertão: veredas).',
    wrong: {
      0: 'Clarice Lispector é reconhecida por sua introspecção psicológica e fluxo de consciência, não pela recriação lexical de um português "corta-mato" associado à temática regionalista.',
      1: 'Machado de Assis é identificado por ironia fina e domínio clássico da norma culta, e não por invenções lexicais ou experimentalismo sintático da linguagem.',
      2: 'Euclides da Cunha é associado ao relato histórico-documental e científico de Os sertões, justamente o "realismo documental" que o comentário aponta como superado pelo autor descrito.',
      3: 'Graciliano Ramos é reconhecido pela economia e precisão vocabular enxuta, e não por invenções lexicais experimentais, opondo-se ao perfil descrito no comentário.',
    },
  }),

  q({
    n: 8,
    subject: 'Português',
    content: 'Tópicos neoclássicos no soneto de Bocage: fugere urbem',
    difficulty: 'Média',
    statement: `${TEXTO_SONETO_BOCAGE}

O soneto explora, sobretudo, o seguinte tópico neoclássico:`,
    alternatives: [
      'locus horrendus (lugar horrível).',
      'locus amoenus (lugar aprazível).',
      'fugere urbem (fugir da cidade).',
      'memento mori (lembra da morte).',
      'carpe diem (aproveita o momento).',
    ],
    answer: 'C',
    why: 'O soneto contrapõe a vida simples e despreocupada do camponês (vilão) nos campos à vida angustiada e ambiciosa do nobre na corte, concluindo com o apelo final: “Se hás-de ser cortesão, mas desgraçado, / Antes ser camponês e venturoso!”. Esse elogio da vida afastada do meio urbano/cortesão, propondo fugir das amarras da corte em favor da simplicidade campestre, configura o tópico clássico fugere urbem.',
    wrong: {
      0: 'Locus horrendus seria a descrição de um lugar aterrorizante ou repulsivo, o que não ocorre no soneto, que contrapõe ambientes (campo x corte) sem horror.',
      1: 'Locus amoenus seria a descrição detalhada e contemplativa de um cenário natural idílico; o soneto não se detém em descrever a paisagem campestre, mas em contrastar os modos de vida.',
      3: 'Memento mori é o lembrete da inevitabilidade da morte, tema ausente do soneto, que trata de felicidade/infelicidade em vida.',
      4: 'Carpe diem é o convite a aproveitar o momento presente, tema que não é o foco central do poema, centrado na comparação entre dois modos de vida.',
    },
  }),

  q({
    n: 9,
    subject: 'Português',
    content: 'Figuras de linguagem no soneto de Bocage: hipérbole',
    difficulty: 'Fácil',
    statement: `${TEXTO_SONETO_BOCAGE}

O eu lírico lança mão do recurso retórico conhecido como hipérbole no seguinte verso:`,
    alternatives: [
      '“Nos campos o vilão sem sustos passa,” (1ª estrofe)',
      '“Triste! Sai do palácio majestoso:” (4ª estrofe)',
      '“Inquieto na corte o nobre mora;” (1ª estrofe)',
      '“Este (oh, cega ambição!) mil vezes chora,” (2ª estrofe)',
      '“Antes ser camponês e venturoso!” (4ª estrofe)',
    ],
    answer: 'D',
    why: 'No verso “Este (oh, cega ambição!) mil vezes chora,”, a expressão numérica “mil vezes” constitui um exagero expressivo e intencional sobre a frequência do choro do nobre, intensificando retoricamente o sofrimento causado pela ambição — configuração clássica da hipérbole.',
    wrong: {
      0: 'O verso apenas descreve, sem exagero numérico ou qualitativo, a tranquilidade do vilão nos campos.',
      1: 'A interjeição “Triste!” expressa um lamento direto, sem construir um exagero quantitativo ou qualitativo.',
      2: 'O verso descreve de forma direta a inquietação do nobre na corte, sem recorrer a exagero retórico.',
      4: 'O verso expressa uma preferência de modo direto (ser camponês e feliz), sem construção hiperbólica.',
    },
  }),

  q({
    n: 10,
    subject: 'Português',
    content: 'Coesão referencial na segunda estrofe do soneto de Bocage',
    difficulty: 'Difícil',
    statement: `${TEXTO_SONETO_BOCAGE}

Considerando o contexto, os termos sublinhados na segunda estrofe do soneto — “<u>Aquele</u> canta e ri; não se embaraça / Com essas coisas vãs que <u>o mundo</u> adora; / Este (oh, cega ambição!) mil vezes chora, / Porque não acha <u>bem</u> que <u>Este</u> satisfaça.” — referem-se, respectivamente, a`,
    alternatives: [
      'vilão, “o mundo”, “bem” e nobre.',
      'nobre, “essas coisas vãs”, “bem” e vilão.',
      'nobre, “o mundo”, nobre e vilão.',
      'vilão, “essas coisas vãs”, “bem” e nobre.',
      'vilão, “essas coisas vãs”, nobre e nobre.',
    ],
    answer: 'D',
    why: 'Na segunda estrofe, o pronome demonstrativo “Aquele” retoma o “vilão” apresentado na primeira estrofe (o camponês despreocupado). A expressão “o mundo”, no contexto, caracteriza-se exatamente pelas “essas coisas vãs” que ele adora, numa relação de equivalência/apositiva. O substantivo “bem” é empregado em sentido absoluto e genérico (não retoma um termo anterior específico, valendo por si mesmo, como “satisfação” ou “bem-estar”). Por fim, “Este” retoma o “nobre”, apresentado em contraste com o vilão desde a primeira estrofe, cuja ambição o impede de alcançar tal “bem”.',
    wrong: {
      0: 'A troca das referências de “Aquele” e “Este” inverte os papéis estabelecidos desde a primeira estrofe: é “Aquele” que remete ao vilão, e “Este”, ao nobre — não o contrário.',
      1: 'Essa alternativa inverte integralmente as referências de “Aquele” e “Este”, atribuindo ao nobre a serenidade do vilão e vice-versa, contrariando o contraste estabelecido no poema.',
      2: 'Atribuir a “bem” o mesmo referente de “nobre” desconsidera que “bem” é empregado em sentido genérico e abstrato (a satisfação em si), e não como retomada anafórica do nobre.',
      4: 'Atribuir a “bem” o referente “nobre” e manter “Este” como “nobre” duplica incorretamente a mesma resposta para dois termos de natureza distinta (um substantivo abstrato e um pronome demonstrativo).',
    },
  }),

  q({
    n: 11,
    subject: 'Português',
    content: 'Sintaxe: ordem direta e inversão (hipérbato) no soneto de Bocage',
    difficulty: 'Média',
    statement: `${TEXTO_SONETO_BOCAGE}

Está reescrito em ordem direta o seguinte verso do soneto:`,
    alternatives: [
      '“Nos campos o vilão sem sustos passa,” (1ª estrofe) → Nos campos passa o vilão sem sustos.',
      '“Este encontra nas pompas a desgraça.” (1ª estrofe) → Este encontra a desgraça nas pompas.',
      '“Inquieto na corte o nobre mora;” (1ª estrofe) → Inquieto mora o nobre na corte.',
      '“O que é ser infeliz aquele ignora,” (1ª estrofe) → O que é ser infeliz ignora aquele.',
      '“Aquele dorme em paz no chão deitado,” (3ª estrofe) → No chão deitado aquele dorme em paz.',
    ],
    answer: 'B',
    why: 'Na ordem direta (sujeito + verbo + complementos), o verso “Este encontra nas pompas a desgraça” mantém a sequência sujeito (“Este”) + verbo (“encontra”) + objeto direto (“a desgraça”) + adjunto adverbial (“nas pompas”), apenas reposicionando o adjunto adverbial após o objeto direto, sem alterar a ordem lógica sujeito-verbo-complementos essenciais, diferentemente do verso original que antepõe o adjunto ao objeto direto.',
    wrong: {
      0: 'A reescrita apenas troca a posição do verbo, mas mantém o adjunto adverbial de lugar “Nos campos” anteposto ao sujeito, o que não configura ordem direta plena (sujeito-verbo-complementos).',
      2: 'A reescrita preserva o adjunto adverbial de modo “Inquieto” anteposto ao sujeito “o nobre”, não reorganizando a oração em ordem direta completa.',
      3: 'A reescrita mantém a oração subordinada substantiva objetiva direta (“O que é ser infeliz”) anteposta ao verbo “ignora” e posterga o sujeito “aquele”, invertendo ainda mais a ordem em vez de corrigi-la.',
      4: 'A reescrita antepõe o adjunto adverbial “No chão deitado” ao sujeito “aquele”, mantendo a inversão sintática, e não a ordem direta.',
    },
  }),

  q({
    n: 12,
    subject: 'Português',
    content: 'Pontuação: vocativo isolado por sinal de exclamação',
    difficulty: 'Média',
    statement: `${TEXTO_SONETO_BOCAGE}

Além do vocativo que ocorre na segunda estrofe, há no soneto outro vocativo. Esse outro vocativo é isolado pelo seguinte sinal de pontuação:`,
    alternatives: [
      'vírgula.',
      'dois-pontos.',
      'ponto final.',
      'ponto e vírgula.',
      'exclamação.',
    ],
    answer: 'E',
    why: 'Na quarta estrofe, o vocativo “Triste!” (dirigido ao nobre/cortesão) é isolado por um ponto de exclamação logo após a palavra, distinguindo-se do vocativo da segunda estrofe (“oh, cega ambição!”), que vem isolado por parênteses e também finalizado por exclamação, mas cuja pergunta trata do “outro” vocativo do poema, isolado isoladamente por esse sinal.',
    wrong: {
      0: 'Não há, no poema, outro vocativo isolado exclusivamente por vírgula além do já indicado na segunda estrofe.',
      1: 'Não há emprego de dois-pontos para isolar vocativo em nenhum ponto do soneto.',
      2: 'O ponto final é empregado para encerrar períodos declarativos no poema, e não para isolar o vocativo em questão.',
      3: 'O ponto e vírgula separa orações coordenadas ao longo do soneto, função distinta da de isolar o vocativo referido.',
    },
  }),

  q({
    n: 13,
    subject: 'Português',
    content: 'Interpretação de crônica: efeito do convívio com dicionários (ponderação)',
    difficulty: 'Média',
    statement: `${TEXTO_CRONICA_DICIONARIO}

De acordo com a cronista, o intenso convívio com os dicionários acabou por conferir aos alunos a seguinte qualidade:`,
    alternatives: [
      'introversão.',
      'rebeldia.',
      'ponderação.',
      'volubilidade.',
      'objetividade.',
    ],
    answer: 'C',
    why: 'A cronista relata que, antes do convívio com o dicionário, a turma usava uma linguagem de rua "corta-mato", impulsiva e combativa ("eficaz nas batalhas de rua"). Com a consulta ao dicionário, "o silêncio, as formas de pensar e julgar, e as escalas de valor foram aprofundados", isto é, os alunos passaram a refletir e avaliar com mais cautela e cuidado antes de agir ou falar — o que caracteriza a ponderação.',
    wrong: {
      0: 'A crônica não descreve um fechamento social ou retraimento afetivo dos alunos, mas um aprofundamento do modo de pensar e avaliar.',
      1: 'A rebeldia caracterizava justamente a fala de rua anterior ao convívio com o dicionário ("infalível nas batalhas de rua"), não um efeito conferido por ele.',
      3: 'Volubilidade sugere instabilidade ou inconstância de caráter, traço não mencionado ou sugerido pela cronista.',
      4: 'Objetividade quanto à linguagem não é o foco; a cronista destaca o aprofundamento do pensar e julgar (reflexão), e não uma precisão ou concisão direta.',
    },
  }),

  q({
    n: 14,
    subject: 'Português',
    content: 'Morfologia: sufixo diminutivo com valor afetivo ("livrinho")',
    difficulty: 'Fácil',
    statement: `${TEXTO_CRONICA_DICIONARIO}

Observa-se o emprego de palavra formada com sufixo que, no contexto, expressa afetividade em:`,
    alternatives: [
      '“A partir daquele dia tal livrinho devia permanecer aberto para sempre nas nossas vidas.” (1º parágrafo)',
      '“A sugestão continua a ser: mantenham o dicionário sempre aberto, em revisita aos falares e sabores em e da língua portuguesa e de todas as outras que nos rodeiam.” (2º parágrafo)',
      '“Descobrimos os mais variados dicionários, desde os especializados na linguagem de uma época, ou de um escritor determinado, aos das diferentes áreas do saber.” (1º parágrafo)',
      '“O dicionário e a professora Dina entraram nas nossas vidas ao mesmo tempo.” (1º parágrafo)',
      '“A história da língua tornou-se-nos familiar através da origem das palavras e da sua evolução no tempo.” (1º parágrafo)',
    ],
    answer: 'A',
    why: 'Na palavra “livrinho”, o sufixo diminutivo “-inho” não indica apenas redução de tamanho, mas expressa afetividade e carinho da cronista pelo dicionário, elevado a objeto querido e importante na vida escolar da turma.',
    wrong: {
      1: 'Não há palavra formada por sufixo diminutivo ou aumentativo com valor afetivo nesse trecho.',
      2: 'O trecho não emprega sufixos de valor afetivo; apresenta apenas vocabulário neutro referente a tipos de dicionários.',
      3: 'Não há emprego de sufixo com valor afetivo nesse trecho, apenas uma afirmação neutra sobre a cronologia dos fatos.',
      4: 'Não há sufixo diminutivo ou de valor afetivo nesse trecho, que apresenta vocabulário neutro sobre a história da língua.',
    },
  }),

  q({
    n: 15,
    subject: 'Português',
    content: 'História literária: identificação do movimento naturalista a partir de definição em língua inglesa',
    difficulty: 'Média',
    statement: `${TEXTO_NATURALISMO}

O texto trata do movimento`,
    alternatives: [
      'naturalista.',
      'modernista.',
      'romântico.',
      'parnasiano.',
      'simbolista.',
    ],
    answer: 'A',
    why: 'O texto descreve um movimento literário que retrata seres humanos como "vítimas passivas de forças naturais e do ambiente social", liderado por Émile Zola, que buscava um estatuto "científico" ao estudar personagens miseráveis submetidos à fome, à obsessão sexual e a defeitos hereditários, aspirando a uma objetividade sociológica — características centrais e amplamente reconhecidas do Naturalismo, movimento fundado nas teorias deterministas e no método documental e experimental.',
    wrong: {
      1: 'O Modernismo rompeu com o cânone representacional e valorizou a experimentação formal e a liberdade estética, sem o compromisso documental-científico descrito no texto.',
      2: 'O Romantismo caracteriza-se pelo subjetivismo, idealização e exaltação dos sentimentos, em oposição à objetividade "científica" descrita.',
      3: 'O Parnasianismo valoriza a forma poética perfeita e a impassibilidade estética, sem relação com o romance de caráter sociológico-determinista descrito.',
      4: 'O Simbolismo privilegia a sugestão, o subjetivismo e o musicalismo poético, em contraste com a objetividade documental e o determinismo do movimento descrito.',
    },
  }),

  // ==========================================
  // LÍNGUA INGLESA (QUESTÕES 16 A 25)
  // ==========================================
  q({
    n: 16,
    subject: 'Inglês',
    content: 'Vocabulary in context: synonym for "bust" in the title',
    difficulty: 'Fácil',
    statement: `${TEXTO_BABY_BUST}

According to the information provided by the text, the word “bust”, in the title, can be replaced, without meaning change, by`,
    alternatives: [
      'difference.',
      'decrease.',
      'degradation.',
      'flaw.',
      'regeneration.',
    ],
    answer: 'B',
    why: 'O título "The great global baby bust is under way" refere-se à queda acentuada e generalizada das taxas de natalidade no mundo, conforme detalhado ao longo do texto ("birth rates are declining more rapidly than expected"). Nesse contexto, "bust" equivale a uma forte "decrease" (diminuição/declínio).',
    wrong: {
      0: '"Difference" (diferença) não carrega a noção de queda ou declínio presente em "bust" e no restante do texto.',
      2: '"Degradation" (degradação) sugere piora qualitativa de algo, e não especificamente uma redução quantitativa das taxas de natalidade.',
      3: '"Flaw" (falha/defeito) não expressa a ideia de declínio numérico retratada ao longo de todo o texto.',
      4: '"Regeneration" (regeneração) tem sentido oposto ao de "bust": indicaria recuperação ou crescimento, contrariando o conteúdo do texto sobre declínio da natalidade.',
    },
  }),

  q({
    n: 17,
    subject: 'Inglês',
    content: 'Reference words: anaphora in context ("that number")',
    difficulty: 'Média',
    statement: `${TEXTO_BABY_BUST}

In the excerpt from the first paragraph “In 2021, <u>that number</u> had risen to 124”, the underlined expression refers to`,
    alternatives: [
      '“124”.',
      '“2.1”.',
      '“2021”.',
      '“98”.',
      '“15”.',
    ],
    answer: 'D',
    why: 'No primeiro parágrafo, lê-se: "In 2010, there were 98 nations and territories with fertility rates below 2.1 (...). In 2021, that number had risen to 124". A expressão sublinhada "that number" retoma a contagem de nações com fertilidade abaixo da taxa de reposição mencionada anteriormente, ou seja, as "98" nações de 2010, cujo total subiu para 124 em 2021.',
    wrong: {
      0: '"124" é o novo valor atingido por "that number" em 2021, e não o valor ao qual a expressão se refere retroativamente.',
      1: '"2.1" é a taxa de reposição de fertilidade mencionada como parâmetro de comparação, não uma quantidade de países.',
      2: '"2021" é apenas a referência temporal do novo dado, não uma quantidade à qual "that number" faça remissão.',
      4: '"15" refere-se, na última frase do parágrafo, ao número das maiores economias do mundo, informação não relacionada à expressão sublinhada.',
    },
  }),

  q({
    n: 18,
    subject: 'Inglês',
    content: 'Connectors: causal value of "as" in context',
    difficulty: 'Média',
    statement: `${TEXTO_BABY_BUST}

No trecho do segundo parágrafo “average ages rise, particularly <u>as</u> old people live longer”, o termo sublinhado introduz uma`,
    alternatives: [
      'comparação.',
      'consequência.',
      'causa.',
      'alternância.',
      'finalidade.',
    ],
    answer: 'C',
    why: 'No trecho, "as" equivale a "because/since" (já que, porque): a elevação da média de idade ocorre precisamente em razão de (porque) as pessoas idosas estarem vivendo mais tempo. Trata-se, portanto, do motivo (causa) pelo qual as médias de idade sobem.',
    wrong: {
      0: 'Uma comparação exigiria um paralelo explícito de igualdade ou diferença entre dois elementos (como "as... as"), o que não ocorre nesse trecho.',
      1: 'A oração introduzida por "as" expressa o motivo do fato (idades médias subindo), e não um efeito ou resultado decorrente dele.',
      3: 'Alternância indicaria opções sucessivas ou revezamento (como "whether... or"), sentido ausente no trecho.',
      4: 'Finalidade indicaria um propósito ou objetivo (como "so that", "in order to"), e não o motivo factual apresentado no trecho.',
    },
  }),

  q({
    n: 19,
    subject: 'Inglês',
    content: 'Reading comprehension: recent change in women\'s fertility trend',
    difficulty: 'Média',
    statement: `${TEXTO_BABY_BUST}

As to women, the text presents a tendency that has recently changed. The result of this change is:`,
    alternatives: [
      'two children per family to keep the replacement rate.',
      'rise in longevity in developing countries.',
      'educated women have fewer children.',
      'variation in longevity in developed countries.',
      'less educated women have fewer children.',
    ],
    answer: 'E',
    why: 'O texto afirma: "Educated women have for decades tended to have fewer children. Nevertheless, fertility among the less educated is now falling." Ou seja, a tendência de longa data (mulheres mais escolarizadas terem menos filhos) permanece, mas uma tendência nova e recente é que, agora, também as mulheres menos escolarizadas estão tendo menos filhos.',
    wrong: {
      0: 'O texto não menciona uma meta ou resultado de "dois filhos por família"; ao contrário, enfatiza a queda generalizada da fertilidade abaixo da taxa de reposição.',
      1: 'O aumento da longevidade é mencionado no segundo parágrafo, mas associado ao envelhecimento populacional, não a uma mudança recente no comportamento reprodutivo feminino.',
      2: '"Mulheres escolarizadas têm menos filhos" descreve a tendência antiga e já consolidada ("for decades"), não a mudança recente mencionada pelo texto.',
      3: 'A variação na longevidade (estabilização no Reino Unido, queda nos EUA) não está relacionada à tendência reprodutiva feminina descrita na frase.',
    },
  }),

  q({
    n: 20,
    subject: 'Inglês',
    content: 'Connectors: Portuguese equivalent for concessive "though"',
    difficulty: 'Fácil',
    statement: `${TEXTO_BABY_BUST}

No trecho do segundo parágrafo “<u>though</u> the rise in longevity has slowed in recent years”, o termo sublinhado equivale, em português, a`,
    alternatives: [
      'senão.',
      'também.',
      'sobretudo.',
      'embora.',
      'porque.',
    ],
    answer: 'D',
    why: 'Nesse trecho, "though" funciona como conjunção concessiva equivalente a "although" ("embora"/"ainda que"), introduzindo uma ressalva: embora o aumento da longevidade tenha desacelerado recentemente, isso não invalida a afirmação anterior de que os idosos vivem mais.',
    wrong: {
      0: '"Senão" expressa uma ideia de exceção ou condição alternativa negativa, sentido distinto do concessivo marcado por "though".',
      1: '"Também" expressa adição, sentido que não corresponde ao valor concessivo (de ressalva) exercido por "though" nesse contexto.',
      2: '"Sobretudo" expressa ênfase ou destaque, e não a ressalva concessiva introduzida por "though".',
      4: '"Porque" indicaria uma relação causal, incompatível com a relação de concessão/ressalva estabelecida pela conjunção "though" no trecho.',
    },
  }),

  q({
    n: 21,
    subject: 'Inglês',
    content: 'Reading comprehension: interpreting the chart on China\'s working-age population',
    difficulty: 'Média',
    statement: `${TEXTO_BABY_BUST}

According to the chart, China’s population aged 21-30`,
    visuals: [{ file: 'p1-q16-grafico-china.svg', alt: 'Gráfico do número de chineses com idade entre 21 e 30 anos, de 1970 a 2070 (projeção), em milhões', caption: 'China, population aged 21-30 (www.economist.com, 14.06.2023. Adaptado.)' }],
    alternatives: [
      'might be the same in 2070 as it was in 1970.',
      'has already reached its peak in 2010.',
      'has been falling steadily since 2000.',
      'should flatten after 2050.',
      'has been growing from 2000 to 2023.',
    ],
    answer: 'A',
    why: 'O gráfico mostra uma curva em formato de "sino" (ascendente e depois descendente) ao longo do período de 1970 a 2070: a população de 21-30 anos cresce até atingir um pico e depois declina continuamente, retornando, segundo a projeção, a um patamar próximo ao observado em 1970, fechando um ciclo demográfico completo no período de um século.',
    wrong: {
      1: 'Segundo o texto e o gráfico, o pico de trabalhadores jovens já havia começado a declinar a partir de 2012 (232 milhões), indicando que o auge ocorreu depois de 2010, não exatamente nesse ano.',
      2: 'A população descrita no texto só começa a declinar efetivamente a partir de 2012 (de 232 para 181 milhões em 2021); antes disso, a curva do gráfico mostra crescimento, não queda constante desde 2000.',
      3: 'O texto indica continuidade do declínio até "fewer than 100 million" por volta de meados da década de 2050, sem indicação de estabilização (achatamento) da curva depois desse período.',
      4: 'O texto afirma explicitamente que o número de trabalhadores de 21 a 30 anos já vinha declinando entre 2012 e 2021 (de 232 para 181 milhões), contrariando a ideia de crescimento nesse intervalo.',
    },
  }),

  q({
    n: 22,
    subject: 'Inglês',
    content: 'Reading comprehension: cause of the decline in China\'s working-age population',
    difficulty: 'Fácil',
    statement: `${TEXTO_BABY_BUST}

De acordo com o terceiro parágrafo, um dos motivos para o declínio da população em idade produtiva na China é`,
    alternatives: [
      'o subsídio aos aposentados.',
      'a política de um ou dois filhos.',
      'a facilidade em controlar a fertilidade.',
      'a falta de empregos.',
      'o desafio econômico.',
    ],
    answer: 'B',
    why: 'O terceiro parágrafo afirma textualmente: "China’s one-child — and later two-child — policy has contributed to the country’s decline in young workers". Ou seja, a política governamental chinesa de restrição à natalidade (primeiro de um filho, depois de dois) é apontada como causa direta da redução da população jovem em idade produtiva.',
    wrong: {
      0: 'O subsídio aos aposentados (pelos trabalhadores jovens) é apresentado como um desafio decorrente da escassez de jovens, e não como causa dessa escassez.',
      2: 'O texto afirma o oposto: "it is much more difficult to raise fertility levels than it is to crush them in the first place", sugerindo que reduzir a fertilidade foi mais fácil do que a ideia de "facilidade em controlar a fertilidade" sugere no sentido da alternativa.',
      3: 'A falta de empregos não é mencionada como causa do declínio populacional; o texto trata do inverso, da escassez de jovens trabalhadores para sustentar os aposentados.',
      4: '"O desafio econômico" é a consequência geral do declínio populacional descrita no início do parágrafo, não a causa específica apontada para a redução de jovens na China.',
    },
  }),

  q({
    n: 23,
    subject: 'Inglês',
    content: 'Reading comprehension: purpose of The Economist\'s Editor\'s note',
    difficulty: 'Média',
    statement: `${TEXTO_EDITORS_NOTE}

The Editor’s note published by The Economist intends to`,
    visuals: [{ file: 'p1-q23-economist-headline.svg', alt: 'Nota do Editor de The Economist explicando a alteração do título de uma matéria sobre produtividade na América Latina', caption: 'The Economist (www.economist.com, 09.06.2023. Adaptado.)' }],
    alternatives: [
      'change the new headline of the article because it is inadequate and offensive.',
      'point out that the readers might not fully understand the job market in Latin America.',
      'explain the reason why an alteration was made and the aim of the article.',
      'show that workers in Latin America are slow and do not care about productivity.',
      'compare Latin American workers to the American and European standards.',
    ],
    answer: 'C',
    why: 'A nota do Editor explica diretamente por que o título original foi alterado ("We have changed it to make clear that...") e esclarece qual é o verdadeiro objetivo do artigo: discutir os custos sociais e econômicos da baixa produtividade e suas causas estruturais ("Our aim is to draw attention to the structural causes..."). Portanto, a nota tem a função de justificar a mudança e explicitar a finalidade da matéria.',
    wrong: {
      0: 'A nota já informa que o título foi alterado no passado (ação concluída), e não que pretende alterá-lo agora; além disso, ela não classifica o título antigo como "inadequado e ofensivo" com essas palavras, apenas menciona que ele "atraiu críticas".',
      1: 'A nota não questiona a compreensão dos leitores sobre o mercado de trabalho latino-americano; ela esclarece a intenção editorial da matéria.',
      3: 'A nota rejeita essa visão, afirmando que a baixa produtividade decorre de causas estruturais (oligopólios, setor informal) e está "beyond the control of individual Latin Americans" — fora do controle individual dos trabalhadores.',
      4: 'Não há comparação explícita com padrões americanos ou europeus na nota do Editor; o foco está nas causas estruturais internas da região.',
    },
  }),

  q({
    n: 24,
    subject: 'Inglês',
    content: 'Vocabulary: connotation of "useless" in the original headline (pejorative)',
    difficulty: 'Fácil',
    statement: `${TEXTO_EDITORS_NOTE}

A chamada original que consta da nota do Editor, “A land of useless workers”, foi criticada pois o termo “useless” pode ser considerado`,
    visuals: [{ file: 'p1-q23-economist-headline.svg', alt: 'Nota do Editor de The Economist explicando a alteração do título de uma matéria sobre produtividade na América Latina', caption: 'The Economist (www.economist.com, 09.06.2023. Adaptado.)' }],
    alternatives: [
      'pejorativo.',
      'conveniente.',
      'trivial.',
      'ambíguo.',
      'cômico.',
    ],
    answer: 'A',
    why: 'O termo "useless" ("inúteis") atribuído aos trabalhadores latino-americanos é depreciativo e ofensivo, pois sugere incompetência ou falta de valor pessoal dos trabalhadores, quando, na realidade, segundo a própria nota, a baixa produtividade decorre de causas estruturais alheias ao controle individual deles. Por isso, o termo é considerado pejorativo, o que motivou as críticas e a posterior alteração do título.',
    wrong: {
      1: '"Conveniente" sugere um termo apropriado ou oportuno, sentido oposto ao de uma expressão que gerou controvérsia e crítica pública.',
      2: '"Trivial" sugere um termo banal ou sem importância, o que contraria o fato de a expressão ter causado forte reação negativa e exigido retificação editorial.',
      3: '"Ambíguo" indicaria duplo sentido não resolvido, mas o problema apontado pela crítica não é a ambiguidade do termo, e sim seu caráter ofensivo e depreciativo.',
      4: '"Cômico" sugere um efeito de humor, incompatível com o teor ofensivo que motivou as críticas relatadas na nota do Editor.',
    },
  }),

  q({
    n: 25,
    subject: 'Inglês',
    content: 'Reading comprehension: structural causes of low productivity in Latin America',
    difficulty: 'Média',
    statement: `${TEXTO_EDITORS_NOTE}

De acordo com a nota do Editor, uma das causas estruturais da baixa produtividade dos trabalhadores na América Latina é:`,
    visuals: [{ file: 'p1-q23-economist-headline.svg', alt: 'Nota do Editor de The Economist explicando a alteração do título de uma matéria sobre produtividade na América Latina', caption: 'The Economist (www.economist.com, 09.06.2023. Adaptado.)' }],
    alternatives: [
      'o setor informal considerável, que acaba dificultando o avanço das empresas.',
      'a exploração de mão de obra barata pelos oligopólios poderosos.',
      'os baixos salários pagos por falta de concorrência em alguns setores.',
      'a falta de investimento em qualificação e modernização por parte de oligopólios.',
      'a ineficácia do mercado de trabalho ao tentar atender os padrões internacionais.',
    ],
    answer: 'A',
    why: 'A nota do Editor cita explicitamente, entre as causas estruturais da baixa produtividade, "a large informal sector which forces many businesses to remain subscale" — ou seja, o setor informal expressivo que impede as empresas de crescerem e ganharem escala adequada, prejudicando sua produtividade e competitividade.',
    wrong: {
      1: 'A nota menciona os "powerful oligopolies that mute competition" (oligopólios que sufocam a concorrência), mas não fala de exploração de mão de obra barata por parte deles.',
      2: 'A nota não atribui a baixa produtividade a baixos salários decorrentes de falta de concorrência, mas sim à sufocação da concorrência pelos oligopólios e à informalidade do mercado.',
      3: 'A nota não menciona falta de investimento em qualificação ou modernização por parte dos oligopólios como causa estrutural citada.',
      4: 'A nota não atribui a baixa produtividade a uma suposta ineficácia do mercado de trabalho em atender padrões internacionais; ela aponta oligopólios e informalidade como causas estruturais internas.',
    },
  }),
];
