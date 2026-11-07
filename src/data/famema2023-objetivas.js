import { createFamema, tex } from './famema-helpers.js';
const { q } = createFamema(2023);

const POEM = `Leia o poema em prosa “Conto cruel”, de Mário Quintana, para responder às questões de 02 a 07.

Conto cruel

I

De repente, o leite talhou nos vasilhames. Foi um raio?
Foi Leviatã? Foi o quê?

O burgomestre¹, debaixo das cobertas, resfolegava
orações meio esquecidas.

E os negros monstros das cornijas², com as faces zebradas de relâmpagos, silenciosamente gargalhavam por suas
três ou quatro bocas superpostas.

II

E amanheceu um enorme ovo, em pé, no meio da praça, três palmos mais alto que os formosos alabardeiros³ que
lhe puseram em torno para evitar a aproximação do público.

Foi chamado então o velho mágico, que escreveu na casca
as três palavras infalíveis. E o ovo abriu-se ao meio e dele
saiu um imponente senhor, tão magnificamente vestido e
resplandecente de alamares e crachás que todos pensaram
que fosse o Rei de Ouros. E ei-lo que disse, encarando o
seu povo: “Eu sou o novo burgomestre!” Dito e feito. Nunca
houve tanta dança e tanta bebedeira na cidade. Quanto ao
velho burgomestre, nem foi preciso depô-lo, pois desapareceu tão misteriosamente como havia aparecido o novo, ou o
ovo. E os menestréis compuseram divertidas canções, que
o populacho berrava nas estalagens, entre gargalhadas e
arrepios de medo.

III

Mas por onde andaria o burgomestre?

O seu cachimbo de porcelana, em cujo forno se via um
Cupido de pernas trançadas, tocando flauta, foi encontrado
à beira-rio. E apesar de todos os esforços, só conseguiram
pescar um baú, que não tinha nada a ver com a coisa, e uma
sereiazinha insignificante e nada bonita, uma sereiazinha de
água doce, que nem sabia cantar e foi logo devolvida ao seu
elemento.

Mas quando casava a filha do mestre-escola, encontrou-se dentro do bolo de noiva a dentadura postiça do burgomestre, o que deu azo a que desmaiassem, no ato, duas gerações
inteiras de senhoras, e ao posterior suicídio do pasteleiro.

E a caixa de rapé do burgomestre, que era inconfundível e
única, multiplicou-se estranhamente e começou a ser achada
em todas as salas de espera desertas, pelos varredores verdes
de terror, depois que era encerrado o expediente nas repartições públicas e começava a ouvir-se, na rua, o passo trôpego
do acendedor de lampiões.

(Melhores poemas, 2005.)

1 burgomestre: prefeito.
2 cornija: moldura sobreposta, formando saliências, que arremata a parte superior de uma parede, porta.
3 alabardeiro: soldado armado de alabarda (antiga arma composta de longa haste, que é rematada por peça pontiaguda de ferro).`;
const POEM_BLOCKS = ['prose', 'poem-title', 'label', 'poem', 'poem', 'poem', 'label', 'poem', 'poem', 'label', 'poem', 'poem', 'poem', 'poem', 'source', 'note'];
const POEM_WORKS = ['Conto cruel', 'Melhores poemas'];

const FISCHER = `Num exemplo esquemático: imaginemos que, quando menino, um filho tenha um momento de raiva contra o pai, uma daquelas raivas radicais que qualquer um tem, mas não confessa; e suponhamos que, bem na hora em que o menino esteja vivendo essa raiva, chegue a notícia de que o pai sofreu um acidente de carro, um terrível acidente, que o deixa estragado, que talvez até o mate. Na cabeça do menino, se estabelece uma relação de causa e consequência entre a raiva e o acidente, de forma que ele passe a viver, inconscientemente, como um culpado pelo problema todo. Será capaz de viver décadas carregando essa culpa, arrastando-a para onde for, sem sequer saber que ela existe, porque a relação de causa e efeito se estabeleceu num nível totalmente inconsciente, inacessível para a consciência racional, salvo, segundo Freud, pela análise. Análise que, nesse exemplo, trataria de trazer tal nexo causal para a consciência, para desfazê-lo, para mostrar que ele não tem cabimento, porque é uma falsa crença.

(Filosofia mínima: ler, escrever, ensinar, aprender, 2011.)`;
const FISCHER_BLOCKS = ['prose', 'source'];
const FISCHER_WORKS = ['Filosofia mínima: ler, escrever, ensinar, aprender'];

