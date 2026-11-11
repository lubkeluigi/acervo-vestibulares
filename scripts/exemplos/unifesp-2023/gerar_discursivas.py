#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gerador de src/data/unifesp2023-discursivas.js
Vestibular UNIFESP 2023 - 2º Dia: Conhecimentos Específicos (Questões 01 a 20)
Biologia (1-5), Química (6-10), Física (11-15), Matemática (16-20)
Gabarito oficial VUNESP (critérios, pontuação, aceites/recusas) + Resolução detalhada Elite Campinas
"""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent

code = r'''import { createUnifesp } from './unifesp-helpers.js';

const { d, img, tex } = createUnifesp(2023);

export const unifesp2023Discursivas = [
  // ==========================================
  // BIOLOGIA (QUESTÕES 01 A 05)
  // ==========================================
  d({
    n: 1,
    subject: 'Biologia',
    content: 'Citologia e Fisiologia: modelo do mosaico fluido, bicamada fosfolipídica e receptores colinérgicos no sistema nervoso parassimpático',
    difficulty: 'Fácil',
    statement: `Em um experimento, pesquisadores marcaram radioativamente as proteínas da membrana plasmática de uma célula humana e de uma célula de camundongo com dois radioisótopos diferentes e, em seguida, fundiram as duas células, originando uma célula híbrida. Utilizando um microscópio, observou-se que as proteínas marcadas radioativamente distribuíram-se de forma aleatória na bicamada da membrana plasmática da célula híbrida.

(www.innoverensvt.com. Adaptado.)`,
    visuals: [{ file: 'p2-q01-celula-hibrida.svg', alt: 'Esquema experimental da fusão de célula humana e célula de camundongo gerando célula híbrida com proteínas marcadas radioativamente distribuídas', caption: 'Fusão celular e distribuição de proteínas na membrana plasmática híbrida.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Qual a composição química da bicamada da membrana plasmática em que as proteínas estão localizadas? Cite a principal característica das substâncias químicas presentes na membrana plasmática que permite a retenção de água no interior da célula.',
        expected: `1) Composição química da bicamada: Fosfolipídios.  (1 ponto)
   Foram aceitas: membrana fosfolipídica; fosfato + lipídios; membrana lipoproteica (proteínas, gorduras/lipídios e fosfato).
   Não foram aceitas: apenas a palavra lipídios; fósforo; fosforolipídios.
2) Principal característica das substâncias: Ser apolar.  (1 ponto)
   Foram aceitas: não polar; hidrofóbica; anfipático ou anfipática; anfifílica.`,
        criteria: [
          { points: 1, text: 'Identifica os fosfolipídios (ou membrana fosfolipídica / fosfato + lipídios) como componentes da bicamada.' },
          { points: 1, text: 'Cita o caráter apolar / hidrofóbico / anfipático / anfifílico que retém a água no meio intracelular.' },
        ],
        detailed: `a) De acordo com o modelo do Mosaico Fluido (proposto por Singer e Nicolson, 1972), a bicamada da membrana plasmática onde as proteínas se encontram inseridas é constituída fundamentalmente por **fosfolipídios**.
A principal característica química dessas moléculas que garante a retenção de água no meio intracelular é o seu caráter **anfipático (ou anfifílico)**, possuindo uma região hidrofílica (cabeça polar com grupo fosfato voltada para as superfícies aquosas intra e extracelular) e uma região interna **apolar / hidrofóbica** (caudas de ácidos graxos voltadas para o interior da bicamada), que atua como barreira física impedindo a livre evasão de água e solutos polares.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Na célula híbrida originada no experimento, que propriedade da membrana plasmática permitiu a distribuição aleatória das proteínas marcadas radioativamente? Cite a função das proteínas colinérgicas encontradas na membrana plasmática de um dendrito neuronal do sistema nervoso parassimpático humano.',
        expected: `1) Propriedade da membrana plasmática: Fluidez da membrana.  (1 ponto)
   Foram aceitas: mosaico fluido; as proteínas podem se deslocar lateralmente, não ficando estáticas (deslocamento das proteínas).
2) Função das proteínas colinérgicas: Receptores de neurotransmissores.  (1 ponto)
   Foram aceitas: receptor de acetilcolina; receptor colinérgico; reconhecer/receber/captar ou reconhecimento de acetilcolina/neurotransmissor; neuroreceptores de acetilcolina.
   Não foram aceitas: apenas a palavra receptor; as palavras: passagem, transporte, entrada, ação de neurotransmissores/acetilcolina e nem hormônios.`,
        criteria: [
          { points: 1, text: 'Indica a fluidez da membrana (mosaico fluido / deslocamento lateral das proteínas).' },
          { points: 1, text: 'Indica a função de atuar como receptores de neurotransmissores (receptores de acetilcolina).' },
        ],
        detailed: `b) A propriedade da membrana plasmática que permitiu o espalhamento e a distribuição aleatória das proteínas marcadas na célula híbrida é a **fluidez da membrana** (conforme o modelo do mosaico fluido, os fosfolipídios e as proteínas não estão fixos de maneira rígida, podendo difundir-se e deslocar-se lateralmente pela bicamada).
Nos dendritos dos neurônios pós-sinápticos do sistema nervoso autônomo parassimpático humano, as proteínas colinérgicas de membrana têm a função de atuar como **receptores de neurotransmissores (especificamente receptores de acetilcolina)**, reconhecendo e ligando-se quimicamente à acetilcolina liberada na fenda sináptica para desencadear a transmissão do impulso nervoso na célula pós-sináptica.`,
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
        expected: `1) Característica do solo: Solo alagado / encharcado / lamacento / pobre em oxigênio.  (1 ponto)
2) Vantagem: Possibilitar as trocas gasosas / obtenção de oxigênio do ar.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Cita o solo alagado / encharcado / lamacento / pobre em oxigênio.' },
          { points: 1, text: 'Explica que a vantagem é possibilitar as trocas gasosas / obtenção de oxigênio do ar.' },
        ],
        detailed: `a) O solo característico dos manguezais onde ocorrem plantas do gênero *Avicennia sp.* é **alagado, lodoso (lamacento) e pobre em gás oxigênio** (ambiente hipóxico ou anóxico devido à saturação hídrica e à intensa decomposição de matéria orgânica).
A vantagem adaptativa dos pneumatóforos (raízes respiratórias com geotropismo negativo que emergem verticalmente acima da superfície do lodo e da lâmina d'água) é **possibilitar as trocas gasosas diretamente com o ar atmosférico** através de poros especiais (pneumatódios/lenticelas), captando o oxigênio indispensável à respiração aeróbia dos tecidos subterrâneos.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'As raízes do tipo pneumatóforos das plantas do gênero Avicennia sp não conseguem fixar o gás nitrogênio do ar como as raízes das leguminosas o fazem. Por que as raízes do tipo pneumatóforos não fixam o gás nitrogênio? Como deve estar a concentração de sais no vacúolo das células radiculares para que a planta Avicennia sp possa absorver água do ambiente em que vive?',
        expected: `1) Por que não fixam nitrogênio: Porque as raízes pneumatóforas não possuem bactérias fixadoras de nitrogênio / do gênero Rhizobium / bacteriorrizas.  (1 ponto)
2) Concentração de sais no vacúolo: A concentração de sais no interior do vacúolo deve estar elevada / hipertônica para que ocorra a absorção de água por osmose pelas células radiculares da Avicennia sp.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Explica que as raízes pneumatóforas não possuem associação com bactérias fixadoras de nitrogênio (Rhizobium / bacteriorrizas).' },
          { points: 1, text: 'Afirma que a concentração de sais no vacúolo deve estar elevada (hipertônica em relação ao solo salino) para absorver água por osmose.' },
        ],
        detailed: `b) As plantas não possuem aparato enzimático próprio para quebrar a tripla ligação do $N_2$ atmosférico; as leguminosas só disponibilizam nitrogênio fixado porque suas raízes estabelecem associação mutualística (bacteriorrizas em nódulos radiculares) com **bactérias fixadoras de nitrogênio do gênero *Rhizobium***, simbiose ausente nas raízes pneumatóforas de *Avicennia sp.*.
Como o ambiente de manguezal apresenta elevada salinidade na água do solo, para que as raízes de *Avicennia sp.* consigam absorver água por osmose contra a salinidade externa, a concentração de sais no interior do vacúolo das células radiculares deve ser mantida **elevada (hipertônica em relação ao meio externo)**.`,
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
    visuals: [{ file: 'p2-q03-graficos-fsh-lh.svg', alt: 'Gráficos 1, 2, 3 e 4 comparando os níveis de FSH e LH em relação ao valor de referência basal X', caption: 'Gráficos quantitativos de FSH e LH obtidos após 6 semanas de aplicação do gel.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Após a aplicação do gel anticoncepcional na pele do homem, qual sistema do corpo humano transportará a progestina e a testosterona até o órgão-alvo desses hormônios? Que lipídio esteroide é o precursor da testosterona?',
        expected: `1) Sistema de transporte: Sistema sanguíneo / sistema circulatório / sistema cardiovascular / sistema vascular.  (1 ponto)
2) Lipídio esteroide precursor: Colesterol / LDL.  (1 ponto)
   Não foram aceitas: colesterol bom; colesterol HDL; HDL.`,
        criteria: [
          { points: 1, text: 'Identifica o sistema sanguíneo / circulatório / cardiovascular / vascular.' },
          { points: 1, text: 'Identifica o colesterol (ou LDL) como lipídio esteroide precursor da testosterona.' },
        ],
        detailed: `a) Após serem absorvidos através da pele, os hormônios progestina e testosterona são transportados até seus órgãos-alvo pelo **sistema circulatório (cardiovascular ou sanguíneo)**, por meio da corrente sanguínea.
O lipídio esteroide que atua como precursor biossintético da testosterona (bem como dos demais hormônios esteroides sexuais e adrenocorticais) é o **colesterol**.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Em um experimento médico, 10 homens saudáveis utilizaram corretamente o gel anticoncepcional por 6 semanas. Após esse período, seus hormônios FSH (folículo estimulante) e LH (luteinizante) foram analisados para verificar a eficácia do produto, e os resultados desse experimento geraram um gráfico quantitativo, no qual X representa um valor de referência antes da aplicação do gel. Dos gráficos a seguir, qual representa o efeito anticoncepcional esperado? Justifique sua resposta com base na ação dos hormônios indicados nos gráficos.',
        expected: `1) Gráfico correto: Gráfico 2.  (1 ponto)
2) Justificativa: Pois reduz a concentração dos hormônios FSH e LH no sangue dos homens, responsáveis pela produção/síntese de espermatozoides e produção/liberação de testosterona.  (1 ponto)
   Foi aceita: mantém baixa as concentrações dos hormônios FSH e LH, responsáveis pela espermatogênese e produção/liberação de testosterona.`,
        criteria: [
          { points: 1, text: 'Indica corretamente o Gráfico 2.' },
          { points: 1, text: 'Justifica pela redução das concentrações de FSH (que estimula a espermatogênese) e LH (que estimula a produção de testosterona).' },
        ],
        detailed: `b) O gráfico que representa o efeito anticoncepcional esperado é o **Gráfico 2**, no qual as concentrações tanto de FSH quanto de LH encontram-se reduzidas abaixo do valor basal de referência X.
A administração exógena de progestina e testosterona contidas no gel exerce retroalimentação negativa (*feedback* negativo) sobre o eixo hipotálamo-adenoipófise, inibindo a secreção das gonadotrofinas hipofisárias FSH e LH. Com a queda do **LH**, as células intersticiais de Leydig nos testículos deixam de ser estimuladas a secretar testosterona endógena; com a queda do **FSH**, as células de Sertoli nos túbulos seminíferos deixam de estimular a espermatogênese, suprimindo a produção de espermatozoides.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 4,
    subject: 'Biologia',
    content: 'Genética humana: cromossomo Y (herança holândrica), cariótipo humano, DNA mitocondrial e probabilidades na 1ª Lei de Mendel',
    difficulty: 'Média',
    statement: `Leonardo da Vinci não se casou nem teve filhos. Ele teve 22 meios-irmãos. Os historiadores italianos Alessandro Vezzosi e Agnese Sabato encontraram 14 pessoas vivas que têm parentesco com da Vinci. O objetivo dos historiadores era encontrar parentes do sexo masculino que possuíam o mesmo cromossomo sexual. Esse cromossomo foi passado pelo pai aos filhos e permaneceu praticamente inalterado por 25 gerações. Em 2016, cientistas já haviam identificado 35 parentes vivos de Leonardo da Vinci, mas a maior parte deles estava vinculada à linhagem materna. Os pesquisadores pretendem reconstruir o genoma do artista e explorar as relações entre o genoma da família e algumas características de da Vinci, como o fato de ele ser canhoto.

(https://super.abril.com.br. Adaptado.)`,
    parts: [
      {
        id: 'a',
        prompt: 'Cite o cromossomo sexual que os pesquisadores pretendem identificar nos parentes do sexo masculino de Leonardo da Vinci. Qual a quantidade de cromossomos nucleares que compõem o genoma de Leonardo da Vinci?',
        expected: `1) Cromossomo sexual: Cromossomo Y.  (1 ponto)
   Não foram aceitas: XY; X; Cromossomo par 23 ou qualquer outro número; cromossomo masculino; cromossomo número 46 ou qualquer outro número.
2) Quantidade de cromossomos nucleares: São 46 cromossomos (ou 44 autossômicos + 2 sexuais; 23 pares; 22 pares autossômicos + 1 par sexual).  (1 ponto)
   Não foram aceitas: 46 + XY; 23 cromossomos; 46 + 2; qualquer outro número de cromossomos ou pares.`,
        criteria: [
          { points: 1, text: 'Identifica o cromossomo Y.' },
          { points: 1, text: 'Indica 46 cromossomos (ou 44 autossômicos + 2 sexuais / 23 pares).' },
        ],
        detailed: `a) O cromossomo sexual transmitido exclusivamente pela linhagem paterna (de pai para filhos do sexo masculino) que os pesquisadores buscam identificar é o **cromossomo Y**.
Por pertencer à espécie humana (*Homo sapiens*, $2n = 46$), o genoma nuclear diploide de Leonardo da Vinci é composto por **46 cromossomos** (distribuídos em 23 pares, sendo 44 autossomos e 2 cromossomos sexuais XY).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Que material genético extranuclear deve ser utilizado para a análise de parentesco por meio da linhagem materna? Considere que a habilidade de escrever com a mão esquerda seja determinada por um par de alelos autossômicos recessivos e que os pais de Leonardo da Vinci eram destros. Caso os pais de Leonardo da Vinci viessem a ter mais dois descendentes, qual a probabilidade de eles gerarem uma menina canhota e outra menina destra?',
        expected: `1) Material genético extranuclear: É utilizado o DNA mitocondrial; mitocôndria.  (1 ponto)
   Não foram aceitas: RNA mensageiro; Corpúsculo de Barr; DNA; Cromossomo X; Cromossomo Y; qualquer outra organela; sangue; cabelo; saliva.
2) Probabilidade genética:
   Como Leonardo da Vinci era canhoto ($aa$), seus pais, por serem destros, obrigatoriamente são heterozigotos ($Aa$).
   Assim, a probabilidade de o casal gerar uma menina canhota e uma menina destra é:
   $P = \\left(\\frac{1}{4} \\cdot \\frac{1}{2}\\right) \\cdot \\left(\\frac{3}{4} \\cdot \\frac{1}{2}\\right) = \\frac{1}{8} \\cdot \\frac{3}{8} = \\frac{3}{64} \\approx 4,65\\%$.  (1 ponto)
   Não foram aceitas pela banca VUNESP: 3/32; 1/8 e 3/8; 1/8 · 3/8 sem calcular o produto; qualquer outra fração ou porcentagem.`,
        criteria: [
          { points: 1, text: 'Cita o DNA mitocondrial (ou mitocôndria).' },
          { points: 1, text: 'Calcula a probabilidade P = (1/8) · (3/8) = 3/64 (ou 4,65%).' },
        ],
        detailed: `b) 1. Material genético extranuclear: Para o rastreamento de ancestralidade pela linhagem materna, utiliza-se o **DNA mitocondrial** (presente nas mitocôndrias), pois durante a fecundação na espécie humana as mitocôndrias paternas do espermatozoide degeneram e todas as mitocôndrias do zigoto são herdadas exclusivamente do ovócito materno.
2. Cálculo de probabilidade:
Sendo o caráter canhoto determinado por alelo autossômico recessivo ($a$) e o caráter destro pelo alelo dominante ($A$):
• Como Leonardo da Vinci era canhoto ($aa$) e seus pais eram destros ($A\\_$), ambos os pais eram obrigatoriamente heterozigotos ($Aa \\times Aa$).
• Do cruzamento $Aa \\times Aa$, a probabilidade de nascer um descendente canhoto ($aa$) é $\\frac{1}{4}$, e a probabilidade de nascer destro ($AA, Aa, aA$) é $\\frac{3}{4}$.
• A probabilidade de cada descendente ser do sexo feminino (menina, $XX$) é $\\frac{1}{2}$.
Portanto:
$$P(\\text{menina canhota}) = \\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}$$
$$P(\\text{menina destra}) = \\frac{1}{2} \\times \\frac{3}{4} = \\frac{3}{8}$$
Para os dois eventos sucessivos na ordem enunciada ("uma menina canhota e outra menina destra"), o critério oficial da banca VUNESP adotou estritamente o produto direto:
$$P = \\frac{1}{8} \\times \\frac{3}{8} = \\frac{3}{64} \\approx 4,65\\%$$
*(Observação pedagógica do Elite Campinas: caso a ordem de nascimento entre as duas irmãs não fosse fixada — podendo ser canhota/destra ou destra/canhota — multiplicar-se-ia por $2! = 2$, resultando em $2 \\times \\frac{3}{64} = \\frac{3}{32}$; contudo, a banca VUNESP aceitou exclusivamente a resposta $\\frac{3}{64}$).*`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 5,
    subject: 'Biologia',
    content: 'Ecologia e Biotecnologia: espécies exóticas invasoras, competição interespecífica, cadeia alimentar e transgenia (DNA codificante em zigoto)',
    difficulty: 'Média',
    statement: `O zebrafish (Danio rerio), espécie de peixe ornamental de água doce originária da Ásia, é conhecido no Brasil como paulistinha. Uma versão transgênica desse peixe é dotada de genes de anêmonas e de medusas que o tornam fluorescente nas cores verde, vermelha, laranja e azul. Embora a importação do peixe paulistinha transgênico esteja proibida no Brasil desde 2008, ele pode ser encontrado em aquários particulares e, segundo um estudo recente, até em riachos nacionais. Pesquisadores encontraram mais de uma centena de exemplares desses peixes transgênicos em afluentes mineiros da bacia do rio Paraíba do Sul, cuja presença é preocupante pois pode afetar os peixes nativos. Na região mineira, os peixes paulistinhas transgênicos alimentam-se de insetos aquáticos e zooplâncton e não possuem predadores naturais.

(Meghie Rodrigues. Pesquisa Fapesp, abril 2022. Adaptado.)`,
    parts: [
      {
        id: 'a',
        prompt: 'Que efeito ecológico a alimentação dos peixes paulistinhas transgênicos causará sobre as populações de peixes nativos dos afluentes do rio Paraíba do Sul? Qual será o nível trófico ocupado por um peixe paulistinha transgênico que se alimente de insetos que ingeriram zooplânctons herbívoros?',
        expected: `1) Efeito ecológico: Competição (interespecífica).  (1 ponto)
   Não foram aceitas: redução populacional; redução ou falta de alimentos; extinção, sem associar ao processo de competição.
2) Nível trófico: Quarto nível trófico.  (1 ponto)
   Foram aceitas: consumidor terciário; nível trófico 4.`,
        criteria: [
          { points: 1, text: 'Identifica o efeito ecológico como competição (interespecífica).' },
          { points: 1, text: 'Indica o quarto nível trófico (ou consumidor terciário / nível trófico 4).' },
        ],
        detailed: `a) 1. Efeito ecológico: A introdução dos peixes paulistinhas transgênicos, que são exóticos, não possuem predadores naturais e consomem insetos aquáticos e zooplâncton, provocará **competição interespecífica** por recursos alimentares com as populações de peixes nativos que partilham o mesmo nicho trófico, podendo reduzir as populações nativas.
2. Nível trófico na cadeia alimentar proposta:
• Fitoplâncton / algas (Produtores) $\\longrightarrow$ **1º nível trófico**
• Zooplâncton herbívoro (Consumidor primário) $\\longrightarrow$ **2º nível trófico**
• Insetos que ingeriram o zooplâncton (Consumidor secundário) $\\longrightarrow$ **3º nível trófico**
• Peixe paulistinha transgênico (Consumidor terciário) $\\longrightarrow$ **4º nível trófico (quarto nível trófico)**.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Suponha que, para desenvolver um peixe paulistinha transgênico, os cientistas inseriram um DNA codificante em um zigoto que tenha se desenvolvido sem mutações. Por que o DNA codificante é o material prioritário para se produzir a fluorescência em um organismo transgênico? Qual a porcentagem de células somáticas nucleadas no corpo de um peixe paulistinha transgênico em que seria encontrado o DNA exógeno que gera a fluorescência?',
        expected: `1) Por que o DNA codificante é prioritário: Porque é a partir de um DNA codificante que se sintetiza o RNA mensageiro que, por sua vez, tem informação para sintetizar a proteína fluorescente.  (1 ponto)
   Foram aceitas: transcrição do RNA mensageiro e tradução da proteína, sendo necessário fazer referência aos dois processos para pontuar.
2) Porcentagem de células somáticas nucleadas: 100%.  (1 ponto)
   Foi aceita: em todas as células somáticas nucleadas.`,
        criteria: [
          { points: 1, text: 'Explica que o DNA codificante sofre transcrição em RNA mensageiro e tradução na proteína fluorescente.' },
          { points: 1, text: 'Indica 100% (ou todas as células somáticas nucleadas).' },
        ],
        detailed: `b) 1. Importância do DNA codificante: As regiões codificantes do DNA (éxons de um gene funcional) detêm a sequência específica de nucleotídeos capaz de ser **transcrita em moléculas de RNA mensageiro (RNAm)**, as quais serão **traduzidas pelos ribossomos nas proteínas fluorescentes** (como a GFP de medusas e anêmonas) que conferem a luminescência ao animal. Sem uma região codificante, a proteína responsável pelo fenótipo fluorescente não seria sintetizada.
2. Porcentagem de células somáticas nucleadas com o DNA exógeno: Como o gene exógeno foi inserido diretamente no **zigoto** (primeira célula diploide do indivíduo) e este se desenvolveu por sucessivas divisões celulares equacionais (**mitoses**) sem sofrer mutações, todas as células derivadas possuirão cópias idênticas do genoma do zigoto. Portanto, o DNA exógeno será encontrado em **100%** das células somáticas nucleadas do peixe.`,
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
    content: 'Ligações Químicas e Estados Físicos da Matéria: atmosfera de Marte, estrutura de Lewis do CO2, geometria linear e organização molecular na sublimação',
    difficulty: 'Fácil',
    statement: `Planeta Marte

A atmosfera de Marte é formada por: CO2 - 95,32%; N2 - 2,7%; Ar - 1,6%; O2 - 0,13%; CO - 0,08%. Durante o inverno marciano, os polos entram em um período de escuridão contínua, o que resfria a superfície de tal forma que 25% do CO2 atmosférico transformam-se em dióxido de carbono sólido (gelo seco), formando uma capa de gelo nos polos. Quando os polos são expostos novamente à luz solar, durante o verão marciano, o CO2 congelado sublima, voltando à atmosfera. Esse processo leva a uma grande variação da pressão e da composição atmosférica ao redor dos polos marcianos.

(Sergio Pilling et al. www1.univap.br. Adaptado.)`,
    visuals: [{ file: 'p2-q06-planeta-marte.svg', alt: 'Fotografia do Planeta Marte mostrando a calota polar e a superfície avermelhada', caption: 'Planeta Marte.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Escreva a estrutura de Lewis (fórmula por pontos) do principal componente da atmosfera de Marte e informe sua geometria molecular.',
        expected: `1) Estrutura de Lewis (fórmula por pontos) do CO2 (principal componente da atmosfera de Marte, 95,32%):
   Representar a fórmula de Lewis com as quantidades e disposições de elétrons corretas (dois pares compartilhados entre o carbono central e cada oxigênio, além de dois pares de elétrons isolados em cada oxigênio).  (1 ponto)
2) Geometria molecular: Geometria linear.  (1 ponto)`,
        expectedImages: [{ file: 'p2-q06-solucao-lewis.svg', alt: 'Gabarito Oficial: Fórmula de Lewis (por pontos) do dióxido de carbono' }],
        criteria: [
          { points: 1, text: 'Representa a fórmula de Lewis do CO2 com as quantidades e disposições corretas de elétrons.' },
          { points: 1, text: 'Informa a geometria linear.' },
        ],
        detailed: `a) O componente majoritário da atmosfera de Marte é o dióxido de carbono ($CO_2$, com 95,32%).
O átomo de carbono ($Z=6$, grupo 14) possui 4 elétrons na camada de valência e precisa compartilhar 4 elétrons para atingir o octeto; cada átomo de oxigênio ($Z=8$, grupo 16) possui 6 elétrons de valência e precisa compartilhar 2 elétrons. Assim, estabelecem-se duas ligações covalentes duplas entre o carbono central e os dois oxigênios periféricos, restando 2 pares de elétrons não ligantes sobre cada oxigênio:
$$:\\ddot{\\text{O}}::\\text{C}::\\ddot{\\text{O}}: \\quad \\text{ou} \\quad \\ddot{\\text{O}}=\\text{C}=\\ddot{\\text{O}}$$
Geometria molecular: Como o átomo central (C) apresenta duas nuvens eletrônicas ligantes e nenhum par de elétrons livre ao seu redor, a repulsão mútua entre os pares eletrônicos determina um ângulo de ligação de $180^\\circ$, conferindo **geometria linear** à molécula.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Representando cada molécula de CO2 pelo símbolo ●, e utilizando 9 moléculas de CO2, faça dois desenhos que representem a organização dessas moléculas de CO2 nos polos de Marte em duas situações distintas: uma durante o verão (estado gasoso) e outra durante o inverno (estado sólido).',
        expected: `1) Estado gasoso (verão): Representar cada molécula de CO2 por ●, utilizando 9 moléculas bem dispersas e afastadas entre si no espaço.  (1 ponto)
2) Estado sólido (inverno): Representar cada molécula de CO2 por ●, utilizando 9 moléculas próximas e bem organizadas (arranjo cristalino regular).  (1 ponto)

Não foram aceitas: representações sem indicação de qual estado físico (gasoso ou sólido) ou qual estação (verão ou inverno) se referem.`,
        expectedImages: [{ file: 'p2-q06-solucao-estados.svg', alt: 'Gabarito Oficial: Representação das 9 moléculas de CO2 no estado gasoso (verão) e no estado sólido (inverno)' }],
        criteria: [
          { points: 1, text: 'Desenha 9 partículas ● dispersas identificando o estado gasoso (verão).' },
          { points: 1, text: 'Desenha 9 partículas ● próximas e ordenadas identificando o estado sólido (inverno).' },
        ],
        detailed: `b) Na representação submicroscópica (modelo corpuscular da matéria) utilizando 9 esferas ($\\bullet$) para simbolizar as moléculas de $CO_2$:
• **Durante o verão (estado gasoso):** As forças intermoleculares são desprezíveis diante da agitação térmica, de modo que as 9 moléculas de $CO_2$ devem ser desenhadas **amplamente afastadas umas das outras e distribuídas de maneira desordenada** ocupando todo o recipiente/espaço.
• **Durante o inverno (estado sólido - gelo seco):** As moléculas possuem baixa energia cinética de translação e permanecem unidas por forças intermoleculares em posições fixas de equilíbrio, devendo as 9 partículas ($\\bullet$) ser desenhadas **muito próximas umas das outras e regularmente alinhadas** (em arranjo geométrico ordenado, como uma matriz $3 \\times 3$).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 7,
    subject: 'Química',
    content: 'Química Orgânica e Estequiometria: monoetilenoglicol (MEG), fórmula estrutural de álcool e rendimento de reação',
    difficulty: 'Média',
    statement: `O monoetilenoglicol (massa molar = 62 g/mol), também conhecido como MEG ou simplesmente etilenoglicol, é amplamente utilizado como anticongelante automotivo e é obtido pela reação entre óxido de etileno (massa molar = 44 g/mol) e água, conforme a equação:`,
    visuals: [{ file: 'p2-q07-reacao-oxido-etileno.svg', alt: 'Equação química da reação do óxido de etileno (anel oxirano de 3 membros) com água produzindo monoetilenoglicol', caption: 'Síntese industrial do monoetilenoglicol (MEG).' }],
    parts: [
      {
        id: 'a',
        prompt: 'Escreva a fórmula estrutural plana do monoetilenoglicol e identifique a sua função orgânica.',
        expected: `1) A fórmula estrutural plana do monoetilenoglicol é:
   $HO-CH_2-CH_2-OH$ (ou com todas as ligações C-H, C-C e C-O abertas, ou em linha de ligação).  (1 ponto)
2) A função orgânica presente na sua estrutura é álcool.  (1 ponto)`,
        expectedImages: [{ file: 'p2-q07-solucao-formula-meg.svg', alt: 'Gabarito Oficial: Fórmula estrutural plana do monoetilenoglicol' }],
        criteria: [
          { points: 1, text: 'Escreve a fórmula estrutural plana correta do monoetilenoglicol (HO-CH2-CH2-OH).' },
          { points: 1, text: 'Identifica a função orgânica como álcool.' },
        ],
        detailed: `a) O monoetilenoglicol (nome IUPAC: etano-1,2-diol) possui fórmula molecular $C_2H_6O_2$ e é formado pela abertura do anel epóxido do óxido de etileno pela adição de uma molécula de água. Sua fórmula estrutural plana é:
$$\\text{HO}-\\text{CH}_2-\\text{CH}_2-\\text{OH}$$
Função orgânica: **Álcool** (trata-se de um diálcool ou diol vicinal, pois apresenta dois grupos hidroxila $-\\text{OH}$ ligados diretamente a átomos de carbono saturados $sp^3$).`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule a massa de óxido de etileno, em kg, necessária para produzir 620 kg de monoetilenoglicol, considerando que a água está em excesso e que o rendimento da reação é de 90%.',
        expected: `A proporção estequiométrica é de 1 mol : 1 mol. Sendo $1\\text{ kg} = 10^3\\text{ g}$, tem-se:
$620 \\times 10^3\\text{ g MEG} \\times \\frac{44\\text{ g de óxido de etileno}}{62\\text{ g MEG}} = 4,40 \\times 10^5\\text{ g de óxido de etileno} = 440\\text{ kg}$  (1 ponto)
Como o rendimento da reação é de 90%, a massa necessária será de:
$440\\text{ kg} \\longrightarrow 90\\%$
$m \\longrightarrow 100\\% \\implies m = 440 \\times \\frac{100\\%}{90\\%} = 488,9\\text{ kg} \\approx 490\\text{ kg}$  (1 ponto)

Observação oficial VUNESP: foi aceita resposta entre 480 e 490 kg, desde que o raciocínio demonstrado estivesse correto.`,
        criteria: [
          { points: 1, text: 'Calcula a massa estequiométrica para 100% de rendimento: 440 kg.' },
          { points: 1, text: 'Considera o rendimento de 90% obtendo 488,9 kg (aceito entre 480 kg e 490 kg com raciocínio correto).' },
        ],
        detailed: `b) Pela estequiometria da equação química (proporção molar de $1:1$):
$$1\\text{ mol de óxido de etileno } (44\\text{ g}) \\longrightarrow 1\\text{ mol de monoetilenoglicol } (62\\text{ g})$$
Considerando primeiramente a massa estequiométrica (ou aplicando o rendimento de 90%):
$$44\\text{ kg de óxido de etileno} \\xrightarrow{90\\%} 62 \\times 0,90\\text{ kg de MEG}$$
$$m \\xrightarrow{90\\%} 620\\text{ kg de MEG}$$
$$m = \\frac{44 \\times 620}{62 \\times 0,90} = \\frac{440}{0,90} \\approx 488,9\\text{ kg de óxido de etileno}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 8,
    subject: 'Química',
    content: 'Físico-Química e Equilíbrio Iônico: conversão de unidades de concentração (mg/L para g/L e mol/L) e produto de solubilidade (Kps do BaSO4)',
    difficulty: 'Média',
    statement: `De acordo com a resolução 430/2011 do Conselho Nacional do Meio Ambiente (CONAMA), o valor máximo (VM) da concentração de íons bário em efluentes é de 5,0 mg/L. Um meio de remover íons Ba2+ desses efluentes é precipitá-los sob a forma de sulfato de bário (BaSO4), cujo produto de solubilidade (Kps) a 25 ºC é igual a 1 × 10–10.`,
    parts: [
      {
        id: 'a',
        prompt: 'Expresse o VM da concentração de íons bário em g/L e em mol/L.',
        expected: `1) Em g/L:
   $VM(Ba^{2+}) = 5,0\\text{ mg/L}$. Sendo $1\\text{ mg} = 10^{-3}\\text{ g}$:
   $C(Ba^{2+}) = 5 \\times 10^{-3}\\text{ g/L}$ ou $0,005\\text{ g/L}$.  (1 ponto)
2) Em mol/L:
   Consultando a tabela periódica da prova: $Ba = 137 \\implies M(Ba^{2+}) = 137\\text{ g/mol}$.
   $[Ba^{2+}] = \\frac{0,005\\text{ g/L}}{137\\text{ g/mol}} = 0,00003649\\text{ mol/L} = 3,65 \\times 10^{-5}\\text{ mol/L}$.  (1 ponto)

Foram aceitos: valores entre $3,60 \\times 10^{-5}\\text{ mol/L}$ e $3,70 \\times 10^{-5}\\text{ mol/L}$.`,
        criteria: [
          { points: 1, text: 'Converte a concentração para g/L: 5 × 10⁻³ g/L (ou 0,005 g/L).' },
          { points: 1, text: 'Calcula a concentração molar dividindo por 137 g/mol: 3,65 × 10⁻⁵ mol/L.' },
        ],
        detailed: `a) 1. Conversão de $\\text{mg/L}$ para $\\text{g/L}$:
Sabendo que $1\\text{ mg} = 10^{-3}\\text{ g}$:
$$C(Ba^{2+}) = 5,0\\text{ mg/L} = 5,0 \\times 10^{-3}\\text{ g/L} = 0,005\\text{ g/L}$$
2. Conversão de $\\text{g/L}$ para $\\text{mol/L}$:
Pela Tabela Periódica fornecida na prova, a massa molar do bário é $M(Ba) = 137\\text{ g/mol}$:
$$[Ba^{2+}] = \\frac{C}{M} = \\frac{5,0 \\times 10^{-3}\\text{ g/L}}{137\\text{ g/mol}} \\approx 3,65 \\times 10^{-5}\\text{ mol/L}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Escreva a expressão da constante do produto de solubilidade do sulfato de bário e calcule a concentração, em mol/L, de íons de bário em uma solução aquosa saturada de sulfato de bário.',
        expected: `1) Expressão da constante do produto de solubilidade:
   $K_{PS} = [Ba^{2+}] \\times [SO_4^{2-}]$.  (1 ponto)
   Não foram aceitas: expressões divididas por $[BaSO_4]$ ou com cargas incorretas para os íons bário e sulfato.
2) Cálculo da concentração de íons bário na solução saturada:
   $BaSO_4(s) \\rightleftharpoons Ba^{2+}(aq) + SO_4^{2-}(aq)$
   $[Ba^{2+}] = [SO_4^{2-}] = S$
   $S^2 = 1 \\times 10^{-10} \\implies S = \\sqrt{1 \\times 10^{-10}} = 1 \\times 10^{-5}\\text{ mol/L} \\implies [Ba^{2+}] = 1 \\times 10^{-5}\\text{ mol/L}$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Escreve a expressão correta Kps = [Ba²⁺] · [SO₄²⁻] com as cargas iônicas exatas.' },
          { points: 1, text: 'Calcula a concentração [Ba²⁺] = 1 × 10⁻⁵ mol/L apresentando o desenvolvimento.' },
        ],
        detailed: `b) A dissociação em equilíbrio do sulfato de bário sólido em solução aquosa saturada é:
$$BaSO_4(s) \\rightleftharpoons Ba^{2+}(aq) + SO_4^{2-}(aq)$$
A expressão da constante do produto de solubilidade ($K_{ps}$) é:
$$K_{ps} = [Ba^{2+}] \\cdot [SO_4^{2-}]$$
Na solução saturada de $BaSO_4$ puro, a estequiometria $1:1$ garante que $[Ba^{2+}] = [SO_4^{2-}] = S$. Substituindo o valor de $K_{ps} = 1 \\times 10^{-10}$:
$$S \\cdot S = 1 \\times 10^{-10} \\implies S^2 = 1 \\times 10^{-10} \\implies S = 1 \\times 10^{-5}\\text{ mol/L}$$
Portanto, $[Ba^{2+}] = 1 \\times 10^{-5}\\text{ mol/L}$.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 9,
    subject: 'Química',
    content: 'Eletroquímica: pilha de cobre e prata, semirreação anódica, fluxo de elétrons e mudança de eletrodo de referência na tabela de potenciais-padrão',
    difficulty: 'Média',
    statement: `Considere a célula eletroquímica ilustrada a seguir.

Os potenciais de redução das semirreações que podem ocorrer nessa célula, nas condições-padrão, são fornecidos na tabela.

• $\\text{H}^+ (aq) + e^- \\rightleftharpoons \\frac{1}{2}\\text{H}_2 (g) \\quad E^\\circ = 0,00\\text{ V}$
• $\\text{Cu}^{2+} (aq) + 2e^- \\rightleftharpoons \\text{Cu} (s) \\quad E^\\circ = 0,34\\text{ V}$
• $\\text{Ag}^+ (aq) + e^- \\rightleftharpoons \\text{Ag} (s) \\quad E^\\circ = 0,80\\text{ V}$`,
    visuals: [{ file: 'p2-q09-pilha-eletroquimica.svg', alt: 'Esquema de célula eletroquímica com eletrodo de cobre e eletrodo de prata mergulhados em suas soluções e interligados por ponte salina e voltímetro', caption: 'Célula eletroquímica Cu / Ag nas condições-padrão.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Escreva a semirreação que ocorre no polo negativo dessa célula eletroquímica e determine o sentido do fluxo de elétrons pelo condutor externo.',
        expected: `1) Semirreação que ocorre no polo negativo (ânodo):
   $\\text{Cu}(s) \\longrightarrow \\text{Cu}^{2+}(aq) + 2e^-$  (1 ponto)
2) Sentido do fluxo de elétrons:
   Do cobre para a prata.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Escreve a semirreação de oxidação do cobre: Cu(s) → Cu²⁺(aq) + 2e⁻.' },
          { points: 1, text: 'Indica o sentido do fluxo de elétrons: do eletrodo de cobre para o de prata.' },
        ],
        detailed: `a) Comparando os potenciais-padrão de redução dos dois metais ($E^\\circ_{\\text{red}}(\\text{Ag}^+/\\text{Ag}) = +0,80\\text{ V} > E^\\circ_{\\text{red}}(\\text{Cu}^{2+}/\\text{Cu}) = +0,34\\text{ V}$), verifica-se que os íons $\\text{Ag}^+$ sofrem redução no cátodo (polo positivo), enquanto o cobre metálico ($\\text{Cu}$) sofre oxidação no **ânodo (polo negativo)**:
$$\\text{Cu}(s) \\longrightarrow \\text{Cu}^{2+}(aq) + 2e^-$$
Os elétrons liberados pela oxidação do cobre no polo negativo migram através do fio condutor externo **do eletrodo de cobre para o eletrodo de prata**.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Suponha que, por alguma razão, a comunidade científica resolvesse estabelecer um novo padrão para a tabela de potenciais-padrão de eletrodo (redução), escolhendo-se como referência a semirreação Ag+ (aq) + e– ⇄ Ag (s) e atribuindo-se a ela o valor de 0,00 V. Nessa nova tabela, qual seria o potencial-padrão associado à semirreação Cu2+ (aq) + 2e– ⇄ Cu (s)? A tensão elétrica da célula eletroquímica ilustrada seria modificada? Justifique sua resposta por meio de cálculo.',
        expected: `1) Novo potencial-padrão do cobre:
   O potencial seria igual a $-0,46\\text{ V}$ ($0,34\\text{ V} - 0,80\\text{ V} = -0,46\\text{ V}$).  (1 ponto)
2) A tensão elétrica da pilha não seria alterada, pois $\\Delta E^\\circ$ seria igual a:
   $\\Delta E^\\circ = 0,00\\text{ V} - (-0,46\\text{ V}) = +0,46\\text{ V}$ (mesmo valor obtido no padrão atual: $0,80\\text{ V} - 0,34\\text{ V} = +0,46\\text{ V}$).  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Determina o novo potencial de redução do cobre: –0,46 V.' },
          { points: 1, text: 'Responde que a tensão elétrica não seria modificada e justifica calculando ΔEº = 0,00 – (–0,46) = 0,46 V.' },
        ],
        detailed: `b) Ao adotar a semirreação $\\text{Ag}^+(aq) + e^- \\rightleftharpoons \\text{Ag}(s)$ como novo referencial ($0,00\\text{ V}$), todos os valores da tabela sofrem um decréscimo constante de $0,80\\text{ V}$. Assim, o novo potencial-padrão de redução do cobre será:
$$E^{\\circ\\prime}_{\\text{red}}(\\text{Cu}^{2+}/\\text{Cu}) = 0,34\\text{ V} - 0,80\\text{ V} = -0,46\\text{ V}$$
A tensão elétrica ($\\Delta E^\\circ$) da célula eletroquímica **não seria modificada**, pois a diferença de potencial entre os dois eletrodos permanece constante independentemente do referencial adotado:
• Na tabela original: $\\Delta E^\\circ = E^\\circ_{\\text{maior}} - E^\\circ_{\\text{menor}} = 0,80\\text{ V} - 0,34\\text{ V} = +0,46\\text{ V}$
• Na nova tabela: $\\Delta E^{\\circ\\prime} = 0,00\\text{ V} - (-0,46\\text{ V}) = +0,46\\text{ V}$.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 10,
    subject: 'Química',
    content: 'Química Orgânica e Hidrólise Salina: funções orgânicas da curcumina (fenol e éter) e caráter ácido-base de soluções aquosas',
    difficulty: 'Média',
    statement: `A cúrcuma (açafrão-da-terra) é um condimento de cor amarela, que possui propriedades antioxidante, antifúngica e outras.

(www.zonacerealista.com.br)

Essas propriedades da cúrcuma, inclusive sua cor, estão relacionadas ao seu principal componente, a curcumina, que existe na forma de três estruturas isômeras em equilíbrio (1a, 1b e 1c), com predomínio da estrutura 1a.

(Drielly E.T.B. de Oliveira et al. “Curcumina como indicador natural de pH: uma abordagem teórico-experimental para o ensino de Química”. Química Nova, vol. 44, 2021.)

A curcumina também funciona como um indicador ácido-base, apresentando cor amarela predominante em meio ácido e em meio neutro, e cor vermelha predominante em meio básico.`,
    visuals: [
      { file: 'p2-q10-curcuma.svg', alt: 'Fotografia da raiz e do pó amarelo da cúrcuma (açafrão-da-terra)', caption: 'Cúrcuma (açafrão-da-terra) — www.zonacerealista.com.br' },
      { file: 'p2-q10-estruturas-curcumina.svg', alt: 'Estruturas isômeras 1a, 1b e 1c da curcumina em equilíbrio tautomérico', caption: 'Estruturas isômeras em equilíbrio (1a, 1b e 1c) da curcumina.' },
    ],
    parts: [
      {
        id: 'a',
        prompt: 'Identifique as duas funções orgânicas oxigenadas ligadas a anéis benzênicos, presentes nas três estruturas da curcumina (1a, 1b e 1c).',
        expected: `As funções orgânicas oxigenadas ligadas a anéis benzênicos são o fenol (1 ponto) e o éter (1 ponto).`,
        criteria: [
          { points: 1, text: 'Identifica a função fenol.' },
          { points: 1, text: 'Identifica a função éter.' },
        ],
        detailed: `a) Observando os substituintes ligados diretamente aos anéis benzênicos (aromáticos) nas estruturas 1a, 1b e 1c da curcumina, identificam-se:
1. Grupo hidroxila ($-\\text{OH}$) ligado diretamente a carbono de anel aromático $\\longrightarrow$ função **fenol**.
2. Grupo metoxila ($-\\text{OCH}_3$), que apresenta um átomo de oxigênio interposto entre dois átomos de carbono (heteroátomo) $\\longrightarrow$ função **éter**.
*(Nota: as funções cetona e enol também estão presentes nas estruturas da curcumina, porém situam-se na cadeia aberta central e não ligadas diretamente aos anéis benzênicos).*`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Considere soluções aquosas das substâncias: CaO; NaCl; NH4Cl; Na2CO3 . A curcumina deverá apresentar cor amarela em duas dessas soluções. Identifique essas soluções.',
        expected: `A curcumina apresentará a cor amarela nas soluções de cloreto de sódio (1 ponto) e de cloreto de amônio (1 ponto).
Foram aceitas as fórmulas químicas $\\text{NaCl}$ e $\\text{NH}_4\\text{Cl}$ para indicar o cloreto de sódio e o cloreto de amônio, respectivamente.`,
        criteria: [
          { points: 1, text: 'Identifica a solução aquosa de NaCl (cloreto de sódio).' },
          { points: 1, text: 'Identifica a solução aquosa de NH4Cl (cloreto de amônio).' },
        ],
        detailed: `b) Segundo o texto, a curcumina exibe coloração amarela em **meio ácido** e em **meio neutro**:
• $\\text{CaO}$ (óxido de cálcio): óxido básico que reage com a água formando hidróxido de cálcio, $\\text{Ca(OH)}_2$, tornando o meio **básico** (cor vermelha).
• $\\text{NaCl}$ (cloreto de sódio): sal derivado de ácido forte ($\\text{HCl}$) e base forte ($\\text{NaOH}$); não sofre hidrólise, mantendo o meio **neutro** ($\\text{pH} = 7 \\implies$ **cor amarela**).
• $\\text{NH}_4\\text{Cl}$ (cloreto de amônio): sal derivado de ácido forte ($\\text{HCl}$) e base fraca ($\\text{NH}_4\\text{OH}$); o cátion amônio sofre hidrólise ácida ($\\text{NH}_4^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4\\text{OH} + \\text{H}^+$), tornando o meio **ácido** ($\\text{pH} < 7 \\implies$ **cor amarela**).
• $\\text{Na}_2\\text{CO}_3$ (carbonato de sódio): sal derivado de base forte ($\\text{NaOH}$) e ácido fraco ($\\text{H}_2\\text{CO}_3$); o ânion carbonato sofre hidrólise básica, tornando o meio **básico** (cor vermelha).
Portanto, a curcumina fica amarela nas soluções de **$\\text{NaCl}$ (cloreto de sódio)** e **$\\text{NH}_4\\text{Cl}$ (cloreto de amônio)**.`,
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
    content: 'Mecânica: energia cinética, conservação da energia mecânica e lançamento oblíquo em desnível',
    difficulty: 'Média',
    statement: `Uma bola de 0,4 kg é chutada com velocidade inicial V0 = 20 m/s do ponto A, na encosta de um morro, e, depois de descrever um arco de parábola no ar, toca novamente a encosta desse morro no ponto C, que está verticalmente 15 m abaixo do ponto A. No percurso do ponto A ao ponto C, a bola atinge o ponto B, ponto mais alto de sua trajetória, conforme mostra a figura.

Sabendo que, no momento do chute, a velocidade inicial da bola está inclinada de 30º com a horizontal, desprezando a resistência do ar e adotando g = 10 m/s², calcule:`,
    visuals: [{ file: 'p2-q11-trajetoria-lancamento.svg', alt: 'Trajetória parabólica da bola chutada do ponto A na encosta de um morro, passando pelo ponto mais alto B (altura h acima de A) e atingindo o ponto C (15 m abaixo de A)', caption: 'Trajetória parabólica da bola entre os pontos A, B e C na encosta do morro.' }],
    parts: [
      {
        id: 'a',
        prompt: 'a energia cinética da bola, em joules, imediatamente após o chute e imediatamente antes de tocar o solo, no ponto C.',
        expected: `1) Energia cinética da bola imediatamente após o chute (ponto A):
   $E_{\\text{cin},A} = \\frac{m \\cdot v_0^2}{2} = \\frac{0,4 \\cdot 20^2}{2} \\implies E_{\\text{cin},A} = 80\\text{ J}$.  (1 ponto)
2) Energia cinética da bola imediatamente antes de tocar o solo no ponto C:
   No trajeto de A para C, o sistema é conservativo ($E_{\\text{mec},C} = E_{\\text{mec},A}$). Adotando o nível do ponto C como referencial de altura ($h_C = 0$ e $h_A = 15\\text{ m}$):
   $E_{\\text{cin},C} = E_{\\text{cin},A} + m \\cdot g \\cdot h_A = 80 + 0,4 \\cdot 10 \\cdot 15 = 80 + 60 \\implies E_{\\text{cin},C} = 140\\text{ J}$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula a energia cinética imediatamente após o chute: 80 J.' },
          { points: 1, text: 'Calcula a energia cinética imediatamente antes de tocar o solo em C: 140 J.' },
        ],
        detailed: `a) 1. Energia cinética imediatamente após o chute (no ponto A):
$$E_{cA} = \\frac{m \\cdot V_0^2}{2} = \\frac{0,4 \\cdot 20^2}{2} = 0,2 \\cdot 400 = 80\\text{ J}$$
2. Energia cinética imediatamente antes de atingir o ponto C:
Como a resistência do ar é desprezada, o sistema é conservativo. Adotando o plano horizontal que passa por C como referencial de energia potencial gravitacional nula ($h_C = 0$ e $h_A = 15\\text{ m}$):
$$E_{mC} = E_{mA} \\implies E_{cC} + 0 = E_{cA} + m \\cdot g \\cdot h_A$$
$$E_{cC} = 80 + 0,4 \\cdot 10 \\cdot 15 = 80 + 60 = 140\\text{ J}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'a distância vertical h, em metros, entre o ponto A e o ponto B. Em seguida, calcule o tempo, em segundos, para que a bola vá do ponto A ao ponto C.',
        expected: `1) Distância vertical $h$ entre A e B:
   Componente vertical da velocidade inicial: $v_{0y} = v_0 \\cdot \\text{sen } 30^\\circ = 20 \\cdot 0,5 = 10\\text{ m/s}$.
   No ponto mais alto B, $v_y = 0$. Pela equação de Torricelli na vertical ($v_y^2 = v_{0y}^2 - 2 \\cdot g \\cdot h$):
   $0 = 10^2 - 2 \\cdot 10 \\cdot h \\implies 20h = 100 \\implies h = 5\\text{ m}$.  (1 ponto)
   (Ou por tempo de subida $t_{AB} = 1\\text{ s} \\implies h = 10(1) - 5(1)^2 = 5\\text{ m}$, ou conservação de energia mecânica entre A e B).
2) Tempo de percurso de A até C:
   Adotando o eixo vertical $y$ orientado para cima com origem no nível C ($y_0 = 15\\text{ m}$):
   $y = y_0 + v_{0y} \\cdot t - \\frac{g}{2} t^2 \\implies 0 = 15 + 10t - 5t^2 \\implies t^2 - 2t - 3 = 0 \\implies t = 3\\text{ s}$.  (1 ponto)
   (Ou somando o tempo de subida de A a B, $t_1 = 1\\text{ s}$, com o tempo de queda livre vertical de $20\\text{ m}$ de B até C: $20 = 5 t_2^2 \\implies t_2 = 2\\text{ s} \\implies t_{\\text{total}} = 1 + 2 = 3\\text{ s}$).`,
        criteria: [
          { points: 1, text: 'Calcula a distância vertical h entre A e B: h = 5 m.' },
          { points: 1, text: 'Calcula o tempo gasto para ir de A até C: t = 3 s.' },
        ],
        detailed: `b) 1. Cálculo da altura $h$ (de A até o ápice B):
Decompondo a velocidade inicial na direção vertical (consultando $\\text{sen }30^\\circ = 0,5$ no formulário):
$$V_{0y} = V_0 \\cdot \\text{sen }30^\\circ = 20 \\cdot 0,5 = 10\\text{ m/s}$$
No ponto mais alto da trajetória (B), a velocidade vertical anula-se ($V_{By} = 0$). Aplicando a equação de Torricelli no movimento vertical:
$$V_{By}^2 = V_{0y}^2 - 2 \\cdot g \\cdot h \\implies 0 = 10^2 - 2 \\cdot 10 \\cdot h \\implies h = \\frac{100}{20} = 5\\text{ m}$$
2. Cálculo do tempo de voo entre A e C:
Adotando um referencial vertical orientado para cima com origem no ponto A ($y_A = 0$ e $y_C = -15\\text{ m}$):
$$\\Delta y = V_{0y} \\cdot t - \\frac{g}{2} t^2 \\implies -15 = 10t - 5t^2$$
Dividindo por 5 e reorganizando:
$$t^2 - 2t - 3 = 0$$
As raízes são $t = 3\\text{ s}$ e $t = -1\\text{ s}$ (descartada pois $t > 0$). Logo, a bola leva **$3\\text{ s}$** para ir de A até C.`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 12,
    subject: 'Física',
    content: 'Termodinâmica: ciclo termodinâmico P×V, trabalho em transformações isovolumétrica e isobárica, equação de Clapeyron e transformação isotérmica',
    difficulty: 'Média',
    statement: `Um gás monoatômico ideal está confinado em um recipiente e sofre a transformação cíclica ABCA indicada no diagrama P × V, em que BC é uma transformação isotérmica.

Sabendo que a temperatura do gás no estado A é 300 K e adotando, para a constante universal dos gases ideais, o valor 8 J/(mol ⋅ K), calcule:`,
    visuals: [{ file: 'p2-q12-cilindro-embolo.svg', alt: 'Diagrama P x V mostrando o ciclo ABCA com PA = PC = 2 x 10^5 N/m2, VA = VB = 3 x 10^-3 m3, VC = 9 x 10^-3 m3 e isoterma BC', caption: 'Transformação cíclica ABCA no diagrama P × V.' }],
    parts: [
      {
        id: 'a',
        prompt: 'o trabalho, em joules, realizado pelas forças que o gás exerce sobre as paredes do recipiente na transformação AB e na transformação CA.',
        expected: `1) Na transformação AB (isovolumétrica / isocórica, $\\Delta V_{AB} = 0$):
   $\\tau_{AB} = 0\\text{ J}$.  (1 ponto)
2) Na transformação CA (isobárica sob pressão $P_A = 2 \\times 10^5\\text{ N/m}^2$):
   $\\tau_{CA} = P_A \\cdot (V_A - V_C) = 2 \\cdot 10^5 \\cdot (3 \\times 10^{-3} - 9 \\times 10^{-3}) \\implies \\tau_{CA} = -1\\,200\\text{ J}$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Determina o trabalho na transformação isovolumétrica AB: τ_AB = 0 J.' },
          { points: 1, text: 'Calcula o trabalho na compressão isobárica CA: τ_CA = –1 200 J.' },
        ],
        detailed: `a) 1. Trabalho na transformação AB:
Como o volume permanece constante entre A e B ($V_A = V_B = 3 \\times 10^{-3}\\text{ m}^3$), a transformação AB é isocórica (isovolumétrica) e não há realização de trabalho:
$$\\tau_{AB} = 0\\text{ J}$$
2. Trabalho na transformação CA:
A transformação CA é uma compressão isobárica à pressão constante $P = 2 \\times 10^5\\text{ N/m}^2$, na qual o volume varia de $V_C = 9 \\times 10^{-3}\\text{ m}^3$ até $V_A = 3 \\times 10^{-3}\\text{ m}^3$:
$$\\tau_{CA} = P \\cdot \\Delta V = 2 \\times 10^5 \\cdot (3 \\times 10^{-3} - 9 \\times 10^{-3}) = 2 \\times 10^5 \\cdot (-6 \\times 10^{-3}) = -1\\,200\\text{ J}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'o número de mols de gás existente dentro do recipiente e a pressão, em N/m², exercida pelo gás no estado B.',
        expected: `1) Número de mols ($n$) aplicando a equação de Clapeyron ao estado A:
   $P_A \\cdot V_A = n \\cdot R \\cdot T_A \\implies 2 \\times 10^5 \\cdot 3 \\times 10^{-3} = n \\cdot 8 \\cdot 300 \\implies 600 = 2400n \\implies n = 0,25\\text{ mol}$.  (1 ponto)
2) Pressão no estado B ($P_B$):
   Como a transformação BC é isotérmica ($T_B = T_C$), aplica-se a Lei de Boyle-Mariotte entre B e C:
   $P_B \\cdot V_B = P_C \\cdot V_C \\implies P_B \\cdot 3 \\times 10^{-3} = 2 \\times 10^5 \\cdot 9 \\times 10^{-3} \\implies P_B = 6 \\times 10^5\\text{ N/m}^2$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula o número de mols pela equação de Clapeyron: n = 0,25 mol.' },
          { points: 1, text: 'Calcula a pressão no estado B: P_B = 6 × 10⁵ N/m².' },
        ],
        detailed: `b) 1. Número de mols de gás ($n$):
Aplicando a Equação de Clapeyron ($P \\cdot V = n \\cdot R \\cdot T$) aos dados do estado A ($P_A = 2 \\times 10^5\\text{ N/m}^2$, $V_A = 3 \\times 10^{-3}\\text{ m}^3$, $T_A = 300\\text{ K}$ e $R = 8\\text{ J/(mol}\\cdot\\text{K)}$):
$$2 \\times 10^5 \\cdot 3 \\times 10^{-3} = n \\cdot 8 \\cdot 300 \\implies 600 = 2\\,400 \\cdot n \\implies n = \\frac{600}{2\\,400} = 0,25\\text{ mol}$$
2. Pressão do gás no estado B ($P_B$):
Sabendo que a etapa BC é uma transformação isotérmica ($T_B = T_C$), o produto $P \\cdot V$ permanece constante entre B e C:
$$P_B \\cdot V_B = P_C \\cdot V_C \\implies P_B \\cdot (3 \\times 10^{-3}) = (2 \\times 10^5) \\cdot (9 \\times 10^{-3})$$
$$P_B = \\frac{18 \\times 10^2}{3 \\times 10^{-3}} = 6 \\times 10^5\\text{ N/m}^2$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 13,
    subject: 'Física',
    content: 'Estática do Corpo Extenso e Óptica Geométrica: equilíbrio de torques em alavanca, Lei de Snell-Descartes e imagem em espelho plano',
    difficulty: 'Média',
    statement: `Uma pessoa de 70 kg está em repouso na extremidade de uma tábua rígida de massa desprezível, mantida em equilíbrio na direção horizontal e presa na borda de um tanque contendo água. Dessa posição, a pessoa consegue ver a imagem de um peixe parado dentro do tanque. Na figura, está representado um raio de luz proveniente do peixe, que atinge o olho dessa pessoa.`,
    visuals: [{ file: 'p2-q13-tanque-tabua.svg', alt: 'Pessoa de 70 kg na extremidade E de uma tábua horizontal presa pelo pino P a 0,6 m da quina do tanque e a 1,2 m da extremidade E, observando um peixe na água com ângulo de emergência de 45 graus', caption: 'Tábua em equilíbrio estático sobre o tanque e trajetória do raio de luz proveniente do peixe.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Sabendo que a tábua é presa à borda do tanque por um único pino P, indicado na figura, e adotando g = 10 m/s², calcule, em newtons, a intensidade da força aplicada pela pessoa sobre a tábua e a intensidade da força aplicada pelo pino sobre a tábua.',
        expected: `1) Intensidade da força aplicada pela pessoa sobre a tábua:
   $F_{\\text{PESSOA}} = m \\cdot g = 70 \\cdot 10 = 700\\text{ N}$.  (1 ponto)
2) Intensidade da força aplicada pelo pino P sobre a tábua:
   Como a tábua está em equilíbrio ($\\sum \\text{Momentos} = 0$ em relação ao ponto de apoio na quina da borda do tanque):
   $F_{\\text{PINO}} \\cdot 0,6 = F_{\\text{PESSOA}} \\cdot 1,2 \\implies F_{\\text{PINO}} \\cdot 0,6 = 700 \\cdot 1,2 \\implies F_{\\text{PINO}} = 1\\,400\\text{ N}$.  (1 ponto)`,
        expectedImages: [{ file: 'p2-q13-solucao-forcas.svg', alt: 'Gabarito Oficial: Diagrama de forças sobre a tábua em equilíbrio' }],
        criteria: [
          { points: 1, text: 'Calcula a intensidade da força aplicada pela pessoa sobre a tábua: 700 N.' },
          { points: 1, text: 'Calcula a intensidade da força aplicada pelo pino P sobre a tábua: 1 400 N.' },
        ],
        detailed: `a) 1. Força aplicada pela pessoa sobre a tábua ($F_{\\text{pessoa}}$):
Estando a pessoa em repouso na horizontal, a força normal trocada entre seus pés e a tábua tem a mesma intensidade do seu peso:
$$F_{\\text{pessoa}} = P = m \\cdot g = 70 \\cdot 10 = 700\\text{ N}$$
2. Força aplicada pelo pino P sobre a tábua ($F_{\\text{pino}}$):
Adotando a quina da parede do tanque (onde a tábua se apoia a $0,6\\text{ m}$ do pino P e a $1,2\\text{ m}$ da extremidade E onde está a pessoa) como polo de rotação, a condição de equilíbrio rotacional ($\\sum M = 0$) fornece:
$$F_{\\text{pino}} \\cdot 0,6 = F_{\\text{pessoa}} \\cdot 1,2 \\implies F_{\\text{pino}} \\cdot 0,6 = 700 \\cdot 1,2 \\implies F_{\\text{pino}} = 1\\,400\\text{ N}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Considerando o índice de refração relativo da água em relação ao ar igual a $\\sqrt{2}$, obtenha o ângulo $\\theta$, indicado na figura. Em seguida, sabendo que os olhos dessa pessoa estão a 1,5 m de altura da tábua, calcule a distância, em metros, entre os olhos da pessoa e a imagem da extremidade E da tábua, formada pela superfície da água do tanque, considerando essa superfície como um espelho plano.',
        expected: `1) Cálculo do ângulo $\\theta$ pela Lei de Snell-Descartes:
   $n_{\\text{água}} \\cdot \\text{sen }\\theta = n_{\\text{ar}} \\cdot \\text{sen }45^\\circ \\implies \\frac{n_{\\text{água}}}{n_{\\text{ar}}} = \\frac{\\text{sen }45^\\circ}{\\text{sen }\\theta} \\implies \\sqrt{2} = \\frac{\\sqrt{2}/2}{\\text{sen }\\theta} \\implies \\text{sen }\\theta = 0,5 \\implies \\theta = 30^\\circ$.  (1 ponto)
2) Distância entre os olhos da pessoa e a imagem $E'$ da extremidade $E$ da tábua:
   A extremidade $E$ está a $0,6\\text{ m}$ acima da superfície da água, logo sua imagem simétrica $E'$ forma-se a $0,6\\text{ m}$ abaixo da superfície da água.
   $d = 1,5 + 0,6 + 0,6 = 2,7\\text{ m}$.  (1 ponto)`,
        expectedImages: [{ file: 'p2-q13-solucao-espelho.svg', alt: 'Gabarito Oficial: Formação da imagem E linha da extremidade E na superfície da água' }],
        criteria: [
          { points: 1, text: 'Determina o ângulo de incidência na água pela Lei de Snell-Descartes: θ = 30º.' },
          { points: 1, text: 'Calcula a distância vertical entre os olhos da pessoa e a imagem E’: d = 2,7 m.' },
        ],
        detailed: `b) 1. Determinação do ângulo $\\theta$:
Na figura, o raio que emerge para o ar forma um ângulo de $45^\\circ$ com a superfície horizontal (e, consequentemente, o ângulo de refração em relação à reta normal também vale $r = 90^\\circ - 45^\\circ = 45^\\circ$). Aplicando a Lei de Snell-Descartes:
$$n_{\\text{água}} \\cdot \\text{sen }\\theta = n_{\\text{ar}} \\cdot \\text{sen }45^\\circ \\implies \\frac{n_{\\text{água}}}{n_{\\text{ar}}} \\cdot \\text{sen }\\theta = \\frac{\\sqrt{2}}{2}$$
Dado que $\\frac{n_{\\text{água}}}{n_{\\text{ar}}} = \\sqrt{2}$:
$$\\sqrt{2} \\cdot \\text{sen }\\theta = \\frac{\\sqrt{2}}{2} \\implies \\text{sen }\\theta = \\frac{1}{2} = 0,5 \\implies \\theta = 30^\\circ$$
2. Distância entre os olhos da pessoa e a imagem $E'$ da extremidade $E$:
Pela simetria do espelho plano (superfície da água), como a extremidade $E$ da tábua dista $0,6\\text{ m}$ acima da superfície da água, sua imagem virtual $E'$ forma-se verticalmente a $0,6\\text{ m}$ abaixo da lâmina d'água. Como os olhos da pessoa estão na mesma vertical de $E$, a $1,5\\text{ m}$ acima da tábua, a distância total é:
$$d = 1,5\\text{ m} + 0,6\\text{ m} + 0,6\\text{ m} = 2,7\\text{ m}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 14,
    subject: 'Física',
    content: 'Ondulatória e MHS: velocidade de propagação de onda senoidal, frequência, velocidade escalar média e velocidade máxima no MHS',
    difficulty: 'Média',
    statement: `Em um dia de mar agitado, um banhista flutua na água e é atingido por uma onda senoidal de amplitude constante. Essa onda propaga-se para a direita com velocidade constante, fazendo com que o banhista oscile em movimento harmônico simples na direção vertical. As figuras 1 e 2 mostram o banhista e a configuração da água do mar nos instantes t = 0 e t = 3 s, respectivamente, antes de o banhista efetuar uma oscilação completa.`,
    visuals: [{ file: 'p2-q14-onda-mar-banhista.svg', alt: 'Figuras 1 (t = 0) e 2 (t = 3 s) mostrando a onda senoidal de comprimento de onda 8 m e distância crista-vale vertical de 2 m (amplitude 1 m)', caption: 'Configuração da onda marítima e posição do banhista nos instantes t = 0 (figura 1) e t = 3 s (figura 2).' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a velocidade de propagação da onda, em m/s, e a frequência de oscilação do banhista, em Hz.',
        expected: `1) Velocidade de propagação da onda ($v$):
   $v = \\frac{\\Delta S}{\\Delta t} = \\frac{6}{3} \\implies v = 2\\text{ m/s}$.  (1 ponto)
2) Frequência de oscilação do banhista ($f$):
   Comparando as figuras nos instantes $t = 0$ e $t = 3\\text{ s}$, o banhista completa $\\frac{3}{4}$ de uma oscilação em $3\\text{ s}$ (ou, da figura, $\\lambda = 8\\text{ m}$ e $v = \\lambda \\cdot f \\implies 2 = 8 \\cdot f$):
   $f = 0,25\\text{ Hz}$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula a velocidade de propagação da onda: v = 2 m/s.' },
          { points: 1, text: 'Calcula a frequência de oscilação do banhista: f = 0,25 Hz.' },
        ],
        detailed: `a) 1. Velocidade de propagação da onda ($v$):
Comparando as figuras 1 e 2, verifica-se que a frente da onda (ou uma crista) avançou $\\Delta S = 6\\text{ m}$ para a direita no intervalo $\\Delta t = 3\\text{ s}$:
$$v = \\frac{\\Delta S}{\\Delta t} = \\frac{6\\text{ m}}{3\\text{ s}} = 2\\text{ m/s}$$
2. Frequência de oscilação do banhista ($f$):
Pela figura 1, a distância horizontal entre meia onda (de crista a vale ou pelos trechos cotados) mostra que o comprimento de onda vale $\\lambda = 8\\text{ m}$ (ou nota-se que em $3\\text{ s}$ a onda caminhou $6\\text{ m} = \\frac{3}{4}\\lambda$, logo o período é $T = 4\\text{ s}$). Aplicando a equação fundamental da ondulatória ($v = \\lambda \\cdot f$):
$$2 = 8 \\cdot f \\implies f = \\frac{2}{8} = 0,25\\text{ Hz}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule o módulo da velocidade escalar média, em m/s, do banhista entre t = 0 e t = 3 s. Adotando π = 3, calcule o módulo da máxima velocidade instantânea, em m/s, do banhista, em seu movimento oscilatório.',
        expected: `1) Módulo da velocidade escalar média ($|v_m|$):
   Conforme os critérios oficiais da banca VUNESP, tomando o módulo da variação de posição escalar vertical $|\\Delta S| = 1\\text{ m}$ entre $t = 0$ (no nível médio, $y_0 = 0$) e $t = 3\\text{ s}$ (na crista, $y = +1\\text{ m}$):
   $|v_m| = \\frac{|\\Delta S|}{\\Delta t} = \\frac{1}{3}\\text{ m/s}$.  (1 ponto)
   *(Nota: considerando a distância total efetivamente percorrida ao longo da trajetória em 3/4 de oscilação, $d = 3A = 3\\text{ m}$, obtém-se $v_m = \\frac{3}{3} = 1\\text{ m/s}$).*
2) Módulo da máxima velocidade instantânea ($|v_{\\text{máx}}|$):
   No centro do MHS, $|v_{\\text{máx}}| = \\omega \\cdot A = \\frac{2 \\cdot \\pi \\cdot A}{T}$. Com $\\pi = 3$, amplitude $A = \\frac{2\\text{ m}}{2} = 1\\text{ m}$ e período $T = \\frac{1}{f} = 4\\text{ s}$:
   $|v_{\\text{máx}}| = \\frac{2 \\cdot 3 \\cdot 1}{4} = 1,5\\text{ m/s}$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula o módulo da velocidade escalar média: |v_m| = 1/3 m/s (critério oficial VUNESP com |ΔS| = 1 m) ou 1 m/s (distância percorrida d = 3 m).' },
          { points: 1, text: 'Calcula o módulo da velocidade máxima no MHS: |v_máx| = 1,5 m/s.' },
        ],
        detailed: `b) 1. Módulo da velocidade escalar média entre $t = 0$ e $t = 3\\text{ s}$:
A distância vertical entre crista e vale é de $2\\text{ m}$, logo a amplitude de oscilação é $A = 1\\text{ m}$.
• **Critério Oficial VUNESP (baseado no deslocamento escalar $|\\Delta S|$ entre as posições inicial e final):** Em $t = 0$, o banhista está no nível médio ($y_0 = 0$); em $t = 3\\text{ s}$, está no topo da crista ($y = +1\\text{ m}$). Logo, $|\\Delta S| = 1\\text{ m}$ e:
$$|v_m| = \\frac{|\\Delta S|}{\\Delta t} = \\frac{1}{3}\\text{ m/s}$$
• **Observação do Elite Campinas (baseada na distância total percorrida sobre a trajetória):** Como a onda se propaga para a direita, em $t = 0$ o banhista começa descendo até o vale ($1\\text{ m}$), sobe até o nível médio ($1\\text{ m}$) e continua subindo até a crista em $t = 3\\text{ s}$ ($1\\text{ m}$), percorrendo uma distância total de $3\\text{ m}$ em $3\\text{ s}$, o que fornece $v_m = \\frac{3\\text{ m}}{3\\text{ s}} = 1,0\\text{ m/s}$.
2. Módulo da máxima velocidade instantânea ($|v_{\\text{máx}}|$):
A velocidade máxima de um oscilador harmônico simples ocorre ao passar pela posição de equilíbrio e vale:
$$|v_{\\text{máx}}| = \\omega \\cdot A = 2 \\cdot \\pi \\cdot f \\cdot A$$
Substituindo $\\pi = 3$, $f = 0,25\\text{ Hz}$ e $A = 1\\text{ m}$:
$$|v_{\\text{máx}}| = 2 \\cdot 3 \\cdot 0,25 \\cdot 1 = 1,5\\text{ m/s}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 15,
    subject: 'Física',
    content: 'Eletrodinâmica: carga elétrica no gráfico i×t, Primeira Lei de Ohm, potência elétrica e associação mista de lâmpadas',
    difficulty: 'Média',
    statement: `O circuito da figura é composto por um gerador, um amperímetro e uma chave interruptora C, inicialmente aberta, todos ideais. Também compõem o circuito quatro lâmpadas: uma lâmpada L1, de resistência elétrica R1, e três lâmpadas idênticas L2, de resistência elétrica R2 cada uma.

O gráfico representa a intensidade da corrente elétrica indicada pelo amperímetro entre os instantes t = 0 e t = 60 s.

Desprezando a resistência de todos os fios de ligação e sabendo que a chave C é fechada no instante t = 20 s,`,
    visuals: [{ file: 'p2-q15-circuito-e-grafico.svg', alt: 'Circuito elétrico com gerador de 120 V, lâmpada L1 e ramo controlado pela chave C contendo três lâmpadas L2 (uma em série com duas em paralelo), ao lado do gráfico de i(A) por t(s)', caption: 'Circuito com as lâmpadas L1 e L2 e gráfico da corrente elétrica medida pelo amperímetro.' }],
    parts: [
      {
        id: 'a',
        prompt: 'calcule, em coulombs, a carga elétrica fornecida pelo gerador ao circuito entre t = 0 e t = 60 s. Calcule o valor da resistência R1, em ohms.',
        expected: `1) Carga elétrica fornecida entre $t = 0$ e $t = 60\\text{ s}$ (numericamente igual à área sob o gráfico $i \\times t$):
   $Q = 20 \\cdot 0,5 + 40 \\cdot 2,5 = 10 + 100 \\implies Q = 110\\text{ C}$.  (1 ponto)
2) Valor da resistência $R_1$:
   Até $t = 20\\text{ s}$ (chave C aberta), apenas a lâmpada $L_1$ está acesa, percorrida por $i = 0,5\\text{ A}$ sob $U = 120\\text{ V}$:
   $U = R_1 \\cdot i \\implies 120 = R_1 \\cdot 0,5 \\implies R_1 = 240\\ \\Omega$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula a carga elétrica total pela área sob o gráfico: Q = 110 C.' },
          { points: 1, text: 'Calcula a resistência elétrica R1: R1 = 240 Ω.' },
        ],
        detailed: `a) 1. Carga elétrica total ($Q$):
Pela propriedade gráfica da corrente elétrica, a quantidade de carga $Q$ que atravessa o amperímetro entre $t = 0$ e $t = 60\\text{ s}$ é numericamente igual à soma das áreas dos dois retângulos sob o gráfico $i \\times t$:
$$Q = A_1 + A_2 = (20 - 0) \\cdot 0,5 + (60 - 20) \\cdot 2,5 = 10 + 100 = 110\\text{ C}$$
2. Cálculo de $R_1$:
Entre $t = 0$ e $t = 20\\text{ s}$, a chave C encontra-se aberta e somente o ramo da lâmpada $L_1$ é percorrido pela corrente $i_1 = 0,5\\text{ A}$. Pela Primeira Lei de Ohm:
$$U = R_1 \\cdot i_1 \\implies 120 = R_1 \\cdot 0,5 \\implies R_1 = \\frac{120}{0,5} = 240\\ \\Omega$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'calcule a potência dissipada pelo circuito, em watts, entre t = 20 s e t = 60 s. Calcule o valor da resistência R2, em ohms.',
        expected: `1) Potência dissipada pelo circuito entre $t = 20\\text{ s}$ e $t = 60\\text{ s}$ ($i = 2,5\\text{ A}$ e $U = 120\\text{ V}$):
   $P = i \\cdot U = 2,5 \\cdot 120 \\implies P = 300\\text{ W}$ (ou $R_{\\text{eq}} = \\frac{120}{2,5} = 48\\ \\Omega \\implies P = \\frac{120^2}{48} = 300\\text{ W}$).  (1 ponto)
2) Valor da resistência $R_2$ de cada lâmpada $L_2$:
   A resistência equivalente do ramo contendo as três lâmpadas $L_2$ (uma em série com o par em paralelo) é:
   $R_{\\text{eq},2} = R_2 + \\frac{R_2}{2} = \\frac{3 R_2}{2}$.
   Esse ramo está submetido a $U = 120\\text{ V}$ e é percorrido pela corrente $i_2 = 2,5 - 0,5 = 2,0\\text{ A}$:
   $U = \\frac{3 R_2}{2} \\cdot i_2 \\implies 120 = \\frac{3 R_2}{2} \\cdot 2 \\implies 3 R_2 = 120 \\implies R_2 = 40\\ \\Omega$.  (1 ponto)`,
        expectedImages: [{ file: 'p2-q15-solucao-circuito.svg', alt: 'Gabarito Oficial: Circuito elétrico e associação das lâmpadas L1 e L2' }],
        criteria: [
          { points: 1, text: 'Calcula a potência dissipada pelo circuito com a chave fechada: P = 300 W.' },
          { points: 1, text: 'Calcula a resistência R2 de cada lâmpada L2: R2 = 40 Ω.' },
        ],
        detailed: `b) 1. Potência elétrica dissipada entre $t = 20\\text{ s}$ e $t = 60\\text{ s}$:
Com a chave C fechada, a corrente total fornecida pelo gerador de tensão $U = 120\\text{ V}$ passa a ser $i_{\\text{total}} = 2,5\\text{ A}$:
$$P = U \\cdot i_{\\text{total}} = 120 \\cdot 2,5 = 300\\text{ W}$$
2. Cálculo de $R_2$:
Ao fechar a chave C, a lâmpada $L_1$ continua submetida à mesma ddp de $120\\text{ V}$, mantendo sua corrente $i_1 = 0,5\\text{ A}$. Logo, a corrente que ingressa no ramo superior contendo as três lâmpadas $L_2$ é:
$$i_2 = i_{\\text{total}} - i_1 = 2,5 - 0,5 = 2,0\\text{ A}$$
Nesse ramo, há uma lâmpada $L_2$ em série com uma associação em paralelo das outras duas lâmpadas $L_2$. Portanto, a resistência equivalente desse ramo vale:
$$R_{\\text{ramo}} = R_2 + \\frac{R_2 \\cdot R_2}{R_2 + R_2} = R_2 + \\frac{R_2}{2} = \\frac{3 R_2}{2}$$
Aplicando a Primeira Lei de Ohm ao ramo das lâmpadas $L_2$:
$$U = R_{\\text{ramo}} \\cdot i_2 \\implies 120 = \\frac{3 R_2}{2} \\cdot 2,0 \\implies 3 R_2 = 120 \\implies R_2 = 40\\ \\Omega$$`,
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
    content: 'Aritmética e Proporcionalidade: porcentagem, conversão de unidades de massa e razão de batimentos cardíacos',
    difficulty: 'Fácil',
    statement: `O coração de um beija-flor é considerado relativamente gigante se comparado com o tamanho do corpo de qualquer outra espécie animal. A massa do coração de um beija-flor equivale de 1,9% a 2,5% da sua massa corporal, que varia de 2,4 g a 5 g.`,
    parts: [
      {
        id: 'a',
        prompt: 'Uma veterinária coloca um beija-flor, enrolado em uma toalha, em uma balança de precisão, que acusa 129,6 g. Em seguida, ela retira o beija-flor e deixa apenas a toalha na balança, que acusa 125,9 g. Estime o maior valor possível da massa do coração desse beija-flor, em miligramas.',
        expected: `Massa do beija-flor $= 129,6 - 125,9 = 3,7\\text{ g}$.
Massa máxima do coração (2,5% da massa corporal) $= 3,7 \\cdot 0,025 = 0,0925\\text{ g} = 92,5\\text{ mg}$.
(1 ponto pelo cálculo da massa e 1 ponto pela conversão da unidade para mg; não foram aceitas aproximações nos cálculos).`,
        criteria: [
          { points: 1, text: 'Calcula a massa corporal do beija-flor (3,7 g) e 2,5% dessa massa (0,0925 g).' },
          { points: 1, text: 'Converte corretamente para miligramas sem aproximações: 92,5 mg.' },
        ],
        detailed: `a) Subtraindo a massa da toalha da massa do conjunto (beija-flor + toalha), obtemos a massa corporal do beija-flor:
$$m_{\\text{beija-flor}} = 129,6\\text{ g} - 125,9\\text{ g} = 3,7\\text{ g}$$
Como a massa do coração corresponde no máximo a $2,5\\%$ da massa corporal:
$$m_{\\text{coração}} = 2,5\\% \\text{ de } 3,7\\text{ g} = 0,025 \\times 3,7\\text{ g} = 0,0925\\text{ g}$$
Multiplicando por $1\\,000$ para converter de gramas para miligramas:
$$m_{\\text{coração}} = 0,0925 \\times 1\\,000 = 92,5\\text{ mg}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Enquanto o ritmo normal do coração humano é de 70 batimentos por minuto, o de um beija-flor é de 1 015 vezes por minuto. O coração de um beija-flor que tenha vivido 4 anos bateu tantas vezes quanto o número de vezes que já bateu o coração de João, que faz aniversário hoje. Considerando-se que todos os anos tenham o mesmo número de dias, estime a idade de João hoje.',
        expected: `Sendo $n$ a idade de João, em anos, tem-se:
$365\\text{ dias} \\cdot 24\\text{ h} \\cdot 60\\text{ min} \\cdot 1\\,015\\text{ batimentos/min} \\cdot 4\\text{ anos} = 365\\text{ dias} \\cdot 24\\text{ h} \\cdot 60\\text{ min} \\cdot 70\\text{ batimentos/min} \\cdot n$
$n = 4\\,060 \\div 70 = 58\\text{ anos}$.  (2 pontos)
Não foram aceitas aproximações nos cálculos.`,
        criteria: [
          { points: 1, text: 'Equaciona a igualdade de batimentos cardíacos (70 · n = 4 · 1 015).' },
          { points: 1, text: 'Calcula a idade exata de João: 58 anos.' },
        ],
        detailed: `b) Sendo $M$ o número de minutos em um ano (constante para todos os anos), o número total de batimentos do coração do beija-flor em 4 anos é igual ao número de batimentos do coração de João em $n$ anos:
$$1\\,015 \\times 4 \\times M = 70 \\times n \\times M$$
Simplificando $M$ em ambos os lados:
$$70n = 4\\,060 \\implies n = \\frac{4\\,060}{70} = 58\\text{ anos}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 17,
    subject: 'Matemática',
    content: 'Geometria Plana: Teorema de Pitágoras, distância entre pontos e área de quadrado',
    difficulty: 'Média',
    statement: `Um fio retilíneo de arame de comprimento de 9,25 cm será dobrado, em ângulos retos, em dois pontos, Q e R. Tais dobras produzem três segmentos de retas de medidas: PQ = 4 cm, QR = 3 cm e $\\overline{RS} = 2,25\\text{ cm} = \\frac{9}{4}\\text{ cm}$. Já com as dobras, o fio de arame deverá encaixar-se perfeitamente no quadrado TSUP, de diagonal $\\overline{PS}$, como mostram as figuras.`,
    visuals: [{ file: 'p2-q17-fio-quadrado.svg', alt: 'Fio de arame dobrado em ângulos retos nos pontos Q e R (PQ = 4 cm, QR = 3 cm, RS = 9/4 cm) encaixado no quadrado TSUP de diagonal PS', caption: 'Dobras em ângulos retos do arame nos pontos Q e R e encaixe no quadrado TSUP.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Calcule a medida do segmento $\\overline{PR}$, em centímetros, e a medida do segmento $\\overline{QS}$, em milímetros.',
        expected: `1) Medida do segmento $\\overline{PR}$ em centímetros:
   Aplicando o teorema de Pitágoras no $\\Delta PQR$ (retângulo em $Q$):
   $PR^2 = PQ^2 + QR^2 = 4^2 + 3^2 = 25 \\implies PR = 5\\text{ cm}$.  (1 ponto)
2) Medida do segmento $\\overline{QS}$ em milímetros:
   Aplicando o teorema de Pitágoras no $\\Delta QRS$ (retângulo em $R$):
   $QS^2 = QR^2 + RS^2 = 3^2 + \\left(\\frac{9}{4}\\right)^2 = 9 + \\frac{81}{16} = \\frac{225}{16} \\implies QS = \\frac{15}{4}\\text{ cm} = 3,75\\text{ cm} = 37,5\\text{ mm}$.  (1 ponto)`,
        expectedImages: [{ file: 'p2-q17-solucao-geometria-a.svg', alt: 'Gabarito Oficial: Triângulos retângulos PQR e QRS para o cálculo de PR e QS' }],
        criteria: [
          { points: 1, text: 'Calcula a medida de PR em centímetros: PR = 5 cm.' },
          { points: 1, text: 'Calcula a medida de QS e converte para milímetros: QS = 37,5 mm (ou 150/4 mm).' },
        ],
        detailed: `a) 1. Cálculo de $\\overline{PR}$ (em cm):
Como a dobra no ponto $Q$ forma um ângulo reto ($90^\\circ$), o triângulo $PQR$ é retângulo em $Q$, com catetos $PQ = 4\\text{ cm}$ e $QR = 3\\text{ cm}$. Pelo Teorema de Pitágoras:
$$PR^2 = PQ^2 + QR^2 = 4^2 + 3^2 = 16 + 9 = 25 \\implies PR = 5\\text{ cm}$$
2. Cálculo de $\\overline{QS}$ (em mm):
Como a dobra no ponto $R$ também forma um ângulo reto ($90^\\circ$), o triângulo $QRS$ é retângulo em $R$, com catetos $QR = 3\\text{ cm}$ e $RS = \\frac{9}{4}\\text{ cm} = 2,25\\text{ cm}$. Pelo Teorema de Pitágoras:
$$QS^2 = QR^2 + RS^2 = 3^2 + \\left(\\frac{9}{4}\\right)^2 = 9 + \\frac{81}{16} = \\frac{144 + 81}{16} = \\frac{225}{16}$$
$$QS = \\sqrt{\\frac{225}{16}} = \\frac{15}{4}\\text{ cm} = 3,75\\text{ cm}$$
Convertendo de centímetros para milímetros ($\\times 10$):
$$QS = 3,75 \\times 10 = 37,5\\text{ mm}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Calcule a área do quadrado TSUP, em cm².',
        expected: `Prolongando a reta suporte de $\\overline{PQ}$ e traçando por $S$ a perpendicular em $V$, forma-se o triângulo retângulo $\\Delta SVP$, cuja hipotenusa é a diagonal $\\overline{PS}$ do quadrado $TSUP$:
• $SV = RQ = 3\\text{ cm}$
• $QV = RS = \\frac{9}{4}\\text{ cm} \\implies PV = PQ + QV = 4 + \\frac{9}{4} = \\frac{25}{4}\\text{ cm}$.
Aplicando o teorema de Pitágoras no $\\Delta SVP$:
$PS^2 = PV^2 + SV^2 = \\left(\\frac{25}{4}\\right)^2 + 3^2 = \\frac{625}{16} + 9 = \\frac{769}{16}$.  (1 ponto)
Como a área de um quadrado de diagonal $d = PS$ é dada por $\\text{Área} = \\frac{d^2}{2}$:
$\\text{Área}(TSUP) = \\frac{PS^2}{2} = \\frac{769/16}{2} = \\frac{769}{32}\\text{ cm}^2$ (ou $24,03125\\text{ cm}^2$).  (1 ponto)`,
        expectedImages: [{ file: 'p2-q17-solucao-geometria-b.svg', alt: 'Gabarito Oficial: Triângulo retângulo SVP e quadrado TSUP' }],
        criteria: [
          { points: 1, text: 'Determina o quadrado da diagonal PS pelo Teorema de Pitágoras no ΔSVP: PS² = 769/16.' },
          { points: 1, text: 'Calcula a área do quadrado TSUP: 769/32 cm² (ou 24,03125 cm²).' },
        ],
        detailed: `b) Construindo o retângulo auxiliar $QRSV$, projetamos o ponto $S$ ortogonalmente sobre a reta suporte do segmento $\\overline{PQ}$, obtendo o ponto $V$:
• $PV = PQ + QV = PQ + RS = 4 + \\frac{9}{4} = \\frac{25}{4}\\text{ cm}$
• $SV = QR = 3\\text{ cm}$
No triângulo retângulo $PVS$ (retângulo em $V$), a hipotenusa é a diagonal $d = PS$ do quadrado $TSUP$:
$$d^2 = PS^2 = PV^2 + SV^2 = \\left(\\frac{25}{4}\\right)^2 + 3^2 = \\frac{625}{16} + \\frac{144}{16} = \\frac{769}{16}\\text{ cm}^2$$
Sabendo que em todo quadrado de lado $\\ell$ e diagonal $d = \\ell\\sqrt{2}$ a área vale $A = \\ell^2 = \\frac{d^2}{2}$, temos:
$$\\text{Área}(TSUP) = \\frac{PS^2}{2} = \\frac{769/16}{2} = \\frac{769}{32}\\text{ cm}^2 = 24,03125\\text{ cm}^2$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 18,
    subject: 'Matemática',
    content: 'Trigonometria: função seno f(x) = m + sen(n·x), período, imagem e modelagem de ondas marítimas',
    difficulty: 'Média',
    statement: `Cientistas usam os mesmos termos do gráfico da função seno para descrever as ondas marítimas. O período de uma onda marítima é o intervalo de tempo entre uma crista e a seguinte e a distância entre elas é o comprimento da onda. A figura descreve, no plano cartesiano, uma onda marítima, em que o eixo vertical representa a altura das cristas da onda, e o eixo horizontal representa a distância percorrida pela onda.`,
    visuals: [{ file: 'p2-q18-grafico-onda-seno.svg', alt: 'Gráfico da onda marítima no plano cartesiano passando por (0,1), crista em (5,2), vale em (15,0), crista em (25,2)', caption: 'Representação gráfica da onda marítima no plano cartesiano.' }],
    parts: [
      {
        id: 'a',
        prompt: 'Sendo $f: \\mathbb{R} \\to \\mathbb{R}$, tal que $f(x) = m + \\text{sen }(n \\cdot x)$, a função referente ao gráfico apresentado, determine $m$ e $n$.',
        expected: `1) Valor de $m$:
   A partir do gráfico (como $f(0) = 1$ ou pelo valor médio entre $0$ e $2$), obtém-se diretamente:
   $m = 1$.  (1 ponto)
2) Valor de $n$:
   Substituindo o ponto de máximo $(5, 2)$ na função ($1 + \\text{sen}(5n) = 2 \\implies \\text{sen}(5n) = 1 \\implies 5n = \\frac{\\pi}{2}$) ou pelo período $P = 20 = \\frac{2\\pi}{n}$:
   $n = \\frac{\\pi}{10}$ (ou $n = 18^\\circ$).  (1 ponto)
   *(Obs. oficial VUNESP: exigiu-se mostrar o cálculo realizado para encontrar o valor de $n$).*`,
        criteria: [
          { points: 1, text: 'Determina o valor de m = 1.' },
          { points: 1, text: 'Determina o valor de n = π/10 (ou 18º) apresentando o cálculo.' },
        ],
        detailed: `a) Dada a função $f(x) = m + \\text{sen}(n \\cdot x)$:
1. Cálculo de $m$:
O gráfico intersecta o eixo vertical no ponto $(0, 1)$, logo:
$$f(0) = 1 \\implies m + \\text{sen}(n \\cdot 0) = 1 \\implies m + 0 = 1 \\implies m = 1$$
2. Cálculo de $n$:
Pelo gráfico, a distância entre duas cristas consecutivas (de $x = 5\\text{ m}$ até $x = 25\\text{ m}$) fornece o período fundamental da função seno, $P = 25 - 5 = 20\\text{ m}$. Sabendo que o período de $\\text{sen}(n \\cdot x)$ é $P = \\frac{2\\pi}{n}$ (para $n > 0$):
$$\\frac{2\\pi}{n} = 20 \\implies n = \\frac{2\\pi}{20} = \\frac{\\pi}{10}\\text{ rad/m}\\quad (\\text{ou } 18^\\circ)$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Uma onda marítima foi modelada por meio da função $g: \\mathbb{R} \\to \\mathbb{R}$, tal que $g(x) = 3 + \\text{sen}\\left(\\frac{\\pi x}{2}\\right)$. Determine a altura de suas cristas e o comprimento da onda.',
        expected: `1) Altura das cristas (valor máximo de $g(x)$, que ocorre quando $\\text{sen}\\left(\\frac{\\pi x}{2}\\right) = 1$):
   $\\text{Altura das cristas} = 3 + 1 = 4\\text{ m}$.  (1 ponto)
2) Comprimento da onda (período da função $g$):
   $\\text{Comprimento da onda} = \\frac{2\\pi}{\\pi/2} = 4\\text{ m}$.  (1 ponto)`,
        expectedImages: [{ file: 'p2-q18-solucao-grafico.svg', alt: 'Gabarito Oficial: Gráfico da função g(x) = 3 + sen(pi x / 2)' }],
        criteria: [
          { points: 1, text: 'Determina a altura das cristas: 4 m.' },
          { points: 1, text: 'Determina o comprimento da onda: 4 m.' },
        ],
        detailed: `b) Analisando a função $g(x) = 3 + \\text{sen}\\left(\\frac{\\pi x}{2}\\right)$:
1. Altura das cristas:
A altura das cristas corresponde ao valor máximo assumido pela função $g(x)$. Como o valor máximo da função seno é $\\text{sen}\\left(\\frac{\\pi x}{2}\\right) = +1$:
$$g_{\\text{máx}} = 3 + 1 = 4\\text{ m}$$
2. Comprimento da onda:
O comprimento da onda corresponde ao período fundamental $P$ da função trigonométrica $g(x)$:
$$P = \\frac{2\\pi}{|k|} = \\frac{2\\pi}{\\pi/2} = 2\\pi \\cdot \\frac{2}{\\pi} = 4\\text{ m}$$
Portanto, a altura das cristas é **$4\\text{ m}$** e o comprimento da onda é **$4\\text{ m}$**.`,
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
        expected: `Sendo $x$ a quantidade de pacotes comprados por Renato e $y$ o preço de cada pacote em reais:
1ª equação: $x \\cdot y = 136,80$  (1 ponto)
2ª equação: $(x + 4)(y - 0,35) = 136,50$  (1 ponto)
*(Obs. oficial VUNESP: como a questão especifica $x$ e $y$, não foi aceita a equação onde as variáveis estavam invertidas).*`,
        criteria: [
          { points: 1, text: 'Escreve a primeira equação: x · y = 136,80.' },
          { points: 1, text: 'Escreve a segunda equação com troco de 30 centavos: (x + 4)(y – 0,35) = 136,50.' },
        ],
        detailed: `a) Sendo:
• $x$: quantidade de pacotes de figurinhas comprados
• $y$: preço unitário de cada pacote (em reais)
1) Na compra realizada, Renato gastou R$ 136,80 adquirindo $x$ pacotes ao preço unitário $y$:
$$x \\cdot y = 136,80$$
2) Na condição hipotética, comprando $(x + 4)$ pacotes ao preço unitário de $(y - 0,35)$ reais, sobrariam R$ 0,30 dos R$ 136,80, ou seja, o gasto seria de $136,80 - 0,30 = 136,50$ reais:
$$(x + 4)(y - 0,35) = 136,50$$
Portanto, o sistema é:
$$\\begin{cases} x \\cdot y = 136,80 \\\\ (x + 4)(y - 0,35) = 136,50 \\end{cases}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Sendo x a quantidade de pacotes de figurinhas compradas, exiba a equação polinomial do 2º grau, na forma ax² + bx – c = 0, com coeficientes a, b e c inteiros positivos e máximo divisor comum entre a, b e c igual a 1, que tem x como uma de suas raízes.',
        expected: `1) Determinar corretamente uma equação polinomial do 2º grau na forma $ax^2 + bx - c = 0$:  (1 ponto)
   Exemplos intermediários:
   $0,35x^2 + 1,1x - 547,20 = 0$
   $3,5x^2 + 11x - 5\\,472 = 0$
   $35x^2 + 110x - 54\\,720 = 0$
2) Equação com coeficientes $a, b, c$ inteiros positivos e $\\text{mdc}(a, b, c) = 1$:
   $7x^2 + 22x - 10\\,944 = 0$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Desenvolve a equação do 2º grau em x: 0,35x² + 1,1x – 547,20 = 0 (ou equivalente).' },
          { points: 1, text: 'Simplifica para coeficientes inteiros com mdc(a,b,c) = 1: 7x² + 22x – 10.944 = 0.' },
        ],
        detailed: `b) Desenvolvendo a segunda equação do sistema obtido no item (a):
$$x \\cdot y - 0,35x + 4y - 1,40 = 136,50$$
Substituindo $x \\cdot y = 136,80$ e $y = \\frac{136,80}{x}$:
$$136,80 - 0,35x + 4\\left(\\frac{136,80}{x}\\right) - 1,40 = 136,50$$
$$-0,35x + \\frac{547,20}{x} = 1,10$$
Multiplicando ambos os membros por $x$ ($x > 0$) e ordenando os termos:
$$0,35x^2 + 1,10x - 547,20 = 0$$
Multiplicando toda a equação por $100$ para eliminar as casas decimais:
$$35x^2 + 110x - 54\\,720 = 0$$
Dividindo todos os coeficientes por $\\text{mdc}(35, 110, 54\\,720) = 5$:
$$7x^2 + 22x - 10\\,944 = 0$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),

  d({
    n: 20,
    subject: 'Matemática',
    content: 'Análise Combinatória: princípio fundamental da contagem, permutações e crescimento percentual',
    difficulty: 'Média',
    statement: `Alberto, Bruno, Caio e David formaram uma banda com quatro instrumentos: guitarra, baixo, teclado e bateria. No primeiro ano de atividades da banda, Alberto e Bruno sabiam tocar todos os instrumentos, mas Caio e David sabiam tocar, cada um deles, apenas o teclado e a bateria. No segundo ano da banda, os quatro sabiam tocar todos os instrumentos.`,
    parts: [
      {
        id: 'a',
        prompt: 'Quantas combinações diferentes a banda podia fazer no seu primeiro ano de atividade com seus quatro integrantes e os quatro instrumentos diferentes?',
        expected: `Pelo Princípio Fundamental da Contagem:
• Caio e David só podem tocar teclado e bateria ($2$ possibilidades).
• Alberto e Bruno tocam os dois instrumentos restantes, guitarra e baixo ($2$ possibilidades).
Total: $2 \\cdot 2 = 4$ combinações diferentes.  (2 pontos)
*(Obs. oficial VUNESP: foi atribuído apenas 1 ponto se apresentou resposta seca "4" sem indicar o produto ou soma).*`,
        criteria: [
          { points: 2, text: 'Calcula o total demonstrando o raciocínio: 2 · 2 = 4 combinações diferentes.' },
        ],
        detailed: `a) No primeiro ano de atividade, começamos pelas restrições de Caio e David, que só sabem tocar teclado e bateria:
• Para o teclado e a bateria, há $P_2 = 2! = 2$ maneiras de distribuir Caio e David.
• Para a guitarra e o baixo, restam Alberto e Bruno, havendo $P_2 = 2! = 2$ maneiras de distribuí-los.
Pelo Princípio Multiplicativo:
$$2 \\times 2 = 4\\text{ combinações diferentes}$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
      {
        id: 'b',
        prompt: 'Qual foi o crescimento percentual do número de combinações que a banda podia fazer no seu segundo ano de atividade em comparação com o número de combinações que podia fazer no primeiro ano?',
        expected: `1) Número de combinações no 2º ano:
   $P_4 = 4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$.  (1 ponto)
2) Crescimento percentual em relação ao 1º ano:
   $x = \\frac{24 - 4}{4} = 5 \\implies$ aumento de $500\\%$.  (1 ponto)`,
        criteria: [
          { points: 1, text: 'Calcula o número de combinações no 2º ano: 4! = 24.' },
          { points: 1, text: 'Calcula o crescimento percentual em relação ao 1º ano: 500%.' },
        ],
        detailed: `b) 1. No segundo ano, como todos os 4 integrantes dominam os 4 instrumentos, o total de formações possíveis é dado pela permutação simples dos 4 músicos:
$$P_4 = 4! = 4 \\times 3 \\times 2 \\times 1 = 24\\text{ combinações}$$
2. O crescimento percentual em comparação com as $4$ combinações do primeiro ano é:
$$\\frac{24 - 4}{4} \\times 100\\% = \\frac{20}{4} \\times 100\\% = 5 \\times 100\\% = 500\\%$$`,
        detailedSource: 'Resolução comentada Elite Campinas',
      },
    ],
  }),
];
'''

target = ROOT / 'src/data/unifesp2023-discursivas.js'
target.write_text(code.strip() + '\n', encoding='utf-8')
print(f'Sucesso: gerado {target} com {len(code)} bytes')
