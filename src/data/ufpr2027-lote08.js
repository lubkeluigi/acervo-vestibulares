import { q, img } from './ufpr2027-helpers.js';

const MUNANGA_TEXT = `O texto a seguir é referência para as questões 71 e 72.

De acordo com a historiografia oficial, “o índio (sic), acostumado com a liberdade, recusou-se ao trabalho escravo, o que obrigou o colonizador português a ir buscar essa mão de obra escrava no continente africano, onde os negros acostumados com a escravidão já existente em sua terra não se importavam com sua sorte”. Dizer que o colonizador português foi para a África buscar os escravos (sic) que adquiria, comprando-os pela troca com o fumo da Bahia e outras mercadorias, graças à cumplicidade dos reis e príncipes africanos, não deixa dúvida sobre a crença na existência dos escravos (sic) como categoria natural, ou seja, na existência na África de seres humanos que nasceram escravos. A partir dessa crença, podemos já formular uma dúvida e fazer a primeira indagação. Uma pessoa, homem ou mulher, pode nascer escrava ou todos nascem livres, até que algum sistema os escraviza no decorrer de sua vida?
Munanga, Kabengele. Origens africanas do Brasil contemporâneo: histórias, línguas, culturas e civilizações. São Paulo: Global, 2009, p. 88.`;

const MORRISON_TEXT = `The following text is reference to questions 74 and 75.

Toni Morrison
Toni Morrison was a Nobel Prize – and Pulitzer Prize – winning novelist, editor, and professor. Her novels are known for their epic themes, exquisite language, and richly detailed Black characters. The most famous and well-regarded are Beloved, The Bluest Eye, Sula, and Song of Solomon. In 1993, Morrison became the first Black woman to receive the Nobel Prize in Literature. Despite her worldwide acclaim, the Ohio native was rarely writing full-time. She balanced working on her books with editing for Random House as well as teaching at Princeton and Howard Universities. Through her own novels and the books she edited, she was instrumental in developing the canon of Black American literature. Morrison died in 2019 at age 88.
Toni Morrison was born Chloe Ardelia Wofford on February 18, 1931, in Lorain, Ohio, a small city about 30 miles west of Cleveland. She was the second oldest of four children. Her father, George Wofford, worked primarily as a welder but held several jobs at once to support the family. Her mother, Ramah, was a domestic worker. Chloe credited her parents with instilling in her a love of reading, music, and folklore as they also helped her develop a strong sense of clarity and perspective.
Morrison did not publish her first book until she was 39, but from then on, she was a literary star; a writer whose acclaimed work was taught in high schools and seen in movies and on Broadway. The prolific author wrote 11 novels, two novellas, books for children, and several nonfiction books, some of which collected her articles and essays. She also penned multiple plays and opera librettos.
Many of her novels are historical, given her background as a classics scholar, but they combine highly literary aspects with accessible plots and characters. As for overarching themes, most of Morrison’s work explores slavery at various times in history, contends with how gender influences the lived experiences of men and women, and celebrates Black American culture, especially in music and geography. Because her novels take place in different times and places, over her lifetime as a writer, Morrison revealed the effects of generational trauma particularly in regard to racism and sexism in families and the larger community.
Available in: https://www.biography.com/authors-writers/toni-morrison.`;

