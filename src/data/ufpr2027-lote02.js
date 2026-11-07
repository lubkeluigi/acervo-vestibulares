import { q } from './ufpr2027-helpers.js';

export const ufpr2027Lote02 = [
  q({
    n: 11, subject: 'Biologia', content: 'Evolução — Vantagens e desvantagens da reprodução assexuada', difficulty: 'Média',
    statement: `A molinésia amazônica é um enigma evolutivo: é um peixe exclusivamente feminino. As fêmeas produzem descendentes idênticos, não misturando seu DNA com o de um parceiro. Pela lógica darwiniana, essa característica poderia levar à sua extinção, mas a molinésia amazônica prospera há mais de 100.000 anos em rios e lagoas de águas quentes ao longo da fronteira entre o México e o Texas. Pesquisas recentes têm identificado como a espécie tem modificado seu destino evolutivo mais provável, a extinção.

Disponível em: https://www.sciencenews.org/article/sex-skipping-fish-hacks-evolution-gene.

Pela lógica darwiniana, essa espécie teria maior risco de extinção porque:`,
    alternatives: [
      'os descendentes apresentam menor variabilidade genética, favorecendo o acúmulo de mutações deletérias.',
      'a reprodução assexuada gera menor número de descendentes quando comparada à reprodução sexuada.',
      'na ausência de machos, a prole fica com menor disponibilidade de alimentos e mais exposta à predação.',
      'os descendentes gerados têm mais chance de se tornar estéreis, pois não se reproduzem sexuadamente.',
    ],
    answer: 'A',
    why: 'Na reprodução unissexuada/partenogenética estrita, a ausência de recombinação meiótica limita a variabilidade genética e impede a eliminação eficiente de mutações prejudiciais (processo conhecido na biologia evolutiva como "catraca de Muller"), tornando a população vulnerável a novas pressões ecológicas e patógenos.',
    wrong: {
      1: 'Populações assexuadas costumam apresentar taxa intrínseca de crescimento populacional mais rápida ("custo duplo do sexo" superado).',
      2: 'A disponibilidade de alimento e predação afeta os indivíduos independentemente do sexo dos progenitores na ecologia de peixes.',
      3: 'As fêmeas geradas são plenamente férteis e aptas a gerar novas descendentes fêmeas viáveis.',
    },
  }),
  q({
    n: 12, subject: 'Biologia', content: 'Bioquímica e fisiologia vegetal — Etapas da fotossíntese', difficulty: 'Fácil',
    statement: 'Durante a fotossíntese, são processos que ocorrem independentemente da presença da luz:',
    alternatives: [
      'Fixação de CO2 e síntese de O2.',
      'Síntese de carboidratos e fixação de CO2.',
      'Síntese de NADPH e síntese de carboidratos.',
      'Síntese de O2 e síntese de NADPH.',
    ],
    answer: 'B',
    why: 'A fotossíntese é dividida em fase fotoquímica (dependente diretamente da luz para fotofosforilação, fotólise da água e produção de ATP e NADPH) e fase enzimática/química (Ciclo de Calvin-Benson no estroma), na qual ocorrem a fixação do carbono inorgânico (CO₂) e a síntese de trioses-fosfato/glicídios utilizando a energia gerada na fase clara.',
    wrong: {
      0: 'A síntese de O₂ decorre da fotólise da água nos fotossistemas, sendo estritamente dependente da absorção de luz.',
      2: 'A redução de NADP⁺ a NADPH ocorre nos tilacoides e depende diretamente do fluxo fotoquímico de elétrons.',
      3: 'Tanto a liberação de oxigênio quanto a formação de NADPH são eventos exclusivos da etapa luminosa.',
    },
  }),
  q({
    n: 13, subject: 'Biologia', content: 'Fisiologia animal comparada — Excreção de compostos nitrogenados', difficulty: 'Média',
    statement: `Vertebrados eliminam diferentes excretas nitrogenadas. Aves eliminam principalmente ácido úrico, e peixes ósseos eliminam ureia. Essas diferenças envolvem uma relação de equilíbrio entre gasto de água e consumo de energia. Em relação à ureia, a excreção de ácido úrico é um processo que:`,
    alternatives: [
      'demanda menos água e é metabolicamente mais simples.',
      'demanda menos água e é metabolicamente mais complexo.',
      'demanda mais água e é metabolicamente mais simples.',
      'demanda mais água e é metabolicamente mais complexo.',
    ],
    answer: 'B',
    why: 'O ácido úrico é praticamente insolúvel em água e pouco tóxico, o que permite sua excreção em pasta pastosa com mínima perda hídrica (adaptação chave para aves e répteis). Em contrapartida, sua via de biossíntese a partir da amônia exige uma cascata enzimática complexa com alto consumo de ATP.',
    wrong: {
      0: 'A síntese do ácido úrico é metabolicamente muito mais onerosa e complexa que a síntese de ureia.',
      2: 'O ácido úrico economiza água em relação à ureia e à amônia, não demandando mais água.',
      3: 'Embora seja mais complexo, o ácido úrico demanda consideravelmente menos água por grama de nitrogênio excretado.',
    },
  }),
  q({
    n: 14, subject: 'Biologia', content: 'Botânica — Teoria da coesão-tensão (Dixon)', difficulty: 'Fácil',
    statement: `A teoria que melhor explica o deslocamento da seiva bruta pelo xilema é a teoria da coesão-tensão (teoria de Dixon). Segundo essa teoria, a seiva bruta é movida fundamentalmente pela:`,
    alternatives: [
      'força osmótica da raiz, que gera uma pressão positiva responsável pela subida da seiva pelos vasos do xilema.',
      'formação de pontes de hidrogênio, que mantém a adesão entre as moléculas de água e as paredes dos vasos.',
      'gutação, processo de eliminação de água por meio de hidatódios presentes nas folhas.',
      'perda da água por evaporação, que faz com que a água seja puxada até as folhas pela transpiração.',
    ],
    answer: 'D',
    why: 'Na teoria de Dixon, a transpiração foliar cria um gradiente de potencial hídrico negativo (tensão/sucção) nos estômatos. Graças às forças de coesão entre moléculas de água (ligações de hidrogênio) e de adesão às paredes xilemáticas, a coluna contínua de água é puxada da raiz até o topo da planta.',
    wrong: {
      0: 'A pressão positiva de raiz atua apenas em plantas de pequeno porte e condições de alta umidade, sendo insuficiente para explicar a ascensão em árvores de grande porte.',
      1: 'A adesão e coesão mantêm a coluna de seiva contínua, mas a força motriz primordial que desloca a seiva é a tensão gerada pela evapotranspiração.',
      2: 'Gutação é o extravasamento de seiva líquida por hidatódios sob alta pressão de raiz, não o mecanismo de transporte em larga escala.',
    },
  }),
  q({
    n: 15, subject: 'Biologia', content: 'Fisiologia humana — Sinapse química e potenciais pós-sinápticos', difficulty: 'Média',
    statement: `Um neurotransmissor que atua promovendo a abertura de canais de cloreto em um neurônio pós-sináptico desencadeará neste neurônio pós-sináptico um(a):`,
    alternatives: [
      'despolarização, devido à saída de íons cloreto.',
      'hiperpolarização, devido à entrada de íons cloreto.',
      'potencial de ação, devido à saída de íons cloreto.',
      'repolarização, devido à entrada de íons cloreto.',
    ],
    answer: 'B',
    why: 'O íon cloreto (Cl⁻) tem concentração extracelular muito superior à intracelular. A abertura de seus canais (como ocorre com o GABA ou a glicina) causa influxo de ânions para o citoplasma, tornando o potencial de membrana mais negativo que o repouso (hiperpolarização), gerando um Potencial Pós-Sináptico Inibitório (PPSI).',
    wrong: {
      0: 'A entrada de cargas negativas afasta a membrana do limiar, em vez de despolarizá-la.',
      2: 'A hiperpolarização inibe o disparo de potencial de ação, reduzindo a excitabilidade neuronal.',
      3: 'Repolarização é o retorno ao potencial de repouso após despolarização (mediado principalmente por saída de K⁺), enquanto o efeito inibitório primário do Cl⁻ é a hiperpolarização.',
    },
  }),
  q({
    n: 16, subject: 'Biologia', content: 'Parasitologia — Ciclo biológico do Plasmodium e malária', difficulty: 'Média',
    statement: `“A sombra do cedro vem se encostar no cocho. Primo Ribeiro levantou os ombros: começa a tremer. Com muito atraso. Mas ele tem colmeias de bichinhos maldosos, que não se misturam, soltando enxames no sangue em dias alternados. E assim nunca precisa de passar um dia sem tremer.”
Rosa, João Guimarães. Sagarana. 25. ed. Rio de Janeiro: Nova Fronteira, 2001.

O trecho do conto “Sarapalha” ilustra uma característica clínica da malária, na qual os picos de febre alta, sudorese intensa e tremores ocorrem em ciclos intermitentes. Esses acessos febris são desencadeados pela ruptura das hemácias infectadas, liberando na corrente sanguínea:`,
    alternatives: [
      'esporozoítos e hemozoína.',
      'esporozoítos e trofozoítos.',
      'merozoítos e hemozoína.',
      'merozoítos e trofozoítos.',
    ],
    answer: 'C',
    why: 'No ciclo eritrocítico da malária, a esquizogonia intraeritrocítica culmina na lise sincrônica das hemácias, liberando merozoítos (que reinfectam novos eritrócitos) e o pigmento malárico (hemozoína com toxinas pirogênicas), substâncias que estimulam macrófagos a secretar citocinas inflamatórias (como TNF e IL-1), deflagrando os acessos febris periódicos.',
    wrong: {
      0: 'Esporozoítos são as formas infectantes inoculadas pela picada da fêmea do mosquito Anopheles, as quais se dirigem inicialmente aos hepatócitos.',
      1: 'Esporozoítos não são produzidos no interior das hemácias humanas.',
      3: 'Trofozoítos são formas intermediárias em desenvolvimento metabólico dentro da hemácia, antes da clivagem em merozoítos.',
    },
  }),
  q({
    n: 17, subject: 'História', content: 'Antiguidade — Intercâmbio cultural greco-egípcio', difficulty: 'Média',
    statement: `Considerando as formas de interação histórica entre os territórios da Grécia e do Egito na Antiguidade, é correto afirmar que esse contato:`,
    alternatives: [
      'expressou-se, no Período Helenístico, na supressão das instituições faraônicas e na imposição do modelo da pólis pela dinastia ptolomaica.',
      'manifestou-se, no Período Arcaico, em uma tipologia artística grega conhecida como Orientalizante, presente na decoração da cerâmica e na escultura monumental.',
      'traduziu-se, no Período Clássico, na fundação de colônias agrárias gregas por todo o Delta do Nilo, nos moldes da colonização do Mediterrâneo ocidental.',
      'extinguiu-se, no Período Romano, com a proibição dos cultos e das formas artísticas de matriz egípcia nas cidades helenizadas do Império.',
    ],
    answer: 'B',
    why: 'Durante o Período Arcaico (séculos VIII–VI a.C.), a intensificação das rotas mercantis no Mediterrâneo oriental (com destaque para o empório de Náucratis no Egito) gerou o período orientalizante na arte grega, visível nas figuras de lótus e animais na cerâmica coríntia e na estatuária arcaica dos kouroi, inspirada nas proporções monolíticas egípcias.',
    wrong: {
      0: 'A dinastia ptolomaica no Egito helenístico adotou os títulos, ritos e representações faraônicas tradicionais para legitimar seu poder perante a população nativa.',
      2: 'A presença grega no Egito clássico foi restrita e regulada pela monarquia saíta em postos mercantis como Náucratis, sem proliferação indiscriminada de póleis agrárias no delta.',
      3: 'O culto a divindades egípcias (como Ísis e Serápis) expandiu-se intensamente pelo mundo romano, sendo amplamente integrado ao panteão imperial.',
    },
  }),
  q({
    n: 18, subject: 'História', content: 'História Medieval e Usos do Passado — Império Carolíngio e Europa', difficulty: 'Média',
    statement: `Em 1950, foi estabelecido, na cidade alemã de Aachen, o “Prêmio Carlos Magno”, voltado para premiar aqueles que trabalhassem em prol de uma solidariedade continental. Seu primeiro ganhador, Richard von Coudenhove-Kalergi, fundador do Movimento Pan-Europeu, mencionou em seu discurso um processo de aproximação europeia que seria uma:
“[...] renovação do Império de Carlos Magno como uma confederação de nações livres [...] para transformar a Europa de um campo de batalha de recorrentes guerras mundiais em um império mundial pacífico e florescente de pessoas livres!”
Disponível em: https://www.historyextra.com/period/medieval/charlemagne-unifier-father-europe-correct-european-symbol-who-was-he/.

Em sua fala, von Coudenhove-Kalergi evocou uma leitura contemporânea e ocidentalista do período carolíngio da Alta Idade Média, buscando no passado as raízes da política do presente. Qual característica do período carolíngio embasa esse uso contemporâneo do passado europeu?`,
    alternatives: [
      'O império carolíngio articulou vastos territórios da Europa Ocidental em torno de uma identidade cristã e de uma aliança com a Igreja, o que embasaria a imagem de Carlos Magno como símbolo da unificação europeia.',
      'O império de Carlos Magno representava o triunfo germânico sobre as estruturas do passado romano e latino, suscitando assim uma ideia de Europa focada nas porções ao norte do continente.',
      'A estrutura política carolíngia era baseada em formas censitárias de democracia que, apesar de restritivas, permitiriam evocar uma identidade europeia fundada na continuidade das instituições representativas desde a Antiguidade.',
      'Carlos Magno aboliu a escravidão e instaurou um sistema feudal de trabalho assalariado, o que sustentaria uma identidade europeia associada ao pioneirismo do continente nas liberdades econômicas e sociais.',
    ],
    answer: 'A',
    why: 'Coroado pelo Papa no ano 800, Carlos Magno unificou sob a coroa franca vastas regiões da França, Alemanha, norte da Itália e Países Baixos, consolidando a Cristandade Ocidental (Renascença Carolíngia). Essa unidade territorial e religiosa foi reinterpretada no pós-Segunda Guerra Mundial como o mito fundador da integração europeia.',
    wrong: {
      1: 'Carlos Magno promoveu uma síntese consciente com o legado romano clássico ("Renovatio Imperii Romanorum"), e não um repúdio à cultura latina.',
      2: 'A monarquia carolíngia baseava-se em laços de fidelidade pessoal, vassalagem e direito consuetudinário régio, sem instituições de representação democrática ou voto censitário.',
      3: 'O período carolíngio assentava-se na servidão feudal e na persistência de cativeiros de guerra, longe de modelos de trabalho livre assalariado.',
    },
  }),
  q({
    n: 19, subject: 'História', content: 'Brasil Império — Indianismo e contradições sociais', difficulty: 'Média',
    statement: `Durante o século XIX, a busca por uma identidade nacional brasileira comumente passou pela figura simbólica do indígena, idealizado como um ancestral heroico. Ao mesmo tempo, a política real envolvia grandes níveis de violência e exclusão social, política e cultural. Durante o período imperial, essa dualidade pode ser vista em duas dimensões:`,
    alternatives: [
      'no Condoreirismo e nos levantes populares, como o do Vintém.',
      'no Parnasianismo e nos conflitos litorâneos, como a Questão Christie.',
      'no Romantismo e em episódios de repressão, como a Cabanagem.',
      'no Naturalismo e em momentos de violência militar, como o Massacre de Porongos.',
    ],
    answer: 'C',
    why: 'A primeira geração do Romantismo no Brasil (Gonçalves Dias, José de Alencar) construiu o mito do bom selvagem indígena como herói fundador da nação. No plano concreto, o Império reprimiu de forma violenta revoltas populares formadas majoritariamente por indígenas, caboclos e ribeirinhos, como a Cabanagem no Grão-Pará (1835–1840).',
    wrong: {
      0: 'O Condoreirismo focava na temática abolicionista e republicana da terceira geração romântica, e a Revolta do Vintém ocorreu no final do Império por questões tributárias urbanas.',
      1: 'O Parnasianismo primava pelo rigor métrico e classicismo formal helênico, e a Questão Christie foi um impasse diplomático com o Reino Unido.',
      3: 'O Naturalismo dedicou-se ao romance urbano e à animalização científica do cortiço, e o Massacre de Porongos envolveu lanceiros negros na Revolução Farroupilha.',
    },
  }),
  q({
    n: 20, subject: 'História', content: 'Brasil Colônia — Sociedade do açúcar e trabalho escravizado', difficulty: 'Fácil',
    statement: `A estruturação do processo colonial nos espaços do chamado “Novo Mundo” forçou a criação de mecanismos de controle e administração por parte das metrópoles ibéricas, que agora precisavam manejar não apenas seus espaços políticos europeus, mas também suas novas ambições além-mar. Nesse sentido, durante os séculos XVI e XVII, a produção de açúcar se tornou pilar da organização social e econômica da América Portuguesa. Sobre a economia açucareira e os grupos sociais que se relacionavam com ela no Nordeste da colônia brasileira, é correto afirmar que:`,
    alternatives: [
      'a produção era parte da lógica de abastecimento dos empreendimentos colonizadores no interior do território, empregando principalmente conhecimentos indígenas.',
      'a comercialização e distribuição do açúcar era gerenciada pelos senhores de engenho, cuja autonomia econômica havia sido garantida pelo sistema de capitanias.',
      'a ênfase produtiva era focada nos mercados europeus, cuja racionalização econômica também era dependente da utilização de africanos escravizados.',
      'a manutenção do sistema de engenhos demandava que o plantio de açúcar convivesse com policulturas de subsistência familiar nos espaços latifundiários.',
    ],
    answer: 'C',
    why: 'A plantation açucareira na América Portuguesa baseava-se no tripé mercantilista clássico: grande propriedade monocultora (latifúndio), produção voltada exclusivamente ao comércio exterior europeu e exploração sistemática do trabalho compulsório de africanos escravizados.',
    wrong: {
      0: 'A produção de açúcar concentrava-se no litoral e destinava-se aos mercados consumidores da Europa, não ao abastecimento interno.',
      1: 'A refinação, transporte transatlântico e comercialização do açúcar nos portos da Europa eram controlados por mercadores lusos e companhias flamengas, não autonomamente pelos fazendeiros locais.',
      3: 'O latifúndio canavieiro era estritamente monocultor e concentrador de terras, empurrando as culturas alimentares de subsistência para terras marginais ou para o sertão pecuarista.',
    },
  }),
];
