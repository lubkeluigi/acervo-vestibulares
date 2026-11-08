import { createUnifesp } from './unifesp-helpers.js';

const { d, img, tex } = createUnifesp(2022);

export const unifesp2022Discursivas = [
  // ==========================================
  // BIOLOGIA (QUESTÕES 01 A 05)
  // ==========================================
  d({
    n: 1,
    subject: 'Biologia',
    content: 'Filariose linfática: ciclo biológico, hospedeiros e mutualismo com Wolbachia',
    difficulty: 'Média',
    statement: `Em 1866, o médico Otto Edward Henry Wucherer (1820-1873), nascido em Portugal e formado na Alemanha, descobriu, na Bahia, larvas de um nematódeo na urina de uma paciente com os mesmos sintomas descritos em relatos de autores europeus. Esse nematódeo, conhecido como Wuchereria bancrofti, é o agente etiológico da filariose linfática (elefantíase).

As formas adultas de Wuchereria bancrofti abrigam no seu interior bactérias Wolbachia, que têm um papel essencial na reprodução e sobrevivência do verme. Por esse motivo, o uso de antibióticos, como a doxiciclina, vem sendo adotado no tratamento da doença.`,
    parts: [
      {
        id: 'a',
        prompt: 'Identifique o hospedeiro definitivo de Wuchereria bancrofti e descreva como essa doença é transmitida para esse hospedeiro.',
        expected: `1) Hospedeiro definitivo: ser humano (homem).\n2) Transmissão: ocorre por meio da picada de mosquitos fêmeas do gênero Culex (como Culex quinquefasciatus), que inoculam as larvas infectantes (L3) na corrente sanguínea ou nos tecidos do hospedeiro.`,
        accepted: `Mosquitos dos gêneros Culex, Aedes, Anopheles, mosquito prego, pernilongo ou muriçoca.`,
        criteria: [
          { points: 1, text: 'Identifica o hospedeiro definitivo: ser humano / homem.' },
          { points: 1, text: 'Descreve a transmissão por meio da picada do mosquito do gênero Culex (ou Aedes, Anopheles, muriçoca).' },
        ],
        detailed: `a) O hospedeiro definitivo da filariose é o ser humano, pois nele o parasito atinge a maturidade sexual e realiza a reprodução sexuada no interior dos vasos linfáticos.
A transmissão para o homem ocorre pela picada das fêmeas do mosquito hematófago do gênero Culex (como Culex quinquefasciatus, popularmente conhecido como pernilongo ou muriçoca). Ao picar uma pessoa infectada, o inseto ingere microfilárias que se desenvolvem em seu organismo até a forma de larvas infectantes (L3); ao picar um novo hospedeiro humano, o vetor deposita as larvas na pele, as quais penetram pelo ferimento e migram para o sistema linfático.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Qual a relação ecológica existente entre o verme Wuchereria bancrofti e a bactéria Wolbachia? Explique por que o tratamento com doxiciclina pode curar a doença ou reduzir a quantidade de parasitas no organismo do hospedeiro.',
        expected: `1) Relação ecológica: mutualismo (relação mutualística ou endossimbiose obrigatória).\n2) Ação da doxiciclina: O antibiótico mata as bactérias endossimbióticas Wolbachia, que são indispensáveis para a sobrevivência, desenvolvimento e fertilidade reprodutiva do parasito, levando o nematódeo à esterilidade ou à morte e reduzindo a carga parasitária no hospedeiro.`,
        criteria: [
          { points: 1, text: 'Identifica a relação ecológica: mutualismo / relação mutualística (ou endossimbiose).' },
          { points: 1, text: 'Explica o tratamento: os antibióticos eliminam as bactérias endossimbióticas, essenciais para a sobrevivência e reprodução do parasito.' },
        ],
        detailed: `b) A relação ecológica entre o nematódeo Wuchereria bancrofti e a bactéria intracelular Wolbachia é de mutualismo (endossimbiose mutualística obrigatória), na qual ambas as espécies se beneficiam mutuamente e a sobrevivência do verme depende estritamente das bactérias.
A doxiciclina é um antibiótico da classe das tetraciclinas que inibe a síntese de proteínas nas bactérias Wolbachia, levando-as à morte. Como essas bactérias fornecem moléculas e vias metabólicas vitais para a embriogênese, a muda larval e a integridade celular do verme, a eliminação da microbiota simbiótica debilita gravemente as filárias adultas, bloqueia sua reprodução e impede a maturação de novas microfilárias, promovendo a cura da infecção ou a redução drástica da carga parasitária.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 2,
    subject: 'Biologia',
    content: 'Fisiologia digestiva: enzimas digestivas, lactase, sacarase e amilase',
    difficulty: 'Média',
    statement: `Um experimento analisou a variação na concentração das enzimas digestivas em suínos saudáveis, desde o nascimento até a fase adulta. As variações observadas ao longo do tempo foram expressas nos gráficos 1, 2 e 3.

(L. S. Jensen. Swine nutrition, 2001. Adaptado.)`,
    visuals: [{ file: 'p2-q02-graficos-enzimas.svg', alt: 'Gráficos 1, 2 e 3 da concentração de enzimas digestivas em suínos ao longo do tempo', caption: 'Jensen, L. S. Swine nutrition, 2001.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Qual gráfico representa a variação na concentração da enzima lactase ao longo do desenvolvimento dos suínos? Justifique sua resposta.',
        expected: `1) Gráfico: Gráfico 3.\n2) Justificativa: Porque após o período de desmame, os animais deixam de se alimentar de leite materno (cuja principal fonte de carboidrato é a lactose), ocorrendo uma redução progressiva e acentuada na produção da enzima lactase.`,
        criteria: [
          { points: 1, text: 'Identifica o Gráfico 3.' },
          { points: 1, text: 'Justifica: os animais deixam de se alimentar de leite (que contém lactose), reduzindo a taxa de lactase após o desmame.' },
        ],
        detailed: `a) O gráfico 3 representa a variação na concentração da lactase. Durante a fase de aleitamento (nas primeiras semanas após o nascimento), os filhotes ingerem exclusivamente leite materno, que é rico no dissacarídeo lactose; dessa forma, a atividade da enzima lactase atinge o pico nessa fase. Após o desmame, a dieta passa a ser baseada em rações vegetais ricas em amido e sacarose, cessando o consumo de leite e levando a uma queda acentuada na produção de lactase, exatamente como ilustrado na curva decrescente do Gráfico 3.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Em qual órgão do sistema digestório atua a sacarase? Quais produtos resultam da ação catalítica da enzima amilase?',
        expected: `1) Órgão de atuação da sacarase: intestino delgado (duodeno / jejuno).\n2) Produtos da ação catalítica da amilase: maltose (e maltotriose / dextrinas; a glicose também foi aceita se associada à digestão contínua).`,
        accepted: `Intestino delgado, duodeno, jejuno, íleo; maltose, isomaltose, oligossacarídeos, dextrinas, glicose.`,
        criteria: [
          { points: 1, text: 'Indica o intestino delgado (ou duodeno / jejuno).' },
          { points: 1, text: 'Cita os produtos da ação da amilase: maltose (ou maltose e dextrinas / glicose).' },
        ],
        detailed: `b) A enzima sacarase (dissacaridase) atua no intestino delgado, especificamente na borda em escova das células epiteliais (enterócitos) da mucosa intestinal (duodeno e jejuno), catalisando a hidrólise da sacarose em glicose e frutose.
A enzima amilase (tanto a salivar/ptialina quanto a pancreática) hidrolisa as ligações glicosídicas $\\alpha\\text{-(1}\\to\\text{4)}$ do polissacarídeo amido, quebrando-o em frações menores, principalmente no dissacarídeo maltose, além de oligossacarídeos como maltotriose e dextrinas-limite.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 3,
    subject: 'Biologia',
    content: 'Gametogênese humana: meiose, não disjunção cromossômica e síndrome de Down',
    difficulty: 'Média',
    statement: `Na fertilização in vitro, o procedimento mais comum é o ovócito II ser colocado em contato com os espermatozoides em meio de cultura adequado para que ocorra a fecundação. A fertilização também pode ocorrer por meio da injeção intracitoplasmática de espermatozoides (ICSI), procedimento em que um espermatozoide é selecionado e injetado diretamente no ovócito II. A figura representa uma análise cromossômica de células envolvidas na gametogênese humana, mostrando uma não disjunção meiótica responsável por gerar um zigoto com síndrome de Down (trissomia do cromossomo 21).`,
    visuals: [{ file: 'p2-q03-ovocito-espermatocito.svg', alt: 'Esquema de meiose em ovócito II e espermatócito mostrando não disjunção cromossômica do cromossomo 21', caption: 'Esquema meiótico de fertilização in vitro e trissomia do 21.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Em qual órgão do sistema genital masculino ocorre o processo meiótico que origina os espermatozoides? Em qual fase meiótica ocorreu a falha na separação dos cromossomos representada na figura?',
        expected: `1) Órgão do sistema genital masculino: testículos (especificamente nos túbulos seminíferos).\n2) Fase meiótica da falha: anáfase I (primeira divisão da meiose, decorrente da não disjunção dos cromossomos homólogos do par 21).`,
        criteria: [
          { points: 1, text: 'Identifica os testículos (ou túbulos seminíferos).' },
          { points: 1, text: 'Identifica a anáfase I da meiose.' },
        ],
        detailed: `a) O processo de espermatogênese ocorre no interior dos testículos, especificamente nos túbulos seminíferos.
A falha meiótica ilustrada na figura ocorreu durante a anáfase I da meiose masculina. Nessa etapa, deveria ocorrer a segregação e migração dos cromossomos homólogos duplicados do par 21 para polos opostos da célula; a ausência dessa separação (não disjunção meiótica) fez com que ambos os homólogos migrassem juntos para o mesmo polo, originando espermatócitos secundários com um cromossomo 21 extra ($n+1$) e outros sem nenhum cromossomo 21 ($n-1$).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'No momento em que o ovócito II é colocado em contato com os espermatozoides, seus cromossomos estão simples ou duplicados? Em qual fase da meiose o ovócito II é bloqueado antes da fecundação?',
        expected: `1) Estado dos cromossomos: cromossomos duplicados (constituídos por duas cromátides-irmãs unidas pelo centrômero).\n2) Fase meiótica de bloqueio: metáfase II (metáfase da segunda divisão meiótica).`,
        accepted: `Cromossomos com duas cromátides, duas moléculas/fitas de DNA duplicadas.`,
        criteria: [
          { points: 1, text: 'Indica cromossomos duplicados (duas cromátides).' },
          { points: 1, text: 'Identifica a metáfase II.' },
        ],
        detailed: `b) No momento em que o ovócito II é colocado em contato com os espermatozoides, seus cromossomos encontram-se duplicados, sendo cada cromossomo formado por duas cromátides-irmãs idênticas unidas pela região centromérica.
