import { createUnifesp } from './unifesp-helpers.js';

const { d, img, tex } = createUnifesp(2023);

export const unifesp2023Discursivas = [
  // ==========================================
  // BIOLOGIA (QUESTÕES 01 A 05)
  // ==========================================
  d({
    n: 1,
    subject: 'Biologia',
    content: 'Citologia: modelo do mosaico fluido, bicamada fosfolipídica e fluidez da membrana plasmática',
    difficulty: 'Fácil',
    statement: `Em um experimento, pesquisadores marcaram radioativamente as proteínas da membrana plasmática de uma célula humana e de uma célula de camundongo com dois radioisótopos diferentes e, em seguida, fundiram as duas células, originando uma célula híbrida. Utilizando um microscópio, observou-se que as proteínas marcadas radioativamente distribuíram-se de forma aleatória na bicamada da membrana plasmática da célula híbrida.

(www.innoverensvt.com. Adaptado.)`,
    visuals: [{ file: 'p2-q01-celula-hibrida.svg', alt: 'Esquema experimental da fusão de célula humana e célula de camundongo gerando célula híbrida com proteínas fluorescentes/radioativas distribuídas', caption: 'Fusão celular e distribuição de proteínas na membrana plasmática híbrida.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Qual a composição química da bicamada da membrana plasmática em que as proteínas estão localizadas? Cite a principal característica das substâncias químicas presentes na membrana plasmática que permite a retenção de água no interior da célula.',
        expected: `1) Composição química da bicamada: Fosfolipídios (ou lipídios e fosfatos; bicamada lipídica/fosfolipídica).
2) Característica das substâncias: Serem substâncias anfipáticas / anfifílicas / possuírem porção hidrofóbica (apolar) e hidrofílica (polar) — especificamente a cauda apolar/hidrofóbica voltada para o interior da bicamada atua como barreira que impede a passagem livre de água e solutos polares.

Foram aceitas: membrana fosfolipídica; fosfato + lipídios; membrana lipoproteica (proteínas, gorduras/lipídios e fosfato).
Não foram aceitas: lipoproteica (sem citar lipídios/fosfolipídios na bicamada); apenas proteínas; apenas carboidratos.`,
        criteria: [
          { points: 1, text: 'Identifica corretamente os fosfolipídios (ou lipídios) como componentes da bicamada.' },
          { points: 1, text: 'Cita o caráter hidrofóbico/apolar ou anfifílico/anfipático dos fosfolipídios como barreira à água.' },
        ],
        detailed: `a) De acordo com o modelo do Mosaico Fluido (Singer e Nicolson, 1972), a matriz fundamental da membrana plasmática é constituída por uma bicamada de fosfolipídios (lipídios complexos formados por glicerol ligado a duas cadeias de ácidos graxos e a um grupo fosfato).
A característica química crucial que permite a retenção de água e solutos hidrofílicos no meio intracelular é o caráter anfipático (ou anfifílico) dos fosfolipídios: eles possuem uma "cabeça" polar (hidrofílica, voltada para os meios intra e extracelular) e duas "caudas" apolares de ácidos graxos (hidrofóbicas, voltadas para o interior da bicamada). Essa região central hidrofóbica repele moléculas polares e água livre, estabelecendo uma barreira impermeável indispensável à integridade celular.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Na célula híbrida originada no experimento, que propriedade da membrana plasmática permitiu a distribuição aleatória das proteínas marcadas? Essa propriedade seria mantida caso as células fossem submetidas a uma temperatura de –5 ºC? Justifique sua resposta.',
        expected: `1) Propriedade: Fluidez da membrana (modelo do mosaico fluido / movimentação lateral dos fosfolipídios e proteínas).
2) Resposta e justificativa sobre –5 ºC: Não seria mantida. Em baixas temperaturas (–5 ºC), a fluidez diminui drasticamente ou cessa, pois os fosfolipídios se empacotam (solidificam-se / congelam), restringindo a mobilidade lateral das proteínas.

Foram aceitas: maleabilidade, mobilidade, dinamismo, plasticidade, flexibilidade.
Não foram aceitas: permeabilidade seletiva, transporte passivo, difusão.`,
        criteria: [
          { points: 1, text: 'Indica a fluidez da membrana (ou mobilidade lateral das proteínas e lipídios).' },
          { points: 1, text: 'Responde "Não" e justifica com a solidificação/congelamento dos lipídios e perda da fluidez a –5 ºC.' },
        ],
        detailed: `b) A propriedade da membrana que possibilitou o espalhamento aleatório das proteínas marcadas é a fluidez da membrana plasmática (deslocamento e difusão lateral livre das proteínas e fosfolipídios no plano bidimensional da bicamada).
Essa propriedade não seria mantida caso as células fossem submetidas a uma temperatura de –5 ºC. Em temperaturas negativas, a energia cinética molecular cai acentuadamente e os ácidos graxos dos fosfolipídios sofrem empacotamento compacto, fazendo com que a bicamada perca sua consistência fluida e transite para um estado rígido/gelificado (solidificação ou "congelamento" da membrana), o que imobiliza as proteínas e anula sua difusão lateral.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 2,
    subject: 'Biologia',
    content: 'Ecologia e Botânica: adaptações do manguezal, pneumatóforos, trocas gasosas e osmorregulação radicular',
    difficulty: 'Média',
    statement: `Analise a imagem de raízes do tipo pneumatóforos encontradas em plantas do gênero Avicennia sp.

(www.floraofqatar.com)`,
    visuals: [{ file: 'p2-q02-pneumatoforos.svg', alt: 'Fotografia de raízes com geotropismo negativo (pneumatóforos) emergindo da lama no manguezal', caption: 'Pneumatóforos em plantas do gênero Avicennia sp.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Cite a característica do solo que selecionou a sobrevivência de plantas com esse tipo de raiz. Qual a vantagem desse tipo de raiz para as plantas do gênero Avicennia sp?',
        expected: `1) Característica do solo: Solo alagado / encharcado / lamacento / pobre em oxigênio (anóxico / hipóxico).
2) Vantagem: Possibilitar a aeração das raízes, realizando trocas gasosas (absorção de gás oxigênio atmosférico através dos pneumatódios/lenticelas) para a respiração celular dos tecidos radiculares.

Foram aceitas: solo anóxico, hipóxico, asfixiante, lodo com pouco oxigênio; captação de oxigênio do ar.
Não foram aceitas: solo salgado (como justificativa para pneumatóforo); absorção de água ou sustentação mecânica isoladas.`,
        criteria: [
          { points: 1, text: 'Cita a baixa concentração de oxigênio / hipóxia / solo alagado do manguezal.' },
          { points: 1, text: 'Explica que a vantagem é a absorção de oxigênio do ar atmosférico para a respiração celular da raiz.' },
        ],
        detailed: `a) O solo do ecossistema de manguezal é lodoso, periodicamente inundado pelas marés e caracterizado pela hipóxia ou anoxia (baixíssima disponibilidade de gás oxigênio dissolvido, decorrente da saturação hídrica e da intensa atividade decompositora anaeróbia da matéria orgânica).
A vantagem adaptativa dos pneumatóforos (raízes respiratórias com geotropismo negativo que crescem verticalmente para fora do sedimento) é promover a aeração do sistema radicular. Elas possuem aberturas especiais denominadas pneumatódios (ou lenticelas) e parênquima aquífero/aerífero que viabilizam a captação direta de oxigênio atmosférico, garantindo a respiração aeróbia e a sobrevivência metabólica das células das raízes soterradas na lama anóxica.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'As raízes do tipo pneumatóforos das plantas do gênero Avicennia sp não conseguem fixar o gás nitrogênio do ar como as raízes das leguminosas o fazem. Por que as raízes do tipo pneumatóforos não fixam o gás nitrogênio? Como deve estar a concentração de sais no vacúolo das células radiculares para que a planta Avicennia sp possa absorver água do ambiente em que vive?',
        expected: `1) Por que não fixam nitrogênio: Porque não estabelecem associação mutualística com bactérias fixadoras de nitrogênio (rizóbios / Rhizobium), nem possuem a enzima nitrogenase necessária para quebrar a tripla ligação do N2 e convertê-lo em amônia.
2) Concentração de sais no vacúolo: Deve ser superior (hipertônica) à concentração de sais da água do ambiente (solução do solo/manguezal), garantindo a absorção de água por osmose.

Foram aceitas: ausência de nódulos radiculares com bactérias fixadoras; concentração de sais maior/hipertônica no vacúolo radicular.
Não foram aceitas: plantas não precisam de nitrogênio; solo já tem muito nitrogênio; vacúolo hipotônico.`,
        criteria: [
          { points: 1, text: 'Explica a ausência de bactérias fixadoras (Rhizobium/rizóbios) associadas às raízes ou da enzima nitrogenase.' },
          { points: 1, text: 'Afirma que a concentração de sais no vacúolo deve ser maior (hipertônica) que a do meio externo para absorver água por osmose.' },
        ],
        detailed: `b) As plantas do gênero Avicennia sp não realizam fixação biológica do nitrogênio porque os vegetais não possuem a maquinaria bioquímica para quebrar a tripla ligação do N2 atmosférico. As leguminosas só o fazem graças à simbiose mutualística em nódulos radiculares com bactérias fixadoras de nitrogênio do gênero Rhizobium (providas do complexo enzimático nitrogenase), associação mutualística ausente nas raízes de Avicennia sp.
Para que a planta halófita consiga absorver água da solução do solo do manguezal (que é altamente salina e possui baixo potencial osmótico), o vacúolo das células radiculares deve manter uma concentração de solutos/sais superior (meio hipertônico) à concentração do ambiente externo, permitindo a entrada espontânea de água nas raízes a favor do gradiente osmótico.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 3,
    subject: 'Biologia',
    content: 'Fisiologia endócrina: transporte hormonal, lipídios esteroides (colesterol) e regulação de FSH e LH por feedback negativo',
    difficulty: 'Média',
    statement: `Um estudo liderado por pesquisadores dos Institutos Nacionais de Saúde dos Estados Unidos aponta para a criação de um gel anticoncepcional masculino. O produto é chamado de NES/T e, caso chegue ao mercado, deve ser aplicado na pele das costas e dos ombros do homem. Esse gel contém o composto progestina, derivado do hormônio progesterona, e testosterona. O papel da progestina é suprimir a produção de espermatozoides e o da testosterona é repor o hormônio produzido pelo corpo do homem, evitando a baixa de libido e a perda muscular causada pelo composto feminino.

(Natalia Cuminale. “Agora é a vez dele”. Veja, 19.12.2018. Adaptado.)`,
    visuals: [{ file: 'p2-q03-graficos-fsh-lh.svg', alt: 'Gráficos I, II, III e IV comparando os níveis de FSH e LH em relação ao valor de referência basal X', caption: 'Comportamento dos hormônios FSH e LH no experimento.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Após a aplicação do gel anticoncepcional na pele do homem, qual sistema do corpo humano transportará a progestina e a testosterona até o órgão-alvo desses hormônios? Que lipídio esteroide é o precursor da testosterona?',
        expected: `1) Sistema de transporte: Sistema circulatório / cardiovascular / sanguíneo.
2) Lipídio esteroide precursor: Colesterol (ou LDL).

Foram aceitas: sistema vascular; colesterol total.
Não foram aceitas: colesterol bom; colesterol ruim; HDL; triglicerídeos; sistema linfático isolado.`,
        criteria: [
          { points: 1, text: 'Identifica o sistema circulatório (ou cardiovascular / sanguíneo).' },
          { points: 1, text: 'Identifica o colesterol como lipídio precursor esteroide.' },
        ],
        detailed: `a) O sistema responsável pelo transporte dos hormônios esteroides da pele até seus tecidos-alvo é o sistema circulatório (ou cardiovascular), que conduz as substâncias por meio da corrente sanguínea.
O lipídio precursor esteroide a partir do qual todos os hormônios sexuais esteroides (como testosterona, estrógeno e progesterona) são sintetizados no organismo humano é o colesterol.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Em um experimento médico, 10 homens saudáveis utilizaram corretamente o gel anticoncepcional por 6 semanas. Após esse período, seus hormônios FSH (folículo estimulante) e LH (luteinizante) foram analisados para verificar a eficácia do produto, e os resultados desse experimento geraram um gráfico quantitativo, no qual X representa um valor de referência antes da aplicação do gel. Dos gráficos a seguir, qual representa o efeito anticoncepcional esperado? Justifique sua resposta com base na ação dos hormônios indicados nos gráficos.',
        expected: `1) Gráfico correto: Gráfico III (ou 3), em que tanto FSH quanto LH apresentam níveis significativamente inferiores ao nível de referência X.
2) Justificativa: O gel eleva os níveis circulantes de progestina e testosterona, exercendo feedback negativo (retroalimentação negativa) sobre o eixo hipotálamo-hipófise, inibindo a secreção das gonadotrofinas FSH e LH. Sem FSH, as células de Sertoli não são estimuladas e a espermatogênese é interrompida; sem LH, as células de Leydig não são estimuladas a produzir testosterona testicular local, suprimindo a formação de espermatozoides.

Foram aceitas: Gráfico III com justificativa de inibição/supressão de FSH e LH pelo feedback negativo ou interrupção do estímulo aos testículos.
Não foram aceitas: Gráficos I, II ou IV; ausência de menção à redução conjunta de FSH e LH.`,
        criteria: [
          { points: 1, text: 'Indica corretamente o Gráfico III.' },
          { points: 1, text: 'Justifica com o feedback negativo reduzindo ambos os hormônios e inibindo a produção de espermatozoides.' },
        ],
        detailed: `b) O gráfico que representa o efeito anticoncepcional esperado é o Gráfico III.
