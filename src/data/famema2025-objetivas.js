import { createFamema, tex } from './famema-helpers.js';
const { q } = createFamema(2025);
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const FABULA = `Para responder às questões de 01 a 04, leia a fábula “O camelo e os troncos boiando” de La Fontaine.

Tal novidade era o Camelo,
Que o primeiro fugiu ao vê-lo;
O segundo aproximou-se; o terceiro, presto,
Pôs no Dromedário um cabresto.
Tudo se torna assim familiar com o hábito.
O que antes parecia assustador e insólito
Se acomoda à nossa visão
Quando já é repetição.
Aliás este caso do qual estamos falando
Lembra o das pessoas que, olhando
Longe no mar algo impreciso balançando,
Garantiram ter pela frente
Um navio todo imponente.
Mas momentos depois tornou-se aquilo um bote,
Ora foi balsa, ora caixote,
Sendo por fim troncos boiando.
Bem sei que a muitos, circulando,
Convém no mundo esta tirada:
De longe é alguma coisa, de perto não é nada.

(Jean de La Fontaine. Fábulas selecionadas, 2013.)`;
const FABULA_BLOCKS = ['prose', 'poem', 'source'];

const ENSAIO = `Para responder às questões de 06 a 08, leia o pequeno ensaio, intitulado “Variação sobre um tema de Diderot”, de Eduardo Giannetti.

Querem saber a história abreviada de quase todo o mal-estar na civilização? Ei-la: a evolução produziu o animal homem. No âmago desse homem, ${underline('entretanto')}, foi se instalando um inquilino altivo, exigente e dado à hipocrisia e ao autoengano: o homem civilizado. As rusgas foram crescendo, o conflito escalou, mas nenhum dos dois é forte o bastante para aniquilar o outro. E assim brotou no interior da caverna uma guerra civil que se prolonga por toda a vida.

(Eduardo Giannetti. Trópicos utópicos, 2016.)`;
const ENSAIO_BLOCKS = ['prose', 'prose', 'source'];

const POEMA = `Para responder às questões 09 e 10, leia o poema “Congresso internacional do medo”, de Carlos Drummond de Andrade.

Provisoriamente não cantaremos o amor,
que se refugiou mais abaixo dos subterrâneos.
Cantaremos o medo, que esteriliza os abraços,
não cantaremos o ódio porque esse não existe,
existe apenas o medo, nosso pai e nosso companheiro,
o medo grande dos sertões, dos mares, dos desertos,
o medo dos soldados, o medo das mães, o medo das igrejas,
cantaremos o medo dos ditadores, o medo dos democratas,
cantaremos o medo da morte e o medo de depois da morte,
depois morreremos de medo
e sobre nossos túmulos nascerão flores amarelas e medrosas.

(Carlos Drummond de Andrade. Sentimento do mundo, 1998.)`;
const POEMA_BLOCKS = ['prose', 'poem', 'source'];

