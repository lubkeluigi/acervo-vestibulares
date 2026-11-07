/**
 * Listas temáticas e direcionadas para estudo intensivo e simulados de vestibulares.
 */

export const CURATED_LISTS = [
  {
    id: 'el-nino-e-la-nina',
    title: 'El Niño, La Niña e Dinâmica Climática',
    subtitle: 'Fenômeno ENOS, Célula de Walker, anomalias oceânicas e impactos regionais no Brasil',
    badge: 'Destaque Temático',
    subject: 'Geografia',
    category: 'Climatologia e Dinâmica Global',
    difficulty: 'Média a Difícil',
    featured: true,
    description:
      'Coletânea essencial com 10 questões dos maiores vestibulares do país (FUVEST, UERJ, FAMERP, UEA, UNIFIMES, UNISUL) focadas no acoplamento oceano-atmosfera: o enfraquecimento e a intensificação dos ventos alísios, anomalias de temperatura nas águas do Pacífico equatorial, interrupção da ressurgência no Peru, secas na Amazônia e no semiárido nordestino e inundações no Sul do Brasil.',
    keyConcepts: [
      'Anomalia térmica no Pacífico Equatorial (ENOS)',
      'Ventos Alísios e Célula de Walker',
      'Supressão da ressurgência (Corrente de Humboldt)',
      'Secas severas no Norte e Nordeste',
      'Chuvas torrenciais e inundações no Sul',
      'Interação com ZCIT e Rios Voadores'
    ],
    examTags: ['FUVEST', 'UERJ', 'FAMERP', 'UEA', 'UNIFIMES', 'UNISUL'],
    questionIds: [
      'uea2026vu-q28',
      'unifimesmineiros2027-prova2-q23',
      'unisul2027-prova2-q24',
      'famerp2024-p1-q37',
      'famerp2022-p1-q39',
      'famerp2025-p1-q31',
      'famerp2016-p1-q25',
      'uerj2027eq2-q60',
      'uea2026ce2-q16',
      'fuvest2027-v1-q28'
    ]
  },
  {
    id: 'citologia-e-fisiologia-celular',
    title: 'Citologia e Fisiologia Celular',
    subtitle: 'Membrana, transporte celular, organelas e bioenergética',
    badge: 'Alta Recorrência',
    subject: 'Biologia',
    category: 'Citologia e Metabolismo',
    difficulty: 'Média',
    featured: false,
    description:
      'Seleção de 10 questões abordando estrutura e ultraestrutura de células eucarióticas e procarióticas, osmose, transporte ativo, síntese proteica via retículo e Golgi, respiração mitocondrial e fotossíntese.',
    keyConcepts: [
      'Transporte por membrana e osmose',
      'Retículo endoplasmático e complexo golgiense',
      'Mitocôndrias e respiração celular',
      'Cloroplastos e fotossíntese',
      'Citoesqueleto e divisão celular'
    ],
    examTags: ['FAMERP', 'FAMEMA'],
    questionIds: [
      'famema2020-p1-q05',
      'famema2020-p1-q06',
      'famema2021-p1-q05',
      'famema2021-p1-q07',
      'famema2021-p1-q08',
      'famema2023-p1-q06',
      'famema2024-p1-q05',
      'famema2025-p1-q06',
      'famema2026-p1-q06',
      'famerp2015-p1-q11'
    ]
  },
  {
    id: 'genetica-molecular-e-dogma',
    title: 'Genética Molecular e Engenharia Genética',
    subtitle: 'Estrutura do DNA, replicação, transcrição, tradução e biotecnologia',
    badge: 'Alta Recorrência',
    subject: 'Biologia',
    category: 'Genética e Biologia Molecular',
    difficulty: 'Média a Difícil',
    featured: false,
    description:
      'Treino focado nas bases moleculares da hereditariedade: dogma central da biologia molecular, mutações gênicas, código genético degenerado, recombinação gênica e aplicações biotecnológicas como clonagem e PCR.',
    keyConcepts: [
      'Dogma central: replicação, transcrição e tradução',
      'Código genético e mutações de ponto',
      'Regulação da expressão gênica',
      'Engenharia genética e biotecnologia',
      'Padrões de herança mendeliana e cromossômica'
    ],
    examTags: ['FAMERP', 'FAMEMA'],
    questionIds: [
      'famema2020-p1-q08',
      'famema2022-p1-q08',
      'famema2023-p1-q08',
      'famema2025-p1-q08',
      'famema2026-p1-q08',
      'famerp2015-p1-q12',
      'famerp2015-p1-q13',
      'famerp2015-p1-q16',
      'famerp2015-p2-q06',
      'famerp2016-p1-q16'
    ]
  },
  {
    id: 'ecologia-teias-e-impactos',
    title: 'Ecologia: Teias Tróficas e Impactos Ambientais',
    subtitle: 'Fluxo de energia, ciclos biogeoquímicos, biomagnificação e conservação',
    badge: 'Vestibulares Paulistas',
    subject: 'Biologia',
    category: 'Ecologia',
    difficulty: 'Média',
    featured: false,
    description:
      'Questões cruciais sobre ecologia com foco em níveis tróficos, pirâmides ecológicas de energia e biomassa, ciclos do carbono e nitrogênio, eutrofização e poluição ambiental.',
    keyConcepts: [
      'Fluxo unidirecional de energia e pirâmides tróficas',
      'Ciclos biogeoquímicos (C, N, P)',
      'Bioacumulação e magnificação trófica',
      'Eutrofização artificial de ecossistemas aquáticos',
      'Sucessão ecológica primária e secundária'
    ],
    examTags: ['FAMERP', 'FAMEMA'],
    questionIds: [
      'famema2020-p2-q23',
      'famema2023-p1-q05',
      'famema2025-p1-q05',
      'famema2026-p1-q05',
      'famerp2015-p1-q17',
      'famerp2015-p2-q08',
      'famerp2016-p1-q14',
      'famerp2017-p1-q18',
      'famerp2018-p1-q44',
      'famerp2018-p2-q01'
    ]
  },
  {
    id: 'termodinamica-e-calorimetria',
    title: 'Termodinâmica e Calorimetria',
    subtitle: 'Trocas de calor, 1ª e 2ª leis da termodinâmica, máquinas térmicas e ciclos',
    badge: 'Física Clássica',
    subject: 'Física',
    category: 'Termologia e Termodinâmica',
    difficulty: 'Média a Difícil',
    featured: false,
    description:
      '10 questões contemplando calor sensível e latente, equilíbrio térmico, transformações gasosas ideais (isobáricas, isocóricas, isotérmicas e adiabáticas) e rendimento de motores térmicos segundo o Ciclo de Carnot.',
    keyConcepts: [
      'Equação fundamental da calorimetria e trocas de calor',
      'Primeira lei: calor, trabalho e variação de energia interna',
      'Transformações gasosas ideais e diagramas P x V',
      'Segunda lei da termodinâmica e Ciclo de Carnot',
      'Condução, convecção e radiação térmica'
    ],
    examTags: ['FAMERP', 'FAMEMA'],
    questionIds: [
      'famema2020-p2-q38',
      'famema2021-p2-q38',
      'famema2024-p2-q38',
      'famema2025-p2-q39',
      'famema2026-p2-q38',
      'famerp2015-p1-q36',
      'famerp2015-p2-q17',
      'famerp2015-p2-q19',
      'famerp2016-p1-q35',
      'famerp2016-p2-q18'
    ]
  },
  {
    id: 'eletrodinamica-e-circuitos',
    title: 'Eletrodinâmica e Análise de Circuitos',
    subtitle: 'Associação de resistores, geradores, Leis de Kirchhoff e potência elétrica',
    badge: 'Alta Incidência',
    subject: 'Física',
    category: 'Eletricidade e Magnetismo',
    difficulty: 'Média a Difícil',
    featured: false,
    description:
      'Repertório completo para dominar circuitos de corrente contínua: cálculo de resistência equivalente, diferença de potencial, corrente, consumo de energia em kWh e circuitos com instrumentos de medida (voltímetro e amperímetro ideais).',
    keyConcepts: [
      'Primeira e segunda Leis de Ohm',
      'Associação série, paralelo e mista de resistores',
      'Potência elétrica dissipada e consumo de energia',
      'Geradores reais, força eletromotriz e resistência interna',
      'Instrumentação: amperímetros e voltímetros ideais'
    ],
    examTags: ['FAMERP', 'FAMEMA'],
    questionIds: [
      'famema2020-p2-q37',
      'famema2020-p2-q40',
      'famema2021-p2-q39',
      'famema2021-p2-q40',
      'famema2022-p2-q40',
      'famema2023-p2-q40',
      'famema2024-p2-q36',
      'famema2024-p2-q40',
      'famema2025-p2-q36',
      'famema2025-p2-q40'
    ]
  }
];

export function getCuratedList(id) {
  return CURATED_LISTS.find((list) => list.id === id);
}

export function getCuratedQuestions(list, allQuestions) {
  if (!list || !list.questionIds) return [];
  const map = new Map(allQuestions.map((q) => [q.id, q]));
  return list.questionIds.map((id) => map.get(id)).filter(Boolean);
}