const ATACAMA_TEXT = `The following text is reference to questions 76, 77 and 78.

Chile targets fast fashion waste with landmark desert cleanup plan
In a dusty corner of the Atacama Desert, the driest non-polar region on Earth, mounds of used clothes are scattered across the sand, where they sit, under the sun. In the city of Iquique, in Chile’s far north, piles of garments stretch into the distance: uniforms, shoes, bundles of work overalls and last season’s fast fashion discards, tags still attached. But Chile’s government has taken a decisive step towards addressing this environmental crisis.
The country’s environment ministry announced that it had added textiles as a “priority” category to its extended producer responsibility law, paving the way for importers to be made responsible for the waste produced by the thousands of tonnes of used clothing brought into Chile each year. Importers are now obliged to report the clothing they bring into the country, and further regulations will be added to the bill.
Chile’s government will also publish a public policy specifically targeting textiles and their place in the circular economy. One of its goals will be to eradicate textile dumps in the Atacama Desert. According to government data, more than 90% of textiles sold in Chile are imported, making the South American country the world’s fourth-largest importer of second-hand clothing.
Global textile production is projected to grow from the 109m tonnes manufactured in 2020 to 145m tonnes in 2030. In Chile, people use an average of 32kg of textiles, contributing to 572,000 tonnes of textile waste per year in the country. Every day, tonnes of clothing arrive duty-free at the freeport in Iquique as giant plastic-wrapped bales, where they are sliced open and sorted into categories by a migrant workforce.
The best clothes, often in near-pristine condition, are sold in outlet stores or sent to Chile’s capital, Santiago, for resale. Some are even sent back to the US to be resold. The rest winds its way in a convoy of small trucks up to Alto Hospicio, a poor city near Iquique, where the clothes are incorporated into a seemingly endless cycle of resale and reuse. At La Quebradilla, one of the country’s largest open-air markets, vendors sell clothes for small amounts of cash, while the least desirable items are often slung out in the Atacama Desert.
After several years of research, Chile’s government has managed to add textiles to its extended responsibility law. Many countries have similar legislation, but Chile’s, in force since 2017, had only made producers responsible for recycling goods in several categories, including, tires, batteries, oils and plastic packaging. The inclusion of textiles in the producer responsibility law will establish the obligations of producers, who will no longer be able to disregard the environmental impacts of unused textiles.
Available in: https://www.theguardian.com/world/2025/jun/26/chile-fast-fashion-waste-atacama-desert.`;

const ELNINO_TEXT = `The following text is reference to questions 79 and 80.

Super El Niño events drive climate regime shifts with enhanced risks under global warming
Climate regime shifts (CRSs), characterized by abrupt and persistent transitions between alternative stable states in the climate system, pose serious threats to ecosystems and human well-being. Understanding the potential drivers of CRSs is crucial, particularly in a warming world where CRSs are becoming more frequent. Here, using multiple observations and model simulations, we find that the likelihood of CRS occurrence significantly increases in the context of super El Niño events due to their remarkable climate perturbations. This higher probability is detected across various climate elements, such as surface air temperature, sea surface temperature, and surface soil moisture. In addition, we suggest that this boost effect of super El Niño events on CRSs will be greatly amplified under future greenhouse warming. Our findings underscore a deeper and more persistent climate footprint of super El Niño events, suggesting that early warnings and proactive measures are crucial for mitigating their escalating risks.
Disponível em: https://www.researchgate.net/publication/398625964_Super_El_Nino_events_drive_climate_regime_shifts_with_enhanced_risks_under_global_warming.`;

