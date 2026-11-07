import { q, img } from './ufpr2027-helpers.js';

export const ufpr2027Lote04 = [
  q({
    n: 31, subject: 'Física', content: 'Termodinâmica — Trabalho em transformações gasosas (gráfico P x V)', difficulty: 'Média',
    statement: `Uma dada massa de gás ideal executa os processos termodinâmicos apresentados no gráfico \\(P \\times V\\) ao lado, em que \\(P\\) é a pressão e \\(V\\) é o volume. O processo 1 ocorre entre os estados A e B do gráfico, e o processo 2 ocorre entre os estados B e C. No processo 1, o gás realiza um trabalho \\(W_1\\), e, no processo 2, o trabalho realizado vale \\(W_2\\).

Assinale a alternativa que apresenta corretamente o valor da razão \\(W_1/W_2\\) entre os trabalhos realizados.`,
    images: [img('q31-grafico-pv.png', 'Diagrama P x V com processo 1 de A para B e processo 2 isobárico de B para C')],
    alternatives: [
      '1',
      '5/4',
      '4/5',
      '2',
    ],
    answer: 'B',
    why: 'Em um diagrama \\(P \\times V\\), o trabalho é numericamente igual à área sob a curva. No processo 1 (de \\(A(2V_0, 4P_0)\\) até \\(B(4V_0, P_0)\\)), a área é a de um trapézio: \\(W_1 = \\frac{(4P_0 + P_0) \\cdot (4V_0 - 2V_0)}{2} = \\frac{5P_0 \\cdot 2V_0}{2} = 5P_0 V_0\\). No processo 2 (isobárico de \\(B(4V_0, P_0)\\) até \\(C(8V_0, P_0)\\)), a área é a de um retângulo: \\(W_2 = P_0 \\cdot (8V_0 - 4V_0) = 4P_0 V_0\\). A razão solicitada é \\(\\frac{W_1}{W_2} = \\frac{5P_0 V_0}{4P_0 V_0} = \\frac{5}{4}\\).',
    wrong: {
      0: 'Considerou que as áreas sob os dois trechos fossem idênticas.',
      2: 'Inverteu a razão calculando \\(W_2 / W_1 = 4/5\\).',
      3: 'Desprezou a área do triângulo superior no processo 1 ou errou na subtração do volume.',
    },
  }),
  q({
    n: 32, subject: 'Física', content: 'Eletromagnetismo — Força magnética sobre carga em movimento (Lorentz)', difficulty: 'Fácil',
    statement: `Numa certa região do espaço, há um campo magnético de intensidade \\(B = 3,0\\text{ T}\\). Uma partícula com carga \\(Q = 3,2 \\times 10^{-19}\\text{ C}\\) entra nessa região com uma velocidade de intensidade \\(v = 2,0 \\times 10^6\\text{ m/s}\\). O ângulo entre os vetores velocidade e campo magnético no instante de entrada vale \\(\\theta\\). Sabe-se que \\(\\operatorname{sen}\\theta = \\frac{1}{3}\\) e \\(\\cos\\theta = \\frac{2\\sqrt{2}}{3}\\).

Assinale a alternativa que apresenta corretamente a intensidade da força magnética \\(F\\) que surge sobre a partícula carregada ao entrar na região onde existe o campo magnético.`,
    alternatives: [
      '38,4 × √2 × 10⁻¹³ N',
      '19,2 × 10⁻¹³ N',
      '12,8 × √2 × 10⁻¹³ N',
      '6,4 × 10⁻¹³ N',
    ],
    answer: 'D',
    why: 'A intensidade da força magnética sobre uma carga pontual em movimento é dada pela lei de Lorentz: \\(F = |Q| \\cdot v \\cdot B \\cdot \\operatorname{sen}\\theta\\). Substituindo os valores fornecidos: \\(F = (3,2 \\times 10^{-19}) \\times (2,0 \\times 10^6) \\times 3,0 \\times \\frac{1}{3}\\). Como \\(3,0 \\times \\frac{1}{3} = 1\\), temos: \\(F = 3,2 \\times 2,0 \\times 10^{-13} = 6,4 \\times 10^{-13}\\text{ N}\\).',
    wrong: {
      0: 'Utilizou indevidamente o cosseno no lugar do seno na equação da força magnética.',
      1: 'Esqueceu de multiplicar por \\(\\operatorname{sen}\\theta = 1/3\\), obtendo \\(19,2 \\times 10^{-13}\\text{ N}\\).',
      2: 'Multiplicou incorretamente pelo cosseno combinando erro de escala numérica.',
    },
  }),
  q({
    n: 33, subject: 'Química', content: 'Eletroquímica — Espontaneidade de reações de oxirredução e potenciais padrão', difficulty: 'Média',
    statement: `Uma solução contendo os íons Br− e I− foi distribuída em quatro tubos de ensaio e, em cada um deles, foi adicionada uma das seguintes soluções: Ce4+, Cr3+, Fe3+ e Pb2+. Na análise do conteúdo de um desses tubos, observou-se que o I− foi oxidado e que o Br− permaneceu inalterado. A tabela ao lado mostra os potenciais padrões de redução dos reagentes citados.

| Semirreação | E⁰ / V |
|---|---|
| Br₂ + 2 e⁻ → 2 Br⁻ | +1,09 |
| Ce⁴⁺ + e⁻ → Ce³⁺ | +1,72 |
| Cr³⁺ + e⁻ → Cr²⁺ | −0,41 |
| Fe³⁺ + e⁻ → Fe²⁺ | +0,77 |
| I₂ + 2 e⁻ → 2 I⁻ | +0,54 |
| Pb²⁺ + 2 e⁻ → Pb | −0,13 |

Considerando as informações apresentadas, que reação química ocorreu no tubo analisado?`,
    alternatives: [
      'Pb²⁺ + 2 I⁻ → Pb + I₂',
      '2 Ce⁴⁺ + 2 I⁻ → 2 Ce³⁺ + I₂',
      '2 Fe³⁺ + 2 I⁻ → 2 Fe²⁺ + I₂',
      '2 Cr³⁺ + 2 I⁻ → 2 Cr²⁺ + I₂',
    ],
    answer: 'C',
    why: 'Para oxidar espontaneamente o \\(\\text{I}^-\\) (cujo \\(E^0_{\\text{red}} = +0,54\\text{ V}\\)), o oxidante precisa ter potencial de redução maior que \\(+0,54\\text{ V}\\). Para que o \\(\\text{Br}^-\\) (com \\(E^0_{\\text{red}} = +1,09\\text{ V}\\)) permaneça inalterado, o oxidante deve possuir potencial menor que \\(+1,09\\text{ V}\\). O único cátion que satisfaz \\(+0,54\\text{ V} < E^0_{\\text{red}} < +1,09\\text{ V}\\) é o \\(\\text{Fe}^{3+}\\) (\\(+0,77\\text{ V}\\)). A reação balanceada é: \\(2\\text{ Fe}^{3+} + 2\\text{ I}^- \\to 2\\text{ Fe}^{2+} + \\text{I}_2\\).',
    wrong: {
      0: 'O \\(\\text{Pb}^{2+}\\) possui potencial de redução negativo (-0,13 V), não tendo capacidade oxidante sobre o iodeto.',
      1: 'O \\(\\text{Ce}^{4+}\\) tem potencial de +1,72 V e oxidaria tanto o iodeto quanto o brometo.',
      3: 'O cromo(III) possui potencial de redução muito baixo (-0,41 V), sendo incapaz de oxidar halogenetos.',
    },
  }),
  q({
    n: 34, subject: 'Química', content: 'Equilíbrio Químico — Constante de dissociação ácida (Ka) e pH', difficulty: 'Fácil',
    statement: `O ácido piválico ou ácido 2,2-dimetilpropanoico [(CH3)3CCO2H], um reagente empregado na indústria química, se dissocia em solução aquosa segundo a equação química:

(CH3)3CCO2H ⇌ (CH3)3CCO2− + H+

Foi medido o pH de uma solução de ácido piválico 0,1 mol L−1 e o valor encontrado foi 3. Considerando as informações apresentadas, qual é o valor da constante de dissociação ácida Ka do ácido piválico?`,
    alternatives: [
      '1,0 × 10⁻⁶',
      '1,0 × 10⁻⁵',
      '1,0 × 10⁻⁴',
      '1,0 × 10⁻²',
    ],
    answer: 'B',
    why: 'Com \\(\\text{pH} = 3\\), a concentração de íons hidrogênio no equilíbrio é \\([\\text{H}^+] = 10^{-3}\\text{ mol/L}\\). Pela estequiometria 1:1, a concentração do ânion pivalato é igualmente \\([(CH_3)_3CCO_2^-] = 10^{-3}\\text{ mol/L}\\). Como o ácido é fraco, a concentração de ácido não ionizado no equilíbrio é aproximadamente \\(0,1\\text{ mol/L}\\). A constante ácida é: \\(K_a = \\frac{[\\text{H}^+][A^-]}{[HA]} = \\frac{(10^{-3}) \\times (10^{-3})}{10^{-1}} = \\frac{10^{-6}}{10^{-1}} = 1,0 \\times 10^{-5}\\).',
    wrong: {
      0: 'Calculou apenas o numerador \\([\\text{H}^+]^2 = 10^{-6}\\), esquecendo de dividir pela concentração inicial \\(10^{-1}\\).',
      2: 'Dividiu por \\(10^{-2}\\) de forma inconsistente com a molaridade 0,1 mol/L.',
      3: 'Calculou o grau de ionização \\(\\alpha = 10^{-3} / 0,1 = 10^{-2}\\) e o confundiu com o \\(K_a\\).',
    },
  }),
  q({
    n: 35, subject: 'Química', content: 'Química Nuclear — Conservação de massa e carga em transmutações artificiais', difficulty: 'Fácil',
    statement: `O pósitron (e+) é uma partícula subatômica semelhante ao elétron (e−), exceto por ter carga elétrica positiva. Na tomografia de emissão de pósitrons, injeta-se um radionuclídeo emissor de pósitrons no paciente para diagnosticar tumores. Um dos nuclídeos usados nesse exame é o flúor-18, cujo núcleo contém 9 prótons e 9 nêutrons. Ao emitir um pósitron, o flúor-18 produz o oxigênio-18 com 8 prótons e 10 nêutrons, conforme a equação:

¹⁸₉F → ¹⁸₈O + e⁺

O flúor-18 é produzido por bombardeamento do nuclídeo A com núcleo do hidrogênio, conforme a equação a seguir. Um nêutron também é produzido.

A + ¹₁H → ¹⁸₉F + n

Considerando as informações apresentadas, qual é o número exato de prótons e de nêutrons no nuclídeo A?`,
    alternatives: [
      '8 prótons e 10 nêutrons',
      '9 prótons e 9 nêutrons',
      '9 prótons e 10 nêutrons',
      '10 prótons e 8 nêutrons',
    ],
    answer: 'A',
    why: 'Em reações nucleares, a soma dos números de massa (A) e dos números atômicos (Z) deve se conservar. Na equação \\(A + {}^1_1\\text{H} \\to {}^{18}_9\\text{F} + {}^1_0\\text{n}\\): para a massa, \\(A_{\\text{nucl}} + 1 = 18 + 1 \\implies A_{\\text{nucl}} = 18\\); para as cargas, \\(Z + 1 = 9 + 0 \\implies Z = 8\\) (portanto, 8 prótons). O número de nêutrons é dado por \\(N = A_{\\text{nucl}} - Z = 18 - 8 = 10\\) nêutrons (isótopo oxigênio-18).',
    wrong: {
      1: 'Corresponde à constituição nuclear do próprio flúor-18 produzido.',
      2: 'Incorreto para a conservação do número atômico na transmutação.',
      3: 'Inverteu o número de prótons e nêutrons do elemento oxigênio.',
    },
  }),
  q({
    n: 36, subject: 'Química', content: 'Química Orgânica — Grupos funcionais versus funções orgânicas', difficulty: 'Fácil',
    statement: `Grupos funcionais são arranjos específicos de átomos ligados a uma cadeia carbônica. São os grupos funcionais que conferem propriedades químicas características às moléculas. Por outro lado, funções orgânicas são classes de compostos definidas pela presença desses grupos funcionais em sua estrutura. Assinale a alternativa que apresenta apenas grupos funcionais.`,
    alternatives: [
      'Álcool, enol, fenol.',
      'Anidrido, amida, éster.',
      'Amina, nitrila, nitrocompostos.',
      'Hidroxila, ciano, amino.',
    ],
    answer: 'D',
    why: 'A questão exige rigor na distinção conceitual da IUPAC: "álcool", "éster" ou "amina" são funções/classes químicas, enquanto "hidroxila" (–OH), "ciano" (–C≡N) e "amino" (–NH₂) são as designações dos grupos funcionais (arranjos atômicos específicos que caracterizam tais classes).',
    wrong: {
      0: 'Álcool, enol e fenol são denominações de funções orgânicas caracterizadas pela presença do grupo funcional hidroxila.',
      1: 'Anidrido, amida e éster são nomes de funções orgânicas oxigenadas e nitrogenadas.',
      2: 'Amina, nitrila e nitrocompostos representam famílias/funções orgânicas completas.',
    },
  }),
  q({
    n: 37, subject: 'Química', content: 'Química Orgânica — Isomeria óptica e enantiômeros', difficulty: 'Média',
    statement: `Isômeros são compostos que possuem a mesma fórmula molecular, mas diferem na conectividade (isomeria estrutural, planar ou constitucional) ou no seu arranjo espacial (estereoisomeria) dos átomos. Ao lado estão apresentadas duas moléculas (A e B).
Considerando as representações estruturais dos compostos, é correto afirmar que A e B são:`,
    images: [img('q37-isomeros.png', 'Estruturas espaciais com cunhas das moléculas A e B')],
    alternatives: [
      'isômeros de posição.',
      'um par de enantiômeros.',
      'um par de diastereoisômeros.',
      'a mesma molécula representada de maneira diferente.',
    ],
    answer: 'B',
    why: 'Ambas as moléculas representam o 2,3-dibromobutano quiral. Na molécula A, os dois centros quirais têm os átomos de bromo voltados para a frente (cunhas cheias). Na molécula B, ambos os bromos estão orientados para trás do plano (cunhas tracejadas). Como todos os centros quirais tiveram suas configurações espaciais invertidas, as estruturas são imagens especulares não sobreponíveis uma da outra, formando um par de enantiômeros.',
    wrong: {
      0: 'A conectividade atômica é idêntica (ambos têm os átomos de bromo nos carbonos 2 e 3).',
      2: 'Diastereoisômeros são estereoisômeros que não são imagens especulares (como a forma meso em relação a um enantiômero).',
      3: 'Por serem quirais quirais não superponíveis, não representam a mesma molécula física.',
    },
  }),
  q({
    n: 38, subject: 'Química', content: 'Estequiometria — Rendimento de reação de esterificação e cálculo de densidade', difficulty: 'Média',
    statement: `O ácido acético (CH3CO2H) reage com etanol (CH3CH2OH), formando acetato de etila (CH3CO2CH2CH3) e água (H2O), conforme a equação:

CH3CO2H (l) + CH3CH2OH (l) → CH3CO2CH2CH3 (l) + H2O (l)

Em um experimento, foram adicionados 60 g de ácido acético e 46 g de etanol. Ao final da reação, o rendimento foi de 80%. Qual foi o volume de acetato de etila líquido obtido?

Massas molares (g mol–1): Ácido acético = 60; Etanol = 46; Acetato de etila = 88; Água = 18.
Densidade (g mL–1 a 25 ºC): Ácido acético = 1,05; Etanol = 0,79; Acetato de etila = 0,90; Água = 1,00.`,
    alternatives: [
      '100 mL',
      '88 mL',
      '78 mL',
      '70 mL',
    ],
    answer: 'C',
    why: 'Temos 60 g de ácido acético (1 mol) e 46 g de etanol (1 mol), em proporção estequiométrica exata de 1:1. O rendimento teórico de 100% produziria 1 mol (88 g) de acetato de etila. Com 80% de rendimento, a massa real produzida é: \\(m = 88 \\times 0,80 = 70,4\\text{ g}\\). Usando a densidade do acetato de etila (\\(d = 0,90\\text{ g/mL}\\)): \\(V = \\frac{m}{d} = \\frac{70,4\\text{ g}}{0,90\\text{ g/mL}} = 78,22\\text{ mL} \\approx 78\\text{ mL}\\).',
    wrong: {
      0: 'Considerou rendimento de 100% e dividiu 88 por 0,88 de forma equivocada.',
      1: '88 mL seria o volume correspondente a aproximadamente 80 g de massa teórica.',
      3: '70 mL corresponde à massa produzida em gramas (70,4 g), esquecendo de dividir pela densidade de 0,90 g/mL.',
    },
  }),
  q({
    n: 39, subject: 'Química', content: 'Cinética Química — Determinação experimental da lei de velocidade', difficulty: 'Média',
    statement: `Os conversores catalíticos presentes nos escapamentos dos automóveis são projetados para reduzir a emissão de gases poluentes na atmosfera. Nesses dispositivos, o dióxido de nitrogênio (NO2), um gás tóxico e irritante, reage com o monóxido de carbono (CO), gerando substâncias menos nocivas à saúde humana. A equação química global para esse processo em fase gasosa é:

NO2(g) + CO(g) → NO(g) + CO2(g)

Para compreender o mecanismo de atuação dos catalisadores, cientistas estudaram a cinética dessa reação a uma temperatura constante de 450 K e diferentes concentrações iniciais dos reagentes, obtendo os seguintes dados experimentais:

| Experimento | [NO₂] / 10⁻¹ mol L⁻¹ | [CO] / 10⁻¹ mol L⁻¹ | Velocidade Inicial / 10⁻⁴ mol L⁻¹ s⁻¹ |
|---|---|---|---|
| I | 1,0 | 1,0 | 1,2 |
| II | 2,0 | 1,0 | 4,8 |
| III | 1,0 | 2,0 | 1,2 |

Com base nesses dados, assinale a alternativa que apresenta a lei de velocidade para essa reação.`,
    alternatives: [
      'v = k [NO2]',
      'v = k [NO2]²',
      'v = k [CO][NO2]',
      'v = k [CO][NO2]⁴',
    ],
    answer: 'B',
    why: 'Comparando os experimentos I e II: mantendo [CO] constante, quando a concentração de NO₂ dobra (de 1,0 para 2,0), a velocidade quadruplica (de 1,2 para 4,8, ou seja, \\(2^x = 4 \\implies x = 2\\)). Comparando os experimentos I e III: mantendo [NO₂] constante, quando a concentração de CO dobra, a velocidade inicial não se altera (\\(2^y = 1 \\implies y = 0\\)). A ordem global em relação ao CO é zero, resultando na lei: \\(v = k [\\text{NO}_2]^2\\).',
    wrong: {
      0: 'Pressupõe ordem 1 em relação ao NO₂, contrariando a variação quadrática observada.',
      2: 'Assume erroneamente que a reação é elementar direta baseada nos coeficientes estequiométricos da equação global.',
      3: 'Ordem 4 em relação ao NO₂ não condiz com a proporcionalidade experimental encontrada.',
    },
  }),
  q({
    n: 40, subject: 'Química', content: 'Ligações Químicas — Hibridização, orbitais sp2 e pi no grafeno', difficulty: 'Média',
    statement: `O grafeno consiste em uma única camada bidimensional de átomos de carbono organizados em uma rede hexagonal regular. Nele, os orbitais híbridos sp2 do carbono se combinam para formar ligações covalentes sigma (σ) fortes, enquanto os orbitais p puros se sobrepõem lateralmente para formar ligações pi (π), criando uma nuvem eletrônica deslocalizada que se estende por toda a folha.

Com base nas informações apresentadas, a alta resistência mecânica e a condutividade elétrica do grafeno são propriedades decorrentes, respectivamente, das interações entre os orbitais:`,
    alternatives: [
      'p─p e p─p',
      'p─p e sp²─sp²',
      'sp²─sp² e sp²─sp²',
      'sp²─sp² e p─p',
    ],
    answer: 'D',
    why: 'A extrema resistência à tração mecânica no plano do grafeno advém das ligações covalentes frontais sigma (σ), formadas pela sobreposição dos orbitais híbridos \\(sp^2 - sp^2\\). Já a excelente condutividade elétrica decorre da deslocalização de elétrons na nuvem \\(\\pi\\), originada pela sobreposição lateral dos orbitais \\(p - p\\) puros não hibridizados.',
    wrong: {
      0: 'A resistência mecânica primária não provém das fracas ligações laterais pi (p-p).',
      1: 'Inverteu a ordem de atribuição das propriedades físicas.',
      2: 'A condução de eletricidade depende da nuvem eletrônica pi (p-p), e não dos orbitais sigma rigidamente localizados nas ligações interatômicas.',
    },
  }),
];
