import { createFamema, tex } from './famema-helpers.js';
const { q } = createFamema(2020);

const CHARGE = {
  statement: 'Leia a charge do cartunista Duke para responder às questões 01 e 02.', blockTypes: ['label'],
  visuals: [{ file: 'p2-q01-charge.svg', alt: 'Charge de Duke: o médico comemora os exames e pergunta sobre atividades físicas, alimentação e sono; o paciente responde que apenas deletou Facebook, Twitter e saiu dos grupos de WhatsApp.' }],
};
const GIL = `Leia o texto para responder às questões de 03 a 05.

Vem um Sapateiro com seu avental e carregado de formas,
chega ao batel¹ infernal, e diz:
Hou da barca!
Diabo – Quem vem aí?
Santo sapateiro honrado,
como vens tão carregado?
Sapateiro – Mandaram-me vir assi...
Mas para onde é a viagem?
Diabo – Para a terra dos danados.
Sapateiro – E os que morrem confessados
onde têm sua passagem?
Diabo – Não cures de mais linguagem!
que esta é tua barca, esta!
Sapateiro – Renegaria eu da festa
e da barca e da barcagem!
Como poderá isso ser, confessado e comungado?
Diabo – Tu morreste excomungado,
não no quiseste dizer.
Esperavas de viver;
calaste dez mil enganos,
tu roubaste bem trinta anos
o povo com teu mister.
Embarca, pobre de ti,
que há já muito que te espero!
Sapateiro – Pois digo-te que não quero!
Diabo – Que te pese, hás de ir, si, si!

(Gil Vicente. Auto da Barca do Inferno. Adaptado.)

¹ batel: pequena embarcação.`;
const GIL_BLOCKS = ['label', 'poem', 'source', 'note'];
const CEARA = `Leia o texto para responder às questões de 06 a 08.

O Ceará, apesar de restrições de renda, destaca-se em alfabetização. Um dos motivos do êxito é a parceria com os municípios, os principais encarregados dos primeiros anos de escolarização.

Além de medidas que incluem formação de professores e material didático estruturado, o governo cearense acionou um incentivo financeiro: as cidades com resultados melhores recebem fatia maior do ICMS, com liberdade para destinação dos recursos.

O modelo já foi adotado em Pernambuco e está sendo implantado ou avaliado por Alagoas, Amapá, Espírito Santo e São Paulo.

Replicam-se igualmente as boas iniciativas do ensino médio em Pernambuco, baseado em tempo integral, que permite ao estudante escolher disciplinas optativas, projeto acolhido em São Paulo.

Auspiciosa, essa rede multilateral e multipartidária pela educação é exemplo de como a sociedade pode se mobilizar em torno de propostas palpáveis.

(“Unidos pelo Ensino”. Folha de S.Paulo, 27.08.2019. Adaptado.)`;
const CEARA_BLOCKS = ['label', 'prose', 'prose', 'prose', 'prose', 'prose', 'source'];
const AGREGADOS = `Leia o texto para responder às questões 09 e 10.

[...] no tempo em que se passavam os fatos que vamos narrando nada mais havia comum do que ter cada casa um, dois e às vezes mais agregados.

Em certas casas os agregados eram muito úteis, porque a família tirava grande proveito de seus serviços, e já tivemos ocasião de dar exemplo disso quando contamos a história do finado padrinho de Leonardo; outras vezes porém, e estas eram maior número, o agregado, refinado vadio, era uma verdadeira parasita que se prendia à árvore familiar, que lhe participava da seiva sem ajudá-la a dar frutos, e o que é mais ainda, chegava mesmo a dar cabo dela. E o caso é que, apesar de tudo, se na primeira hipótese o esmagavam com o peso de mil exigências, se lhe batiam a cada passo com os favores na cara, se o filho mais velho da casa, por exemplo, o tomava por seu divertimento, e à menor e mais justa queixa saltavam-lhe os pais em cima tomando o partido de seu filho, no segundo aturavam quanto desconcerto havia com paciência de mártir, o agregado tornava-se quase um rei em casa, punha, dispunha, castigava os escravos, ralhava com os filhos, intervinha enfim nos mais particulares negócios.

Em qual dos dois casos estava ou viria estar em breve o nosso amigo Leonardo? O leitor que decida pelo que se vai passar.

(Manuel Antônio de Almeida. Memórias de um Sargento de Milícias, 1994.)`;
const AGREGADOS_BLOCKS = ['label', 'prose', 'prose', 'prose', 'source'];

