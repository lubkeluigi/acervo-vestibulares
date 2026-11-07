import { createFamema, tex } from './famema-helpers.js';
const { q } = createFamema(2025);
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const GENERO = `Leia o texto para responder às questões de 31 a 33.

A gender stereotype is a generalized view or preconception about attributes or characteristics, or the roles that are or ought to be possessed by, or performed by, women and men. A gender stereotype is harmful when it limits women’s and men’s capacity to develop their personal abilities, pursue their professional careers and/or make choices about their lives.

Whether clearly hostile (such as “women are irrational”) or seemingly benign (“women are nurturing”), ${underline('harmful stereotypes perpetuate inequalities')}. For example, the traditional view of women as care givers means ${underline('that')} child care responsibilities often fall exclusively on women.

Further, gender stereotypes compounded and intersecting with other stereotypes have a disproportionate negative impact on certain groups of women, such as women from minority or indigenous groups, women with disabilities or with lower economic status, migrant women etc.

(https://ohchr.org. Adaptado.)`;
const GENERO_BLOCKS = ['prose', 'prose', 'prose', 'prose', 'source'];

const CANCAO = `Read the excerpt from the song “Can’t Help Falling in Love”, recorded by singer Elvis Presley, to answer questions 34 and 35.

Wise men say
Only fools rush in
But I can’t help falling in love with you
Shall I stay?
Would it be a sin
If I can’t help falling in love with you?
Like a river flows
Surely to the sea
Darling, so it goes
Some things are ${underline('meant to be')}
Take my hand,
Take my whole life, too
${underline('For')} I can’t help falling in love with you

(Hugo Peretti, Luigi Creatore e George David Weiss. https://azlyrics.com. Adaptado.)`;
const CANCAO_BLOCKS = ['prose', 'poem', 'source'];

