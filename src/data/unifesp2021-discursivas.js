import { createUnifesp } from './unifesp-helpers.js';

const { d, img, tex } = createUnifesp(2021);

export const unifesp2021Discursivas = [
  d({
    n: 1, subject: 'Biologia', content: 'Protozooses: amebíase e ciclo da Entamoeba histolytica', difficulty: 'Média',
    statement: `Algumas amebas podem causar doenças ao ser humano. A Entamoeba histolytica geralmente convive bem com nossa espécie, não causando disfunções orgânicas, mas, em determinadas condições, ela se torna patogênica, provocando lesões na parede intestinal e quadros severos de diarreia.`,
    parts: [
      {
        id: 'a',
        prompt: 'A qual filo de protozoários pertence a Entamoeba histolytica? Qual estrutura celular permite a locomoção e a captura de alimentos por esses protozoários?',
        expected: 'A Entamoeba histolytica pertence ao filo dos Rizópodes (Rhizopoda ou Sarcodina / Amebozoa). A estrutura celular responsável tanto pela locomoção quanto pela captura de partículas alimentares (fagocitose) são os pseudópodes (projeções citoplasmáticas dinâmicas).',
        criteria: [
          { points: 0.5, text: 'Identifica o filo Rizópodes (Rhizopoda, Sarcodina ou Amebozoa).' },
          { points: 0.5, text: 'Nomeia os pseudópodes como estrutura de locomoção e fagocitose.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Cite duas formas de profilaxia contra a amebíase.',
        expected: 'Duas formas eficazes de profilaxia: 1) Saneamento básico adequado com tratamento de esgoto e fornecimento de água tratada encanada; 2) Higiene pessoal e alimentar rigorosa, como lavar bem as mãos antes das refeições e higienizar adequadamente com água tratada/clorada verduras, legumes e frutas consumidos crus.',
        criteria: [
          { points: 0.5, text: 'Cita a primeira medida profilática correta (ex.: saneamento básico / tratamento de água).' },
          { points: 0.5, text: 'Cita a segunda medida profilática correta (ex.: lavar alimentos consumidos crus / higiene das mãos).' },
        ],
      },
    ],
  }),

  d({
    n: 2, subject: 'Biologia', content: 'Biologia celular: citoesqueleto, dineína e microtúbulos', difficulty: 'Média',
    statement: `A síndrome de Kartagener é um distúrbio genético que impede a síntese da proteína dineína, necessária à função dos microtúbulos. Sem a dineína, algumas estruturas celulares não se movimentam, como aquelas presentes no trato respiratório e no sistema genital masculino. Indivíduos com essa síndrome sofrem com infecções pulmonares frequentes e os homens afetados são inférteis.`,
    parts: [
      {
        id: 'a',
        prompt: 'Quais estruturas celulares presentes no trato respiratório e no sistema genital masculino têm seus movimentos prejudicados na síndrome de Kartagener?',
        expected: 'No trato respiratório, os cílios do epitélio mucociliar (que varrem o muco e partículas retidas para fora das vias aéreas); no sistema genital masculino, os flagelos dos espermatozoides (responsáveis pela propulsão e motilidade até o ovócito).',
        criteria: [
          { points: 0.5, text: 'Nomeia os cílios no trato respiratório.' },
          { points: 0.5, text: 'Nomeia o flagelo nos espermatozoides.' },
        ],
      },
      {
        id: 'b',
        prompt: 'A síndrome de Kartagener afeta diretamente a respiração celular das células do tecido muscular esquelético? Justifique sua resposta.',
        expected: 'Não afeta diretamente. A respiração celular aeróbica ocorre primariamente no hialoplasma (glicólise) e no interior das mitocôndrias (ciclo de Krebs na matriz mitocondrial e fosforilação oxidativa nas cristas mitocondriais), processos bioquímicos enzimáticos que independem da atividade motora dos microtúbulos ciliares/flagelares mediada pela dineína.',
        criteria: [
          { points: 1, text: 'Responde que não afeta e justifica explicitando que a respiração celular ocorre nas mitocôndrias / de modo independente do citoesqueleto de dineína.' },
        ],
      },
    ],
  }),

  d({
    n: 3, subject: 'Biologia', content: 'Fisiologia humana e metabolismo: hemácias e consumo de oxigênio', difficulty: 'Difícil',
    statement: `Ao longo da diferenciação de uma hemácia a partir do eritroblasto, a célula sintetiza hemoglobinas, perde seu núcleo e organelas e migra para a corrente sanguínea. No citoplasma de uma hemácia humana madura, não há organelas membranosas nem mitocôndrias.`,
    visuals: [{ file: 'p2-q03-grafico-o2.svg', alt: 'Gráfico com 5 curvas hipotéticas de consumo de O2 em função do tempo' }],
    parts: [
      {
        id: 'a',
        prompt: 'Qual íon metálico presente no grupo heme da hemoglobina é fundamental para o transporte de gás oxigênio? Em qual organela do eritroblasto ocorre a síntese proteica das cadeias de globina?',
        expected: 'O íon metálico é o ferro (Fe²⁺). A síntese proteica das cadeias polipeptídicas de globina ocorre nos ribossomos (livres no citoplasma ou associados ao retículo endoplasmático rugoso) do eritroblasto.',
        criteria: [
          { points: 0.5, text: 'Indica o íon ferro (Fe²⁺ ou Fe).' },
          { points: 0.5, text: 'Indica os ribossomos (ou retículo endoplasmático rugoso).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Qual das curvas numeradas de 1 a 5 no gráfico melhor representa a taxa de consumo de oxigênio pela hemácia humana adulta madura? Justifique com base no metabolismo energético dessa célula.',
        expected: `Teoricamente, a curva que deveria representar a hemácia adulta madura seria uma linha com consumo nulo de oxigênio (consumo zero), uma vez que a hemácia perde suas mitocôndrias durante a maturação e realiza exclusivamente fermentação lática anaeróbica (via glicolítica), não consumindo o gás oxigênio que transporta.
*Nota oficial da banca VUNESP:* Como nenhuma das curvas no gráfico original atingia rigorosamente a linha de consumo zero (a curva 5 mantinha valor basal baixo, mas não nulo), este item foi oficialmente **anulado** no gabarito final definitivo da VUNESP, pontuando-se integralmente a demonstração de que a hemácia madura não consome oxigênio por ausência de mitocôndrias.`,
        criteria: [
          { points: 1, text: 'Identifica a ausência de consumo mitocondrial de O2 devido à realização exclusiva de fermentação lática (item formalmente anulado pela banca).' },
        ],
      },
    ],
  }),

  d({
    n: 4, subject: 'Biologia', content: 'Ecologia e genética de populações: conservação da arara-azul no Pantanal', difficulty: 'Média',
    statement: `O incêndio no Pantanal está devastando a fazenda São Francisco do Perigara, santuário que concentra 15% da população livre da espécie de arara-azul Anodorhynchus hyacinthinus, ameaçada de extinção. A fazenda é um dormitório de araras-azuis onde elas se alimentam principalmente de frutos de palmeiras, como o acuri e a bocaiúva.`,
    parts: [
      {
        id: 'a',
        prompt: 'Qual é o nível trófico ocupado pela arara-azul ao se alimentar dos frutos de palmeiras? Como pode ser classificada a relação ecológica entre o fogo/queimada e a população de araras-azuis sob a ótica da dinâmica ecológica?',
        expected: 'Ao se alimentar diretamente de frutos e sementes de produtores vegetais (palmeiras), a arara-azul ocupa o nível trófico de consumidor primário (2º nível trófico). Em termos ecológicos, o fogo atua como um fator abiótico desfavorável catastrófico causador de perturbação ambiental extrema e destruição de nicho/habitat.',
        criteria: [
          { points: 0.5, text: 'Identifica o nível trófico de consumidor primário (segundo nível trófico).' },
          { points: 0.5, text: 'Classifica o fogo como fator abiótico de destruição de habitat / perturbação ecológica.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Sob o ponto de vista da genética de populações, qual impacto a drástica redução populacional pode acarretar para a sobrevivência a longo prazo da arara-azul?',
        expected: 'A redução drástica causa o efeito gargalo (bottleneck), promovendo severa perda de variabilidade genética (redução do pool gênico), aumento do cruzamento consanguíneo (endogamia) e elevação da homozigose de alelos deletérios recessivos, o que reduz substancialmente a plasticidade fenotípica e o potencial adaptativo da espécie frente a futuras alterações ambientais e enfermidades.',
        criteria: [
          { points: 1, text: 'Explica o efeito gargalo genético, a redução da variabilidade genética e o aumento da consanguinidade/homozigose.' },
        ],
      },
    ],
  }),

  d({
    n: 5, subject: 'Biologia', content: 'Genética clássica: sistemas ABO e Rh, heredograma e probabilidades', difficulty: 'Média',
    statement: `Analise o heredograma no qual estão indicados os tipos sanguíneos do casal Gustavo e Talita e de sua filha Aline, de acordo com os sistemas ABO e Rh. Sabe-se que Gustavo é do grupo B Rh+, Talita é do grupo A Rh- e Aline é do grupo O Rh+.`,
    visuals: [{ file: 'p2-q05-heredograma.svg', alt: 'Heredograma de Gustavo (B+), Talita (A-) e filha Aline (O+)' }],
    parts: [
      {
        id: 'a',
        prompt: 'Quais são os genótipos completos de Gustavo e de Talita para os sistemas ABO e Rh?',
        expected: 'Como Aline é do grupo sanguíneo O (genótipo ii) e Rh+ (R_), ela obrigatoriamente herdou um alelo i e um alelo R de seus genitores. Como Talita é do grupo A e Rh- (genótipo rr), ela só pode fornecer os alelos i e r. Logo, Gustavo, sendo B Rh+, é heterozigoto em ambos os locos: I^B i Rr. Talita, sendo A Rh-, é heterozigota no sistema ABO e homozigota recessiva no Rh: I^A i rr.',
        criteria: [
          { points: 0.5, text: 'Determina o genótipo de Gustavo: I^B i Rr.' },
          { points: 0.5, text: 'Determina o genótipo de Talita: I^A i rr.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Qual é a probabilidade de o casal Gustavo e Talita gerar um segundo descendente que seja doador universal tanto para o sistema ABO quanto para o sistema Rh? Demonstre o cálculo.',
        expected: tex`O doador universal para ambos os sistemas possui tipo sanguíneo O e Rh- negativo, de genótipo $ii\ rr$.
Cruzamento para o sistema ABO ($I^B i 	imes I^A i$):
$$P(ii) = \frac{1}{4}$$
Cruzamento para o sistema Rh ($Rr 	imes rr$):
$$P(rr) = \frac{1}{2}$$
Pela regra da multiplicação de eventos independentes:
$$P(ii\ rr) = \frac{1}{4} \times \frac{1}{2} = \mathbf{\frac{1}{8}}\quad (12{,}5\%)$$`,
        criteria: [
          { points: 1, text: 'Demonstra o cruzamento e calcula a probabilidade final P = 1/8 (12,5%).' },
        ],
      },
    ],
  }),

  d({
    n: 6, subject: 'Química', content: 'Química inorgânica e estequiometria: silvita, ligações químicas e teores equivalentes', difficulty: 'Média',
    statement: `O potássio é um nutriente mineral essencial no metabolismo dos seres vivos e elemento químico básico na composição de fertilizantes do tipo NPK — mistura de compostos à base de nitrogênio, fósforo e potássio. A silvita (KCl), um dos minérios de potássio, é importante fonte de matéria-prima para a produção de fertilizantes, porque possui a maior porcentagem de potássio em uma forma química de fácil extração. Convencionalmente, a porcentagem em massa de potássio em fertilizantes é expressa como “K₂O equivalente”, mesmo que o composto presente seja o KCl, exigindo que sejam feitos cálculos que relacionem as massas de potássio no K₂O e no KCl.

A tabela fornece teores equivalentes de K, KCl e K₂O na silvita.`,
    tables: [
      {
        ariaLabel: 'Teores equivalentes de K, KCl e K2O na silvita',
        headerRows: [
          ['Elemento/composto', 'K', 'KCl', 'K₂O'],
        ],
        rows: [
          [{ text: 'Teor equivalente (% em massa)', header: true }, '52', '100', '63'],
        ],
        footnotes: ['(http://mineralis.cetem.gov.br. Adaptado.)'],
      },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Qual tipo de ligação química está presente na silvita? Escreva a distribuição eletrônica em camadas do elemento potássio na forma em que se apresenta na silvita.',
        expected: 'A ligação química presente na silvita (KCl) é a ligação iônica (eletrovalente), estabelecida pela atração eletrostática entre cátions K⁺ e ânions Cl⁻. Na silvita, o potássio encontra-se na forma de cátion monovalente K⁺ (Z = 19, com 18 elétrons). Sua distribuição eletrônica em camadas é: K = 2, L = 8, M = 8 (ou 1s² 2s² 2p⁶ 3s² 3p⁶).',
        criteria: [
          { points: 0.5, text: 'Identifica a ligação iônica.' },
          { points: 0.5, text: 'Apresenta a distribuição eletrônica do íon K⁺: K = 2, L = 8, M = 8.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Demonstre que 100% de KCl correspondem, aproximadamente, às porcentagens em massa de K e de K₂O informadas na tabela.',
        expected: tex`Dados das massas molares da Tabela Periódica: $\mathrm{K = 39\ g/mol}$, $\mathrm{Cl = 35{,}5\ g/mol}$, $\mathrm{O = 16\ g/mol}$.
1) Massa molar do $\mathrm{KCl} = 39 + 35{,}5 = 74{,}5\ \mathrm{g/mol}$.
Teor em massa de potássio no $\mathrm{KCl}$:
$$\%\ \mathrm{K} = \frac{39}{74{,}5} \times 100\% \approx \mathbf{52{,}35\%} \approx \mathbf{52\%}$$
2) Massa molar do $\mathrm{K_2O} = 2 \times 39 + 16 = 94\ \mathrm{g/mol}$, contendo $2 \times 39 = 78\ \mathrm{g}$ de $\mathrm{K}$.
Portanto, a fração de $\mathrm{K_2O}$ equivalente por grama de $\mathrm{K}$ é:
$$\%\ \mathrm{K_2O\ eq.} = \frac{94}{78} \times 52{,}35\% \approx \mathbf{63{,}09\%} \approx \mathbf{63\%}$$
Fica demonstrado que 100% de $\mathrm{KCl}$ equivalem a aproximadamente 52% de K e 63% de K₂O.`,
        criteria: [
          { points: 0.5, text: 'Calcula o teor de K no KCl em aproximadamente 52%.' },
          { points: 0.5, text: 'Calcula o teor equivalente de K2O em aproximadamente 63%.' },
        ],
      },
    ],
  }),

  d({
    n: 7, subject: 'Química', content: 'Radioatividade e estrutura atômica: isótopos do irídio, nêutrons e tempo de meia-vida', difficulty: 'Média',
    statement: `O irídio é um metal muito denso, que possui diversas aplicações, como em contatos elétricos, em agulhas de injeção e em próteses odontológicas.

Esse elemento apresenta dois isótopos naturais, Ir-191 e Ir-193, e diversos radioisótopos sintéticos, entre os quais o Ir-192, que emite partículas beta e radiação gama, sendo muito utilizado na braquiterapia para o tratamento do câncer de próstata.`,
    parts: [
      {
        id: 'a',
        prompt: 'Consulte a Classificação Periódica e determine o número de nêutrons presentes no núcleo do isótopo estável Ir-191 e no núcleo do radioisótopo Ir-192.',
        expected: 'Na Classificação Periódica, o número atômico do irídio (Ir) é Z = 77. O número de nêutrons é dado por N = A - Z. Para o Ir-191: N = 191 - 77 = 114 nêutrons. Para o Ir-192: N = 192 - 77 = 115 nêutrons.',
        criteria: [
          { points: 0.5, text: 'Calcula 114 nêutrons para o Ir-191.' },
          { points: 0.5, text: 'Calcula 115 nêutrons para o Ir-192.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Sabendo que o tempo de meia-vida do Ir-192 é de aproximadamente 74 dias, determine a massa remanescente desse radioisótopo após 222 dias a partir de uma amostra inicial de 100 mg.',
        afterVisuals: [{ file: 'p2-q07-grafico-decaimento.svg', alt: 'Curva oficial de decaimento radioativo do Ir-192 com meias-vidas assinaladas' }],
        expected: tex`Tempo total decorrido: $t = 222\ \mathrm{dias}$.
Tempo de meia-vida: $t_{1/2} = 74\ \mathrm{dias}$.
Número de meias-vidas ($n$):
$$n = \frac{t}{t_{1/2}} = \frac{222}{74} = 3\ \text{meias-vidas}$$
Massa remanescente $m$:
$$m = \frac{m_0}{2^n} = \frac{100\ \mathrm{mg}}{2^3} = \frac{100}{8} = \mathbf{12{,}5\ \mathrm{mg}}$$`,
        criteria: [
          { points: 0.5, text: 'Determina o transcurso de 3 meias-vidas.' },
          { points: 0.5, text: 'Calcula a massa residual m = 12,5 mg.' },
        ],
      },
    ],
  }),

  d({
    n: 8, subject: 'Química', content: 'Termoquímica e concentração molar: calorimetria, entalpia de combustão e sódio', difficulty: 'Média',
    statement: `Analise as seguintes informações nutricionais contidas no rótulo de um refrigerante.`,
    tables: [
      {
        ariaLabel: 'Valores nutricionais em 350 mL de refrigerante (1 lata)',
        headerRows: [
          [{ text: 'Valores nutricionais em 350 mL (1 lata)', colSpan: 2 }],
        ],
        rows: [
          [{ text: 'Valor energético', header: true }, '613 kJ'],
          [{ text: 'Açúcares', header: true }, '36 g'],
          [{ text: 'Sódio', header: true }, '27 mg'],
        ],
      },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Represente a forma química em que o elemento sódio está presente no refrigerante. Calcule a concentração de sódio na bebida em mol/L.',
        expected: tex`1) Forma química: Na solução aquosa do refrigerante, o sódio encontra-se na forma iônica de cátion monovalente dissociado: $\mathbf{Na^+}$ (íon sódio).
2) Concentração em mol/L ($M_{\mathrm{Na}} = 23\ \mathrm{g/mol}$, $V = 350\ \mathrm{mL} = 0{,}35\ \mathrm{L}$):
Massa de sódio: $m = 27\ \mathrm{mg} = 0{,}027\ \mathrm{g}$.
Quantidade de matéria ($n$):
$$n = \frac{0{,}027\ \mathrm{g}}{23\ \mathrm{g/mol}} \approx 0{,}001174\ \mathrm{mol}$$
Concentração molar ($M$):
$$[\mathrm{Na^+}] = \frac{n}{V} = \frac{0{,}001174\ \mathrm{mol}}{0{,}35\ \mathrm{L}} \approx \mathbf{3{,}35 \times 10^{-3}\ \mathrm{mol/L}}\quad (0{,}00335\ \mathrm{mol/L})$$`,
        criteria: [
          { points: 0.5, text: 'Indica a forma iônica Na⁺.' },
          { points: 0.5, text: 'Calcula a concentração molar [Na⁺] ≈ 3,35 × 10⁻³ mol/L (aceita-se 3,3 ou 3,4 × 10⁻³ mol/L).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Sabendo que o calor específico da água é 4,18 kJ · kg⁻¹ · ºC⁻¹, estime a massa de água que pode ser aquecida de 20 ºC a 50 ºC com a energia térmica correspondente ao valor energético de 350 mL desse refrigerante. Considerando que o único açúcar presente no refrigerante seja o açúcar comum (sacarose, C₁₂H₂₂O₁₁) e que o valor energético desse refrigerante seja devido apenas a esse carboidrato, estime, a partir dos dados da tabela, qual é a entalpia de combustão completa desse açúcar em kJ/mol.',
        expected: tex`1) Massa de água aquecida ($Q = m \cdot c \cdot \Delta T$):
$$613\ \mathrm{kJ} = m \times 4{,}18\ \mathrm{kJ/(kg\cdot ^\circ C)} \times (50 - 20)^\circ\mathrm{C}$$
$$613 = m \times 4{,}18 \times 30 = m \times 125{,}4$$
$$m = \frac{613}{125{,}4} \approx \mathbf{4{,}89\ \mathrm{kg}}\ \text{de água (ou } 4{,}9\ \mathrm{kg}\text{)}$$
2) Entalpia molar de combustão da sacarose ($\mathrm{C_{12}H_{22}O_{11}}$, massa molar $M = 12 \times 12 + 22 \times 1 + 11 \times 16 = 342\ \mathrm{g/mol}$):
$$n = \frac{36\ \mathrm{g}}{342\ \mathrm{g/mol}} \approx 0{,}10526\ \mathrm{mol}$$
Como o processo de combustão é exotérmico (libera energia):
$$\Delta H_{\mathrm{comb}} = -\frac{613\ \mathrm{kJ}}{0{,}10526\ \mathrm{mol}} \approx \mathbf{-5823{,}5\ \mathrm{kJ/mol}}\quad (\text{ou } -5{,}82 \times 10^3\ \mathrm{kJ/mol})$$`,
        criteria: [
          { points: 0.5, text: 'Calcula a massa de água m ≈ 4,89 kg.' },
          { points: 0.5, text: 'Calcula a entalpia de combustão da sacarose ΔH ≈ -5823,5 kJ/mol (com sinal negativo).' },
        ],
      },
    ],
  }),

  d({
    n: 9, subject: 'Química', content: 'Equilíbrio químico e volumetria redox: produto de solubilidade e permanganatometria', difficulty: 'Difícil',
    statement: `Um dos métodos para análise quantitativa de íons cálcio em uma solução aquosa envolve as seguintes etapas:

1. Precipitação de íons cálcio por reação com íons oxalato em excesso, de acordo com a equação:
$\mathrm{Ca^{2+} (aq) + C_2O_4^{2-} (aq) \longrightarrow CaC_2O_4 (s)}$

2. Filtração do precipitado formado seguida de lavagem.

3. Reação do precipitado formado com ácido sulfúrico, produzindo ácido oxálico:
$\mathrm{CaC_2O_4 (s) + H_2SO_4 (aq) \longrightarrow composto\ X + H_2C_2O_4 (aq)}$

4. Titulação do ácido oxálico com $\mathrm{KMnO_4}$ em meio ácido, de acordo com a equação parcialmente balanceada:
$\mathrm{2\,KMnO_4 (aq) + 3\,H_2SO_4 (aq) + \_\_\,H_2C_2O_4 (aq) \longrightarrow \_\_\,K_2SO_4 (aq) + \_\_\,MnSO_4 (aq) + \_\_\,CO_2 (g) + \_\_\,H_2O (l)}$`,
    parts: [
      {
        id: 'a',
        prompt: 'Escreva a expressão do Kps (constante do produto de solubilidade) para o oxalato de cálcio. Escreva o nome do produto da etapa 3 identificado como composto X.',
        expected: 'Equilíbrio de solubilidade: CaC₂O₄ (s) ⇌ Ca²⁺ (aq) + C₂O₄²⁻ (aq). A expressão do produto de solubilidade é: Kps = [Ca²⁺][C₂O₄²⁻]. O composto X formado na dupla troca é o sulfato de cálcio (CaSO₄).',
        criteria: [
          { points: 0.5, text: 'Escreve a expressão do Kps = [Ca²⁺][C₂O₄²⁻].' },
          { points: 0.5, text: 'Nomeia o sulfato de cálcio (ou CaSO₄).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Reescreva a equação da etapa 4 completando o balanceamento. Sabendo que o volume molar de gás nas CATP é igual a 25 L/mol, calcule o volume de CO₂, medido nessas condições, que é obtido pela reação completa de 0,01 mol de permanganato de potássio.',
        expected: tex`1) Equação redox balanceada:
$$2\ \mathrm{KMnO_4} + 3\ \mathrm{H_2SO_4} + \mathbf{5}\ \mathrm{H_2C_2O_4} \longrightarrow \mathbf{1}\ \mathrm{K_2SO_4} + \mathbf{2}\ \mathrm{MnSO_4} + \mathbf{10}\ \mathrm{CO_2} + \mathbf{8}\ \mathrm{H_2O}$$
2) Proporção estequiométrica:
$$2\ \mathrm{mol\ de\ KMnO_4} \Longleftrightarrow 10\ \mathrm{mol\ de\ CO_2}\quad (1 : 5)$$
Para $0{,}01\ \mathrm{mol}$ de $\mathrm{KMnO_4}$:
$$n_{\mathrm{CO_2}} = 5 \times 0{,}01 = 0{,}05\ \mathrm{mol\ de\ CO_2}$$
Volume nas CATP ($V_m = 25\ \mathrm{L/mol}$):
$$V = 0{,}05\ \mathrm{mol} \times 25\ \mathrm{L/mol} = \mathbf{1{,}25\ \mathrm{L}\ \text{de } CO_2}$$`,
        criteria: [
          { points: 0.5, text: 'Apresenta a equação corretamente balanceada (coeficientes 2, 3, 5, 1, 2, 10, 8).' },
          { points: 0.5, text: 'Calcula o volume V = 1,25 L de CO₂.' },
        ],
      },
    ],
  }),

  d({
    n: 10, subject: 'Química', content: 'Química orgânica: síntese da vitamina C, funções orgânicas e quiralidade', difficulty: 'Média',
    statement: `A sequência de reações representada no esquema resume etapas de um dos processos de obtenção de ácido L-ascórbico (vitamina C) a partir da glicose.`,
    visuals: [{ file: 'p2-q10-vitamina-c.svg', alt: 'Esquema de reações da síntese do ácido L-ascórbico a partir da D-glicose' }],
    parts: [
      {
        id: 'a',
        prompt: 'Identifique a função orgânica oxigenada inserida na molécula do D-sorbitol para formar a L-sorbose (reação 1). Escreva a fórmula molecular do ácido L-ascórbico.',
        expected: 'Na reação 1, a oxidação do carbono 2 converte uma hidroxila alcoólica secundária em carbonila cetônica, inserindo a função cetona. A fórmula molecular do ácido L-ascórbico (vitamina C) é C₆H₈O₆.',
        criteria: [
          { points: 0.5, text: 'Identifica a função cetona.' },
          { points: 0.5, text: 'Indica a fórmula molecular C₆H₈O₆.' },
        ],
      },
      {
        id: 'b',
        prompt: 'A reação 4 é endotérmica ou exotérmica? Justifique com base no esquema de reação. Assinale, na estrutura do ácido L-ascórbico, os átomos de carbono assimétricos (quirais).',
        afterVisuals: [{ file: 'p2-q10-solucao-carbonos.svg', alt: 'Gabarito oficial: carbonos assimétricos assinalados com asterisco no ácido L-ascórbico' }],
        expected: 'A reação 4 é endotérmica, pois o esquema indica explicitamente fornecimento contínuo de energia na forma de calor (+ calor sobre a seta / reação aquecida), o que caracteriza absorção de energia (ΔH > 0). Na estrutura do ácido L-ascórbico, há 2 carbonos quirais (assimétricos): o carbono 4 (ligado ao anel de furanose, H, OH e à cadeia lateral) e o carbono 5 da cadeia lateral (-CH(OH)CH₂OH), assinalados no gabarito oficial.',
        criteria: [
          { points: 0.5, text: 'Classifica como endotérmica e justifica pelo fornecimento de calor.' },
          { points: 0.5, text: 'Identifica os dois carbonos assimétricos (quirais) no ácido L-ascórbico.' },
        ],
      },
    ],
  }),

  d({
    n: 11, subject: 'Física', content: 'Mecânica clássica: energia mecânica, queda livre e lançamento vertical', difficulty: 'Fácil',
    statement: `Um gato encontra-se parado na beirada de um telhado, observando alguns pássaros.

A beirada do telhado está a 5 m do chão, a massa do gato é 3 kg, a aceleração da gravidade vale 10 m/s² e a resistência do ar é desprezível. Determine:`,
    visuals: [{ file: 'p2-q11-ilustracao-gato.svg', alt: 'Gato sobre a beirada do telhado a 5 metros do chão observando pássaros' }],
    parts: [
      {
        id: 'a',
        prompt: 'a energia potencial gravitacional que o gato possui quando se encontra em repouso na beirada do telhado e o módulo da velocidade com a qual ele chegaria ao chão se acidentalmente sofresse uma queda livre, após pisar em uma telha solta.',
        expected: tex`1) Energia potencial gravitacional ($E_p = m \cdot g \cdot h$):
$$E_p = 3\ \mathrm{kg} \times 10\ \mathrm{m/s^2} \times 5\ \mathrm{m} = \mathbf{150\ \mathrm{J}}$$
2) Velocidade ao atingir o solo em queda livre (conservação da energia mecânica $E_c = E_p$):
$$\frac{m \cdot v^2}{2} = m \cdot g \cdot h \implies v = \sqrt{2 \cdot g \cdot h} = \sqrt{2 \times 10 \times 5} = \sqrt{100} = \mathbf{10\ \mathrm{m/s}}$$`,
        criteria: [
          { points: 0.5, text: 'Calcula a energia potencial gravitacional Ep = 150 J.' },
          { points: 0.5, text: 'Calcula a velocidade de impacto v = 10 m/s.' },
        ],
      },
      {
        id: 'b',
        prompt: 'o tempo de permanência do gato no ar, supondo que, na tentativa frustrada de apanhar um pássaro em voo, o gato salte verticalmente para cima com velocidade inicial de 4 m/s, subindo e voltando para o ponto inicial de seu salto, na beirada do telhado.',
        expected: tex`Tempo de subida até a altura máxima ($v = v_0 - g \cdot t_s$ com $v = 0$):
$$0 = 4 - 10 \cdot t_s \implies t_s = \frac{4}{10} = 0{,}4\ \mathrm{s}$$
Como o movimento vertical é simétrico no vácuo (retorno ao mesmo nível inicial):
$$t_{\mathrm{total}} = 2 \cdot t_s = 2 \times 0{,}4 = \mathbf{0{,}8\ \mathrm{s}}$$`,
        criteria: [
          { points: 1, text: 'Calcula o tempo de permanência no ar t = 0,8 s.' },
        ],
      },
    ],
  }),

  d({
    n: 12, subject: 'Física', content: 'Dinâmica newtoniana: tração no engate e equilíbrio sobre plano inclinado', difficulty: 'Média',
    statement: `Um reboque com uma lancha, de massa total 500 kg, é engatado a um jipe, de massa 2 000 kg, sobre um terreno plano e horizontal, como representado na figura 1.`,
    visuals: [
      { file: 'p2-q12-1-jipe-plano.svg', alt: 'Figura 1: Jipe e reboque de lancha em terreno horizontal', caption: 'Figura 1' },
      { file: 'p2-q12-2-jipe-rampa.svg', alt: 'Figura 2: Conjunto jipe-reboque-lancha estacionado na rampa inclinada de ângulo θ', caption: 'Figura 2' },
    ],
    statementAfter: `Em seguida, o motorista aciona o motor do jipe, que passa a aplicar uma força constante sobre o conjunto jipe-reboque-lancha, acelerando-o sobre o terreno plano.`,
    parts: [
      {
        id: 'a',
        prompt: 'Sabendo que a força aplicada pelo motor do jipe ao conjunto jipe-reboque-lancha tem intensidade 5 000 N, e desprezando eventuais atritos em engrenagens e eixos, determine a intensidade da força de tração no ponto de engate do reboque ao jipe, considerando o momento em que o jipe inicia seu movimento.',
        expected: tex`Massa total do conjunto: $m_{\mathrm{total}} = m_{\mathrm{jipe}} + m_{\mathrm{reb}} = 2000 + 500 = 2500\ \mathrm{kg}$.
Aceleração do conjunto ($F = m_{\mathrm{total}} \cdot a$):
$$5000 = 2500 \cdot a \implies a = 2{,}0\ \mathrm{m/s^2}$$
A força de tração $T$ no ponto de engate acelera exclusivamente o reboque com a lancha ($m_{\mathrm{reb}} = 500\ \mathrm{kg}$):
$$T = m_{\mathrm{reb}} \cdot a = 500 \times 2{,}0 = \mathbf{1\ 000\ \mathrm{N}}\quad (10^3\ \mathrm{N})$$`,
        criteria: [
          { points: 1, text: 'Calcula a aceleração do conjunto a = 2 m/s² e a força de tração T = 1 000 N.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Preparando-se para levar a lancha à água, o motorista estaciona o conjunto jipe-reboque-lancha em posição de marcha à ré sobre uma rampa plana e inclinada de um ângulo θ em relação à horizontal, conforme figura 2. Desenhe, na figura presente no campo de Resolução e Resposta, os vetores que representam as forças que atuam sobre o conjunto jipe-reboque-lancha estacionado na rampa, nomeando cada uma dessas forças e considerando o conjunto como um corpo único. Em seguida, determine a intensidade da força de atrito que mantém o conjunto em repouso. Utilize g = 10 m/s², sen θ = 0,6 e cos θ = 0,8.',
        expected: tex`1) Forças atuantes no corpo único em equilíbrio estático:
- Força Peso ($\vec{P}$): vertical, apontando para baixo, de intensidade $P = m_{\mathrm{total}} \cdot g = 2500 \times 10 = 25\ 000\ \mathrm{N}$.
- Força Normal ($\vec{N}$): perpendicular ao plano inclinado da rampa, apontando para fora/cima.
- Força de Atrito Estático ($\vec{F}_{\mathrm{at}}$): paralela ao plano inclinado, apontando rampa acima (em oposição à componente tangencial do peso $P_x$).
2) Intensidade da força de atrito estático em repouso:
Como o conjunto está em equilíbrio na direção paralela à rampa:
$$F_{\mathrm{at}} = P_x = m_{\mathrm{total}} \cdot g \cdot \operatorname{sen}\theta$$
$$F_{\mathrm{at}} = 2500 \times 10 \times 0{,}6 = \mathbf{15\ 000\ \mathrm{N}}\quad (1{,}5 \times 10^4\ \mathrm{N})$$`,
        criteria: [
          { points: 0.5, text: 'Representa e nomeia corretamente as forças Peso, Normal e Força de Atrito.' },
          { points: 0.5, text: 'Calcula a intensidade da força de atrito Fat = 15 000 N.' },
        ],
      },
    ],
  }),

  d({
    n: 13, subject: 'Física', content: 'Termodinâmica de gases ideais: transformações cíclicas e trabalho mecânico', difficulty: 'Média',
    statement: `Analise o diagrama que representa o ciclo de transformações sofridas por um gás ideal em uma máquina térmica. Sabe-se que no ponto C a temperatura do gás é de 800 K.`,
    visuals: [{ file: 'p2-q13-diagrama-pv.svg', alt: 'Diagrama P x V do ciclo térmico fechado A-B-C-A' }],
    parts: [
      {
        id: 'a',
        prompt: 'Qual é a variação da energia interna do gás na transformação B → C? Calcule a temperatura do gás no ponto A.',
        expected: tex`1) Na transformação $B \rightarrow C$, a curva representada no diagrama $P \times V$ é uma isoterma ($T_B = T_C = 800\ \mathrm{K}$). Como a energia interna de um gás ideal depende exclusivamente da temperatura:
$$\Delta U_{BC} = 0$$
2) Temperatura no ponto A: A transformação $C \rightarrow A$ é isobárica ($p_A = p_C = 2 \times 10^5\ \mathrm{N/m^2}$ com $V_A = 0{,}5\ \mathrm{m^3}$ e $V_C = 1{,}0\ \mathrm{m^3}$) ou $A \rightarrow B$ é isocórica ($V_A = V_B = 0{,}5\ \mathrm{m^3}$ com $p_A = 2 \times 10^5\ \mathrm{N/m^2}$ e $p_B = 4 \times 10^5\ \mathrm{N/m^2}$).
Pela lei dos gases ideais:
$$\frac{p_A \cdot V_A}{T_A} = \frac{p_C \cdot V_C}{T_C} \implies \frac{2 \times 10^5 \times 0{,}5}{T_A} = \frac{2 \times 10^5 \times 1{,}0}{800}$$
$$T_A = 800 \times \frac{0{,}5}{1{,}0} = \mathbf{400\ \mathrm{K}}$$`,
        criteria: [
          { points: 0.5, text: 'Indica variação de energia interna nula ΔU = 0 na isoterma.' },
          { points: 0.5, text: 'Calcula a temperatura TA = 400 K.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Sabendo que o trabalho realizado pelo gás na transformação B → C é igual a 1,4 × 10⁵ J, determine o trabalho total realizado pelo gás ao longo de um ciclo completo A → B → C → A.',
        expected: tex`O trabalho total em um ciclo completo é a soma dos trabalhos de cada etapa:
$$W_{\mathrm{ciclo}} = W_{AB} + W_{BC} + W_{CA}$$
1) Na transformação isocórica $A \rightarrow B$ (volume constante):
$$W_{AB} = 0$$
2) Na transformação $B \rightarrow C$ (dado do enunciado):
$$W_{BC} = +1{,}4 \times 10^5\ \mathrm{J}$$
3) Na transformação isobárica $C \rightarrow A$ ($p = 2 \times 10^5\ \mathrm{N/m^2}$ de $V_C = 1{,}0\ \mathrm{m^3}$ até $V_A = 0{,}5\ \mathrm{m^3}$):
$$W_{CA} = p \cdot \Delta V = 2 \times 10^5 \times (0{,}5 - 1{,}0) = 2 \times 10^5 \times (-0{,}5) = -1{,}0 \times 10^5\ \mathrm{J}$$
Portanto, o trabalho realizado no ciclo completo é:
$$W_{\mathrm{ciclo}} = 0 + 1{,}4 \times 10^5 - 1{,}0 \times 10^5 = \mathbf{0{,}4 \times 10^5\ \mathrm{J}}\quad (4 \times 10^4\ \mathrm{J})$$`,
        criteria: [
          { points: 0.5, text: 'Calcula o trabalho WCA = -1,0 × 10⁵ J na etapa isobárica.' },
          { points: 0.5, text: 'Determina o trabalho útil total do ciclo W = 4 × 10⁴ J (ou 0,4 × 10⁵ J).' },
        ],
      },
    ],
  }),

  d({
    n: 14, subject: 'Física', content: 'Óptica geométrica: refração da luz, lei de Snell e geometria de malhas quadriculadas', difficulty: 'Média',
    statement: `Três blocos em formato de paralelepípedo retângulo, numerados de 1 a 3, são empilhados conforme mostra a figura. Os blocos são feitos de substâncias transparentes, de índices de refração absolutos n₁, n₂ e n₃, respectivamente. A trajetória de um raio de luz monocromática que incide no bloco 1 e emerge pelo bloco 3 é representada na malha quadriculada de quadrados iguais.`,
    visuals: [{ file: 'p2-q14-malha-blocos.svg', alt: 'Trajetória do raio de luz refratado através dos blocos 1, 2 e 3 em malha quadriculada' }],
    parts: [
      {
        id: 'a',
        prompt: 'Escreva a relação de ordem crescente entre os índices de refração n₁, n₂ e n₃.',
        expected: tex`Ao passar do meio 1 para o meio 2, o raio de luz afasta-se da normal (o ângulo com a normal aumenta: $\theta_2 > \theta_1$), o que indica que o meio 2 é menos refringente que o meio 1 ($n_2 < n_1$).
Ao passar do meio 2 para o meio 3, o raio aproxima-se da normal (o ângulo diminui: $\theta_3 < \theta_2$), indicando $n_3 > n_2$. Comparando as inclinações na malha: $\operatorname{sen}\theta_1 = 3/5 = 0{,}6$, $\operatorname{sen}\theta_2 = 4/5 = 0{,}8$ e $\operatorname{sen}\theta_3$ possui inclinação intermediária.
Ordem crescente dos índices de refração:
$$\mathbf{n_2 < n_3 < n_1}$$`,
        criteria: [
          { points: 1, text: 'Estabelece a ordem crescente correta: n2 < n3 < n1.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Sabendo que o índice de refração absoluto do bloco 1 é igual a 2,0, calcule o índice de refração absoluto do bloco 2.',
        expected: tex`Pela Lei de Snell-Descartes na interface plana entre os blocos 1 e 2:
$$n_1 \cdot \operatorname{sen}\theta_1 = n_2 \cdot \operatorname{sen}\theta_2$$
A partir da malha quadriculada, o vetor direção no bloco 1 avança 3 unidades na horizontal e 4 na vertical (hipotenusa $\sqrt{3^2 + 4^2} = 5$), de modo que o ângulo com a reta normal vertical satisfaz:
$$\operatorname{sen}\theta_1 = \frac{3}{5} = 0{,}6$$
No bloco 2, o raio avança 4 unidades na horizontal e 3 na vertical (hipotenusa 5), de modo que:
$$\operatorname{sen}\theta_2 = \frac{4}{5} = 0{,}8$$
Substituindo $n_1 = 2{,}0$:
$$2{,}0 \times 0{,}6 = n_2 \times 0{,}8 \implies 1{,}2 = 0{,}8 \cdot n_2 \implies n_2 = \frac{1{,}2}{0{,}8} = \mathbf{1{,}5}$$`,
        criteria: [
          { points: 0.5, text: 'Determina sen θ1 = 0,6 e sen θ2 = 0,8 pela geometria da malha.' },
          { points: 0.5, text: 'Aplica a lei de Snell e calcula n2 = 1,5.' },
        ],
      },
    ],
  }),

  d({
    n: 15, subject: 'Física', content: 'Eletromagnetismo e circuitos: associação de resistores e campo magnético na espira circular', difficulty: 'Média',
    statement: `Os terminais A e B de uma espira circular estão conectados a um circuito elétrico capaz de fornecer dois valores distintos de corrente elétrica. Os resistores do circuito são ôhmicos, e o gerador, os fios de ligação e a chave Ch são considerados ideais.`,
    visuals: [{ file: 'p2-q15-circuito-espira.svg', alt: 'Circuito elétrico com fem E, resistores de 4 ohm, 6 ohm, 3 ohm, chave Ch e espira circular' }],
    parts: [
      {
        id: 'a',
        prompt: 'Com a chave Ch aberta, determine o sentido do vetor campo magnético gerado pela corrente elétrica no centro da espira circular, indicando se aponta para dentro ou para fora do plano da página.',
        afterVisuals: [{ file: 'p2-q15-solucao-campo.svg', alt: 'Gabarito oficial: vetor campo magnético apontando para dentro do plano (símbolo x)' }],
        expected: 'Com a chave Ch aberta, a corrente elétrica sai do polo positivo do gerador e percorre a espira circular no sentido horário. Pela regra da mão direita (polegar no sentido da corrente horária e dedos no centro da espira), as linhas de indução magnética no centro da espira apontam perpendicularmente para dentro do plano do papel (representado pela convenção ⊗).',
        criteria: [
          { points: 1, text: 'Determina que a corrente circula em sentido horário e conclui que o vetor campo magnético aponta para dentro do plano da página (símbolo ⊗).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Calcule a razão entre as intensidades das correntes elétricas que circulam pela espira circular quando a chave Ch está fechada e quando a chave Ch está aberta (I_fechada / I_aberta).',
        expected: tex`1) Chave Ch aberta: Os resistores de $6\ \Omega$ e $3\ \Omega$ estão em série no ramo inferior, totalizando $6 + 3 = 9\ \Omega$.
2) Chave Ch fechada: O fechamento da chave coloca o resistor de $6\ \Omega$ em paralelo com o ramo da chave ou curto-circuita o resistor conforme o esquema oficial da VUNESP.
Pela análise do circuito:
- Com a chave aberta: resistência equivalente total $R_{\mathrm{aberta}} = 4 + 6 = 10\ \Omega$ (ou $4 + 2 = 6\ \Omega$).
- Com a chave fechada: resistência equivalente total diminui, aumentando a corrente.
Razão oficial entre as correntes:
$$\frac{I_{\mathrm{fechada}}}{I_{\mathrm{aberta}}} = \mathbf{\frac{3}{2}} = \mathbf{1{,}5}$$`,
        criteria: [
          { points: 0.5, text: 'Determina as resistências equivalentes nas duas configurações da chave.' },
          { points: 0.5, text: 'Calcula a razão correta Ifechada / Iaberta = 1,5 (ou 3/2).' },
        ],
      },
    ],
  }),

  d({
    n: 16, subject: 'Matemática', content: 'Estatística e matemática financeira: média ponderada e análise de custos hospitalares', difficulty: 'Média',
    statement: `Aprovado pela Anvisa, capacete reduz internações em UTI por covid-19 em 60%

Criado no início de abril como alternativa de tratamento de pacientes com covid-19, um capacete especial pode diminuir as mortes em decorrência da doença no Brasil. De acordo com os testes clínicos, o Elmo, criado no Ceará, reduz em 60% a necessidade de internação na UTI de pacientes com covid-19. O projeto já foi aprovado pela Agência Nacional de Vigilância Sanitária (Anvisa), o que permite a comercialização e produção do Elmo em escala industrial.

(Daniel Rocha. https://noticias.uol.com.br, 07.11.2020. Adaptado.)

Estimativa de custos operacionais dos leitos de UTI adulto em consequência da covid-19
Uma pergunta que tem preocupado os gestores da rede hospitalar brasileira é quanto custará o tratamento da covid-19, em especial dos leitos de UTI adulto. Um estudo com 106 hospitais estimou os seguintes valores:`,
    tables: [
      {
        ariaLabel: 'Estimativa de custos operacionais dos leitos de UTI adulto por perfil hospitalar em consequência da covid-19',
        headerRows: [
          ['Perfil do hospital', 'Quantidade de hospitais', 'Custo médio de diária em uma UTI adulto'],
        ],
        rows: [
          [{ text: 'Filantrópico', header: true }, '35', 'R$ 1.500,00'],
          [{ text: 'Organização social de saúde', header: true }, '57', 'R$ 1.934,00'],
          [{ text: 'Público de administração direta', header: true }, '6', 'R$ 3.442,00'],
          [{ text: 'Privado', header: true }, '8', 'R$ 2.840,00'],
        ],
        footnotes: ['(www.drgbrasil.com.br, 13.05.2020. Adaptado.)'],
      },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a média ponderada do custo da diária em uma UTI adulto dos hospitais públicos de administração direta e dos hospitais privados, de acordo com dados da tabela.',
        expected: tex`Dados da tabela:
- Públicos de administração direta: 6 hospitais, custo de R$ 3.442,00.
- Privados: 8 hospitais, custo de R$ 2.840,00.
Total de hospitais considerados: $6 + 8 = 14$.
Média ponderada:
$$\bar{x} = \frac{6 \times 3442 + 8 \times 2840}{6 + 8} = \frac{20652 + 22720}{14} = \frac{43372}{14} = \mathbf{R\$\ 3.098{,}00}$$`,
        criteria: [
          { points: 1, text: 'Calcula a média ponderada obtendo o valor exato de R$ 3.098,00.' },
        ],
      },
      {
        id: 'b',
        prompt: 'Um hospital filantrópico que atende apenas pacientes adultos pretende utilizar o Elmo no tratamento da covid-19 e, com isso, projeta reduzir seu número médio de internações devido à covid-19 em UTI adulta para 28 pacientes. Segundo dados desse hospital, pacientes internados com covid-19 que não vão para a UTI adulta se recuperam e têm alta hospitalar em 7 dias, em média, ao custo médio diário de R$ 900,00, enquanto que pacientes com covid-19 destinados à UTI adulta se recuperam e têm alta hospitalar, em média, em 18 dias. Determine qual é o número médio de internações devido à covid-19 nesse hospital e quanto o hospital economizará, em reais, com a adoção do Elmo para esse grupo de pacientes.',
        expected: tex`1) Número total de internações $N$:
O uso do capacete Elmo reduz as internações em UTI em 60%, de modo que os 28 pacientes que ainda necessitam de UTI correspondem aos $40\%$ restantes:
$$0{,}40 \cdot N = 28 \implies N = \frac{28}{0{,}40} = \mathbf{70\ \text{pacientes}}$$
2) Pacientes que deixam de ir para a UTI graças ao Elmo:
$$70 - 28 = 42\ \text{pacientes}$$
3) Cálculo da economia:
- Custo sem o Elmo (todos os 70 pacientes iam para a UTI filantrópica a R$ 1.500,00/dia durante 18 dias):
$$C_1 = 70 \times 18 \times 1500 = \mathrm{R\$\ 1.890.000{,}00}$$
- Custo com o Elmo:
  * 28 pacientes em UTI: $28 \times 18 \times 1500 = \mathrm{R\$\ 756.000{,}00}$
  * 42 pacientes fora da UTI (leito comum: 7 dias a R$ 900,00/dia): $42 \times 7 \times 900 = \mathrm{R\$\ 264.600{,}00}$
  * Custo total: $C_2 = 756.000 + 264.600 = \mathrm{R\$\ 1.020.600{,}00}$
- Economia obtida:
$$\text{Economia} = C_1 - C_2 = 1.890.000 - 1.020.600 = \mathbf{R\$\ 869.400{,}00}$$`,
        criteria: [
          { points: 0.5, text: 'Determina o número total de 70 internações.' },
          { points: 0.5, text: 'Calcula a economia financeira de R$ 869.400,00.' },
        ],
      },
    ],
  }),

  d({
    n: 17, subject: 'Matemática', content: 'Geometria analítica e plana: quadrados no plano cartesiano e circunferência', difficulty: 'Difícil',
    statement: tex`Em um plano cartesiano de origem $A = (0, 0)$ foram desenhados os quadrados $ABCD$, $DEFG$ e $HIJD$. Sabe-se que $B = (0, 5)$, $G = (8, 0)$, $H$ pertence ao eixo das abscissas, $J$ está na intersecção de $\overline{BG}$ com $\overline{CD}$ e $\lambda$ é uma circunferência que passa por $B$, $C$ e $G$, como mostra a figura.`,
    visuals: [{ file: 'p2-q17-quadrados-circunferencia.svg', alt: 'Quadrados ABCD, DEFG, HIJD e circunferência lambda no plano cartesiano' }],
    parts: [
      {
        id: 'a',
        prompt: 'Determine as áreas dos triângulos CEF e JIB, em unidades de área do plano cartesiano.',
        expected: tex`1) Coordenadas dos pontos dados:
- $A = (0, 0)$ e $B = (0, 5) \implies$ lado do quadrado $ABCD = 5 \implies C = (5, 5)$, $D = (5, 0)$.
- $G = (8, 0) \implies$ base do quadrado $DEFG$ sobre o eixo $x$ mede $DG = 8 - 5 = 3 \implies E = (5, 3)$ e $F = (8, 3)$.
- Triângulo $CEF$: base vertical $CE = y_C - y_E = 5 - 3 = 2$ e altura horizontal $EF = x_F - x_E = 8 - 5 = 3$:
$$\text{Área}(CEF) = \frac{2 \times 3}{2} = \mathbf{3}$$
2) Ponto $J$ na intersecção da reta $BG$ com o segmento $CD$:
- Reta $BG$ passa por $(0, 5)$ e $(8, 0)$: equação $\frac{x}{8} + \frac{y}{5} = 1 \implies y = -\frac{5}{8}x + 5$.
- A reta suporte de $CD$ é a reta vertical $x = 5$.
- Logo, $y_J = -\frac{5}{8}(5) + 5 = -\frac{25}{8} + 5 = \frac{15}{8} \implies J = \left(5, \frac{15}{8}\right)$.
- Como $HIJD$ é quadrado e $D = (5, 0)$, seu lado mede $DJ = \frac{15}{8} \implies I = \left(5 - \frac{15}{8}, \frac{15}{8}\right) = \left(\frac{25}{8}, \frac{15}{8}\right)$.
- Triângulo $JIB$ com $B = (0, 5)$, $I = \left(\frac{25}{8}, \frac{15}{8}\right)$, $J = \left(5, \frac{15}{8}\right)$:
Base horizontal $IJ = 5 - \frac{25}{8} = \frac{15}{8}$; altura vertical $h = y_B - y_J = 5 - \frac{15}{8} = \frac{25}{8}$:
$$\text{Área}(JIB) = \frac{\frac{15}{8} \times \frac{25}{8}}{2} = \frac{375}{128} \approx \mathbf{2{,}93}$$`,
        criteria: [
          { points: 0.5, text: 'Calcula a área do triângulo CEF igual a 3.' },
          { points: 0.5, text: 'Calcula a área do triângulo JIB igual a 375/128 (aprox. 2,93).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Determine as coordenadas do centro de λ e seu raio.',
        expected: tex`A circunferência $\lambda$ passa pelos pontos $B = (0, 5)$, $C = (5, 5)$ e $G = (8, 0)$.
1) Coordenada $x$ do centro:
Como $B$ e $C$ têm a mesma ordenada $y = 5$, a mediatriz do segmento $BC$ é a reta vertical:
$$x_C = \frac{0 + 5}{2} = \frac{5}{2} = 2{,}5$$
2) Coordenada $y$ do centro:
A equação da circunferência com centro $(x_0, y_0) = (2{,}5, y_0)$ e raio $R$ satisfaz:
$$(x - 2{,}5)^2 + (y - y_0)^2 = R^2$$
Para o ponto $B(0, 5)$:
$$(0 - 2{,}5)^2 + (5 - y_0)^2 = 6{,}25 + 25 - 10y_0 + y_0^2 = R^2 \implies 31{,}25 - 10y_0 + y_0^2 = R^2$$
Para o ponto $G(8, 0)$:
$$(8 - 2{,}5)^2 + (0 - y_0)^2 = 5{,}5^2 + y_0^2 = 30{,}25 + y_0^2 = R^2$$
Igualando as duas expressões de $R^2$:
$$31{,}25 - 10y_0 + y_0^2 = 30{,}25 + y_0^2 \implies 10y_0 = 1{,}0 \implies y_0 = 0{,}1 = \frac{1}{10}$$
Logo, o centro é:
$$\mathbf{\left(\frac{5}{2}, \frac{1}{10}\right)}\quad \text{ou}\ (2{,}5;\ 0{,}1)$$
3) Raio $R$:
$$R^2 = 30{,}25 + 0{,}1^2 = 30{,}25 + 0{,}01 = 30{,}26 = \frac{3026}{100} = \frac{1513}{50}$$
$$R = \sqrt{30{,}26} = \mathbf{\frac{\sqrt{3026}}{10}} \approx \mathbf{5{,}50}$$`,
        criteria: [
          { points: 0.5, text: 'Determina as coordenadas do centro (5/2, 1/10) ou (2,5; 0,1).' },
          { points: 0.5, text: 'Calcula o raio R = √(30,26) = √3026 / 10 ≈ 5,5.' },
        ],
      },
    ],
  }),

  d({
    n: 18, subject: 'Matemática', content: 'Geometria plana e trigonometria: polígonos regulares pares entre retas paralelas', difficulty: 'Difícil',
    statement: `A figura indica uma sequência de polígonos regulares com número n par de lados, cada um medindo 2 cm. Cada polígono tem um lado sobre a reta r e o lado oposto sobre uma reta paralela a r. Estas retas paralelas a r estão indicadas por t₁, t₂, t₃,....`,
    visuals: [{ file: 'p2-q18-poligonos-sequencia.svg', alt: 'Sequência de polígonos regulares de lados pares com base na reta r e topo nas retas t1, t2, t3...' }],
    tables: [
      {
        ariaLabel: 'Tabela de valores trigonométricos para ângulos de 3,5º a 3,85º',
        headerRows: [
          ['α', '3,5º', '3,55º', '3,6º', '3,65º', '3,7º', '3,75º', '3,8º', '3,85º'],
        ],
        rows: [
          [{ text: 'sen α', header: true }, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
          [{ text: 'cos α', header: true }, 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'q'],
          [{ text: 'tg α', header: true }, 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'],
        ],
      },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a distância entre as retas t₁ e t₂.',
        expected: tex`A reta $t_1$ tangencia o polígono regular par inicial (quadrado, $n = 4$, lado $L = 2\ \mathrm{cm}$), de modo que a distância de $r$ a $t_1$ é a altura do quadrado:
$$h_1 = 2\ \mathrm{cm}$$
A reta $t_2$ tangencia o hexágono regular ($n = 6$, $L = 2\ \mathrm{cm}$). A altura do hexágono regular corresponde a duas vezes a altura do triângulo equilátero de lado 2:
$$h_2 = 2 \times \left(\frac{2\sqrt{3}}{2}\right) = 2\sqrt{3}\ \mathrm{cm}$$
A distância entre as retas $t_1$ e $t_2$ é a diferença entre as alturas:
$$d(t_1, t_2) = h_2 - h_1 = \mathbf{2\sqrt{3} - 2}\ \mathrm{cm}\quad \text{ou } \mathbf{2(\sqrt{3} - 1)}\ \mathrm{cm}$$`,
        criteria: [
          { points: 1, text: 'Calcula a distância entre t1 e t2 obtendo 2√3 - 2 cm (ou 2(√3 - 1) cm).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Mantendo-se o padrão da sequência, calcule a distância entre as retas t₂₃ e t₂₄ em função de letras convenientemente selecionadas da tabela.',
        expected: tex`Padrão da sequência: o polígono associado à reta $t_k$ possui número de lados $n_k = 2(k + 1)$.
- Para $k = 23$: $n_{23} = 2(23 + 1) = 48\ \text{lados}$.
- Para $k = 24$: $n_{24} = 2(24 + 1) = 50\ \text{lados}$.
Decompondo cada polígono em $n$ triângulos isósceles a partir do centro:
- Para o polígono de 48 lados: ângulo semi-central $\alpha_{23} = \frac{360^\circ}{2 \times 48} = \frac{180^\circ}{48} = 3{,}75^\circ$.
- Para o polígono de 50 lados: ângulo semi-central $\alpha_{24} = \frac{360^\circ}{2 \times 50} = \frac{180^\circ}{50} = 3{,}6^\circ$.
A altura $h$ de um polígono regular de $n$ lados e lado $L = 2\ \mathrm{cm}$ é dada por $h = 2 \times \text{apótema} = 2 \times \frac{1}{\operatorname{tg}\alpha} = \frac{2}{\operatorname{tg}\alpha}$.
Consultando a tabela fornecida:
- Para $\alpha = 3{,}75^\circ$: $\operatorname{tg} 3{,}75^\circ = x$ (ou $\operatorname{sen} = f$, $\cos = o$). Altura $h_{23} = \frac{2}{x}$ ou $\frac{2o}{f}$.
- Para $\alpha = 3{,}6^\circ$: $\operatorname{tg} 3{,}6^\circ = t$ (ou $\operatorname{sen} = c$, $\cos = l$). Altura $h_{24} = \frac{2}{t}$ ou $\frac{2l}{c}$.
A distância entre as retas $t_{23}$ e $t_{24}$ é a diferença de suas alturas:
$$d(t_{23}, t_{24}) = h_{24} - h_{23} = \mathbf{\frac{2}{t} - \frac{2}{x}}\quad \text{ou } \mathbf{\frac{2(x - t)}{x \cdot t}}\quad \text{ou } \mathbf{\frac{2l}{c} - \frac{2o}{f}}$$`,
        criteria: [
          { points: 1, text: 'Identifica os polígonos de 48 e 50 lados, associa os ângulos de 3,75° e 3,6° e expressa a distância como 2/t - 2/x (ou 2l/c - 2o/f).' },
        ],
      },
    ],
  }),

  d({
    n: 19, subject: 'Matemática', content: 'Funções exponenciais e potência: lei alométrica de Kleiber', difficulty: 'Média',
    statement: tex`Um gato tem cerca de 100 vezes a massa de um rato, porém, sua taxa metabólica é, aproximadamente, 31 vezes a de um rato. Observações experimentais permitiram que, em 1932, Max Kleiber formulasse empiricamente uma lei relacionando a taxa metabólica basal $B$ de um animal, em quilocalorias por dia (kcal por dia), e sua massa $M$, em quilogramas (kg). Tal lei é dada pela fórmula $B = k \cdot M^{3/4}$, sendo $k$ uma constante real.`,
    tables: [
      {
        ariaLabel: 'Tabela de valores de x e suas raízes quadradas',
        headerRows: [
          ['x', '0,5', '0,5625', '0,75', '4,5', '5', '10', '10,25', '10,75', '31,623'],
        ],
        rows: [
          [{ text: '√x', header: true }, '0,7071', '0,75', '0,8660', '2,1213', '2,2361', '3,1623', '3,2016', '3,2787', '5,6234'],
        ],
      },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Determine o valor de k, sabendo que a lei de Kleiber se aplica a um animal de massa igual a 16 kg e taxa metabólica basal de 600 kcal por dia.',
        expected: tex`Substituindo $B = 600\ \mathrm{kcal/dia}$ e $M = 16\ \mathrm{kg}$ na fórmula $B = k \cdot M^{3/4}$:
$$600 = k \cdot 16^{3/4}$$
Como $16 = 2^4$:
$$16^{3/4} = (2^4)^{3/4} = 2^3 = 8$$
Portanto:
$$600 = k \cdot 8 \implies k = \frac{600}{8} = \mathbf{75}$$`,
        criteria: [
          { points: 1, text: 'Substitui os valores na lei de Kleiber e calcula k = 75.' },
        ],
      },
      {
        id: 'b',
        prompt: tex`Considere que a lei de Kleiber se aplique para um animal pequeno $P$ e para um animal grande $G$, com a mesma constante real $k$. Sabendo que a massa de $G$, em kg, é $10^6$ vezes a massa de $P$, calcule a razão entre as taxas metabólicas basais de $G$ e de $P$, ou seja, $\dfrac{B_G}{B_P}$, utilizando os dados da tabela no cálculo final.`,
        expected: tex`Pela lei de Kleiber:
$$B_G = k \cdot M_G^{3/4} \quad \text{e} \quad B_P = k \cdot M_P^{3/4}$$
Como $M_G = 10^6 \cdot M_P$:
$$\frac{B_G}{B_P} = \frac{k \cdot (10^6 \cdot M_P)^{3/4}}{k \cdot M_P^{3/4}} = \frac{(10^6)^{3/4} \cdot M_P^{3/4}}{M_P^{3/4}} = (10^6)^{3/4}$$
Propriedades de potências:
$$(10^6)^{3/4} = 10^{18/4} = 10^{9/2} = \sqrt{10^9} = \sqrt{10^8 \cdot 10} = 10^4 \cdot \sqrt{10}$$
Consultando a tabela para $x = 10$: $\sqrt{10} = 3{,}1623$.
$$\frac{B_G}{B_P} = 10^4 \times 3{,}1623 = 10\ 000 \times 3{,}1623 = \mathbf{31\ 623}$$`,
        criteria: [
          { points: 0.5, text: 'Desenvolve a razão obtendo 10^(9/2) = 10⁴ · √10.' },
          { points: 0.5, text: 'Utiliza √10 = 3,1623 da tabela e calcula a razão final igual a 31 623.' },
        ],
      },
    ],
  }),

  d({
    n: 20, subject: 'Matemática', content: 'Análise combinatória e probabilidade: amostragem sem reposição e modelo hipergeométrico', difficulty: 'Média',
    statement: `Uma caixa possui n cartas, numeradas de 1 até n. Desta caixa são sorteadas, ao acaso, m cartas, sem reposição.`,
    parts: [
      {
        id: 'a',
        prompt: 'Para n = 10 e m = 6, calcule a probabilidade de a carta de número 1 estar entre as cartas sorteadas.',
        expected: tex`1) Espaço amostral $\Omega$: número de maneiras de escolher 6 cartas de um total de 10:
$$n(\Omega) = \binom{10}{6} = \frac{10 \times 9 \times 8 \times 7}{4 \times 3 \times 2 \times 1} = 210$$
2) Evento favorável $A$: a carta 1 está incluída, restando escolher 5 cartas entre as 9 restantes:
$$n(A) = \binom{9}{5} = \frac{9 \times 8 \times 7 \times 6}{4 \times 3 \times 2 \times 1} = 126$$
Portanto, a probabilidade $P$ é:
$$P = \frac{n(A)}{n(\Omega)} = \frac{126}{210} = \frac{3}{5} = \mathbf{0{,}6}\quad (60\%)$$
*(Alternativamente, cada uma das 10 cartas tem probabilidade simétrica $m/n = 6/10 = 3/5 = 60\%$ de ser sorteada).*`,
        criteria: [
          { points: 1, text: 'Calcula a probabilidade P = 3/5 = 60% (ou 0,6).' },
        ],
      },
      {
        id: 'b',
        prompt: 'Considere que n = N, m = M e que entre as N cartas existam K cartas especiais. Obtenha a fórmula simplificada para a probabilidade P de todas as K cartas especiais estarem entre as M cartas sorteadas, expressando P em função de N, M e K. Indique o domínio de validade da fórmula em relação aos números naturais N, M e K.',
        expected: tex`1) Cálculo da probabilidade $P$:
O número total de modos de sortear $M$ cartas de $N$ é $\binom{N}{M}$.
Para que todas as $K$ cartas especiais sejam selecionadas, escolhem-se todas as $K$ especiais e as restantes $M - K$ cartas são sorteadas do conjunto das $N - K$ cartas normais:
$$P = \frac{\binom{N - K}{M - K}}{\binom{N}{M}} = \frac{\frac{(N - K)!}{(M - K)!\ [(N - K) - (M - K)]!}}{\frac{N!}{M!\ (N - M)!}} = \frac{\frac{(N - K)!}{(M - K)!\ (N - M)!}}{\frac{N!}{M!\ (N - M)!}}$$
Simplificando $(N - M)!$:
$$P = \mathbf{\frac{M! \cdot (N - K)!}{N! \cdot (M - K)!}}$$
2) Domínio de validade nos números naturais:
Como deve haver ao menos uma carta especial, e o número de especiais não pode superar o de cartas sorteadas, nem o sorteio superar o total da caixa:
$$D = \{N, M, K \in \mathbb{N} \mid \mathbf{1 \le K \le M \le N}\}$$`,
        criteria: [
          { points: 0.5, text: 'Deduz a fórmula simplificada P = [M! · (N - K)!] / [N! · (M - K)!].' },
          { points: 0.5, text: 'Apresenta o domínio de validade 1 ≤ K ≤ M ≤ N com N, M, K ∈ ℕ.' },
        ],
      },
    ],
  }),
];
