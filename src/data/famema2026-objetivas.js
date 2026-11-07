import { createFamema, tex } from './famema-helpers.js';
const { q } = createFamema(2026);
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const TIRINHA = 'Para responder às questões de 01 e 02, examine a tirinha do cartunista Caco Galhardo.';
const TIRINHA_VISUAL = [{ file: 'p2-q01-tirinha.svg', alt: 'Tirinha Bicudinho: Valter chama o tio-avô morto de velhaco, mas, ao saber que herdou uma mansão em Roma, diz que ele era um grande homem.' }];

const CRONICA = `Leia a crônica “Banco barroco”, de Carlos Drummond de Andrade, para responder às questões de 03 a 09.

1 — Quer comprar o meu banco? Ele não está à venda.
Falava com superioridade de banqueiro que se sabe forte na praça, capaz de resistir à pressão de grupos econômicos poderosos. Tornou-se arrogante:
— Não vendo ele de jeito nenhum. Já recusei muitas propostas. Por que havia de vender? Gosto dele, não vai mudar de proprietário enquanto eu for vivo.
— Perdão, eu não queria comprar.
5 — Queria então o quê?
— Queria permissão para ver. Estou estudando mobiliário barroco, e soube que o senhor tem em casa uma peça valiosa.
— Valiosa? Pra mim ele não pode ser avaliado em cruzeiros. Nem em dólar, que aliás hoje não é mais lá essas coisas. O senhor quer ver apenas?
— Ver e, com sua licença, fotografar.
— Ah, fotografar pra quê? Pra botar no jornal?
10 — Não trabalho em jornal.
— Então, trabalha pro governo, já vi tudo. Vem ver o meu banco, tira retrato, faz relatório, depois, pimba: o governo desapropria o meu banco por essa tal de utilidade pública. Muito bonito.
— O senhor está completamente enganado. Não sou funcionário público, sou estudante e trabalho no escritório da Light¹. Olhe aqui as minhas carteiras.
— Carteiras? Carteira não prova nada.
— Bem, se não acredita…
15 — Prefiro acreditar na sua cara, que me parece de gente de bem. Pode entrar.
A salinha era pobre, só o banco impunha sua classe, misturado a trastes sem estilo.
— Século XVII, no duro. Joia.
— Eu sei, eu conheço o que é meu.
— O senhor permite que eu tome as medidas?
20 — Pra que tirar medida? Não chega tirar retrato?
— Para documentar bem a peça. Vou fazer um sucesso danado lá na Escola, com o trabalho sobre este banco.
A desconfiança voltou a acinzentar os olhos do dono:
— Sei não. Este seu interesse pelo meu banco…
— O senhor está pensando que eu vim a mando de algum antiquário? Dou minha palavra de honra que faço uma pesquisa escolar.
25 — Bom, pode tirar as medidas.
O rapaz aproximou-se, alisou o couro lavrado, com carinho. Banco de igreja nordestina, jacarandá venerando, oito pés retorcidos, duas traves torneadas, como é que um tesouro desses foi parar naquela casinha vulgar de Madureira?
— Vou dar ao senhor cópias das fotos.
— Não carece, moço. Prefiro olhar pro meu banco do que olhar pro retrato dele.
— O senhor… posso saber como essa coisa linda veio ter às suas mãos?
30 — Olha só a curiosidade dele. Eu não falei? Agora tem fiscalização de móveis na casa da gente?
— Não precisa responder, é claro. Está se vendo que isto é um bem de família, o senhor herdou de seu pai.
— E meu pai de meu avô. Meu avô do pai dele, ou da mãe, sei lá. Negócio muito do antigório.
— Mas este banco não é do tempo do seu bisavô. É muito mais antigo.
— Como é que eu posso saber quem foi a primeira pessoa da minha família que possuiu este banco? Não sou adivinhão.
35 — Bem, ele saiu duma igreja.
— Isso eu sei.
— Não estou duvidando de sua família, claro. Absolutamente. Mas seus pais não lhe contaram nada, nada, não lhe falaram de uma tradição da família em torno deste banco?
Ficou pensativo, coçando a testa.
— Parece que tinha um padre…
40 — Lógico que tinha um padre.
— Vou confiar no senhor. Negócio perdido na fumaceira do tempo, né? a gente pode contar.
— Isso.
— Uma dona da nossa família era casada com ele. Naquela base, entende? O padre morreu, a comadre guardou o banco de lembrança. O senhor vê que este banco é sagrado. Não vendo ele pra Onassis² nenhum. Ninguém tem o direito de sentar nele. Nem eu. Sou pobre mas sustento a honra do passado. Agora que já sabe tudo, o senhor aceita uma xicra de café coado na hora?

(Carlos Drummond de Andrade. 70 historinhas, 2016.)

1 Light: antiga companhia de energia elétrica do Rio de Janeiro.
2 Onassis: Aristóteles Onassis (1906-1975), antigo empresário rico e famoso.`;
const CRONICA_BLOCKS = ['prose', 'prose', 'source', 'note'];
const cronica = (statementAfter, extra = {}) => ({ statement: CRONICA, blockTypes: CRONICA_BLOCKS, statementAfter, afterBlockTypes: ['command'], works: ['Banco barroco', '70 historinhas'], ...extra });