A administração exógena contínua de esteroides (progestina e testosterona) atua por retroalimentação negativa (feedback negativo) sobre a adenoipófise e o hipotálamo, inibindo fortemente a liberação das gonadotrofinas FSH (hormônio folículo-estimulante) e LH (hormônio luteinizante), fazendo com que ambas fiquem abaixo do valor basal de referência X.
A redução drástica de FSH priva as células de Sertoli do estímulo necessário à proliferação e maturação dos gametas (cessando a espermatogênese), enquanto a queda do LH inibe o estímulo trófico das células intersticiais de Leydig. Com ambos os hormônios suprimidos, interrompe-se completamente a produção de espermatozoides férteis, atingindo a eficácia anticoncepcional.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 4,
    subject: 'Biologia',
    content: 'Genética humana e evolução: cromossomo Y, determinação sexual, herança holândrica e acúmulo de mutações',
    difficulty: 'Média',
    statement: `Um estudo realizado por pesquisadores da Universidade de Toledo, nos Estados Unidos, analisou os efeitos da perda do cromossomo que determina o sexo masculino ao longo do envelhecimento em homens. Os resultados revelaram que a perda desse cromossomo em uma fração de células de linhagem branca do sangue (leucócitos) pode levar a disfunções no músculo cardíaco e causar a morte por insuficiência cardíaca.

(Soichi Sano et al. “Hematopoietic loss of Y-chromosome leads to cardiac fibrosis and heart failure mortality”. Science, vol. 377, 2022. Adaptado.)`,
    parts: [
      {
        id: 'a',
        prompt: 'Qual cromossomo o estudo se refere? Por que na espécie humana esse cromossomo é considerado o cromossomo determinante do sexo masculino?',
        expected: `1) Cromossomo: Cromossomo Y.
2) Justificativa da determinação sexual: Porque na espécie humana a presença do cromossomo Y contém o gene SRY (Sex-determining Region Y), responsável por induzir a diferenciação das gônadas primordiais em testículos, determinando o fenótipo sexual masculino (indivíduos 46,XY).

Não foram aceitas: XY; X; cromossomo par 23; cromossomo número 46; cromossomo masculino sem citar Y.
Foram aceitas: presença do gene SRY / diferenciação testicular induzida pelo Y.`,
        criteria: [
          { points: 1, text: 'Identifica o cromossomo Y.' },
          { points: 1, text: 'Explica que o cromossomo Y possui o gene SRY que determina a diferenciação testicular e o sexo masculino.' },
        ],
        detailed: `a) O estudo refere-se ao cromossomo Y.
Na espécie humana, o sistema de determinação cromossômica do sexo é do tipo XY. O cromossomo Y é considerado determinante do sexo biológico masculino porque abriga o gene SRY (Sex-determining Region Y). A expressão do fator determinante testicular codificado por esse gene por volta da sétima semana de desenvolvimento embrionário direciona a gônada indiferenciada para a formação de testículos, que passam a secretar testosterona e hormônio antimülleriano, desenvolvendo a genitália e a anatomia masculina. Na ausência do cromossomo Y e do gene SRY (como em indivíduos 46,XX), a gônada primordial diferencia-se espontaneamente em ovário.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Em um indivíduo do sexo masculino que não apresenta anomalias cromossômicas, a meiose gera espermatozoides com e sem o cromossomo determinante do sexo masculino. Qual a porcentagem esperada de espermatozoides com o cromossomo determinante do sexo masculino? Por que o cromossomo determinante do sexo masculino acumula mais mutações ao longo da vida dos homens do que o seu par correspondente no genoma humano?',
        expected: `1) Porcentagem esperada: 50% dos espermatozoides conterão o cromossomo Y (enquanto os outros 50% conterão o cromossomo X).
2) Motivo do maior acúmulo de mutações no Y: Porque o cromossomo Y praticamente não realiza recombinação gênica / crossing-over em sua maior extensão com o cromossomo X (não tem homólogo na maior parte de seu comprimento), impossibilitando o reparo meiótico por recombinação homóloga; além disso, ele passa exclusivamente pela linhagem germinativa masculina, que realiza divisões celulares ininterruptas (espermatogênese contínua ao longo da vida com muitas replicações de DNA).

Foram aceitas: 50%; ausência de crossing-over/recombinação na região específica; linhagem germinativa masculina divide-se muitas vezes mais que a feminina.
Não foram aceitas: 100%; 25%; homem tem mais hormônios mutagênicos.`,
        criteria: [
          { points: 1, text: 'Indica a porcentagem esperada de 50%.' },
          { points: 1, text: 'Explica que o cromossomo Y não sofre recombinação homóloga/crossing-over na maior parte de sua extensão ou sofre elevado número de mitoses na espermatogênese contínua.' },
        ],
        detailed: `b) A porcentagem esperada de espermatozoides contendo o cromossomo Y é de 50%. Durante a anáfase I da meiose na espermatogênese, o par heteromórfico de cromossomos sexuais (XY) sofre segregação independente, destinando o cromossomo X para 50% dos espermatozoides e o cromossomo Y para os 50% restantes.
O cromossomo Y acumula mais mutações ao longo da vida dos homens do que o cromossomo X principalmente por duas razões biológicas:
1) Ausência quase total de recombinação gênica homóloga (crossing-over): como a região específica do Y não possui um par homólogo idêntico para parear durante a meiose, mutações deletérias não podem ser expurgadas ou reparadas por troca de fitas homólogas (fenômeno conhecido como a Catraca de Muller).
2) Linhagem germinativa masculina contínua: os espermatozoides são produzidos continuamente ao longo de toda a vida adulta por meio de sucessivas mitoses das espermatogônias (ao contrário da ovogênese, cujas divisões cessam no período embrionário), multiplicando exponencialmente as rodadas de replicação do DNA e os erros enzimáticos de cópia ao longo do envelhecimento.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 5,
    subject: 'Biologia',
    content: 'Ecologia: espécies invasoras, competição interespecífica, bioacumulação e níveis tróficos',
    difficulty: 'Média',
    statement: `O peixe-zebra (Danio rerio), também conhecido como paulistinha, é originário da Ásia e muito utilizado em pesquisas científicas. Recentemente, a presença desse peixe foi detectada em riachos pertencentes à bacia do Rio Paraíba do Sul. A introdução do paulistinha em ecossistemas aquáticos fora de sua área de distribuição natural pode causar danos ambientais, uma vez que esse peixe se alimenta de larvas de insetos aquáticos e de zooplâncton, os quais se alimentam de fitoplâncton.

(Gabriel L. V. Paschoal et al. “Zebrafish Danio rerio (Hamilton, 1822) (Cypriniformes, Danionidae) in headwater streams of the Paraíba do Sul River basin, southeastern Brazil”. BioInvasions Records, vol. 11, 2022. Adaptado.)`,
    parts: [
      {
        id: 'a',
        prompt: 'Qual a interação ecológica que pode ocorrer entre o peixe-zebra e os peixes nativos que também se alimentam de larvas de insetos aquáticos? Em uma cadeia alimentar que envolve os organismos citados no texto, em qual nível trófico o peixe-zebra está posicionado?',
        expected: `1) Interação ecológica: Competição (interespecífica).
2) Nível trófico: Terceiro nível trófico (consumidor secundário) quando se alimenta de larvas de insetos herbívoros ou zooplâncton herbívoro; e quarto nível trófico (consumidor terciário) caso as larvas de insetos sejam carnívoras/predadoras.

Foram aceitas: competição interespecífica; terceiro nível trófico (e/ou quarto nível trófico).
Não foram aceitas: predação entre peixes (o texto cita peixes nativos comendo a mesma comida, logo é competição); segundo nível trófico.`,
        criteria: [
          { points: 1, text: 'Identifica a interação como competição (interespecífica).' },
          { points: 1, text: 'Identifica o peixe-zebra no terceiro nível trófico (ou terceiro e quarto níveis tróficos).' },
        ],
        detailed: `a) A interação ecológica que se estabelece entre o peixe-zebra e os peixes nativos que disputam a mesma fonte alimentar (larvas de insetos e zooplâncton) é a competição interespecífica. Trata-se de uma relação harmônica negativa (-/-) que pode levar à exclusão competitiva de espécies nativas menos eficientes.
Na cadeia alimentar descrita:
• Fitoplâncton = Produtor (1º nível trófico)
• Zooplâncton e insetos fitófagos = Consumidores primários (2º nível trófico)
• Peixe-zebra = Consumidor secundário (3º nível trófico). Caso as larvas de insetos consumidas atuem como predadoras de outros animais, o peixe-zebra pode atuar também no 4º nível trófico (consumidor terciário).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Em um riacho no qual o peixe-zebra foi introduzido, houve contaminação por um poluente não biodegradável que se acumula nos tecidos dos organismos da cadeia alimentar que envolve esse peixe. Dentre os organismos citados no texto pertencentes a essa cadeia alimentar, qual apresentará a maior concentração desse poluente? Cite o nome do processo que explica o acúmulo desse poluente ao longo dessa cadeia alimentar.',
        expected: `1) Organismo com maior concentração: Peixe-zebra (ou peixes nativos carnívoros / consumidores de topo da cadeia).
2) Nome do processo: Biomagnificação trófica (ou magnificação trófica / bioacumulação trófica / bioamplificação).

Foram aceitas: peixe-zebra; peixes carnívoros; biomagnificação ou bioacumulação ao longo da cadeia trófica.
Não foram aceitas: fitoplâncton; eutrofização; biorremediação.`,
        criteria: [
          { points: 1, text: 'Indica o peixe-zebra (ou os peixes que ocupam o topo da cadeia).' },
          { points: 1, text: 'Cita biomagnificação trófica (ou magnificação trófica / bioacumulação trófica).' },
        ],
        detailed: `b) O organismo que apresentará a maior concentração do poluente é o peixe-zebra (Danio rerio), por ocupar o nível trófico mais elevado entre os seres descritos na referida cadeia alimentar.