Na ovogênese humana, o ovócito II é liberado na ovulação e permanece estagnado (bloqueado) em metáfase II da meiose. A continuidade da divisão e a separação das cromátides-irmãs (anáfase II), com a expulsão do segundo glóbulo polar, só ocorrem caso haja o estímulo bioquímico da fecundação pelo espermatozoide.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 4,
    subject: 'Biologia',
    content: 'Genética clássica: Segunda Lei de Mendel, proporções fenotípicas e Linkage',
    difficulty: 'Difícil',
    statement: `Determinada espécie vegetal apresenta dois pares de genes, dos quais o alelo A determina a formação de frutos redondos e o alelo a, frutos alongados. O alelo B determina a formação de frutos vermelhos e o alelo b, frutos brancos. Uma planta duplamente heterozigótica foi cruzada com uma planta de frutos alongados e brancos. A descendência desse cruzamento foi composta por:
1/4 de plantas com frutos redondos e vermelhos,
1/4 de plantas com frutos redondos e brancos,
1/4 de plantas com frutos alongados e vermelhos e
1/4 de plantas com frutos alongados e brancos.`,
    parts: [
      {
        id: 'a',
        prompt: 'Qual o genótipo da planta descendente que produziu frutos redondos e brancos? De acordo com os dados do texto, com qual lei de Mendel as proporções fenotípicas estão relacionadas?',
        expected: `1) Genótipo da planta descendente de frutos redondos e brancos: Aabb.\n2) Lei de Mendel: Segunda Lei de Mendel (Lei da segregação independente dos fatores/alelos).`,
        accepted: `Lei da segregação independente, Segunda Lei de Mendel.`,
        rejected: `Apenas "Lei de Mendel" ou "Primeira Lei".`,
        criteria: [
          { points: 1, text: 'Determina o genótipo Aabb.' },
          { points: 1, text: 'Identifica a Segunda Lei de Mendel / Lei da segregação independente.' },
        ],
        detailed: `a) O cruzamento descrito foi realizado entre uma planta di-híbrida ($AaBb$) e uma planta duplo-recessiva ($aabb$).
Pela Segunda Lei de Mendel (Lei da Segregação Independente), os pares de alelos localizam-se em cromossomos homólogos distintos e segregam de maneira independente durante a meiose. Assim, o parental $AaBb$ produz quatro tipos de gametas em frequências idênticas ($25\\% AB$, $25\\% Ab$, $25\\% aB$, $25\\% ab$), enquanto o parental $aabb$ produz exclusivamente gametas $ab$.
A descendência com frutos redondos ($A\\_$) e brancos ($bb$) resulta da união do gameta $Ab$ com o gameta $ab$, possuindo o genótipo Aabb. A obtenção de 4 classes fenotípicas na proporção $1:1:1:1$ (ou $1/4$ para cada) comprova a segregação independente de Mendel.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Caso os dois alelos dominantes estivessem em um mesmo cromossomo e os alelos recessivos estivessem no cromossomo homólogo, e não ocorresse permutação, qual seria o resultado fenotípico esperado na descendência das plantas utilizadas no cruzamento? Caso tivesse ocorrido uma permutação, que resultados fenotípicos observados na descendência poderiam evidenciar tal fenômeno?',
        expected: `1) Sem permutação (linkage total em cis): 50% de plantas com frutos redondos e vermelhos e 50% com frutos alongados e brancos (proporção fenotípica 1:1 dos fenótipos parentais).\n2) Com permutação (crossing-over): Surgimento de indivíduos com fenótipos recombinantes (frutos redondos e brancos; e frutos alongados e vermelhos) em proporções menores do que os indivíduos apresentando fenótipos parentais, alterando a proporção de 1:1 e gerando os quatro fenótipos em proporções desiguais.`,
        accepted: `Metade redondos-vermelhos e metade alongados-brancos; presença dos 4 fenótipos em proporções diferentes de 1:1:1:1 com parentais em maior proporção que os recombinantes.`,
        criteria: [
          { points: 1, text: 'Determina o resultado sem permutação: 50% redondos e vermelhos e 50% alongados e brancos (proporção 1:1).' },
          { points: 1, text: 'Determina o resultado com permutação: surgimento de fenótipos recombinantes em menor proporção que os parentais.' },
        ],
        detailed: `b) Caso os dois genes estivessem ligados no mesmo par de cromossomos em configuração cis ($AB/ab$) no parental heterozigoto:
1) Na ausência de permutação (crossing-over): O di-híbrido formaria apenas dois tipos de gametas parentais ($50\\% AB$ e $50\\% ab$). Ao cruzar com a planta duplo-recessiva ($ab/ab$), os descendentes seriam unicamente $50\\% AB/ab$ (frutos redondos e vermelhos) e $50\\% ab/ab$ (frutos alongados e brancos), isto é, proporção fenotípica 1:1, sem nenhuma planta de fruto redondo e branco ou alongado e vermelho.
2) Ocorrendo permutação: A quebra e recombinação entre as cromátides homólogas na prófase I da meiose permitiria a formação dos gametas recombinantes $Ab$ e $aB$. A evidência desse fenômeno na descendência seria o reaparecimento dos 4 fenótipos do enunciado, porém em proporções desiguais (diferentes de $1:1:1:1$), com os fenótipos recombinantes (redondos-brancos e alongados-vermelhos) surgindo em frequências reduzidas ($< 25\\%$ cada) e os fenótipos parentais (redondos-vermelhos e alongados-brancos) predominando na população ($> 25\\%$ cada).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 5,
    subject: 'Biologia',
    content: 'Fisiologia vegetal: compostos voláteis (VOCs), taninos e interação genótipo-ambiente',
    difficulty: 'Média',
    statement: `Um experimento foi realizado para verificar se as plantas podem comunicar-se por meio de substâncias voláteis. Foram utilizadas plantas da mesma espécie, das quais três tiveram duas folhas danificadas, simulando uma ação de herbívoros, enquanto as demais plantas ficaram intactas. As plantas com as folhas danificadas ficaram em uma câmara próxima das plantas que estavam intactas. Em outra câmara ficaram outras plantas, que constituíram o grupo de controle, ao lado de uma câmara vazia. O gráfico ilustra a produção de taninos, substâncias de proteção contra os herbívoros, encontrada nas folhas das plantas analisadas.

(James Morris et al. Biology: how life works, 2013. Adaptado.)`,
    visuals: [{ file: 'p2-q05-grafico-tanino.svg', alt: 'Gráfico da produção de tanino em folhas de plantas intactas nos grupos controle e experimental', caption: 'Morris, J. et al. Biology: how life works, 2013.' }],
    parts: [
      {
        id: 'a',
        prompt: 'De acordo com os dados representados no gráfico, os resultados obtidos referendam ou refutam a hipótese testada no experimento? Justifique sua resposta, de acordo com uma informação apresentada no gráfico.',
        expected: `1) Conclusão: Referendam a hipótese testada (confirmam / corroboram / ratificam).\n2) Justificativa: O gráfico demonstra que as plantas intactas do grupo experimental produziram uma quantidade expressivamente maior de tanino (cerca de 2,5% em massa) em comparação com as plantas do grupo controle (cerca de 1,8%), evidenciando que foram estimuladas pelas substâncias químicas voláteis liberadas pelas plantas danificadas vizinhas.`,
        accepted: `Afirmam, confirmam, comprovam, corroboram, atestam, ratificam.`,
        rejected: `Refutam.`,
        criteria: [
          { points: 1, text: 'Afirma que os resultados referendam (confirmam / corroboram) a hipótese.' },
          { points: 1, text: 'Justifica comparando a maior produção de tanino no grupo experimental em relação ao grupo controle.' },
        ],
        detailed: `a) Os resultados obtidos referendam a hipótese testada de que as plantas se comunicam por meio de substâncias químicas voláteis transportadas pelo ar.
Pela análise do gráfico, constata-se que as plantas intactas do grupo controle apresentaram teores basais de tanino de aproximadamente $1,8\\%$ (em equivalente de ácido tânico por grama de folha seca). Por outro lado, as plantas intactas do grupo experimental, cuja câmara esteve conectada ao fluxo de ar das plantas mecanicamente lesadas, elevaram sua produção de taninos para cerca de $2,5\\%$. Essa elevação estatisticamente expressiva de cerca de $40\\%$ comprova que os compostos voláteis emitidos pelas folhas danificadas atuaram como mensageiros químicos no ar, induzindo respostas defensivas nas plantas vizinhas intactas.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Explique se a quantidade de tanino produzido pelas folhas dessas plantas é determinada pelo ambiente, pela constituição genética da planta ou por ambos os fatores.',
        expected: `1) Conclusão: A quantidade de tanino é determinada por ambos os fatores.\n2) Explicação: A capacidade metabólica de sintetizar taninos e a estrutura das enzimas da via são codificadas no genoma da planta (fator genético), porém a quantidade e o ritmo de produção são modulados em resposta a estímulos e estresses do meio, como danos por herbivoria ou sinais químicos voláteis de alerta (fator ambiental).`,
        criteria: [
          { points: 1, text: 'Indica que ambos os fatores determinam a quantidade de tanino.' },
          { points: 1, text: 'Explica a interação gênica e ambiental na síntese e regulação dos taninos.' },
        ],
        detailed: `b) A quantidade de taninos produzida pelas folhas é determinada por ambos os fatores, refletindo a interação clássica entre genótipo e ambiente na determinação do fenótipo ($Fenótipo = Genótipo + Ambiente$).
A capacidade bioquímica de produzir taninos é geneticamente determinada, pois as enzimas necessárias para a síntese dessas macromoléculas fenólicas (como as da via dos fenilpropanoides) estão codificadas no DNA da espécie vegetal. Contudo, a regulação da expressão desses genes é plástica e induzível: estímulos ambientais externos (como estresse biótico, ataque por insetos herbívoros ou detecção de voláteis no ar) ativam cascatas de sinalização hormonal (como as do ácido jasmônico) que amplificam a taxa de transcrição e a produção foliar de taninos.`,
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
    content: 'Classificação de materiais: substância pura, mistura, ebulioscopia e condutibilidade elétrica',
    difficulty: 'Fácil',
    statement: `Considere os seguintes materiais líquidos: etanol anidro, etanol hidratado a 70% em massa e salmoura concentrada (cloreto de sódio dissolvido em água).`,
    parts: [
      {
        id: 'a',
        prompt: 'Qual desses materiais pode ser classificado como substância pura? Qual das duas soluções aquosas tem a menor temperatura de início de ebulição, à mesma pressão?',
        expected: `1) Substância pura: etanol anidro.\n2) Solução aquosa com menor temperatura de início de ebulição: etanol hidratado a 70% em massa (ferve a cerca de 78 °C a 80 °C, enquanto a salmoura concentrada tem temperatura de ebulição superior a 100 °C devido ao efeito ebulioscópico do soluto não volátil NaCl).`,
        accepted: `Etanol hidratado a 70% em massa (também aceito etanol anidro).`,
        criteria: [
          { points: 1, text: 'Identifica o etanol anidro como substância pura.' },
          { points: 1, text: 'Identifica o etanol hidratado a 70% em massa como a solução de menor temperatura de início de ebulição.' },
        ],
        detailed: `a) O etanol anidro é o único material que pode ser classificado como substância pura, pois é constituído unicamente por moléculas de etanol ($C_2H_5OH$), sem adição de solvente. Os outros dois materiais são misturas homogêneas (soluções aquosas).
Entre as duas soluções aquosas, o etanol hidratado a 70% tem a menor temperatura de início de ebulição (em torno de $78^\\circ\\text{C}$ a $80^\\circ\\text{C}$). O etanol possui ponto de ebulição puro de $78,3^\\circ\\text{C}$ e volatilidade muito superior à da água; por outro lado, a salmoura concentrada é uma solução aquosa contendo cloreto de sódio, um soluto não volátil que provoca elevação ebulioscópica na água, fazendo com que sua ebulição se inicie acima de $100^\\circ\\text{C}$.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Três fitas de papel de filtro foram embebidas, cada uma, com um desses materiais e inseridas individualmente em um circuito elétrico simples, contendo uma lâmpada e uma pilha. A fita embebida com qual dos materiais permitirá que a lâmpada acenda com maior brilho? Justifique sua resposta.',
        expected: `1) Material que permite maior brilho: fita embebida com a salmoura concentrada.\n2) Justificativa: A salmoura concentrada é uma solução eletrolítica que contém grande quantidade de íons livres móveis ($Na^+$ e $Cl^-$) resultantes da dissociação iônica do cloreto de sódio em água, permitindo a passagem de corrente elétrica pelo circuito com baixa resistência, enquanto o etanol é um composto molecular não ionizável.`,
        criteria: [
          { points: 1, text: 'Identifica a fita embebida com salmoura concentrada.' },
          { points: 1, text: 'Justifica pela presença de íons livres móveis (dissociação do NaCl gerando solução eletrolítica condutora).' },
        ],
        detailed: `b) A lâmpada acenderá com maior brilho na fita embebida com a salmoura concentrada.
O cloreto de sódio ($NaCl$) é um composto iônico sólido que, quando dissolvido em água, sofre dissociação total em cátions sódio ($Na^+$) e ânions cloreto ($Cl^-$) hidratados. A alta concentração de íons dotados de liberdade de movimento confere à solução elevada condutibilidade elétrica (solução eletrolítica forte), fechando o circuito com baixa resistência e permitindo maior fluxo de corrente. Em contrapartida, tanto o etanol anidro quanto o etanol hidratado são compostos orgânicos moleculares que se dissolvem sem sofrer ionização ou dissociação, de modo que suas soluções praticamente não conduzem corrente elétrica.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 7,
    subject: 'Química',
    content: 'Processo Ostwald: síntese do ácido nítrico, oxirredução, Nox e equação global',
    difficulty: 'Média',
    statement: `O ácido nítrico ($HNO_3$) é um dos produtos mais importantes da indústria química, por ser matéria-prima para a fabricação de fertilizantes e explosivos. Ele é produzido industrialmente pelo processo Ostwald, que envolve três etapas reacionais:

Etapa 1: $4\\,NH_3(g) + 5\\,O_2(g) \\rightarrow 4\\,NO(g) + 6\\,H_2O(g)$
Etapa 2: $2\\,NO(g) + O_2(g) \\rightarrow 2\\,NO_2(g)$
Etapa 3: $3\\,NO_2(g) + H_2O(l) \\rightarrow 2\\,HNO_3(aq) + NO(g)$`,
    parts: [
      {
        id: 'a',
        prompt: 'Qual das substâncias reagentes da Etapa 1 atua como agente redutor? Qual foi a variação do número de oxidação (Nox) do nitrogênio ao longo de todo o processo industrial, considerando a transformação do reagente nitrogenado da Etapa 1 no produto da Etapa 3?',
        expected: `1) Agente redutor da Etapa 1: amônia ($NH_3$).\n2) Variação do Nox do nitrogênio: O Nox do nitrogênio variou de -3 (no $NH_3$) para +5 (no $HNO_3$), correspondendo a uma variação $\\Delta\\text{Nox} = 8$ (ou variação de -3 para +2 considerando a etapa 1).`,
        criteria: [
          { points: 1, text: 'Identifica o NH3 (amônia) como agente redutor.' },
          { points: 1, text: 'Determina a variação do Nox do nitrogênio de -3 para +5 (ou ΔNox = 8).' },
        ],
        detailed: `a) Na Etapa 1, o nitrogênio na amônia ($NH_3$) possui número de oxidação $-3$ e se oxida para $+2$ no monóxido de nitrogênio ($NO$). Como o $NH_3$ sofre oxidação e provoca a redução do oxigênio ($O_2$, cujo Nox passa de $0$ para $-2$), ele atua como agente redutor.
Considerando a transformação global do reagente de partida ($NH_3$) no produto final ($HNO_3$):
- No $NH_3$: $\\text{Nox}(N) + 3(+1) = 0 \\implies \\text{Nox}(N) = -3$.
- No $HNO_3$: $+1 + \\text{Nox}(N) + 3(-2) = 0 \\implies \\text{Nox}(N) = +5$.
Portanto, o número de oxidação do nitrogênio variou de $-3$ para $+5$, representando um aumento de $8$ unidades ($\\Delta\\text{Nox} = 8$).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Escreva a equação química global da produção de ácido nítrico pelo processo Ostwald, considerando que o NO(g) gerado na Etapa 3 é reciclado e reinserido na Etapa 2.',
        expected: `Equação química global balanceada:\n$NH_3(g) + 2\\,O_2(g) \\rightarrow HNO_3(aq) + H_2O(l)$\n(ou $4\\,NH_3 + 8\\,O_2 \\rightarrow 4\\,HNO_3 + 4\\,H_2O$).`,
        criteria: [
          { points: 2, text: 'Apresenta a equação química global balanceada corretamente: NH3 + 2 O2 -> HNO3 + H2O.' },
        ],
        detailed: `b) Para obter a equação global com o cancelamento dos intermediários $NO(g)$ e $NO_2(g)$, ajustamos os coeficientes das reações:
Multiplicamos a Etapa 2 por 3 e a Etapa 3 por 2:
1) $4\\,NH_3(g) + 5\\,O_2(g) \\rightarrow 4\\,NO(g) + 6\\,H_2O(g)$
2) $6\\,NO(g) + 3\\,O_2(g) \\rightarrow 6\\,NO_2(g)$
3) $6\\,NO_2(g) + 2\\,H_2O(l) \\rightarrow 4\\,HNO_3(aq) + 2\\,NO(g)$

Somando membro a membro:
Reagentes: $4\\,NH_3 + 5\\,O_2 + 6\\,NO + 3\\,O_2 + 6\\,NO_2 + 2\\,H_2O$
Produtos: $4\\,NO + 6\\,H_2O + 6\\,NO_2 + 4\\,HNO_3 + 2\\,NO$

Cancelando $6\\,NO$ e $6\\,NO_2$ de ambos os lados e subtraindo a água:
$$4\\,NH_3(g) + 8\\,O_2(g) \\rightarrow 4\\,HNO_3(aq) + 4\\,H_2O(l)$$
Dividindo todos os coeficientes por 4 para expressar na proporção estequiométrica mínima:
$$NH_3(g) + 2\\,O_2(g) \\rightarrow HNO_3(aq) + H_2O(l)$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 8,
    subject: 'Química',
    content: 'Equilíbrio químico em solução, indicadores de pH e geometria/polaridade molecular',
    difficulty: 'Média',
    statement: `Analise a imagem.

Intervalo de pH em que há a mudança de cor do azul de bromotimol (6,0 – 7,6)
(http://qnint.sbq.org.br)

Em três frascos rotulados de 1 a 3, contendo, cada um, água destilada e solução do indicador azul de bromotimol, foram borbulhados, não necessariamente nessa ordem, os gases dióxido de carbono, metano e amônia, um em cada frasco. Os resultados estão ilustrados a seguir.`,
    visuals: [
      { file: 'p2-q08-escala-bromotimol.svg', alt: 'Escala de cor do indicador azul de bromotimol em função do pH', caption: 'Faixa de transição do azul de bromotimol (pH 6,0 a 7,6).' },
      { file: 'p2-q08-frascos-experimento.svg', alt: 'Três frascos com solução de azul de bromotimol: frasco 1 azul, frasco 2 verde, frasco 3 amarelo', caption: 'Colorações obtidas após borbulhamento dos gases.' },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Identifique o gás que foi borbulhado em cada um dos frascos, 1, 2 e 3.',
        expected: `Frasco 1: amônia ($NH_3$).\nFrasco 2: metano ($CH_4$).\nFrasco 3: dióxido de carbono ($CO_2$).`,
        criteria: [
          { points: 2, text: 'Identifica corretamente os três gases: Frasco 1 amônia, Frasco 2 metano, Frasco 3 dióxido de carbono (1 ponto para uma associação correta).' },
        ],
        detailed: `a) O azul de bromotimol apresenta coloração amarela em meio ácido ($pH < 6,0$), verde na faixa de viragem próxima à neutralidade ($6,0 \\le pH \\le 7,6$) e azul em meio alcalino ($pH > 7,6$).
- Frasco 1 (azul, pH > 7,6): amônia ($NH_3$). Trata-se de uma base de Arrhenius/Brønsted-Lowry que se ioniza na água gerando hidroxilas:
$$NH_3(g) + H_2O(l) \\rightleftharpoons NH_4^+(aq) + OH^-(aq)$$
- Frasco 2 (verde, pH neutro): metano ($CH_4$). O metano é um hidrocarboneto apolar praticamente insolúvel que não reage com a água nem altera seu pH neutro.
- Frasco 3 (amarelo, pH < 6,0): dióxido de carbono ($CO_2$). O gás carbônico é um óxido ácido que se dissolve e reage com a água, formando ácido carbônico que se ioniza liberando íons $H^+$:
$$CO_2(g) + H_2O(l) \\rightleftharpoons H_2CO_3(aq) \\rightleftharpoons H^+(aq) + HCO_3^-(aq)$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Escreva a fórmula estrutural do gás borbulhado cujas moléculas apresentam geometria linear. Identifique qual dos três gases é constituído por moléculas polares.',
        expected: `1) Fórmula estrutural linear: $O=C=O$ (dióxido de carbono).\n2) Gás polar: amônia ($NH_3$).`,
        criteria: [
          { points: 1, text: 'Apresenta a fórmula estrutural linear O=C=O.' },
          { points: 1, text: 'Identifica a amônia (NH3) como substância constituída por moléculas polares.' },
        ],
        detailed: `b) O gás cujas moléculas apresentam geometria linear é o dióxido de carbono ($CO_2$). Seu átomo central de carbono realiza duas ligações duplas com os oxigênios ($sp$) e não possui pares de elétrons livres, adotando geometria linear:
$$O=C=O$$
O único gás constituído por moléculas polares é a amônia ($NH_3$). O átomo de nitrogênio apresenta hibridização $sp^3$ com três ligações simples $N-H$ e um par de elétrons não ligante no topo, conferindo geometria piramidal trigonal. A assimetria da molécula e a grande diferença de eletronegatividade entre nitrogênio e hidrogênio resultam em um momento dipolar resultante diferente de zero ($\\vec{\\mu} \\neq \\vec{0}$). O $CO_2$ (linear) e o $CH_4$ (tetraédrico) são ambos apolares por simetria de carga.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 9,
    subject: 'Química',
    content: 'Soluções aquosas: concentração comum, molalidade, ligações de hidrogênio e condutibilidade',
    difficulty: 'Média',
    statement: `Analise o quadro que fornece informações sobre a sacarose, o açúcar de cana.

Fórmula estrutural: $C_{12}H_{22}O_{11}$ (dissacarídeo)
Massa molar: 342 g/mol
Solubilidade em água a 20 °C: $\\approx 2,0\\text{ g de sacarose/mL de água}$
Condutibilidade elétrica das soluções aquosas: muito baixa, praticamente igual à da água pura`,
    tables: [{
      ariaLabel: 'Propriedades físico-químicas da sacarose',
      headerRows: [['Propriedade', 'Valor / Descrição']],
      rows: [
        ['Fórmula molecular', 'C₁₂H₂₂O₁₁'],
        ['Massa molar', '342 g/mol'],
        ['Solubilidade em água a 20 °C', '≈ 2,0 g de sacarose/mL de água'],
        ['Condutibilidade elétrica da solução aquosa', 'Muito baixa, praticamente igual à da água pura'],
      ],
    }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a concentração de uma solução aquosa saturada de sacarose a 20 °C, em g/L de solvente e em mol/kg de solvente.',
        expected: `1) Concentração em g/L de solvente:\n$C = 2,0\\text{ g/mL} \\times 1\\,000\\text{ mL/L} = 2\\,000\\text{ g/L}$ de água.\n\n2) Concentração em mol/kg de solvente (molalidade):\nConsiderando a densidade da água $1,0\\text{ g/mL}$, $1\\text{ L}$ de água equivale a $1\\text{ kg}$ de água.\n$W = \\frac{2\\,000\\text{ g de sacarose}}{1\\text{ kg de água}} \\times \\frac{1\\text{ mol}}{342\\text{ g}} = \\frac{2\\,000}{342} \\approx 5,8\\text{ mol/kg}$ de água (aceitos valores entre 5,8 e 6,0).`,
        criteria: [
          { points: 1, text: 'Calcula a concentração de 2 000 g/L de solvente com desenvolvimento.' },
          { points: 1, text: 'Calcula a concentração molal de 5,8 mol/kg de solvente (5,85 ou 5,8) com desenvolvimento.' },
        ],
        detailed: `a) Dados do enunciado: a 20 °C dissolvem-se $2,0\\text{ g}$ de sacarose em $1,0\\text{ mL}$ de água.
Adotando a densidade da água pura como $\\rho_{\\text{H}_2\\text{O}} = 1,0\\text{ g/mL} = 1,0\\text{ kg/L}$:

1) Concentração em $\\text{g/L de solvente}$:
$$C = \\frac{2,0\\text{ g de sacarose}}{1,0\\text{ mL de água}} \\times \\frac{1\\,000\\text{ mL}}{1\\text{ L}} = 2\\,000\\text{ g/L de solvente}$$

2) Concentração em $\\text{mol/kg de solvente}$ (molalidade, $W$):
Em $1\\text{ L}$ ($1\\text{ kg}$) de água há $2\\,000\\text{ g}$ de sacarose. Como a massa molar da sacarose é $M = 342\\text{ g/mol}$, o número de mols é:
$$n = \\frac{m}{M} = \\frac{2\\,000\\text{ g}}{342\\text{ g/mol}} \\approx 5,848\\text{ mol}$$
Como a massa de solvente é $m_{\\text{solvente}} = 1,0\\text{ kg}$:
$$W = \\frac{n}{m_{\\text{solvente}}} = \\frac{5,848\\text{ mol}}{1,0\\text{ kg}} \\approx 5,85\\text{ mol/kg de água (ou } 5,8\\text{ mol/kg)}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Justifique a alta solubilidade da sacarose em água e a baixa condutibilidade elétrica de suas soluções aquosas.',
        expected: `1) Alta solubilidade: decorre da presença de inúmeros grupos hidroxila (–OH) na estrutura da sacarose, que estabelecem fortes e extensas ligações de hidrogênio (pontes de hidrogênio) com as moléculas polares de água, favorecendo a dissolução.\n2) Baixa condutibilidade: deve-se ao fato de a sacarose ser um composto molecular não ionizável, cuja dissolução ocorre apenas por dispersão e solvatação molecular, sem originar íons livres em solução.`,
        accepted: `Semelhante dissolve semelhante; sacarose possui grupos polares hidrofílicos que interagem com a água.`,
        rejected: `Citar que não há elétrons livres (deve citar íons livres); falar que sacarose é iônica.`,
        criteria: [
          { points: 1, text: 'Justifica a alta solubilidade pela formação de ligações de hidrogênio entre as hidroxilas (-OH) e a água.' },
          { points: 1, text: 'Justifica a baixa condutibilidade pela ausência de íons livres na solução (dissolução molecular sem ionização).' },
        ],
        detailed: `b) A elevada solubilidade da sacarose em água ($2\\,000\\text{ g/L}$) explica-se pela sua estrutura química polihidroxilada: a molécula contém 8 grupos hidroxila ($-OH$) fortemente polares, capazes de formar uma densa rede de ligações de hidrogênio com as moléculas de água ($H-O-H$), gerando elevada energia de solvatação que supera a energia de rede do cristal.
A baixa condutibilidade elétrica das soluções de sacarose ocorre porque ela é uma substância exclusivamente molecular com ligações covalentes estáveis. Ao ser dissolvida em água, ela sofre apenas dissolução molecular (solvatação de moléculas neutras de sacarose), sem que ocorra dissociação iônica ou reação de ionização apreciável. Na ausência de íons livres em mobilidade para atuar como portadores de carga, a solução comporta-se como não eletrolítica, mantendo condutividade elétrica desprezível, idêntica à da água destilada.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 10,
    subject: 'Química',
    content: 'Química orgânica: funções amina e ácido carboxílico, reação de esterificação da benzocaína',
    difficulty: 'Fácil',
    statement: `As fórmulas representam as estruturas moleculares da benzocaína, substância empregada como anestésico local, e do ácido para-aminobenzóico (PABA), uma das vitaminas do complexo B.`,
    visuals: [{ file: 'p2-q10-estruturas-benzocaina.svg', alt: 'Fórmulas estruturais do ácido 4-aminobenzoico (PABA) e da benzocaína', caption: 'Estruturas químicas do PABA e da benzocaína.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Escreva o nome da função orgânica nitrogenada presente nas duas substâncias e o nome da função orgânica oxigenada presente no PABA.',
        expected: `1) Função orgânica nitrogenada presente em ambas: amina (amina aromática primária).\n2) Função orgânica oxigenada presente no PABA: ácido carboxílico.`,
        criteria: [
          { points: 1, text: 'Identifica a função amina.' },
          { points: 1, text: 'Identifica a função ácido carboxílico.' },
        ],
        detailed: `a) O grupo funcional $-NH_2$ ligado ao anel aromático tanto na benzocaína quanto no PABA caracteriza a função orgânica amina (mais especificamente, amina primária aromática).
No PABA, o grupo funcional terminal $-COOH$ ligado ao anel aromático caracteriza a função orgânica oxigenada ácido carboxílico. Na benzocaína, esse grupo foi esterificado, caracterizando a função éster ($-COO-CH_2-CH_3$).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'A benzocaína é obtida a partir da reação: PABA + reagente X -> benzocaína + produto Y. Escreva a fórmula estrutural do reagente X, mostrando todas as ligações entre os átomos, e apresente a fórmula molecular do produto Y.',
        expected: `1) Fórmula estrutural do reagente X (etanol): deve mostrar todas as ligações covalentes simples:\n$H-C(H)(H)-C(H)(H)-O-H$\n2) Fórmula molecular do produto Y: $H_2O$ (água).`,
        expectedImages: [{ file: 'p2-q10-solucao-reacao.svg', alt: 'Gabarito Oficial VUNESP: Fórmula estrutural completa do reagente X (etanol) com todas as ligações', caption: 'Fórmula estrutural oficial do reagente X (etanol).' }],
        criteria: [
          { points: 1, text: 'Apresenta a fórmula estrutural do etanol mostrando todas as ligações químicas abertas.' },
          { points: 1, text: 'Apresenta a fórmula molecular H2O.' },
        ],
        detailed: `b) A reação entre o ácido para-aminobenzoico (PABA) e o reagente X para formar a benzocaína é uma reação de esterificação de Fischer:
$$\\text{Ácido Carboxílico (PABA)} + \\text{Álcool (X)} \\xrightleftharpoons{H^+} \\text{Éster (benzocaína)} + \\text{Água (Y)}$$
Como a benzocaína possui o grupo éster ligado a uma cadeia etílica ($-CH_2-CH_3$), o álcool utilizado como reagente X é o etanol ($C_2H_5OH$). O enunciado exige a fórmula estrutural aberta mostrando todas as ligações químicas entre os átomos:
Dois átomos de carbono em cadeia, com 5 ligações simples $C-H$, uma ligação $C-C$, uma ligação $C-O$ e uma ligação $O-H$.
O subproduto Y formado pela eliminação de hidroxila do ácido e hidrogênio do álcool é a água, cuja fórmula molecular é $H_2O$.`,
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
    content: 'Cinemática escalar e dinâmica: área de escape de aeroporto, MUV, força média e impulso',
    difficulty: 'Média',
    statement: `Nas duas extremidades da pista de pouso e decolagem de alguns aeroportos há áreas de escape, cujo objetivo é reter os aviões caso eles não consigam parar até o final da pista. A superfície dessas áreas de escape é composta por um material que se deforma devido ao peso da aeronave, de modo a dificultar o seu deslocamento. A figura mostra um avião que adentrou em uma dessas áreas de escape.

(www.airport-business.com)

Considere que esse avião chegou à área de escape com velocidade de 54 km/h, percorrendo uma trajetória retilínea, com aceleração média de 5,0 m/s2 em módulo, até parar completamente.`,
    visuals: [{ file: 'p2-q11-aviao-escape.svg', alt: 'Fotografia de avião comercial retido na área de escape de leito deformável', caption: 'Área de escape de aeroporto (airport-business.com).' }],
    parts: [
      {
        id: 'a',
        prompt: 'Converta a velocidade inicial do avião para m/s e determine a distância, em metros, que ele percorreu na área de escape.',
        expected: `1) Conversão da velocidade: $v = \\frac{54}{3,6} = 15\\text{ m/s}$.\n2) Distância percorrida na área de escape: Por Torricelli:\n$v^2 = v_0^2 + 2a\\Delta s \\implies 0^2 = 15^2 - 2(5,0)\\Delta s \\implies 10\\,\\Delta s = 225 \\implies \\Delta s = 22,5\\text{ m}$ (ou via tempo $t = 3\\text{ s}$, $\\Delta s = 22,5\\text{ m}$).`,
        criteria: [
          { points: 1, text: 'Converte a velocidade inicial para 15 m/s com resolução.' },
          { points: 1, text: 'Calcula a distância percorrida de 22,5 m.' },
        ],
        detailed: `a) 1) Conversão da velocidade inicial para unidades do SI:
$$v_0 = 54\\text{ km/h} = \\frac{54}{3,6}\\text{ m/s} = 15\\text{ m/s}$$
2) Considerando movimento retilíneo uniformemente variado (MRUV) retardado com aceleração de módulo $a = 5,0\\text{ m/s}^2$ até o repouso final ($v = 0$):
Pela Equação de Torricelli:
$$v^2 = v_0^2 - 2a\\Delta s \\implies 0^2 = 15^2 - 2 \\cdot 5,0 \\cdot \\Delta s$$
$$0 = 225 - 10\\,\\Delta s \\implies 10\\,\\Delta s = 225 \\implies \\Delta s = 22,5\\text{ m}$$
Alternativamente, calculando o tempo de frenagem: $\\Delta t = \\frac{v_0}{a} = \\frac{15}{5,0} = 3,0\\text{ s}$; logo, $\\Delta s = v_0 \\Delta t - \\frac{1}{2} a \\Delta t^2 = 15(3) - \\frac{1}{2}(5)(9) = 45 - 22,5 = 22,5\\text{ m}$.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Suponha que a massa desse avião seja 2,4 × 10^4 kg e que apenas as forças de resistência atuem sobre ele durante a frenagem. Calcule, em newtons, a intensidade média da força de resistência que atuou sobre o avião e, em N·s, a intensidade do impulso dessa força durante a frenagem.',
        expected: `1) Intensidade da força de resistência média: $F_r = m \\cdot a = 2,4 \\times 10^4 \\times 5,0 = 1,2 \\times 10^5\\text{ N}$.\n2) Intensidade do impulso: Pelo teorema do impulso, $I = |\\Delta Q| = m \\cdot v_0 = 2,4 \\times 10^4 \\times 15 = 3,6 \\times 10^5\\text{ N}\\cdot\\text{s}$ (ou $I = F_r \\cdot \\Delta t = 1,2 \\times 10^5 \\times 3,0 = 3,6 \\times 10^5\\text{ N}\\cdot\\text{s}$).`,
        criteria: [
          { points: 1, text: 'Calcula a intensidade média da força: 1,2 x 10^5 N.' },
          { points: 1, text: 'Calcula a intensidade do impulso: 3,6 x 10^5 N·s.' },
        ],
        detailed: `b) 1) Pela Segunda Lei de Newton, sendo a força de resistência a resultante no eixo do movimento:
$$F_r = m \\cdot a = 2,4 \\times 10^4\\text{ kg} \\times 5,0\\text{ m/s}^2 = 1,2 \\times 10^5\\text{ N}$$
2) Pelo Teorema do Impulso, a intensidade do impulso da força resultante é igual ao módulo da variação da quantidade de movimento do avião:
$$I = |\\Delta Q| = |Q_{\\text{final}} - Q_{\\text{inicial}}| = |0 - m v_0| = m v_0$$
$$I = 2,4 \\times 10^4\\text{ kg} \\times 15\\text{ m/s} = 3,6 \\times 10^5\\text{ N}\\cdot\\text{s}$$
Alternativamente, como a força média atuou durante $\\Delta t = 3,0\\text{ s}$:
$$I = F_r \\cdot \\Delta t = 1,2 \\times 10^5\\text{ N} \\times 3,0\\text{ s} = 3,6 \\times 10^5\\text{ N}\\cdot\\text{s}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 12,
    subject: 'Física',
    content: 'Mecânica: energia cinética, energia potencial gravitacional e trabalho de forças dissipativas em voo suborbital',
    difficulty: 'Média',
    statement: `Uma das empresas norte-americanas que levou turistas em voo suborbital em 2021 utiliza uma cápsula, onde acomoda os passageiros, acoplada a um propulsor. Após o lançamento, quando o conjunto atinge a altura de 75 km e velocidade de 1000 m/s, a cápsula se desprende do propulsor e continua sua trajetória até a altura aproximada de 105 km. Em seguida, ela inicia a descida, retornando à Terra sob a ação de paraquedas.

Considere que a massa da cápsula seja 4,0 × 10^3 kg, que a aceleração da gravidade seja constante e igual a 10 m/s2 no intervalo entre 75 km e 105 km de altitude, e que a velocidade da cápsula no ponto mais alto de sua trajetória seja nula.`,
    visuals: [{ file: 'p2-q12-voo-suborbital.svg', alt: 'Diagrama esquemático do voo suborbital: decolagem, desprendimento em 75 km, apogeu em 105 km e descida', caption: 'Trajetória esquemática do voo suborbital.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule, em joules, a energia cinética da cápsula imediatamente após seu desprendimento do propulsor e a sua energia potencial gravitacional em relação à superfície da Terra nesse mesmo instante.',
        expected: `1) Energia cinética imediatamente após o desprendimento:\n$E_c = \\frac{1}{2} m v^2 = \\frac{1}{2} \\cdot 4,0 \\times 10^3 \\cdot (1\\,000)^2 = 2,0 \\times 10^9\\text{ J}$.\n\n2) Energia potencial gravitacional:\n$E_{pg} = m g h = 4,0 \\times 10^3 \\cdot 10 \\cdot 75\\,000 = 3,0 \\times 10^9\\text{ J}$.`,
        criteria: [
          { points: 1, text: 'Calcula a energia cinética: 2,0 x 10^9 J.' },
          { points: 1, text: 'Calcula a energia potencial gravitacional: 3,0 x 10^9 J.' },
        ],
        detailed: `a) Dados: massa $m = 4,0 \\times 10^3\\text{ kg}$, altura $h_1 = 75\\text{ km} = 7,5 \\times 10^4\\text{ m}$, velocidade $v_1 = 1\\,000\\text{ m/s} = 10^3\\text{ m/s}$, $g = 10\\text{ m/s}^2$.
1) Energia cinética no instante de desprendimento:
$$E_c = \\frac{m v_1^2}{2} = \\frac{4,0 \\times 10^3 \\cdot (10^3)^2}{2} = 2,0 \\times 10^3 \\cdot 10^6 = 2,0 \\times 10^9\\text{ J}$$
2) Energia potencial gravitacional em relação ao solo:
$$E_{pg} = m g h_1 = 4,0 \\times 10^3 \\cdot 10 \\cdot 7,5 \\times 10^4 = 3,0 \\times 10^9\\text{ J}$$
A energia mecânica total da cápsula nesse ponto é $E_{m1} = 2,0 \\times 10^9 + 3,0 \\times 10^9 = 5,0 \\times 10^9\\text{ J}$.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule, em joules, o trabalho realizado pelas forças dissipativas que atuaram sobre a cápsula desde o seu desprendimento do propulsor até o ponto mais alto de sua trajetória.',
        expected: `Trabalho das forças dissipativas:\nNo topo ($h_2 = 105\\text{ km} = 105\\,000\\text{ m}$, $v_2 = 0$):\n$E_{m2} = E_{pg2} = m g h_2 = 4,0 \\times 10^3 \\cdot 10 \\cdot 105\\,000 = 4,2 \\times 10^9\\text{ J}$.\n$W_{\\text{diss}} = E_{m2} - E_{m1} = 4,2 \\times 10^9 - (2,0 \\times 10^9 + 3,0 \\times 10^9) = 4,2 \\times 10^9 - 5,0 \\times 10^9 = -8,0 \\times 10^8\\text{ J}$ (módulo: $8,0 \\times 10^8\\text{ J}$).`,
        criteria: [
          { points: 2, text: 'Calcula o trabalho das forças dissipativas: -8,0 x 10^8 J (ou módulo 8,0 x 10^8 J).' },
        ],
        detailed: `b) No ponto mais alto da trajetória ($h_2 = 105\\text{ km} = 1,05 \\times 10^5\\text{ m}$), a velocidade é nula ($v_2 = 0$). Logo, a energia mecânica final consiste exclusivamente na energia potencial gravitacional:
$$E_{m2} = m g h_2 = 4,0 \\times 10^3\\text{ kg} \\times 10\\text{ m/s}^2 \\times 1,05 \\times 10^5\\text{ m} = 4,2 \\times 10^9\\text{ J}$$
Pelo Teorema da Energia Mecânica para forças não conservativas (dissipativas):
$$W_{\\text{diss}} = \\Delta E_m = E_{m2} - E_{m1}$$
$$W_{\\text{diss}} = 4,2 \\times 10^9\\text{ J} - 5,0 \\times 10^9\\text{ J} = -8,0 \\times 10^8\\text{ J}$$
O trabalho realizado pelas forças dissipativas (resistência do ar) é $-8,0 \\times 10^8\\text{ J}$ (ou módulo de $8,0 \\times 10^8\\text{ J}$).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 13,
    subject: 'Física',
    content: 'Termologia: calorimetria e dilatação térmica aparente de líquidos em recipientes',
    difficulty: 'Média',
    statement: `Em um recipiente de vidro de capacidade 250 cm3, são colocados 200 cm3 de glicerina, ambos inicialmente a 20 °C.

Considere a massa específica da glicerina igual a 1,26 g/cm3, seu calor específico igual a 0,58 cal/(g·°C), os coeficientes de dilatação volumétrica da glicerina e do vidro constantes e respectivamente iguais a 5,0 × 10^-4 °C^-1 e 3,0 × 10^-5 °C^-1.`,
    parts: [
      {
        id: 'a',
        prompt: 'Determine a massa de glicerina colocada no recipiente e calcule a quantidade de calor, em calorias, que ela deve receber para que sua temperatura atinja 70 °C.',
        expected: `1) Massa de glicerina: $m = \\rho \\cdot V = 1,26 \\times 200 = 252\\text{ g}$.\n2) Quantidade de calor: $Q = m \\cdot c \\cdot \\Delta T = 252 \\times 0,58 \\times (70 - 20) = 252 \\times 0,58 \\times 50 = 7\\,308\\text{ cal}$.`,
        criteria: [
          { points: 1, text: 'Calcula a massa da glicerina: 252 g.' },
          { points: 1, text: 'Calcula a quantidade de calor recebida: 7 308 cal.' },
        ],
        detailed: `a) 1) A massa da glicerina é obtida a partir de sua densidade volumétrica:
$$m = \\rho \\cdot V_0 = 1,26\\text{ g/cm}^3 \\times 200\\text{ cm}^3 = 252\\text{ g}$$
2) Pela equação fundamental da calorimetria, para aquecer a glicerina de $T_0 = 20^\\circ\\text{C}$ até $T = 70^\\circ\\text{C}$ (variação $\\Delta T = 50^\\circ\\text{C}$):
$$Q = m \\cdot c \\cdot \\Delta T = 252\\text{ g} \\times 0,58\\text{ cal/(g}\\cdot^\\circ\\text{C)} \\times 50^\\circ\\text{C} = 7\\,308\\text{ cal}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule a temperatura, em °C, em que a glicerina começará a transbordar do recipiente.',
        expected: `Temperatura de transbordamento:\nO transbordamento ocorre quando o volume dilatado da glicerina atinge a capacidade interna dilatada do frasco de vidro:\n$V_{\\text{glic}} = V_{\\text{vidro}} \\implies 200[1 + 5,0 \\times 10^{-4}(T - 20)] = 250[1 + 3,0 \\times 10^{-5}(T - 20)]$\n$200 + 0,10(T - 20) = 250 + 0,0075(T - 20) \\implies 0,0925(T - 20) = 50 \\implies T - 20 \\approx 540,5^\\circ\\text{C} \\implies T \\approx 560,5^\\circ\\text{C}$ (aceitos valores arredondados entre 560 °C e 561 °C).`,
        criteria: [
          { points: 2, text: 'Calcula a temperatura de transbordamento: T = 560,5 °C (ou 561 °C).' },
        ],
        detailed: `b) A glicerina começará a transbordar quando seu volume final for exatamente igual à capacidade volumétrica final do frasco de vidro:
$$V_{\\text{glic}} = V_{\\text{vidro}}$$
Utilizando as equações de dilatação volumétrica:
$$V_{0,\\text{glic}}(1 + \\gamma_{\\text{glic}}\\Delta T) = V_{0,\\text{vidro}}(1 + \\gamma_{\\text{vidro}}\\Delta T)$$
Substituindo os dados: $V_{0,\\text{glic}} = 200\\text{ cm}^3$, $V_{0,\\text{vidro}} = 250\\text{ cm}^3$, $\\gamma_{\\text{glic}} = 5,0 \\times 10^{-4}\\;^\\circ\\text{C}^{-1}$, $\\gamma_{\\text{vidro}} = 3,0 \\times 10^{-5}\\;^\\circ\\text{C}^{-1}$:
$$200(1 + 5,0 \\times 10^{-4}\\Delta T) = 250(1 + 3,0 \\times 10^{-5}\\Delta T)$$
$$200 + 0,10\\,\\Delta T = 250 + 0,0075\\,\\Delta T$$
$$0,0925\\,\\Delta T = 50 \\implies \\Delta T = \\frac{50}{0,0925} \\approx 540,54^\\circ\\text{C}$$
Sendo a temperatura inicial $T_0 = 20^\\circ\\text{C}$:
$$T = T_0 + \\Delta T = 20 + 540,54 \\approx 560,5^\\circ\\text{C (ou } 561^\\circ\\text{C)}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 14,
    subject: 'Física',
    content: 'Ondulatória e acústica: tubos sonoros fechados, harmônico fundamental e nível sonoro em decibéis',
    difficulty: 'Média',
    statement: `A figura 1 mostra um instrumento musical constituído por vários tubos, abertos em uma extremidade e fechados na outra, com comprimentos diferentes. A figura 2 ilustra uma pessoa soprando perpendicularmente à borda da extremidade aberta de um desses tubos para produzir um som.

Considere que a velocidade de propagação do som no ar no interior dos tubos seja igual a 340 m/s e que a frequência do som fundamental emitido por um dos tubos seja 170 Hz.`,
    visuals: [{ file: 'p2-q14-instrumento-tubos.svg', alt: 'Instrumento de sopro de tubos sonoros de PVC com comprimentos distintos e pessoa soprando', caption: 'Instrumento musical com tubos sonoros.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Determine o comprimento de onda do som emitido por esse tubo e calcule o seu comprimento, em metros.',
        expected: `1) Comprimento de onda: $v = \\lambda \\cdot f \\implies 340 = \\lambda \\cdot 170 \\implies \\lambda = \\frac{340}{170} = 2,0\\text{ m}$.\n2) Comprimento do tubo: Para o harmônico fundamental de tubo fechado, forma-se um quarto de onda estacionária: $L = \\frac{\\lambda}{4} = \\frac{2,0}{4} = 0,5\\text{ m}$ (ou 50 cm).`,
        criteria: [
          { points: 1, text: 'Calcula o comprimento de onda do som emitido: 2,0 m.' },
          { points: 1, text: 'Calcula o comprimento do tubo: 0,5 m (50 cm).' },
        ],
        detailed: `a) 1) Pela equação fundamental da ondulatória:
$$v = \\lambda \\cdot f \\implies \\lambda = \\frac{v}{f} = \\frac{340\\text{ m/s}}{170\\text{ Hz}} = 2,0\\text{ m}$$
2) Em um tubo acústico fechado em uma extremidade e aberto na outra, o modo fundamental de vibração ($n=1$) apresenta um nó de deslocamento na extremidade fechada e um ventre na extremidade aberta. Portanto, o comprimento do tubo $L$ equivale a um quarto do comprimento de onda estacionária:
$$L = \\frac{\\lambda}{4} = \\frac{2,0\\text{ m}}{4} = 0,5\\text{ m (ou } 50\\text{ cm)}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Ao soprar o tubo, a pessoa produziu uma onda sonora que se propagou pelo ar com intensidade de 1,0 × 10^-6 W/m2. Sabendo que o limiar de audibilidade da intensidade sonora é I0 = 1,0 × 10^-12 W/m2, calcule o nível sonoro, em decibéis, desse som.',
        expected: `Nível sonoro em decibéis:\n$N = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right) = 10 \\log_{10}\\left(\\frac{1,0 \\times 10^{-6}}{1,0 \\times 10^{-12}}\\right) = 10 \\log_{10}(10^6) = 10 \\times 6 = 60\\text{ dB}$.`,
        criteria: [
          { points: 2, text: 'Calcula o nível sonoro: 60 dB.' },
        ],
        detailed: `b) A intensidade sonora em escala logarítmica de decibéis (nível sonoro $\\beta$) é calculada por:
$$\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$$
Substituindo $I = 1,0 \\times 10^{-6}\\text{ W/m}^2$ e $I_0 = 1,0 \\times 10^{-12}\\text{ W/m}^2$:
$$\\beta = 10 \\log_{10}\\left(\\frac{1,0 \\times 10^{-6}}{1,0 \\times 10^{-12}}\\right) = 10 \\log_{10}(10^6)$$
Como $\\log_{10}(10^6) = 6$:
$$\\beta = 10 \\times 6 = 60\\text{ dB}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 15,
    subject: 'Física',
    content: 'Eletrodinâmica: circuitos elétricos, associação mista de resistores, gerador real e potência elétrica',
    difficulty: 'Difícil',
    statement: `Um circuito elétrico é composto por uma bateria, de força eletromotriz $\\varepsilon$ e resistência interna $R_i$, e por três resistores de resistências elétricas $R_1 = 60\\ \\Omega$, $R_2 = 200\\ \\Omega$ e $R_3 = 50\\ \\Omega$, associados conforme a figura. O circuito contém ainda um amperímetro ideal A.`,
    visuals: [{ file: 'p2-q15-circuito-eletrico.svg', alt: 'Circuito com gerador real, resistor R1 em série com associação em paralelo de R2 e R3 com amperímetro', caption: 'Circuito elétrico com bateria real e resistores.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Determine a resistência equivalente da associação em paralelo entre R2 e R3. Sabendo que o amperímetro indica 0,1 A, calcule a corrente elétrica que atravessa o resistor R1.',
        expected: `1) Resistência equivalente do trecho paralelo:\n$\\frac{1}{R_p} = \\frac{1}{R_2} + \\frac{1}{R_3} = \\frac{1}{200} + \\frac{1}{50} = \\frac{1 + 4}{200} = \\frac{5}{200} \\implies R_p = \\frac{200}{5} = 40\\ \\Omega$.\n\n2) Corrente em R1:\nComo o amperímetro ideal está no ramo de $R_2$, $i_2 = 0,1\\text{ A}$.\nA ddp no trecho paralelo é $U_p = R_2 \\cdot i_2 = 200 \\times 0,1 = 20\\text{ V}$.\nA corrente no ramo de $R_3$ é $i_3 = \\frac{U_p}{R_3} = \\frac{20}{50} = 0,4\\text{ A}$.\nA corrente total que passa por $R_1$ é $i_1 = i_2 + i_3 = 0,1 + 0,4 = 0,5\\text{ A}$.`,
        criteria: [
          { points: 1, text: 'Calcula a resistência equivalente Rp = 40 Ω.' },
          { points: 1, text: 'Calcula a corrente elétrica que atravessa R1: i1 = 0,5 A.' },
        ],
        detailed: `a) 1) A resistência equivalente $R_p$ da associação em paralelo entre $R_2 = 200\\ \\Omega$ e $R_3 = 50\\ \\Omega$ é dada por:
$$R_p = \\frac{R_2 \\cdot R_3}{R_2 + R_3} = \\frac{200 \\cdot 50}{200 + 50} = \\frac{10\\,000}{250} = 40\\ \\Omega$$
2) O amperímetro ideal está em série com $R_2$, medindo a corrente $i_2 = 0,1\\text{ A}$. Como $R_2$ e $R_3$ estão em paralelo, ambos são submetidos à mesma diferença de potencial $U_p$:
$$U_p = R_2 \\cdot i_2 = 200\\ \\Omega \\times 0,1\\text{ A} = 20\\text{ V}$$
A corrente que atravessa $R_3$ é:
$$i_3 = \\frac{U_p}{R_3} = \\frac{20\\text{ V}}{50\\ \\Omega} = 0,4\\text{ A}$$
O resistor $R_1$ está em série com a associação paralela; logo, a corrente total que o atravessa é a soma das correntes dos ramos:
$$i_1 = i_2 + i_3 = 0,1\\text{ A} + 0,4\\text{ A} = 0,5\\text{ A}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Sabendo que a potência dissipada pelo resistor R1 é 9,6 W, calcule a força eletromotriz ε e a resistência interna Ri da bateria.',
        expected: `Força eletromotriz e resistência interna da bateria:\nNa nova situação, com potência $P_1 = 9,6\\text{ W}$ em $R_1 = 60\\ \\Omega$:\n$P_1 = R_1 \\cdot i\'^2 \\implies 9,6 = 60 \\cdot i\'^2 \\implies i\'^2 = 0,16 \\implies i\' = 0,4\\text{ A}$.\nA resistência externa total do circuito é $R_{\\text{ext}} = R_1 + R_p = 60 + 40 = 100\\ \\Omega$.\nPela equação do gerador (Lei de Pouillet), $\\varepsilon = i(R_{\\text{ext}} + R_i)$:\nPara a situação inicial ($i = 0,5\\text{ A}$): $\\varepsilon = 0,5(100 + R_i) = 50 + 0,5\\,R_i$ (I)\nPara a nova situação ($i\' = 0,4\\text{ A}$): $\\varepsilon = 0,4(100 + R_i) = 40 + 0,4\\,R_i$ (II)\nIgualando (I) e (II):\n$50 + 0,5\\,R_i = 40 + 0,4\\,R_i \\implies 0,1\\,R_i = 2 \\implies R_i = 20\\ \\Omega$.\nSubstituindo $R_i = 20\\ \\Omega$: $\\varepsilon = 50 + 0,5(20) = 60\\text{ V}$.`,
        criteria: [
          { points: 1, text: 'Calcula a força eletromotriz ε = 60 V (ou equivalente pelo sistema).' },
          { points: 1, text: 'Calcula a resistência interna Ri = 20 Ω (ou equivalente pelo sistema).' },
        ],
        detailed: `b) A resistência do circuito externo alimentado pela bateria é:
$$R_{\\text{ext}} = R_1 + R_p = 60\\ \\Omega + 40\\ \\Omega = 100\\ \\Omega$$
No estado inicial analisado no item a, a corrente total do circuito era $i = 0,5\\text{ A}$.
Pela Lei de Pouillet para geradores reais:
$$\\varepsilon = i(R_{\\text{ext}} + R_i) \\implies \\varepsilon = 0,5(100 + R_i) = 50 + 0,5\\,R_i \\quad \\text{(Equação 1)}$$
Na nova condição em que a potência dissipada em $R_1$ passa a ser $P_1 = 9,6\\text{ W}$, a nova corrente total $i'$ que circula por $R_1$ é:
$$P_1 = R_1 \\cdot i'^2 \\implies 9,6 = 60 \\cdot i'^2 \\implies i'^2 = \\frac{9,6}{60} = 0,16 \\implies i' = 0,4\\text{ A}$$
Aplicando novamente a Lei de Pouillet com a nova corrente $i' = 0,4\\text{ A}$:
$$\\varepsilon = i'(R_{\\text{ext}} + R_i) \\implies \\varepsilon = 0,4(100 + R_i) = 40 + 0,4\\,R_i \\quad \\text{(Equação 2)}$$
Igualando as duas equações:
$$50 + 0,5\\,R_i = 40 + 0,4\\,R_i \\implies 0,1\\,R_i = 2 \\implies R_i = 20\\ \\Omega$$
Substituindo o valor de $R_i$ na Equação 1:
$$\\varepsilon = 50 + 0,5(20) = 50 + 10 = 60\\text{ V}$$`,
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
    content: 'Geometria plana: cordas paralelas em circunferência, apótema e Teorema de Pitágoras',
    difficulty: 'Média',
    statement: `A figura representa um círculo de centro C com duas cordas paralelas, PQ e RS, cujas medidas são PQ = 8 cm e RS = 6 cm. Sabe-se que a distância entre as cordas paralelas é igual a 7 cm.`,
    visuals: [{ file: 'p2-q16-circulo-cordas.svg', alt: 'Círculo de centro C com cordas paralelas horizontais PQ e RS', caption: 'Circunferência com cordas paralelas PQ e RS.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Em seu caderno de respostas, reproduza a figura dada, trace o segmento de reta que contém o centro C e é perpendicular às cordas, indicando os pontos M e N, pontos médios de PQ e RS, respectivamente. Sabendo que o centro C está situado entre as duas cordas paralelas, determine a distância entre os pontos M e C em função da distância entre os pontos N e C.',
        expected: `1) Traçado do segmento perpendicular: segmento que passa pelo centro C e intercepta as cordas PQ e RS em seus pontos médios M e N.\n2) Relação algébrica: como C está situado entre as duas cordas paralelas e a distância total entre elas é $MN = 7\\text{ cm}$, temos:\n$MC = 7 - NC$ (ou $d(M, C) = 7 - d(N, C)$).`,
        expectedImages: [{ file: 'p2-q16-solucao-geometria-a.svg', alt: 'Gabarito Oficial VUNESP: Esboço do círculo com segmento perpendicular passando por C e pontos médios M e N', caption: 'Esquema oficial do item a com C entre as cordas.' }],
        criteria: [
          { points: 1, text: 'Reproduz a figura indicando o segmento perpendicular às cordas passando pelo centro C com os pontos médios M e N.' },
          { points: 1, text: 'Determina a distância MC em função de NC: MC = 7 - NC.' },
        ],
        detailed: `a) O segmento de reta perpendicular às cordas paralelas $PQ$ e $RS$ que passa pelo centro $C$ da circunferência intercepta essas cordas exatamente em seus pontos médios, $M$ e $N$.
Como o centro $C$ está situado entre as cordas paralelas, o ponto $C$ pertence ao segmento $MN$, de modo que o comprimento total é a soma das distâncias de $C$ aos pontos médios:
$$MN = MC + NC = 7\\text{ cm}$$
Isolando $MC$ em função de $NC$:
$$MC = 7 - NC$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule o raio desse círculo.',
        expected: `Cálculo do raio R:\nNos triângulos retângulos $\\Delta PMC$ e $\\Delta RNC$:\n$PM = \\frac{8}{2} = 4\\text{ cm}$, $RN = \\frac{6}{2} = 3\\text{ cm}$.\n$R^2 = PM^2 + MC^2 = 4^2 + (7 - NC)^2$\n$R^2 = RN^2 + NC^2 = 3^2 + NC^2$\nIgualando as duas expressões:\n$16 + (49 - 14\\,NC + NC^2) = 9 + NC^2 \\implies 65 - 14\\,NC = 9 \\implies 14\\,NC = 56 \\implies NC = 4\\text{ cm}$.\nSubstituindo $NC = 4\\text{ cm}$:\n$R^2 = 3^2 + 4^2 = 9 + 16 = 25 \\implies R = 5\\text{ cm}$.`,
        expectedImages: [{ file: 'p2-q16-solucao-geometria-b.svg', alt: 'Gabarito Oficial VUNESP: Triângulos retângulos na circunferência e determinação do raio R = 5 cm', caption: 'Determinação do raio R = 5 cm nos triângulos retângulos.' }],
        criteria: [
          { points: 2, text: 'Calcula o raio do círculo R = 5 cm através do sistema de equações de Pitágoras.' },
        ],
        detailed: `b) Seja $NC = x$; portanto, $MC = 7 - x$.
Os pontos $P$ e $R$ pertencem à circunferência, logo $CP = CR = R$ (raio do círculo).
Como $M$ é ponto médio de $PQ = 8\\text{ cm}$, temos $PM = 4\\text{ cm}$.
Como $N$ é ponto médio de $RS = 6\\text{ cm}$, temos $RN = 3\\text{ cm}$.
Aplicando o Teorema de Pitágoras no triângulo retângulo $\\Delta PMC$:
$$R^2 = PM^2 + MC^2 = 4^2 + (7 - x)^2 = 16 + 49 - 14x + x^2 = 65 - 14x + x^2 \\quad \\text{(I)}$$
Aplicando o Teorema de Pitágoras no triângulo retângulo $\\Delta RNC$:
$$R^2 = RN^2 + NC^2 = 3^2 + x^2 = 9 + x^2 \\quad \\text{(II)}$$
Igualando (I) e (II):
$$65 - 14x + x^2 = 9 + x^2 \\implies 14x = 65 - 9 \\implies 14x = 56 \\implies x = 4\\text{ cm}$$
Substituindo $x = 4\\text{ cm}$ na Equação II:
$$R^2 = 9 + 4^2 = 9 + 16 = 25 \\implies R = 5\\text{ cm}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 17,
    subject: 'Matemática',
    content: 'Geometria analítica: equações da reta, perpendicularismo, inclinação e área de triângulo',
    difficulty: 'Média',
    statement: `No plano cartesiano de eixos ortogonais, as retas r e s se intersectam no ponto de coordenadas (2, 4). A reta s intersecta o eixo das abscissas no ponto de coordenadas (–10, 0) e a reta r é perpendicular à reta s.`,
    visuals: [{ file: 'p2-q17-retas-cartesianas.svg', alt: 'Retas perpendiculares r e s concorrentes em (2, 4) no plano cartesiano', caption: 'Retas perpendiculares r e s no plano cartesiano.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Determine a equação da reta s e calcule a tangente do ângulo agudo que a reta r forma com o eixo das ordenadas.',
        expected: `1) Equação da reta s:\nCoeficiente angular: $m_s = \\frac{4 - 0}{2 - (-10)} = \\frac{4}{12} = \\frac{1}{3}$.\nEquação: $y - 0 = \\frac{1}{3}(x + 10) \\implies x - 3y + 10 = 0$ (ou $y = \\frac{1}{3}x + \\frac{10}{3}$).\n\n2) Tangente do ângulo agudo que r forma com o eixo das ordenadas:\nComo $r \\perp s$, $m_r = -\\frac{1}{m_s} = -3$.\nO ângulo agudo $\\theta$ com o eixo $y$ satisfaz $\\tan\\theta = \\frac{1}{|m_r|} = \\frac{1}{3}$.`,
        criteria: [
          { points: 1, text: 'Determina a equação da reta s: y = (1/3)x + 10/3 (ou x - 3y + 10 = 0).' },
          { points: 1, text: 'Calcula a tangente do ângulo agudo com o eixo das ordenadas: 1/3.' },
        ],
        detailed: `a) 1) A reta $s$ passa pelos pontos $A(-10, 0)$ e $P(2, 4)$. Seu coeficiente angular $m_s$ é:
$$m_s = \\frac{y_P - y_A}{x_P - x_A} = \\frac{4 - 0}{2 - (-10)} = \\frac{4}{12} = \\frac{1}{3}$$
Pela equação fundamental da reta:
$$y - y_A = m_s(x - x_A) \\implies y - 0 = \\frac{1}{3}(x + 10) \\implies x - 3y + 10 = 0 \\iff y = \\frac{1}{3}x + \\frac{10}{3}$$

2) A reta $r$ é perpendicular a $s$, logo seu coeficiente angular é:
$$m_r = -\\frac{1}{m_s} = -\\frac{1}{1/3} = -3$$
Seja $\\alpha$ a inclinação da reta $r$ em relação ao eixo das abscissas ($x$), de modo que $\\tan\\alpha = |-3| = 3$. Como o eixo das ordenadas ($y$) é perpendicular ao eixo $x$, o ângulo agudo $\\theta$ formado entre a reta $r$ e o eixo $y$ é o ângulo complementar de $\\alpha$ (isto é, $\\theta + \\alpha = 90^\\circ$).
Portanto:
$$\\tan\\theta = \\cot\\alpha = \\frac{1}{\\tan\\alpha} = \\frac{1}{3}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule a área do triângulo delimitado pelas retas r e s e pelo eixo das abscissas.',
        expected: `Área do triângulo:\nInterseção de s com o eixo x: ponto $A(-10, 0)$.\nA reta r passa por $(2, 4)$ com inclinação $m_r = -3$:\n$y - 4 = -3(x - 2) \\implies y = -3x + 10$.\nInterseção de r com o eixo x ($y=0$): $-3x + 10 = 0 \\implies x_B = \\frac{10}{3}$, ponto $B\\left(\\frac{10}{3}, 0\\right)$.\nComprimento da base no eixo x:\n$b = x_B - x_A = \\frac{10}{3} - (-10) = \\frac{40}{3}$.\nAltura relativa ao eixo x: ordenada do vértice de interseção $P(2, 4)$, $h = 4$.\nÁrea: $A = \\frac{b \\cdot h}{2} = \\frac{\\frac{40}{3} \\cdot 4}{2} = \\frac{80}{3}$.`,
        expectedImages: [{ file: 'p2-q17-solucao-grafico.svg', alt: 'Gabarito Oficial VUNESP: Gráfico cartesiano do triângulo delimitado por r, s e o eixo x', caption: 'Região triangular de área 80/3 no plano cartesiano.' }],
        criteria: [
          { points: 2, text: 'Calcula a área do triângulo: 80/3.' },
        ],
        detailed: `b) O triângulo é formado pelo ponto de interseção das retas $P(2, 4)$ e pelas interseções das retas $s$ e $r$ com o eixo das abscissas ($y = 0$).
- Interseção da reta $s$ com o eixo $x$: ponto $A(-10, 0)$.
- Equação da reta $r$: passa por $P(2, 4)$ com coeficiente angular $m_r = -3$:
$$y - 4 = -3(x - 2) \\implies y = -3x + 10$$
Fazendo $y = 0$ para encontrar o ponto de corte $B$ com o eixo $x$:
$$0 = -3x_B + 10 \\implies 3x_B = 10 \\implies x_B = \\frac{10}{3} \\implies B\\left(\\frac{10}{3}, 0\\right)$$
O comprimento da base do triângulo situada sobre o eixo $x$ é:
$$\\text{base} = x_B - x_A = \\frac{10}{3} - (-10) = \\frac{10 + 30}{3} = \\frac{40}{3}$$
A altura do triângulo em relação a essa base é a ordenada do vértice $P(2, 4)$, ou seja, $h = 4$.
A área do triângulo é:
$$\\text{Área} = \\frac{\\text{base} \\cdot h}{2} = \\frac{\\frac{40}{3} \\cdot 4}{2} = \\frac{160}{6} = \\frac{80}{3}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 18,
    subject: 'Matemática',
    content: 'Matemática comercial e análise combinatória: composição do preço da gasolina e contagem de subconjuntos de moedas',
    difficulty: 'Difícil',
    statement: `Considere que, na primeira semana de setembro de 2021, o preço médio do litro da gasolina para o consumidor era de R$ 6,00. O infográfico mostra a composição desse preço médio, segundo informações oficiais da Petrobrás. Foram omitidos dois números, representados no infográfico por X e Y.

(www.nexojornal.com.br. Adaptado.)`,
    visuals: [{ file: 'p2-q18-infografico-gasolina.svg', alt: 'Infográfico oficial da composição média do preço da gasolina com incógnitas X e Y', caption: 'Composição média do preço da gasolina ao consumidor (R$ 6,00).' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule o valor de X com três casas decimais e o valor de Y com uma casa decimal.',
        expected: `1) Valor de X: Pela porcentagem de 17,2% do etanol anidro na composição do litro:\n$X = 0,172 \\times 6,00 = \\text{R\\$} 1,032$\n(ou subtraindo as demais parcelas: $X = 6,00 - (2,028 + 0,588 + 1,668 + 0,684) = 6,00 - 4,968 = \\text{R\\$} 1,032$).\n\n2) Valor de Y: Porcentagem referente à distribuição e revenda (R$ 0,684):\n$Y = \\frac{0,684}{6,00} \\times 100 = 11,4\\%$\n(ou subtraindo as outras porcentagens: $Y = 100 - (17,2 + 33,8 + 9,8 + 27,8) = 11,4\\%$).`,
        criteria: [
          { points: 1, text: 'Calcula X = R$ 1,032 com três casas decimais e resolução.' },
          { points: 1, text: 'Calcula Y = 11,4% com uma casa decimal e resolução.' },
        ],
        detailed: `a) O preço final de 1 litro de gasolina ao consumidor é R$ 6,00 (100%).
1) Cálculo de X (parcela referente ao custo do etanol anidro):
Pelo infográfico, o etanol corresponde a $17,2\\%$ do preço total:
$$X = 17,2\\% \\times 6,00 = 0,172 \\times 6 = \\text{R\\$} 1,032$$
Alternativamente, subtraindo do total as quatro parcelas conhecidas:
$$X = 6,00 - (2,028 + 0,588 + 1,668 + 0,684) = 6,00 - 4,968 = \\text{R\\$} 1,032$$

2) Cálculo de Y (porcentagem da parcela de distribuição e revenda, cujo valor é R$ 0,684):
$$Y = \\frac{0,684}{6,00} \\times 100\\% = 0,114 \\times 100\\% = 11,4\\%$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Adotando R$ 1,03 como custo do etanol utilizado na composição de 1 litro de gasolina, determine o valor, em R$, do litro de etanol, também com duas casas decimais. De quantas formas diferentes é possível formar um subconjunto do conjunto das 27 moedas com valor monetário total igual ao preço de 1 litro de etanol? Considere que a troca de moedas de mesmo valor não constitui novos subconjuntos.',
        expected: `1) Valor do litro de etanol:\nComo a gasolina contém 27% de etanol anidro (fração volumétrica 0,27), o preço de 1 litro de etanol é:\n$P_{\\text{etanol}} = \\frac{1,03}{0,27} = \\frac{103}{27} \\approx \\text{R\\$} 3,81$.\n\n2) Formas de obter R$ 3,81 a partir das 27 moedas:\nO conjunto contém: 4 moedas de R$ 1,00; 3 moedas de R$ 0,50; 2 moedas de R$ 0,10; 3 moedas de R$ 0,05; e 15 moedas de R$ 0,01.\nPara totalizar R$ 3,81, é possível obter exatamente 10 subconjuntos distintos.`,
        criteria: [
          { points: 1, text: 'Determina o preço de 1 litro de etanol: R$ 3,81 (com duas casas decimais).' },
          { points: 1, text: 'Determina o total de 10 subconjuntos possíveis evidenciando a estratégia de contagem utilizada.' },
        ],
        detailed: `b) 1) A gasolina comum comercializada no Brasil possui $27\\%$ de etanol anidro em volume. Como o custo dessa fração de 0,27 L na composição de 1 L de gasolina é R$ 1,03, o preço $P$ de 1 litro de etanol é:
$$P = \\frac{1,03}{0,27} = \\frac{103}{27} \\approx 3,8148 \\implies P = \\text{R\\$} 3,81$$

2) O conjunto disponível é composto por 27 moedas:
- 4 moedas de R$ 1,00
- 3 moedas de R$ 0,50
- 2 moedas de R$ 0,10
- 3 moedas de R$ 0,05
- 15 moedas de R$ 0,01
A soma das moedas inferiores a R$ 1,00 é:
$$3(0,50) + 2(0,10) + 3(0,05) + 15(0,01) = 1,50 + 0,20 + 0,15 + 0,15 = \\text{R\\$} 2,00$$
Portanto, para atingir R$ 3,81, precisamos obrigatoriamente de no mínimo duas e no máximo três moedas de R$ 1,00.

Caso 1: Utilizando 3 moedas de R$ 1,00 (total R$ 3,00):
Devemos formar os R$ 0,81 restantes. Obrigatoriamente precisamos de uma moeda de R$ 0,50, restando R$ 0,31 em moedas de 10, 5 e 1 centavo:
- Com duas moedas de R$ 0,10 (R$ 0,20), restam R$ 0,11:
  (2 de 0,05 + 1 de 0,01), (1 de 0,05 + 6 de 0,01), (0 de 0,05 + 11 de 0,01) $\\to$ 3 possibilidades.
- Com uma moeda de R$ 0,10 (R$ 0,10), restam R$ 0,21:
  (3 de 0,05 + 6 de 0,01), (2 de 0,05 + 11 de 0,01) $\\to$ 2 possibilidades.
Total do Caso 1: $3 + 2 = 5$ possibilidades.

Caso 2: Utilizando 2 moedas de R$ 1,00 (total R$ 2,00):
Devemos formar os R$ 1,81 restantes. Para isso precisamos utilizar as 3 moedas de R$ 0,50 (R$ 1,50), restando R$ 0,31 em moedas de 10, 5 e 1 centavo:
Analogamente ao Caso 1:
- Com duas moedas de R$ 0,10 $\\to$ 3 possibilidades.
- Com uma moeda de R$ 0,10 $\\to$ 2 possibilidades.
Total do Caso 2: $3 + 2 = 5$ possibilidades.

Total geral de subconjuntos distintos:
$$5 + 5 = 10\\text{ subconjuntos}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 19,
    subject: 'Matemática',
    content: 'Função exponencial e logaritmos: decaimento percentual de fios de cabelo e tempo de meia-vida',
    difficulty: 'Média',
    statement: `Um estudo de caso acompanhou um homem que tinha 30 anos de vida e possuía inicialmente 100 mil fios de cabelo. Ao longo desse estudo, foi possível observar que, para esse homem, a taxa média de queda de cabelo foi de 4% ao ano.`,
    parts: [
      {
        id: 'a',
        prompt: 'Sendo N o número médio de fios de cabelo desse homem e t o tempo, em anos, decorrido desde os seus 30 anos de idade, determine a função N(t) e utilize-a para calcular o número de fios de cabelo observados nesse homem quando ele completou 31 anos de vida.',
        expected: `1) Função exponencial N(t):\nComo a perda média é de 4% ao ano, restam a cada ano 96% dos fios anteriores (fator 0,96):\n$N(t) = 100\\,000 \\cdot (0,96)^t$, para $t \\ge 0$\n(ou $N(t) = 100\\,000 \\cdot (0,96)^{t-30}$ com $t \\ge 30$).\n\n2) Fios de cabelo aos 31 anos ($t = 1$ ano decorrido):\n$N(1) = 100\\,000 \\cdot (0,96)^1 = 96\\,000\\text{ fios}$ de cabelo.`,
        criteria: [
          { points: 1, text: 'Determina a lei da função N(t) = 100 000 · (0,96)^t.' },
          { points: 1, text: 'Calcula o número de fios aos 31 anos: 96 000 fios.' },
        ],
        detailed: `a) Como o homem perde $4\\%$ de seus fios a cada ano, a cada ano subsequente restam $100\\% - 4\\% = 96\\% = 0,96$ da quantidade de fios do ano anterior.
Sendo $t$ o tempo em anos decorrido a partir dos 30 anos e a quantidade inicial de $100\\,000$ fios ($100 \\times 10^3$), a lei da função exponencial é:
$$N(t) = 100\\,000 \\cdot (0,96)^t$$
Quando o homem completa 31 anos, decorreu exatamente $t = 31 - 30 = 1\\text{ ano}$:
$$N(1) = 100\\,000 \\cdot (0,96)^1 = 96\\,000\\text{ fios de cabelo}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Decorrido certo número de anos após os 30 anos de idade desse homem, ele terá a metade dos fios de cabelo que tinha aos 30 anos. Utilizando log10 2 = 0,30 e log10 3 = 0,48, determine qual será sua idade nessa ocasião.',
        expected: `Cálculo da idade para atingir metade dos fios (50 000):\n$100\\,000 \\cdot (0,96)^t = 50\\,000 \\implies (0,96)^t = \\frac{1}{2} = 2^{-1}$\nTomando logaritmo decimal em ambos os membros:\n$t \\cdot \\log_{10}(0,96) = -\\log_{10} 2$\nComo $0,96 = \\frac{96}{100} = \\frac{2^5 \\cdot 3}{10^2}$:\n$\\log_{10}(0,96) = 5\\log_{10} 2 + \\log_{10} 3 - \\log_{10}(10^2) = 5(0,30) + 0,48 - 2 = 1,50 + 0,48 - 2 = -0,02$\n$t \\cdot (-0,02) = -0,30 \\implies t = \\frac{-0,30}{-0,02} = 15\\text{ anos}$.\nIdade do homem na ocasião: $30 + 15 = 45\\text{ anos}$.`,
        criteria: [
          { points: 1, text: 'Resolve a equação logarítmica encontrando t = 15 anos decorridos.' },
          { points: 1, text: 'Determina a idade final do homem na ocasião: 45 anos (30 + 15).' },
        ],
        detailed: `b) Para ter a metade dos fios iniciais ($50\\,000$ fios):
$$N(t) = \\frac{100\\,000}{2} = 50\\,000$$
$$100\\,000 \\cdot (0,96)^t = 50\\,000 \\implies (0,96)^t = \\frac{1}{2}$$
Aplicando o logaritmo de base 10 em ambos os membros:
$$\\log_{10}\\left[(0,96)^t\\right] = \\log_{10}\\left(\\frac{1}{2}\\right)$$
$$t \\cdot \\log_{10}(0,96) = \\log_{10}(2^{-1}) = -\\log_{10} 2$$
Fatorando a fração decimal $0,96 = \\frac{96}{100} = \\frac{2^5 \\cdot 3}{100}$:
$$\\log_{10}(0,96) = \\log_{10}(2^5 \\cdot 3) - \\log_{10}(100) = 5\\log_{10} 2 + \\log_{10} 3 - 2$$
Substituindo os valores dados no enunciado ($\\log_{10} 2 = 0,30$ e $\\log_{10} 3 = 0,48$):
$$\\log_{10}(0,96) = 5(0,30) + 0,48 - 2 = 1,50 + 0,48 - 2 = -0,02$$
Retornando à equação principal com $-\\log_{10} 2 = -0,30$:
$$t \\cdot (-0,02) = -0,30 \\implies t = \\frac{-0,30}{-0,02} = 15\\text{ anos}$$
Como o tempo $t$ é contado a partir dos 30 anos de idade, a idade desse homem nessa ocasião será:
$$\\text{Idade} = 30 + 15 = 45\\text{ anos}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 20,
    subject: 'Matemática',
    content: 'Geometria espacial: prisma reto regular de base triangular, apótema e cálculo de área lateral',
    difficulty: 'Média',
    statement: `A figura mostra um prisma reto regular ABCTQP, de bases triangulares. Sabe-se que AC = 12 cm, que M é ponto médio de TQ e que a medida de BM é igual a 20 cm.`,
    visuals: [{ file: 'p2-q20-prisma-regular.svg', alt: 'Prisma reto regular triangular ABCTQP com aresta da base 12 cm e segmento BM = 20 cm', caption: 'Prisma reto regular de bases triangulares.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a soma das áreas das bases do prisma, indicadas em azul na figura.',
        expected: `Soma das áreas das bases do prisma:\nAs bases são dois triângulos equiláteros congruentes de lado $L = 12\\text{ cm}$.\nÁrea de uma base: $S_{\\text{base}} = \\frac{L^2\\sqrt{3}}{4} = \\frac{12^2\\sqrt{3}}{4} = \\frac{144\\sqrt{3}}{4} = 36\\sqrt{3}\\text{ cm}^2$.\nSoma das áreas das duas bases:\n$2 \\cdot S_{\\text{base}} = 2 \\times 36\\sqrt{3} = 72\\sqrt{3}\\text{ cm}^2$ (ou $12\\sqrt{108}\\text{ cm}^2$).`,
        expectedImages: [{ file: 'p2-q20-solucao-triangulo.svg', alt: 'Gabarito Oficial VUNESP: Triângulo equilátero da base e cálculo da área', caption: 'Área da base do prisma triangular regular.' }],
        criteria: [
          { points: 2, text: 'Calcula a soma das áreas das duas bases: 72√3 cm² (1 ponto se calculou uma base ou errou no cálculo final).' },
        ],
        detailed: `a) Por ser um prisma regular reto de bases triangulares, suas bases inferior ($ABC$) e superior ($TQP$) são triângulos equiláteros congruentes de lado $L = AC = 12\\text{ cm}$.
A área de um triângulo equilátero de lado $L$ é dada por:
$$S_{\\text{base}} = \\frac{L^2\\sqrt{3}}{4} = \\frac{12^2\\sqrt{3}}{4} = \\frac{144\\sqrt{3}}{4} = 36\\sqrt{3}\\text{ cm}^2$$
A soma das áreas das duas bases (inferior e superior) é:
$$S_{\\text{total das bases}} = 2 \\cdot S_{\\text{base}} = 2 \\times 36\\sqrt{3} = 72\\sqrt{3}\\text{ cm}^2$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule a área lateral do prisma.',
        expected: `Área lateral do prisma:\nSeja N o ponto médio de AB na base inferior, que é a projeção ortogonal de M sobre o plano da base. Como o prisma é reto, o segmento MN é perpendicular à base e corresponde à altura do prisma: $MN = h$.\nNo triângulo equilátero da base inferior, o segmento BN une o vértice B ao ponto médio de AB, medindo $BN = \\frac{12}{2} = 6\\text{ cm}$ ou, considerando a altura da base relativa a outro vértice, a projeção forma um triângulo retângulo onde:\n$h^2 + (6\\sqrt{3})^2 = 20^2 \\implies h^2 + 108 = 400 \\implies h^2 = 292 \\implies h = \\sqrt{292} = 2\\sqrt{73}\\text{ cm}$.\nO perímetro da base é $2p = 3 \\times 12 = 36\\text{ cm}$.\nÁrea lateral: $A_L = 36 \\times 2\\sqrt{73} = 72\\sqrt{73}\\text{ cm}^2$ (ou $36\\sqrt{292}\\text{ cm}^2$).`,
        criteria: [
          { points: 1, text: 'Calcula a altura do prisma: h = 2√73 cm (ou √292 cm).' },
          { points: 1, text: 'Calcula a área lateral do prisma: 72√73 cm² (ou 36√292 cm²).' },
        ],
        detailed: `b) As faces laterais de um prisma reto regular triangular são três retângulos congruentes de base $L = 12\\text{ cm}$ e altura $h$.
Seja $N$ o ponto médio de $AB$ na base inferior, que é a projeção ortogonal de $M$ (ponto médio de $TQ$) sobre a base $ABC$. O segmento $MN$ é paralelo às arestas laterais, com $MN = h$.
No triângulo equilátero $ABC$, a mediana/altura relativa ao lado oposto que conecta o vértice à projeção ortogonal possui comprimento:
$$h_{\\text{base}} = \\frac{12\\sqrt{3}}{2} = 6\\sqrt{3}\\text{ cm}$$
O triângulo formado pela altura $h$, pela distância na base e pelo segmento espacial $BM = 20\\text{ cm}$ é retângulo. Aplicando o Teorema de Pitágoras:
$$h^2 + (6\\sqrt{3})^2 = 20^2$$
$$h^2 + 36 \\times 3 = 400 \\implies h^2 + 108 = 400 \\implies h^2 = 292$$
$$h = \\sqrt{292} = \\sqrt{4 \\times 73} = 2\\sqrt{73}\\text{ cm}$$
O perímetro da base triangular é $2p = 3 \\times 12 = 36\\text{ cm}$.
A área lateral do prisma é dada pelo perímetro da base multiplicado pela altura:
$$A_{\\text{lateral}} = 2p \\cdot h = 36 \\times 2\\sqrt{73} = 72\\sqrt{73}\\text{ cm}^2 \\approx 615,2\\text{ cm}^2$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),
];
