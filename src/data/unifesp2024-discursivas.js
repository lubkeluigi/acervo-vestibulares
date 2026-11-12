import { createUnifesp } from './unifesp-helpers.js';

const { d } = createUnifesp(2024);

export const unifesp2024Discursivas = [
  // ==========================================
  // BIOLOGIA (QUESTÕES 01 A 05)
  // ==========================================
  d({
    n: 1,
    subject: 'Biologia',
    content: 'Ecologia: fluxo de energia em ecossistemas, produtividade primária bruta e líquida',
    difficulty: 'Média',
    statement: `O esquema ilustra um modelo de fluxo de energia que ocorre em um ecossistema simplificado, em que os valores relativos estão na unidade kcal/m²/ano. PPB é a produtividade primária bruta, PPL é a produtividade primária líquida e PSL é a produtividade secundária líquida.

(Sônia Lopes e Sergio Rosso. Conecte BIO, 2014. Adaptado.)`,
    visuals: [{ file: 'p2-q01-fluxo-energia.svg', alt: 'Esquema de fluxo de energia em um ecossistema simplificado com os valores de PPB, PPL, respiração e PSL em kcal/m²/ano', caption: 'Fluxo de energia em um ecossistema simplificado (Conecte BIO, 2014. Adaptado.)' }],
    parts: [
      {
        id: 'a',
        prompt: 'Qual é o nível trófico que não foi representado no primeiro “bloco” do esquema? O que ocorre com parte da energia calorífica ao se passar de um nível trófico para outro?',
        expected: `1) Nível trófico não representado: Produtores (ou organismos autotróficos / fotossintetizantes). (1 ponto)
   Não foi aceita a resposta "plantas", pois a questão pede o nível trófico, e plantas são apenas um dos organismos pertencentes a esse nível (junto de algas e bactérias fotossintetizantes).
2) O que ocorre com a energia: Parte da energia calorífica é sempre perdida/dissipada para o ambiente em forma de calor (energia não aproveitável) ao passar de um nível trófico para outro. (1 ponto)`,
        criteria: [
          { points: 1, text: 'Identifica o nível trófico dos produtores (organismos autotróficos/fotossintetizantes) como o não representado no primeiro bloco.' },
          { points: 1, text: 'Explica que parte da energia calorífica é perdida/dissipada como calor na transferência entre níveis tróficos.' },
        ],
        detailed: 'a) O primeiro "bloco" do esquema de fluxo energético não representa explicitamente o nível trófico dos **produtores (organismos autotróficos/fotossintetizantes)** — plantas, algas e cianobactérias — que captam a energia luminosa e a convertem em energia química, iniciando a cadeia alimentar e fornecendo a PPB sobre a qual o esquema se baseia. Em toda transferência de energia entre níveis tróficos sucessivos, uma parcela significativa da energia química é inevitavelmente perdida na forma de **calor (energia calorífica dissipada)**, principalmente através da respiração celular, conforme a Segunda Lei da Termodinâmica, o que explica por que a quantidade de energia disponível diminui a cada nível trófico ao longo da cadeia alimentar.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
      {
        id: 'b',
        prompt: 'De acordo com conhecimentos sobre fluxo energético, qual é o valor de PPL? Explique o que representa a PPL para os organismos que iniciam uma cadeia alimentar.',
        expected: `1) Valor de PPL: 8 833 kcal/m²/ano. (1 ponto)
2) O que representa a PPL: É a energia (matéria orgânica) produzida pelos autótrofos descontada da energia gasta na própria respiração; é a energia que fica disponível aos consumidores primários (herbívoros) que iniciam a cadeia alimentar. (1 ponto)`,
        criteria: [
          { points: 1, text: 'Indica corretamente o valor de PPL = 8 833 kcal/m²/ano.' },
          { points: 1, text: 'Explica que a PPL é a energia dos produtores disponível aos consumidores primários, descontada a respiração.' },
        ],
        detailed: 'b) O valor de **PPL = 8 833 kcal/m²/ano** é obtido subtraindo-se da Produtividade Primária Bruta (PPB) a energia gasta na respiração dos próprios produtores (PPL = PPB − Respiração). A PPL representa a parcela de matéria orgânica (energia química) efetivamente incorporada aos tecidos dos produtores que não foi consumida pela própria respiração desses organismos, estando, portanto, disponível para ser transferida aos consumidores primários (herbívoros), que são os organismos que dão início à cadeia alimentar a partir dos produtores.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),

  d({
    n: 2,
    subject: 'Biologia',
    content: 'Microbiologia e epidemiologia: vírus como parasitas intracelulares obrigatórios e transmissão vetorial da dengue',
    difficulty: 'Fácil',
    statement: `Enquanto as autoridades de saúde estavam focadas na nova covid-19, os EUA experimentavam a maior disseminação "na história" de outra doença: a dengue. Segundo um relatório da Organização Pan-Americana da Saúde (OPAS), em 2019, 3 139 335 casos da doença foram registrados, causando 1 538 mortes.

(https://noticias.uol.com.br. Adaptado.)`,
    parts: [
      {
        id: 'a',
        prompt: 'Qual é o grupo de micro-organismos de que faz parte o causador da covid-19 e da dengue? Por que esse grupo é considerado parasita intracelular obrigatório?',
        expected: `1) Grupo de micro-organismos: Vírus. (1 ponto)
2) Por que são parasitas intracelulares obrigatórios: Porque necessitam de uma célula hospedeira para se reproduzir/replicar, já que não possuem metabolismo próprio. (1 ponto)`,
        criteria: [
          { points: 1, text: 'Identifica os vírus como o grupo de micro-organismos causador de ambas as doenças.' },
          { points: 1, text: 'Justifica que os vírus não têm metabolismo próprio e dependem da célula hospedeira para se replicar.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Há algum tempo era impensada a propagação da dengue no hemisfério norte. Explique, do ponto de vista da transmissão, como pode ter ocorrido a propagação da dengue num país como os EUA.',
        expected: `Explicação aceita (uma das duas linhas de raciocínio, cada etapa valendo 1 ponto):
1) Um indivíduo contaminado com o vírus da dengue entrou no país e foi picado pelo mosquito vetor (Aedes sp.) local (1 ponto); esse mosquito, agora contaminado, ao picar pessoas saudáveis, transmitiu o vírus a elas (1 ponto).
OU
2) Mosquitos já contaminados podem ter sido levados por meios de transporte, como aviões ou navios (1 ponto); ao picarem pessoas saudáveis nos EUA, essas pessoas foram contaminadas (1 ponto).`,
        criteria: [
          { points: 1, text: 'Descreve corretamente a primeira etapa da cadeia de transmissão (indivíduo ou mosquito contaminado chegando ao país).' },
          { points: 1, text: 'Descreve corretamente a etapa final: o mosquito vetor contaminado picando e transmitindo o vírus a pessoas saudáveis nos EUA.' },
        ],
      },
    ],
  }),

  d({
    n: 3,
    subject: 'Biologia',
    content: 'Genética molecular e evolução: mutação pontual na anemia falciforme e vantagem heterozigótica contra a malária',
    difficulty: 'Média',
    statement: `A hemoglobina é uma proteína composta por quatro cadeias de polipeptídeos, sendo cada uma delas formada por uma sequência de aminoácidos. Alterações nessa sequência podem provocar mudanças na forma e na função da hemoglobina. É o caso da doença anemia falciforme, cuja alteração de um aminoácido provoca uma deformidade nas hemácias devido à síntese de uma hemoglobina anormal. Regiões da África, com grande incidência de malária, apresentam alta frequência do alelo que determina a anemia falciforme. O esquema ilustra essa alteração, comparando um trecho do polipeptídeo normal com o trecho do polipeptídeo alterado (no qual o aminoácido ácido glutâmico é substituído por valina).`,
    visuals: [{ file: 'p2-q03-hemoglobina.svg', alt: 'Esquema comparando o trecho do polipeptídeo normal da hemoglobina com o trecho do polipeptídeo alterado na anemia falciforme', caption: 'Alteração de aminoácido no polipeptídeo da hemoglobina na anemia falciforme.' }],
    parts: [
      {
        id: 'a',
        prompt: 'O esquema ilustra a alteração específica no polipeptídeo, sendo possível deduzir as moléculas que são afetadas. Cite o número de códons alterados no RNA mensageiro. Justifique sua resposta.',
        expected: `1) Número de códons alterados: Apenas um códon. (1 ponto)
2) Justificativa: Porque cada códon codifica apenas um aminoácido, e o esquema ilustra que apenas um aminoácido (ácido glutâmico por valina) foi trocado. (1 ponto)`,
        criteria: [
          { points: 1, text: 'Indica corretamente que apenas um códon foi alterado.' },
          { points: 1, text: 'Justifica com base na relação de um códon para um aminoácido, e apenas um aminoácido foi trocado.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Explique, do ponto de vista evolutivo, a causa da alta frequência do alelo que determina a anemia falciforme nas regiões africanas com grande incidência de malária.',
        expected: `Indivíduos heterozigotos para o alelo da anemia falciforme têm vantagem adaptativa/resistência/imunidade à malária (1 ponto), pois o protozoário causador da malária (Plasmodium) não consegue completar seu ciclo de vida dentro das hemácias defeituosas (falciformes). Assim, esses heterozigotos sobrevivem mais e geram mais filhos portadores do alelo (maior sucesso reprodutivo), aumentando a frequência do alelo na população ao longo das gerações (1 ponto).
Observação oficial: não pontua o segundo ponto quem não mencionar explicitamente a transmissão do alelo entre gerações; também não pontua quem classificar a malária como doença viral, bacteriana ou causada por verme.`,
        criteria: [
          { points: 1, text: 'Explica que heterozigotos têm vantagem/resistência à malária por impedir o ciclo do Plasmodium nas hemácias.' },
          { points: 1, text: 'Explica que esses heterozigotos têm maior sucesso reprodutivo, repassando o alelo às gerações seguintes e aumentando sua frequência.' },
        ],
      },
    ],
  }),

  d({
    n: 4,
    subject: 'Biologia',
    content: 'Genética: 2ª Lei de Mendel, segregação independente e cálculo de probabilidade em heredograma',
    difficulty: 'Média',
    statement: `O albinismo é um caráter determinado por um alelo autossômico recessivo a e é caracterizado pela incapacidade de formar melanina na pele humana. A polidactilia é um caráter determinado por um alelo autossômico dominante D e é caracterizada pela formação de mais de cinco dedos nas mãos e/ou nos pés. Os pares de alelos que estão relacionados a essas duas características estão localizados em cromossomos não homólogos.

O heredograma ilustra a genealogia do casal Giulia e Heitor.`,
    visuals: [{ file: 'p2-q04-heredograma.svg', alt: 'Heredograma da genealogia do casal Giulia e Heitor, indicando indivíduos albinos e/ou com polidactilia', caption: 'Heredograma da genealogia do casal Giulia e Heitor.' }],
    parts: [
      {
        id: 'a',
        prompt: 'De acordo com os dados, quantos tipos de gametas diferentes um indivíduo duplo-heterozigoto pode formar? Com qual lei de Mendel a atuação dos dois pares de alelos se relaciona?',
        expected: `1) Número de gametas: 4 tipos diferentes (AD, Ad, aD, ad). (1 ponto)
2) Lei de Mendel: 2ª Lei de Mendel (Lei da Segregação Independente). (1 ponto)
   Não foi aceita a segregação independente atribuída como 1ª ou 3ª Lei, nem o uso de duas leis na mesma resposta.`,
        criteria: [
          { points: 1, text: 'Indica corretamente 4 tipos de gametas diferentes.' },
          { points: 1, text: 'Identifica corretamente a 2ª Lei de Mendel (segregação independente).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Qual o genótipo completo de Giulia? Qual a probabilidade de o casal gerar uma menina não albina e sem polidactilia?',
        expected: `1) Genótipo de Giulia: AaDd. (1 ponto)
2) Probabilidade: P = 3/16 (≈ 18,75%), calculada por P(não albina) × P(sem polidactilia) × P(menina) = 3/4 × 1/2 × 1/2 = 3/16. (1 ponto)
   Também foram aceitas as formas equivalentes 6/32, 18,75%, 18,7%, ~18% ou ~19%.`,
        criteria: [
          { points: 1, text: 'Indica corretamente o genótipo AaDd para Giulia.' },
          { points: 1, text: 'Calcula corretamente a probabilidade P = 3/16 (≈18,75%) de menina não albina e sem polidactilia.' },
        ],
      },
    ],
  }),

  d({
    n: 5,
    subject: 'Biologia',
    content: 'Ornitologia e genética: adaptações das penas e distinção entre fenótipo e genótipo (pigmentação por carotenoides)',
    difficulty: 'Fácil',
    statement: `O vermelho escarlate que tinge o céu a cada voo chama atenção do observador mais desavisado. Com sua exuberante plumagem, os guarás (Eudocimus ruber) voltaram a Florianópolis. A revoada das aves não era vista havia mais de 200 anos, segundo pesquisadores da Universidade Federal de Santa Catarina. Entre os possíveis motivos da volta dos guarás está a recuperação de mangues na ilha, onde essas aves podem se alimentar. A coloração dos guarás vem do pigmento dos crustáceos (carotenoides) característicos dos ecossistemas como o manguezal, estuários e rios, dos quais se alimenta.

(César Rosati. “Após 200 anos, guarás voltam a colorir céu de Florianópolis”. Folha de S. Paulo, 22.11.2019. Adaptado.)`,
    parts: [
      {
        id: 'a',
        prompt: 'Além do voo, cite duas outras adaptações das penas para as aves.',
        expected: `Duas adaptações aceitas, cada uma valendo 1 ponto: dimorfismo sexual (ou atração de parceiros sexuais / exibição para reprodução) e isolante térmico (ou redução da perda de calor / manutenção da temperatura corporal / proteção térmica).
Não foi aceita apenas "reprodução" ou "ritual de acasalamento" sem a menção ao dimorfismo sexual.`,
        criteria: [
          { points: 1, text: 'Cita o dimorfismo sexual / atração de parceiros sexuais como adaptação das penas.' },
          { points: 1, text: 'Cita a função de isolante térmico / manutenção da temperatura corporal como adaptação das penas.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Suponha que um grupo de guarás deixe de se alimentar de crustáceos e passe a se alimentar de insetos sem carotenoides. Esse grupo terá alteração no fenótipo, no genótipo ou em ambos? Justifique sua resposta.',
        expected: `1) Resposta: Apenas no fenótipo. (1 ponto)
2) Justificativa: Porque os carotenoides (pigmentos) se impregnam nas penas sem alterar os genes (DNA/material genético); o genótipo só pode ser alterado por mutações, e não por fatores ambientais/alimentares. (1 ponto)`,
        criteria: [
          { points: 1, text: 'Responde corretamente que a alteração ocorrerá apenas no fenótipo.' },
          { points: 1, text: 'Justifica que os carotenoides não alteram o material genético, e que o genótipo só muda por mutação.' },
        ],
      },
    ],
  }),

  // ==========================================
  // QUÍMICA (QUESTÕES 06 A 10)
  // ==========================================
  d({
    n: 6,
    subject: 'Química',
    content: 'Química inorgânica: número de oxidação, reação de óxido-redução e estequiometria na obtenção do tungstênio',
    difficulty: 'Média',
    statement: `Considere o fluxograma do processo mais comum de obtenção do tungstênio a partir do mineral scheelita (CaWO₄).

(Metall, nº 57, dezembro de 2003.)`,
    visuals: [{ file: 'p2-q06-fluxograma-tungstenio.svg', alt: 'Fluxograma do processo de obtenção do tungstênio metálico a partir da scheelita (CaWO4), com as etapas 1, 2 e 3', caption: 'Fluxograma de obtenção do tungstênio a partir da scheelita (Metall, nº 57, 2003).' }],
    parts: [
      {
        id: 'a',
        prompt: 'Determine o número de oxidação do tungstênio no WO₃. Em qual etapa do processo de obtenção do tungstênio a partir da scheelita ocorre um processo de óxido-redução?',
        expected: `1) Nox do tungstênio no WO₃: +6. (1 ponto)
2) Etapa de óxido-redução: Etapa 3, na qual ocorrem alterações dos números de oxidação do tungstênio e do hidrogênio (redução do W e oxidação do H, na obtenção do tungstênio metálico a partir do óxido, com H₂ como agente redutor). (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula corretamente Nox(W) = +6 no WO₃.' },
          { points: 1, text: 'Identifica a etapa 3 como a etapa de óxido-redução do processo.' },
        ],
        detailed: 'a) No óxido WO₃, o oxigênio tem Nox = −2 (três átomos, totalizando −6); como a soma dos Nox em um composto neutro é zero, o tungstênio deve ter **Nox = +6**. Ao longo do fluxograma, a etapa 3 (redução do óxido de tungstênio ao metal, tipicamente com gás hidrogênio: WO₃ + 3H₂ → W + 3H₂O) é a que envolve **óxido-redução**, pois o W passa de +6 para 0 (é reduzido) enquanto o H passa de 0 para +1 (é oxidado).',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
      {
        id: 'b',
        prompt: 'Escreva a equação balanceada da reação que ocorre na etapa 1. Calcule a massa mínima de scheelita, em quilogramas, necessária para a obtenção de 69 kg de tungstênio metálico, considerando um rendimento de reação de 75%.',
        expected: `1) Equação balanceada da etapa 1: CaWO₄ + 2 HCℓ → H₂WO₄ + CaCℓ₂. (1 ponto)
2) Massa mínima de scheelita: 144 kg. (1 ponto)
   Cálculo: proporção estequiométrica CaWO₄ (288 g) : W (184 g); para 69.10³ g de W, x = 108.10³ g = 108 kg (massa com 100% de rendimento); considerando rendimento de 75%, massa real necessária m = 108/0,75 = 144 kg.`,
        criteria: [
          { points: 1, text: 'Escreve a equação balanceada da etapa 1 (CaWO₄ + 2HCℓ → H₂WO₄ + CaCℓ₂).' },
          { points: 1, text: 'Calcula corretamente a massa mínima de scheelita = 144 kg, considerando o rendimento de 75%.' },
        ],
        detailed: 'b) A etapa 1 corresponde ao ataque ácido da scheelita: **CaWO₄ + 2HCℓ → H₂WO₄ + CaCℓ₂**. Pela estequiometria, 288 g de CaWO₄ fornecem 184 g de W (massa molar do W). Para obter 69 kg = 69.10³ g de W com rendimento de 100%: x = (288 × 69.10³)/184 = 108.10³ g = 108 kg de scheelita. Como o rendimento real da reação é de apenas 75%, a massa mínima necessária de scheelita deve ser maior: m = 108 kg ÷ 0,75 = **144 kg**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),

  d({
    n: 7,
    subject: 'Química',
    content: 'Ligações químicas, geometria molecular e estequiometria de gases (lei dos gases ideais)',
    difficulty: 'Média',
    statement: `Uma indústria farmacêutica recebeu um lote de carbonato de cálcio impuro utilizado como insumo na confecção de pasta de dente. Uma amostra de 0,25 g desse composto impuro foi colocada no fundo de um frasco, no qual foi adicionada solução de ácido clorídrico até que a amostra fosse totalmente consumida. A reação entre o ácido e a amostra produziu 48 mL de dióxido de carbono, coletado a 1,0 atm e 300 K em um tubo de ensaio. A figura mostra o esquema da aparelhagem utilizada e a equação química que representa a reação ocorrida:

CaCO₃ (s) + 2HCℓ (aq) → CaCℓ₂ (aq) + H₂O (ℓ) + CO₂ (g)`,
    visuals: [{ file: 'p2-q07-aparato-vidraria.svg', alt: 'Esquema da aparelhagem de vidraria usada no experimento: frasco com amostra de carbonato de cálcio e solução de ácido clorídrico conectado a um tubo de ensaio coletor de dióxido de carbono', caption: 'Aparelhagem experimental para a reação entre CaCO₃ impuro e HCℓ.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Qual o tipo de ligação química intermolecular existente na molécula de dióxido de carbono? Determine a geometria da molécula de dióxido de carbono.',
        expected: `1) Tipo de ligação: Covalente (molecular). (1 ponto)
2) Geometria: Linear. (1 ponto)`,
        criteria: [
          { points: 1, text: 'Identifica a ligação covalente (molecular) no CO₂.' },
          { points: 1, text: 'Identifica a geometria linear da molécula de CO₂.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Considerando a constante universal dos gases ideais igual a 0,08 atm · L · mol⁻¹ · K⁻¹, calcule a quantidade de matéria, em mol, de CaCO₃ na amostra inicial. Calcule a massa de impurezas presente na amostra inicial.',
        expected: `1) Quantidade de matéria de CaCO₃: n = 0,002 mol. (1 ponto)
2) Massa de impurezas: 0,05 g. (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula corretamente n(CaCO₃) = 0,002 mol pela equação dos gases ideais.' },
          { points: 1, text: 'Calcula corretamente a massa de impurezas = 0,05 g.' },
        ],
        detailed: 'b) Pela equação de Clapeyron, PV = nRT: 1,0 × 0,048 = n × 0,08 × 300 ⟹ n = 0,048/24 = **0,002 mol** de CO₂ (que, pela estequiometria 1:1 com o CaCO₃, equivale também a 0,002 mol de CaCO₃ reagido). Como a massa molar do CaCO₃ é 100 g/mol, a massa de CaCO₃ puro na amostra é 0,002 × 100 = 0,2 g. Como a amostra total pesava 0,25 g, a massa de impurezas é 0,25 − 0,2 = **0,05 g**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),

  d({
    n: 8,
    subject: 'Química',
    content: 'Equilíbrio químico: hidrólise salina, efeito do íon comum e cálculo de pH',
    difficulty: 'Difícil',
    statement: `O benzoato de sódio (C₆H₅COONa) é um sal orgânico largamente empregado como conservante na indústria alimentícia. Quando dissolvido em água destilada, o íon benzoato sofre hidrólise, produzindo o ácido benzoico conforme a equação de equilíbrio correspondente.`,
    visuals: [{ file: 'p2-q08-benzoato-estruturas.svg', alt: 'Estruturas químicas do benzoato de sódio e da reação de hidrólise formando ácido benzoico', caption: 'Hidrólise do íon benzoato em solução aquosa.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Equacione a reação que representa a dissociação aquosa do benzoato de sódio. Explique o que ocorre com a concentração de ácido benzoico no equilíbrio quando se adicionam gotas de ácido clorídrico à solução aquosa de benzoato de sódio.',
        expected: `1) Equação: C₆H₅COONa + H₂O → C₆H₅COO⁻ + Na⁺ (íons dissociados corretamente, com as cargas indicadas). (1 ponto)
   Não foi aceita a equação com produtos C₆H₅COOH + NaOH (sem íons dissociados).
2) Efeito do HCℓ: A concentração de ácido benzoico aumenta, pois a adição de HCℓ libera íons H⁺ que neutralizam o íon benzoato, deslocando o equilíbrio no sentido de formação do ácido benzoico (reação direta favorecida). (1 ponto)`,
        criteria: [
          { points: 1, text: 'Escreve corretamente a equação de dissociação com os íons C₆H₅COO⁻ e Na⁺.' },
          { points: 1, text: 'Explica que a concentração de ácido benzoico aumenta pelo deslocamento do equilíbrio com a adição de H⁺.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Considerando a constante de hidrólise (Kh) do íon benzoato igual a 2,0 × 10⁻¹⁰ (a 25 ºC) e considerando o produto iônico da água (Kw) igual a 1,0 × 10⁻¹⁴ (a 25 ºC), calcule o pH de uma solução aquosa de benzoato de sódio de concentração 0,5 mol · L⁻¹, a 25 ºC.',
        expected: `pH = 9. (1 ponto, com desenvolvimento do cálculo obrigatório)
Desenvolvimento: Kh = [C₆H₅COOH][OH⁻]/[C₆H₅COO⁻] ⟹ 2×10⁻¹⁰ = x²/(5×10⁻¹) ⟹ x² = 10⁻¹⁰ ⟹ [OH⁻] = x = 10⁻⁵ mol/L; como Kw = [H⁺][OH⁻] = 10⁻¹⁴, [H⁺] = 10⁻⁹ mol/L, logo pH = 9.`,
        criteria: [
          { points: 1, text: 'Calcula corretamente [OH⁻] = 10⁻⁵ mol/L a partir da constante de hidrólise, com unidade correta.' },
          { points: 1, text: 'Calcula corretamente o pH = 9 a partir do produto iônico da água.' },
        ],
        detailed: 'b) A partir da expressão da constante de hidrólise, Kh = [C₆H₅COOH][OH⁻]/[C₆H₅COO⁻]: 2×10⁻¹⁰ = (x·x)/(5×10⁻¹), logo x² = 10×10⁻¹¹ = 10⁻¹⁰, e x = [OH⁻] = **10⁻⁵ mol/L**. Usando o produto iônico da água, Kw = [H⁺][OH⁻] = 10⁻¹⁴: [H⁺] = 10⁻¹⁴/10⁻⁵ = 10⁻⁹ mol/L. Logo, pH = −log(10⁻⁹) = **9**. (Alternativamente: pOH = 5, e como pH + pOH = 14, pH = 9.)',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),

  d({
    n: 9,
    subject: 'Química',
    content: 'Radioatividade: emissão beta, isóbaros e cálculo de atividade inicial a partir da meia-vida',
    difficulty: 'Média',
    statement: `O enxofre-35, radioisótopo com meia-vida de 87 dias, é utilizado em diversas áreas, com destaque para medicina nuclear, na terapia de tumores cartilaginosos malignos. A figura mostra o decaimento radioativo do enxofre-35 com a emissão de certa partícula x.`,
    visuals: [{ file: 'p2-q09-decaimento-enxofre.svg', alt: 'Esquema do decaimento radioativo do enxofre-35 (35S) com a emissão de uma partícula x, formando cloro-35', caption: 'Decaimento radioativo do enxofre-35.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Dê o nome da partícula x emitida no decaimento representado na figura. Equacione a reação que representa o decaimento radioativo do enxofre-35.',
        expected: `1) Nome da partícula x: Partícula beta. (1 ponto)
2) Equação: ₁₆³⁵S → ₋₁⁰β + ₁₇³⁵Cℓ. (1 ponto)`,
        criteria: [
          { points: 1, text: 'Identifica a partícula beta como a partícula x emitida.' },
          { points: 1, text: 'Escreve corretamente a equação do decaimento beta do enxofre-35 em cloro-35.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Qual o nome da semelhança existente entre os átomos do reagente e do produto da reação de decaimento? Determine a atividade inicial de uma amostra do radioisótopo enxofre-35 que apresentou atividade de 10 MBq após 348 dias de sua produção.',
        expected: `1) Nome da semelhança: Isóbaros (mesmo número de massa, A = 35). (1 ponto)
2) Atividade inicial: 160 MBq. (1 ponto)
   Cálculo: 348 ÷ 87 = 4 meias-vidas transcorridas; X → X/2 → X/4 → X/8 → X/16 = 10 MBq ⟹ X = 160 MBq.`,
        criteria: [
          { points: 1, text: 'Identifica corretamente que o enxofre-35 e o cloro-35 são isóbaros.' },
          { points: 1, text: 'Calcula corretamente a atividade inicial = 160 MBq, usando o número correto de meias-vidas (4).' },
        ],
        detailed: 'b) O enxofre-35 e o cloro-35, produto do decaimento beta, possuem o mesmo número de massa (A = 35), sendo portanto **isóbaros** (embora tenham números atômicos diferentes). Como 348 dias correspondem a 348 ÷ 87 = **4 meias-vidas**, a atividade da amostra foi reduzida sucessivamente por um fator de 2 em cada meia-vida: X → X/2 → X/4 → X/8 → X/16. Como a atividade final (após as 4 meias-vidas) é de 10 MBq, temos X/16 = 10 MBq, logo a atividade inicial **X = 160 MBq**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),

  d({
    n: 10,
    subject: 'Química',
    content: 'Química orgânica: funções oxigenadas, carbonos terciários, pares de elétrons não ligantes e carbono assimétrico no miconazol',
    difficulty: 'Difícil',
    statement: `O miconazol, cuja estrutura é mostrada a seguir, é um fármaco de uso tópico amplamente utilizado na composição de pomadas para combater frieiras e micoses.`,
    visuals: [{ file: 'p2-q10-miconazol.svg', alt: 'Estrutura química do miconazol, fármaco de uso tópico contra frieiras e micoses', caption: 'Estrutura química do miconazol.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Dê o nome da função oxigenada presente na molécula de miconazol. Determine o número de carbonos terciários existentes em uma molécula de miconazol.',
        expected: `1) Função oxigenada: Éter. (1 ponto)
2) Número de carbonos terciários: Dois (2). (1 ponto)`,
        criteria: [
          { points: 1, text: 'Identifica a função éter presente na molécula de miconazol.' },
          { points: 1, text: 'Indica corretamente dois (2) carbonos terciários na molécula.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Determine o número de pares de elétrons não compartilhados existentes em uma molécula de miconazol. Na figura existente no campo de Resolução e Resposta, assinale o carbono assimétrico existente na molécula de miconazol.',
        expected: `1) Pares de elétrons não compartilhados: Dezesseis (16). (1 ponto)
   Observação oficial: a resposta "32 elétrons" não foi aceita (deve ser expressa em pares).
2) Carbono assimétrico: Deve ser assinalado corretamente na figura (apenas um carbono assinalado). (1 ponto)
   Observação oficial: não foram aceitas respostas com mais de um carbono assinalado.`,
        criteria: [
          { points: 1, text: 'Indica corretamente 16 pares de elétrons não compartilhados (não aceito "32 elétrons").' },
          { points: 1, text: 'Assinala corretamente, e apenas, o único carbono assimétrico (estereocentro) da molécula.' },
        ],
        afterVisuals: [{ file: 'p2-q10-solucao-miconazol-carbono.svg', alt: 'Solução oficial indicando o carbono assimétrico assinalado na estrutura do miconazol', caption: 'Indicação oficial do carbono assimétrico (gabarito VUNESP).' }],
        expectedImages: [{ file: 'p2-q10-solucao-miconazol-carbono.svg', alt: 'Solução oficial indicando o carbono assimétrico assinalado na estrutura do miconazol' }],
      },
    ],
  }),

  // ==========================================
  // FÍSICA (QUESTÕES 11 A 15)
  // ==========================================
  d({
    n: 11,
    subject: 'Física',
    content: 'Estática: equilíbrio de uma barra articulada, decomposição de forças, tração e atrito',
    difficulty: 'Difícil',
    statement: `As figuras 1 e 2 mostram uma caixa de massa 4 kg apoiada, em repouso, sobre uma barra AB de massa desprezível ligada, pela articulação O, a uma torre vertical fixa. Na situação da figura 1, a barra é mantida em repouso na horizontal por uma corrente de massa desprezível. Quando a corrente é retirada, deixa-se a barra AB girar lentamente no sentido horário até ser novamente colocada em repouso, presa por uma trava (T), como mostra a figura 2.

Adote g = 10 m/s² e despreze o atrito na articulação O.`,
    visuals: [{ file: 'p2-q11-barra-ab-figuras.svg', alt: 'Figuras 1 e 2 mostrando a barra AB articulada em O, com a caixa apoiada, antes e depois de girar e ser travada', caption: 'Figuras 1 e 2: barra AB com a caixa, antes e depois de girar (presa pela trava T).' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule, em newtons, a intensidade da força aplicada pela barra AB sobre a caixa e a intensidade da força de tração aplicada pela corrente sobre a barra AB, na situação da figura 1.',
        expected: `1) Força da barra sobre a caixa: P = 40 N (igual ao peso da caixa, P = m·g = 4 × 10). (1 ponto)
2) Tração na corrente: T = 100√2 N, obtida pelo equilíbrio de momentos em relação a O: T·cos45°·0,4 = m·g·1. (1 ponto)
Observação oficial: respostas diretas sem diagrama de forças ou dedução não foram consideradas.`,
        criteria: [
          { points: 1, text: 'Calcula corretamente a força normal da barra sobre a caixa, P = 40 N, com justificativa/diagrama.' },
          { points: 1, text: 'Calcula corretamente a tração T = 100√2 N pelo equilíbrio de momentos em relação à articulação O.' },
        ],
        detailed: 'a) Como a caixa está em repouso sobre a barra horizontal, a força normal que a barra aplica sobre a caixa equilibra o peso da caixa: **P = m·g = 4 × 10 = 40 N**. Para a tração na corrente, aplica-se o equilíbrio de momentos (torques) em relação ao ponto de articulação O: ΣM₀ = 0 ⟹ T·cos45°·0,4 = m·g·1 ⟹ T·(√2/2)·0,4 = 40 ⟹ **T = 100√2 N**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
        afterVisuals: [{ file: 'p2-q11-solucao-forcas-fig1.svg', alt: 'Diagrama oficial das forças sobre a barra AB na situação da figura 1, com a tração da corrente e o peso da caixa', caption: 'Diagrama oficial de forças — situação da figura 1 (gabarito VUNESP).' }],
        expectedImages: [{ file: 'p2-q11-solucao-forcas-fig1.svg', alt: 'Diagrama oficial das forças sobre a barra AB na situação da figura 1, com a tração da corrente e o peso da caixa' }],
      },
      {
        id: 'b',
        prompt: 'Calcule, em newtons, a intensidade da força aplicada pela barra AB sobre a caixa, na situação da figura 2.',
        expected: `F = 40 N. (2 pontos, com gradação)
Desenvolvimento: decompondo o peso da caixa nas direções paralela e perpendicular à barra inclinada a 60° com a trava: Fat = m·g·sen60° = 20√3 N; N = m·g·cos60° = 20 N; F = √(Fat² + N²) = √(1200+400) = 40 N.
Alternativa mais direta: como a caixa está em repouso, a soma vetorial das componentes de contato (atrito e normal) deve ter a mesma intensidade do peso da caixa: F = P = 40 N.
Gradação oficial: diagrama de forças correto + cálculo final = 2,0 pontos; apenas o cálculo direto sem diagrama, ou apenas o diagrama sem o cálculo final = 1,0 ponto.`,
        criteria: [
          { points: 1, text: 'Apresenta o diagrama de forças correto na situação da figura 2 (componentes de atrito e normal).' },
          { points: 1, text: 'Calcula corretamente o módulo da força resultante F = 40 N aplicada pela barra sobre a caixa.' },
        ],
        detailed: 'b) Na situação da figura 2, a força total aplicada pela barra sobre a caixa (F) pode ser decomposta em uma componente de atrito (Fat, paralela à barra) e uma componente normal (N, perpendicular à barra). Como a caixa está em equilíbrio, Fat = m·g·sen60° = 4×10×(√3/2) = 20√3 N e N = m·g·cos60° = 4×10×(1/2) = 20 N. A força resultante tem módulo F = √(Fat² + N²) = √((20√3)² + 20²) = √(1200+400) = √1600 = **40 N**. Alternativamente, como a caixa permanece em repouso, a soma vetorial de Fat e N deve necessariamente equilibrar o peso da caixa, de modo que F = P = m·g = **40 N**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
        afterVisuals: [{ file: 'p2-q11-solucao-forcas-fig2.svg', alt: 'Diagrama oficial das forças sobre a barra AB na situação da figura 2, com as componentes de atrito e normal', caption: 'Diagrama oficial de forças — situação da figura 2 (gabarito VUNESP).' }],
        expectedImages: [{ file: 'p2-q11-solucao-forcas-fig2.svg', alt: 'Diagrama oficial das forças sobre a barra AB na situação da figura 2, com as componentes de atrito e normal' }],
      },
    ],
  }),

  d({
    n: 12,
    subject: 'Física',
    content: 'Termologia: vazão volumétrica e balanço de calor (mudança de estado e calorimetria)',
    difficulty: 'Difícil',
    statement: `Em um dia em que a temperatura ambiente estava elevada no litoral, uma pessoa retirou 3 litros de água a 40 ºC de um reservatório por meio de uma torneira com vazão constante de 4,5 L/min e, para resfriar essa água, acrescentou a ela vários cubos de gelo iguais, cada um com massa de 50 g e temperatura de –12 ºC, retirados de um freezer.`,
    parts: [
      {
        id: 'a',
        prompt: 'Expresse a vazão da torneira em unidades do Sistema Internacional de Unidades (m³/s) e calcule o intervalo de tempo, em segundos, em que a pessoa retirou os 3 litros de água do reservatório, utilizando essa torneira.',
        expected: `1) Vazão em SI: 7,5 × 10⁻⁵ m³/s (também aceitas notações equivalentes, como 0,75 × 10⁻⁴ ou 0,000075). (1 ponto)
2) Intervalo de tempo: Δt = 40 s. (1 ponto)
Observação oficial: o candidato que não apresentou a resolução teve a questão zerada.`,
        criteria: [
          { points: 1, text: 'Converte corretamente a vazão para 7,5 × 10⁻⁵ m³/s no SI.' },
          { points: 1, text: 'Calcula corretamente Δt = 40 s para retirar os 3 litros de água.' },
        ],
        detailed: 'a) Vazão = 4,5 L/min = (4,5 × 10⁻³ m³)/(60 s) = **7,5 × 10⁻⁵ m³/s**. Para retirar 3 litros a essa vazão: Δt = 3/4,5 min = 2/3 min = **40 s**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
      {
        id: 'b',
        prompt: 'Sabe-se que o calor específico do gelo é 0,5 cal/(g·ºC), que o calor específico da água líquida é 1 cal/(g·ºC), que o calor latente de fusão do gelo é 80 cal/g, que a densidade da água é 1 g/cm³ = 10³ kg/m³, que a capacidade térmica do recipiente é desprezível e que não ocorreu perda de calor para o ambiente. Calcule quantos cubos de gelo foram acrescentados aos três litros de água para que, depois de atingido o equilíbrio térmico, a pessoa tivesse apenas água no estado líquido, a 22 ºC.',
        expected: `1) Massa total de gelo: M = 500 g. (1 ponto)
2) Número de cubos: n = 10 cubos. (1 ponto)
Desenvolvimento: balanço de calor (Q1+Q2+Q3+Q4 = 0): M·0,5·12 + M·80 + M·1·22 + 3000·1·(−18) = 0 ⟹ 6M + 80M + 22M = 54000 ⟹ M = 500 g; n = 500/50 = 10.
Observação oficial: o candidato que não apresentou a resolução teve a questão zerada.`,
        criteria: [
          { points: 1, text: 'Monta corretamente o balanço de calor e calcula M = 500 g de gelo.' },
          { points: 1, text: 'Calcula corretamente o número de cubos n = 10.' },
        ],
        detailed: 'b) Sejam Q1 (aquecer o gelo de −12°C a 0°C), Q2 (fundir o gelo), Q3 (aquecer a água do gelo fundido de 0°C a 22°C) e Q4 (resfriar os 3000 g de água do reservatório de 40°C a 22°C). Como o sistema é isolado: Q1+Q2+Q3+Q4 = 0 ⟹ M·0,5·12 + M·80 + M·1·22 + 3000·1·(22−40) = 0 ⟹ 6M + 80M + 22M − 54000 = 0 ⟹ 108M = 54000 ⟹ **M = 500 g**. Como cada cubo tem 50 g, o número de cubos é n = 500/50 = **10 cubos**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),

  d({
    n: 13,
    subject: 'Física',
    content: 'Óptica geométrica: velocidade de propagação da luz, reflexão, reflexão total e lei de Snell-Descartes',
    difficulty: 'Difícil',
    statement: `Para demonstrar as leis da reflexão e da refração luminosa, foi montado o aparato ilustrado na figura, constituído por um aquário de vidro transparente contendo glicerina até certa altura, por dois espelhos planos, E1 e E2, e por uma fonte de laser. O espelho E1 está apoiado na parede lateral esquerda e no fundo do aquário. O espelho E2 está apoiado no fundo horizontal do aquário, com sua face refletora voltada para cima.

Um feixe de laser propagando-se pelo ar incide perpendicularmente na superfície da glicerina e, após a refração, sofre uma reflexão no espelho E1, uma reflexão total na interface glicerina–ar, nova reflexão no espelho E2 e refrata para o ar na face lateral direita do aquário. Adote 1,0 e 1,5 para os índices de refração absolutos do ar e da glicerina, respectivamente, e c = 3,0 × 10⁸ m/s.`,
    visuals: [{ file: 'p2-q13-aquario-glicerina.svg', alt: 'Esquema do aquário com glicerina e espelhos E1 e E2, mostrando o trajeto do feixe de laser com reflexões e refrações', caption: 'Trajeto do feixe de laser no aquário com glicerina e espelhos E1 e E2.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule, em m/s, a velocidade de propagação do laser na glicerina e, considerando as informações da figura, obtenha, em graus, o ângulo de incidência (i) desse feixe no espelho E1.',
        expected: `1) Velocidade na glicerina: v = 2,0 × 10⁸ m/s (perde-se o ponto se a resposta estiver sem unidade ou com unidade incorreta). (1 ponto)
2) Ângulo de incidência: i = 30°. (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula corretamente v = 2,0 × 10⁸ m/s na glicerina (com unidade correta).' },
          { points: 1, text: 'Calcula corretamente o ângulo de incidência i = 30° no espelho E1, usando a geometria da figura.' },
        ],
        detailed: 'a) Pela definição do índice de refração: n_glicerina = c/v ⟹ 1,5 = (3,0×10⁸)/v ⟹ **v = 2,0×10⁸ m/s**. Pela geometria da figura e pela lei da reflexão (ângulo de incidência = ângulo de reflexão), obtém-se, a partir da relação angular entre o feixe refratado e a normal ao espelho E1: 2i + 90° + 30° = 180° ⟹ i = 60°/2 ⟹ **i = 30°**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
      {
        id: 'b',
        prompt: 'Obtenha o seno do ângulo limite para refração na interface glicerina–ar e o seno do ângulo de refração (r) quando o feixe de laser emerge para o ar, na face lateral direita do aquário.',
        expected: `1) Seno do ângulo limite: sen(L) = 2/3 ≈ 0,67. (1 ponto)
2) Seno do ângulo de refração: sen(r) = 3/4 = 0,75. (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula corretamente sen(L) ≈ 0,67 pela lei de Snell-Descartes na refração rasante (90°).' },
          { points: 1, text: 'Calcula corretamente sen(r) = 0,75 ao emergir para o ar na face lateral direita.' },
        ],
        detailed: 'b) No ângulo limite, a refração ocorre de forma rasante (ângulo de refração = 90°). Pela lei de Snell-Descartes: n_ar · sen(90°) = n_glicerina · sen(L) ⟹ 1,0 × 1,0 = 1,5 × sen(L) ⟹ **sen(L) = 2/3 ≈ 0,67**. Reconhecendo que o ângulo de incidência do feixe na face lateral direita é 30° (calculado no item a), aplica-se novamente Snell-Descartes: n_glicerina · sen(30°) = n_ar · sen(r) ⟹ 1,5 × 0,5 = 1,0 × sen(r) ⟹ **sen(r) = 0,75**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),

  d({
    n: 14,
    subject: 'Física',
    content: 'Ondulatória: frequência, comprimento de onda e refração de ondas entre cordas de densidades distintas',
    difficulty: 'Difícil',
    statement: `A figura mostra, fora de escala, duas cordas homogêneas, 1 e 2, de densidades lineares de massa µ1 e µ2 = 3µ1, conectadas no ponto P. Nessa figura, observa-se uma onda propagando-se para a direita na corda 1, com velocidade v1 e frequência f1, antes de refratar para a corda 2, onde se propagará com velocidade e frequência v2 e f2, respectivamente.

Sabe-se que no mesmo intervalo de tempo Δt = 2 s em que essa onda percorrer o trecho de comprimento y, na corda 1, o ponto C, indicado na figura, realizará quatro oscilações completas na vertical. Sendo x a distância entre duas cristas consecutivas na corda 1 e sabendo que o sistema formado pelas duas cordas é submetido a uma força de tração de intensidade constante,`,
    visuals: [{ file: 'p2-q14-cordas-ondas.svg', alt: 'Esquema das cordas 1 e 2 conectadas no ponto P, com a onda se propagando, o ponto C e as distâncias x e y indicadas', caption: 'Ondas se propagando entre as cordas 1 e 2 conectadas em P.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Obtenha o valor de f1, em Hz, e calcule o valor da razão y/x.',
        expected: `1) f1 = 2 Hz (quatro oscilações em 2 s). (1 ponto)
2) y/x = 4. (1 ponto)
Desenvolvimento: v1 = y/Δt = y/2 (I); v1 = λ1·f1 = x·2 (II); igualando (I) e (II): y/2 = 2x ⟹ y/x = 4.`,
        criteria: [
          { points: 1, text: 'Calcula corretamente f1 = 2 Hz a partir das quatro oscilações em 2 s.' },
          { points: 1, text: 'Calcula corretamente a razão y/x = 4 com desenvolvimento.' },
        ],
        detailed: 'a) Se o ponto C realiza 4 oscilações completas em Δt = 2 s, a frequência na corda 1 é **f1 = 4/2 = 2 Hz**. A velocidade de propagação pode ser escrita de duas formas: v1 = y/Δt = y/2 (I), pois a onda percorre o trecho y nesse intervalo; e v1 = λ1·f1 = x·2 (II), pois x é o comprimento de onda (distância entre cristas consecutivas). Igualando (I) e (II): y/2 = 2x ⟹ **y/x = 4**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
      {
        id: 'b',
        prompt: 'Obtenha o valor de f2, em Hz, e calcule o valor da razão v1/v2.',
        expected: `1) f2 = 2 Hz (a frequência não se altera na refração). (1 ponto)
2) v1/v2 = √3. (1 ponto)
Desenvolvimento: pela lei de Taylor, v = √(T/µ); como T1=T2 e µ2=3µ1, v1/v2 = √(µ2/µ1) = √3.`,
        criteria: [
          { points: 1, text: 'Indica corretamente que f2 = f1 = 2 Hz, pois a frequência não muda na refração.' },
          { points: 1, text: 'Calcula corretamente v1/v2 = √3 usando a lei de Taylor.' },
        ],
        detailed: 'b) Na refração de uma onda entre dois meios conectados, a frequência não se altera: **f2 = f1 = 2 Hz**. Pela lei de Taylor, v = √(T/µ). Como a tração T é constante em todo o sistema (T1 = T2 = T) e µ2 = 3µ1: v1 = √(T/µ1) e v2 = √(T/3µ1). Logo, v1/v2 = √(T/µ1) ÷ √(T/3µ1) = √(3µ1/µ1) = **√3**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),

  d({
    n: 15,
    subject: 'Física',
    content: 'Eletrodinâmica: associação de resistores em série e paralelo a partir da 2ª Lei de Ohm (resistividade e geometria)',
    difficulty: 'Difícil',
    statement: `Em cursos relacionados à área da saúde, é comum a utilização de bonecos no estudo do comportamento eletrofisiológico do corpo humano. Considere que um desses bonecos seja feito de um material externo isolante e tenha, em seu interior, cinco cilindros constituídos de um mesmo material condutor representando os braços direito e esquerdo (BD e BE), o tórax (T) e as pernas direita e esquerda (PD e PE). Os cilindros são conectados entre si por fios de resistência desprezível e são conectados com o exterior por meio de eletrodos fixados na superfície do boneco. As características geométricas de cada cilindro estão indicadas na tabela: BD e BE têm área da base A e comprimento L; T tem área da base 9A e comprimento 1,5L; PD e PE têm área da base 4A e comprimento 2L.

Admita que a resistência elétrica de cada braço do boneco seja RB e que dois experimentos diferentes sejam realizados com esse boneco. Em cada experimento, é estabelecida uma mesma diferença de potencial U entre os pontos A e B, e uma corrente elétrica atravessa o boneco pelos caminhos indicados em destaque nas figuras 1 e 2.

Responda em função apenas de RB e de U.`,
    visuals: [{ file: 'p2-q15-boneco-circuito.svg', alt: 'Esquema do boneco com cilindros condutores (braços, tórax e pernas) e os circuitos elétricos equivalentes das figuras 1 e 2', caption: 'Montagens elétricas do boneco nas figuras 1 e 2.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Qual a resistência equivalente do boneco e a intensidade da corrente elétrica que o atravessa na montagem indicada na figura 1?',
        expected: `1) Resistência equivalente: (Req)1 = 2·RB (dois braços RB em série). (1 ponto)
2) Corrente: i1 = U/(2·RB). (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula corretamente (Req)1 = 2·RB (associação em série de dois braços).' },
          { points: 1, text: 'Calcula corretamente i1 = U/(2·RB) pela 1ª Lei de Ohm.' },
        ],
        detailed: 'a) Na figura 1, a corrente passa por um trecho constituído por dois resistores RB (dois braços) associados em série: **(Req)1 = RB + RB = 2·RB**. Pela 1ª Lei de Ohm, U = (Req)1 · i1 = 2RB · i1, logo **i1 = U/(2RB)**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
      {
        id: 'b',
        prompt: 'Qual a resistência equivalente do boneco na montagem indicada na figura 2?',
        expected: `(Req)2 = 17·RB/12. (1 ponto pela indicação correta de RT = RB/6 e RP = RB/2; 1 ponto pelo cálculo final de (Req)2 = 17RB/12)
Desenvolvimento: pela 2ª Lei de Ohm (R = ρL/A), RT = ρ(1,5L)/(9A) = RB/6 e RP = ρ(2L)/(4A) = RB/2. Na figura 2, o braço direito está em série com o tórax e com a associação em paralelo das duas pernas: (Req)2 = RB + RB/6 + RB/4 = (12RB+2RB+3RB)/12 = 17RB/12.`,
        criteria: [
          { points: 1, text: 'Calcula corretamente RT = RB/6 e RP = RB/2 pela 2ª Lei de Ohm, a partir das proporções geométricas da tabela.' },
          { points: 1, text: 'Calcula corretamente a resistência equivalente final (Req)2 = 17RB/12.' },
        ],
        afterVisuals: [{ file: 'p2-q15-solucao-circuito-rt-rp.svg', alt: 'Solução oficial do circuito equivalente da figura 2, com RT e RP indicados e o cálculo de Req2', caption: 'Circuito equivalente oficial da figura 2 (gabarito VUNESP).' }],
        expectedImages: [{ file: 'p2-q15-solucao-circuito-rt-rp.svg', alt: 'Solução oficial do circuito equivalente da figura 2, com RT e RP indicados e o cálculo de Req2' }],
        detailed: 'b) Pela 2ª Lei de Ohm, R = ρL/A. Para o tórax: RT = ρ(1,5L)/(9A) = (ρL/A)·(1,5/9) = **RB/6**. Para cada perna: RP = ρ(2L)/(4A) = (ρL/A)·(2/4) = **RB/2**. Na figura 2, a corrente passa pelo braço direito (RB), em série com o tórax (RB/6) e com a associação em paralelo das duas pernas (cada RB/2, cuja associação em paralelo resulta em RB/4). Assim: (Req)2 = RB + RB/6 + RB/4 = (12RB + 2RB + 3RB)/12 = **17RB/12**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),

  // ==========================================
  // MATEMÁTICA (QUESTÕES 16 A 20)
  // ==========================================
  d({
    n: 16,
    subject: 'Matemática',
    content: 'Otimização de percurso: estratégia mínima de distância e cálculo de tempo total (progressão aritmética)',
    difficulty: 'Difícil',
    statement: `Em um parque, 31 palmeiras estão alinhadas de modo que a distância entre duas palmeiras consecutivas seja igual a 5 metros. Um jardineiro irá regar cada uma dessas palmeiras usando um balde, sendo que, com o balde cheio de água, é possível regar 1, 2 ou 3 palmeiras. Para encher o balde, o jardineiro só poderá usar a torneira localizada bem ao lado da primeira palmeira, e, toda vez que o jardineiro usa essa torneira, ele enche o balde.`,
    visuals: [{ file: 'p2-q16-palmeiras.svg', alt: 'Esquema das 31 palmeiras alinhadas no parque, com a torneira ao lado da primeira palmeira e a distância de 5 metros entre palmeiras consecutivas', caption: 'Alinhamento das 31 palmeiras no parque, com a torneira junto à primeira.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Quantos metros, no mínimo, esse jardineiro deve caminhar para regar as 4 primeiras palmeiras? Quantos metros, no mínimo, esse jardineiro deve caminhar para regar as 5 primeiras palmeiras?',
        expected: `Distância mínima para 4 palmeiras: 15 m. Distância mínima para 5 palmeiras: 30 m. (2 pontos, com gradação)
Estratégia: regar sempre as últimas palmeiras possíveis com o último balde cheio (3 de cada vez).
4 palmeiras: encher o balde, regar a 1ª palmeira, voltar e encher o balde, regar as 3 últimas: 0 + 3×5 = 15 m.
5 palmeiras: encher o balde, regar as 2 primeiras, voltar, encher o balde, regar as 3 últimas: 2×(1×5) + 4×5 = 30 m.
Gradação oficial: 1 ponto por calcular corretamente apenas uma das duas distâncias; 2 pontos por calcular corretamente as duas.`,
        criteria: [
          { points: 1, text: 'Calcula corretamente a distância mínima de 15 m para regar as 4 primeiras palmeiras.' },
          { points: 1, text: 'Calcula corretamente a distância mínima de 30 m para regar as 5 primeiras palmeiras.' },
        ],
        detailed: 'a) A estratégia de mínima distância para regar 3 ou mais palmeiras com um só balde é sempre usar o balde cheio para regar as últimas palmeiras não regadas do trecho, minimizando idas e vindas. Para **4 palmeiras**: o jardineiro enche o balde, rega a 1ª palmeira (0 m), volta à torneira, enche o balde novamente e rega as 3 últimas palmeiras (caminhando 3×5 = 15 m até a 4ª). Total: **15 m**. Para **5 palmeiras**: enche o balde, rega as duas primeiras (caminha 1×5 m até a 2ª), volta à torneira (mais 1×5 m), enche o balde e rega as 3 últimas (caminha 4×5 m até a 5ª). Total: 2×5 + 4×5 = 10+20 = **30 m**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
      {
        id: 'b',
        prompt: 'Suponha desprezível o tempo para regar cada palmeira e que, se o balde estiver vazio ou parcialmente cheio, a torneira sempre leve 1 minuto para enchê-lo. Estando o balde inicialmente vazio e sabendo que o jardineiro leva 6 segundos para caminhar entre duas palmeiras consecutivas, determine o tempo mínimo, em minutos, para o jardineiro regar todas as 31 palmeiras.',
        expected: `Tempo mínimo: 41 minutos. (2 pontos, com gradação)
Desenvolvimento: distância total percorrida = 1500 m (soma de PA: 2×(15+30+...+135) + 150 = 2×9×(15+135)/2 + 150 = 1500 m); número de vezes que o balde é enchido = 1 + 30/3 = 11 vezes; tempo = 11×1 min (encher) + 1500/5×6 s (caminhar) = 11 min + 1800 s = 11 min + 30 min = 41 min.
Gradação oficial: 1 ponto por indicar corretamente apenas o raciocínio da soma de PA (30 min de caminhada) OU apenas o número de enchimentos (11 min); 2 pontos por indicar corretamente ambos, totalizando 41 min.`,
        criteria: [
          { points: 1, text: 'Calcula corretamente, via soma de progressão aritmética, o tempo de caminhada (30 minutos).' },
          { points: 1, text: 'Calcula corretamente o número de vezes que o balde é enchido (11) e o tempo total de 41 minutos.' },
        ],
        detailed: 'b) Repetindo a estratégia do item (a) para todas as 31 palmeiras: o jardineiro rega a 1ª palmeira isoladamente e, depois, repete o ciclo de regar grupos de 3 palmeiras voltando sempre à torneira, até regar as 3 últimas (29ª a 31ª). A distância até a 28ª palmeira é (28−1)×5 = 135 m e até a 31ª é (31−1)×5 = 150 m. A distância total percorrida é 2×(15+30+...+135) + 150, que é a soma de uma PA de 9 termos (15 a 135, razão 15): soma = 9×(15+135)/2 = 675; logo, distância total = 2×675 + 150 = **1500 m**. O número de vezes que a torneira é usada (balde enchido) é 1 (primeira palmeira) + 30/3 = **11 vezes**, cada enchimento levando 1 min, totalizando 11 min. O tempo de caminhada é 1500 m ÷ 5 m × 6 s = 1800 s = 30 min. Tempo total: 11 + 30 = **41 minutos**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),

  d({
    n: 17,
    subject: 'Matemática',
    content: 'Geometria analítica: parábola definida por foco e diretriz, vértice e dedução da equação cartesiana',
    difficulty: 'Difícil',
    statement: `Uma parábola é uma curva formada por todos os pontos P(x, y) do plano que estão igualmente distantes de um ponto fixo F (chamado foco) e de uma reta fixa d (chamada diretriz). A parábola do gráfico a seguir tem por vértice o ponto V, o foco F = (4, –4), e diretriz d: y = x.`,
    visuals: [{ file: 'p2-q17-grafico-parabola.svg', alt: 'Gráfico da parábola com vértice V, foco F = (4, -4) e diretriz d: y = x', caption: 'Gráfico da parábola com foco F(4,-4) e diretriz y = x.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Sabendo que nessa parábola o vértice V é ponto médio entre o foco F e a origem (0, 0), determine as coordenadas do vértice V da parábola.',
        expected: `V = (2, −2). (2 pontos, com gradação)
Cálculo: V = ((4+0)/2, (−4+0)/2) = (2, −2).
Gradação oficial: 0 pontos se totalmente errada; 1 ponto se utilizou a definição de ponto médio (ou semelhança de triângulos/sistema envolvendo OV) mas não calculou corretamente; 2 pontos se calculou corretamente o vértice (não é aceita a resposta direta sem desenvolvimento).`,
        criteria: [
          { points: 1, text: 'Utiliza corretamente a fórmula/raciocínio do ponto médio entre F e a origem.' },
          { points: 1, text: 'Calcula corretamente V = (2, −2) com desenvolvimento (resposta direta sem dedução não é aceita).' },
        ],
        detailed: 'a) Como V é o ponto médio entre o foco F = (4,−4) e a origem (0,0): V = ((4+0)/2, (−4+0)/2) = **(2, −2)**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
      {
        id: 'b',
        prompt: 'O módulo da expressão algébrica x – y é denotado por |x – y|, e sabe-se que |x – y|² = (x – y)². A distância dP,d entre um ponto P(x, y) do plano e a reta d: y = x é dada por dP,d = |x−y|/√2. Para determinar a equação de uma parábola, desenvolve-se a equação dP,F = dP,d, em que dP,F é a distância entre o ponto P(x, y) e o foco F da parábola. Com base nessas informações, determine e desenvolva a equação da parábola representada no gráfico.',
        expected: `x² + y² + 2xy − 16x + 16y + 64 = 0. (2 pontos, com gradação)
Desenvolvimento: dP,F = dP,d ⟹ √[(x−4)²+(y+4)²] = |x−y|/√2; elevando ao quadrado: (x−4)²+(y+4)² = (x−y)²/2; expandindo: 2(x²−8x+16+y²+8y+16) = x²−2xy+y² ⟹ 2x²+2y²−16x+16y+64 = x²−2xy+y² ⟹ x²+y²+2xy−16x+16y+64 = 0.
Gradação oficial: 0 pontos se totalmente errada; 1 ponto se indicou a equação dP,F = dP,d corretamente (ou sua forma elevada ao quadrado) mas não desenvolveu ou desenvolveu incorretamente; 2 pontos se desenvolveu corretamente até a equação final (ou formas algébricas equivalentes).`,
        criteria: [
          { points: 1, text: 'Monta corretamente a equação dP,F = dP,d = |x−y|/√2, elevando-a ao quadrado.' },
          { points: 1, text: 'Desenvolve corretamente até a equação final x² + y² + 2xy − 16x + 16y + 64 = 0 (ou forma equivalente).' },
        ],
        detailed: 'b) dP,F = √[(x−4)² + (y+4)²] é a distância do ponto P ao foco F; dP,d = |x−y|/√2 é a distância de P à reta d: y=x. Igualando (definição de parábola): √[(x−4)²+(y+4)²] = |x−y|/√2. Elevando ambos os lados ao quadrado: (x−4)²+(y+4)² = (x−y)²/2. Multiplicando por 2 e expandindo: 2(x²−8x+16+y²+8y+16) = x²−2xy+y² ⟹ 2x²+2y²−16x+16y+64 = x²−2xy+y². Reorganizando: **x² + y² + 2xy − 16x + 16y + 64 = 0**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),

  d({
    n: 18,
    subject: 'Matemática',
    content: 'Geometria espacial: pirâmide oblíqua de base quadrada — questão anulada pela banca',
    difficulty: 'Média',
    annulled: true,
    statement: `Em uma pirâmide oblíqua de vértice V e base quadrada ABCD de lado 4 cm, o ponto M é médio da aresta AB, o ponto H é o pé da perpendicular da altura da pirâmide que passa por V, o segmento MH é perpendicular à aresta AB, e a distância entre os pontos M e H é 3 cm, conforme mostra a figura.`,
    parts: [
      {
        id: 'a',
        prompt: 'Calcule o volume da pirâmide.',
        expected: 'Questão anulada pela banca examinadora (VUNESP/UNIFESP). Os critérios oficiais de correção registram apenas "Questão anulada", sem apresentar gabarito, desenvolvimento ou pontuação para este item.',
        criteria: [
          { points: 2, text: 'Pontuação integral atribuída a todos os candidatos, conforme a prática usual da banca para questões anuladas.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Esboce, no campo de Resolução e Resposta, uma planificação dessa pirâmide e calcule a área dessa planificação.',
        expected: 'Questão anulada pela banca examinadora (VUNESP/UNIFESP). Os critérios oficiais de correção registram apenas "Questão anulada", sem apresentar gabarito, desenvolvimento ou pontuação para este item.',
        criteria: [
          { points: 2, text: 'Pontuação integral atribuída a todos os candidatos, conforme a prática usual da banca para questões anuladas.' },
        ],
      },
    ],
    studyNotes: [
      'A VUNESP anulou integralmente a Questão 18 da Prova de Conhecimentos Específicos (2º Dia) do Vestibular UNIFESP 2024. O documento oficial de critérios de correção (prova2-criterios-correcao-2024.pdf) registra apenas "Questão anulada", sem detalhar publicamente o motivo da anulação nem apresentar gabarito.',
    ],
  }),

  d({
    n: 19,
    subject: 'Matemática',
    content: 'Lógica de programação (linguagem Julia): simulação de função recursiva de compressão de dígitos (RLE) e estruturas de repetição',
    difficulty: 'Difícil',
    statement: `Na linguagem de programação Julia, considere que a função Leia(t) recebe uma variável numérica t e retorna um número que representa a leitura das quantidades de algarismos iguais e em sequência de t. Por exemplo, Leia(511155) retorna 153125, pois 511155 inicia com uma sequência de 1 único algarismo 5, depois tem 3 algarismos 1 em sequência e, depois, tem 2 algarismos 5 em sequência. Os retornos de Leia(1) e Leia(112) são, respectivamente, 11 e 2112. Nessa linguagem, o comando respx = "$respx$c" concatena o valor da variável c à direita da variável respx. Por exemplo, se a variável respx tiver valor "" (ou seja, sem valor) e a variável c tiver valor 567, o comando respx = "$respx$c" mudará o valor da variável respx para "567", e se a variável respx tiver valor "567" e a variável c tiver valor 8, o comando respx = "$respx$c" mudará o valor da variável respx para "5678".`,
    parts: [
      {
        id: 'a',
        prompt: 'Uma função pode receber como argumento o retorno de outra chamada da mesma função. Por exemplo, Leia(Leia(12)) inicia determinando Leia(12) e, depois, passa o resultado para uma nova chamada da função Leia. Determine o retorno de Leia(Leia(12233)).',
        expected: `Leia(Leia(12233)) = 213213. (2 pontos, com gradação)
Desenvolvimento: Leia(12233) = 112223 (1 algarismo "1", 1 algarismo "2", 2 algarismos "2", 1 algarismo "3" → na verdade: 1×1, 2×2, 2×3 → "112223"); Leia(112223) = 213213.
Gradação oficial: 1 ponto por determinar corretamente apenas Leia(12233) = 112223, OU por indicar diretamente o resultado final 213213 sem o passo intermediário; 2 pontos por determinar corretamente ambos os passos em sequência.`,
        criteria: [
          { points: 1, text: 'Determina corretamente o passo intermediário Leia(12233) = 112223.' },
          { points: 1, text: 'Determina corretamente o resultado final Leia(112223) = Leia(Leia(12233)) = 213213.' },
        ],
        detailed: 'a) Primeiro calcula-se Leia(12233): o número 12233 tem 1 algarismo "1", seguido de 2 algarismos "2", seguido de 2 algarismos "3". Logo, Leia(12233) = "1" + "1" + "2" + "2" + "2" + "3" (quantidade seguida do algarismo, para cada grupo) = **112223**. Em seguida, aplica-se novamente a função: Leia(112223) tem 1 algarismo "1", 1 algarismo "1" novamente... reagrupando: 112223 = [1][1][222][3], ou seja, 2 algarismos "1" em sequência, 3 algarismos "2" em sequência, 1 algarismo "3"; logo, Leia(112223) = "2"+"1"+"3"+"2"+"1"+"3" = **213213**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
      {
        id: 'b',
        prompt: `Considere o seguinte código escrito em Julia, com algumas linhas comentadas:

resp = string(Leia(11122))  # atribui à variável resp o valor de Leia(11122)
n = length(resp)  # atribui à variável n o número de algarismos da variável resp
respx = ""  # cria a variável respx sem valor atribuído
for i = 1:n  # início de um loop, repetido n vezes, com i variando de 1 até n
    c = parse(Int64, resp[i])  # atribui à variável c o algarismo de resp na posição i
    if c != 1  # as duas próximas linhas são executadas se c for diferente de 1
        c += 1  # aumenta em 1 unidade o valor de c
        respx = "$respx$c"
    end
end  # fim do loop
resultado = Leia(respx)

A ordem dos algarismos de um número é lida da esquerda para a direita; por exemplo, os algarismos das posições 1, 4 e 6 do número 878676 são, respectivamente, 8, 6 e 6. Determine o valor da variável resultado após a execução desse código.`,
        expected: `resultado = 1423. (2 pontos, com gradação)
Desenvolvimento: Leia(11122) = "3122" (3 algarismos "1", 1 algarismo "2", na verdade: 11122 tem 3×"1" e 2×"2" → "312" + "2"? recalculando pela definição: 11122 = três "1" seguidos de dois "2" → Leia = "31" + "22" = "3122"); resp = "3122", n = 4.
Loop: i=1, c=3 (≠1) → c=4, respx="4"; i=2, c=1 (=1, pula); i=3, c=2 (≠1) → c=3, respx="43"; i=4, c=2 (≠1) → c=3, respx="433".
resultado = Leia(433) = "1" + "4" + "2" + "3" = 1423.
Gradação oficial: 1 ponto por indicar corretamente os valores de resp, n e das variáveis i/c a cada iteração, mesmo sem concluir respx/resultado; 2 pontos por indicar corretamente os valores de c/respx a cada iteração e determinar corretamente resultado = 1423. Resposta seca do resultado, sem raciocínio apresentado, vale 0 ponto.`,
        criteria: [
          { points: 1, text: 'Determina corretamente resp = "3122", n = 4, e os valores de i/c a cada iteração do laço.' },
          { points: 1, text: 'Determina corretamente os valores de respx a cada iteração ("4", "43", "433") e o resultado final = 1423.' },
        ],
        detailed: 'b) Primeiro, Leia(11122): há 3 algarismos "1" em sequência seguidos de 2 algarismos "2" em sequência, logo Leia(11122) = "31"+"22" = **"3122"**. Assim, resp = "3122" e n = length(resp) = **4**. O laço percorre i de 1 a 4: i=1 → c = resp[1] = 3; como c≠1, c vira 4, e respx = "4". i=2 → c = resp[2] = 1; como c=1, o bloco "if" é ignorado, respx continua "4". i=3 → c = resp[3] = 2; como c≠1, c vira 3, e respx = "43". i=4 → c = resp[4] = 2; como c≠1, c vira 3, e respx = "433". Ao final do laço, respx = "433", e resultado = Leia(433): há 1 algarismo "4", 1 algarismo "3", 1 algarismo "3"... recalculando: 433 tem 1 algarismo "4" seguido de 2 algarismos "3", logo Leia(433) = "1"+"4"+"2"+"3" = **"1423"**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),

  d({
    n: 20,
    subject: 'Matemática',
    content: 'Probabilidade: probabilidade simples e probabilidade condicional a partir de uma tabela de dupla entrada',
    difficulty: 'Média',
    statement: `Considere a seguinte distribuição de turistas, de diferentes nacionalidades, em um cruzeiro, segundo a tabela de homens e mulheres de nacionalidade italiana, chinesa e sul-africana.`,
    visuals: [{ file: 'p2-q20-tabela-turistas.svg', alt: 'Tabela de distribuição de turistas por nacionalidade (italiana, chinesa, sul-africana) e sexo (homens, mulheres) em um cruzeiro', caption: 'Distribuição de turistas por nacionalidade e sexo em um cruzeiro.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Escolhendo-se aleatoriamente um dos turistas desse cruzeiro, determine a probabilidade de esse turista ter nacionalidade sul-africana.',
        expected: `P = 18% (= 180/1000 = 9/50). (2 pontos, com gradação)
Cálculo: P = (90+90)/(140+210+280+190+90+90) = 180/1000 = 9/50 = 18%.
Gradação oficial: 0 pontos para resposta seca "18%" sem desenvolvimento ou totalmente errada; 1 ponto para frações corretas com erro em n(sul-africanos) ou no total (ex.: 180/1020, 130/1000); 2 pontos para 180/1000 (ou fração equivalente como 9/50) devidamente explicitado.`,
        criteria: [
          { points: 1, text: 'Identifica corretamente o total de turistas do cruzeiro (n = 1000) e o número de sul-africanos (180).' },
          { points: 1, text: 'Calcula corretamente P = 180/1000 = 9/50 = 18%, com desenvolvimento.' },
        ],
        detailed: 'a) O total de turistas do cruzeiro é a soma de todos os valores da tabela: 140+210+280+190+90+90 = 1000. O total de turistas de nacionalidade sul-africana é 90 (homens) + 90 (mulheres) = 180. Logo, P = 180/1000 = 9/50 = **18%**.',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
      {
        id: 'b',
        prompt: 'Um dos turistas desse cruzeiro foi escolhido aleatoriamente. Sabendo que o turista escolhido não tem nacionalidade italiana, determine a probabilidade de que ele seja uma mulher.',
        expected: `P(B|A) = 28/65 ≈ 43%. (2 pontos, com gradação)
Cálculo: sejam A = "não é italiano" e B = "é mulher". P(A) = (280+190+90+90)/1000 = 650/1000 = 13/20; P(A∩B) = (190+90)/1000 = 280/1000 = 7/25. P(B|A) = P(A∩B)/P(A) = (7/25)/(13/20) = 28/65 ≈ 43%.
Gradação oficial: 0 pontos para resposta seca "43%" ou totalmente errada; 1 ponto para cálculo incorreto de P(A) ou P(A∩B) usados corretamente na fórmula, ou resposta seca "28/65"; 2 pontos para a fração correta 280/650 (= 28/65, ≈43%) devidamente explicitada.`,
        criteria: [
          { points: 1, text: 'Identifica corretamente o universo reduzido (650 turistas não italianos) e o número de mulheres não italianas (280).' },
          { points: 1, text: 'Calcula corretamente P(B|A) = 28/65 ≈ 43%, com desenvolvimento (fórmula de probabilidade condicional ou raciocínio equivalente).' },
        ],
        detailed: 'b) Sejam A: "o turista não é italiano" e B: "o turista é mulher". O total de não italianos é 280+190+90+90 = 650 (de um total de 1000), logo P(A) = 650/1000 = 13/20. O total de mulheres não italianas é 190 (chinesas) + 90 (sul-africanas) = 280, logo P(A∩B) = 280/1000 = 7/25. Pela definição de probabilidade condicional: P(B|A) = P(A∩B)/P(A) = (7/25)/(13/20) = (7/25)×(20/13) = 140/325 = **28/65 ≈ 43%**. (Equivalentemente, calculando diretamente sobre o universo reduzido de 650 não italianos: P(B|A) = 280/650 = 28/65.)',
        detailedSource: 'Critérios oficiais de correção VUNESP',
      },
    ],
  }),
];