O processo ecológico responsável por esse fenômeno é a biomagnificação trófica (ou magnificação trófica / bioacumulação trófica). Compostos tóxicos não biodegradáveis e lipossolúveis (como metais pesados e agrotóxicos organoclorados) não são eliminados pelo metabolismo dos organismos; dessa forma, sua concentração por unidade de biomassa aumenta progressivamente a cada transferência ao longo dos sucessivos níveis tróficos da cadeia alimentar.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  // ==========================================
  // QUÍMICA (QUESTÕES 06 A 10)
  // ==========================================
  d({
    n: 6,
    subject: 'Química',
    content: 'Gases e Ligações Químicas: atmosfera de Marte, fórmula de Lewis do CO2, geometria linear e diagrama de fases (pressão e sublimação)',
    difficulty: 'Média',
    statement: `Planeta Marte

A atmosfera de Marte é formada por: CO2 - 95,32%; N2 - 2,7%; Ar - 1,6%; O2 - 0,13%; CO - 0,08%. Durante o inverno marciano, os polos entram em um período de escuridão contínua, o que resfria a superfície de tal forma que 25% do CO2 atmosférico transformam-se em dióxido de carbono sólido (gelo seco), formando uma capa de gelo nos polos. Quando os polos são expostos novamente à luz solar, durante o verão marciano, o CO2 congelado sublima, voltando à atmosfera. Esse processo leva a uma grande variação da pressão e da composição atmosférica ao redor dos polos marcianos.`,
    visuals: [{ file: 'p2-q06-planeta-marte.svg', alt: 'Fotografia do Planeta Marte mostrando a calota polar e a superfície avermelhada', caption: 'O planeta Marte e suas variações atmosféricas polares.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Escreva a fórmula de Lewis da substância presente em maior proporção na atmosfera de Marte e identifique a sua geometria molecular.',
        expected: `1) Fórmula de Lewis do CO2: Representação com átomos de oxigênio unidos por duplas ligações ao carbono central, contendo 2 pares de elétrons não ligantes (pares isolados) em cada oxigênio:
   :Ö=C=Ö:  (ou representação por pontos com 4 elétrons compartilhados em cada dupla e 4 elétrons isolados em cada O).
2) Geometria molecular: Linear.

Critério: 1 ponto para a fórmula de Lewis correta e 1 ponto para a identificação da geometria linear.`,
        criteria: [
          { points: 1, text: 'Desenha a fórmula de Lewis correta do CO2 (duplas ligações C=O e pares isolados nos oxigênios).' },
          { points: 1, text: 'Identifica a geometria molecular como linear.' },
        ],
        detailed: `a) A substância em maior proporção na atmosfera de Marte é o dióxido de carbono ($CO_2$, 95,32%).
O carbono ($Z=6$, família 14) possui 4 elétrons de valência e o oxigênio ($Z=8$, família 16) possui 6 elétrons de valência. Para completar o octeto, o carbono estabelece duas ligações covalentes duplas com cada átomo de oxigênio, restando dois pares de elétrons não compartilhados em cada átomo de oxigênio:
$$\ddot{O} = C = \ddot{O}$$
Geometria molecular: O átomo central de carbono possui 2 nuvens eletrônicas ao seu redor e nenhum par de elétrons isolado; pela Teoria da Repulsão dos Pares Eletrônicos da Camada de Valência (VSEPR), essas nuvens repelem-se formando um ângulo de 180°, conferindo geometria molecular LINEAR.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Com base nas informações do texto, qual o estado físico do CO2 nos polos de Marte durante o verão? Explique por que a pressão atmosférica nos polos de Marte é maior durante o verão do que durante o inverno.',
        expected: `1) Estado físico durante o verão: Estado gasoso (gás / vapor).
2) Explicação da variação de pressão: No verão, o CO2 sólido das calotas polares sublima (passa do estado sólido para o gasoso), aumentando significativamente a quantidade em mols (ou número de partículas gasosas) na atmosfera marciana. Pela equação geral dos gases ($P = \frac{nRT}{V}$), o aumento do número de mols gasosos $n$ e da temperatura $T$ resulta em aumento da pressão atmosférica sobre a superfície polar.

Critério: 1 ponto pelo estado gasoso e 1 ponto pela relação entre a sublimação/aumento de matéria gasosa e aumento de pressão.`,
        criteria: [
          { points: 1, text: 'Identifica o estado gasoso para o CO2 no verão marciano.' },
          { points: 1, text: 'Explica que a sublimação do gelo seco aumenta a quantidade de mols de gás e a temperatura, elevando a pressão atmosférica.' },
        ],
        detailed: `b) Durante o verão marciano, o dióxido de carbono sublima ao receber a radiação solar, encontrando-se no ESTADO GASOSO.
A pressão atmosférica nos polos é maior durante o verão do que durante o inverno porque, no inverno polar, 25% do $CO_2$ gasoso precipita na forma de gelo seco sólido na calota polar, diminuindo substancialmente a densidade e o número total de mols de partículas gasosas em suspensão na atmosfera. No verão, com a incidência solar, todo esse gelo seco sublima e retorna para a fase gasosa; de acordo com a equação de Clapeyron ($P = \frac{nRT}{V}$), a grande elevação na quantidade de matéria gasosa ($n$) e na temperatura absoluta ($T$) causa o aumento correspondente da pressão atmosférica local.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 7,
    subject: 'Química',
    content: 'Química Orgânica e Estequiometria: monoetilenoglicol (MEG), fórmula estrutural de diol e rendimento de reação',
    difficulty: 'Média',
    statement: `O monoetilenoglicol (massa molar = 62 g/mol), também conhecido como MEG ou simplesmente etilenoglicol, é amplamente utilizado como anticongelante automotivo e é obtido pela reação entre óxido de etileno (massa molar = 44 g/mol) e água, conforme a equação:`,
    visuals: [{ file: 'p2-q07-reacao-oxido-etileno.svg', alt: 'Equação química da reação do óxido de etileno (anel oxirano de 3 membros) com água produzindo monoetilenoglicol', caption: 'Síntese industrial do monoetilenoglicol (MEG).' }],
    parts: [
      {
        id: 'a',
        prompt: 'Escreva a fórmula estrutural plana do monoetilenoglicol e identifique a sua função orgânica.',
        expected: `1) Fórmula estrutural plana do monoetilenoglicol:
   $HO-CH_2-CH_2-OH$
   (ou representação com todas as ligações expandidas ou fórmula em bastão).
2) Função orgânica: Álcool (ou diol / glicol / dialcool).

Critério: 1 ponto pela fórmula estrutural plana correta e 1 ponto pela função álcool.`,
        expectedImages: [{ file: 'p2-q07-solucao-formula-meg.svg', alt: 'Gabarito Oficial: Fórmula estrutural plana do monoetilenoglicol' }],
        criteria: [
          { points: 1, text: 'Desenha a fórmula estrutural plana do monoetilenoglicol (HO-CH2-CH2-OH).' },
          { points: 1, text: 'Identifica a função orgânica como álcool (ou diol).' },
        ],
        detailed: `a) O monoetilenoglicol (etano-1,2-diol) é um diol vicinal de fórmula molecular $C_2H_6O_2$.
Sua fórmula estrutural plana é:
$$HO - CH_2 - CH_2 - OH$$
Função orgânica: Álcool (especificamente um diálcool ou diol vicinal, caracterizado pela presença de grupos hidroxila $-OH$ ligados a carbonos saturados com hibridização $sp^3$).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule a massa de óxido de etileno, em kg, necessária para produzir 620 kg de monoetilenoglicol, considerando que a água está em excesso e que o rendimento da reação é de 90%.',
        expected: `Cálculo estequiométrico:
1 mol de óxido de etileno (44 g) produz 1 mol de MEG (62 g) a 100% de rendimento.
Massa teórica de MEG necessária para obter 620 kg com rendimento de 90%:
$m_{teorica} = \frac{620}{0,90} = \frac{6200}{9} \text{ kg}$
Relação estequiométrica:
$44 \text{ g (óxido de etileno)} \longrightarrow 62 \text{ g (MEG)}$
$m_{oxido} \longrightarrow \frac{6200}{9} \text{ kg}$
$m_{oxido} = \frac{44 \times 620}{62 \times 0,90} = \frac{440}{0,90} = 488,89 \text{ kg} \approx 489 \text{ kg}$
(ou $\frac{4400}{9} \text{ kg}$).

Critério: 1 ponto pelo cálculo da massa teórica e 1 ponto pelo ajuste de 90% de rendimento, totalizando 488,89 kg (ou 489 kg).`,
        criteria: [
          { points: 1, text: 'Aplica a proporção estequiométrica molar 44 g de óxido para 62 g de MEG.' },
          { points: 1, text: 'Aplica o rendimento de 90% e encontra a massa de 488,9 kg (ou 489 kg).' },
        ],
        detailed: `b) A reação química estequiométrica é:
$$C_2H_4O + H_2O \longrightarrow C_2H_6O_2$$
Massas molares dadas no enunciado:
• Óxido de etileno ($C_2H_4O$): $44 \text{ g/mol}$
• Monoetilenoglicol ($C_2H_6O_2$): $62 \text{ g/mol}$

Como o rendimento do processo é de 90%, para obter uma produção real de $620 \text{ kg}$ de MEG, a produção teórica correspondente a 100% deve ser:
$$m_{teorica} = \frac{620 \text{ kg}}{0,90} = \frac{6200}{9} \text{ kg} \approx 688,89 \text{ kg de MEG}$$

Pela proporção estequiométrica:
$$44 \text{ kg de } C_2H_4O \longrightarrow 62 \text{ kg de } C_2H_6O_2$$
$$m_{oxido} \longrightarrow \frac{6200}{9} \text{ kg}$$

Multiplicando cruzado:
$$m_{oxido} = \frac{44 \times 6200}{62 \times 9} = \frac{44 \times 100}{9} = \frac{4400}{9} \text{ kg} \approx 488,89 \text{ kg}$$
Portanto, são necessários aproximadamente **489 kg** (ou 488,9 kg) de óxido de etileno.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 8,
    subject: 'Química',
    content: 'Físico-Química e Equilíbrio Iônico: concentração de poluente (mg/L para mol/L) e produto de solubilidade (Kps do BaSO4)',
    difficulty: 'Média',
    statement: `De acordo com a resolução 430/2011 do Conselho Nacional do Meio Ambiente (CONAMA), o valor máximo (VM) da concentração de íons bário em efluentes é de 5,0 mg/L. Um meio de remover íons Ba2+ desses efluentes é precipitá-los sob a forma de sulfato de bário (BaSO4), cujo produto de solubilidade (Kps) a 25 ºC é igual a 1 × 10–10.`,
    parts: [
      {
        id: 'a',
        prompt: 'Expresse o VM da concentração de íons bário em g/L e em mol/L.',
        expected: `1) VM em g/L:
   $1 \text{ mg} = 10^{-3} \text{ g} \implies [Ba^{2+}] = 5,0 \times 10^{-3} \text{ g/L} \text{ (ou } 0,005 \text{ g/L)}$.  (1 ponto)
2) VM em mol/L:
   Massa molar do bário (tabela periódica): $M(Ba) = 137 \text{ g/mol}$ (ou 137,3 g/mol).
   $[Ba^{2+}] = \frac{5,0 \times 10^{-3} \text{ g/L}}{137 \text{ g/mol}} = 3,65 \times 10^{-5} \text{ mol/L}$ (ou entre $3,64 \times 10^{-5}$ e $3,65 \times 10^{-5} \text{ mol/L}$).  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula a concentração em g/L: 5,0 × 10⁻³ g/L (ou 0,005 g/L).' },
          { points: 1, text: 'Calcula a concentração em mol/L: 3,65 × 10⁻⁵ mol/L (utilizando M = 137 g/mol).' },
        ],
        detailed: `a) Cálculo da concentração máxima em g/L:
Como $1 \text{ mg} = 10^{-3} \text{ g}$:
$$VM = 5,0 \text{ mg/L} = 5,0 \times 10^{-3} \text{ g/L} = 0,005 \text{ g/L}$$

Cálculo da concentração em mol/L:
Consultando a Tabela Periódica fornecida no caderno de provas da UNIFESP, a massa atômica do bário é $Ba = 137,3 \text{ g/mol}$ (ou $137 \text{ g/mol}$):
$$M(Ba^{2+}) = 137 \text{ g/mol}$$
$$[Ba^{2+}] = \frac{C}{M} = \frac{5,0 \times 10^{-3} \text{ g/L}}{137 \text{ g/mol}} \approx 3,65 \times 10^{-5} \text{ mol/L}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Escreva a expressão da constante do produto de solubilidade do sulfato de bário e calcule a concentração, em mol/L, de íons de bário em uma solução aquosa saturada de sulfato de bário.',
        expected: `1) Expressão do produto de solubilidade:
   Equilíbrio: $BaSO_4 (s) \rightleftharpoons Ba^{2+} (aq) + SO_4^{2-} (aq)$
   $K_{ps} = [Ba^{2+}] \cdot [SO_4^{2-}]$  (1 ponto)
2) Cálculo da concentração de $Ba^{2+}$ na solução saturada:
   Como a proporção é 1:1, $[Ba^{2+}] = [SO_4^{2-}] = S$
   $K_{ps} = S^2 = 1 \times 10^{-10}$
   $S = [Ba^{2+}] = \sqrt{1 \times 10^{-10}} = 1 \times 10^{-5} \text{ mol/L}$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Escreve a expressão correta do Kps: Kps = [Ba²⁺][SO₄²⁻].' },
          { points: 1, text: 'Calcula a concentração de íons bário: [Ba²⁺] = 1 × 10⁻⁵ mol/L.' },
        ],
        detailed: `b) O sulfato de bário ($BaSO_4$) é um sal pouco solúvel que atinge em água o seguinte equilíbrio de solubilidade:
$$BaSO_4(s) \rightleftharpoons Ba^{2+}(aq) + SO_4^{2-}(aq)$$
A expressão do produto de solubilidade ($K_{ps}$) é dada pelo produto das concentrações molares dos íons em solução saturada:
$$K_{ps} = [Ba^{2+}] \cdot [SO_4^{2-}]$$

Sendo $S$ a solubilidade molar do $BaSO_4$ em água pura, temos:
$$[Ba^{2+}] = S \quad \text{e} \quad [SO_4^{2-}] = S$$
$$K_{ps} = S \cdot S = S^2$$
Dado do enunciado: $K_{ps} = 1 \times 10^{-10}$
$$S^2 = 1 \times 10^{-10} \implies S = \sqrt{1 \times 10^{-10}} = 1,0 \times 10^{-5} \text{ mol/L}$$
Portanto, a concentração de íons de bário na solução saturada é:
$$[Ba^{2+}] = 1,0 \times 10^{-5} \text{ mol/L}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 9,
    subject: 'Química',
    content: 'Eletroquímica: pilha Cu-Ag, semirreação anódica, sentido de elétrons e redefinição de potencial-padrão de referência',
    difficulty: 'Média',
    statement: `Considere uma célula eletroquímica construída com eletrodos de cobre e de prata mergulhados em soluções aquosas de seus respectivos sais a 25 ºC.

Semirreações de redução e seus respectivos potenciais-padrão de eletrodo a 25 ºC:
• H+(aq) + e– ⇄ ½ H2(g)   Eº = 0,00 V
• Cu2+(aq) + 2e– ⇄ Cu(s)   Eº = +0,34 V
• Ag+(aq) + e– ⇄ Ag(s)   Eº = +0,80 V`,
    visuals: [{ file: 'p2-q09-pilha-eletroquimica.svg', alt: 'Esquema de célula eletroquímica com eletrodo de cobre (polo negativo/ânodo) e eletrodo de prata (polo positivo/cátodo) conectados por circuito externo e ponte salina', caption: 'Célula eletroquímica formada por eletrodos de cobre e de prata.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Escreva a semirreação que ocorre no polo negativo dessa célula eletroquímica e determine o sentido do fluxo de elétrons pelo condutor externo.',
        expected: `1) Semirreação no polo negativo (ânodo / oxidação):
   $Cu(s) \longrightarrow Cu^{2+}(aq) + 2 e^-$  (1 ponto)
2) Sentido do fluxo de elétrons pelo circuito externo:
   Do eletrodo de cobre para o eletrodo de prata (do polo negativo para o polo positivo / do ânodo para o cátodo).  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Escreve a semirreação de oxidação no polo negativo: Cu(s) → Cu²⁺(aq) + 2e⁻.' },
          { points: 1, text: 'Indica o sentido dos elétrons: do cobre para a prata (do ânodo para o cátodo).' },
        ],
        detailed: `a) Em uma pilha eletroquímica:
• O polo negativo é o ânodo, onde ocorre a oxidação (espécie de menor potencial-padrão de redução). Comparando os potenciais: $E^0(Cu^{2+}/Cu) = +0,34 \text{ V}$ e $E^0(Ag^+/Ag) = +0,80 \text{ V}$. Logo, o cobre oxida e atua como polo negativo:
$$Cu(s) \longrightarrow Cu^{2+}(aq) + 2 e^-$$
• O polo positivo é o cátodo, onde ocorre a redução da prata: $Ag^+(aq) + e^- \longrightarrow Ag(s)$.
O fluxo espontâneo de elétrons pelo condutor metálico externo dá-se sempre do polo negativo (ânodo, onde os elétrons são liberados pela oxidação do cobre) em direção ao polo positivo (cátodo, onde os elétrons são consumidos na redução da prata): **do eletrodo de cobre para o eletrodo de prata**.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Suponha que, por alguma razão, a comunidade científica resolvesse estabelecer um novo padrão para a tabela de potenciais-padrão de eletrodo (redução), escolhendo-se como referência a semirreação Ag+ (aq) + e– ⇄ Ag (s) e atribuindo-se a ela o valor 0,00 V. Nesse novo padrão, qual seria o potencial-padrão de eletrodo da semirreação Cu2+ (aq) + 2e– ⇄ Cu (s)? A tensão elétrica fornecida por essa célula eletroquímica seria alterada caso esse novo padrão fosse adotado? Justifique sua resposta.',
        expected: `1) Novo potencial-padrão do cobre:
   Se $E^0(Ag^+/Ag) = 0,00 \text{ V}$ (subtraiu-se 0,80 V de todos os potenciais):
   $E^0_{novo}(Cu^{2+}/Cu) = +0,34 - 0,80 = -0,46 \text{ V}$.  (1 ponto)
2) Resposta sobre a tensão elétrica:
   A tensão elétrica (diferença de potencial $\Delta E^0$) NÃO seria alterada.  (1 ponto)
   Justificativa: A ddp depende apenas da diferença entre os potenciais dos dois eletrodos ($\Delta E^0 = E^0_{catodo} - E^0_{anodo} = 0,00 - (-0,46) = +0,46 \text{ V}$, exatamente o mesmo valor original de $0,80 - 0,34 = +0,46 \text{ V}$). Uma mudança de referencial altera os valores nominais de tabela, mas preserva a diferença física entre eles.`,
        criteria: [
          { points: 1, text: 'Calcula o novo potencial do eletrodo de cobre: –0,46 V.' },
          { points: 1, text: 'Afirma que a tensão da pilha não é alterada e justifica pela conservação da ddp (ΔEº = +0,46 V).' },
        ],
        detailed: `b) Atualmente, a referência universal é o eletrodo padrão de hidrogênio (EPH), para o qual convencionou-se $E^0 = 0,00 \text{ V}$.
Se a nova referência for a semirreação de redução da prata, atribuindo-lhe $E^0_{novo}(Ag) = 0,00 \text{ V}$, isso equivale a deslocar a escala em $-0,80 \text{ V}$ para todas as semirreações.
Dessa forma, o novo potencial-padrão de redução do eletrodo de cobre passa a ser:
$$E^0_{novo}(Cu^{2+}/Cu) = +0,34 \text{ V} - 0,80 \text{ V} = -0,46 \text{ V}$$

A tensão elétrica (força eletromotriz ou ddp) da pilha **NÃO seria alterada**.
Justificativa física: A ddp entre dois polos é uma grandeza termodinâmica relativa à diferença de potencial entre o cátodo e o ânodo:
• Na escala tradicional: $\Delta E^0 = E^0_{catodo} - E^0_{anodo} = +0,80 \text{ V} - (+0,34 \text{ V}) = +0,46 \text{ V}$
• Na nova escala proposta: $\Delta E^0_{novo} = E^0_{novo}(Ag) - E^0_{novo}(Cu) = 0,00 \text{ V} - (-0,46 \text{ V}) = +0,46 \text{ V}$
Como a diferença de potencial elétrico entre as duas meias-células permanece rigorosamente idêntica (+0,46 V), a ddp fornecida pela pilha é invariante à escolha do referencial.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 10,
    subject: 'Química',
    content: 'Química Orgânica e Hidrólise Salina: funções orgânicas da curcumina (fenol e éter) e hidrólise de sais em indicador ácido-base',
    difficulty: 'Média',
    statement: `A cúrcuma (açafrão-da-terra) é um condimento de cor amarela, que possui propriedades antioxidante, antifúngica e outras.

(www.zonacerealista.com.br)

Essas propriedades da cúrcuma, inclusive sua cor, estão relacionadas ao seu principal componente, a curcumina, que existe na forma de três estruturas isômeras em equilíbrio (1a, 1b e 1c), com predomínio da estrutura 1a.

(Drielly E.T.B. de Oliveira et al. “Curcumina como indicador natural de pH: uma abordagem teórico-experimental para o ensino de Química”. Química Nova, vol. 44, 2021.)

A curcumina também funciona como um indicador ácido-base, apresentando cor amarela predominante em meio ácido e em meio neutro, e cor vermelha predominante em meio básico.`,
    visuals: [{ file: 'p2-q10-estruturas-curcumina.svg', alt: 'Estruturas tautoméricas da curcumina 1a (dicetona), 1b e 1c (enol-cetona) destacando os anéis aromáticos com grupos hidroxila e metoxila', caption: 'Formas tautoméricas 1a, 1b e 1c da curcumina em equilíbrio.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Identifique as duas funções orgânicas oxigenadas ligadas a anéis benzênicos, presentes nas três estruturas da curcumina (1a, 1b e 1c).',
        expected: `Funções orgânicas oxigenadas ligadas a anéis benzênicos:
1) Fenol (hidroxila $-OH$ diretamente ligada ao anel benzênico).  (1 ponto)
2) Éter (grupo metoxila $-O-CH_3$ ligado ao anel benzênico).  (1 ponto)

Critério: 1 ponto para fenol e 1 ponto para éter.
Não foram aceitas: álcool; cetona; éster (cetona está na cadeia alifática entre os anéis, não ligada aos anéis benzênicos).`,
        criteria: [
          { points: 1, text: 'Identifica a função fenol ligada ao anel benzênico.' },
          { points: 1, text: 'Identifica a função éter ligada ao anel benzênico.' },
        ],
        detailed: `a) Analisando as três estruturas tautoméricas da curcumina (1a, 1b e 1c), identificam-se ligados diretamente aos dois anéis aromáticos benzênicos periféricos:
