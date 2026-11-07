import { createFamema, tex } from './famema-helpers.js';
const { d } = createFamema(2020);

export const famema2020Discursivas = [
  d({
    n: 1, subject: 'Química', content: 'Tabela periódica, isótopos e reação de metal alcalino',
    statement: 'Um professor de química, para desejar “boa sorte” a seus alunos na prova, utilizou quatro elementos da tabela periódica para escrever a frase:', blockTypes: ['prose'],
    visuals: [{ file: 'p1-q01-elementos.svg', alt: 'Os símbolos Gd, Lu, C e K dispostos em quadrinhos formam a palavra Gd Lu C K, em alusão à expressão boa sorte.' }],
    parts: [
      { id: 'a', prompt: 'Identifique os elementos da frase que possuem o mesmo número de camadas eletrônicas. Dê o número de massa do átomo, presente na frase, que possui 8 nêutrons e é utilizado na datação de fósseis orgânicos.',
        expected: tex`Gadolínio (Gd) e lutécio (Lu) estão no 6º período e possuem 6 camadas eletrônicas. O isótopo usado na datação é o carbono-14: como $Z=6$ e $N=8$, $A=Z+N=\boxed{14}$.`,
        criteria: [{ points: 1, text: 'Identifica Gd e Lu como os elementos com o mesmo número de camadas.' }, { points: 1, text: 'Determina o número de massa 14 para o carbono com 8 nêutrons.' }] },
      { id: 'b', prompt: 'A reação entre o metal alcalino presente na frase e a água forma um hidróxido e um gás combustível. Escreva a equação balanceada dessa reação.',
        expected: tex`O metal alcalino é o potássio (K), e o gás combustível é o hidrogênio: $$\boxed{\mathrm{2K(s)+2H_2O(\ell)\rightarrow 2KOH(aq)+H_2(g)}}$$`,
        criteria: [{ points: 1, text: 'Identifica K, KOH e H₂ como reagente e produtos.' }, { points: 1, text: 'Apresenta a equação corretamente balanceada.' }] },
    ],
  }),
  d({
    n: 2, subject: 'Química', content: 'Tratamento de água, funções inorgânicas e hidrólise salina',
    statement: 'A figura representa uma estação de tratamento de água para abastecimento da população, onde ocorrem os processos de coagulação, floculação, filtração e desinfecção.', blockTypes: ['prose'],
    visuals: [{ file: 'p1-q02-tratamento-agua.svg', alt: 'Esquema de tratamento: água bruta passa por coagulação e floculação com sulfato de alumínio e cal hidratada, decantação, filtração com areia e seixos e desinfecção com hipoclorito de sódio.' }],
    statementAfter: tex`Para a realização da coagulação, são adicionadas à água a ser tratada as substâncias sulfato de alumínio ($\mathrm{A\ell_2(SO_4)_3}$) e cal hidratada ($\mathrm{Ca(OH)_2}$), que produzem flocos de densidade mais elevada que sedimentam na etapa de decantação. Os flocos que não sedimentam são retidos na etapa de filtração e, ao final, adiciona-se à água hipoclorito de sódio ($\mathrm{NaC\ell O}$) para desinfecção.`, afterBlockTypes: ['prose'],
    parts: [
      { id: 'a', prompt: 'A que funções inorgânicas pertencem as substâncias utilizadas na coagulação?',
        expected: tex`O sulfato de alumínio, $\mathrm{A\ell_2(SO_4)_3}$, é um $\boxed{\text{sal}}$; a cal hidratada, $\mathrm{Ca(OH)_2}$, é uma $\boxed{\text{base ou hidróxido}}$.`,
        criteria: [{ points: 1, text: 'Classifica o sulfato de alumínio como sal.' }, { points: 1, text: 'Classifica a cal hidratada como base.' }] },
      { id: 'b', prompt: 'Uma solução de NaCℓO apresenta caráter ácido, básico ou neutro? Justifique sua resposta com base no conceito de hidrólise salina.',
        expected: tex`A solução é $\boxed{\text{básica}}$. O NaCℓO é sal de base forte e ácido fraco; o hipoclorito sofre hidrólise, produzindo íons hidroxila: $$\mathrm{C\ell O^-(aq)+H_2O(\ell)\rightleftharpoons HC\ell O(aq)+OH^-(aq)}$$`,
        criteria: [{ points: 1, text: 'Indica caráter básico.' }, { points: 1, text: 'Justifica pela hidrólise do hipoclorito com formação de OH⁻.' }] },
    ],
  }),
  d({
    n: 3, subject: 'Química', content: 'Oxirredução e eletrólise quantitativa', difficulty: 'Difícil',
    statement: tex`Para verificar a presença de íons chumbo(II) em uma solução, pode-se mergulhar um fio de aço galvanizado (revestido com zinco) na solução em questão. O metal do revestimento reage com os íons chumbo(II), evidenciando, assim, sua presença. A tabela apresenta os potenciais de redução dos íons chumbo(II) e zinco.`, blockTypes: ['prose'],
    tables: [{ ariaLabel: 'Potenciais-padrão de redução do chumbo e do zinco', headerRows: [['Semirreação', 'Potencial-padrão de redução (V)']], rows: [[tex`$\mathrm{Pb^{2+}+2e^-\rightarrow Pb}$`, '−0,13'], [tex`$\mathrm{Zn^{2+}+2e^-\rightarrow Zn}$`, '−0,76']] }],
    statementAfter: tex`Considere que, para a realização do teste, utilizou-se uma solução contendo $5\times10^{-3}\ \mathrm{mol/L}$ de íons chumbo(II) e que, para a remoção dos íons chumbo(II) dissolvidos, foi realizada uma eletrólise aquosa com eletrodos inertes.`, afterBlockTypes: ['prose'],
    parts: [
      { id: 'a', prompt: 'Explique, com base nos potenciais de redução apresentados, por que ocorre a reação entre o íon chumbo(II) e o zinco. Escreva a equação que representa a reação que ocorreu durante o teste.',
        expected: tex`O potencial de redução do $\mathrm{Pb^{2+}}$ ($-0{,}13\ \mathrm V$) é maior que o do $\mathrm{Zn^{2+}}$ ($-0{,}76\ \mathrm V$). Assim, o chumbo(II) se reduz e o zinco metálico se oxida espontaneamente: $$\boxed{\mathrm{Zn(s)+Pb^{2+}(aq)\rightarrow Zn^{2+}(aq)+Pb(s)}}$$`,
        criteria: [{ points: 1, text: 'Compara os potenciais e identifica a redução do Pb²⁺ e a oxidação do Zn.' }, { points: 1, text: 'Escreve a equação global correta.' }] },
      { id: 'b', prompt: 'Considerando a constante de Faraday igual a 96 500 C/mol e que tenha sido utilizada uma fonte de corrente contínua que forneceu uma corrente elétrica de intensidade 0,2 A, calcule o tempo necessário para a remoção de todo o chumbo dissolvido em 200 mL da solução utilizada para o teste.',
        expected: tex`Há $n(\mathrm{Pb^{2+}})=5\times10^{-3}\cdot0{,}200=1{,}0\times10^{-3}\ \mathrm{mol}$. Cada íon consome 2 mol de elétrons, logo $n(e^-)=2{,}0\times10^{-3}\ \mathrm{mol}$ e $Q=nF=193\ \mathrm C$. Como $Q=i\Delta t$, $\Delta t=193/0{,}2=\boxed{965\ \mathrm s}$ (16 min 5 s).`,
        criteria: [{ points: 1, text: 'Calcula a quantidade de chumbo e a carga necessária de 193 C.' }, { points: 1, text: 'Obtém o tempo de 965 s.' }] },
    ],
  }),
  d({
    n: 4, subject: 'Química', content: 'Solubilidade, oxirredução e estequiometria', difficulty: 'Difícil',
    statement: tex`O iodo ($\mathrm{I_2}$) pode ser obtido a partir de iodatos encontrados em depósitos de nitratos. Após realizar a separação dos nitratos e iodatos, submete-se o iodato ($\mathrm{IO_3^-}$) a um processo de oxirredução, conforme a equação a seguir:

$$\mathrm{IO_3^-(aq)+5I^-(aq)+6H^+(aq)\rightarrow 3I_2(s)+3H_2O(\ell)}$$

A solubilidade do iodo em água varia com a temperatura, conforme a tabela a seguir.`, blockTypes: ['prose', 'math', 'prose'],
    tables: [{ ariaLabel: 'Solubilidade do iodo em água em diferentes temperaturas', headerRows: [['Temperatura', 'Volume de água necessário para dissolver 1 g de I₂']], rows: [['20 °C', '3 450 mL'], ['50 °C', '1 250 mL']] }],
    statementAfter: 'Ao ser adicionado a solventes orgânicos, o iodo forma soluções de coloração marrom em solventes oxigenados e soluções de coloração violeta em solventes não oxigenados.', afterBlockTypes: ['prose'],
    parts: [
      { id: 'a', prompt: 'Indique a cor de uma solução preparada pela adição de iodo em etanol. Classifique a dissolução do iodo em água em relação ao calor envolvido.',
        expected: tex`O etanol é solvente oxigenado, portanto a solução é $\boxed{\text{marrom}}$. Como menos água é necessária para dissolver 1 g de iodo a 50 °C, a solubilidade aumenta com a temperatura; o aquecimento favorece a dissolução, que é $\boxed{\text{endotérmica}}$.`,
        criteria: [{ points: 1, text: 'Indica a coloração marrom no etanol.' }, { points: 1, text: 'Classifica a dissolução aquosa como endotérmica com base na solubilidade.' }] },
      { id: 'b', prompt: 'Considere que todo o IO₃⁻ dissolvido em 1 L de solução aquosa 0,1 mol/L desse íon, à temperatura de 50 °C, seja convertido em I₂. Calcule a massa de iodo que precipitará.',
        expected: tex`A proporção é $1\ \mathrm{mol\ IO_3^-}:3\ \mathrm{mol\ I_2}$; assim, $0{,}1$ mol de iodato produz $0{,}3$ mol de $\mathrm{I_2}$, isto é, $0{,}3\cdot254=76{,}2\ \mathrm g$. A 50 °C, 1 250 mL dissolvem 1 g; em 1 000 mL dissolvem-se $1\,000/1\,250=0{,}8$ g. Precipitam $\boxed{76{,}2-0{,}8=75{,}4\ \mathrm g\ de\ I_2}$.`,
        criteria: [{ points: 1, text: 'Calcula 76,2 g de iodo produzidos e 0,8 g dissolvido em 1 L.' }, { points: 1, text: 'Determina 75,4 g de iodo precipitado.' }] },
    ],
  }),
  d({
    n: 5, subject: 'Biologia', content: 'Ciclo celular, mitose e desenvolvimento embrionário',
    statement: 'O ciclo celular corresponde ao conjunto de transformações que ocorre em uma célula desde sua formação até o momento em que sofre mitose e origina duas células filhas idênticas. Esse ciclo celular é composto por duas etapas: a interfase e a mitose. A interfase é dividida em três fases, G1, S e G2, e a mitose é dividida em quatro fases: prófase, metáfase, anáfase e telófase.', blockTypes: ['prose'],
    parts: [
      { id: 'a', prompt: 'Em qual das sete fases do ciclo celular a célula sofre intenso crescimento? Em qual das sete fases é possível verificar cromossomos condensados ao máximo?',
        expected: tex`O crescimento celular intenso ocorre na fase $\boxed{\mathrm{G_1}}$ da interfase. A condensação máxima dos cromossomos é observada na $\boxed{\text{metáfase}}$.`,
        criteria: [{ points: 1, text: 'Identifica G1 como fase de intenso crescimento.' }, { points: 1, text: 'Identifica a metáfase como fase de máxima condensação.' }] },
      { id: 'b', prompt: 'No início do desenvolvimento embrionário de muitos animais, o ciclo celular normalmente consiste na fase S e na divisão celular. Que fenômeno marcante ocorre na fase S do ciclo celular? A partir do zigoto, quantas mitoses são necessárias para gerar um embrião com 16 células?',
        expected: tex`Na fase S ocorre a $\boxed{\text{replicação ou duplicação do DNA}}$. São necessárias $\boxed{4\text{ rodadas sucessivas de mitose}}$: $1\rightarrow2\rightarrow4\rightarrow8\rightarrow16$ células.`,
        criteria: [{ points: 1, text: 'Identifica a duplicação do DNA na fase S.' }, { points: 1, text: 'Determina quatro rodadas mitóticas para chegar a 16 células.' }] },
    ],
  }),
  d({
    n: 6, subject: 'Biologia', content: 'Câncer, metástase e angiogênese',
    statement: 'Os tumores malignos podem se desenvolver em diferentes órgãos do corpo humano, como pele, próstata, mama, fígado, entre outros. Tais tumores podem ser tratados utilizando-se diferentes estratégias médicas, desde uso de medicação até intervenções cirúrgicas. Para o controle de alguns tipos de câncer podem ser utilizados inibidores do Fator de Crescimento Endotelial Vascular (VEGF).', blockTypes: ['prose'],
    parts: [
      { id: 'a', prompt: 'O câncer de pele do tipo melanoma apresenta grandes possibilidades de provocar metástase. Qual fator ambiental pode favorecer o surgimento desse tipo de câncer? O que é metástase?',
        expected: 'A exposição excessiva à radiação ultravioleta, especialmente a solar, pode favorecer o melanoma. Metástase é a disseminação de células do tumor primário para outras regiões ou órgãos, onde formam tumores secundários.',
        criteria: [{ points: 1, text: 'Cita a radiação ultravioleta como fator ambiental.' }, { points: 1, text: 'Define metástase como disseminação e formação de focos secundários.' }] },
      { id: 'b', prompt: 'Por que inibir a formação do endotélio pode inibir também o crescimento de um tumor?',
        expected: 'O endotélio constitui os vasos sanguíneos. Inibir sua formação reduz a angiogênese e a vascularização do tumor, limitando o aporte de oxigênio e nutrientes necessários ao crescimento das células tumorais.',
        criteria: [{ points: 1, text: 'Relaciona endotélio à formação de vasos/angiogênese.' }, { points: 1, text: 'Explica a redução do suprimento de oxigênio e nutrientes ao tumor.' }] },
    ],
  }),
  d({
    n: 7, subject: 'Biologia', content: 'Polinização e desenvolvimento de frutos e sementes',
    statement: 'Um pesquisador realizou um experimento com flores de uma espécie de tomateiro. Ele dividiu as plantas em dois lotes. No lote 1, as flores ficaram expostas, sem nenhuma cobertura. No lote 2, cada flor foi coberta com gaze porosa e opaca, de forma que as abelhas podiam pousar sobre a gaze, mas nunca sobre a flor. O número de abelhas que visitaram as flores dos dois lotes foi contabilizado durante um determinado período de tempo. As flores continuaram cobertas até o início da formação dos frutos. Como resultado do experimento, obteve-se que o número de abelhas que visitou as flores do lote 1 foi significativamente maior do que o número de abelhas que visitou as do lote 2. O pesquisador notou, ainda, que no lote 2 foram formados poucos frutos e que estes eram menores e com menor número de sementes quando comparados aos frutos das plantas do lote 1.', blockTypes: ['prose'],
    visuals: [{ file: 'p1-q07-tomates.svg', alt: 'Comparação de tomates em corte transversal: o fruto do lote 1 é maior e tem mais sementes que o do lote 2. Escala de 1 cm.' }],
    parts: [
      { id: 'a', prompt: 'Qual o papel das abelhas na formação dos tomates? O que provavelmente atraiu as abelhas até as flores do lote 2, que estavam cobertas?',
        expected: 'As abelhas atuam como polinizadoras, transportando pólen até o estigma e possibilitando a fecundação, com formação de sementes e frutos. Como a gaze era opaca, mas porosa, as abelhas do lote 2 provavelmente foram atraídas pelo odor das flores.',
        criteria: [{ points: 1, text: 'Explica o papel polinizador das abelhas.' }, { points: 1, text: 'Identifica o odor floral como provável atrativo através da gaze porosa.' }] },
      { id: 'b', prompt: 'Explique o mecanismo fisiológico que relaciona a formação de frutos maiores à formação de um maior número de sementes.',
        expected: 'As sementes em desenvolvimento produzem hormônios vegetais, especialmente auxinas, que estimulam o crescimento do ovário e, portanto, do fruto. Um maior número de sementes intensifica esse estímulo hormonal e favorece a formação de frutos maiores.',
        criteria: [{ points: 1, text: 'Relaciona as sementes à produção de hormônios, como auxinas.' }, { points: 1, text: 'Explica o estímulo hormonal ao crescimento do ovário/fruto.' }] },
    ],
  }),
  d({
    n: 8, subject: 'Biologia', content: 'Gene SRY, determinação sexual e mosaicismo', difficulty: 'Difícil',
    statement: 'Em 1990, pesquisadores ingleses identificaram um gene no cromossomo Y necessário para o desenvolvimento dos testículos. Eles denominaram o gene de SRY (do inglês, sex-determining region of Y), região determinadora de sexo do Y. As características bioquímicas, fisiológicas e anatômicas que distinguem machos e fêmeas são complexas, e vários genes estão envolvidos no seu desenvolvimento. Na verdade, o SRY codifica uma proteína que regula outros genes de diversos cromossomos.\n\n(Neil Campbell et al. Biologia, 2010. Adaptado.)', blockTypes: ['prose', 'source'], works: ['Biologia'],
    parts: [
      { id: 'a', prompt: 'Quais gônadas formará uma criança portadora da deleção do gene SRY? Qual será o fenótipo dessa criança em relação aos órgãos genitais?',
        expected: 'Na ausência funcional do SRY, não ocorre a diferenciação das gônadas em testículos; desenvolvem-se ovários e o fenótipo dos órgãos genitais é feminino.',
        criteria: [{ points: 1, text: 'Indica a formação de ovários.' }, { points: 1, text: 'Indica fenótipo genital feminino.' }] },
      { id: 'b', prompt: 'Uma criança XY é portadora da deleção do SRY apenas em parte de suas células somáticas. Para que isso seja possível, a mutação deve ter ocorrido no espermatozoide produzido pelo pai, no núcleo do zigoto ou durante o desenvolvimento embrionário? Justifique sua resposta.',
        expected: 'A deleção deve ter ocorrido durante o desenvolvimento embrionário, após a formação do zigoto, gerando mosaicismo: apenas a linhagem celular descendente da célula mutada apresenta a deleção. Se tivesse ocorrido no espermatozoide ou no núcleo do zigoto, estaria presente em todas as células da criança.',
        criteria: [{ points: 1, text: 'Identifica mutação durante o desenvolvimento embrionário.' }, { points: 1, text: 'Justifica pelo mosaicismo e contrasta com mutação presente desde o zigoto.' }] },
    ],
  }),
];
