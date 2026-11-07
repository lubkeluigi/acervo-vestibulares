import { q, img } from './ufpr2027-helpers.js';

export const ufpr2027Lote03 = [
  q({
    n: 21, subject: 'História', content: 'Iluminismo e Independência dos Estados Unidos', difficulty: 'Fácil',
    statement: `Leia o excerto a seguir, retirado da Declaração de Independência dos Estados Unidos, assinada em 1776:

“Consideramos estas verdades evidentes por si mesmas: que todos os homens são criados iguais; que são dotados pelo Criador de certos direitos inalienáveis; que entre estes estão a vida, a liberdade e a busca da felicidade.”

Disponível em: https://www.archives.gov/founding-docs/declaration-transcript.

A partir do trecho e dos conhecimentos de História da América e História Moderna, assinale a alternativa que identifica corretamente o movimento intelectual que embasa a Declaração e uma contradição entre seus princípios e o funcionamento político da nova nação.`,
    blockTypes: ['prose', 'quote', 'source', 'command'],
    alternatives: [
      'O Renascimentismo, embora a Declaração o contradiga em seus princípios humanistas ao fundamentar os direitos em uma criação divina, e não na razão secular.',
      'O Despotismo Esclarecido, embora a Declaração o contradiga ao substituir a figura centralizadora do rei pela de um presidente eleito.',
      'O Mercantilismo, embora a Declaração o contradiga ao exaltar a liberdade enquanto as Treze Colônias mantinham o comércio regulado pela metrópole.',
      'O Iluminismo, embora a Declaração o contradiga ao proclamar a igualdade natural dos homens enquanto se mantinha a escravização das pessoas afrodescendentes.',
    ],
    answer: 'D',
    why: 'A Declaração redigida por Thomas Jefferson inspirou-se diretamente no jusnaturalismo iluminista de John Locke (direitos inalienáveis à vida, liberdade e propriedade/felicidade). A maior contradição histórica da república recém-fundada consistiu na preservação legal da escravidão nas plantations sulistas e na exclusão dos povos indígenas da cidadania.',
    wrong: {
      0: 'A matriz teórica das revoluções atlânticas do século XVIII é o Iluminismo, e não o Renascimento dos séculos XV e XVI.',
      1: 'O Despotismo Esclarecido preservava monarquias absolutistas centralizadas na Europa (como de Frederico II ou Marquês de Pombal), oposto ao republicanismo constitucional.',
      2: 'O Mercantilismo era a prática colonial opressora da metrópole britânica (Leis Intoleráveis) contra a qual os colonos se rebelaram.',
    },
  }),
  q({
    n: 22, subject: 'História', content: 'Primeira República — Crise do pacto oligárquico e Revolução de 1930', difficulty: 'Média',
    statement: 'Entre os anos de 1889 e 1930, o Brasil pós-imperial passou por uma série de transformações políticas motivadas por variadas tensões sociais. Na historiografia, esse período é conhecido como “Primeira República”. Sobre seu fim, é correto afirmar que foi precipitado pela:',
    blockTypes: ['prose'],
    alternatives: [
      'insatisfação dos setores médios urbanos, dos militares e de oligarquias dissidentes, o que levou ao desgaste das forças políticas do eixo São Paulo/Minas Gerais.',
      'vitória eleitoral inédita da Aliança Liberal, um partido fora do eixo “Café com Leite”, que tomou posse da presidência da República por meio de eleições diretas.',
      'ação organizada do PCB – Partido Comunista do Brasil –, que liderou trabalhadores urbanos em grandes greves que desestabilizaram a força latifundiária da República Velha.',
      'influência dos Estados Unidos, que via a agricultura cafeicultora do Brasil como uma ameaça econômica à produção dos latifundiários norte-americanos.',
    ],
    answer: 'A',
    why: 'O colapso da República Velha resultou da ruptura da política do "café com leite" (quando Washington Luís indicou o paulista Júlio Prestes, preterindo Antônio Carlos de Minas Gerais), convergindo com o movimento tenentista dos jovens oficiais do Exército e com a insatisfação das classes médias urbanas sob a Grande Depressão de 1929, culminando na Revolução de 1930 liderada por Getúlio Vargas.',
    wrong: {
      1: 'Júlio Prestes venceu oficialmente as eleições de março de 1930 sob denúncias de fraude eleitoral pela máquina governista; a Aliança Liberal chegou ao poder por meio do movimento revolucionário de outubro.',
      2: 'O PCB, fundado em 1922 e colocado logo na clandestinidade, não teve papel protagonista na direção da tomada de poder em 1930.',
      3: 'Os EUA eram os principais compradores do café brasileiro, e não concorrentes produtores de café tropical.',
    },
  }),
  q({
    n: 23, subject: 'História', content: 'História Contemporânea — Criação da ONU e tipificação do crime de genocídio', difficulty: 'Média',
    statement: 'Com sua primeira assembleia geral ocorrida em 1946, a ONU foi idealizada como um órgão internacional de manutenção da paz e do desenvolvimento global em um contexto de reorganização do mundo pós-Segunda Guerra Mundial. Dois anos depois, a organização tipificou o crime de genocídio – uma definição invocada ainda hoje em tribunais internacionais. Sobre a tipificação de genocídio, é correto afirmar que:',
    blockTypes: ['prose'],
    alternatives: [
      'relacionou-se à continuidade da violência colonial na África após o fim da Segunda Guerra.',
      'restringiu a tipificação às categorias nacional, étnica, racial e religiosa, deixando de fora grupos políticos e sociais.',
      'considerou a violência contra os armênios como o primeiro genocídio do século XX.',
      'classificou o uso de armas nucleares e bombardeios em áreas civis como forma de genocídio.',
    ],
    answer: 'B',
    why: 'Aprovada pela Assembleia Geral da ONU em 1948 com base nos trabalhos do jurista Raphael Lemkin, a Convenção para a Prevenção e Punição do Crime de Genocídio definiu como atos destinados a destruir, no todo ou em parte, um grupo "nacional, étnico, racial ou religioso". Grupos políticos e classes sociais foram expressamente excluídos da redação final por pressão de potências durante as negociações da Guerra Fria (notadamente a URSS).',
    wrong: {
      0: 'A motivação imediata primordial foi a revelação do Holocausto nazista na Europa.',
      2: 'A convenção de 1948 não listou retroativamente eventos históricos específicos em seu texto normativo de direito penal internacional.',
      3: 'O emprego de armas nucleares e bombardeios de infraestrutura foi discutido no âmbito dos crimes de guerra e crimes contra a humanidade, sem fazer parte do conceito estrito de genocídio da convenção.',
    },
  }),
  q({
    n: 24, subject: 'História', content: 'Guerra Fria e Descolonização — O Levante de Soweto e o Apartheid', difficulty: 'Média',
    statement: 'Em 1976, estudantes negros sul-africanos protestaram contra a imposição governamental do africâner como língua de ensino e, como resposta, foram severamente reprimidos, com uma estimativa de mais de 170 jovens assassinados pela polícia. Esse episódio ficou conhecido como “Levante de Soweto” e se insere no contexto do regime do Apartheid. Assinale a alternativa que relaciona corretamente o Levante de Soweto à lógica de funcionamento do regime do Apartheid.',
    blockTypes: ['prose'],
    alternatives: [
      'O protesto estudantil voltava-se contra a política de Bantustões, que obrigava os jovens negros a estudar exclusivamente nas “reservas” designadas pelo governo britânico.',
      'A imposição do africâner no ensino expressava a hierarquização racial do regime, que negava à maioria negra o acesso à educação em condições de igualdade, reservando-lhe uma formação limitada e subordinada.',
      'A repressão ao levante decorreu do caráter socialista do movimento estudantil, que ameaçava a aliança do regime com o bloco soviético durante a Guerra Fria.',
      'O uso do africâner nas escolas visava integrar os estudantes negros à cidadania plena, e a revolta expressou a resistência tribal a esse projeto modernizador.',
    ],
    answer: 'B',
    why: 'O regime do Apartheid utilizava a "Lei de Educação Bantu" (Bantu Education Act) para fornecer à juventude negra uma instrução propositalmente precária, voltada a prepará-los apenas como mão de obra braçal subordinada aos interesses da minoria branca africânder. A imposição forçada do africâner representava o símbolo máximo dessa dominação linguística e cultural.',
    wrong: {
      0: 'O regime do Apartheid era liderado pelo Partido Nacional sul-africano (bôeres/africânderes), tendo a África do Sul rompido laços com a coroa britânica em 1961.',
      2: 'O governo do Apartheid era veementemente anticomunista e alinhado aos EUA e potências ocidentais na África Austral.',
      3: 'A política do Apartheid visava exatamente à segregação e à negação total de cidadania plena à população negra.',
    },
  }),
  q({
    n: 25, subject: 'Física', content: 'Cinemática — Velocidade escalar média e conversão de unidades', difficulty: 'Fácil',
    statement: 'Um automóvel percorre um trajeto de 180 km num intervalo de tempo de duas horas e trinta minutos. Assinale a alternativa que apresenta corretamente o valor da velocidade escalar média $v_m$ do automóvel nesse trajeto em m/s.',
    blockTypes: ['prose'],
    alternatives: [
      '200',
      '20',
      '2,0',
      '0,2',
    ],
    answer: 'B',
    why: 'O intervalo de tempo é $\\Delta t = 2\\text{ h } 30\\text{ min} = 2,5\\text{ h}$. A velocidade média em km/h é $v_m = \\frac{\\Delta s}{\\Delta t} = \\frac{180\\text{ km}}{2,5\\text{ h}} = 72\\text{ km/h}$. Convertendo para metros por segundo (dividindo por 3,6): $v_m = \\frac{72}{3,6} = 20\\text{ m/s}$.',
    wrong: {
      0: 'Erro de ordem de grandeza por multiplicação indevida.',
      2: 'Esqueceu o fator de conversão de dezenas para unidades.',
      3: 'Dividiu inadvertidamente por 360 em vez de 3,6.',
    },
  }),
  q({
    n: 26, subject: 'Física', content: 'Dinâmica — Lei de Hooke e gráfico de deformação da mola', difficulty: 'Média',
    statement: `Uma mola apresenta um comportamento elástico que segue a lei de Hooke. Ela tem uma constante elástica de mola $k$ e massa desprezível. A mola foi tracionada por uma força de intensidade $F$, e teve seu comprimento $L$ medido para diferentes valores de $F$, conforme representa o gráfico $F \\times L$ mostrado ao lado.

Com base no enunciado e no gráfico, assinale a alternativa que apresenta corretamente o valor da constante elástica $k$ dessa mola.`,
    blockTypes: ['prose', 'command'],
    images: [img('q26-mola.png', 'Gráfico de força de tração F (N) em função do comprimento total L (cm) da mola')],
    alternatives: [
      '9,0 N/m',
      '6,0 N/m',
      '0,9 N/m',
      '0,6 N/m',
    ],
    answer: 'A',
    why: 'Pelo gráfico, quando a força é nula ($F = 0$), o comprimento relaxado da mola é $L_0 = 5,0\\text{ cm}$. Para $F = 0,90\\text{ N}$, o comprimento passa a ser $L = 15\\text{ cm}$. A deformação elástica correspondente é $x = L - L_0 = 15 - 5 = 10\\text{ cm} = 0,10\\text{ m}$. Pela Lei de Hooke ($F = k \\cdot x$): $k = \\frac{F}{x} = \\frac{0,90\\text{ N}}{0,10\\text{ m}} = 9,0\\text{ N/m}$.',
    wrong: {
      1: 'Calculou dividindo a força diretamente pelo comprimento total $L = 15\\text{ cm}$ sem subtrair o comprimento inicial de repouso $L_0 = 5\\text{ cm}$.',
      2: 'Errou a conversão de centímetros para metros (fator de 10).',
      3: 'Combinou a omissão de $L_0$ com erro na conversão de centímetros para metros.',
    },
  }),
  q({
    n: 27, subject: 'Física', content: 'Eletrostática — Energia potencial eletrostática armazenada em capacitores', difficulty: 'Média',
    statement: 'Um dado capacitor tem uma capacitância $C_1$. Quando nele é colocada uma carga $Q_1$, ele armazena uma energia potencial elétrica $U_1$. Um segundo capacitor tem uma capacitância $C_2$ e armazena uma energia potencial elétrica $U_2$ quando é carregado com uma carga $Q_2$. Considerando que $Q_2 = 2Q_1$, determine a razão $C_1/C_2$ entre as capacitâncias de tal modo que a energia potencial elétrica armazenada nos capacitores seja a mesma.',
    blockTypes: ['prose'],
    alternatives: [
      '1/2',
      '1',
      '1/4',
      '2',
    ],
    answer: 'C',
    why: 'A energia potencial de um capacitor expressa em termos de sua carga e capacitância é $U = \\frac{Q^2}{2C}$. Igualando as energias armazenadas ($U_1 = U_2$): $\\frac{Q_1^2}{2C_1} = \\frac{Q_2^2}{2C_2}$. Substituindo $Q_2 = 2Q_1$: $\\frac{Q_1^2}{2C_1} = \\frac{(2Q_1)^2}{2C_2} = \\frac{4Q_1^2}{2C_2}$. Simplificando $Q_1^2$ e os denominadores: $\\frac{1}{C_1} = \\frac{4}{C_2} \\implies \\frac{C_1}{C_2} = \\frac{1}{4}$.',
    wrong: {
      0: 'Considerou uma dependência linear com a carga em vez de quadrática ($Q^2$).',
      1: 'Ignorou a relação entre as grandezas físicas, assumindo capacitâncias idênticas.',
      3: 'Inverteu a razão matemática solicitada entre $C_1$ e $C_2$.',
    },
  }),
  q({
    n: 28, subject: 'Física', content: 'Cinemática e Dinâmica — Energia cinética a partir do gráfico v x t', difficulty: 'Fácil',
    statement: `O texto a seguir é referência para as questões 28 e 29.

Um objeto de massa $m$ está se movendo sobre uma linha reta em movimento retilíneo uniformemente variável. A velocidade $v$ do objeto, em função do tempo $t$, está representada graficamente abaixo. Sabe-se que a massa do objeto é constante e vale $m = 0,5\\text{ kg}$.

Assinale a alternativa que apresenta corretamente o valor da energia cinética $E_c$ do objeto no instante $t = 6\\text{ s}$.`,
    blockTypes: ['label', 'prose', 'command'],
    images: [img('q28-grafico-vt.png', 'Gráfico da velocidade v (m/s) em função do tempo t (s) do objeto')],
    alternatives: [
      '36 J',
      '72 J',
      '18 J',
      '144 J',
    ],
    answer: 'A',
    why: 'Pelo gráfico de velocidade versus tempo, no instante $t = 6\\text{ s}$, a velocidade do corpo vale exatamente $v = 12\\text{ m/s}$. Sabendo que a massa é $m = 0,5\\text{ kg}$, a energia cinética é dada por: $E_c = \\frac{m v^2}{2} = \\frac{0,5 \\times 12^2}{2} = \\frac{0,5 \\times 144}{2} = \\frac{72}{2} = 36\\text{ J}$.',
    wrong: {
      1: 'Esqueceu de dividir pelo fator 2 na fórmula da energia cinética ($0,5 \\times 144 = 72$).',
      2: 'Dividiu novamente por 2 de forma redundante.',
      3: 'Calculou com a velocidade máxima do gráfico (20 m/s no instante t = 10 s) ou omitiu a multiplicação pela massa 0,5.',
    },
  }),
  q({
    n: 29, subject: 'Física', content: 'Dinâmica — Força resultante no MRUV (Segunda Lei de Newton)', difficulty: 'Fácil',
    statement: `O texto a seguir é referência para as questões 28 e 29.

Um objeto de massa $m$ está se movendo sobre uma linha reta em movimento retilíneo uniformemente variável. A velocidade $v$ do objeto, em função do tempo $t$, está representada graficamente abaixo. Sabe-se que a massa do objeto é constante e vale $m = 0,5\\text{ kg}$.

Assinale a alternativa que apresenta corretamente o valor da intensidade $F$ da força resultante sobre o objeto no instante $t = 4\\text{ s}$.`,
    blockTypes: ['label', 'prose', 'command'],
    images: [img('q28-grafico-vt.png', 'Gráfico da velocidade v (m/s) em função do tempo t (s) do objeto')],
    alternatives: [
      '4 N',
      '2 N',
      '1 N',
      '0,5 N',
    ],
    answer: 'C',
    why: 'Como o gráfico $v \\times t$ é uma linha reta, o movimento é uniformemente variado e a aceleração é constante em todo o intervalo: $a = \\frac{\\Delta v}{\\Delta t} = \\frac{20 - 0}{10 - 0} = 2\\text{ m/s}^2$. Pela Segunda Lei de Newton ($F_{\\text{res}} = m \\cdot a$), no instante $t = 4\\text{ s}$ (e em qualquer outro instante do movimento): $F = 0,5\\text{ kg} \\times 2\\text{ m/s}^2 = 1\\text{ N}$.',
    wrong: {
      0: 'Multiplicou a aceleração pelo tempo ($a \\cdot t = 2 \\times 4$) sem utilizar a massa na Segunda Lei de Newton.',
      1: 'Confundiu a aceleração com a força resultante, esquecendo a massa de 0,5 kg.',
      3: 'Considerou apenas o valor numérico da massa como se a aceleração unitária fosse 1 m/s².',
    },
  }),
  q({
    n: 30, subject: 'Física', content: 'Ondulatória — Relação entre velocidade, comprimento de onda e período', difficulty: 'Fácil',
    statement: `Um aparato produz ondas num meio de modo que o período $T$ das ondas e o respectivo comprimento de onda $\\lambda$ são organizados na forma do gráfico ao lado.

Assinale a alternativa que expressa corretamente o valor da velocidade $v$ das ondas nesse meio para as ondas que têm período $T = 40\\text{ s}$.`,
    blockTypes: ['prose', 'command'],
    images: [img('q30-grafico-ondas.png', 'Gráfico do comprimento de onda lambda (cm) em função do período T (s)')],
    alternatives: [
      '0,4 cm/s',
      '2,5 cm/s',
      '250 cm/s',
      '4000 cm/s',
    ],
    answer: 'B',
    why: 'A equação fundamental da ondulatória expressa em termos do período é $v = \\frac{\\lambda}{T}$. Pelo gráfico, para um período $T = 40\\text{ s}$, o comprimento de onda correspondente é $\\lambda = 100\\text{ cm}$. Calculando a velocidade: $v = \\frac{100\\text{ cm}}{40\\text{ s}} = 2,5\\text{ cm/s}$.',
    wrong: {
      0: 'Inverteu a razão calculando $T / \\lambda = 40 / 100 = 0,4$.',
      2: 'Errou a posição da vírgula decimal no cálculo de divisão.',
      3: 'Multiplicou $\\lambda \\times T = 100 \\times 40 = 4000$ em vez de dividir.',
    },
  }),
];