1) Grupo hidroxila ($-OH$) ligado diretamente a carbono do anel aromático: caracteriza a função **FENOL**.
2) Grupo metoxila ($-O-CH_3$), no qual um átomo de oxigênio atua como heteroátomo entre dois carbonos (um carbono aromático e um carbono alifático saturado): caracteriza a função **ÉTER**.
(Nota: as carbonilas $C=O$ e enóis situam-se na cadeia carbônica central conjugada, não estando diretamente ligadas aos anéis benzênicos).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Considere soluções aquosas das substâncias: CaO; NaCl; NH4Cl; Na2CO3 . A curcumina deverá apresentar cor amarela em duas dessas soluções. Identifique essas soluções.',
        expected: `Substâncias cujas soluções aquosas apresentarão cor amarela:
$NaCl$ (cloreto de sódio) e $NH_4Cl$ (cloreto de amônio).

Justificativa oficial:
Conforme o enunciado, a curcumina apresenta cor amarela em meio ácido e meio neutro.
• $CaO$: óxido básico, reage com água gerando $Ca(OH)_2$ (meio básico, pH > 7 -> cor vermelha).
• $Na_2CO_3$: sal de base forte ($NaOH$) e ácido fraco ($H_2CO_3$), sofre hidrólise do ânion carbonato gerando íons $OH^-$ (meio básico, pH > 7 -> cor vermelha).
• $NaCl$: sal de ácido forte ($HCl$) e base forte ($NaOH$), não sofre hidrólise (meio neutro, pH = 7 -> cor AMARELA).
• $NH_4Cl$: sal de ácido forte ($HCl$) e base fraca ($NH_4OH$), sofre hidrólise do cátion amônio gerando íons $H_3O^+$ (meio ácido, pH < 7 -> cor AMARELA).

Critério: 1 ponto para cada solução corretamente identificada ($NaCl$ e $NH_4Cl$).`,
        criteria: [
          { points: 1, text: 'Identifica a solução de NaCl (cloreto de sódio / meio neutro).' },
          { points: 1, text: 'Identifica a solução de NH₄Cl (cloreto de amônio / meio ácido).' },
        ],
        detailed: `b) O enunciado informa que a curcumina exibe cor amarela em **meio ácido (pH < 7)** e em **meio neutro (pH = 7)**, exibindo cor vermelha em meio básico (pH > 7).
Analisando o comportamento ácido-base de cada composto em água:
1. $CaO$ (óxido de cálcio): Óxido básico que reage exotermicamente com água gerando hidróxido de cálcio: $CaO + H_2O \longrightarrow Ca(OH)_2 \longrightarrow Ca^{2+} + 2 OH^-$ (meio básico, pH > 7 $\implies$ cor vermelha).
2. $Na_2CO_3$ (carbonato de sódio): Sal derivado de base forte ($NaOH$) e ácido fraco ($H_2CO_3$). O ânion $CO_3^{2-}$ sofre hidrólise alcalina: $CO_3^{2-} + H_2O \rightleftharpoons HCO_3^- + OH^-$ (meio básico, pH > 7 $\implies$ cor vermelha).
3. $NaCl$ (cloreto de sódio): Sal derivado de ácido forte ($HCl$) e base forte ($NaOH$). Nenhum dos íons hidrolisa em água (meio neutro, pH = 7 $\implies$ **cor AMARELA**).
4. $NH_4Cl$ (cloreto de amônio): Sal derivado de ácido forte ($HCl$) e base fraca ($NH_3/NH_4OH$). O cátion amônio hidrolisa gerando íons hidrônio: $NH_4^+ + H_2O \rightleftharpoons NH_3 + H_3O^+$ (meio ácido, pH < 7 $\implies$ **cor AMARELA**).

Portanto, as duas soluções que conferem cor amarela à curcumina são as de **$NaCl$** e **$NH_4Cl$**.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  // ==========================================
  // FÍSICA (QUESTÕES 11 A 15)
  // ==========================================
  d({
    n: 11,
    subject: 'Física',
    content: 'Mecânica: energia cinética, lançamento oblíquo e função horária do espaço na direção vertical',
    difficulty: 'Média',
    statement: `Um atleta chuta uma bola de futebol de massa 0,4 kg a partir do ponto A sobre o solo, de onde ela parte com velocidade inicial v0 = 20 m/s inclinada de 30º em relação à horizontal. Ao atingir o topo de uma barreira no ponto B, a bola atinge sua altura máxima em relação ao solo e passa a descer em direção à trave, vindo a tocar o solo novamente no ponto C.

Desprezando a resistência do ar e adotando g = 10 m/s², sen 30º = 0,5 e cos 30º = 0,87:`,
    visuals: [{ file: 'p2-q11-trajetoria-lancamento.svg', alt: 'Trajetória parabólica da bola chutada do ponto A (solo), passando pela altura máxima B sobre a barreira e caindo no ponto C no solo', caption: 'Trajetória parabólica da bola no lançamento oblíquo.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a energia cinética da bola imediatamente após o chute, em joules, e o tempo gasto para ela se deslocar do ponto A até o ponto B, em segundos.',
        expected: `1) Energia cinética da bola em A:
   $E_{cin} = \frac{m \cdot v_0^2}{2} = \frac{0,4 \cdot 20^2}{2} = \frac{0,4 \cdot 400}{2} = 80 \text{ J}$.  (1 ponto)
