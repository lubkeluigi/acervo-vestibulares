import { q, img, tex } from './uea2025vu-helpers.js';

export const uea2025vuLote06 = [
  q({
    n: 71, subject: 'Física', content: 'Ondas sonoras e comprimento de onda',
    statement: 'Na figura, tem-se a representação gráfica de uma onda sonora e a correspondente representação gráfica da variação da pressão do ar em função da distância.', blockTypes: ['prose'],
    images: [img('uea2025vu-q71-onda-sonora.svg', 'Representações de uma onda sonora: compressão e rarefação do ar e gráfico da variação de pressão em função da distância, com X entre duas cristas e Y entre o eixo e a crista.')],
    statementAfter: 'A partir da análise das duas representações, é possível associar o valor de', afterBlockTypes: ['command'],
    alternatives: [
      'X com o valor do período da onda sonora.',
      'X com o valor do comprimento de onda da onda sonora.',
      'X com o valor da amplitude da onda sonora.',
      'Y com o valor do período da onda sonora.',
      'Y com o valor do comprimento de onda da onda sonora.',
    ], answer: 'B',
    why: 'X mede a distância entre dois pontos equivalentes consecutivos da onda, como duas cristas. Essa distância espacial é o comprimento de onda.',
    resolution: [
      'O gráfico relaciona a variação da pressão à distância, e não ao tempo. Por isso, a medida horizontal X entre duas cristas consecutivas representa o comprimento de onda λ.',
      'Y mede o afastamento vertical entre o eixo de equilíbrio e uma crista, correspondendo à amplitude. O período, por ser um intervalo de tempo, não é obtido diretamente por nenhuma dessas medidas.',
    ],
    wrong: {
      0: 'O período é um intervalo de tempo; X é medido no eixo das distâncias e representa o comprimento de onda.',
      2: 'X é uma distância horizontal entre cristas. A amplitude é associada à medida vertical Y.',
      3: 'Y representa a amplitude da oscilação de pressão, não um período, que seria medido no tempo.',
      4: 'O comprimento de onda é indicado por X; Y corresponde à amplitude.',
    },
  }),
  q({
    n: 72, subject: 'Química', content: 'Meia-vida e decaimento radioativo', difficulty: 'Fácil',
    statement: 'A meia-vida de um elemento radioativo é o tempo necessário para que metade dos átomos de uma amostra desse elemento decaia, podendo se transformar em outro elemento. O bismuto-210, por exemplo, tem meia-vida de 5 dias e, ao decair, transforma-se em polônio-210. Considere uma amostra contendo, inicialmente, 240 g de bismuto-210.', blockTypes: ['prose'],
    statementAfter: 'Após 15 dias, a massa de bismuto-210 nessa amostra será igual a', afterBlockTypes: ['command'],
    alternatives: ['zero.', '60 g.', '15 g.', '30 g.', '120 g.'], answer: 'D',
    why: 'Os 15 dias correspondem a três meias-vidas. A massa inicial é dividida por 2 três vezes: 240 g → 120 g → 60 g → 30 g.',
    resolution: [
      'Como cada meia-vida dura 5 dias, o número de meias-vidas decorridas é 15/5 = 3.',
      tex`A massa remanescente é $m=240\cdot\left(\frac{1}{2}\right)^3=240\cdot\frac{1}{8}=30$ g.`,
    ],
    wrong: {
      0: 'Após três meias-vidas ainda permanece 1/8 da massa inicial, isto é, 30 g; o decaimento não zera a amostra nesse intervalo.',
      1: 'Sessenta gramas é a massa depois de duas meias-vidas, ou 10 dias, mas foram decorridos 15 dias.',
      2: 'Quinze gramas corresponderia a quatro meias-vidas, ou 20 dias.',
      4: 'Cento e vinte gramas é a massa depois de apenas uma meia-vida, ou 5 dias.',
    },
  }),
  q({
    n: 73, subject: 'Química', content: 'Destilação fracionada e misturas',
    statement: 'Um professor de Química realizou um experimento para simular a separação dos componentes do petróleo. Para isso, preparou uma mistura de hidrocarbonetos pertencentes a uma fração do petróleo (hidrocarbonetos com 6 a 16 átomos de carbono) e montou o equipamento representado pela figura a seguir para proceder à separação dos componentes da mistura preparada.', blockTypes: ['prose'],
    images: [img('uea2025vu-q73-destilacao-fracionada.svg', 'Equipamento de destilação fracionada com manta aquecedora, mistura, entrada e saída de água e destilado.')],
    statementAfter: 'A classificação da mistura preparada pelo professor e a técnica utilizada para a separação de seus componentes são, respectivamente:', afterBlockTypes: ['command'],
    alternatives: [
      'heterogênea (líquido-líquido) e destilação simples.',
      'homogênea (líquido-líquido) e destilação fracionada.',
      'heterogênea (sólido-líquido) e destilação fracionada.',
      'homogênea (sólido-líquido) e destilação simples.',
      'heterogênea (sólido-gás) e destilação fracionada.',
    ], answer: 'B',
    why: 'Os hidrocarbonetos formam uma mistura homogênea de líquidos. O equipamento com coluna de fracionamento permite separá-los por destilação fracionada, conforme seus pontos de ebulição.',
    resolution: [
      'Uma fração de hidrocarbonetos líquidos e miscíveis apresenta uma única fase, sendo classificada como mistura homogênea líquido-líquido.',
      'Na destilação fracionada, os vapores passam por sucessivas condensações e revaporizações na coluna, favorecendo a separação de líquidos com pontos de ebulição diferentes.',
    ],
    wrong: {
      0: 'A mistura é homogênea e o equipamento possui coluna de fracionamento, não sendo uma destilação simples.',
      2: 'Não há sólido em uma mistura de hidrocarbonetos líquidos; a mistura é homogênea líquido-líquido.',
      3: 'A mistura não é sólido-líquido e a técnica representada é a destilação fracionada.',
      4: 'Os componentes descritos são líquidos miscíveis, não uma mistura heterogênea sólido-gás.',
    },
  }),
  q({
    n: 74, subject: 'Química', content: 'Modelos atômicos e níveis de energia',
    statement: 'Sinalizadores de emergência utilizados em embarcações funcionam por meio da combustão de compostos químicos que produzem luz intensa ou fumaça colorida, permitindo a visualização a longas distâncias, especialmente em situações de resgate. Esses sinalizadores são essenciais para a segurança marítima, sendo obrigatórios por normas internacionais.', blockTypes: ['prose'],
    images: [img('uea2025vu-q74-sinalizador-maritimo.svg', 'Pessoa em embarcação usando sinalizador de emergência com chama vermelha intensa.')],
    statementAfter: 'A cor da chama que se forma nos sinalizadores de emergência deve-se a transições de partículas subatômicas em níveis de energia do átomo. Esse efeito pode ser explicado pelo modelo atômico de', afterBlockTypes: ['command'],
    alternatives: [
      'Thomson, segundo o qual os prótons estão localizados em um núcleo pequeno e denso.',
      'Rutherford-Bohr, que considera a existência de nêutrons distribuídos em camadas no núcleo.',
      'Dalton, que considera a existência de elétrons ao redor do núcleo, como um sistema planetário.',
      'Thomson, que considera o átomo como uma esfera maciça, que muda de cor ao receber energia.',
      'Rutherford-Bohr, segundo o qual elétrons transitam entre camadas ou níveis de energia.',
    ], answer: 'E',
    why: 'No modelo Rutherford-Bohr, elétrons ocupam níveis de energia. Ao absorver e emitir energia, eles transitam entre esses níveis, e a luz emitida pode apresentar cor característica.',
    resolution: [
      'Ao absorver energia na combustão, elétrons podem passar a níveis mais altos. Quando retornam a níveis mais baixos, emitem radiação eletromagnética.',
      'A energia dessa radiação depende da diferença entre os níveis. Se estiver na faixa do visível, sua frequência determina a cor observada na chama.',
    ],
    wrong: {
      0: 'Thomson não propôs um núcleo pequeno e denso, nem seu modelo explica transições eletrônicas entre níveis.',
      1: 'Os nêutrons não ocupam camadas eletrônicas; o fenômeno descrito envolve transições de elétrons.',
      2: 'Dalton não descreveu o átomo como um sistema planetário nem explicou níveis eletrônicos de energia.',
      3: 'O modelo de Thomson não explica a emissão de cores por transições entre níveis de energia.',
    },
  }),
  q({
    n: 75, subject: 'Química', content: 'Ciclo do carbono e fotossíntese', difficulty: 'Fácil',
    statement: 'O ciclo biogeoquímico do carbono descreve a movimentação do carbono entre a atmosfera, a hidrosfera (oceanos), a litosfera (rochas e solo) e a biosfera (seres vivos).', blockTypes: ['prose'],
    statementAfter: 'Dentre as etapas desse ciclo biogeoquímico, a que corresponde à fixação de carbono é a', afterBlockTypes: ['command'],
    alternatives: ['atividade vulcânica.', 'decomposição de matéria orgânica.', 'queima de combustível fóssil.', 'fotossíntese.', 'respiração celular.'], answer: 'D',
    why: 'Na fotossíntese, organismos fotoautotróficos incorporam o carbono do CO₂ na produção de matéria orgânica, realizando sua fixação.',
    resolution: [
      'Fixar carbono significa incorporar carbono inorgânico, principalmente do dióxido de carbono, em compostos orgânicos.',
      'Na fotossíntese, o CO₂ é utilizado na síntese de carboidratos e outras moléculas orgânicas, promovendo essa incorporação.',
    ],
    wrong: {
      0: 'A atividade vulcânica pode liberar gases contendo carbono, mas não corresponde à fixação fotossintética de carbono.',
      1: 'A decomposição devolve carbono ao ambiente, em vez de fixá-lo em nova matéria orgânica por fotossíntese.',
      2: 'A queima de combustíveis fósseis libera CO₂, não sendo um processo de fixação de carbono.',
      4: 'A respiração celular transforma matéria orgânica e tende a liberar CO₂, processo oposto à fixação.',
    },
  }),
  q({
    n: 76, subject: 'Química', content: 'Pilhas e potenciais padrão de redução',
    statement: tex`A figura representa uma pilha eletroquímica construída com eletrodos de cobre e prata mergulhados em soluções 1,0 mol/L de íons $\mathrm{Cu^{2+}}$ e $\mathrm{Ag^+}$, respectivamente.`, blockTypes: ['prose'],
    images: [img('uea2025vu-q76-pilha-cobre-prata.svg', 'Pilha eletroquímica com eletrodos de cobre e prata, soluções de Cu²⁺ e Ag⁺, ponte salina, voltímetro e elétrons no circuito.')],
    statementAfter: tex`Os potenciais padrão de redução dos seus componentes são:

$$\begin{gathered}\mathrm{Cu^{2+}(aq)}+2e^-\longrightarrow\mathrm{Cu(s)}\\E^\circ=+0{,}34\,\mathrm{V}\\[6pt]\mathrm{Ag^+(aq)}+e^-\longrightarrow\mathrm{Ag(s)}\\E^\circ=+0{,}80\,\mathrm{V}\end{gathered}$$

Em condições padrão, a ddp da pilha representada na figura é igual a __________. Nessa pilha, __________ doa elétrons para o circuito externo e os íons __________ são reduzidos no compartimento __________.

As lacunas do texto são preenchidas, respectivamente, por:`, afterBlockTypes: ['prose', 'prose', 'prose', 'command'],
    alternatives: [
      tex`$+0{,}34\,\mathrm{V}$; o cobre; $\mathrm{Ag^+}$ e catódico.`,
      tex`$-0{,}34\,\mathrm{V}$; o cobre; $\mathrm{Ag^+}$ e catódico.`,
      tex`$+0{,}34\,\mathrm{V}$; a prata; $\mathrm{Cu^{2+}}$ e anódico.`,
      tex`$-1{,}14\,\mathrm{V}$; a prata; $\mathrm{Cu^{2+}}$ e anódico.`,
      tex`$+1{,}14\,\mathrm{V}$; o cobre; $\mathrm{Ag^+}$ e anódico.`,
    ], answer: 'A',
    why: 'O gabarito oficial indica A, mas a alternativa contém uma inconsistência: embora “catódico” esteja adequado, a ddp correta é +0,46 V, e não +0,34 V.',
    resolution: [
      tex`O maior potencial de redução é o da prata. Assim, $\mathrm{Ag^+}$ se reduz no catodo, enquanto o cobre metálico se oxida no ânodo e doa elétrons ao circuito externo.`,
      tex`A ddp padrão é calculada por $\Delta E^\circ=E^\circ_{catodo}-E^\circ_{anodo}=0{,}80-0{,}34=+0{,}46\,\mathrm{V}$.`,
      'O preenchimento cientificamente correto seria “+0,46 V; o cobre; Ag⁺ e catódico”, que não aparece em nenhuma alternativa. A opção A, indicada pelo gabarito oficial, acerta o compartimento catódico, mas informa +0,34 V; a opção E ainda soma os potenciais e emprega “anódico”. Mantemos A apenas para reproduzir o resultado oficial, com esta ressalva editorial.',
    ],
    wrong: {
      0: 'Embora “catódico” esteja adequado para a redução de Ag⁺, a ddp não é +0,34 V; pelos dados fornecidos, seria +0,46 V.',
      1: 'A ddp de uma pilha espontânea é positiva e, neste caso, vale +0,46 V. Além disso, a alternativa não é a indicada pelo gabarito oficial.',
      2: 'O cobre, e não a prata, doa elétrons; Ag⁺ é reduzido no catodo. A ddp informada também está incorreta.',
      3: 'A ddp não é negativa, o cobre é o eletrodo que se oxida e Ag⁺ é a espécie reduzida no catodo.',
    },
    analyses: [
      'Gabarito oficial: A. Entretanto, há inconsistência editorial: embora “catódico” esteja adequado para a redução de Ag⁺, a ddp correta é +0,46 V, e não +0,34 V. Nenhuma alternativa está cientificamente completa.',
      'Incorreta. A ddp de uma pilha espontânea é positiva e, neste caso, vale +0,46 V; o valor -0,34 V não corresponde ao cálculo com os potenciais fornecidos.',
      'Incorreta. O cobre, e não a prata, doa elétrons; Ag⁺ é reduzido no catodo. A ddp informada também está incorreta.',
      'Incorreta. A ddp não é negativa, o cobre é o eletrodo que se oxida e Ag⁺ é a espécie reduzida no catodo.',
      'Incorreta. A ddp não é obtida pela soma +1,14 V, mas por 0,80 − 0,34 = +0,46 V; além disso, Ag⁺ é reduzido no compartimento catódico, não anódico.',
    ],
  }),
  q({
    n: 77, subject: 'Química', content: 'Efeito estufa e dióxido de carbono', difficulty: 'Fácil',
    statement: 'O efeito estufa é um fenômeno natural em que certos gases da atmosfera retêm parte da radiação infravermelha emitida pela Terra, aquecendo a atmosfera. Esse processo é essencial para a manutenção da temperatura do planeta adequada à vida. No entanto, o aumento da emissão do gás __________, produzido por meio da queima de combustível fóssil, intensifica o efeito estufa e pode contribuir para o aquecimento global.', blockTypes: ['prose'],
    statementAfter: 'A lacuna do texto é preenchida por:', afterBlockTypes: ['command'],
    alternatives: [tex`$\mathrm{CO}$`, tex`$\mathrm{NO}$`, tex`$\mathrm{CO_2}$`, tex`$\mathrm{O_2}$`, tex`$\mathrm{N_2}$`], answer: 'C',
    why: 'O CO₂ é liberado em grande quantidade na queima de combustíveis fósseis e sua concentração elevada intensifica a retenção de radiação infravermelha na atmosfera.',
    resolution: [
      'Combustíveis fósseis contêm carbono. Durante sua combustão completa, esse carbono reage com oxigênio e forma principalmente dióxido de carbono, CO₂.',
      'O CO₂ absorve radiação infravermelha e contribui para o efeito estufa. O aumento de sua emissão antrópica intensifica o aquecimento global.',
    ],
    wrong: {
      0: 'O CO é um gás tóxico associado principalmente à combustão incompleta, mas a lacuna se refere ao principal gás de efeito estufa emitido pelos combustíveis fósseis, o CO₂.',
      1: 'O NO não é o gás associado no enunciado à intensificação do efeito estufa pela queima geral de combustíveis fósseis.',
      3: 'O O₂ é reagente da combustão, e não o produto que intensifica o efeito estufa.',
      4: 'O N₂ é o componente majoritário do ar e não apresenta o comportamento de gás de efeito estufa descrito.',
    },
  }),
  q({
    n: 78, subject: 'Química', content: 'Radioatividade: emissões alfa, beta e gama',
    statement: 'As emissões radioativas naturais alfa, beta e gama apresentam características específicas e individuais que determinam, entre outras coisas, seu caráter ionizante da matéria e seu poder de penetração em determinados materiais. A figura mostra um comparativo entre as três emissões radioativas naturais quando atingem o sistema biológico.', blockTypes: ['prose'],
    images: [img('uea2025vu-q78-radiacoes-penetracao.svg', 'Comparativo da penetração das radiações alfa, beta e gama na pele, tecidos, osso e órgãos.')],
    statementAfter: 'Considerando a composição das emissões alfa, beta e gama e suas energias, afirma-se que:', afterBlockTypes: ['command'],
    alternatives: [
      'a partícula alfa, que é carregada negativamente, tem a maior energia entre as três emissões e, por isso, apresenta menor grau de penetração no sistema biológico.',
      'a radiação gama, que não possui carga nem massa, é a emissão radioativa de maior energia entre as três e, por isso, apresenta maior grau de penetração no sistema biológico.',
      'a partícula beta, que não tem carga elétrica, tem energia intermediária entre as três e, por isso, apresenta grau de penetração intermediário no sistema biológico.',
      'a partícula alfa, que tem carga elétrica positiva, é a mais leve e a de menor energia entre as três e, por isso, apresenta menor grau de penetração no sistema biológico.',
      'a radiação gama, que é carregada negativamente, tem a menor energia entre as três e, por isso, apresenta maior grau de penetração no sistema biológico.',
    ], answer: 'B',
    why: 'A radiação gama é radiação eletromagnética, sem carga nem massa de repouso. Entre as emissões comparadas, apresenta a maior energia e o maior poder de penetração.',
    resolution: [
      'Alfa é formada por núcleos de hélio e tem carga positiva; beta é formada por elétrons ou pósitrons e apresenta carga elétrica; gama é radiação eletromagnética.',
      'No contexto da questão, a radiação gama possui a maior energia e atravessa mais materiais do sistema biológico, enquanto alfa apresenta a menor penetração.',
    ],
    wrong: {
      0: 'A partícula alfa tem carga positiva, e a emissão de maior energia e penetração considerada na questão é a gama.',
      2: 'A partícula beta possui carga elétrica; a radiação gama é que não tem carga nem massa e apresenta a maior penetração.',
      3: 'A alfa tem carga positiva, mas é a mais massiva entre as três emissões e não é descrita como a mais leve.',
      4: 'A radiação gama não tem carga elétrica e, no comparativo apresentado, é a emissão de maior energia e penetração.',
    },
  }),
  q({
    n: 79, subject: 'Química', content: 'Energia de ativação e complexo ativado',
    statement: tex`A reação química entre as moléculas gasosas $\mathrm{A_2}$ e $\mathrm{B_2}$ que forma o gás AB está representada pela equação a seguir. A figura ilustra a colisão entre as moléculas dos reagentes dessa reação para a formação do produto.

$$\mathrm{A_2(g)+B_2(g)\longrightarrow AB(g)}$$`, blockTypes: ['prose', 'prose'],
    images: [img('uea2025vu-q79-complexo-ativado.svg', 'Colisão entre moléculas A₂ e B₂, formação do complexo ativado e produção de moléculas AB.')],
    statementAfter: 'Para que a colisão entre as moléculas A₂ e B₂ seja efetiva, é necessário que a energia da colisão seja __________ à energia para formação do complexo ativado. A energia relacionada à formação do complexo ativado recebe o nome de __________.\n\nAs lacunas do texto são preenchidas, respectivamente, por:', afterBlockTypes: ['prose', 'command'],
    alternatives: [
      'maior ou igual – energia de ligação.',
      'menor ou igual – energia de ativação.',
      'menor ou igual – energia de ligação.',
      'maior ou igual – energia de ativação.',
      'maior ou igual – energia de reação.',
    ], answer: 'D',
    why: 'Uma colisão efetiva deve fornecer energia pelo menos igual à barreira necessária para alcançar o complexo ativado. Essa barreira é a energia de ativação.',
    resolution: [
      'A colisão precisa ocorrer com orientação adequada e energia suficiente para que os reagentes alcancem o estado de transição, representado pelo complexo ativado.',
      'A energia mínima necessária para formar esse complexo é a energia de ativação. Colisões com energia maior ou igual a esse valor podem ser efetivas.',
      'Nota editorial: a equação do enunciado foi preservada como impressa. Embora sua forma balanceada seja A₂ + B₂ → 2AB, isso não altera o conceito de energia de ativação cobrado nem o gabarito D.',
    ],
    wrong: {
      0: 'A comparação “maior ou igual” está correta, mas a barreira associada ao complexo ativado é a energia de ativação, não a energia de ligação.',
      1: 'O nome “energia de ativação” está correto, mas a colisão precisa ter energia maior ou igual à barreira, não menor ou igual.',
      2: 'As duas lacunas estão inadequadas: a energia deve ser suficiente para a barreira, chamada energia de ativação.',
      4: 'A energia de reação corresponde à diferença de energia entre produtos e reagentes, não à barreira de formação do complexo ativado.',
    },
  }),
  q({
    n: 80, subject: 'Química', content: 'Biocombustíveis e produção de etanol', difficulty: 'Fácil',
    statement: 'Biocombustíveis representam uma alternativa aos combustíveis fósseis por serem gerados a partir de fontes biológicas, as quais podem ser replantadas ou regeneradas em curtos períodos.', blockTypes: ['prose'],
    statementAfter: 'Um biocombustível viável para a produção de energia em geradores é o', afterBlockTypes: ['command'],
    alternatives: [
      'etanol, produzido a partir da fermentação da cana-de-açúcar ou do milho.',
      'metanol, obtido a partir da reação do gás natural e vapor d’água, em condições específicas.',
      'querosene, obtido a partir do processo que envolve a destilação fracionada do petróleo.',
      'carvão mineral, formado a partir da transformação da matéria orgânica, ao longo de milhões de anos.',
      'gás natural, extraído a partir de reservatórios subterrâneos naturais em diversas regiões da crosta terrestre.',
    ], answer: 'A',
    why: 'O etanol pode ser obtido pela fermentação de matérias-primas vegetais renováveis, como cana-de-açúcar e milho, sendo um biocombustível usado em motores e geradores.',
    resolution: [
      'Na fermentação, microrganismos convertem açúcares provenientes de fontes vegetais em etanol e dióxido de carbono.',
      'Como a cana-de-açúcar e o milho podem ser cultivados novamente em ciclos curtos, o etanol obtido desse processo se enquadra como biocombustível.',
    ],
    wrong: {
      1: 'O metanol obtido a partir do gás natural tem origem fóssil, não atendendo à definição de biocombustível apresentada.',
      2: 'O querosene é uma fração do petróleo, recurso fóssil não renovável em curtos períodos.',
      3: 'O carvão mineral resulta de processos geológicos muito longos e é um combustível fóssil.',
      4: 'O gás natural é um combustível fóssil extraído de reservatórios geológicos, não um biocombustível.',
    },
  }),
  q({
    n: 81, subject: 'Química', content: 'Fluoretação da água e saúde bucal', difficulty: 'Fácil',
    statement: 'A prevenção da cárie dentária é uma medida essencial de saúde pública, pois contribui para a redução das doenças bucais e melhora a qualidade de vida da população. No Brasil, uma lei federal de 1974 determina que as estações de tratamento de água adicionem à água potável um composto de determinada classe de substâncias químicas capazes de fortalecer o esmalte dos dentes, ajudando a prevenir a cárie.', blockTypes: ['prose'],
    statementAfter: 'Essas substâncias contêm o elemento', afterBlockTypes: ['command'],
    alternatives: ['cloro.', 'iodo.', 'ferro.', 'cálcio.', 'flúor.'], answer: 'E',
    why: 'A fluoretação da água adiciona compostos que fornecem íons fluoreto. O flúor fortalece o esmalte e aumenta sua resistência à desmineralização associada à cárie.',
    resolution: [
      'A medida descrita é a fluoretação da água potável, realizada com compostos que liberam íons fluoreto.',
      'Os íons fluoreto favorecem a remineralização do esmalte e reduzem sua dissolução por ácidos produzidos no biofilme dental, ajudando a prevenir a cárie.',
    ],
    wrong: {
      0: 'O cloro pode ser utilizado na desinfecção da água, mas a finalidade de fortalecer o esmalte descrita no enunciado está associada ao flúor.',
      1: 'O iodo não é o elemento adicionado à água para a prevenção da cárie dentária.',
      2: 'O ferro não é utilizado nessa medida de saúde pública voltada ao fortalecimento do esmalte.',
      3: 'Embora o cálcio faça parte da composição dos dentes, a fluoretação da água se refere a compostos com flúor.',
    },
  }),
  q({
    n: 82, subject: 'Química', content: 'Aminoácidos e ligação peptídica',
    statement: 'Tripeptídeos são compostos utilizados na indústria de cosméticos e de alimentos. São frações resultantes da quebra de proteínas e são constituídos por três aminoácidos ligados entre si por ligação peptídica.\n\nA estrutura de um tripeptídeo formado por três unidades do aminoácido tirosina está representada a seguir.', blockTypes: ['prose', 'prose'],
    images: [img('uea2025vu-q82-tripeptideo-tirosina.svg', 'Fórmula estrutural de um tripeptídeo formado por três unidades do aminoácido tirosina.')],
    statementAfter: 'A fórmula estrutural do aminoácido tirosina que forma esse tripeptídeo é:', afterBlockTypes: ['command'],
    alternatives: ['', '', '', '', ''], answer: 'A',
    alternativeImages: [
      [img('uea2025vu-q82-alternativa-a.svg', 'Alternativa A: fórmula estrutural da tirosina, com grupo amina, carboxila e anel aromático com hidroxila.')],
      [img('uea2025vu-q82-alternativa-b.svg', 'Alternativa B: fórmula estrutural do ácido benzoico.')],
      [img('uea2025vu-q82-alternativa-c.svg', 'Alternativa C: fórmula estrutural da benzamida.')],
      [img('uea2025vu-q82-alternativa-d.svg', 'Alternativa D: fórmula estrutural do fenol.')],
      [img('uea2025vu-q82-alternativa-e.svg', 'Alternativa E: fórmula estrutural do 4-aminofenol.')],
    ],
    shortAlternatives: ['Tirosina', 'Ácido benzoico', 'Benzamida', 'Fenol', '4-aminofenol'],
    why: 'A tirosina possui o grupo aminoácido H₂N–CH–COOH ligado a uma cadeia lateral com anel aromático e hidroxila fenólica, estrutura representada na alternativa A.',
    resolution: [
      'Um α-aminoácido apresenta um carbono central ligado aos grupos amina e carboxila, a um hidrogênio e a uma cadeia lateral.',
      'Na tirosina, a cadeia lateral contém um anel aromático com uma hidroxila. A alternativa A reúne todos esses grupos na mesma estrutura.',
    ],
    wrong: {
      1: 'O ácido benzoico apresenta carboxila ligada diretamente a um anel aromático, mas não possui o grupo amina nem a cadeia lateral da tirosina.',
      2: 'A benzamida contém uma amida e não apresenta a carboxila e a hidroxila fenólica da tirosina.',
      3: 'O fenol tem hidroxila ligada ao anel aromático, mas não contém os grupos amina e carboxila do aminoácido.',
      4: 'O 4-aminofenol apresenta amina e hidroxila no anel, porém não possui a carboxila nem a estrutura de α-aminoácido.',
    },
  }),
  q({
    n: 83, subject: 'Química', content: 'Cadeia carbônica e insaturação',
    statement: 'Analise a fórmula estrutural de um composto orgânico obtido principalmente a partir de fontes animais, como carnes, ovos e laticínios, o qual desempenha um papel essencial na nutrição humana.', blockTypes: ['prose'],
    images: [img('uea2025vu-q83-cadeia-insaturada.svg', 'Fórmula estrutural de ácido graxo de cadeia normal, longa e insaturada, sem anel aromático.')],
    statementAfter: 'A cadeia carbônica desse composto orgânico classifica-se como', afterBlockTypes: ['command'],
    alternatives: [
      'normal, insaturada e aromática.',
      'ramificada, insaturada e não aromática.',
      'ramificada, saturada e aromática.',
      'normal, insaturada e não aromática.',
      'normal, saturada e aromática.',
    ], answer: 'D',
    why: 'A cadeia não apresenta ramificações, possui duplas ligações entre carbonos e não contém anel aromático. Portanto, é normal, insaturada e não aromática.',
    resolution: [
      'A sequência principal de carbonos é contínua e não apresenta ramificações, caracterizando uma cadeia normal.',
      'Há duplas ligações na cadeia, o que a torna insaturada. Como não existe anel de benzeno, ela não é aromática.',
    ],
    wrong: {
      0: 'A cadeia é normal e insaturada, mas não possui anel aromático.',
      1: 'Embora seja insaturada e não aromática, a cadeia não apresenta ramificações.',
      2: 'A cadeia não é ramificada, contém insaturações e não é aromática.',
      4: 'Há duplas ligações na estrutura e nenhum anel aromático; portanto, não é saturada nem aromática.',
    },
  }),
  q({
    n: 84, subject: 'Química', content: 'Radioatividade e descoberta do polônio', difficulty: 'Fácil',
    statement: 'A cientista Marie Curie foi pioneira nos estudos a respeito da radioatividade e recebeu dois prêmios Nobel por suas contribuições para a ciência.', blockTypes: ['prose'],
    images: [img('uea2025vu-q84-marie-curie.svg', 'Fotografia de Marie Curie em seu laboratório.')],
    statementAfter: 'Um dos elementos químicos descobertos por ela foi nomeado em homenagem ao seu país natal. Trata-se do elemento', afterBlockTypes: ['command'],
    alternatives: ['germânio.', 'frâncio.', 'polônio.', 'amerício.', 'índio.'], answer: 'C',
    why: 'Marie Curie nasceu na Polônia. Em homenagem a seu país natal, ela nomeou polônio o elemento descoberto por Marie e Pierre Curie.',
    resolution: [
      'Marie Skłodowska Curie nasceu em Varsóvia, na Polônia.',
      'Marie e Pierre Curie descobriram o polônio em 1898, e o nome do elemento foi escolhido em homenagem ao país de origem de Marie.',
    ],
    wrong: {
      0: 'O germânio não foi o elemento descoberto pelos Curie e nomeado em homenagem à Polônia.',
      1: 'O frâncio foi descoberto por Marguerite Perey e não corresponde à homenagem de Marie Curie à Polônia.',
      3: 'O amerício não foi descoberto por Marie Curie nem recebeu esse nome em homenagem à Polônia.',
      4: 'O índio não é o elemento descoberto pelos Curie e nomeado em referência ao país natal de Marie.',
    },
  }),
];
