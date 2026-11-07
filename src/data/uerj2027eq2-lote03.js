import { q, tex, img, ferroText } from './uerj2027eq2-helpers.js';

export const uerj2027eq2Lote03 = [
  q({
    n: 31, subject: 'Matemática', content: 'Geometria espacial e área de seção do cubo',
    statement: 'O sólido ABCDEF corresponde à metade do cubo ABFEGHCD, cuja aresta mede 4 cm.',
    images: [img('uerj2027eq2-q31-solido.svg', 'Metade de um cubo com os vértices A, B, C, D, E e F e a seção quadrangular ABCD destacada.')],
    statementAfter: 'A área do quadrilátero ABCD, em cm², é igual a:', afterBlockTypes: ['command'],
    alternatives: [tex`$8$`, tex`$8\sqrt{2}$`, tex`$16$`, tex`$16\sqrt{2}$`], answer: 'D',
    why: tex`ABCD é um retângulo cujos lados medem $4$ cm e $4\sqrt{2}$ cm, pois um deles é uma diagonal de face do cubo. Assim, $A=4\cdot4\sqrt{2}=\boxed{16\sqrt{2}\ \mathrm{cm}^2}$.`,
    wrong: { 0: 'Esse valor não considera as dimensões 4 cm e 4√2 cm da seção.', 1: 'O fator 8 não corresponde ao produto das dimensões do retângulo.', 2: 'Esse resultado desconsidera a diagonal de face, que mede 4√2 cm.' },
  }),
  q({
    n: 32, subject: 'Matemática', content: 'Trigonometria e lei do seno de Foucault',
    statement: 'Em 1851, o físico Jean Foucault (1819-1868) formulou a lei do seno de Foucault, a partir de um experimento no qual um pêndulo simples CA oscila em um plano vertical ABC, girando em torno do eixo vertical CQ, devido ao movimento de rotação da Terra. Observe a imagem que representa o experimento:',
    images: [img('uerj2027eq2-q32-pendulo.svg', 'Representação do pêndulo de Foucault com os pontos C, A, B e Q e o plano vertical de oscilação.')],
    statementAfter: tex`O tempo entre o início da oscilação do pêndulo e o momento em que o plano de oscilação completa uma rotação de 360° é denominado período T. O valor de T está relacionado à latitude L do lugar onde se encontra o pêndulo:

$$T=\dfrac{24}{\operatorname{sen}(L)}$$
$T$ = período, em horas; $L$ = latitude, em graus.

No campus Maracanã da UERJ, com latitude aproximada de 23°, foi construído um pêndulo para verificar a lei do seno de Foucault. Considere os seguintes valores de cossenos de alguns ângulos:`,
    afterBlockTypes: ['quote', 'quote', 'quote'],
    afterTables: [{ ariaLabel: 'Cossenos de ângulos para o cálculo do período do pêndulo', headerRows: [['ÂNGULO', '63°', '67°', '73°', '77°', '83°']], rows: [[{ text: 'COSSENO', header: true }, '0,45', '0,39', '0,29', '0,22', '0,12']] }],
    statementTail: 'De acordo com essa lei, o período T do pêndulo da UERJ, em horas, está mais próximo de:', tailBlockTypes: ['command'],
    alternatives: ['61,5.', '82,2.', '109,1.', '200,0.'], answer: 'A',
    why: tex`Como $\operatorname{sen}23^\circ=\cos67^\circ=0{,}39$, temos $T=24/0{,}39\approx\boxed{61{,}5\ \mathrm{h}}$.`,
    wrong: { 1: 'Esse resultado não corresponde à divisão de 24 por sen 23°.', 2: 'O valor decorre de um denominador inadequado para a latitude de 23°.', 3: 'Esse período está muito distante de 24/0,39.' },
  }),
  q({
    n: 33, subject: 'Matemática', content: 'Perímetros de triângulos e paralelogramos',
    statement: 'Dois papéis com a forma de triângulo equilátero, cada um com x cm de perímetro, foram recortados de modo a obter dois trapézios congruentes e dois triângulos equiláteros menores, conforme ilustra a imagem:',
    images: [img('uerj2027eq2-q33-recortes.svg', 'Dois triângulos equiláteros recortados em trapézios congruentes ABCD e FGHI e triângulos menores.')],
    statementAfter: 'Os dois trapézios, ABCD e FGHI, foram colocados sobre uma mesa, fazendo coincidir o lado BC com o lado GH, de modo a formar o paralelogramo ADFI, com y cm de perímetro. Observe:',
    afterImages: [img('uerj2027eq2-q33-paralelogramo.svg', 'Paralelogramo ADFI formado pelos trapézios, com BC coincidindo com GH.')],
    statementTail: 'Se y − x = 15 cm, o valor de x, em centímetros, é:', tailBlockTypes: ['command'],
    alternatives: ['60.', '45.', '30.', '25.'], answer: 'B',
    why: tex`Se o lado do triângulo original mede $a$, então $x=3a$. Na composição, os lados do paralelogramo somam um perímetro $y=4a$. Logo, $y-x=4a-3a=a=15$ e $\boxed{x=3a=45\ \mathrm{cm}}$.`,
    wrong: { 0: 'Com x = 60, a diferença y − x seria 20 cm, e não 15 cm.', 2: 'Com x = 30, a diferença entre os perímetros seria 10 cm.', 3: 'O lado do triângulo deve ser 15 cm; portanto, seu perímetro não é 25 cm.' },
  }),
  q({
    n: 34, subject: 'Matemática', content: 'Análise combinatória e permutação com repetição',
    statement: 'Considere o conjunto A, que contém todos os números naturais de seis algarismos, sendo quatro deles iguais a 8 e os outros dois diferentes de zero. O número 818881, por exemplo, pertence ao conjunto A.\n\nO número total de elementos desse conjunto é:', blockTypes: ['quote', 'command'],
    alternatives: ['1090.', '1040.', '980.', '960.'], answer: 'D',
    why: tex`Na interpretação adotada pelo gabarito oficial, cada número tem exatamente quatro algarismos 8. Escolhemos suas posições de $\binom{6}{4}=15$ maneiras; cada uma das outras duas posições admite 8 algarismos, de 1 a 7 ou 9. Logo, $15\cdot8\cdot8=\boxed{960}$.`,
    wrong: { 0: 'Esse total não corresponde ao produto entre as escolhas das posições e dos dois algarismos restantes.', 1: 'A contagem oficial é 15 × 8 × 8 = 960.', 2: 'Esse resultado não contabiliza corretamente as 64 possibilidades para cada escolha de posições.' },
  }),
  q({
    n: 35, subject: 'Biologia', content: 'Bioquímica: quitina e nucleotídeos',
    statement: 'Um fator fundamental no processo evolutivo dos artrópodes foi o desenvolvimento de um exoesqueleto, que tem como principal componente moléculas de quitina. Diferentemente de outros carboidratos, a quitina apresenta em sua composição um elemento químico existente também em determinadas moléculas.\n\nO elemento químico e o nome dessas moléculas estão apresentados em:', blockTypes: ['quote', 'command'],
    alternatives: ['O – glicerídeos.', 'N – nucleotídeos.', 'C – fosfolipídeos.', 'P – monossacarídeos.'], answer: 'B',
    why: 'A quitina contém nitrogênio em seus grupos aminoacetilados. O nitrogênio também está presente nas bases nitrogenadas dos nucleotídeos.',
    wrong: { 0: 'O oxigênio é comum aos carboidratos em geral e não é o elemento diferenciador destacado.', 2: 'O carbono está presente em todos os carboidratos, não sendo a diferença apontada.', 3: 'A quitina não se distingue dos demais carboidratos por conter fósforo, e monossacarídeos não contêm necessariamente P.' },
  }),
  q({
    n: 36, subject: 'Física', content: 'Leis de Newton e quantidade de movimento',
    statement: 'Em um teste de fábrica com os carros A e B, foi registrada a relação entre a força que atua em cada um e suas respectivas acelerações. Observe o gráfico:',
    images: [img('uerj2027eq2-q36-forca.svg', 'Gráfico da força em newtons pela aceleração, com retas para os carros A e B.')],
    statementAfter: 'Sabe-se que, em determinado instante, A e B atingem simultaneamente a velocidade de 10 m/s. Nesse instante, a quantidade de movimento total, dos dois carros, em kg⋅m/s, é igual a:', afterBlockTypes: ['command'],
    alternatives: ['30.', '60.', '90.', '120.'], answer: 'C',
    why: tex`Pela segunda lei de Newton, a inclinação de cada reta é a massa: $m_A=24/4=6$ kg e $m_B=24/8=3$ kg. Como $v=10$ m/s, $Q=(6+3)\cdot10=\boxed{90\ \mathrm{kg\cdot m/s}}$.`,
    wrong: { 0: 'Esse valor considera apenas uma parte da massa total ou uma velocidade incorreta.', 1: 'A soma das massas é 9 kg; multiplicada por 10 m/s, resulta em 90.', 3: 'A quantidade de movimento total não é 120, pois as massas obtidas no gráfico somam 9 kg.' },
  }),
  q({
    n: 37, subject: 'Química', content: 'Equilíbrio químico e princípio de Le Chatelier',
    statement: tex`A reação entre amônia e gás oxigênio em um sistema fechado é representada pela seguinte equação de equilíbrio químico:

$$4\,\mathrm{NH_3(g)}+5\,\mathrm{O_2(g)}$$
$$\rightleftharpoons4\,\mathrm{NO(g)}+6\,\mathrm{H_2O(g)}$$
$$\Delta H<0$$

Em um experimento de laboratório, foram testadas quatro ações independentes nesse sistema, a fim de deslocar o equilíbrio da reação e reduzir a concentração de amônia:
I – aumento da temperatura;
II – introdução de gás inerte;
III – diminuição da pressão;
IV – adição de catalisador.

A ação que provocou a redução da concentração de amônia corresponde ao número:`, blockTypes: ['quote', 'quote', 'quote', 'command'],
    alternatives: ['I.', 'II.', 'III.', 'IV.'], answer: 'C',
    why: 'A diminuição da pressão desloca o equilíbrio para o lado com maior quantidade de gás: há 9 mol gasosos nos reagentes e 10 mol nos produtos. O deslocamento direto consome NH₃.',
    wrong: { 0: 'Como a reação direta é exotérmica, aumentar a temperatura favorece a reação inversa e aumenta NH₃.', 1: 'A introdução de gás inerte não altera esse estado de equilíbrio nas condições consideradas.', 3: 'O catalisador acelera as reações direta e inversa, mas não desloca o equilíbrio.' },
  }),
  q({
    n: 38, subject: 'Biologia', content: 'Absorção de ferro e vitamina C', ...ferroText,
    statementAfter: 'Com base nessas informações, para aumentar a absorção do ferro encontrado em alimentos como o feijão, pode-se consumir simultaneamente a seguinte bebida:', afterBlockTypes: ['command'],
    alternatives: ['água gasosa.', 'mate natural.', 'suco de laranja.', 'derivados do leite.'], answer: 'C',
    why: 'O suco de laranja é rico em vitamina C, que favorece a conversão de Fe³⁺ em Fe²⁺ e, assim, aumenta a absorção do ferro do feijão.',
    wrong: { 0: 'A água gasosa não fornece a vitamina C necessária ao efeito descrito.', 1: 'O mate contém taninos, que dificultam a absorção do mineral.', 3: 'Derivados do leite são ricos em cálcio, cuja ingestão dificulta a absorção do ferro segundo o texto.' },
  }),
  q({
    n: 39, subject: 'Química', content: 'Configuração eletrônica de íons de transição', ...ferroText,
    statementAfter: tex`Assim como o Fe²⁺ e o Fe³⁺, os seguintes íons também são formados por metais de transição:

Co²⁺   Mn²⁺   Ni²⁺   Zn²⁺

Dentre esses íons, aquele que apresenta o mesmo número de elétrons que o Fe³⁺ é:`, afterBlockTypes: ['quote', 'quote', 'command'],
    alternatives: [tex`Co$^{2+}$`, tex`Mn$^{2+}$`, tex`Ni$^{2+}$`, tex`Zn$^{2+}$`], answer: 'B',
    why: tex`O ferro tem $Z=26$; portanto, Fe³⁺ possui $26-3=23$ elétrons. O manganês tem $Z=25$, e Mn²⁺ possui $25-2=\boxed{23}$ elétrons.`,
    wrong: { 0: 'Co²⁺ tem 27 − 2 = 25 elétrons.', 2: 'Ni²⁺ tem 28 − 2 = 26 elétrons.', 3: 'Zn²⁺ tem 30 − 2 = 28 elétrons.' },
  }),
  q({
    n: 40, subject: 'Física', content: 'Medidas e algarismos significativos',
    statement: 'Para medir o comprimento de um tubo, um trabalhador utilizou uma trena graduada em centímetros. Observe a ilustração:',
    images: [img('uerj2027eq2-q40-trena.svg', 'Trena graduada em centímetros medindo um tubo, com leitura entre 190,5 cm e 190,6 cm.')],
    statementAfter: 'Sabe-se que a medida marcada encontra-se entre 190,5 cm e 190,6 cm.\n\nEssa medida é indicada, em centímetros, de forma mais precisa, pelo seguinte valor:', afterBlockTypes: ['quote', 'command'],
    alternatives: ['190,55.', '190,551.', '190,5512.', '190,55123.'], answer: 'A',
    why: 'A leitura fica entre os décimos 190,5 e 190,6 e admite um dígito estimado nos centésimos: 190,55 cm. Acrescentar mais casas criaria uma precisão que o instrumento não oferece.',
    wrong: { 1: 'A terceira casa decimal acrescenta precisão injustificada para essa leitura.', 2: 'Quatro casas decimais excedem a resolução e a estimativa permitidas pela trena.', 3: 'Cinco casas decimais representam precisão incompatível com o instrumento.' },
  }),
  q({
    n: 41, subject: 'Biologia', content: 'Respiração celular e fotossíntese',
    statement: 'Em células de vegetais e algas, substâncias liberadas pelas mitocôndrias são utilizadas pelos cloroplastos para a realização da fotossíntese. Por sua vez, os cloroplastos produzem moléculas que são consumidas pelas mitocôndrias na respiração celular, conforme representado abaixo:',
    images: [img('uerj2027eq2-q41-metabolismo.svg', 'Esquema das trocas entre mitocôndria e cloroplasto, com X associado ao ATP e Y aos carboidratos.')],
    statementAfter: 'No esquema, X e Y correspondem, respectivamente, a moléculas de:', afterBlockTypes: ['command'],
    alternatives: ['ATP e proteínas.', 'ADP e proteínas.', 'ADP e carboidratos.', 'ATP e carboidratos.'], answer: 'D',
    why: 'X representa o ATP produzido na respiração e utilizado no metabolismo, incluindo a fotossíntese; Y representa os carboidratos produzidos pelo cloroplasto e consumidos na respiração.',
    wrong: { 0: 'X está correto, mas Y corresponde a carboidratos, não a proteínas.', 1: 'Nem ADP nem proteínas correspondem aos papéis de X e Y no esquema.', 2: 'Y está correto, mas X representa ATP, e não ADP.' },
  }),
  q({
    n: 42, subject: 'Química', content: 'Isomeria plana de compensação',
    statement: 'Os compostos isômeros que exalam os aromas de maçã verde e de abacaxi são representados pelas seguintes fórmulas estruturais:',
    images: [img('uerj2027eq2-q42-isomeros.svg', 'Fórmulas estruturais de dois ésteres isômeros associados aos aromas de maçã verde e abacaxi.')],
    statementAfter: 'Entre esses compostos, ocorre isomeria plana do seguinte tipo:', afterBlockTypes: ['command'],
    alternatives: ['cadeia.', 'função.', 'tautomeria.', 'compensação.'], answer: 'D',
    why: 'Os dois compostos são ésteres com a mesma fórmula molecular e cadeias do mesmo tipo, mas diferem na distribuição dos grupos em torno do oxigênio da função: é isomeria de compensação ou metameria.',
    wrong: { 0: 'A diferença principal não está no tipo de cadeia carbônica.', 1: 'Ambos pertencem à função éster, portanto não há isomeria de função.', 2: 'Tautomeria envolve formas em equilíbrio dinâmico, geralmente ceto-enólico, o que não ocorre aqui.' },
  }),
  q({
    n: 43, subject: 'Física', content: 'Potência elétrica e efeito Joule',
    statement: 'Considere o gráfico a seguir, que indica a relação entre a potência e a resistência elétrica de um eletrodoméstico:',
    images: [img('uerj2027eq2-q43-potencia.svg', 'Gráfico linear da potência em watts pela resistência elétrica em ohms.')],
    statementAfter: 'Com base nos dados, o valor da corrente elétrica, em ampères, que se estabelece no eletrodoméstico é:', afterBlockTypes: ['command'],
    alternatives: ['2,0.', '3,0.', '4,0.', '5,0.'], answer: 'A',
    why: tex`Usando $P=Ri^2$ e o ponto $(R,P)=(10\ \Omega,40\ \mathrm{W})$, obtemos $40=10i^2$, logo $i^2=4$ e $\boxed{i=2{,}0\ \mathrm{A}}$.`,
    wrong: { 1: 'Com 3 A e 10 Ω, a potência seria 90 W, não 40 W.', 2: 'Com 4 A e 10 Ω, a potência seria 160 W.', 3: 'Com 5 A e 10 Ω, a potência seria 250 W.' },
  }),
  q({
    n: 44, subject: 'Biologia', content: 'Aparelhos digestórios completos e incompletos',
    statement: 'Entre os animais, observam-se dois tipos de aparelhos digestórios, o completo e o incompleto, com diferentes capacidades de absorção dos nutrientes. Considere os animais X e Y, ilustrados abaixo:',
    images: [img('uerj2027eq2-q44-digestorios.svg', 'Animal X, um cnidário com apenas uma abertura digestória, e animal Y, uma minhoca com boca e ânus.')],
    statementAfter: 'Comparativamente, uma característica que distingue o aparelho digestório de X em relação ao de Y é:', afterBlockTypes: ['command'],
    alternatives: ['diferentes valores de pH.', 'menor variedade de enzimas.', 'fluxo unidirecional de alimento.', 'menor quantidade de nefrócitos.'], answer: 'B',
    why: 'O animal X é um cnidário de aparelho digestório incompleto, enquanto Y é uma minhoca com tubo digestório completo e maior especialização. Comparativamente, X apresenta menor variedade de enzimas digestivas.',
    wrong: { 0: 'Diferenças de pH podem existir, mas não são a característica comparativa diretamente evidenciada pelos dois tipos de aparelho.', 2: 'O fluxo unidirecional caracteriza o aparelho completo de Y, que tem boca e ânus, e não o de X.', 3: 'Nefrócitos participam da excreção e não distinguem os tipos de aparelho digestório.' },
  }),
  q({
    n: 45, subject: 'Química', content: 'Soluções, dissociação iônica e constante de Avogadro',
    statement: 'A solução de Ringer, tipo de soro utilizado na hidratação de pacientes em hospitais, apresenta a seguinte composição:',
    tables: [{ ariaLabel: 'Composição da solução de Ringer', headerRows: [['COMPONENTE', 'CONCENTRAÇÃO (mol/L)']], rows: [['NaCl', '0,150'], ['KCl', '0,004'], ['CaCl₂', '0,002']] }],
    statementAfter: 'Em 1 L dessa solução, após a dissociação completa de seus componentes, a quantidade de íons cloreto é aproximadamente igual a:', afterBlockTypes: ['command'],
    alternatives: [tex`$3{,}9\times10^{19}$`, tex`$5{,}1\times10^{20}$`, tex`$7{,}3\times10^{21}$`, tex`$9{,}5\times10^{22}$`], answer: 'D',
    why: tex`As concentrações de cloreto são 0,150 mol/L (NaCl), 0,004 mol/L (KCl) e $2\times0,002=0,004$ mol/L (CaCl₂). Em 1 L, há 0,158 mol de Cl⁻ e $0,158\times6\times10^{23}=9,48\times10^{22}\approx\boxed{9,5\times10^{22}}$ íons.`,
    wrong: { 0: 'Esse valor subestima em cerca de mil vezes a quantidade calculada.', 1: 'A soma das quantidades de cloreto é 0,158 mol, e não a quantidade que produziria esse resultado.', 2: 'Esse valor é inferior ao produto de 0,158 mol pela constante de Avogadro.' },
  }),
];