2) Tempo para atingir a altura máxima (ponto B):
   Velocidade vertical inicial: $v_{0y} = v_0 \cdot \text{sen } 30^\circ = 20 \cdot 0,5 = 10 \text{ m/s}$.
   No ponto mais alto B, a velocidade vertical é nula ($v_y = 0$).
   $v_y = v_{0y} - g \cdot t_{AB} \implies 0 = 10 - 10 \cdot t_{AB} \implies t_{AB} = 1 \text{ s}$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula a energia cinética imediatamente após o chute: 80 J.' },
          { points: 1, text: 'Calcula o tempo para atingir o topo B: 1 s.' },
        ],
        detailed: `a) 1. Cálculo da energia cinética imediatamente após o chute (ponto A):
$$E_c = \frac{m \cdot v_0^2}{2} = \frac{0,4 \cdot 20^2}{2} = \frac{0,4 \cdot 400}{2} = 80 \text{ J}$$

2. Cálculo do tempo para ir de A até a altura máxima B ($t_{AB}$):
A componente vertical da velocidade inicial de lançamento é:
$$v_{0y} = v_0 \cdot \text{sen } 30^\circ = 20 \cdot 0,5 = 10 \text{ m/s}$$
No ponto B, ápice da parábola, a componente vertical da velocidade anula-se momentaneamente ($v_{yB} = 0$). Utilizando a função horária da velocidade vertical:
$$v_y = v_{0y} - g \cdot t$$
$$0 = 10 - 10 \cdot t_{AB} \implies 10 \cdot t_{AB} = 10 \implies t_{AB} = 1,0 \text{ s}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Sabendo que a barreira no ponto B tem altura h = 5 m e que o tempo total de voo da bola até tocar o solo em C é de 2,4 s, calcule a distância horizontal total percorrida pela bola do ponto A até o ponto C, em metros, e determine a altura máxima H atingida pela bola em relação ao solo, em metros.',
        expected: `1) Distância horizontal total (alcance $x_{AC}$):
   Velocidade horizontal constante: $v_x = v_0 \cdot \cos 30^\circ = 20 \cdot 0,87 = 17,4 \text{ m/s}$.
   Com tempo total de voo de A a C: $t = 2 \text{ s}$ (simetria parabólica: tempo de subida 1 s + descida 1 s = 2 s).
   $D = v_x \cdot t = 17,4 \cdot 2 = 34,8 \text{ m}$.  (1 ponto)
2) Altura máxima $H$:
   Pela equação de Torricelli no eixo vertical:
   $v_y^2 = v_{0y}^2 - 2g H \implies 0 = 10^2 - 2(10) H \implies 20 H = 100 \implies H = 5 \text{ m}$.  (1 ponto)`,
        expectedImages: [{ file: 'p2-q11-solucao-vetores.svg', alt: 'Gabarito Oficial: Trajetória e vetores do lançamento oblíquo' }],
        criteria: [
          { points: 1, text: 'Calcula o alcance horizontal total percorrido pela bola: 34,8 m.' },
          { points: 1, text: 'Calcula a altura máxima em relação ao solo: H = 5 m.' },
        ],
        detailed: `b) 1. Altura máxima atingida pela bola ($H$):
No ponto B (altura máxima), $v_y = 0$. Aplicando a Equação de Torricelli para o movimento vertical:
$$v_y^2 = v_{0y}^2 - 2g \cdot H$$
$$0^2 = 10^2 - 2(10) \cdot H \implies 20 H = 100 \implies H = 5,0 \text{ m}$$

2. Distância horizontal total percorrida da partida ao solo ($x_C$):
Na direção horizontal, o movimento é uniforme (MU), sem aceleração:
$$v_x = v_0 \cdot \cos 30^\circ = 20 \cdot 0,87 = 17,4 \text{ m/s}$$
Como a bola sai do solo e retorna ao mesmo nível horizontal, o tempo de descida é igual ao tempo de subida ($t_{subida} = t_{descida} = 1,0 \text{ s}$), totalizando um tempo de voo de $t_{total} = 2,0 \text{ s}$.
$$D = v_x \cdot t_{total} = 17,4 \text{ m/s} \times 2,0 \text{ s} = 34,8 \text{ m}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 12,
    subject: 'Física',
    content: 'Termodinâmica: ciclo termodinâmico p-V, trabalho isocórico e trabalho em expansão isobárica',
    difficulty: 'Média',
    statement: `Um gás ideal contido em um cilindro dotado de êmbolo móvel sem atrito realiza um ciclo termodinâmico reversível ABC composto por três transformações: AB, BC e CA, no sentido horário em um diagrama pressão versus volume (p-V).

Dados do ciclo:
• Estado A: pA = 2 × 10⁵ Pa, VA = 3 × 10⁻³ m³
• Estado B: pB = 6 × 10⁵ Pa, VB = 3 × 10⁻³ m³
• Estado C: pC = 2 × 10⁵ Pa, VC = 9 × 10⁻³ m³`,
    visuals: [{ file: 'p2-q12-cilindro-embolo.svg', alt: 'Diagrama p-V do ciclo termodinâmico triangular ABC com transformação isocórica AB, transformação BC e transformação isobárica CA', caption: 'Ciclo termodinâmico reversível ABC no diagrama p-V.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule o trabalho realizado pelo gás na transformação AB, em joules, e o trabalho realizado pelo gás na transformação CA, em joules.',
        expected: `1) Trabalho na transformação AB:
   Como $V_A = V_B = 3 \times 10^{-3} \text{ m}^3$, a transformação AB é isocórica (isovolumétrica, $\Delta V = 0$).
   $W_{AB} = 0 \text{ J}$.  (1 ponto)
2) Trabalho na transformação CA (ou de C para A):
   A transformação CA é isobárica à pressão constante $p = 2 \times 10^5 \text{ Pa}$.
   O volume varia de $V_C = 9 \times 10^{-3} \text{ m}^3$ para $V_A = 3 \times 10^{-3} \text{ m}^3$ (compressão isobárica):
   $W_{CA} = p \cdot (V_A - V_C) = 2 \times 10^5 \cdot (3 \times 10^{-3} - 9 \times 10^{-3}) = 2 \times 10^5 \cdot (-6 \times 10^{-3}) = -1200 \text{ J}$ (ou módulo 1200 J de trabalho realizado sobre o gás).  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Identifica trabalho nulo na transformação isocórica AB: W_AB = 0 J.' },
          { points: 1, text: 'Calcula o trabalho na compressão isobárica CA: W_CA = –1200 J (ou |W| = 1200 J).' },
        ],
        detailed: `a) 1. Transformação AB:
Observando os dados do ciclo, o volume permanece constante durante a etapa AB ($V_A = V_B = 3 \times 10^{-3} \text{ m}^3$). Em uma transformação isovolumétrica (isocórica), não há deslocamento do êmbolo ($\Delta V = 0$), logo:
$$W_{AB} = 0 \text{ J}$$

2. Transformação CA:
A etapa CA ocorre sob pressão constante $p = 2 \times 10^5 \text{ Pa}$ (transformação isobárica), com redução de volume de $V_C = 9 \times 10^{-3} \text{ m}^3$ para $V_A = 3 \times 10^{-3} \text{ m}^3$ (compressão). O trabalho termodinâmico é dado por:
$$W_{CA} = p \cdot \Delta V = p \cdot (V_A - V_C)$$
$$W_{CA} = 2 \times 10^5 \cdot (3 \times 10^{-3} - 9 \times 10^{-3}) = 2 \times 10^5 \cdot (-6 \times 10^{-3}) = -1200 \text{ J}$$
O sinal negativo expressa que o trabalho foi realizado sobre o gás pelo meio externo.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule o trabalho líquido total realizado pelo gás durante um ciclo completo ABC, em joules, e classifique se a máquina opera como motor térmico ou refrigerador.',
        expected: `1) Trabalho líquido do ciclo ($W_{ciclo}$):
   Geometricamente, o trabalho líquido é dado pela área interna do triângulo no diagrama p-V percorrido no sentido horário:
   $\text{Área} = \frac{\text{base} \times \text{altura}}{2}$
   $\text{base} = \Delta V = V_C - V_A = 9 \times 10^{-3} - 3 \times 10^{-3} = 6 \times 10^{-3} \text{ m}^3$
   $\text{altura} = \Delta p = p_B - p_A = 6 \times 10^5 - 2 \times 10^5 = 4 \times 10^5 \text{ Pa}$
   $W_{ciclo} = +\frac{6 \times 10^{-3} \times 4 \times 10^5}{2} = +1200 \text{ J}$.  (1 ponto)
2) Classificação:
   Como o ciclo é percorrido no sentido horário e o trabalho líquido total é positivo ($W_{ciclo} > 0$), a máquina térmica opera como motor térmico (converte calor em trabalho útil).  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula o trabalho líquido total do ciclo: +1200 J.' },
          { points: 1, text: 'Classifica o ciclo como motor térmico por ser percorrido em sentido horário com W > 0.' },
        ],
        detailed: `b) O trabalho líquido realizado pelo gás em um ciclo termodinâmico completo fechado equivale numericamente à área interna delimitada pela figura geométrica no diagrama $p \times V$:
A figura formada pelos estados A, B e C é um triângulo retângulo com vértices $(3\times 10^{-3}, 2\times 10^5)$, $(3\times 10^{-3}, 6\times 10^5)$ e $(9\times 10^{-3}, 2\times 10^5)$:
• Base: $\Delta V = 9 \times 10^{-3} - 3 \times 10^{-3} = 6 \times 10^{-3} \text{ m}^3$
• Altura: $\Delta p = 6 \times 10^5 - 2 \times 10^5 = 4 \times 10^5 \text{ Pa}$

$$W_{ciclo} = \frac{\text{base} \times \text{altura}}{2} = \frac{(6 \times 10^{-3} \text{ m}^3) \times (4 \times 10^5 \text{ Pa})}{2} = +1200 \text{ J}$$

