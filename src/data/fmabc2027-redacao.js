import { createFmabc } from './fmabc-helpers.js';

const { essay } = createFmabc(2027);

export const fmabc2027Redacao = essay({
  statement: `REDAÇÃO

Texto 1

Para idosos, o uso do reconhecimento facial em aplicativos e dispositivos pode ser um problema maior do que para pessoas mais jovens. Segundo testes do Instituto Nacional de Padrões e Tecnologia, dos Estados Unidos, a taxa de erro de um sistema de reconhecimento facial salta de cerca de 1% entre pessoas na faixa dos 20 anos para até 5% entre quem tem 70 anos ou mais — o que quer dizer que, para a terceira idade, o risco de falha pode ser até cinco vezes maior.

As razões são físicas e técnicas. Os sistemas de biometria comparam a imagem capturada na hora com uma foto registrada antes — e o envelhecimento altera justamente os traços que o algoritmo usa para reconhecer alguém. Rugas, flacidez, mudanças na estrutura da pele e alterações de peso ao longo dos anos reduzem a semelhança entre as duas imagens. Além disso, boa parte dos algoritmos é treinada com bases de dados que contêm menos exemplos de rostos envelhecidos, o que os torna menos precisos para esse grupo.

(Tamires Vitorio. “Por que a biometria facial falha mais com os idosos?”. www.exame.com, 15.07.2026. Adaptado.)

Texto 2

Tecnologia compulsória para concessão, manutenção e renovação de benefícios da seguridade social federal, assim como para o desbloqueio do benefício do Instituto Nacional do Seguro Social (INSS) para contratação de empréstimo consignado, o uso do reconhecimento facial pode ser uma barreira de acessibilidade para as pessoas mais velhas.

Ao considerarmos as barreiras de letramento digital enfrentadas por parte da população idosa, percebemos que o uso do reconhecimento facial ultrapassa o simples gesto de “olhar para a tela”. O procedimento exige o cumprimento de comandos como encontrar um ambiente com fundo liso, posicionar corretamente a câmera frontal diante do rosto, aproximar ou afastar o aparelho e realizar diferentes confirmações até o envio da imagem. São etapas cansativas e pouco intuitivas, frequentemente questionadas até mesmo por pessoas mais jovens e habituadas ao uso cotidiano da tecnologia.

(Rodrigo Almeida. “Reconhecimento facial e idosos: quem a tecnologia deixa de enxergar?”. www.olhardigital.com.br, 19.07.2026. Adaptado.)

Texto 3

De acordo com Mario Serra, professor de cidadania digital para idosos, pesam muitos detalhes na experiência de pessoas mais velhas excluídas pela leitura facial. Os idosos, com frequência, têm aparelhos “herdados dos filhos” com condições técnicas precárias, não estão habituados a fazer selfies ou a mudar para a câmera traseira do celular em busca de qualidade. “Essas inovações não fazem parte do histórico de vidas das pessoas, mesmo as mais escolarizadas. Há a opção de pedir ajuda a terceiros. O custo disso é compartilhar a senha e aumentar a dependência de outra pessoa”, acrescenta.

O advogado especialista em Previdência Social Rômulo Saraiva afirma que os idosos sofrem prejuízo material quando não conseguem a validação biométrica ou quando terceiros conseguem fazer isso de maneira fraudulenta. “A dificuldade de confirmar a biometria também resulta em fraude, crimes bancários e descontos indevidos, por causa da fragilidade gerada”, diz ele. “O INSS diz que a tecnologia é necessária, mas não oferece subsídio para ajudar uma geração que não está ambientada com a tecnologia”.

(“Biometria facial afasta idosos dos bancos e dificulta operações simples”. www.dcomercio.com.br, 14.07.2026. Adaptado.)

Com base nos textos apresentados e em seus próprios conhecimentos, escreva um texto dissertativo-argumentativo, empregando a norma-padrão da língua portuguesa, sobre o tema:`,
  blockTypes: [
    'label',
    'subheading', 'prose', 'prose', 'source',
    'subheading', 'prose', 'prose', 'source',
    'subheading', 'prose', 'prose', 'source',
    'command',
  ],
  statementTail: 'Impactos da exigência do reconhecimento facial para a população idosa',
  tailBlockTypes: ['headline'],
  parts: [{
    id: 'T',
    prompt: 'Produza um texto dissertativo-argumentativo em norma-padrão da língua portuguesa sobre o tema: “Impactos da exigência do reconhecimento facial para a população idosa”.',
    expected: 'Espera-se uma dissertação-argumentativa que analise criticamente as consequências da obrigatoriedade do reconhecimento facial na vida da população idosa, articulando a coletânea e repertório próprio. O candidato deve abordar: 1) Fatores de exclusão e vulnerabilidade técnica/digital, como as alterações fisionômicas naturais do envelhecimento e o viés algorítmico em bases pouco representativas de rostos idosos (Texto 1), somados às dificuldades de letramento digital, comandos pouco intuitivos e posse de aparelhos precários (Textos 2 e 3); e 2) Impactos sociais, financeiros e de cidadania, como barreiras de acesso a benefícios previdenciários (INSS) e serviços bancários, perda de autonomia pelo recurso a terceiros e maior exposição a fraudes e descontos indevidos, defendendo a oferta de alternativas acessíveis, suporte institucional e políticas de inclusão digital.',
    criteria: [
      { points: 3, text: 'Critério A (Tema): aborda explicitamente a exigência do reconhecimento facial e seus impactos específicos sobre a população idosa, articulando barreiras tecnológicas, previdenciárias/bancárias e sociais sem tangenciar para o uso genérico de tecnologia ou segurança digital sem recorte etário.' },
      { points: 4, text: 'Critério B (Gênero/Tipo de texto e Coerência): estrutura o texto dissertativo-argumentativo com introdução, desenvolvimento e conclusão, projeto de texto claro, argumentação consistente a partir dos textos motivadores e de repertório externo, sem 1ª pessoa do singular ou interlocução direta com o leitor.' },
      { points: 4, text: 'Critério C (Elementos Linguísticos — modalidade e coesão): demonstra domínio da norma-padrão (ortografia, acentuação, pontuação, concordância, regência e crase) e emprega adequadamente recursos coesivos inter e intraparágrafos.' },
    ],
  }],
  studyNotes: [
    'Padrão VUNESP de correção (Critérios A, B e C, escala 0 a 11 convertida para a nota do edital).',
    'Recebe nota zero a redação que fugir ao tema e/ou gênero, estiver em branco, apresentar sinais de identificação do candidato, for escrita em outra língua, tiver 7 linhas ou menos, tiver menos de 8 linhas autorais contínuas ou copiar predominantemente os textos motivadores.',
    'Repertórios produtivos: Estatuto da Pessoa Idosa (Lei nº 10.741/2003 — garantia de acesso digno a serviços públicos e privados), viés algorítmico (Joy Buolamwini e Timnit Gebru sobre sub-representação de grupos em bases de reconhecimento facial), cidadania digital, acessibilidade em serviços públicos (Gov.br / INSS) e alternativas híbridas de autenticação.',
  ],
});
