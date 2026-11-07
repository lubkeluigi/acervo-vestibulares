import { q } from './ufpr2027-helpers.js';

const SCHWARTSMAN_BLOCKS = [
  'O texto a seguir é referência para as questões 64 a 70.',
  'Por Hélio Schwartsman',
  'Muita objetividade pode ser um problema. Eu estaria mentindo se dissesse que não aprecio as facilidades linguísticas proporcionadas pelos avanços tecnológicos. Hoje, basta digitar uma palavra num dicionário eletrônico ou buscador para chegar diretamente ao verbete. No Kindle, não é necessário nem digitar. É só colocar o cursor sobre o termo que gerou dúvida para que sua definição lexicográfica se abra magicamente na tela.',
  'Não tanto tempo atrás, quem procurava uma palavra num dicionário físico tinha de compulsar páginas e páginas até localizar o referido verbete pela ordem alfabética. Era um processo que, mesmo para os mais treinados, consumia pelo menos algumas dezenas de segundos. E muitas vezes mais.',
  'É que (1), ao folhear o dicionário, não era incomum que (2) uma palavra qualquer nos chamasse a atenção e parássemos nela. Você ia conferir o significado de um termo e, no caminho, aprendia o de outro. Entrava em jogo aí o que (3) o pessoal de língua inglesa chama de “serendipity”, que (4) é o sentimento de surpresa positiva que (5) experimentamos ao fazer uma descoberta feliz de forma não planejada.',
  'Não é uma estratégia de aprendizado muito organizada ou efetiva, mas ela podia ser deliciosamente satisfatória quando você topava com uma palavra “à propos”. Não sou, porém, um ludita linguístico. Os avanços tecnológicos vieram para ficar e têm vários aspectos positivos.',
  'A produtividade da leitura aumenta muito, especialmente em idiomas estrangeiros. Não troco meu Kindle por nada, mas usufruir das novas comodidades não deve nos fazer fechar os olhos para o que perdemos. Podemos até, eventualmente, tentar produzir compensações, como de vez em quando brincar de abrir um velho dicionário físico e ler verbetes ao acaso.',
  'Um novo ciclo de superobjetivização está a caminho com as inteligências artificiais, que nos oferecem respostas prontas (e por vezes erradas) em vez de nos remeter às páginas que trazem os elementos para solucionar nossa dúvida. É um avanço, mas que também implicará perdas.',
  'Disponível em: https://www1.folha.uol.com.br. Adaptado.',
  'Kindle: dispositivo eletrônico, leitor de livros digitais.\nÀ propos: expressão francesa que significa “de modo oportuno”, “em boa hora”.',
];

const SCHWARTSMAN_BLOCK_TYPES = [
  'label',
  'subheading',
  'prose',
  'prose',
  'prose',
  'prose',
  'prose',
  'prose',
  'source',
  'note-box',
  'command',
];

const makeSchwartsmanStatement = (command) => `${SCHWARTSMAN_BLOCKS.join('\n\n')}\n\n${command}`;