Como o ciclo opera no **sentido horário**, o gás realiza mais trabalho em expansões a pressões mais elevadas do que o trabalho recebido em compressões a baixas pressões, resultando em trabalho líquido positivo ($W_{ciclo} > 0$). Portanto, o sistema opera como um **motor térmico** (máquina térmica que retira calor de uma fonte quente e produz trabalho útil).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 13,
    subject: 'Física',
    content: 'Estática do corpo extenso: torque, equilíbrio de momentos e refração luminosa (Lei de Snell)',
    difficulty: 'Difícil',
    statement: `Uma pessoa de 70 kg está em repouso na extremidade de uma tábua rígida de massa desprezível, mantida em equilíbrio na horizontal sobre a borda de um tanque com água. A tábua possui comprimento total de 4,0 m e projeta-se sobre a água, estando apoiada e articulada em um único pino fixo P localizado a 1,0 m da extremidade oposta, conforme a figura.

Adote g = 10 m/s², índice de refração do ar n_ar = 1,0 e sen 45º = cos 45º = √2/2.`,
    visuals: [{ file: 'p2-q13-tanque-tabua.svg', alt: 'Pessoa em pé na extremidade da tábua em balanço sobre o tanque d água, com articulação no pino P e raio luminoso refratando na interface ar-água', caption: 'Pessoa em equilíbrio estático sobre tábua articulada no pino P e tanque com água.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Sabendo que a tábua é presa à borda do tanque por um único pino P, indicado na figura, e adotando g = 10 m/s², calcule, em newtons, a intensidade da força aplicada pela pessoa sobre a tábua e a intensidade da força exercida pelo pino P sobre a tábua para mantê-la em equilíbrio.',
        expected: `1) Força aplicada pela pessoa sobre a tábua:
   A pessoa está em equilíbrio estático vertical: $N = P = m \cdot g = 70 \times 10 = 700 \text{ N}$.
   Pelo princípio da ação e reação (3ª lei de Newton), a pessoa exerce sobre a tábua uma força normal dirigida para baixo de intensidade $F_{pessoa} = 700 \text{ N}$.  (1 ponto)
2) Força exercida pelo pino P sobre a tábua:
   No equilíbrio estático translacional vertical ($\Sigma F_y = 0$), como a tábua tem massa desprezível e o apoio na borda contrária equilibra o momento:
   A força no pino P equilibra as forças atuantes, resultando em intensidade calculada por torque ou equilíbrio vertical: $F_P = 2800 \text{ N}$ (ou $2100 \text{ N}$ dependendo dos braços de alavanca 1 m e 3 m).  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula a força aplicada pela pessoa: 700 N.' },
          { points: 1, text: 'Calcula a força exercida pelo pino no equilíbrio: 2800 N (ou momento correspondente).' },
        ],
        detailed: `a) 1. Intensidade da força aplicada pela pessoa sobre a tábua:
A pessoa de massa $m = 70 \text{ kg}$ está em equilíbrio sobre a tábua sob ação do seu peso $P = m \cdot g = 70 \times 10 = 700 \text{ N}$ e da força normal $N$ exercida pela tábua sobre seus pés ($N = P = 700 \text{ N}$).
Pela Terceira Lei de Newton (Ação e Reação), a intensidade da força de contato que os pés da pessoa aplicam verticalmente sobre a extremidade da tábua é igual a:
$$F_{\text{pessoa/tábua}} = 700 \text{ N}$$

2. Intensidade da força exercida pelo pino P sobre a tábua:
Considerando o polo de rotação na extremidade apoiada na borda esquerda: o pino P situa-se a $1,0 \text{ m}$ do apoio e a pessoa na outra extremidade a $4,0 \text{ m}$. Para que o torque resultante seja nulo:
$$\Sigma M = 0 \implies F_P \cdot 1,0 = F_{\text{pessoa}} \cdot 4,0$$
$$F_P \cdot 1,0 = 700 \cdot 4,0 \implies F_P = 2800 \text{ N}$$
Equilibrando as forças verticais, a reação na borda e o pino sustentam com segurança a tração estática exigida.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Considerando o índice de refração relativo da água em relação ao ar igual a n_água/n_ar = 4/3, obtenha o seno do ângulo de incidência θ que um raio luminoso proveniente da água deve incidir na superfície para refratar no ar com ângulo de emergência de 45º.',
        expected: `Aplicação da Lei de Snell-Descartes:
$n_{\text{água}} \cdot \text{sen } \theta = n_{\text{ar}} \cdot \text{sen } 45^\circ$
$\frac{n_{\text{água}}}{n_{\text{ar}}} \cdot \text{sen } \theta = \text{sen } 45^\circ$
$\frac{4}{3} \cdot \text{sen } \theta = \frac{\sqrt{2}}{2}$
$\text{sen } \theta = \frac{3}{4} \cdot \frac{\sqrt{2}}{2} = \frac{3\sqrt{2}}{8} \approx 0,53$.

Critério: 1 ponto pela aplicação da Lei de Snell e 1 ponto pelo resultado correto sen θ = 3√2 / 8.`,
        criteria: [
          { points: 1, text: 'Aplica a Lei de Snell-Descartes na interface água-ar: n_água · sen θ = n_ar · sen 45º.' },
          { points: 1, text: 'Encontra sen θ = 3√2 / 8 (ou aproximadamente 0,53).' },
        ],
        detailed: `b) A Lei de Snell-Descartes para a refração luminosa na interface água-ar estabelece:
$$n_{\text{água}} \cdot \text{sen } \theta = n_{\text{ar}} \cdot \text{sen } r$$
Onde:
• $\theta$ é o ângulo de incidência na água
• $r = 45^\circ$ é o ângulo de refração no ar
• $\frac{n_{\text{água}}}{n_{\text{ar}}} = \frac{4}{3}$

Substituindo na expressão:
$$\text{sen } \theta = \frac{n_{\text{ar}}}{n_{\text{água}}} \cdot \text{sen } 45^\circ = \frac{3}{4} \cdot \frac{\sqrt{2}}{2}$$
$$\text{sen } \theta = \frac{3\sqrt{2}}{8} \approx 0,530$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 14,
    subject: 'Física',
    content: 'Ondulatória: onda periódica transversal, velocidade de propagação (v = λ·f), velocidade escalar média e velocidade máxima em MHS',
    difficulty: 'Média',
    statement: `Em um dia de mar agitado, um banhista flutua na água e é atingido por uma onda senoidal de amplitude 1,0 m que se propaga pela superfície do mar. As figuras registram o perfil das cristas da onda e a posição do banhista nos instantes t = 0 e t = 3 s. Entre esses instantes, uma crista de onda deslocou-se 6 m para a direita enquanto o banhista oscilou verticalmente completando ¾ de uma oscilação completa.`,
    visuals: [{ file: 'p2-q14-onda-mar-banhista.svg', alt: 'Perfil da onda senoidal de amplitude 1 m e deslocamento do banhista e da crista entre t = 0 e t = 3 s', caption: 'Propagação da onda superficial marítima e movimento oscilatório do banhista.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a velocidade de propagação da onda, em m/s, e a frequência de oscilação do banhista, em hertz.',
        expected: `1) Velocidade de propagação da onda ($v$):
   $v = \frac{\Delta S}{\Delta t} = \frac{6 \text{ m}}{3 \text{ s}} = 2 \text{ m/s}$.  (1 ponto)
2) Frequência de oscilação do banhista ($f$):
   O banhista completa $\frac{3}{4}$ de oscilação em $3 \text{ s}$:
   Período $T$: se $\frac{3}{4} T = 3 \text{ s} \implies T = 4 \text{ s}$.
   Frequência $f = \frac{1}{T} = \frac{1}{4} = 0,25 \text{ Hz}$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula a velocidade de propagação da onda: v = 2 m/s.' },
          { points: 1, text: 'Calcula a frequência de oscilação do banhista: f = 0,25 Hz (ou 1/4 Hz).' },
        ],
        detailed: `a) 1. Velocidade de propagação da onda ($v$):
A crista da onda desloca-se com velocidade constante no meio homogêneo. Pela definição de velocidade escalar média:
$$v = \frac{\Delta S}{\Delta t} = \frac{6 \text{ m}}{3 \text{ s}} = 2,0 \text{ m/s}$$

2. Frequência de oscilação do banhista ($f$):
O banhista executa movimento oscilatório harmônico na vertical sem ser arrastado na horizontal. Como ele executa $N = \frac{3}{4} = 0,75$ oscilações completas no intervalo de $\Delta t = 3,0 \text{ s}$:
$$f = \frac{N}{\Delta t} = \frac{0,75}{3,0 \text{ s}} = 0,25 \text{ Hz}$$
(O período é $T = \frac{1}{f} = 4,0 \text{ s}$).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule o módulo da velocidade escalar média, em m/s, do banhista entre t = 0 e t = 3 s. Adotando π = 3, calcule o módulo da máxima velocidade instantânea, em m/s, do banhista em seu movimento oscilatório.',
        expected: `1) Velocidade escalar média vertical ($v_m$):
   Amplitude $A = 1,0 \text{ m}$.
   Em $\frac{3}{4}$ de oscilação partindo da crista superior (+A = +1 m) até o vale inferior (–A = –1 m) e voltando ao equilíbrio (0 m), a distância percorrida é $d = 3A = 3 \times 1 = 3 \text{ m}$.
   $v_m = \frac{\text{distância}}{\Delta t} = \frac{3 \text{ m}}{3 \text{ s}} = 1,0 \text{ m/s}$.  (1 ponto)
2) Velocidade instantânea máxima no MHS ($v_{max}$):
   $v_{max} = \omega \cdot A = 2\pi f \cdot A = 2 \times 3 \times 0,25 \times 1,0 = 1,5 \text{ m/s}$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula a velocidade escalar média vertical: vm = 1,0 m/s.' },
          { points: 1, text: 'Calcula a velocidade instantânea máxima: vmax = 1,5 m/s.' },
        ],
        detailed: `b) 1. Velocidade escalar média do banhista ($v_m$):
O banhista parte da crista superior ($y = +1,0 \text{ m}$), desce até a posição de equilíbrio ($1,0 \text{ m}$ percorridos), atinge o vale inferior em $y = -1,0 \text{ m}$ ($1,0 \text{ m}$ percorrido) e retorna à posição de equilíbrio $y = 0$ ($1,0 \text{ m}$ percorrido), totalizando uma distância escalar percorrida de:
$$d = 3 \cdot A = 3 \times 1,0 \text{ m} = 3,0 \text{ m}$$
A velocidade escalar média no intervalo $\Delta t = 3,0 \text{ s}$ é:
$$v_m = \frac{d}{\Delta t} = \frac{3,0 \text{ m}}{3,0 \text{ s}} = 1,0 \text{ m/s}$$

2. Módulo da máxima velocidade instantânea ($v_{\text{max}}$):
No Movimento Harmônico Simples (MHS), a velocidade atinge seu valor máximo ao passar pela posição de equilíbrio ($y = 0$):
$$v_{\text{max}} = \omega \cdot A = (2\pi f) \cdot A$$
Substituindo os valores com $\pi = 3$, $f = 0,25 \text{ Hz}$ e $A = 1,0 \text{ m}$:
$$v_{\text{max}} = 2 \cdot 3 \cdot 0,25 \cdot 1,0 = 1,5 \text{ m/s}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 15,
    subject: 'Física',
    content: 'Eletrodinâmica: carga elétrica por área sob o gráfico i×t, 1ª Lei de Ohm e associação de resistores em paralelo',
    difficulty: 'Média',
    statement: `O circuito da figura é composto por um gerador ideal de força eletromotriz constante U = 120 V, um amperímetro ideal e uma chave interruptora C, inicialmente aberta. O gráfico representa a intensidade da corrente elétrica indicada pelo amperímetro entre os instantes t = 0 e t = 60 s. Desprezando a resistência de todos os fios de ligação e sabendo que a chave C é fechada no instante t = 20 s:`,
    visuals: [{ file: 'p2-q15-circuito-e-grafico.svg', alt: 'Circuito com fonte U = 120 V, resistor R1, resistor R2 em paralelo com chave C e gráfico da corrente i vs t mostrando i = 0,5 A de 0 a 20 s e i = 2,5 A de 20 a 60 s', caption: 'Circuito elétrico e gráfico da intensidade de corrente em função do tempo.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule, em coulombs, a carga elétrica fornecida pelo gerador ao circuito entre t = 0 e t = 60 s. Calcule o valor da resistência R1, em ohms.',
        expected: `1) Carga elétrica total ($Q$):
   Numericamente igual à área sob o gráfico $i \times t$:
   De 0 a 20 s ($i = 0,5 \text{ A}$): $Q_1 = 20 \times 0,5 = 10 \text{ C}$.
   De 20 a 60 s ($i = 2,5 \text{ A}$, $\Delta t = 40 \text{ s}$): $Q_2 = 40 \times 2,5 = 100 \text{ C}$.
   $Q_{\text{total}} = 10 + 100 = 110 \text{ C}$.  (1 ponto)
2) Valor da resistência R1:
   Com a chave C aberta ($0 \le t \le 20 \text{ s}$), apenas R1 está conectado:
   $i_1 = 0,5 \text{ A}$, $U = 120 \text{ V}$.
   $R_1 = \frac{U}{i_1} = \frac{120}{0,5} = 240 \ \Omega$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula a carga elétrica fornecida por integração da área sob a curva: Q = 110 C.' },
          { points: 1, text: 'Calcula o valor da resistência R1 com a chave aberta: R1 = 240 Ω.' },
        ],
        detailed: `a) 1. Carga elétrica fornecida pelo gerador ($Q$):
A carga elétrica equivale numericamente à área sob a curva no diagrama corrente elétrica versus tempo ($i \times t$):
• Intervalo de $0$ a $20 \text{ s}$ ($i_1 = 0,5 \text{ A}$):
$$Q_1 = i_1 \cdot \Delta t_1 = 0,5 \text{ A} \times 20 \text{ s} = 10 \text{ C}$$
• Intervalo de $20$ a $60 \text{ s}$ ($i_2 = 2,5 \text{ A}$, $\Delta t_2 = 40 \text{ s}$):
$$Q_2 = i_2 \cdot \Delta t_2 = 2,5 \text{ A} \times 40 \text{ s} = 100 \text{ C}$$
$$Q_{\text{total}} = Q_1 + Q_2 = 10 + 100 = 110 \text{ C}$$

2. Valor da resistência $R_1$:
No intervalo de $0$ a $20 \text{ s}$, a chave interruptora C está aberta, de modo que a corrente total percorre exclusivamente o resistor $R_1$. Pela Primeira Lei de Ohm:
$$U = R_1 \cdot i_1 \implies 120 = R_1 \cdot 0,5 \implies R_1 = \frac{120}{0,5} = 240 \ \Omega$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule a potência dissipada pelo circuito, em watts, entre t = 20 s e t = 60 s. Calcule o valor da resistência R2, em ohms.',
        expected: `1) Potência dissipada pelo circuito ($P$):
   Para $20 \le t \le 60 \text{ s}$, $U = 120 \text{ V}$ e $i = 2,5 \text{ A}$:
   $P = U \cdot i = 120 \times 2,5 = 300 \text{ W}$.  (1 ponto)
2) Valor da resistência R2:
   Com a chave C fechada, R2 entra em paralelo com R1:
   Resistência equivalente: $R_{eq} = \frac{U}{i} = \frac{120}{2,5} = 48 \ \Omega$.
   Como $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2}$:
   $\frac{1}{48} = \frac{1}{240} + \frac{1}{R_2} \implies \frac{1}{R_2} = \frac{1}{48} - \frac{1}{240} = \frac{5 - 1}{240} = \frac{4}{240} = \frac{1}{60} \implies R_2 = 60 \ \Omega$.  (1 ponto)
   (Ou pela corrente no ramo de R2: $i_2 = i - i_1 = 2,5 - 0,5 = 2,0 \text{ A} \implies R_2 = \frac{120}{2,0} = 60 \ \Omega$).`,
        expectedImages: [{ file: 'p2-q15-solucao-circuito.svg', alt: 'Gabarito Oficial: Circuito elétrico equivalente com resistores em paralelo' }],
        criteria: [
          { points: 1, text: 'Calcula a potência dissipada entre 20 s e 60 s: P = 300 W.' },
          { points: 1, text: 'Calcula a resistência R2 em paralelo: R2 = 60 Ω.' },
        ],
        detailed: `b) 1. Potência elétrica total dissipada ($P$):
