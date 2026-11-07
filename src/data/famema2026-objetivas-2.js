import { createFamema, tex } from './famema-helpers.js';
const { q } = createFamema(2026);
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const NEWS_INTRO = `Leia o texto para responder às questões de 31 a 35.

Newspaper sales have been in decline for decades, and most Americans now prefer to get news from digital devices. In this environment, many news organizations — and not just newspapers — put paywalls¹ on their websites or apps, blocking access to articles or other content unless news consumers pay or subscribe.

The vast majority of Americans (83%) say they have not paid for news in 2024, according to a survey. Another 17% say they have directly paid or given money to a news source by subscribing, donating or becoming a member during that time.`;
const NEWS_BLOCKS = ['prose', 'prose', 'prose'];
const NEWS_VISUAL = [{ file: 'p2-q31-grafico.svg', alt: 'Percentual de adultos dos EUA que pagaram por notícias: 17% no total; 12% de 18–29 anos, 15% de 30–49, 17% de 50–64 e 25% de 65+; dados por etnia, renda e escolaridade.' }];
const NEWS_END = `Among the 83% of United States (U.S.) adults who have not paid for news in 2024, the most common reason they cite is that they can find plenty of other news articles for free. ${underline('About')} half of those who don’t pay for news (49%) say this is the main reason.

Another common reason people don’t pay for news is that they are not interested enough (32%). Smaller shares of Americans who don’t pay for news say the main reason is that it’s not affordable (10%) or that the news provided isn’t good enough to pay for (8%).

(Emily Tomasik and Michael Lipka. www.pewresearch.org. Adaptado.)

1 paywalls: programs that stop people who have not paid a subscription from using a website.`;
const news = (command) => ({ statement: NEWS_INTRO, blockTypes: NEWS_BLOCKS, visuals: NEWS_VISUAL, statementAfter: `${NEWS_END}\n\n${command}`, afterBlockTypes: ['prose', 'prose', 'source', 'note', 'command'] });

