import { createFmabc, tex } from './fmabc-helpers.js';

const { q } = createFmabc(2027);

const CALVIN_COMIC = {
  statement: 'Read the comic strip by Bill Watterson to answer questions 21 and 22.',
  blockTypes: ['label'],
  visuals: [{
    file: 'q21-tirinha-calvin.svg',
    alt: 'Tirinha de Calvin e Haroldo em quatro quadrinhos em que Calvin compra cinco cópias de uma revista em quadrinhos para guardar como fundo de aposentadoria.',
    caption: '(There’s Treasure Everywhere, 1996.)',
  }],
};

const FAO_TEXT = `Leia o texto publicado pela Organização das Nações Unidas para a Alimentação e a Agricultura (FAO) para responder às questões de 23 a 27.

Acute food insecurity has tripled since 2016 to nearly 300 million people, while humanitarian food sector funding has fallen back toward 2016 levels. Every dollar now has to achieve far more.

Agriculture offers the strongest return: on average, each dollar invested in a farmer’s field produces 3 dollars in local food value. Yet while up to 80% of acutely food-insecure people live in rural areas, only 5% of relevant funding supports food production.

FAO’s 2026 Appeal calls for rebalancing global response efforts — scaling up and sequencing agricultural solutions alongside food and nutrition assistance to feed more people, more sustainably, at lower cost.

The gap between food security needs and available funding is at an all-time high. Crises are deepening, shocks are intensifying, yet international community continues to underinvest in agriculture — the most cost-effective tool available. Supporting agricultural production addresses needs locally, reduces dependence on external aid and eases migration pressures. More food is produced where it is needed, by the people who need it, addressing why they need it.

(www.fao.org. Adaptado.)

¹ $ € £ kr ¥ ريال: diferentes tipos de moedas utilizadas no mundo.`;

const fao = (command) => ({
  statement: FAO_TEXT,
  blockTypes: ['label', 'prose', 'prose', 'prose', 'prose', 'source', 'note'],
  visuals: [{
    file: 'q23-banner-fao.svg',
    alt: 'Banner do Apelo Global da FAO 2026 com mulher segurando feixes de trigo e o texto em inglês "Time to maximize the impact of every $ € £ kr ¥" e "Global Emergency and Resilience Appeal 2026".',
  }],
  statementAfter: command,
  afterBlockTypes: ['command'],
  preview: command,
});

