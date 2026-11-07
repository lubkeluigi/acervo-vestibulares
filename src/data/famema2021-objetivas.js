import { createFamema, tex } from './famema-helpers.js';
const { q } = createFamema(2021);

const AMOR = `Leia o trecho do poema “Amor feinho”, de Adélia Prado, para responder às questões de 01 a 03.

Eu quero amor feinho.
Amor feinho não olha um pro outro.
Uma vez encontrado é igual fé,
não teologa mais.
Duro de forte, o amor feinho é magro, doido por sexo
e filhos tem os quantos haja.
Tudo que não fala, faz.
Planta beijo de três cores ao redor da casa
e saudade roxa e branca,
da comum e da dobrada.
Amor feinho é bom porque não fica velho.
Cuida do essencial; o que brilha nos olhos é o que é:
eu sou homem você é mulher.
Amor feinho não tem ilusão,
o que ele tem é esperança:
eu quero amor feinho.

(Bagagem, 2011.)`;
const AMOR_BLOCKS = ['label', 'poem', 'source'];
const QUINTANA = `Leia o texto de Mario Quintana para responder às questões de 04 a 06.

Homo insapiens¹

Vocês se lembram de quando a gente se perdia no campo e soltava a rédea ao cavalo e ele voltava direitinho para casa? Pois até hoje, quando não me lembro de onde guardei uma coisa, desisto de quebrar a cabeça, afrouxo o espírito e eis que ele conduz meu passo e minha mão sonâmbula ao lugar exato. Quanto a saber qual dos dois, espírito e corpo, é o cavaleiro e o cavalo, é questão acadêmica. Só sei que isso não me acontece agora na vastidão do campo, mas dentro de uma casa, de uma sala, de um móvel...

(A vaca e o hipogrifo, 2012.)

¹ Homo sapiens: na classificação biológica dos seres, é o nome científico do ser humano. Do latim, significa “homem sábio”, racional. “Homo insapiens”, título do texto, é uma variação do termo.`;
const QUINTANA_BLOCKS = ['label', 'subheading', 'prose', 'source', 'note'];
const SPA = `Leia o trecho inicial da crônica “Os segredos do spa”, de Moacyr Scliar, para responder às questões de 07 a 09.

Diferente de SPC, a palavra Spa não é uma sigla, não se trata de nenhum Serviço-de-Proteção-a-Qualquer-Coisa. É o nome de uma cidade da Bélgica, famosa, desde o século 14, por suas águas minerais. Século 14, sim: é muito antiga a crença do homem no poder dessas águas que brotam do seio da terra, aquecidas, segundo a lenda, nas forjas do deus Vulcano. E há muito tempo pessoas vão aos banhos termais, em busca de tratamento para situações que vão desde as doenças de pele até os proverbiais males do fígado. As águas foram estudadas e classificadas: sulfurosas, bicarbonatadas, ferruginosas. E para cada tipo de doença havia uma água específica. Tamanha demanda acabou criando uma verdadeira indústria: grandes estabelecimentos foram construídos para hospedar pessoas que vinham muitas vezes de longe em busca de curas para os seus males. Alguns desses hotéis ficaram famosos pelo luxo barroco; num desses, Alain Resnais filmou o famoso O ano passado em Marienbad, um filme cult dos anos 60, no qual os longos corredores serviam de metáfora para os labirintos da paixão. Irai, aqui no Rio Grande do Sul, sempre foi um equivalente modesto, mas digno.

As pessoas melhoravam no spa. E por que não haviam de melhorar? Comiam bem (inclusive para afastar o espectro da tuberculose, sempre associada à magreza), descansavam, conversavam e sobretudo relaxavam: mergulhadas na água tépida, voltavam por algumas horas ao líquido amniótico onde o feto está a salvo dos desgostos do amor e da fúria da inflação. E isso preserva a reputação das termas até hoje.

(A face oculta, 2001. Adaptado.)`;
const SPA_BLOCKS = ['label', 'prose', 'prose', 'source'];

