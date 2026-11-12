import { createUnifesp } from './unifesp-helpers.js';

const { essay } = createUnifesp(2024);

export const unifesp2024Redacao = essay({
  statement: `REDAÇÃO

Texto 1

Texto 2

No Brasil, o anonimato é proibido em todas as formas de publicações. Está na letra da lei, no inciso IV do artigo 5o da Constituição Federal, em palavras muito claras e muito simples: “É livre a manifestação do pensamento, sendo vedado o anonimato”. Com o advento da internet, porém, o quadro deixou de ser tão claro e tão simples. Na realidade digital, a letra da lei talvez seja letra morta.

As tecnologias digitais abriram muitas portas para manifestações de autores que se escondem, se esquivam, escapam a qualquer forma de identificação. O navegador Google Chrome concede ao seu usuário a abertura de uma “janela anônima”. Trata-se, como se vê, de um serviço ao alcance de qualquer um do público. Isso é mau? Difícil dizer. Antes de ser uma conduta necessariamente pérfida ou dolosa, o expediente de quem oculta o próprio nome pode ser uma estratégia legítima e, às vezes, uma estratégia de sobrevivência. Na história da democracia não foram poucas as ocasiões em que a ocultação do nome do autor contribuiu para a expansão das liberdades. O filósofo inglês John Locke (1632-1704) vivia exilado na Holanda sob nome falso quando publicou anonimamente sua Carta sobre a tolerância, em 1689. Hoje sua obra é reverenciada como um alicerce da noção essencial de que a fé religiosa de cada um é assunto pessoal, privado, não podendo ser determinada pelo poder estatal. Graças ao anonimato, não nos esqueçamos. Não fosse o recurso de sonegar aos leitores seu nome verdadeiro, é possível que Locke nunca tivesse conseguido publicar sua Carta sobre a tolerância. Bem sabemos que na internet ninguém é John Locke. As formas de estelionato de opinião proliferam em variações tão criativas quanto malignas. A cada eleição, pipocam blogs e sites apócrifos dedicados exclusivamente a enxovalhar a honra alheia. Isso não quer dizer que não existam os bons anônimos. Eles existem. Usam em segredo as redes sociais para denunciar desmandos em regimes autoritários — e também em regimes ditos democráticos. Mesmo sem ser John Locke, ajudam a civilização. O que fazer? Como resolver o problema do anonimato na rede? Seria possível — e seria desejável — regulá-lo? Em tempo: será que isso é de fato um problema?

Em boa medida, a internet tem sido um ambiente livre. Algum grau de manifestações anônimas integra e complementa a liberdade. Em poucas palavras, não haveria liberdade sem pelo menos um pouco de anonimato.

(Eugênio Bucci. “Cyberanonimato”. www.estadao.com.br, 18.04.2013. Adaptado.)

Texto 3

O ódio é um afeto e como tal tem direito à plena cidadania entre outros afetos, emoções e sentimentos. Daí que seja vã e, no limite, perniciosa toda tentativa de eliminar afetos, tais como a soberba (orgulho excessivo), a avareza (apego excessivo a bens), a inveja (geralmente traduzida pelo desejo de impor tristeza ao outro), a gula (desejo exagerado de comer ou beber), a luxúria (apego demasiado aos prazeres), e finalmente a ira, ou seja, o ódio furioso, que ultrapassa certos limites, geralmente traduzidos pela ofensa, desrespeito, agressão ou violência.

No discurso de ódio ocorre uma espécie de perda de modulação social desse afeto, uma desregulação do seu sistema de mediações. Isso pode ocorrer em função de um efeito digital muito simples: a monetização. Se o ódio engaja, coletiviza e intensifica, ele obviamente se traduzirá pela elevação do nível de atratividade digital.

A questão, porém, é que o anonimato digital suspende o circuito de regulação de afetos, pelos quais meço minhas palavras, pondero meu tom ou avalio as implicações do que digo. Ser autor é condição para possuir autoridade, logo poder perdê-la. Daí que o antídoto que coloco aqui em discussão chame-se autoria ou perda do anonimato.

(Christian Dunker. “Fim do anonimato digital reduziria danos causados pelo discurso de ódio”. www.uol.com.br, 26.04.2023. Adaptado.)

Com base nos textos apresentados e em seus próprios conhecimentos, escreva um texto dissertativo-argumentativo, empregando a norma-padrão da língua portuguesa, sobre o tema:`,
  blockTypes: [
    'label',
    'subheading',
    'subheading', 'prose', 'prose', 'prose', 'source',
    'subheading', 'prose', 'prose', 'prose', 'source',
    'command',
  ],
  visuals: [{ file: 'p1-redacao-texto1-imagem.svg', alt: 'Texto 1 da proposta de redação: charge de Richard Bittencourt, "As lágrimas sinceras de Júlio Gilson", 2023', caption: 'Richard Bittencourt (Fí). As lágrimas sinceras de Júlio Gilson, 2023. Adaptado.' }],
  statementTail: 'O fim do anonimato digital reduziria danos causados pelo discurso de ódio?',
  tailBlockTypes: ['headline'],
  parts: [{
    id: 'T',
    prompt: 'Produza um texto dissertativo-argumentativo em norma-padrão da língua portuguesa sobre o tema: “O fim do anonimato digital reduziria danos causados pelo discurso de ódio?”.',
    expected: 'Espera-se uma reflexão crítica e bem fundamentada que enfrente diretamente a pergunta da proposta. O candidato pode argumentar: 1) Que SIM, o fim do anonimato reduziria danos, pois a exposição da identidade do autor restabeleceria o "circuito de regulação de afetos" mencionado por Christian Dunker — a responsabilização individual (autoria) desestimularia a agressividade hoje blindada pelo anonimato digital, hipótese reforçada pela proibição constitucional brasileira ao anonimato (Texto 2); 2) Que NÃO, pois o anonimato digital cumpre também função protetiva e emancipatória — como no caso histórico de John Locke (Texto 2) — e o discurso de ódio tem causas mais profundas (lógicas de monetização e engajamento das plataformas, crise de mediação social dos afetos) que não seriam eliminadas pela mera identificação dos usuários, podendo inclusive silenciar vozes legítimas e vulneráveis que dependem do anonimato para se expressar com segurança; ou 3) Uma posição ponderada, reconhecendo que a responsabilização (via autoria, rastreabilidade ou regulação) pode mitigar excessos sem a necessidade de abolição total do anonimato, diferenciando o anonimato legítimo (proteção de minorias, denúncias, dissidência política) do anonimato usado para a prática impune do discurso de ódio.',
    criteria: [
      { points: 3, text: 'Critério A (Tema): aborda explicitamente os conceitos de anonimato digital e discurso de ódio, articulando-os de modo integrado (0 = nada; 1 = termo isolado; 2 = dois conceitos combinados; 3 = ambos os termos do tema integrados com consistência argumentativa).' },
      { points: 4, text: 'Critério B (Gênero/Tipo de texto e Coerência): desenvolve dissertação-argumentativa com estrutura macro completa (introdução, desenvolvimento e conclusão), posicionamento claro do autor, progressão argumentativa sem contradições e sem uso de 1ª pessoa do singular ou interlocução direta com o leitor.' },
      { points: 4, text: 'Critério C (Elementos Linguísticos — modalidade e coesão): emprega a norma-padrão com poucos ou nenhum erro de ortografia, acentuação, crase, pontuação, regência e concordância, e articula bem os parágrafos por meio de recursos coesivos (desconto de 1 ponto para textos com 15 linhas ou menos; textos com até 20 linhas não alcançam a nota máxima neste critério).' },
    ],
  }],
  studyNotes: [
    'Fórmula oficial de conversão VUNESP: NF = (NC × NE) / NMC, em que NC é a nota atribuída pela correção (0 a 11), NE é a nota máxima prevista em edital (50 pontos) e NMC é a nota máxima prevista pela correção (11 pontos).',
    'Recebe nota zero a redação que fugir ao tema e/ou gênero, estiver em branco, apresentar sinais de identificação do candidato, for escrita em outra língua, apresentar letra ilegível, tiver 7 linhas ou menos, tiver menos de 8 linhas autorais contínuas (não copiadas da coletânea/prova), ou for composta predominantemente por cópia de trechos da coletânea ou de textos midiáticos.',
    'Repertórios produtivos: Eugênio Bucci ("Cyberanonimato"), Christian Dunker (discurso de ódio e perda da autoria), John Locke e a Carta sobre a tolerância (1689), art. 5º, IV, da Constituição Federal (vedação ao anonimato), debates contemporâneos sobre regulação de plataformas digitais e moderação de conteúdo.',
  ],
});