export const fmabc2027Lote02 = [
  q({
    n: 21,
    subject: 'Inglês',
    content: 'Interpretação de tirinha e humor',
    difficulty: 'Fácil',
    ...CALVIN_COMIC,
    statementAfter: 'The fourth panel shows that the boy doesn’t realize that',
    afterBlockTypes: ['command'],
    preview: 'The fourth panel shows that the boy doesn’t realize that',
    alternatives: [
      'he should have bought more copies of the comic book.',
      'comic books cannot become retirement funds.',
      'financial investments usually require professional advice.',
      'his strategy would lose its effectiveness if adopted by everyone.',
      'preserving comic books may reduce their appeal to readers.',
    ],
    answer: 'D',
    why: 'No último quadrinho, Haroldo questiona como a revista se tornará rara e valiosa se todas as crianças dos Estados Unidos comprarem cinco exemplares; Calvin responde contando que a mãe dos outros garotos as jogará fora — revelando que não percebe que, se todos adotarem sua estratégia de guardar os exemplares, a raridade desaparece e ela perde a eficácia.',
    wrong: {
      0: 'Calvin já comprou cinco cópias para guardar; o problema apontado no diálogo é justamente a ilusão de raridade caso todos façam o mesmo, não a quantidade individual adquirida.',
      1: 'O humor não nega que quadrinhos raros possam valorizar, mas expõe a contradição lógica da suposição de raridade universal.',
      2: 'Em nenhum momento a tirinha trata da necessidade de consultoria financeira profissional.',
      4: 'Calvin sela as revistas para preservá-las intactas visando ao valor futuro de revenda, não havendo discussão sobre atratividade para leitores.',
    },
  }),
  q({
    n: 22,
    subject: 'Inglês',
    content: 'Expressões idiomáticas e vocabulário',
    difficulty: 'Fácil',
    ...CALVIN_COMIC,
    statementAfter: 'In the excerpt from the third panel “<u>Needless to say,</u> I bought five copies”, the underlined expression can be replaced, with no change in meaning, by:',
    afterBlockTypes: ['command'],
    preview: 'In the excerpt from the third panel “Needless to say, I bought five copies”...',
    alternatives: [
      'Obviously.',
      'At any rate.',
      'Accordingly.',
      'For the time being.',
      'For that matter.',
    ],
    answer: 'A',
    why: 'A expressão idiomática “Needless to say” significa literalmente “não é preciso dizer / desnecessário dizer”, equivalente em sentido a “Obviously” (“obviamente”).',
    wrong: {
      1: '“At any rate” significa “de qualquer forma / em todo caso”, não indicando algo óbvio.',
      2: '“Accordingly” equivale a “consequentemente / de acordo com isso”, alterando a ênfase de obviedade.',
      3: '“For the time being” significa “por enquanto / temporariamente”.',
      4: '“For that matter” significa “quanto a isso / aliás”, sem equivalência com “Needless to say”.',
    },
  }),
  q({
    n: 23,
    subject: 'Inglês',
    content: 'Compreensão de texto e propósito comunicativo',
    difficulty: 'Fácil',
    statement: `Leia o texto publicado pela Organização das Nações Unidas para a Alimentação e a Agricultura (FAO) para responder às questões de 23 a 27.`,
    blockTypes: ['label'],
    visuals: [{
      file: 'q23-banner-fao.svg',
      alt: 'Banner do Apelo Global da FAO 2026 com mulher segurando feixes de trigo e o texto em inglês "Time to maximize the impact of every $ € £ kr ¥" e "Global Emergency and Resilience Appeal 2026".',
    }],
    statementAfter: `Acute food insecurity has tripled since 2016 to nearly 300 million people, while humanitarian food sector funding has fallen back toward 2016 levels. Every dollar now has to achieve far more.

Agriculture offers the strongest return: on average, each dollar invested in a farmer’s field produces 3 dollars in local food value. Yet while up to 80% of acutely food-insecure people live in rural areas, only 5% of relevant funding supports food production.

FAO’s 2026 Appeal calls for rebalancing global response efforts — scaling up and sequencing agricultural solutions alongside food and nutrition assistance to feed more people, more sustainably, at lower cost.

The gap between food security needs and available funding is at an all-time high. Crises are deepening, shocks are intensifying, yet international community continues to underinvest in agriculture — the most cost-effective tool available. Supporting agricultural production addresses needs locally, reduces dependence on external aid and eases migration pressures. More food is produced where it is needed, by the people who need it, addressing why they need it.

(www.fao.org. Adaptado.)

¹ $ € £ kr ¥ ريال: diferentes tipos de moedas utilizadas no mundo.

The main purpose of the text is to`,
    afterBlockTypes: ['prose', 'prose', 'prose', 'prose', 'source', 'note', 'command'],
    preview: 'The main purpose of the text is to',
    alternatives: [
      'introduce the goals of FAO’s 2026 Appeal.',
      'compare agriculture with other forms of humanitarian aid.',
      'encourage rural communities to reduce their dependence on aid.',
      'explain the causes of global food insecurity.',
      'defend increased investment in agriculture to improve food security.',
    ],
    answer: 'E',
    why: 'Ao longo de todos os parágrafos, a FAO argumenta que a agricultura oferece o maior retorno por dólar investido, critica o baixo percentual de recursos destinado à produção agrícola (apenas 5%) e defende ampliar o apoio à produção agrícola local para enfrentar a insegurança alimentar de forma sustentável e custo-efetiva.',
    wrong: {
      0: 'O Apelo 2026 é mencionado apenas no terceiro parágrafo como meio para o argumento central de ampliação do investimento agrícola.',
      1: 'O texto não busca simplesmente comparar modalidades de ajuda, mas propor a ampliação e integração de soluções agrícolas à assistência alimentar.',
      2: 'O apelo é dirigido à comunidade internacional e aos doadores (“international community continues to underinvest”), e não às comunidades rurais.',
      3: 'O foco não é detalhar as causas históricas ou climáticas da insegurança alimentar, mas defender o papel estratégico do investimento agrícola.',
    },
  }),
  q({
    n: 24,
    subject: 'Inglês',
    content: 'Leitura e localização de informação',
    difficulty: 'Fácil',
    ...fao('According to the second paragraph,'),
    alternatives: [
      'increasing food production depends mainly on humanitarian assistance.',
      'rural populations receive more financial support than urban populations.',
      'food insecurity is no longer concentrated in rural areas.',
      'most humanitarian funding is directed to rural food production.',
      'funding for food production is not proportional to where the greatest needs exist.',
    ],
    answer: 'E',
    why: 'O segundo parágrafo contrapõe dois dados: até 80% das pessoas em insegurança alimentar aguda vivem em áreas rurais, porém apenas 5% do financiamento relevante é destinado à produção de alimentos — evidenciando desproporcionalidade entre necessidade e alocação de recursos.',
    wrong: {
      0: 'O parágrafo afirma que investimentos diretos no campo geram alto retorno em comida local, sem subordiná-los à assistência humanitária convencional.',
      1: 'Não há comparação entre populações rurais e urbanas nesse sentido; ao contrário, aponta-se escassez de financiamento à produção rural.',
      2: 'O texto informa o oposto: até 80% das pessoas com insegurança alimentar aguda ainda vivem no meio rural.',
      3: 'Apenas 5% do financiamento relevante apoia a produção de alimentos, e não a maioria.',
    },
  }),
  q({
    n: 25,
    subject: 'Inglês',
    content: 'Vocabulário e preposições em contexto',
    difficulty: 'Fácil',
    ...fao('No terceiro parágrafo “FAO’s 2026 Appeal calls for rebalancing global response efforts — scaling up and sequencing agricultural solutions <u>alongside</u> food and nutrition assistance to feed more people, more sustainably, at lower cost”, o termo sublinhado pode ser substituído, sem alteração de sentido, por:'),
    alternatives: [
      'because of.',
      'rather than.',
      'together with.',
      'in spite of.',
      'regardless of.',
    ],
    answer: 'C',
    why: 'No contexto, “alongside” indica concomitância e complementaridade (“juntamente com / ao lado de” assistência alimentar e nutricional), equivalendo exatamente a “together with”.',
    wrong: {
      0: '“because of” indica causa (“por causa de”), alterando o sentido aditivo/complementar.',
      1: '“rather than” expressa substituição ou preferência excludente (“em vez de”), contradizendo a ideia de reequilíbrio combinado.',
      3: '“in spite of” tem valor concessivo (“apesar de”).',
      4: '“regardless of” significa “independentemente de”.',
    },
  }),
  q({
    n: 26,
    subject: 'Inglês',
    content: 'Conectivos e coesão discursiva',
    difficulty: 'Fácil',
    ...fao('In the excerpt from the fourth paragraph “Crises are deepening, shocks are intensifying, <u>yet</u> international community continues to underinvest in agriculture” the underlined word, in this context, signals'),
    alternatives: [
      'a cause-and-effect relationship.',
      'an inevitable development.',
      'a gradual progression.',
      'a departure from expectations.',
      'a timely action.',
    ],
    answer: 'D',
    why: 'A conjunção adversativa/concessiva “yet” (“no entanto / contudo”) introduz um fato contrastante com o que seria esperado diante do agravamento das crises e dos choques: mesmo assim, a comunidade internacional segue subinvestindo na agricultura — ou seja, um desvio em relação ao esperado (“a departure from expectations”).',
    wrong: {
      0: 'O termo estabelece contraste, e não relação de causa e consequência.',
      1: 'Não apresenta o subinvestimento como desdobramento inevitável, mas como incoerência diante da urgência.',
      2: 'A ideia de progressão gradual está nos verbos “deepening” e “intensifying”, não no conectivo “yet”.',
      4: 'Ao criticar o subinvestimento contínuo, o texto aponta falta de resposta oportuna, e não ação tempestiva.',
    },
  }),
  q({
    n: 27,
    subject: 'Inglês',
    content: 'Relações lógicas e sintaxe em texto em língua inglesa',
    difficulty: 'Média',
    ...fao(`“Supporting agricultural production <u>addresses needs locally</u>” (4º parágrafo).

O trecho sublinhado expressa, em relação ao contexto anteriormente apresentado, ideia de`),
    afterBlockTypes: ['prose', 'command'],
    alternatives: [
      'finalidade e de propósito.',
      'comparação e de semelhança.',
      'contraste e de concessão.',
      'tempo e de sequência.',
      'meio e de resultado.',
    ],
    answer: 'E',
    why: 'Na estrutura do período (“Supporting agricultural production addresses needs locally, reduces dependence on external aid and eases migration pressures”), o apoio à produção agrícola funciona como meio/ação pelo qual se obtém o resultado concreto de atender às demandas localmente.',
    wrong: {
      0: 'O verbo conjugado no presente (“addresses”) não introduz uma oração final hipotética com “in order to / so that”, mas declara o efeito alcançado pela medida.',
      1: 'Não há confronto ou equivalência entre dois elementos.',
      2: 'O trecho reforça e detalha os benefícios da solução agrícola defendida, sem oposição ao parágrafo.',
      3: 'As ações listadas formam uma série de efeitos simultâneos da medida, não uma sucessão cronológica.',
    },
  }),
  q({
    n: 28,
    subject: 'Inglês',
    content: 'Interpretação de citação e inferência',
    difficulty: 'Média',
    statement: 'Read the quotation by Oprah Winfrey, an American media personality and philanthropist.',
    blockTypes: ['label'],
    visuals: [{
      file: 'q28-citacao-oprah.svg',
      alt: 'Imagem com paisagem costeira nebulosa e a citação de Oprah Winfrey: "Turn your wounds into wisdom."',
      caption: '(https://quotefancy.com. Adapted.)',
    }],
    statementAfter: 'Among the quotes below, the one that expresses an idea most similar to Oprah Winfrey’s statement is:',
    afterBlockTypes: ['command'],
    alternatives: [
      '“Patience is the companion of wisdom.”',
      '“The wound is the place where the light enters you.”',
      '“The beginning of wisdom is silence.”',
      '“Wisdom begins in wonder.”',
      '“Time heals all wounds.”',
    ],
    answer: 'B',
    why: 'A frase “Turn your wounds into wisdom” (“Transforme suas feridas em sabedoria”) converge diretamente com o verso de Rumi “The wound is the place where the light enters you” (“A ferida é o lugar por onde a luz entra em você”), pois ambas tratam a dor e o sofrimento como fonte de aprendizado, lucidez e crescimento.',
    wrong: {
      0: 'Associa a sabedoria à paciência, sem abordar a superação da dor ou das feridas pessoais.',
      2: 'Relaciona sabedoria ao silêncio, e não à ressignificação de traumas.',
      3: 'Atribui a origem da sabedoria ao espanto/curiosidade (“wonder”), sem referência a feridas.',
      4: 'Sugere o apagamento passivo da dor com o passar do tempo, sem convertê-la em conhecimento ou iluminação.',
    },
  }),
  q({
    n: 29,
    subject: 'História',
    content: 'Alta Idade Média e transição do mundo antigo',
    difficulty: 'Fácil',
    statement: `Por volta do ano 400, a Europa, ou mais particularmente o mundo mediterrâneo, entra numa fase de grandes turbulências que vai durar pelo menos seiscentos anos. A Idade Média nasce do caos provocado pelo desmoronamento e pela fragmentação do enorme bloco político que constituía o Império Romano.

(Georges Minois. História da Idade Média: mil anos de esplendores e misérias, 2023.)

Dois elementos que contribuíram para o nascimento da Idade Média foram`,
    blockTypes: ['prose', 'source', 'command'],
    works: ['História da Idade Média: mil anos de esplendores e misérias'],
    alternatives: [
      'as migrações germânicas e o colonato romano.',
      'o comitatus germânico e o escravismo romano.',
      'as compilações das leis germânicas e a centralização política romana.',
      'o cristianismo germânico e o politeísmo romano.',
      'o militarismo germânico e a expansão territorial romana.',
    ],
    answer: 'A',
    why: 'A síntese entre estruturas romanas em declínio — como o colonato (fixação de camponeses à terra dos grandes proprietários, antecedente da servidão medieval) — e elementos trazidos pelas migrações e invasões germânicas (fragmentação política, ruralização e laços de fidelidade pessoal) estruturou a sociedade feudal da Idade Média.',
    wrong: {
      1: 'O escravismo romano entrou em crise e declínio justamente na transição para a Idade Média, sendo gradualmente substituído pelo trabalho servil oriundo do colonato.',
      2: 'A Idade Média nasce da fragmentação e descentralização política do poder romano, não de sua centralização.',
      3: 'Na fase final do Império Romano, o cristianismo já havia se tornado a religião oficial romana (Édito de Tessalônica, 380), superando o politeísmo tradicional.',
      4: 'O Império Romano encontrava-se em retração e crise defensiva de fronteiras após o século III, e não em processo de expansão territorial.',
    },
  }),
  q({
    n: 30,
    subject: 'História',
    content: 'Conquista da América espanhola',
    difficulty: 'Fácil',
    statement: `Leia o trecho da carta escrita por Hernan Cortez em 1519 e enviada ao rei da Espanha.

Esta província de Cempoal é formada de cinquenta vilas e fortalezas, tendo até cinquenta mil homens de guerra, os quais ficaram muito seguros e pacificados, como leais vassalos de vossa majestade como agora são, porque eles eram súditos daquele senhor Montezuma. E segundo fui informado, o eram pela força e de pouco tempo para cá, e como por mim tiveram notícia de vossa alteza e de seu real e grande poder, disseram que queriam ser vassalos de vossa majestade e meus amigos, e que rogavam que os defendesse daquele grande senhor que os mantinha pela força e tirania e que tomava seus filhos para matar e sacrificar a seus ídolos.

(Hernan Cortez. A conquista do México, 2008.)

Na carta, Cortez destaca a`,
    blockTypes: ['label', 'prose', 'source', 'command'],
    works: ['A conquista do México'],
    alternatives: [
      'superioridade numérica dos espanhóis para conquistar a América.',
      'discordância entre os espanhóis e as populações indígenas.',
      'aliança entre parcelas da população indígena e os espanhóis.',
      'resistência indígena diante da ação conquistadora dos espanhóis.',
      'indecisão das lideranças indígenas sobre o que fazer com os espanhóis.',
    ],
    answer: 'C',
    why: 'O relato mostra como povos submetidos ao domínio mexica (como os habitantes da província de Cempoal, ressentidos com tributos e sacrifícios impostos por Montezuma) se aliaram aos conquistadores espanhóis como estratégia política e militar contra o Império Asteca.',
    wrong: {
      0: 'Os espanhóis constituíam um contingente reduzido, e o trecho enfatiza justamente o peso militar dos cinquenta mil guerreiros indígenas aliados.',
      1: 'O documento retrata exatamente a cooperação e o pedido de proteção dos nativos de Cempoal junto a Cortez.',
      3: 'Embora tenha havido resistência asteca em outros episódios, o excerto evidencia adesão voluntária de povos rivais de Montezuma aos espanhóis.',
      4: 'As lideranças descritas demonstram decisão clara de buscar proteção espanhola contra Montezuma.',
    },
  }),
  q({
    n: 31,
    subject: 'História',
    content: 'Brasil Colônia: ciclo do ouro e mercado interno',
    difficulty: 'Média',
    statement: `Sendo a terra que dá ouro esterilíssima de tudo o que se há mister para a vida humana, e não menos estéril a maior parte dos caminhos das minas, não se pode crer o que padeceram ao princípio os mineiros por falta de mantimentos [...].

Porém, tanto que se viu a abundância do ouro que se tirava e a largueza com que se pagava tudo o que lá ia, dores a mandar às minas o melhor que chega nos navios do Reino e de outras partes, assim de mantimentos como de regalo e de pomposo para se vestirem, além de mil bugiarias de França, que lá também foram dar. E, a este respeito, de todas as partes do Brasil se começou a enviar tudo o que dá a terra, com lucro não somente grande, mas excessivo.

(André João Antonil. Cultura e opulência do Brasil por suas drogas e minas, 2011.)

Escrito originalmente no século XVIII, o excerto constata`,
    blockTypes: ['prose', 'prose', 'source', 'command'],
    works: ['Cultura e opulência do Brasil por suas drogas e minas'],
    alternatives: [
      'a autonomia dos mineradores para a realização do comércio externo.',
      'o declínio do princípio do livre comércio em virtude da mineração.',
      'a intensificação do comércio na região mineira por meio da autorização do contrabando.',
      'a dinamização da atividade comercial na colônia a partir da mineração.',
      'o rompimento do exclusivo metropolitano nas áreas de mineração.',
    ],
    answer: 'D',
    why: 'O texto de Antonil descreve como a alta demanda de mantimentos e mercadorias nas Minas Gerais promoveu uma intensa circulação de produtos vindos do Reino e de diversas capitanias da América portuguesa (gado, açúcar, alimentos, manufaturados), integrando e dinamizando o mercado interno colonial.',
    wrong: {
      0: 'Vigia o exclusivo metropolitano português, que submetia o comércio externo à Coroa, e não havia livre autonomia comercial dos mineradores.',
      1: 'O princípio do livre comércio ainda não estruturava o sistema colonial mercantilista no início do século XVIII.',
      2: 'Embora houvesse contrabando nas Minas, a Coroa nunca o autorizou formalmente; o excerto destaca o fluxo comercial regular que convergia para as minas.',
      4: 'As Minas permaneciam submetidas ao pacto colonial e à intensa fiscalização metropolitana (como as Casas de Fundição e a cobrança do quinto).',
    },
  }),
  q({
    n: 32,
    subject: 'História',
    content: 'Segundo Reinado e Guerra do Paraguai',
    difficulty: 'Média',
    statement: `Após a morte de Solano López, na batalha de Cerro Corá, em março de 1870, e até fins do século XIX, não se questionava o ter sido ele um ditador que lançou seu país em guerra imprudente contra vizinhos mais poderosos. Ele era odiado pelos sobreviventes [...]. Idêntico era o sentimento nos países vizinhos, a ponto de a historiografia tradicional, inclusive a paraguaia, personalizar a explicação das causas da guerra na figura de Solano López, deixando em segundo plano o processo histórico que levou ao conflito.

(Francisco Fernando Monteoliva Doratioto. Maldita guerra: nova história da Guerra do Paraguai, 2002.)

Dentre os fatores deixados “em segundo plano” que contribuíram para a eclosão da Guerra do Paraguai, destacam-se`,
    blockTypes: ['prose', 'source', 'command'],
    works: ['Maldita guerra: nova história da Guerra do Paraguai'],
    alternatives: [
      'as demandas nacionais, como a busca paraguaia pela anexação de todo o território argentino.',
      'os problemas diplomáticos, como o rompimento das relações entre Brasil e Argentina.',
      'as questões atlânticas, como a repressão britânica contra a escravidão.',
      'as contendas locais, como a contestação guarani ao poder de López.',
      'os conflitos platinos, como as interferências brasileiras no Uruguai.',
    ],
    answer: 'E',
    why: 'A historiografia contemporânea (como Francisco Doratioto) aponta que a Guerra do Paraguai resultou sobretudo das disputas geopolíticas na Bacia do Prata (livre navegação fluvial, fronteiras e equilíbrio regional), agravadas pela intervenção militar brasileira no Uruguai em apoio aos colorados contra o governo blanco aliado do Paraguai.',
    wrong: {
      0: 'O objetivo de Solano López nunca foi anexar todo o território argentino, mas assegurar acesso ao mar pela Bacia do Prata e equilibrar a influência regional.',
      1: 'Brasil e Argentina superaram suas divergências circunstanciais para celebrar o Tratado da Tríplice Aliança ao lado do Uruguai colorado contra o Paraguai.',
      2: 'A pressão britânica contra o tráfico negreiro na década de 1850 não explica a eclosão do conflito platino de 1864.',
      3: 'A guerra não decorreu de uma sublevação indígena guarani contra o presidente paraguaio.',
    },
  }),
  q({
    n: 33,
    subject: 'História',
    content: 'Primeira Guerra Mundial',
    difficulty: 'Fácil',
    statement: 'Analise a charge publicada em 1917, em que a figura masculina representa a Alemanha, a águia representa os Estados Unidos e o cachorro representa a Grã-Bretanha.',
    blockTypes: ['label'],
    visuals: [{
      file: 'q33-charge-1917.svg',
      alt: 'Charge publicada em 1917 na revista Melbourne Punch mostrando uma águia (Estados Unidos) atacando um soldado alemão agarrado por um cachorro (Grã-Bretanha), com a legenda "Alarmed at Last!".',
    }],
    statementAfter: `Finalmente alarmado!
Kaiser: ‘Mein Gott! O cachorro está zangado comigo — e se a águia me apanhar nas suas garras — estou perdido.’

(Mark Bryant. World War I in cartoons, 2006.)

No contexto em que se insere, a charge expressa`,
    afterBlockTypes: ['note', 'source', 'command'],
    works: ['World War I in cartoons'],
    alternatives: [
      'a solidez das forças militares alemãs nos momentos finais da guerra.',
      'a força da política de alianças existente entre as potências do Eixo.',
      'a fragilidade das tropas britânicas frente ao poderio militar alemão.',
      'o descontrole alemão frente ao início do conflito de trincheiras.',
      'o ingresso decisivo dos Estados Unidos ao lado da Tríplice Entente.',
    ],
    answer: 'E',
    why: 'Publicada em 1917, a charge retrata o temor do Kaiser alemão diante da entrada dos Estados Unidos (a águia) na Primeira Guerra Mundial ao lado da Grã-Bretanha e da Tríplice Entente, rompendo o equilíbrio das frentes de combate a favor dos Aliados.',
    wrong: {
      0: 'O soldado alemão aparece acuado e alarmado, exclamando “estou perdido”, o oposto de solidez militar.',
      1: '“Potências do Eixo” é a designação da aliança na Segunda Guerra Mundial (Alemanha, Itália e Japão), e não dos Impérios Centrais na Primeira Guerra.',
      2: 'O cão britânico está firmemente agarrado ao alemão enquanto a águia norte-americana se lança sobre ele, evidenciando o cerco aliado.',
      3: 'A guerra de trincheiras começou ainda em 1914–1915, ao passo que a charge retrata especificamente o impacto da entrada norte-americana em 1917.',
    },
  }),
  q({
    n: 34,
    subject: 'História',
    content: 'Era Vargas e Revolução de 1930',
    difficulty: 'Fácil',
    statement: `A 30 de maio [de 1930], Vargas lançou um manifesto, denunciando as “fraudes e compressões” praticadas pelas mesas eleitorais, “cujos truques e ardis a mesma legislação eleitoral estimula e propicia”. Mas o candidato derrotado temperou o seu ataque com a afirmação de que ainda acreditava que as modificações necessárias nos “nossos hábitos e costumes políticos”, poderiam ter lugar “dentro da ordem e do regime”.

(Thomas Skidmore. Brasil: de Getúlio Vargas a Castelo Branco, 1930-1964, 1982.)

Apesar da crença de Vargas, destacada no excerto, as modificações políticas do Brasil foram garantidas, em 1930, por meio`,
    blockTypes: ['prose', 'source', 'command'],
    works: ['Brasil: de Getúlio Vargas a Castelo Branco, 1930-1964'],
    alternatives: [
      'da exclusão da classe média nacional.',
      'de um movimento revolucionário.',
      'da aniquilação dos jovens tenentes.',
      'da universalização do voto.',
      'da difusão dos direitos trabalhistas.',
    ],
    answer: 'B',
    why: 'Apesar de Vargas inicialmente afirmar que as reformas poderiam ocorrer dentro da ordem legal, após o assassinato de João Pessoa a Aliança Liberal, apoiada por militares tenentistas e oligarquias dissidentes, deflagrou o movimento armado de outubro de 1930 (Revolução de 1930), que depôs Washington Luís e pôs fim à Primeira República.',
    wrong: {
      0: 'Setores médios urbanos participaram ativamente da crítica às oligarquias da República Velha e integraram a base de apoio à mudança política.',
      2: 'Os jovens oficiais do movimento tenentista foram aliados fundamentais na condução militar da Revolução de 1930.',
      3: 'A universalização plena do voto não ocorreu em 1930 (o Código Eleitoral de 1932 instituiu o voto secreto e feminino, mantendo a restrição a analfabetos até 1985/1988).',
      4: 'A legislação trabalhista sistemática foi implementada gradualmente ao longo da Era Vargas (1930–1945), não tendo sido o mecanismo que garantiu a tomada do poder em 1930.',
    },
  }),
  q({
    n: 35,
    subject: 'Geografia',
    content: 'Blocos econômicos e União Europeia',
    difficulty: 'Fácil',
    statement: `Os objetivos deste bloco econômico no interior de suas fronteiras, definidos no artigo 3º do Tratado de Lisboa que entrou em vigor em 2009, são: promover a paz, os seus valores e o bem-estar dos seus cidadãos; proporcionar um espaço de liberdade, segurança e justiça sem fronteiras internas, em conjugação com medidas adequadas nas suas fronteiras externas para regular o asilo e a imigração; prevenir e combater a criminalidade; estabelecer um mercado interno; favorecer o desenvolvimento sustentável; promover a coesão econômica, social e territorial, e a solidariedade entre os países-membros; estabelecer uma união econômica e monetária.

(Melmoara Barbosa Romeiro. Revista Global Crossing, 2025. Adaptado.)

As características apresentadas no excerto referem-se ao bloco econômico denominado`,
    blockTypes: ['prose', 'source', 'command'],
    works: ['Revista Global Crossing'],
    alternatives: [
      'Acordo Estados Unidos-México-Canadá (USMCA).',
      'Associação de Nações do Sudeste Asiático (Asean).',
      'Mercado Comum do Sul (Mercosul).',
      'União Europeia (UE).',
      'Associação Europeia de Livre-Comércio (EFTA).',
    ],
    answer: 'D',
    why: 'O Tratado de Lisboa (assinado em 2007 e em vigor desde 2009) reformou o funcionamento da União Europeia, único bloco econômico a alcançar o estágio avançado de união econômica e monetária (Eurozona), mercado interno integrado e livre circulação de pessoas sem fronteiras internas (Espaço Schengen).',
    wrong: {
      0: 'O USMCA (substituto do NAFTA) limita-se a uma zona de livre comércio na América do Norte, sem moeda única ou livre circulação de pessoas.',
      1: 'A Asean promove cooperação econômica e política no Sudeste Asiático sem constituir união monetária nem eliminar fronteiras internas.',
      2: 'O Mercosul configura uma união aduaneira imperfeita sul-americana, não regida pelo Tratado de Lisboa e sem moeda única.',
      4: 'A EFTA reúne países europeus não membros da UE em uma área de livre comércio, sem união monetária nem participação no Tratado de Lisboa.',
    },
  }),
  q({
    n: 36,
    subject: 'Geografia',
    content: 'Urbanização e rede urbana',
    difficulty: 'Média',
    statement: 'Os esquemas representam diferentes formas de organização da rede urbana.',
    blockTypes: ['label'],
    visuals: [{
      file: 'q36-rede-urbana.svg',
      alt: 'Comparação entre o Esquema Clássico e o Esquema Real (aproximado) da rede urbana segundo Milton Santos, relacionando E (Vila), A (Cidade local), B (Cidade regional), C (Metrópole incompleta) e D (Metrópole completa).',
    }],
    statementAfter: `(Milton Santos. Metamorfoses do espaço habitado, 2025. Adaptado.)

A configuração da rede urbana representada no Esquema Real difere daquela representada no Esquema Clássico em razão`,
    afterBlockTypes: ['source', 'command'],
    works: ['Metamorfoses do espaço habitado'],
    alternatives: [
      'da modernização dos meios de transporte e de comunicação, que possibilita fluxos diretos entre centros urbanos de diferentes níveis hierárquicos.',
      'da expansão das manchas urbanas, que promove a união física entre municípios vizinhos e a formação de áreas conurbadas.',
      'da desconcentração industrial, que transfere unidades produtivas das metrópoles para cidades médias e pequenas do interior.',
      'da intensificação da metropolização, que amplia a concentração da população e das funções de comando nos grandes centros urbanos.',
      'do crescimento demográfico das cidades menores, que aumenta a participação dessas cidades na população urbana nacional.',
    ],
    answer: 'A',
    why: 'No Esquema Clássico, os fluxos respeitam rigorosamente a hierarquia escalonada (vila → cidade local → cidade regional → metrópole). No Esquema Real de Milton Santos, uma cidade local (A) ou regional (B) pode se conectar diretamente à metrópole completa (D), fenômeno explicado pela modernização das redes de transporte, telecomunicações e informática no meio técnico-científico-informacional.',
    wrong: {
      1: 'A conurbação diz respeito à contiguidade física das manchas urbanas vizinhas, não às conexões diretas a longa distância entre diferentes níveis da rede.',
      2: 'Embora a desconcentração produtiva ocorra na rede urbana contemporânea, a alteração estrutural das setas diretas entre hierarquias no esquema decorre dos sistemas de circulação e comunicação.',
      3: 'A concentração metrópolitana já existia no modelo clássico e não explica a quebra da linearidade hierárquica das conexões representada no Esquema Real.',
      4: 'O esquema representa relações e fluxos funcionais entre níveis urbanos, não proporções demográficas.',
    },
  }),
  q({
    n: 37,
    subject: 'Geografia',
    content: 'Climatologia e biomas brasileiros',
    difficulty: 'Média',
    statement: 'Analise os climogramas.',
    blockTypes: ['label'],
    visuals: [{
      file: 'q37-climogramas.svg',
      alt: 'Três climogramas numerados de 1 a 3 mostrando temperatura média mensal em graus Celsius e precipitação em milímetros ao longo dos 12 meses do ano.',
    }],
    statementAfter: `(https://pt.climate-data.org)

Os climogramas 1, 2 e 3 representam condições climáticas associadas, respectivamente, às seguintes formações vegetais:`,
    afterBlockTypes: ['source', 'command'],
    alternatives: [
      'Floresta Amazônica, Cerrado e Mata de Araucárias.',
      'Mata Atlântica, Mata de Araucárias e Cerrado.',
      'Cerrado, Floresta Amazônica e Campos Sulinos.',
      'Campos Sulinos, Mata Atlântica e Caatinga.',
      'Mata de Araucárias, Caatinga e Floresta Amazônica.',
    ],
    answer: 'E',
    why: 'No Climograma 1, as temperaturas caem para cerca de 10 °C no inverno com chuvas bem distribuídas durante todo o ano (clima subtropical úmido), típico da Mata de Araucárias. No Climograma 2, as médias térmicas são sempre elevadas (22–26 °C) e a precipitação anual é muito baixa, com seca prolongada (clima semiárido), próprio da Caatinga. No Climograma 3, as temperaturas permanecem elevadas e estáveis (25–28 °C) com pluviosidade muito alta no primeiro semestre (clima equatorial), associado à Floresta Amazônica.',
    wrong: {
      0: 'Inverte as formações: o clima subtropical (1) não corresponde à Amazônia, nem o semiárido (2) ao Cerrado.',
      1: 'O Climograma 2 apresenta escassez severa de chuvas incompatible com a Mata de Araucárias.',
      2: 'O Climograma 1 possui inverno frio (~10 °C) e chuvas regulares, diferindo da sazonalidade tropical do Cerrado.',
      3: 'O Climograma 2 tem precipitação máxima mensal abaixo de 50 mm, o que é muito seco para a Mata Atlântica, enquanto o Climograma 3 é úmido e equatorial demais para a Caatinga.',
    },
  }),
  q({
    n: 38,
    subject: 'Geografia',
    content: 'Geomorfologia e relevo cárstico',
    difficulty: 'Fácil',
    statement: 'Analise a imagem da Gruta do Lago Azul, localizada em Bonito (MS). Essa cavidade subterrânea se desenvolveu em uma área formada predominantemente por rochas sedimentares carbonáticas.',
    blockTypes: ['prose'],
    visuals: [{
      file: 'q38-gruta-lago-azul.svg',
      alt: 'Fotografia da Gruta do Lago Azul em Bonito (MS), com estalactites e água azulada iluminada em cavidade subterrânea.',
    }],
    statementAfter: 'O processo geológico responsável pela formação dessa gruta está relacionado',
    afterBlockTypes: ['command'],
    alternatives: [
      'à dissolução gradual das rochas pela água levemente ácida, que forma cavidades subterrâneas.',
      'ao desgaste das rochas pela ação dos ventos, que remove partículas e escava depressões no terreno.',
      'à movimentação de placas tectônicas, que provoca o dobramento das camadas rochosas e abre grandes cavidades.',
      'ao resfriamento de materiais vulcânicos, que deixa espaços vazios no interior dos derrames de lava.',
      'à compactação de sedimentos, que reduz o volume dos materiais depositados e origina espaços subterrâneos.',
    ],
    answer: 'A',
    why: 'Em terrenos cársticos compostos por rochas sedimentares carbonáticas (como o calcário), a água das chuvas enriquecida com gás carbônico torna-se levemente ácida (ácido carbônico) e promove intemperismo químico por dissolução, originando grutas, cavernas, estalactites e estalagmites.',
    wrong: {
      1: 'Descreve a erosão eólica (corrasão/deflação), que atua em superfície em áreas áridas, sem formar cavernas subterrâneas com estalactites.',
      2: 'Cavernas cársticas formam-se por dissolução química subterrânea de rochas carbonáticas, e não por aberturas diretas de dobramentos tectônicos.',
      3: 'A área descrita é composta por rochas sedimentares carbonáticas, não por basaltos ou tubos de lava vulcânicos.',
      4: 'A compactação faz parte da diagênese que transforma sedimentos em rocha consolidada, reduzindo porosidades em vez de abrir amplas cavernas.',
    },
  }),
  q({
    n: 39,
    subject: 'Geografia',
    content: 'Cartografia: tipos de mapas e anamorfose',
    difficulty: 'Fácil',
    statement: `Trata-se de um tipo de representação que distorce as áreas do mapa conforme o valor do fenômeno quantitativo representado, evidenciando as desigualdades entre as áreas. O grande objetivo deste tipo de representação não é retratar fielmente os limites dos países de acordo com suas extensões oficiais, mas evidenciá-los de acordo com o fenômeno quantitativo que se quer entender.

(www.geoaplicada.com. Adaptado.)

A representação cartográfica descrita no excerto denomina-se`,
    blockTypes: ['prose', 'source', 'command'],
    alternatives: [
      'planta cadastral.',
      'mapa hipsométrico.',
      'anamorfose cartográfica.',
      'mapa coroplético.',
      'carta topográfica.',
    ],
    answer: 'C',
    why: 'A anamorfose cartográfica (ou cartograma anamórfico) altera deliberadamente a superfície geométrica dos territórios em proporção direta à magnitude da variável quantitativa analisada (como PIB, população ou emissões de carbono).',
    wrong: {
      0: 'Planta cadastral é representação em escala muito grande usada para detalhamento urbano ou fundiário, mantendo fidelidade métrica.',
      1: 'Mapa hipsométrico representa as diferentes faixas de altitude do relevo por meio de cores graduadas, preservando a área real dos territórios.',
      3: 'Mapa coroplético utiliza tonalidades ou hachuras sobre unidades territoriais para indicar classes quantitativas ou qualitativas, mas sem deformar suas áreas.',
      4: 'Carta topográfica representa com rigor planialtimétrico o relevo (curvas de nível) e elementos físicos e humanos da superfície.',
    },
  }),
  q({
    n: 40,
    subject: 'Geografia',
    content: 'Cartografia: cálculo e redução de escala',
    difficulty: 'Média',
    statement: 'Em um mapa, foi utilizada a seguinte escala gráfica:',
    blockTypes: ['label'],
    visuals: [{
      file: 'q40-escala-grafica.svg',
      alt: 'Escala gráfica dividida em segmentos consecutivos marcados em 0, 20, 40, 60 e 80 km.',
      className: 'compact-image',
    }],
    statementAfter: 'Na versão original, cada intervalo entre duas marcas consecutivas da escala gráfica media 1 cm. Porém, para serem inseridos em uma publicação, o mapa e a escala gráfica foram reduzidos uniformemente para 80% de suas dimensões lineares originais. Considerando essa redução, a escala numérica equivalente à escala gráfica do mapa publicado é',
    afterBlockTypes: ['prose'],
    alternatives: [
      tex`$1 : 3\,000\,000$.`,
      tex`$1 : 2\,500\,000$.`,
      tex`$1 : 1\,600\,000$.`,
      tex`$1 : 2\,000\,000$.`,
      tex`$1 : 2\,400\,000$.`,
    ],
    answer: 'B',
    resolution: [
      tex`Na escala original, cada intervalo de $1\text{ cm}$ corresponde a $20\text{ km} = 2\,000\,000\text{ cm}$, ou seja, escala original $1 : 2\,000\,000$.`,
      tex`Com a redução uniforme das dimensões lineares para $80\%$ ($0{,}8$), esse mesmo trecho real de $20\text{ km}$ passa a medir $0{,}8\text{ cm}$ no mapa publicado.`,
      tex`Calculando a nova distância real correspondente a $1\text{ cm}$: $\frac{2\,000\,000}{0{,}8} = 2\,500\,000\text{ cm}$. Logo, a escala publicada é $1 : 2\,500\,000$.`,
    ],
    why: tex`Na versão original, $1\text{ cm}$ representa $20\text{ km}$ ($2\,000\,000\text{ cm}$). Reduzindo as dimensões lineares para $80\%$, $0{,}8\text{ cm}$ no mapa publicado passa a corresponder a $2\,000\,000\text{ cm}$, resultando na escala $1 : 2\,500\,000$.`,
    wrong: {
      0: tex`Resultaria de uma redução linear para cerca de $66{,}7\%$ ($2\,000\,000 / 3\,000\,000$), e não $80\%$.`,
      2: tex`Ocorre quando se multiplica o denominador por $0{,}8$ em vez de dividi-lo por $0{,}8$ (reduzir o mapa diminui a escala e aumenta o denominador).`,
      3: 'Corresponde à escala original antes da redução gráfica de 80%.',
      4: tex`Equivale a um acréscimo de $20\%$ sobre o denominador ($2\,000\,000 \times 1{,}2$), erro comum ao confundir redução de $20\%$ na medida gráfica com multiplicação simples por $1{,}2$.`,
    },
  }),
];
