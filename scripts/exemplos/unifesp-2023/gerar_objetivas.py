#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gerador de src/data/unifesp2023-objetivas.js
Vestibular UNIFESP 2023 - 1º Dia: Língua Portuguesa e Língua Inglesa (Questões 01 a 25)
Gabarito oficial VUNESP + Resoluções detalhadas com Elite Campinas
"""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent

code = '''import { createUnifesp } from './unifesp-helpers.js';

const { q, img } = createUnifesp(2023);

const TEXTO_CARTUM_WILL_SANTINO = `Para responder às questões 01 e 02, examine o cartum de Will Santino, publicado em sua conta do Instagram, em 13.04.2022.

¹straw: palha.`;

const TEXTO_MARQUESA_ALORNA = `Leia o poema de Leonor de Almeida Portugal Lorena e Lencastre, também conhecida como Marquesa de Alorna, para responder às questões de 03 a 06.

Retratar a tristeza em vão procura
Quem na vida um só pesar não sente,
Porque sempre vestígios de contente
Hão-de apar’cer por baixo da pintura:

Porém eu, infeliz, que a desventura
O mínimo prazer me não consente,
Em dizendo o que sinto, a mim somente,
Parece que compete esta figura.

Sinto o bárbaro efeito das mudanças,
Dos prazeres o mais cruel pesar,
Sinto do que perdi tristes lembranças;

Condenam-me a chorar, e a não chorar,
Sinto a perda total das esperanças,
E sinto-me morrer sem acabar.

(Marquesa de Alorna. Sonetos, 2007.)`;

const TEXTO_CRITICA_LUCIA = `Mesmo em seus primeiros livros, quando ainda o cerceavam os cânones românticos e possivelmente o inibia a timidez, o receio de ser diferente dos outros, de enveredar por caminhos até então indevassáveis, já as suas figuras se distinguem pela independência em relação ao meio físico e ao moralismo convencional. Não obedeceu nem ao preconceito, então de rigor, de filiar à natureza tropical o feitio das criaturas, nem ao de fazer personagens exclusivamente boas ou más, tão caro ao romantismo.
Sem preocupação de escola literária desde que se libertou do romantismo, ele observou, como ninguém entre nós, as criaturas em toda a sua realidade, dando a cada aspecto o justo valor, isto é, apreciando a todos com um critério relativo. Foi assim que esse tímido realizou uma audaciosa revolução na nossa literatura ficcionista, até ele subordinada a valores absolutos, que reduziam a simples figurantes as personagens dominadas pela natureza e pela ética convencional.
Dentro, porém, do mundo burguês que descreveu, e que foi, afinal, o seu, não se contentou com as aparências; abismava-se na contemplação das perspectivas inumeráveis da alma humana. Tudo o que o homem da época e da condição de suas criaturas pode pensar, sentir e sonhar, ele o perscrutou. A realidade que via se prolongava na que pressentia, nas reações interiores que acima de tudo o atraíam.

(Lúcia Miguel Pereira. História da literatura brasileira: prosa de ficção, 1988. Adaptado.)`;

const TEXTO_ERRO_DESCARTES = `Leia o trecho do livro O erro de Descartes: emoção, razão e o cérebro humano, do neurocientista português António Rosa Damásio, para responder às questões de 08 a 11.

O principal enfoque em O erro de Descartes é a relação entre emoção e razão. Baseado em meu estudo de pacientes neurológicos que apresentavam deficiências na tomada de decisão e distúrbios da emoção, construí a hipótese de que a emoção era parte integrante do processo de raciocínio e poderia auxiliar esse processo ao invés de, como se costumava supor, necessariamente perturbá-lo. Hoje em dia essa ideia já não causa espécie, mas na época em que a apresentei muita gente estranhou, e mesmo a recebeu com certo ceticismo. Tudo sopesado, a ideia, em grande medida, foi aceita e até, em certos casos, acolhida com tanta sofreguidão que acabou deturpada. Por exemplo, nunca afirmei que a emoção era um substituto para a razão, mas em algumas versões superficiais depreendia-se que minha ideia era que se você seguisse o coração em vez da razão tudo daria certo.
Na verdade, em certas ocasiões a emoção pode ser um substituto para a razão. O programa de ação emocional que denominamos medo pode afastar rapidamente do perigo a maioria dos seres humanos com pouca ou nenhuma ajuda da razão. Um esquilo ou um pássaro não pensa para reagir a uma ameaça, e o mesmo pode acontecer a um humano. Aí é que está a beleza no modo como a emoção tem funcionado no decorrer da evolução: ela abre a possibilidade de levar seres vivos a agir de maneira inteligente sem precisar pensar com inteligência. Acontece que, nos humanos, essa história tornou-se mais complexa, para o bem e para o mal. O raciocínio faz o que fazem as emoções, mas alcança o resultado conscientemente. O raciocínio nos dá a opção de pensar com inteligência antes de agir de maneira inteligente, e isso é bom: descobrimos que muitos dos problemas que encontramos em nosso complexo ambiente podem ser resolvidos apenas com emoções, porém não todos, e nestas ocasiões as soluções que a emoção oferece são, na realidade, contraproducentes.
Mas como evoluiu nas espécies complexas o sistema de raciocínio inteligente? A proposta inovadora em O erro de Descartes é que o sistema de raciocínio evoluiu como uma extensão do sistema emocional automático, com a emoção desempenhando vários papéis no processo de raciocínio.

(O erro de Descartes: emoção, razão e o cérebro humano, 2012. Adaptado.)`;

const TEXTO_DESCANSO_GARCOM = `Para responder às questões de 12 a 15, leia a crônica “Descanso de garçom”, de Carlos Drummond de Andrade, publicada originalmente em 20.11.1965.

A confeitaria esteve fechada bem uns seis meses, para obras. Passando pela calçada, os antigos frequentadores já não tinham esperança de voltar ao lanche costumeiro, pois qualquer casa que se fecha para remodelação, já sabe: vira banco ou companhia de investimentos muito sofisticada, com letras na porta de vidro dizendo assim: Kredytar, Finanlys, Ríkox...
Pois aquela, desmentindo a lei econômica, reabrira confeitaria mesmo, e tão moderna que muitos clientes se sentiram enleados ao entrar em local antes de conhecida modéstia; o estabelecimento exigiria talvez fregueses também remodelados, de gabarito mais alto. Pouco a pouco foram regressando, se abancando. Era tudo novo, menos o garçom, a louça e o talher. “Por sinal que talher e louça também estão pedindo reforma, hein, Belisário?”.
Belisário, garçom boa-praça, admitiu que sim. Até já fizera ver isso ao gerente, ponderando-lhe que numa casa tão bacana aqueles elementos inferiores destoavam; o pessoal acabaria espalhando que a firma não aguentou o repuxo das obras, ficou sem grana para miudezas.
— E ficou mesmo — respondeu-lhe o gerente. — Belisário, vê se te manca, tá?
Belisário remeteu-se ao silêncio. Aos patrões não adianta ajudar; pois que se danem. E foi cuidar da vida, que não anda mole.
— Estou vendo pela sua cara, Belisário. Você encolheu, rapaz!
Aí, ele me confiou que passara seis meses comendo só uma vez por dia, e não era comida de banquete. Para variar, durante um mês, somente almoçava; no mês seguinte, jantava apenas. Dessa maneira, reeducou o estômago e pôde sobreviver. Mas o Otacílio, esse, “já reparou no Otacílio?”.
Otacílio, um baixote, gordo, servia no setor da esquerda. Passeei os olhos pelo salão, não o encontrei.
— Pois é aquele ali, no lugar de sempre. O senhor não reconheceu? Natural. Perdeu vinte quilos com as obras. Quase abotoa o paletó.
Luva-de-Pelica, um todo cheio de salamaleques, perdera quinze e teve de voltar para Miracema. João Velho, dez; João Novo, onze; outros ficaram entre dez e doze quilos. Toda a turma emagrecera. O salário fora pago pontualmente pela firma, porém sumiram as gorjetas, e é gorjeta que sustenta um homem.
— Mas, Belisário, vocês podiam se defender com biscates, servir em reuniões, casamentos.
— Não, doutor. Biscate é sagrado: fica para os colegas aposentados pelo Instituto.
Admirei a generosidade de Belisário e de seus pares da ativa, e ia louvá-la, mas ele não deixou:
— E daí, se a gente pega a xepa deles, eles vêm de sarrafo em cima da gente, morou? Tem muito aposentado bom de briga, e lá um dia a gente vai ser um velhinho igual a eles, tem de pensar no amanhã e no depois de amanhã... Não vale a pena chupar jabuticaba dos outros.
— E que é que você fez durante esse meio ano?
— Eu? Nada. Tempo havia de sobra, dava vontade de aproveitar, mas aproveitar como? o quê? Ficava de mãos abanando, esperando uma bandeja, um bule de chá que não aparecia. Até o barulho da louça, os gritos para a cozinha faziam falta. Então ia para a porta das confeitarias espiar os colegas de mais sorte, que trabalhavam, com uma inveja deles, do cansaço deles! Meu garoto mais moço, de quatro anos, veio me servir, de brincadeira, dizendo que agora eu é que era o freguês, queria com pão alemão ou pão de Petrópolis? Mineral com gás ou sem gás? Quis achar graça, mas foi me subindo um nervoso, empurrei a mão do garoto, a louça caiu no chão, se espatifou, ele saiu chorando... Sabe que mais? A patroa me dizendo sempre: “Belisário, some de minha presença que tu está me enchendo!”. Sumir pra onde? Gostei não, doutor. Descanso de garçom é fogo. Quer mais umas torradinhas?

(Carlos Drummond de Andrade. Caminhos de João Brandão, 2016.)`;

const TEXTO_HOME_SWAPPERS = `Leia o texto para responder às questões de 16 a 21.

Evie Kalo is what you might call a serial home-swapper. She and her husband are among the millions of global workers who became fully remote during the pandemic. Ever since, they’ve swapped their apartment in Amsterdam for a series of “workcations” across Europe, in places such as a beach in Barcelona and a French Riviera resort town. “What we love about it is that we trust people to be at our home because they are trusting us to be at theirs,” says Kalo.
The couple tries to stay in each place for about two weeks so they can have enough time to explore sites around their busy work schedules. Home swaps allow people to attain the kind of journeying lifestyle they desire at a fraction of the cost of purchasing a pricey holiday — or second home. By capitalising on their own most valuable asset — a house or apartment — they’re able to stay in other people’s comfortable accommodations around the world.
So far, people are finding their homes informally through work colleagues or friends. Others have turned to social media. Yet, the most popular method is the search on online marketplaces.
Globally, the number of swaps finalised per day on Home Exchange (an online marketplace) in August 2022 was up 50% from August 2019, according to statistics provided by the company. The company has also seen the average trip length increase well beyond the standard seven days in 2019. Some 59% of its members now want to stay for 10 days or more, and many are opting for locations closer to home. Domestic travel is 25% higher than it was is 2019, which is attributed to workcation deals to a great extent.

(Mark Johanson. www.bbc.com, 30.08.2022. Adaptado.)`;

const TEXTO_BIODIVERSITY_LOSS = `Leia o texto para responder às questões de 22 a 25.

The accelerating loss of species around the globe is so extensive that many experts now refer to it as the sixth mass extinction. It’s driven in large part by an unprecedented loss of vital ecosystems such as forests and wetlands, the result of social and economic systems that are focused on constant growth.
The latest United Nations (UN) Biodiversity Conference, COP15, the second session of which is due to take place in December 2022, aims to implement ambitious measures for preventing biodiversity loss. The ultimate goal is to establish harmony between humans and nature by 2050. However, key players such as the body of conservation scientists that produces reports on biodiversity for the UN continue to prioritise human wellbeing above all else. This prioritisation may be the result of an anthropocentric culture that typically considers humans to be separate from and of greater value than other species.
To effectively address our extinction crisis, we need more than merely technical advances or policies that remain stuck in anthropocentric assumptions. Rather, we need fundamental changes in how we view nature and other species.

(Heather Alberro et al. https://theconversation.com, 08.06.2022. Adaptado.)`;

export const unifesp2023Objetivas = [
  // ==========================================
  // LÍNGUA PORTUGUESA (QUESTÕES 01 A 15)
  // ==========================================
  q({
    n: 1,
    subject: 'Português',
    content: 'Intertextualidade e recursos de humor em texto multissemiótico (cartum)',
    difficulty: 'Fácil',
    statement: `${TEXTO_CARTUM_WILL_SANTINO}

Mostra-se decisivo para o efeito de humor do cartum o recurso`,
    visuals: [{ file: 'p1-q01-cartum-lobo.svg', alt: 'Cartum de Will Santino mostrando o lobo em uma plantação de palha esperando os porquinhos construírem as casas', caption: 'Cartum de Will Santino (Instagram, 13.04.2022).' }],
    alternatives: [
      'ao eufemismo.',
      'à metalinguagem.',
      'à intertextualidade.',
      'ao pleonasmo.',
      'à hipérbole.',
    ],
    answer: 'C',
    why: 'O efeito de humor do cartum depende fundamentalmente da intertextualidade com o clássico conto infantil "Os Três Porquinhos". No conto, o lobo sopra para derrubar a casa de palha do primeiro porquinho; no cartum, o lobo resolve plantar e regar a própria palha ("straw") para garantir que o porquinho tenha material para construir a casa frágil que ele poderá assoprar depois. A compreensão desse diálogo entre textos é indispensável para gerar o humor.',
    wrong: {
      0: 'Eufemismo é a suavização de uma ideia desagradável ou chocante, recurso que não fundamenta o humor da imagem.',
      1: 'Metalinguagem ocorre quando o código explica o próprio código (por exemplo, um texto que fala sobre o ato de escrever ou um desenho sobre desenhar), o que não ocorre na tirinha.',
      3: 'Pleonasmo é a repetição enfática de uma mesma ideia ou termo com idêntico significado, o que não constrói a graça da cena.',
      4: 'Hipérbole é o exagero expressivo e intencional de uma grandeza ou situação, não sendo a figura central que dá sentido ao cartum.',
    },
  }),

  q({
    n: 2,
    subject: 'Português',
    content: 'Interpretação e caracterização de personagem em narrativa / cartum',
    difficulty: 'Fácil',
    statement: `${TEXTO_CARTUM_WILL_SANTINO}

A análise contextualizada do cartum permite caracterizar o lobo como`,
    visuals: [{ file: 'p1-q01-cartum-lobo.svg', alt: 'Cartum de Will Santino', caption: 'Cartum de Will Santino (Instagram, 13.04.2022).' }],
    alternatives: [
      'calculista.',
      'subserviente.',
      'impaciente.',
      'ingênuo.',
      'vaidoso.',
    ],
    answer: 'A',
    why: 'O lobo é caracterizado como calculista porque ele planeja fria e pacientemente suas ações a longo prazo: ao invés de sair caçando sem rumo ou se frustrar com casas resistentes, ele planta e rega a palha para induzir o porquinho a construir uma casa frágil, antecipando cada etapa para alcançar seu objetivo predatório.',
    wrong: {
      1: 'Subserviente significa obediente de forma cega, servil ou humilhante, atitude oposta à autonomia estratégica e calculada do lobo.',
      2: 'Impaciente contradiz diretamente a cena, pois o lobo demonstra paciência extrema ao se dedicar à agricultura e esperar a palha crescer.',
      3: 'Ingênuo significaria tolo ou inocente, o que não condiz com a astúcia premeditada de criar as condições para a sua futura caçada.',
      4: 'Vaidoso refere-se a quem ostenta orgulho excessivo de sua aparência ou qualidades, traço não explorado na cena.',
    },
  }),

  q({
    n: 3,
    subject: 'Português',
    content: 'Interpretação poética: oposições semânticas e líricas em soneto neoclássico / pré-romântico',
    difficulty: 'Média',
    statement: `${TEXTO_MARQUESA_ALORNA}

Na primeira estrofe, o eu lírico explora, sobretudo, a seguinte oposição:`,
    alternatives: [
      'razão x loucura.',
      'abstração x concretude.',
      'essência x aparência.',
      'determinação x hesitação.',
      'consideração x indiferença.',
    ],
    answer: 'C',
    why: 'Na primeira estrofe ("Retratar a tristeza em vão procura / Quem na vida um só pesar não sente, / Porque sempre vestígios de contente / Hão-de apar’cer por baixo da pintura:"), o eu lírico opõe a essência verdadeira do sentimento interior (a alegria real de quem nunca sofreu) à aparência fingida ou simulada da tristeza pintada por fora, demonstrando que a verdadeira essência sempre transparece sob a máscara superficial.',
    wrong: {
      0: 'A estrofe não trata de alienação mental ou conflito entre faculdades racionais e loucura, mas sim da impossibilidade de simular um afeto inexistente.',
      1: 'Embora a metáfora da "pintura" seja concreta, a antítese poética nuclear não gira em torno de abstração contra concretude física.',
      3: 'Não há menção à dúvida, hesitação ou fraqueza de determinação, mas à certeza de que a dor não pode ser representada com fidelidade por quem não a vivencia.',
      4: 'A relação afetiva abordada é a experiência da dor e do júbilo íntimo, sem tratar de consideração ou indiferença interpessoal.',
    },
  }),

  q({
    n: 4,
    subject: 'Português',
    content: 'Sintaxe: identificação de sujeitos em ordem inversa (hipérbato)',
    difficulty: 'Média',
    statement: `${TEXTO_MARQUESA_ALORNA}

Os sujeitos dos verbos “procura” e “sente” (ambos na 1ª estrofe) são, respectivamente,`,
    alternatives: [
      '“Retratar a tristeza” e “Quem”.',
      '“Retratar a tristeza” e “um só pesar”.',
      '“em vão” e “um só pesar”.',
      '“Quem na vida um só pesar não sente” e “um só pesar”.',
      '“Quem na vida um só pesar não sente” e “Quem”.',
    ],
    answer: 'E',
    why: 'Colocando os dois primeiros versos na ordem direta, temos: "Quem na vida um só pesar não sente procura em vão retratar a tristeza". Portanto, o sujeito da oração principal cujo verbo é "procura" é a oração subordinada substantiva subjetiva "Quem na vida um só pesar não sente". Já no interior dessa oração subordinada, o pronome "Quem" atua como sujeito do verbo "sente" (tendo "um só pesar" como objeto direto). Logo, os sujeitos são, respectivamente, “Quem na vida um só pesar não sente” e “Quem”.',
    wrong: {
      0: '“Retratar a tristeza” funciona como complemento verbal (oração subordinada objetiva direta reduzida de infinitivo) do verbo "procura", e não como seu sujeito.',
      1: '“Retratar a tristeza” é objeto direto de "procura", e “um só pesar” é objeto direto de "sente".',
      2: '“em vão” é locução adverbial de modo ligada a "procura", e “um só pesar” é objeto direto de "sente".',
      3: 'Embora o primeiro sujeito esteja correto, “um só pesar” é o objeto direto da forma verbal transitiva direta "não sente" (não sente o quê? um só pesar), e não seu sujeito.',
    },
  }),

  q({
    n: 5,
    subject: 'Português',
    content: 'História literária: transição Neoclassicismo / Arcadismo para Romantismo (subjetivismo lírico)',
    difficulty: 'Fácil',
    statement: `${TEXTO_MARQUESA_ALORNA}

Uma característica do poema que antecipa a estética romântica é`,
    alternatives: [
      'a predileção pela forma fixa.',
      'o tom socialmente engajado.',
      'o ideal da impessoalidade.',
      'a ênfase na expressão subjetiva.',
      'o retrato bucólico da paisagem.',
    ],
    answer: 'D',
    why: 'A Marquesa de Alorna é autora de transição entre o Arcadismo/Neoclassicismo e o pré-romantismo. O soneto antecipa a sensibilidade romântica pela ênfase visceral no "eu", na expressão confessional de desolação e sofrimento íntimo ("Porém eu, infeliz...", "Sinto o bárbaro efeito das mudanças", "E sinto-me morrer sem acabar"), marcando o triunfo do subjetivismo sobre o equilíbrio racional arcádico.',
    wrong: {
      0: 'A forma fixa do soneto é herança clássica e neoclássica, estética da qual o Romantismo procurou afastar-se ao valorizar formas poéticas mais livres.',
      1: 'O poema é estritamente íntimo e existencial, não apresentando engajamento ou denúncia social coletiva.',
      2: 'A impessoalidade é um ideal parnasiano/clássico; o soneto faz exatamente o oposto, centrado no "eu" sofredor.',
      4: 'O retrato bucólico é marca típica do Arcadismo tradicional (locus amoenus, pastoralismo), elemento ausente do soneto, focado na dor anímica.',
    },
  }),

  q({
    n: 6,
    subject: 'Português',
    content: 'Figuras de linguagem: identificação de paradoxo (oxímoro)',
    difficulty: 'Fácil',
    statement: `${TEXTO_MARQUESA_ALORNA}

O eu lírico recorre a um enunciado paradoxal no seguinte verso:`,
    alternatives: [
      '“Sinto o bárbaro efeito das mudanças,” (3ª estrofe)',
      '“Dos prazeres o mais cruel pesar,” (3ª estrofe)',
      '“O mínimo prazer me não consente,” (2ª estrofe)',
      '“Quem na vida um só pesar não sente,” (1ª estrofe)',
      '“Sinto do que perdi tristes lembranças;” (3ª estrofe)',
    ],
    answer: 'B',
    why: 'O paradoxo (oxímoro) consiste na aproximação de conceitos mutuamente excludentes ou contraditórios em uma mesma formulação. No verso "Dos prazeres o mais cruel pesar", associam-se os termos "prazeres" e "cruel pesar", atribuindo ao prazer a essência de dor e tormento cruel, gerando uma contradição lógica intencional.',
    wrong: {
      0: '“Sinto o bárbaro efeito das mudanças” expressa o impacto devastador da passagem do tempo, sem reunir termos com ideias conceitualmente excludentes.',
      2: '“O mínimo prazer me não consente” declara a ausência completa de alegria decorrente da desventura, configurando declaração enfática coerente sem paradoxo.',
      3: '“Quem na vida um só pesar não sente” é uma caracterização de quem nunca sofreu desgostos, sem contradição lógica.',
      4: '“Sinto do que perdi tristes lembranças” apresenta relação coerente entre a perda ocorrida no passado e a tristeza das recordações.',
    },
  }),

  q({
    n: 7,
    subject: 'Português',
    content: 'Literatura Brasileira: análise crítica e perfil literário de Machado de Assis',
    difficulty: 'Fácil',
    statement: `${TEXTO_CRITICA_LUCIA}

O texto trata do escritor`,
    alternatives: [
      'Graciliano Ramos.',
      'José de Alencar.',
      'Aluísio Azevedo.',
      'Machado de Assis.',
      'Manuel Antônio de Almeida.',
    ],
    answer: 'D',
    why: 'O trecho da renomada ensaísta Lúcia Miguel Pereira descreve com perfeição a trajetória de Machado de Assis: a fase inicial sob influxo romântico mitigado por figuras independentes; a transição madura para o Realismo ("sem preocupação de escola literária desde que se libertou do romantismo"); a recusa do determinismo geográfico do meio tropical (ao contrário dos naturalistas); e o mergulho psicológico na hipocrisia da sociedade burguesa carioca com ironia e ceticismo sutil.',
    wrong: {
      0: 'Graciliano Ramos pertence à 2ª geração modernista (romance regionalista de 30), afastado das contingências históricas do romantismo oitocentista.',
      1: 'José de Alencar é o patriarca do Romantismo brasileiro, justamente quem vinculou o feitio das personagens à exuberância da natureza tropical nacional.',
      2: 'Aluísio Azevedo é o principal expoente do Naturalismo brasileiro, cuja obra é radicalmente pautada pelo determinismo biológico e do meio físico.',
      4: 'Manuel Antônio de Almeida escreveu Memórias de um sargento de milícias ainda no século XIX, mas não realizou a revolução psicológica na alta burguesia descrita no ensaio.',
    },
  }),

  q({
    n: 8,
    subject: 'Português',
    content: 'Compreensão e interpretação de texto de divulgação científica / ensaio neurocientífico',
    difficulty: 'Média',
    statement: `${TEXTO_ERRO_DESCARTES}

De acordo com o autor,`,
    alternatives: [
      'o sistema emocional automático pode vir a substituir, com a progressiva evolução humana, o sistema de raciocínio.',
      'a mente humana evolui ao tornar a inteligência cada vez mais independente das limitações impostas pela emoção.',
      'a evolução do sistema de raciocínio humano está intrinsecamente associada ao sistema emocional automático.',
      'a emoção representa um entrave para o homem contemporâneo que quer tomar decisões racionais eficazes.',
      'o desenvolvimento das potencialidades humanas pressupõe o abandono da ideia de que a emoção pode ser de algum modo benéfica.',
    ],
    answer: 'C',
    why: 'No último parágrafo, António Damásio explicita sua tese inovadora central: "o sistema de raciocínio evoluiu como uma extensão do sistema emocional automático, com a emoção desempenhando vários papéis no processo de raciocínio". Ou seja, o raciocínio humano e a emoção estão intrinsecamente associados na história evolutiva.',
    wrong: {
      0: 'O autor não afirma que o sistema emocional substituirá o raciocínio no futuro da evolução; pelo contrário, o raciocínio atua conscientemente onde a emoção imediata é insuficiente.',
      1: 'Damásio refuta exatamente a pretensa independência total da razão em relação à emoção, mostrando que a emoção participa ativamente do raciocínio sadio.',
      3: 'O autor argumenta que as emoções são fundamentais e auxiliam as tomadas de decisão, não sendo um entrave inescapável.',
      4: 'O texto defende a importância biológica e adaptativa das emoções, refutando a ideia de que elas deveriam ser abandonadas.',
    },
  }),

  q({
    n: 9,
    subject: 'Português',
    content: 'Coesão textual e valor semântico de conector / locução adverbial ("e mesmo")',
    difficulty: 'Média',
    statement: `${TEXTO_ERRO_DESCARTES}

“Hoje em dia essa ideia já não causa espécie, mas na época em que a apresentei muita gente estranhou, e <u>mesmo</u> a recebeu com certo ceticismo.” (1º parágrafo)

No contexto em que se insere, o termo sublinhado indica`,
    alternatives: [
      'inclusão.',
      'concessão.',
      'condição.',
      'comparação.',
      'finalidade.',
    ],
    answer: 'A',
    why: 'No trecho "muita gente estranhou, e mesmo a recebeu com certo ceticismo", o termo sublinhado "mesmo" (acompanhado da conjunção aditiva "e") funciona como operador argumentativo de inclusão e gradação, equivalente a "inclusive" ou "até mesmo", adicionando à reação de estranhamento a atitude mais enfática de ceticismo.',
    wrong: {
      1: 'Concessão introduz uma ressalva ou oposição que não anula a oração principal (como "embora", "ainda que"), valor não assumido por "mesmo" no contexto.',
      2: 'Condição exprime uma hipótese ou pré-requisito necessário (como "se", "caso"), o que não se aplica ao relato de fatos consumados.',
      3: 'Comparação estabelece analogia ou contraste de grandezas entre dois elementos, o que não ocorre na frase.',
      4: 'Finalidade expressa objetivo ou propósito ("a fim de que", "para"), inexistente na estrutura aditivo-inclusiva do trecho.',
    },
  }),

  q({
    n: 10,
    subject: 'Português',
    content: 'Morfossintaxe: classes de palavras (preposição essencial)',
    difficulty: 'Média',
    statement: `${TEXTO_ERRO_DESCARTES}

O termo sublinhado em “nunca afirmei que a emoção era um substituto <u>para</u> a razão” (1º parágrafo) pertence à mesma classe gramatical do termo sublinhado em:`,
    alternatives: [
      '“na época em que <u>a</u> apresentei muita gente estranhou” (1º parágrafo).',
      '“O raciocínio nos dá <u>a</u> opção de pensar com inteligência” (2º parágrafo).',
      '“a hipótese de que <u>a</u> emoção era parte integrante do processo de raciocínio” (1º parágrafo).',
      '“com <u>a</u> emoção desempenhando vários papéis no processo de raciocínio” (3º parágrafo).',
      '“Um esquilo ou um pássaro não pensa para reagir <u>a</u> uma ameaça” (2º parágrafo).',
    ],
    answer: 'E',
    why: 'Na frase do enunciado, "para" é uma preposição essencial que introduz o complemento nominal exigido pelo substantivo "substituto" ("substituto para a razão"). Na alternativa E, o vocábulo sublinhado "a" em "não pensa para reagir <u>a</u> uma ameaça" é igualmente uma preposição essencial, exigida pela regência do verbo transitivo indireto "reagir" (quem reage, reage a alguma coisa) e seguida do artigo indefinido "uma".',
    wrong: {
      0: 'Em "na época em que <u>a</u> apresentei", a palavra sublinhada "a" é um pronome pessoal oblíquo átono (objeto direto de "apresentei", retomando "essa ideia"), e não preposição.',
      1: 'Em "nos dá <u>a</u> opção", a palavra sublinhada "a" é um artigo definido feminino singular que determina o substantivo "opção".',
      2: 'Em "a hipótese de que <u>a</u> emoção...", a palavra sublinhada "a" é um artigo definido feminino singular que determina o substantivo "emoção".',
      3: 'Em "com <u>a</u> emoção desempenhando vários papéis", a palavra sublinhada "a" é um artigo definido feminino singular que acompanha o substantivo "emoção".',
    },
  }),

  q({
    n: 11,
    subject: 'Português',
    content: 'Morfologia verbal: pretérito perfeito do indicativo (fato pontual e concluído)',
    difficulty: 'Fácil',
    statement: `${TEXTO_ERRO_DESCARTES}

O verbo sublinhado, na conjugação em que se apresenta, indica um fato pontual no passado no seguinte trecho:`,
    alternatives: [
      '“se você seguisse o coração em vez da razão tudo <u>daria</u> certo” (1º parágrafo).',
      '“a emoção <u>era</u> um substituto para a razão” (1º parágrafo).',
      '“<u>construí</u> a hipótese de que a emoção era parte integrante do processo de raciocínio” (1º parágrafo).',
      '“Baseado em meu estudo de pacientes neurológicos que <u>apresentavam</u> deficiências na tomada de decisão” (1º parágrafo).',
      '“O raciocínio nos <u>dá</u> a opção de pensar com inteligência antes de agir de maneira inteligente” (2º parágrafo).',
    ],
    answer: 'C',
    why: 'A forma verbal "construí" está conjugada no pretérito perfeito do modo indicativo, tempo verbal que expressa uma ação pontual, perfeitamente delimitada e concluída no passado (o momento específico em que o neurocientista formulou sua hipótese científica).',
    wrong: {
      0: '“daria” está no futuro do pretérito do indicativo, expressando hipótese ou consequência condicionada no plano da suposição.',
      1: '“era” está no pretérito imperfeito do indicativo, indicando estado contínuo, durativo ou habitual no passado.',
      3: '“apresentavam” está no pretérito imperfeito do indicativo, designando uma característica ou condição prolongada dos pacientes ao longo do tempo.',
      4: '“dá” está conjugado no presente do indicativo, enunciando uma verdade genérica ou ação habitual no momento presente.',
    },
  }),

  q({
    n: 12,
    subject: 'Português',
    content: 'Foco narrativo e discurso: identificação do discurso indireto livre',
    difficulty: 'Média',
    statement: `${TEXTO_DESCANSO_GARCOM}

A voz de um dos personagens mescla-se à voz do narrador, configurando o chamado discurso indireto livre, em:`,
    alternatives: [
      '“— E ficou mesmo — respondeu-lhe o gerente.” (4º parágrafo)',
      '“Dessa maneira, reeducou o estômago e pôde sobreviver.” (7º parágrafo)',
      '“‘Por sinal que talher e louça também estão pedindo reforma, hein, Belisário?’” (2º parágrafo)',
      '“Aos patrões não adianta ajudar; pois que se danem.” (5º parágrafo)',
      '“Belisário remeteu-se ao silêncio.” (5º parágrafo)',
    ],
    answer: 'D',
    why: 'O discurso indireto livre ocorre quando o pensamento ou a fala interior de uma personagem se insere diretamente no fluxo narrativo sem os verbos de elocução (dizer, pensar) nem marcas de pontuação características do discurso direto (travessão, aspas). Em "Aos patrões não adianta ajudar; pois que se danem.", o narrador em 3ª pessoa assimila imediatamente o desabafo revoltado da mente do garçom Belisário.',
    wrong: {
      0: 'Trata-se de discurso direto convencional, sinalizado por travessão e pelo verbo de elocução "respondeu-lhe".',
      1: 'Trata-se de discurso indireto relato puro conduzido pelo narrador em 3ª pessoa, sem incorporar a fala vivencial íntima do personagem.',
      2: 'Trata-se de discurso direto transcrito entre aspas e com interjeição/vocativo ("hein, Belisário?").',
      4: 'Constitui oração estritamente descritiva da ação da personagem narrada em 3ª pessoa pelo narrador.',
    },
  }),

  q({
    n: 13,
    subject: 'Português',
    content: 'Gênero crônica: marcas de coloquialidade e registro informal',
    difficulty: 'Fácil',
    statement: `${TEXTO_DESCANSO_GARCOM}

Uma característica recorrente no gênero crônica que está presente no texto de Drummond é`,
    alternatives: [
      'o registro informal.',
      'a linguagem hermética.',
      'o tom moralizante.',
      'a crítica política.',
      'o viés metalinguístico.',
    ],
    answer: 'A',
    why: 'A crônica drummondiana explora a linguagem do cotidiano urbano marcada pelo registro coloquial e oralidade viva, perceptível em gírias e expressões populares como "boa-praça", "não aguentou o repuxo", "ficou sem grana", "vê se te manca", "morou?", "pega a xepa", "vêm de sarrafo", "chupar jabuticaba dos outros" e "descanso de garçom é fogo".',
    wrong: {
      1: 'Linguagem hermética é obscura, cifrada e de difícil compreensão, o exato oposto da clareza e acessibilidade coloquial da crônica.',
      2: 'A crônica não adota postura professoral, moralizante ou de sermão didático; ela registra com sensibilidade e humor a vida miúda dos trabalhadores.',
      3: 'O foco do texto é o drama íntimo e financeiro dos garçons durante a reforma do estabelecimento comercial, não uma crítica política partidária ou ideológica institucional.',
      4: 'O texto não é construído sobre o questionamento do próprio ato de escrever literatura (metalinguagem).',
    },
  }),

  q({
    n: 14,
    subject: 'Português',
    content: 'Morfologia: prefixação e valores semânticos de prefixos (prefixo iterativo "re-")',
    difficulty: 'Fácil',
    statement: `${TEXTO_DESCANSO_GARCOM}

Verifica-se o emprego de palavra formada com prefixo que exprime ideia de repetição em:`,
    alternatives: [
      '“Pouco a pouco foram regressando, se abancando” (2º parágrafo).',
      '“o estabelecimento exigiria talvez fregueses também remodelados” (2º parágrafo).',
      '“ele me confiou que passara seis meses comendo só uma vez por dia” (7º parágrafo).',
      '“os antigos frequentadores já não tinham esperança de voltar ao lanche costumeiro” (1º parágrafo).',
      '“numa casa tão bacana aqueles elementos inferiores destoavam” (3º parágrafo).',
    ],
    answer: 'B',
    why: 'Na palavra "remodelados" (particípio de remodelar), identifica-se o prefixo latino "re-", que agrega a ideia de repetição ou de fazer novamente (modelar novamente, refazer o modelo).',
    wrong: {
      0: 'Em "regressando" (do verbo regressar, de origem latina regredi), a sequência "re" pertence ao radical histórico latino e não atua como prefixo produtivo autônomo de repetição.',
      2: 'A palavra "confiou" deriva de confiar (con- + fiar), onde o prefixo tem valor de intensificação/associação, não de repetição.',
      3: 'Em "costumeiro", o sufixo formador de adjetivo é "-eiro" a partir de "costume", inexistindo prefixo de repetição.',
      4: 'Em "destoavam", o prefixo "des-" (ou "dis-") tem valor de negação, afastamento ou dissonância (estar fora do tom), e não de repetição.',
    },
  }),

  q({
    n: 15,
    subject: 'Português',
    content: 'Sintaxe: partícula de realce ou expressão expletiva ("é que")',
    difficulty: 'Fácil',
    statement: `${TEXTO_DESCANSO_GARCOM}

Expressão expletiva é aquela que, embora seja desnecessária ao sentido da frase, é empregada como realce ou ênfase. Ocorre expressão expletiva no seguinte trecho:`,
    alternatives: [
      '“Quer mais umas torradinhas?” (16º parágrafo)',
      '“Você encolheu, rapaz!” (6º parágrafo)',
      '“Passeei os olhos pelo salão, não o encontrei.” (8º parágrafo)',
      '“Não vale a pena chupar jabuticaba dos outros.” (14º parágrafo)',
      '“E que é que você fez durante esse meio ano?” (15º parágrafo)',
    ],
    answer: 'E',
    why: 'Na frase interrogativa "E que é que você fez durante esse meio ano?", a locução "é que" funciona como partícula expletiva de realce. Se for eliminada, a estrutura gramatical e o sentido nuclear da oração permanecem intactos: "E o que você fez durante esse meio ano?".',
    wrong: {
      0: 'Trata-se de uma oração interrogativa direta padrão, sem acréscimo de termos meramente enfáticos ou expletivos.',
      1: 'A frase é composta por sujeito, verbo e vocativo ("rapaz"), todos desempenhando funções sintáticas essenciais.',
      2: 'Apresenta período composto por coordenação assindética com dois verbos plenos sem elementos de realce.',
      3: 'A oração apresenta sujeito oracional ("chupar jabuticaba dos outros") e predicativo ("a pena"), sem partícula expletiva.',
    },
  }),

  // ==========================================
  // LÍNGUA INGLESA (QUESTÕES 16 A 25)
  // ==========================================
  q({
    n: 16,
    subject: 'Inglês',
    content: 'Reading comprehension: definition and main concept of "serial home-swapper"',
    difficulty: 'Fácil',
    statement: `${TEXTO_HOME_SWAPPERS}

A “serial home-swapper” is described in the two first paragraphs of the text as someone who`,
    alternatives: [
      'is expected to continually start life and work in new countries due to their job requirements.',
      'knows how to travel and live cheaply by finding free accomodation wherever they go.',
      'seeks frequent exchange of houses as an alternative way of living and working.',
      'has become a full-time remote home worker by virtue of the recent pandemic.',
      'uses vacation exchange services regularly so they can freely wander around the world.',
    ],
    answer: 'C',
    why: 'Nos dois primeiros parágrafos, Evie Kalo e o conceito de "serial home-swapper" são apresentados como pessoas que aproveitam o trabalho remoto para trocar frequentemente de residência com outras pessoas pela Europa ("swapped their apartment... for a series of \\\\"workcations\\\\""), articulando rotinas de trabalho com estadias de cerca de duas semanas como um estilo de vida itinerante alternativo ("attain the kind of journeying lifestyle they desire").',
    wrong: {
      0: 'A troca de casas é uma escolha espontânea de estilo de vida possibilitada pelo trabalho remoto, e não uma exigência ou transferência imposta pelos empregadores.',
      1: 'Embora o custo seja menor que a compra de pacotes caros, o foco central da definição é a prática contínua de troca mútua de lares para viver e trabalhar, não a busca oportunista de hospedagem gratuita a esmo.',
      3: 'Tornar-se trabalhador remoto durante a pandemia foi a condição prévia para a mudança, mas não define isoladamente o que é ser um "trocador de casas em série".',
      4: 'O texto enfatiza que as viagens combinam trabalho com férias ("workcations") e que o casal mantém uma intensa rotina de trabalho durante as trocas, refutando a ideia de mero turismo descompromissado de férias.',
    },
  }),

  q({
    n: 17,
    subject: 'Inglês',
    content: 'Reading comprehension: identifying positive aspects highlighted in the passage',
    difficulty: 'Fácil',
    statement: `${TEXTO_HOME_SWAPPERS}

Na opinião de Evie Kalo, é um aspecto positivo da experiência relatada no primeiro parágrafo:`,
    alternatives: [
      'a perspectiva de vida em lugares mais amplos que um pequeno apartamento.',
      'a aventura de estar a cada momento em um lugar diferente do mundo.',
      'a possibilidade de combinar trabalho com a sensação de férias.',
      'a confiança mútua entre as partes envolvidas.',
      'a viabilidade de trabalho remoto em tempo integral.',
    ],
    answer: 'D',
    why: 'No final do primeiro parágrafo, a citação direta de Evie Kalo expressa textualmente o que ela mais aprecia nessa prática: “What we love about it is that we trust people to be at our home because they are trusting us to be at theirs” (O que amamos nisso é que confiamos que as pessoas estejam em nossa casa porque elas confiam em nós para estarmos na delas). Esse sentimento traduz a confiança mútua.',
    wrong: {
      0: 'O texto não faz comparação entre a metragem quadrada de apartamentos pequenos e residências mais amplas.',
      1: 'O casal planeja suas estadias por cerca de duas semanas em cada cidade para cumprir prazos de trabalho, não buscando aventuras caóticas ou constantes.',
      2: 'A combinação entre trabalho e férias ("workcations") é descrita pelo narrador, mas a declaração direta de Kalo sobre o aspecto afetivo mais positivo enfatiza a confiança mútua.',
      4: 'O trabalho remoto foi a circunstância que permitiu a experiência, e não o aspecto afetivo que Evie Kalo destaca como o mais enriquecedor.',
    },
  }),

  q({
    n: 18,
    subject: 'Inglês',
    content: 'Reference words: anaphora and pronoun reference in context ("they")',
    difficulty: 'Média',
    statement: `${TEXTO_HOME_SWAPPERS}

In the fragment from the second paragraph “<u>they</u>’re able to stay in other people’s comfortable accommodations around the world”, the underlined word refers most specifically to`,
    alternatives: [
      'home swappers.',
      'couples with busy work schedules.',
      'money-saving travellers.',
      'people searching for a second home.',
      'people seeking travel for leisure.',
    ],
    answer: 'A',
    why: 'No segundo parágrafo, as orações desenvolvem o mecanismo das trocas de residência: "Home swaps allow people to attain the kind of journeying lifestyle... By capitalising on their own most valuable asset... they’re able to stay in other people’s comfortable accommodations around the world". O pronome "they" refere-se diretamente àquelas pessoas que praticam trocas de casas (home swappers).',
    wrong: {
      1: 'A referência não se restringe a casais com agendas cheias, mas abrange genericamente qualquer indivíduo adepto da troca de lares.',
      2: 'A categoria dos viajantes econômicos em geral é ampla demais; a frase trata especificamente do mecanismo de quem troca seu próprio imóvel.',
      3: 'O texto menciona que o home-swapping evita o custo de comprar uma segunda casa ("purchasing a pricey holiday — or second home"), não sendo essas pessoas as referenciadas pelo pronome.',
      4: 'As pessoas mencionadas estão em esquema de trabalho combinado com moradia ("workcations"), não meros turistas a lazer.',
    },
  }),

  q({
    n: 19,
    subject: 'Inglês',
    content: 'Connectors / Discourse markers: semantic equivalence of "Yet"',
    difficulty: 'Fácil',
    statement: `${TEXTO_HOME_SWAPPERS}

No trecho do terceiro parágrafo “<u>Yet</u>, the most popular method is the search on online marketplaces”, a palavra sublinhada equivale, em português, a`,
    alternatives: [
      'dessa forma.',
      'no entanto.',
      'com frequência.',
      'até agora.',
      'ou ainda.',
    ],
    answer: 'B',
    why: 'No início do terceiro parágrafo, o autor contrasta as formas informais de encontrar casas (amigos, colegas, redes sociais) com a forma predominante: "Yet, the most popular method...". Quando empregado como conjunção coordenativa adversativa, "Yet" expressa oposição ou contraste, equivalendo perfeitamente a "no entanto", "contudo" ou "porém".',
    wrong: {
      0: '“Dessa forma” expressa conclusão ou modo (equivalente a "thus", "therefore", "in this way").',
      2: '“Com frequência” exprime circunstância temporal de frequência (equivalente a "frequently", "often").',
      3: '“Até agora” é o sentido de "yet" quando atua como advérbio temporal em frases negativas ou perfeitas (como "not yet" ou "as of yet"), e não quando encabeça oração como conector adversativo.',
      4: '“Ou ainda” exprime adição ou alternância (equivalente a "or else", "or even").',
    },
  }),

  q({
    n: 20,
    subject: 'Inglês',
    content: 'Reading comprehension: identifying paragraph main idea / best heading',
    difficulty: 'Fácil',
    statement: `${TEXTO_HOME_SWAPPERS}

A subtitle to closely represent the content of the fourth paragraph is:`,
    alternatives: [
      'Swaps: rising demand, longer stays.',
      'Statistics confirm expectations.',
      'Willing to move? Find help here.',
      'Travelling easier than ever. Know why?',
      'Main reasons for home-swapping.',
    ],
    answer: 'A',
    why: 'O quarto parágrafo apresenta dados estatísticos da plataforma Home Exchange: o aumento de 50% nas trocas finalizadas por dia ("rising demand") e o aumento da duração média das viagens, com 59% dos membros buscando estadias de 10 dias ou mais ("longer stays"). Portanto, o subtítulo "Swaps: rising demand, longer stays" sintetiza com precisão o conteúdo.',
    wrong: {
      1: 'O parágrafo apresenta números reais de crescimento de mercado, e não uma confirmação de expectativas prévias ou prognósticos.',
      2: 'O texto não funciona como um guia de autoajuda ou anúncio comercial oferecendo auxílio para mudança.',
      3: 'O parágrafo não analisa a facilidade de locomoção em geral, mas estatísticas específicas da plataforma de intercâmbio de casas.',
      4: 'As motivações centrais do home-swapping foram discutidas nos parágrafos anteriores, enquanto o quarto parágrafo concentra-se em métricas de demanda e tempo de permanência.',
    },
  }),

  q({
    n: 21,
    subject: 'Inglês',
    content: 'Vocabulary in context: idiomatic expression "to a great extent"',
    difficulty: 'Fácil',
    statement: `${TEXTO_HOME_SWAPPERS}

Na última frase do texto, a expressão “to a great extent” significa`,
    alternatives: [
      'por prazos estendidos.',
      'por uma longa extensão.',
      'em grande parte.',
      'para lugares distantes.',
      'cada vez mais.',
    ],
    answer: 'C',
    why: 'A locução adverbial "to a great extent" (ou "to a large extent") é uma expressão idiomática clássica que significa "em grande parte", "em larga medida" ou "principalmente", indicando o grau preponderante de influência de um fator.',
    wrong: {
      0: 'Prazos estendidos remete à duração temporal de contratos, não correspondendo ao sentido quantitativo/causal de "to a great extent".',
      1: '“Por uma longa extensão” interpreta o vocábulo "extent" de forma literal geográfica, o que desvirtua a expressão adverbial.',
      3: '“Para lugares distantes” refere-se a distância espacial, sentido totalmente alheio à locução.',
      4: '“Cada vez mais” expressa progressão temporal contínua (equivalente a "more and more" ou "increasingly").',
    },
  }),

  q({
    n: 22,
    subject: 'Inglês',
    content: 'Reading comprehension: identifying author purpose and thesis statement',
    difficulty: 'Média',
    statement: `${TEXTO_BIODIVERSITY_LOSS}

The main purpose of the text is to`,
    alternatives: [
      'announce the “sixth mass extinction”, which the present times are dangerously promoting.',
      'argue that biodiversity loss is in fact much more extensive than publicised.',
      'praise COP15, which strongly supports environmental awareness and alertness.',
      'criticise people’s and countries’ attitudes which have led to ecological degradation.',
      'defend the assumption that humans, animals and nature are all inherently valuable.',
    ],
    answer: 'E',
    why: 'A tese central e o propósito maior do texto consistem em superar a cultura antropocêntrica que coloca o ser humano acima de todas as outras formas de vida. Os autores defendem uma mudança paradigmática fundamental: reconhecer que humanos, animais e ecossistemas naturais possuem valor intrínseco e inerente ("defend the assumption that humans, animals and nature are all inherently valuable"), sem que a natureza seja reduzida a mero recurso para o bem-estar humano.',
    wrong: {
      0: 'A sexta extinção em massa é mencionada no primeiro parágrafo como ponto de partida contextual, não como o objetivo argumentativo primordial do ensaio.',
      1: 'O texto não questiona a veracidade dos dados divulgados na mídia, mas sim a postura ética com que os cientistas e a ONU abordam a crise.',
      2: 'A COP15 e os relatórios da ONU são expressamente criticados por manterem pressupostos antropocêntricos que priorizam exclusivamente o bem-estar da humanidade.',
      3: 'A crítica pontual às sociedades consumistas está subordinada ao argumento filosófico principal: a necessidade de adotar uma visão não antropocêntrica da vida na Terra.',
    },
  }),

  q({
    n: 23,
    subject: 'Inglês',
    content: 'Vocabulary: meaning of "unprecedented"',
    difficulty: 'Fácil',
    statement: `${TEXTO_BIODIVERSITY_LOSS}

In the fragment from the first paragraph “an <u>unprecedented</u> loss of vital ecosystems such as forests and wetlands”, the underlined term refers to a loss which`,
    alternatives: [
      'cannot be questioned.',
      'could not be predicted.',
      'will never be totally recovered.',
      'has experienced no limits.',
      'has never existed before.',
    ],
    answer: 'E',
    why: 'O adjetivo "unprecedented" (sem precedentes) é formado pelo prefixo de negação "un-" e pelo substantivo "precedent" (precedente). Designa aquilo que nunca antes aconteceu na história ou jamais existiu em escala similar no passado ("has never existed before").',
    wrong: {
      0: '“Cannot be questioned” (inquestionável) traduziria "unquestionable" ou "undisputable".',
      1: '“Could not be predicted” (imprevisível) traduziria "unpredictable" ou "unforeseen".',
      2: '“Will never be totally recovered” (irrecuperável) traduziria "irrecoverable" ou "irreparable".',
      3: '“Has experienced no limits” (ilimitado) traduziria "limitless" ou "boundless".',
    },
  }),

  q({
    n: 24,
    subject: 'Inglês',
    content: 'Reading comprehension: critique of anthropocentrism among conservation scientists',
    difficulty: 'Média',
    statement: `${TEXTO_BIODIVERSITY_LOSS}

No segundo e no terceiro parágrafos, “conservation scientists” são criticados porque`,
    alternatives: [
      'têm preparado relatórios para as Nações Unidas que contradizem a realidade da atual crise global de biodiversidade.',
      'construíram o conceito de antropocentrismo e este vem favorecendo indevidamente a devastação de recursos naturais.',
      'seguem uma visão antropocêntrica que entende as outras espécies e a natureza como recursos para os objetivos humanos.',
      'se autoproclamam peças-chave nas discussões globais sobre declínio da biodiversidade.',
      'desconsideram o fato de que a destruição de ecossistemas resulta de uma busca desenfreada pelo progresso.',
    ],
    answer: 'C',
    why: 'O texto aponta textualmente que o corpo de cientistas conservacionistas que produz relatórios para a ONU "continue to prioritise human wellbeing above all else. This prioritisation may be the result of an anthropocentric culture that typically considers humans to be separate from and of greater value than other species". Ou seja, eles são criticados por manterem a premissa antropocêntrica de que a preservação da natureza só importa enquanto serve aos fins e ao bem-estar humanos.',
    wrong: {
      0: 'Os relatórios dos cientistas não negam nem contradizem a gravidade da crise; o problema apontado é a hierarquização ética que subordinada as demais espécies à utilidade humana.',
      1: 'O antropocentrismo é uma cosmovisão cultural e filosófica histórica da civilização ocidental, não um conceito inventado recentemente por esses cientistas.',
      3: 'O texto os chama de "key players" pela relevância institucional de suas funções na ONU, não por uma postura de vaidade pessoal ou autoafirmação.',
      4: 'Os cientistas não negam que os ecossistemas estão sob pressão do crescimento econômico; a crítica dos autores é estritamente contra a persistência de pressupostos antropocêntricos em suas políticas de conservação.',
    },
  }),

  q({
    n: 25,
    subject: 'Inglês',
    content: 'Interpreting multimodal texts (cartoons) in dialogue with textual passage',
    difficulty: 'Média',
    statement: `Read the cartoon by Joel Pett.

(www.gocomics.com)

The comparison between the content of the text and the content of the cartoon helps us understand that the animal in the tree`,
    visuals: [{ file: 'p1-q25-cartoon-joel-pett.svg', alt: 'Cartoon de Joel Pett mostrando um animal em cima de uma árvore conversando com dois humanos desmatadores armados com machados', caption: 'Cartoon by Joel Pett (www.gocomics.com).' }],
    alternatives: [
      'saves the ecosystem by protecting the tree.',
      'disregards the harmony between humans and nature.',
      'is an activist for animal supremacy.',
      'is not a follower of anthropocentrism.',
      'blames the two humans for the destruction of the forest.',
    ],
    answer: 'D',
    why: 'No cartum de Joel Pett, o animal na árvore dialoga de igual para igual com os dois humanos que empunham machados, afirmando: "Just like you, we have language... And yes, we both have culture... Now, about these primitive tools...". Ao equiparar os atributos cognitivos e culturais dos animais aos dos seres humanos e ironizar as ferramentas humanas como "primitivas", o animal recusa categoricamente a hierarquia de superioridade humana, evidenciando que ele não é adepto do antropocentrismo ("is not a follower of anthropocentrism").',
    wrong: {
      0: 'O animal dialoga com os homens a partir do galho, mas não tem como fisicamente impedir a derrubada ou salvar sozinho o ecossistema.',
      1: 'O animal não desconsidera a harmonia; pelo contrário, ele aponta que ambas as espécies partilham faculdades culturais, questionando a agressão predatória dos humanos.',
      2: 'O animal não defende a supremacia ou dominação dos animais sobre os humanos, mas sim a igualdade de dignidade e a falácia da superioridade humana.',
      4: 'Embora aponte os machados primitivos, a fala do animal não é um mero ataque acusatório, mas uma desconstrução irônica do pedestal civilizatório antropocêntrico dos humanos.',
    },
  }),
];
'''

target = ROOT / 'src/data/unifesp2023-objetivas.js'
target.write_text(code.strip() + '\n', encoding='utf-8')
print(f'Sucesso: gerado {target} com {len(code)} bytes')