export const famema2023Objetivas = [
  q({ n: 1, subject: 'Português', content: 'Interpretação de cartum e nostalgia',
    statement: 'Examine o cartum de Aunt Sarah, publicado no Instagram da revista The New Yorker em 29.04.2022.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q01-cartum.svg', alt: 'Cartum em que uma borboleta diz que, apesar de gostar de voar, faria qualquer coisa para voltar ao aconchego do casulo, beber chá e ler romances policiais.' }],
    statementAfter: 'O cartum permite caracterizar a borboleta como', afterBlockTypes: ['command'],
    alternatives: ['preguiçosa.', 'contraditória.', 'rancorosa.', 'nostálgica.', 'desdenhosa.'], answer: 'D',
    why: 'A borboleta recorda com saudade o aconchego, a quietude e os prazeres simples do tempo em que vivia no casulo; esse desejo de retorno ao passado caracteriza nostalgia.',
    wrong: { 0: 'Ela não apresenta preguiça: menciona atividades como ler e recorda um modo de vida, não aversão ao esforço.', 1: 'A valorização do voo e a saudade do casulo expressam fases e desejos distintos, sem constituir o traço dominante de contradição.', 2: 'Não há ressentimento ou desejo de vingança na fala.', 4: 'Ela não demonstra desdém; ao contrário, atribui valor afetivo à vida no casulo.' } }),
  q({ n: 2, subject: 'Literatura', content: 'Conto cruel e tipologia narrativa', statement: POEM, blockTypes: POEM_BLOCKS, works: POEM_WORKS,
    statementAfter: 'O próprio título do poema antecipa seu caráter', afterBlockTypes: ['command'],
    alternatives: ['argumentativo.', 'narrativo.', 'pedagógico.', 'metalinguístico.', 'hermético.'], answer: 'B',
    why: 'A palavra “conto” anuncia uma narrativa breve, confirmada pelo relato de acontecimentos envolvendo o burgomestre e a cidade.',
    wrong: { 0: 'Embora haja sentidos críticos, o título não anuncia uma defesa explícita de tese.', 2: 'Não se apresenta como lição didática ou pedagogia.', 3: 'O título não faz da linguagem literária o próprio tema.', 4: '“Conto cruel” é um título acessível e não sugere hermetismo.' } }),
  q({ n: 3, subject: 'Literatura', content: 'Modernismo e vanguardas: elemento onírico e Surrealismo', statement: POEM, blockTypes: POEM_BLOCKS, works: POEM_WORKS,
    statementAfter: 'A presença do elemento onírico no poema de Mário Quintana revela a influência, sobretudo, da seguinte vanguarda europeia:', afterBlockTypes: ['command'],
    alternatives: ['Futurismo.', 'Simbolismo.', 'Surrealismo.', 'Expressionismo.', 'Cubismo.'], answer: 'C',
    why: 'O Surrealismo explora o inconsciente, os sonhos e associações ilógicas, como o ovo gigante que se abre e revela um novo burgomestre.',
    wrong: { 0: 'O Futurismo enfatiza velocidade, máquina e modernidade tecnológica, não o onirismo central do texto.', 1: 'Simbolismo é corrente do século XIX e não a vanguarda histórica associada à exploração do inconsciente.', 3: 'O Expressionismo privilegia a deformação subjetiva e a angústia, mas a associação onírica aponta especificamente para o Surrealismo.', 4: 'O Cubismo se caracteriza principalmente pela fragmentação e multiplicidade de perspectivas.' } }),
  q({ n: 4, subject: 'Português', content: 'Discurso indireto e tempo verbal', statement: POEM, blockTypes: POEM_BLOCKS, works: POEM_WORKS,
    statementAfter: 'Ao se transpor o trecho “E ei-lo que disse, encarando o seu povo: ‘Eu sou o novo burgomestre!’” (4º parágrafo) para o discurso indireto, o termo sublinhado assume a seguinte forma:', afterBlockTypes: ['command'],
    alternatives: ['foi.', 'é.', 'fora.', 'era.', 'fosse.'], answer: 'D',
    why: 'Na passagem para o discurso indireto após “disse”, o presente “sou” passa ao pretérito imperfeito do indicativo: “ele era o novo burgomestre”.',
    wrong: { 0: '“Foi” é pretérito perfeito e não realiza a concordância habitual solicitada.', 1: '“É” mantém o presente, sem a transposição temporal exigida.', 2: '“Fora” é pretérito mais-que-perfeito, inadequado ao contexto.', 4: '“Fosse” é forma do subjuntivo, não a forma do indicativo esperada.' } }),
  q({ n: 5, subject: 'Português', content: 'Relações de sentido: concessão', statement: POEM, blockTypes: POEM_BLOCKS, works: POEM_WORKS,
    statementAfter: '“apesar de todos os esforços, só conseguiram pescar um baú” (6º parágrafo)\n\nEm relação à oração que o sucede, o trecho sublinhado expressa ideia de', afterBlockTypes: ['quote', 'command'],
    alternatives: ['comparação.', 'concessão.', 'condição.', 'causa.', 'consequência.'], answer: 'B',
    why: '“Apesar de todos os esforços” introduz um obstáculo que não impede o resultado da oração seguinte, expressando concessão.',
    wrong: { 0: 'Não se estabelece comparação entre dois elementos.', 2: 'O trecho não apresenta condição para a realização da ação.', 3: 'Os esforços não são apresentados como causa do resultado, pois este ocorre apesar deles.', 4: 'A locução não indica consequência da oração seguinte.' } }),
  q({ n: 6, subject: 'Português', content: 'Prefixo de negação e formação de palavras', statement: POEM, blockTypes: POEM_BLOCKS, works: POEM_WORKS,
    statementAfter: 'Verifica-se o emprego de palavra formada com prefixo que exprime ideia de negação em:', afterBlockTypes: ['command'],
    alternatives: ['“uma sereiazinha de água doce, que nem sabia cantar e foi logo devolvida ao seu elemento” (6º parágrafo).', '“De repente, o leite talhou nos vasilhames” (1º parágrafo).', '“E amanheceu um enorme ovo” (4º parágrafo).', '“E os menestréis compuseram divertidas canções” (4º parágrafo).', '“o velho mágico, que escreveu na casca as três palavras infalíveis” (4º parágrafo).'], answer: 'E',
    why: 'Em “infalíveis”, o prefixo in- acrescenta negação a “falíveis”: que não pode falhar.',
    wrong: { 0: '“Devolvida” contém prefixo, mas não expressa negação.', 1: 'Não há no trecho palavra com prefixo negativo.', 2: '“Enorme” não é formada por prefixo de negação.', 3: 'As palavras destacadas não apresentam prefixo negativo.' } }),
  q({ n: 7, subject: 'Português', content: 'Voz passiva sintética', statement: POEM, blockTypes: POEM_BLOCKS, works: POEM_WORKS,
    statementAfter: '“Foi chamado então o velho mágico” (4º parágrafo)\n\nAo se transpor esse trecho para a voz passiva sintética, a forma verbal resultante será:', afterBlockTypes: ['quote', 'command'],
    alternatives: ['Chamaram-se.', 'Fora chamado.', 'Chamou-se.', 'Chamavam.', 'Chamaram.'], answer: 'C',
    why: 'A passiva analítica “foi chamado” corresponde a “chamou-se”, com o verbo principal no pretérito perfeito e o pronome apassivador se, concordando com “o velho mágico”.',
    wrong: { 0: 'A forma plural não concorda com o sujeito singular “o velho mágico”.', 1: '“Fora chamado” conserva a passiva analítica e muda o tempo para o mais-que-perfeito.', 3: '“Chamavam” não contém pronome apassivador e está no plural e no imperfeito.', 4: '“Chamaram” está no plural e não apresenta a construção sintética com se.' } }),
  q({ n: 8, subject: 'Português', content: 'Inferência e falsa crença', statement: FISCHER, blockTypes: FISCHER_BLOCKS, works: FISCHER_WORKS,
    statementAfter: 'Depreende-se do texto que uma falsa crença', afterBlockTypes: ['command'],
    alternatives: ['seria o estabelecimento de uma injustificada relação de causa e consequência.', 'pode ser desfeita, mas nunca conhecida.', 'pode ser conhecida, mas nunca desfeita.', 'seria a mera substituição de um nexo causal falso por outro igualmente falso.', 'mostra-se inacessível à consciência do indivíduo.'], answer: 'A',
    why: 'O menino associa injustificadamente sua raiva ao acidente do pai; é esse nexo causal sem fundamento que o texto exemplifica como falsa crença.',
    wrong: { 1: 'A análise torna o nexo consciente e permite desfazê-lo, de modo que “nunca conhecida” contradiz o texto.', 2: 'O texto afirma que a análise pode conhecer e desfazer a crença.', 3: 'Não há substituição de um nexo falso por outro, mas identificação e desfazimento do nexo indevido.', 4: 'A crença é inicialmente inconsciente, mas pode tornar-se acessível pela análise.' } }),
  q({ n: 9, subject: 'Português', content: 'Pessoa gramatical e inclusão do leitor', statement: FISCHER, blockTypes: FISCHER_BLOCKS, works: FISCHER_WORKS,
    statementAfter: 'O autor do ensaio inclui o leitor em seu texto no seguinte trecho:', afterBlockTypes: ['command'],
    alternatives: ['“porque a relação de causa e efeito se estabeleceu num nível totalmente inconsciente, inacessível para a consciência racional”.', '“Será capaz de viver décadas carregando essa culpa, arrastando-a para onde for, sem sequer saber que ela existe”.', '“de forma que ele passe a viver, inconscientemente, como um culpado pelo problema todo”.', '“Na cabeça do menino, se estabelece uma relação de causa e consequência entre a raiva e o acidente”.', '“Num exemplo esquemático: imaginemos que, quando menino, um filho tenha um momento de raiva contra o pai”.'], answer: 'E',
    why: '“Imaginemos” está na primeira pessoa do plural e convida o leitor a participar com o autor da construção do exemplo.',
    wrong: { 0: 'O trecho explica o caráter inconsciente da relação, sem forma verbal inclusiva.', 1: 'A terceira pessoa refere-se ao menino, não ao leitor.', 2: 'O pronome “ele” mantém a referência exclusivamente ao menino.', 3: 'A oração descreve o menino, sem incluir autor e leitor.' } }),
  q({ n: 10, subject: 'Português', content: 'Referenciação pronominal', statement: FISCHER, blockTypes: FISCHER_BLOCKS, works: FISCHER_WORKS,
    statementAfter: 'Os dois termos sublinhados no texto referem-se, respectivamente, a', afterBlockTypes: ['command'],
    alternatives: ['“hora” e “pai”.', '“menino” e “acidente”.', '“hora” e “acidente”.', '“menino” e “pai”.', '“hora” e “carro”.'], answer: 'C',
    why: 'Os pronomes relativos retomam os antecedentes imediatos: “na hora em que...” refere-se a “hora”, e “acidente, que o deixa estragado” refere-se a “acidente”.',
    wrong: { 0: 'O segundo relativo não retoma “pai”, mas “acidente”.', 1: 'O primeiro relativo retoma “hora”, não “menino”.', 3: 'Nenhum dos dois relativos tem “menino” ou “pai” como antecedente destacado.', 4: 'O segundo relativo qualifica “acidente”, não “carro”.' } }),
  q({ n: 11, subject: 'Matemática', content: 'Média aritmética e ponto médio na reta real',
    statement: tex`A figura indica a posição dos pontos A e B sobre a reta dos números reais e a mediatriz de $\overline{AB}$, que intersecta a reta real no ponto M. Assim, temos que $\frac{8}{15}$ e $\frac45$ são coordenadas, na reta real, dos pontos A e B, respectivamente.`, blockTypes: ['prose'],
    visuals: [{ file: 'p2-q11-mediatriz.svg', alt: 'Reta real com A em 8/15 e B em 4/5; a mediatriz de AB cruza a reta no ponto médio M.' }],
    statementAfter: 'Nessas condições, a coordenada do ponto M, na reta real, é', afterBlockTypes: ['command'],
    alternatives: [tex`$\frac43$.`, tex`$\frac35$.`, tex`$\frac23$.`, tex`$\frac53$.`, tex`$\frac45$.`], answer: 'C',
    why: tex`M é o ponto médio de A e B: $$M=\frac12\left(\frac{8}{15}+\frac45\right)=\frac12\left(\frac{8}{15}+\frac{12}{15}\right)=\frac12\cdot\frac{20}{15}=\boxed{\frac23}.$$`,
    wrong: { 0: '4/3 é o dobro do ponto médio calculado.', 1: '3/5 não é a média das duas coordenadas.', 3: '5/3 não resulta da soma seguida de divisão por 2.', 4: '4/5 é a coordenada de B, não a de M.' } }),
  q({ n: 12, subject: 'Matemática', content: 'Porcentagem e sistema de equações',
    statement: 'Um cinema vende ingressos a preço único. Com o preço atual dos ingressos, o cinema tem conseguido vender apenas metade da lotação máxima da sala, com arrecadação total de R$ 1.408,00. Diante dessa situação, o gerente decidiu abaixar o preço do ingresso em R$ 5,00 e, com o novo valor, o cinema passou a preencher sua lotação máxima, com arrecadação total de R$ 2.176,00. O percentual de desconto dado pelo gerente no preço do ingresso em relação ao que era anteriormente cobrado foi de, aproximadamente,', blockTypes: ['prose'],
    alternatives: ['23,3%.', '26,7%.', '23,7%.', '22,7%.', '23,1%.'], answer: 'D',
    why: tex`Se $N$ é a lotação e $p$ o preço inicial, então $Np/2=1408$ e $N(p-5)=2176$. Da primeira equação, $Np=2816$; substituindo na segunda, $2816-5N=2176$, logo $N=128$ e $p=22$. O desconto foi $5/22\approx0{,}227=\boxed{22{,}7\%}$.`,
    wrong: { 0: '23,3% não corresponde à razão entre o desconto de R$ 5,00 e o preço inicial de R$ 22,00.', 1: '26,7% resultaria de um denominador diferente do preço inicial calculado.', 2: '23,7% não satisfaz 5/22.', 4: '23,1% é próximo, mas não é a aproximação correta de 22,727...%.' } }),
  q({ n: 13, subject: 'Matemática', content: 'Áreas de círculo e quadrado',
    statement: 'As figuras mostram um círculo de centro P inscrito em um quadrado ABCD e um quadrado de centro Q inscrito nesse mesmo círculo.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q13-circulos.svg', alt: 'À esquerda, círculo inscrito em quadrado com a região externa amarela; à direita, quadrado inscrito no mesmo círculo com a região entre eles azul.' }],
    statementAfter: 'Se o raio do círculo das duas figuras mede 2 cm, então a diferença entre a área da região indicada em azul e a área da região indicada em amarelo, nesta ordem, é igual a', afterBlockTypes: ['command'],
    alternatives: [tex`$24\ \mathrm{cm^2}$.`, tex`$(8\pi-24)\ \mathrm{cm^2}$.`, tex`$(4\pi-2)\ \mathrm{cm^2}$.`, tex`$(9\pi-24)\ \mathrm{cm^2}$.`, tex`$(8\pi-12)\ \mathrm{cm^2}$.`], answer: 'B',
    why: tex`O quadrado maior tem lado 4 e área 16; o círculo tem área $4\pi$; o quadrado inscrito tem diagonal 4, lado $2\sqrt2$ e área 8. Assim, $S_{azul}=4\pi-8$ e $S_{amarela}=16-4\pi$. Portanto, $S_{azul}-S_{amarela}=(4\pi-8)-(16-4\pi)=\boxed{8\pi-24}$ cm².`,
    wrong: { 0: '24 não considera as áreas curvas do círculo.', 2: '4π − 2 não corresponde a nenhuma das diferenças de áreas obtidas.', 3: '9π não é a soma dos dois círculos: há apenas um círculo de área 4π em cada configuração.', 4: '8π − 12 usa subtração constante incorreta; a diferença das partes retangulares é 8 + 16 = 24.' } }),
  q({ n: 14, subject: 'Matemática', content: 'Análise combinatória e princípio multiplicativo',
    statement: `Camila vai escolher uma senha para sua primeira conta bancária. A senha será de seis campos, sendo que:\n\nos dois primeiros campos têm que ser símbolos, iguais ou distintos, do conjunto {#, &};\n\nos dois campos seguintes devem ser elementos do conjunto {a, b, A, B}, iguais ou distintos (note que aA constitui senha diferente de AA); e\n\nos dois últimos campos devem ser elementos do conjunto {0, 2, 4}, iguais ou distintos.\n\nSendo assim, o maior número de senhas diferentes que Camila poderá escolher é igual a`, blockTypes: ['prose', 'list', 'list', 'list', 'command'],
    alternatives: ['576.', '432.', '524.', '144.', '288.'], answer: 'A',
    why: tex`Como repetições são permitidas, os três pares de campos têm, respectivamente, $2^2=4$, $4^2=16$ e $3^2=9$ possibilidades. Pelo princípio multiplicativo, o total é $4\cdot16\cdot9=\boxed{576}$ senhas.`,
    wrong: { 1: '432 não é o produto das quantidades independentes de escolhas.', 2: '524 não resulta de $2^2\\cdot4^2\\cdot3^2$.', 3: '144 corresponde a omitir um dos fatores corretos.', 4: '288 é metade do total, mas não há restrição que imponha essa divisão.' } }),
  q({ n: 15, subject: 'Matemática', content: 'Trigonometria e movimento uniforme',
    statement: tex`Um balão partirá perpendicularmente do chão, em trajetória retilínea, deslocando-se constantemente 2 metros a cada segundo. Sabendo disso, Fábio, que está a $4\sqrt3$ m do ponto de onde o balão partirá, posicionou seu estilingue a uma altura de 2 metros do chão e o armou, apontando uma pedra a ser disparada pelo estilingue, a 60º, no mesmo plano que contém a trajetória do balão, como indica a figura. Admita que:

as dimensões do balão são desprezíveis;

para acertar o balão, Fábio deverá apenas aguardar o tempo $t$ que o balão leva do chão até atingir a mira do seu estilingue para dispará-lo.`, blockTypes: ['prose', 'list', 'list'],
    visuals: [{ file: 'p2-q15-balao.svg', alt: 'Triângulo retângulo com distância horizontal 4√3 m, ângulo de 60 graus e altura da mira medida a partir de 2 m do chão.' }],
    statementAfter: 'Na situação descrita, t é igual a', afterBlockTypes: ['command'],
    alternatives: ['5,5 s.', '7,5 s.', '6 s.', '6,5 s.', '7 s.'], answer: 'E',
    why: tex`Se $h$ é a altura acima do estilingue, $\tan60^\circ=h/(4\sqrt3)$, logo $h=\sqrt3\cdot4\sqrt3=12$ m. Somando os 2 m iniciais, a mira está a 14 m do chão. Com velocidade de 2 m/s, $t=14/2=\boxed{7\ \mathrm s}$.`,
    wrong: { 0: '5,5 s corresponderia a uma altura de 11 m, incompatível com o triângulo.', 1: '7,5 s corresponderia a 15 m, um metro acima da mira.', 2: '6 s considera apenas os 12 m acima do estilingue e esquece os 2 m iniciais.', 3: '6,5 s corresponde a 13 m, não aos 14 m calculados.' } }),
  q({ n: 16, subject: 'Matemática', content: 'Funções afins e composição de funções',
    statement: tex`Sejam as funções $y=f(x)$ e $y=g(x)$, com $f:[0,6]\rightarrow\mathbb R$ e $g:[6,10]\rightarrow\mathbb R$, cujos gráficos, representados no plano cartesiano, são segmentos de reta, como indica a figura.`, blockTypes: ['prose'],
    visuals: [{ file: 'p2-q16-funcoes.svg', alt: 'Gráfico de f é o segmento de (0,0) a (6,4); gráfico de g é horizontal em y igual a 4 entre x igual a 6 e 10.' }],
    statementAfter: tex`Seja $f\circ g:[6,10]\rightarrow\mathbb R$ a função composta de $y=f(x)$ e $y=g(x)$, em que $(f\circ g)(x)=f(g(x))$. Assim, $f(g(x))$ é igual a`, afterBlockTypes: ['command'],
    alternatives: [tex`$\frac53$.`, '3.', tex`$\frac23$.`, '6.', tex`$\frac83$.`], answer: 'E',
    why: tex`Para $x\in[6,10]$, o gráfico mostra $g(x)=4$. No intervalo $[0,6]$, $f$ passa por $(0,0)$ e $(6,4)$, logo $f(x)=\frac23x$. Portanto, $f(g(x))=f(4)=\frac23\cdot4=\boxed{\frac83}$.`,
    wrong: { 0: '5/3 não corresponde a f(4) na reta de coeficiente 2/3.', 1: '3 seria obtido com coeficiente 3/4, não com o coeficiente do gráfico.', 2: '2/3 é o coeficiente angular de f, não o valor da composta.', 3: '6 é a abscissa final do domínio de f, não f(4).' } }),
  q({ n: 17, subject: 'Matemática', content: 'Função exponencial e equação',
    statement: tex`Se quadruplicarmos $2^x$ e dividirmos o resultado por $4^x$, o resultado será igual a $\frac1{64}$. Nessas condições, o valor de x é`, blockTypes: ['prose'],
    alternatives: ['−8.', '6.', '8.', '−6.', '4.'], answer: 'C',
    why: tex`A expressão é $$\frac{4\cdot2^x}{4^x}=\frac{2^2\cdot2^x}{2^{2x}}=2^{2-x}.$$ Como $1/64=2^{-6}$, temos $2^{2-x}=2^{-6}$, portanto $2-x=-6$ e $\boxed{x=8}$.`,
    wrong: { 0: 'Para x = −8, a expressão vale 2¹⁰ = 1024.', 1: 'Para x = 6, a expressão vale 2⁻⁴ = 1/16.', 3: 'Para x = −6, a expressão vale 2⁸ = 256.', 4: 'Para x = 4, a expressão vale 2⁻² = 1/4.' } }),
  q({ n: 18, subject: 'Matemática', content: 'Média aritmética e proporcionalidade',
    statement: 'A nota de cada prova de um professor varia de 0 a 50. As notas de três alunos desse professor foram números inteiros consecutivos do intervalo de 0 a 50. Sabe-se também que a média aritmética dessas três notas foi 28. Observando a proporcionalidade, se o professor desse as notas de 0 a 10, a nota do aluno, dentre os três, que foi melhor nessa prova seria', blockTypes: ['prose'],
    alternatives: ['6,0.', '5,4.', '5,8.', '6,2.', '5,6.'], answer: 'C',
    why: tex`Três inteiros consecutivos com média 28 são 27, 28 e 29. A melhor nota foi 29 em 50; na escala de 0 a 10, ela corresponde a $29\cdot10/50=\boxed{5{,}8}$.`,
    wrong: { 0: '6,0 corresponderia à nota original 30, que não pertence ao trio.', 1: '5,4 corresponde a 27, a menor nota do trio.', 3: '6,2 corresponderia a 31, fora das notas obtidas.', 4: '5,6 corresponde a 28, a nota intermediária, não a melhor.' } }),
  q({ n: 19, subject: 'Matemática', content: 'Semelhança de triângulos e segmentos paralelos',
    statement: tex`Na figura a seguir, $AE=8{,}5$ cm, $EF=12$ cm e $AF=10$ cm. Sabe-se ainda que $AB=BC=CD=DE$ e que $\overline{BI}$, $\overline{CH}$, $\overline{DG}$ e $\overline{EF}$ são segmentos paralelos.`, blockTypes: ['prose'],
    visuals: [{ file: 'p2-q19-paralelas.svg', alt: 'Triângulo AEF com B, C e D dividindo AE em quatro partes iguais e BI, CH e DG paralelos a EF.' }],
    statementAfter: tex`Nas condições descritas, a medida de $\overline{BI}$ é`, afterBlockTypes: ['command'],
    alternatives: ['4,5 cm.', '3,5 cm.', '4 cm.', '3 cm.', '2,5 cm.'], answer: 'D',
    why: tex`Como AE está dividido em quatro partes iguais, $AB/AE=1/4$. Os triângulos ABI e AEF são semelhantes porque $BI\parallel EF$; logo, $BI/EF=1/4$. Portanto, $BI=12/4=\boxed{3\ \mathrm{cm}}$.`,
    wrong: { 0: '4,5 cm não mantém a razão de semelhança 1/4.', 1: '3,5 cm não corresponde a um quarto de EF.', 2: '4 cm corresponderia à razão 1/3, não 1/4.', 4: '2,5 cm não satisfaz BI/12 = 1/4.' } }),
  q({ n: 20, subject: 'Matemática', content: 'Função quadrática e distância entre pontos',
    statement: tex`No plano cartesiano ortogonal, a distância entre os pontos em que a parábola dada pela função $$f(x)=\frac49x^2-\frac83x+4$$ intersecta os eixos, em unidades de comprimento do plano, é igual a`, blockTypes: ['prose'],
    alternatives: ['4.', '3.', '2.', '6.', '5.'], answer: 'E',
    why: tex`Fatorando, $f(x)=\frac49(x-3)^2$. A parábola toca o eixo x em $(3,0)$ e corta o eixo y em $(0,4)$. A distância é $\sqrt{(3-0)^2+(0-4)^2}=\sqrt{9+16}=\boxed5$.`,
    wrong: { 0: '4 é apenas a ordenada do ponto de interseção com o eixo y.', 1: '3 é apenas a abscissa do vértice no eixo x.', 2: '2 não é distância entre os pontos (3,0) e (0,4).', 3: '6 não satisfaz o teorema de Pitágoras com catetos 3 e 4.' } }),
];
