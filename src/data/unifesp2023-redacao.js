import { createUnifesp } from './unifesp-helpers.js';

const { essay } = createUnifesp(2023);

export const unifesp2023Redacao = essay({
  statement: `REDAÇÃO

Texto 1

Meritocracia pode ser compreendida como um sistema de hierarquização e premiação baseado nos méritos pessoais de cada indivíduo. O poder do mérito está assentado na suposição de qualidades individuais, resultado de esforço e dedicação.

(Berenice Bento. “Crítica da crítica à meritocracia”. https://diplomatique.org.br, 27.04.2021. Adaptado.)

Texto 2

Um mês depois da Tomada da Bastilha, em 1789, a Assembleia Nacional da França aprovou um dos textos mais importantes da história do mundo — a Declaração dos Direitos do Homem e do Cidadão.
Um trecho consagrava uma ideia nova para a época, uma das bandeiras dos iluministas franceses: as pessoas devem ser julgadas por seu mérito, e não pela raça, sexo ou pela “nobreza do sangue”.
De acordo com o sexto artigo da Declaração, “Todos os cidadãos são iguais a seus olhos e igualmente admissíveis a todas as dignidades, lugares e empregos públicos, segundo a sua capacidade e sem outra distinção que não seja a das suas virtudes e dos seus talentos”.

(Leandro Narloch. “Ideia revolucionária fundou o mundo moderno”. www.folha.uol.com.br, 15.09.2021. Adaptado.)

Texto 3

No livro Capital e ideologia, Thomas Piketty argumenta que a ideia de meritocracia serve para que os “vencedores” do atual sistema econômico justifiquem a desigualdade ― em qualquer escala ― jogando nos “perdedores” a culpa por seu próprio fracasso, como se obter êxito fosse apenas questão de esforço individual.

(“Como o discurso da meritocracia ajuda a ampliar a desigualdade social”. www.intrinseca.com.br, 01.09.2020.)

Texto 4

Atualmente, enxergamos o sucesso não como uma questão de sorte, mas como algo que conquistamos por meio de nosso próprio esforço e luta. Esse é o cerne da ética meritocrática. Ela exalta a liberdade e o merecimento. Esse modo de refletir gera poder. Incentiva as pessoas a pensar em si mesmas como responsáveis por seu destino, não como vítimas de forças além do seu controle. Mas tem também um lado negativo. Quanto mais nos enxergamos como pessoas que vencem pelo próprio esforço, menos provável será que nos preocupemos com o destino de quem é menos afortunado do que nós. Se meu sucesso é resultado de minhas ações, o fracasso deles deve ser culpa deles. Essa lógica faz a meritocracia ser corrosiva para a coletividade e a noção de bem comum.

(Michael J. Sandel. A tirania do mérito: o que aconteceu com o bem comum?, 2021. Adaptado.)

Texto 5

O bem comum deve ser considerado como uma pluralidade de valores que resultam da relação entre o interesse particular de cada indivíduo com o interesse da sociedade. Em um espaço político, pensar apenas em interesses privados, em detrimento do bem comum, significaria corromper a coisa pública.

(Paula Mendes Lima. “Interesse e bem comum”. In: Lilia M. Schwarcz e Heloisa M. Starling. Dicionário da república, 2019. Adaptado.)

Com base nos textos apresentados e em seus próprios conhecimentos, escreva um texto dissertativo-argumentativo, empregando a norma-padrão da língua portuguesa, sobre o tema:`,
  blockTypes: [
    'label',
    'subheading', 'prose', 'source',
    'subheading', 'prose', 'prose', 'prose', 'source',
    'subheading', 'prose', 'source',
    'subheading', 'prose', 'source',
    'subheading', 'prose', 'source',
    'command',
  ],
  statementTail: 'É possível conciliar mérito e bem comum?',
  tailBlockTypes: ['headline'],
  parts: [{
    id: 'T',
    prompt: 'Produza um texto dissertativo-argumentativo em norma-padrão da língua portuguesa sobre o tema: “É possível conciliar mérito e bem comum?”.',
    expected: 'Espera-se uma reflexão crítica, madura e bem fundamentada enfrentando a pergunta central da proposta. O candidato pode argumentar: 1) Que É POSSÍVEL conciliar mérito e bem comum, desde que existam condições prévias substantivas de igualdade de oportunidades (educação pública de excelência, saúde, redução de disparidades estruturais) e que o mérito individual reverta em benefício da coletividade e da coisa pública, resgatando o ideal republicano iluminista contra privilégios de nascimento; 2) Que NÃO É POSSÍVEL conciliar plenamente na ordem atual, uma vez que o discurso meritocrático legitima desigualdades socioeconômicas profundas (como aponta Thomas Piketty), fomenta a soberba dos vencedores, a culpabilização individual dos vulneráveis e a corrosão da solidariedade cívica (conforme a tese de Michael Sandel em A tirania do mérito); ou 3) Adotar uma abordagem ponderada/dialética, distinguindo a meritocracia como instrumento de justiça distributiva da ideologia meritocrática individualista que sabota a cidadania e o bem comum.',
    criteria: [
      { points: 1, text: 'Critério A (Tema): Aborda a temática central articulando explicitamente os conceitos de mérito (ou meritocracia) e bem comum (ou coletividade e interesse público).' },
      { points: 1, text: 'Critério B (Gênero e Coerência): Desenvolve dissertação-argumentativa estruturada (introdução com tese explícita, argumentos fundamentados e conclusão consistente), sem contradições graves nem modelos engessados/prontos.' },
      { points: 1, text: 'Critério C (Modalidade e Coesão): Domina a norma-padrão da língua portuguesa (concordância, regência, crase, pontuação e variedade vocabular) e emprega recursos coesivos com diversidade e pertinência.' },
    ],
  }],
  studyNotes: [
    'Critério oficial VUNESP: O candidato podia responder afirmativamente (defendendo a compatibilidade do mérito com o bem comum mediante equalização de pontos de partida), negativamente (sustentando que a lógica meritocrática neoliberal é intrinsecamente individualista e corrosiva para a coesão social) ou problematizar dialeticamente as condições necessárias para tal conciliação.',
    'Repertórios produtivos frequentes: Michael Sandel (A tirania do mérito: o que aconteceu com o bem comum?), Thomas Piketty (Capital e ideologia), John Rawls (Uma teoria da justiça e o véu da ignorância), Declaração dos Direitos do Homem e do Cidadão (1789), Aristóteles (justiça distributiva e bem comum na Política) e Boaventura de Sousa Santos.',
  ],
});
