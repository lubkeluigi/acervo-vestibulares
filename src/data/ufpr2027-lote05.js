import { q, img } from './ufpr2027-helpers.js';

export const ufpr2027Lote05 = [
  q({
    n: 41, subject: 'Matemática', content: 'Análise Combinatória — Combinação com repetição', difficulty: 'Fácil',
    statement: 'Uma sorveteria oferece 20 sabores diferentes de sorvete. Um cliente deseja montar uma casquinha com duas bolas de sorvete. Sabendo que é permitido escolher o mesmo sabor para as duas bolas e que a ordem dos sabores das bolas não é relevante, a casquinha pode ser montada de quantas maneiras diferentes?',
    blockTypes: ['prose'],
    alternatives: [
      '190',
      '210',
      '380',
      '400',
    ],
    answer: 'B',
    why: 'Como a ordem não importa e é permitida a repetição de sabores: para duas bolas de sabores distintos, temos $C_{20, 2} = \\frac{20 \\times 19}{2} = 190$ opções; para duas bolas de mesmo sabor, temos 20 opções. O total de combinações possíveis é $190 + 20 = 210$ (ou diretamente pela combinação completa $CR_{20}^2 = C_{20+2-1}^2 = C_{21}^2 = \\frac{21 \\times 20}{2} = 210$).',
    wrong: {
      0: 'Calculou apenas combinações simples com sabores distintos ($C_{20, 2} = 190$), esquecendo os casos de sabores repetidos.',
      2: 'Calculou arranjos simples considerando que a ordem das bolas importaria ($20 \\times 19 = 380$).',
      3: 'Multiplicou $20 \\times 20 = 400$, considerando a ordem relevante com repetição.',
    },
  }),
  q({
    n: 42, subject: 'Matemática', content: 'Álgebra — Inequação quociente e soma de soluções inteiras', difficulty: 'Média',
    statement: `Assinale a alternativa que corresponde à soma de todos os números inteiros que satisfazem a inequação

$$\\frac{5x}{x - 3} \\le 1$$`,
    blockTypes: ['prose', 'prose'],
    alternatives: [
      '0',
      '2',
      '3',
      '6',
    ],
    answer: 'C',
    why: 'Passando o 1 para o primeiro membro: $\\frac{5x}{x - 3} - 1 \\le 0 \\implies \\frac{5x - (x - 3)}{x - 3} \\le 0 \\implies \\frac{4x + 3}{x - 3} \\le 0$. As raízes são $x = -3/4 = -0,75$ (fechado) e $x = 3$ (aberto, por estar no denominador). O quociente é negativo ou nulo no intervalo $[-0,75, 3)$. Os inteiros pertencentes a esse conjunto são $x \\in \\{0, 1, 2\\}$. A soma pedida é $0 + 1 + 2 = 3$.',
    wrong: {
      0: 'Considerou apenas a solução nula.',
      1: 'Esqueceu o 1 ou cometeu erro aritmético na soma.',
      3: 'Incluiu indevidamente o extremo 3, desconsiderando a restrição de domínio do denominador ($x \\ne 3$).',
    },
  }),
  q({
    n: 43, subject: 'Matemática', content: 'Geometria Plana e Progressão Geométrica — Razão de áreas de retângulos', difficulty: 'Média',
    statement: 'O quociente entre as áreas dos retângulos $EFGH$ e $ABCD$, representados na figura, é igual a 81/16. Sabendo que as medidas dos segmentos $AB$, $BC$, $EF$ e $FG$, nessa ordem, formam uma progressão geométrica crescente, assinale a alternativa que indica o valor da razão dessa progressão.',
    blockTypes: ['prose'],
    diagram: 'ufpr2027Q43',
    figureCaption: 'Retângulos ABCD e EFGH com vértices e lados em progressão geométrica.',
    alternatives: [
      '9/4',
      '9/2',
      '4/3',
      '3/2',
    ],
    answer: 'D',
    why: 'Sendo os lados termos consecutivos de uma PG crescente de razão $q > 1$: $AB = a$, $BC = aq$, $EF = aq^2$ e $FG = aq^3$. A área de $ABCD$ é $a \\cdot aq = a^2 q$, e a área de $EFGH$ é $aq^2 \\cdot aq^3 = a^2 q^5$. A razão entre as áreas é: $\\frac{\\text{Área}(EFGH)}{\\text{Área}(ABCD)} = \\frac{a^2 q^5}{a^2 q} = q^4$. Dado que essa razão vale $\\frac{81}{16}$: $q^4 = \\frac{81}{16} \\implies q = \\sqrt[4]{\\frac{81}{16}} = \\frac{3}{2}$.',
    wrong: {
      0: 'Calculou a raiz quadrada em vez da raiz quarta de 81/16.',
      1: 'Confundiu a simplificação fracionária dos expoentes da PG.',
      2: 'Inverteu os valores no cálculo da raiz.',
    },
  }),
  q({
    n: 44, subject: 'Matemática', content: 'Geometria Espacial — Cubo truncado e razão entre volumes', difficulty: 'Média',
    statement: `Para confeccionar uma peça decorativa, um artesão realiza cortes planos em um cubo. Cada corte plano passa pelos pontos médios das três arestas concorrentes em um mesmo vértice, removendo o tetraedro correspondente. Na figura a seguir temos inicialmente o cubo. Após a primeira seta, na segunda figura, é indicado o primeiro corte, com destaque para o tetraedro removido. Esse procedimento é repetido nos demais vértices do cubo original, resultando no sólido representado após a segunda seta, na terceira figura.

Assinale a alternativa que apresenta a razão entre o volume do cubo original e o volume do sólido obtido após os cortes planos.`,
    blockTypes: ['prose', 'command'],
    diagram: 'ufpr2027Q44',
    figureCaption: 'Etapas de corte plano dos vértices do cubo gerando um cuboctaedro truncado.',
    alternatives: [
      '3/2',
      '6/5',
      '4/3',
      '12/5',
    ],
    answer: 'B',
    why: 'Sendo $L$ a aresta do cubo, seu volume original é $V_{\\text{cubo}} = L^3$. Em cada um dos 8 vértices é retirado um tetraedro tri-retângulo com arestas medindo $L/2$. O volume de cada tetraedro é $V_{\\text{tet}} = \\frac{1}{3} \\cdot \\left(\\frac{1}{2} \\cdot \\frac{L}{2} \\cdot \\frac{L}{2}\\right) \\cdot \\frac{L}{2} = \\frac{L^3}{48}$. Para os 8 vértices: $V_{\\text{removido}} = 8 \\times \\frac{L^3}{48} = \\frac{L^3}{6}$. O volume do sólido restante é $V_{\\text{sólido}} = L^3 - \\frac{L^3}{6} = \\frac{5}{6}L^3$. A razão solicitada entre o cubo original e o novo sólido é: $\\frac{L^3}{\\frac{5}{6}L^3} = \\frac{6}{5}$.',
    wrong: {
      0: 'Considerou a remoção de apenas 4 vértices ou errou a fração volumétrica dos tetraedros.',
      2: 'Fração incorreta proveniente de cálculo de pirâmides quadrangulares.',
      3: 'Inverteu operações e multiplicou por fatores indevidos.',
    },
  }),
  q({
    n: 45, subject: 'Matemática', content: 'Funções — Determinação de valor numérico com expoente exponencial', difficulty: 'Fácil',
    statement: `Para todo número real $x$, uma função $f$ satisfaz a seguinte igualdade:

$$f(2^{4x - 1}) = \\frac{1}{1 + x^2}$$

Assinale a alternativa que representa o valor $f(1/8)$.`,
    blockTypes: ['prose', 'prose', 'command'],
    alternatives: [
      '4/5',
      '2/5',
      '4/3',
      '2/3',
    ],
    answer: 'A',
    why: 'Igualando o argumento da função a $1/8$: $2^{4x - 1} = \\frac{1}{8} = 2^{-3} \\implies 4x - 1 = -3 \\implies 4x = -2 \\implies x = -\\frac{1}{2}$. Substituindo $x = -1/2$ na lei de correspondência: $f(1/8) = \\frac{1}{1 + (-1/2)^2} = \\frac{1}{1 + 1/4} = \\frac{1}{5/4} = \\frac{4}{5}$.',
    wrong: {
      1: 'Esqueceu de inverter a fração $5/4$ ou multiplicou por 1/2.',
      2: 'Calculou com $x = -1$ em vez de $x = -1/2$.',
      3: 'Errou na potenciação de $(-1/2)^2$.',
    },
  }),
  q({
    n: 46, subject: 'Matemática', content: 'Progressão Aritmética e Logaritmos — Equação logarítmica e condição de existência', difficulty: 'Média',
    statement: `As expressões descritas a seguir formam, na ordem dada, uma progressão aritmética:

$$\\log_2(x + 1), \\; \\log_2(x + 3), \\; \\log_2(3x - 1)$$

Assinale a alternativa que corresponde ao valor de $x$.`,
    blockTypes: ['prose', 'prose', 'command'],
    alternatives: [
      '3',
      '$1 + \\sqrt{2}$',
      '$1 + \\sqrt{3}$',
      '$1 + \\sqrt{6}$',
    ],
    answer: 'D',
    why: 'Pela propriedade do termo médio de uma PA: $2 \\log_2(x + 3) = \\log_2(x + 1) + \\log_2(3x - 1) \\implies \\log_2((x + 3)^2) = \\log_2((x + 1)(3x - 1))$. Igualando os logaritmandos: $x^2 + 6x + 9 = 3x^2 + 2x - 1 \\implies 2x^2 - 4x - 10 = 0 \\implies x^2 - 2x - 5 = 0$. Resolvendo pela fórmula quadrática: $x = \\frac{2 \\pm \\sqrt{4 + 20}}{2} = 1 \\pm \\sqrt{6}$. Como o logaritmando exige $x > 1/3$, a única solução válida no domínio real é $x = 1 + \\sqrt{6}$.',
    wrong: {
      0: 'Verificando $x = 3$: $\\log_2 4 = 2$, $\\log_2 6$, $\\log_2 8 = 3$; $2 \\times \\log_2 6 = \\log_2 36 \\ne \\log_2 32$, não formando PA.',
      1: 'Raiz com discriminante incorreto.',
      2: 'Errou o termo independente na equação do segundo grau.',
    },
  }),
  q({
    n: 47, subject: 'Matemática', content: 'Funções e Parábolas — Translação e reflexão de vértices', difficulty: 'Média',
    statement: 'Os gráficos das funções $f(x)$ e $g(x)$ são parábolas no plano $xy$. Sabendo que $g(x) = f(-x + 3) - 2$, para todo número real $x$, e que o vértice do gráfico da função $g(x)$ tem coordenadas $(-2, 5)$, assinale a alternativa que corresponde às coordenadas do vértice do gráfico de $f(x)$.',
    blockTypes: ['prose'],
    alternatives: [
      '(1, 7)',
      '(5, 3)',
      '(5, 7)',
      '(7, 5)',
    ],
    answer: 'C',
    why: 'O ponto extremo da parábola $g$ ocorre em $x = -2$ com ordenada $g(-2) = 5$. Na relação $g(x) = f(-x + 3) - 2$, a coordenada correspondente na entrada de $f$ é $u = -x + 3$. Substituindo $x = -2$: $u = -(-2) + 3 = 2 + 3 = 5$. A ordenada de $f$ nesse ponto crítico satisfaz $f(u) = g(x) + 2$, logo $f(5) = 5 + 2 = 7$. Portanto, o vértice da parábola $f$ localiza-se exatamente no ponto $(5, 7)$.',
    wrong: {
      0: 'Aplicou translação linear direta sem considerar a reflexão de sinal em $-x$.',
      1: 'Subtraiu 2 em vez de somar 2 para obter o valor de $f$.',
      3: 'Inverteu as coordenadas horizontal e vertical.',
    },
  }),
  q({
    n: 48, subject: 'Matemática', content: 'Geometria Analítica — Tangência entre reta e circunferência', difficulty: 'Média',
    statement: 'Considere a circunferência de equação $x^2 + y^2 - 2x - 4y + 4 = 0$ e a reta de equação $x + y = b$, ambas contidas no plano cartesiano $xy$. Assinale a alternativa correspondente à soma de todos os valores de $b$ para os quais a reta é tangente à circunferência.',
    blockTypes: ['prose'],
    alternatives: [
      '4',
      '6',
      '8',
      '10',
    ],
    answer: 'B',
    why: 'Completando os quadrados na circunferência: $(x - 1)^2 - 1 + (y - 2)^2 - 4 + 4 = 0 \\implies (x - 1)^2 + (y - 2)^2 = 1$. O centro é $C(1, 2)$ e o raio é $R = 1$. Para que a reta $x + y - b = 0$ seja tangente, a distância do centro à reta deve ser igual ao raio: $d = \\frac{|1 + 2 - b|}{\\sqrt{1^2 + 1^2}} = \\frac{|3 - b|}{\\sqrt{2}} = 1 \\implies |3 - b| = \\sqrt{2}$. Disso decorrem dois valores: $b_1 = 3 + \\sqrt{2}$ e $b_2 = 3 - \\sqrt{2}$. A soma de todos os valores de $b$ é: $b_1 + b_2 = (3 + \\sqrt{2}) + (3 - \\sqrt{2}) = 6$.',
    wrong: {
      0: 'Errou o cálculo das coordenadas do centro da circunferência.',
      2: 'Calculou com raio de valor incorreto.',
      3: 'Somou termos quadráticos erroneamente.',
    },
  }),
  q({
    n: 49, subject: 'Literatura', content: 'Ultrarromantismo e Pré-Modernismo — Noite na Taverna e Eu', difficulty: 'Média',
    statement: `Noite na Taverna, de Álvares de Azevedo, de 1855, e Eu, de Augusto dos Anjos, de 1912, apresentam semelhanças e diferenças. Leia, a seguir, um trecho de cada obra:

“Depois...escuta...tenho tanto a dizer-te! tantas lágrimas a derramar no teu colo! Vem! e dir-te-ei toda a minha história! Minhas ilusões de amante, as noites malditas da crápula, e o tédio que me inspiravam aqueles beiços frios das vendidas que me beijavam! Vem! contar-te-ei tudo isto; dir-te-ei como profanei minha alma e meu passado, e choraremos juntos – e nossas lágrimas nos lavarão como a chuva lava as folhas do lodo!”

Azevedo, Álvares de. Noite na Taverna. São Paulo: Via Leitura, 2025. p. 62.

Psicologia de um vencido
Eu, filho do carbono e do amoníaco,
Monstro de escuridão e rutilância,
Sofro, desde a epigênesis da infância,
A influência má dos signos do zodíaco.
Profundissimamente hipocondríaco,
Este ambiente me causa repugnância...
Sobe-me à boca uma ânsia, análoga à ânsia
Que se escapa da boca de um cardíaco.
Já o verme — este operário das ruínas —
Que o sangue podre das carnificinas
Come, e à vida, em geral, declara guerra,
Anda a espreitar meus olhos para roê-los,
E há de deixar-me apenas os cabelos,
Na frialdade inorgânica da terra!

Anjos, Augusto dos. Eu e Outras Poesias. São Paulo: Martin Claret, 2001. p. 32.

Considerando os excertos selecionados e a integridade das duas obras, assinale a alternativa correta.`,
    blockTypes: ['prose', 'quote', 'source', 'poem', 'source', 'command'],
    works: ['Noite na Taverna', 'Eu', 'Eu e Outras Poesias'],
    alternatives: [
      'O poema descreve de forma genérica as dores da espécie humana em contraponto com o trecho de Azevedo, em que a dor particular do narrador é contada na estrutura de um monólogo.',
      'A linguagem coloquial do poema é empregada para tematizar os fatos cotidianos que são retratados, já o vocabulário rebuscado de Azevedo disfarça a ausência de narrativas no livro.',
      'A aprovação dos valores morais da humanidade é exemplificada pelas narrativas do livro de Azevedo, assim como pela opção por uma vertente sublime da poesia em Augusto dos Anjos.',
      'Nos tercetos do poema, um conjunto de ações é atribuído pelo eu-lírico a um outro ser, e, no trecho em prosa, o narrador se dirige a um possível interlocutor que o escuta.',
    ],
    answer: 'D',
    why: 'Nos dois tercetos finais do soneto de Augusto dos Anjos, o eu lírico personifica a figura implacável do "verme" atribuindo-lhe verbos de ação destrutiva ("come", "declara guerra", "anda a espreitar", "há de deixar-me"). Em Noite na Taverna, o narrador constrói seu relato dirigindo-se expressamente em segunda pessoa a um interlocutor na taverna ("escuta", "dizer-te", "teu colo", "Vem!").',
    wrong: {
      0: 'O poema parte de uma confissão em primeira pessoa ("Eu, filho do carbono..."), e a prosa de Noite na Taverna insere-se numa moldura dialógica de contadores de histórias.',
      1: 'Augusto dos Anjos utiliza vocabulário científico e parnasiano-simbolista erudito (epigênesis, hipocondríaco, amoníaco), distante do coloquial.',
      2: 'Noite na Taverna é marcada pela transgressão moral (incesto, necrofilia, assassinato), e Augusto dos Anjos aborda a decomposição cadavérica e o pessimismo cósmico.',
    },
  }),
  q({
    n: 50, subject: 'Literatura', content: 'Modernismo / Poesia Contemporânea — Ferreira Gullar (Poema Sujo)', difficulty: 'Fácil',
    statement: `Leia o trecho a seguir, extraído da obra Poema Sujo, de Ferreira Gullar:

Meu corpo
que deitado na cama vejo
como um objeto no espaço
que mede 1,70 m
e que sou eu: essa coisa
deitada
barriga pernas e pés
com cinco dedos cada um (por que
não seis?)
joelhos e tornozelos
para mover-se
sentar-se
levantar-se
meu corpo de 1,70 m que é meu tamanho no mundo
meu corpo feito de água
e cinza
[...]
Corpo meu corpo corpo
que tem um nariz assim uma boca
dois olhos
e um certo jeito de sorrir
de falar
que minha mãe identifica como sendo de seu filho
que meu filho identifica
como sendo de seu pai
corpo que se para de funcionar provoca
um grave acontecimento na família:
sem ele não há José de Ribamar Ferreira
não há Ferreira Gullar
e muitas pequenas coisas acontecidas no planeta
estarão esquecidas para sempre

Gullar, Ferreira. Poema sujo. São Paulo: Cia das Letras, 2016. p. 38-39.

Considerando a integralidade da obra e o trecho destacado, assinale a alternativa correta.`,
    blockTypes: ['prose', 'poem', 'source', 'command'],
    works: ['Poema Sujo', 'Poema sujo'],
    alternatives: [
      'Os substantivos escolhidos para descrever o corpo do eu-lírico, nesse trecho, exemplificam a idealização do ser humano presente em todo o poema.',
      'Os versos do trecho são marcados pela metrificação irregular e pela repetição de vocábulos, que produzem um efeito sonoro.',
      'O eu-lírico afirma que o seu corpo é feito de substâncias imateriais, reiterando o caráter etéreo do poeta e da poesia, presente em todo o poema.',
      'O emprego de rimas alternadas e de metáforas para definir o corpo, no trecho, exemplificam a dimensão onírica predominante no poema.',
    ],
    answer: 'B',
    why: 'Em Poema Sujo (escrito durante o exílio em Buenos Aires em 1975), Ferreira Gullar constrói uma poética materialista e visceral através de versos livres com extensão e ritmos irregulares, empregando reiterações rítmicas e anáforas enfáticas ("Corpo meu corpo corpo...") que potencializam a sonoridade e o apelo concreto da existência física e da memória.',
    wrong: {
      0: 'A descrição corporal é desprovida de idealização clássica, enfatizando a dimensão fisiológica concreta ("barriga pernas e pés", "água e cinza").',
      2: 'O texto afirma explicitamente que o corpo é material ("feito de água e cinza", "objeto no espaço"), recusando o etéreo.',
      3: 'O poema rompe com esquemas rígidos de rimas alternadas parnasianas e ancora-se na urgência biográfica real contra a ditadura militar, e não no onirismo abstrato.',
    },
  }),
];
