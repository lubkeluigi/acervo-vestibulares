import { q, img } from './ufpr2027-helpers.js';

export const ufpr2027Lote01 = [
  q({
    n: 1, subject: 'Geografia', content: 'Transição energética e mobilidade elétrica', difficulty: 'Média',
    statement: `Analise o gráfico a seguir, referente ao número de licenciamentos de veículos eletrificados e sua participação percentual no total de licenciamentos de veículos no Brasil, no período de 2015 a 2025.

Fonte: EPE - Empresa de Pesquisa Energética, 2026. Disponível em: https://www.epe.gov.br/.

Considerando as informações apresentadas no gráfico, qual é a tendência observada para os veículos eletrificados no Brasil e sua relação com o processo geográfico que vem ocorrendo nos últimos anos?`,
    blockTypes: ['prose', 'source', 'command'],
    diagram: 'ufpr2027Q01',
    figureCaption: 'Licenciamento de eletrificados e participação no licenciamento total (2015-2025).',
    alternatives: [
      'Incremento relativo da frota de veículos nacionais em decorrência de uma queda no licenciamento de veículos eletrificados, provocada pela pandemia de Covid-19, a qual reduziu a renda média e o consumo da população brasileira.',
      'Elevação do licenciamento de veículos elétricos a bateria, que superou a expansão do licenciamento de veículos híbridos elétricos plug-in, impulsionada pelo recente processo de redução dos impostos de importação de carros elétricos.',
      'Expansão do licenciamento de veículos eletrificados e retração do licenciamento de veículos híbridos, em decorrência da diminuição dos incentivos públicos ao setor automotivo e da falta de investimentos em infraestrutura elétrica nacional.',
      'Aumento da participação dos veículos eletrificados no licenciamento total, como reflexo do processo de transição energética no setor de mobilidade e da substituição gradual dos combustíveis fósseis por fontes mais limpas e renováveis.',
    ],
    answer: 'D',
    why: 'O gráfico demonstra crescimento acelerado tanto no volume absoluto quanto no percentual de participação dos veículos eletrificados no Brasil, acompanhando a tendência global de transição energética rumo à descarbonização da mobilidade urbana.',
    wrong: {
      0: 'O gráfico indica forte aumento contínuo do licenciamento de eletrificados, e não queda provocada pela pandemia.',
      1: 'Os impostos de importação sobre veículos elétricos no Brasil sofreram recomposição gradual recente, não redução ampla como motor exclusivo.',
      2: 'Não houve retração dos veículos híbridos; ambas as categorias (híbridos e 100% elétricos) registraram expansão no período analisado.',
    },
  }),
  q({
    n: 2, subject: 'Geografia', content: 'Pedogênese e horizontes do solo', difficulty: 'Fácil',
    statement: `Observe a figura a seguir, que representa um esquema do processo de formação de um perfil de solo.

Lima, V. C.; Lima, M. R.; Melo, V. F. O solo no meio ambiente: abordagem para professores do ensino fundamental e médio e alunos do ensino médio. Curitiba - PR: Universidade Federal do Paraná - UFPR / Departamento de Solos e Engenharia Agrícola, 2007.

O processo de formação do solo ilustrado na figura é resultado:`,
    blockTypes: ['prose', 'source', 'command'],
    images: [img('q02-perfil-solo.png', 'Esquema didático dos estágios de formação de um perfil de solo a partir da rocha matriz')],
    alternatives: [
      'do processo de deposição e decomposição de matéria orgânica oriunda das matas, das florestas e das atividades agrícolas, contribuindo para a formação dos diferentes horizontes do perfil do solo.',
      'do processo de exposição e alteração do material de origem, em que a rocha é submetida à ação do clima, do intemperismo e dos processos pedogenéticos, formando os horizontes do perfil do solo.',
      'da deposição de materiais inorgânicos que se acumulam na superfície terrestre em condições de sedimentação, que resultam na formação de diferentes rochas sedimentares e horizontes pedogenéticos do perfil do solo.',
      'do processo de erosão, que envolve a deposição de sedimentos e outros materiais provenientes de deslizamentos de terra, resultando na arenização e na lixiviação do solo, além da diferenciação dos horizontes pedológicos.',
    ],
    answer: 'B',
    why: 'A formação do solo (pedogênese) decorre da ação combinada do clima, dos seres vivos e do relevo sobre a rocha matriz ao longo do tempo geológico, gerando camadas diferenciadas (horizontes O, A, B, C e R).',
    wrong: {
      0: 'A matéria orgânica é determinante para o horizonte superficial (O e A), mas o solo como um todo se origina fundamentalmente da alteração do material rochoso mineral.',
      2: 'O esquema representa a pedogênese a partir da alteração in situ da rocha matriz, e não simplesmente a diagênese de rochas sedimentares.',
      3: 'Erosão e deslizamentos promovem degradação e transporte de materiais, não o processo fundamental de formação primária dos horizontes do perfil.',
    },
  }),
  q({
    n: 3, subject: 'Geografia', content: 'Climatologia — Fenômeno El Niño', difficulty: 'Fácil',
    statement: `Considere o texto a seguir:

No dia 2 de junho de 2026, em um comunicado à imprensa, a Organização Meteorológica Mundial (OMM) já alertava: “Prepare-se para o El Niño”. Impulsionadas por águas oceânicas excepcionalmente quentes no Oceano Pacífico equatorial, as condições do El Niño já estavam se desenvolvendo com previsão de fortalecimento durante o verão austral de 2026-2027.

Disponível em: https://wmo.int/news/media-centre/wmo-prepare-el-nino.

Considerando as informações apresentadas, assinale a alternativa que indica uma das consequências esperadas do fenômeno El Niño durante o verão no território brasileiro.`,
    blockTypes: ['prose', 'quote', 'source', 'command'],
    alternatives: [
      'Intensificação das chuvas na região da Amazônia Legal e aumento de incêndios nas regiões Sul e Sudeste do país.',
      'Ocorrência de secas nas regiões Sul, Sudeste e Centro-Oeste e elevação das temperaturas em todo o território brasileiro.',
      'Aumento das precipitações na região Sul e tendência de redução das chuvas em partes das regiões Norte e Nordeste.',
      'Maior presença das frentes frias na região Sul e aumento generalizado das precipitações em todas as regiões brasileiras.',
    ],
    answer: 'C',
    why: 'O El Niño provoca alteração na circulação de Walker, bloqueando frentes frias sobre o Sul (causando chuvas torrenciais e inundações) e inibindo a convecção no Norte/Nordeste (resultando em estiagens severas).',
    wrong: {
      0: 'O El Niño causa diminuição de chuvas e aumento de queimadas na Amazônia, exatamente o oposto do afirmado.',
      1: 'Na região Sul, o El Niño gera excesso de chuvas, e não estiagem.',
      3: 'O El Niño não provoca aumento generalizado em todas as regiões; ele gera forte assimetria pluviométrica com seca no semiárido e chuvas volumosas no Sul.',
    },
  }),
  q({
    n: 4, subject: 'Geografia', content: 'Urbanização e segregação socioespacial', difficulty: 'Fácil',
    statement: `Analise e compare os dois fragmentos de texto a seguir:

“A cidade em si, como relação social e como materialidade, torna-se criadora de pobreza, tanto pelo modelo socioeconômico de que é o suporte como por sua estrutura física.”

Santos, M. A urbanização brasileira. São Paulo: Edusp, 2008.

“É enorme o abismo que separa a produção da história dos bairros de alta renda da produção de histórias dos bairros populares. É impressionante o esforço e o empenho da sociedade em ‘fazer’ a história dos bairros mais ricos, em chocante contraste com a total negligência e pouco-caso para com a história dos bairros pobres.”

Villaça, F. Espaço intra-urbano no Brasil. São Paulo: FAPESP / Studio Nobel, 2001.

Nos dois textos, aborda-se o processo diretamente relacionado com a periferização urbana denominado:`,
    blockTypes: ['prose', 'quote', 'source', 'quote', 'source', 'command'],
    works: ['A urbanização brasileira', 'Espaço intra-urbano no Brasil'],
    alternatives: [
      'verticalização urbana.',
      'segregação socioespacial.',
      'metropolização.',
      'requalificação urbana.',
    ],
    answer: 'B',
    why: 'A disparidade na distribuição de infraestrutura, renda e valorização histórica entre os bairros nobres e as periferias vulneráveis define o conceito de segregação socioespacial formulado pelo pensamento geográfico brasileiro.',
    wrong: {
      0: 'Verticalização refere-se à proliferação de edifícios em altura nas áreas centrais e eixos de transporte.',
      2: 'Metropolização é o crescimento e integração funcional de cidades em torno de uma metrópole principal.',
      3: 'Requalificação urbana é a revitalização de áreas deterioradas (como frentes portuárias ou centros históricos).',
    },
  }),
  q({
    n: 5, subject: 'Geografia', content: 'Cartografia — Projeções equivalentes', difficulty: 'Média',
    statement: `Considere o mapa abaixo, publicado pelo IBGE.

Disponível em: https://agenciadenoticias.ibge.gov.br/.

Considerando essa representação do globo terrestre, assinale a alternativa correta.`,
    blockTypes: ['prose', 'source', 'command'],
    images: [img('q05-mapa-ibge.png', 'Planisfério do IBGE com o Brasil posicionado ao centro')],
    alternatives: [
      'A orientação adotada altera a posição correta do globo terrestre, contrariando a convenção do Norte voltado para cima.',
      'O mapa preserva a forma dos países, ao tomar como base de representação uma projeção cartográfica do tipo afilática.',
      'A projeção cartográfica utilizada é do tipo equivalente, visando a preservação da proporção das áreas dos continentes.',
      'As coordenadas geográficas estão invertidas, resultando na representação do Brasil no topo e ao centro do mapa.',
    ],
    answer: 'C',
    why: 'O mapa-múndi oficial do IBGE emprega uma projeção equivalente (que preserva a fidelidade proporcional da área territorial de cada continente) e coloca o Brasil no centro do meridiano de exibição.',
    wrong: {
      0: 'Não existe "posição correta" no espaço sideral; o mapa segue o Norte para cima, apenas deslocando o meridiano central para o Brasil.',
      1: 'Projeções conformes preservam formas; projeções equivalentes preservam áreas.',
      3: 'As coordenadas e meridianos estão padronizados e coerentes, sem inversão de eixos ou paralelos.',
    },
  }),
  q({
    n: 6, subject: 'Geografia', content: 'Cartografia — Cálculo de fusos horários', difficulty: 'Média',
    statement: `O estádio Azteca, localizado na Cidade do México (19°18' N; 99°09' O), sediou a partida de abertura da Copa do Mundo FIFA 2026 no dia 11 de junho, com início às 13h00 (horário local). O jogo foi disputado entre as seleções do México e da África do Sul. Considerando os fusos horários teóricos determinados pelas coordenadas geográficas e desconsiderando horários de verão, qual o horário local em que torcedores sul-africanos na coordenada 34°24' S e 20°51' L acompanharam o início do jogo na transmissão ao vivo?`,
    blockTypes: ['prose'],
    alternatives: [
      '5h00',
      '8h00',
      '17h00',
      '21h00',
    ],
    answer: 'D',
    why: 'A longitude 99°09\' O corresponde ao fuso de UTC-7 (99° / 15° = 6,6, fuso central em 105°O). A longitude 20°51\' L corresponde ao fuso de UTC+1 (20°51\' mais próximo de 15°L). A diferença total é de 7 + 1 = 8 fusos para leste. Iniciando às 13h00 no México, torcedores a leste assistem às 13h00 + 8h = 21h00.',
    wrong: {
      0: '5h00 resultaria de subtrair 8 horas em vez de somar ao caminhar para o leste.',
      1: '8h00 seria a diferença de fusos em si, e não o horário do evento.',
      2: '17h00 considera apenas 4 horas de diferença, incorreto para a distância longitudinal entre América Central e África Austral.',
    },
  }),
  q({
    n: 7, subject: 'Geografia', content: 'Espaço urbano — Conurbação na RMC', difficulty: 'Fácil',
    statement: `Considere o mapa a seguir.

A mancha urbana e o Núcleo Urbano Central representados no mapa evidenciam qual fenômeno urbano?`,
    blockTypes: ['prose', 'command'],
    images: [img('q07-mapa.png', 'Mapa da Região Metropolitana de Curitiba ilustrando a mancha contínua do Núcleo Urbano Central')],
    alternatives: [
      'Conurbação',
      'Megacidades',
      'Megalópole',
      'Migração pendular',
    ],
    answer: 'A',
    why: 'A união contínua da mancha urbana construída de dois ou mais municípios limítrofes, integrando espacialmente a cidade-polo e os municípios metropolitanos, é a definição canônica de conurbação.',
    wrong: {
      1: 'Megacidade é uma classificação demográfica da ONU para aglomerações urbanas com mais de 10 milhões de habitantes.',
      2: 'Megalópole é a conurbação entre duas ou mais metrópoles regionais (como Rio-SP ou Boston-Washington).',
      3: 'Migração pendular é o fluxo diário de pessoas para trabalho ou estudo, não a mancha morfológica física de integração.',
    },
  }),
  q({
    n: 8, subject: 'Geografia', content: 'Geopolítica contemporânea — BRICS e potências globais', difficulty: 'Média',
    statement: `A charge a seguir tematiza um aspecto da atual geopolítica, protagonizado pelo presidente Donald Trump.

Disponível em: https://umbrasil.com/wp-content/uploads/2025/09/chargeUB-37.jpg.

Com base na interpretação da charge e em conhecimentos sobre a conjuntura internacional recente, a imagem mostra o presidente dos Estados Unidos:`,
    blockTypes: ['prose', 'source', 'command'],
    images: [img('q08-charge-geopolitica.png', 'Charge de Donald Trump confrontando os representantes do bloco BRICS')],
    alternatives: [
      'enviando o Brasil para intermediar acordos comerciais entre Estados Unidos e os demais países membros do BRICS.',
      'colocando o Brasil, com relação aos interesses estadunidenses, no mesmo nível de ameaça dos outros países do BRICS.',
      'ameaçando invadir a América do Sul, o que faz com que o Brasil busque apoio militar junto aos demais países do BRICS.',
      'buscando aproximação com o Brasil para evitar que este faça acordos comerciais com os outros países do BRICS.',
    ],
    answer: 'B',
    why: 'A charge satiriza a visão geopolítica unilateralista de Washington, que encara o fortalecimento e expansão do BRICS como desafio multipolar, tratando os membros do grupo (incluindo o Brasil) como concorrentes estratégicos aos interesses norte-americanos.',
    wrong: {
      0: 'A charge não retrata delegação de intermediação ao Brasil, mas confronto tarifário e político com o bloco.',
      2: 'Não há tema de agressão militar territorial à América do Sul na charge, e sim disputa geopolítica e econômica.',
      3: 'A charge retrata distanciamento e retórica de oposição, não aproximação amigável ou cooperação bilateral preferencial.',
    },
  }),
  q({
    n: 9, subject: 'Biologia', content: 'Ecologia — Eficiência ecológica e produtividade líquida', difficulty: 'Média',
    statement: `A tabela a seguir mostra a comparação entre a emissão de CO2 em duas espécies utilizadas para produção de proteína animal.

A diferença entre as espécies pode ser explicada pelo fato de o gado de corte apresentar:`,
    blockTypes: ['prose', 'command'],
    tables: [{
      ariaLabel: 'Comparação entre a emissão de CO2 em duas espécies para produção de proteína animal',
      headerRows: [['Animal', 'Emissão média (por kg de peso vivo)', 'Emissão média (por kg de carne produzida)']],
      rows: [
        ['Gado de corte', '10–20 kg CO₂e', '25–60 kg CO₂e'],
        ['Frango de corte', '2–4 kg CO₂e', '5–7 kg CO₂e'],
      ],
    }],
    alternatives: [
      'diferente posição na cadeia alimentar.',
      'maior biomassa.',
      'menor potencial biótico.',
      'menor produtividade líquida.',
    ],
    answer: 'D',
    why: 'A produtividade líquida de um organismo corresponde à biomassa retida após o desconto dos gastos respiratórios e metabólicos. Bovinos demandam muito mais alimento por ganho de massa, dissipam grande quantidade de energia metabólica e emitem gases entéricos, resultando em menor produtividade líquida comparada ao frango de corte.',
    wrong: {
      0: 'Ambos são herbívoros / consumidores primários na cadeia trófica agropecuária.',
      1: 'Embora um boi tenha maior massa individual que um frango, as emissões na tabela estão normalizadas por quilograma de peso vivo e carne produzida.',
      2: 'Potencial biótico refere-se à taxa intrínseca de reprodução em condições ideais sem restrições, não à eficiência termodinâmica de conversão alimentar.',
    },
  }),
  q({
    n: 10, subject: 'Biologia', content: 'Genética — Interpretação de heredogramas', difficulty: 'Média',
    statement: `O heredograma a seguir ilustra a ocorrência de uma doença autossômica recessiva ao longo de três gerações.

O número total de indivíduos obrigatoriamente heterozigotos representados na figura é:`,
    blockTypes: ['prose', 'command'],
    diagram: 'ufpr2027Q10',
    figureCaption: 'Heredograma de três gerações com indivíduos afetados por condição autossômica recessiva.',
    alternatives: [
      '5',
      '6',
      '7',
      '8',
    ],
    answer: 'C',
    why: 'Em herança autossômica recessiva (afetados = aa): todo indivíduo fenotipicamente normal que tem um genitor afetado (aa) recebe dele o alelo recessivo, sendo obrigatoriamente Aa; igualmente, pais normais de uma criança afetada (aa) devem fornecer um alelo cada, sendo ambos Aa. A análise sistemática dos cruzamentos no diagrama confirma exatamente 7 indivíduos com genótipo obrigatoriamente heterozigoto.',
    wrong: {
      0: 'Contagem incompleta, desconsiderando filhos normais de progenitores afetados.',
      1: 'Subestima o número de heterozigotos obrigatórios ao ignorar uma das linhagens de cruzamento.',
      3: 'Inclui indivíduos fenotipicamente normais que poderiam ser homozigotos dominantes (AA) ou heterozigotos (Aa) sem garantia compulsória.',
    },
  }),
];