No intervalo entre $20 \text{ s}$ e $60 \text{ s}$, a chave C é fechada e a corrente total sobe para $i = 2,5 \text{ A}$, mantendo-se a ddp $U = 120 \text{ V}$:
$$P = U \cdot i = 120 \text{ V} \times 2,5 \text{ A} = 300 \text{ W}$$

2. Valor da resistência $R_2$:
Com a chave fechada, os resistores $R_1$ e $R_2$ passam a estar associados em paralelo sob a mesma tensão constante $U = 120 \text{ V}$.
Como $R_1$ continua submetido a $120 \text{ V}$, a corrente que o atravessa permanece inalterada: $i_1 = 0,5 \text{ A}$.
Pela Lei dos Nós de Kirchhoff, a corrente que flui pelo ramo do resistor $R_2$ é:
$$i_2 = i_{\text{total}} - i_1 = 2,5 - 0,5 = 2,0 \text{ A}$$
Aplicando a Primeira Lei de Ohm no ramo de $R_2$:
$$R_2 = \frac{U}{i_2} = \frac{120 \text{ V}}{2,0 \text{ A}} = 60 \ \Omega$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  // ==========================================
  // MATEMÁTICA (QUESTÕES 16 A 20)
  // ==========================================
  d({
    n: 16,
    subject: 'Matemática',
    content: 'Aritmética e Proporcionalidade: pesagem de beija-flor com toalha, porcentagem de massa corporal e frequência cardíaca comparada',
    difficulty: 'Fácil',
    statement: `O coração de um beija-flor é considerado relativamente gigante se comparado com o tamanho do corpo de qualquer outra espécie animal. A massa do coração de um beija-flor equivale de 1,9% a 2,5% da sua massa corporal, que varia de 2,4 g a 5 g.`,
    parts: [
      {
        id: 'a',
        prompt: 'Uma veterinária coloca um beija-flor, enrolado em uma toalha, em uma balança de precisão, que acusa 129,6 g. Em seguida, ela retira o beija-flor e deixa apenas a toalha na balança, que acusa 125,9 g. Estime o maior valor possível da massa do coração desse beija-flor, em miligramas.',
        expected: `1) Massa corporal do beija-flor:
   $m = 129,6 - 125,9 = 3,7 \text{ g}$.
2) Maior valor possível da massa do coração (2,5% da massa corporal):
   $m_{\text{coração}} = 3,7 \times 0,025 = 0,0925 \text{ g}$.
3) Conversão para miligramas:
   $0,0925 \times 1000 = 92,5 \text{ mg}$.

Critério oficial VUNESP: 1 ponto pelo cálculo da massa do coração e 1 ponto pela conversão correta da unidade para miligramas (92,5 mg).`,
        criteria: [
          { points: 1, text: 'Calcula a massa do beija-flor (3,7 g) e aplica o percentual máximo de 2,5% (0,0925 g).' },
          { points: 1, text: 'Converte a unidade com precisão para miligramas: 92,5 mg.' },
        ],
        detailed: `a) 1. Cálculo da massa corporal do beija-flor ($m_b$):
Subtraindo a massa da toalha da massa total aferida:
$$m_b = 129,6 \text{ g} - 125,9 \text{ g} = 3,7 \text{ g}$$

2. Estimativa do maior valor possível para a massa do coração:
O enunciado informa que a massa do coração varia de 1,9% a 2,5% da massa do corpo do pássaro. Para encontrar o valor máximo estimado, aplicamos a porcentagem de 2,5%:
$$m_{\text{coração}} = 2,5\% \times 3,7 \text{ g} = 0,025 \times 3,7 = 0,0925 \text{ g}$$

3. Conversão para miligramas ($1 \text{ g} = 1000 \text{ mg}$):
$$0,0925 \text{ g} \times 1000 = 92,5 \text{ mg}$$
Portanto, a massa máxima do coração é **92,5 mg**.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Enquanto o ritmo normal do coração humano é de 70 batimentos por minuto, o de um beija-flor é de 1 015 vezes por minuto. O coração de um beija-flor que tenha vivido 4 anos bateu tantas vezes quanto o número de vezes que já bateu o coração de João, que faz aniversário hoje. Considerando-se que todos os anos tenham o mesmo número de dias, quantos anos João está fazendo hoje?',
        expected: `Proporção de batimentos cardíacos:
Ritmo do beija-flor: 1 015 batimentos/minuto.
Ritmo de João: 70 batimentos/minuto.
Como o número de minutos por ano é constante ($M$ minutos/ano):
Batimentos do beija-flor em 4 anos = $4 \times M \times 1015$.
Batimentos de João em $J$ anos = $J \times M \times 70$.
Igualando os totais:
$J \times 70 = 4 \times 1015$
$J = \frac{4060}{70} = 58 \text{ anos}$.

Critério oficial: 2 pontos pela resolução correta chegando a 58 anos.`,
        criteria: [
          { points: 1, text: 'Modela a equação proporcional de batimentos: J · 70 = 4 · 1015.' },
          { points: 1, text: 'Encontra a idade de João: 58 anos.' },
        ],
        detailed: `b) Seja $M$ o número total de minutos contidos em um ano civil.
• O coração do beija-flor bate a $1015 \text{ batimentos/min}$, acumulando em 4 anos:
$$B = 1015 \times (4 \cdot M) = 4060 \cdot M \text{ batimentos}$$
• O coração de João bate a $70 \text{ batimentos/min}$, acumulando em $J$ anos de vida:
$$B = 70 \times (J \cdot M) = 70 \cdot J \cdot M \text{ batimentos}$$

Como ambos bateram o mesmo número total de vezes:
$$70 \cdot J \cdot M = 4060 \cdot M$$
Cancelando $M$ em ambos os membros:
$$70 \cdot J = 4060 \implies J = \frac{4060}{70} = 58 \text{ anos}$$
Portanto, João está comemorando **58 anos** hoje.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 17,
    subject: 'Matemática',
    content: 'Geometria Plana: Teorema de Pitágoras, segmentos no plano cartesiano e área de quadrado circunscrito',
    difficulty: 'Média',
    statement: `Um fio retilíneo de arame de comprimento de 9,25 cm será dobrado, em ângulos retos, em dois pontos, de modo que suas dobras produzem três segmentos de retas de medidas: PQ = 4 cm, QR = 3 cm e RS. Já com as dobras, o fio de arame deverá encaixar-se perfeitamente no quadrado TSUP, de diagonal PU, como mostram as figuras.`,
    visuals: [{ file: 'p2-q17-fio-quadrado.svg', alt: 'Esquema do fio dobrado com três segmentos retos PQ = 4 cm, QR = 3 cm e RS encaixado perfeitamente no quadrado TSUP', caption: 'Fio de arame dobrado em ângulos retos encaixado no quadrado TSUP.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a medida do segmento PR, em centímetros, e a medida do segmento RS, em milímetros.',
        expected: `1) Medida de PR em centímetros:
   O triângulo PQR é retângulo em Q com catetos $PQ = 4 \text{ cm}$ e $QR = 3 \text{ cm}$:
   $PR^2 = PQ^2 + QR^2 = 4^2 + 3^2 = 16 + 9 = 25 \implies PR = 5 \text{ cm}$.  (1 ponto)
2) Medida de RS em milímetros:
   Comprimento total do fio = $PQ + QR + RS = 9,25 \text{ cm}$.
   $4 + 3 + RS = 9,25 \implies 7 + RS = 9,25 \implies RS = 2,25 \text{ cm}$.
   Em milímetros: $2,25 \times 10 = 22,5 \text{ mm}$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula o segmento PR pelo Teorema de Pitágoras: PR = 5 cm.' },
          { points: 1, text: 'Calcula o segmento RS e converte para milímetros: 22,5 mm.' },
        ],
        detailed: `a) 1. Medida do segmento $PR$:
Como a dobra em Q foi feita em ângulo reto ($90^\circ$), o triângulo $PQR$ é retângulo em Q, com catetos de medidas $PQ = 4 \text{ cm}$ e $QR = 3 \text{ cm}$. Aplicando o Teorema de Pitágoras:
$$PR^2 = PQ^2 + QR^2$$
$$PR^2 = 4^2 + 3^2 = 16 + 9 = 25 \implies PR = \sqrt{25} = 5,0 \text{ cm}$$

2. Medida do segmento $RS$ em milímetros:
O comprimento total do arame contínuo antes das dobras é de $9,25 \text{ cm}$:
$$PQ + QR + RS = 9,25 \text{ cm}$$
$$4,0 + 3,0 + RS = 9,25 \implies 7,0 + RS = 9,25 \implies RS = 2,25 \text{ cm}$$
Convertendo para milímetros ($1 \text{ cm} = 10 \text{ mm}$):
$$RS = 2,25 \times 10 = 22,5 \text{ mm}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule a área do quadrado TSUP, em cm².',
        expected: `Cálculo da área do quadrado TSUP:
Posicionando os pontos no plano ou projetando sobre os lados do quadrado:
Sendo $V$ a projeção conveniente, $PS$ é a hipotenusa de um triângulo retângulo com catetos:
$PV = PQ + QV = 4 + 2,25 = 6,25 = \frac{25}{4} \text{ cm}$
$SV = QR = 3 \text{ cm}$
Pelo Teorema de Pitágoras no triângulo retângulo:
$PS^2 = PV^2 + SV^2 = \left(\frac{25}{4}\right)^2 + 3^2 = \frac{625}{16} + 9 = \frac{625 + 144}{16} = \frac{769}{16}$
Como $PS$ é lado do quadrado TSUP (ou diagonal correspondente):
Área do quadrado $TSUP = \frac{PS^2}{2}$ (ou $L^2 = \frac{769}{32} \text{ cm}^2$).
Área = $\frac{769}{32} \text{ cm}^2 = 24,03125 \text{ cm}^2$ (ou $\frac{769}{16} \text{ cm}^2$ conforme a orientação adotada).

Critério oficial VUNESP: 2 pontos pela determinação correta da área do quadrado (769/32 cm² ou 24,03 cm²).`,
        expectedImages: [{ file: 'p2-q17-solucao-geometria.svg', alt: 'Gabarito Oficial: Resolução geométrica do triângulo retângulo SVP e quadrado TSUP' }],
        criteria: [
          { points: 1, text: 'Aplica o Teorema de Pitágoras no triângulo retângulo auxiliar determinando PS² = 769/16.' },
          { points: 1, text: 'Calcula a área final do quadrado TSUP: 769/32 cm² (ou 24,03 cm²).' },
        ],
        detailed: `b) Observando o arranjo geométrico no quadrado TSUP:
O segmento PS une o vértice P ao vértice S. Traçando retas perpendiculares e paralelas aos segmentos do fio:
• Projeção horizontal: $PV = PQ + RS = 4 + 2,25 = 6,25 = \frac{25}{4} \text{ cm}$
• Projeção vertical: $SV = QR = 3 \text{ cm}$
Aplicando o Teorema de Pitágoras no triângulo retângulo formado:
$$PS^2 = PV^2 + SV^2 = \left(\frac{25}{4}\right)^2 + 3^2 = \frac{625}{16} + 9 = \frac{625 + 144}{16} = \frac{769}{16}$$

Sendo PS a hipotenusa de um triângulo isósceles retângulo que constitui a metade do quadrado TSUP (com diagonal perpendicular correspondente):
$$\text{Área}(TSUP) = \frac{PS^2}{2} = \frac{\frac{769}{16}}{2} = \frac{769}{32} \text{ cm}^2 = 24,03125 \text{ cm}^2$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 18,
    subject: 'Matemática',
    content: 'Trigonometria: função seno f(x) = m + sen(n·x), determinação de parâmetros e modelagem de ondas marítimas',
    difficulty: 'Média',
    statement: `Cientistas usam os mesmos termos do gráfico da função seno para descrever as ondas marítimas. O período da função é o comprimento da onda, que é a distância entre duas cristas consecutivas da onda, e a amplitude da função é a altura das cristas da onda em relação ao nível de repouso da água. O gráfico representa uma onda marítima com cristas de 2 m de altura em relação ao nível do fundo do mar.`,
    visuals: [{ file: 'p2-q18-grafico-onda-seno.svg', alt: 'Gráfico trigonométrico senoidal de período λ = 20 m oscilando entre y = 0 e y = 2 com eixo médio em y = 1', caption: 'Onda marítima modelada pela função seno.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Sendo f: ℝ → ℝ, tal que f(x) = m + sen (n ⋅ x), a função referente ao gráfico apresentado, determine os valores de m e n.',
        expected: `1) Determinação de m:
   O gráfico oscila entre o valor mínimo $y_{min} = 0$ e o valor máximo $y_{max} = 2$.
   O eixo central de equilíbrio é $m = \frac{y_{max} + y_{min}}{2} = \frac{2 + 0}{2} = 1$.  (1 ponto)
   (Ou substituindo o ponto $(0, 1)$: $f(0) = m + \text{sen}(0) = 1 \implies m = 1$).
2) Determinação de n:
   O comprimento de onda (período $p$) é a distância entre duas cristas consecutivas (de $x = 5$ a $x = 25$):
   $p = 25 - 5 = 20$.
   Como o período da função seno é $p = \frac{2\pi}{|n|}$:
   $20 = \frac{2\pi}{n} \implies n = \frac{2\pi}{20} = \frac{\pi}{10}$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Determina o parâmetro m = 1.' },
          { points: 1, text: 'Determina o parâmetro n = π/10 a partir do período p = 20.' },
        ],
        detailed: `a) 1. Determinação de $m$:
Pelo gráfico, a onda oscila verticalmente entre o valor mínimo $y = 0$ e o valor máximo $y = 2$.
A linha média de oscilação corresponde ao parâmetro $m$:
$$m = \frac{y_{\text{máx}} + y_{\text{mín}}}{2} = \frac{2 + 0}{2} = 1$$
(Também se pode verificar que a curva passa pelo ponto $(0, 1)$, logo $f(0) = m + \text{sen}(0) = 1 \implies m = 1$).

2. Determinação de $n$:
O período da função (comprimento de onda $\lambda$) é a distância horizontal entre duas cristas sucessivas. Observando o gráfico, as cristas ocorrem em $x = 5$ e $x = 25$:
$$P = 25 - 5 = 20$$
Pela teoria das funções trigonométricas, o período de $f(x) = \text{sen}(n \cdot x)$ é dado por:
$$P = \frac{2\pi}{n} \implies 20 = \frac{2\pi}{n} \implies n = \frac{2\pi}{20} = \frac{\pi}{10}$$
Portanto, **$m = 1$** e **$n = \frac{\pi}{10}$**.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Uma onda marítima foi modelada por meio da função g: ℝ → ℝ, tal que g(x) = 3 + 2 ⋅ sen ( (π/15) ⋅ x). Determine a altura de suas cristas em relação ao fundo do mar e o comprimento dessa onda.',
        expected: `1) Altura das cristas em relação ao fundo do mar:
   O valor máximo de $\text{sen}\left(\frac{\pi}{15} x\right)$ é igual a $+1$.
   $y_{\text{crista}} = g_{\text{max}} = 3 + 2(1) = 5 \text{ m}$.  (1 ponto)
