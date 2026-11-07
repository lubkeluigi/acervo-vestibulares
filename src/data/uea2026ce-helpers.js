export const tex = String.raw;
export const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const VERSION = '20261105-uea2026ce-1';

export function createGroup(group) {
  if (![1, 2, 3].includes(group)) throw new Error(`Grupo UEA inválido: ${group}`);
  const prefix = `uea2026ce${group}`;
  const shared = {
    exam: `UEA — Conhecimentos Específicos · Grupo ${group}`,
    year: 2026,
    phase: 'Conhecimentos Específicos e Redação',
    originalUrl: `/documentos/uea2026/especificos-grupo${group}-prova.pdf`,
    officialAnswerUrl: `/documentos/uea2026/especificos-grupo${group}-gabarito.pdf`,
    kind: 'objective', correctionOrigin: 'official',
    examId: `uea-2026-especificos-grupo${group}`,
    institution: 'UEA', banca: 'VUNESP', modality: 'conhecimentos-especificos',
  };
  const img = (file, alt, caption = '') => ({
    src: `/images/uea2026ce/${file}?v=${VERSION}`, alt, ...(caption ? { caption } : {}),
  });

  function q({ n, subject, content, difficulty = 'Média', statement = '', alternatives, answer, why, wrong = {}, ...extra }) {
    const correct = 'ABCDE'.indexOf(answer);
    if (correct < 0 || alternatives.length !== 5) throw new Error(`Configuração inválida em ${prefix} Q${n}`);
    const analyses = alternatives.map((_, index) => index === correct
      ? `Correta. ${why}`
      : `Incorreta. ${wrong[index] || 'A alternativa não atende ao enunciado nem aos dados apresentados.'}`);
    return {
      ...shared, id: `${prefix}-q${String(n).padStart(2, '0')}`,
      number: `Questão ${String(n).padStart(2, '0')}`, subject, content, difficulty,
      statement, alternatives, correct, resolution: extra.resolution || [why], analyses, ...extra,
    };
  }

  function essay() {
    return {
      ...shared,
      id: `${prefix}-redacao`, number: 'Redação', kind: 'essay', correctionOrigin: 'editorial', officialAnswerUrl: null,
      subject: 'Português', content: 'Produção textual', difficulty: 'Média',
      statement: REDACTION_STATEMENT,
      blockTypes: ['label', 'subheading', 'quote', 'source', 'subheading', 'quote', 'quote', 'quote'],
      images: [img('uea2026ce-redacao-futebol.svg', 'Jogadores de futebol e infográfico sobre filhos de imigrantes nas seleções europeias.')],
      statementAfter: REDACTION_AFTER,
      afterBlockTypes: ['source', 'subheading', 'quote', 'quote', 'quote', 'quote', 'quote', 'source', 'note', 'command'],
      statementTail: 'Imigrantes e seus descendentes no futebol: entre a representatividade e a xenofobia',
      tailBlockTypes: ['headline'],
      parts: [{
        id: 'T', prompt: 'Produza um texto dissertativo-argumentativo em norma-padrão da língua portuguesa.',
        expected: 'Não há resposta única. A proposta editorial espera um texto dissertativo-argumentativo que discuta a representatividade de imigrantes e descendentes no futebol e os episódios de xenofobia, articulando os textos motivadores a conhecimentos próprios.',
      }],
      studyNotes: [
        'Orientação editorial, não oficial: apresente uma tese clara, desenvolva argumentos sobre integração, representatividade e combate à xenofobia e conclua de modo coerente com a discussão.',
        'A redação não recebe nota automática nem deve ser comparada a um gabarito de alternativa.',
      ],
      resolution: [], analyses: [],
    };
  }

  return { q, img, essay, shared };
}

const REDACTION_STATEMENT = `REDAÇÃO

Texto 1

“Imigração” é um termo que se refere ao deslocamento de uma pessoa ou de um grupo de um território em direção a outro com o objetivo de fixar moradia em uma localidade diferente da do país de origem. Esse processo se dá por diferentes motivos: políticos, culturais, naturais e principalmente econômicos. Quem imigra opta por essa medida em busca de melhores condições de vida. Os deslocamentos populacionais fazem parte de toda a trajetória da humanidade.

(“O que é imigração e quais são seus impactos na sociedade?”. https://blog.mackenzie.br. Adaptado.)

Texto 2

Em meio a um movimento generalizado para endurecer regras migratórias por toda a União Europeia, europeus de diversos países voltarão suas esperanças pelo título na Copa do Mundo a… filhos de imigrantes.

As seleções europeias têm registrado nos últimos anos um aumento na quantidade de descendentes de imigrantes em seus elencos. A presença desses jogadores já é consolidada entre os principais times do velho continente, e se repetiu nas convocações para a Copa de 2026.

A Europa é atrativa pelo Estado de bem-estar social, principalmente nos países-membros da União Europeia, e passou a ser lar de imigrantes de ex-colônias africanas e refugiados de guerras na Ásia e na África.`;

const REDACTION_AFTER = `(Artur Alvarez. “Cada vez mais anti-imigração, Europa vai torcer por filhos de imigrantes na Copa do Mundo”. https://g1.globo.com, 14.06.2026. Adaptado.)

Texto 3

Em meio aos debates cada vez mais intensos sobre preconceito no esporte, impulsionados principalmente pelos ataques sofridos por Vinicius Júnior na Espanha, um novo episódio revoltante ganhou repercussão nacional no dia 06 de junho de 2026, desta vez na Série B do Campeonato de futebol Maranhense.

O volante camaronês Prosper Koffi, ex-jogador do Princesa do Solimões, clube amazonense de futebol, e atualmente no Timon, clube maranhense de futebol, foi alvo de comentários xenofóbicos¹ durante a transmissão da partida entre Cordino e Timon. Em tom preconceituoso, narrador e comentarista fizeram comentários ofensivos ao jogador africano:

— Esse jogador camaronês deve ter treinado naqueles campos do exército de Camarões. Passou muita fome por lá, professor, e não quer voltar mais não. Está fazendo de tudo para ficar por aqui, né? E ele está fazendo. Bom jogador, viu.

A declaração provocou revolta imediata nas redes sociais e rapidamente ganhou repercussão entre torcedores, atletas e páginas esportivas de todo o país. Abalado com o episódio, Koffi também se pronunciou nas redes sociais e publicou uma forte mensagem de repúdio.

— Sim. Eu tenho fome! Fome de vencer cada dividida, cada roubada de bola, cada desarme, fome de sempre dar o meu melhor, fome de ajudar o time em que eu estiver atuando, fome de viver dignamente com minha família. Essa é a minha fome.

(Kassio Junio. “Ex-jogador de clube do Amazonas sofre xenofobia em transmissão de jogo: ‘Passou muita fome’”. https://ge.globo.com, 08.06.2026. Adaptado.)

¹ xenofobia: preconceito e hostilidade contra pessoas de outras etnias ou originárias de outros estados, países ou regiões.

Com base nos textos apresentados e em seus próprios conhecimentos, escreva um texto dissertativo-argumentativo, empregando a norma-padrão da língua portuguesa, sobre o tema:`;
