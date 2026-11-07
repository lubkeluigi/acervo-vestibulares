import { createFamema, tex } from './famema-helpers.js';
const { q } = createFamema(2022);

const HEALTH = `READ THE FOLLOWING TEXT AND ANSWER THE QUESTIONS

How Physicians Can Prepare for the Future of Health Care

Ted A. James, MD, MHCM — May 14, 2021

Why is it important for physicians to think about the future of medicine? In almost any endeavor, keeping ahead of the curve is rewarded, while missing the boat is met with peril. In the same way, having foresight into the future of health care can mean the difference between success and failure for physicians and their practices.

Physicians must plan for the future of medicine. We live in a period of tremendous upheaval, and things are unlikely to return to normal anytime soon. The only constant is change, and the ability of physicians to prepare for a changing future has far-reaching implications for patients and health care organizations.

Newcomers are currently attempting to shift the clinical landscape to better meet patient care needs. These ‘disruptive innovations’ may displace those who are unable to adapt to the new trends. The same scenario has repeatedly played out in other markets, with conventional businesses left in the dust as innovators soar to new heights. Therefore, physicians should not only be prepared for the future of medicine, but we should also play a vital role in leading the change.

Accelerated Digital Health

The pandemic has accelerated the implementation of health care technologies and capabilities, which will radically alter the patient experience and clinical outcomes, paving the way for value-based disruption. The future offers hospital-level care provided to a patient’s home at a lower cost and better outcomes using established technology such as remote monitoring. Similarly, AI will advance diagnostic capabilities and clinical decision support at a rapid pace. AI may also aid data mining, resulting in breakthroughs in precision medicine and predictive risk stratification. AI-powered technologies, such as health care chatbots, can allow greater access and timeliness of treatment. Although it is unlikely that digital technology will completely replace doctors anytime soon, physicians and practices who use these technologies may soon replace those who do not.

[…]

Developing a Disruptive Mindset

We must also be prepared to challenge our existing paradigms. Positive disruptive thinking is needed to avoid becoming obsolete. Developing a disruptive mindset requires adopting a positive view of change, never settling for the status quo and a willingness to take a start-up approach to transform health care. It is more than incremental iteration; it is a transformational shift.

For example, the progression from records to tapes to CDs represented conventional innovation, while the advent of digital streaming music brought about a disruptive innovation in the music industry.

It is also important to employ ‘Design Thinking,’ where the patient’s experience is considered when developing new health delivery strategies. Redesigning care from the patient’s perspective, with their direct input, and incorporating technology to improve patient access and convenience can aid in the implementation of effective patient care solutions.

Why go back to normal when we can redesign a better future? I encourage physicians to take the first step in leading the transformation process. Commit to making things better by finding something to improve. Physicians have the power to restructure the health care system, and using the power to shape the future is the best way to prepare for it.

“Change is the law of life. And those who look only to the past or present are certain to miss the future.” — John F. Kennedy

Adapted from: https://postgraduateeducation.hms.harvard.edu/trends-difference-medicine/how-physicians-can-prepare-future-health-care`;
const HEALTH_BLOCKS = ['label', 'subheading', 'source', 'prose', 'prose', 'prose', 'subheading', 'prose', 'note', 'subheading', 'prose', 'prose', 'prose', 'prose', 'quote', 'source'];