export const famema2025Objetivas = [
  q({ n: 1, subject: 'Literatura', content: 'Interpretação de fábula e oposição de sentidos', statement: FABULA, blockTypes: FABULA_BLOCKS,
    statementAfter: 'Implícita à “tirada” da fábula está a seguinte contraposição:', afterBlockTypes: ['command'],
    alternatives: ['submissão x liberdade.', 'ação x reflexão.', 'constância x volubilidade.', 'aparência x essência.', 'originalidade x imitação.'], answer: 'D',
    why: 'A moral “De longe é alguma coisa, de perto não é nada” opõe a impressão produzida pela aparência à realidade ou essência das coisas.',
    wrong: { 0: 'A fábula não contrasta obediência e liberdade.', 1: 'Não se opõem agir e refletir.', 2: 'A mudança de percepção não é apresentada como volubilidade de caráter.', 4: 'Originalidade e imitação não estruturam a moral.' } }),
  q({ n: 2, subject: 'Literatura', content: 'Relações analógicas na fábula', statement: FABULA, blockTypes: FABULA_BLOCKS,
    statementAfter: 'Tendo em vista as associações estabelecidas internamente na fábula, o “Dromedário”, mencionado no quarto verso, equivaleria', afterBlockTypes: ['command'],
    alternatives: ['ao imponente navio.', 'às pessoas que observam o mar.', 'aos troncos boiando.', 'ao bote.', 'ao caixote.'], answer: 'C',
    why: 'O dromedário parecia ameaçador à distância, mas revelou-se inofensivo; ocupa, na analogia, a posição dos troncos que pareciam um navio imponente.',
    wrong: { 0: 'O navio corresponde à impressão inicial, não ao animal real.', 1: 'Os observadores correspondem aos homens que reagem ao camelo.', 3: 'O bote é apenas uma etapa intermediária da percepção equivocada.', 4: 'O caixote também é etapa da aproximação, não o termo final da analogia.' } }),
  q({ n: 3, subject: 'Português', content: 'Manifestação do narrador', statement: FABULA, blockTypes: FABULA_BLOCKS,
    statementAfter: 'O narrador manifesta-se explicitamente na fábula no seguinte trecho:', afterBlockTypes: ['command'],
    alternatives: ['“Tudo se torna assim familiar com o hábito.” (5º verso)', '“De longe é alguma coisa, de perto não é nada.” (19º verso)', '“O segundo aproximou-se; o terceiro, presto, / Pôs no Dromedário um cabresto.” (3º/4º versos)', '“Garantiram ter pela frente / Um navio todo imponente.” (12º/13º versos)', '“O que antes parecia assustador e insólito / Se acomoda à nossa visão” (6º/7º versos)'], answer: 'E',
    why: 'O possessivo “nossa” inclui o narrador e marca explicitamente sua presença no enunciado.',
    wrong: { 0: 'A generalização não contém marca pronominal explícita do narrador.', 1: 'A moral é impessoal nessa formulação.', 2: 'Os versos narram ações de terceiras pessoas.', 3: 'O trecho relata a fala dos observadores, não a voz do narrador.' } }),
  q({ n: 4, subject: 'Português', content: 'Relação sintática de consequência', statement: FABULA, blockTypes: FABULA_BLOCKS,
    statementAfter: `“Tal novidade era o Camelo, / ${underline('Que o primeiro fugiu ao vê-lo')}” (1º/2º versos)

Em relação à oração que o antecede, o verso sublinhado expressa ideia de`, afterBlockTypes: ['quote', 'command'],
    alternatives: ['condição.', 'consequência.', 'causa.', 'concessão.', 'comparação.'], answer: 'B',
    why: 'A novidade do camelo produz como resultado a fuga do primeiro homem: “que” introduz aqui uma consequência.',
    wrong: { 0: 'A fuga não é condição para a existência da novidade.', 2: 'A causa é a presença do camelo, não a fuga.', 3: 'Não há ideia contrária que deixe de impedir um fato.', 4: 'Não se estabelece comparação entre ações.' } }),
  q({ n: 5, subject: 'Português', content: 'Ambiguidade e humor em tirinha',
    statement: 'Examine a tirinha do cartunista Snelse, publicada no perfil @twonkscomic no Instagram, em 09.07.2024.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q05-tirinha.svg', alt: 'Tirinha em que a herança é uma conta com números enormes; a expressão “uma quantia muito grande” ganha sentido ambíguo.' }],
    statementAfter: 'Para obter seu efeito de humor, a tirinha mobiliza essencialmente o seguinte recurso expressivo:', afterBlockTypes: ['command'],
    alternatives: ['intertextualidade.', 'hipérbole.', 'eufemismo.', 'metalinguagem.', 'ambiguidade.'], answer: 'E',
    why: '“Uma quantia muito grande” pode significar grande valor em dinheiro ou uma conta com numerais muito extensos; o humor decorre dessa ambiguidade.',
    wrong: { 0: 'Não há retomada de outro texto específico.', 1: 'O exagero visual existe, mas o efeito central é a dupla interpretação.', 2: 'Não há suavização de expressão desagradável.', 3: 'A tirinha não discute seu próprio código ou a linguagem.' } }),
  q({ n: 6, subject: 'Literatura', content: 'Metáfora e conflito interno', statement: ENSAIO, blockTypes: ENSAIO_BLOCKS,
    statementAfter: 'No ensaio, entende-se por “guerra civil”:', afterBlockTypes: ['command'],
    alternatives: ['o conflito entre animal homem e homem civilizado.', 'o conflito entre mal-estar e bem-estar.', 'o conflito entre hipocrisia e homem civilizado.', 'o conflito entre animal e homem.', 'o conflito entre hipocrisia e autoengano.'], answer: 'A',
    why: 'A “guerra civil” é a metáfora do conflito interior entre o animal homem e o homem civilizado que coexiste no mesmo indivíduo.',
    wrong: { 1: 'O bem-estar não é apresentado como combatente.', 2: 'Hipocrisia e autoengano são atributos do homem civilizado, não lados opostos.', 3: 'A formulação genérica “animal e homem” omite os dois polos definidos no texto.', 4: 'Esses dois traços não constituem uma oposição no ensaio.' } }),
  q({ n: 7, subject: 'Português', content: 'Conjunção adversativa', statement: ENSAIO, blockTypes: ENSAIO_BLOCKS,
    statementAfter: 'No contexto em que se insere, o termo sublinhado no texto pode ser substituído, sem prejuízo para o sentido do ensaio, por:', afterBlockTypes: ['command'],
    alternatives: ['portanto.', 'além disso.', 'contudo.', 'pois.', 'por isso.'], answer: 'C',
    why: '“Entretanto” introduz oposição e pode ser substituído por “contudo”, também conjunção adversativa.',
    wrong: { 0: '“Portanto” indica conclusão.', 1: '“Além disso” acrescenta informação.', 3: '“Pois” pode indicar explicação ou causa.', 4: '“Por isso” introduz consequência.' } }),
  q({ n: 8, subject: 'Português', content: 'Voz passiva e tempo verbal', statement: ENSAIO, blockTypes: ENSAIO_BLOCKS,
    statementAfter: '“Ei-la: a evolução produziu o animal homem.”\n\nAo se transpor esse trecho para a voz passiva, a forma verbal resultante será:', afterBlockTypes: ['quote', 'command'],
    alternatives: ['teria produzido.', 'foi produzido.', 'seria produzido.', 'fora produzido.', 'tinha produzido.'], answer: 'B',
    why: 'Na voz passiva analítica, conserva-se o pretérito perfeito: “O animal homem foi produzido pela evolução”.',
    wrong: { 0: '“Teria” é futuro do pretérito e não corresponde a “produziu”.', 2: '“Seria” também é futuro do pretérito.', 3: '“Fora produzido” marca pretérito mais-que-perfeito.', 4: '“Tinha produzido” é voz ativa e tempo mais-que-perfeito.' } }),
  q({ n: 9, subject: 'Literatura', content: 'Poesia social de Drummond', statement: POEMA, blockTypes: POEMA_BLOCKS,
    statementAfter: 'Esse poema de Drummond exemplifica sua poesia de cunho', afterBlockTypes: ['command'],
    alternatives: ['lírico-amoroso.', 'místico-religioso.', 'satírico.', 'nostálgico.', 'social.'], answer: 'E',
    why: 'O medo coletivo, os ditadores, os democratas e as tensões políticas situam o poema na vertente social de Drummond.',
    wrong: { 0: 'O amor é negado provisoriamente, não constitui o eixo do poema.', 1: 'Não há busca mística ou religiosa.', 2: 'O tom predominante não é satírico.', 3: 'Não há evocação nostálgica do passado.' } }),
  q({ n: 10, subject: 'Literatura', content: 'Modernismo e verso livre', statement: POEMA, blockTypes: POEMA_BLOCKS,
    statementAfter: 'Uma característica que afasta esse poema da estética parnasiana, ainda em voga no início do século XX no Brasil, é', afterBlockTypes: ['command'],
    alternatives: ['o uso de vocabulário rebuscado.', 'a ocorrência de rimas raras.', 'o emprego do verso livre.', 'a métrica rigorosa.', 'a contenção lírica.'], answer: 'C',
    why: 'Os versos não seguem metrificação nem esquema rígido de rimas; o verso livre rompe com o formalismo parnasiano.',
    wrong: { 0: 'O vocabulário rebuscado aproximaria o texto do Parnasianismo.', 1: 'Rimas raras não são o traço estruturante observado.', 3: 'A métrica rigorosa é própria da estética parnasiana.', 4: 'A contenção lírica também não constitui a ruptura formal pedida.' } }),
  q({ n: 11, subject: 'Matemática', content: 'Dízimas periódicas e algarismos',
    statement: 'A tabela apresenta três frações e as doze primeiras casas decimais correspondentes às representações decimais dessas frações:', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q11-dizimas.svg', alt: 'Frações 25/99, 6/7 e 41/333 com as dízimas 0,252525…, 0,857142857142… e 0,123123….' }],
    statementAfter: 'Para as três frações apresentadas, a primeira casa decimal é, respectivamente, 2, 8 e 1; a segunda casa decimal é, respectivamente, 5, 5 e 2; e considere que a centésima casa decimal seja representada, respectivamente, pelas letras x, y e z. O valor de x + y + z é igual a', afterBlockTypes: ['command'],
    alternatives: ['10.', '8.', '11.', '7.', '12.'], answer: 'D',
    why: 'Os períodos têm 2, 6 e 3 algarismos. Como 100 deixa restos 0, 4 e 1 nas divisões por esses períodos, x = 5, y = 1 e z = 1; a soma é 7.',
    wrong: { 0: 'Esse valor não corresponde aos três algarismos da centésima casa.', 1: 'A soma correta é 7, não 8.', 2: 'Há erro na identificação dos restos ou dos períodos.', 4: 'Nenhum dos algarismos permite obter soma 12.' } }),
  q({ n: 12, subject: 'Matemática', content: 'Contagem com restrições',
    statement: 'Uma empresa disponibiliza a seus 8 funcionários duas opções de horário de almoço, um que se inicia às 12h e outro às 13h, de maneira que, em cada horário, devem almoçar 4 funcionários, que podem decidir entre si a distribuição de funcionários por horário. Dois funcionários preferem almoçar às 12h, três funcionários preferem almoçar às 13h e os outros três funcionários aceitam almoçar em qualquer horário. O número de maneiras distintas de esses funcionários se distribuírem nessas duas opções de horário de almoço, de acordo com as preferências manifestadas, é:', blockTypes: ['prose'],
    alternatives: ['12.', '3.', '6.', '2.', '24.'], answer: 'B',
    why: 'Os dois horários já têm 2 e 3 preferidos. Dos três funcionários flexíveis, basta escolher os dois que completam o grupo das 12h; o restante vai às 13h. Há C(3,2) = 3 maneiras.',
    wrong: { 0: 'Não se deve multiplicar por permutações internas dos horários.', 2: 'A ordem dos funcionários dentro de cada grupo não cria distribuição distinta.', 3: 'Existem três escolhas possíveis, não duas.', 4: 'Esse valor conta ordenações indevidas.' } }),
  q({ n: 13, subject: 'Matemática', content: 'Sistema linear e problema financeiro',
    statement: 'Cássia é consultora e visita cada empresa que atende por um dia ou por dois dias. Quando faz a visita de dois dias, Cássia recebe R$ 400,00 por dia e quando faz a visita de um dia, ela recebe R$ 450,00. Em setembro, Cássia trabalhou por 18 dias, tendo recebido o total de R$ 7.400,00. O número de empresas que Cássia visitou em setembro foi', blockTypes: ['prose'],
    alternatives: ['7.', '8.', '9.', '10.', '11.'], answer: 'E',
    why: 'Se u e d são os números de visitas de um e dois dias, u + 2d = 18 e 450u + 800d = 7400. Resolvendo, u = 4 e d = 7; portanto, u + d = 11.',
    wrong: { 0: 'Sete é apenas o número de visitas de dois dias.', 1: 'Oito não satisfaz simultaneamente os dias e o total recebido.', 2: 'Nove empresas não produzem os valores informados.', 3: 'Dez empresas não satisfazem o sistema.' } }),
  q({ n: 14, subject: 'Matemática', content: 'Geometria analítica e equação da reta',
    statement: tex`No plano cartesiano, a partir de $A(0,0)$ e $B(4,0)$ foi construído um quadrado $ABCD$, um quadrado $BDFE$ e um quadrado $BFGH$.`, blockTypes: ['prose'],
    visuals: [{ file: 'p2-q14-quadrados.svg', alt: 'Três quadrados encadeados no plano cartesiano, com os vértices A, B, C, D, E, F, G e H e a reta EG.' }],
    statementAfter: tex`A equação da reta $EG$ é`, afterBlockTypes: ['command'],
    alternatives: [tex`$x+3y-20=0$`, tex`$x+4y-16=0$`, tex`$x+4y-20=0$`, tex`$x+3y-16=0$`, tex`$x+3y-24=0$`], answer: 'A',
    why: 'Pela construção dos quadrados, E = (8,4) e G = (−4,8). O coeficiente angular é −1/3, e y − 4 = −(x − 8)/3, ou x + 3y − 20 = 0.',
    wrong: { 1: 'O coeficiente de y não é 4 e a constante não corresponde aos pontos.', 2: 'Embora a constante seja 20, o coeficiente angular está incorreto.', 3: 'A reta correta tem termo independente −20.', 4: 'A substituição de E ou G não satisfaz essa equação.' } }),
  q({ n: 15, subject: 'Matemática', content: 'Trigonometria e área de triângulo',
    statement: 'No plano, um lado de um retângulo está sobre a reta r. Um ponto P, sobre a reta r, é tal que o segmento de reta que liga P a um dos vértices do retângulo forma, com um de seus lados, um ângulo α, conforme mostra a figura.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q15-retangulo.png', alt: 'Retângulo de altura 6 cm, ponto P a 6 cm de sua base e triângulo hachurado acima da diagonal.' }],
    statementAfter: tex`Sabendo que $\operatorname{tg}\alpha=\frac13$, a área do triângulo hachurado na figura é`, afterBlockTypes: ['command'],
    alternatives: [tex`$30\ \mathrm{cm^2}$.`, tex`$21\ \mathrm{cm^2}$.`, tex`$24\ \mathrm{cm^2}$.`, tex`$27\ \mathrm{cm^2}$.`, tex`$18\ \mathrm{cm^2}$.`], answer: 'C',
    why: 'Pela semelhança e pela tangente, os catetos do triângulo hachurado medem 4 cm e 12 cm. Sua área é (4 × 12)/2 = 24 cm².',
    wrong: { 0: 'Trinta resulta de dimensões incompatíveis com a tangente fornecida.', 1: 'Vinte e um não corresponde aos catetos determinados.', 3: 'Vinte e sete não satisfaz as relações de semelhança.', 4: 'Dezoito usa medidas diferentes das obtidas no triângulo.' } }),
  q({ n: 16, subject: 'Matemática', content: 'Volume de paralelepípedos',
    statement: 'Um sólido foi construído a partir de quatro paralelepípedos reto-retângulos, sólidos e idênticos, com alguns vértices em comum e algumas faces sobrepostas, conforme mostra a figura.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q16-paralelepipedos.svg', alt: 'Quatro paralelepípedos idênticos sobrepostos, cada um com dimensões 4 m, 2 m e 6 m.' }],
    statementAfter: 'O volume ocupado por esses 4 paralelepípedos é igual a', afterBlockTypes: ['command'],
    alternatives: [tex`$200\ \mathrm{m^3}$.`, tex`$208\ \mathrm{m^3}$.`, tex`$216\ \mathrm{m^3}$.`, tex`$192\ \mathrm{m^3}$.`, tex`$180\ \mathrm{m^3}$.`], answer: 'D',
    why: 'Cada paralelepípedo tem dimensões 4 m, 2 m e 6 m, logo volume 48 m³. Para quatro sólidos, V = 4 × 48 = 192 m³.',
    wrong: { 0: 'Duzentos não é múltiplo do volume unitário de 48 m³.', 1: 'Duzentos e oito também não corresponde a quatro volumes iguais.', 2: 'Esse resultado emprega dimensões incorretas.', 4: 'Cento e oitenta não corresponde ao produto das três dimensões.' } }),
  q({ n: 17, subject: 'Matemática', content: 'Probabilidade e combinações',
    statement: 'Seis cartas foram numeradas de 1 a 6, cada carta com um único número e distinto dos números das outras cartas. Seis rapazes, entre eles André, Beto e Carlos, receberam cada um e de forma aleatória uma dessas cartas. A probabilidade de André, Beto e Carlos terem recebido cartas cujos números, dispostos em ordem crescente, são consecutivos é:', blockTypes: ['prose'],
    alternatives: [tex`$\frac14$`, tex`$\frac15$`, tex`$\frac13$`, tex`$\frac16$`, tex`$\frac12$`], answer: 'B',
    why: 'Há C(6,3) = 20 conjuntos possíveis de três cartas. Apenas {1,2,3}, {2,3,4}, {3,4,5} e {4,5,6} têm números consecutivos; a probabilidade é 4/20 = 1/5.',
    wrong: { 0: 'Um quarto resultaria de cinco casos favoráveis, mas há quatro.', 2: 'Um terço superestima o número de trios consecutivos.', 3: 'Um sexto não corresponde à razão 4/20.', 4: 'Metade implicaria dez trios favoráveis.' } }),
  q({ n: 18, subject: 'Matemática', content: 'Áreas de retângulo e triângulo',
    statement: tex`Um retângulo $ABCD$ foi dividido em quatro quadrados, conforme mostra a figura, em que o ponto $F$ é vértice comum a dois desses quadrados e a área do triângulo $ABF$ é $80\ \mathrm{cm^2}$.`, blockTypes: ['prose'],
    visuals: [{ file: 'p2-q18-retangulo.svg', alt: 'Retângulo dividido em quatro quadrados e triângulo ABF hachurado.' }],
    statementAfter: tex`A área do retângulo $ABCD$ é`, afterBlockTypes: ['command'],
    alternatives: [tex`$270\ \mathrm{cm^2}$.`, tex`$300\ \mathrm{cm^2}$.`, tex`$240\ \mathrm{cm^2}$.`, tex`$330\ \mathrm{cm^2}$.`, tex`$360\ \mathrm{cm^2}$.`], answer: 'C',
    why: 'Se x é o lado do menor quadrado, a base AB mede 5x e a altura do triângulo é 2x. Assim, 5x² = 80 e x² = 16. O retângulo tem área 5x · 3x = 15x² = 240 cm².',
    wrong: { 0: 'Duzentos e setenta não é 15 vezes o valor encontrado para x².', 1: 'Trezentos corresponderia a x² = 20, incompatível com a área do triângulo.', 3: 'Trezentos e trinta não satisfaz a relação de áreas.', 4: 'Trezentos e sessenta corresponderia a x² = 24.' } }),
  q({ n: 19, subject: 'Matemática', content: 'Média aritmética e equação',
    statement: 'Fernanda faz parte de um grupo de 21 pessoas, sendo que ela tem 60 anos de idade e as demais pessoas têm menos de 60 anos. A média das idades dessas 21 pessoas é 1,5 ano a mais do que a média das idades das 20 pessoas mais novas. Nessas condições, a soma das idades das 21 pessoas do grupo é igual a', blockTypes: ['prose'],
    alternatives: ['567 anos.', '609 anos.', '630 anos.', '546 anos.', '588 anos.'], answer: 'C',
    why: 'Se S é a soma das 20 idades menores, (S + 60)/21 = S/20 + 1,5. A equação fornece S = 570; logo, a soma total é 570 + 60 = 630 anos.',
    wrong: { 0: 'Quinhentos e sessenta e sete não satisfaz a diferença de 1,5 ano entre as médias.', 1: 'Seiscentos e nove não resulta da equação das médias.', 3: 'Quinhentos e quarenta e seis é inferior à soma das 20 idades obtida.', 4: 'Quinhentos e oitenta e oito não verifica a equação.' } }),
  q({ n: 20, subject: 'Matemática', content: 'Funções afim e quadrática',
    statement: tex`Dadas as funções reais $f(x)=3x-5$ e $g(x)=2x^2-px+p$, em que $p$ é uma constante real, sabe-se que $f(2)=g(2)$. O valor de $g(p-2)$ é igual a`, blockTypes: ['prose'],
    alternatives: ['22.', '2.', '11.', '1.', '33.'], answer: 'A',
    why: 'Como f(2) = 1 e g(2) = 8 − p, temos p = 7. Assim, g(x) = 2x² − 7x + 7 e g(p − 2) = g(5) = 50 − 35 + 7 = 22.',
    wrong: { 1: 'Dois não é o valor de g(5) para p = 7.', 2: 'Onze resulta de substituição ou cálculo incorreto.', 3: 'Um é f(2), não o valor pedido.', 4: 'Trinta e três não satisfaz a função determinada.' } }),
];