export const famema2020Objetivas = [
  q({ ...CHARGE, n: 1, subject: 'Português', content: 'Interpretação de charge', statementAfter: 'Depreende-se com a leitura da charge que as redes sociais', afterBlockTypes: ['command'],
    alternatives: ['melhoram a saúde do homem, quando usadas intensamente.', 'podem ocasionar prejuízos à saúde do ser humano.', 'promovem situações salutares de convivência humana.', 'permitem o aguçamento da percepção das pessoas.', 'influenciam pouco a saúde, assim como as atividades físicas.'], answer: 'B',
    why: 'O paciente associa a melhora dos exames apenas ao afastamento das redes sociais, sugerindo que o uso delas prejudicava sua saúde.',
    wrong: { 0: 'A charge sugere o contrário: afastar-se das redes coincidiu com a melhora.', 2: 'Não há situação de convivência apresentada como salutar.', 3: 'A fala não trata de aguçamento da percepção.', 4: 'A construção humorística atribui grande influência às redes, não influência pequena.' } }),
  q({ ...CHARGE, n: 2, subject: 'Português', content: 'Concordância verbal e vozes do verbo', statementAfter: 'Nas perguntas do médico “Tem praticado atividades físicas? Mudou hábitos alimentares?”, o sujeito das orações remete a “você”. Se os sujeitos fossem “atividades físicas” e “hábitos alimentares”, essas perguntas assumiriam, em conformidade com a norma-padrão, a seguinte redação:', afterBlockTypes: ['command'],
    alternatives: ['Têm sido praticado atividades físicas? Mudaram-se hábitos alimentares?', 'Vêm-se praticando atividades físicas? Mudou-se hábitos alimentares?', 'Têm sido praticadas atividades físicas? Mudaram hábitos alimentares?', 'Atividades físicas tem sido praticadas? Mudou-se hábitos alimentares?', 'Atividades físicas vem sendo praticadas? Mudou hábitos alimentares?'], answer: 'C',
    why: 'Na locução passiva, “têm” e “praticadas” concordam com “atividades físicas”; na segunda pergunta, “mudaram” concorda com o sujeito posposto “hábitos alimentares”.',
    wrong: { 0: 'O particípio deveria concordar: “praticadas”; o pronome em “mudaram-se” não atende à construção pedida.', 1: '“Vêm-se” e “Mudou-se” não fazem a concordância exigida com os sujeitos plural e na forma indicada.', 3: '“Tem” deveria estar no plural, e “Mudou-se” não estabelece a concordância solicitada.', 4: 'As formas “vem” e “Mudou” não concordam com os sujeitos plurais.' } }),
  q({ n: 3, subject: 'Literatura', content: 'Auto da Barca do Inferno: conflito e julgamento moral', statement: GIL, blockTypes: GIL_BLOCKS, works: ['Auto da Barca do Inferno'], statementAfter: 'Na situação apresentada, o sapateiro', afterBlockTypes: ['command'],
    alternatives: ['espanta-se com a ideia de ir para o inferno, mas o diabo admite que não pode levá-lo por ter sido um homem cristão em vida.', 'opõe-se à ideia de ir para o inferno, alegando que fora religioso em vida, mas o diabo o relembra dos pecados cometidos.', 'mostra entusiasmo por seguir na embarcação do diabo e reconhece que, mesmo tendo sido religioso, acha justa a punição.', 'sujeita-se à ordem do diabo e toma lugar em sua embarcação, com a esperança de que sua disposição para o trabalho ainda possa salvá-lo.', 'confronta o diabo, considerando que este possa se intimidar ao descobrir que fora um homem religioso em vida.'], answer: 'B',
    why: 'O sapateiro resiste e invoca confissão e comunhão, mas o diabo recorda sua excomunhão, os enganos silenciados e a exploração do povo.',
    wrong: { 0: 'O diabo não admite liberá-lo; ordena que embarque.', 2: 'Ele não demonstra entusiasmo nem reconhece a justiça da punição.', 3: 'Não embarca nem apresenta o trabalho como esperança de salvação.', 4: 'O diabo não se intimida; ao contrário, enumera os pecados do sapateiro.' } }),
  q({ n: 4, subject: 'Literatura', content: 'Auto da Barca do Inferno: dimensão moralizante', statement: GIL, blockTypes: GIL_BLOCKS, works: ['Auto da Barca do Inferno'], statementAfter: 'O texto transcrito de Gil Vicente assume caráter', afterBlockTypes: ['command'],
    alternatives: ['moralizante, uma vez que traz explícita crítica aos costumes do personagem.', 'educativo, pois o personagem reconhece seu erro e, ao final, é perdoado.', 'humorístico, com intenção de entreter mais do que condenar comportamentos.', 'doutrinário, considerando a devoção do personagem à religião quando em vida.', 'edificante, já que o comportamento do personagem se torna exemplo a seguir.'], answer: 'A',
    why: 'Ao expor os enganos e a exploração praticados pelo sapateiro, o texto condena sua conduta e apresenta um julgamento moral.',
    wrong: { 1: 'Não há reconhecimento do erro nem perdão ao final.', 2: 'Embora haja humor, o trecho culmina na condenação dos costumes, não apenas em entretenimento.', 3: 'A devoção alegada é desmentida pela conduta e pela excomunhão.', 4: 'O personagem não é exemplo edificante; seus atos são criticados.' } }),
  q({ n: 5, subject: 'Português', content: 'Regência e pronomes na reescrita', statement: GIL, blockTypes: GIL_BLOCKS, works: ['Auto da Barca do Inferno'], statementAfter: 'Transpondo-se a forma de tratamento para “você”, os versos “Embarca, pobre de ti, / que há já muito que te espero!” e “Pois digo-te que não quero!” assumem, de acordo com a norma-padrão, as seguintes redações:', afterBlockTypes: ['command'],
    alternatives: ['“Embarque, pobre de você, / que há já muito que lhe espero!” e “Pois digo-lhe que não quero!”', '“Embarque, pobre de você, / que há já muito que o espero!” e “Pois digo-lhe que não quero!”', '“Embarque, pobre de você, / que há já muito que o espero!” e “Pois digo-o que não quero!”', '“Embarque, pobre de você, / que há já muito que lhe espero!” e “Pois digo à você que não quero!”', '“Embarque, pobre de você, / que há já muito que espero você!” e “Pois digo-o que não quero!”'], answer: 'B',
    why: '“Esperar alguém” pede objeto direto (“o espero”), enquanto “dizer algo a alguém” pede objeto indireto (“digo-lhe”).',
    wrong: { 0: '“Lhe” é inadequado para o objeto direto de “espero”.', 2: '“Digo-o” emprega objeto direto onde se exige “digo-lhe”.', 3: 'Há erro em “lhe espero” e no uso de crase antes do pronome “você”.', 4: 'A reescrita de “digo-te” deveria usar “digo-lhe”, não “digo-o”.' } }),
  q({ n: 6, subject: 'Português', content: 'Finalidade e compreensão de texto jornalístico', statement: CEARA, blockTypes: CEARA_BLOCKS, works: ['Unidos pelo Ensino'], statementAfter: 'O objetivo do texto é', afterBlockTypes: ['command'],
    alternatives: ['analisar o impacto no aumento do ICMS para as políticas públicas educacionais.', 'examinar práticas que visem à melhoria das condições de ensino do país.', 'criticar a falta de políticas públicas em educação para atender os estados brasileiros.', 'contestar os resultados de práticas educacionais chamadas de inovadoras no país.', 'descrever as condições do ensino no Ceará, afetado pelas restrições de renda.'], answer: 'B',
    why: 'O editorial apresenta experiências de alfabetização e ensino médio em diferentes estados como práticas voltadas à melhoria do ensino.',
    wrong: { 0: 'O texto não analisa aumento do ICMS, mas sua destinação como incentivo.', 2: 'Não critica ausência de políticas; apresenta políticas consideradas exitosas.', 3: 'Os resultados são valorizados, não contestados.', 4: 'O Ceará é um exemplo entre outros; o objetivo não se limita a descrever suas condições.' } }),
  q({ n: 7, subject: 'Português', content: 'Reescrita e preservação de sentido', statement: CEARA, blockTypes: CEARA_BLOCKS, works: ['Unidos pelo Ensino'], statementAfter: 'O sentido original do texto está mantido com a reescrita do trecho:', afterBlockTypes: ['command'],
    alternatives: ['As cidades com liberdade para destinação dos recursos recebem fatia maior do ICMS, obtendo assim resultados melhores.', 'São Paulo desenvolve projeto de ensino médio que permite ao estudante escolher disciplinas optativas, o qual se replica em Pernambuco.', 'Um dos motivos do êxito é a parceria com os principais encarregados dos primeiros anos de escolarização, isto é, os municípios.', 'Apesar de algumas medidas, como formação de professores e material didático estruturado, o governo cearense acionou um incentivo financeiro.', 'Destaca-se em alfabetização o Ceará devido às restrições de renda da parceria com os municípios.'], answer: 'C',
    why: 'A reescrita apenas explicita, por aposto, que os municípios são os principais encarregados dos primeiros anos, preservando a explicação do êxito.',
    wrong: { 0: 'A liberdade de destinação não é condição para receber mais ICMS nem causa dos resultados.', 1: 'O projeto citado é de Pernambuco e foi acolhido em São Paulo; a origem é invertida.', 3: '“Além de” indica adição, não a concessão introduzida por “apesar de”.', 4: 'As restrições de renda não são apresentadas como causa do destaque nem como restrições da parceria.' } }),
  q({ n: 8, subject: 'Português', content: 'Valor aspectual das formas verbais', statement: CEARA, blockTypes: CEARA_BLOCKS, works: ['Unidos pelo Ensino'], statementAfter: 'A forma verbal sublinhada expressa ideia de ação em processo no trecho:', afterBlockTypes: ['command'],
    alternatives: ['“e está sendo implantado ou avaliado por Alagoas, Amapá, Espírito Santo e São Paulo” (3º parágrafo).', '“o governo cearense acionou um incentivo financeiro” (2º parágrafo).', '“O Ceará, apesar de restrições de renda, destaca-se em alfabetização” (1º parágrafo).', '“Replicam-se igualmente as boas iniciativas do ensino médio em Pernambuco” (4º parágrafo).', '“essa rede multilateral e multipartidária pela educação é exemplo de como a sociedade pode se mobilizar” (5º parágrafo).'], answer: 'A',
    why: 'A locução “está sendo implantado ou avaliado” apresenta ações em curso, ainda não concluídas.',
    wrong: { 1: '“Acionou” situa a ação como concluída no passado.', 2: '“Destaca-se” expressa situação atual, não processo em desenvolvimento.', 3: '“Replicam-se” apresenta fato habitual ou atual, sem a estrutura aspectual de processo.', 4: '“Pode se mobilizar” indica possibilidade, não ação em andamento.' } }),
  q({ n: 9, subject: 'Literatura', content: 'Memórias de um Sargento de Milícias: os agregados', statement: AGREGADOS, blockTypes: AGREGADOS_BLOCKS, works: ['Memórias de um Sargento de Milícias'], statementAfter: 'O romance de Manuel Antônio de Almeida aborda costumes da sociedade do Rio de Janeiro do século XIX. Um deles é a presença comum de agregados nas casas. No texto, essa figura é descrita', afterBlockTypes: ['command'],
    alternatives: ['com certa reserva, já que se tratava de uma pessoa que não era bem vista pela família.', 'por dois vieses, conforme a sua relação com a família: ou era útil a esta ou a explorava.', 'de modo divertido, como uma pessoa que surpreendia não raro pelo seu humor e pela sua simpatia.', 'como vítima do sistema, uma vez que a família a explorava, chegando a tratá-la como um escravo.', 'de forma positiva, dado que os laços afetivos estabelecidos com a família eram legítimos.'], answer: 'B',
    why: 'O narrador distingue os agregados úteis, de quem a família tirava proveito, dos parasitas, que exploravam a casa.',
    wrong: { 0: 'O texto não apresenta uma avaliação única de rejeição.', 2: 'Humor e simpatia não são os critérios de descrição.', 3: 'A exploração pelo agregado também é central, e ele não é equiparado a escravo.', 4: 'A descrição inclui parasitismo e conflitos, não apenas laços positivos.' } }),
  q({ n: 10, subject: 'Literatura', content: 'Hipérbole e metáfora em Memórias de um Sargento de Milícias', statement: AGREGADOS, blockTypes: AGREGADOS_BLOCKS, works: ['Memórias de um Sargento de Milícias'], statementAfter: 'A hipérbole é uma figura de linguagem que expressa ideia de exagero; a metáfora, por sua vez, expressa ideia de semelhança. As passagens do segundo parágrafo do texto que exemplificam essas figuras são, respectivamente:', afterBlockTypes: ['command'],
    alternatives: ['“Em certas casas os agregados eram muito úteis”; “chegava mesmo a dar cabo dela”.', '“o esmagavam com o peso de mil exigências”; “que lhe participava da seiva sem ajudá-la a dar frutos”.', '“se lhe batiam a cada passo com os favores na cara”; “quando contamos a história do finado padrinho de Leonardo”.', '“saltavam-lhe os pais em cima tomando o partido de seu filho”; “intervinha enfim nos mais particulares negócios”.', '“se o filho mais velho da casa, por exemplo, o tomava por seu divertimento”; “que se prendia à árvore familiar”.'], answer: 'B',
    why: '“Mil exigências” intensifica exageradamente as cobranças; “seiva” e “frutos” comparam metaforicamente a família a uma árvore explorada pelo parasita.',
    wrong: { 0: 'Os trechos não estabelecem, respectivamente, exagero e comparação metafórica.', 2: 'O segundo trecho não apresenta metáfora.', 3: 'As expressões não configuram o par hipérbole/metáfora solicitado.', 4: 'A segunda passagem é metafórica, mas a primeira não é a hipérbole explícita indicada.' } }),
  q({ n: 11, subject: 'Matemática', content: 'Mínimo múltiplo comum e calendário', statement: 'Sílvia e Márcio moram em cidades diferentes no interior. Sílvia vai à capital uma vez a cada 10 dias, e Márcio vai à capital uma vez a cada 12 dias. A última vez em que eles se encontraram na capital foi um sábado. O próximo encontro dos dois na capital ocorrerá em', blockTypes: ['prose'],
    alternatives: ['uma terça-feira.', 'uma quarta-feira.', 'um domingo.', 'um sábado.', 'uma segunda-feira.'], answer: 'B',
    why: tex`O encontro ocorre após $\operatorname{mmc}(10,12)=60$ dias. Como $60=8\cdot7+4$, avançam-se quatro dias na semana: sábado, domingo, segunda, terça e $\boxed{\text{quarta-feira}}$.`,
    wrong: { 0: 'Terça corresponderia a três dias após sábado, não a 60 dias.', 2: 'Domingo corresponderia a um dia após sábado.', 3: 'Sábado exigiria um intervalo múltiplo de 7; 60 não é.', 4: 'Segunda corresponderia a dois dias após sábado.' } }),
  q({ n: 12, subject: 'Matemática', content: 'Progressões geométricas', statement: tex`A progressão geométrica $(a_1,a_2,a_3,\ldots)$ tem primeiro termo $a_1=\frac{3}{8}$ e razão 5. A progressão geométrica $(b_1,b_2,b_3,\ldots)$ tem razão $\frac{5}{2}$. Se $a_5=b_4$, então $b_1$ é igual a`, blockTypes: ['prose'],
    alternatives: [tex`$\frac{25}{4}$`, '5', tex`$\frac{3}{20}$`, '15', tex`$\frac{9}{2}$`], answer: 'D',
    why: tex`$a_5=\frac38\cdot5^4=\frac{1875}{8}$ e $b_4=b_1(\frac52)^3=b_1\frac{125}{8}$. Igualando, $b_1=\frac{1875}{125}=\boxed{15}$.`,
    wrong: { 0: 'Esse valor não satisfaz $b_1\cdot125/8=1875/8$.', 1: 'Com $b_1=5$, $b_4=625/8$, diferente de $a_5$.', 2: 'O valor resulta de operação incorreta com as razões.', 4: 'O valor não verifica a igualdade entre os termos indicados.' } }),
  q({ n: 13, subject: 'Matemática', content: 'Polinômios e raízes complexas', statement: tex`Sabendo-se que o número complexo $2+i$ é raiz do polinômio $x^3+ax^2+bx-5$, em que $a$ e $b$ são números reais, conclui-se que $a+b$ é igual a`, blockTypes: ['prose'],
    alternatives: ['7.', '5.', '8.', '6.', '4.'], answer: 'E',
    why: tex`Como os coeficientes são reais, $2-i$ também é raiz. O fator associado é $x^2-4x+5$. Se $r$ é a terceira raiz, $(x^2-4x+5)(x-r)$ tem constante $-5r=-5$, logo $r=1$. Assim, $a=-5$, $b=9$ e $\boxed{a+b=4}$.`,
    wrong: { 0: 'Não corresponde aos coeficientes obtidos pelo produto dos fatores.', 1: 'O valor 5 aparece no produto das raízes conjugadas, não em $a+b$.', 2: 'A soma correta dos coeficientes é 4.', 3: 'A expansão fornece $a=-5$ e $b=9$, cuja soma não é 6.' } }),
  q({ n: 14, subject: 'Matemática', content: 'Contagem e formação de grupos', statement: 'Em uma classe há 9 alunos, dos quais 3 são meninos e 6 são meninas. Os alunos dessa classe deverão formar 3 grupos com 3 integrantes em cada grupo, de modo que em cada um dos grupos haja um menino. O número de maneiras que esses grupos podem ser formados é', blockTypes: ['prose'],
    alternatives: ['30.', '60.', '120.', '90.', '15.'], answer: 'D',
    why: tex`As meninas podem ser separadas em três pares não rotulados de $\frac{6!}{(2!)^3\,3!}=15$ maneiras. Os três meninos podem ser distribuídos entre esses pares de $3!=6$ maneiras. Total: $15\cdot6=\boxed{90}$.`,
    wrong: { 0: 'O valor 30 não contabiliza corretamente as distribuições dos meninos e das meninas.', 1: 'Faltam configurações na contagem apresentada por esse resultado.', 2: 'Há contagem em excesso, pois grupos não recebem rótulos distintos.', 4: '15 conta apenas a separação das meninas em pares, sem distribuir os meninos.' } }),
  q({ n: 15, subject: 'Matemática', content: 'Probabilidade condicional e porcentagem', statement: 'Uma confecção de roupas produziu um lote com um total de 150 camisetas, distribuídas entre os tamanhos P e M, sendo 59 lisas e as demais estampadas. Nesse lote, havia 100 camisetas tamanho P, das quais 67 eram estampadas. Retirando-se, ao acaso, uma camiseta desse lote e sabendo que seu tamanho é M, a probabilidade de que seja uma peça estampada é igual a', blockTypes: ['prose'],
    alternatives: ['36%.', '24%.', '48%.', '60%.', '72%.'], answer: 'C',
    why: 'Há 50 camisetas M. Como P tem 33 lisas (100−67), M tem 26 lisas (59−33) e, portanto, 24 estampadas. A probabilidade condicional é 24/50 = 48%.',
    wrong: { 0: '36% não corresponde à razão entre estampadas M e todas as M.', 1: '24% usa incorretamente o total do lote como referência.', 3: '60% não é a proporção de estampadas entre as 50 peças M.', 4: '72% não resulta dos dados da tabela de contingência.' } }),
  q({ n: 16, subject: 'Matemática', content: 'Retas perpendiculares e área no plano cartesiano', difficulty: 'Difícil', statement: tex`Em um plano cartesiano, seja $r$ a reta de equação $x-3y+6=0$. A reta $s$ é perpendicular à reta $r$ e delimita, com os eixos coordenados, no primeiro quadrante, um triângulo de área $\frac{128}{3}$. O ponto de interseção de $r$ e $s$ tem abscissa`, blockTypes: ['prose'],
    alternatives: [tex`$\frac{23}{5}$`, tex`$\frac{21}{5}$`, tex`$\frac{18}{5}$`, tex`$\frac{19}{5}$`, tex`$\frac{24}{5}$`], answer: 'B',
    why: tex`A inclinação de $r$ é $1/3$, logo a de $s$ é $-3$. Escrevendo $s:y=-3x+c$, os interceptos são $c/3$ e $c$ e a área é $c^2/6=128/3$, portanto $c=16$. Na interseção, $(x+6)/3=-3x+16$, de onde $10x=42$ e $\boxed{x=21/5}$.`,
    wrong: { 0: 'A abscissa 23/5 não satisfaz simultaneamente as equações de r e s.', 2: '18/5 resulta de cálculo incorreto da interseção.', 3: '19/5 não verifica a equação obtida para a interseção.', 4: '24/5 não é solução de (x+6)/3 = −3x+16.' } }),
  q({ n: 17, subject: 'Matemática', content: 'Equações e divisão em partes iguais', statement: 'Um grupo de N amigos decidiu comprar um presente para uma de suas professoras. O preço do presente é R$ 396,00 e será dividido em partes iguais entre eles. No dia de comprar o presente, um dos amigos desistiu de participar da compra, o que resultou em um aumento de R$ 3,00 na parte de cada um dos amigos que restou no grupo. O número N de amigos no grupo original era igual a', blockTypes: ['prose'],
    alternatives: ['11.', '18.', '12.', '9.', '6.'], answer: 'C',
    why: tex`O aumento é dado por $\frac{396}{N-1}-\frac{396}{N}=3$. Logo, $N(N-1)=132$, e a solução positiva é $\boxed{N=12}$: inicialmente pagariam R$ 33 e, depois, R$ 36.`,
    wrong: { 0: 'Com 11, as cotas seriam 36 e 39,60, aumento diferente de R$ 3.', 1: 'Com 18, a diferença entre as cotas não é R$ 3.', 3: 'Com 9, as cotas passam de 44 para 49,50.', 4: 'Com 6, as cotas passam de 66 para 79,20.' } }),
  q({ n: 18, subject: 'Matemática', content: 'Trigonometria e áreas de triângulos isósceles', difficulty: 'Difícil', statement: tex`O triângulo ABC é isósceles com $AB=AC=4\ \mathrm{cm}$, e o triângulo DBC é isósceles com $DB=DC=2\ \mathrm{cm}$, conforme a figura.`, blockTypes: ['prose'],
    visuals: [{ file: 'p2-q18-triangulos.svg', alt: 'Triângulo isósceles ABC com ponto D interior sobre o eixo de simetria; DB e DC medem 2 cm e formam o triângulo isósceles DBC. O ângulo DBC é beta.' }],
    statementAfter: tex`Seja $\beta$ a medida do ângulo interno $D\hat BC$ do triângulo DBC. Sabendo-se que $\operatorname{sen}(\beta)=\frac{\sqrt6}{4}$, a área, em $\mathrm{cm^2}$, do quadrilátero ABDC é`, afterBlockTypes: ['prose'],
    alternatives: [tex`$\sqrt{35}$`, '6', '4', tex`$\sqrt5$`, tex`$\sqrt{15}$`], answer: 'E',
    why: tex`$\cos\beta=\sqrt{10}/4$. Em DBC, $BC=2\cdot2\cos\beta=\sqrt{10}$ e sua altura é $2\operatorname{sen}\beta=\sqrt6/2$. Em ABC, a altura é $\sqrt{4^2-(BC/2)^2}=3\sqrt6/2$. A área pedida é a diferença: $\frac{BC}{2}(\frac{3\sqrt6}{2}-\frac{\sqrt6}{2})=\boxed{\sqrt{15}}$.`,
    wrong: { 0: '√35 não resulta da diferença entre as áreas dos dois triângulos.', 1: '6 supera a área calculada para a região ABDC.', 2: 'O valor 4 não considera corretamente base e alturas.', 3: '√5 corresponde a erro no cálculo das alturas ou da diferença de áreas.' } }),
  q({ n: 19, subject: 'Matemática', content: 'Volume de prisma e conservação da água', statement: tex`Um recipiente transparente possui o formato de um prisma reto de altura $15\ \mathrm{cm}$ e base quadrada, cujo lado mede $6\ \mathrm{cm}$. Esse recipiente está sobre uma mesa com tampo horizontal e contém água até a altura de $10\ \mathrm{cm}$, conforme a figura.`, blockTypes: ['prose'],
    visuals: [{ file: 'p2-q19-prisma.svg', alt: 'Prisma reto de base quadrada de lado 6 cm e altura 15 cm, com água até 10 cm.' }],
    statementAfter: 'Se o recipiente for virado e apoiado na mesa sobre uma de suas faces não quadradas, a altura da água dentro dele passará a ser de', afterBlockTypes: ['prose'],
    alternatives: ['4 cm.', '3,5 cm.', '3 cm.', '2,5 cm.', '2 cm.'], answer: 'A',
    why: tex`O volume de água é $6\cdot6\cdot10=360\ \mathrm{cm^3}$. Na nova posição, a base é retangular de $15\cdot6=90\ \mathrm{cm^2}$; logo, $h=360/90=\boxed{4\ \mathrm{cm}}$.`,
    wrong: { 1: '3,5 cm não conserva o volume de 360 cm³ na base de 90 cm².', 2: 'Com 3 cm, o volume seria apenas 270 cm³.', 3: 'Com 2,5 cm, o volume seria 225 cm³.', 4: 'Com 2 cm, o volume seria 180 cm³, metade do necessário.' } }),
  q({ n: 20, subject: 'Matemática', content: 'Média ponderada e PIB per capita', statement: 'O PIB per capita de uma determinada região é definido como a divisão do PIB da região pelo número de habitantes dessa região. A tabela registra a população e o PIB per capita de quatro estados.', blockTypes: ['prose'],
    tables: [{ ariaLabel: 'População e PIB per capita de quatro estados', headerRows: [['Estado', 'População (em milhões)', 'PIB per capita (em R$)']], rows: [['A', '1', '15.000,00'], ['B', '8', '15.000,00'], ['C', '3', '30.000,00'], ['D', '15', '30.000,00']] }],
    statementAfter: 'O PIB per capita da região compreendida pelos quatro estados é de', afterBlockTypes: ['prose'],
    alternatives: ['R$ 28.000,00.', 'R$ 22.500,00.', 'R$ 27.500,00.', 'R$ 25.000,00.', 'R$ 29.500,00.'], answer: 'D',
    why: tex`A média deve ser ponderada pelas populações: $\frac{1\cdot15\,000+8\cdot15\,000+3\cdot30\,000+15\cdot30\,000}{1+8+3+15}=\frac{675\,000}{27}=\boxed{\mathrm{R\$\,25\,000,00}}$.`,
    wrong: { 0: 'O valor não corresponde à média ponderada pelas populações.', 1: '22.500 é a média aritmética simples dos valores, inadequada a populações diferentes.', 2: 'A soma dos PIBs dividida pela população total não produz 27.500.', 4: '29.500 dá peso excessivo aos estados de maior PIB per capita.' } }),
];
