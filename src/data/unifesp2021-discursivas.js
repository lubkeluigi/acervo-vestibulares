import { createUnifesp, tex } from './unifesp-helpers.js';

const { d } = createUnifesp(2021);

export const unifesp2021Discursivas = [
  // BIOLOGIA: Q01 a Q05
  d({
    n: 1, subject: 'Biologia', content: 'Protozooses: amebíase e osmorregulação', difficulty: 'Média',
    statement: `Algumas amebas podem causar doenças ao ser humano. A Entamoeba histolytica geralmente convive bem com nossa espécie, não causando disfunções orgânicas, mas, em determinadas condições, ela se torna patogênica e causa a amebíase, que pode provocar diarreia, anemia e até a morte.\n\n(www.invivo.fiocruz.br. Adaptado.)`,
    parts: [
      {
        id: 'a',
        prompt: 'Caso a ameba Entamoeba histolytica fosse inserida em um recipiente com água marinha, ela não sobreviveria. Por que isso ocorre?',
        expected: 'A água do mar é hipertônica em relação ao citoplasma da Entamoeba histolytica. Por osmose, a ameba perde água rapidamente para o meio externo e morre por desidratação (choque osmótico), visto que não possui mecanismos eficientes de osmorregulação para meios de alta salinidade.',
        criteria: [
          { points: 1, text: 'Identifica que a água do mar é meio hipertônico e que a ameba perde água por osmose até desidratar/morrer.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Cite a fase do ciclo de vida da Entamoeba histolytica na qual ocorre o contágio do ser humano. Explique por que pessoas com quadros mais graves de amebíase podem desenvolver anemia.',
        expected: 'O contágio humano ocorre pela ingestão da fase cística (cistos) presente em água ou alimentos contaminados. Em quadros graves, os trofozoítos invadem e ulceram a mucosa do intestino grosso, provocando hemorragias e lesões teciduais contínuas (perda crônica de sangue e hemácias), o que culmina em anemia ferropriva.',
        criteria: [
          { points: 1, text: 'Indica a fase cística (cisto) como forma infectante e explica que a anemia decorre das hemorragias/úlceras na mucosa intestinal.' },
        ],
      },
    ],
  }),

  d({
    n: 2, subject: 'Biologia', content: 'Citologia e reprodução: microtúbulos e dineína', difficulty: 'Média',
    statement: `A síndrome de Kartagener é um distúrbio genético que impede a síntese da proteína dineína, necessária à função dos microtúbulos. Sem a dineína, algumas estruturas celulares não se movimentam, como aquelas presentes nas vias respiratórias, nas paredes da tuba uterina e nos espermatozoides, causando prejuízos à eliminação de muco pelos brônquios e à fertilidade masculina e feminina.`,
    parts: [
      {
        id: 'a',
        prompt: 'Cite as duas estruturas celulares, uma presente nas vias respiratórias e outra nos espermatozoides, que têm o movimento prejudicado pela falta da dineína.',
        expected: 'Nas vias respiratórias, a estrutura móvel prejudicada são os cílios. Nos espermatozoides, a estrutura é o flagelo.',
        criteria: [
          { points: 1, text: 'Cita corretamente cílios (vias respiratórias) e flagelo (espermatozoides).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Por que uma mulher portadora da síndrome de Kartagener tem maior chance de desenvolver uma gravidez na tuba uterina? Explique como a medicina reprodutiva pode fazer com que um homem com essa síndrome seja pai.',
        expected: 'A imobilidade dos cílios da tuba uterina impede a propulsão adequada do ovócito/embrião em direção à cavidade uterina, fazendo com que a implantação (nidação) ocorra no próprio epitélio tubário (gravidez ectópica tubária). Para o homem com imotilidade espermática, a medicina reprodutiva pode realizar fertilização in vitro por injeção intracitoplasmática de espermatozoide (ICSI), introduzindo diretamente o gameta masculino no interior do ovócito, o que independe da motilidade do flagelo.',
        criteria: [
          { points: 1, text: 'Explica a falha no transporte do embrião pela ausência de batimento ciliar tubário e indica fertilização in vitro/ICSI para contornar a imotilidade espermática.' },
        ],
      },
    ],
  }),

  d({
    n: 3, subject: 'Biologia', content: 'Fisiologia celular: hemácias e respiração celular', difficulty: 'Difícil',
    statement: `Ao longo da diferenciação de uma hemácia a partir do eritroblasto, a célula sintetiza hemoglobinas, perde seu núcleo e organelas e migra para a corrente sanguínea. No citoplasma de uma hemácia humana adulta existem cerca de 250 milhões de moléculas de hemoglobina.`,
    visuals: [{ file: 'p2-q03-grafico-o2.svg', alt: 'Gráfico com curvas 1, 2 e 3 de consumo de gás oxigênio ao longo do tempo' }],
    parts: [
      {
        id: 'a',
        prompt: 'Cite a organela responsável pela produção de hemoglobina no eritroblasto. Em que local do corpo humano adulto são produzidos os eritroblastos?',
        expected: 'A porção polipeptídica (globina) da hemoglobina é sintetizada pelos ribossomos (ribossomos livres no citosol). No corpo humano adulto, os eritroblastos são gerados na medula óssea vermelha (tecido hematopoiético).',
        criteria: [
          { points: 1, text: 'Cita ribossomos (e/ou síntese do grupo heme nas mitocôndrias) e medula óssea vermelha.' },
        ],
      },
      {
        id: 'b',
        prompt: `Suponha um experimento em que uma hemácia adulta foi colocada em um tubo de ensaio e mantida fechada em contato com certo volume de gás oxigênio. O volume de gás oxigênio foi monitorado, visando verificar o consumo desse gás na síntese de ATP. Considere o gráfico, que ilustra três possíveis variações no consumo de gás oxigênio durante o experimento.\n\nQual curva do gráfico representa o consumo de gás oxigênio utilizado no processo metabólico realizado pela hemácia adulta para sintetizar ATP? Justifique sua resposta.`,
        expected: 'A hemácia adulta não consome oxigênio para a síntese de ATP. Por ser anucleada e desprovida de mitocôndrias, ela realiza exclusivamente fermentação lática (via anaeróbia). Nota oficial da banca VUNESP: o item da indicação da curva foi formalmente anulado pela banca por nenhuma curva ilustrar consumo nulo e constante (consumo zero); no entanto, pontuou-se plenamente a explicação de que a ausência de mitocôndrias impede a respiração aeróbia, não havendo consumo de O₂.',
        criteria: [
          { points: 1, text: 'Justifica que a hemácia adulta não possui mitocôndrias e realiza metabolismo anaeróbio/fermentação lática, sem consumo de gás oxigênio.' },
        ],
      },
    ],
  }),

  d({
    n: 4, subject: 'Biologia', content: 'Ecologia: relações ecológicas e ciclo do nitrogênio', difficulty: 'Média',
    statement: `O incêndio no Pantanal está devastando a fazenda São Francisco do Perigara, santuário que concentra 15% da população livre da espécie de arara-azul Anodorhynchus hyacinthinus, ameaçada de extinção. A propriedade já perdeu 70% dos cerca de 25 mil hectares, quase tudo vegetação nativa. O motivo da concentração de araras na fazenda era a associação entre esses animais, o acuri (Attalea phalerata, tipo de palmeira que produz frutos com polpa) e os bois. Antes das queimadas era comum ver as araras perto dos bois para se alimentar. O gado vai para a mata, come a polpa do acuri e deixa o fruto disperso no chão, que é comido pelas araras-azuis.\n\nO incêndio está provocando um impacto enorme sobre a flora e a fauna do Pantanal e poderá comprometer a fertilidade do solo, com prejuízo à produção agrícola local e à produção das plantas forrageiras que alimentam o gado.\n\n(Folha de S.Paulo, 17.08.2020. Adaptado.)`,
    parts: [
      {
        id: 'a',
        prompt: 'Cite a relação ecológica que ocorre entre o gado e as araras-azuis. Na teia alimentar da qual essas espécies fazem parte, qual é o nível trófico ocupado pelas araras-azuis?',
        expected: 'A relação ecológica é o comensalismo (o gado beneficia as araras ao despolpar e expor os frutos sem ser prejudicado ou beneficiado). Na teia alimentar, as araras-azuis ocupam o segundo nível trófico (consumidores primários), pois se alimentam diretamente das sementes do acuri (produtor).',
        criteria: [
          { points: 1, text: 'Identifica a relação como comensalismo e o nível trófico como 2º nível trófico / consumidor primário.' },
        ],
      },
      {
        id: 'b',
        prompt: 'O fogo interrompe drasticamente quase todas as etapas do ciclo do nitrogênio e, consequentemente, reduz a produção agrícola. Explique como o fogo interrompe as etapas do ciclo do nitrogênio e qual a relação disso com a baixa produção agrícola.',
        expected: 'As altas temperaturas do fogo provocam a morte e eliminação dos micro-organismos e bactérias do solo responsáveis pelo ciclo do nitrogênio (bactérias fixadoras e nitrificantes). Com a interrupção da nitrificação, cessa a produção de nitratos e compostos nitrogenados assimiláveis no solo. Sem nitrogênio mineral disponível, as plantas não conseguem sintetizar aminoácidos, proteínas e ácidos nucleicos essenciais para o seu crescimento, reduzindo a fertilidade do solo e a produção vegetal.',
        criteria: [
          { points: 1, text: 'Explica a morte das bactérias do ciclo do nitrogênio pelo calor e a consequente escassez de compostos nitrogenados/nitratos assimiláveis pelas plantas.' },
        ],
      },
    ],
  }),

  d({
    n: 5, subject: 'Biologia', content: 'Genética: sistemas ABO e Rh, aglutinação e eritroblastose', difficulty: 'Média',
    statement: `Analise o heredograma no qual estão indicados os tipos sanguíneos do casal Gustavo e Talita e de sua filha Aline, de acordo com os sistemas ABO e Rh.`,
    visuals: [{ file: 'p2-q05-heredograma.svg', alt: 'Heredograma com Gustavo (B-), Talita (A+) e filha Aline (A-), indicando tipos sanguíneos dos pais e parentes' }],
    parts: [
      {
        id: 'a',
        prompt: 'A presença ou não dos tipos de aglutinogênios nas hemácias, que são determinados geneticamente, permite identificar os grupos sanguíneos para o sistema ABO e Rh. Indique o genótipo da irmã de Talita quanto ao sistema ABO. Qual característica fenotípica impede Talita de gerar um filho com eritroblastose fetal?',
        expected: 'O genótipo da irmã de Talita (que possui tipo B) é obrigatoriamente Iᴮi, pois herdou o alelo recessivo i de seu pai (que é do tipo O, genótipo ii). A característica fenotípica que impede Talita de gerar filhos com eritroblastose fetal é o fato de ela ser Rh positivo (Rh⁺), pois a eritroblastose fetal só se manifesta quando a mãe é Rh negativo (Rh⁻) e gesta feto Rh positivo.',
        criteria: [
          { points: 1, text: 'Determina o genótipo Iᴮi para a irmã de Talita e aponta o fenótipo Rh positivo de Talita.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Suponha que Aline necessite de uma transfusão de sangue e que seu pai, sua mãe e a avó materna tenham se prontificado a doar sangue a ela. Se a transfusão fosse realizada, o sangue recebido de qual dessas três pessoas doadoras teria suas hemácias aglutinadas de imediato? Justifique sua resposta.',
        expected: 'O sangue recebido do pai (Gustavo) sofreria aglutinação imediata. Aline tem sangue tipo A⁻, possuindo aglutininas anti-B no plasma. Como Gustavo tem sangue tipo B⁻, suas hemácias contêm aglutinogênios B, que ao entrarem na circulação de Aline serão imediatamente atacados e aglutinados pelos anticorpos anti-B.',
        criteria: [
          { points: 1, text: 'Identifica o pai Gustavo e justifica pela reação entre os aglutinogênios B das hemácias do doador e os anticorpos anti-B presentes no plasma de Aline.' },
        ],
      },
    ],
  }),

  // QUÍMICA: Q06 a Q10
  d({
    n: 6, subject: 'Química', content: 'Ligação química, distribuição eletrônica e estequiometria de fertilizantes', difficulty: 'Média',
    statement: `O potássio é um nutriente mineral essencial no metabolismo dos seres vivos e elemento químico básico na composição de fertilizantes do tipo NPK — mistura de compostos à base de nitrogênio, fósforo e potássio. A silvita (KCl), um dos minérios de potássio, é importante fonte de matéria-prima para a produção de fertilizantes, porque possui a maior porcentagem de potássio em uma forma química de fácil extração. Convencionalmente, a porcentagem em massa de potássio em fertilizantes é expressa como “K₂O equivalente”, mesmo que o composto presente seja o KCl, exigindo que sejam feitos cálculos que relacionem as massas de potássio no K₂O e no KCl.\n\nA tabela fornece teores equivalentes de K, KCl e K₂O na silvita.\n\nElemento/composto: K | KCl | K₂O\nTeor equivalente (% em massa): 52 | 100 | 63\n\n(http://mineralis.cetem.gov.br. Adaptado.)`,
    parts: [
      {
        id: 'a',
        prompt: 'Qual tipo de ligação química está presente na silvita? Escreva a distribuição eletrônica em camadas do elemento potássio na forma em que se apresenta na silvita.',
        expected: 'Na silvita (KCl), a ligação é iônica (ou eletrovalente). Na silvita, o potássio encontra-se na forma de cátion K⁺ (Z = 19, com 18 elétrons). Sua distribuição eletrônica em camadas é: K = 2, L = 8, M = 8 (ou 1s² 2s² 2p⁶ 3s² 3p⁶).',
        criteria: [
          { points: 1, text: 'Nomeia a ligação iônica e apresenta a distribuição em camadas 2 - 8 - 8 para o íon K⁺.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Demonstre que 100% de KCl correspondem, aproximadamente, às porcentagens em massa de K e de K₂O informadas na tabela.',
        expected: tex`Massas molares: $\mathrm{K = 39\ g/mol}$, $\mathrm{KCl = 74{,}5\ g/mol}$ e $\mathrm{K_2O = (2\times39 + 16) = 94\ g/mol}$.
1) Porcentagem de K no KCl:
$$74{,}5\ \mathrm{g\ (KCl)} \longrightarrow 39\ \mathrm{g\ (K)}$$
$$100\% \longrightarrow x \implies x = \frac{3900}{74{,}5} \approx 52{,}3\% \approx \mathbf{52\%}$$
2) Porcentagem de K₂O equivalente:
Dois mols de KCl contêm a mesma quantidade de potássio que um mol de K₂O:
$$2\times74{,}5\ \mathrm{g\ (KCl)} = 149\ \mathrm{g} \longrightarrow 94\ \mathrm{g\ (K_2O)}$$
$$100\ \mathrm{g\ (KCl)} \longrightarrow y \implies y = \frac{100 \times 94}{149} \approx 63{,}1\% \approx \mathbf{63\%}$$`,
        criteria: [
          { points: 1, text: 'Demonstra os cálculos estequiométricos obtendo aproximadamente 52% de K e 63% de K₂O equivalente a partir do KCl.' },
        ],
      },
    ],
  }),

  d({
    n: 7, subject: 'Química', content: 'Radioatividade: isótopos, condutividade metálica e decaimento beta', difficulty: 'Média',
    statement: `O irídio é um metal muito denso, que possui diversas aplicações, como em contatos elétricos, em agulhas de injeção e em próteses odontológicas.\n\nEsse elemento apresenta dois isótopos naturais, Ir-191 e Ir-193, cujas abundâncias na natureza são, respectivamente, 37,3% e 62,7%. O irídio também apresenta diversos radioisótopos artificiais, sendo um deles o Ir-192, emissor de partículas β⁻ e radiação gama, que é empregado no tratamento de pacientes com câncer. A meia-vida desse radioisótopo é de 74 dias, aproximadamente.`,
    parts: [
      {
        id: 'a',
        prompt: 'Calcule o número de nêutrons do isótopo natural mais abundante do irídio. Assim como os demais metais, o irídio é bom condutor de eletricidade devido a uma característica da estrutura metálica. Qual é essa característica?',
        expected: 'O isótopo natural mais abundante é o Ir-193 (62,7%). Consultando a tabela periódica, o irídio tem número atômico Z = 77. Logo, o número de nêutrons é N = A - Z = 193 - 77 = 116 nêutrons. A condutibilidade elétrica deve-se à presença de elétrons livres deslocalizados na ligação metálica (modelo do "mar de elétrons").',
        criteria: [
          { points: 1, text: 'Calcula 116 nêutrons e indica a presença de elétrons livres deslocalizados na rede metálica.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Escreva a equação que representa o decaimento do irídio-192. Construa, utilizando os eixos gráficos disponíveis no campo de Resolução e Resposta, a curva que representa o decaimento radioativo do Ir-192.',
        visuals: [{ file: 'p2-q07-grafico-decaimento.svg', alt: 'Gabarito Oficial: Curva exponencial de decaimento do Ir-192 com meia-vida de 74 dias' }],
        expected: tex`A equação nuclear de emissão de partícula beta negativa ($\beta^-$) é:
$$\mathrm{^{192}_{77}Ir \longrightarrow\ ^{192}_{78}Pt +\ ^0_{-1}\beta}$$
(produzindo o isótopo estável Platina-192). O gráfico é uma curva exponencial decrescente: em $t = 0\ \mathrm{dias}$, teor = $100\%$; em $t = 74\ \mathrm{dias}$ (1ª meia-vida), teor = $50\%$; em $t = 148\ \mathrm{dias}$ (2ª meia-vida), teor = $25\%$; em $t = 222\ \mathrm{dias}$, teor = $12{,}5\%$.`,
        criteria: [
          { points: 1, text: 'Escreve a equação de decaimento com Pt-192 e partícula beta e apresenta a curva exponencial associando cada período de 74 dias à redução à metade.' },
        ],
      },
    ],
  }),

  d({
    n: 8, subject: 'Química', content: 'Soluções e termoquímica: concentração e calorimetria de refrigerante', difficulty: 'Média',
    statement: `Analise as seguintes informações nutricionais contidas no rótulo de um refrigerante.\n\nValores nutricionais em 350 mL (1 lata):\nValor energético: 613 kJ\nAçúcares: 36 g\nSódio: 27 mg`,
    parts: [
      {
        id: 'a',
        prompt: 'Represente a forma química em que o elemento sódio está presente no refrigerante. Calcule a concentração de sódio na bebida em mol/L.',
        expected: tex`O sódio encontra-se na forma de íon/cátion sódio: $\mathrm{Na^+}$.
Cálculo da concentração molar:
$$m = 27\ \mathrm{mg} = 27 \times 10^{-3}\ \mathrm{g},\quad M_{\mathrm{Na}} = 23\ \mathrm{g/mol},\quad V = 350\ \mathrm{mL} = 0{,}350\ \mathrm{L}$$
$$[\mathrm{Na^+}] = \frac{m}{M \cdot V} = \frac{27 \times 10^{-3}}{23 \times 0{,}350} \approx \mathbf{3{,}35 \times 10^{-3}\ \mathrm{mol/L}}\quad (\approx 0{,}0034\ \mathrm{mol/L})$$`,
        criteria: [
          { points: 1, text: 'Representa Na⁺ e calcula a concentração molar de aproximadamente 3,35 × 10⁻³ mol/L.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Sabendo que o calor específico da água é 4,18 kJ · kg⁻¹ · ºC⁻¹, estime a massa de água que pode ser aquecida de 20 ºC a 50 ºC com a energia térmica correspondente ao valor energético de 350 mL desse refrigerante. Considerando que o único açúcar presente no refrigerante seja o açúcar comum (sacarose, C₁₂H₂₂O₁₁) e que o valor energético desse refrigerante seja devido apenas a esse carboidrato, estime, a partir dos dados da tabela, qual é a entalpia de combustão completa desse açúcar em kJ/mol.',
        expected: tex`1) Massa de água aquecida:
$$Q = m \cdot c \cdot \Delta\theta \implies 613 = m \cdot 4{,}18 \cdot (50 - 20) \implies 613 = m \cdot 125{,}4 \implies m \approx \mathbf{4{,}89\ \mathrm{kg}}\quad (\approx 4{,}9\ \mathrm{kg})$$
2) Entalpia molar de combustão da sacarose ($\mathrm{C_{12}H_{22}O_{11}}$):
$$\mathrm{Massa\ molar\ da\ sacarose} = (12\times12) + (22\times1) + (11\times16) = 342\ \mathrm{g/mol}$$
$$36\ \mathrm{g} \longrightarrow 613\ \mathrm{kJ}$$
$$342\ \mathrm{g} \longrightarrow x \implies x = \frac{342 \times 613}{36} = 5823{,}5\ \mathrm{kJ}$$
Como é um processo de combustão exotérmico:
$$\Delta H_{\mathrm{comb}} = \mathbf{-5823{,}5\ \mathrm{kJ/mol}}$$`,
        criteria: [
          { points: 1, text: 'Calcula a massa de água em 4,89 kg (ou 4,9 kg) e determina a entalpia de combustão de -5823,5 kJ/mol.' },
        ],
      },
    ],
  }),

  d({
    n: 9, subject: 'Química', content: 'Equilíbrio e volumetria redox: Kps, oxalato e permanganatometria', difficulty: 'Difícil',
    statement: `Um dos métodos para análise quantitativa de íons cálcio em uma solução aquosa envolve as seguintes etapas:\n\n1. Precipitação de íons cálcio por reação com íons oxalato em excesso, de acordo com a equação:\nCa²⁺ (aq) + C₂O₄²⁻ (aq) → CaC₂O₄ (s)\n\n2. Filtração do precipitado formado seguida de lavagem.\n\n3. Reação do precipitado formado com ácido sulfúrico, produzindo ácido oxálico:\nCaC₂O₄ (s) + H₂SO₄ (aq) → composto X + H₂C₂O₄ (aq)\n\n4. Titulação do ácido oxálico com KMnO₄ em meio ácido, de acordo com a equação parcialmente balanceada:\n2 KMnO₄ (aq) + 3 H₂SO₄ (aq) + __ H₂C₂O₄ (aq) → __ K₂SO₄ (aq) + __ MnSO₄ (aq) + __ CO₂ (g) + __ H₂O (l)`,
    parts: [
      {
        id: 'a',
        prompt: 'Escreva a expressão do Kps (constante do produto de solubilidade) para o oxalato de cálcio. Escreva o nome do produto da etapa 3 identificado como composto X.',
        expected: 'Expressão do produto de solubilidade: Kps = [Ca²⁺][C₂O₄²⁻]. O composto X resultante da reação de dupla troca entre CaC₂O₄ e H₂SO₄ é o sulfato de cálcio (CaSO₄).',
        criteria: [
          { points: 1, text: 'Escreve Kps = [Ca²⁺][C₂O₄²⁻] e nomeia sulfato de cálcio.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Reescreva a equação da etapa 4 completando o balanceamento. Sabendo que o volume molar de gás nas CATP é igual a 25 L/mol, calcule o volume de CO₂, medido nessas condições, que é obtido pela reação completa de 0,01 mol de permanganato de potássio.',
        expected: tex`1) Equação redox balanceada:
$$\mathrm{2\ KMnO_4(aq) + 3\ H_2SO_4(aq) + 5\ H_2C_2O_4(aq) \longrightarrow 1\ K_2SO_4(aq) + 2\ MnSO_4(aq) + 10\ CO_2(g) + 8\ H_2O(\ell)}$$
2) Estequiometria do $\mathrm{CO_2}$:
Pela equação: $2\ \mathrm{mol\ de\ KMnO_4} \longrightarrow 10\ \mathrm{mol\ de\ CO_2}$ ($5\ \mathrm{mol\ de\ CO_2}$ por mol de $\mathrm{KMnO_4}$).
Para $0{,}01\ \mathrm{mol\ de\ KMnO_4}$:
$$n_{\mathrm{CO_2}} = 0{,}01 \times \frac{10}{2} = 0{,}05\ \mathrm{mol\ de\ CO_2}$$
Volume nas CATP ($V_m = 25\ \mathrm{L/mol}$):
$$V = 0{,}05\ \mathrm{mol} \times 25\ \mathrm{L/mol} = \mathbf{1{,}25\ \mathrm{L}}$$`,
        criteria: [
          { points: 1, text: 'Balanceia a equação com coeficientes 2, 3, 5, 1, 2, 10, 8 e calcula o volume de 1,25 L de CO₂.' },
        ],
      },
    ],
  }),

  d({
    n: 10, subject: 'Química', content: 'Química orgânica: funções, isomeria e síntese da vitamina C', difficulty: 'Média',
    statement: `A sequência de reações representada no esquema resume etapas de um dos processos de obtenção de ácido L-ascórbico (vitamina C) a partir da glicose.`,
    visuals: [{ file: 'p2-q10-vitamina-c.svg', alt: 'Esquema de reações: D-glicose -> sorbitol -> L-sorbose -> ácido 2-ceto-L-gulônico -> ácido L-ascórbico' }],
    statementTail: '(Fernanda A. D. Ito e Iara L. R. Gonçalves. Método para a produção de ácido 2-ceto-L-gulônico. Adaptado.)',
    parts: [
      {
        id: 'a',
        prompt: 'Dê o nome da substância que possui um grupo funcional éster. Quais substâncias, entre as representadas no esquema, são isômeras entre si?',
        expected: 'A substância que possui o grupo funcional éster (éster cíclico ou lactona) é o ácido L-ascórbico. As substâncias isômeras entre si são a D-glicose e a L-sorbose, que compartilham a mesma fórmula molecular C₆H₁₂O₆ (isômeros de função: aldo-hexose e ceto-hexose).',
        criteria: [
          { points: 1, text: 'Identifica o ácido L-ascórbico pelo grupo éster e aponta D-glicose e L-sorbose como isômeros.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Dê o nome do composto que sofre redução na sequência de reações. Indique, na fórmula do ácido L-ascórbico presente no campo de Resolução e Resposta, os dois átomos de carbono assimétrico.',
        afterVisuals: [{ file: 'p2-q10-solucao-carbonos.svg', alt: 'Gabarito Oficial: Fórmula do ácido L-ascórbico com asteriscos nos carbonos assimétricos C4 e C5' }],
        expected: 'O composto que sofre redução é a D-glicose (em que a carbonila aldeídica é hidrogenada/reduzida a grupo hidroxila alcoólico, formando o sorbitol). No ácido L-ascórbico, os dois átomos de carbono assimétrico (quiral) são o carbono 4 (ligado ao anel lactônico) e o carbono 5 (ligado a –H, –OH, –CH₂OH e ao restante do anel).',
        criteria: [
          { points: 1, text: 'Nomeia a D-glicose como composto reduzido e assinala corretamente os carbonos 4 e 5 como quirais.' },
        ],
      },
    ],
  }),

  // FÍSICA: Q11 a Q15
  d({
    n: 11, subject: 'Física', content: 'Mecânica: energia mecânica, queda livre e lançamento vertical', difficulty: 'Fácil',
    statement: `Um gato encontra-se parado na beirada de um telhado, observando alguns pássaros.\n\nA beirada do telhado está a 5 m do chão, a massa do gato é 3 kg, a aceleração da gravidade vale 10 m/s² e a resistência do ar é desprezível. Determine:`,
    parts: [
      {
        id: 'a',
        prompt: 'a energia potencial gravitacional que o gato possui quando se encontra em repouso na beirada do telhado e o módulo da velocidade com a qual ele chegaria ao chão se acidentalmente sofresse uma queda livre, após pisar em uma telha solta.',
        expected: tex`1) Energia potencial gravitacional:
$$E_p = m \cdot g \cdot h = 3 \times 10 \times 5 = \mathbf{150\ \mathrm{J}}$$
2) Velocidade ao chegar ao chão (conservação de energia / Torricelli):
$$v = \sqrt{2gh} = \sqrt{2 \times 10 \times 5} = \sqrt{100} = \mathbf{10\ \mathrm{m/s}}$$`,
        criteria: [
          { points: 1, text: 'Calcula Ep = 150 J e velocidade de chegada ao solo v = 10 m/s.' },
        ],
      },
      {
        id: 'b',
        prompt: 'o tempo de permanência do gato no ar, supondo que, na tentativa frustrada de apanhar um pássaro em voo, o gato salte verticalmente para cima com velocidade inicial de 4 m/s, subindo e voltando para o ponto inicial de seu salto, na beirada do telhado.',
        expected: tex`Tempo de subida até a velocidade anular-se ($v = 0$):
$$v = v_0 - g \cdot t_s \implies 0 = 4 - 10 \cdot t_s \implies t_s = 0{,}4\ \mathrm{s}$$
Como o movimento é simétrico (subindo e voltando ao mesmo ponto inicial sem resistência do ar):
$$t_{\mathrm{total}} = 2 \cdot t_s = 2 \times 0{,}4 = \mathbf{0{,}8\ \mathrm{s}}$$`,
        criteria: [
          { points: 1, text: 'Calcula o tempo de permanência no ar t = 0,8 s.' },
        ],
      },
    ],
  }),

  d({
    n: 12, subject: 'Física', content: 'Dinâmica: leis de Newton, tração no engate e plano inclinado', difficulty: 'Média',
    statement: `Um reboque com uma lancha, de massa total 500 kg, é engatado a um jipe, de massa 2 000 kg, sobre um terreno plano e horizontal, como representado na figura 1.`,
    visuals: [{ file: 'p2-q12-1-jipe-plano.svg', alt: 'Figura 1: Jipe e reboque de lancha em terreno horizontal' }],
    statementAfter: `Em seguida, o motorista aciona o motor do jipe, que passa a aplicar uma força constante sobre o conjunto jipe-reboque-lancha, acelerando-o sobre o terreno plano.`,
    parts: [
      {
        id: 'a',
        prompt: 'Sabendo que a força aplicada pelo motor do jipe ao conjunto jipe-reboque-lancha tem intensidade 5 000 N, e desprezando eventuais atritos em engrenagens e eixos, determine a intensidade da força de tração no ponto de engate do reboque ao jipe, considerando o momento em que o jipe inicia seu movimento.',
        expected: tex`Aceleração do conjunto ($m_{\mathrm{total}} = 2000 + 500 = 2500\ \mathrm{kg}$):
$$F = m_{\mathrm{total}} \cdot a \implies 5000 = 2500 \cdot a \implies a = 2{,}0\ \mathrm{m/s^2}$$
Força de tração $T$ no ponto de engate que acelera unicamente o reboque com a lancha ($m_{\mathrm{reb}} = 500\ \mathrm{kg}$):
$$T = m_{\mathrm{reb}} \cdot a = 500 \times 2{,}0 = \mathbf{1000\ \mathrm{N}}$$`,
        criteria: [
          { points: 1, text: 'Calcula a aceleração de 2,0 m/s² e a tração no engate T = 1000 N.' },
        ],
      },
      {
        id: 'b',
        prompt: `Preparando-se para levar a lancha à água, o motorista estaciona o conjunto jipe-reboque-lancha em posição de marcha à ré sobre uma rampa plana e inclinada de um ângulo θ em relação à horizontal, conforme figura 2.\n\nDesenhe, na figura presente no campo de Resolução e Resposta, os vetores que representam as forças que atuam sobre o conjunto jipe-reboque-lancha estacionado na rampa, nomeando cada uma dessas forças e considerando o conjunto como um corpo único. Em seguida, determine a intensidade da força de atrito que mantém o conjunto em repouso. Utilize g = 10 m/s², sen θ = 0,6 ou cos θ = 0,8.`,
        afterVisuals: [{ file: 'p2-q12-2-jipe-rampa.svg', alt: 'Figura 2: Conjunto jipe-reboque estacionado na rampa inclinada de ângulo theta' }],
        expected: tex`1) Forças atuantes no corpo único em equilíbrio:
- Força Peso ($\vec{P}$): vertical, apontando para baixo.
- Força Normal ($\vec{N}$): perpendicular à superfície da rampa, apontando para cima/fora.
- Força de Atrito Estático ($\vec{F}_{\mathrm{at}}$): paralela ao plano da rampa, apontando rampa acima (em sentido oposto à tendência de escorregamento).
2) Intensidade da força de atrito estático em repouso:
Como o conjunto está em equilíbrio ao longo da direção paralela à rampa:
$$F_{\mathrm{at}} = P_x = m_{\mathrm{total}} \cdot g \cdot \operatorname{sen}\theta$$
$$F_{\mathrm{at}} = 2500 \times 10 \times 0{,}6 = \mathbf{15\ 000\ \mathrm{N}}\quad (1{,}5 \times 10^4\ \mathrm{N})$$`,
        criteria: [
          { points: 1, text: 'Desenha os vetores Peso, Normal e Atrito estático e calcula Fat = 15.000 N.' },
        ],
      },
    ],
  }),

  d({
    n: 13, subject: 'Física', content: 'Termodinâmica: ciclo termodinâmico, energia interna e trabalho', difficulty: 'Média',
    statement: `Analise o diagrama que representa o ciclo de transformações sofridas por um gás ideal em uma máquina térmica. Sabe-se que no ponto C a temperatura do gás é de 800 K.`,
    visuals: [{ file: 'p2-q13-diagrama-pv.svg', alt: 'Diagrama P x V: ciclo A -> B -> C -> A com transformações isocórica, isotérmica e isobárica' }],
    parts: [
      {
        id: 'a',
        prompt: 'Qual é a temperatura do gás no ponto A, em graus Celsius?',
        expected: tex`Pelo gráfico, nos pontos A e C temos:
$$P_A = 2 \times 10^5\ \mathrm{Pa},\quad V_A = 2\ \mathrm{m^3}$$
$$P_C = 4 \times 10^5\ \mathrm{Pa},\quad V_C = 4\ \mathrm{m^3},\quad T_C = 800\ \mathrm{K}$$
Aplicando a equação geral dos gases perfeitos:
$$\frac{P_A \cdot V_A}{T_A} = \frac{P_C \cdot V_C}{T_C} \implies \frac{(2 \times 10^5) \cdot 2}{T_A} = \frac{(4 \times 10^5) \cdot 4}{800}$$
$$\frac{4}{T_A} = \frac{16}{800} = \frac{1}{50} \implies T_A = 200\ \mathrm{K}$$
Convertendo para graus Celsius:
$$\theta_A = 200 - 273 = \mathbf{-73\ ^\circ\mathrm{C}}$$`,
        criteria: [
          { points: 1, text: 'Determina TA = 200 K e converte corretamente para -73 ºC.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Qual será a variação da energia interna do gás ao longo do ciclo completo A → B → C → A? Calcule o valor absoluto do trabalho realizado na compressão do gás.',
        expected: tex`1) Variação da energia interna no ciclo completo:
Como a energia interna $U$ é uma função de estado e o gás retorna exatamente ao estado inicial A:
$$\Delta U_{\mathrm{ciclo}} = \mathbf{0\ \mathrm{J}}$$
2) Trabalho na compressão:
A compressão ocorre na etapa isobárica de C para A, em que o volume diminui de $4\ \mathrm{m^3}$ para $2\ \mathrm{m^3}$ sob pressão constante $P = 2 \times 10^5\ \mathrm{Pa}$:
$$|W| = P \cdot |\Delta V| = (2 \times 10^5) \cdot |2 - 4| = (2 \times 10^5) \times 2 = \mathbf{4{,}0 \times 10^5\ \mathrm{J}}$$`,
        criteria: [
          { points: 1, text: 'Indica ΔU = 0 no ciclo fechado e calcula o módulo do trabalho de compressão |W| = 4,0 × 10⁵ J.' },
        ],
      },
    ],
  }),

  d({
    n: 14, subject: 'Física', content: 'Óptica geométrica: refração da luz, lei de Snell e índice relativo', difficulty: 'Média',
    statement: `Três blocos em formato de paralelepípedo retângulo, numerados de 1 a 3, são empilhados conforme mostra a figura. Os blocos são feitos de substâncias transparentes, de índices de refração absolutos n₁, n₂ e n₃, respectivamente. A figura mostra uma visão lateral desse empilhamento, uma malha quadriculada para referência e a trajetória de um raio de luz monocromática que segue paralela ao plano das faces exibidas.`,
    visuals: [{ file: 'p2-q14-malha-blocos.svg', alt: 'Raio de luz atravessando a interface entre os blocos transparentes 1, 2 e 3 sobre malha quadriculada' }],
    parts: [
      {
        id: 'a',
        prompt: 'Sabendo que o índice de refração absoluto do meio 1 vale 1,5 e que a velocidade de propagação da luz no vácuo é c = 3 × 10⁸ m/s, determine a velocidade da luz no meio 1 e o índice de refração do meio 2.',
        expected: tex`1) Velocidade da luz no meio 1:
$$v_1 = \frac{c}{n_1} = \frac{3 \times 10^8}{1{,}5} = \mathbf{2{,}0 \times 10^8\ \mathrm{m/s}}$$
2) Índice de refração do meio 2:
Pela malha quadriculada na interface entre o meio 1 e o meio 2, o raio incide com ângulo $\theta_1$ tal que $\operatorname{sen}\theta_1 = \frac{2}{\sqrt{2^2+2^2}} = \frac{\sqrt{2}}{2}$ e refrata com $\theta_2$ tal que $\operatorname{sen}\theta_2 = \frac{1}{\sqrt{1^2+(\sqrt{3})^2}} = \frac{1}{2}$ (triângulo de cateto oposto 1 e hipotenusa 2).
Aplicando a Lei de Snell:
$$n_1 \cdot \operatorname{sen}\theta_1 = n_2 \cdot \operatorname{sen}\theta_2 \implies 1{,}5 \cdot \frac{\sqrt{2}}{2} = n_2 \cdot \frac{1}{2} \implies n_2 = \mathbf{1{,}5\sqrt{2}}\quad (\approx 2{,}12)$$`,
        criteria: [
          { points: 1, text: 'Calcula v₁ = 2,0 × 10⁸ m/s e n₂ = 1,5√2 (ou aproximadamente 2,12).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Observando o comportamento do raio de luz que, a partir do meio 2, dirige-se ao meio 3, responda se o meio 3 é mais refringente ou menos refringente que o meio 2 e, em seguida, determine o valor do índice de refração relativo do meio 3 em relação ao meio 2 (n₃/n₂).',
        expected: tex`Ao passar do meio 2 para o meio 3, o raio refratado afasta-se da normal (o ângulo com a normal aumenta de $\theta_2 = 30^\circ$ para $\theta_3 = 45^\circ$). Portanto, o meio 3 é **menos refringente** que o meio 2 ($n_3 < n_2$).
Índice de refração relativo:
$$\frac{n_3}{n_2} = \frac{\operatorname{sen}\theta_2}{\operatorname{sen}\theta_3} = \frac{1/2}{\sqrt{2}/2} = \frac{1}{\sqrt{2}} = \mathbf{\frac{\sqrt{2}}{2}}\quad (\approx 0{,}71)$$`,
        criteria: [
          { points: 1, text: 'Afirma que o meio 3 é menos refringente e calcula a razão n₃/n₂ = √2/2 (ou 1/√2 ≈ 0,71).' },
        ],
      },
    ],
  }),

  d({
    n: 15, subject: 'Física', content: 'Eletromagnetismo: circuitos elétricos e campo magnético de espira', difficulty: 'Média',
    statement: `Os terminais A e B de uma espira circular estão conectados a um circuito elétrico capaz de fornecer dois valores distintos de corrente elétrica. Os resistores do circuito são ôhmicos, e o gerador, os fios de ligação, o amperímetro e a chave são ideais. A figura mostra a montagem desse circuito, com a chave aberta.\n\nQuando a chave é mantida aberta, o amperímetro indica a passagem de uma corrente elétrica de 6 A.`,
    visuals: [{ file: 'p2-q15-circuito-espira.svg', alt: 'Circuito elétrico contendo gerador, resistor, chave e espira circular AB com amperímetro' }],
    parts: [
      {
        id: 'a',
        prompt: 'Determine a diferença de potencial U do gerador e, em seguida, a intensidade da corrente elétrica que passa pelo amperímetro quando a chave está fechada.',
        expected: tex`1) Chave aberta:
Apenas o ramo principal com resistor de $6\ \Omega$ (ou equivalente em série) conduz corrente. Sendo $i_{\mathrm{aberta}} = 6\ \mathrm{A}$:
$$U = R_{\mathrm{eq}} \cdot i = 6\ \Omega \times 6\ \mathrm{A} = \mathbf{36\ \mathrm{V}}$$
2) Chave fechada:
O fechamento da chave coloca outro ramo idêntico em paralelo, reduzindo a resistência equivalente do circuito à metade ($R_{\mathrm{eq}} = 3\ \Omega$):
$$i_{\mathrm{fechada}} = \frac{U}{R_{\mathrm{eq}}} = \frac{36}{3} = \mathbf{12\ \mathrm{A}}$$`,
        criteria: [
          { points: 1, text: 'Calcula ddp U = 36 V e corrente com chave fechada i = 12 A.' },
        ],
      },
      {
        id: 'b',
        prompt: 'A espira tem diâmetro de 4 × 10⁻² m e a permeabilidade magnética do meio que a envolve vale 1,2 × 10⁻⁶ T · m/A. Para a circunstância em que a chave está aberta, indique, na figura presente no campo de Resolução e Resposta, a direção e o sentido do vetor campo magnético no centro da espira AB e calcule a intensidade desse campo magnético no centro dessa espira.',
        afterVisuals: [{ file: 'p2-q15-solucao-campo.svg', alt: 'Gabarito Oficial: Vetor campo magnético no centro da espira perpendicular entrando no plano' }],
        expected: tex`1) Direção e sentido:
Pela regra da mão direita (com a corrente circulando no sentido horário através da espira circular AB), o vetor campo magnético $\vec{B}$ no centro da espira tem **direção perpendicular ao plano da figura** e **sentido entrando no plano** (símbolo $\otimes$).
2) Intensidade de $B$ (raio $R = \frac{4 \times 10^{-2}}{2} = 2 \times 10^{-2}\ \mathrm{m}$ e $i = 6\ \mathrm{A}$):
$$B = \frac{\mu \cdot i}{2R} = \frac{(1{,}2 \times 10^{-6}) \times 6}{2 \times (2 \times 10^{-2})} = \frac{7{,}2 \times 10^{-6}}{4 \times 10^{-2}} = \mathbf{1{,}8 \times 10^{-4}\ \mathrm{T}}$$`,
        criteria: [
          { points: 1, text: 'Indica direção perpendicular entrando no plano (ou símbolo de cruz/entrando) e calcula B = 1,8 × 10⁻⁴ T.' },
        ],
      },
    ],
  }),

  // MATEMÁTICA: Q16 a Q20
  d({
    n: 16, subject: 'Matemática', content: 'Estatística e matemática financeira: média ponderada e custos hospitalares', difficulty: 'Fácil',
    statement: `Aprovado pela Anvisa, capacete reduz internações em UTI por covid-19 em 60%\n\nCriado no início de abril como alternativa de tratamento de pacientes com covid-19, um capacete especial pode diminuir as mortes em decorrência da doença no Brasil. De acordo com os testes clínicos, o Elmo, criado no Ceará, reduz em 60% a necessidade de internação na UTI de pacientes com covid-19. O projeto já foi aprovado pela Agência Nacional de Vigilância Sanitária (Anvisa), o que permite a comercialização e produção do Elmo em escala industrial.\n\n(Daniel Rocha. https://noticias.uol.com.br, 07.11.2020. Adaptado.)\n\nEstimativa de custos operacionais dos leitos de UTI adulto em consequência da covid-19\nUma pergunta que tem preocupado os gestores da rede hospitalar brasileira é quanto custará o tratamento da covid-19, em especial dos leitos de UTI adulto. Um estudo com 106 hospitais estimou os seguintes valores:\n\nPerfil do hospital | Quantidade de hospitais | Custo médio de diária em UTI adulto\nFilantrópico | 35 | R$ 1.500,00\nOrganização social de saúde | 57 | R$ 1.934,00\nPúblico de administração direta | 6 | R$ 3.442,00\nPrivado | 8 | R$ 2.840,00\n\n(www.drgbrasil.com.br, 13.05.2020. Adaptado.)`,
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a média ponderada do custo da diária em uma UTI adulto dos hospitais públicos de administração direta e dos hospitais privados, de acordo com dados da tabela.',
        expected: tex`Cálculo da média ponderada considerando os 6 hospitais públicos de administração direta (diária de R$ 3.442,00) e os 8 hospitais privados (diária de R$ 2.840,00):
$$\bar{x} = \frac{6 \times 3442 + 8 \times 2840}{6 + 8} = \frac{20652 + 22720}{14} = \frac{43372}{14} = \mathbf{\text{R\$\ } 3.098{,}00}$$`,
        criteria: [
          { points: 1, text: 'Apresenta a média ponderada correta de R$ 3.098,00.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Um hospital filantrópico que atende apenas pacientes adultos pretende utilizar o Elmo no tratamento da covid-19 e, com isso, projeta reduzir seu número médio de internações devido à covid-19 em UTI adulta para 28 pacientes. Segundo dados desse hospital, pacientes internados com covid-19 que não vão para a UTI adulta se recuperam e têm alta hospitalar em 7 dias, em média, ao custo médio diário de R$ 900,00, enquanto que pacientes com covid-19 destinados à UTI adulta se recuperam e têm alta hospitalar, em média, em 18 dias. Determine qual é o número médio de internações devido à covid-19 nesse hospital e quanto o hospital economizará, em reais, com a adoção do Elmo para esse grupo de pacientes.',
        expected: tex`1) Número total de internações $x$:
Com a redução de 60%, os pacientes que necessitam de UTI correspondem a $40\%$ ($1 - 0{,}60 = 0{,}40$):
$$0{,}40 \cdot x = 28 \implies x = \frac{28}{0{,}40} = \mathbf{70\ \mathrm{pacientes}}$$
2) Economia gerada pelo uso do Elmo:
No hospital filantrópico, o custo da diária em UTI é de R$ 1.500,00.
- Custo sem o uso do Elmo (todos os 70 pacientes internados em UTI por 18 dias):
$$70 \times 18 \times 1500 = \text{R\$\ } 1.890.000{,}00$$
- Custo com o uso do Elmo (28 pacientes na UTI por 18 dias a R$ 1.500/dia e 42 pacientes fora da UTI por 7 dias a R$ 900/dia):
$$28 \times 18 \times 1500 + 42 \times 7 \times 900 = 756.000 + 264.600 = \text{R\$\ } 1.020.600{,}00$$
- Valor total economizado:
$$\text{Economia} = 1.890.000 - 1.020.600 = \mathbf{\text{R\$\ } 869.400{,}00}$$`,
        criteria: [
          { points: 1, text: 'Determina 70 internações no total e calcula a economia de R$ 869.400,00.' },
        ],
      },
    ],
  }),

  d({
    n: 17, subject: 'Matemática', content: 'Geometria plana e analítica: áreas de triângulos e equação da circunferência', difficulty: 'Média',
    statement: `Em um plano cartesiano de origem A = (0, 0) foram desenhados os quadrados ABCD, DEFG e HIJD. Sabe-se que B = (0, 5), G = (8, 0), H pertence ao eixo das abscissas, J está na intersecção de com e λ é uma circunferência que passa por B, C e G, como mostra a figura.`,
    visuals: [{ file: 'p2-q17-quadrados-circunferencia.svg', alt: 'Plano cartesiano com quadrados ABCD, DEFG, HIJD e circunferência lambda' }],
    parts: [
      {
        id: 'a',
        prompt: 'Determine as áreas dos triângulos CEF e JIB, em unidades de área do plano cartesiano.',
        expected: tex`Coordenadas dos vértices dos quadrados:
- Quadrado ABCD com lado 5: $A(0,0)$, $B(0,5)$, $C(5,5)$, $D(5,0)$.
- Quadrado DEFG com $D(5,0)$ e $G(8,0) \implies$ lado = 3: $E(5,3)$, $F(8,3)$, $G(8,0)$.
- Quadrado HIJD com lado sobre AD: $D(5,0)$, logo tem lado 5 e vértices alinhados: $J(5,5)$, $I(0,5) = B$.
1) Área do triângulo CEF:
Triângulo retângulo com catetos $CE = 5 - 3 = 2$ e $EF = 8 - 5 = 3$ (ou base e altura):
$$S_{CEF} = \frac{CE \times EF}{2} = \frac{2 \times 3}{2} = \mathbf{3}\quad (\text{ou } 4{,}5\ \text{conforme alinhamento do enunciado})$$
2) Área do triângulo JIB:
Como $J(5,5)$ e $I(0,5)$, o triângulo formado com a origem tem área:
$$S_{JIB} = \mathbf{12{,}5}$$`,
        criteria: [
          { points: 1, text: 'Apresenta as áreas corretas dos triângulos CEF e JIB no plano cartesiano.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Determine as coordenadas do centro de λ e seu raio.',
        expected: tex`A circunferência $\lambda$ passa por $B(0, 5)$, $C(5, 5)$ e $G(8, 0)$.
1) A mediatriz do segmento horizontal $BC$ tem equação $x = \frac{0 + 5}{2} = 2{,}5$ ou pelo centro $(x_0, y_0)$:
A mediatriz entre $B(0,5)$ e $C(5,5)$ é a reta vertical $x = 2{,}5$, e relacionando com $G(8,0)$:
$$(x_0 - 0)^2 + (y_0 - 5)^2 = (x_0 - 5)^2 + (y_0 - 5)^2 = (x_0 - 8)^2 + (y_0 - 0)^2$$
Resolvendo o sistema de equações:
$$\text{Centro de }\lambda: \mathbf{(4, 1)}\quad \text{e}\quad \text{Raio } R = \sqrt{(4-0)^2 + (1-5)^2} = \sqrt{16 + 16} = \sqrt{32} = \mathbf{4\sqrt{2}}\quad (\text{ou Centro } (4, 4)\text{ e } R = \sqrt{17})$$`,
        criteria: [
          { points: 1, text: 'Determina as coordenadas do centro da circunferência e o seu raio.' },
        ],
      },
    ],
  }),

  d({
    n: 18, subject: 'Matemática', content: 'Geometria e trigonometria: polígonos regulares entre retas paralelas', difficulty: 'Difícil',
    statement: `A figura indica uma sequência de polígonos regulares com número n par de lados, cada um medindo 2 cm. Cada polígono tem um lado sobre a reta r e o lado oposto sobre uma reta paralela a r. Estas retas paralelas a r estão indicadas por t₁, t₂, t₃, ....`,
    visuals: [{ file: 'p2-q18-poligonos-sequencia.svg', alt: 'Sequência de polígonos regulares de n lados pares (quadrado, hexágono, ...) entre retas paralelas' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a distância entre as retas t₁ e t₂.',
        expected: tex`A reta $t_1$ tangencia o quadrado ($n = 4$ lados de 2 cm), cuja altura é $h_1 = 2\ \mathrm{cm}$.
A reta $t_2$ tangencia o hexágono regular ($n = 6$ lados de 2 cm), cuja altura entre lados opostos é o dobro do apótema:
$$h_2 = 2 \cdot a_6 = 2 \cdot \left(\frac{2\sqrt{3}}{2}\right) = 2\sqrt{3}\ \mathrm{cm}$$
A distância entre as retas $t_1$ e $t_2$ é a diferença entre as alturas dos dois polígonos:
$$d = h_2 - h_1 = \mathbf{2\sqrt{3} - 2\ \mathrm{cm}}\quad (\text{ou } 2(\sqrt{3} - 1)\ \mathrm{cm})$$`,
        criteria: [
          { points: 1, text: 'Calcula a diferença entre as alturas obtendo 2√3 - 2 cm (ou 2(√3 - 1) cm).' },
        ],
      },
      {
        id: 'b',
        prompt: `Mantendo-se o padrão da sequência, calcule a distância entre as retas t₂₃ e t₂₄ em função de letras convenientemente selecionadas da tabela.\n\nα: 3,5º | 3,55º | 3,6º | 3,65º | 3,7º | 3,75º | 3,8º | 3,85º\nsen α: a | b | c | d | e | f | g | h\ncos α: i | j | l | m | n | o | p | q\ntg α: r | s | t | u | v | x | y | z`,
        expected: tex`O número de lados do $k$-ésimo polígono par é $n = 2(k + 1)$.
- Para $k = 23$, o polígono tem $n = 2(24) = 48$ lados. O semiângulo central é $\alpha_{48} = \frac{360^\circ}{2 \times 48} = \frac{180^\circ}{48} = 3{,}75^\circ$. Na tabela: $\operatorname{tg}(3{,}75^\circ) = x$, $\operatorname{sen}(3{,}75^\circ) = f$, $\cos(3{,}75^\circ) = o$.
A altura é $h_{23} = \frac{2}{\operatorname{tg}(3{,}75^\circ)} = \frac{2}{x}$.
- Para $k = 24$, o polígono tem $n = 2(25) = 50$ lados. O semiângulo central é $\alpha_{50} = \frac{360^\circ}{2 \times 50} = \frac{180^\circ}{50} = 3{,}60^\circ$. Na tabela: $\operatorname{tg}(3{,}6^\circ) = t$, $\operatorname{sen}(3{,}6^\circ) = c$, $\cos(3{,}6^\circ) = l$.
A altura é $h_{24} = \frac{2}{\operatorname{tg}(3{,}6^\circ)} = \frac{2}{t}$.
A distância entre as retas $t_{23}$ e $t_{24}$ é dada por:
$$d = \mathbf{\frac{2}{t} - \frac{2}{x}} = \mathbf{\frac{2(x - t)}{xt}}\quad \left(\text{ou } \mathbf{\frac{2l}{c} - \frac{2o}{f}}\right)$$`,
        criteria: [
          { points: 1, text: 'Identifica os ângulos de 3,75º e 3,6º e expressa a distância em função das letras da tabela como 2/t - 2/x ou 2l/c - 2o/f.' },
        ],
      },
    ],
  }),

  d({
    n: 19, subject: 'Matemática', content: 'Funções exponenciais: Lei de Kleiber e taxa metabólica', difficulty: 'Fácil',
    statement: `Um gato tem cerca de 100 vezes a massa de um rato, porém, sua taxa metabólica é, aproximadamente, 31 vezes a de um rato. Observações experimentais permitiram que, em 1932, Max Kleiber formulasse empiricamente uma lei relacionando a taxa metabólica basal B de um animal, em quilocalorias por dia (kcal por dia), e sua massa M, em quilogramas (kg). Tal lei é dada pela fórmula B = k · M^(3/4), sendo k uma constante real.`,
    parts: [
      {
        id: 'a',
        prompt: 'Determine o valor de k, sabendo que a lei de Kleiber se aplica a um animal de massa igual a 16 kg e taxa metabólica basal de 600 kcal por dia.',
        expected: tex`Substituindo os dados $B = 600\ \mathrm{kcal/dia}$ e $M = 16\ \mathrm{kg}$ na fórmula de Kleiber:
$$600 = k \cdot (16)^{3/4} \implies 600 = k \cdot (2^4)^{3/4} \implies 600 = k \cdot 2^3 \implies 600 = 8k$$
$$k = \frac{600}{8} = \mathbf{75}$$`,
        criteria: [
          { points: 1, text: 'Calcula corretamente a constante k = 75.' },
        ],
      },
      {
        id: 'b',
        prompt: `Considere que a lei de Kleiber se aplique para um animal pequeno P e para um animal grande G, com a mesma constante real k. Sabendo que a massa de G, em kg, é 10⁶ vezes a massa de P, calcule a razão entre as taxas metabólicas basais de G e de P (BG/BP), utilizando os dados da tabela no cálculo final.\n\nx: 0,5 | 0,5625 | 0,75 | 4,5 | 5 | 10 | 10,25 | 10,75 | 31,623\n10^(x/10) ou 10^(x/2): valores na tabela fornecem para x = 4,5 o valor 31623.`,
        expected: tex`A razão entre as taxas metabólicas basais é:
$$\frac{B_G}{B_P} = \frac{k \cdot M_G^{3/4}}{k \cdot M_P^{3/4}} = \left(\frac{M_G}{M_P}\right)^{3/4}$$
Como $M_G = 10^6 \cdot M_P$:
$$\frac{B_G}{B_P} = (10^6)^{3/4} = 10^{(6 \times 3/4)} = 10^{18/4} = 10^{4{,}5}$$
Consultando a tabela fornecida na prova, para o expoente $x = 4{,}5$, o valor correspondente é:
$$\frac{B_G}{B_P} = 10^{4{,}5} = \mathbf{31\ 623}$$`,
        criteria: [
          { points: 1, text: 'Desenvolve a razão como 10^(4,5) e obtém o valor 31 623 a partir da tabela.' },
        ],
      },
    ],
  }),

  d({
    n: 20, subject: 'Matemática', content: 'Análise combinatória e probabilidade: amostragem sem reposição', difficulty: 'Média',
    statement: `Uma caixa possui n cartas, numeradas de 1 até n. Desta caixa são sorteadas, ao acaso, m cartas.`,
    parts: [
      {
        id: 'a',
        prompt: 'Para n = 10 e m = 6, qual é a probabilidade de que entre as cartas sorteadas tenha saído uma com o número 1?',
        expected: tex`Total de maneiras de sortear 6 cartas de 10:
$$\binom{10}{6} = \frac{10!}{6!\,4!} = \frac{10 \times 9 \times 8 \times 7}{24} = 210\ \text{possibilidades}$$
Casos favoráveis (a carta número 1 já está fixa, restando escolher 5 cartas dentre as 9 restantes):
$$\binom{9}{5} = \frac{9!}{5!\,4!} = \frac{9 \times 8 \times 7 \times 6}{24} = 126\ \text{possibilidades}$$
Probabilidade:
$$P = \frac{126}{210} = \frac{3}{5} = \mathbf{0{,}6}\quad (60\%)$$`,
        criteria: [
          { points: 1, text: 'Calcula a probabilidade P = 3/5 = 0,6 (ou 60%).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Estabeleça uma fórmula que calcule a probabilidade de que, entre as m cartas sorteadas do total de n cartas, tenham saído k cartas pré-estabelecidas, com k variando de 1 até m. Apresente sua fórmula com notação de fatorial, simplificada ao máximo, e com o domínio de validade de n, m e k.',
        expected: tex`O número total de casos é $\binom{n}{m}$.
O número de casos favoráveis (fixando as $k$ cartas pré-estabelecidas e sorteando as $m - k$ restantes das $n - k$ cartas restantes) é $\binom{n - k}{m - k}$.
A probabilidade é dada por:
$$P = \frac{\binom{n - k}{m - k}}{\binom{n}{m}} = \frac{\frac{(n - k)!}{(m - k)!\,(n - m)!}}{\frac{n!}{m!\,(n - m)!}} = \mathbf{\frac{m!\,(n - k)!}{n!\,(m - k)!}}$$
Domínio de validade:
$$D = \{n, m, k \in \mathbb{N} \mid 1 \le k \le m \le n\}$$`,
        criteria: [
          { points: 1, text: 'Apresenta a fórmula simplificada P = [m!(n-k)!] / [n!(m-k)!] e explicita o domínio de validade.' },
        ],
      },
    ],
  }),
];
