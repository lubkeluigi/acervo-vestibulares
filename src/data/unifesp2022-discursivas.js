import { createUnifesp } from './unifesp-helpers.js';

const { d, img, tex } = createUnifesp(2022);

export const unifesp2022Discursivas = [
  // ==========================================
  // BIOLOGIA (QUESTÕES 01 A 05)
  // ==========================================
  d({
    n: 1,
    subject: 'Biologia',
    content: 'Filariose linfática (Wuchereria bancrofti): transmissão por Culex, hospedeiro definitivo e endossimbiose',
    difficulty: 'Fácil',
    statement: `Em 1866, o médico Otto Edward Henry Wucherer (1820-1873), nascido em Portugal e formado na Alemanha, descreveu larvas de um nematódeo em amostras de urina de pessoas que apresentavam urina de aspecto leitoso (hematúria gordurosa). A espécie desse verme foi denominada Wuchereria bancrofti, em homenagem a Wucherer e ao médico inglês Joseph Bancroft (1836-1894), que descobriu o verme adulto na Austrália, em 1876.`,
    parts: [
      {
        id: 'a',
        prompt: 'Qual é o hospedeiro definitivo do W. bancrofti? Na natureza, qual a principal forma de transmissão da doença causada pelo W. bancrofti aos seres humanos?',
        expected: `1) Hospedeiro definitivo: Ser humano (homem).\n2) Principal forma de transmissão: Por meio da picada da fêmea do mosquito do gênero Culex (mosquito-palha / pernilongo doméstico Culex quinquefasciatus).\n\nForam aceitas: Aedes, Anopheles, mosquito ou pernilongo.\nNão foram aceitas: ingestão de água e/ou alimentos contaminados; transmissão congênita.`,
        criteria: [
          { points: 1, text: 'Identifica o ser humano (homem) como hospedeiro definitivo.' },
          { points: 1, text: 'Identifica a transmissão pela picada do mosquito (Culex, pernilongo).' },
        ],
        detailed: `a) O nematódeo Wuchereria bancrofti é o agente etiológico da filariose linfática (elefantíase). O hospedeiro definitivo é o ser humano, pois é em seus vasos e gânglios linfáticos que os vermes adultos se alojam e realizam a reprodução sexuada.
Na natureza, a transmissão para os seres humanos ocorre pela inoculação das larvas infectantes (L3) através da picada da fêmea hematófaga de mosquitos vetores, principalmente do gênero Culex (como Culex quinquefasciatus).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Os antibióticos têm a função de eliminar alguns microrganismos endossimbióticos presentes no W. bancrofti. Cite o tipo de interação ecológica interespecífica que há entre esse parasito e os tais microrganismos endossimbióticos. Por que o uso de antibióticos auxilia no tratamento da parasitose causada pelo W. bancrofti?',
        expected: `1) Tipo de interação ecológica: Mutualismo (ou simbiose / endossimbiose).\n2) Justificativa do tratamento: Os antibióticos eliminam as bactérias endossimbióticas (Wolbachia), das quais o verme depende obrigatoriamente para seu desenvolvimento, reprodução e sobrevivência; sem essas bactérias, o parasito morre ou torna-se estéril, combatendo a filariose.\n\nNão foram aceitas: mutualismo não obrigatório (protocooperação), comensalismo, inquilinismo; antibióticos matam o verme diretamente; antibióticos evitam infecções oportunistas secundárias.`,
        criteria: [
          { points: 1, text: 'Cita a interação ecológica como mutualismo (ou simbiose).' },
          { points: 1, text: 'Explica que a eliminação das bactérias impede a sobrevivência ou reprodução do verme.' },
        ],
        detailed: `b) A interação ecológica interespecífica entre o nematódeo Wuchereria bancrofti e as bactérias endossimbiontes do gênero Wolbachia é o mutualismo obrigatório (simbiose). Ambos os organismos se beneficiam e a relação é indispensável à sobrevivência do verme.
O uso de antibióticos (como a doxiciclina) atua eliminando especificamente as bactérias endossimbióticas. Privado dessas bactérias essenciais ao seu metabolismo e fertilidade, o verme adulto sofre declínio fisiológico acentuado, perde a capacidade reprodutiva de gerar microfilárias e morre, o que reduz drasticamente a carga parasitária e auxilia de forma decisiva no tratamento clínico da doença.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 2,
    subject: 'Biologia',
    content: 'Fisiologia digestória de suínos: transição alimentar, enzimas digestivas e hidrólise de carboidratos',
    difficulty: 'Média',
    statement: `Um experimento analisou a variação na concentração das enzimas digestivas em suínos saudáveis, desde o nascimento até a fase adulta. Os animais passaram pelo desmame aos 35 dias de vida e, a partir desse momento, passaram a se alimentar de ração contendo sacarose e amido. Os resultados obtidos estão representados nos gráficos.`,
    visuals: [{ file: 'p2-q02-graficos-enzimas.svg', alt: 'Gráficos 1, 2 e 3 da concentração de enzimas digestivas em suínos ao longo da idade em dias', caption: 'Concentração de enzimas digestivas em suínos.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Qual gráfico ilustra a variação da concentração das enzimas que ocorreu nos suínos que passaram do desmame para o consumo de ração? Justifique sua resposta utilizando um dado do gráfico.',
        expected: `1) Gráfico: Gráfico 3.\n2) Justificativa: Após o desmame (35 dias), os animais deixam de ingerir o leite materno (cuja fonte de carboidrato é a lactose) e passam a consumir ração com amido e sacarose; por isso, a concentração da enzima lactase sofre queda acentuada (atingindo valores próximos a zero), enquanto as enzimas amilase e sacarase aumentam significativamente.\n\nForam aceitas: justificativas que indicam a queda da lactase e/ou o aumento da amilase/sacarase com base no gráfico.\nNão foram aceitas: respostas sem justificativa ou indicando gráficos 1 ou 2.`,
        criteria: [
          { points: 1, text: 'Indica corretamente o Gráfico 3.' },
          { points: 1, text: 'Justifica com a queda da lactase e aumento de amilase/sacarase após o desmame.' },
        ],
        detailed: `a) O gráfico que ilustra corretamente essa variação é o Gráfico 3.
Durante a fase de amamentação (até 35 dias), o único alimento ingerido pelo leitão é o leite materno, rico no dissacarídeo lactose; assim, a concentração da enzima lactase é inicialmente elevada. Com o desmame aos 35 dias e a introdução da ração composta por amido e sacarose, observa-se no Gráfico 3 a drástica redução nos níveis de lactase e a concomitante elevação expressiva nas concentrações de amilase (para hidrólise do amido) e sacarase (para hidrólise da sacarose).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Que órgão do suíno adulto contém todas as enzimas atuando simultaneamente? Qual dessas enzimas possibilita, após as hidrólises, o aumento de dissacarídeos nos suínos adultos?',
        expected: `1) Órgão: Intestino delgado (duodeno).\n2) Enzima: Amilase (amilase pancreática).\n\nForam aceitas: duodeno ou intestino delgado; amilase ou amilase pancreática.\nNão foram aceitas: estômago, boca, pâncreas; lactase, sacarase, maltase.`,
        criteria: [
          { points: 1, text: 'Identifica o intestino delgado (ou duodeno) como órgão onde todas as enzimas atuam.' },
          { points: 1, text: 'Identifica a amilase (ou amilase pancreática) como a enzima que gera dissacarídeos.' },
        ],
        detailed: `b) O órgão do suíno que contém todas as três enzimas atuando simultaneamente é o intestino delgado (especialmente na sua porção inicial, o duodeno), onde a amilase pancreática (presente no suco pancreático) e as enzimas da borda em escova (lactase e sacarase, presentes no suco entérico) realizam a digestão luminal e da mucosa.
A enzima que possibilita o aumento de dissacarídeos é a amilase (amilase pancreática), pois ela cliva o polissacarídeo amido em fragmentos menores formados por dissacarídeos (principalmente a maltose), que serão posteriormente hidrolisados pelas dissacaridases em monossacarídeos.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 3,
    subject: 'Biologia',
    content: 'Gametogênese humana: espermatogênese, segregação meiótica e fertilização in vitro',
    difficulty: 'Média',
    statement: `Na fertilização in vitro, o procedimento mais comum é o ovócito II ser colocado em contato com os espermatozoides e a fertilização ocorrer espontaneamente. Nos casos em que os espermatozoides não conseguem fecundar o ovócito II espontaneamente, um único espermatozoide é injetado diretamente no citoplasma do ovócito II. Não é recomendável fazer essa injeção intracitoplasmática utilizando um espermatócito II. A figura representa, de forma simplificada, a espermatogênese humana.`,
    visuals: [{ file: 'p2-q03-ovocito-espermatocito.svg', alt: 'Representação esquemática da espermatogênese humana mostrando espermatócitos I e II e espermátides', caption: 'Espermatogênese humana simplificada.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Em qual gônada ocorre a espermatogênese humana? Em qual fase da meiose I diferenciam-se os gametas que terão o cromossomo X dos que terão o cromossomo Y?',
        expected: `1) Gônada: Testículos (ou túbulos seminíferos).\n2) Fase da meiose I: Anáfase I.\n\nNão foram aceitas: prófase I, metáfase I, telófase I; meiose II; epidídimo, próstata.`,
        criteria: [
          { points: 1, text: 'Identifica os testículos (ou túbulos seminíferos) como a gônada.' },
          { points: 1, text: 'Identifica a Anáfase I como a fase da separação dos cromossomos X e Y.' },
        ],
        detailed: `a) A espermatogênese humana ocorre nas gônadas masculinas, denominadas testículos (mais especificamente no interior dos túbulos seminíferos).
A separação física dos cromossomos sexuais homólogos X e Y ocorre durante a Anáfase I da meiose, momento em que as fibras do fuso tracionam os cromossomos homólogos duplicados para polos opostos da célula, diferenciando as duas células-filhas que darão origem, respectivamente, aos gametas portadores do cromossomo X e aos portadores do cromossomo Y.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Por que, na fertilização in vitro, a injeção intracitoplasmática não pode ser feita com um espermatócito II? Que tipo de mutação numérica teria um embrião inviável que resultasse de uma fertilização entre um espermatócito II e um ovócito II com 23 cromossomos?',
        expected: `1) Por que não usar o espermatócito II: Porque o espermatócito II ainda não completou a meiose (não realizou a meiose II) e apresenta cromossomos duplicados (compostos por duas cromátides-irmãs, com quantidade 2C de DNA).\n2) Tipo de mutação numérica: Euploidia (ou triploidia, $3n = 69$ cromossomos).\n\nForam aceitas: cromossomos duplicados, duas cromátides-irmãs; euploidia ou triploidia.\nNão foram aceitas: aneuploidia, trissomia; espermatócito é diploide (pois ele já é haploide n=23, porém duplicado).`,
        criteria: [
          { points: 1, text: 'Explica que o espermatócito II possui cromossomos duplicados (não completou a meiose II).' },
          { points: 1, text: 'Identifica a mutação numérica como euploidia (ou triploidia).' },
        ],
        detailed: `b) A injeção intracitoplasmática não pode ser realizada com um espermatócito II porque essa célula ainda não concluiu a segunda divisão meiótica (meiose II). Embora já seja haploide em número de cromossomos ($n = 23$), cada um de seus cromossomos ainda é duplicado, composto por duas cromátides-irmãs (portando o dobro da quantidade normal de DNA de um gameta maduro).
