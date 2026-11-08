import { createUnifesp } from './unifesp-helpers.js';

const { essay } = createUnifesp(2021);

export const unifesp2021Redacao = essay({
  statement: `REDAÇÃO

Texto 1

As descobertas da genética nos apresentam a um só tempo uma promessa e um dilema. A promessa é que em breve seremos capazes de tratar e prevenir uma série de doenças debilitantes. O dilema é que nosso recém-descoberto conhecimento genético também pode permitir a manipulação de nossa própria natureza – para melhorar nossos músculos, nossa memória e nosso humor; para escolher o sexo, a altura e outras características genéticas de nossos filhos; para melhorar nossas capacidades física e cognitiva; para nos tornar “melhores do que a encomenda”. A maioria das pessoas considera inquietantes ao menos algumas das formas de manipulação genética. Entretanto, não é fácil articular nosso mal-estar. Os termos familiares dos discursos moral e político tornam difícil afirmar o que há de errado na reengenharia da nossa natureza.

(Michael J. Sandel [filósofo, professor-visitante na Sorbonne]. Contra a perfeição: ética na era da engenharia genética, 2015.)

Texto 2

A seleção do sexo do bebê – sexagem – é uma das questões mais controvertidas a que nos expõe o desenvolvimento da biogenética. Divide opiniões e é enganoso pensar que as posições liberais estão do lado dos cientistas, ou ver as posições conservadoras como deriváveis da consciência religiosa. Mesmo os liberais apontam problemas quanto à técnica utilizada na sexagem, devido aos riscos de complicações, desequilíbrio na população de homens e mulheres, discriminação contra a mulher.

Há motivos também de ordem religiosa: a suspeita de que o ser humano, ao assumir o papel de Deus ou da natureza, não produzirá um mundo melhor. Há, certamente, na base da desconfiança, um medo em relação aos desdobramentos desse novo poder: se podemos escolher o sexo, podemos também pensar na liberdade de escolher outras características.

A questão é: até que ponto o poder técnico é também ético? Certamente não devemos condenar a técnica quando ela responde a uma finalidade eticamente defensável. Condena-se a técnica quando a motivação é um mero desejo ou capricho, mas não se condena quando há razões fortes como evitar doenças ou quando a fertilização in vitro é apontada como a única alternativa para a gravidez.

(João Batistiolle [professor de Bioética, PUC-SP]. “Bebês sob medida”. www.cremesp.org.br, 2005.)

Com base nos textos apresentados e em seus próprios conhecimentos, escreva um texto dissertativo-argumentativo, empregando a norma-padrão da língua portuguesa, sobre o tema:`,
  blockTypes: ['label', 'subheading', 'prose', 'source', 'subheading', 'prose', 'prose', 'prose', 'source', 'command'],
  statementTail: 'A engenharia genética ameaça a dignidade humana?',
  tailBlockTypes: ['headline'],
  parts: [{
    id: 'T',
    prompt: 'Produza um texto dissertativo-argumentativo em norma-padrão da língua portuguesa sobre o tema: “A engenharia genética ameaça a dignidade humana?”.',
    expected: 'Espera-se uma discussão consistente e bem fundamentada sobre a fronteira entre as aplicações terapêuticas benéficas da genética (cura de doenças hereditárias graves, alívio do sofrimento) e os riscos bioéticos do aprimoramento eugênico, da mercantilização da vida, da perda da diversidade natural e da ampliação de desigualdades sociais.',
    criteria: [
      { points: 1, text: 'Tema e estrutura: desenvolve texto dissertativo-argumentativo atendendo estritamente ao recorte temático sobre engenharia genética e dignidade humana.' },
      { points: 1, text: 'Argumentação e repertório: mobiliza repertório sociocultural produtivo e argumentos consistentes para sustentar o ponto de vista.' },
      { points: 1, text: 'Coesão e modalidade: demonstra domínio da norma-padrão da língua portuguesa e articulação coesiva refinada.' },
    ],
  }],
  studyNotes: [
    'Critério VUNESP: O candidato poderia assumir postura favorável, contrária ou ponderada em relação à pergunta-tema, desde que sustentasse sua tese com coerência e argumentos sólidos.',
    'Diferenciação conceitual essencial: a banca valoriza a distinção entre uso terapêutico (combate a patologias) e uso estético/aprimorador (seleção de traços, eugenia contemporânea).',
    'Repertórios produtivos frequentes: "Admirável Mundo Novo" (Aldous Huxley), o imperativo categórico kantiano (tratar a humanidade sempre como fim, nunca como mero meio), a bioética de Hans Jonas e discussões contemporâneas sobre justiça distributiva no acesso a terapias genéticas.',
  ],
});