export const famema2021Objetivas = [
  q({ n: 1, subject: 'Literatura', content: 'Amor feinho: concepção de amor', statement: AMOR, blockTypes: AMOR_BLOCKS, works: ['Bagagem'], statementAfter: 'Segundo o eu lírico, o “amor feinho” é', afterBlockTypes: ['command'],
    alternatives: ['um acontecimento único na vida de uma pessoa.', 'uma experiência cotidiana, desejável e possível.', 'uma ilusão em que alguns amantes acreditam.', 'uma maneira de viver acessível a qualquer pessoa.', 'um estado de aceitação de uma vida desinteressante.'], answer: 'B',
    why: 'O poema valoriza o amor concreto, sem idealizações, ligado ao cotidiano e ao essencial, e afirma o desejo por ele.',
    wrong: { 0: 'Não é apresentado como acontecimento único, mas como experiência de vida cotidiana.', 2: 'O eu lírico afirma justamente que esse amor “não tem ilusão”.', 3: 'O texto não afirma que esse modo de viver seja acessível a qualquer pessoa.', 4: 'Há esperança e desejo, não resignação diante de uma vida desinteressante.' } }),
  q({ n: 2, subject: 'Literatura', content: 'Amor feinho: sentido de teologar', statement: AMOR, blockTypes: AMOR_BLOCKS, works: ['Bagagem'], statementAfter: 'O verbo “teologa”, no contexto da ideia de amor expressa no poema, significa:', afterBlockTypes: ['command'],
    alternatives: ['formular teorias desnecessárias sobre algo que, na prática, dispensa as explicações.', 'prescrever as regras que, seguidas passo a passo, permitem chegar a algo valioso.', 'experimentar, na prática, um conjunto de situações que, na teoria, não existem.', 'descrever com precisão um estado de coisas difícil de atingir.', 'produzir um discurso coerente a fim de convencer as pessoas sobre uma verdade.'], answer: 'A',
    why: 'Comparado à fé, o amor encontrado dispensa teorização: “teologa” significa criar explicações abstratas desnecessárias para o que se vive.',
    wrong: { 1: 'O verso não propõe regras práticas para alcançar o amor.', 2: 'O sentido não é experimentar situações inexistentes na teoria.', 3: 'Não se trata de descrição precisa de um estado.', 4: 'Não há intenção de convencimento por discurso coerente.' } }),
  q({ n: 3, subject: 'Português', content: 'Transitividade verbal em texto poético', statement: AMOR, blockTypes: AMOR_BLOCKS, works: ['Bagagem'], statementAfter: '“Eu quero amor feinho.” O verbo sublinhado é transitivo direto, assim como o verbo sublinhado em:', afterBlockTypes: ['command'],
    alternatives: ['“Amor feinho não olha um pro outro.”', '“não teologa mais.”', '“Uma vez encontrado é igual fé,”', '“Amor feinho é bom porque não fica velho.”', '“Planta beijo de três cores ao redor da casa”'], answer: 'E',
    why: '“Planta” é transitivo direto: planta-se algo — “beijo de três cores” — sem preposição obrigatória.',
    wrong: { 0: '“Olha” estabelece relação com termo preposicionado, não objeto direto.', 1: '“Teologa” está empregado como intransitivo.', 2: '“Encontrado” integra construção que não apresenta objeto direto como na alternativa correta.', 3: '“Fica” é verbo de ligação seguido de predicativo.' } }),
  q({ n: 4, subject: 'Literatura', content: 'Homo insapiens: ironia e instinto', statement: QUINTANA, blockTypes: QUINTANA_BLOCKS, works: ['A vaca e o hipogrifo'], statementAfter: 'A palavra “insapiens”, presente no título, expressa a ideia de', afterBlockTypes: ['command'],
    alternatives: ['um ser humano racional, o que se concretiza, segundo o texto, na capacidade de o homem se valer dos instintos para resolver um problema.', 'um ser humano irracional, que, segundo o texto, diferente do cavalo, tem que se apoiar em um método quando quer procurar um objeto ou um lugar.', 'um ser humano irracional, o que é confirmado, no texto, pela equiparação circunstancial entre homem e cavalo.', 'um ser humano racional, que, segundo o texto, não depende exclusivamente dos instintos para procurar um objeto ou um lugar.', 'um ser humano irracional, que, de acordo com o texto, depende de manter firmes suas rédeas simbólicas com a finalidade de realizar suas tarefas.'], answer: 'C',
    why: 'A variação irônica de “sapiens” sugere irracionalidade; ao afrouxar o espírito e agir como o cavalo, o narrador se equipara ao animal guiado pelo instinto.',
    wrong: { 0: '“Insapiens” nega a racionalidade de “sapiens”, ainda que o instinto resolva o problema.', 1: 'O narrador não segue método: desiste de quebrar a cabeça.', 3: 'A palavra não reforça racionalidade, mas sua inversão irônica.', 4: 'A rédea simbólica é afrouxada, não mantida firme.' } }),
  q({ n: 5, subject: 'Literatura', content: 'Homo insapiens: expressão em contexto', statement: QUINTANA, blockTypes: QUINTANA_BLOCKS, works: ['A vaca e o hipogrifo'], statementAfter: '“Quanto a saber qual dos dois, espírito e corpo, é o cavaleiro e o cavalo, é questão acadêmica.” No contexto em que está inserida, a expressão “questão acadêmica” pode ser entendida como', afterBlockTypes: ['command'],
    alternatives: ['uma questão relevante, que precisa ser resolvida.', 'uma questão subjetiva, que se refere às crenças de cada pessoa.', 'uma questão irrelevante devido a sua simplicidade.', 'uma questão complexa que foge ao escopo do texto.', 'uma questão crítica que, por isso, deve ser evitada.'], answer: 'D',
    why: 'A distinção metafísica entre espírito e corpo é complexa e lateral à experiência narrada; por isso é deixada como “questão acadêmica”.',
    wrong: { 0: 'O narrador não se propõe a resolver essa questão.', 1: 'Não é apresentada como simples preferência ou crença individual.', 2: 'A irrelevância não decorre de simplicidade; a questão é complexa.', 4: 'Não se trata de questão crítica a ser evitada.' } }),
  q({ n: 6, subject: 'Português', content: 'Sentido e função sintática de direito', statement: QUINTANA, blockTypes: QUINTANA_BLOCKS, works: ['A vaca e o hipogrifo'], statementAfter: '“soltava a rédea ao cavalo e ele voltava direitinho para casa” O termo sublinhado tem sentido e função sintática semelhantes ao termo sublinhado em:', afterBlockTypes: ['command'],
    alternatives: ['Bianca sempre faz direito sua lição de casa.', 'André acordou hoje com o pé direito.', 'Carlos nunca foi um homem direito.', 'Denise considera que é seu direito rebelar-se contra um opressor.', 'Ernesto vestiu a camisa pelo avesso porque o direito estava sujo.'], answer: 'A',
    why: 'Em “voltava direitinho” e “faz direito”, a palavra tem valor adverbial, indicando corretamente, adequadamente.',
    wrong: { 1: '“Direito” é adjetivo de “pé”, indicando lado.', 2: '“Direito” é adjetivo com sentido de íntegro.', 3: '“Direito” é substantivo, faculdade assegurada.', 4: '“O direito” é substantivo que designa o lado da camisa.' } }),
  q({ n: 7, subject: 'Literatura', content: 'Os segredos do spa: explicação para a melhora', statement: SPA, blockTypes: SPA_BLOCKS, works: ['A face oculta'], statementAfter: 'Na descrição que faz dos benefícios das temporadas em Spa e estâncias semelhantes, o autor', afterBlockTypes: ['command'],
    alternatives: ['revela o quanto a crença infundada no poder curativo das águas era prejudicial ao interesse dos enfermos.', 'elogia a iniciativa das populações locais, que transformaram uma atividade incipiente em um empreendimento estruturado e viável.', 'lamenta que os spas modernos tenham perdido as características essenciais do que é necessário para um estabelecimento receber esse nome.', 'critica o aproveitamento comercial que se fez de uma crença ingênua que ignorava a medicina científica.', 'insinua que as pessoas eram curadas por razões que não correspondiam exatamente ao poder curativo das águas.'], answer: 'E',
    why: 'O narrador atribui a melhora à alimentação, ao descanso, às conversas e ao relaxamento, não apenas a propriedades curativas da água.',
    wrong: { 0: 'O texto não descreve prejuízo aos enfermos causado pela crença.', 1: 'O foco não é elogiar o empreendimento das populações locais.', 2: 'Não há lamento por perda de características essenciais dos spas.', 3: 'A crônica não se concentra em denunciar exploração comercial.' } }),
  q({ n: 8, subject: 'Literatura', content: 'Luxo barroco e ornamentação', statement: SPA, blockTypes: SPA_BLOCKS, works: ['A face oculta'], statementAfter: '“Alguns desses hotéis ficaram famosos pelo luxo barroco” (1º parágrafo) Por comparação com a literatura barroca, é de se supor que tais hotéis', afterBlockTypes: ['command'],
    alternatives: ['fossem projetados com critérios práticos, em que cada detalhe tivesse uma função.', 'fossem decorados com ornamentos cheios de reentrâncias, mais próximos do exagero que da contenção.', 'fossem localizados em regiões campestres amenas, nas quais o homem pudesse aproveitar as vantagens da paisagem bucólica.', 'tivessem uma arquitetura simples e nenhum detalhe em que a atenção pudesse se perder, a fim de valorizar mais as pessoas que as coisas.', 'tivessem instalações modernas, que utilizassem o melhor da tecnologia da época em benefício dos hóspedes.'], answer: 'B',
    why: 'O Barroco é associado à profusão ornamental, à complexidade, às reentrâncias e ao exagero, em oposição à sobriedade.',
    wrong: { 0: 'Funcionalidade prática não é a marca principal do luxo barroco.', 2: 'Paisagem bucólica não decorre da expressão “luxo barroco”.', 3: 'Simplicidade e ausência de ornamentos contrariam o estilo.', 4: 'A referência é ao estilo ornamentado, não à modernidade tecnológica.' } }),
  q({ n: 9, subject: 'Português', content: 'Relações de sentido entre orações', statement: SPA, blockTypes: SPA_BLOCKS, works: ['A face oculta'], statementAfter: '“Irai, aqui no Rio Grande do Sul, sempre foi um equivalente modesto, mas digno.” (1º parágrafo) Mantendo aproximadamente o sentido original, o trecho sublinhado pode ser substituído por:', afterBlockTypes: ['command'],
    alternatives: ['modesto, no entanto digno.', 'modesto, senão digno.', 'digno, pois modesto.', 'modesto, apesar de digno.', 'digno, entretanto modesto.'], answer: 'A',
    why: '“Mas” estabelece contraste entre “modesto” e “digno”; “no entanto” preserva essa relação adversativa.',
    wrong: { 1: '“Senão” não reproduz adequadamente a oposição entre os dois adjetivos.', 2: '“Pois” introduz causa, não contraste.', 3: '“Apesar de digno” inverte a qualidade que seria inesperada.', 4: 'A ordem e a oposição são alteradas: o texto destaca que, embora modesto, é digno.' } }),
  q({ n: 10, subject: 'Português', content: 'Voz passiva e locução verbal', statement: '“O criminoso pode alegar que foi o segundo eu o autor do crime.”\n\n(Carlos Drummond de Andrade. O avesso das coisas, 1990.)\n\nTranspondo-se para a voz passiva a oração centrada na locução verbal sublinhada, surge a forma verbal:', blockTypes: ['quote', 'source', 'command'], works: ['O avesso das coisas'],
    alternatives: ['pôde ser alegado.', 'pode alegar.', 'é alegado.', 'pode ser alegado.', 'foi alegado.'], answer: 'D',
    why: 'Na voz passiva, o conteúdo alegado passa a sujeito: “Pode ser alegado que...”. Mantêm-se o presente e o modal “pode”.',
    wrong: { 0: '“Pôde” altera o tempo para o passado.', 1: 'A forma permanece na voz ativa.', 2: 'A construção elimina o verbo modal “pode”.', 4: '“Foi” altera o tempo e elimina o modal.' } }),
  q({ n: 11, subject: 'Matemática', content: 'Porcentagem e média ponderada', statement: 'Um país possui 160 milhões de pessoas consideradas aptas a trabalhar. A tabela indica a distribuição dessas pessoas por faixa etária e o gráfico indica a porcentagem do total de pessoas dessas faixas etárias que atualmente não estão trabalhando exclusivamente devido ao coronavírus.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q11-dados-trabalho.svg', alt: 'Há 60 milhões de pessoas de 18 a 44 anos e 100 milhões com 45 anos ou mais. Não trabalham exclusivamente pelo coronavírus 1,5% do primeiro grupo e 0,5% do segundo.' }],
    statementAfter: 'De acordo com os dados, do total de pessoas com 18 anos ou mais aptas a trabalhar, não estão trabalhando exclusivamente devido ao coronavírus', afterBlockTypes: ['prose'],
    alternatives: ['1,750%.', '2,000%.', '0,875%.', '0,975%.', '0,775%.'], answer: 'C',
    why: 'São 0,015·60 + 0,005·100 = 1,4 milhão de pessoas. Em relação a 160 milhões: 1,4/160 = 0,00875 = 0,875%.',
    wrong: { 0: '1,750% é o dobro da porcentagem calculada.', 1: '2% corresponderia a 3,2 milhões, e não a 1,4 milhão.', 3: '0,975% não resulta da ponderação pelos 60 e 100 milhões.', 4: '0,775% subestima o total de 1,4 milhão de pessoas.' } }),
  q({ n: 12, subject: 'Matemática', content: 'Ângulos formados por retas paralelas', statement: 'Considere o logotipo da Famema.\n\nAdmita que esse logotipo seja feito a partir da figura a seguir, sendo r e s retas paralelas, assim como as retas t e u.', blockTypes: ['prose', 'prose'],
    visuals: [
      { file: 'p2-q12-logotipo.svg', alt: 'Logotipo da Famema, com duas formas azuis e uma linha sinuosa.' },
      { file: 'p2-q12-angulos.svg', alt: 'Construção geométrica com r paralela a s, t paralela a u e os ângulos alfa, beta e gama destacados.' },
    ],
    statementAfter: 'Se α + β + γ = 380º, então α é igual a', afterBlockTypes: ['prose'],
    alternatives: ['140º', '110º', '130º', '120º', '100º'], answer: 'B',
    why: 'Pelas relações de ângulos correspondentes, suplementares e pelo ângulo reto indicado, β + γ = 270º. Portanto, α = 380º − 270º = 110º.',
    wrong: { 0: '140º faria β + γ = 240º, incompatível com as relações da figura.', 2: '130º não satisfaz a soma com β + γ = 270º.', 3: '120º implicaria β + γ = 260º.', 4: '100º é o suplemento do valor encontrado, não α.' } }),
  q({ n: 13, subject: 'Matemática', content: 'Semelhança de triângulos em arquibancada', statement: 'A figura representa uma arquibancada com degraus de mesma altura (x metros) e mesma extensão (y metros).', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q13-arquibancada.svg', alt: 'Arquibancada com três degraus de altura x e profundidade y, medidas de 0,3 m, 0,8 m, 2,9 m e 1,1 m e linha de visada inclinada a 45 graus.' }],
    statementAfter: 'O valor de x + y será igual a', afterBlockTypes: ['prose'],
    alternatives: ['1,85 m.', '1,80 m.', '1,90 m.', '1,75 m.', '1,95 m.'], answer: 'D',
    why: 'Usando tan 45º = 1 e a semelhança entre os triângulos formados pelas linhas de visada, obtêm-se duas relações entre x e y; resolvendo-as, x + y = 1,75 m.',
    wrong: { 0: '1,85 m não satisfaz simultaneamente as relações de semelhança.', 1: '1,80 m não é a soma obtida pelas equações da figura.', 2: '1,90 m resulta de uso incorreto das medidas horizontais e verticais.', 4: '1,95 m excede o valor compatível com a inclinação de 45º.' } }),
  q({ n: 14, subject: 'Matemática', content: 'Matrizes e pontuação em torneio', difficulty: 'Difícil', statement: tex`Dois jogadores, A e B, disputaram a final de um torneio de xadrez em dois jogos. Em cada partida, se ocorresse empate, cada jogador ganharia 1 ponto, caso contrário, o vencedor ganharia 2 pontos e o perdedor perderia 1 ponto. As matrizes que indicaram a pontuação obtida por cada jogador tinham, ambas, a seguinte estrutura:

$$\begin{bmatrix}0&\text{1}^{\text{o}}\text{ jogo}\\\text{2}^{\text{o}}\text{ jogo}&0\end{bmatrix}$$

No caso do jogador A, sua matriz de pontuação foi:

$$\begin{bmatrix}0&1\\-1&0\end{bmatrix}$$

Se a matriz de pontuação do jogador B era igual à matriz resultante da multiplicação matricial

$$\begin{bmatrix}0&1\\-1&0\end{bmatrix}\cdot\begin{bmatrix}x&y\\z&w\end{bmatrix}$$

então $x+y+z+w$ é igual a`, blockTypes: ['prose', 'math', 'prose', 'math', 'prose', 'math', 'prose'],
    alternatives: ['0.', '2.', '1.', '3.', '–1.'], answer: 'E',
    why: tex`A empatou o primeiro jogo e perdeu o segundo; portanto, B empatou o primeiro e venceu o segundo, com matriz $\begin{bmatrix}0&1\\2&0\end{bmatrix}$. O produto é $\begin{bmatrix}z&w\\-x&-y\end{bmatrix}$, logo $z=0$, $w=1$, $x=-2$, $y=0$ e a soma é $\boxed{-1}$.`,
    wrong: { 0: 'A soma dos quatro valores determinados não é zero.', 1: 'O valor 2 corresponde à pontuação de uma vitória, não à soma pedida.', 2: 'Somente w vale 1; x vale −2 e os demais são nulos.', 3: 'A multiplicação e os sinais não produzem soma 3.' } }),
  q({ n: 15, subject: 'Matemática', content: 'Área de setor circular e triângulo', difficulty: 'Difícil', statement: 'A figura indica uma circunferência de centro (4, 4) e raio 4, tangente aos eixos do plano cartesiano, e uma reta que passa pela origem do sistema de eixos e pelo centro da circunferência.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q15-circunferencia.svg', alt: 'Circunferência de centro 4,4 e raio 4, reta y igual x e região laranja limitada pelo eixo y, pela reta e pelo arco da circunferência.' }],
    statementAfter: 'Sabendo que a área de um círculo é dada por πr², a área da região destacada em laranja na figura, em unidades de área do plano cartesiano, é igual a', afterBlockTypes: ['prose'],
    alternatives: ['8 – 2π.', '32 – 8π.', '12 – 2π.', '16 – 2π.', '4 – π.'], answer: 'A',
    why: 'O triângulo com vértices (0,0), (0,4) e (4,4) tem área 8. O setor retirado tem ângulo central 45º = 1/8 da volta e área (1/8)·π·4² = 2π. Logo, a região mede 8 − 2π.',
    wrong: { 1: '32 − 8π usa dimensões incompatíveis com o triângulo e o setor.', 2: 'O triângulo de referência tem área 8, não 12.', 3: '16 − 2π considera área triangular maior que a formada pelos vértices.', 4: '4 − π não corresponde à diferença entre o triângulo de área 8 e o setor de 2π.' } }),
  q({ n: 16, subject: 'Matemática', content: 'Sequências e soma de termos', statement: 'A tabela apresenta o padrão de uma sequência numérica da linha 1 até a linha x. Admita que o padrão de formação da tabela não se modifique.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q16-sequencia.svg', alt: 'Linha 1: 0,1 e 0,2; linha 2: 0,3, 0,4 e 0,5; linha 3: 0,6 a 0,9; linha 4: 1,0 a 1,4; linha x começa em 63,0 e termina em 66,5.' }],
    statementAfter: 'Sabendo que 63,0 é o primeiro número da linha x e que 66,5 é o último, x é igual a', afterBlockTypes: ['prose'],
    alternatives: ['36.', '34.', '35.', '37.', '33.'], answer: 'C',
    why: tex`A linha $x$ tem $x+1$ termos e a diferença entre o último e o primeiro é $0{,}1x$; aqui, $66{,}5-63{,}0=3{,}5=0{,}1x$, logo $\boxed{x=35}$. O valor inicial 63,0 confirma a posição na sequência.`,
    wrong: { 0: 'Na linha 36, a diferença entre extremos seria 3,6.', 1: 'Na linha 34, a diferença seria 3,4.', 3: 'Na linha 37, a diferença seria 3,7.', 4: 'Na linha 33, a diferença seria 3,3.' } }),
  q({ n: 17, subject: 'Matemática', content: 'Função quadrática e trajetória parabólica', statement: 'A figura representa, no plano cartesiano, a trajetória de uma bola que foi chutada a partir do ponto P(–5, 0), localizado no chão, e seguiu em trajetória parabólica até bater na parede, no ponto Q(0, 2). Se não houvesse parede, a bola seguiria sua trajetória até o ponto R(1, 0), no chão.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q17-parabola.svg', alt: 'Parábola que passa por P menos 5,0, Q 0,2 e R 1,0; a parede coincide com o eixo y.' }],
    statementAfter: 'Admitindo-se que a trajetória descrita pela bola é modelada pela função quadrática f(x) = ax² + bx + c, então a + b + c é igual a', afterBlockTypes: ['prose'],
    alternatives: ['0.', '1.', '0,5.', '1,5.', '–0,5.'], answer: 'A',
    why: tex`Pelas raízes, $f(x)=a(x+5)(x-1)$. Como $f(0)=2$, $a=-2/5$. Além disso, $a+b+c=f(1)$; como $x=1$ é raiz, $\boxed{a+b+c=0}$.`,
    wrong: { 1: 'f(1) não vale 1, pois R(1,0) pertence à parábola.', 2: 'A soma pedida é f(1), que é zero.', 3: 'O ponto R informa ordenada zero, não 1,5.', 4: 'O sinal não se altera: a soma é exatamente zero.' } }),
  q({ n: 18, subject: 'Matemática', content: 'Sistema linear e logarítmico', statement: tex`O sistema de equações a seguir é composto por uma equação linear e uma equação logarítmica, na base 10.

$$\begin{cases}x-y=-20\\\log(x+y)=2\end{cases}$$

Sendo $(x,y)$ a solução do sistema, o valor de $y\div x$ é igual a`, blockTypes: ['prose', 'math', 'prose'],
    alternatives: ['1.', '1,5.', '0,6.', '0,8.', '1,2.'], answer: 'B',
    why: 'Da equação logarítmica, x + y = 10² = 100. Resolvendo com x − y = −20, obtêm-se x = 40 e y = 60; portanto, y/x = 60/40 = 1,5.',
    wrong: { 0: 'x e y não são iguais, pois sua diferença é −20.', 2: '0,6 é próximo da razão inversa x/y = 2/3, mas não é y/x.', 3: '0,8 não corresponde a 60/40.', 4: '1,2 não verifica a razão entre 60 e 40.' } }),
  q({ n: 19, subject: 'Matemática', content: 'Probabilidade do evento complementar', statement: 'A figura indica as marcações na frente e no verso de três cartas:', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q19-cartas.svg', alt: 'Carta 1: F e A. Carta 2: M e E. Carta 3: M e A. Cada carta tem uma face marcada como frente e outra como verso.' }],
    statementAfter: 'Sorteando-se aleatoriamente o lado que cada carta ficará voltada para cima em uma mesa, a probabilidade de que pelo menos uma das cartas tenha a letra M voltada para cima é igual a', afterBlockTypes: ['prose'],
    alternatives: [tex`$\frac35$`, tex`$\frac23$`, tex`$\frac58$`, tex`$\frac34$`, tex`$\frac12$`], answer: 'D',
    why: 'Nenhuma M aparece somente quando a carta 2 mostra E e a carta 3 mostra A, cada uma com probabilidade 1/2. Assim, P(nenhuma M) = 1/4 e P(pelo menos uma M) = 1 − 1/4 = 3/4.',
    wrong: { 0: '3/5 não considera os oito resultados igualmente prováveis.', 1: '2/3 não corresponde ao complemento de 1/4.', 2: '5/8 subestima os casos favoráveis, que são 6 de 8.', 4: '1/2 ignora que há duas cartas com M e suas faces independentes.' } }),
  q({ n: 20, subject: 'Matemática', content: 'Volume de prisma e trigonometria', difficulty: 'Difícil', statement: 'A figura indica, em azul, um reservatório em forma de prisma construído a partir de um paralelepípedo reto-retangular, também indicado na figura.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q20-reservatorio.svg', alt: 'Prisma com altura 6 m, profundidade 5 m, segmento de 2 m e dois ângulos de 30 graus na construção a partir de um paralelepípedo.' }],
    statementAfter: 'Relembrando que seno, cosseno e tangente de 30° são iguais a 1/2, √3/2 e √3/3, respectivamente, o volume do reservatório, em m³, é igual a', afterBlockTypes: ['prose'],
    alternatives: ['60', tex`$30+90\sqrt3$`, tex`$90+90\sqrt3$`, tex`$180+60\sqrt3$`, tex`$60+90\sqrt3$`], answer: 'E',
    why: tex`A seção é um trapézio de altura 6, com bases 2 e $2+6\sqrt3$, pois $\tan30^\circ=6/(6\sqrt3)$. Sua área é $\frac{2+(2+6\sqrt3)}2\cdot6=12+18\sqrt3$. Multiplicando pela profundidade 5: $\boxed{V=60+90\sqrt3\ \mathrm{m^3}}$.`,
    wrong: { 0: '60 é apenas a parte racional do volume, sem a contribuição da região triangular.', 1: 'A parcela racional correta é 60, não 30.', 2: '90 + 90√3 supera a área da seção calculada.', 3: 'A combinação 180 + 60√3 não respeita a profundidade de 5 m.' } }),
];