Caso ocorresse a fertilização de um ovócito II normal ($n = 23$) por um espermatócito II ($n = 23$ duplicado), o zigoto resultante herdaria três conjuntos haploides completos de cromátides ($3n = 69$), configurando uma mutação cromossômica numérica do tipo euploidia (especificamente uma triploidia), que é inviável na espécie humana.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 4,
    subject: 'Biologia',
    content: 'Genética clássica: Segunda Lei de Mendel (segregação independente), diibridismo e linkage (ligação gênica)',
    difficulty: 'Média',
    statement: `Determinada espécie vegetal apresenta dois pares de genes, dos quais o alelo A determina a formação de um fruto redondo e o alelo a determina um fruto alongado. Já o alelo B determina a cor vermelha do fruto e o alelo b determina a cor branca. Uma planta duplo-heterozigota foi cruzada com uma planta duplo-recessiva, o que resultou numa descendência de $\frac{1}{4}$ de plantas com frutos redondos e vermelhos, $\frac{1}{4}$ de plantas com frutos redondos e brancos, $\frac{1}{4}$ de plantas com frutos alongados e vermelhos e $\frac{1}{4}$ de plantas com frutos alongados e brancos.`,
    parts: [
      {
        id: 'a',
        prompt: 'Qual o genótipo da planta descendente que produziu frutos redondos e brancos? De acordo com os dados do texto, com qual lei de Mendel as proporções fenotípicas estão relacionadas?',
        expected: `1) Genótipo da planta descendente com frutos redondos e brancos: $Aabb$.\n2) Lei de Mendel: Segunda Lei de Mendel (Lei da Segregação Independente).\n\nForam aceitas: Lei da segregação independente; segunda Lei de Mendel (segregação independente).\nNão foram aceitas: Primeira Lei de Mendel; citar a Segunda Lei de Mendel e explicar incorretamente; citar a Primeira Lei de Mendel e explicar o conceito da Segunda Lei e vice-versa.`,
        criteria: [
          { points: 1, text: 'Identifica o genótipo Aabb.' },
          { points: 1, text: 'Identifica a Segunda Lei de Mendel (ou segregação independente).' },
        ],
        detailed: `a) O cruzamento foi realizado entre uma planta duplo-heterozigota ($AaBb$) e uma planta duplo-recessiva ($aabb$).
A planta descendente que apresenta fenótipo frutos redondos (dominância de $A$) e frutos brancos (recessividade de $b$) herdou obrigatoriamente os alelos recessivos $a$ e $b$ do progenitor duplo-recessivo e os alelos $A$ e $b$ do progenitor heterozigoto, possuindo genótipo $Aabb$.
A ocorrência das quatro classes fenotípicas em proporções iguais ($1/4 : 1/4 : 1/4 : 1/4$ ou $1:1:1:1$) indica que os dois pares de alelos segregam de forma totalmente independente durante a meiose, o que exemplifica a Segunda Lei de Mendel (Lei da Segregação Independente).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Caso os dois alelos dominantes estivessem em um mesmo cromossomo e os alelos recessivos estivessem no cromossomo homólogo, e não ocorresse permutação, qual seria o resultado fenotípico esperado na descendência das plantas utilizadas no cruzamento? Caso tivesse ocorrido uma permutação, que resultados fenotípicos observados na descendência poderiam evidenciar tal fenômeno?',
        expected: `1) Resultado fenotípico sem permutação:
50% (ou $\frac{1}{2}$) de plantas com frutos redondos e vermelhos e 50% (ou $\frac{1}{2}$) de plantas com frutos alongados e brancos.

2) Evidência caso ocorresse permutação:
O aparecimento de classes fenotípicas recombinantes: plantas com frutos redondos e brancos e plantas com frutos alongados e vermelhos (ou seja, surgimento dos quatro fenótipos possíveis, com predomínio dos parentais).\n\nNão foram aceitas: respostas sem a indicação das proporções ou sem a menção dos fenótipos recombinantes.`,
        criteria: [
          { points: 1, text: 'Indica 50% redondos e vermelhos e 50% alongados e brancos (ou 1:1).' },
          { points: 1, text: 'Explica que a permutação seria evidenciada pelo surgimento de frutos redondos brancos e alongados vermelhos.' },
        ],
        detailed: `b) 1) Estando os alelos dominantes no mesmo cromossomo e os recessivos no homólogo (configuração *cis*, $\frac{AB}{ab}$), na ausência de permutação gênica (*crossing-over*) a planta duplo-heterozigota produz apenas dois tipos de gametas parentais ($AB$ e $ab$, na proporção de 50% cada). Como a planta recessiva produz exclusivamente gametas $ab$, os descendentes esperados serão:
- 50% (ou proporção de $1/2$) de plantas com frutos redondos e vermelhos ($AaBb$);
- 50% (ou proporção de $1/2$) de plantas com frutos alongados e brancos ($aabb$).
2) Caso ocorresse permutação, haveria troca de segmentos entre cromátides não irmãs, formando gametas recombinantes ($Ab$ e $aB$). O fenômeno seria evidenciado pelo aparecimento de classes fenotípicas recombinantes na descendência: plantas com frutos redondos e brancos ($Aabb$) e plantas com frutos alongados e vermelhos ($aaBb$), manifestando os quatro fenótipos possíveis, onde os recombinantes aparecem em frequência menor que os parentais.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 5,
    subject: 'Biologia',
    content: 'Ecologia e botânica: defesa química vegetal, taninos, alelopatia e plasticidade fenotípica',
    difficulty: 'Média',
    statement: `Plantas atacadas por herbívoros podem emitir compostos orgânicos voláteis que servem de sinal químico para plantas vizinhas intactas aumentarem a síntese de compostos de defesa, como os taninos. Um experimento analisou a produção de taninos em folhas de três grupos de plantas da mesma espécie: Grupo Controle (plantas intactas não expostas a voláteis), Grupo Danificado Mecanicamente (plantas com folhas perfuradas artificialmente) e Grupo Experimental (plantas vizinhas intactas expostas aos voláteis emitidos por plantas atacadas). O gráfico mostra os resultados.`,
    visuals: [{ file: 'p2-q05-grafico-tanino.svg', alt: 'Gráfico em barras mostrando a produção de tanino em folhas nos grupos controle, danificado mecanicamente e experimental', caption: 'Produção de tanino em folhas de plantas.' }],
    parts: [
      {
        id: 'a',
        prompt: 'De acordo com os dados representados no gráfico, os resultados obtidos referendam a hipótese testada no experimento? Justifique sua resposta, de acordo com uma informação apresentada no gráfico.',
        expected: `1) Referendam a hipótese: Sim, referendam (afirmam, confirmam, comprovam) a hipótese testada.\n2) Justificativa: As plantas do grupo experimental (vizinhas intactas expostas aos voláteis) aumentaram significativamente a produção de tanino em suas folhas em relação ao grupo controle, alcançando níveis elevados comparáveis aos das plantas com danos mecânicos.\n\nForam aceitas: confirmam, comprovam; citação do aumento da concentração de tanino nas plantas intactas expostas aos voláteis.\nNão foram aceitas: respostas negativas (não referendam) ou sem justificativa.`,
        criteria: [
          { points: 1, text: 'Afirma que os resultados referendam (confirmam) a hipótese.' },
          { points: 1, text: 'Justifica utilizando a elevação da produção de taninos no grupo experimental frente ao controle.' },
        ],
        detailed: `a) Sim, os resultados obtidos no experimento referendam (confirmam plenamente) a hipótese formulada.
Pela análise do gráfico, constata-se que as plantas do grupo experimental — que permaneceram fisicamente intactas, mas estiveram expostas aos compostos orgânicos voláteis emitidos pelas plantas danificadas — apresentaram uma produção de taninos nas folhas significativamente maior do que a do grupo controle (plantas não expostas), atingindo teores praticamente equivalentes aos das plantas danificadas mecanicamente. Isso comprova que a recepção dos sinais químicos aéreos induziu ativamente a síntese de defesas químicas nas plantas receptoras.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Explique se a quantidade de tanino produzido pelas folhas dessas plantas é determinada pelo ambiente, pela constituição genética da planta ou por ambos os fatores.',
        expected: `A quantidade de tanino é determinada por ambos os fatores:\n1) Fator genético: Os genes da planta contêm as informações biológicas e codificam as vias enzimáticas metabólicas responsáveis pela biossíntese dos taninos.\n2) Fator ambiental: Os estímulos externos ambientais (como os compostos voláteis emitidos por vizinhas ou a herbivoria mecânica) atuam modulando e induzindo o nível de expressão gênica e a quantidade final de tanino sintetizado.\n\nNão foram aceitas: apenas ambiente; apenas genética.`,
        criteria: [
          { points: 1, text: 'Afirma expressamente que a produção é determinada por ambos os fatores.' },
          { points: 1, text: 'Justifica o papel dos genes (síntese) e do ambiente (estímulo indutor / expressão).' },
        ],
        detailed: `b) A quantidade de tanino sintetizada é determinada por ambos os fatores (interação entre genótipo e ambiente).