export const ufpr2027Lote07 = [
  q({
    n: 61, subject: 'Sociologia', content: 'Sociologia Brasileira — Lilia Schwarcz e a escravidão como linguagem social', difficulty: 'Média',
    statement: `“No Brasil, o sistema escravocrata transformou-se num modelo tão enraizado que acabou se convertendo numa linguagem, com graves consequências. Grassou por aqui, do século XVI ao XIX, uma escandalosa injustiça amparada pela artimanha da legalidade. [...] Aliás, no caso brasileiro, de tão disseminada ela deixou de ser privilégio de senhores de engenho. Padres, militares, funcionários públicos, artesãos, taverneiros, comerciantes, pequenos lavradores, grandes proprietários, a população mais pobre e até libertos possuíam cativos. E, sendo assim, a escravidão foi bem mais que um sistema econômico: ela moldou condutas, definiu desigualdades sociais, fez de raça e cor marcadores de diferença fundamentais, ordenou etiquetas de mando e obediência, e criou uma sociedade condicionada pelo paternalismo e por uma hierarquia muito estrita.”

Schwarcz, Lilia Moritz. Sobre o autoritarismo brasileiro. São Paulo: Cia das Letras, 2019. p. 22.

Levando em consideração o argumento de que o sistema escravocrata transcendia o simples modelo econômico, é correto afirmar:`,
    blockTypes: ['quote', 'source', 'command'],
    works: ['Sobre o autoritarismo brasileiro'],
    alternatives: [
      'A escravização foi uma estratégia para atender às demandas da livre concorrência propaladas pelos setores liberais no Brasil entre os séculos XVI e XIX.',
      'Apesar do processo de escravização, houve relativa liberdade concedida até mesmo a ex-escravizados, que após serem libertos tinham direito a possuir seus próprios cativos.',
      'Diferentes classes sociais e profissionais fizeram uso do trabalho escravo, o que corresponde a dizer que esse foi o modo de produção mais equânime dentre as outras formas de organização social existentes.',
      'O regime de propriedade sobre a mão de obra escravizada era determinado de modo economicamente estrito, que formava um ethos próprio de uma sociedade que naturalizava a escravidão ao reforçar esse modelo societário.',
    ],
    answer: 'D',
    why: 'Lilia Schwarcz demonstra que a escravidão no Brasil ultrapassou a condição de engrenagem produtiva mercantil para se constituir em um "ethos" civilizatório estruturante: ela organizou a linguagem cotidiana, as etiquetas de hierarquia entre quem manda e quem obedece e o autoritarismo social brasileiro, naturalizando privilégios e desigualdades raciais que perduram até a contemporaneidade.',
    wrong: {
      0: 'A escravidão mercantil colidiu historicamente com os preceitos liberais clássicos de trabalho livre assalariado.',
      1: 'A compra esporádica de cativos por forros não representava "liberdade social concedida", mas sim a onipresença perversa da escravidão como único parâmetro de ascensão na sociedade colonial.',
      2: 'A escravidão era a antítese absoluta de qualquer equidade social, constituindo um regime violento de opressão máxima.',
    },
  }),
  q({
    n: 62, subject: 'Sociologia', content: 'Sociologia Contemporânea — Judith Butler e as disputas sobre gênero', difficulty: 'Média',
    statement: `“Muitas metáforas proliferam, misturadas, no esforço de retratar o gênero como um perigo extremo. As várias figuras de destruição não se encaixam em um quadro coerente, e sim se acumulam sem qualquer preocupação com consistência ou contradição. Quanto mais o ‘gênero’ consegue reunir esses diversos medos e ansiedades, mais poderoso o fantasma se torna. Se uma figura de destruição não funciona com todos os públicos, outra muitas vezes funcionará, e se todas se acumularem com velocidade e intensidade suficientes sob um único nome, poderão circular ainda mais amplamente, atraindo diferentes públicos à medida que avançam. Juntas, elas procuram identificar a origem do medo e da destruição, aquilo que devemos temer, o que destruirá nossas vidas. E ao fazer isso, começam a destruir a vida das pessoas que foram usadas como bodes expiatórios.”

Butler, Judith. Quem tem medo do gênero? São Paulo: Boitempo, 2024. p. 49.

No que se refere às disputas e polêmicas sobre o tema do gênero sintetizadas pela autora, é correto afirmar:`,
    blockTypes: ['quote', 'source', 'command'],
    works: ['Quem tem medo do gênero?'],
    alternatives: [
      'O gênero, compreendido como um tema politizado, tornou-se parte de uma agenda social exclusivamente nos círculos feministas.',
      'Qualquer discussão que leve em consideração o gênero como pressuposto analítico deve considerá-lo como figura incoerente e contraditória.',
      'O debate em torno do tema de gênero mobiliza diferentes grupos sociais não pela definição dos princípios e pela necessidade de clarificar seus pressupostos, mas pela suspeição do tema e pelo seu impacto na esfera pública.',
      'A ideologia de gênero é um importante debate aberto pela sociedade civil que permite analisar os papéis de homens e mulheres numa sociedade autoritária.',
    ],
    answer: 'C',
    why: 'Judith Butler analisa como a categoria "gênero" foi transformada em um fantasma ameaçador (pânico moral) por movimentos reacionários e conservadores transnacionais. O debate mobiliza o público não através do rigor dos conceitos sociológicos, mas pela instrumentalização do medo e pela difamação de grupos vulneráveis (usados como bodes expiatórios para canalizar ansiedades sociais heterogêneas).',
    wrong: {
      0: 'A ofensiva contra o gênero tornou-se pauta central em campanhas eleitorais, igrejas e parlamentos mundiais, extrapolando os círculos feministas.',
      1: 'Os estudos de gênero acadêmicos possuem rigor teórico e metodológico; a incoerência apontada por Butler reside nas metáforas conspiratórias dos que atacam o conceito.',
      3: 'O termo "ideologia de gênero" é um construto retórico deslegitimador forjado para interditar a educação em direitos humanos e diversidade.',
    },
  }),
  q({
    n: 63, subject: 'Sociologia', content: 'Filosofia e Sociologia Política — Biopoder, necropolítica e racismo de Estado', difficulty: 'Média',
    statement: `“Michel Foucault salientou em sua obra Vigiar e punir que é desta forma – encarcerando ou assassinando – que se lida com os considerados ‘inimigos do Estado’. A noção de ‘biopoder’ e ‘biopolítica’ fala de técnicas de hierarquia que vigia e das técnicas da sanção que normaliza. Trata-se de um ‘controle normalizante, uma vigilância que permite classificar, qualificar e punir’. Esse conceito, interseccionado às discussões que o filósofo camaronês Achille Mbembe faz sobre a ‘necropolítica’, trata do poder não apenas nos contextos de colonização, mas também nos contextos brasileiros tendo como eixo central as questões raciais contemporâneas.”

Bento, Cida. O pacto da branquitude. São Paulo: Cia das Letras, 2022. p. 31.

No que concerne ao aspecto do biopoder e sua capacidade de normatização do racismo suscitado pela autora, é correto afirmar que:`,
    blockTypes: ['quote', 'source', 'command'],
    works: ['Vigiar e punir', 'O pacto da branquitude'],
    alternatives: [
      'o encarceramento e o assassinato se tornaram políticas de Estado voltadas à segurança pública e ao fortalecimento da sociedade antirracista.',
      'o racismo permite o exercício do biopoder, já que a função do racismo é regular a distribuição e tornar possível e aceitável a função assassina do Estado.',
      'o controle normalizante é uma condição inerente à proteção das pessoas de bem numa democracia, impedindo o avanço de quaisquer tipos de autoritarismo biopolítico.',
      'necropolítica é um conceito que se aplica à análise dos fenômenos sociais que participam da estruturação dos poderes de uma determinada nação.',
    ],
    answer: 'B',
    why: 'Em Em Defesa da Sociedade, Michel Foucault demonstra que a função primária do racismo no interior do biopoder (fazer viver e deixar morrer) é introduzir uma cesura no continuum biológico da espécie, justificando e tornando socialmente tolerável o poder soberano de matar ou deixar morrer determinadas populações (necropolítica de Mbembe), visível na letalidade policial e no encarceramento em massa da juventude negra brasileira.',
    wrong: {
      0: 'O encarceramento em massa perpetua o racismo institucional e a exclusão genocida, não o fortalecimento antirracista.',
      2: 'O controle normalizante é um dispositivo disciplinar de assujeitamento e vigilância, frequentemente empregado de maneira autoritária.',
      3: 'A necropolítica foca na determinação soberana sobre quem deve viver e quem deve morrer em zonas de exceção e morte, não na análise genérica abstrata de instituições.',
    },
  }),
  q({
    n: 64, subject: 'Português', content: 'Interpretação Textual — Referência cultural e neologismo (ludita linguístico)', difficulty: 'Fácil',
    statement: makeSchwartsmanStatement('Ao afirmar não ser um “ludita linguístico”, o autor:'),
    blockTypes: SCHWARTSMAN_BLOCK_TYPES,
    alternatives: [
      'não se ilude com os dicionários por entender que os avanços linguísticos são irrefreáveis.',
      'reconhece que a tecnologia pode ampliar o vocabulário dos leitores.',
      'recusa manter a pureza linguística frente às novas possibilidades de leitura.',
      'refuta a ideia de brigar com as novas tecnologias que facilitam a leitura.',
    ],
    answer: 'D',
    why: 'A expressão remete ao ludismo (movimento do início da Revolução Industrial inglesa em que operários quebravam máquinas para protestar). Ao declarar que não é um "ludita linguístico", Hélio Schwartsman esclarece que não é um inimigo retrógrado da tecnologia nem pretende repudiar ou combater as facilidades digitais (como Kindles, buscadores e dicionários eletrônicos), reconhecendo expressamente seus méritos.',
    wrong: {
      0: 'A referência ludita não se relaciona a desilusão com dicionários, mas à atitude de rejeição violenta da técnica.',
      1: 'O autor não afirma que o Kindle amplia vocabulário mais do que o dicionário tradicional; aponta ganhos de produtividade e rapidez.',
      2: 'Não há discussão sobre purismo gramatical vernacular no excerto, mas sobre os suportes e métodos de consulta tecnológica.',
    },
  }),
  q({
    n: 65, subject: 'Português', content: 'Gêneros Textuais e Progressão Argumentativa — Artigo de opinião', difficulty: 'Média',
    statement: makeSchwartsmanStatement('Considerando a sequência do texto, por qual processo se constrói o sentido da afirmação inicial “Muita objetividade pode ser um problema”?'),
    blockTypes: SCHWARTSMAN_BLOCK_TYPES,
    alternatives: [
      'Suspensão momentânea de sua explicação, seguida do reconhecimento das vantagens tecnológicas, da exposição das perdas relacionadas ao fácil acesso à informação e da ampliação da objetividade com as inteligências artificiais.',
      'Associação de objetividade com produtividade, demonstrada pelo aumento da rapidez das consultas e apresentada no último parágrafo como resultado do desenvolvimento das inteligências artificiais.',
      'Oposição entre aprendizagem planejada e descoberta casual, resolvida pela valorização dos dicionários físicos como meios eficientes e apresentada como alternativa ao avanço das inteligências artificiais.',
      'Comparação do emprego de recursos digitais ao uso de dicionários físicos como forma de acesso à informação, para fundamentar a defesa de uma escolha entre a produtividade da leitura e as descobertas proporcionadas pelo acaso.',
    ],
    answer: 'A',
    why: 'O autor inicia com a frase provocativa ("Muita objetividade pode ser um problema"), adia temporariamente sua justificativa para elogiar a rapidez dos dispositivos digitais, em seguida resgata as perdas sutis da perda do folheio (a serendipity) e projeta no desfecho a radicalização dessa objetividade com as IAs generativas.',
    wrong: {
      1: 'O texto não identifica objetividade pura com virtude irrestrita, problematizando exatamente as perdas do excesso de pragmatismo.',
      2: 'O autor não defende o abandono do digital para restaurar a primazia exclusiva dos dicionários físicos.',
      3: 'O texto não propõe um dilema excludente em que se deva escolher um em detrimento definitivo do outro, sugerindo inclusive compensações lúdicas ocasionais.',
    },
  }),
  q({
    n: 66, subject: 'Português', content: 'Interpretação e Análise Argumentativa — Serendipity e aprendizado', difficulty: 'Fácil',
    statement: makeSchwartsmanStatement('Qual é o argumento defendido pelo autor com a afirmação “Não é uma estratégia de aprendizado muito organizada ou efetiva, mas ela podia ser deliciosamente satisfatória quando você topava com uma palavra ‘à propos’”?'),
    blockTypes: SCHWARTSMAN_BLOCK_TYPES,
    alternatives: [
      'O valor da descoberta casual decorre da pertinência da palavra encontrada para solucionar a dúvida que motivou a consulta, ainda que o encontro não tenha sido planejado.',
      'A satisfação da descoberta casual permite equiparar o aprendizado imprevisto ao aprendizado obtido por meio de uma estratégia planejada.',
      'O valor da descoberta casual pode residir no aprendizado imprevisto e na satisfação que proporciona, mesmo que ela não constitua um método sistemático de estudo.',
      'O prazer associado ao acaso demonstra que o percurso mais demorado da consulta favorece uma aprendizagem superior àquela obtida pelo acesso direto à informação.',
    ],
    answer: 'C',
    why: 'O autor reconhece com honestidade que folhear dicionários a esmo não substitui uma metodologia sistemática de estudos, mas ressalta o encantamento e a riqueza intelectual da "serendipity": o encontro fortuito e prazeroso com termos inesperados e oportunos durante o percurso da leitura.',
    wrong: {
      0: 'A palavra achada por acaso não resolvia a dúvida inicial que motivou a busca, mas agregava um conhecimento colateral novo.',
      1: 'O texto não afirma que as duas estratégias têm eficácia equivalente, admitindo explicitamente que a casualidade não é organizada ou efetiva.',
      3: 'O autor não defende a lentidão como método didático superior por si só, valorizando apenas a dimensão da surpresa feliz.',
    },
  }),
  q({
    n: 67, subject: 'Português', content: 'Morfossintaxe — Funções sintáticas da partícula “que”', difficulty: 'Difícil',
    statement: makeSchwartsmanStatement('Sobre a presença da palavra “que” no 3.º parágrafo, assinale a alternativa correta.'),
    blockTypes: SCHWARTSMAN_BLOCK_TYPES,
    alternatives: [
      'O que (1) e o que (3) têm a mesma classificação sintática.',
      'O que (2) introduz uma oração que exerce a mesma função sintática de “Você” (destacado no parágrafo).',
      'O que (4) e o que (5) são pronomes relativos e retomam o mesmo substantivo.',
      'O que (3) introduz uma oração subordinada adverbial consecutiva.',
    ],
    answer: 'B',
    why: 'Em “não era incomum que (2) uma palavra qualquer nos chamasse a atenção”, a oração introduzida por “que” funciona como sujeito oracional do predicado “não era incomum” (oração subordinada substantiva subjetiva). Por sua vez, na oração seguinte, o pronome “Você” exerce a função sintática de sujeito do verbo “ia”. Portanto, ambas exercem a função sintática de sujeito.',
    wrong: {
      0: 'O que (1) é partícula expletiva/de realce na locução "É que", enquanto o que (3) funciona como pronome relativo introduzido pelo demonstrativo "o" ("aquilo que").',
      2: 'O que (4) retoma "serendipity", enquanto o que (5) retoma "surpresa positiva", não compartilhando o mesmo referente imediato.',
      3: 'O que (3) é pronome relativo antecedido pelo pronome demonstrativo "o" (objeto direto de "chama"), não conjunção subordinativa consecutiva.',
    },
  }),
  q({
    n: 68, subject: 'Português', content: 'Coesão e Coerência — Articulação de relações causais no texto', difficulty: 'Média',
    statement: makeSchwartsmanStatement('Acerca das relações entre as ideias do texto, é correto afirmar que:'),
    blockTypes: SCHWARTSMAN_BLOCK_TYPES,
    alternatives: [
      '“muitas vezes mais” (l. 7) é consequência de “uma palavra qualquer nos chamasse a atenção e parássemos nela” (l. 8-9).',
      '“o sentimento de surpresa positiva” (l. 10) é consequência dos “vários aspectos positivos” (l. 13-14) dos avanços tecnológicos.',
      '“remeter às páginas que trazem os elementos para solucionar nossa dúvida” (l. 19) é consequência da “superobjetivação” (l. 18).',
      '“A produtividade da leitura” (l. 15) é consequência de “brincar de abrir um velho dicionário físico e ler verbetes ao acaso” (l. 17).',
    ],
    answer: 'A',
    why: 'O autor afirma que folhear o dicionário consumia dezenas de segundos e "muitas vezes mais" justamente porque o leitor era seduzido por palavras inesperadas ao longo do caminho e parava a leitura para examiná-las, ampliando o tempo da busca.',
    wrong: {
      1: 'A surpresa positiva (serendipity) provinha da exploração dos dicionários físicos, e não dos avanços da informática.',
      2: 'Remeter às páginas de contexto é o que a superobjetivização das IAs deixa de fazer ao entregar respostas mastigadas.',
      3: 'A produtividade advém da agilidade instantânea dos leitores digitais modernos, e não do ato nostálgico de folhear dicionários em papel.',
    },
  }),
  q({
    n: 69, subject: 'Português', content: 'Semântica Lexical — Sentido contextual do verbo “compulsar”', difficulty: 'Fácil',
    statement: makeSchwartsmanStatement('No trecho “tinha de compulsar páginas e páginas” (2º parágrafo), o verbo “compulsar” pode ser substituído, sem alteração de sentido no contexto, por:'),
    blockTypes: SCHWARTSMAN_BLOCK_TYPES,
    alternatives: [
      'selecionar.',
      'registrar.',
      'comparar.',
      'percorrer.',
    ],
    answer: 'D',
    why: 'No contexto de "compulsar páginas e páginas até localizar o referido verbete", o verbo transitivo compulsar é empregado na acepção clássica de manusear, folhear atentamente, correr os olhos ou percorrer sucessivas páginas de uma publicação em busca de uma informação.',
    wrong: {
      0: 'Selecionar é escolher entre várias opções, não o ato de folhear as folhas.',
      1: 'Registrar é anotar, inscrever ou documentar.',
      2: 'Comparar é confrontar elementos para estabelecer semelhanças e dessemelhanças.',
    },
  }),
  q({
    n: 70, subject: 'Português', content: 'Compreensão Textual e Vocabulário — Conceito de serendipity', difficulty: 'Fácil',
    statement: makeSchwartsmanStatement('De acordo com a definição dada pelo autor, o sentimento de serendipity ocorreria em qual situação?'),
    blockTypes: SCHWARTSMAN_BLOCK_TYPES,
    alternatives: [
      'Encontrar um amigo de infância para almoçar.',
      'Encontrar o próprio nome na lista de aprovados no vestibular.',
      'Encontrar um dinheiro esquecido no bolso da calça.',
      'Encontrar após um cálculo a resposta de uma questão de matemática.',
    ],
    answer: 'C',
    why: 'O autor define serendipity como o sentimento de surpresa jubilosa ao fazer uma descoberta feliz de maneira absolutamente não planejada e casual. Achar uma nota de dinheiro esquecida no bolso ao vestir uma roupa é o exemplo perfeito de benefício inesperado e não programado.',
    wrong: {
      0: 'Se o encontro para almoçar foi previamente combinado, há planejamento prévio.',
      1: 'Ver o nome na lista de aprovados é o resultado ansiosamente aguardado e buscado após muito estudo, não uma casualidade desconexa.',
      3: 'A resolução exata de um problema matemático é meta direta do cálculo deliberado.',
    },
  }),
];