export const famema2026Objetivas2 = [
  q({ n: 21, subject: 'Geografia', content: 'Fachada ativa e dinâmica urbana',
    statement: 'Analise o desenho e leia o excerto, que tratam de um parâmetro urbanístico chamado “fachada ativa”.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q21-fachada.svg', alt: 'Desenho de rua arborizada com comércios e serviços nos térreos, pedestres, ciclista e áreas de convivência junto aos passeios.' }],
    statementAfter: `Por definição, “fachada ativa” corresponde à ocupação da fachada localizada no alinhamento de passeios públicos por uso não residencial com acesso aberto à população e abertura para o logradouro. Objetiva promover usos mais dinâmicos dos passeios públicos em interação com atividades instaladas nos térreos das edificações a fim de fortalecer a vida urbana nos espaços públicos.

(https://gestaourbana.prefeitura.sp.gov.br. Adaptado.)

Caracteriza uma consequência da implantação de fachadas ativas em áreas urbanas`, afterBlockTypes: ['prose', 'source', 'command'],
    alternatives: ['a ampliação do setor terciário da economia.', 'a desconstrução do tecido urbano.', 'a retração da especulação imobiliária.', 'o enfraquecimento do processo de conurbação.', 'o cumprimento da reforma fundiária.'], answer: 'A',
    why: 'Ao ocupar os térreos com comércios, serviços e atividades abertas ao público, as fachadas ativas estimulam diretamente o setor terciário e a circulação de pedestres.',
    wrong: { 1: 'A proposta busca dinamizar e integrar o espaço urbano, não desconstruir seu tecido.', 2: 'O texto não estabelece redução da especulação imobiliária como consequência necessária.', 3: 'Fachadas ativas não desfazem a contiguidade entre municípios conurbados.', 4: 'Reforma fundiária diz respeito à distribuição da propriedade da terra, não a esse parâmetro urbanístico.' } }),
  q({ n: 22, subject: 'Geografia', content: 'Banco Mundial, FMI e ajustes econômicos',
    statement: `Você já deve ter ouvido algumas vezes a expressão “reforma da arquitetura financeira Internacional” — esse tema tem a ver com o sistema de funcionamento, dentre outros, do Banco Mundial e do Fundo Monetário Internacional. E você sabe o que esse assunto tem a ver com a sua vida? Muita coisa, com impactos, por exemplo, no preço dos alimentos e da energia que todos nós consumimos diariamente. Tem a ver também com os empréstimos que países endividados tomam dessas instituições, sempre com exigências pesadas que acabam por comprometer uma economia já debilitada, provocando inflação, desemprego e até instabilidade política.

(www.gov.br, 05.10.2024. Adaptado.)`, blockTypes: ['prose', 'source'],
    statementAfter: 'O evento que fundou as instituições citadas no excerto e o nome dado às exigências por elas impostas para a concessão de empréstimos são, respectivamente,', afterBlockTypes: ['command'],
    alternatives: ['o Tratado de Versalhes e os programas de privatização de empresas públicas.', 'a Conferência de Bretton Woods e as políticas de austeridade fiscal.', 'a Conferência de Berlim e os projetos de flexibilização de tarifas aduaneiras.', 'o Tratado de Madri e as propostas de realocação de recursos financeiros estatais.', 'a Conferência de Estocolmo e as normativas sobre cotas de importação.'], answer: 'B',
    why: 'Banco Mundial e FMI foram criados no sistema de Bretton Woods, em 1944. Suas condicionalidades de crédito frequentemente incluem ajustes e políticas de austeridade fiscal.',
    wrong: { 0: 'O Tratado de Versalhes encerrou a Primeira Guerra e não fundou essas instituições.', 2: 'A Conferência de Berlim tratou da partilha da África no século XIX.', 3: 'O Tratado de Madri não é o marco de criação do Banco Mundial e do FMI.', 4: 'A Conferência de Estocolmo de 1972 foi dedicada ao meio ambiente.' } }),
  q({ n: 23, subject: 'Geografia', content: 'Comunidade dos Estados Independentes',
    statement: 'Comunidade dos Estados Independentes (CEI)', blockTypes: ['subheading'],
    visuals: [{ file: 'p2-q23-cei.svg', alt: 'Mapa da Comunidade dos Estados Independentes, com Rússia e outras ex-repúblicas soviéticas; legenda distingue membros, não aderentes e países que se retiraram.' }],
    statementAfter: `(www.tudogeo.com.br. Adaptado.)

A CEI, bloco político-econômico retratado no mapa, guarda relação com`, afterBlockTypes: ['source', 'command'],
    alternatives: ['a formação da Cooperação Econômica Ásia-Pacífico e o fim da Guerra Fria.', 'a dissolução da Iugoslávia e o fim da Guerra Fria.', 'a instauração do Império Otomano e o fim da Segunda Guerra Mundial.', 'a fragmentação da União Soviética e o fim da Guerra Fria.', 'a desintegração da Tchecoslováquia e o fim da Segunda Guerra Mundial.'], answer: 'D',
    why: 'A CEI reuniu ex-repúblicas soviéticas após a fragmentação da União Soviética, em 1991, processo associado ao fim da Guerra Fria.',
    wrong: { 0: 'A Cooperação Econômica Ásia-Pacífico é outra organização, criada em 1989.', 1: 'A dissolução da Iugoslávia ocorreu nos Bálcãs e não originou a CEI.', 2: 'O Império Otomano não tem relação com a formação desse bloco em 1991.', 4: 'A divisão pacífica da Tchecoslováquia ocorreu em 1993 e não criou a CEI.' } }),
  q({ n: 24, subject: 'Geografia', content: 'Desenvolvimento e relação sociedade-natureza',
    statement: `No Brasil, vivemos um cenário de contradições diárias. Enquanto cientistas e estudiosos do clima emitem alertas cada vez mais dramáticos sobre a urgência de mudar o rumo, autoridades discursam sobre sustentabilidade, mas agem de forma errática. Muitas vezes, suas decisões colocam em risco o equilíbrio ambiental do país, em nome de uma ideia ultrapassada de desenvolvimento.

(www.brasildefato.com.br, 11.06.2025.)`, blockTypes: ['prose', 'source'],
    statementAfter: 'No contexto apresentado pelo excerto, o desenvolvimento citado expressa', afterBlockTypes: ['command'],
    alternatives: ['um parâmetro da economia circular, que reinsere na cadeia produtiva resíduos industriais.', 'uma relação sociedade-natureza equilibrada, que atende às demandas econômicas de grandes empresas.', 'um modelo de uso consciente de recursos naturais, que associa a bioeconomia ao desenvolvimento ambiental.', 'uma meta socioeconômica universal, que regula exploração da natureza para conferir justiça social.', 'uma visão utilitarista da natureza, que ignora os impactos sistêmicos provocados pela ação antrópica.'], answer: 'E',
    why: 'O excerto critica um modelo que trata a natureza como recurso para exploração imediata e desconsidera alertas científicos e impactos ambientais sistêmicos.',
    wrong: { 0: 'Economia circular e reaproveitamento de resíduos contrariam o modelo criticado.', 1: 'O texto aponta desequilíbrio ambiental, não uma relação equilibrada.', 2: 'Uso consciente e bioeconomia não colocariam o equilíbrio ambiental em risco da forma descrita.', 3: 'A crítica não apresenta regulação universal nem justiça social como traço desse desenvolvimento.' } }),
  q({ n: 25, subject: 'Geografia', content: 'Climograma do semiárido e armazenamento de água',
    statement: 'Analise o climograma que apresenta as características anuais de precipitação e de temperatura de um dado clima.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q25-climograma.svg', alt: 'Climograma com temperaturas elevadas e chuvas concentradas nos primeiros e últimos meses, estação seca prolongada no meio do ano.' }],
    statementAfter: `(https://en.climate-data.org)

Para a região em que atua o clima retratado, é conveniente a construção de`, afterBlockTypes: ['source', 'command'],
    alternatives: ['curvas de nível, para a ampliação do escoamento da água de chuva.', 'composteiras, para a germinação e o crescimento de cultivos.', 'muros de arrimo, para a formação de barreiras contra a circulação atmosférica.', 'cisternas, para a coleta e o armazenamento de água de chuva.', 'biorreatores, para o controle da amplitude térmica.'], answer: 'D',
    why: 'O climograma indica clima semiárido, com chuvas escassas e estação seca prolongada. Cisternas captam e armazenam a água das chuvas para uso durante a seca.',
    wrong: { 0: 'Curvas de nível representam altitude e não são estruturas de armazenamento.', 1: 'Composteiras produzem adubo e não resolvem a irregularidade hídrica destacada.', 2: 'Muros de arrimo servem para conter taludes, não para barrar a circulação atmosférica.', 4: 'Biorreatores não são a tecnologia adequada ao armazenamento de água da chuva.' } }),
  q({ n: 26, subject: 'História', content: 'Cidadania na Roma Antiga',
    statement: `Para ter o status de cidadão romano não bastava nascer no espaço delimitado da cidade, afinal, os escravizados não eram cidadãos — salvo se ganhassem a liberdade. Ser cidadão era, na verdade, fazer parte do que Roma tinha construído. Mas essa cidadania tinha níveis, variando de uma cidadania completa àquelas de menor poder, em suma, havia uma hierarquia de poderes dentro dessa ideia de cidadania. Ser um cidadão romano, então, era fazer parte de um ideário oriundo da educação e respeitar os costumes antigos, estar disposto a cumprir seus deveres solicitados por Roma e ter, em contrapartida, seus direitos assistidos pelo governo.

(Carlos Carvalhar. “O que era ser um romano?”. Jamaxi, nº 1, v. 6, 2022. Adaptado.)`, blockTypes: ['prose', 'source'],
    statementAfter: 'Segundo o excerto, a cidadania romana', afterBlockTypes: ['command'],
    alternatives: ['reproduzia o modelo grego baseado na participação em assembleias.', 'assegurava igualdade entre todos os cidadãos em relação à influência política.', 'exigia participação na política conforme a tradição e a legislação romana.', 'era atribuída pelo local de nascimento dentro do espaço urbano de Roma.', 'garantia acesso a direitos civis para todos os habitantes do Império.'], answer: 'C',
    why: 'O texto associa a cidadania à educação, aos costumes antigos e ao cumprimento de deveres para com Roma, em troca da proteção de direitos; isso exige participação conforme a tradição e as normas romanas.',
    wrong: { 0: 'O excerto não apresenta a cidadania romana como cópia do modelo assemblear grego.', 1: 'Havia níveis de cidadania e uma hierarquia de poderes, não igualdade de influência.', 3: 'O texto afirma expressamente que nascer na cidade não bastava.', 4: 'Escravizados e outros habitantes não tinham automaticamente os mesmos direitos civis.' } }),
  q({ n: 27, subject: 'História', content: 'Senhorio e relações de dominação medieval',
    statement: `O termo “Senhorio” é utilizado para substituir o termo “Feudalismo” porque consegue definir, de maneira mais ampla, tanto as relações entre a aristocracia fundiária e os camponeses, livres e não livres, quanto as relações no interior da própria aristocracia. “Senhorio” permite atentar para o fato de que a dominação aristocrática no período medieval consistiu em um controle não somente do espaço, mas também dos homens.

(Marcelo Cândido da Silva. História Medieval, 2023. Adaptado.)`, blockTypes: ['prose', 'source'], works: ['História Medieval'],
    statementAfter: 'A partir do excerto, compreende-se que o termo “senhorio”', afterBlockTypes: ['command'],
    alternatives: ['minimiza os aspectos econômicos e territoriais ligados ao feudalismo.', 'abole as disputas entre os nobres na organização da sociedade civil medieval.', 'consolida o poder político do rei sobre a nobreza feudal.', 'restringe-se à aplicação de obrigações camponesas frente à autoridade senhorial.', 'inclui diferentes formas de dominação existentes na sociedade medieval.'], answer: 'E',
    why: 'Senhorio abrange tanto o domínio territorial quanto as relações de sujeição entre aristocratas e camponeses e dentro da própria nobreza.',
    wrong: { 0: 'O conceito inclui, e não minimiza, o controle do espaço e das pessoas.', 1: 'As relações de suserania e vassalagem não eliminam disputas entre nobres.', 2: 'O excerto não descreve centralização do poder real.', 3: 'O termo também compreende vínculos no interior da aristocracia, portanto não se restringe aos camponeses.' } }),
  q({ n: 28, subject: 'História', content: 'Abolição da escravidão e propaganda monárquica',
    statement: 'A charge a seguir foi publicada na Argentina logo após a abolição da escravidão no Brasil. Nela, lê-se “Liberdade” e há uma referência à Princesa Isabel como regente do Império brasileiro.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q28-charge.svg', alt: 'Charge com Princesa Isabel e a palavra Liberdade; a regente intervém entre um homem com chicote e pessoas negras, em representação laudatória da abolição.' }],
    statementAfter: `(Renato Lemos (org.). Uma História do Brasil através da caricatura: 1840-2006, 2006.)

A charge representa`, afterBlockTypes: ['source', 'command'], works: ['Uma História do Brasil através da caricatura: 1840-2006'],
    alternatives: ['o papel pacificador da princesa face aos conflitos sociais provocados pela escravização da mão de obra.', 'o pioneirismo brasileiro nos processos de abolição da exploração escravista no continente americano.', 'a oposição da monarquia brasileira à escravização de trabalhadores desde a independência do Brasil.', 'a inexistência de movimentos de abolição da escravidão no Brasil na segunda metade do século XIX.', 'a confraternização das diversas classes da sociedade brasileira no momento da assinatura da lei de emancipação dos escravizados.'], answer: 'A',
    why: 'A composição atribui à princesa o papel de conter o escravocrata e proteger os escravizados, apresentando-a como mediadora ou pacificadora no conflito social.',
    wrong: { 1: 'O Brasil foi o último país independente das Américas a abolir formalmente a escravidão, não o pioneiro.', 2: 'A monarquia conviveu com a escravidão durante quase todo o Império.', 3: 'Houve intensos movimentos abolicionistas e resistência negra, embora a imagem enalteça a regente.', 4: 'A charge não mostra confraternização entre classes, mas intervenção da princesa no conflito.' } }),
  q({ n: 29, subject: 'História', content: 'Vargas, Olga Benário e totalitarismo',
    statement: `Em 1935, Luís Carlos Prestes regressou clandestinamente ao Brasil, acompanhado de Olga Benário, agente recrutada no IV Departamento do Estado-Maior do Exército Vermelho — o serviço secreto militar soviético — para garantir sua segurança, e que acabaria por se tornar sua companheira. Entre dezembro de 1935 e março de 1936, a caçada policial chegou até os quadros da Internacional Comunista — e, em seguida, ao esconderijo de Prestes. Não escapou ninguém. Prestes seria mantido preso durante nove anos, parte desse período em completo isolamento. Olga Benário, judia e comunista, foi deportada, grávida, para a Alemanha nazista, entregue à Gestapo e morta numa câmara de gás, no campo de extermínio de Bernburg.

(Lilia M. Schwarcz e Heloisa M. Starling. Brasil: uma biografia, 2018. Adaptado.)`, blockTypes: ['prose', 'source'], works: ['Brasil: uma biografia'],
    statementAfter: 'Os acontecimentos mencionados no excerto mostram', afterBlockTypes: ['command'],
    alternatives: ['o encerramento dos movimentos de contestação comunistas na história brasileira.', 'a aproximação do governo brasileiro com o movimento da Aliança Nacional Libertadora.', 'a afinidade da política brasileira com o totalitarismo europeu na tensa conjuntura internacional.', 'a adesão brasileira à política internacional do imperialismo norte-americano.', 'o auge das perseguições políticas durante a ditadura do Estado Novo getulista.'], answer: 'C',
    why: 'A deportação de Olga, judia e comunista, para a Alemanha nazista evidencia a afinidade do governo Vargas com regimes totalitários europeus naquele contexto.',
    wrong: { 0: 'A repressão não encerrou definitivamente os movimentos comunistas no Brasil.', 1: 'O governo reprimiu a ANL, em vez de se aproximar dela.', 3: 'O episódio destacado aproxima Vargas do nazismo, não comprova adesão ao imperialismo norte-americano.', 4: 'A deportação ocorreu em 1936, antes da implantação do Estado Novo em 1937.' } }),
  q({ n: 30, subject: 'História', content: 'Empresas transnacionais e dependência econômica',
    statement: `As empresas podem estabelecer seu setor produtivo na parte do mundo onde os juros e os salários sejam os mais baixos e os sindicatos, os mais controlados, para ter lucros maiores. Além disso, as empresas colocam as filiais destinadas à captação de matérias-primas onde a legislação de proteção ao meio ambiente é menos elaborada. Depois, elas instalam seu sistema financeiro onde os juros são mais altos. Por fim, colocam sua direção e gerência administrativa na região onde a qualidade de vida é a mais alta possível. Então, desdobra-se a empresa de forma a ter o maior benefício possível das fragilidades e vantagens encontradas em todas as partes de um sistema econômico e politicamente desigual. Isso aumenta a lucratividade. A contrapartida desse processo é que, se algum país não aceitar essas condições, a empresa simplesmente retira o seu investimento e o que resta ao país é minguar na miséria absoluta.

(www.portal.sesc.org.br)`, blockTypes: ['prose', 'source'],
    statementAfter: 'No contexto apresentado pelo excerto, a retirada de uma empresa de um país configura-se como um tipo de', afterBlockTypes: ['command'],
    alternatives: ['globalização equitativa.', 'chantagem econômica.', 'nacionalismo comercial.', 'altruísmo corporativo.', 'compensação social.'], answer: 'B',
    why: 'A ameaça de retirar investimentos para impor condições a um país, causando-lhe prejuízo caso não ceda, configura chantagem ou coerção econômica.',
    wrong: { 0: 'O texto descreve aproveitamento das desigualdades, não globalização equitativa.', 2: 'Não há proteção do mercado nacional por tarifas ou barreiras comerciais.', 3: 'A empresa busca lucratividade, não benefício altruísta ao país.', 4: 'A retirada agrava a vulnerabilidade social em vez de compensá-la.' } }),
  q({ n: 31, subject: 'Inglês', content: 'Compreensão de informação principal', ...news('According to the text,'),
    alternatives: ['the quality of paid news content is generally considered to be insufficient by the majority of consumers.', 'a significant majority of Americans have subscribed to at least one news source in 2024.', 'all news organizations have implemented paywalls on their digital platforms.', 'the most frequent justification among those who do not pay for news is the availability of unpaid options.', 'the main reason people don’t pay for news is a lack of trust in news organizations.'], answer: 'D',
    why: 'O terceiro parágrafo informa que a razão mais comum para não pagar é poder encontrar muitas outras notícias gratuitamente.',
    wrong: { 0: 'Somente 8% citam qualidade insuficiente, não a maioria.', 1: 'A maioria, 83%, declarou não ter pago por notícias em 2024.', 2: 'O texto diz muitas organizações, e não todas.', 4: 'Falta de confiança não é apresentada como a razão principal.' } }),
  q({ n: 32, subject: 'Inglês', content: 'Uso da preposição by', ...news('In the excerpt from the second paragraph “Another 17% say they have directly paid or given money to a news source by subscribing, donating or becoming a member during that time”, the word “by”'),
    alternatives: ['describes the manner in which the financial support was provided.', 'suggests a comparison between different forms of payment.', 'indicates the cost of the subscription, donation or membership.', 'introduces a temporal reference for the action.', 'highlights the purpose behind the financial contribution.'], answer: 'A',
    why: '“By” introduz os meios ou maneiras de fornecer apoio financeiro: assinando, doando ou tornando-se membro.',
    wrong: { 1: 'As três formas são apresentadas como possibilidades, não comparadas.', 2: 'Nenhum valor ou custo é indicado pela preposição.', 3: 'A referência temporal aparece em “during that time”, não em “by”.', 4: 'A preposição indica meio, e não finalidade.' } }),
  q({ n: 33, subject: 'Inglês', content: 'Leitura e comparação de dados em gráfico', ...news('According to the chart “% of U.S. adults who have paid or given money directly to any news sources”,'),
    alternatives: ['adults aged 30-49 were the age group least inclined to pay for news among those listed.', 'Hispanic adults showed a greater propensity to pay for news compared to Asian adults.', 'individuals with college graduation paid less for news than those with some college or high school education.', 'individuals with lower income levels paid the same amount for news as those with middle income levels.', 'individuals in higher age groups paid more for news than those in lower age groups.'], answer: 'E',
    why: 'Os percentuais aumentam por faixa etária: 12% (18–29), 15% (30–49), 17% (50–64) e 25% (65+).',
    wrong: { 0: 'O menor percentual etário é o de 18–29 anos, com 12%; o grupo de 30–49 tem 15%.', 1: 'Hispanic apresenta 10%, inferior a Asian, com 16%.', 2: 'College grad+ tem 27%, acima de Some college, 15%, e HS for less, 9%.', 3: 'Lower income tem 8%, enquanto Middle income tem 18%; não são iguais.' } }),
  q({ n: 34, subject: 'Inglês', content: 'Sentidos de about', ...news(`No trecho do terceiro parágrafo “${underline('About')} half of those who don’t pay for news (49%) say this is the main reason”, o termo sublinhado é empregado com o mesmo sentido do termo sublinhado em:`),
    alternatives: [`I read a book ${underline('about')} the history of Brazil.`, `I was ${underline('about')} to call you.`, `She bought ${underline('about')} a kilogram of apples.`, `She was ${underline('about')} to leave when he arrived.`, `She’s very selective ${underline('about')} her coffee.`], answer: 'C',
    why: 'Em “About half”, about significa “aproximadamente”; o mesmo sentido ocorre em “about a kilogram of apples”.',
    wrong: { 0: 'Nessa frase, about significa “sobre”.', 1: '“To be about to” significa estar prestes a realizar a ação.', 3: 'Aqui também aparece a expressão “estar prestes a”, e não aproximação.', 4: 'Nesse exemplo, about também significa “sobre” ou “a respeito de”.' } }),
  q({ n: 35, subject: 'Inglês', content: 'Identificação de detalhe percentual', ...news('According to the fourth paragraph, 10% of Americans who don’t pay for news'),
    alternatives: ['consider that the costs of paid news outlets are too expensive.', 'claim they dislike to follow the news on a daily basis.', 'emphasize that paid sources of news are unreliable.', 'say they have stopped watching the news a long time ago.', 'believe that paid sources of news offer better content.'], answer: 'A',
    why: 'O quarto parágrafo afirma que 10% indicam como razão principal o fato de as notícias pagas não serem acessíveis financeiramente (“not affordable”).',
    wrong: { 1: 'Falta de interesse corresponde a 32%, sem especificar acompanhamento diário.', 2: 'O texto não atribui a esses 10% a ideia de que as fontes não sejam confiáveis.', 3: 'Não se informa que tenham deixado de acompanhar notícias há muito tempo.', 4: 'Qualidade insuficiente para justificar o pagamento é citada por 8%, não a oferta de conteúdo melhor.' } }),
  q({ n: 36, subject: 'Física', content: 'Rolamento, frequência e rotações por minuto',
    statement: 'Uma garota está andando sobre um skate que se desloca em relação ao solo com velocidade constante de 4,5 m/s. Cada rodinha desse skate possui raio de 3 cm, como mostra a figura.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q36-skate.svg', alt: 'Rodinha de skate de raio 3 cm, com seta horizontal indicando velocidade de 4,5 m/s.' }],
    statementAfter: 'Considerando π = 3, o número de rotações por minuto (rpm) com que as rodinhas desse skate giram é de', afterBlockTypes: ['command'],
    alternatives: ['350 rpm.', '1 500 rpm.', '600 rpm.', '25 rpm.', '1 050 rpm.'], answer: 'B',
    why: tex`No rolamento sem deslizamento, $v=2\pi fR$. Com $R=0{,}03\ \mathrm m$, $$f=\frac{4{,}5}{2\cdot3\cdot0{,}03}=25\ \mathrm{Hz}.$$ Em rotações por minuto, $25\cdot60=\boxed{1\,500\ \mathrm{rpm}}$.`,
    wrong: { 0: 'Esse valor não corresponde à conversão de 25 Hz para rpm.', 2: 'Seiscentas rotações por minuto corresponderiam a 10 Hz, não à frequência calculada.', 3: 'Vinte e cinco é a frequência em hertz; ainda é necessário multiplicar por 60.', 4: 'Esse resultado não satisfaz v = 2πfR com os dados fornecidos.' } }),
  q({ n: 37, subject: 'Física', content: 'Conservação do centro de massa em sistema isolado',
    statement: 'Um pescador encontra-se em pé na extremidade esquerda de sua canoa, que flutua sobre águas calmas e paradas, como mostra a figura, em que o centro de massa da canoa está representado por um ponto vermelho.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q37-inicial.svg', alt: 'Situação inicial: pescador na extremidade esquerda da canoa, na posição −1, e centro de massa da canoa em 0.' }],
    statementAfter: 'Em determinado momento, o pescador caminha sobre a canoa até a extremidade direita e fica parado, em pé, nessa extremidade. Sabendo que o pescador e a canoa possuem massas iguais e desconsiderando a resistência da água, após essa caminhada, a posição assumida pelo conjunto composto por canoa e pescador, em relação ao mesmo referencial da figura, é representada por:', afterBlockTypes: ['command'],
    alternatives: ['', '', '', '', ''], shortAlternatives: ['Figura A', 'Figura B', 'Figura C', 'Figura D', 'Figura E'], answer: 'D',
    alternativeVisuals: [
      [{ file: 'p2-q37-a.svg', alt: 'Alternativa A: canoa deslocada para a direita, centro de massa próximo de +1 e pescador próximo de +2.' }],
      [{ file: 'p2-q37-b.svg', alt: 'Alternativa B: canoa e pescador deslocados para a direita, com centro de massa entre 0 e +1.' }],
      [{ file: 'p2-q37-c.svg', alt: 'Alternativa C: canoa deslocada ainda mais para a direita, centro próximo de +2 e pescador próximo de +3.' }],
      [{ file: 'p2-q37-d.svg', alt: 'Alternativa D: canoa deslocada para a esquerda, centro de massa em −1 e pescador em 0.' }],
      [{ file: 'p2-q37-e.svg', alt: 'Alternativa E: centro de massa da canoa permanece em 0 e pescador fica próximo de +1.' }],
    ],
    why: 'Como não há força horizontal externa resultante, o centro de massa do sistema permanece na mesma posição. Inicialmente, com massas iguais, pescador em −1 e canoa em 0, o centro do conjunto está em −0,5. Na alternativa D, pescador em 0 e canoa em −1 mantêm esse mesmo centro de massa.',
    wrong: { 0: 'A canoa se desloca para a direita, deslocando também o centro de massa do conjunto, o que viola sua conservação.', 1: 'Essa configuração desloca o centro de massa total para a direita em vez de mantê-lo em −0,5.', 2: 'O deslocamento da canoa deveria ser para a esquerda, e não para a direita.', 4: 'Se a canoa permanecesse com centro em 0 e o pescador fosse para a direita, o centro de massa do conjunto se moveria.' } }),
  q({ n: 38, subject: 'Física', content: 'Equilíbrio térmico e calor sensível',
    statement: tex`Cem fagulhas de ferro incandescentes, com massa total de 0,01 g e à temperatura de 1 500 °C, provenientes de um processo de soldagem, caem sobre uma colher contendo 1,00 g de água a 25 °C. Considerando apenas as trocas de calor entre as fagulhas e a água da colher e sabendo que o calor específico da água e do ferro são, respectivamente, $1{,}0\ \mathrm{cal/(g\cdot{}^\circ C)}$ e $0{,}1\ \mathrm{cal/(g\cdot{}^\circ C)}$, a temperatura de equilíbrio térmico entre as fagulhas e a água será de, aproximadamente,`, blockTypes: ['prose'],
    alternatives: ['34,6 °C.', '92,4 °C.', '68,0 °C.', '50,2 °C.', '26,5 °C.'], answer: 'E',
    why: tex`No equilíbrio, $Q_{\text{ferro}}+Q_{\text{água}}=0$. Se $\theta$ é a temperatura final, $$0{,}01\cdot0{,}1(\theta-1500)+1{,}00\cdot1{,}0(\theta-25)=0.$$ Assim, $1{,}001\theta=26{,}5$, de onde $\theta\approx26{,}47\,^\circ\mathrm C\approx\boxed{26{,}5\,^\circ\mathrm C}$.`,
    wrong: { 0: 'Esse valor superestima o efeito das fagulhas, cuja capacidade térmica total é muito pequena.', 1: 'A água tem massa e calor específico muito maiores em termos de capacidade térmica, impedindo aquecimento tão intenso.', 2: 'O cálculo do balanço térmico fornece cerca de 26,5 °C.', 3: 'Esse resultado não satisfaz a equação de conservação da energia com os dados.' } }),
  q({ n: 39, subject: 'Física', content: 'Propagação retilínea da luz e semelhança de triângulos',
    statement: 'Um canhão de luz foi construído com um tubo cilíndrico para projetar, sobre o pano de fundo do palco de um teatro, uma região iluminada com seção circular de diâmetro igual a 2,0 m, conforme a figura.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q39-canhao.svg', alt: 'Canhão de luz de 2 m junto ao pano de fundo; abertura D está a 9 m do palco e projeta círculo de 2 m de diâmetro.' }],
    statementAfter: 'Uma fonte de luz ocupa todo o fundo do canhão, e o tubo cilíndrico, com superfície interna preta, possui 2,0 m de comprimento e uma abertura com diâmetro igual a D. Sabendo que a abertura do canhão fica a uma distância de 9,0 m do pano de fundo do palco do teatro, o valor de D é igual a', afterBlockTypes: ['command'],
    alternatives: ['15 cm.', '35 cm.', '20 cm.', '25 cm.', '30 cm.'], answer: 'C',
    why: tex`Os feixes limites formam triângulos semelhantes. Como a fonte ocupa todo o fundo e o tubo tem 2,0 m, a distância relevante no interior do tubo é metade dele, $1{,}0$ m. Assim, $$\frac{D}{1{,}0}=\frac{2{,}0}{9{,}0+1{,}0}\quad\Rightarrow\quad D=0{,}20\ \mathrm m=\boxed{20\ \mathrm{cm}}.$$`,
    wrong: { 0: 'Quinze centímetros não satisfaz a razão de semelhança entre os triângulos.', 1: 'Trinta e cinco centímetros produziria uma abertura maior que a calculada.', 3: 'Vinte e cinco centímetros corresponde a uma proporção diferente da indicada na figura.', 4: 'Trinta centímetros não verifica D = 2,0 × 1,0/10,0 m.' } }),
  q({ n: 40, subject: 'Física', content: 'Potência elétrica instantânea em gráfico',
    statement: 'Considere que, durante uma tempestade, um raio atinja o solo e que, em determinado intervalo de tempo em que ocorre esse raio, seja registrada a corrente elétrica associada a ele, I, e a diferença de potencial, U, entre a nuvem que o gerou e o solo, conforme mostra o gráfico.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q40-grafico.svg', alt: 'Gráficos de I, em 10³ A, e U, em 10⁶ V, contra o tempo; no mesmo instante de potência máxima, I = 12 × 10³ A e U = 10 × 10⁶ V.' }],
    statementAfter: 'Sabendo que a potência elétrica é dada pelo produto entre a corrente, I, e a diferença de potencial, U, o valor máximo da potência associada a esse raio, no intervalo de tempo representado no gráfico, é', afterBlockTypes: ['command'],
    alternatives: [tex`$6{,}0\times10^6\ \mathrm W$.`, tex`$3{,}0\times10^8\ \mathrm W$.`, tex`$2{,}4\times10^9\ \mathrm W$.`, tex`$3{,}6\times10^{12}\ \mathrm W$.`, tex`$1{,}2\times10^{11}\ \mathrm W$.`], answer: 'E',
    why: tex`O maior produto simultâneo ocorre com $I=12\times10^3\ \mathrm A$ e $U=10\times10^6\ \mathrm V$. Portanto, $$P_{\max}=IU=(12\times10^3)(10\times10^6)=120\times10^9=\boxed{1{,}2\times10^{11}\ \mathrm W}.$$`,
    wrong: { 0: 'Esse valor tem ordem de grandeza muito inferior ao produto de milhares de ampères por milhões de volts.', 1: 'Não se deve somar ou usar apenas um dos valores máximos isoladamente.', 2: 'O produto correto é 120 × 10⁹ W, não 2,4 × 10⁹ W.', 3: 'Esse resultado superestima em 30 vezes a potência obtida no gráfico.' } }),
];