export const famema2025Objetivas2 = [
  q({ n: 21, subject: 'Geografia', content: 'Tectônica de placas e terremotos no Brasil',
    statement: `Sempre que algum país é atingido por um terremoto de intensa magnitude surge a dúvida sobre se esse tipo de evento da natureza poderia ocorrer no Brasil. A pergunta pode ser instigada pelo fato de o Brasil estar, geograficamente, localizado ao lado de uma nação como o Chile, que constantemente enfrenta tremores de terra. No entanto, o que explica um país tão próximo, na América do Sul, sofrer com terremotos e o Brasil não?

(www.nationalgeographicbrasil.com. Adaptado.)

A baixa incidência de terremotos no Brasil está associada:`, blockTypes: ['quote', 'source', 'command'],
    alternatives: ['ao movimento convergente entre a placa Sul-Americana e a placa Africana.', 'à sua localização geográfica na borda da placa Sul-Americana.', 'à sua localização ao centro da placa Sul-Americana.', 'à sua estrutura geológica de dobramentos modernos.', 'ao movimento conservativo entre a placa Sul-Americana e a placa de Nazca.'], answer: 'C',
    why: 'A maior parte do território brasileiro situa-se no interior da placa Sul-Americana, longe das zonas de contato e subducção onde se concentram grandes terremotos.',
    wrong: { 0: 'A convergência com a placa Africana não descreve a posição brasileira atual.', 1: 'O Chile está na borda da placa; o Brasil situa-se majoritariamente em seu interior.', 3: 'Dobramentos modernos associam-se a áreas de convergência recente, não à estrutura predominante brasileira.', 4: 'O contato com a placa de Nazca é convergente e ocorre no oeste sul-americano.' } }),
  q({ n: 22, subject: 'Geografia', content: 'Hidrogênio verde e transição energética',
    statement: `O que é o hidrogênio verde?

O hidrogênio verde (H2V) é produzido a partir da eletrólise da água por meio de fontes de energia renováveis, como eólica e solar, um processo de separação da molécula de água (H2O) em hidrogênio (H2) e oxigênio (O2) por meio da passagem de uma corrente elétrica na solução aquosa.

(www.wwf.org.br. Adaptado.)

O hidrogênio verde é a grande aposta para a transição energética em todo o mundo, porque possibilita`, blockTypes: ['prose', 'quote', 'source', 'command'],
    alternatives: ['a redução dos resíduos sólidos.', 'a redução da emissão de CFC na atmosfera.', 'a utilização de recursos agroindustriais.', 'o aumento do potencial hídrico.', 'a descarbonização das atividades produtivas.'], answer: 'E',
    why: 'Produzido com eletricidade renovável, o hidrogênio verde pode substituir combustíveis fósseis e reduzir emissões de carbono em processos industriais e transportes.',
    wrong: { 0: 'Seu principal papel não é a redução direta de resíduos sólidos.', 1: 'CFCs não são o foco da transição energética descrita.', 2: 'O texto descreve eletrólise com renováveis, não aproveitamento agroindustrial.', 3: 'O uso de hidrogênio não aumenta, por si, o potencial hídrico.' } }),
  q({ n: 23, subject: 'Geografia', content: 'Transporte hidroviário de cabotagem',
    statement: `Atualmente, o modal rodoviário responde por quase 65% da carga transportada. Mesmo com o significativo crescimento que a navegação de cabotagem obteve nos últimos anos, ela hoje detém uma participação relativa de menos de 11% do total das modalidades de transportes. Apesar de seu potencial, a navegação de cabotagem no Brasil está muito restrita à movimentação de poucos produtos, sobretudo ao transporte de petróleo.

(www.bndes.gov.br, 10.08.2018. Adaptado.)

A cabotagem é uma modalidade de transporte que consiste no deslocamento de produtos`, blockTypes: ['quote', 'source', 'command'],
    alternatives: ['em lagunas costeiras.', 'por sistemas de eclusas.', 'em rios urbanos.', 'entre portos do mesmo país.', 'em rios transfronteiriços.'], answer: 'D',
    why: 'Cabotagem é a navegação marítima ou costeira realizada entre portos de um mesmo país.',
    wrong: { 0: 'Lagunas podem ser utilizadas, mas não definem a modalidade.', 1: 'Eclusas são estruturas de transposição de desníveis, não o conceito de cabotagem.', 2: 'Transporte em rios urbanos não caracteriza necessariamente cabotagem.', 4: 'Rios transfronteiriços envolvem mais de um país.' } }),
  q({ n: 24, subject: 'Geografia', content: 'Regiões hidrográficas brasileiras',
    statement: '', blockTypes: [],
    visuals: [{ file: 'p2-q24-mapas.svg', alt: 'Mapa do Brasil dividido em regiões hidrográficas, com bacias que ultrapassam limites estaduais.' }],
    statementAfter: '(https://atlasescolar.ibge.gov.br. Adaptado.)\n\nA divisão do território brasileiro apresentada no mapa corresponde', afterBlockTypes: ['source', 'command'],
    alternatives: ['aos complexos geoeconômicos.', 'às regiões hidrográficas.', 'aos domínios morfoclimáticos.', 'à hierarquia urbana.', 'às estruturas geológicas.'], answer: 'B',
    why: 'O mapa representa as regiões hidrográficas, delimitadas segundo bacias e redes de drenagem, e não os limites políticos estaduais.',
    wrong: { 0: 'Os complexos geoeconômicos formam uma regionalização diferente, associada a articulações produtivas.', 2: 'Domínios morfoclimáticos combinam relevo, clima, solo e vegetação, com limites distintos.', 3: 'Hierarquia urbana seria representada por cidades e redes de relações.', 4: 'Estruturas geológicas não seguem as divisões de drenagem mostradas.' } }),
  q({ n: 25, subject: 'Geografia', content: 'Geopolítica da Venezuela e petróleo',
    statement: `O reestabelecimento das relações comerciais e a distensão política entre a Venezuela e os Estados Unidos durante o governo Biden tem caracterizado uma reaproximação pragmática de ambas as partes. Do lado estadunidense, o pragmatismo é fruto da necessidade de realinhamento das posições e relações em níveis regional e global por conta da disputa por hegemonia com a China. Para a Venezuela, o pragmatismo retoma uma antiga tradição da política externa de se relacionar simultaneamente com grandes potências em disputa, a fim de otimizar a obtenção de benefícios, nesse caso, a redução das sanções, a ampliação do comércio e a entrada de investimentos. As relações entre Washington e Caracas nunca se restringiram ao interesse da política hemisférica e seus impactos na geopolítica global sempre foram importantes.

(Leonardo Valente. Lua Nova: Revista de Cultura e Política, 17.06.2024. Adaptado.)

As relações entre os Estados Unidos e a Venezuela estão relacionadas à grande importância geopolítica do país sul-americano devido`, blockTypes: ['quote', 'source', 'command'],
    alternatives: ['aos expressivos volumes de exportação de produtos agrícolas, o que lhe confere papel crucial na segurança alimentar global.', 'às vastas reservas de ouro e metais preciosos, o que o torna um centro global de mineração.', 'aos investimentos na produção de tecnologia avançada, o que o torna um líder global em inovação tecnológica.', 'à localização estratégica no oceano Pacífico, o que lhe confere o controle de rotas comerciais internacionais.', 'à presença de grandes reservas de petróleo, o que lhe confere um papel estratégico no setor energético global.'], answer: 'E',
    why: 'As grandes reservas petrolíferas venezuelanas dão ao país relevância energética e explicam parte do interesse geopolítico e econômico dos Estados Unidos.',
    wrong: { 0: 'A Venezuela não tem esse papel global como exportadora agrícola.', 1: 'Metais preciosos não constituem o principal eixo dessas relações.', 2: 'O país não se destaca como líder global de tecnologia avançada.', 3: 'A Venezuela tem costa no Caribe e no Atlântico, não no Pacífico.' } }),
  q({ n: 26, subject: 'História', content: 'Guerra dos Cem Anos e monarquias nacionais',
    statement: `As relações feudo-vassálicas promoveram uma interação maior entre os grupos aristocráticos e uma multiplicação do número de senhores, o que gerava grande complexidade das relações sociais. Um vassalo poderia ser, inclusive, mais rico e poderoso do que o seu suserano. No final da Idade Média, o rei inglês, pelas terras que possuía em feudo na França, era vassalo do rei francês, uma situação que ajuda a explicar a eclosão da Guerra dos Cem Anos, que se estendeu de 1337 a 1453.

(Marcelo Cândido da Silva. História Medieval, 2023. Adaptado.)

A guerra mencionada no excerto`, blockTypes: ['quote', 'source', 'command'],
    alternatives: ['precipitou as rebeliões camponesas contrárias ao feudalismo na Inglaterra e na França.', 'favoreceu o desenvolvimento das atividades mercantis entre Inglaterra e França.', 'teve consequências nas formações das monarquias nacionais na Inglaterra e na França.', 'consolidou as relações militares entre senhores territoriais ingleses e franceses.', 'resultou de rivalidades religiosas entre as monarquias inglesa e francesa.'], answer: 'C',
    why: 'O conflito fortaleceu processos de centralização política e identidades monárquicas, com desdobramentos importantes na formação dos Estados nacionais inglês e francês.',
    wrong: { 0: 'Rebeliões camponesas ocorreram no período, mas não são a consequência central apontada.', 1: 'A guerra prejudicou rotas e atividades mercantis em diversos momentos.', 3: 'O conflito opôs as monarquias e não consolidou uma aliança entre seus senhores.', 4: 'Suas origens envolvem sucessão e domínios territoriais, não rivalidade religiosa.' } }),
  q({ n: 27, subject: 'História', content: 'Brasil colonial e representações indígenas',
    statement: 'O artista holandês Albert Eckhout (1610-1666) veio ao Brasil, em 1637, na comitiva de Maurício de Nassau. A tela a seguir, Dança Tapuia, foi a obra de Eckhout que mais chocou o público europeu. Mostra oito homens indígenas dançando, observados por duas mulheres indígenas.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q27-danca-tapuia.svg', alt: 'Dança Tapuia, de Albert Eckhout, com homens indígenas dançando e duas mulheres observando.' }],
    statementAfter: '(Joelza Ester Domingues. https://ensinarhistoria.com.br, 17.04.2024. Adaptado.)\n\nO choque dos europeus em relação à tela está relacionado à', afterBlockTypes: ['source', 'command'],
    alternatives: ['incompreensão das manifestações culturais indígenas.', 'utilização de técnicas de pintura revolucionárias pelo artista.', 'exclusão das mulheres do ritual representado.', 'supressão de cultos religiosos entre os indígenas.', 'resistência indígena ao domínio colonial.'], answer: 'A',
    why: 'O estranhamento europeu decorria da incompreensão e do olhar etnocêntrico sobre costumes e manifestações culturais indígenas.',
    wrong: { 1: 'A técnica pictórica não era o elemento responsável pelo choque.', 2: 'A presença das mulheres como observadoras não explica a reação europeia.', 3: 'A tela registra uma manifestação cultural, não sua supressão.', 4: 'A cena não representa diretamente resistência armada ao colonialismo.' } }),
  q({ n: 28, subject: 'História', content: 'Expansão territorial dos Estados Unidos',
    statement: `Esta concepção tem várias raízes na política norte-americana. Basicamente, ela se pauta na ideia de uma expansão continental, até a costa do Pacífico. Esta ideia já estava presente no discurso jeffersoniano quando da compra da Luisiana, mas a pressão escravista por novas terras aráveis aumentou a pressão sobre o governo federal em favor de apoio para o avanço sobre as terras mexicanas, dando novo sentido à posição intervencionista do governo norte-americano.

(Vitor Izecksohn. “Estados Unidos: uma História”, 2022. Adaptado.)

A concepção mencionada no excerto ficou conhecida como`, blockTypes: ['quote', 'source', 'command'],
    alternatives: ['Doutrina Monroe.', 'Destino Manifesto.', 'Macarthismo.', 'New Deal.', 'Big Stick.'], answer: 'B',
    why: 'O Destino Manifesto sustentava que os Estados Unidos teriam o destino de expandir seu território pelo continente até o Pacífico.',
    wrong: { 0: 'A Doutrina Monroe opunha-se à intervenção europeia nas Américas.', 2: 'O macarthismo foi uma campanha anticomunista do século XX.', 3: 'O New Deal reuniu políticas de recuperação econômica nos anos 1930.', 4: 'O Big Stick refere-se à diplomacia da força associada a Theodore Roosevelt.' } }),
  q({ n: 29, subject: 'História', content: 'Samba e memória cultural',
    statement: `Analise os versos da canção “Desde que o samba é samba”, composta por Caetano Veloso em 1993.

A tristeza é senhora
Desde que o samba é samba, é assim
A lágrima clara sobre a pele escura
A noite, a chuva que cai lá fora
[...]
O samba é o pai do prazer
O samba é o filho da dor
O grande poder transformador

(www.letras.mus.br)

Os versos da canção expressam`, blockTypes: ['prose', 'poem', 'source', 'command'],
    alternatives: ['o caráter socialmente elitista do gênero musical no Brasil.', 'a celebração da alegria intensa do povo brasileiro nas composições do gênero musical.', 'a ausência de modificações estilísticas do gênero musical ao longo de sua história.', 'a reiteração de temas significativos ao longo da vigência do gênero musical.', 'a posição marginal do gênero musical no interior da cultura da nação brasileira contemporânea.'], answer: 'D',
    why: 'A associação entre samba, tristeza, dor e transformação reaparece historicamente no gênero; a canção reitera esses temas significativos.',
    wrong: { 0: 'O samba não é apresentado como gênero elitista.', 1: 'Os versos combinam prazer e dor, não apenas alegria intensa.', 2: 'A permanência de temas não significa ausência de mudanças estilísticas.', 4: 'A canção afirma a centralidade cultural do samba, não sua marginalidade atual.' } }),
  q({ n: 30, subject: 'História', content: 'Plano Marshall e Guerra Fria',
    statement: 'Analise o cartaz divulgado no contexto da Guerra Fria.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q30-marshall.svg', alt: 'Cartaz “Plano Marshall — Cimento da Europa”, com personagem aplicando cimento sobre o mapa europeu.' }],
    statementAfter: '(https://imagohistoria.blogspot.com)\n\nO cartaz faz propaganda de um plano', afterBlockTypes: ['source', 'command'],
    alternatives: ['político para dominar as nações recém-libertas do neocolonialismo.', 'diplomático para aproximar os territórios capitalistas dos socialistas.', 'econômico para reestruturar a Europa Ocidental pós-Segunda Guerra.', 'ideológico para formar uma “cortina de ferro” contra o avanço da URSS.', 'social para incentivar a construção civil nos EUA após a Grande Depressão.'], answer: 'C',
    why: 'O Plano Marshall ofereceu ajuda econômica estadunidense à reconstrução da Europa Ocidental após a Segunda Guerra, também contendo a influência soviética.',
    wrong: { 0: 'O plano não se dirigiu primordialmente a antigas colônias recém-independentes.', 1: 'Seu objetivo não era aproximar capitalistas e socialistas.', 3: 'A “cortina de ferro” descreve a divisão europeia, não o programa econômico anunciado.', 4: 'O cartaz trata da Europa pós-guerra, não da construção civil dos EUA na Grande Depressão.' } }),
  q({ n: 31, subject: 'Inglês', content: 'Compreensão de texto e estereótipos de gênero', statement: GENERO, blockTypes: GENERO_BLOCKS,
    statementAfter: 'The main purpose of the text is to', afterBlockTypes: ['command'],
    alternatives: ['discuss the specific roles and responsibilities that men and women should ideally fulfill in society.', 'provide a detailed description of the historical development and evolution of gender stereotypes over time.', 'argue that women are inherently better caregivers than men due to their natural nurturing abilities.', 'explain the various benefits that gender stereotypes can bring to society.', 'highlight how gender stereotypes affect personal and professional development of individuals.'], answer: 'E',
    why: 'O texto explica como estereótipos nocivos limitam capacidades pessoais, carreiras e escolhas e como perpetuam desigualdades.',
    wrong: { 0: 'O texto critica papéis impostos, em vez de defender funções ideais para cada gênero.', 1: 'Não há uma narrativa histórica detalhada da evolução dos estereótipos.', 2: 'A ideia de cuidadora natural é citada como exemplo de estereótipo, não defendida.', 3: 'O foco são danos e desigualdades, não benefícios.' } }),
  q({ n: 32, subject: 'Inglês', content: 'Relações de sentido e consequência', statement: GENERO, blockTypes: GENERO_BLOCKS,
    statementAfter: 'No contexto em que se insere, o trecho sublinhado que expressa ideia de consequência é:', afterBlockTypes: ['command'],
    alternatives: ['“A gender stereotype is a generalized view or preconception about attributes or characteristics” (1º parágrafo).', '“gender stereotypes compounded and intersecting with other stereotypes” (3º parágrafo).', '“harmful stereotypes perpetuate inequalities” (2º parágrafo).', '“certain groups of women, such as women from minority or indigenous groups” (3º parágrafo).', '“the roles that are or ought to be possessed by, or performed by, women and men” (1º parágrafo).'], answer: 'C',
    why: 'Perpetuar desigualdades é apresentado como resultado da existência e reprodução de estereótipos nocivos.',
    wrong: { 0: 'O trecho define estereótipo de gênero.', 1: 'A expressão descreve a combinação de estereótipos, não um resultado.', 3: 'O trecho exemplifica grupos particularmente afetados.', 4: 'A passagem integra a definição dos papéis atribuídos por estereótipos.' } }),
  q({ n: 33, subject: 'Inglês', content: 'Função gramatical de that', statement: GENERO, blockTypes: GENERO_BLOCKS,
    statementAfter: 'No trecho do segundo parágrafo “the traditional view of women as care givers means that child care responsibilities often fall exclusively on women”, o termo sublinhado é empregado com a mesma função do termo sublinhado em:', afterBlockTypes: ['command'],
    alternatives: [`She wants to try ${underline('that')} restaurant.`, `I didn’t see ${underline('that')} coming.`, `She doesn’t feel ${underline('that')} tired after the workout.`, `The label says ${underline('that')} the product is organic.`, `She didn’t run ${underline('that')} fast in the race.`], answer: 'D',
    why: 'Nos dois casos, “that” é conjunção que introduz uma oração substantiva após um verbo: “means that...” e “says that...”.',
    wrong: { 0: 'Antes de “restaurant”, “that” é determinante demonstrativo.', 1: 'Em “see that coming”, funciona como pronome demonstrativo.', 2: 'Antes de “tired”, “that” é advérbio de intensidade.', 4: 'Antes de “fast”, também funciona como advérbio de intensidade.' } }),
  q({ n: 34, subject: 'Inglês', content: 'Vocabulário e expressões idiomáticas', statement: CANCAO, blockTypes: CANCAO_BLOCKS,
    statementAfter: 'In the excerpt from the song “Some things are meant to be”, the underlined expression can be replaced, without meaning change, by:', afterBlockTypes: ['command'],
    alternatives: ['worth waiting for.', 'destined to happen.', 'beyond our control.', 'better left unsaid.', 'too good to be true.'], answer: 'B',
    why: '“Meant to be” significa “destined to happen”: algo destinado a acontecer.',
    wrong: { 0: '“Worth waiting for” significa digno de espera.', 2: 'Estar fora do controle não é sinônimo de estar destinado.', 3: '“Better left unsaid” significa melhor não dito.', 4: '“Too good to be true” expressa desconfiança diante de algo muito favorável.' } }),
  q({ n: 35, subject: 'Inglês', content: 'Conectivos e relação de causa', statement: CANCAO, blockTypes: CANCAO_BLOCKS,
    statementAfter: 'In the excerpt “For I can’t help falling in love with you”, the underlined word, in the context of the song,', afterBlockTypes: ['command'],
    alternatives: ['introduces a reason.', 'expresses a contrast.', 'adds extra information.', 'establishes a comparison.', 'presents an example.'], answer: 'A',
    why: 'Nesse verso, “for” equivale a “because” e introduz a razão da atitude expressa pelo eu lírico.',
    wrong: { 1: 'Contraste seria marcado por “but”, presente em outro verso.', 2: 'A palavra não apenas acrescenta um detalhe: estabelece causa.', 3: 'Comparações são construídas por “like”, não por esse “for”.', 4: 'Não há introdução de exemplo.' } }),
  q({ n: 36, subject: 'Física', content: 'Gráfico velocidade × tempo e deslocamento',
    statement: 'Dirigindo por uma estrada, um motorista teve de parar seu automóvel devido à interrupção do tráfego para a manobra de uma máquina que atuava na manutenção da via. Liberada a pista, esse motorista retoma o movimento de seu automóvel de modo gradativo e sem se apressar, acelerando seu veículo até que ele atinja a velocidade máxima permitida, conforme mostra o gráfico.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q36-velocidade.svg', alt: 'Gráfico de velocidade em km/h por tempo em segundos: repouso até 30 s, aceleração até 90 km/h aos 90 s e velocidade constante depois.' }],
    statementAfter: 'Do momento em que o automóvel deixa o repouso até o momento em que atinge a velocidade máxima, a distância percorrida por ele foi de', afterBlockTypes: ['command'],
    alternatives: ['750 m.', '250 m.', '500 m.', '1 000 m.', '1 500 m.'], answer: 'A',
    why: 'A aceleração ocorre entre 30 s e 90 s. Como 90 km/h = 25 m/s, o deslocamento é a área triangular: Δs = (60 × 25)/2 = 750 m.',
    wrong: { 1: 'Duzentos e cinquenta não corresponde à área sob o trecho acelerado.', 2: 'Quinhentos usa base ou velocidade incorretas.', 3: 'Mil não corresponde ao triângulo de 60 s de base e 25 m/s de altura.', 4: 'Esse valor é o dobro do deslocamento correto.' } }),
  q({ n: 37, subject: 'Física', content: 'Queda livre',
    statement: tex`Um andaime beira a lateral de um prédio sem tocá-la, enquanto mantém os profissionais que farão a pintura das paredes do edifício a 20 m de altura do chão. Acidentalmente, um dos pintores esbarra em uma lata de tinta, fazendo-a despencar com velocidade vertical inicial nula, até atingir o chão. Sendo a aceleração da gravidade igual a $10\ \mathrm{m/s^2}$ e desconsiderando a resistência do ar, a lata de tinta tocará o chão com velocidade de módulo igual a`, blockTypes: ['prose'],
    alternatives: ['10 m/s.', '15 m/s.', '16 m/s.', '25 m/s.', '20 m/s.'], answer: 'E',
    why: 'Pela equação de Torricelli, v² = v₀² + 2gΔh = 0 + 2 · 10 · 20 = 400; portanto, |v| = 20 m/s.',
    wrong: { 0: 'Dez resultaria de uma altura de apenas 5 m.', 1: 'Quinze não satisfaz v² = 2gh.', 2: 'Dezesseis não corresponde à raiz de 400.', 3: 'Vinte e cinco implicaria altura maior que a fornecida.' } }),
  q({ n: 38, subject: 'Física', content: 'Hidrostática e densidade de líquidos',
    statement: tex`Três líquidos, A, B e C, estão estaticamente em equilíbrio, assumindo posições como mostrado na figura.`, blockTypes: ['prose'],
    visuals: [{ file: 'p2-q38-liquidos.svg', alt: 'Tubo com líquidos imiscíveis: A acima de B no ramo esquerdo e C na região inferior e no ramo direito.' }],
    statementAfter: tex`Sendo $d_A$, $d_B$, $d_C$ as densidades dos líquidos A, B e C, uma relação entre essas densidades, que justifica os posicionamentos dos líquidos como mostrado na figura, é:`, afterBlockTypes: ['command'],
    alternatives: [tex`$d_A=d_B>d_C$`, tex`$d_A<d_B=d_C$`, tex`$d_A<d_B<d_C$`, tex`$d_A=d_B=d_C$`, tex`$d_A>d_B>d_C$`], answer: 'C',
    why: 'Em líquidos imiscíveis em equilíbrio, o menos denso fica acima e o mais denso abaixo. A posição A sobre B sobre C indica dA < dB < dC.',
    wrong: { 0: 'A e B não ocupam o mesmo nível como líquidos de igual densidade e C é o mais denso.', 1: 'B e C não têm igual densidade na configuração mostrada.', 3: 'Densidades iguais não explicariam a estratificação dos três líquidos.', 4: 'A ordem inversa colocaria o líquido mais denso no topo, situação incompatível com o equilíbrio.' } }),
  q({ n: 39, subject: 'Física', content: 'Calorimetria e potência térmica',
    statement: 'Um cubo de gelo de massa 300 g, a 0 ºC, recebe calor de uma fonte de fluxo constante, que derrete esse cubo e, em seguida, aquece a água obtida até 80 ºC, conforme mostra o gráfico.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q39-calor.svg', alt: 'Temperatura em função do tempo: gelo a 0 °C até 20 s e água aquecida a 80 °C aos 40 s.' }],
    statementAfter: 'Considere o calor latente de fusão do gelo igual a 80 cal/g, o calor específico da água igual a 1 cal/(g·ºC), a temperatura de fusão do gelo igual a 0 ºC e 1 cal = 4 J. Admitindo que todo o calor fornecido pela fonte térmica seja absorvido pelo gelo e, posteriormente, pela água, a potência da fonte térmica utilizada é', afterBlockTypes: ['command'],
    alternatives: ['2,4 kW.', '3,2 kW.', '2,0 kW.', '4,8 kW.', '1,6 kW.'], answer: 'D',
    why: 'A fusão consome 24 000 cal e o aquecimento outros 24 000 cal, totalizando 48 000 cal = 192 000 J. Como tudo ocorre em 40 s, P = 192 000/40 = 4 800 W = 4,8 kW.',
    wrong: { 0: 'Esse valor considera apenas parte do calor ou tempo incorreto.', 1: 'Três vírgula dois não resulta da energia total de 192 kJ.', 2: 'Dois não corresponde à potência necessária para o processo em 40 s.', 4: 'Um vírgula seis subestima o calor total fornecido.' } }),
  q({ n: 40, subject: 'Física', content: 'Circuito elétrico e lei de Ohm',
    statement: 'O circuito da figura foi construído usando-se elementos ideais. Por meio da manipulação do reostato, que é um resistor variável e funciona conforme esquematizado, é possível controlar a corrente elétrica que se estabelece nesse circuito.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q40-circuito.svg', alt: 'Circuito série com fonte de 36 V, resistor de 4 Ω, reostato Rx e amperímetro ideal.' }],
    statementAfter: tex`Deseja-se que uma corrente elétrica de 4 A passe pelo amperímetro do circuito. Para isso, o valor da resistência elétrica $R_x$ deverá ser de`, afterBlockTypes: ['command'],
    alternatives: ['5 Ω.', '6 Ω.', '4 Ω.', '8 Ω.', '9 Ω.'], answer: 'A',
    why: 'Pela lei de Ohm, a resistência total deve ser R = U/i = 36/4 = 9 Ω. Como o resistor de 4 Ω está em série com Rx, Rx = 9 − 4 = 5 Ω.',
    wrong: { 1: 'Seis ohms produziria resistência total de 10 Ω e corrente menor que 4 A.', 2: 'Quatro ohms daria corrente de 4,5 A.', 3: 'Oito ohms levaria a uma corrente de 3 A.', 4: 'Nove é a resistência total, não o valor isolado de Rx.' } }),
];