A constituição genética da planta é imprescindível porque determina o potencial metabólico do vegetal, fornecendo os genes que codificam as enzimas das rotas biossintéticas de polifenóis (taninos).
Por sua vez, o fator ambiental é decisivo ao atuar como o gatilho externo que induz a expressão desses genes: na ausência de herbivoria ou de sinais voláteis, a produção basal permanece baixa (grupo controle), enquanto a presença do estímulo ambiental (compostos voláteis) desencadeia a superexpressão gênica e eleva substancialmente os níveis do composto defensivo (plasticidade fenotípica).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  // ==========================================
  // QUÍMICA (QUESTÕES 06 A 10)
  // ==========================================
  d({
    n: 6,
    subject: 'Química',
    content: 'Substâncias puras, misturas e propriedades coligativas: tonoscopia e pressão de vapor',
    difficulty: 'Fácil',
    statement: `Considere os seguintes materiais líquidos: etanol anidro, etanol hidratado a 70% em massa e salmoura concentrada sem corpo de fundo.`,
    parts: [
      {
        id: 'a',
        prompt: 'Cite, entre os materiais líquidos apresentados, qual é considerado uma substância pura. Qual desses materiais líquidos pode ter seus componentes separados por destilação simples?',
        expected: `1) Substância pura: Etanol anidro.\n2) Separação por destilação simples: Salmoura concentrada (salmoura).\n\nNão foram aceitas: etanol hidratado; misturar destilação fracionada com simples.`,
        criteria: [
          { points: 1, text: 'Identifica o etanol anidro como substância pura.' },
          { points: 1, text: 'Identifica a salmoura concentrada como a mistura separável por destilação simples.' },
        ],
        detailed: `a) O material líquido classificado como substância pura é o etanol anidro (álcool etílico puro, sem adição de água ou outros componentes). O etanol hidratado e a salmoura são misturas homogêneas (soluções).
O material cujos componentes podem ser separados por destilação simples é a salmoura concentrada, por se tratar de uma solução homogênea formada por um sólido não volátil (cloreto de sódio, $NaCl$) dissolvido em um líquido volátil (água, $H_2O$), havendo enorme discrepância entre seus pontos de ebulição. O etanol hidratado requer destilação fracionada devido à proximidade dos pontos de ebulição de seus líquidos componentes.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Três tiras idênticas de papel absorvente foram igualmente embebidas com esses materiais líquidos, um em cada tira, e todos à mesma temperatura. Em seguida, essas tiras foram expostas ao ar até a secagem completa. Qual tira deve ter sido a última a secar completamente? Justifique sua resposta, considerando as diferenças entre pressões de vapor dos líquidos.',
        expected: `1) Tira que secou por último: A tira embebida com salmoura concentrada.\n2) Justificativa: A salmoura concentrada apresenta a menor pressão de vapor entre os três líquidos, pois a presença do soluto não volátil ($NaCl$) em água reduz a pressão de vapor do solvente (efeito tonoscópico). Como a taxa de evaporação é diretamente proporcional à pressão de vapor, o líquido com menor pressão de vapor evapora mais lentamente, sendo o último a secar.\n\nForam aceitas: menor pressão de vapor da salmoura devido ao sal dissolvido; efeito tonoscópico; maior volatilidade do etanol em relação à água.`,
        criteria: [
          { points: 1, text: 'Identifica a tira embebida com salmoura concentrada.' },
          { points: 1, text: 'Justifica com base na menor pressão de vapor da salmoura (efeito tonoscópico / menor taxa de evaporação).' },
        ],
        detailed: `b) A tira que deve ter sido a última a secar completamente foi a embebida com salmoura concentrada.
O etanol possui forças intermoleculares mais fracas e massa molar menor que a água em relação à sua volatilidade, conferindo ao etanol anidro a maior pressão de vapor entre as substâncias puras analisadas. A água pura possui menor pressão de vapor que o etanol.
Na salmoura concentrada, a dissolução dos íons $Na^+$ e $Cl^-$ (soluto não volátil) provoca o efeito coligativo de tonoscopia (abaixamento da pressão de vapor da água), diminuindo o número de moléculas de água com energia cinética suficiente para escapar da fase líquida. Por apresentar a menor pressão de vapor do conjunto, a salmoura tem a menor velocidade de evaporação, levando mais tempo para secar.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 7,
    subject: 'Química',
    content: 'Processo Ostwald: síntese do ácido nítrico, estequiometria em CATP, Nox e Lei de Hess',
    difficulty: 'Difícil',
    statement: `O ácido nítrico ($HNO_3$) é um dos produtos mais importantes da indústria química, por ser matéria-prima para a fabricação de fertilizantes e explosivos. Ele é produzido industrialmente pelo processo Ostwald, que envolve três etapas reacionais:

Etapa 1: $4\,NH_3(g) + 5\,O_2(g) \rightarrow 4\,NO(g) + 6\,H_2O(g) \quad \Delta H = -906\text{ kJ}$
Etapa 2: $2\,NO(g) + O_2(g) \rightarrow 2\,NO_2(g) \quad \Delta H = -114\text{ kJ}$
Etapa 3: $3\,NO_2(g) + H_2O(l) \rightarrow 2\,HNO_3(aq) + NO(g) \quad \Delta H = -137\text{ kJ}$`,
    parts: [
      {
        id: 'a',
        prompt: 'Qual reagente atua como redutor no processo de produção do ácido nítrico? Justifique sua resposta, com base na variação dos números de oxidação.',
        expected: `1) Reagente redutor: $NH_3$ (amônia).\n2) Justificativa: Na Etapa 1, o nitrogênio presente na amônia tem número de oxidação $-3$ e se oxida para $+2$ no $NO$, ou para $+5$ no produto final $HNO_3$ (variação $\Delta\text{Nox} = +5$ ou $+8$). Ao sofrer oxidação (perda de elétrons), o $NH_3$ atua como agente redutor.\n\nForam aceitas: $NH_3$ ou amônia; citação da variação de Nox de -3 para +2 (na etapa 1) ou de -3 para +5 (global).`,
        criteria: [
          { points: 1, text: 'Identifica o NH3 (amônia) como agente redutor.' },
          { points: 1, text: 'Justifica com a elevação do Nox do nitrogênio de -3 para +2 (ou +5).' },
        ],
        detailed: `a) O reagente que atua como redutor é a amônia ($NH_3$).
Na Etapa 1, calculando os números de oxidação (Nox):
- No $NH_3$: como o hidrogênio tem $\text{Nox} = +1$, o nitrogênio apresenta $\text{Nox} = -3$.
- No $NO$: como o oxigênio tem $\text{Nox} = -2$, o nitrogênio apresenta $\text{Nox} = +2$.
- No produto final $HNO_3$: $+1 + \text{Nox}(N) + 3(-2) = 0 \implies \text{Nox}(N) = +5$.
O nitrogênio sofre oxidação, aumentando seu número de oxidação de $-3$ para $+2$ (na primeira etapa) e para $+5$ no produto final (doação de elétrons), atuando como agente redutor para o gás oxigênio ($O_2$), cujo Nox é reduzido de $0$ para $-2$.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Admitindo rendimento de 100% e sabendo que o volume molar de gás medido nas CATP (condições ambientais de temperatura e pressão) é igual a 25 L/mol, calcule o volume de O2 (g), medido nessas condições, necessário para produzir 6,3 toneladas de HNO3. Calcule a quantidade de energia, em kJ, envolvida nessa reação.',
        expected: `1) Volume de $O_2(g)$:
A equação química global do processo Ostwald (com cancelamento do $NO$ reciclado) é:
$NH_3(g) + 2\,O_2(g) \rightarrow HNO_3(aq) + H_2O(l)$
Massa molar do $HNO_3$: $1 + 14 + 3(16) = 63\text{ g/mol}$.
Quantidade de matéria de $HNO_3$: $n = \frac{6,3 \times 10^6\text{ g}}{63\text{ g/mol}} = 10^5\text{ mols}$.
Pela proporção estequiométrica ($1\text{ mol } HNO_3 : 2\text{ mols } O_2$):
$n(O_2) = 2 \times 10^5\text{ mols}$.
Volume de $O_2$ nas CATP: $V = 2 \times 10^5\text{ mols} \times 25\text{ L/mol} = 5,0 \times 10^6\text{ L}$ (ou $5\,000\text{ m}^3$).

2) Quantidade de energia envolvida:
Combinando as etapas termoquímicas (1/4 da Etapa 1 + 3/4 da Etapa 2 + 1/2 da Etapa 3):
$\Delta H_{\text{global}} = \frac{1}{4}(-906) + \frac{3}{4}(-114) + \frac{1}{2}(-137) = -226,5 - 85,5 - 68,5 = -380,5\text{ kJ/mol de } HNO_3$.
Para $10^5\text{ mols}$ de $HNO_3$:
$Q = 10^5\text{ mols} \times 380,5\text{ kJ/mol} = 3,805 \times 10^7\text{ kJ}$ (ou $3,8 \times 10^7\text{ kJ}$ liberados).`,
        criteria: [
          { points: 1, text: 'Calcula o volume de O2 = 5,0 x 10^6 L com resolução.' },
          { points: 1, text: 'Calcula a quantidade de energia envolvida = 3,8 x 10^7 kJ (ou 3,805 x 10^7 kJ) com resolução.' },
        ],
        detailed: `b) 1) Para determinar a equação global por mol de $HNO_3$, multiplicamos os coeficientes das etapas para eliminar os intermediários $NO$ e $NO_2$:
- Etapa 1 $\times \frac{1}{4}$: $NH_3 + \frac{5}{4} O_2 \rightarrow NO + \frac{6}{4} H_2O \quad \Delta H_1 = -226,5\text{ kJ}$
- Etapa 2 $\times \frac{3}{4}$: $\frac{3}{2} NO + \frac{3}{4} O_2 \rightarrow \frac{3}{2} NO_2 \quad \Delta H_2 = -85,5\text{ kJ}$
- Etapa 3 $\times \frac{1}{2}$: $\frac{3}{2} NO_2 + \frac{1}{2} H_2O \rightarrow HNO_3 + \frac{1}{2} NO \quad \Delta H_3 = -68,5\text{ kJ}$
Somando as três equações, os intermediários $NO$ e $NO_2$ se anulam perfeitamente:
$$NH_3(g) + 2\,O_2(g) \rightarrow HNO_3(aq) + H_2O(l)$$
A quantidade de $HNO_3$ a ser produzida é:
$$m = 6,3\text{ t} = 6,3 \times 10^6\text{ g} \implies n_{HNO_3} = \frac{6,3 \times 10^6\text{ g}}{63\text{ g/mol}} = 10^5\text{ mols}$$
Pela proporção estequiométrica de $1 : 2$:
$$n_{O_2} = 2 \times 10^5\text{ mols}$$
$$V_{O_2} = 2 \times 10^5\text{ mols} \times 25\text{ L/mol} = 5,0 \times 10^6\text{ L de } O_2$$

2) Cálculo da entalpia global da reação pela Lei de Hess:
$$\Delta H = -226,5 - 85,5 - 68,5 = -380,5\text{ kJ/mol de } HNO_3$$
Para a produção de $10^5\text{ mols}$ de $HNO_3$, a quantidade total de energia liberada é:
$$E = 10^5\text{ mols} \times 380,5\text{ kJ/mol} = 3,805 \times 10^7\text{ kJ}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 8,
    subject: 'Química',
    content: 'Indicadores ácido-base (azul de bromotimol), pH, geometria e polaridade molecular',
    difficulty: 'Média',
    statement: `Analise a escala que apresenta o intervalo de pH de transição do azul de bromotimol e a imagem que mostra os frascos 1, 2 e 3 contendo soluções aquosas com esse indicador, após o borbulhamento de três gases distintos: amônia ($NH_3$), metano ($CH_4$) e dióxido de carbono ($CO_2$).`,
    visuals: [
      { file: 'p2-q08-escala-bromotimol.svg', alt: 'Faixa de pH e coloração do indicador azul de bromotimol: amarelo para pH < 6,0, verde entre 6,0 e 7,6, azul para pH > 7,6', caption: 'Escala de pH do azul de bromotimol.' },
      { file: 'p2-q08-frascos-experimento.svg', alt: 'Frascos 1 (azul), 2 (verde) e 3 (amarelo) com o indicador azul de bromotimol', caption: 'Colorações obtidas nos frascos 1, 2 e 3.' },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Identifique o gás que foi borbulhado em cada um dos frascos, 1, 2 e 3.',
        expected: `Frasco 1: amônia ($NH_3$).\nFrasco 2: metano ($CH_4$).\nFrasco 3: dióxido de carbono ($CO_2$).\n\nCritérios de pontuação: 2 pontos para os três frascos corretos; 1 ponto para dois frascos corretos.`,
        criteria: [
          { points: 2, text: 'Identifica corretamente os três gases: Frasco 1 = amônia, Frasco 2 = metano, Frasco 3 = dióxido de carbono.' },
        ],
        detailed: `a) O indicador azul de bromotimol adquire coloração amarela em meio ácido ($pH < 6,0$), verde na faixa neutra/próxima à neutralidade ($6,0 \le pH \le 7,6$) e azul em meio básico ($pH > 7,6$).
- Frasco 1 (azul, básico): amônia ($NH_3$). Trata-se de uma base de Lewis e Brønsted-Lowry que, em água, reage formando íons amônio e hidroxila: $NH_3(g) + H_2O(l) \rightleftharpoons NH_4^+(aq) + OH^-(aq)$, elevando o pH acima de 7,6.
- Frasco 2 (verde, neutro): metano ($CH_4$). É um hidrocarboneto apolar de baixíssima solubilidade em água e sem caráter ácido-base, mantendo o pH inalterado na faixa de neutralidade do meio.
- Frasco 3 (amarelo, ácido): dióxido de carbono ($CO_2$). É um óxido ácido que reage com a água formando ácido carbônico: $CO_2(g) + H_2O(l) \rightleftharpoons H_2CO_3(aq) \rightleftharpoons H^+(aq) + HCO_3^-(aq)$, reduzindo o pH abaixo de 6,0.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Escreva a fórmula estrutural do gás borbulhado cujas moléculas apresentam geometria linear. Identifique qual dos três gases é constituído por moléculas polares.',
        expected: `1) Fórmula estrutural linear: $O=C=O$ (dióxido de carbono).\n2) Gás com moléculas polares: amônia ($NH_3$).\n\nCritérios de pontuação: 1 ponto para a fórmula estrutural linear O=C=O; 1 ponto para a identificação da amônia.`,
        criteria: [
          { points: 1, text: 'Apresenta a fórmula estrutural linear O=C=O.' },
          { points: 1, text: 'Identifica a amônia (NH3) como substância constituída por moléculas polares.' },
        ],
        detailed: `b) O gás que possui geometria linear é o dióxido de carbono ($CO_2$). O átomo de carbono central apresenta hibridização $sp$ com duas ligações duplas aos oxigênios e nenhum par de elétrons livres na camada de valência:
