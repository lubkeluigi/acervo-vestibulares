import { createUnifesp } from './unifesp-helpers.js';

const { essay } = createUnifesp(2022);

export const unifesp2022Redacao = essay({
  statement: `REDAÇÃO

Texto 1

Monumento: 1. obra construída com a finalidade de perpetuar a memória de pessoa ou acontecimento relevante na história de uma comunidade, nação etc. 2. qualquer edificação de grande estatura, cujas dimensões, estética, imponência despertam admiração.

(Dicionário eletrônico Houaiss da língua portuguesa.)

Texto 2

Nunca houve um monumento da cultura que não fosse também um monumento da barbárie.

(Walter Benjamin. “Sobre o conceito da História” [1940]. Magia e técnica, arte e política, 1994.)

Texto 3

Foram precisos poucos segundos para que a estátua do traficante de escravos Edward Colston em Bristol, no Reino Unido, fosse laçada por uma corda e derrubada de seu pedestal, em 9 de junho de 2020. Colston foi apenas um dos muitos que tombaram. Estátuas do navegador Cristóvão Colombo, o “descobridor das Américas”, foram desmanteladas de Baltimore a São Francisco, de Boston a Richmond. Em Baltimore, aliás, discute-se rebatizar o Dia de Cristóvão Colombo (12 de outubro) de “Dia dos Povos Indígenas”. Como um dominó, monumentos de colonizadores caíram em Londres, Paris, Bruxelas. Uns foram simbolicamente decapitados; outros, grafitados e banhados em tinta vermelha, para lembrar a violência da escravidão e o genocídio dos povos originários das terras colonizadas. Em Lisboa, a palavra “descoloniza” foi pichada na estátua do padre português Antonio Vieira, da Companhia de Jesus, que catequizou os indígenas no Brasil colonial (1530-1822). Em São Paulo, a estátua do bandeirante Borba Gato balançou a internet, mas não desmoronou: reacendeu discussões sobre o destino desses marcos, símbolos de um passado colonial que continua vivo até hoje.

(Juliana Sayuri e Larissa Linder. “Desejo e reparação: como acertar as contas com o passado?”. https://tab.uol.com.br. Adaptado.)

Texto 4

Monumentos nem sempre são salvaguardas da história. Eles dizem mais respeito à mentalidade do contexto de suas criações, às negociações políticas e do direito à memória, que à missão de substitutos do ofício próprio dos historiadores. Sua natureza estática, contrária ao dinamismo dos processos sociais, pode gerar o efeito contrário, congelando no espaço representações de personagens e eventos que o acúmulo de pesquisas históricas, com o tempo, descreditaram como falsas, impróprias.
Quando toleramos a perpetuação de imagens de colonizadores, escravistas e bandidos em geral em nossas vias, é sinal que esses espaços não são tão públicos assim; é indício forte de que privilegiamos a memória de alguns personagens em detrimento de outros.

(Hélio Menezes. “Monumentos públicos de figuras controversas da história deveriam ser retirados? SIM”. www.folha.uol.com.br, 19.06.2020. Adaptado.)

Texto 5

Erguer monumentos que enaltecem líderes políticos e personagens históricos é uma prática antiga no mundo ocidental. Rememorar é a razão por que tais evocações em metal e pedra foram erguidas. Esquecer pode ser a saída para sua sobrevivência polêmica e incômoda?
Destruir essas imagens ou remover seus fragmentos para museus eliminaria uma presença desafiadora, que pode e deve servir para discutir o perigoso poder das imagens e da mitificação de personagens históricos nas sociedades contemporâneas. A cúpula Genbaku (o único prédio que permaneceu em pé perto do local onde a primeira bomba atômica explodiu), em Hiroshima, os campos de concentração de Auschwitz e o cais carioca do Valongo (o principal porto de entrada de africanos escravizados no Brasil) são construções que permanecem como lembrança do que não se pode repetir e do que jamais pode ser esquecido. Esculturas públicas — quase todas homenageando personagens que guardam em sua biografia dubiedades éticas — sugerem um igual desafio. Mantê-las é permitir uma chaga aberta com o poder de provocar a consciência permanentemente.

(Paulo César Garcez Marins. “Monumentos públicos de figuras controversas da história deveriam ser retirados? NÃO”. www.folha.uol.com.br, 19.06.2020. Adaptado.)

Com base nos textos apresentados e em seus próprios conhecimentos, escreva um texto dissertativo-argumentativo, empregando a norma-padrão da língua portuguesa, sobre o tema:`,
  blockTypes: [
    'label',
    'subheading', 'prose', 'source',
    'subheading', 'prose', 'source',
    'subheading', 'prose', 'source',
    'subheading', 'prose', 'prose', 'source',
    'subheading', 'prose', 'prose', 'source',
    'command',
  ],
  statementTail: 'Derrubar monumentos? Os dilemas entre relembrar e apagar o passado',
  tailBlockTypes: ['headline'],
  parts: [{
    id: 'T',
    prompt: 'Produza um texto dissertativo-argumentativo em norma-padrão da língua portuguesa sobre o tema: “Derrubar monumentos? Os dilemas entre relembrar e apagar o passado”.',
    expected: 'Espera-se uma discussão consistente e bem fundamentada articulando os dilemas entre derrubar/manter monumentos históricos controversos e a tensão entre relembrar e apagar o passado. O candidato pode defender a remoção/ressignificação dos monumentos (como ato de justiça histórica contra a celebração de opressores e colonizadores) ou sua preservação crítica no espaço público/museus (como registro desconfortável do passado que não deve ser esquecido nem apagado, evitando o revisionismo histórico acrítico), desde que articule claramente a relação entre memória, história, poder e espaço público.',
    criteria: [
      { points: 1, text: 'Critério A (Tema): Aborda a temática central articulando a questão de derrubar ou preservar monumentos à tensão entre relembrar e apagar o passado histórico.' },
      { points: 1, text: 'Critério B (Estrutura e Coerência): Desenvolve dissertação-argumentativa estruturada (introdução, desenvolvimento com argumentos articulados e conclusão coerente), sem contradições graves nem modelos prontos.' },
      { points: 1, text: 'Critério C (Modalidade e Coesão): Domina a norma-padrão e emprega recursos coesivos inter e intraparágrafos com propriedade e variedade lexical.' },
    ],
  }],
  studyNotes: [
    'Critério oficial VUNESP: O candidato podia adotar posição favorável à derrubada/remoção (ressignificação do espaço público, descolonização da memória), contrária à derrubada (preservação como memória pedagógica e alerta para a barbárie, como defendido por Garcez Marins) ou ponderada (transferência para museus com placas explicativas), desde que enfrentasse os dois eixos da pergunta: derrubar ou manter monumentos e os dilemas entre relembrar e apagar o passado.',
    'Repertórios produtivos frequentes: Walter Benjamin (o documento de cultura que é simultaneamente documento de barbárie), Pierre Nora e os "lugares de memória", Paul Ricoeur ("A memória, a história, o esquecimento"), Michael Pollak ("Memória, esquecimento, silêncio") e os debates contemporâneos sobre a estátua de Borba Gato em São Paulo e Edward Colston em Bristol.',
  ],
});
