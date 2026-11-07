import { q } from './ufpr2027-helpers.js';

export const ufpr2027Lote06 = [
  q({
    n: 51, subject: 'Literatura', content: 'Condição feminina em A falência e O quinze', difficulty: 'Média',
    statement: 'As ações dos romances A falência, de Júlia Lopes de Almeida, e O quinze, de Rachel de Queiroz, se passam em um momento de mudanças no Brasil, entre a Proclamação da República e a Primeira Guerra Mundial. Entre essas mudanças, destaca-se a das condições de vida das mulheres, questão importante para ambas as obras. Assinale a alternativa correta no que diz respeito à questão feminina nos dois livros.',
    blockTypes: ['prose'],
    works: ['A falência', 'O quinze'],
    alternatives: [
      'Tanto Conceição, de O quinze, que não se casa mesmo sentindo que algo lhe falta, quanto Camila, de A falência, que busca trabalhar após saber que não poderá se casar, são figuras de transição dos valores tradicionais para os modernos.',
      'As personagens femininas mais pobres, como Noca e Nina, de A falência, ou Cordulina e Mocinha, de O quinze, têm sua situação econômica agravada porque, sendo mulheres, são impedidas de trabalhar para obter renda.',
      'Dona Inácia, avó de Conceição em O quinze, assim como dona Joana, tia de Camila em A falência, apesar de mais velhas, revoltam-se contra o controle que a religião exerce sobre os destinos das mulheres naquela época.',
      'As personagens femininas negras, como Josefa, de O quinze, e Sancha, de A falência, são respeitadas pelas personagens brancas, numa demonstração de solidariedade entre as mulheres que é marca de modernidade de ambos os livros.',
    ],
    answer: 'A',
    why: 'Em O quinze (1930), a professora Conceição recusa o casamento convencional com Vicente para manter sua autonomia intelectual, embora enfrente o dilema da solidão; em A falência (1901), Camila e sua mãe buscam o trabalho autônomo (costura e aulas) após a bancarrota de Francisco Teodoro para sobreviver sem a tutela patriarcal, encarnando a transição entre o modelo burguês tradicional e a emancipação feminina moderna.',
    wrong: {
      1: 'As mulheres pobres de ambas as obras trabalham intensamente em serviços domésticos, agrícolas e informais de subsistência.',
      2: 'Dona Inácia é profundamente religiosa, conservadora e resignada aos dogmas cristãos da época, sem traço de revolta contra a Igreja.',
      3: 'Persiste nas duas obras o preconceito racial e a subalternização das trabalhadoras domésticas negras por parte das elites senhoriais brancas.',
    },
  }),
  q({
    n: 52, subject: 'Literatura', content: 'Representação de personagens negros em O demônio familiar e O drible', difficulty: 'Média',
    statement: 'Um século e meio separam a primeira encenação de O demônio familiar (1857) e a publicação de O drible (2013). Tanto no teatro de José de Alencar quanto no romance de Sérgio Rodrigues, podemos acompanhar a trajetória de personagens negros. Sobre esse aspecto, assinale alternativa correta.',
    blockTypes: ['prose'],
    works: ['O demônio familiar', 'O drible'],
    alternatives: [
      'Em O demônio familiar, a malícia e as artimanhas de Pedro são punidas com rigor, razão pela qual seu grande sonho é ser vendido para outra família.',
      'Em O drible, as surras em Neto são motivadas pela grosseria e pelo desrespeito com que trata Conceição, funcionária da casa e amante de Murilo Filho.',
      'No romance de Rodrigues, a ascendência negra de Neto é sinalizada já nas páginas iniciais a partir do apelido preconceituoso utilizado por Murilo Filho.',
      'Na peça de Alencar, “negrinho” é a expressão utilizada por Eduardo para se referir genericamente a Pedro e aos outros personagens escravizados.',
    ],
    answer: 'C',
    why: 'Na abertura de O drible, o cronista esportivo Murilo Filho dirige-se ao filho Neto depreciativamente com termos e apelidos de teor racista (marcando a distância afetiva, o ressentimento e a ascendência negra herdada da mãe), expondo o racismo estrutural nas relações familiares brasileiras.',
    wrong: {
      0: 'Em O demônio familiar, Pedro deseja a alforria e a aproximação afetiva com seus senhores, e seu castigo final é justamente ser alforriado e afastado do convívio familiar pelo qual interferia nos casamentos.',
      1: 'A violência física e psicológica imposta por Murilo Filho a Neto no romance decorre de desavenças profundas ligadas à masculinidade tóxica, autoritarismo e repressão da ditadura militar, e não desse motivo pontual.',
      3: 'Em Alencar, Eduardo e a família tratam Pedro com paternalismo típico do patriarcalismo escravista carioca, sem essa generalização redutora.',
    },
  }),
  q({
    n: 53, subject: 'Literatura', content: 'Conto contemporâneo — O sol na cabeça (Geovani Martins)', difficulty: 'Fácil',
    statement: `Leia a seguir o primeiro parágrafo de “O mistério da vila”, um dos treze contos publicados por Geovani Martins em 2018, na obra O sol na cabeça:

“Depois da chuva que veio – bem na hora certa – refrescar a noite quente, o Ruan, a Thaís e o Matheus voltaram voados pra rua, querendo sentir o vento que andava sumido desde a chegada do verão. No final da vila onde se encontraram, mora dona Iara, uma das senhoras mais antigas da rua, que já vê a terceira geração de sua família crescer no pedaço de terra que ajudou a desbravar. Vem de lá o cheiro de macumba.”

Martins, Geovani. O mistério da vila. In: O sol na cabeça. São Paulo: Companhia das Letras, 2018. p. 91.

O conto de Geovani Martins tem como pano de fundo:`,
    blockTypes: ['prose', 'quote', 'source', 'command'],
    works: ['O mistério da vila', 'O sol na cabeça'],
    alternatives: [
      'o contraste entre a segurança do espaço sagrado – a sala da casa de Dona Iara, ambiente central do enredo – e o espaço da rua, marcado pela violência diária da cidade grande, que afeta as brincadeiras infantis.',
      'a convivência do sincretismo religioso com o crescimento de igrejas com diferentes orientações religiosas nas últimas décadas, flagrando mudanças importantes que vêm ocorrendo na sociedade brasileira.',
      'o clima sobrenatural de que são revestidos os terreiros, por meio das visitas diárias que as crianças da vila fazem furtivamente à casa de Dona Iara para cultuar os orixás e que são mantidas em segredo.',
      'a introdução das religiões de matriz africana no Brasil, a partir do relato no qual Dona Iara conta, para as três crianças, detalhes da trajetória de vida que culmina em sua transformação em mãe de santo.',
    ],
    answer: 'B',
    why: 'Em "O mistério da vila", Geovani Martins retrata o cotidiano da periferia carioca onde tradições de matriz afro-brasileira (o terreiro de Dona Iara) passam a coexistir com o avanço e a pressão de denominações evangélicas neopentecostais, registrando as transformações culturais e tensões de sociabilidade religiosa na favela contemporânea.',
    wrong: {
      0: 'A rua no conto é o espaço lúdico fundamental de brincadeira e liberdade das crianças após a chuva de verão.',
      2: 'As crianças não realizam visitas cultuais secretas diárias para adoração formal aos orixás; movem-se pela curiosidade pueril em relação ao vizinho e ao cheiro das oferendas.',
      3: 'O conto não tem caráter histórico retrospectivo sobre o tráfico negreiro ou a introdução primordial das religiões africanas no período colonial.',
    },
  }),
  q({
    n: 54, subject: 'Filosofia', content: 'Filosofia Política — Carole Pateman e a teoria da democracia participativa', difficulty: 'Média',
    statement: `“Os dados obtidos em amplas investigações empíricas sobre atitudes e comportamentos políticos, realizadas na maioria dos países ocidentais nos últimos vinte ou trinta anos, revelaram que a característica mais notável da maior parte dos cidadãos, principalmente os de grupos de condição socioeconômica baixa, é uma falta de interesse generalizada em política e por atividades políticas.”

Pateman, Carole. Participação e teoria democrática. Rio de Janeiro: Paz e Terra, 1992. p. 11.

O trecho acima, retirado da obra Participação e teoria democrática, de Carole Pateman, aborda um aspecto que levou a autora a defender que a democracia:`,
    blockTypes: ['quote', 'source', 'command'],
    works: ['Participação e teoria democrática'],
    alternatives: [
      'consiste numa sociedade em que há ampla participação.',
      'constitui um arranjo institucional para se chegar a decisões políticas.',
      'é um sistema político que amortece o choque das discordâncias.',
      'é incompatível com ambientes hierarquizados de socialização.',
    ],
    answer: 'A',
    why: 'Carole Pateman contesta a teoria democrática elitista/revisionista (de Schumpeter, Dahl e Sartori), que justificava a apatia das massas como fator de estabilidade. Pateman sustenta que a verdadeira democracia não é mero método eleitoral de escolha de elites, mas um modo de vida social participativo integral, no qual os cidadãos desenvolvem eficácia política e senso de justiça participando diretamente nas tomadas de decisão cotidianas (inclusive no trabalho e na comunidade).',
    wrong: {
      1: 'A definição da democracia como mero arranjo institucional eleitoral é a tese de Joseph Schumpeter, frontalmente criticada por Pateman.',
      2: 'A tese de amortecimento pacificador de divergências pertence ao modelo liberal elitista contemporâneo.',
      3: 'Pateman argumenta que os ambientes cotidianos (mesmo quando hoje hierarquizados) devem ser democratizados para viabilizar a participação, e não que sejam inerentemente impermeáveis à mudança.',
    },
  }),
  q({
    n: 55, subject: 'Filosofia', content: 'Filosofia Antiga — Platão e o mito de Er (A República)', difficulty: 'Média',
    statement: 'Com a narrativa do mito de Er, ao final de A República, Platão:',
    blockTypes: ['prose'],
    works: ['A República'],
    alternatives: [
      'conclui a obra mostrando de forma alegórica no que consiste, afinal, a Justiça.',
      'ressalta a importância de se definir critério para distinguir as boas e as más escolhas.',
      'defende que as escolhas presentes devem ser feitas com base na experiência passada.',
      'mostra de que forma o desenvolvimento de bons hábitos dá lugar a boas escolhas.',
    ],
    answer: 'B',
    why: 'No livro X de A República, o guerreiro Er ressuscita e relata a visão do pós-morte, onde as almas devem escolher seus próximos destinos e modos de vida diante das Moiras. Platão enfatiza aí o momento supremo da responsabilidade moral: a posse do saber filosófico é o único critério que permite discernir com retidão uma vida justa de uma vida tirânica e desgraçada, pois nem o hábito irrefletido nem a sorte garantem boas escolhas.',
    wrong: {
      0: 'A definição da Justiça (como harmonia das partes da alma e da pólis) é desenvolvida longamente ao longo dos livros IV e V da obra.',
      2: 'Muitas almas que viveram virtuosamente no passado apenas por hábito escolhem vidas tirânicas e desastrosas por falta de discernimento filosófico consciente.',
      3: 'Platão demonstra justamente o limite do hábito sem filosofia: almas que vinham do céu por terem seguido a virtude apenas por costume escolhem a tirania por deslumbre.',
    },
  }),
  q({
    n: 56, subject: 'Filosofia', content: 'Filosofia e Pensamento Negro — Sueli Carneiro e o epistemicídio', difficulty: 'Média',
    statement: 'No livro Dispositivo de racialidade, Sueli Carneiro afirma que o epistemicídio constitui um dos elementos centrais do dispositivo de racialidade, sendo responsável pela produção de uma “razão racializada”. Diante desse processo de exclusão e deslegitimação de saberes, o que a autora propõe para o enfrentamento do epistemicídio nas instituições de ensino superior?',
    blockTypes: ['prose'],
    works: ['Dispositivo de racialidade'],
    alternatives: [
      'A promoção da pacificação social por meio do apagamento das tensões e dos conflitos raciais, afirmando a ideia de democracia racial.',
      'A defesa de uma estratégia anti-intelectualista, já que o trabalho intelectual é também marcado pelo dispositivo de racialidade.',
      'A busca por reconhecimento acadêmico pela demonstração da excelência de estudantes negros segundo os paradigmas da racionalidade ocidental.',
      'A constituição de espaços institucionais próprios que possam referenciar e apoiar a trajetória intelectual das pessoas negras.',
    ],
    answer: 'D',
    why: 'Para desmontar o epistemicídio (a anulação sistemática da capacidade epistêmica e dos saberes de sujeitos racializados), Sueli Carneiro defende ações afirmativas e a criação de redes, núcleos de estudos afro-brasileiros e espaços acadêmicos institucionalizados que acolham, sustentem e visibilizem as epistemologias e produções intelectuais de pensadores e estudantes negros.',
    wrong: {
      0: 'A autora denuncia o mito da democracia racial como uma das armas ideológicas mais nefastas do dispositivo de racialidade no Brasil.',
      1: 'Sueli Carneiro não propõe anti-intelectualismo, mas a descolonização e pluralização do pensamento acadêmico.',
      2: 'A mera submissão passiva aos cânones eurocêntricos reproduz a colonialidade do saber em vez de superá-la.',
    },
  }),
  q({
    n: 57, subject: 'Filosofia', content: 'Filosofia da Ciência — Karl Popper e a lógica do falseacionismo', difficulty: 'Média',
    statement: `Considere o seguinte texto:

“Admito, com sinceridade, que, ao formular minhas propostas, fui guiado por juízos de valor e por algumas predileções de ordem pessoal. Mas espero que as propostas se tornem aceitáveis para os que apreciam não só o rigor lógico, mas também a ausência de dogmatismos; para os que se importam com as aplicações práticas, mas se interessam ainda mais pelas aventuras da ciência, pelas descobertas que, uma após outra, nos acareiam com novas e inesperadas perguntas, obrigando-nos a tentar encontrar respostas novas e insupeitadas.”

Popper, Karl. A Lógica da Pesquisa Científica. São Paulo: Editora Cultrix, 2008. cap. 1, p. 39.

Considerando as informações apresentadas, assinale a alternativa que apresenta corretamente uma das propostas de Popper.`,
    blockTypes: ['prose', 'quote', 'source', 'command'],
    works: ['A Lógica da Pesquisa Científica'],
    alternatives: [
      'As ciências empíricas se caracterizam pelo fato de empregarem métodos indutivos, de maneira que a lógica da pesquisa científica se identifica com a lógica indutiva.',
      'O critério de demarcação entre a ciência empírica e a metafísica consiste no significado dos enunciados, razão pela qual, não sendo possível determinar se um enunciado é verdadeiro, o seu significado se confunde com o método de sua verificação.',
      'As teorias científicas nunca são inteiramente justificáveis ou verificáveis, de modo que a objetividade dos enunciados reside na circunstância de poderem ser intersubjetivamente submetidos a teste.',
      'O objetivo da análise lógica do conhecimento é descobrir um método de invenção de ideias claras e distintas, e esse método se baseia em uma lógica dedutiva.',
    ],
    answer: 'C',
    why: 'No falseacionismo de Karl Popper, nenhum número de observações particulares pode verificar conclusivamente uma hipótese universal (problema da indução). Uma teoria científica tem caráter sempre conjectural e provisório; sua cientificidade e objetividade residem na sua testabilidade empírica, isto é, na possibilidade lógica de ser submetida a testes intersubjetivos severos e ser refutada.',
    wrong: {
      0: 'Popper rejeita radicalmente a indução como critério de demarcação científica, propondo o método dedutivo de prova.',
      1: 'A teoria verificacionista do significado era defendida pelo Círculo de Viena (positivismo lógico), corrente criticada por Popper.',
      3: 'Popper separa a psicologia da descoberta (invenção criativa de teorias, que não segue lógica formal) da lógica da justificação e do teste.',
    },
  }),
  q({
    n: 58, subject: 'Filosofia', content: 'Teoria Crítica e Filosofia Política — Rousseau e Sueli Carneiro sobre desigualdades', difficulty: 'Média',
    statement: 'Ao se comparar a análise de Rousseau na segunda parte do Discurso sobre a origem e os fundamentos da desigualdade entre os homens com a discussão de Sueli Carneiro, no livro Dispositivo de racialidade, é possível identificar uma aproximação entre os autores. Essa aproximação consiste na ideia de que:',
    blockTypes: ['prose'],
    works: ['Discurso sobre a origem e os fundamentos da desigualdade entre os homens', 'Dispositivo de racialidade'],
    alternatives: [
      'as desigualdades sociais e raciais decorrem principalmente de capacidades e características inerentes aos diferentes grupos humanos.',
      'a dominação se estabelece por meio da força física e desconsidera os mecanismos simbólicos de legitimação.',
      'as relações de desigualdade raciais e sociais são historicamente produzidas e dependem de processos que as naturalizam.',
      'tanto Sueli Carneiro quanto Jean-Jacques Rousseau acreditam no progresso das ciências, das instituições políticas e da educação.',
    ],
    answer: 'C',
    why: 'Rousseau demonstra que a desigualdade política/social não é originária da natureza, mas resulta de processos históricos (invenção da propriedade privada e leis civis dos ricos que enganaram os pobres). Similarmente, Sueli Carneiro (dialogando com Foucault) demonstra que a hierarquia racial não tem fundamento biológico, mas é uma tecnologia discursiva e de poder historicamente construída para naturalizar a dominação branca.',
    wrong: {
      0: 'Ambos os pensadores recusam taxativamente o determinismo inatista ou biológico para explicar as hierarquias humanas.',
      1: 'Tanto Rousseau quanto Carneiro enfatizam o papel central das normas jurídicas, do discurso, da ideologia e da legitimação simbólica na manutenção do poder.',
      3: 'Rousseau é célebre por sua visão crítica ao progresso das ciências e artes no Discurso de 1750, considerando-o motor de corrupção moral e opressão.',
    },
  }),
  q({
    n: 59, subject: 'Sociologia', content: 'Sociologia Compreensiva — Max Weber e os tipos ideais de dominação legítima', difficulty: 'Fácil',
    statement: `“Uma vez que Weber entende que o social se constrói a partir das ações individuais, cria-se um problema teórico: como é possível a continuidade da vida social? A resposta para tal questão encontra-se no fundamento da organização social, chave do verdadeiro problema sociológico: a dominação ou a produção da legitimidade, da submissão de um grupo a um mandato. É fundamental, então, distinguir os conceitos de poder e dominação.”

Quintaneiro, T.; Barbosa, M. L. de O.; Oliveira, M. G. M. de. Um toque de clássicos: Marx, Durkheim e Weber. Belo Horizonte: Editora UFMG, 2003. p. 119-120.

Considerando o conceito weberiano de dominação apresentado pelas autoras, é correto afirmar:`,
    blockTypes: ['quote', 'source', 'command'],
    works: ['Um toque de clássicos: Marx, Durkheim e Weber'],
    alternatives: [
      'A dominação pode ser compreendida a partir de três tipos ideais que permitem compreender a organização social: os tipos carismático, legal e tradicional.',
      'A dominação decorre de um processo de coesão social fundada numa racionalidade objetiva que visa transformar a sociedade democrática numa sociedade autoritária.',
      'Os tipos carismático e legal são formas complementares de dominação que buscam explicar um tipo de sociedade com características eurocêntricas.',
      'O poder como forma simbólica de exercício da dominação é inerente às sociedades de perfil socialista, que visam manter uma estrutura de poder autoritária.',
    ],
    answer: 'A',
    why: 'Em Economia e Sociedade, Max Weber define dominação como a probabilidade de encontrar obediência a um mandato determinado com base na crença em sua legitimidade, tipificando-a em três modelos ideais fundamentais: dominação tradicional (baseada nos costumes sagrados de outrora), dominação carismática (baseada na devoção a qualidades extraordinárias de um líder) e dominação racional-legal (baseada na validade de normas e leis estatuídas formalmente, operada por uma burocracia técnica).',
    wrong: {
      1: 'Coesão social objetiva como imposição exterior é formulada por Émile Durkheim, não por Weber.',
      2: 'Os tipos ideais weberianos são ferramentas metodológicas heurísticas universais para a análise histórica de qualquer civilização, não apenas da Europa.',
      3: 'O poder (Macht) é a probabilidade de impor a própria vontade em uma relação social mesmo contra resistência, não sendo exclusivo de modelos socialistas.',
    },
  }),
  q({
    n: 60, subject: 'Sociologia', content: 'Sociologia e Gênero — O cânone clássico e as pioneiras do pensamento social', difficulty: 'Média',
    statement: `“Os estudos de gênero operam um corte que interrompe a linearidade narrativa, explicando o caráter relativo e arbitrário da circunscrição de certos temas e procedimentos, instituindo a possibilidade de afetar parâmetros pelos quais a sociologia opera. Talvez seja preciso interrogar a relação entre as pioneiras da sociologia, o cânone, a ideia de clássico e, sobretudo de que modo tudo isso afeta o cotidiano da sociologia em nossos dias. [...] Caracterizar uma autora como pioneira da sociologia não é o mesmo que considerá-la uma clássica. [...] Um dos principais caminhos para que isso possa ocorrer é a inclusão da autora ou do autor no cânone, isto é, no conjunto de referências consideradas obrigatórias por uma determinada comunidade intelectual, cujo papel se faz sentir, sobretudo nos processos de formação das novas gerações e, assim, colocam uma série de textos como referências compartilhadas que serão merecedoras de atenção.”

Daflon, V. T.; Sorj, B. (orgs.). Clássicas do pensamento social: mulheres e feminismos no século XIX. Rio de Janeiro: Rosa dos Tempos, 2021. p. 11-12.

Considerando a relação entre o pensamento social clássico e a abordagem a partir da perspectiva de gênero, assinale a alternativa correta.`,
    blockTypes: ['quote', 'source', 'command'],
    works: ['Clássicas do pensamento social: mulheres e feminismos no século XIX'],
    alternatives: [
      'Investigar as sociólogas pioneiras ajuda a evidenciar que, nos séculos XVIII e XIX, suas pesquisas introduziram poucas inovações relevantes na análise sociológica hegemônica.',
      'O recorte de gênero é relativamente determinante no trabalho teórico realizado por homens, reproduzindo a hegemonia da agenda de pesquisa sociológica entre os séculos XVIII e XIX.',
      'As reflexões desenvolvidas pelas primeiras sociólogas não apenas ampliaram a presença da produção intelectual feminina no cânone da sociologia, como permitiram diversificar o repertório de temas na análise dos problemas sociais.',
      'A discussão em torno do papel da literatura canônica da sociologia é importante porque demonstra como o pensamento clássico ainda é pertinente, sobretudo quando este evoca a noção de tradição.',
    ],
    answer: 'C',
    why: 'A recuperação das autoras clássicas e pioneiras (como Harriet Martineau, Marianne Weber, Jane Addams e Flora Tristan) que foram historicamente invisibilizadas pelo cânone androcêntrico possibilita não somente resgatar a autoria feminina, mas também expandir o horizonte sociológico para temas como a divisão sexual do trabalho, o espaço doméstico, a moralidade pública e as opressões interseccionais.',
    wrong: {
      0: 'As pioneiras produziram contribuições metodológicas inovadoras e fundacionais para a observação social e a sociologia aplicada.',
      1: 'Os clássicos masculinos hegemônicos ignoravam ou secundarizavam a questão de gênero em suas teorizações do século XIX.',
      3: 'O texto das autoras propõe a crítica desconstrutiva e a ampliação do cânone, e não a defesa acrítica da tradição herdada.',
    },
  }),
];