export const famema2026Objetivas = [
  q({ n: 1, subject: 'Português', content: 'Inferência de traço de personagem em tirinha', statement: TIRINHA, blockTypes: ['prose'], visuals: TIRINHA_VISUAL,
    statementAfter: 'A tirinha permite caracterizar Valter, o personagem de camisa amarela, como', afterBlockTypes: ['command'],
    alternatives: ['distraído.', 'dissimulado.', 'pedante.', 'compassivo.', 'arrogante.'], answer: 'B',
    why: 'Valter primeiro chama o parente morto de “velhaco”; depois de saber que receberá uma mansão, passa a elogiá-lo. A mudança oportunista de discurso revela dissimulação.',
    wrong: { 0: 'A mudança de avaliação não decorre de falta de atenção.', 2: 'Valter não procura exibir erudição ou conhecimento.', 3: 'A compaixão inicial é desmentida pelo insulto e pelo interesse na herança.', 4: 'O traço central é a falsidade interessada, não a soberba.' } }),
  q({ n: 2, subject: 'Português', content: 'Referência de pronome relativo', statement: TIRINHA, blockTypes: ['prose'], visuals: TIRINHA_VISUAL,
    statementAfter: 'O pronome relativo que consta da tirinha retoma o seguinte termo:', afterBlockTypes: ['command'],
    alternatives: ['“Europa”.', '“tio-avô”.', '“velhaco”.', '“mansão”.', '“homem”.'], answer: 'B',
    why: 'Em “Seu tio-avô que mora na Europa morreu”, o pronome relativo “que” retoma “tio-avô”, núcleo do antecedente.',
    wrong: { 0: '“Europa” complementa o verbo morar e não é o antecedente de que.', 2: '“Velhaco” aparece em outro quadrinho e não antecede o pronome.', 3: '“Mansão” surge apenas na fala posterior.', 4: '“Homem” integra a última fala, não a oração com o pronome relativo.' } }),
  q({ n: 3, subject: 'Português', content: 'Ambiguidade lexical e desambiguação', ...cronica('Na construção de sua crônica, Drummond explora inicialmente a ambiguidade da palavra “banco”. Tal ambiguidade apenas será desfeita a partir da seguinte frase:'),
    alternatives: ['“Gosto dele, não vai mudar de proprietário enquanto eu for vivo” (3º parágrafo).', '“Falava com superioridade de banqueiro que se sabe forte na praça” (2º parágrafo).', '“Estou estudando mobiliário barroco” (6º parágrafo).', '“Não vendo ele de jeito nenhum” (3º parágrafo).', '“Pra mim ele não pode ser avaliado em cruzeiros” (7º parágrafo).'], answer: 'C',
    why: '“Mobiliário barroco” identifica banco como peça de mobiliário, afastando o sentido de instituição financeira explorado no início.',
    wrong: { 0: 'A frase ainda admite tanto a venda de um banco financeiro quanto a de um móvel.', 1: 'A referência a banqueiro reforça a ambiguidade inicial.', 3: 'A recusa de venda não define o sentido do substantivo.', 4: 'A avaliação em dinheiro ainda não esclarece a natureza do objeto.' } }),
  q({ n: 4, subject: 'Literatura', content: 'Inferência a partir do desfecho da crônica', ...cronica('Depreende-se do desfecho da crônica que a posse do banco pela família do atual proprietário remonta a'),
    alternatives: ['um caso de infidelidade conjugal.', 'um casamento arranjado.', 'uma relação afetiva por interesse.', 'um casamento efêmero.', 'uma relação afetiva estigmatizada.'], answer: 'E',
    why: 'A antepassada teria sido “casada” com um padre, “naquela base”. A relação, contrária ao celibato clerical, era socialmente estigmatizada.',
    wrong: { 0: 'O texto não informa que algum dos dois mantivesse outro casamento.', 1: 'Não há indício de arranjo familiar ou conveniência econômica.', 2: 'O interesse material não é apresentado como motivo da relação.', 3: 'A duração da união não é o foco, e “casamento” é usado em sentido informal.' } }),
  q({ n: 5, subject: 'Português', content: 'Linguagem coloquial na fala do estudante', ...cronica('Diferentemente do proprietário do banco, o estudante emprega apenas pontualmente expressões próprias da linguagem coloquial, a exemplo do que se verifica em:'),
    alternatives: ['“— Para documentar bem a peça. Vou fazer um sucesso danado lá na Escola, com o trabalho sobre este banco.” (21º parágrafo)', '“— Queria permissão para ver. Estou estudando mobiliário barroco, e soube que o senhor tem em casa uma peça valiosa.” (6º parágrafo)', '“— O senhor está completamente enganado. Não sou funcionário público, sou estudante e trabalho no escritório da Light.” (12º parágrafo)', '“— O senhor está pensando que eu vim a mando de algum antiquário? Dou minha palavra de honra que faço uma pesquisa escolar.” (24º parágrafo)', '“— Mas este banco não é do tempo do seu bisavô. É muito mais antigo.” (33º parágrafo)'], answer: 'A',
    why: '“Vou fazer um sucesso danado” usa “danado” como intensificador coloquial e uma construção informal para expressar expectativa de grande sucesso.',
    wrong: { 1: 'A fala sobre mobiliário barroco mantém registro formal.', 2: 'A explicação sobre o trabalho não apresenta a marca coloquial destacada.', 3: '“Dou minha palavra de honra” é fórmula mais solene que coloquial.', 4: 'A correção histórica é expressa sem gíria ou informalidade.' } }),
  q({ n: 6, subject: 'Português', content: 'Antítese', ...cronica('A figura de linguagem denominada antítese é explorada no seguinte trecho:'),
    alternatives: ['“Pra mim ele não pode ser avaliado em cruzeiros.” (7º parágrafo)', '“Vou fazer um sucesso danado lá na Escola, com o trabalho sobre este banco.” (21º parágrafo)', '“A salinha era pobre, só o banco impunha sua classe, misturado a trastes sem estilo.” (16º parágrafo)', '“Estou estudando mobiliário barroco, e soube que o senhor tem em casa uma peça valiosa.” (6º parágrafo)', '“Está se vendo que isto é um bem de família, o senhor herdou de seu pai.” (31º parágrafo)'], answer: 'C',
    why: 'A antítese resulta da oposição entre a pobreza da salinha e dos trastes sem estilo e a classe ou o valor do banco.',
    wrong: { 0: 'A inestimabilidade do banco não estabelece dois termos opostos.', 1: 'O intensificador coloquial não configura antítese.', 3: 'A descrição da pesquisa não aproxima sentidos contrários.', 4: 'A herança de família não apresenta oposição semântica.' } }),
  q({ n: 7, subject: 'Português', content: 'Discurso indireto livre', ...cronica('A voz de um dos personagens mescla-se à voz do cronista, configurando o que se convencionou chamar de discurso indireto livre em:'),
    alternatives: ['“— Como é que eu posso saber quem foi a primeira pessoa da minha família que possuiu este banco?” (34º parágrafo)', '“Falava com superioridade de banqueiro que se sabe forte na praça, capaz de resistir à pressão de grupos econômicos poderosos.” (2º parágrafo)', '“A desconfiança voltou a acinzentar os olhos do dono: — Sei não. Este seu interesse pelo meu banco…” (22º/23º parágrafos)', '“Banco de igreja nordestina, jacarandá venerando, oito pés retorcidos, duas traves torneadas, como é que um tesouro desses foi parar naquela casinha vulgar de Madureira?” (26º parágrafo)', '“— Vou confiar no senhor. Negócio perdido na fumaceira do tempo, né? a gente pode contar.” (41º parágrafo)'], answer: 'D',
    why: 'A narração em terceira pessoa incorpora, sem verbo de enunciação ou travessão, a pergunta e a admiração do estudante: narrador e personagem têm suas vozes mescladas.',
    wrong: { 0: 'O travessão e a primeira pessoa marcam discurso direto.', 1: 'O trecho apresenta a voz do narrador, sem inserção livre da fala de uma personagem.', 2: 'A fala do proprietário é introduzida explicitamente por travessão.', 4: 'Há discurso direto do proprietário.' } }),
  q({ n: 8, subject: 'Português', content: 'Oração subordinada adverbial temporal', ...cronica(`“Gosto dele, não vai mudar de proprietário ${underline('enquanto eu for vivo')}.” (3º parágrafo)

Em relação à oração que a antecede, a oração sublinhada expressa ideia de`, { afterBlockTypes: ['quote', 'command'] }),
    alternatives: ['finalidade.', 'tempo.', 'consequência.', 'condição.', 'causa.'], answer: 'B',
    why: '“Enquanto” equivale a “durante o tempo em que” e introduz uma circunstância temporal.',
    wrong: { 0: 'A oração não indica objetivo ou finalidade.', 2: 'Ela não apresenta um resultado da oração anterior.', 3: 'Não se trata de condição para a permanência do proprietário, mas de duração.', 4: 'A oração não expressa a causa de o banco não mudar de dono.' } }),
  q({ n: 9, subject: 'Português', content: 'Formação de palavras por prefixação', ...cronica('Uma palavra formada com prefixo que expressa negação ocorre no seguinte trecho:'),
    alternatives: ['“O senhor está completamente enganado” (12º parágrafo).', '“capaz de resistir à pressão” (2º parágrafo).', '“Não vendo ele de jeito nenhum” (3º parágrafo).', '“Já recusei muitas propostas” (3º parágrafo).', '“o governo desapropria o meu banco” (11º parágrafo).'], answer: 'E',
    why: 'Em “desapropria”, o prefixo “des-” acrescenta ideia de reversão ou negação à base “apropria”.',
    wrong: { 0: '“Enganado” não apresenta, nesse contexto, prefixo de negação.', 1: '“Resistir” não contém o prefixo negativo solicitado.', 2: 'A negação é feita pelo advérbio “não”, não por um prefixo.', 3: '“Recusei” não corresponde à formação prefixal negativa pedida.' } }),
  q({ n: 10, subject: 'Literatura', content: 'Características do Romantismo',
    statement: `O traço marcante dessa estética é o primado da emoção e a aparente rejeição do racionalismo que assinalara o neo-classicismo. Paralelamente a este traço, tal estética preza a expressão espontânea em plena liberdade, fora da regras de construção literária. Todas estas características vão confluir no subjetivismo (em oposição ao objetivismo neoclássico) e no primado da imaginação como fonte criadora principal.

(Magaly Trindade Gonçalves et al (orgs.). Antologia comentada de Literatura Brasileira, 2006. Adaptado.)`, blockTypes: ['prose', 'source'], works: ['Antologia comentada de Literatura Brasileira'],
    statementAfter: 'O objeto do texto é a estética', afterBlockTypes: ['command'],
    alternatives: ['romântica.', 'árcade.', 'naturalista.', 'barroca.', 'parnasiana.'], answer: 'A',
    why: 'Emoção, liberdade criativa, subjetivismo e imaginação são traços centrais do Romantismo, em oposição ao racionalismo neoclássico.',
    wrong: { 1: 'O Arcadismo valoriza justamente o racionalismo neoclássico rejeitado no texto.', 2: 'O Naturalismo privilegia observação objetiva e determinações científicas.', 3: 'O Barroco não é definido por esse conjunto de subjetivismo e rejeição ao neoclassicismo.', 4: 'O Parnasianismo valoriza forma, contenção e objetividade.' } }),
  q({ n: 11, subject: 'Matemática', content: 'Análise combinatória com dois casos',
    statement: 'Em determinado dia, Verônica e Vanessa visitarão um total de 9 lojas e escolherão quais lojas cada uma delas irá visitar, de maneira que cada loja seja visitada por apenas uma delas. Uma das lojas está localizada perto da casa de Verônica; por isso, se, na divisão das lojas a serem visitadas, Verônica for visitar a loja que fica próxima à sua casa, ela visitará 6 lojas, e Vanessa visitará as outras 3 lojas. No entanto, se, nessa divisão, Verônica não for visitar a loja que está localizada perto de sua casa, Vanessa visitará 5 lojas e Verônica visitará as outras 4 lojas. O número de maneiras distintas de Verônica e Vanessa escolherem as lojas que cada uma irá visitar é', blockTypes: ['prose'],
    alternatives: ['135.', '108.', '117.', '144.', '126.'], answer: 'E',
    why: tex`Se a loja próxima for de Verônica, escolhem-se suas outras 5 entre as 8 restantes: $\binom85=56$. Se não for, Vanessa fica com ela e escolhe mais 4 das 8: $\binom84=70$. Os casos são mutuamente exclusivos, totalizando $56+70=\boxed{126}$.`,
    wrong: { 0: 'Esse valor não corresponde à soma dos dois casos disjuntos.', 1: 'Não se deve contar ordenações das visitas nem multiplicar indevidamente os casos.', 2: 'O cálculo correto é 56 + 70, não 117.', 3: 'Esse resultado usa uma contagem diferente das combinações exigidas.' } }),
  q({ n: 12, subject: 'Matemática', content: 'Aumentos e descontos percentuais',
    statement: 'Em certa cidade, o número total de matrículas no Ensino Fundamental (EF) e no Ensino Médio (EM) aumentou 2% de 2024 para 2025, sendo que, nesse período, o número de matrículas no EF aumentou em 5% e o número de matrículas no EM diminuiu em 4%. Nessa cidade, em 2025, havia 420 alunos matriculados no EF. Nessas condições, o número de alunos matriculados no EM em 2025 foi', blockTypes: ['prose'],
    alternatives: ['288.', '336.', '240.', '192.', '144.'], answer: 'D',
    why: tex`Em 2024, o EF tinha $420/1{,}05=400$ alunos. Se $m$ era o EM, $$(400+m)1{,}02=420+0{,}96m.$$ Assim, $0{,}06m=12$, $m=200$ e, em 2025, o EM tinha $0{,}96\cdot200=\boxed{192}$ alunos.`,
    wrong: { 0: 'Esse valor não satisfaz o aumento total de 2% nem a redução de 4% no EM.', 1: 'O número obtido para o EM em 2024 foi 200, e 336 não decorre dele por redução de 4%.', 2: 'O cálculo exige aplicar 0,96 a 200, resultando 192.', 4: 'Esse valor subestima as matrículas do EM.' } }),
  q({ n: 13, subject: 'Matemática', content: 'Bissetriz, trigonometria e área triangular',
    statement: 'Sobre o cateto BC do triângulo retângulo ABC está o ponto D, tal que AD é bissetriz do ângulo Â, conforme mostra a figura.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q13-triangulo.svg', alt: 'Triângulo retângulo ABC com AC = 12 cm, AD = 4√10 cm, bissetriz AD dividindo o ângulo A em dois ângulos α.' }],
    statementAfter: tex`Sabendo que $\operatorname{tg}(2\alpha)=\frac34$, a área do triângulo ABD é`, afterBlockTypes: ['command'],
    alternatives: [tex`$36\ \mathrm{cm^2}$.`, tex`$48\ \mathrm{cm^2}$.`, tex`$30\ \mathrm{cm^2}$.`, tex`$42\ \mathrm{cm^2}$.`, tex`$24\ \mathrm{cm^2}$.`], answer: 'C',
    why: tex`No triângulo ABC, $BC/AC=\operatorname{tg}(2\alpha)=3/4$, logo $BC=9$ e $AB=15$. Como $\cos(2\alpha)=AC/AB=4/5$, temos $1-2\operatorname{sen}^2\alpha=4/5$, de onde $\operatorname{sen}\alpha=\sqrt{10}/10$. Portanto, $$[ABD]=\frac{AD\cdot AB\cdot\operatorname{sen}\alpha}{2}=\frac{4\sqrt{10}\cdot15\cdot(\sqrt{10}/10)}2=\boxed{30\ \mathrm{cm^2}}.$$`,
    wrong: { 0: 'Esse valor não corresponde ao produto AD · AB · sen α / 2.', 1: 'Quarenta e oito é a área de ABC, não a de ABD.', 3: 'O uso correto das medidas fornece 30 cm².', 4: 'Esse resultado não utiliza corretamente a bissetriz e a tangente fornecida.' } }),
  q({ n: 14, subject: 'Matemática', content: 'Razões e sistema de equações',
    statement: tex`Marta e Érica jogam em times de futebol diferentes e são as capitãs de seus respectivos times. No campeonato passado, o total de gols marcados pelas jogadoras dos times dessas duas capitãs, incluindo os gols marcados pelas próprias capitãs, foi igual a 81. Considerando o time de Marta, a razão entre o número de gols que ela fez e o número de gols marcados pelas demais jogadoras de seu time foi igual a $\frac13$. Considerando o time de Érica, a razão entre o número de gols que ela fez e o número de gols marcados pelas demais jogadoras de seu time foi igual a $\frac25$. Sabendo que Marta e Érica, juntas, marcaram um total de 22 gols no campeonato passado, o total de gols marcados por Marta foi`, blockTypes: ['prose'],
    alternatives: ['8.', '9.', '11.', '14.', '16.'], answer: 'A',
    why: tex`Se Marta fez $M$ gols e Érica $E$, então $M+E=22$. As demais jogadoras fizeram $3M$ e $5E/2$, respectivamente. Os totais dos times são $4M$ e $7E/2$; logo, $$4M+\frac72E=81.$$ Substituindo $E=22-M$, obtemos $4M+77-\frac72M=81$, portanto $M=\boxed8$ gols.`,
    wrong: { 1: 'Nove gols não satisfazem simultaneamente o total dos times e o total das capitãs.', 2: 'Onze resultaria de uma distribuição incompatível com as razões fornecidas.', 3: 'Quatorze excede o valor que verifica o sistema.', 4: 'Dezesseis deixaria apenas seis gols para Érica e não totalizaria 81 gols nos times.' } }),
  q({ n: 15, subject: 'Matemática', content: 'Probabilidade e números primos entre si',
    statement: 'Dois números são denominados “primos entre si” se o único divisor positivo comum entre eles é 1. Por exemplo, 64 e 81 são primos entre si porque 1 é o único divisor positivo comum. A partir dessa definição, 1 é relativamente primo com qualquer número inteiro. Sorteando-se um número inteiro maior do que zero e menor do que 46, a probabilidade de esse número ser relativamente primo com 9 é igual a:', blockTypes: ['prose'],
    alternatives: [tex`$\frac25$`, tex`$\frac23$`, tex`$\frac15$`, tex`$\frac13$`, tex`$\frac29$`], answer: 'B',
    why: tex`O espaço amostral é $\{1,2,\ldots,45\}$, com 45 números. Um número é primo com 9 quando não é múltiplo de 3. Há 15 múltiplos de 3 e, portanto, 30 casos favoráveis: $$P=\frac{30}{45}=\boxed{\frac23}.$$`,
    wrong: { 0: 'Dois quintos corresponderia a 18 casos favoráveis, mas há 30.', 2: 'Um quinto subestima a quantidade de números que não são múltiplos de 3.', 3: 'Um terço é a probabilidade complementar: sortear um múltiplo de 3.', 4: 'Dois nonos não corresponde à razão entre 30 e 45.' } }),
  q({ n: 16, subject: 'Matemática', content: 'Funções quadráticas, zeros e vértices',
    statement: tex`Considere as funções quadráticas $f(x)=mx^2+24x$ e $g(x)=nx^2-8x$, em que $m$ e $n$ são constantes reais. Os dois zeros das funções f e g são iguais, e os vértices C e D das respectivas parábolas têm abscissa 3, como mostram os gráficos dessas funções.`, blockTypes: ['prose'],
    visuals: [{ file: 'p2-q16-parabolas.svg', alt: 'Parábolas f e g com zeros comuns 0 e 6 e vértices C e D de abscissa 3; CD é vertical.' }],
    statementAfter: 'O segmento CD mede', afterBlockTypes: ['command'],
    alternatives: ['32.', '40.', '48.', '24.', '16.'], answer: 'C',
    why: tex`Como os zeros comuns são 0 e 6, $f(x)=m x(x-6)=mx^2+24x$, donde $m=-4$. Analogamente, $g(x)=nx(x-6)=nx^2-8x$, donde $n=4/3$. Nos vértices, $f(3)=36$ e $g(3)=-12$. Assim, $$CD=36-(-12)=\boxed{48}.$$`,
    wrong: { 0: 'Trinta e dois não é a diferença entre as ordenadas dos vértices.', 1: 'Quarenta não corresponde a f(3) − g(3).', 3: 'Vinte e quatro resulta de cálculo incorreto das ordenadas.', 4: 'Dezesseis não representa a distância vertical CD.' } }),
  q({ n: 17, subject: 'Matemática', content: 'Semelhança de triângulos e razão de áreas',
    statement: 'A hipotenusa de um triângulo retângulo que possui um dos catetos medindo 2 cm está sobre a hipotenusa de um triângulo retângulo de catetos 8 cm e 12 cm, conforme mostra a figura.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q17-triangulos.svg', alt: 'Triângulo retângulo de catetos 8 cm e 12 cm com triângulo semelhante interno de cateto 2 cm; região entre eles em cinza.' }],
    statementAfter: 'Sabendo que esses dois triângulos são semelhantes, a área da região destacada em cinza na figura é', afterBlockTypes: ['command'],
    alternatives: [tex`$45\ \mathrm{cm^2}$.`, tex`$36\ \mathrm{cm^2}$.`, tex`$32\ \mathrm{cm^2}$.`, tex`$39\ \mathrm{cm^2}$.`, tex`$42\ \mathrm{cm^2}$.`], answer: 'A',
    why: tex`A área do triângulo maior é $12\cdot8/2=48\ \mathrm{cm^2}$. A razão linear entre o menor e o maior é $2/8=1/4$, logo a razão de áreas é $1/16$. O triângulo menor tem área $48/16=3\ \mathrm{cm^2}$ e a região cinza mede $48-3=\boxed{45\ \mathrm{cm^2}}$.`,
    wrong: { 1: 'Esse valor não corresponde à diferença entre as áreas 48 cm² e 3 cm².', 2: 'Não se deve subtrair áreas usando a razão linear sem elevá-la ao quadrado.', 3: 'O cálculo correto da área destacada fornece 45 cm².', 4: 'Esse valor resultaria de uma área interna diferente da determinada pela semelhança.' } }),
  q({ n: 18, subject: 'Matemática', content: 'Volume e área total de paralelepípedo',
    statement: 'Uma caixa tem o formato de um paralelepípedo retorretângulo e seu volume é igual a 189 cm³. A base dessa caixa é um retângulo em que uma das arestas mede o triplo da outra e, em relação a essa base, a altura da caixa mede 7 cm. A área total da superfície dessa caixa é', blockTypes: ['prose'],
    alternatives: [tex`$210\ \mathrm{cm^2}$.`, tex`$242\ \mathrm{cm^2}$.`, tex`$202\ \mathrm{cm^2}$.`, tex`$238\ \mathrm{cm^2}$.`, tex`$222\ \mathrm{cm^2}$.`], answer: 'E',
    why: tex`Se as arestas da base medem $x$ e $3x$, então $3x\cdot x\cdot7=189$, logo $x=3$. As dimensões são 3 cm, 9 cm e 7 cm. A área total é $$A_T=2(3\cdot9+3\cdot7+9\cdot7)=2(27+21+63)=\boxed{222\ \mathrm{cm^2}}.$$`,
    wrong: { 0: 'Esse total não inclui corretamente as seis faces do paralelepípedo.', 1: 'O cálculo das dimensões fornece 3, 9 e 7 cm, cuja área total é 222 cm².', 2: 'Duzentos e dois subestima a soma das áreas das faces.', 3: 'Duzentos e trinta e oito não corresponde a 2(27 + 21 + 63).' } }),
  q({ n: 19, subject: 'Matemática', content: 'Função exponencial e modelo de valorização',
    statement: tex`Em certa região de uma cidade, o valor $V(t)$ de um imóvel, em dezenas de milhares de reais, $t$ anos após ter sido adquirido ($t>0$), é modelado pela função $$V(t)=C+7\cdot4^{-\frac{(t-5)^2}{4}},$$ sendo C o valor, em dezenas de milhares de reais, pelo qual o imóvel foi adquirido. De acordo com esse modelo, um imóvel nessa região, que foi adquirido em 2010, valia R$ 170.000,00 em 2015, ou seja, 5 anos depois. Nessas condições, em 2017, esse imóvel valia`, blockTypes: ['prose'],
    alternatives: ['R$ 177.000,00.', 'R$ 143.500,00.', 'R$ 180.500,00.', 'R$ 117.500,00.', 'R$ 110.000,00.'], answer: 'D',
    why: tex`Em 2015, $t=5$ e $V(5)=17$ dezenas de milhares: $17=C+7\cdot4^0=C+7$, logo $C=10$. Em 2017, $t=7$ e $$V(7)=10+7\cdot4^{-(7-5)^2/4}=10+7\cdot4^{-1}=11{,}75.$$ Em reais, isso corresponde a $\boxed{\mathrm{R\$}\ 117.500,00}$.`,
    wrong: { 0: 'Esse valor não considera o decréscimo do termo exponencial quando t = 7.', 1: 'O cálculo correto fornece 11,75 dezenas de milhares de reais.', 2: 'Não se deve substituir o expoente negativo por um crescimento do termo.', 4: 'Onze dezenas de milhares ignora a parcela 7/4.' } }),
  q({ n: 20, subject: 'Matemática', content: 'Fluxograma, resto da divisão e contador',
    statement: 'No fluxograma a seguir, considere as instruções apresentadas.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q20-fluxograma.svg', alt: 'Fluxograma com m = 32, n = 7 e i = 0; operações m = m mod n, m = m + 3, n = n + 1 e i = i + 1, com decisões m = 0? e m ≥ n?.' }],
    statementAfter: 'Ao término desse fluxograma, o valor da variável i será', afterBlockTypes: ['command'],
    alternatives: ['7.', '8.', '6.', '4.', '5.'], answer: 'C',
    why: tex`Após $32\bmod7=4$, os estados sucessivos das operações de incremento são $(m,n,i)=(7,8,1),(10,9,2)$. Como $10\ge9$, faz-se $m=10\bmod9=1$. Novos incrementos levam a $(4,10,3),(7,11,4),(10,12,5),(13,13,6)$. Como $13\ge13$, obtém-se $m=13\bmod13=0$, encerrando o fluxograma com $\boxed{i=6}$.`,
    wrong: { 0: 'O fluxograma termina quando m = 0, antes de um sétimo incremento de i.', 1: 'Oito não corresponde ao número de operações i = i + 1 executadas.', 3: 'Quatro interromperia o processo antes de m e n atingirem 13.', 4: 'Com cinco incrementos, ainda resta uma operação até m = 0.' } }),
];