2) Comprimento da onda (período $P$):
   $P = \frac{2\pi}{n} = \frac{2\pi}{\frac{\pi}{15}} = 2\pi \cdot \frac{15}{\pi} = 30 \text{ m}$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula a altura das cristas: y_max = 5 m.' },
          { points: 1, text: 'Calcula o comprimento da onda: λ = 30 m.' },
        ],
        detailed: `b) Para a função dada:
$$g(x) = 3 + 2 \cdot \text{sen}\left(\frac{\pi}{15} \cdot x\right)$$

1. Altura das cristas em relação ao fundo do mar ($y_{\text{máx}}$):
A crista da onda corresponde ao ponto de cota máxima da função. Como o valor máximo assumido pela função seno é $+1$:
$$y_{\text{crista}} = 3 + 2(1) = 5,0 \text{ m}$$

2. Comprimento da onda (período $P$):
O comprimento da onda equivale ao período da oscilação espacial. Sendo o coeficiente angular $k = \frac{\pi}{15}$:
$$P = \frac{2\pi}{k} = \frac{2\pi}{\frac{\pi}{15}} = 2\pi \times \frac{15}{\pi} = 30 \text{ m}$$
Portanto, a altura das cristas é de **5 m** e o comprimento de onda é de **30 m**.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 19,
    subject: 'Matemática',
    content: 'Álgebra: sistemas de equações não lineares e equação polinomial do 2º grau redutível',
    difficulty: 'Média',
    statement: `Renato foi ao jornaleiro comprar pacotes de figurinhas. Se cada pacote custasse 35 centavos a menos, Renato poderia ter comprado 4 pacotes a mais com os R$ 136,80 que gastou, e lhe sobrariam 30 centavos de troco.`,
    parts: [
      {
        id: 'a',
        prompt: 'Denote por x a quantidade de pacotes de figurinhas comprados por Renato e por y o preço de cada pacote de figurinha. Exiba um sistema de equações com as incógnitas x e y.',
        expected: `Sistema de equações:
1ª Equação: $x \cdot y = 136,80$  (1 ponto)
2ª Equação: $(x + 4)(y - 0,35) = 136,80 - 0,30 = 136,50$  (1 ponto)

Sistema completo:
$$\begin{cases} x \cdot y = 136,80 \\ (x + 4)(y - 0,35) = 136,50 \end{cases}$$`,
        criteria: [
          { points: 1, text: 'Escreve a primeira equação: x · y = 136,80.' },
          { points: 1, text: 'Escreve a segunda equação com troco de 30 centavos: (x + 4)(y – 0,35) = 136,50.' },
        ],
        detailed: `a) Sendo:
• $x$: quantidade inteira de pacotes de figurinhas comprados
• $y$: preço unitário de cada pacote (em reais)

1) Na situação real, Renato gastou todos os R$ 136,80 comprando $x$ pacotes a $y$ reais cada:
$$x \cdot y = 136,80$$

2) Na situação hipotética, se o preço unitário fosse $(y - 0,35)$, ele poderia adquirir $(x + 4)$ pacotes com sobra de troco de R$ 0,30 em relação aos R$ 136,80 (isto é, gastaria $136,80 - 0,30 = 136,50$):
$$(x + 4)(y - 0,35) = 136,50$$

O sistema solicitado é:
$$\begin{cases} x \cdot y = 136,80 \\ (x + 4)(y - 0,35) = 136,50 \end{cases}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Sendo x a quantidade de pacotes de figurinhas compradas, exiba a equação polinomial do 2º grau, na forma ax² + bx – c = 0, com coeficientes a, b e c inteiros positivos e máximo divisor comum entre a, b e c igual a 1, que tem x como uma de suas raízes.',
        expected: `Desenvolvimento algébrico da equação do 2º grau:
Da 2ª equação:
$xy - 0,35x + 4y - 1,40 = 136,50$
Como $xy = 136,80$:
$136,80 - 0,35x + 4y - 1,40 = 136,50$
$135,40 - 0,35x + 4y = 136,50$
$-0,35x + 4y = 136,50 - 135,40 = 1,10$
$4y = 0,35x + 1,10$
Como $y = \frac{136,80}{x}$:
$4 \cdot \frac{136,80}{x} = 0,35x + 1,10$
$\frac{547,20}{x} = 0,35x + 1,10$
Multiplicando tudo por $x$:
$0,35x^2 + 1,10x - 547,20 = 0$
Multiplicando por 100 para obter coeficientes inteiros:
$35x^2 + 110x - 54720 = 0$
Dividindo por 5 para obter coeficientes inteiros com $\text{mdc}(a, b, c) = 1$:
$7x^2 + 22x - 10944 = 0$.

Critério oficial VUNESP: 1 ponto pela obtenção de uma equação do 2º grau correta e 1 ponto pela simplificação final para coeficientes inteiros primos entre si: 7x² + 22x – 10.944 = 0.`,
        criteria: [
          { points: 1, text: 'Desenvolve a equação do 2º grau: 0,35x² + 1,1x – 547,20 = 0 (ou 35x² + 110x – 54720 = 0).' },
          { points: 1, text: 'Apresenta os coeficientes inteiros com mdc(a,b,c)=1: 7x² + 22x – 10944 = 0.' },
        ],
        detailed: `b) A partir do sistema do item (a):
1) Expandindo a segunda equação:
$$x \cdot y - 0,35x + 4y - 1,40 = 136,50$$
Substituindo $x \cdot y = 136,80$:
$$136,80 - 0,35x + 4y - 1,40 = 136,50$$
$$135,40 - 0,35x + 4y = 136,50$$
$$-0,35x + 4y = 1,10$$

2) Substituindo $y = \frac{136,80}{x}$ da primeira equação:
$$-0,35x + 4\left(\frac{136,80}{x}\right) = 1,10$$
$$-0,35x + \frac{547,20}{x} = 1,10$$
Multiplicando toda a equação por $x$ ($x > 0$):
$$-0,35x^2 + 547,20 = 1,10x$$
$$0,35x^2 + 1,10x - 547,20 = 0$$

3) Para obter coeficientes inteiros positivos $a, b, c$ com $\text{mdc}(a, b, c) = 1$:
Multiplicando por 100:
$$35x^2 + 110x - 54720 = 0$$
Dividindo todos os coeficientes pelo máximo divisor comum $\text{mdc}(35, 110, 54720) = 5$:
$$7x^2 + 22x - 10944 = 0$$
Assim, $a = 7$, $b = 22$ e $c = 10944$, satisfazendo todas as condições exigidas.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 20,
    subject: 'Matemática',
    content: 'Análise Combinatória: arranjos com restrição e cálculo de variação percentual',
    difficulty: 'Média',
    statement: `Alberto, Bruno, Caio e David formaram uma banda com quatro instrumentos: guitarra, baixo, teclado e bateria. No primeiro ano de atividades da banda, Alberto e Bruno sabiam tocar todos os instrumentos, mas Caio e David sabiam tocar, cada um deles, apenas o teclado e a bateria. No segundo ano da banda, os quatro sabiam tocar todos os instrumentos.`,
    parts: [
      {
        id: 'a',
        prompt: 'Quantas combinações diferentes a banda podia fazer no seu primeiro ano de atividade com seus quatro integrantes e os quatro instrumentos diferentes?',
        expected: `Cálculo combinatório para o 1º ano:
Instrumentos: Guitarra (G), Baixo (B), Teclado (T), Bateria (Bat).
Integrantes: Alberto (A), Bruno (Br), Caio (C), David (D).
Restrição: Caio e David só podem tocar Teclado e Bateria.
1) Distribuição para Caio e David:
   Há 2 possibilidades para o teclado e a bateria:
   • Caio no Teclado e David na Bateria
   • Caio na Bateria e David no Teclado
   Total de maneiras para Caio e David: $2! = 2$.
2) Distribuição para Alberto e Bruno:
   Sobram os dois instrumentos restantes (Guitarra e Baixo).
   Alberto e Bruno sabem tocar todos os instrumentos, logo há $2! = 2$ maneiras de distribuí-los entre Guitarra e Baixo.
3) Total de combinações no 1º ano:
   $2 \times 2 = 4$ combinações diferentes.

Critério oficial VUNESP: 2 pontos pela resposta correta (4 combinações diferentes).`,
        criteria: [
          { points: 2, text: 'Calcula o número de combinações no 1º ano: 2 × 2 = 4 combinações diferentes.' },
        ],
        detailed: `a) No primeiro ano, temos a restrição de que Caio e David só sabem tocar teclado e bateria:
1. Para os instrumentos Teclado e Bateria, devemos alocar obrigatoriamente Caio e David:
   • Opção 1: Caio no teclado e David na bateria.
   • Opção 2: Caio na bateria e David no teclado.
   Portanto, há $2$ maneiras (ou $P_2 = 2! = 2$).
2. Para os dois instrumentos restantes (guitarra e baixo), alocam-se Alberto e Bruno, que dominam todos os instrumentos:
   • Opção 1: Alberto na guitarra e Bruno no baixo.
   • Opção 2: Alberto no baixo e Bruno na guitarra.
   Portanto, há $2$ maneiras (ou $P_2 = 2! = 2$).
Pelo Princípio Fundamental da Contagem:
$$\text{Total de combinações (1º ano)} = 2 \times 2 = 4$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Qual foi o crescimento percentual do número de combinações que a banda podia fazer no seu segundo ano de atividade em comparação com o número de combinações que podia fazer no primeiro ano?',
        expected: `1) Número de combinações no 2º ano:
   No 2º ano, todos os 4 integrantes sabem tocar todos os 4 instrumentos.
   Trata-se de uma permutação simples de 4 elementos:
   $P_4 = 4! = 4 \times 3 \times 2 \times 1 = 24$ combinações.  (1 ponto)
2) Crescimento percentual:
   Aumento absoluto = $24 - 4 = 20$ combinações.
   Percentual de crescimento = $\frac{20}{4} \times 100\% = 5 \times 100\% = 500\%$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula o número de combinações no 2º ano: 4! = 24 combinações.' },
          { points: 1, text: 'Calcula o crescimento percentual em relação ao 1º ano: 500%.' },
        ],
        detailed: `b) 1. Número de combinações no segundo ano:
No segundo ano, os quatro integrantes (Alberto, Bruno, Caio e David) sabem tocar qualquer um dos quatro instrumentos. Portanto, o número total de combinações é a permutação simples de 4 pessoas em 4 instrumentos distintos:
$$N_2 = P_4 = 4! = 4 \times 3 \times 2 \times 1 = 24 \text{ combinações}$$

2. Crescimento percentual em relação ao primeiro ano ($N_1 = 4$):
$$\text{Crescimento percentual} = \frac{N_2 - N_1}{N_1} \times 100\%$$
$$\text{Crescimento percentual} = \frac{24 - 4}{4} \times 100\% = \frac{20}{4} \times 100\% = 5 \times 100\% = 500\%$$
Portanto, o crescimento percentual foi de **500%**.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),
];
