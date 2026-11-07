import { createGroup } from './uea2024ce-helpers.js';

const { q, essay } = createGroup(3);

export const uea2024ce3Questions = [
  q({
  "n": 1,
  "statement": "Uma fábrica de biscoitos comercializa seus produtos em 2 tipos de embalagens, uma com 12 biscoitos e a outra com 20 biscoitos. Essa fábrica recebeu uma encomenda de 550 embalagens desses biscoitos, de modo que a razão entre o número de embalagens com 20 biscoitos e o número de embalagens com 12 biscoitos era $\\frac{5}{6}$. O número total de biscoitos dessa encomenda foi",
  "alternatives": [
    "8 600.",
    "9 000.",
    "8 200.",
    "7 800.",
    "7 500."
  ],
  "answer": "A",
  "subject": "Matemática",
  "content": "Razão entre embalagens e sistema de equações",
  "difficulty": "Fácil",
  "why": "Sejam x e y as quantidades de embalagens com 20 e 12 biscoitos. Como x/y = 5/6 e x + y = 550, obtém-se x = 250 e y = 300. O total é 250 × 20 + 300 × 12 = 5.000 + 3.600 = 8.600 biscoitos.",
  "wrong": {
    "1": "9.000 não corresponde à soma 250 × 20 + 300 × 12, obtida das duas condições do enunciado.",
    "2": "8.200 não satisfaz o total calculado com 250 embalagens de 20 e 300 de 12 biscoitos.",
    "3": "7.800 está abaixo da quantidade obtida ao aplicar corretamente a razão e o total de embalagens.",
    "4": "7.500 não é o resultado de 5.000 + 3.600; portanto, não atende às duas condições fornecidas."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 2,
  "statement": "Considere o quadrado ABCD de 4 cm de lado, com os pontos M e N sobre o lado $\\overline{BC}$, sendo M o ponto médio do lado $\\overline{BC}$, NC = 1 cm e o ponto E a intersecção dos segmentos $\\overline{DM}$ e $\\overline{AN}$, conforme mostra a figura.",
  "alternatives": [
    "$4,0\\ \\mathrm{cm}^{2}$.",
    "$3,8\\ \\mathrm{cm}^{2}$.",
    "$4,2\\ \\mathrm{cm}^{2}$.",
    "$3,6\\ \\mathrm{cm}^{2}$.",
    "$4,4\\ \\mathrm{cm}^{2}$."
  ],
  "answer": "D",
  "visuals": [
    {
      "file": "uea2024ce3-q02-quadrado-cden.svg",
      "alt": "Quadrado ABCD de lado 4 cm, com M ponto médio de BC, N a 1 cm de C e E na interseção de DM e AN; o quadrilátero CDEN está sombreado."
    }
  ],
  "statementAfter": "A área do quadrilátero CDEN, destacado na figura, é igual a",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Matemática",
  "content": "Área de quadrilátero em quadrado",
  "difficulty": "Média",
  "why": "Adote A(0,0), B(4,0), C(4,4) e D(0,4). Então M(4,2), N(4,3), DM tem equação y = 4 − x/2 e AN tem equação y = 3x/4. Na interseção, E(16/5,12/5). O triângulo DCM tem área 4 cm²; retirando o triângulo ENM, de base MN = 1 e altura horizontal 4 − 16/5 = 4/5, sobra 4 − (1/2) × 1 × (4/5) = 3,6 cm².",
  "wrong": {
    "0": "4,0 cm² é a área do triângulo DCM, sem descontar o triângulo ENM, que não pertence ao quadrilátero CDEN.",
    "1": "3,8 cm² corresponde a descontar apenas 0,2 cm², mas a área de ENM é 0,4 cm².",
    "2": "4,2 cm² já supera a área 4 cm² do triângulo DCM que contém o quadrilátero, sendo impossível.",
    "4": "4,4 cm² também excede a área do triângulo DCM e não pode ser a área pedida."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 3,
  "statement": "Considere a função $f(x) = 5 - \\sqrt{2}\\cdot\\cos\\left(\\frac{x}{4}\\right)$. O valor de $f(\\pi)$ é igual a",
  "alternatives": [
    "1.",
    "5.",
    "4.",
    "2.",
    "3."
  ],
  "answer": "C",
  "subject": "Matemática",
  "content": "Função trigonométrica e cosseno de pi sobre 4",
  "difficulty": "Fácil",
  "why": "Substituindo x = π, tem-se f(π) = 5 − √2 · cos(π/4). Como cos(π/4) = √2/2, resulta f(π) = 5 − √2 · √2/2 = 5 − 1 = 4.",
  "wrong": {
    "0": "Para obter 1 seria necessário cos(π/4) = 2√2, valor impossível para o cosseno.",
    "1": "5 seria obtido se o termo com cosseno fosse nulo, mas cos(π/4) = √2/2 ≠ 0.",
    "3": "Para obter 2 seria necessário cos(π/4) = 3/√2 > 1, o que é impossível.",
    "4": "Para obter 3 seria necessário cos(π/4) = √2 > 1, igualmente impossível."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 4,
  "statement": "Uma papelaria comercializa 4 tipos diferentes de lapiseiras, $L_1$, $L_2$, $L_3$ e $L_4$, sendo que os preços das lapiseiras $L_1$, $L_2$ e $L_3$, nessa ordem, formam uma progressão aritmética (PA) de razão 6, e os preços das lapiseiras $L_1$, $L_2$ e $L_4$, nessa ordem, formam uma progressão geométrica (PG). Sabendo que a diferença entre os preços das lapiseiras $L_4$ e $L_1$ é R$ 15,00, a razão dessa PG é",
  "alternatives": [
    "2.",
    "1,5.",
    "1.",
    "0,75.",
    "0,5."
  ],
  "answer": "B",
  "subject": "Matemática",
  "content": "Progressões aritmética e geométrica",
  "difficulty": "Média",
  "why": "Se L1 custa x, então L2 custa x + 6 e L3, x + 12. Como L4 − L1 = 15, L4 custa x + 15. Pela PG em L1, L2 e L4, (x + 6)² = x(x + 15), donde x = 12. Assim, L2 = 18 e a razão da PG é 18/12 = 1,5.",
  "wrong": {
    "0": "A razão 2 implicaria x + 6 = 2x, ou x = 6, e não verificaria a diferença de R$ 15,00 com o termo seguinte da PG.",
    "2": "A razão 1 faria L1 = L2, contrariando a razão 6 da PA.",
    "3": "A razão 0,75 é menor que 1, mas L2/L1 = (x + 6)/x > 1 para preços positivos.",
    "4": "A razão 0,5 também indicaria PG decrescente entre L1 e L2, incompatível com L2 = L1 + 6."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 5,
  "statement": "Em uma sala de aula há determinado número de alunos, sendo que 2 deles escrevem com as duas mãos, 4 alunos só escrevem com a mão esquerda e os demais só escrevem com a mão direita. Sorteando-se aleatoriamente um aluno dessa sala, a probabilidade de que ele escreva com a mão esquerda é $\\frac{3}{20}$. O número de alunos dessa sala que escrevem com a mão direita é",
  "alternatives": [
    "38.",
    "40.",
    "34.",
    "32.",
    "36."
  ],
  "answer": "E",
  "subject": "Matemática",
  "content": "Probabilidade e contagem de alunos",
  "difficulty": "Fácil",
  "why": "Escrevem com a mão esquerda os 4 alunos que só usam essa mão e os 2 que usam ambas, totalizando 6. Se N é o total, 6/N = 3/20, logo N = 40. Há 40 − 6 = 34 que só escrevem com a direita; somando os 2 ambidestros, 36 alunos escrevem com a mão direita.",
  "wrong": {
    "0": "38 excede em 2 a quantidade de alunos que escrevem com a direita e não decorre da separação entre destros e ambidestros.",
    "1": "40 é o total de estudantes da sala, incluindo os 4 que só escrevem com a mão esquerda.",
    "2": "34 conta apenas quem escreve exclusivamente com a direita e esquece os 2 alunos que escrevem com ambas as mãos.",
    "3": "32 subtrai indevidamente mais 2 alunos dos 34 que só escrevem com a direita."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 6,
  "statement": "Considere as funções $f(x) = \\frac{x}{3} + b$ e $g(x) = x^2 - bx + 1$, em que b é um número real. Sabendo que $f(6) = 4$, as coordenadas do vértice da parábola descrita pela função $g(x)$ são:",
  "alternatives": [
    "(1, 0)",
    "(−1, 0)",
    "(−1, −1)",
    "(1, 1)",
    "(0, −1)"
  ],
  "answer": "A",
  "subject": "Matemática",
  "content": "Função afim e vértice da parábola",
  "difficulty": "Fácil",
  "why": "De f(6) = 4, obtém-se 6/3 + b = 4, portanto b = 2. Então g(x) = x² − 2x + 1 = (x − 1)², cujo vértice é (1,0).",
  "wrong": {
    "1": "(−1,0) usa o sinal errado da abscissa do vértice; a forma fatorada é (x − 1)².",
    "2": "(−1,−1) não satisfaz a conclusão g(x) = (x − 1)² e apresenta sinais incorretos nas duas coordenadas.",
    "3": "(1,1) acerta a abscissa, mas confunde o termo independente com a ordenada mínima, que é 0.",
    "4": "(0,−1) nem pertence à parábola, pois g(0) = 1, e não −1."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 7,
  "statement": "Em determinada loja, na compra de uma unidade de cada um dos produtos P e Q, gasta-se o valor total de R$ 80,00. Após redução de 10% no preço do produto P e aumento de 50% no preço do produto Q, os preços unitários desses produtos passaram a ser os mesmos. Nessas condições, a diferença entre os preços desses produtos, antes das alterações, era de",
  "alternatives": [
    "R$ 15,00.",
    "R$ 10,00.",
    "R$ 5,00.",
    "R$ 20,00.",
    "R$ 25,00."
  ],
  "answer": "D",
  "subject": "Matemática",
  "content": "Sistema de equações e variação percentual",
  "difficulty": "Fácil",
  "why": "Sejam p e q os preços iniciais. Tem-se p + q = 80 e, após as alterações, 0,90p = 1,50q. Logo p = 5q/3; substituindo, 8q/3 = 80, donde q = 30 e p = 50. A diferença inicial era 50 − 30 = R$ 20,00.",
  "wrong": {
    "0": "R$ 15,00 não é a diferença entre os preços p = 50 e q = 30 determinados pelo sistema.",
    "1": "R$ 10,00 não satisfaz p − q com os valores que tornam 0,90p e 1,50q iguais.",
    "2": "R$ 5,00 é incompatível com a solução p = 50 e q = 30.",
    "4": "R$ 25,00 não corresponde à diferença de R$ 20,00 obtida após resolver as duas equações."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 8,
  "statement": "Em determinada escola, os alunos das turmas P, Q, R e S, de uma mesma série, compraram convites para uma festa beneficente. A tabela mostra o número de convites comprados por aluno nas turmas P, Q e R.",
  "alternatives": [
    "2.",
    "1.",
    "5.",
    "3.",
    "4."
  ],
  "answer": "C",
  "tables": [
    {
      "ariaLabel": "Número de alunos e de convites comprados por aluno nas turmas P, Q, R e S",
      "headerRows": [
        [
          "Turmas",
          "Nº de alunos",
          "Nº de convites comprados por aluno"
        ]
      ],
      "rows": [
        [
          {
            "text": "P",
            "header": true
          },
          "20",
          "6"
        ],
        [
          {
            "text": "Q",
            "header": true
          },
          "30",
          "4"
        ],
        [
          {
            "text": "R",
            "header": true
          },
          "25",
          "3"
        ],
        [
          {
            "text": "S",
            "header": true
          },
          "45",
          "?"
        ]
      ]
    }
  ],
  "statementAfter": "Considerando-se o número total de convites comprados pelos alunos das quatro turmas, na média, cada um comprou 4,5 convites. Portanto, cada aluno da turma S comprou um número de convites igual a",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Matemática",
  "content": "Média aritmética e tabela de frequências",
  "difficulty": "Fácil",
  "why": "As quatro turmas reúnem 20 + 30 + 25 + 45 = 120 alunos. Com média de 4,5 convites, foram comprados 120 × 4,5 = 540 convites. P, Q e R compraram 20 × 6 + 30 × 4 + 25 × 3 = 315; restaram 225 para S. Assim, cada aluno de S comprou 225/45 = 5 convites.",
  "wrong": {
    "0": "Se cada aluno de S comprasse 2, o total seria 405 e a média das quatro turmas seria 3,375, não 4,5.",
    "1": "Com 1 convite por aluno de S, o total seria 360 e a média seria 3.",
    "3": "Com 3 convites por aluno de S, o total seria 450 e a média seria 3,75.",
    "4": "Com 4 convites por aluno de S, o total seria 495 e a média seria 4,125, ainda abaixo de 4,5."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 9,
  "statement": "Uma pessoa fez o empréstimo de determinada quantia e, sobre esse valor, pagou uma taxa de juros simples de 8% ao mês. Após 5 meses, esse empréstimo foi quitado, e o valor total pago, incluindo os juros, foi R$ 3.500,00. O valor total dos juros cobrados foi",
  "alternatives": [
    "R$ 1.000,00.",
    "R$ 1.400,00.",
    "R$ 1.200,00.",
    "R$ 700,00.",
    "R$ 500,00."
  ],
  "answer": "A",
  "subject": "Matemática",
  "content": "Juros simples e montante",
  "difficulty": "Fácil",
  "why": "Em cinco meses a 8% ao mês, os juros simples correspondem a 40% do capital. Assim, o montante é M = 1,40C = 3.500, donde C = 2.500. Os juros foram J = 3.500 − 2.500 = R$ 1.000,00.",
  "wrong": {
    "1": "R$ 1.400,00 resultaria de aplicar 40% diretamente ao montante de R$ 3.500,00, e não ao capital de R$ 2.500,00.",
    "2": "R$ 1.200,00 sobre R$ 2.500,00 em cinco meses corresponderia a 9,6% ao mês, não a 8%.",
    "3": "R$ 700,00 corresponderia à taxa de 5,6% ao mês nas condições calculadas.",
    "4": "R$ 500,00 corresponderia a 4% ao mês, metade da taxa informada."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 10,
  "statement": "Os 7 atletas de uma equipe de natação, entre eles 2 campeões olímpicos, vão se posicionar lado a lado para uma foto, de maneira que um dos campeões olímpicos fique à esquerda da foto e outro fique à direita. Nessas condições, o número de maneiras diferentes de esses atletas se posicionarem para a foto é",
  "alternatives": [
    "5 040.",
    "120.",
    "720.",
    "240.",
    "360."
  ],
  "answer": "D",
  "subject": "Matemática",
  "content": "Permutação com posições fixas",
  "difficulty": "Fácil",
  "why": "Os dois campeões podem trocar entre si as duas extremidades, de 2! maneiras. Os outros cinco atletas ocupam as cinco posições internas de 5! maneiras. Pelo princípio multiplicativo, há 2! × 5! = 2 × 120 = 240 fotos diferentes.",
  "wrong": {
    "0": "5.040 = 7! conta todas as filas sem impor que os campeões ocupem as extremidades.",
    "1": "120 = 5! permuta somente os demais atletas e não considera as duas escolhas de ordem dos campeões.",
    "2": "720 = 6! não representa a restrição completa das duas extremidades nem o produto 2! × 5!.",
    "4": "360 não resulta das escolhas independentes do enunciado; o número correto é 2 × 120 = 240."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 11,
  "statement": "Em um plano cartesiano, os gráficos descritos pelas funções $f(x) = \\frac{x+1}{2}$ e $g(x) = 2^{x-2}$ se intersectam, no primeiro quadrante, no ponto $P(a,b)$.",
  "alternatives": [
    "4",
    "8",
    "2",
    "1",
    "$\\frac{1}{2}$"
  ],
  "answer": "B",
  "visuals": [
    {
      "file": "uea2024ce3-q11-graficos-f-g.svg",
      "alt": "Gráficos da reta f e da exponencial g no plano cartesiano, com interseção P(a,b) no primeiro quadrante e projeções tracejadas nos eixos."
    }
  ],
  "statementAfter": "Sabendo que $f(a) = 2$, o valor de $g(a+b)$ é igual a:",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Matemática",
  "content": "Funções afim e exponencial",
  "difficulty": "Média",
  "why": "Como P(a,b) pertence ao gráfico de f e f(a) = 2, tem-se b = 2 e (a + 1)/2 = 2, logo a = 3. Portanto a + b = 5 e g(a + b) = g(5) = 2^(5−2) = 2³ = 8.",
  "wrong": {
    "0": "4 é g(4), mas a soma pedida é a + b = 5, não 4.",
    "2": "2 é g(3) = g(a), valor da função no ponto P, e não g(a + b).",
    "3": "1 é g(2), obtido com argumento diferente de 5.",
    "4": "1/2 é g(1), também calculado com argumento incorreto."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 12,
  "statement": "Um sólido, no formato de um cilindro circular reto, tem volume igual a $54\\pi\\ \\mathrm{cm}^{3}$, e sua área lateral ($A_L$) é calculada pela expressão $A_L = 2\\pi\\cdot R\\cdot H$, em que R e H são, respectivamente, o raio da base e a altura do cilindro. Sabendo que a medida da altura desse cilindro é o dobro da medida do raio da sua base, a área lateral desse cilindro é",
  "alternatives": [
    "$36\\pi\\ \\mathrm{cm}^{2}$.",
    "$27\\pi\\ \\mathrm{cm}^{2}$.",
    "$32\\pi\\ \\mathrm{cm}^{2}$.",
    "$40\\pi\\ \\mathrm{cm}^{2}$.",
    "$42\\pi\\ \\mathrm{cm}^{2}$."
  ],
  "answer": "A",
  "subject": "Matemática",
  "content": "Volume e área lateral do cilindro",
  "difficulty": "Fácil",
  "why": "Como H = 2R, o volume fornece πR²H = 2πR³ = 54π, logo R³ = 27 e R = 3 cm; portanto H = 6 cm. A área lateral é AL = 2πRH = 2π × 3 × 6 = 36π cm².",
  "wrong": {
    "1": "27π cm² usa o valor numérico de R³, mas a área lateral exige 2πRH, que resulta 36π cm².",
    "2": "32π cm² não é obtido ao substituir R = 3 cm e H = 6 cm em 2πRH.",
    "3": "40π cm² não corresponde ao produto 2π × 3 × 6.",
    "4": "42π cm² também diverge da área lateral calculada com as dimensões determinadas pelo volume."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 13,
  "statement": "No muro de uma escola está pintado o desenho de uma régua, graduada em metros. Como atividade, o professor de Física pede para que os alunos gravem um vídeo de uma pessoa andando ao lado desse muro e, com as informações do vídeo, determinem a velocidade média da pessoa. As figuras 1 e 2 representam quadros do vídeo obtido pelos alunos.",
  "alternatives": [
    "1,0 m/s.",
    "2,5 m/s.",
    "0,5 m/s.",
    "2,0 m/s.",
    "1,5 m/s."
  ],
  "answer": "E",
  "visuals": [
    {
      "file": "uea2024ce3-q13-quadros-video.svg",
      "alt": "Dois quadros de vídeo com uma régua de 0 a 12 metros: a pessoa está na posição 2 m aos 15 s e na posição 11 m aos 21 s."
    }
  ],
  "statementAfter": "Com base na análise das figuras, os alunos devem calcular que a velocidade média da pessoa é de",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Velocidade média em quadros de vídeo",
  "difficulty": "Fácil",
  "why": "Entre os quadros, a pessoa passa da posição 2 m para 11 m, percorrendo Δs = 9 m. Os instantes são 15 s e 21 s, portanto Δt = 6 s. A velocidade média é vm = Δs/Δt = 9/6 = 1,5 m/s.",
  "wrong": {
    "0": "1,0 m/s corresponderia a um deslocamento de 6 m em 6 s, não aos 9 m indicados pela régua.",
    "1": "2,5 m/s exigiria 15 m em 6 s, deslocamento incompatível com as posições 2 m e 11 m.",
    "2": "0,5 m/s corresponderia a apenas 3 m em 6 s.",
    "3": "2,0 m/s resulta de usar 12 m como deslocamento, em vez da diferença 11 − 2 = 9 m."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 14,
  "statement": "Uma criança, brincando com um estilingue, lança uma pedra verticalmente para cima. Na figura estão ilustrados três momentos desse lançamento: o momento $t = 0$, no qual a criança está na iminência de lançar a pedra, o momento $t = t_a$, no qual a pedra abandona o elástico do estilingue, e o momento $t = t_f$, no qual a pedra atinge a altura máxima de sua trajetória.",
  "alternatives": [
    "",
    "",
    "",
    "",
    ""
  ],
  "answer": "C",
  "visuals": [
    {
      "file": "uea2024ce3-q14-momentos-estilingue.svg",
      "alt": "Três momentos do lançamento vertical de uma pedra por estilingue: t igual a zero, t igual a ta ao abandonar o elástico e t igual a tf na altura máxima."
    }
  ],
  "statementAfter": "Considerando a energia total do sistema composta pelas energias potencial elástica do estilingue ($E_{el}$), cinética ($E_{cin}$) e potencial gravitacional da pedra ($E_{pot}$), o gráfico que melhor representa a evolução dessas energias em função do tempo é:",
  "afterBlockTypes": [
    "command"
  ],
  "alternativeVisuals": [
    [
      {
        "file": "uea2024ce3-q14-alternativa-a.svg",
        "alt": "Alternativa A: gráfico de energias potencial elástica, cinética e potencial gravitacional em função do tempo."
      }
    ],
    [
      {
        "file": "uea2024ce3-q14-alternativa-b.svg",
        "alt": "Alternativa B: gráfico de energias potencial elástica, cinética e potencial gravitacional em função do tempo."
      }
    ],
    [
      {
        "file": "uea2024ce3-q14-alternativa-c.svg",
        "alt": "Alternativa C: energia elástica cai a zero em ta, energia cinética atinge máximo e depois cai a zero em tf, enquanto a energia potencial gravitacional aumenta."
      }
    ],
    [
      {
        "file": "uea2024ce3-q14-alternativa-d.svg",
        "alt": "Alternativa D: gráfico de energias potencial elástica, cinética e potencial gravitacional em função do tempo."
      }
    ],
    [
      {
        "file": "uea2024ce3-q14-alternativa-e.svg",
        "alt": "Alternativa E: gráfico de energias potencial elástica, cinética e potencial gravitacional em função do tempo."
      }
    ]
  ],
  "subject": "Física",
  "content": "Conservação e transformação de energia no estilingue",
  "difficulty": "Média",
  "why": "Inicialmente, a energia está armazenada no elástico. Até ta, Eel cai a zero e Ecin aumenta; depois do lançamento, Ecin diminui e Epot cresce até a altura máxima, em tf, quando a velocidade e a energia cinética se anulam. Apenas o gráfico C apresenta essas três evoluções.",
  "wrong": {
    "0": "No gráfico A, Eel aumenta e permanece alta após o lançamento, em vez de cair a zero em ta.",
    "1": "No gráfico B, Epot diminui até zero e Ecin cresce até tf, invertendo o movimento de subida após o lançamento.",
    "3": "No gráfico D, Ecin apresenta novo crescimento perto de tf, quando deveria ser nula, e Epot não evolui como na subida.",
    "4": "No gráfico E, Eel permanece elevada após ta e Ecin não se anula em tf, contrariando os dois instantes descritos."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 15,
  "statement": "Um professor de Física constrói um experimento para apresentar a seus alunos a 2ª Lei de Newton. Sobre um trilho reto e horizontal, ele coloca um carrinho de massa desprezível e, a esse carrinho, prende uma corda com um dinamômetro, como apresentado na figura. A corda passa por uma roldana e é presa a um tijolo. Os alunos, então, inserem um objeto de massa desconhecida m dentro do carrinho e liberam o sistema.",
  "alternatives": [
    "3,0 kg.",
    "1,2 kg.",
    "0,5 kg.",
    "2,1 kg.",
    "4,5 kg."
  ],
  "answer": "A",
  "visuals": [
    {
      "file": "uea2024ce3-q15-experimento-newton.svg",
      "alt": "Carrinho com objeto de massa desconhecida sobre trilho horizontal, ligado por corda e dinamômetro de 7,5 N a uma roldana e a um tijolo; aceleração indicada para a direita."
    }
  ],
  "statementAfter": "Sabendo que o sistema é livre de atritos, que a leitura do dinamômetro foi de 7,5 N e que a aceleração obtida pelo carrinho foi de $2,5\\ \\mathrm{m/s}^{2}$, os alunos calculam que m vale",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Segunda lei de Newton e dinamômetro",
  "difficulty": "Fácil",
  "why": "Na horizontal, a força resultante sobre o conjunto de massa desprezível do carrinho mais o objeto é a tração indicada pelo dinamômetro. Pela 2ª lei de Newton, F = ma, logo m = 7,5/2,5 = 3,0 kg.",
  "wrong": {
    "1": "Com 1,2 kg, a força de 7,5 N produziria aceleração de 6,25 m/s², não 2,5 m/s².",
    "2": "Com 0,5 kg, a aceleração seria 15 m/s².",
    "3": "Com 2,1 kg, a aceleração seria aproximadamente 3,57 m/s².",
    "4": "Com 4,5 kg, a aceleração seria aproximadamente 1,67 m/s²."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 16,
  "statement": "Pontes geralmente são construídas com segmentos que, dentre várias outras funções, servem para impedir que dilatações térmicas danifiquem suas estruturas. A figura a seguir destaca como se dá a junção dos segmentos de uma ponte.",
  "alternatives": [
    "14,0 cm.",
    "11,0 cm.",
    "8,0 cm.",
    "5,0 cm.",
    "2,0 cm."
  ],
  "answer": "D",
  "visuals": [
    {
      "file": "uea2024ce3-q16-juncoes-ponte.svg",
      "alt": "Esquema de uma ponte formada por segmentos separados por junções de dilatação, com detalhe fotográfico de uma junção."
    }
  ],
  "statementAfter": "Considere que o comprimento de um desses segmentos da ponte varie linearmente em função da temperatura, conforme descrito no gráfico.",
  "afterBlockTypes": [
    "prose"
  ],
  "afterVisuals": [
    {
      "file": "uea2024ce3-q16-grafico-dilatacao.svg",
      "alt": "Gráfico do comprimento de um segmento de ponte em função da temperatura, com comprimento crescente linearmente de 99,975 m a mais de 100,100 m."
    }
  ],
  "statementTail": "Com base nos dados apresentados no gráfico, conclui-se que, dada uma variação de temperatura de 20 °C, o segmento da ponte dilatará em",
  "tailBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Dilatação linear e leitura de gráfico",
  "difficulty": "Média",
  "why": "O gráfico mostra aumento de 0,025 m no comprimento a cada 10 °C. Para 20 °C, a dilatação é 2 × 0,025 = 0,050 m. Convertendo, 0,050 m = 5,0 cm.",
  "wrong": {
    "0": "14,0 cm não corresponde à variação de 0,050 m lida a partir da inclinação do gráfico.",
    "1": "11,0 cm não resulta de duas variações de 0,025 m associadas aos 20 °C.",
    "2": "8,0 cm não satisfaz a proporcionalidade de 0,025 m a cada 10 °C.",
    "4": "2,0 cm é inferior aos 5,0 cm obtidos e não corresponde à conversão de 0,050 m."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 17,
  "statement": "Uma placa de madeira está sendo serrada por uma serra fita, cujos dentes são espaçados em 4 mm, como mostra a figura. Cada vez que um dente atinge a placa de madeira, um pulso mecânico é gerado, fazendo com que a placa de madeira vibre conforme é serrada.",
  "alternatives": [
    "150 Hz.",
    "125 Hz.",
    "175 Hz.",
    "200 Hz.",
    "225 Hz."
  ],
  "answer": "B",
  "visuals": [
    {
      "file": "uea2024ce3-q17-serra-fita.svg",
      "alt": "Serra fita cortando placa de madeira, com detalhe dos dentes espaçados em 4 mm e velocidade de 0,5 m/s para baixo."
    }
  ],
  "statementAfter": "Considere que a serra se mova para baixo com velocidade constante $v = 0,5\\ \\mathrm{m/s}$ e que a vibração da placa seja regida pela relação $v = \\lambda f$, em que $\\lambda$ é o comprimento de onda associado aos dentes da serra. A frequência de vibração, $f$, da placa de madeira enquanto ela está sendo serrada é de",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Frequência e comprimento de onda na serra fita",
  "difficulty": "Fácil",
  "why": "O espaçamento dos dentes é λ = 4 mm = 0,004 m. Usando v = λf, obtém-se f = v/λ = 0,5/0,004 = 125 Hz.",
  "wrong": {
    "0": "150 Hz com λ = 0,004 m corresponderia à velocidade 0,6 m/s, e não 0,5 m/s.",
    "2": "175 Hz corresponderia a v = 0,7 m/s.",
    "3": "200 Hz corresponderia a v = 0,8 m/s.",
    "4": "225 Hz corresponderia a v = 0,9 m/s."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 18,
  "statement": "Em uma situação hipotética, dois astronautas, em duas estações espaciais diferentes, improvisam um telefone com duas latas e um barbante, conforme a figura. Considere que, durante a comunicação entre os dois astronautas, o barbante permaneça tensionado.",
  "alternatives": [
    "metal das latas, que converte ondas mecânicas em ondas eletromagnéticas.",
    "vácuo entre as estações, que permite que ondas mecânicas se propaguem livremente.",
    "barbante, que serve como meio material para a propagação de ondas eletromagnéticas.",
    "vácuo entre as estações, que impede que ondas eletromagnéticas bloqueiem ondas mecânicas.",
    "barbante, que serve como meio material para a propagação de ondas mecânicas."
  ],
  "answer": "E",
  "visuals": [
    {
      "file": "uea2024ce3-q18-telefone-latas.svg",
      "alt": "Dois astronautas em estações espaciais diferentes seguram latas ligadas por um barbante tensionado."
    }
  ],
  "statementAfter": "Mesmo que impraticável, essa comunicação entre os astronautas seria possível devido ao",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Propagação de ondas mecânicas em meio material",
  "difficulty": "Fácil",
  "why": "O som e as vibrações transmitidas pelo barbante são ondas mecânicas e precisam de um meio material. O barbante tensionado liga as latas e permite que a vibração se propague entre os astronautas, apesar do vácuo externo.",
  "wrong": {
    "0": "As latas não convertem, nesse telefone artesanal, ondas mecânicas em ondas eletromagnéticas.",
    "1": "O vácuo não permite a propagação livre de ondas mecânicas, pois elas necessitam de matéria.",
    "2": "O barbante serve de meio para ondas mecânicas, não para ondas eletromagnéticas.",
    "3": "O vácuo não impede ondas eletromagnéticas e a alternativa não explica a transmissão sonora pelo barbante."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 19,
  "statement": "Considere que, no esquema simplificado da figura a seguir, a face mostrada da Terra é referente a seu Polo Norte geográfico.",
  "alternatives": [
    "Oeste – anti-horário.",
    "Leste – anti-horário.",
    "Leste – horário.",
    "Sul – anti-horário.",
    "Oeste – horário."
  ],
  "answer": "B",
  "visuals": [
    {
      "file": "uea2024ce3-q19-rotacao-terra.svg",
      "alt": "Esquema da Terra vista do Polo Norte geográfico, com indicações de leste e oeste, e o Sol representado à direita."
    }
  ],
  "statementAfter": "Sabendo que o Sol nasce no mesmo sentido em que flui o rio Amazonas e se põe na direção contrária, tem-se que o Sol nasce no __________ e que a rotação da Terra em torno de seu próprio eixo, em relação à figura, deve ser no sentido do __________.\n\nAs lacunas do texto são preenchidas, respectivamente, por:",
  "afterBlockTypes": [
    "prose",
    "command"
  ],
  "subject": "Física",
  "content": "Rotação da Terra e sentido do nascer do Sol",
  "difficulty": "Média",
  "why": "O rio Amazonas flui predominantemente para leste; portanto, o Sol nasce no leste. Para que o nascer e o pôr do sol aparentes ocorram nesses sentidos, a Terra deve girar de oeste para leste, o que aparece como rotação anti-horária quando observada acima do Polo Norte.",
  "wrong": {
    "0": "Oeste está incorreto para o nascer do Sol, embora anti-horário seja o sentido correto da rotação vista do Polo Norte.",
    "2": "Leste está correto, mas horário é o sentido aparente quando a Terra é observada do Polo Sul, não do Polo Norte.",
    "3": "Sul não é a direção cardeal do nascer do Sol descrita no enunciado.",
    "4": "Oeste e horário estão ambos incorretos para a situação representada."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 20,
  "statement": "Um parque eólico sustenta três grandes cidades, A, B e C, que consomem, respectivamente, 0,70 TWh, 0,55 TWh e 1,15 TWh de energia elétrica em um mês. Devido às perdas energéticas nas redes elétricas que ligam o parque eólico às cidades, é necessário que esse parque produza um total de 3,00 TWh de energia em um mês. O rendimento energético da rede elétrica formada pelo parque eólico em conjunto com as três cidades é de",
  "alternatives": [
    "80%.",
    "90%.",
    "85%.",
    "95%.",
    "75%."
  ],
  "answer": "A",
  "subject": "Física",
  "content": "Rendimento energético em rede elétrica",
  "difficulty": "Fácil",
  "why": "A energia útil consumida pelas cidades é 0,70 + 0,55 + 1,15 = 2,40 TWh. Como o parque produz 3,00 TWh, o rendimento é η = 2,40/3,00 = 0,80 = 80%.",
  "wrong": {
    "1": "Um rendimento de 90% forneceria 2,70 TWh às cidades, acima dos 2,40 TWh consumidos.",
    "2": "Com 85%, a energia útil seria 2,55 TWh, não 2,40 TWh.",
    "3": "Com 95%, seriam aproveitados 2,85 TWh, valor incompatível com o consumo total.",
    "4": "Com 75%, restariam apenas 2,25 TWh para as cidades."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 21,
  "statement": "Uma pessoa estaciona seu carro a 100 m de um prédio, que projeta uma sombra sobre o solo. Devido à escassez de vagas, a pessoa é obrigada a estacionar fora da região de sombra, conforme representado na figura.",
  "alternatives": [
    "100 minutos.",
    "40 minutos.",
    "60 minutos.",
    "20 minutos.",
    "80 minutos."
  ],
  "answer": "C",
  "visuals": [
    {
      "file": "uea2024ce3-q21-sombra-predio.svg",
      "alt": "Prédio de 100 m projeta sombra no solo; carro está a 100 m do prédio e fora da sombra, com raio solar formando 30 graus com a vertical."
    }
  ],
  "statementAfter": "Considere que o carro possui dimensões desprezíveis, que o Sol é uma fonte de luz pontual e que o carro, o prédio e o Sol estão sobre o mesmo plano vertical. Com base nos dados da figura e sabendo que a cada hora o Sol descreve um arco de 15° no sentido anti-horário, a partir do momento em que o carro foi estacionado, a sombra do prédio o alcançará em",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Sombra, semelhança e movimento aparente do Sol",
  "difficulty": "Média",
  "why": "Quando a sombra alcançar o carro, o triângulo formado pelo prédio e pela sombra terá altura 100 m e base 100 m; logo o raio solar fará 45° com a vertical. Na figura inicial, esse ângulo é 30°, portanto o Sol precisa percorrer 45° − 30° = 15°. Como descreve 15° por hora, isso ocorre em 1 hora, ou 60 minutos.",
  "wrong": {
    "0": "100 minutos correspondem a um deslocamento solar de 25°, superior aos 15° necessários.",
    "1": "40 minutos correspondem a 10°, insuficientes para passar de 30° a 45°.",
    "3": "20 minutos correspondem a apenas 5° de deslocamento aparente.",
    "4": "80 minutos correspondem a 20°, também diferentes dos 15° exigidos."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 22,
  "statement": "Uma criança inicia um percurso com seu patinete, cujo corpo é feito de metal. Após percorrer um longo caminho sem tocar no chão, essa criança apoia-se em um poste metálico e sente um forte choque elétrico na região da pele apoiada no poste.\n\nIsso acontece porque, enquanto o patinete movimenta-se sobre o chão, suas rodinhas são eletrizadas por __________. As cargas elétricas adquiridas por essas rodinhas, ao serem transferidas para o corpo do brinquedo, são conduzidas para __________ do patinete. O processo de condução continua do corpo do patinete para o corpo da criança. Quando a criança toca no poste, ocorre a transferência de cargas elétricas para o poste por eletrização por __________, provocando o choque elétrico.\n\nAs lacunas do texto são preenchidas, respectivamente, por:",
  "alternatives": [
    "atrito – o interior – contato.",
    "contato – a superfície – indução.",
    "contato – a superfície – atrito.",
    "atrito – a superfície – contato.",
    "indução – o interior – atrito."
  ],
  "answer": "D",
  "blockTypes": [
    "prose",
    "prose",
    "command"
  ],
  "subject": "Física",
  "content": "Eletrização por atrito, contato e distribuição de cargas",
  "difficulty": "Fácil",
  "why": "As rodinhas se eletrizam por atrito com o chão. Em um condutor, as cargas em excesso distribuem-se na superfície do patinete; ao tocar o poste, a transferência ocorre por contato. A sequência é atrito – a superfície – contato.",
  "wrong": {
    "0": "Atrito e contato estão corretos, mas as cargas em excesso não se concentram no interior de um condutor em equilíbrio eletrostático.",
    "1": "As rodinhas não se eletrizam por contato no processo descrito, e o toque no poste não é eletrização por indução.",
    "2": "A sequência usa contato para as rodinhas e atrito para o poste, trocando os processos indicados.",
    "4": "Indução, interior e atrito não correspondem, respectivamente, aos três fenômenos descritos."
  }
}),

  q({
  "n": 23,
  "statement": "Um carregador de celular possui em seu cabo de energia as seguintes inscrições:",
  "alternatives": [
    "0,72 Ω em série.",
    "0,45 Ω em paralelo.",
    "0,75 Ω em série.",
    "0,60 Ω em paralelo.",
    "0,90 Ω em série."
  ],
  "answer": "A",
  "visuals": [
    {
      "file": "uea2024ce3-q23-cabo-usb.svg",
      "alt": "Cabo de carregador com dois terminais USB e inscrição de resistência de 0,15 ohm por metro mais 0,30 ohm por terminal USB."
    }
  ],
  "statementAfter": "Sabendo que o cabo possui 0,8 m de comprimento, ao ser utilizado para carregar um celular, ele introduz ao circuito de carregamento uma resistência de",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Resistência elétrica de cabo e terminais USB",
  "difficulty": "Fácil",
  "why": "A corrente de carregamento percorre o cabo e os dois terminais, que ficam em série. A resistência do cabo é 0,15 Ω/m × 0,8 m = 0,12 Ω; os terminais somam 2 × 0,30 Ω = 0,60 Ω. Portanto Req = 0,12 + 0,60 = 0,72 Ω, em série.",
  "wrong": {
    "1": "Além de indicar paralelo, 0,45 Ω não soma corretamente os 0,12 Ω do cabo e os 0,60 Ω dos dois terminais.",
    "2": "0,75 Ω corresponde a usar 1 m de cabo com os dois terminais, pois 0,15 + 0,60 = 0,75 Ω, mas o comprimento é 0,8 m.",
    "3": "0,60 Ω considera somente os terminais, ignora o cabo e ainda associa os elementos em paralelo.",
    "4": "0,90 Ω não resulta de 0,15 × 0,8 + 2 × 0,30; a soma correta é 0,72 Ω."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 24,
  "statement": "Reações de decaimento possuem diversas aplicações científicas e tecnológicas. A reação apresentada na figura a seguir faz parte de uma série de decaimentos que são utilizados para a determinação da idade de rochas.",
  "alternatives": [
    "${}_{90}^{234}\\mathrm{Th}+\\gamma\\longrightarrow{}_{92}^{238}\\mathrm{U}+{}_{2}^{4}\\mathrm{He}$",
    "${}_{92}^{238}\\mathrm{U}\\longrightarrow{}_{90}^{234}\\mathrm{Th}+{}_{2}^{4}\\mathrm{He}+\\gamma$",
    "${}_{92}^{238}\\mathrm{U}+{}_{2}^{4}\\mathrm{He}\\longrightarrow{}_{90}^{234}\\mathrm{Th}+\\beta$",
    "${}_{92}^{238}\\mathrm{U}+{}_{90}^{234}\\mathrm{Th}\\longrightarrow{}_{2}^{4}\\mathrm{He}+\\gamma$",
    "${}_{90}^{234}\\mathrm{Th}\\longrightarrow{}_{92}^{238}\\mathrm{U}+{}_{2}^{4}\\mathrm{He}+\\beta$"
  ],
  "answer": "B",
  "visuals": [
    {
      "file": "uea2024ce3-q24-decaimento.svg",
      "alt": "Esquema de decaimento: núcleo de 238 unidades de massa atômica origina núcleo de 234, emissão de massa aproximadamente zero e partícula de 4 unidades."
    }
  ],
  "statementAfter": "A tabela indica alguns dos núcleos atômicos e partículas que podem estar envolvidos em decaimentos desse tipo.",
  "afterBlockTypes": [
    "prose"
  ],
  "afterTables": [
    {
      "ariaLabel": "Espécies nucleares, siglas, massas em unidades de massa atômica e cargas elementares",
      "headerRows": [
        [
          "Espécie",
          "Sigla",
          "Massa (u.m.a.)",
          "Carga (e)"
        ]
      ],
      "rows": [
        [
          {
            "text": "Urânio-238",
            "header": true
          },
          "U",
          "238",
          "92"
        ],
        [
          {
            "text": "Tório-234",
            "header": true
          },
          "Th",
          "234",
          "90"
        ],
        [
          {
            "text": "Partícula alfa",
            "header": true
          },
          "α ou He",
          "4",
          "2"
        ],
        [
          {
            "text": "Partícula beta",
            "header": true
          },
          "β",
          "≈ 0",
          "−1 ou +1"
        ],
        [
          {
            "text": "Raios gama",
            "header": true
          },
          "γ",
          "0",
          "0"
        ]
      ]
    }
  ],
  "statementTail": "Com base nos dados da tabela, conclui-se que a reação apresentada na figura é descrita por:",
  "tailBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Decaimento alfa do urânio-238",
  "difficulty": "Fácil",
  "why": "A figura mostra o núcleo de 238 u.m.a. originando um núcleo de 234 u.m.a., uma partícula alfa de 4 u.m.a. e emissão gama. Assim, ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He + γ. Conservam-se massa (238 = 234 + 4) e carga (92 = 90 + 2).",
  "wrong": {
    "0": "A alternativa A inverte o sentido do decaimento e não conserva massa nem carga entre os lados da equação.",
    "2": "Na alternativa C, os números de massa e carga não se conservam, e a partícula alfa aparece indevidamente entre os reagentes.",
    "3": "Na alternativa D, urânio e tório são somados como reagentes e os produtos não representam os núcleos mostrados.",
    "4": "Na alternativa E, o tório aparece como reagente e a emissão beta não corresponde à partícula alfa de 4 u.m.a. da figura."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 25,
  "statement": "Considere a tirinha de Will Leite, publicada no perfil @will.tirando do Instagram.",
  "alternatives": [
    "revela, para o leitor, o desinteresse de Jair por seu trabalho.",
    "expõe, para o leitor, a dificuldade de Jair para cumprir horários.",
    "aponta, para o leitor, uma contradição nas considerações feitas pelo cliente.",
    "explicita, para o leitor, a relação de amizade existente entre os dois personagens.",
    "confirma, para o leitor, a veracidade das afirmações feitas pelo cliente."
  ],
  "answer": "E",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce3-q25-tirinha-jair.svg",
      "alt": "Tirinha de Will Leite: cliente reclama que ninguém liga para ele; ao ouvir que o bar está fechando, Jair diz que ninguém liga para suas dores."
    }
  ],
  "statementAfter": "A atitude de Jair, no último quadrinho,",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Interpretação de tirinha e confirmação de sentido",
  "difficulty": "Média",
  "why": "Ao anunciar apenas que o bar está fechando, Jair desconsidera a queixa do cliente e confirma, pelo comportamento, a afirmação de que ninguém liga para ele e para suas dores.",
  "wrong": {
    "0": "Jair está trabalhando e informa o fechamento; a cena não revela desinteresse dele por seu trabalho.",
    "1": "A fala sobre o fechamento do bar não expõe dificuldade pessoal de Jair para cumprir horários.",
    "2": "Não há contradição nas considerações do cliente: a reação de Jair as confirma.",
    "3": "A atitude não explicita amizade, mas falta de acolhimento da queixa do cliente."
  }
}),

  q({
  "n": 26,
  "alternatives": [
    "otimista.",
    "estrategista.",
    "carismática.",
    "fantasiosa.",
    "medrosa."
  ],
  "answer": "D",
  "common": "ciranda",
  "statementAfter": "De acordo com a cena narrada, a personagem Virgínia, quando criança, era:",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Literatura",
  "content": "Ciranda de pedra: caracterização de Virgínia",
  "difficulty": "Fácil",
  "why": "Virgínia imagina que os bichos têm alma e que pessoas podem voltar como animais ou borboletas, revelando uma criança fantasiosa.",
  "wrong": {
    "0": "A personagem se julga feia e ruim e se angustia, comportamento incompatível com o otimismo.",
    "1": "Não há planejamento estratégico na sequência de pensamentos e ações da personagem.",
    "2": "A cena não apresenta interações que comprovem carisma; seu foco é o mundo imaginário de Virgínia.",
    "4": "Embora sinta angústia, o traço construído pela cena é a imaginação, e não uma caracterização geral como medrosa."
  }
}),

  q({
  "n": 27,
  "alternatives": [
    "uma das irmãs de Virgínia.",
    "a mãe de Virgínia.",
    "a empregada da casa onde Virgínia mora na infância.",
    "uma tia de Virgínia, casada com Tio Daniel.",
    "a irmã de Conrado."
  ],
  "answer": "C",
  "common": "ciranda",
  "statementAfter": "No romance, a personagem Luciana é",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Literatura",
  "content": "Ciranda de pedra: personagem Luciana",
  "difficulty": "Média",
  "why": "No romance Ciranda de pedra, Luciana é a empregada da casa em que Virgínia vive na infância.",
  "wrong": {
    "0": "Luciana não é apresentada no romance como uma das irmãs de Virgínia.",
    "1": "A mãe de Virgínia é Laura, não Luciana.",
    "3": "Luciana não é tia de Virgínia nem esposa de tio Daniel; sua função na casa é a de empregada.",
    "4": "Não existe, na caracterização da personagem, a relação de irmandade com Conrado indicada na alternativa."
  }
}),

  q({
  "n": 28,
  "alternatives": [
    "apressada.",
    "longa.",
    "falsa.",
    "grosseira.",
    "vaga."
  ],
  "answer": "E",
  "common": "ciranda",
  "statementAfter": "No trecho “— Estou fazendo uma coisa — respondeu evasivamente” (7º parágrafo), a palavra “evasivamente” indica que a resposta foi",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Evasivamente e valor semântico em contexto",
  "difficulty": "Fácil",
  "why": "Evasivamente significa de maneira evasiva, ou seja, a resposta de Virgínia foi vaga e não esclareceu o que ela estava fazendo.",
  "wrong": {
    "0": "O advérbio caracteriza a falta de clareza, não a velocidade da resposta.",
    "1": "A fala é curta e não pode ser caracterizada como longa.",
    "2": "O texto permite concluir que a resposta é vaga, mas não comprova que seu conteúdo seja falso.",
    "3": "A resposta não contém agressividade ou grosseria."
  }
}),

  q({
  "n": 29,
  "alternatives": [
    "quem mandava nela era seu pai.",
    "quem mandava nela seria seu pai.",
    "quem mandaria nela era seu pai.",
    "quem mandaria nela seria seu pai.",
    "quem manda nela é seu pai."
  ],
  "answer": "A",
  "common": "ciranda",
  "statementAfter": "A fala “quem manda em mim é meu pai” (11º parágrafo), passada ao discurso indireto, assume a seguinte redação:",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Discurso direto e indireto",
  "difficulty": "Média",
  "why": "Na passagem ao discurso indireto em contexto narrativo passado, “manda” e “é” tornam-se “mandava” e “era”: quem mandava nela era seu pai.",
  "wrong": {
    "1": "O segundo verbo não deve ir para o condicional “seria”; a forma adequada é “era”.",
    "2": "A primeira forma está no condicional e a segunda no pretérito imperfeito, combinação que não preserva a correspondência verbal.",
    "3": "Os condicionais “mandaria” e “seria” introduzem hipótese ou futuro do pretérito e alteram o sentido da fala.",
    "4": "Manter “manda” e “é” no presente não realiza a transposição temporal exigida pelo discurso indireto."
  }
}),

  q({
  "n": 30,
  "alternatives": [
    "causa.",
    "explicação.",
    "consequência.",
    "alternativa.",
    "finalidade."
  ],
  "answer": "D",
  "common": "ciranda",
  "statementAfter": "“— Ou você abre ou conto para o seu tio.” (9º parágrafo) Em relação à primeira, a segunda oração expressa uma",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Orações coordenadas alternativas",
  "difficulty": "Fácil",
  "why": "A conjunção “ou” estabelece relação de alternância entre abrir a porta e contar para o tio; portanto, a segunda oração é coordenada alternativa.",
  "wrong": {
    "0": "A segunda oração não apresenta a causa da primeira.",
    "1": "Ela não explica a primeira oração, mas oferece outra possibilidade.",
    "2": "Embora a fala implique uma ameaça, a relação sintática marcada por “ou” é de alternância, não de consequência.",
    "4": "Não há conector de finalidade nem indicação de finalidade sintática entre as orações."
  }
}),

  q({
  "n": 31,
  "statement": "Considere a tirinha de Pablo Carballo, publicada no perfil @opablocarballo do Instagram.",
  "alternatives": [
    "estado suposto, hipotético.",
    "fato pontual, isolado, no presente.",
    "estado contínuo, duradouro.",
    "fato repetitivo.",
    "fato pontual, isolado, no passado."
  ],
  "answer": "C",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce3-q31-tirinha-ainda.svg",
      "alt": "Tirinha de Pablo Carballo: uma personagem pergunta o que a outra está fazendo e recebe a resposta de que ainda está sem fazer nada."
    }
  ],
  "statementAfter": "A palavra “ainda”, no último quadrinho, indica que “tá sem fazer nada” é um",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Ainda e aspecto verbal em tirinha",
  "difficulty": "Fácil",
  "why": "O advérbio “ainda” apresenta a situação de estar sem fazer nada como um estado que se mantém ao longo do tempo, contínuo e duradouro.",
  "wrong": {
    "0": "A personagem afirma uma situação real no diálogo, sem marcar suposição ou hipótese.",
    "1": "“Ainda” prolonga a situação e não a reduz a um ponto isolado do presente.",
    "3": "A repetição é sugerida por “de novo”, enquanto “ainda” expressa a continuidade do estado.",
    "4": "O estado não é apresentado como um fato pontual encerrado no passado."
  }
}),

  q({
  "n": 32,
  "alternatives": [
    "acontece depois que um relacionamento afetivo já acabou.",
    "prejudica um relacionamento afetivo e pode levá-lo ao término.",
    "ocorre na fase final de um relacionamento afetivo, quando ele já está destinado a acabar.",
    "parece positivo, mas que destrói um relacionamento afetivo discretamente e aos poucos.",
    "beneficia um dos envolvidos em um relacionamento afetivo, mas não ambos."
  ],
  "answer": "A",
  "common": "serial",
  "statementAfter": "No contexto em que está inserida, a palavra sublinhada em “É uma traição p̲ó̲s̲t̲u̲m̲a̲, retardatária, residual” (1º parágrafo) tem o sentido de algo que",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Póstuma e sentido em contexto",
  "difficulty": "Fácil",
  "why": "“Póstuma” refere-se ao que ocorre depois do fim; no texto, a traição acontece depois que o relacionamento afetivo já acabou.",
  "wrong": {
    "1": "A ação descrita não conduz ao término: ela ocorre quando o relacionamento já terminou.",
    "2": "O sentido não é o da fase final antes do término, mas o de algo posterior ao fim do relacionamento.",
    "3": "A crítica não descreve um benefício aparente que destrói aos poucos uma relação ainda existente.",
    "4": "O texto não apresenta a traição como benefício a um dos envolvidos."
  }
}),

  q({
  "n": 33,
  "alternatives": [
    "à metalinguagem.",
    "à personificação.",
    "à hipérbole.",
    "ao pleonasmo.",
    "ao eufemismo."
  ],
  "answer": "B",
  "common": "serial",
  "statementAfter": "Em “porém a consciência não é boba e um dia se vinga” (13º parágrafo), o autor recorre, sobretudo,",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Personificação em crônica",
  "difficulty": "Fácil",
  "why": "A consciência recebe características e ações humanas — não ser boba e vingar-se —, recurso de personificação ou prosopopeia.",
  "wrong": {
    "0": "O autor não volta a discussão para a própria linguagem ou para o ato de escrever, portanto não predomina metalinguagem.",
    "2": "Não há exagero intensificador que constitua hipérbole.",
    "3": "Não há repetição redundante de sentido que caracterize pleonasmo.",
    "4": "Não se suaviza uma ideia desagradável; ao contrário, atribui-se à consciência a possibilidade de vingança."
  }
}),

  q({
  "n": 34,
  "alternatives": [
    "“fórmula”.",
    "“ninguém”.",
    "“história”.",
    "“assunto”.",
    "“Você”."
  ],
  "answer": "E",
  "common": "serial",
  "statementAfter": "“Acredita em s̲u̲a̲ inocência porque ninguém comentará o assunto.” (13º parágrafo)\n\nO pronome sublinhado refere-se a",
  "afterBlockTypes": [
    "quote",
    "command"
  ],
  "subject": "Português",
  "content": "Referenciação pronominal e possessividade",
  "difficulty": "Média",
  "why": "O possessivo “sua” retoma “Você”, sujeito das ações descritas: a pessoa acredita na própria inocência.",
  "wrong": {
    "0": "“Fórmula” pertence ao parágrafo anterior e não é o ser a quem se atribui a inocência.",
    "1": "“Ninguém” é sujeito da oração seguinte e não o referente de “sua”.",
    "2": "“História” integra a expressão “história feliz” e não funciona como antecedente do possessivo.",
    "3": "“Assunto” é objeto da fala de outras pessoas e não o possuidor indicado pelo pronome."
  }
}),

  q({
  "n": 35,
  "alternatives": [
    "“um segredo com pequenas chances de ser revelado, porém a consciência não é boba” (13º parágrafo).",
    "“É quando você insiste em escrever e tecer declarações exatamente iguais” (2º parágrafo).",
    "“Alcança aquilo que foi ensaiado com o antecessor” (11º parágrafo).",
    "“É como remanejar presentes, aproveitar alianças antigas” (5º parágrafo).",
    "“apaga a invenção a dois e a costura por caminhos surpreendentes e inesquecíveis” (12º parágrafo)."
  ],
  "answer": "E",
  "common": "serial",
  "statementAfter": "Ocorre uma palavra formada com um prefixo que expressa negação em:",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Prefixo de negação e formação de palavras",
  "difficulty": "Média",
  "why": "Em “inesquecíveis”, o prefixo “in-” acrescenta negação a “esquecíveis”: que não podem ser esquecidos.",
  "wrong": {
    "0": "Em “revelado”, o prefixo “re-” não possui valor de negação.",
    "1": "Em “insiste”, o elemento inicial não expressa negação; a palavra não significa “não existe” ou sentido semelhante.",
    "2": "Em “antecessor”, “ante-” indica anterioridade, e não negação.",
    "3": "Em “remanejar”, “re-” indica repetição ou nova realização da ação."
  }
}),

  q({
  "n": 36,
  "statement": "Leia o poema “Sanduíche matinal”, de Astrid Cabral.\n\nSanduíche matinal\n\nMastigam-se ao café\nentre fatias torradas\njornais com pingos de sangue\njornais com furos de bala.\n\nNo portal da manhã\no sinistro sanduíche\nenergiza os transeuntes do dia.\n\n(Engavetado o remorso\ndos crimes bem menores)\n\nOmissões? traições? covardias?\nTransgressões mínimas.\nTodos, subitamente, melhores.\n\n(Astrid Cabral. Intramuros, 2011.)",
  "alternatives": [
    "oferece ao leitor um espelho para suas próprias atitudes, conduzindo-o ao sofrimento e ao sentimento de culpa a respeito de suas transgressões cotidianas.",
    "faz com que as infrações usuais e cotidianas pareçam, para o leitor, pequenas em comparação com os crimes noticiados.",
    "desperta no leitor um instinto destrutivo que o leva a ter prazer em presenciar o sofrimento alheio.",
    "estabelece um critério objetivo do que é correto, dando ao leitor uma sensação reconfortante de justiça social.",
    "prepara o leitor para a violência da realidade urbana, fazendo com que fique mais precavido em sua rotina no espaço público."
  ],
  "answer": "B",
  "blockTypes": [
    "label",
    "poem-title",
    "poem",
    "poem",
    "poem",
    "poem",
    "source"
  ],
  "works": [
    "Intramuros"
  ],
  "statementAfter": "No contexto apresentado pelo poema, a leitura matinal dos jornais",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Literatura",
  "content": "Sanduíche matinal: poesia e violência",
  "difficulty": "Média",
  "why": "Os crimes violentos dos jornais fazem as transgressões cotidianas parecerem mínimas; com o remorso “engavetado”, os leitores se sentem subitamente melhores.",
  "wrong": {
    "0": "O poema diz que o remorso é engavetado, portanto a leitura não conduz ao sofrimento e à culpa.",
    "2": "Não há despertar de instinto destrutivo nem prazer explícito com o sofrimento alheio.",
    "3": "O poema ironiza a comparação moral e não estabelece critério objetivo de justiça social.",
    "4": "O efeito apresentado não é precaução na rotina, mas a sensação ilusória de superioridade moral."
  }
}),

  essay({
  "statement": "REDAÇÃO\n\nTexto 1\n\nA interação de crianças com a internet ocorre cada vez mais cedo e de forma ampla. Cerca de um terço dos usuários da rede no mundo é de crianças e adolescentes, segundo dados da pesquisa TIC Kids on-line, produzida pelo Comitê Gestor da Internet (CGO.br). Ao todo, 95% das crianças e adolescentes de 9 a 17 anos acessaram a internet em 2023. Entre as crianças de 9 a 10 anos, 68% disseram ter perfis em redes sociais.\n\n“Importante destacar as oportunidades de aprendizado e entretenimento e acesso a direitos fundamentais dessa presença de crianças e adolescentes no ambiente digital, mas também os riscos de exploração, exposição e acesso a conteúdos inapropriados”, diz Maria Mello, coordenadora do Programa Criança e Consumo do Instituto Alana, entidade de histórica atuação nos direitos da infância.\n\n(Pedro Rafael Vilela. https://agenciabrasil.ebc.com.br, 14.03.2024. Adaptado.)\n\nTexto 2\n\nO governador da Flórida, nos Estados Unidos, Ron DeSantis, sancionou um projeto de lei que limita o acesso de menores de 16 anos a redes sociais. A norma entrará em vigor em 1º de janeiro de 2025. A partir do ano que vem, crianças com menos de 14 anos estarão proibidas de acessar as plataformas de redes sociais, e adolescentes entre 14 e 15 anos podem ter acesso, desde que obtenham consentimento dos pais, uma medida que, segundo seus apoiadores, protegerá esses jovens e crianças dos riscos on-line à saúde mental.\n\nApoiadores afirmam que a lei conterá os efeitos prejudiciais das redes sociais sobre o bem-estar das crianças que usam essas plataformas excessivamente e que, como resultado, podem sofrer de ansiedade, depressão e outros problemas de saúde mental.\n\n(https://g1.globo.com, 26.03.2024. Adaptado.)\n\nTexto 3",
  "blockTypes": [
    "label",
    "subheading",
    "quote",
    "quote",
    "source",
    "subheading",
    "quote",
    "quote",
    "source",
    "subheading"
  ],
  "visuals": [
    {
      "file": "uea2024ce3-redacao-texto3.svg",
      "alt": "Charge sobre restrição de menores em redes sociais: Instagram e Facebook devolvem uma criança aos pais dizendo Toma que o filho é teu."
    }
  ],
  "statementAfter": "Texto 4\n\nProibir o uso das redes sociais não é a solução e achar que elas vão deixar de existir é ilusão. Uma das correntes positivas encontradas nas redes é o aprendizado. Hoje, já é possível encontrar diversos perfis para se aprender temas diversos que vão desde cozinhar até falar outro idioma. A própria plataforma do TikTok já disponibiliza uma seção “Aprender” com conteúdos mais educativos. Além do acesso ao conhecimento, as redes sociais também ampliaram as interações sociais. Conhecer novas pessoas com interesses em comum, por exemplo, faz com que as redes sociais promovam aspectos de socialização e de comunicação. Isso acontece com mais intensidade durante a adolescência, já que essa é uma fase em que há a inclusão social do indivíduo em grupos.\n\n(Carolina Delboni. www.estadao.com.br, 14.08.2023. Adaptado.)\n\nCom base nos textos apresentados e em seus próprios conhecimentos, escreva um texto dissertativo-argumentativo, empregando a norma-padrão da língua portuguesa, sobre o tema:",
  "afterBlockTypes": [
    "subheading",
    "quote",
    "source",
    "command"
  ],
  "statementTail": "Crianças e adolescentes devem ser proibidos de acessar redes sociais?",
  "tailBlockTypes": [
    "headline"
  ],
  "parts": [
    {
      "id": "T",
      "prompt": "Produza um texto dissertativo-argumentativo em norma-padrão da língua portuguesa.",
      "expected": "Não há resposta única. A proposta editorial espera uma argumentação sobre a proibição do acesso de crianças e adolescentes às redes sociais, considerando direitos, aprendizado, socialização, mediação familiar e riscos à saúde e à segurança."
    }
  ],
  "studyNotes": [
    "Orientação editorial, não oficial: apresente uma tese clara sobre a proibição, examine benefícios e riscos do ambiente digital e defenda seu ponto de vista com argumentos relacionados aos textos motivadores e a conhecimentos próprios.",
    "A redação não recebe nota automática nem deve ser comparada a um gabarito de alternativa."
  ]
}),
];
