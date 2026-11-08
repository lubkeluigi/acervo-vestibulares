import { createUnifesp } from './unifesp-helpers.js';

const { d, img, tex } = createUnifesp(2021);

export const unifesp2021Discursivas = [
  // ==========================================
  // BIOLOGIA (QUESTÕES 01 A 05)
  // ==========================================
  d({
    n: 1,
    subject: 'Biologia',
    content: 'Protozooses: amebíase, osmose em água marinha e ciclo biológico',
    difficulty: 'Média',
    statement: `Algumas amebas podem causar doenças ao ser humano. A Entamoeba histolytica geralmente convive bem com nossa espécie, não causando disfunções orgânicas, mas, em determinadas condições, ela se torna patogênica e causa a amebíase, que pode provocar diarreia, anemia e até a morte.\n\n(www.invivo.fiocruz.br. Adaptado.)`,
    parts: [
      {
        id: 'a',
        prompt: 'Caso a ameba Entamoeba histolytica fosse inserida em um recipiente com água marinha, ela não sobreviveria. Por que isso ocorre?',
        expected: 'A água marinha é uma solução hipertônica (mais concentrada) em relação ao citoplasma da ameba (que é hipotônico). Por osmose, a ameba perderia água para o meio marinho, sofrendo desidratação (murchamento) e morte, pois não possui parede celular nem mecanismos eficientes de osmorregulação para meios fortemente hipertônicos.',
        criteria: [
          { points: 1, text: 'Explica a diferença osmótica: a ameba é hipotônica / menos concentrada em relação à água marinha (ou a água marinha é hipertônica / mais concentrada em relação à ameba). Não são aceitas: termos vagos como "meio saturado" ou apenas "alta salinidade".' },
          { points: 1, text: 'Explica o fluxo de água e o efeito: a ameba perde água de seu interior para a água marinha por osmose e desidrata / murcha / seca.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Cite a fase do ciclo de vida da Entamoeba histolytica na qual ocorre o contágio do ser humano. Explique por que pessoas com quadros mais graves de amebíase podem desenvolver anemia.',
        expected: '1) Fase de contágio: a infecção humana ocorre pela ingestão de cistos maduros (cistos tetranucleados) presentes em água ou alimentos contaminados.\n2) Desenvolvimento de anemia: na fase invasiva intestinal, os trofozoítos invadem a mucosa do intestino grosso, provocando ulcerações com hemorragias e lesões teciduais na parede intestinal, além de poderem fagocitar hemácias (hematofagia). As perdas sanguíneas constantes nas fezes (disenteria amebiana) reduzem o número de eritrócitos e de hemoglobina circulantes, culminando em anemia ferropriva/hemorrágica.',
        criteria: [
          { points: 1, text: 'Identifica a fase do ciclo de vida na qual ocorre o contágio: cisto (ou cisto maduro / tetranucleado).' },
          { points: 1, text: 'Explica a anemia: as lesões / úlceras na parede do intestino grosso geram hemorragias / sangramentos (ou hematofagia pelos trofozoítos), provocando perda crônica de sangue / hemácias.' },
        ],
      },
    ],
  }),

  d({
    n: 2,
    subject: 'Biologia',
    content: 'Biologia celular: síndrome de Kartagener, dineína, cílios e flagelos',
    difficulty: 'Média',
    statement: `A síndrome de Kartagener é um distúrbio genético que impede a síntese da proteína dineína, necessária à função dos microtúbulos. Sem a dineína, algumas estruturas celulares não se movimentam, como aquelas presentes nas vias respiratórias, nas paredes da tuba uterina e nos espermatozoides, causando prejuízos à eliminação de muco pelos brônquios e à fertilidade masculina e feminina.`,
    parts: [
      {
        id: 'a',
        prompt: 'Cite as duas estruturas celulares, uma presente nas vias respiratórias e outra nos espermatozoides, que têm o movimento prejudicado pela falta da dineína.',
        expected: '1) Vias respiratórias: cílios (presentes nas células ciliadas do epitélio respiratório).\n2) Espermatozoides: flagelo (estrutura responsável pela motilidade dos espermatozoides).',
        criteria: [
          { points: 1, text: 'Cita cílios nas vias respiratórias. (Não aceito: vilosidades, microvilosidades).' },
          { points: 1, text: 'Cita flagelos nos espermatozoides. (Não aceito: apenas "cauda").' },
        ],
      },
      {
        id: 'b',
        prompt: 'Por que uma mulher portadora da síndrome de Kartagener tem maior chance de desenvolver uma gravidez na tuba uterina? Explique como a medicina reprodutiva pode fazer com que um homem com essa síndrome seja pai.',
        expected: '1) Gravidez tubária: nas paredes da tuba uterina, o epitélio possui cílios responsáveis por impulsionar o embrião recém-fecundado em direção ao útero. Com a imobilidade desses cílios causada pela falta de dineína, o embrião não consegue ser transportado adequadamente até a cavidade uterina, implantando-se na própria parede da tuba (gravidez ectópica/tubária).\n2) Paternidade no homem com síndrome de Kartagener: devido à imobilidade dos espermatozoides (flagelos imóveis), a medicina reprodutiva emprega a Fertilização in vitro (FIV), especificamente a Injeção Intracitoplasmática de Espermatozoide (ICSI), em que um espermatozoide é recolhido e injetado diretamente no interior do ovócito II, seguido da transferência do embrião formado para o útero materno.',
        criteria: [
          { points: 1, text: 'Explica a gravidez na tuba uterina: a imobilidade dos cílios das células ciliadas da tuba uterina impede o deslocamento do embrião ao útero, resultando em sua fixação na própria tuba.' },
          { points: 1, text: 'Indica a técnica reprodutiva: fertilização in vitro (FIV) ou injeção intracitoplasmática de espermatozoide (ICSI) com transferência do embrião ao útero.' },
        ],
      },
    ],
  }),

  d({
    n: 3,
    subject: 'Biologia',
    content: 'Hematopoiese, organelas e metabolismo anaeróbico de hemácias',
    difficulty: 'Difícil',
    statement: `Ao longo da diferenciação de uma hemácia a partir do eritroblasto, a célula sintetiza hemoglobinas, perde seu núcleo e organelas e migra para a corrente sanguínea. No citoplasma de uma hemácia humana adulta existem cerca de 250 milhões de moléculas de hemoglobina.`,
    visuals: [{ file: 'p2-q03-grafico-o2.svg', alt: 'Gráfico com variações 1, 2 e 3 de consumo de gás oxigênio' }],
    parts: [
      {
        id: 'a',
        prompt: 'Cite a organela responsável pela produção de hemoglobina no eritroblasto. Em que local do corpo humano adulto são produzidos os eritroblastos?',
        expected: '1) Organela responsável pela síntese de hemoglobina: ribossomo (ribossomos livres no citoplasma ou associados ao retículo endoplasmático rugoso).\n2) Local de produção dos eritroblastos no adulto: medula óssea vermelha (tecido hematopoiético presente no interior de ossos longos e chatos).',
        criteria: [
          { points: 1, text: 'Identifica o ribossomo (ou ribossomos associados ao RER).' },
          { points: 1, text: 'Indica a medula óssea (medula óssea vermelha / tecido hemocitopoiético).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Suponha um experimento em que uma hemácia adulta foi colocada em um tubo de ensaio e mantida fechada em contato com certo volume de gás oxigênio. O volume de gás oxigênio foi monitorado, visando verificar o consumo desse gás na síntese de ATP. Considere o gráfico, que ilustra três possíveis variações no consumo de gás oxigênio durante o experimento.\nQual curva do gráfico representa o consumo de gás oxigênio utilizado no processo metabólico realizado pela hemácia adulta para sintetizar ATP? Justifique sua resposta.',
        expected: '1) Indicação da curva: a indicação da curva foi anulada pela banca VUNESP porque nenhuma curva ilustrava o consumo estritamente nulo (consumo de O2 = 0) ao longo do tempo.\n2) Justificativa metabólica: as hemácias adultas humanas são anucleadas e desprovidas de mitocôndrias. Por isso, não realizam respiração celular aeróbica (cadeia respiratória e fosforilação oxidativa). A síntese de ATP na hemácia madura ocorre exclusivamente por via anaeróbica, através da fermentação lática (glicólise anaeróbia), processo que não consome gás oxigênio.',
        criteria: [
          { points: 1, text: 'Explica que a hemácia adulta não possui mitocôndrias / organelas.' },
          { points: 1, text: 'Explica que o processo metabólico de síntese de ATP é anaeróbico (fermentação lática), não consumindo oxigênio (consumo nulo).' },
        ],
      },
    ],
  }),

  d({
    n: 4,
    subject: 'Biologia',
    content: 'Ecologia: relações ecológicas, teias tróficas e ciclo do nitrogênio no Pantanal',
    difficulty: 'Média',
    statement: `O incêndio no Pantanal está devastando a fazenda São Francisco do Perigara, santuário que concentra 15% da população livre da espécie de arara-azul Anodorhynchus hyacinthinus, ameaçada de extinção. A propriedade já perdeu 70% dos cerca de 25 mil hectares, quase tudo vegetação nativa. O motivo da concentração de araras na fazenda era a associação entre esses animais, o acuri (Attalea phalerata, tipo de palmeira que produz frutos com polpa) e os bois. Antes das queimadas era comum ver as araras perto dos bois para se alimentar. O gado vai para a mata, come a polpa do acuri e deixa o fruto disperso no chão, que é comido pelas araras-azuis.\nO incêndio está provocando um impacto enorme sobre a flora e a fauna do Pantanal e poderá comprometer a fertilidade do solo, com prejuízo à produção agrícola local e à produção das plantas forrageiras que alimentam o gado.\n\n(Folha de S.Paulo, 17.08.2020. Adaptado.)`,
    parts: [
      {
        id: 'a',
        prompt: 'Cite a relação ecológica que ocorre entre o gado e as araras-azuis. Na teia alimentar da qual essas espécies fazem parte, qual é o nível trófico ocupado pelas araras-azuis?',
        expected: '1) Relação ecológica: comensalismo (o gado beneficia a arara-azul ao retirar a polpa e disponibilizar a semente no solo, sem sofrer benefício nem prejuízo na relação).\n2) Nível trófico da arara-azul: segundo nível trófico (consumidor primário), pois alimenta-se diretamente de um vegetal produtor (frutos do acuri).',
        criteria: [
          { points: 1, text: 'Identifica a relação ecológica como comensalismo.' },
          { points: 1, text: 'Determina que a arara-azul ocupa o segundo nível trófico (consumidor primário).' },
        ],
      },
      {
        id: 'b',
        prompt: 'O fogo interrompe drasticamente quase todas as etapas do ciclo do nitrogênio e, consequentemente, reduz a produção agrícola. Explique como o fogo interrompe as etapas do ciclo do nitrogênio e qual a relação disso com a baixa produção agrícola.',
        expected: '1) Interrupção do ciclo: as altas temperaturas causadas pelo fogo esterilizam as camadas superficiais do solo, provocando a morte dos micro-organismos (bactérias fixadoras, nitrificantes e decompositoras) essenciais para a ciclagem do nitrogênio.\n2) Relação com a baixa produção agrícola: sem as bactérias do ciclo do nitrogênio, a conversão da matéria orgânica em amônia (amonificação) e a oxidação desta a nitrito e nitrato (nitrificação) cessam. O nitrato é a principal forma inorgânica assimilável de nitrogênio para a síntese vegetal de aminoácidos, proteínas e ácidos nucleicos. A escassez de nitratos empobrece o solo nutricionalmente, diminuindo a fertilidade e prejudicando severamente o desenvolvimento e rendimento das culturas agrícolas.',
        criteria: [
          { points: 1, text: 'Explica que o calor do fogo eleva a temperatura do solo provocando a morte das bactérias associadas ao ciclo do nitrogênio.' },
          { points: 1, text: 'Relaciona a morte bacteriana à redução de compostos nitrogenados assimiláveis (amônia/nitrato) no solo, o que reduz a fertilidade e prejudica o desenvolvimento das plantas.' },
        ],
      },
    ],
  }),

  d({
    n: 5,
    subject: 'Biologia',
    content: 'Genética: sistemas ABO e Rh, heredograma, aglutinação e eritroblastose fetal',
    difficulty: 'Média',
    statement: `Analise o heredograma no qual estão indicados os tipos sanguíneos do casal Gustavo e Talita e de sua filha Aline, de acordo com os sistemas ABO e Rh.`,
    visuals: [{ file: 'p2-q05-heredograma.svg', alt: 'Heredograma dos sistemas ABO e Rh das famílias de Gustavo e Talita' }],
    parts: [
      {
        id: 'a',
        prompt: 'A presença ou não dos tipos de aglutinogênios nas hemácias, que são determinados geneticamente, permite identificar os grupos sanguíneos para o sistema ABO e Rh. Indique o genótipo da irmã de Talita quanto ao sistema ABO. Qual característica fenotípica impede Talita de gerar um filho com eritroblastose fetal?',
        expected: '1) Genótipo da irmã de Talita para o sistema ABO: a irmã de Talita é do tipo sanguíneo B. Os pais de Talita são AB e A. Como a mãe é AB ($I^A I^B$) e o pai é A (gerou Aline filha O, logo os pais de Talita têm alelos $i$), o genótipo da irmã de Talita é $I^B i$.\n2) Característica fenotípica de Talita que impede eritroblastose fetal: Talita possui fator Rh positivo (fenótipo Rh+). Mulheres Rh+ possuem o antígeno Rh nas suas hemácias e, portanto, não produzem anticorpos anti-Rh (anti-D) que poderiam atravessar a placenta e causar a eritroblastose fetal (doença hemolítica do recém-nascido).',
        criteria: [
          { points: 1, text: 'Indica o genótipo da irmã de Talita no sistema ABO: I^B i (ou IBi).' },
          { points: 1, text: 'Identifica que Talita é Rh+ (não produz anticorpos anti-Rh).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Suponha que Aline necessite de uma transfusão de sangue e que seu pai, sua mãe e a avó materna tenham se prontificado a doar sangue a ela. Se a transfusão fosse realizada, o sangue recebido de qual dessas três pessoas doadoras teria suas hemácias aglutinadas de imediato? Justifique sua resposta.',
        expected: '1) Pessoa doadora: o sangue do pai (Gustavo) sofreria aglutinação imediata.\n2) Justificativa: Gustavo possui sangue do tipo B (hemácias com aglutinogênio B / antígeno B). Aline possui sangue do tipo A (hemácias com aglutinogênio A e plasma com anticorpos/aglutininas anti-B). Ao receber o sangue de Gustavo, as aglutininas anti-B presentes no plasma de Aline atacam e aglutinam imediatamente as hemácias do sangue doado pelo pai.',
        criteria: [
          { points: 1, text: 'Identifica que apenas o sangue do pai (Gustavo) provocará aglutinação imediata.' },
          { points: 1, text: 'Justifica demonstrando a reação entre os anticorpos anti-B do plasma de Aline (receptora) e os aglutinogênios/antígenos B das hemácias de Gustavo (doador).' },
        ],
      },
    ],
  }),

  // ==========================================
  // QUÍMICA (QUESTÕES 06 A 10)
  // ==========================================
  d({
    n: 6,
    subject: 'Química',
    content: 'Química inorgânica: silvita, ligação iônica, distribuição eletrônica e teores equivalentes',
    difficulty: 'Média',
    statement: `O potássio é um nutriente mineral essencial no metabolismo dos seres vivos e elemento químico básico na composição de fertilizantes do tipo NPK — mistura de compostos à base de nitrogênio, fósforo e potássio. A silvita (KCl), um dos minérios de potássio, é importante fonte de matéria-prima para a produção de fertilizantes, porque possui a maior porcentagem de potássio em uma forma química de fácil extração. Convencionalmente, a porcentagem em massa de potássio em fertilizantes é expressa como “K2O equivalente”, mesmo que o composto presente seja o KCl, exigindo que sejam feitos cálculos que relacionem as massas de potássio no K2O e no KCl.\n\nA tabela fornece teores equivalentes de K, KCl e K2O na silvita.\n\n(http://mineralis.cetem.gov.br. Adaptado.)`,
    tables: [
      {
        ariaLabel: 'Teores equivalentes de K, KCl e K2O na silvita',
        headerRows: [
          ['Elemento/composto', 'K', 'KCl', 'K₂O'],
        ],
        rows: [
          ['Teor equivalente (% em massa)', '52', '100', '63'],
        ],
      },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Qual tipo de ligação química está presente na silvita? Escreva a distribuição eletrônica em camadas do elemento potássio na forma em que se apresenta na silvita.',
        expected: tex`1) Tipo de ligação: ligação iônica (ou eletrovalente), resultante da atração eletrostática entre os cátions $\text{K}^+$ e os ânions $\text{Cl}^-$.
2) Forma em que o potássio se apresenta: na silvita, o potássio está na forma de cátion monovalente $\text{K}^+$ ($Z = 19$, tendo perdido 1 elétron da camada de valência):
- Em camadas: $\text{K} = 2;\ \text{L} = 8;\ \text{M} = 8$.
- Em subníveis (Linus Pauling): $1s^2\ 2s^2\ 2p^6\ 3s^2\ 3p^6$.`,
        criteria: [
          { points: 1, text: 'Identifica a ligação iônica ou eletrovalente.' },
          { points: 1, text: 'Escreve a distribuição eletrônica do íon K+: 1s² 2s² 2p⁶ 3s² 3p⁶ ou K=2, L=8, M=8. Não aceita distribuição no estado fundamental neutro.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Demonstre que 100% de KCl correspondem, aproximadamente, às porcentagens em massa de K e de K2O informadas na tabela.',
        expected: tex`Massas molares: $M(\text{K}) = 39\text{ g/mol}$, $M(\text{Cl}) = 35{,}5\text{ g/mol}$, $M(\text{O}) = 16\text{ g/mol}$.
1) Massa molar do $\text{KCl} = 39 + 35{,}5 = 74{,}5\text{ g/mol}$.
Porcentagem de $\text{K}$ em 100% de $\text{KCl}$:
$$74{,}5\text{ g KCl} \quad \text{---} \quad 100\%$$
$$39{,}0\text{ g K} \quad \text{---} \quad x \implies x = \frac{39{,}0 \times 100}{74{,}5} \approx \mathbf{52{,}3\% \approx 52\%}$$
2) Massa molar do $\text{K}_2\text{O} = 2 \times 39 + 16 = 94\text{ g/mol}$.
Cada mol de $\text{K}_2\text{O}$ contém $2 \times 39 = 78\text{ g de K}$.
Relacionando a massa de $\text{K}_2\text{O}$ com a porcentagem de $\text{K}$ (52,3%):
$$78\text{ g de K} \quad \text{---} \quad 94\text{ g de K}_2\text{O}$$
$$52{,}34\% \quad \text{---} \quad y \implies y = \frac{52{,}34 \times 94}{78} \approx \mathbf{63{,}1\% \approx 63\%}$$
$$\text{ou}:\quad 2 \times 74{,}5\text{ g KCl} \text{ (149 g)} \quad \text{---} \quad 94\text{ g K}_2\text{O} \implies \frac{94}{149} \times 100\% \approx 63{,}1\%$$`,
        criteria: [
          { points: 1, text: 'Demonstra o cálculo para o potássio: 39 / 74,5 ≈ 52%.' },
          { points: 1, text: 'Demonstra o cálculo para o K2O: 94 / 149 ≈ 63% (ou relação estequiométrica equivalente).' },
        ],
      },
    ],
  }),

  d({
    n: 7,
    subject: 'Química',
    content: 'Radioatividade: isótopos do irídio, decaimento beta e curva de meia-vida',
    difficulty: 'Média',
    statement: `O irídio é um metal muito denso, que possui diversas aplicações, como em contatos elétricos, em agulhas de injeção e em próteses odontológicas.\n\nEsse elemento apresenta dois isótopos naturais, Ir-191 e Ir-193, cujas abundâncias na natureza são, respectivamente, 37,3% e 62,7%. O irídio também apresenta diversos radioisótopos artificiais, sendo um deles o Ir-192, emissor de partículas β– e radiação gama, que é empregado no tratamento de pacientes com câncer. A meia-vida desse radioisótopo é de 74 dias, aproximadamente.`,
    parts: [
      {
        id: 'a',
        prompt: 'Calcule o número de nêutrons do isótopo natural mais abundante do irídio. Assim como os demais metais, o irídio é bom condutor de eletricidade devido a uma característica da estrutura metálica. Qual é essa característica?',
        expected: tex`1) Cálculo do número de nêutrons:
O isótopo natural mais abundante é o $\text{Ir-193}$ (abundância de 62,7%).
Pela Tabela Periódica, o número atômico do irídio é $Z = 77$.
$$A = Z + N \implies N = A - Z = 193 - 77 = \mathbf{116\text{ nêutrons}}$$
2) Característica da estrutura metálica responsável pela condutibilidade elétrica:
A presença de elétrons livres (mar de elétrons / nuvem de elétrons deslocalizados) com grande mobilidade pela rede cristalina de cátions metálicos.`,
        criteria: [
          { points: 1, text: 'Calcula o número de nêutrons do isótopo 193: 193 - 77 = 116 nêutrons.' },
          { points: 1, text: 'Aponta a presença de elétrons livres (mar/nuvem de elétrons livres).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Escreva a equação que representa o decaimento do irídio-192. Construa, utilizando os eixos gráficos disponíveis no campo de Resolução e Resposta, a curva que representa o decaimento radioativo do Ir-192.',
        responseTemplate: {
          file: 'p2-q07-eixos-resposta.svg',
          alt: 'Eixos cartesianos para construção da curva de decaimento do Ir-192',
          caption: 'Campo oficial de Resolução e Resposta: utilize os eixos para traçar a curva de decaimento do Ir-192.',
        },
        expected: tex`1) Equação de decaimento com emissão de partícula beta ($\beta^-$):
$$_{77}^{192}\text{Ir} \longrightarrow\ _{78}^{192}\text{Pt} + \,_{-1}^{\phantom{-}0}\beta \quad (\text{ou }_{-1}^{\phantom{-}0}e)$$
2) Construção da curva de decaimento:
Com meia-vida $t_{1/2} = 74\text{ dias}$:
- No instante $t = 0$: $100\%$ de $\text{Ir-192}$;
- Em $t = 74\text{ dias}$ (1ª meia-vida): teor reduz-se a $50\%$;
- Em $t = 148\text{ dias}$ (2ª meia-vida): teor reduz-se a $25\%$;
- Em $t = 222\text{ dias}$ (3ª meia-vida): teor reduz-se a $12{,}5\%$;
- Traça-se a curva exponencial assintótica passando rigorosamente pelos pontos $(0; 100\%)$, $(74; 50\%)$, $(148; 25\%)$ e $(222; 12{,}5\%)$.`,
        expectedImages: [
          {
            file: 'p2-q07-grafico-decaimento.svg',
            alt: 'Gabarito Oficial: Curva de decaimento radioativo do Ir-192',
            caption: 'Critério oficial VUNESP: curva de decaimento radioativo passando pelos pontos de meia-vida (74 dias / 50%, 148 dias / 25%).',
          },
        ],
        criteria: [
          { points: 1, text: 'Escreve a equação nuclear: 77Ir192 -> 78Pt192 + -1β0.' },
          { points: 1, text: 'Desenha a curva de decaimento passando pelos pontos de meia-vida (t=74d com 50%, t=148d com 25%).' },
        ],
      },
    ],
  }),

  d({
    n: 8,
    subject: 'Química',
    content: 'Termoquímica e soluções: concentração em mol/L, calorimetria e entalpia de combustão da sacarose',
    difficulty: 'Média',
    statement: `Analise as seguintes informações nutricionais contidas no rótulo de um refrigerante.`,
    tables: [
      {
        ariaLabel: 'Valores nutricionais em 350 mL de refrigerante (1 lata)',
        headerRows: [
          [{ text: 'Valores nutricionais em 350 mL (1 lata)', colSpan: 2 }],
        ],
        rows: [
          ['Valor energético', '613 kJ'],
          ['Açúcares', '36 g'],
          ['Sódio', '27 mg'],
        ],
      },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Represente a forma química em que o elemento sódio está presente no refrigerante. Calcule a concentração de sódio na bebida em mol/L.',
        expected: tex`1) Forma química do sódio: está presente na forma de íon sódio, $\text{Na}^+$ (cátion monovalente dissolvido em solução aquosa).
2) Concentração em mol/L:
- Massa de $\text{Na} = 27\text{ mg} = 27 \times 10^{-3}\text{ g}$.
- Volume = $350\text{ mL} = 0{,}350\text{ L}$.
- Massa molar do sódio = $23\text{ g/mol}$.
$$n(\text{Na}^+) = \frac{27 \times 10^{-3}\text{ g}}{23\text{ g/mol}} \approx 1{,}174 \times 10^{-3}\text{ mol}$$
$$[\text{Na}^+] = \frac{n}{V} = \frac{1{,}174 \times 10^{-3}\text{ mol}}{0{,}350\text{ L}} \approx \mathbf{3{,}4 \times 10^{-3}\text{ mol/L}}$$`,
        criteria: [
          { points: 1, text: 'Representa a forma química: íon Na+ (cátion sódio).' },
          { points: 1, text: 'Calcula a concentração molar: aprox. 3,4 × 10^-3 mol/L (aceito entre 3,0 e 3,5 × 10^-3 mol/L).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Sabendo que o calor específico da água é 4,18 kJ ⋅ kg–1 ⋅ ºC–1, estime a massa de água que pode ser aquecida de 20 ºC a 50 ºC com a energia térmica correspondente ao valor energético de 350 mL desse refrigerante. Considerando que o único açúcar presente no refrigerante seja o açúcar comum (sacarose, C12H22O11) e que o valor energético desse refrigerante seja devido apenas a esse carboidrato, estime, a partir dos dados da tabela, qual é a entalpia de combustão completa desse açúcar em kJ/mol.',
        expected: tex`1) Massa de água aquecida:
Dados: $\Delta E = 613\text{ kJ}$, $c = 4{,}18\text{ kJ}\cdot\text{kg}^{-1}\cdot{^\circ}\text{C}^{-1}$, $\Delta T = 50 - 20 = 30{^\circ}\text{C}$.
$$Q = m \cdot c \cdot \Delta T \implies m = \frac{Q}{c \cdot \Delta T} = \frac{613}{4{,}18 \times 30} = \frac{613}{125{,}4} \approx \mathbf{4{,}9\text{ kg de água}}$$
2) Entalpia de combustão da sacarose ($\text{C}_{12}\text{H}_{22}\text{O}_{11}$):
- Massa molar da sacarose:
$$M = (12 \times 12) + (22 \times 1) + (11 \times 16) = 144 + 22 + 176 = 342\text{ g/mol}$$
- 36 g de sacarose liberam 613 kJ de energia ($\Delta H < 0$, combustão exotérmica):
$$\Delta H_{\text{comb}} = \frac{342\text{ g}}{1\text{ mol}} \times \left(-\frac{613\text{ kJ}}{36\text{ g}}\right) \approx \mathbf{-5\,823{,}5\text{ kJ/mol}}$$`,
        criteria: [
          { points: 1, text: 'Calcula a massa de água: aprox. 4,9 kg (aceito entre 4,8 kg e 5,0 kg).' },
          { points: 1, text: 'Calcula o ΔH de combustão: aprox. -5823,5 kJ/mol (obrigatório sinal negativo).' },
        ],
      },
    ],
  }),

  d({
    n: 9,
    subject: 'Química',
    content: 'Equilíbrio químico e estequiometria: Kps do oxalato de cálcio e volumetria redox',
    difficulty: 'Difícil',
    statement: `Um dos métodos para análise quantitativa de íons cálcio em uma solução aquosa envolve as seguintes etapas:\n\n1. Precipitação de íons cálcio por reação com íons oxalato em excesso, de acordo com a equação:\n$$\\text{Ca}^{2+}\\text{ (aq)} + \\text{C}_2\\text{O}_4^{2-}\\text{ (aq)} \\longrightarrow \\text{CaC}_2\\text{O}_4\\text{ (s)}$$\n\n2. Filtração do precipitado formado seguida de lavagem.\n\n3. Reação do precipitado formado com ácido sulfúrico, produzindo ácido oxálico:\n$$\\text{CaC}_2\\text{O}_4\\text{ (s)} + \\text{H}_2\\text{SO}_4\\text{ (aq)} \\longrightarrow \\text{composto X} + \\text{H}_2\\text{C}_2\\text{O}_4\\text{ (aq)}$$\n\n4. Titulação do ácido oxálico com $\\text{KMnO}_4$ em meio ácido, de acordo com a equação parcialmente balanceada:\n$$2\\,\\text{KMnO}_4\\text{ (aq)} + 3\\,\\text{H}_2\\text{SO}_4\\text{ (aq)} + \\underline{\\quad}\\;\\text{H}_2\\text{C}_2\\text{O}_4\\text{ (aq)} \\longrightarrow \\underline{\\quad}\\;\\text{K}_2\\text{SO}_4\\text{ (aq)} + \\underline{\\quad}\\;\\text{MnSO}_4\\text{ (aq)} + \\underline{\\quad}\\;\\text{CO}_2\\text{ (g)} + \\underline{\\quad}\\;\\text{H}_2\\text{O}\\text{ (l)}$$`,
    parts: [
      {
        id: 'a',
        prompt: 'Escreva a expressão do Kps (constante do produto de solubilidade) para o oxalato de cálcio. Escreva o nome do produto da etapa 3 identificado como composto X.',
        expected: tex`1) Expressão do $K_{ps}$ para o oxalato de cálcio ($\text{CaC}_2\text{O}_4$):
Equilíbrio heterogêneo de solubilidade: $\text{CaC}_2\text{O}_4\text{ (s)} \rightleftharpoons \text{Ca}^{2+}\text{ (aq)} + \text{C}_2\text{O}_4^{2-}\text{ (aq)}$.
$$\mathbf{K_{ps} = [\text{Ca}^{2+}][\text{C}_2\text{O}_4^{2-}]}$$
2) Nome do composto X: sulfato de cálcio ($\text{CaSO}_4$).`,
        criteria: [
          { points: 1, text: 'Escreve a expressão correta: Kps = [Ca2+][C2O4 2-].' },
          { points: 1, text: 'Identifica o composto X pelo nome oficial: sulfato de cálcio.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Reescreva a equação da etapa 4 completando o balanceamento. Sabendo que o volume molar de gás nas CATP é igual a 25 L/mol, calcule o volume de CO2, medido nessas condições, que é obtido pela reação completa de 0,01 mol de permanganato de potássio.',
        expected: tex`1) Equação redox balanceada da etapa 4:
$$2\,\text{KMnO}_4\text{ (aq)} + 3\,\text{H}_2\text{SO}_4\text{ (aq)} + 5\,\text{H}_2\text{C}_2\text{O}_4\text{ (aq)} \longrightarrow 1\,\text{K}_2\text{SO}_4\text{ (aq)} + 2\,\text{MnSO}_4\text{ (aq)} + 10\,\text{CO}_2\text{ (g)} + 8\,\text{H}_2\text{O}\text{ (l)}$$
2) Cálculo do volume de $\text{CO}_2$ nas CATP ($V_m = 25\text{ L/mol}$):
Pela proporção estequiométrica:
$$2\text{ mol de KMnO}_4 \quad \text{---} \quad 10\text{ mol de CO}_2 \times 25\text{ L/mol} = 250\text{ L de CO}_2$$
$$0{,}01\text{ mol de KMnO}_4 \quad \text{---} \quad V(\text{CO}_2)$$
$$V(\text{CO}_2) = \frac{0{,}01 \times 250}{2} = \mathbf{1{,}25\text{ L de CO}_2}$$`,
        criteria: [
          { points: 1, text: 'Balanceia corretamente a equação: coeficientes 2, 3, 5 -> 1, 2, 10, 8.' },
          { points: 1, text: 'Calcula o volume de CO2 nas CATP: V = 1,25 L (aceito entre 1,20 L e 1,30 L).' },
        ],
      },
    ],
  }),

  d({
    n: 10,
    subject: 'Química',
    content: 'Química orgânica: síntese do ácido L-ascórbico, funções orgânicas, isomeria e carbonos assimétricos',
    difficulty: 'Difícil',
    statement: `A sequência de reações representada no esquema resume etapas de um dos processos de obtenção de ácido L-ascórbico (vitamina C) a partir da glicose.\n\n(Fernanda A. D. Ito e Iara L. R. Gonçalves. Método para a produção de ácido 2-ceto-L-gulônico. Adaptado.)`,
    visuals: [
      { file: 'p2-q10-vitamina-c.svg', alt: 'Esquema de reações de síntese da vitamina C a partir da D-glicose' },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Dê o nome da substância que possui um grupo funcional éster. Quais substâncias, entre as representadas no esquema, são isômeras entre si?',
        expected: '1) Substância com função éster: ácido L-ascórbico (vitamina C), que apresenta uma lactona (éster cíclico no anel furânico).\n2) Substâncias isômeras entre si: D-glicose e L-sorbose (ambas possuem a mesma fórmula molecular C6H12O6, sendo a D-glicose uma aldoexose e a L-sorbose uma cetoexose — isomeria de função).',
        criteria: [
          { points: 1, text: 'Identifica o ácido L-ascórbico (ou vitamina C).' },
          { points: 1, text: 'Identifica o par de isômeros: D-glicose e L-sorbose.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Dê o nome do composto que sofre redução na sequência de reações. Indique, na fórmula do ácido L-ascórbico presente no campo de Resolução e Resposta, os dois átomos de carbono assimétrico.',
        responseTemplate: {
          file: 'p2-q10-estrutura-resposta.svg',
          alt: 'Fórmula estrutural do ácido L-ascórbico no campo de resposta',
          caption: 'Campo oficial de Resolução e Resposta: indique na fórmula os dois átomos de carbono assimétrico.',
        },
        expected: '1) Composto que sofre redução: D-glicose. Na primeira etapa, a carbonila aldeídica da D-glicose é reduzida a um grupo álcool primário, formando o D-sorbitol (adição de H2).\n2) Carbonos assimétricos no ácido L-ascórbico: são os carbonos 4 e 5 (numerando a partir da carbonila C1 do éster). O carbono C4 está ligado ao anel com oxigênio, uma hidroxila enólica, um hidrogênio e a cadeia lateral; o carbono C5 está ligado a um H, uma hidroxila -OH, ao grupo -CH2OH e ao anel. Ambos possuem 4 ligantes diferentes entre si.',
        expectedImages: [
          {
            file: 'p2-q10-solucao-carbonos.svg',
            alt: 'Gabarito Oficial: Carbonos assimétricos assinalados no ácido L-ascórbico',
            caption: 'Critério oficial VUNESP: indicação dos dois carbonos quirais/assimétricos (C4 e C5) assinalados com asteriscos na estrutura.',
          },
        ],
        criteria: [
          { points: 1, text: 'Identifica o composto que sofre redução: D-glicose.' },
          { points: 1, text: 'Indica os dois carbonos quirais/assimétricos (C4 e C5) na estrutura do ácido L-ascórbico.' },
        ],
      },
    ],
  }),

  // ==========================================
  // FÍSICA (QUESTÕES 11 A 15)
  // ==========================================
  d({
    n: 11,
    subject: 'Física',
    content: 'Mecânica: conservação de energia mecânica e lançamento vertical',
    difficulty: 'Fácil',
    statement: `Um gato de massa 3 kg encontra-se em repouso na beirada de um telhado, a uma altura de 5 m do chão horizontal. Adote $g = 10\\text{ m/s}^2$ e despreze a resistência do ar.`,
    visuals: [{ file: 'p2-q11-ilustracao-gato.svg', alt: 'Ilustração do gato na beirada do telhado observando os pássaros' }],
    parts: [
      {
        id: 'a',
        prompt: 'a energia potencial gravitacional que o gato possui quando se encontra em repouso na beirada do telhado e o módulo da velocidade com que atingiria o chão, caso caísse do telhado a partir do repouso;',
        expected: tex`1) Energia potencial gravitacional em repouso no telhado:
$$E_p = m \cdot g \cdot h = 3 \times 10 \times 5 = \mathbf{150\text{ J}}$$
2) Módulo da velocidade ao atingir o chão (conservação de energia mecânica ou Torricelli):
$$E_c = E_p \implies \frac{m \cdot v^2}{2} = m \cdot g \cdot h \implies v = \sqrt{2 \cdot g \cdot h} = \sqrt{2 \times 10 \times 5} = \sqrt{100} = \mathbf{10\text{ m/s}}$$`,
        criteria: [
          { points: 1, text: 'Calcula a energia potencial gravitacional: Ep = 150 J (unidade obrigatória).' },
          { points: 1, text: 'Calcula a velocidade ao atingir o solo: v = 10 m/s (unidade obrigatória).' },
        ],
      },
      {
        id: 'b',
        prompt: 'o tempo de permanência do gato no ar, supondo que, na tentativa frustrada de apanhar um pássaro em voo, o gato tenha saltado verticalmente para cima, a partir do telhado, com velocidade de 4 m/s e retornado ao mesmo ponto do telhado de onde saltou.',
        expected: tex`No lançamento vertical a partir do telhado com $v_0 = 4\text{ m/s}$:
No ponto de altura máxima, $v = 0$:
$$v = v_0 - g \cdot t_{\text{sub}} \implies 0 = 4 - 10 \cdot t_{\text{sub}} \implies t_{\text{sub}} = \frac{4}{10} = 0{,}4\text{ s}$$
Como o tempo de subida é igual ao tempo de descida para o mesmo nível de lançamento:
$$t_{\text{total}} = 2 \times t_{\text{sub}} = 2 \times 0{,}4 = \mathbf{0{,}8\text{ s}}$$`,
        criteria: [
          { points: 1, text: 'Determina o tempo de subida: t_sub = 0,4 s.' },
          { points: 1, text: 'Calcula o tempo total de permanência no ar: t_total = 0,8 s (unidade obrigatória).' },
        ],
      },
    ],
  }),

  d({
    n: 12,
    subject: 'Física',
    content: 'Dinâmica: conjunto jipe-reboque-lancha, tração e plano inclinado com atrito estático',
    difficulty: 'Média',
    statement: `Um jipe de massa $2\\,000\\text{ kg}$ é utilizado para rebocar uma lancha sobre uma carreta de massa total igual a $500\\text{ kg}$. O conjunto jipe-reboque-lancha move-se sobre um piso plano e horizontal, puxado pelo engate, com aceleração constante de $2\\text{ m/s}^2$.\n\nEm seguida, o motorista posiciona o conjunto sobre uma rampa inclinada de um ângulo $\\theta$ em relação à horizontal, conforme a Figura 2.`,
    visuals: [
      { file: 'p2-q12-1-jipe-plano.svg', alt: 'Figura 1: Jipe e reboque de lancha em terreno plano e horizontal' },
      { file: 'p2-q12-2-jipe-rampa.svg', alt: 'Figura 2: Jipe e reboque de lancha estacionados em rampa inclinada' },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Sabendo que a força aplicada pelo motor do jipe ao conjunto jipe-reboque-lancha tem intensidade 5 000 N, e desprezando as forças de atrito, determine a aceleração adquirida pelo conjunto e o módulo da força de tração exercida sobre o engate do reboque.',
        expected: tex`1) Aceleração do conjunto ($m_{\text{total}} = 2\,000 + 500 = 2\,500\text{ kg}$):
$$F_R = m_{\text{total}} \cdot a \implies 5\,000 = 2\,500 \cdot a \implies a = \mathbf{2\text{ m/s}^2}$$
2) Força de tração no engate (força resultante sobre o reboque de $500\text{ kg}$):
$$T = m_{\text{reboque}} \cdot a = 500 \times 2 = \mathbf{1\,000\text{ N}}$$`,
        criteria: [
          { points: 1, text: 'Calcula a aceleração do conjunto: a = 2 m/s².' },
          { points: 1, text: 'Calcula a força de tração no engate: T = 1 000 N.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Preparando-se para levar a lancha à água, o motorista estaciona o conjunto jipe-reboque-lancha em posição de marcha à ré sobre uma rampa plana e inclinada de um ângulo θ em relação à horizontal, conforme figura 2.\nDesenhe, na figura presente no campo de Resolução e Resposta, os vetores que representam as forças que atuam sobre o conjunto jipe-reboque-lancha estacionado na rampa, nomeando cada uma dessas forças e considerando o conjunto como um corpo único. Em seguida, determine a intensidade da força de atrito que mantém o conjunto em repouso. Utilize g = 10 m/s2, sen θ = 0,6 ou cos θ = 0,8.',
        responseTemplate: {
          file: 'p2-q12-rampa-resposta.svg',
          alt: 'Conjunto jipe-reboque-lancha sobre rampa inclinada no campo de resposta',
          caption: 'Campo oficial de Resolução e Resposta: desenhe na figura os vetores das forças que atuam no conjunto.',
        },
        expected: tex`1) Diagrama de forças sobre o conjunto como corpo único:
- Força Peso ($\vec{P}$): vertical, apontando para baixo.
- Força Normal ($\vec{N}$): perpendicular à superfície da rampa, apontando para cima e para a direita.
- Força de Atrito Estático ($\vec{F}_{\text{at}}$): paralela ao plano da rampa, apontando rampa acima para equilibrar a componente tangencial do peso.
2) Intensidade da força de atrito estático em repouso ($m_{\text{total}} = 2\,500\text{ kg}$):
$$F_{\text{at}} = P \cdot \operatorname{sen}\theta = m \cdot g \cdot \operatorname{sen}\theta = 2\,500 \times 10 \times 0{,}6 = \mathbf{15\,000\text{ N}}$$`,
        expectedImages: [
          {
            file: 'p2-q12-solucao-forcas.svg',
            alt: 'Gabarito Oficial: Diagrama de forças atuando sobre o conjunto na rampa',
            caption: 'Critério oficial VUNESP: representação dos vetores Atrito (rampa acima), Normal (perpendicular) e Peso (vertical para baixo).',
          },
        ],
        criteria: [
          { points: 1, text: 'Desenha os vetores de forças atuantes: Peso (vertical para baixo), Normal (perpendicular à rampa) e Atrito (paralelo rampa acima).' },
          { points: 1, text: 'Calcula a intensidade da força de atrito: Fat = P · sen θ = 15 000 N.' },
        ],
      },
    ],
  }),

  d({
    n: 13,
    subject: 'Física',
    content: 'Termodinâmica: ciclo termodinâmico de gás ideal, temperatura e trabalho',
    difficulty: 'Média',
    statement: `Analise o diagrama que representa o ciclo de transformações sofridas por um gás ideal em uma máquina térmica. Sabe-se que no ponto C a temperatura do gás é de 800 K.`,
    visuals: [{ file: 'p2-q13-diagrama-pv.svg', alt: 'Diagrama P x V do ciclo termodinâmico A -> B -> C -> A' }],
    parts: [
      {
        id: 'a',
        prompt: 'Qual é a temperatura do gás no ponto A, em graus Celsius?',
        expected: tex`No diagrama $P \times V$, os pontos $A$ e $C$ encontram-se sobre o mesmo volume isocórico $V_A = V_C = 0{,}5 \times 10^{-3}\text{ m}^3$.
Pressões nos pontos: $P_A = 8 \times 10^5\text{ Pa}$ e $P_C = 2 \times 10^5\text{ Pa}$, com $T_C = 800\text{ K}$.
Pela lei dos gases ideais a volume constante:
$$\frac{P_A}{T_A} = \frac{P_C}{T_C} \implies \frac{8 \times 10^5}{T_A} = \frac{2 \times 10^5}{800} \implies T_A = \frac{8 \times 800}{2} = 3\,200\text{ K}$$
Convertendo para graus Celsius:
$$t_A = T_A - 273 = 3\,200 - 273 = \mathbf{2\,927{^\circ}\text{C}}$$`,
        criteria: [
          { points: 1, text: 'Calcula a temperatura absoluta no ponto A: TA = 3 200 K.' },
          { points: 1, text: 'Converte corretamente para graus Celsius: tA = 2 927 ºC (unidade obrigatória).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Qual será a variação da energia interna do gás ao longo do ciclo completo A → B → C → A? Calcule o valor absoluto do trabalho realizado na compressão do gás.',
        expected: tex`1) Variação da energia interna no ciclo completo:
Como a energia interna $U$ é uma função de estado e o ciclo termodinâmico é fechado ($A \to B \to C \to A$), o estado final coincide com o inicial:
$$\mathbf{\Delta U_{\text{ciclo}} = 0\text{ J}}$$
2) Trabalho realizado na compressão do gás:
A etapa de compressão (diminuição de volume de $2{,}5 \times 10^{-3}\text{ m}^3$ para $0{,}5 \times 10^{-3}\text{ m}^3$) é a transformação isobárica $B \to C$ com pressão constante $P = 2 \times 10^5\text{ Pa}$.
$$|W_{\text{comp}}| = P \cdot |\Delta V| = 2 \times 10^5 \cdot (2{,}5 - 0{,}5) \times 10^{-3} = 2 \times 10^5 \times 2{,}0 \times 10^{-3} = \mathbf{400\text{ J}}$$`,
        criteria: [
          { points: 1, text: 'Indica que a variação de energia interna no ciclo fechado é nula: ΔU = 0.' },
          { points: 1, text: 'Calcula o valor absoluto do trabalho na compressão isobárica: W = 400 J (unidade obrigatória).' },
        ],
      },
    ],
  }),

  d({
    n: 14,
    subject: 'Física',
    content: 'Óptica geométrica: refração da luz, lei de Snell e reflexão interna total',
    difficulty: 'Média',
    statement: `Três blocos em formato de paralelepípedo retângulo, numerados de 1 a 3, são empilhados conforme mostra a figura. Os blocos são feitos de substâncias transparentes, de índices de refração absolutos n1, n2 e n3, respectivamente. A figura mostra uma visão lateral desse empilhamento, uma malha quadriculada para referência e a trajetória de um raio de luz monocromática que segue paralela ao plano das faces exibidas.`,
    visuals: [{ file: 'p2-q14-malha-blocos.svg', alt: 'Trajetória do raio de luz atravessando a malha dos blocos 1, 2 e 3' }],
    parts: [
      {
        id: 'a',
        prompt: 'Sabendo que o índice de refração absoluto do meio 1 vale 1,5 e que a velocidade de propagação da luz no vácuo é c = 3 × 108 m/s, determine a velocidade da luz no meio 1 e o índice de refração do meio 2.',
        expected: tex`1) Velocidade da luz no meio 1 ($n_1 = 1{,}5$ e $c = 3 \times 10^8\text{ m/s}$):
$$v_1 = \frac{c}{n_1} = \frac{3 \times 10^8}{1{,}5} = \mathbf{2 \times 10^8\text{ m/s}}$$
2) Índice de refração do meio 2:
Na malha quadriculada, na interface entre o meio 1 e o meio 2:
O raio incidente percorre 4 unidades na vertical para 3 na horizontal (hipotenusa $\sqrt{3^2 + 4^2} = 5$):
$$\operatorname{sen}\theta_1 = \frac{4}{5} = 0{,}8$$
No meio 2, o raio refratado percorre 3 unidades na vertical para 4 na horizontal:
$$\operatorname{sen}\theta_2 = \frac{3}{5} = 0{,}6$$
Aplicando a Lei de Snell:
$$n_1 \cdot \operatorname{sen}\theta_1 = n_2 \cdot \operatorname{sen}\theta_2 \implies 1{,}5 \times \frac{4}{5} = n_2 \times \frac{3}{5} \implies n_2 = \frac{1{,}5 \times 4}{3} = \mathbf{2{,}0}$$`,
        criteria: [
          { points: 1, text: 'Calcula a velocidade da luz no meio 1: v1 = 2 × 10^8 m/s.' },
          { points: 1, text: 'Calcula o índice de refração do meio 2 aplicando Snell: n2 = 2,0.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Observando o comportamento do raio de luz que, a partir do meio 2, dirige-se ao meio 3, responda se o meio 3 é mais refringente ou menos refringente que o meio 2 e, em seguida, determine o valor do índice de refração relativo do meio 3 em relação ao meio 2, n3 / n2.',
        expected: tex`1) Refringência relativa:
Ao atingir a interface com o meio 3, o raio sofre refração rasante ao longo da superfície ($\theta_3 = 90^\circ$). Como o raio se afasta da normal ao passar do meio 2 para o meio 3, o meio 3 possui menor índice de refração que o meio 2 ($n_3 < n_2$), ou seja, o meio 3 é **menos refringente** que o meio 2.
2) Índice de refração relativo $\frac{n_3}{n_2}$:
Pela Lei de Snell para a refração crítica rasante ($\operatorname{sen}\theta_2 = \frac{3}{5} = 0{,}6$ e $\theta_3 = 90^\circ$):
$$n_2 \cdot \operatorname{sen}\theta_2 = n_3 \cdot \operatorname{sen} 90^\circ \implies \frac{n_3}{n_2} = \frac{\operatorname{sen}\theta_2}{\operatorname{sen} 90^\circ} = \frac{0{,}6}{1} = \mathbf{0{,}6}$$`,
        criteria: [
          { points: 1, text: 'Conclui que o meio 3 é menos refringente que o meio 2 (n3 < n2).' },
          { points: 1, text: 'Determina a razão n3/n2 = 3/5 = 0,6.' },
        ],
      },
    ],
  }),

  d({
    n: 15,
    subject: 'Física',
    content: 'Eletromagnetismo: circuitos elétricos, leis de Ohm e campo magnético no centro de espira circular',
    difficulty: 'Média',
    statement: `Os terminais A e B de uma espira circular estão conectados a um circuito elétrico capaz de fornecer dois valores distintos de corrente elétrica. Os resistores do circuito são ôhmicos, e o gerador, os fios de ligação, o amperímetro e a chave são ideais. A figura mostra a montagem desse circuito, com a chave aberta.\n\nQuando a chave é mantida aberta, o amperímetro indica a passagem de uma corrente elétrica de 6 A.`,
    visuals: [
      { file: 'p2-q15-circuito-espira.svg', alt: 'Circuito elétrico com chave Ch, resistores de 30 e 60 ohms e espira circular' },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Determine a diferença de potencial U do gerador e, em seguida, a intensidade da corrente elétrica que passa pelo amperímetro quando a chave está fechada.',
        expected: tex`1) Diferença de potencial $U$ do gerador com a chave aberta:
Com a chave aberta, apenas o ramo com o resistor de $60\ \Omega$ está em circuito:
$$U = R \cdot i = 60 \times 6 = \mathbf{360\text{ V}}$$
2) Corrente com a chave fechada:
Ao fechar a chave, o resistor de $30\ \Omega$ é colocado em paralelo com o de $60\ \Omega$:
$$R_{\text{eq}} = \frac{30 \times 60}{30 + 60} = \frac{1\,800}{90} = 20\ \Omega$$
A nova corrente medida pelo amperímetro é:
$$i' = \frac{U}{R_{\text{eq}}} = \frac{360}{20} = \mathbf{18\text{ A}}$$`,
        criteria: [
          { points: 1, text: 'Determina a ddp do gerador: U = 360 V.' },
          { points: 1, text: 'Calcula a corrente com a chave fechada: i = 18 A.' },
        ],
      },
      {
        id: 'b',
        prompt: 'A espira tem diâmetro de 4 × 10– 2 m e a permeabilidade magnética do meio que a envolve vale 1,2 × 10– 6 T ⋅ m/A. Para a circunstância em que a chave está aberta, indique, na figura presente no campo de Resolução e Resposta, a direção e o sentido do vetor campo magnético no centro da espira AB e calcule a intensidade desse campo magnético no centro dessa espira.',
        responseTemplate: {
          file: 'p2-q15-espira-resposta.svg',
          alt: 'Espira circular com terminais A e B no campo de resposta',
          caption: 'Campo oficial de Resolução e Resposta: indique na figura a direção e o sentido do vetor campo magnético.',
        },
        expected: tex`1) Direção e sentido do vetor campo magnético:
Com a corrente circulando no sentido anti-horário pela espira, pela regra da mão direita, o vetor campo magnético $\vec{B}$ no centro da espira é perpendicular ao plano da espira (plano da página) com sentido **saindo da página** (indicado por $\odot$).
2) Intensidade do campo magnético ($D = 4 \times 10^{-2}\text{ m} \implies R = 2 \times 10^{-2}\text{ m}$, $\mu = 1{,}2 \times 10^{-6}\text{ T}\cdot\text{m/A}$, $i = 6\text{ A}$):
$$B = \frac{\mu \cdot i}{2 \cdot R} = \frac{\mu \cdot i}{D} = \frac{1{,}2 \times 10^{-6} \times 6}{4 \times 10^{-2}} = \frac{7{,}2 \times 10^{-6}}{4 \times 10^{-2}} = \mathbf{1{,}8 \times 10^{-4}\text{ T}}$$`,
        expectedImages: [
          {
            file: 'p2-q15-solucao-campo.svg',
            alt: 'Gabarito Oficial: Vetor campo magnético no centro da espira circular',
            caption: 'Critério oficial VUNESP: vetor perpendicular apontando para fora da página (saindo do plano da espira, representado pelo ponto no centro).',
          },
        ],
        criteria: [
          { points: 1, text: 'Indica a direção perpendicular e sentido saindo do plano da página (vetor saindo / ponto).' },
          { points: 1, text: 'Calcula a intensidade do campo magnético no centro da espira: B = 1,8 × 10^-4 T.' },
        ],
      },
    ],
  }),

  // ==========================================
  // MATEMÁTICA (QUESTÕES 16 A 20)
  // ==========================================
  d({
    n: 16,
    subject: 'Matemática',
    content: 'Estatística e matemática financeira: média ponderada e economia de custos hospitalares',
    difficulty: 'Média',
    statement: `Aprovado pela Anvisa, capacete reduz internações em UTI por covid-19 em 60%\n\nCriado no início de abril como alternativa de tratamento de pacientes com covid-19, um capacete especial pode diminuir as mortes em decorrência da doença no Brasil. De acordo com os testes clínicos, o Elmo, criado no Ceará, reduz em 60% a necessidade de internação na UTI de pacientes com covid-19. O projeto já foi aprovado pela Agência Nacional de Vigilância Sanitária (Anvisa), o que permite a comercialização e produção do Elmo em escala industrial.\n\n(Daniel Rocha. https://noticias.uol.com.br, 07.11.2020. Adaptado.)\n\nEstimativa de custos operacionais dos leitos de UTI adulto em consequência da covid-19\nUma pergunta que tem preocupado os gestores da rede hospitalar brasileira é quanto custará o tratamento da covid-19, em especial dos leitos de UTI adulto. Um estudo com 106 hospitais estimou os seguintes valores:`,
    tables: [
      {
        ariaLabel: 'Estimativa de custos operacionais dos leitos de UTI adulto por perfil hospitalar em consequência da covid-19',
        headerRows: [
          ['Perfil do hospital', 'Quantidade de hospitais', 'Custo médio de diária em uma UTI adulto'],
        ],
        rows: [
          ['Filantrópico', '35', 'R$ 1.500,00'],
          ['Organização social de saúde', '57', 'R$ 1.934,00'],
          ['Público de administração direta', '6', 'R$ 3.442,00'],
          ['Privado', '8', 'R$ 2.840,00'],
        ],
        footnotes: ['(www.drgbrasil.com.br, 13.05.2020. Adaptado.)'],
      },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a média ponderada do custo da diária em uma UTI adulto dos hospitais públicos de administração direta e dos hospitais privados, de acordo com dados da tabela.',
        expected: tex`Dados da tabela:
- Públicos de administração direta: 6 hospitais com diária média de R\$ 3.442,00;
- Privados: 8 hospitais com diária média de R\$ 2.840,00;
Total de hospitais considerados = $6 + 8 = 14$.
$$\bar{x} = \frac{6 \times 3\,442 + 8 \times 2\,840}{6 + 8} = \frac{20\,652 + 22\,720}{14} = \frac{43\,372}{14} = \mathbf{\text{R\$\ } 3\,098{,}00}$$`,
        criteria: [
          { points: 1, text: 'Monta corretamente a média ponderada: (6 · 3 442 + 8 · 2 840) / 14.' },
          { points: 1, text: 'Chega ao resultado exato: R$ 3.098,00.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Um hospital filantrópico que atende apenas pacientes adultos pretende utilizar o Elmo no tratamento da covid-19 e, com isso, projeta reduzir seu número médio de internações devido à covid-19 em UTI adulta para 28 pacientes. Segundo dados desse hospital, pacientes internados com covid-19 que não vão para a UTI adulta se recuperam e têm alta hospitalar em 7 dias, em média, ao custo médio diário de R$ 900,00, enquanto que pacientes com covid-19 destinados à UTI adulta se recuperam e têm alta hospitalar, em média, em 18 dias. Determine qual é o número médio de internações devido à covid-19 nesse hospital e quanto o hospital economizará, em reais, com a adoção do Elmo para esse grupo de pacientes.',
        expected: tex`1) Número médio total de internações $x$:
O capacete Elmo reduz as internações em UTI em 60%, restando $100\% - 60\% = 40\%$ dos pacientes destinados à UTI:
$$0{,}40 \cdot x = 28 \implies x = \frac{28}{0{,}40} = \mathbf{70\text{ pacientes}}$$
Destes 70 pacientes:
- Com Elmo: 28 vão para a UTI e $70 - 28 = 42$ recuperam-se sem necessidade de UTI.
2) Economia gerada (custo diário na UTI filantrópica = R\$ 1.500,00):
- **Custo sem Elmo** (todos os 70 pacientes vão para a UTI por 18 dias):
$$\text{Custo}_{\text{sem}} = 70 \times 18 \times 1\,500 = \text{R\$\ } 1\,890\,000{,}00$$
- **Custo com Elmo**:
28 na UTI (18 dias a R\$ 1.500,00) + 42 na enfermaria (7 dias a R\$ 900,00):
$$\text{Custo}_{\text{UTI}} = 28 \times 18 \times 1\,500 = \text{R\$\ } 756\,000{,}00$$
$$\text{Custo}_{\text{enf}} = 42 \times 7 \times 900 = \text{R\$\ } 264\,600{,}00$$
$$\text{Custo}_{\text{com}} = 756\,000 + 264\,600 = \text{R\$\ } 1\,020\,600{,}00$$
- **Economia total**:
$$\text{Economia} = 1\,890\,000 - 1\,020\,600 = \mathbf{\text{R\$\ } 869\,400{,}00}$$`,
        criteria: [
          { points: 1, text: 'Determina o número total de pacientes: 0,4 · x = 28 => x = 70.' },
          { points: 1, text: 'Calcula o valor total economizado: R$ 869.400,00.' },
        ],
      },
    ],
  }),

  d({
    n: 17,
    subject: 'Matemática',
    content: 'Geometria analítica e plana: quadrados no plano cartesiano e circunferência',
    difficulty: 'Difícil',
    statement: tex`Em um plano cartesiano de origem $A = (0, 0)$ foram desenhados os quadrados $ABCD$, $DEFG$ e $HIJD$. Sabe-se que $B = (0, 5)$, $G = (8, 0)$, $H$ pertence ao eixo das abscissas, $J$ está na intersecção de $\overline{BG}$ com $\overline{CD}$ e $\lambda$ é uma circunferência que passa por $B$, $C$ e $G$, como mostra a figura.`,
    visuals: [{ file: 'p2-q17-quadrados-circunferencia.svg', alt: 'Quadrados ABCD, DEFG, HIJD e circunferência lambda no plano cartesiano' }],
    parts: [
      {
        id: 'a',
        prompt: 'Determine as áreas dos triângulos CEF e JIB, em unidades de área do plano cartesiano.',
        expected: tex`1) Coordenadas dos pontos:
- $A = (0, 0)$, $B = (0, 5) \implies$ lado de $ABCD$ mede 5 $\implies C = (5, 5)$, $D = (5, 0)$.
- $G = (8, 0) \implies$ base do quadrado $DEFG$ sobre o eixo $x$ mede $DG = 8 - 5 = 3 \implies E = (5, 3)$ e $F = (8, 3)$.
- Triângulo $CEF$: base vertical $CE = y_C - y_E = 5 - 3 = 2$, altura horizontal $EF = x_F - x_E = 8 - 5 = 3$:
$$\text{Área}(CEF) = \frac{2 \times 3}{2} = \mathbf{3}$$
2) Ponto $J$ na intersecção da reta $BG$ com a reta vertical $CD$ ($x = 5$):
- Reta $BG$ passa por $(0, 5)$ e $(8, 0)$: $\frac{x}{8} + \frac{y}{5} = 1 \implies y = -\frac{5}{8}x + 5$.
- Para $x = 5$: $y_J = -\frac{25}{8} + 5 = \frac{15}{8} \implies J = \left(5, \frac{15}{8}\right)$.
- Como $HIJD$ é quadrado sobre o eixo $x$, seu lado mede $DJ = \frac{15}{8} \implies I = \left(5 - \frac{15}{8}, \frac{15}{8}\right) = \left(\frac{25}{8}, \frac{15}{8}\right)$.
- Triângulo $JIB$: base horizontal $IJ = \frac{15}{8}$, altura vertical $h = 5 - \frac{15}{8} = \frac{25}{8}$:
$$\text{Área}(JIB) = \frac{\frac{15}{8} \times \frac{25}{8}}{2} = \mathbf{\frac{375}{128}} \approx \mathbf{2{,}93}$$`,
        criteria: [
          { points: 1, text: 'Calcula a área do triângulo CEF igual a 3.' },
          { points: 1, text: 'Calcula a área do triângulo JIB igual a 375/128 (aprox. 2,93).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Determine as coordenadas do centro de λ e seu raio.',
        expected: tex`A circunferência $\lambda$ passa por $B(0, 5)$, $C(5, 5)$ e $G(8, 0)$.
1) Abscissa do centro $x_0$:
Como $B$ e $C$ têm a mesma ordenada $y = 5$, o centro situa-se sobre a mediatriz de $BC$:
$$x_0 = \frac{0 + 5}{2} = \mathbf{\frac{5}{2}} = 2{,}5$$
2) Ordenada do centro $y_0$:
Equidistância do centro $(2{,}5; y_0)$ aos pontos $B(0, 5)$ e $G(8, 0)$:
$$(0 - 2{,}5)^2 + (5 - y_0)^2 = (8 - 2{,}5)^2 + (0 - y_0)^2$$
$$6{,}25 + 25 - 10y_0 + y_0^2 = 30{,}25 + y_0^2 \implies 31{,}25 - 10y_0 = 30{,}25 \implies 10y_0 = 1{,}0 \implies y_0 = \mathbf{\frac{1}{10}} = 0{,}1$$
Logo, o centro é:
$$\mathbf{\left(\frac{5}{2}, \frac{1}{10}\right)} \quad \text{ou}\quad (2{,}5;\ 0{,}1)$$
3) Raio $R$:
$$R^2 = (8 - 2{,}5)^2 + (0 - 0{,}1)^2 = 5{,}5^2 + 0{,}01 = 30{,}25 + 0{,}01 = 30{,}26$$
$$R = \sqrt{30{,}26} = \mathbf{\frac{\sqrt{3026}}{10}} \approx \mathbf{5{,}50}$$`,
        criteria: [
          { points: 1, text: 'Determina as coordenadas do centro: (5/2, 1/10) ou (2,5; 0,1).' },
          { points: 1, text: 'Calcula o raio: R = √(30,26) = √3026 / 10 ≈ 5,50.' },
        ],
      },
    ],
  }),

  d({
    n: 18,
    subject: 'Matemática',
    content: 'Geometria plana e trigonometria: polígonos regulares, apótemas e distâncias entre paralelas',
    difficulty: 'Difícil',
    statement: `A figura indica uma sequência de polígonos regulares com número n par de lados, cada um medindo 2 cm. Cada polígono tem um lado sobre a reta r e o lado oposto sobre uma reta paralela a r. Estas retas paralelas a r estão indicadas por t1, t2, t3,....`,
    visuals: [{ file: 'p2-q18-poligonos-sequencia.svg', alt: 'Sequência de polígonos regulares entre a reta r e as retas paralelas t1, t2, t3' }],
    tables: [
      {
        ariaLabel: 'Tabela de valores trigonométricos para ângulos de 3,5º a 3,85º',
        headerRows: [
          ['α', '3,5º', '3,55º', '3,6º', '3,65º', '3,7º', '3,75º', '3,8º', '3,85º'],
        ],
        rows: [
          ['sen α', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
          ['cos α', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'q'],
          ['tg α', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'],
        ],
      },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a distância entre as retas t1 e t2.',
        expected: tex`A reta $r$ é a base comum.
- Polígono 1 ($n = 4$, quadrado de lado $2\text{ cm}$): a distância de $r$ até $t_1$ é a altura do quadrado, $h_1 = 2\text{ cm}$.
- Polígono 2 ($n = 6$, hexágono regular de lado $2\text{ cm}$): a distância de $r$ até $t_2$ é a distância entre lados opostos do hexágono, equivalente ao dobro da altura de um triângulo equilátero de lado 2:
$$h_2 = 2 \times \frac{2\sqrt{3}}{2} = 2\sqrt{3}\text{ cm}$$
A distância entre as retas $t_1$ e $t_2$ é a diferença entre as duas alturas:
$$d(t_1, t_2) = h_2 - h_1 = \mathbf{2\sqrt{3} - 2\text{ cm}} \quad \text{ou}\quad \mathbf{2(\sqrt{3} - 1)\text{ cm}}$$`,
        criteria: [
          { points: 1, text: 'Calcula a altura do hexágono regular: h2 = 2√3 cm.' },
          { points: 1, text: 'Calcula a distância entre t1 e t2: 2√3 - 2 cm ou 2(√3 - 1) cm.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Mantendo-se o padrão da sequência, calcule a distância entre as retas t23 e t24 em função de letras convenientemente selecionadas da tabela.',
        expected: tex`Na sequência, o $k$-ésimo polígono possui $n_k = 4 + 2(k - 1) = 2k + 2$ lados:
- Para $k = 23$: o polígono possui $n_{23} = 2(23) + 2 = 48\text{ lados}$.
- Para $k = 24$: o polígono possui $n_{24} = 2(24) + 2 = 50\text{ lados}$.

A altura de um polígono regular de $n$ lados e lado $L = 2$ entre lados opostos é igual a duas vezes o apótema $a_n$:
Decompondo em $n$ triângulos isósceles a partir do centro, o semiângulo central é $\alpha = \frac{360^\circ}{2n} = \frac{180^\circ}{n}$.
$$a_n = \frac{L / 2}{\operatorname{tg}\alpha} = \frac{1}{\operatorname{tg}\alpha} \implies h_n = 2a_n = \frac{2}{\operatorname{tg}\alpha}$$

Para $n = 48$: $\alpha = \frac{180^\circ}{48} = 3{,}75^\circ$. Na tabela, $\operatorname{tg} 3{,}75^\circ = x$ (ou $\operatorname{sen} 3{,}75^\circ = f$, $\cos 3{,}75^\circ = o$).
$$h_{23} = \frac{2}{x} = \frac{2o}{f}$$
Para $n = 50$: $\alpha = \frac{180^\circ}{50} = 3{,}60^\circ$. Na tabela, $\operatorname{tg} 3{,}60^\circ = t$ (ou $\operatorname{sen} 3{,}60^\circ = c$, $\cos 3{,}60^\circ = l$).
$$h_{24} = \frac{2}{t} = \frac{2l}{c}$$

Como $h_{24} > h_{23}$, a distância entre $t_{23}$ e $t_{24}$ é:
$$d(t_{23}, t_{24}) = \mathbf{\frac{2}{t} - \frac{2}{x}} = \mathbf{\frac{2(x - t)}{x \cdot t}} \quad \text{ou}\quad \mathbf{\frac{2l}{c} - \frac{2o}{f}}$$`,
        criteria: [
          { points: 1, text: 'Identifica os ângulos centrais α = 3,75º para n=48 e α = 3,60º para n=50.' },
          { points: 1, text: 'Apresenta a distância em função das letras da tabela: 2/t - 2/x = 2(x-t)/(x·t) ou 2l/c - 2o/f.' },
        ],
      },
    ],
  }),

  d({
    n: 19,
    subject: 'Matemática',
    content: 'Funções exponenciais e potenciação: lei de Kleiber e razões metabólicas',
    difficulty: 'Média',
    statement: tex`Um gato tem cerca de 100 vezes a massa de um rato, porém, sua taxa metabólica é, aproximadamente, 31 vezes a de um rato. Observações experimentais permitiram que, em 1932, Max Kleiber formulasse empiricamente uma lei relacionando a taxa metabólica basal $B$ de um animal, em quilocalorias por dia (kcal por dia), e sua massa $M$, em quilogramas (kg). Tal lei é dada pela fórmula $B = k \cdot M^{3/4}$, sendo $k$ uma constante real.`,
    afterTables: [
      {
        ariaLabel: 'Tabela de valores de x e suas raízes quadradas',
        headerRows: [
          ['x', '0,5', '0,5625', '0,75', '4,5', '5', '10', '10,25', '10,75', '31,623'],
        ],
        rows: [
          ['√x', '0,7071', '0,75', '0,8660', '2,1213', '2,2361', '3,1623', '3,2016', '3,2787', '5,6234'],
        ],
      },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Determine o valor de k, sabendo que a lei de Kleiber se aplica a um animal de massa igual a 16 kg e taxa metabólica basal de 600 kcal por dia.',
        expected: tex`Substituindo $M = 16\text{ kg}$ e $B = 600\text{ kcal/dia}$ na lei $B = k \cdot M^{3/4}$:
$$600 = k \cdot 16^{3/4}$$
Como $16 = 2^4$:
$$16^{3/4} = (2^4)^{3/4} = 2^3 = 8$$
$$600 = k \cdot 8 \implies k = \frac{600}{8} = \mathbf{75}$$`,
        criteria: [
          { points: 1, text: 'Substitui os dados na fórmula: 600 = k · 16^(3/4).' },
          { points: 1, text: 'Calcula 16^(3/4) = 8 e conclui k = 75.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Considere que a lei de Kleiber se aplique para um animal pequeno P e para um animal grande G, com a mesma constante real k. Sabendo que a massa de G, em kg, é 106 vezes a massa de P, calcule a razão entre as taxas metabólicas basais de G e de P, ou seja, BG / BP, utilizando os dados da tabela no cálculo final.',
        expected: tex`1) Razão entre as taxas metabólicas com $M_G = 10^6 \cdot M_P$:
$$\frac{B_G}{B_P} = \frac{k \cdot M_G^{3/4}}{k \cdot M_P^{3/4}} = \left(\frac{M_G}{M_P}\right)^{3/4} = (10^6)^{3/4} = 10^{18/4} = 10^{9/2}$$
2) Utilizando a tabela fornecida:
$$10^{9/2} = 10^{4 + 1/2} = 10^4 \cdot 10^{1/2} = 10^4 \cdot \sqrt{10}$$
Pela tabela, para $x = 10$, temos $\sqrt{10} \approx 3{,}1623$.
$$\frac{B_G}{B_P} = 10^4 \times 3{,}1623 = 10\,000 \times 3{,}1623 = \mathbf{31\,623}$$`,
        criteria: [
          { points: 1, text: 'Deduz a razão BG / BP = (10^6)^(3/4) = 10^(9/2) = 10^4 · √10.' },
          { points: 1, text: 'Utiliza √10 = 3,1623 da tabela e obtém 31 623.' },
        ],
      },
    ],
  }),

  d({
    n: 20,
    subject: 'Matemática',
    content: 'Análise combinatória e probabilidade: sorteio de cartas sem reposição e modelo hipergeométrico generalizado',
    difficulty: 'Difícil',
    statement: `Uma caixa possui n cartas, numeradas de 1 até n. Desta caixa são sorteadas, ao acaso, m cartas.`,
    parts: [
      {
        id: 'a',
        prompt: 'Para n = 10 e m = 6, qual é a probabilidade de que entre as cartas sorteadas tenha saído uma com o número 1?',
        expected: tex`Dados: $n = 10$ cartas no total e sorteio de $m = 6$ cartas sem reposição.
1) Espaço amostral total $\Omega$:
$$n(\Omega) = \binom{10}{6} = \frac{10 \times 9 \times 8 \times 7}{4 \times 3 \times 2 \times 1} = 210$$
2) Eventos favoráveis $A$ (a carta de número 1 está entre as sorteadas):
Fixando a carta 1, restam 9 cartas para escolher as outras 5 vagas:
$$n(A) = \binom{9}{5} = \frac{9 \times 8 \times 7 \times 6}{4 \times 3 \times 2 \times 1} = 126$$
3) Probabilidade:
$$P = \frac{n(A)}{n(\Omega)} = \frac{126}{210} = \mathbf{\frac{3}{5}} = \mathbf{0{,}6} = \mathbf{60\%}$$
*(Método alternativo pelo complementar: $P = 1 - \frac{\binom{9}{6}}{\binom{10}{6}} = 1 - \frac{84}{210} = 1 - \frac{2}{5} = \frac{3}{5}$).*`,
        criteria: [
          { points: 1, text: 'Determina o espaço amostral C(10,6) = 210 ou casos favoráveis C(9,5) = 126.' },
          { points: 1, text: 'Calcula a probabilidade exata: P = 126/210 = 3/5 = 60%.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Estabeleça uma fórmula que calcule a probabilidade de que, entre as m cartas sorteadas do total de n cartas, tenham saído k cartas pré-estabelecidas, com k variando de 1 até m. Apresente sua fórmula com notação de fatorial, simplificada ao máximo, e com o domínio de validade de n, m e k.',
        expected: tex`1) Dedução da probabilidade:
Dentre as $n$ cartas, fixamos um subconjunto de $k$ cartas pré-estabelecidas ($1 \le k \le m$).
Para que todas as $k$ cartas pré-estabelecidas estejam entre as $m$ sorteadas:
- Devemos selecionar as $k$ cartas fixadas: $\binom{k}{k} = 1$ maneira.
- As demais $m - k$ cartas devem ser sorteadas das restantes $n - k$ cartas da caixa: $\binom{n - k}{m - k}$ maneiras.
- Total de formas de sortear $m$ cartas de $n$: $\binom{n}{m}$.
$$P = \frac{\binom{n - k}{m - k}}{\binom{n}{m}} = \frac{\frac{(n - k)!}{(m - k)!\ [(n - k) - (m - k)]!}}{\frac{n!}{m!\ (n - m)!}} = \frac{\frac{(n - k)!}{(m - k)!\ (n - m)!}}{\frac{n!}{m!\ (n - m)!}}$$
Cancelando $(n - m)!$:
$$\mathbf{P = \frac{m!\ (n - k)!}{n!\ (m - k)!}}$$
2) Domínio de validade com $n, m, k \in \mathbb{N}$:
$$\mathbf{D = \{n, m, k \in \mathbb{N} \mid 1 \le k \le m \le n\}}$$`,
        criteria: [
          { points: 1, text: 'Deduz a fórmula simplificada em notação de fatorial: P = [m! · (n - k)!] / [n! · (m - k)!].' },
          { points: 1, text: 'Apresenta o domínio de validade completo: {n, m, k ∈ ℕ | 1 ≤ k ≤ m ≤ n}.' },
        ],
      },
    ],
  }),
];
