import { q } from './uea2024vu-helpers.js';

export const uea2024vuLote06 = [
  q({
  "n": 71,
  "statement": "Na bateria de um relógio de pulso, apresentada na figura, está descrito o valor de sua carga elétrica armazenada.",
  "alternatives": [
    "$5{,}0\\times10^{-4}\\ \\mathrm{A}$.",
    "$2{,}0\\times10^{-6}\\ \\mathrm{A}$.",
    "$1{,}0\\times10^{-5}\\ \\mathrm{A}$.",
    "$5{,}0\\times10^{-5}\\ \\mathrm{A}$.",
    "$1{,}0\\times10^{-4}\\ \\mathrm{A}$."
  ],
  "answer": "C",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q71-bateria.svg",
      "alt": "Bateria de lítio de relógio com inscrição de 3 volts e carga de 172,8 miliampère-hora."
    }
  ],
  "statementAfter": "Considere que esse relógio funcione por dois anos com essa bateria, que sua carga seja totalmente consumida nesse período e que um ano possua 360 dias. Dada como a razão entre a variação de carga na bateria e o tempo em que essa variação ocorre, a corrente elétrica necessária para o funcionamento desse relógio é de",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Corrente elétrica e carga armazenada",
  "why": "A bateria armazena 172,8 mAh = 0,1728 Ah. Dois anos de 360 dias correspondem a 17.280 h; dividindo carga por tempo, obtém-se 1,0 × 10⁻⁵ A.",
  "resolution": [
    "A carga é $q=172{,}8\\ \\mathrm{mAh}=0{,}1728\\ \\mathrm{Ah}$ e o tempo é $\\Delta t=2\\cdot360\\cdot24=17280\\ \\mathrm{h}$.",
    "Logo, $i=\\frac{q}{\\Delta t}=\\frac{0{,}1728}{17280}=1{,}0\\times10^{-5}\\ \\mathrm{A}$."
  ],
  "wrong": {
    "0": "Com 5,0 × 10⁻⁴ A, a bateria duraria cerca de 14,4 dias, e não dois anos.",
    "1": "Com 2,0 × 10⁻⁶ A, a duração seria dez anos no calendário adotado, cinco vezes o período informado.",
    "3": "Com 5,0 × 10⁻⁵ A, a carga duraria 144 dias, e não 720 dias.",
    "4": "Com 1,0 × 10⁻⁴ A, a bateria duraria 72 dias, dez vezes menos que o necessário."
  }
}),

  q({
  "n": 72,
  "statement": "Para evitar que cargas elétricas negativas se acumulem na superfície de um carro e produzam faíscas no momento do abastecimento, os engenheiros de uma equipe de corrida projetaram uma pintura especial que permite que a carga acumulada seja ejetada da carroceria do carro por efeito fotoelétrico.",
  "alternatives": [
    "verde, com $\\lambda=532\\ \\mathrm{nm}$.",
    "vermelha, com $\\lambda=685\\ \\mathrm{nm}$.",
    "laranja, com $\\lambda=605\\ \\mathrm{nm}$.",
    "amarela, com $\\lambda=580\\ \\mathrm{nm}$.",
    "violeta, com $\\lambda=415\\ \\mathrm{nm}$."
  ],
  "answer": "E",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q72-efeito-fotoeletrico.svg",
      "alt": "Carro de corrida sob incidência de luz, com elétron ejetado por efeito fotoelétrico."
    }
  ],
  "statementAfter": "Para que os elétrons sejam ejetados da superfície da pintura do carro, é necessário que a energia de cada fóton incidente seja de no mínimo $2{,}5\\ \\mathrm{eV}$. Considere o espectro eletromagnético a seguir e que a energia de um fóton seja dada por $E=\\frac{1250}{\\lambda}$, em que $\\lambda$ é o comprimento de onda em nm.",
  "afterBlockTypes": [
    "command"
  ],
  "afterVisuals": [
    {
      "file": "uea2024vu-q72-espectro.svg",
      "alt": "Espectro visível de 400 a 750 nanômetros, do violeta ao vermelho, com cores e escala."
    }
  ],
  "statementTail": "Com base nesses dados, o carro será eletricamente descarregado quando sobre ele incidir luz monocromática",
  "tailBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Efeito fotoelétrico e espectro eletromagnético",
  "why": "A energia mínima exige λ ≤ 1250/2,5 = 500 nm. Entre as opções, apenas a luz violeta de 415 nm tem comprimento de onda suficientemente curto.",
  "resolution": [
    "Como $E=\\frac{1250}{\\lambda}\\geq2{,}5$, temos $\\lambda\\leq\\frac{1250}{2{,}5}=500\\ \\mathrm{nm}$.",
    "A única opção com $\\lambda\\leq500$ nm é a violeta: $E=\\frac{1250}{415}\\approx3{,}01\\ \\mathrm{eV}$."
  ],
  "wrong": {
    "0": "Com 532 nm, o fóton tem cerca de 2,35 eV, abaixo dos 2,5 eV necessários.",
    "1": "Com 685 nm, a energia é aproximadamente 1,82 eV, insuficiente para ejetar elétrons.",
    "2": "Com 605 nm, a energia é cerca de 2,07 eV, também inferior ao limiar.",
    "3": "Com 580 nm, a energia é aproximadamente 2,16 eV, menor que a mínima exigida."
  }
}),

  q({
  "n": 73,
  "statement": "O quadro apresenta os nomes de três substâncias químicas a $25\\ ^\\circ\\mathrm{C}$ e pressão de $1\\ \\mathrm{atm}$.",
  "alternatives": [
    "2 e neônio.",
    "1 e neônio.",
    "3 e gálio.",
    "2 e propanona.",
    "1 e propanona."
  ],
  "answer": "D",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q73-substancias.svg",
      "alt": "Quadro com neônio em um balão, propanona líquida em um béquer e gálio sólido."
    }
  ],
  "statementAfter": "A tabela apresenta valores de temperaturas de fusão e ebulição, a $1\\ \\mathrm{atm}$, relacionadas às três substâncias do quadro, aleatoriamente.",
  "afterBlockTypes": [
    "prose"
  ],
  "afterTables": [
    {
      "ariaLabel": "Temperaturas de fusão e ebulição das substâncias 1, 2 e 3",
      "headerRows": [
        [
          "Substância",
          "Temperatura de fusão",
          "Temperatura de ebulição"
        ]
      ],
      "rows": [
        [
          {
            "text": "1"
          },
          {
            "text": "302,9 K"
          },
          {
            "text": "2676 K"
          }
        ],
        [
          {
            "text": "2"
          },
          {
            "text": "173 K"
          },
          {
            "text": "337,7 K"
          }
        ],
        [
          {
            "text": "3"
          },
          {
            "text": "24 K"
          },
          {
            "text": "27 K"
          }
        ]
      ]
    }
  ],
  "statementTail": "O dado da substância __________ da tabela corresponde à substância __________ do quadro.\n\nAs lacunas do texto são preenchidas, respectivamente, por",
  "tailBlockTypes": [
    "prose",
    "command"
  ],
  "subject": "Química",
  "content": "Estados físicos e temperaturas de fusão e ebulição",
  "why": "A substância 2 apresenta fusão a 173 K e ebulição a 337,7 K, sendo líquida a 25 °C, como a propanona. O neônio corresponde à substância 3 e o gálio, à substância 1.",
  "wrong": {
    "0": "O neônio é gasoso a 25 °C e corresponde à substância 3, com fusão e ebulição muito próximas de 24 K e 27 K.",
    "1": "A substância 1 tem ponto de fusão próximo de 303 K e elevadíssimo ponto de ebulição, caracterizando o gálio, não o neônio.",
    "2": "O gálio não corresponde à substância 3; seus dados aparecem na linha 1.",
    "4": "A substância 1 não é propanona: sua fusão ocorre a 302,9 K, coerente com o gálio."
  }
}),

  q({
  "n": 74,
  "statement": "A evolução do conhecimento da estrutura da matéria teve a contribuição de diversos pesquisadores que elaboraram modelos explicativos para a estrutura do átomo. Um desses modelos assemelha-se a um doce inglês denominado pudim de passas, pois descreve uma massa esférica que tem partículas carregadas negativamente inseridas em seu interior, conforme representado nas figuras.",
  "alternatives": [
    "Thomson e prótons.",
    "Thomson e elétrons.",
    "Dalton e elétrons.",
    "Rutherford e prótons.",
    "Rutherford e elétrons."
  ],
  "answer": "B",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q74-modelo-thomson.svg",
      "alt": "Pudim de passas comparado ao modelo atômico de Thomson, com partículas negativas inseridas na esfera."
    }
  ],
  "statementAfter": "O nome do pesquisador que propôs esse modelo atômico e o nome dessas partículas são, respectivamente,",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Química",
  "content": "Modelos atômicos e elétrons",
  "difficulty": "Fácil",
  "why": "O modelo do pudim de passas foi proposto por Thomson. As partículas negativas distribuídas na esfera positiva são os elétrons.",
  "wrong": {
    "0": "Thomson é o pesquisador correto, mas prótons possuem carga positiva e não são as partículas negativas indicadas.",
    "2": "Dalton propôs o átomo como esfera indivisível e não o modelo com elétrons incrustados.",
    "3": "Rutherford propôs núcleo positivo e região extranuclear, e prótons não são as partículas negativas do modelo.",
    "4": "Embora elétrons sejam as partículas corretas, o modelo representado não é o de Rutherford."
  }
}),

  q({
  "n": 75,
  "statement": "A tabela apresenta os nomes e as fórmulas de algumas substâncias químicas usadas nas estações de tratamento de água para abastecimento público.",
  "alternatives": [
    "$\\mathrm{Ca(C\\ell O)_2}$",
    "$\\mathrm{CaO}$",
    "$\\mathrm{FeC\\ell_3}$",
    "$\\mathrm{Al_2(SO_4)_3}$",
    "$\\mathrm{NaF}$"
  ],
  "answer": "A",
  "blockTypes": [
    "prose"
  ],
  "tables": [
    {
      "ariaLabel": "Substâncias usadas no tratamento de água e suas fórmulas",
      "headerRows": [
        [
          "Nome",
          "Fórmula"
        ]
      ],
      "rows": [
        [
          {
            "text": "Cloreto de ferro(III)"
          },
          {
            "text": "FeCl₃"
          }
        ],
        [
          {
            "text": "Sulfato de alumínio"
          },
          {
            "text": "Al₂(SO₄)₃"
          }
        ],
        [
          {
            "text": "Fluoreto de sódio"
          },
          {
            "text": "NaF"
          }
        ],
        [
          {
            "text": "Hipoclorito de cálcio"
          },
          {
            "text": "Ca(CℓO)₂"
          }
        ],
        [
          {
            "text": "Óxido de cálcio"
          },
          {
            "text": "CaO"
          }
        ]
      ]
    }
  ],
  "statementAfter": "Dentre as substâncias apresentadas na tabela, a fórmula daquela que tem como finalidade a desinfecção da água é:",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Química",
  "content": "Tratamento de água e desinfecção",
  "difficulty": "Fácil",
  "why": "O hipoclorito de cálcio, Ca(CℓO)₂, é empregado na desinfecção por liberar espécies cloradas com ação contra microrganismos.",
  "wrong": {
    "1": "CaO, o óxido de cálcio, é usado principalmente no ajuste de pH e em etapas de tratamento, não como o desinfetante indicado.",
    "2": "FeCℓ₃ atua como coagulante, auxiliando a agregação de impurezas, e não como o agente de desinfecção da questão.",
    "3": "Al₂(SO₄)₃ também é coagulante utilizado na clarificação da água.",
    "4": "NaF é empregado na fluoretação da água, medida de saúde bucal, e não na desinfecção."
  }
}),

  q({
  "n": 76,
  "statement": "A Terra é um dos planetas rochosos do sistema solar. Ela apresenta um núcleo sólido e é envolta por uma atmosfera gasosa, aquecida pela radiação emitida pelo Sol.",
  "alternatives": [
    "silício, oxigênio e hélio.",
    "ferro, oxigênio e hidrogênio.",
    "ferro, nitrogênio e hidrogênio.",
    "silício, nitrogênio e hidrogênio.",
    "ferro, oxigênio e hélio."
  ],
  "answer": "C",
  "statementAfter": "Os elementos químicos mais abundantes no núcleo do planeta Terra, na atmosfera terrestre e no interior do Sol são, respectivamente,",
  "afterBlockTypes": [
    "command"
  ],
  "blockTypes": [
    "prose"
  ],
  "subject": "Química",
  "content": "Composição química da Terra e do Sol",
  "difficulty": "Fácil",
  "why": "O núcleo terrestre é rico em ferro, a atmosfera tem nitrogênio como elemento mais abundante e o interior do Sol é constituído majoritariamente por hidrogênio.",
  "wrong": {
    "0": "O silício não é o elemento mais abundante do núcleo, o oxigênio não supera o nitrogênio atmosférico e o hélio não supera o hidrogênio solar.",
    "1": "Ferro e hidrogênio estão corretos, mas o gás mais abundante da atmosfera é o nitrogênio, não o oxigênio.",
    "3": "O núcleo é rico em ferro, e não em silício; as duas últimas indicações estão corretas.",
    "4": "A atmosfera tem mais nitrogênio que oxigênio, e o Sol tem mais hidrogênio que hélio."
  }
}),

  q({
  "n": 77,
  "statement": "Um dos parâmetros que indicam a qualidade do recurso hídrico (rio ou lago, por exemplo) é a quantidade de certo gás dissolvido na água. A presença desse gás dissolvido é evidenciada pela existência de algas e peixes, e sua ausência promove o acúmulo de matéria orgânica.",
  "alternatives": [
    "hidrogênio.",
    "oxigênio.",
    "dióxido de carbono.",
    "monóxido de carbono.",
    "nitrogênio."
  ],
  "answer": "B",
  "statementAfter": "Esse gás é o",
  "afterBlockTypes": [
    "command"
  ],
  "blockTypes": [
    "prose"
  ],
  "subject": "Química",
  "content": "Qualidade da água e oxigênio dissolvido",
  "difficulty": "Fácil",
  "why": "O oxigênio dissolvido sustenta organismos aquáticos aeróbios e permite a decomposição aeróbia da matéria orgânica, sendo indicador da qualidade da água.",
  "wrong": {
    "0": "O hidrogênio dissolvido não é o parâmetro usual associado à presença de peixes e à decomposição da matéria orgânica.",
    "2": "O dióxido de carbono não é o gás cuja disponibilidade sustenta a respiração aeróbia dos peixes.",
    "3": "O monóxido de carbono é tóxico e não indica boa qualidade do recurso hídrico.",
    "4": "O nitrogênio dissolvido não exerce o papel respiratório atribuído ao gás do enunciado."
  }
}),

  q({
  "n": 78,
  "statement": "As plantas participam do ciclo do nitrogênio ao absorverem esse macronutriente na forma de minerais e transformá-lo em compostos químicos que são essenciais para a produção de moléculas que dão origem às proteínas e enzimas. Esses compostos químicos são também importantes nutrientes para os organismos superiores que se alimentam dos vegetais.",
  "alternatives": [
    "as vitaminas.",
    "os carboidratos.",
    "os açúcares.",
    "os aminoácidos.",
    "os lipídios."
  ],
  "answer": "D",
  "statementAfter": "Os compostos químicos essenciais que o texto menciona são",
  "afterBlockTypes": [
    "command"
  ],
  "blockTypes": [
    "prose"
  ],
  "subject": "Química",
  "content": "Aminoácidos, proteínas e enzimas",
  "difficulty": "Fácil",
  "why": "Aminoácidos contêm nitrogênio e se unem por ligações peptídicas para formar proteínas, entre elas as enzimas.",
  "wrong": {
    "0": "Vitaminas desempenham funções reguladoras diversas, mas não são os monômeros que formam proteínas e enzimas.",
    "1": "Carboidratos não constituem as unidades básicas nitrogenadas das proteínas.",
    "2": "Açúcares são carboidratos e não formam diretamente as cadeias proteicas.",
    "4": "Lipídios têm funções energéticas e estruturais, mas não são os compostos que polimerizam para formar proteínas."
  }
}),

  q({
  "n": 79,
  "statement": "A azia é um desconforto causado pela acidez estomacal excessiva e que pode ser combatida com a ingestão de pastilhas de hidróxido de alumínio, $\\mathrm{Al(OH)_3}$. Ao entrar em contato com o ácido clorídrico ($\\mathrm{HC\\ell}$) presente no estômago, o hidróxido de alumínio reage formando água ($\\mathrm{H_2O}$) e o sal cloreto de alumínio ($\\mathrm{AlC\\ell_3}$).",
  "alternatives": [
    "$2\\mathrm{HC\\ell}+\\mathrm{Al(OH)_3}\\longrightarrow2\\mathrm{H_2O}+\\mathrm{AlC\\ell_3}$",
    "$\\mathrm{(HC\\ell)_3}+\\mathrm{Al(OH)_3}\\longrightarrow\\mathrm{(H_2O)_3}+\\mathrm{AlC\\ell_3}$",
    "$3\\mathrm{HC\\ell}+\\mathrm{Al(OH)_3}\\longrightarrow6\\mathrm{H_2O}+\\mathrm{AlC\\ell_3}$",
    "$\\mathrm{HC\\ell_3}+\\mathrm{Al(OH)_3}\\longrightarrow\\mathrm{(H_2O)_3}+\\mathrm{AlC\\ell_3}$",
    "$3\\mathrm{HC\\ell}+\\mathrm{Al(OH)_3}\\longrightarrow3\\mathrm{H_2O}+\\mathrm{AlC\\ell_3}$"
  ],
  "answer": "E",
  "statementAfter": "A equação química balanceada que representa a ação do hidróxido de alumínio no combate à azia é:",
  "afterBlockTypes": [
    "command"
  ],
  "blockTypes": [
    "prose"
  ],
  "subject": "Química",
  "content": "Balanceamento de equações químicas",
  "why": "São necessários 3 HCℓ para fornecer os três cloros do AlCℓ₃ e 3 H₂O para equilibrar hidrogênio e oxigênio. Os coeficientes são 3, 1, 3 e 1.",
  "resolution": [
    "A equação balanceada é $3\\mathrm{HC\\ell}+\\mathrm{Al(OH)_3}\\longrightarrow3\\mathrm{H_2O}+\\mathrm{AlC\\ell_3}$.",
    "Nos dois lados há 3 cloros, 1 alumínio, 3 oxigênios e 6 hidrogênios."
  ],
  "wrong": {
    "0": "Com coeficientes 2 para HCℓ e H₂O, cloro e hidrogênio não ficam balanceados.",
    "1": "A notação (HCℓ)₃ e (H₂O)₃ não expressa corretamente coeficientes estequiométricos das espécies apresentadas.",
    "2": "Usar 6 H₂O duplica indevidamente a quantidade de hidrogênio e oxigênio nos produtos.",
    "3": "HCℓ₃ não representa três moléculas de ácido clorídrico e a equação não fica corretamente balanceada."
  }
}),

  q({
  "n": 80,
  "statement": "O radioisótopo tálio-201 é usado como contraste injetável em exames de imagem que avaliam o fluxo sanguíneo e a função cardíaca. O gráfico representa a curva de decaimento radioativo desse radioisótopo.",
  "alternatives": [
    "73 horas.",
    "146 horas.",
    "50 horas.",
    "25 horas.",
    "100 horas."
  ],
  "answer": "A",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q80-decaimento.svg",
      "alt": "Curva de decaimento do tálio-201: quantidade percentual em função do tempo, com 25 por cento em 146 horas."
    }
  ],
  "statementAfter": "A meia-vida do tálio-201 é",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Química",
  "content": "Decaimento radioativo e meia-vida",
  "difficulty": "Fácil",
  "why": "A meia-vida é o tempo necessário para a quantidade cair de 100% para 50%. No gráfico, isso ocorre em 73 horas.",
  "resolution": [
    "A leitura do ponto de 50% sobre a curva fornece 73 horas; em 146 horas, restam aproximadamente 25%, após duas meias-vidas."
  ],
  "wrong": {
    "1": "146 horas correspondem a duas meias-vidas, quando resta cerca de 25% da quantidade inicial.",
    "2": "50 é a porcentagem restante após uma meia-vida, não o tempo correspondente.",
    "3": "25 é a porcentagem aproximada após duas meias-vidas, e não uma duração.",
    "4": "100 horas não é o ponto em que a curva atinge 50% da quantidade inicial."
  }
}),

  q({
  "n": 81,
  "statement": "Analise a fórmula estrutural de uma substância essencial para o bom funcionamento do organismo humano, que é absorvida na ingestão de certos vegetais.",
  "alternatives": [
    "amida e ácido carboxílico.",
    "amida e aldeído.",
    "amida e álcool.",
    "amina e aldeído.",
    "amina e ácido carboxílico."
  ],
  "answer": "E",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q81-acido-folico.svg",
      "alt": "Fórmula estrutural com dois grupos destacados: NH ligado a carbonila e grupo carboxila HOOC."
    }
  ],
  "statementAfter": "Os grupos funcionais nitrogenado e oxigenado destacados na fórmula são característicos, respectivamente, das funções orgânicas",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Química",
  "content": "Funções orgânicas nitrogenadas e oxigenadas",
  "why": "O grupo nitrogenado destacado é uma amina. O grupo oxigenado contém carbonila e hidroxila no mesmo carbono, caracterizando um ácido carboxílico.",
  "wrong": {
    "0": "O grupo nitrogenado indicado não é uma amida; a identificação do ácido carboxílico está correta.",
    "1": "Não há amida no grupo nitrogenado destacado nem aldeído no grupo oxigenado indicado.",
    "2": "A estrutura destacada não apresenta o par amida e álcool solicitado.",
    "3": "Amina está correta, mas o grupo oxigenado é carboxila, e não aldeído."
  }
}),

  q({
  "n": 82,
  "statement": "A figura representa a estrutura do betacaroteno, um terpeno precursor da vitamina A.",
  "alternatives": [
    "ramificada, insaturada e alifática (não aromática).",
    "normal, insaturada e alifática (não aromática).",
    "ramificada, insaturada e aromática.",
    "ramificada, saturada e alifática (não aromática).",
    "normal, saturada e aromática."
  ],
  "answer": "A",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q82-betacaroteno.svg",
      "alt": "Fórmula estrutural do betacaroteno, cadeia longa com ligações duas conjugadas e dois anéis.",
      "caption": "(Lorena O. Felipe e Juliano L. Bicas. “Terpenos, aromas e a química dos compostos naturais”. Quím. nova escola, maio de 2017.)"
    }
  ],
  "statementAfter": "A cadeia carbônica da molécula do betacaroteno é classificada como",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Química",
  "content": "Classificação de cadeias carbônicas",
  "difficulty": "Fácil",
  "why": "O betacaroteno possui ramificações metílicas, numerosas duplas ligações e nenhum anel aromático; portanto, sua cadeia é ramificada, insaturada e alifática.",
  "wrong": {
    "1": "A cadeia é insaturada e alifática, mas possui ramificações, não sendo normal.",
    "2": "Há ramificações e insaturações, porém não há anéis aromáticos na estrutura.",
    "3": "A cadeia é ramificada e alifática, mas as duplas ligações a tornam insaturada, não saturada.",
    "4": "A estrutura é ramificada e insaturada e não apresenta aromaticidade."
  }
}),

  q({
  "n": 83,
  "statement": "O polietileno é um polímero sintético produzido a partir de um hidrocarboneto. A fórmula estrutural desse hidrocarboneto é:",
  "alternatives": [
    "",
    "",
    "",
    "",
    ""
  ],
  "answer": "C",
  "blockTypes": [
    "command"
  ],
  "shortAlternatives": [
    "Cloreteno",
    "Fenileteno",
    "Eteno",
    "Propeno",
    "Tetrafluoreteno"
  ],
  "alternativeVisuals": [
    [
      {
        "file": "uea2024vu-q83-alternativa-a.svg",
        "alt": "Fórmula estrutural do cloreteno: CH2 igual a CHCl."
      }
    ],
    [
      {
        "file": "uea2024vu-q83-alternativa-b.svg",
        "alt": "Fórmula estrutural com grupo fenil ligado a um carbono de uma dupla ligação."
      }
    ],
    [
      {
        "file": "uea2024vu-q83-alternativa-c.svg",
        "alt": "Fórmula estrutural do eteno: CH2 igual a CH2."
      }
    ],
    [
      {
        "file": "uea2024vu-q83-alternativa-d.svg",
        "alt": "Fórmula estrutural do propeno: CH2 igual a CH ligado a CH3."
      }
    ],
    [
      {
        "file": "uea2024vu-q83-alternativa-e.svg",
        "alt": "Fórmula estrutural do tetrafluoreteno: CF2 igual a CF2."
      }
    ]
  ],
  "subject": "Química",
  "content": "Polimerização e monômero do polietileno",
  "difficulty": "Fácil",
  "why": "O polietileno é formado pela polimerização do eteno, H₂C=CH₂, cuja dupla ligação é rompida na formação das ligações da cadeia polimérica.",
  "wrong": {
    "0": "O cloreteno, ou cloreto de vinila, origina o PVC, e não o polietileno.",
    "1": "O fenileteno, ou estireno, é o monômero do poliestireno.",
    "3": "O propeno origina o polipropileno, que possui grupos metila na cadeia.",
    "4": "O tetrafluoreteno origina o PTFE, polímero fluorado conhecido como teflon."
  }
}),

  q({
  "n": 84,
  "statement": "A contribuição das mulheres para a ciência é marcada por grandes descobertas, tais como as realizadas por Marie Curie e Lise Meitner, grandes nomes na área da radioatividade.",
  "alternatives": [
    "diagnósticos por imagem e telemedicina.",
    "geração de energia por reatores nucleares.",
    "geração de energia limpa e sustentável.",
    "tratamentos médicos com quimioterápicos.",
    "fabricação de veículos não poluentes."
  ],
  "answer": "B",
  "statementAfter": "As descobertas de Marie Curie abriram caminho para que Lise Meitner pudesse desenvolver estudos no campo da fissão nuclear, que, atualmente, é aplicada em",
  "afterBlockTypes": [
    "command"
  ],
  "blockTypes": [
    "prose"
  ],
  "subject": "Química",
  "content": "Fissão nuclear e geração de energia",
  "difficulty": "Fácil",
  "why": "A fissão de núcleos pesados libera grande quantidade de energia, aproveitada de forma controlada em reatores de usinas nucleares para gerar eletricidade.",
  "wrong": {
    "0": "Diagnósticos por imagem podem usar radioisótopos, e telemedicina não constitui aplicação da fissão nuclear.",
    "2": "A expressão genérica “energia limpa e sustentável” não identifica a aplicação tecnológica da fissão e omite questões como rejeitos radioativos.",
    "3": "Quimioterápicos são medicamentos e não resultam da aplicação direta da fissão nuclear.",
    "4": "A fabricação de veículos não poluentes não é uma aplicação característica da fissão nuclear."
  }
}),
];