export const ufpr2027Lote08 = [
  q({
    n: 71, subject: 'Português', content: 'Interpretação e Crítica Historiográfica — Kabengele Munanga e a escravização', difficulty: 'Fácil',
    statement: `${MUNANGA_TEXT}\n\nNesse texto, o autor:`,
    alternatives: [
      'parte de uma versão corrente sobre a escravização de negros africanos no Brasil para submeter a questionamento os argumentos que a ela dão sustentação.',
      'emprega as expressões “nascer escrava” e “algum sistema os escraviza” para se referir, em ambos os casos, à naturalização do sistema escravocrata.',
      'utiliza o fato de alguns seres humanos terem sido tratados como mercadorias ao longo da história como argumento para sustentar consequências da escravização.',
      'põe em discussão a contraposição entre a condição de liberdade dos indígenas brasileiros e a de escravização a que os negros africanos já estavam acostumados.',
    ],
    answer: 'A',
    why: 'Kabengele Munanga cita a narrativa tradicional eurocêntrica (segundo a qual os africanos "já estavam acostumados com a escravidão e não se importavam com sua sorte") com o objetivo explícito de refutá-la e denunciar a falácia ideológica que tenta naturalizar a escravização, demonstrando que ninguém nasce escravo por essência biológica ou cultural.',
    wrong: {
      1: '“Algum sistema os escraviza” não naturaliza, mas denuncia o caráter histórico, violento e institucional do cativeiro.',
      2: 'O autor não defende a mercantilização de pessoas, combatendo as premissas racistas que a legitimaram.',
      3: 'O foco do texto é questionar a premissa de que povos africanos seriam naturalmente predispostos à servidão, desconstruindo a tese em sua raiz ética.',
    },
  }),
  q({
    n: 72, subject: 'Português', content: 'Semântica — Polissemia do substantivo “sorte”', difficulty: 'Fácil',
    statement: `${MUNANGA_TEXT}\n\nAssinale a alternativa em que a palavra “sorte” é empregada com significado próximo ao do emprego no texto:`,
    alternatives: [
      'Desejo toda sorte de alegrias e conquistas nesta nova etapa da sua vida.',
      'Com sorte, conseguiremos um bom lugar no espetáculo.',
      'Jogos de sorte ou de azar? Estas práticas estão mudando o destino de muitas pessoas.',
      'Minha sorte mudou quando decidi mudar de endereço e de trabalho.',
    ],
    answer: 'D',
    why: 'No texto de Munanga, em "não se importavam com sua sorte", a palavra "sorte" expressa a ideia de destino, sina, condição ou situação de vida do indivíduo. Na alternativa D ("Minha sorte mudou..."), o vocábulo é empregado nessa mesma acepção de rumo do destino ou condição existencial.',
    wrong: {
      0: 'Em "toda sorte de alegrias", significa variedade, espécie ou tipo.',
      1: 'Em "Com sorte", expressa ventura, acaso favorável ou fortuna.',
      2: 'Em "Jogos de sorte", refere-se ao fator aleatório ou probabilístico.',
    },
  }),
  q({
    n: 73, subject: 'Português', content: 'Linguagem e Humor — Parônimos, homônimos e metalinguagem na tira do Armandinho', difficulty: 'Fácil',
    statement: `Considere a seguinte tira:

Disponível em: https://www.tumblr.com/tirasarmandinho/137021215684/tirinha-original.

No plano verbal, o(s) efeito(s) de humor surge(m) da:
1. alternância de sentidos das palavras “bota” e “calça”, empregadas para nomear peças do vestuário e também indicar ações.
2. relação entre a inversão das palavras e a pergunta final, que apresenta a própria linguagem como fonte da complicação.
3. inadequação das expressões “botar uma calça” e “calçar uma bota” ao uso cotidiano da língua, provocando estranhamento no diálogo.

Assinale a alternativa correta.`,
    images: [img('q73-tira.png', 'Tirinha do Armandinho sobre a ambiguidade e inversão entre calça e bota')],
    alternatives: [
      'Somente a afirmativa 1 é verdadeira.',
      'Somente as afirmativas 1 e 2 são verdadeiras.',
      'Somente as afirmativas 2 e 3 são verdadeiras.',
      'As afirmativas 1, 2 e 3 são verdadeiras.',
    ],
    answer: 'B',
    why: 'O efeito cômico da tirinha do Armandinho decorre da duplicidade morfológica e semântica das palavras "bota" e "calça" (ora substantivos que nomeiam roupas/calçados, ora formas verbais de botar e calçar), associada à reflexão metalinguística no quadrinho final sobre as peculiaridades cômicas da língua portuguesa. A afirmativa 3 é falsa porque ambas as expressões são perfeitamente comuns no uso diário do português brasileiro.',
    wrong: {
      0: 'A afirmativa 2 também é correta quanto ao recurso da metalinguagem e inversão.',
      2: 'A afirmativa 3 é falsa: as expressões são plenamente naturais e consagradas no cotidiano.',
      3: 'A afirmativa 3 é incorreta, pois não há inadequação nem estranhamento de uso popular nas expressões.',
    },
  }),
  q({
    n: 74, subject: 'Inglês', content: 'Reading Comprehension — Toni Morrison biography', difficulty: 'Fácil',
    statement: `${MORRISON_TEXT}\n\nConsidering the information presented in the text, choose the right option.`,
    alternatives: [
      'Chloe was born into a wealthy family who had reading, music and folklore as part of their jobs.',
      'Throughout her whole career Toni was a full-time professor, writer and editor in two different publishing houses.',
      'Although Toni wrote many novels, nonfiction books and other genres, she was never a playwright.',
      'Toni Morrison was an awarded North American literary star who published her first piece in her late thirties.',
    ],
    answer: 'D',
    why: 'O texto explicita que Toni Morrison recebeu prêmios de enorme prestígio (Nobel e Pulitzer) e destaca: "Morrison did not publish her first book until she was 39, but from then on, she was a literary star" (aos 39 anos = in her late thirties).',
    wrong: {
      0: 'Sua família era de origem trabalhadora modesta (pai soldador com múltiplos empregos, mãe trabalhadora doméstica), e não uma família abastada.',
      1: 'O texto afirma expressamente que ela raramente escrevia em tempo integral ("was rarely writing full-time").',
      2: 'O texto afirma o oposto: "She also penned multiple plays and opera librettos".',
    },
  }),
  q({
    n: 75, subject: 'Inglês', content: 'Vocabulary and Synonyms in Context', difficulty: 'Fácil',
    statement: `${MORRISON_TEXT}\n\nBased on the reading of the text, choose the right option.`,
    alternatives: [
      '“Despite her worldwide acclaim” is synonymous with “In spite of her global public approval”.',
      '“Her father... held several jobs at once” is synonymous with “Her father... provided several jobs at the same time in his life”.',
      '“Highly literary aspects with accessible plots” is synonymous with “Mainly literary aspects with accessible fields”.',
      '“Particularly in regard to racism and sexism” is synonymous with “Particularly unlike racism and sexism”.',
    ],
    answer: 'A',
    why: 'A locução prepositiva concessiva "Despite" é estritamente sinônima de "In spite of", e "worldwide acclaim" equivale semanticamente com precisão a "global public approval" (reconhecimento/aprovação pública global).',
    wrong: {
      1: '"Held several jobs" significa que ele exercia/trabalhava em vários empregos simultaneamente, e não que fornecia/ofertava empregos como empregador ("provided").',
      2: '"Plots" no contexto de obras literárias significa enredos/tramas, e não campos ("fields").',
      3: '"In regard to" significa com relação a / no que diz respeito a, enquanto "unlike" significa ao contrário de / diferentemente de.',
    },
  }),
  q({
    n: 76, subject: 'Inglês', content: 'Reading Comprehension — Environmental legislation in Chile', difficulty: 'Fácil',
    statement: `${ATACAMA_TEXT}\n\nBased on the text, it is correct to say that Chile’s government:`,
    alternatives: [
      'has created new legislation to stop all of the importation of second-hand textiles to the country.',
      'has decided to use the same legislation of other countries, forcing producers to either resell or reimport unused textiles.',
      'has added textiles to the list of categories of its already existing responsibility law.',
      'is invested in moving textile dumps from the Atacama Desert to another area in South America.',
    ],
    answer: 'C',
    why: 'O texto informa que o ministério do meio ambiente chileno adicionou os têxteis como categoria prioritária à sua já existente lei de responsabilidade estendida do produtor (em vigor desde 2017 para pneus, baterias, óleos e plásticos): "added textiles as a ‘priority’ category to its extended producer responsibility law".',
    wrong: {
      0: 'A lei não proibiu a importação de roupas usadas, mas responsabilizou os importadores pelo gerenciamento dos resíduos.',
      1: 'O Chile não copiou textualmente a lei de outros países para forçar reimportação, mas expandiu sua própria legislação de 2017.',
      3: 'A meta governamental é erradicar os lixões no deserto do Atacama inserindo os têxteis na economia circular, e não transferi-los para outro país.',
    },
  }),
  q({
    n: 77, subject: 'Inglês', content: 'Reading Comprehension — Producer responsibility and waste', difficulty: 'Fácil',
    statement: `${ATACAMA_TEXT}\n\nAccording to the text, choose the correct alternative.`,
    alternatives: [
      'The piles of items thrown around Iquique are made up of brand-new uniform and work clothes.',
      'Chile imported 90% of the 109m tonnes of textiles manufactured around the world in 2020.',
      'The tonnes of clothes that arrive in Iquique daily are driven to Santiago by trucks.',
      'The addition of textiles to the Chilean responsibility law will give producers new obligations as to their products.',
    ],
    answer: 'D',
    why: 'O último parágrafo conclui categoricamente: "The inclusion of textiles in the producer responsibility law will establish the obligations of producers, who will no longer be able to disregard the environmental impacts of unused textiles".',
    wrong: {
      0: 'As pilhas de descarte contêm roupas de segunda mão usadas e sobras de coleções passadas de fast fashion, não uniformes fabris exclusivamente novos.',
      1: 'Mais de 90% das roupas vendidas no Chile são importadas, mas o país não importou 90% de toda a produção mundial de tecidos.',
      2: 'Apenas as melhores peças em bom estado são encaminhadas para venda em Santiago; o restante segue em comboios locais para Alto Hospicio e feiras populares.',
    },
  }),
  q({
    n: 78, subject: 'Inglês', content: 'Language Analysis — Parts of speech and pronoun reference', difficulty: 'Média',
    statement: `${ATACAMA_TEXT}\n\nConsider the following sentences:
1. In paragraph one, the underlined words dusty, used and decisive are being used as adjectives.
2. In paragraph two, the underlined pronoun it refers to “The country’s environment ministry”.
3. In paragraph five, the underlined expression The rest refers to “the best clothes”.
4. In paragraph five, the underlined expressions The best, the…largest, and the least are being used as comparatives of equality.

Mark the correct alternative.`,
    alternatives: [
      'Only affirmative 3 is correct.',
      'Only affirmatives 1 and 2 are correct.',
      'Only affirmatives 2, 3 and 4 are correct.',
      'Affirmatives 1, 2, 3 and 4 are correct.',
    ],
    answer: 'B',
    why: 'A afirmação 1 está correta ("dusty corner", "used clothes", "decisive step" qualificam substantivos como adjetivos). A afirmação 2 está correta (o pronome "it" em "it had added" retoma o sujeito oracional "The country’s environment ministry"). A afirmação 3 é falsa ("The rest" refere-se às roupas restantes que não foram selecionadas entre as melhores). A afirmação 4 é falsa (tratam-se de formas do grau superlativo, e não comparativos de igualdade).',
    wrong: {
      0: 'A afirmativa 3 é incorreta, e as afirmativas 1 e 2 são verdadeiras.',
      2: 'As afirmativas 3 e 4 contêm erros conceituais gramaticais.',
      3: 'Nem todas as afirmativas são verdadeiras; as assertivas 3 e 4 são falsas.',
    },
  }),
  q({
    n: 79, subject: 'Inglês', content: 'Reading Comprehension — Climate regime shifts (CRSs)', difficulty: 'Fácil',
    statement: `${ELNINO_TEXT}\n\nBased on the reading of the text, it is correct to say that climate regime shifts (CRSs):`,
    alternatives: [
      'refer to sudden alternations and changes in the climate patterns.',
      'are to blame for the global warming hitting the planet.',
      'are a threat and pose risks for drivers during El Niño events.',
      'amplify the consequences of super El Niño in a warming world.',
    ],
    answer: 'A',
    why: 'A primeira frase do texto define precisamente: "Climate regime shifts (CRSs), characterized by abrupt and persistent transitions between alternative stable states in the climate system" (transições abruptas e persistentes entre estados estáveis no sistema climático = sudden alternations and changes in the climate patterns).',
    wrong: {
      1: 'Os CRSs são consequência e fenômeno do sistema climático, não a causa primária culpada pelo aquecimento global.',
      2: '"Drivers" no texto científico significa fatores propulsores/motores, e não condutores de veículos (motoristas).',
      3: 'São os eventos de super El Niño que impulsionam e aumentam a probabilidade dos CRSs, e não o inverso.',
    },
  }),
  q({
    n: 80, subject: 'Inglês', content: 'Reading Comprehension — Study findings and climate risk mitigation', difficulty: 'Fácil',
    statement: `${ELNINO_TEXT}\n\nBased on the text, choose the correct option.`,
    alternatives: [
      'Multiple observations and model simulations reduce significantly the occurrence of climate regime shifts.',
      'Findings of the study indicate measures and actions to reduce the risks brought by climate changes.',
      'The surface temperature of the sea and the air observed in the research have remained steady.',
      'Research suggests that future greenhouse warming will hopefully mitigate climate regime shifts.',
    ],
    answer: 'B',
    why: 'A conclusão do excerto sublinha: "Our findings underscore a deeper and more persistent climate footprint of super El Niño events, suggesting that early warnings and proactive measures are crucial for mitigating their escalating risks" (recomenda medidas ativas e alertas antecipados para mitigar os riscos climáticos).',
    wrong: {
      0: 'Observações e simulações científicas medem os fenômenos, não reduzem por si mesmas as ocorrências físicas no clima.',
      2: 'O texto aponta perturbações marcantes nas temperaturas do ar e da superfície marítima, que não permaneceram estáveis.',
      3: 'O aquecimento por gases de efeito estufa amplificará os efeitos do super El Niño, e não atenuará ("mitigate").',
    },
  }),
];