$$O=C=O$$
O único gás constituído por moléculas polares é a amônia ($NH_3$). O nitrogênio possui um par de elétrons não ligante na camada de valência com hibridização $sp^3$, o que confere geometria piramidal trigonal. Devido à assimetria molecular e à diferença de eletronegatividade entre $N$ e $H$, o momento de dipolo resultante é diferente de zero ($\vec{\mu} \neq \vec{0}$). O $CO_2$ (linear) e o $CH_4$ (tetraédrico) são apolares por simetria geométrica de cancelamento de seus vetores de dipolo.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 9,
    subject: 'Química',
    content: 'Soluções aquosas: concentração comum, molalidade, ligações de hidrogênio e condutibilidade',
    difficulty: 'Média',
    statement: `Analise o quadro que fornece informações sobre a sacarose, o açúcar de cana.`,
    visuals: [{ file: 'p2-q09-sacarose-quadro.svg', alt: 'Quadro com fórmula estrutural da sacarose, massa molar de 342 g/mol, solubilidade de aproximadamente 2,0 g/mL e baixa condutibilidade', caption: 'Informações sobre a sacarose.' }],
    tables: [{
      ariaLabel: 'Propriedades físico-químicas da sacarose',
      headerRows: [['Propriedade', 'Valor / Descrição']],
      rows: [
        ['Massa molar', '342 g/mol'],
        ['Solubilidade em água a 20 °C', '≈ 2,0 g de sacarose/mL de água'],
        ['Condutibilidade elétrica das soluções aquosas', 'Muito baixa, praticamente igual à da água pura'],
      ],
    }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a concentração de uma solução aquosa saturada de sacarose a 20 °C, em g/L de solvente e em mol/kg de solvente.',
        expected: `1) Concentração em g/L de solvente:
$C = 2,0\text{ g/mL} \times 1\,000\text{ mL/L} = 2\,000\text{ g/L}$ de água.

2) Concentração em mol/kg de solvente (molalidade):
Como $1\text{ L}$ de água tem massa de $1\text{ kg}$ (densidade $1,0\text{ g/mL}$):
$W = \frac{2\,000\text{ g de sacarose}}{1\text{ kg de água}} \times \frac{1\text{ mol}}{342\text{ g}} = \frac{2\,000}{342} \approx 5,8\text{ mol/kg}$ de água (ou $5,85\text{ mol/kg}$).`,
        criteria: [
          { points: 1, text: 'Calcula a concentração de 2 000 g/L de solvente com resolução.' },
          { points: 1, text: 'Calcula a concentração molal de 5,8 mol/kg (ou 5,85 mol/kg) com resolução.' },
        ],
        detailed: `a) Dados do enunciado: a 20 °C dissolvem-se $2,0\text{ g}$ de sacarose por $1,0\text{ mL}$ de água (solvente).
1) Concentração em $\text{g/L de solvente}$:
$$C = \frac{2,0\text{ g}}{1,0\text{ mL}} \times \frac{1\,000\text{ mL}}{1\text{ L}} = 2\,000\text{ g/L de água}$$

2) Concentração em $\text{mol/kg de solvente}$ (molalidade, $W$):
Considerando a densidade da água pura $\rho = 1,0\text{ g/mL}$, $1\,000\text{ mL}$ de água possuem massa de $1,0\text{ kg}$.
A massa molar da sacarose é $M = 342\text{ g/mol}$. O número de mols de sacarose dissolvidos em $1\text{ kg}$ de água é:
$$n = \frac{m}{M} = \frac{2\,000\text{ g}}{342\text{ g/mol}} \approx 5,848\text{ mol}$$
$$W = \frac{n}{m_{\text{solvente}}} = \frac{5,848\text{ mol}}{1,0\text{ kg}} \approx 5,8\text{ mol/kg de água (ou } 5,85\text{ mol/kg)}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Justifique a alta solubilidade da sacarose em água e a baixa condutibilidade elétrica de suas soluções aquosas.',
        expected: `1) Alta solubilidade: A molécula de sacarose possui um grande número de grupos hidroxila ($-OH$) distribuídos ao longo de sua estrutura, o que possibilita a formação de múltiplas e intensas ligações de hidrogênio com as moléculas de água.\n2) Baixa condutibilidade: A sacarose é um composto molecular neutro que se dissolve sem sofrer dissociação iônica ou ionização; a ausência de íons livres transportadores de carga faz com que a condutibilidade seja praticamente idêntica à da água pura.`,
        criteria: [
          { points: 1, text: 'Justifica a alta solubilidade pelo grande número de grupos OH que formam ligações de hidrogênio com a água.' },
          { points: 1, text: 'Justifica a baixa condutibilidade por ser substância molecular neutra sem íons livres em solução.' },
        ],
        detailed: `b) 1) A elevada solubilidade da sacarose em água decorre da presença de 8 grupos hidroxila ($-OH$) em sua estrutura molecular. As hidroxilas estabelecem fortes interações do tipo ligações de hidrogênio com os dipolos das moléculas de água circundantes, superando a energia reticular cristalina do açúcar e promovendo intensa solvatação.
2) A baixa condutibilidade elétrica deve-se ao fato de a sacarose ser um composto orgânico covalentemente ligado (composto molecular). Ao se dissolver em água, as moléculas apenas se dispersam e hidratam, sem sofrer ionização nem dissociação iônica. Sem íons livres no meio para migrar sob a ação de um campo elétrico, a solução não conduz corrente elétrica de maneira significativa.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 10,
    subject: 'Química',
    content: 'Química orgânica: síntese do anestésico benzocaína, funções amina e ácido carboxílico e esterificação',
    difficulty: 'Fácil',
    statement: `A benzocaína, um anestésico local de uso tópico, é sintetizada a partir do ácido 4-aminobenzoico (PABA), de acordo com a reação:

PABA + reagente X $\\xrightarrow{H^+}$ benzocaína + produto Y`,
    visuals: [{ file: 'p2-q10-estruturas-benzocaina.svg', alt: 'Estruturas do PABA e da benzocaína destacando grupos funcionais', caption: 'Síntese da benzocaína a partir do PABA.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Escreva o nome da função orgânica nitrogenada presente nas duas substâncias e o nome da função orgânica oxigenada presente no PABA.',
        expected: `1) Função orgânica nitrogenada presente em ambas: Amina (amina primária aromática).\n2) Função orgânica oxigenada no PABA: Ácido carboxílico.\n\nCritérios de pontuação: 1 ponto para amina; 1 ponto para ácido carboxílico.`,
        criteria: [
          { points: 1, text: 'Identifica a função nitrogenada amina.' },
          { points: 1, text: 'Identifica a função oxigenada ácido carboxílico.' },
        ],
        detailed: `a) Tanto na molécula de PABA quanto na de benzocaína, há a presença do grupamento $-NH_2$ ligado diretamente a um anel aromático, o que caracteriza a função orgânica amina (especificamente uma amina primária aromática).
No PABA, a extremidade oxigenada apresenta o grupamento $-COOH$ (carbonila ligada a hidroxila), caracterizando a função ácido carboxílico.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: `A benzocaína é obtida a partir da reação:
PABA + reagente X $\\xrightarrow{H^+}$ benzocaína + produto Y
Escreva a fórmula estrutural do reagente X, mostrando todas as ligações entre os átomos, e apresente a fórmula molecular do produto Y.`,
        expected: `1) Fórmula estrutural do reagente X: etanol ($CH_3-CH_2-OH$), representada com todas as ligações covalentes simples explícitas.\n2) Fórmula molecular do produto Y: $H_2O$ (água).\n\nCritérios de pontuação: 1 ponto para a fórmula estrutural do etanol; 1 ponto para a fórmula molecular H2O.`,
        expectedImages: [{ file: 'p2-q10-solucao-reacao.svg', alt: 'Gabarito Oficial VUNESP: Fórmula estrutural de Lewis do reagente X (etanol)', caption: 'Fórmula estrutural do reagente X (etanol).' }],
        criteria: [
          { points: 1, text: 'Apresenta a fórmula estrutural do etanol (reagente X) com todas as ligações entre átomos explícitas.' },
          { points: 1, text: 'Apresenta a fórmula molecular H2O para o produto Y.' },
        ],
        detailed: `b) A reação representada é uma clássica reação de esterificação de Fischer catalisada por ácido ($H^+$): um ácido carboxílico reage com um álcool formando um éster e água.
Como a benzocaína é o éster etílico do PABA (apresenta o grupamento carboxilato de etila, $-COOCH_2CH_3$), o álcool reagente de partida (reagente X) é o etanol ($CH_3CH_2OH$), cuja fórmula estrutural com todas as ligações explícitas consiste em dois carbonos saturados ligados a hidrogênios e uma hidroxila terminal.
O subproduto da condensação é a água ($H_2O$), cuja fórmula molecular é $H_2O$.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  // ==========================================
  // FÍSICA (QUESTÕES 11 A 15)
  // ==========================================
  d({
    n: 11,
    subject: 'Física',
    content: 'Cinemática e dinâmica: frenagem em área de escape, desaceleração uniforme e Teorema do Impulso',
    difficulty: 'Fácil',
    statement: `Um aeroporto internacional construiu áreas de escape na cabeceira de suas pistas para aumentar a segurança de pousos e decolagens. Essas áreas são formadas por blocos de material que se deforma devido ao peso da aeronave, de modo a dificultar o seu deslocamento. A figura mostra um avião que entra na área de escape com velocidade inicial de 54 km/h e para após percorrer essa área com desaceleração constante de módulo igual a 2,5 m/s².`,
    visuals: [{ file: 'p2-q11-aviao-escape.svg', alt: 'Avião entrando na área de escape de aeroporto com velocidade v0 = 54 km/h', caption: 'Avião na área de escape.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Converta a velocidade inicial do avião para m/s e determine a distância, em metros, percorrida por ele na área de escape.',
        expected: `1) Conversão da velocidade:
$v_0 = 54\text{ km/h} = \frac{54}{3,6} = 15\text{ m/s}$.

2) Distância percorrida na área de escape (Equação de Torricelli com $v = 0$):
$v^2 = v_0^2 + 2a\Delta s \implies 0^2 = 15^2 + 2(-2,5)\Delta s \implies 5\Delta s = 225 \implies \Delta s = 45\text{ m}$.`,
        criteria: [
          { points: 1, text: 'Converte a velocidade para 15 m/s com demonstração do cálculo.' },
          { points: 1, text: 'Determina a distância percorrida d = 45 m com desenvolvimento.' },
        ],
        detailed: `a) 1) A conversão da velocidade inicial para o Sistema Internacional é obtida dividindo por 3,6:
$$v_0 = \frac{54\text{ km/h}}{3,6} = 15\text{ m/s}$$
2) Como a aceleração de frenagem é constante ($a = -2,5\text{ m/s}^2$) e o avião para completamente ao final do percurso ($v = 0$), aplicamos a Equação de Torricelli:
$$v^2 = v_0^2 + 2a\Delta s$$
$$0 = 15^2 + 2(-2,5)\Delta s \implies 0 = 225 - 5\Delta s \implies \Delta s = \frac{225}{5} = 45\text{ m}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Suponha que a massa desse avião seja 2,4 × 10⁴ kg e que apenas as forças de deformação atuem sobre ele durante a frenagem. Calcule, em newtons, a intensidade média da resultante das forças de deformação que atuaram sobre o avião durante a sua frenagem na área de escape. Determine a intensidade média do impulso, em N · s, aplicado por essa resultante sobre o avião.',
        expected: `1) Intensidade média da força resultante de deformação:
$R = m \cdot |a| = (2,4 \times 10^4\text{ kg}) \times 2,5\text{ m/s}^2 = 6,0 \times 10^4\text{ N}$.

2) Intensidade média do impulso:
Pelo Teorema do Impulso: $I = |\Delta Q| = m \cdot |v - v_0| = (2,4 \times 10^4\text{ kg}) \times 15\text{ m/s} = 3,6 \times 10^5\text{ N}\cdot\text{s}$.
(Ou calculando o tempo $t = \frac{15}{2,5} = 6\text{ s}$ e $I = R \cdot \Delta t = 6,0 \times 10^4 \times 6 = 3,6 \times 10^5\text{ N}\cdot\text{s}$).`,
        criteria: [
          { points: 1, text: 'Calcula a força resultante R = 6,0 x 10^4 N com resolução.' },
          { points: 1, text: 'Calcula o impulso I = 3,6 x 10^5 N.s com resolução.' },
        ],
        detailed: `b) 1) Pela Segunda Lei de Newton, a intensidade da força resultante média aplicada pelas forças de deformação é:
$$R = m \cdot a = (2,4 \times 10^4\text{ kg}) \times 2,5\text{ m/s}^2 = 6,0 \times 10^4\text{ N}$$
2) Pelo Teorema do Impulso, o impulso da força resultante é igual à variação da quantidade de movimento do avião:
$$I = |\Delta Q| = |Q_{\text{final}} - Q_{\text{inicial}}| = |0 - m \cdot v_0| = (2,4 \times 10^4\text{ kg}) \times 15\text{ m/s} = 3,6 \times 10^5\text{ N}\cdot\text{s}$$
Alternativamente, determinando o tempo de parada:
$$v = v_0 + a\Delta t \implies 0 = 15 - 2,5\Delta t \implies \Delta t = 6\text{ s}$$
$$I = R \cdot \Delta t = (6,0 \times 10^4\text{ N}) \times 6\text{ s} = 3,6 \times 10^5\text{ N}\cdot\text{s}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 12,
    subject: 'Física',
    content: 'Mecânica: energia cinética, energia potencial gravitacional e trabalho de forças resistentes',
    difficulty: 'Média',
    statement: `Uma das empresas norte-americanas que levou turistas em voo suborbital em 2021 utiliza uma cápsula, tripulada por passageiros, acoplada a um foguete propulsor. O conjunto sobe verticalmente a partir do repouso e, a 75 km de altitude, quando atinge a velocidade de 1 000 m/s, a cápsula se desprende do propulsor e prossegue subindo verticalmente até atingir a altitude de 105 km. A partir desse ponto, ela inicia a descida em queda livre até a aproximação com o solo, quando paraquedas são acionados, permitindo um pouso suave. Considere a massa da cápsula igual a 4,0 × 10³ kg e a aceleração da gravidade constante e igual a 10 m/s².`,
    visuals: [{ file: 'p2-q12-voo-suborbital.svg', alt: 'Trajetória vertical de voo suborbital da cápsula espacial', caption: 'Trajetória suborbital da cápsula.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a energia cinética e a energia mecânica total da cápsula, em relação ao solo, no instante em que ocorre a sua separação do propulsor, ambas em joules.',
        expected: `1) Energia cinética no instante da separação ($v = 1\,000\text{ m/s}$):
$E_C = \frac{1}{2} m v^2 = \frac{1}{2} \times (4,0 \times 10^3) \times (1\,000)^2 = 2,0 \times 10^9\text{ J}$.

2) Energia mecânica total ($h = 75\text{ km} = 75 \times 10^3\text{ m}$):
$E_{PG} = m g h = (4,0 \times 10^3) \times 10 \times (75 \times 10^3) = 3,0 \times 10^9\text{ J}$.
$E_M = E_C + E_{PG} = 2,0 \times 10^9 + 3,0 \times 10^9 = 5,0 \times 10^9\text{ J}$.`,
        criteria: [
          { points: 1, text: 'Calcula a energia cinética Ec = 2,0 x 10^9 J com resolução.' },
          { points: 1, text: 'Calcula a energia mecânica total Em = 5,0 x 10^9 J com resolução.' },
        ],
        detailed: `a) No instante da separação, a cápsula de massa $m = 4,0 \times 10^3\text{ kg}$ possui velocidade $v = 1\,000\text{ m/s}$ e altitude $h = 75\text{ km} = 75 \times 10^3\text{ m}$.
1) Energia cinética:
$$E_C = \frac{1}{2}mv^2 = \frac{1}{2}(4,0 \times 10^3\text{ kg})(1\,000\text{ m/s})^2 = 2,0 \times 10^9\text{ J}$$
2) Energia potencial gravitacional em relação ao solo:
$$E_{PG} = mgh = (4,0 \times 10^3\text{ kg})(10\text{ m/s}^2)(75 \times 10^3\text{ m}) = 3,0 \times 10^9\text{ J}$$
A energia mecânica total da cápsula é a soma das energias cinética e potencial:
$$E_M = E_C + E_{PG} = 2,0 \times 10^9 + 3,0 \times 10^9 = 5,0 \times 10^9\text{ J}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule o trabalho realizado pelo peso da cápsula, em joules, entre o momento em que ela se desprende do propulsor até o momento em que ela atinge o ponto mais alto da trajetória. Determine o trabalho realizado pelas forças de resistência que atuaram sobre a cápsula, em joules, desde a altura máxima até o seu pouso, desprezando a energia cinética da cápsula na altura máxima e no instante do pouso.',
        expected: `1) Trabalho realizado pelo peso entre a separação ($75\text{ km}$) e a altitude máxima ($105\text{ km}$):
Como a cápsula sobe, o peso realiza trabalho resistente:
$\tau_P = -m g \Delta h = -(4,0 \times 10^3) \times 10 \times (105 \times 10^3 - 75 \times 10^3) = -(4,0 \times 10^4) \times (30 \times 10^3) = -1,2 \times 10^9\text{ J}$.

2) Trabalho das forças de resistência desde a altitude máxima ($105\text{ km}$) até o solo ($0\text{ m}$), com $v = 0$ no topo e no solo:
Pelo Teorema da Energia Mecânica:
$\tau_{\text{res}} = \Delta E_M = E_{M,\text{solo}} - E_{M,\text{topo}} = 0 - m g H = -(4,0 \times 10^3) \times 10 \times (105 \times 10^3) = -4,2 \times 10^9\text{ J}$ (ou módulo $4,2 \times 10^9\text{ J}$).`,
        criteria: [
          { points: 1, text: 'Calcula o trabalho do peso: -1,2 x 10^9 J com desenvolvimento.' },
          { points: 1, text: 'Calcula o trabalho das forças de resistência: -4,2 x 10^9 J (ou 4,2 x 10^9 J) com desenvolvimento.' },
        ],
        detailed: `b) 1) Durante a subida da altitude de $75\text{ km}$ até $105\text{ km}$, o deslocamento vertical é para cima e a força peso atua verticalmente para baixo. O trabalho realizado pelo peso é resistente:
$$\Delta h = 105 \times 10^3 - 75 \times 10^3 = 30 \times 10^3\text{ m}$$
$$\tau_P = -m g \Delta h = -(4,0 \times 10^3)(10)(30 \times 10^3) = -1,2 \times 10^9\text{ J}$$
2) Do ponto mais alto ($H = 105\text{ km}$) até o pouso no solo ($h=0$), a energia cinética inicial e final é nula ($v_{\text{topo}} = 0$ e $v_{\text{pouso}} = 0$).
A energia mecânica no ponto mais alto era exclusivamente potencial gravitacional:
$$E_{M,\text{topo}} = mgH = (4,0 \times 10^3)(10)(105 \times 10^3) = 4,2 \times 10^9\text{ J}$$
No solo, $E_{M,\text{solo}} = 0$.
Pelo Teorema da Energia Mecânica, o trabalho das forças dissipativas (resistência do ar e paraquedas) corresponde à variação de energia mecânica:
$$\tau_{\text{res}} = E_{M,\text{solo}} - E_{M,\text{topo}} = 0 - 4,2 \times 10^9 = -4,2 \times 10^9\text{ J}$$
(A quantidade dissipada em módulo equivale a $4,2 \times 10^9\text{ J}$).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 13,
    subject: 'Física',
    content: 'Termologia: calorimetria e dilatação térmica aparente de líquidos em recipientes de vidro',
    difficulty: 'Fácil',
    statement: `Em um recipiente de vidro de capacidade 250 cm³, são colocados 200 cm³ de glicerina, ambos inicialmente a 20 ºC. Em seguida, esse conjunto é aquecido até 70 ºC.`,
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a massa de glicerina, em gramas, colocada no recipiente e a quantidade de calor, em calorias, absorvida pela glicerina durante o aquecimento, desprezando as perdas de calor e sabendo que a massa específica e o calor específico da glicerina são, respectivamente, 1,26 g/cm³ e 0,60 cal/(g · ºC).',
        expected: `1) Massa de glicerina:
$m = \rho \cdot V = 1,26\text{ g/cm}^3 \times 200\text{ cm}^3 = 252\text{ g}$.

2) Quantidade de calor absorvida:
$Q = m \cdot c \cdot \Delta T = 252\text{ g} \times 0,60\text{ cal/(g}\cdot^\circ\text{C)} \times (70 - 20)^\circ\text{C} = 252 \times 0,60 \times 50 = 7\,560\text{ cal}$.`,
        criteria: [
          { points: 1, text: 'Calcula a massa da glicerina m = 252 g com resolução.' },
          { points: 1, text: 'Calcula a quantidade de calor absorvida Q = 7 560 cal com resolução.' },
        ],
        detailed: `a) 1) A massa da glicerina contida inicialmente no recipiente é calculada pelo produto da massa específica pelo volume:
$$m = \rho \cdot V = (1,26\text{ g/cm}^3) \times 200\text{ cm}^3 = 252\text{ g}$$
2) A variação de temperatura durante o aquecimento é $\Delta T = 70 - 20 = 50^\circ\text{C}$.
Pela equação fundamental da calorimetria:
$$Q = m \cdot c \cdot \Delta T = 252\text{ g} \times 0,60\text{ cal/(g}\cdot^\circ\text{C)} \times 50^\circ\text{C} = 7\,560\text{ cal}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule, em cm³, o aumento do volume da glicerina durante o aquecimento e o volume da região do recipiente não ocupada pela glicerina quando o conjunto encontra-se a 70 ºC, considerando que, devido ao aquecimento, o recipiente tenha se dilatado 0,30 cm³ e que o coeficiente de dilatação volumétrica da glicerina seja igual a 5,0 × 10⁻⁴ ºC⁻¹.',
        expected: `1) Aumento do volume da glicerina (dilatação volumétrica real):
$\Delta V_{\text{glic}} = V_0 \cdot \gamma \cdot \Delta T = 200\text{ cm}^3 \times (5,0 \times 10^{-4}\ ^\circ\text{C}^{-1}) \times 50^\circ\text{C} = 5,0\text{ cm}^3$.

2) Volume da região não ocupada (vazia) a 70 ºC:
Volume final do recipiente: $V_{\text{rec}} = 250 + 0,30 = 250,30\text{ cm}^3$.
Volume final da glicerina: $V_{\text{glic}} = 200 + 5,0 = 205,0\text{ cm}^3$.
Volume não ocupado: $V_{\text{vazio}} = 250,30 - 205,0 = 45,30\text{ cm}^3$ (ou $45,3\text{ cm}^3$).`,
        criteria: [
          { points: 1, text: 'Calcula o aumento do volume da glicerina ΔV = 5,0 cm³ com resolução.' },
          { points: 1, text: 'Calcula o volume não ocupado = 45,30 cm³ (ou 45,3 cm³) com resolução.' },
        ],
        detailed: `b) 1) O aumento de volume sofrido pela glicerina é calculado por:
$$\Delta V_{\text{glic}} = V_0 \cdot \gamma \cdot \Delta T = 200\text{ cm}^3 \times (5,0 \times 10^{-4}\ ^\circ\text{C}^{-1}) \times (70 - 20)^\circ\text{C} = 5,0\text{ cm}^3$$
2) O volume total final do recipiente a 70 ºC é:
$$V_{\text{rec, final}} = 250 + 0,30 = 250,30\text{ cm}^3$$
O volume total final ocupado pela glicerina aquecida é:
$$V_{\text{glic, final}} = 200 + 5,0 = 205,0\text{ cm}^3$$
Portanto, o volume da região do recipiente que permanece não ocupada pelo líquido é a diferença entre os volumes:
$$V_{\text{não ocupado}} = 250,30 - 205,0 = 45,30\text{ cm}^3$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 14,
    subject: 'Física',
    content: 'Ondulatória e acústica: tubos sonoros fechados, harmônicos, intensidade e nível sonoro',
    difficulty: 'Média',
    statement: `A figura 1 mostra um instrumento musical constituído por vários tubos, abertos em uma extremidade e fechados na outra, colocados lado a lado, e a figura 2 mostra a forma da onda sonora estacionária que corresponde à frequência fundamental produzida por um desses tubos.`,
    visuals: [{ file: 'p2-q14-instrumento-tubos.svg', alt: 'Tubo sonoro fechado em uma extremidade mostrando onda estacionária do modo fundamental', caption: 'Tubo sonoro com onda estacionária fundamental.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Considerando que a velocidade de propagação das ondas sonoras no ar seja 340 m/s e que a frequência fundamental da onda emitida por um dos tubos desse instrumento seja 170 Hz, calcule, em metros, o comprimento de onda dessa onda e o comprimento desse tubo.',
        expected: `1) Comprimento de onda fundamental ($v = 340\text{ m/s}$, $f = 170\text{ Hz}$):
$v = \lambda \cdot f \implies \lambda = \frac{v}{f} = \frac{340}{170} = 2,0\text{ m}$.

2) Comprimento do tubo fechado em uma extremidade:
No modo fundamental de um tubo fechado, forma-se um nó na extremidade fechada e um ventre na extremidade aberta, de modo que $L = \frac{\lambda}{4}$:
$L = \frac{2,0\text{ m}}{4} = 0,50\text{ m}$ (ou $50\text{ cm}$).`,
        criteria: [
          { points: 1, text: 'Calcula o comprimento de onda λ = 2,0 m com desenvolvimento.' },
          { points: 1, text: 'Calcula o comprimento do tubo L = 0,50 m com desenvolvimento.' },
        ],
        detailed: `a) 1) Pela equação fundamental da ondulatória:
$$v = \lambda \cdot f \implies \lambda = \frac{v}{f} = \frac{340\text{ m/s}}{170\text{ Hz}} = 2,0\text{ m}$$
2) Em um tubo sonoro fechado em uma das extremidades, a onda estacionária do primeiro harmônico (modo fundamental) apresenta um nó de deslocamento no fundo fechado e um ventre na abertura. A distância entre um nó e o ventre consecutivo equivale a um quarto do comprimento de onda:
$$L = \frac{\lambda}{4} = \frac{2,0\text{ m}}{4} = 0,50\text{ m}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: `A intensidade sonora (I) exprime a quantidade média de energia transportada por uma onda sonora (ΔE) através de uma unidade de área (ΔS) perpendicular à direção de propagação da onda, por unidade de tempo (Δt), ou seja, $I = \frac{\Delta E}{\Delta S \cdot \Delta t}$. O nível sonoro (β) indica a intensidade do som percebido pelo sistema auditivo humano e é definido, quando medido em dB, como $\beta = 10\log\left(\frac{I}{I_0}\right)$, sendo $I_0 = 10^{-12}\text{ W/m}^2$. Supondo que a superfície da membrana timpânica de uma pessoa seja perpendicular à direção de propagação das ondas sonoras e tenha área de 6,0 × 10⁻⁵ m², calcule a quantidade de energia, em joules, que atinge essa membrana, em um segundo, quando essa pessoa ouve um som de nível sonoro igual a 60 dB.`,
        expected: `1) Determinação da intensidade sonora $I$ para $\beta = 60\text{ dB}$:
$\beta = 10\log\left(\frac{I}{I_0}\right) \implies 60 = 10\log\left(\frac{I}{10^{-12}}\right) \implies \log\left(\frac{I}{10^{-12}}\right) = 6$
$\frac{I}{10^{-12}} = 10^6 \implies I = 10^{-6}\text{ W/m}^2$.

2) Quantidade de energia $\Delta E$ que atinge a membrana em $\Delta t = 1\text{ s}$ com área $\Delta S = 6,0 \times 10^{-5}\text{ m}^2$:
$\Delta E = I \cdot \Delta S \cdot \Delta t = (10^{-6}\text{ W/m}^2) \times (6,0 \times 10^{-5}\text{ m}^2) \times 1\text{ s} = 6,0 \times 10^{-11}\text{ J}$.`,
        criteria: [
          { points: 1, text: 'Calcula a intensidade sonora I = 10^-6 W/m² com desenvolvimento.' },
          { points: 1, text: 'Calcula a quantidade de energia ΔE = 6,0 x 10^-11 J com desenvolvimento.' },
        ],
        detailed: `b) 1) A partir da definição do nível sonoro em decibéis ($\beta = 60\text{ dB}$):
$$\beta = 10\log\left(\frac{I}{I_0}\right) \implies 60 = 10\log\left(\frac{I}{10^{-12}}\right) \implies 6 = \log\left(\frac{I}{10^{-12}}\right)$$
Pela definição de logaritmo decimal:
$$\frac{I}{10^{-12}} = 10^6 \implies I = 10^6 \times 10^{-12} = 10^{-6}\text{ W/m}^2$$
2) A intensidade sonora relaciona energia, área e tempo:
$$I = \frac{\Delta E}{\Delta S \cdot \Delta t} \implies \Delta E = I \cdot \Delta S \cdot \Delta t$$
Substituindo os dados fornecidos ($\Delta S = 6,0 \times 10^{-5}\text{ m}^2$ e $\Delta t = 1\text{ s}$):
$$\Delta E = (10^{-6}\text{ W/m}^2) \times (6,0 \times 10^{-5}\text{ m}^2) \times (1\text{ s}) = 6,0 \times 10^{-11}\text{ J}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 15,
    subject: 'Física',
    content: 'Eletrodinâmica: resistores em paralelo, Lei de Ohm-Pouillet e dissipação interna de potência',
    difficulty: 'Média',
    statement: `Um circuito elétrico é composto por uma bateria, de força eletromotriz ε e resistência interna Ri, e por três resistores de resistências elétricas R1, R2 e R3, como ilustrado na figura. Quando o circuito está em funcionamento, a intensidade da corrente elétrica que passa por R1 é de 0,25 A.`,
    visuals: [{ file: 'p2-q15-circuito-eletrico.svg', alt: 'Circuito com gerador real (ε, Ri) em série com R1 e associação em paralelo de R2 e R3', caption: 'Circuito elétrico com gerador e resistores.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Considerando a resistência elétrica dos resistores R2 e R3 respectivamente iguais a 200 Ω e 50 Ω, calcule a diferença de potencial, em volts, entre os terminais do resistor R3 e determine a intensidade da corrente elétrica, em amperes, que nele se estabelece.',
        expected: `1) Resistência equivalente do trecho em paralelo ($R_2$ e $R_3$):
$R_p = \frac{R_2 \cdot R_3}{R_2 + R_3} = \frac{200 \times 50}{200 + 50} = \frac{10\,000}{250} = 40\ \Omega$.
Como a corrente total no circuito (que atravessa $R_1$) é $i = 0,25\text{ A}$, a ddp nos terminais da associação paralela é:
$U_3 = U_p = R_p \cdot i = 40\ \Omega \times 0,25\text{ A} = 10\text{ V}$.

2) Intensidade da corrente elétrica em $R_3$:
$i_3 = \frac{U_3}{R_3} = \frac{10\text{ V}}{50\ \Omega} = 0,20\text{ A}$.`,
        criteria: [
          { points: 1, text: 'Calcula a ddp entre os terminais de R3: U3 = 10 V com desenvolvimento.' },
          { points: 1, text: 'Calcula a corrente em R3: i3 = 0,20 A com desenvolvimento.' },
        ],
        detailed: `a) 1) Os resistores $R_2$ e $R_3$ estão associados em paralelo. A resistência equivalente desse ramo é:
$$R_p = \frac{R_2 \cdot R_3}{R_2 + R_3} = \frac{200 \times 50}{200 + 50} = \frac{10\,000}{250} = 40\ \Omega$$
Como o resistor $R_1$ está em série com o ramo paralelo, a corrente total que entra na associação é a mesma que atravessa $R_1$: $i = 0,25\text{ A}$.
Portanto, a tensão elétrica entre os terminais de $R_3$ é a ddp do ramo paralelo:
$$U_3 = U_p = R_p \cdot i = 40\ \Omega \times 0,25\text{ A} = 10\text{ V}$$
2) Pela Primeira Lei de Ohm aplicada ao resistor $R_3$:
$$i_3 = \frac{U_3}{R_3} = \frac{10\text{ V}}{50\ \Omega} = 0,20\text{ A}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Sabendo que a força eletromotriz da bateria é 12,0 V e que a diferença de potencial entre os pontos A e B, indicados na figura, é de 11,9 V, calcule o valor da resistência interna da bateria, em ohms, e determine a potência dissipada na forma de calor, em watts, pela bateria.',
        expected: `1) Resistência interna da bateria:
Pela equação do gerador real: $U = \varepsilon - R_i \cdot i$
$11,9 = 12,0 - R_i \cdot 0,25 \implies 0,25\,R_i = 12,0 - 11,9 = 0,1 \implies R_i = \frac{0,1}{0,25} = 0,40\ \Omega$.

2) Potência dissipada na forma de calor (efeito Joule interno):
$P_{\text{diss}} = R_i \cdot i^2 = 0,40 \times (0,25)^2 = 0,40 \times 0,0625 = 0,025\text{ W}$ (ou $2,5 \times 10^{-2}\text{ W}$).`,
        criteria: [
          { points: 1, text: 'Calcula a resistência interna Ri = 0,40 Ω com desenvolvimento.' },
          { points: 1, text: 'Calcula a potência dissipada = 0,025 W (ou 2,5 x 10^-2 W) com desenvolvimento.' },
        ],
        detailed: `b) 1) A diferença de potencial útil fornecida pelo gerador entre os pontos A e B sob corrente $i = 0,25\text{ A}$ obedece à equação do gerador real:
$$U_{AB} = \varepsilon - R_i \cdot i$$
$$11,9 = 12,0 - R_i(0,25) \implies 0,25\,R_i = 12,0 - 11,9 = 0,10 \implies R_i = \frac{0,10}{0,25} = 0,40\ \Omega$$
2) A potência dissipada sob a forma de calor exclusivamente no interior da bateria decorre do efeito Joule em sua resistência interna:
$$P_{\text{diss}} = R_i \cdot i^2 = 0,40\ \Omega \times (0,25\text{ A})^2 = 0,40 \times 0,0625 = 0,025\text{ W}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  // ==========================================
  // MATEMÁTICA (QUESTÕES 16 A 20)
  // ==========================================
  d({
    n: 16,
    subject: 'Matemática',
    content: 'Geometria plana: cordas paralelas em circunferência, distância ao centro e Teorema de Pitágoras',
    difficulty: 'Média',
    statement: `A figura representa um círculo de centro C com duas cordas paralelas, $\overline{PQ}$ e $\overline{RS}$, cujas medidas são $PQ = 8\text{ cm}$ e $RS = 6\text{ cm}$. A distância entre C e a corda $\overline{PQ}$ é igual a $d\text{ cm}$.`,
    visuals: [{ file: 'p2-q16-circulo-cordas.svg', alt: 'Círculo de centro C com cordas paralelas horizontais PQ e RS', caption: 'Circunferência com cordas paralelas PQ e RS.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a área do círculo para o caso em que d = 3 cm.',
        expected: `1) Determinação do raio $R$:
Como o segmento perpendicular que une o centro C à corda $PQ$ passa pelo seu ponto médio $M$, temos $MQ = \frac{8}{2} = 4\text{ cm}$.
No triângulo retângulo $\Delta CMQ$, com catetos $d = 3\text{ cm}$ e $MQ = 4\text{ cm}$:
$R^2 = d^2 + MQ^2 = 3^2 + 4^2 = 9 + 16 = 25 \implies R = 5\text{ cm}$.

2) Área do círculo:
$S = \pi R^2 = \pi \times 25 = 25\pi\text{ cm}^2$.`,
        expectedImages: [{ file: 'p2-q16-solucao-geometria-a.svg', alt: 'Gabarito Oficial VUNESP: Triângulo retângulo com catetos 3 e 4 e determinação de R = 5 cm', caption: 'Esquema oficial do item a: raio e área do círculo.' }],
        criteria: [
          { points: 1, text: 'Determina o raio do círculo R = 5 cm (ou R² = 25) com resolução.' },
          { points: 1, text: 'Calcula a área do círculo S = 25π cm² com resolução.' },
        ],
        detailed: `a) Seja $M$ o ponto médio da corda $PQ$. Pela propriedade geométrica das cordas, a reta que passa pelo centro $C$ e é perpendicular à corda a divide em dois segmentos iguais:
$$MQ = \frac{PQ}{2} = \frac{8}{2} = 4\text{ cm}$$
O triângulo formado pelo centro $C$, pelo ponto médio $M$ e pelo ponto $Q$ sobre a circunferência é retângulo em $M$. A hipotenusa é o raio $R = CQ$ e a distância dada é $CM = d = 3\text{ cm}$.
Aplicando o Teorema de Pitágoras no $\Delta CMQ$:
$$R^2 = CM^2 + MQ^2 = 3^2 + 4^2 = 9 + 16 = 25 \implies R = 5\text{ cm}$$
A área do círculo delimitado pela circunferência é dada por:
$$S = \pi R^2 = \pi \times 5^2 = 25\pi\text{ cm}^2$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule a medida do raio da circunferência para o caso em que a distância entre $\overline{PQ}$ e $\overline{RS}$ seja de 4 cm.',
        expected: `Sejam $M$ o ponto médio de $PQ$ ($MQ = 4\text{ cm}$) e $N$ o ponto médio de $RS$ ($NS = \frac{6}{2} = 3\text{ cm}$).
A distância entre as retas das cordas é de $4\text{ cm}$.
No caso em que o centro C está do mesmo lado em relação às cordas (ou com C entre as cordas), a distância de C à corda $RS$ é $|4 - d|$.
Aplicando o Teorema de Pitágoras nos dois triângulos retângulos com hipotenusa comum $R$:
$$\begin{cases} R^2 = d^2 + 4^2 \\ R^2 = (4 - d)^2 + 3^2 \end{cases}$$
Igualando as duas equações:
$$d^2 + 16 = 16 - 8d + d^2 + 9 \implies 8d = 9 \implies d = \frac{9}{8}\text{ cm}$$
Substituindo $d = \frac{9}{8}\text{ cm}$ na primeira equação:
$$R^2 = \left(\frac{9}{8}\right)^2 + 16 = \frac{81}{64} + 16 = \frac{81 + 1\,024}{64} = \frac{1\,105}{64}$$
$$R = \frac{\sqrt{1\,105}}{8}\text{ cm} \approx 4,15\text{ cm}$$`,
        expectedImages: [{ file: 'p2-q16-solucao-geometria-b.svg', alt: 'Gabarito Oficial VUNESP: Determinação do raio R = √1105 / 8 cm via sistema de equações de Pitágoras', caption: 'Determinação do raio R no item b.' }],
        criteria: [
          { points: 2, text: 'Calcula corretamente a medida do raio R = √1105 / 8 cm (1 ponto para a formulação do sistema de equações e cálculo de d).' },
        ],
        detailed: `b) Sejam $M$ e $N$ os respectivos pontos médios das cordas paralelas $PQ$ e $RS$. Os triângulos $\Delta CMQ$ e $\Delta CNS$ são retângulos em $M$ e $N$:
- $MQ = \frac{PQ}{2} = \frac{8}{2} = 4\text{ cm}$
- $NS = \frac{RS}{2} = \frac{6}{2} = 3\text{ cm}$
A distância do centro $C$ à corda $PQ$ é $CM = d$. Como a distância entre as cordas paralelas é de $4\text{ cm}$, a distância de $C$ à corda $RS$ é expressa por $CN = |4 - d|$.
Como $CQ = CS = R$ (raios da circunferência), aplicamos o Teorema de Pitágoras em ambos os triângulos:
$$\begin{cases} R^2 = d^2 + 4^2 \\ R^2 = (4 - d)^2 + 3^2 \end{cases}$$
Igualando as expressões de $R^2$:
$$d^2 + 16 = 16 - 8d + d^2 + 9$$
$$8d = 9 \implies d = \frac{9}{8}\text{ cm}$$
Substituindo o valor de $d$ para encontrar o raio $R$:
$$R^2 = \left(\frac{9}{8}\right)^2 + 16 = \frac{81}{64} + \frac{1\,024}{64} = \frac{1\,105}{64}$$
$$R = \frac{\sqrt{1\,105}}{8}\text{ cm} \approx 4,155\text{ cm}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 17,
    subject: 'Matemática',
    content: 'Geometria analítica: equações da reta, perpendicularismo, coeficiente angular e valor numérico de ordenada',
    difficulty: 'Média',
    statement: `No plano cartesiano de eixos ortogonais, as retas r e s se intersectam no ponto de coordenadas (2, 4). A reta s intersecta o eixo x no ponto de coordenadas (–10, 0) e a reta r é perpendicular à reta s. Os ângulos agudos que as retas r e s determinam com o eixo x medem, respectivamente, 60º e 30º, ou seja, essas retas determinam um ângulo de 30º entre si, como indica a figura. Sabe-se, ainda, que a reta r intersecta o eixo y no ponto de coordenadas (0, n).`,
    visuals: [{ file: 'p2-q17-retas-cartesianas.svg', alt: 'Retas perpendiculares r e s concorrentes em (2, 4) com reta r interceptando eixo y em (0, n)', caption: 'Retas r e s no plano cartesiano.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Determine a equação da reta s.',
        expected: `A reta $s$ passa pelos pontos $(-10, 0)$ e $(2, 4)$.
Coeficiente angular de $s$:
$m_s = \frac{4 - 0}{2 - (-10)} = \frac{4}{12} = \frac{1}{3}$.

Equação da reta $s$:
$y - y_0 = m_s(x - x_0) \implies y - 0 = \frac{1}{3}(x + 10) \implies x - 3y + 10 = 0$
(ou na forma reduzida: $y = \frac{1}{3}x + \frac{10}{3}$).`,
        criteria: [
          { points: 2, text: 'Encontra corretamente a equação da reta s: x - 3y + 10 = 0 (1 ponto para cálculo do coeficiente angular ms = 1/3).' },
        ],
        detailed: `a) A reta $s$ contém os pontos $A(-10, 0)$ e $P(2, 4)$.
O coeficiente angular $m_s$ é dado pela razão entre as variações das ordenadas e das abscissas:
$$m_s = \frac{y_P - y_A}{x_P - x_A} = \frac{4 - 0}{2 - (-10)} = \frac{4}{12} = \frac{1}{3}$$
Utilizando a equação fundamental da reta que passa por $A(-10, 0)$:
$$y - 0 = \frac{1}{3}(x - (-10)) \implies y = \frac{1}{3}x + \frac{10}{3} \iff x - 3y + 10 = 0$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Determine o valor numérico de n.',
        expected: `A reta $r$ passa pelo ponto $(2, 4)$ e intercepta o eixo $y$ no ponto $(0, n)$.
Pela figura do enunciado, a reta $r$ tem inclinação descendente em relação ao sentido positivo do eixo $x$, formando ângulo de $60^\circ$ no triângulo, o que corresponde ao coeficiente angular:
$m_r = -\tan 60^\circ = -\sqrt{3}$.
Como $m_r = \frac{n - 4}{0 - 2} = \frac{n - 4}{-2}$:
$\frac{n - 4}{-2} = -\sqrt{3} \implies n - 4 = 2\sqrt{3} \implies n = 4 + 2\sqrt{3}$ (ou $2\sqrt{3} + 4$).
(Também aceito $n = 4 - 2\sqrt{3}$, caso adotada reta ascendente com $\tan 60^\circ = \sqrt{3}$).`,
        expectedImages: [{ file: 'p2-q17-solucao-grafico.svg', alt: 'Gabarito Oficial VUNESP: Determinação de n = 4 + 2√3 no gráfico cartesiano', caption: 'Determinação do valor de n.' }],
        criteria: [
          { points: 2, text: 'Determina corretamente o valor numérico n = 4 + 2√3 (ou 4 - 2√3).' },
        ],
        detailed: `b) A reta $r$ passa pelo ponto de interseção $P(2, 4)$ e pelo ponto $(0, n)$ no eixo das ordenadas.
Pela figura, a reta $r$ determina um ângulo agudo de $60^\circ$ com o eixo das abscissas, possuindo declividade negativa (reta decrescente). Portanto, seu coeficiente angular é:
$$m_r = -\tan 60^\circ = -\sqrt{3}$$
Pela definição de coeficiente angular entre os pontos $(2, 4)$ e $(0, n)$:
$$m_r = \frac{n - 4}{0 - 2} = \frac{n - 4}{-2}$$
Igualando a $-\sqrt{3}$:
$$\frac{n - 4}{-2} = -\sqrt{3} \implies n - 4 = 2\sqrt{3} \implies n = 4 + 2\sqrt{3}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 18,
    subject: 'Matemática',
    content: 'Aritmética e análise combinatória: porcentagem, infográfico do preço da gasolina e combinações de moedas',
    difficulty: 'Média',
    statement: `O infográfico ilustra os itens que compõem o preço de 1 litro de gasolina comercializada nos postos de combustíveis no Brasil em determinado momento. Considere que o preço final de 1 litro de gasolina ao consumidor seja R$ 6,00.`,
    visuals: [{ file: 'p2-q18-infografico-gasolina.svg', alt: 'Infográfico do preço da gasolina: realização da Petrobras, tributos federais e estaduais, custo etanol anidro e distribuição', caption: 'Composição do preço de 1 litro de gasolina.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule o valor de X com três casas decimais e o valor de Y com uma casa decimal.',
        expected: `1) Cálculo de X (custo do etanol anidro na composição da gasolina):
Pelo infográfico, o etanol corresponde a $17,2\%$ do preço final de R$ 6,00:
$X = 0,172 \times 6,00 = \text{R\$} 1,032$.

2) Cálculo de Y (porcentagem da margem de distribuição e revenda):
O valor correspondente é R$ 0,684 em um total de R$ 6,00:
$Y = \frac{0,684}{6,00} \times 100\% = 11,4\%$.`,
        criteria: [
          { points: 1, text: 'Calcula X = R$ 1,032 (com três casas decimais) com resolução.' },
          { points: 1, text: 'Calcula Y = 11,4% (com uma casa decimal) com resolução.' },
        ],
        detailed: `a) O preço final de 1 litro de gasolina comum ao consumidor é R$ 6,00 (100%).
1) Cálculo de X:
Pelo infográfico, a parcela referente ao custo do etanol anidro é de $17,2\%$:
$$X = 17,2\% \times 6,00 = 0,172 \times 6,00 = \text{R\$} 1,032$$
2) Cálculo de Y:
A parcela de distribuição e revenda tem valor absoluto de R$ 0,684. Sua porcentagem em relação a R$ 6,00 é:
$$Y = \frac{0,684}{6,00} \times 100\% = 0,114 \times 100\% = 11,4\%$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Adotando R$ 1,03 como custo do etanol utilizado na composição de 1 litro de gasolina, determine o valor, em R$, do litro de etanol, também com duas casas decimais. De quantas formas diferentes é possível formar um subconjunto do conjunto das 27 moedas com valor monetário total igual ao preço de 1 litro de etanol? Considere que a troca de moedas de mesmo valor não constitui novos subconjuntos.',
        expected: `1) Valor de 1 litro de etanol:
A gasolina contém 27% de etanol anidro em volume (fração volumétrica 0,27 L). Como essa parcela custa R$ 1,03:
$P = \frac{1,03}{0,27} = \frac{103}{27} \approx \text{R\$} 3,81$.

2) Subconjuntos possíveis com as 27 moedas disponíveis (4 de R$ 1,00; 3 de R$ 0,50; 2 de R$ 0,10; 3 de R$ 0,05; 15 de R$ 0,01):
Tabela oficial de estratégias (Gabarito VUNESP):

| Moedas R$ 1,00 | Moedas R$ 0,50 | Moedas R$ 0,10 | Moedas R$ 0,05 | Moedas R$ 0,01 |
| :---: | :---: | :---: | :---: | :---: |
| 3 | 1 | 2 | 2 | 1 |
| 3 | 1 | 2 | 1 | 6 |
| 3 | 1 | 2 | 0 | 11 |
| 3 | 1 | 1 | 3 | 6 |
| 3 | 1 | 1 | 2 | 11 |
| 2 | 3 | 2 | 2 | 1 |
| 2 | 3 | 2 | 1 | 6 |
| 2 | 3 | 2 | 0 | 11 |
| 2 | 3 | 1 | 3 | 6 |
| 2 | 3 | 1 | 2 | 11 |

Total: exatamente 10 subconjuntos distintos.`,
        criteria: [
          { points: 1, text: 'Determina o preço de 1 litro de etanol: R$ 3,81 (com duas casas decimais).' },
          { points: 1, text: 'Determina o total de 10 subconjuntos possíveis com apresentação da estratégia/resolução.' },
        ],
        detailed: `b) 1) A gasolina comum contém $27\%$ de etanol anidro em volume. Sendo R$ 1,03 o custo referente a 0,27 litro na mistura, o preço $P$ de 1 litro de etanol puro é:
$$P = \frac{1,03}{0,27} = \frac{103}{27} \approx 3,8148 \implies P = \text{R\$} 3,81$$

2) O conjunto disponível é composto por 27 moedas:
- 4 moedas de R$ 1,00
- 3 moedas de R$ 0,50
- 2 moedas de R$ 0,10
- 3 moedas de R$ 0,05
- 15 moedas de R$ 0,01
A soma de todas as moedas menores que R$ 1,00 totaliza: $3(0,50) + 2(0,10) + 3(0,05) + 15(0,01) = 1,50 + 0,20 + 0,15 + 0,15 = \text{R\$} 2,00$.
Portanto, para atingir R$ 3,81, precisamos obrigatoriamente de 2 ou 3 moedas de R$ 1,00.

Caso 1: Com 3 moedas de R$ 1,00 (total R$ 3,00):
Devemos compor os R$ 0,81 restantes. É obrigatório utilizar 1 moeda de R$ 0,50, restando R$ 0,31 em moedas de 10, 5 e 1 centavo:
- Com 2 moedas de R$ 0,10 (R$ 0,20), restam R$ 0,11:
  (2 de 0,05 + 1 de 0,01), (1 de 0,05 + 6 de 0,01), (0 de 0,05 + 11 de 0,01) $\to$ 3 possibilidades.
- Com 1 moeda de R$ 0,10 (R$ 0,10), restam R$ 0,21:
  (3 de 0,05 + 6 de 0,01), (2 de 0,05 + 11 de 0,01) $\to$ 2 possibilidades.
Total do Caso 1: $3 + 2 = 5$ possibilidades.

Caso 2: Com 2 moedas de R$ 1,00 (total R$ 2,00):
Devemos compor os R$ 1,81 restantes. É obrigatório utilizar as 3 moedas de R$ 0,50 (R$ 1,50), restando R$ 0,31 em moedas de 10, 5 e 1 centavo:
- De modo idêntico ao Caso 1, há exatamente 5 possibilidades de formar R$ 0,31.
Total do Caso 2: 5 possibilidades.

Total geral de subconjuntos distintos:
$$5 + 5 = 10\text{ subconjuntos}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 19,
    subject: 'Matemática',
    content: 'Matemática financeira e funções exponenciais: decrescimento percentual e resolução de equações logarítmicas',
    difficulty: 'Média',
    statement: `Um homem começou a perder cabelo aos 30 anos de idade, quando tinha cerca de 100 000 fios de cabelo na cabeça. A partir de então, constatou-se que a taxa média de queda de cabelo desse homem foi de 4% ao ano.`,
    parts: [
      {
        id: 'a',
        prompt: 'Sendo N o número médio de fios de cabelo desse homem e t o tempo, em anos, decorrido desde os seus 30 anos de idade, determine a função N(t) e utilize-a para calcular o número de fios de cabelo observados nesse homem quando ele completou 31 anos de vida.',
        expected: `1) Fórmula da quantidade de fios de cabelo $N(t)$:
Como há perda de 4% ao ano, restam a cada ano $100\% - 4\% = 96\% = 0,96$ dos fios do ano anterior:
$N(t) = 100\,000 \cdot (0,96)^{t-30}$ para $t \ge 30$ (ou $N(t) = 100\,000 \cdot (0,96)^t$ para $t \ge 0$).

2) Quantidade de fios ao completar 31 anos:
$N(31) = 100\,000 \cdot (0,96)^{31-30} = 100\,000 \cdot 0,96 = 96\,000\text{ fios}$.`,
        criteria: [
          { points: 1, text: 'Apresenta a função exponencial N(t) = 100 000 · (0,96)^(t-30) com t ≥ 30 (ou equivalente).' },
          { points: 1, text: 'Calcula a quantidade de 96 000 fios aos 31 anos.' },
        ],
        detailed: `a) 1) A cada ano que se passa, o número de fios diminui 4%, restando $96\%$ do total do ano anterior (fator multiplicativo anual igual a $0,96$).
Sendo $t$ a idade do homem em anos ($t \ge 30$), o tempo decorrido após os 30 anos é $(t - 30)$. A função exponencial que descreve o número de fios $N(t)$ é:
$$N(t) = 100\,000 \cdot (0,96)^{t-30}, \quad t \ge 30$$
2) Para $t = 31$ anos:
$$N(31) = 100\,000 \cdot (0,96)^{31-30} = 100\,000 \cdot 0,96 = 96\,000\text{ fios de cabelo}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Decorrido certo número de anos após os 30 anos de idade desse homem, ele terá a metade dos fios de cabelo que tinha aos 30 anos. Utilizando log₁₀ 2 = 0,30 e log₁₀ 3 = 0,48, determine qual será sua idade nessa ocasião.',
        expected: `Metade dos fios aos 30 anos: $\frac{1}{2} \times 100\,000 = 50\,000\text{ fios}$.
$100\,000 \cdot (0,96)^{t-30} = 50\,000 \implies (0,96)^{t-30} = \frac{1}{2} = 2^{-1}$.
Aplicando logaritmo decimal em ambos os membros:
$(t - 30) \cdot \log_{10}(0,96) = -\log_{10} 2 = -0,30$.
Como $0,96 = \frac{96}{100} = \frac{2^5 \cdot 3}{10^2}$:
$\log_{10}(0,96) = 5\log_{10} 2 + \log_{10} 3 - \log_{10} 10^2 = 5(0,30) + 0,48 - 2 = 1,50 + 0,48 - 2 = -0,02$.
Substituindo na equação:
$(t - 30) \cdot (-0,02) = -0,30 \implies t - 30 = \frac{0,30}{0,02} = 15 \implies t = 45\text{ anos}$.
Portanto, o homem terá a metade dos fios aos 45 anos.`,
        criteria: [
          { points: 1, text: 'Monta corretamente a equação exponencial com logaritmos e propriedades.' },
          { points: 1, text: 'Determina a idade final de 45 anos com desenvolvimento.' },
        ],
        detailed: `b) A quantidade de fios aos 30 anos era $100\,000$, logo a metade equivale a $50\,000$ fios:
$$100\,000 \cdot (0,96)^{t-30} = 50\,000 \implies (0,96)^{t-30} = \frac{1}{2}$$
Aplicando o logaritmo decimal em ambos os membros:
$$\log_{10}\left[(0,96)^{t-30}\right] = \log_{10}\left(\frac{1}{2}\right)$$
$$(t - 30) \cdot \log_{10}(0,96) = -\log_{10} 2 = -0,30$$
Fatorando a base decimal:
$$0,96 = \frac{96}{100} = \frac{2^5 \cdot 3}{10^2}$$
$$\log_{10}(0,96) = 5\log_{10} 2 + \log_{10} 3 - 2 = 5(0,30) + 0,48 - 2 = 1,98 - 2 = -0,02$$
Substituindo na equação:
$$(t - 30)(-0,02) = -0,30 \implies t - 30 = \frac{-0,30}{-0,02} = 15$$
$$t = 30 + 15 = 45\text{ anos}$$
Portanto, a idade do homem nessa ocasião será de 45 anos.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 20,
    subject: 'Matemática',
    content: 'Geometria espacial: prisma triangular regular reto, apótema e cálculo de área lateral',
    difficulty: 'Média',
    statement: `A figura mostra um prisma reto regular ABCTQP, de bases triangulares. Sabe-se que $AC = 12\text{ cm}$, que M é ponto médio de $\overline{TQ}$ e que a medida de $\overline{BM}$ é igual a 20 cm.`,
    visuals: [{ file: 'p2-q20-prisma-regular.svg', alt: 'Prisma reto regular triangular ABCTQP com aresta da base AC = 12 cm e segmento espacial BM = 20 cm', caption: 'Prisma reto regular de bases triangulares.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a soma das áreas das bases do prisma, indicadas em azul na figura.',
        expected: `As bases são dois triângulos equiláteros congruentes de lado $L = 12\text{ cm}$.
Área de uma base: $S = \frac{L^2\sqrt{3}}{4} = \frac{12^2\sqrt{3}}{4} = \frac{144\sqrt{3}}{4} = 36\sqrt{3}\text{ cm}^2$.
Soma das áreas das duas bases:
$2 \times 36\sqrt{3} = 72\sqrt{3}\text{ cm}^2$ (ou $12\sqrt{108}\text{ cm}^2$).`,
        expectedImages: [{ file: 'p2-q20-solucao-triangulo.svg', alt: 'Gabarito Oficial VUNESP: Triângulo equilátero da base e cálculo da área', caption: 'Área da base do prisma triangular regular.' }],
        criteria: [
          { points: 2, text: 'Calcula a soma das áreas das duas bases: 72√3 cm² (1 ponto se calculou uma base ou errou no cálculo final).' },
        ],
        detailed: `a) Por ser um prisma regular reto de bases triangulares, suas bases inferior ($ABC$) e superior ($TQP$) são triângulos equiláteros congruentes de lado $L = AC = 12\text{ cm}$.
A área de um triângulo equilátero de lado $L$ é dada por:
$$S_{\text{base}} = \frac{L^2\sqrt{3}}{4} = \frac{12^2\sqrt{3}}{4} = \frac{144\sqrt{3}}{4} = 36\sqrt{3}\text{ cm}^2$$
A soma das áreas das duas bases (inferior e superior) é:
$$S_{\text{total bases}} = 2 \cdot S_{\text{base}} = 2 \times 36\sqrt{3} = 72\sqrt{3}\text{ cm}^2$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule a área lateral do prisma.',
        expected: `Seja $N$ a projeção ortogonal de $M$ sobre a base inferior $ABC$. Como $M$ é ponto médio de $TQ$, $N$ é o ponto médio de $AB$.
O segmento $MN$ é perpendicular ao plano da base e mede a altura $h$ do prisma: $MN = h$.
No triângulo equilátero da base inferior ($ABC$), a mediana/altura $BN$ relativa ao vértice $B$ mede:
$BN = \frac{L\sqrt{3}}{2} = \frac{12\sqrt{3}}{2} = 6\sqrt{3}\text{ cm}$.
O triângulo $\Delta BNM$ é retângulo em $N$, com hipotenusa $BM = 20\text{ cm}$.
Pelo Teorema de Pitágoras:
$h^2 + BN^2 = BM^2 \implies h^2 + (6\sqrt{3})^2 = 20^2 \implies h^2 + 108 = 400 \implies h^2 = 292 \implies h = \sqrt{292} = 2\sqrt{73}\text{ cm}$.
O perímetro da base é $2p = 3 \times 12 = 36\text{ cm}$.
Área lateral do prisma:
$A_{\text{lateral}} = 2p \cdot h = 36 \times 2\sqrt{73} = 72\sqrt{73}\text{ cm}^2$ (ou $36\sqrt{292}\text{ cm}^2$).`,
        criteria: [
          { points: 1, text: 'Calcula a altura do prisma h = 2√73 cm (ou √292 cm) com desenvolvimento.' },
          { points: 1, text: 'Calcula a área lateral do prisma: 72√73 cm² (ou 36√292 cm²) com desenvolvimento.' },
        ],
        detailed: `b) As faces laterais de um prisma triangular regular reto são três retângulos congruentes de base $L = 12\text{ cm}$ e altura $h$.
Seja $N$ a projeção ortogonal de $M$ (ponto médio de $TQ$) sobre a base inferior $ABC$, de modo que $N$ é o ponto médio do lado $AB$. O segmento $MN$ é paralelo às arestas laterais verticais, com comprimento $MN = h$.
No triângulo equilátero da base inferior ($ABC$), o segmento $BN$ que une o vértice $B$ ao ponto médio do lado oposto $AC$ (ou $AB$ dependendo da orientação dos vértices) é a altura do triângulo equilátero:
$$BN = \frac{12\sqrt{3}}{2} = 6\sqrt{3}\text{ cm}$$
O triângulo espacial $\Delta BNM$ é retângulo em $N$. Aplicando o Teorema de Pitágoras:
$$h^2 + BN^2 = BM^2 \implies h^2 + (6\sqrt{3})^2 = 20^2$$
$$h^2 + 108 = 400 \implies h^2 = 292 \implies h = \sqrt{292} = 2\sqrt{73}\text{ cm}$$
O perímetro da base triangular é:
$$2p = 3 \times 12 = 36\text{ cm}$$
A área lateral do prisma é o produto do perímetro da base pela altura:
$$A_{\text{lateral}} = 2p \cdot h = 36 \times 2\sqrt{73} = 72\sqrt{73}\text{ cm}^2 \approx 615,2\text{ cm}^2$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),
];