export const famema2022Objetivas2 = [
  q({ n: 21, subject: 'Geografia', content: 'Mudanças climáticas e saúde',
    statement: `O impacto das mudanças climáticas sobre a saúde requer uma análise interdisciplinar que permita avaliar as relações entre os sistemas sociais, econômicos, biológicos, ecológicos e físicos e as alterações climáticas.

(...)

As mudanças climáticas podem produzir impactos sobre a saúde humana de forma direta, como no caso das ondas de calor ou nas mortes causadas por eventos extremos como furacões e inundações, e de forma indireta, quando mediado por alterações no ambiente, como as mudanças nos ecossistemas e nos ciclos biogeoquímicos, que podem aumentar a incidência de doenças infecciosas.

(Barcellos, Christovam et alii. Mudanças climáticas e ambientais e as doenças infecciosas: cenários e incertezas para o Brasil. Epidemiologia. Serv. Saúde, v. 18, n. 3, Brasília, 2009. Adaptado.)

Sobre a dinâmica da atmosfera e os problemas de saúde, assinale a afirmativa incorreta.`,
    blockTypes: ['prose', 'note', 'prose', 'source', 'command'], works: ['Mudanças climáticas e ambientais e as doenças infecciosas: cenários e incertezas para o Brasil'],
    alternatives: ['O aquecimento global pode ter consequências diretas sobre a morbidade e a mortalidade, por meio da produção de desastres como enchentes, ondas de calor, secas e queimadas.', 'As flutuações climáticas interferem na dinâmica das doenças vetoriais, como a maior incidência da dengue no verão, e da malária, na Amazônia, durante o período de estiagem.', 'Os eventos extremos geram flutuações que podem afetar a dinâmica das doenças de veiculação hídrica, como a leptospirose, as hepatites virais e as doenças diarreicas.', 'As queimadas e os efeitos das inversões térmicas impactam a qualidade do ar, principalmente nas áreas urbanas, o que aumenta a incidência das doenças infectocontagiosas.', 'As geadas, os vendavais, as secas ou cheias abruptas podem provocar perdas na agricultura, principalmente na de subsistência, o que agrava as situações de desnutrição.'], answer: 'D',
    why: 'A alternativa é incorreta porque a piora da qualidade do ar por queimadas e inversões térmicas está associada principalmente a doenças respiratórias e cardiovasculares não transmissíveis, e não, genericamente, a doenças infectocontagiosas.',
    wrong: { 0: 'Eventos climáticos extremos podem, sim, afetar diretamente morbidade e mortalidade.', 1: 'O clima interfere em vetores e na dinâmica de dengue e malária, como exemplificado.', 2: 'Enchentes e outros eventos extremos podem favorecer doenças de veiculação hídrica.', 4: 'Perdas agrícolas podem comprometer a disponibilidade de alimentos e agravar a desnutrição.' } }),
  q({ n: 22, subject: 'Geografia', content: 'Reestruturação produtiva no Estado de São Paulo',
    statement: `O processo de “mundialização do capital” afetou significativamente a dinâmica territorial paulista, principalmente no tocante à orientação locacional das atividades econômicas, da mobilidade populacional e da urbanização. Portanto, a partir da década de 1970, a crise do fordismo mudou as decisões empresariais, levando as empresas a mudanças estruturais.

(Silveira, Márcio Rogério. A circulação, os transportes e a logística na reestruturação econômica do Estado de São Paulo.)

A respeito dessas mudanças, analise as afirmativas a seguir.

I. Estimularam o fortalecimento regional das cidades médias e a independência, em certas interações espaciais, com a metrópole.

II. Possibilitaram a elevação dos custos nas esferas da produção e da circulação graças ao aumento da relação entre tempo de produção e tempo de trabalho.

III. Promoveram a fragmentação entre os processos de gestão e de produção (disjunção produtiva), a desconcentração da produção e a centralização da gestão.

Está correto o que se afirma em`,
    blockTypes: ['prose', 'source', 'prose', 'prose', 'prose', 'prose', 'command'], works: ['A circulação, os transportes e a logística na reestruturação econômica do Estado de São Paulo'],
    alternatives: ['I, apenas.', 'I e II, apenas.', 'I e III, apenas.', 'II e III, apenas.', 'I, II e III.'], answer: 'C',
    why: 'I e III estão corretas: a reestruturação favoreceu novas centralidades e cidades médias, além da desconcentração da produção com gestão centralizada. II é falsa, pois as inovações buscaram reduzir custos e tempos de produção e circulação.',
    wrong: { 0: 'Omite III, que também está correta.', 1: 'Inclui II, cuja elevação de custos contradiz os objetivos da reestruturação, e omite III.', 3: 'Inclui II e omite I.', 4: 'Inclui II, que está incorreta.' } }),
  q({ n: 23, subject: 'Geografia', content: 'Modais de transporte de cargas no Brasil',
    statement: `Sobre os modais mais relevantes na matriz de transportes no Brasil, com a representatividade de deslocar 95,4% de toda a carga transportada no território nacional, analise as afirmativas a seguir.

I. O modal rodoviário caracteriza-se pela flexibilidade operacional, deslocando, aproximadamente, 60% do volume da carga transportada, mas consumindo cerca de 90% do combustível demandado pelo setor de transportes.

II. O modal ferroviário caracteriza-se por sua capacidade de movimentar grandes volumes com elevada eficiência energética, principalmente em longas distâncias, mas, se sua implantação exige grandes investimentos, sua manutenção tem custos baixos.

III. O modal aquaviário caracteriza-se por sua maior capacidade de carga e segurança, apresentando custos de manutenção elevados, e, além de ser o mais poluente, é o que apresenta equipamentos com maior taxa de obsolescência.

Está correto o que se afirma em`,
    blockTypes: ['prose', 'prose', 'prose', 'prose', 'command'],
    alternatives: ['I, apenas.', 'I e II, apenas.', 'I e III, apenas.', 'II e III, apenas.', 'I, II e III.'], answer: 'B',
    why: 'I e II descrevem adequadamente a flexibilidade rodoviária e a eficiência ferroviária em grandes volumes e longas distâncias. III é incorreta: o aquaviário tem grande capacidade e eficiência, mas não é genericamente o modal mais poluente nem se caracteriza pelos custos e obsolescência afirmados.',
    wrong: { 0: 'Omite II, que também está correta.', 2: 'Inclui III e omite II.', 3: 'Inclui III e omite I.', 4: 'Inclui III, que está incorreta.' } }),
  q({ n: 24, subject: 'Geografia', content: 'Transição demográfica brasileira', difficulty: 'Difícil',
    statement: 'Analise as tabelas a seguir, que mostram a evolução da população brasileira entre 1890 e 2010, refletindo o processo de transição demográfica, e uma previsão, para 2040.', blockTypes: ['command'],
    visuals: [
      { file: 'p2-q24-transicao-historica.svg', alt: 'Série histórica da população brasileira por faixa etária, com números absolutos e percentuais para 1890, 1920 e 1950, incluindo variação proporcional.', className: 'image-span-all table-vector-image', caption: 'Série histórica: 1890, 1920 e 1950.' },
      { file: 'p2-q24-transicao-projecao.svg', alt: 'População brasileira por faixa etária, com números absolutos e percentuais para 1980 e 2010 e projeção para 2040, incluindo variação proporcional.', className: 'image-span-all table-vector-image', caption: 'Série recente e projeção: 1980, 2010 e 2040.' },
    ],
    statementAfter: 'Sobre o processo de transição demográfica, assinale a afirmativa incorreta.', afterBlockTypes: ['command'],
    alternatives: ['A evolução da população brasileira resultou na diminuição da população abaixo de 15 anos e no aumento significativo da população idosa.', 'O crescimento da população brasileira, em 2040, deve ser negativo, e, a partir desta data, deve se iniciar o processo de redução da população.', 'A redução da taxa de mortalidade e da esperança de vida explicam o bônus demográfico, obtido graças ao aumento da população economicamente ativa.', 'A faixa etária de zero a nove anos, apesar de crescer em números absolutos até a década de 2010, reduziu-se proporcionalmente ao longo dos anos analisados.', 'A faixa etária acima de sessenta anos cresceu vertiginosamente, o que acarreta o envelhecimento da população, com uma estimativa de 23,4% de idosos, em 2040.'], answer: 'C',
    why: 'O gabarito preliminar assinala C: o bônus demográfico não decorre de redução da esperança de vida; relaciona-se à queda da mortalidade e, sobretudo, da fecundidade, com aumento relativo da população em idade ativa.',
    wrong: { 0: 'A tabela confirma a redução proporcional dos jovens e o aumento dos idosos; portanto, não é a incorreta indicada.', 1: 'O gabarito preliminar não a assinala, mas há ressalva: a tabela projeta variação proporcional positiva de 19,6 para 2040, de modo que a afirmação de crescimento negativo também não se sustenta documentalmente.', 3: 'Os dados confirmam o crescimento absoluto até 2010 acompanhado de queda proporcional da faixa de zero a nove anos.', 4: 'Em 2040, as faixas de 60 a 69 anos (11,3%) e 70 ou mais (12,4%) somam 23,7%, aproximadamente o envelhecimento descrito.' },
    studyNotes: ['Ressalva documental: o gabarito preliminar oficial marca C. A alternativa B também parece incorreta diante da variação proporcional positiva projetada para 2040; essa ambiguidade foi preservada e sinalizada, sem alterar o gabarito oficial.'] }),
  q({ n: 25, subject: 'Geografia', content: 'Geopolítica mundial no século XXI',
    statement: `Leia o trecho a seguir.

Os EUA alcançaram uma centralidade dentro do sistema mundial e um nível de poder global sem precedentes, na mesma hora em que se acreditou na vitória do fenômeno da globalização econômica e na universalização das regras e instituições criadas pela ordem liberal do século XX. Por isso, aliás, muitos analistas admitiram, na década de 1990, o “fim da história” e o nascimento de um mundo unipolar, com a vitória da “ordem liberal” e a universalização do sistema de valores ocidentais, a “Pax Americana”.

A respeito do trecho acima, sabendo que a Geopolítica é dinâmica, analise as afirmativas a seguir.

I. O ingresso da China é a grande novidade do sistema interestatal nas duas primeiras décadas do século XXI e representa, de fato, uma ameaça de médio prazo à supremacia econômica e militar dos EUA no Leste Asiático e na Ásia Central.

II. A luta mais explícita por uma hegemonia regional está em curso no Leste Asiático, envolvendo a China, o Japão e a Coreia, mas, também, a Rússia e os EUA, no que parece ser o embrião da luta pelo poder global da segunda metade do século XXI.

III. O centro nevrálgico da competição geopolítica mundial envolve os Estados Unidos e a China — cada vez mais complementares do ponto de vista econômico e financeiro, e que, hoje, são indispensáveis para o funcionamento expansivo da economia mundial.

Está correto o que se afirma em`,
    blockTypes: ['label', 'quote', 'prose', 'prose', 'prose', 'prose', 'command'],
    alternatives: ['I, apenas.', 'I e II, apenas.', 'I e III, apenas.', 'II e III, apenas.', 'I, II e III.'], answer: 'E',
    why: 'As três afirmações são coerentes com a leitura geopolítica apresentada: ascensão chinesa, disputa por hegemonia no Leste Asiático e centralidade da relação EUA–China na economia mundial.',
    wrong: { 0: 'Omite II e III, também consideradas corretas.', 1: 'Omite III, que integra a análise da interdependência e competição entre EUA e China.', 2: 'Omite II, que descreve a disputa regional no Leste Asiático.', 3: 'Omite I, que reconhece a ascensão chinesa como mudança central.' } }),
  q({ n: 26, subject: 'História', content: 'Impérios da Antiguidade à Idade Moderna',
    statement: 'Um império é convencionalmente considerado uma entidade estatal constituída por extensos territórios, diversas sociedades e culturas, integradas sob a autoridade de um imperador. A respeito de algumas experiências históricas imperiais que marcaram o mundo, da Antiguidade à Época Moderna, assinale a afirmativa correta.', blockTypes: ['prose'],
    alternatives: ['O império acadiano de Sargão, o Grande, estendia-se sobre a Mesopotâmia, o Egito, parte da Grécia e chegava até as planícies do Indo, sendo considerado o modelo de império multicultural da Antiguidade.', 'O império construído por Alexandre Magno contribuiu para a difusão da cultura grega no mundo Antigo e ambicionava criar um império universal do qual pretendia ser soberano de origem divina.', 'O Império Romano do Oriente sobreviveu ao colapso de Roma como Império Bizantino e se expandiu em direção ao oriente, anexando os territórios islâmicos sob domínio do califado omíada.', 'O Império Carolíngio estava baseado na centralidade administrativa e legislativa do imperador que, para unificar os territórios sob seu controle, aboliu o sistema fragmentado e pessoal de suserania e vassalagem.', 'O Império Espanhol dos Habsburgo representou o ideal de reconstituição do Império Romano sob princípios cristãos na Época Moderna, por isso os domínios da Espanha na Europa, Ásia e América constituíam o “Sacro Império Romano”.'], answer: 'B',
    why: 'As conquistas de Alexandre difundiram a cultura grega pelo helenismo e se articularam ao projeto de um império universal sob sua autoridade, associado à legitimação divina.',
    wrong: { 0: 'O Império Acadiano não alcançou todo esse território; Egito, Grécia e Indo extrapolam seus domínios.', 2: 'O Império Bizantino não anexou os territórios do califado omíada; ao contrário, perdeu extensas áreas para as expansões islâmicas.', 3: 'O mundo carolíngio manteve relações feudais e fragmentação política, sem abolir suserania e vassalagem.', 4: 'O Sacro Império Romano Germânico e os domínios coloniais espanhóis não constituíam uma única entidade como afirmado.' } }),
  q({ n: 27, subject: 'História', content: 'Doutrina Monroe e relações interamericanas',
    statement: `Em 2 de dezembro de 1823, James Monroe, presidente dos Estados Unidos, em sua mensagem anual ao Congresso anunciou o que veria a ser conhecida como “Doutrina Monroe”:

“Julgamos propícia esta ocasião para afirmar como um princípio que afeta os direitos e interesses dos Estados Unidos, que os continentes americanos, em virtude da condição livre e independente que adquiriram e conservam, não podem mais ser considerados, no futuro, como suscetíveis de colonização por nenhuma potência europeia.”

Com base no trecho, analise as afirmativas a seguir sobre a Doutrina Monroe e as relações entre Estados Unidos (EUA) e a América Latina na primeira metade do século XIX.

( ) É uma doutrina elaborada no contexto de afirmação das independências da maior parte das excolônias ibéricas na América, de caráter defensivo, que ficou associada ao slogan “América para os americanos”.

( ) É um discurso contra o predomínio britânico na região e legitimador dos interesses intervencionistas do imperialismo dos EUA, que queria tornar-se uma potência hegemônica na região usando a “Política do Grande Porrete”.

( ) É uma estratégia de relacionamento com a América Latina pautada na colaboração econômica, com o fim de formar mercados externos para os produtos e investimentos da nascente indústria norte-americana e ficou conhecida como “Política da Boa Vizinhança”.

As afirmativas são, na ordem apresentada, respectivamente,`,
    blockTypes: ['prose', 'quote', 'prose', 'prose', 'prose', 'prose', 'command'],
    alternatives: ['V – V – F.', 'V – F – V.', 'F – V – F.', 'V – F – F.', 'F – F – V.'], answer: 'D',
    why: 'A primeira é verdadeira pelo contexto das independências e pelo princípio “América para os americanos”. As demais são falsas para o recorte: Grande Porrete e Boa Vizinhança pertencem ao século XX, não à formulação de 1823.',
    wrong: { 0: 'Considera verdadeira a segunda, que transporta a Política do Grande Porrete para o contexto errado.', 1: 'Considera verdadeira a terceira, associada à Boa Vizinhança do século XX.', 2: 'Nega a primeira, que está correta, e valida a segunda.', 4: 'Nega a primeira e valida a terceira, invertendo o julgamento.' } }),
  q({ n: 28, subject: 'História', content: 'Temas das resoluções da Assembleia Geral da ONU',
    statement: 'A Assembleia Geral das Nações Unidas, em suas sessões anuais, elabora resoluções que são votadas por todos os estados-membros. Cada voto tem o mesmo peso, independentemente do tamanho da população, PIB ou poderio militar do país, motivo pelo qual a Assembleia Geral se tornou um espaço diplomático importante para os países em desenvolvimento colocarem em pauta suas próprias questões. Observe o gráfico sobre os assuntos mais abordados, em porcentagem, nas resoluções da Assembleia Geral da ONU, entre 1946 e 2018.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q28-onu.svg', alt: 'Seis gráficos de linhas da ONU: armamento nuclear, colonialismo, desarmamento e controle de armas, desenvolvimento econômico, direitos humanos e questão palestina, de 1950 a 2010.' }],
    statementAfter: `(Fonte: ONU. Dados de votação na Assembleia Geral catalogados por tema, em https://dataverse.harvard.edu.)

Considerando essas informações sobre os temas em pauta na Assembleia Geral da ONU na segunda metade do século XX, assinale a afirmativa correta.`, afterBlockTypes: ['source', 'command'],
    alternatives: ['Entre 1950 e 1970, os temas relativos ao colonialismo predominaram, pois foi um período intenso de lutas pela descolonização e consequente criação de novos países autônomos, sobretudo nos continentes africano e asiático.', 'A partir dos anos 1980 o debate sobre desarmamento e controle de armas cresce em resposta à implementação do programa militar soviético “Guerra nas Estrelas”, marcado pelo lançamento de naves não tripuladas ao espaço.', 'Nos anos 1970 e 1980, a agenda do desenvolvimento econômico está relacionada aos impactos dos choques de alta do petróleo em função da criação do Estado de Israel e da Guerra do Golfo.', 'Nos anos 1970 as discussões sobre direitos humanos se intensificam e a Assembleia Geral da ONU lança a Declaração Universal dos Direitos Humanos, estabelecendo-a como uma norma comum a ser alcançada por todos os povos e nações.', 'Nos anos 1990, a questão palestina assume a centralidade dos debates, em função da aprovação da Resolução 242 pela ONU, determinando a saída das Forças Armadas israelenses dos territórios ocupados de Jerusalém Oriental, península do Sinai, Cisjordânia e colinas de Golã.'], answer: 'A',
    why: 'O pico do tema colonialismo entre 1950 e 1970 coincide com os processos de descolonização na Ásia e na África e a formação de novos Estados independentes.',
    wrong: { 1: '“Guerra nas Estrelas” foi um programa dos Estados Unidos, não da União Soviética.', 2: 'Os choques do petróleo não são explicados pela criação de Israel em 1948; a Guerra do Golfo ocorreu em 1990–1991.', 3: 'A Declaração Universal dos Direitos Humanos foi proclamada em 1948, não nos anos 1970.', 4: 'A Resolução 242 data de 1967, não dos anos 1990.' } }),
  q({ n: 29, subject: 'História', content: 'Rebeliões no Brasil colonial',
    statement: `A respeito dos movimentos de rebelião e protesto que marcaram o período colonial, relacione os conflitos listados às respectivas descrições.

1. Confederação dos Tamoios (1554–1567)
2. Guerra dos Bárbaros (1683–1713)
3. Guerra dos Mascates (1710–1711)

( ) O conflito girou em torno da disputa dos cargos da câmara de Olinda e da criação da câmara do Recife opondo senhores de engenho de Olinda e os comerciantes do Recife a respeito da nova municipalidade.

( ) O embate envolveu portugueses, franceses e as tribos tupinambá, guaianazes, aimorés e termiminós em um conjunto de lutas e conflitos que se estenderam por mais de uma década, até a expulsão dos franceses e de seus aliados indígenas do Rio de Janeiro.

( ) A rebelião dos tapuias contra colonos luso-brasileiros no nordeste da América portuguesa decorreu da expansão de plantações e criações de gado de colonos em território dos nativos.

Assinale a opção que indica a relação correta, segundo a ordem apresentada.`,
    blockTypes: ['prose', 'prose', 'prose', 'prose', 'prose', 'command'],
    alternatives: ['1, 2 e 3.', '2, 3 e 1.', '3, 1 e 2.', '2, 1 e 3.', '1, 3 e 2.'], answer: 'C',
    why: 'A sequência é 3, 1 e 2: Mascates opôs Olinda e Recife; Confederação dos Tamoios envolveu os conflitos no Rio de Janeiro; Guerra dos Bárbaros reuniu resistências tapuias à expansão colonial.',
    wrong: { 0: 'Atribui a primeira descrição à Confederação dos Tamoios, quando ela corresponde aos Mascates.', 1: 'Começa pela Guerra dos Bárbaros, incompatível com a disputa entre Olinda e Recife.', 3: 'Inverte as identificações dos três conflitos.', 4: 'Atribui a descrição tapuia aos Mascates e a descrição dos Mascates à Guerra dos Bárbaros.' } }),
  q({ n: 30, subject: 'História', content: 'Estado e economia na globalização',
    statement: `Em 2015, o Banco Mundial apresentou, a prováveis investidores, as condições para realizar negócios em 189 economias do mundo. O documento enfatizou o avanço dos processos de desregulamentação e das facilidades de acesso ao comércio internacional.

A respeito do papel do Estado na economia global do século XXI, avalie as afirmativas a seguir.

I. Os Estados Nacionais continuam sendo peças estratégicas da globalização econômica e financeira porque é no interior da máquina estatal que são gestados os mecanismos monetários, cambiais, comerciais e fiscais que conectam o mundo.

II. O papel do Estado na economia continua relevante, na contramão do receituário neoliberal, sobretudo nas economias do leste asiático, como a China, que ultrapassou o Japão e a Alemanha tornando-se a fábrica do mundo.

III. A globalização gerou uma menor interdependência entre sistemas econômicos nacionais, de modo que o funcionamento dos mercados em cada país responde às crises econômicas negociando a inadimplência ou investimentos bilateralmente, como no caso de nações da zona do euro.

É correto o que se afirma em`,
    blockTypes: ['prose', 'prose', 'prose', 'prose', 'prose', 'command'],
    alternatives: ['I, somente.', 'II, somente.', 'I e II, somente.', 'II e III, somente.', 'I, II e III.'], answer: 'C',
    why: 'I e II reconhecem a permanência do Estado na regulação e no desenvolvimento econômico. III é falsa porque a globalização intensificou a interdependência, e crises como a da zona do euro exigiram negociações multilaterais e coordenação entre instituições e países.',
    wrong: { 0: 'Omite II, também correta.', 1: 'Omite I, também correta.', 3: 'Inclui III e omite I.', 4: 'Inclui III, cuja menor interdependência contraria a dinâmica da globalização.' } }),
  q({ n: 31, subject: 'Inglês', content: 'Compreensão e julgamento de afirmações', statement: HEALTH, blockTypes: HEALTH_BLOCKS, works: ['How Physicians Can Prepare for the Future of Health Care'],
    statementAfter: `Based on the information provided by the text, mark the statements below as true (T) or false (F).

( ) Success in the profession mentioned depends on the possibility of being aware of forthcoming events.

( ) Physicians should wait for the changes to occur before they make any decisions.

( ) Patients and health care organizations will hardly be affected by physicians’ foresight.

The statements are, respectively:`, afterBlockTypes: ['command', 'prose', 'prose', 'prose', 'command'],
    alternatives: ['F – F – T.', 'T – F – F.', 'T – F – T.', 'F – T – F.', 'F – T – T.'], answer: 'B',
    why: 'The sequence is T–F–F: foresight can determine professional success; physicians should lead change rather than wait; and their preparedness has far-reaching effects on patients and organizations.',
    wrong: { 0: 'The first statement is true and the last one is false.', 2: 'The last statement contradicts the text, which emphasizes far-reaching implications.', 3: 'The first statement is true and physicians should not wait passively.', 4: 'Only the first statement is true; the other two are false.' } }),
  q({ n: 32, subject: 'Inglês', content: 'Artificial intelligence in health care', statement: HEALTH, blockTypes: HEALTH_BLOCKS, works: ['How Physicians Can Prepare for the Future of Health Care'],
    statementAfter: 'Regarding Artificial Intelligence (AI), the author believes', afterBlockTypes: ['command'],
    alternatives: ['doctors’ role will be made altogether redundant in the near future.', 'data mining may increase the risk of inaccurate diagnoses and treatment.', 'physicians will need to be conversant with digital technologies.', 'remote monitoring is more efficiently used in hospitals than in patients’ homes.', 'checking inpatient visitation and safety rules electronically is a healthy practice.'], answer: 'C',
    why: 'The author argues that physicians and practices using AI and other digital technologies may replace those who do not, so physicians need to become familiar with these tools.',
    wrong: { 0: 'The text explicitly says digital technology is unlikely to completely replace doctors anytime soon.', 1: 'Data mining is associated with breakthroughs in precision medicine and risk prediction, not with the claimed risk.', 3: 'The text presents remote monitoring as a way to provide hospital-level care at home.', 4: 'Electronic checking of visitation rules is not discussed in the passage.' } }),
  q({ n: 33, subject: 'Inglês', content: 'Disruptive mindset', statement: HEALTH, blockTypes: HEALTH_BLOCKS, works: ['How Physicians Can Prepare for the Future of Health Care'],
    statementAfter: 'According to the text, in order to adopt a disruptive mind one must', afterBlockTypes: ['command'],
    alternatives: ['support severe methods.', 'avoid innovative projects.', 'resist change in treatment.', 'question current practices.', 'get rid of official regulations.'], answer: 'D',
    why: 'A disruptive mindset requires challenging existing paradigms and refusing to settle for the status quo, which means questioning current practices.',
    wrong: { 0: 'Severity is not advocated in the text.', 1: 'Innovation is encouraged, not avoided.', 2: 'The author recommends a positive view of change, not resistance to it.', 4: 'The passage does not call for the elimination of regulations.' } }),
  q({ n: 34, subject: 'Inglês', content: 'Idiomatic expression: left in the dust', statement: HEALTH, blockTypes: HEALTH_BLOCKS, works: ['How Physicians Can Prepare for the Future of Health Care'],
    statementAfter: 'When the author informs that conventional businesses may be “left in the dust” (line 16), he means that they may become', afterBlockTypes: ['command'],
    alternatives: ['outdated.', 'adaptable.', 'innovative.', 'resourceful.', 'overstaffed.'], answer: 'A',
    why: '“Left in the dust” means left behind by competitors; in this context, conventional businesses may become outdated if they fail to adapt.',
    wrong: { 1: 'Adaptability prevents a business from being left behind.', 2: 'Innovators are the ones moving ahead, not those left in the dust.', 3: 'Resourcefulness is not the meaning of the idiom.', 4: 'The expression has no relation to staffing levels.' } }),
  q({ n: 35, subject: 'Inglês', content: 'Contrast expressed by while', statement: HEALTH, blockTypes: HEALTH_BLOCKS, works: ['How Physicians Can Prepare for the Future of Health Care'],
    statementAfter: '“While” in “keeping ahead of the curve is rewarded, while missing the boat is met with peril” (lines 2–3) connects two', afterBlockTypes: ['command'],
    alternatives: ['required actions.', 'harmful decisions.', 'desirable conditions.', 'promising prospects.', 'contrasting situations.'], answer: 'E',
    why: 'While contrasts being rewarded for staying ahead with facing peril for missing an opportunity: two opposing situations.',
    wrong: { 0: 'Neither idea is presented as a required action.', 1: 'Being ahead and rewarded is not a harmful decision.', 2: 'Missing the boat and facing peril is not desirable.', 3: 'The second situation is dangerous, not promising.' } }),
  q({ n: 36, subject: 'Física', content: 'Movimento uniformemente variado',
    statement: tex`Um automóvel, que se deslocava a uma velocidade $v_0$, é uniformemente retardado durante 6 s e, após percorrer 105 m, ele para. A velocidade $v_0$ do automóvel no instante em que se iniciou o retardamento era de`, blockTypes: ['prose'],
    alternatives: ['42 m/s.', '38 m/s.', '35 m/s.', '28 m/s.', '22 m/s.'], answer: 'C',
    why: tex`No movimento uniformemente retardado até o repouso, a velocidade média é $(v_0+0)/2$. Assim, $\Delta s=v_m\Delta t$, ou $105=(v_0/2)\cdot6=3v_0$, logo $\boxed{v_0=35\ \mathrm{m/s}}$.`,
    wrong: { 0: 'Com 42 m/s, o automóvel percorreria 126 m em 6 s até parar.', 1: 'Com 38 m/s, percorreria 114 m.', 3: 'Com 28 m/s, percorreria apenas 84 m.', 4: 'Com 22 m/s, percorreria apenas 66 m.' } }),
  q({ n: 37, subject: 'Física', content: 'Equilíbrio em plano inclinado e força normal',
    statement: tex`Um bloco de 60 kg é abandonado sobre um plano inclinado em 30° com a horizontal. Para mantê-lo em repouso, o bloco é preso a uma das extremidades de um fio que, após passar por uma roldana fixa, é puxado verticalmente para baixo, na outra extremidade, por um homem de 80 kg que está em repouso, de pé, sobre um piso horizontal, como ilustra a figura.`, blockTypes: ['prose'],
    visuals: [{ file: 'p2-q37-plano-inclinado.svg', alt: 'Bloco em plano inclinado de 30°, ligado por fio e roldana a um homem que puxa verticalmente a outra extremidade.' }],
    statementAfter: tex`Considere o fio e a roldana ideais, os atritos desprezíveis, o trecho do fio entre o bloco e a roldana paralelo ao plano inclinado e $g=10\ \mathrm{m/s^2}$.

O módulo da força exercida pelo piso horizontal sobre o homem é`, afterBlockTypes: ['prose', 'command'],
    alternatives: ['800 N.', '600 N.', '500 N.', '300 N.', '200 N.'], answer: 'C',
    why: tex`No bloco, a tração equilibra a componente do peso paralela ao plano: $T=mg\sin30^\circ=60\cdot10\cdot0{,}5=300$ N. No homem, $N+T=P$, portanto $N=80\cdot10-300=\boxed{500\ \mathrm{N}}$.`,
    wrong: { 0: '800 N é o peso do homem sem descontar a tração exercida pelo fio.', 1: '600 N é o peso do bloco, não a força do piso sobre o homem.', 3: '300 N é a tração, não a normal sobre o homem.', 4: '200 N não satisfaz o equilíbrio vertical do homem.' } }),
  q({ n: 38, subject: 'Física', content: 'Alavanca interfixa e dupla pesagem', difficulty: 'Difícil',
    statement: 'Nas feiras-livres, ainda é muito utilizada a “balança de braços iguais”. Trata-se de uma alavanca interfixa na qual os pratos são equidistantes do ponto de apoio. Coloca-se, em um dos pratos, o corpo de massa M que se quer “pesar”. Dispondo-se de uma coleção de massas graduadas, verifica-se, por tentativas, qual a massa graduada m que, colocada no outro prato, é capaz de manter a balança em equilíbrio, como ilustra a figura.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q38-balanca-inicial.svg', alt: 'Balança de braços iguais com massa M no prato esquerdo e massa m no direito; ambos os braços medem d.' }],
    statementAfter: `Nesse caso, como x = y, então M = m.

Um dos golpes mais utilizados por feirantes desonestos é deslocar o ponto de apoio, fazendo com que um dos braços fique menor do que o outro. Assim, colocando o corpo de massa M que se quer pesar no prato que está mais próximo do ponto de apoio, a massa m graduada que, colocada no outro prato, equilibra a balança será maior do que M. Para evitar ser vítima desse golpe, você pode utilizar a “dupla pesagem”, isto é, colocar o corpo que se quer “pesar” alternadamente em cada um dos pratos da balança e anotar o valor da massa graduada que, em cada caso, a equilibra:`,
    afterBlockTypes: ['prose', 'prose'],
    afterVisuals: [
      { file: 'p2-q38-pesagem-1.svg', alt: 'Primeira pesagem: M no prato esquerdo, m₁ no direito, com braços x e y.' },
      { file: 'p2-q38-pesagem-2.svg', alt: 'Segunda pesagem: m₂ no prato esquerdo e M no direito, com os mesmos braços x e y.' },
    ],
    statementTail: `Na primeira pesagem, o corpo de massa M está no prato da esquerda e a massa graduada que equilibra a balança é m₁. Na segunda, o corpo de massa M está no prato da direita e a massa graduada é m₂.

Nesse caso, seja qual for o braço x ou y da balança, a massa M do corpo que se quer “pesar” é igual a`, tailBlockTypes: ['note', 'command'],
    alternatives: [tex`$\dfrac{m_1+m_2}{2}$.`, tex`$\sqrt{m_1+m_2}$.`, tex`$\sqrt{m_1^2+m_2^2}$.`, tex`$\sqrt{\dfrac{m_1^2+m_2^2}{2}}$.`, tex`$\sqrt{m_1m_2}$.`], answer: 'E',
    why: tex`Os equilíbrios de torques fornecem $Mx=m_1y$ e $m_2x=My$. Dividindo as relações, $M/m_1=m_2/M$; portanto, $M^2=m_1m_2$ e $\boxed{M=\sqrt{m_1m_2}}$, a média geométrica das duas massas graduadas.`,
    wrong: { 0: 'A média aritmética só coincidiria com o resultado em casos particulares; o equilíbrio fornece média geométrica.', 1: 'As dimensões e a relação de torques não conduzem à raiz da soma das massas.', 2: 'A soma dos quadrados não decorre das equações de equilíbrio.', 3: 'Essa média quadrática não é a relação obtida pela dupla pesagem.' } }),
  q({ n: 39, subject: 'Física', content: 'Espelhos esféricos conjugados', difficulty: 'Difícil',
    statement: 'Dois espelhos esféricos, ambos de raios de curvatura iguais a 40 cm, sendo um côncavo e outro convexo, de mesmo eixo principal, estão frente a frente. Entre eles há uma vela disposta perpendicularmente ao eixo principal numa posição tal que as imagens conjugadas pelos espelhos têm, ambas, metade do tamanho da vela. A distância entre os vértices dos espelhos é de', blockTypes: ['prose'],
    alternatives: ['50 cm.', '60 cm.', '80 cm.', '100 cm.', '120 cm.'], answer: 'C',
    why: tex`Os focos têm módulo $f=R/2=20$ cm. No côncavo, imagem real reduzida à metade exige $p_c'=p_c/2$; assim, $1/20=1/p_c+2/p_c$, logo $p_c=60$ cm. No convexo, $f=-20$ cm e imagem virtual direita com metade do tamanho exige $p_v'=-p_v/2$; então $-1/20=1/p_v-2/p_v$, logo $p_v=20$ cm. A distância entre os vértices é $60+20=\boxed{80\ \mathrm{cm}}$.`,
    wrong: { 0: '50 cm não reúne as distâncias exigidas pelos dois aumentos.', 1: '60 cm é apenas a distância da vela ao espelho côncavo.', 3: '100 cm supera a soma das distâncias calculadas.', 4: '120 cm não satisfaz as equações dos dois espelhos.' } }),
  q({ n: 40, subject: 'Física', content: 'Associação de resistores e leitura de amperímetro',
    statement: 'No circuito esquematizado pela figura a seguir, o voltímetro ideal indica 9 V.', blockTypes: ['prose'],
    visuals: [{ file: 'p2-q40-circuito.svg', alt: 'Circuito com fonte, amperímetro em série, voltímetro em paralelo com a fonte, chave C e resistores de 6 Ω no ramo vertical, 3 Ω e 4 Ω no ramo central e 6 Ω no ramo inferior.' }],
    statementAfter: 'Quando a chave C é fechada, o voltímetro continua indicando 9 V. Já o amperímetro ideal indica', afterBlockTypes: ['command'],
    alternatives: ['2 A.', '3 A.', '4 A.', '6 A.', '9 A.'], answer: 'B',
    why: tex`Os resistores de 6 Ω e 3 Ω ficam em paralelo, resultando em $2\ \Omega$; esse conjunto está em série com o de $4\ \Omega$, totalizando $6\ \Omega$. Esse ramo está em paralelo com o resistor inferior de $6\ \Omega$, logo $R_{eq}=3\ \Omega$. Como a fonte mantém 9 V, $I=U/R=9/3=\boxed{3\ \mathrm{A}}$.`,
    wrong: { 0: '2 A corresponderia a uma resistência equivalente de 4,5 Ω, não à do circuito.', 2: '4 A corresponderia a 2,25 Ω de resistência equivalente.', 3: '6 A corresponderia a 1,5 Ω e não considera corretamente o ramo inferior.', 4: '9 A corresponderia a 1 Ω, incompatível com a associação.' } }),
];
