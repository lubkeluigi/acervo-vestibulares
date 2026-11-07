import { createFamema } from './famema-helpers.js';
const { essay } = createFamema(2020);

export const famema2020Redacao = essay({
  statement: 'REDAÇÃO\n\nTexto 1', blockTypes: ['label', 'subheading'],
  visuals: [{ file: 'redacao-texto1.svg', alt: 'Charge: uma mulher grávida carrega na barriga a placa Redução da maioridade penal; ao lado, uma criança com bola e corrente no tornozelo.' }],
  statementAfter: `(“Segundo especialista, redução da maioridade penal é um erro e não reduz violência (Parte 1)”. http://brasil.agenciapulsar.org, 25.03.2015.)

Texto 2

Tema bastante controverso, a redução da maioridade penal vem conquistando um número cada vez maior de adeptos, que, pressionados pela sensação generalizada de insegurança, veem a sua implantação como a única solução imediatamente possível para a diminuição da criminalidade praticada por menores.

Vige desde o século XIX a teoria de que crianças e adolescentes não possuiriam o desenvolvimento intelectual e psicológico completo, necessário e essencial para a responsabilização criminal nos termos do Código Penal. Considerando-se as transformações ocorridas na sociedade, em que os jovens têm maior acesso às informações e participam de forma cada vez mais autônoma das diversas relações sociais, ter-se-ia por indispensável o conhecimento daquilo que é ou não lícito. Tanto é assim, que o Código Civil prevê a capacidade relativa da pessoa com 16 anos completos, permitindo-lhe casar, continuar atividade empresária já iniciada, dispor de seu patrimônio em testamento, ser emancipado, dentre outras hipóteses. Além disso, a Constituição Federal autoriza que os menores púberes (com 16 anos) possam exercer o direito de voto. Ora, seria inconcebível pressupor a capacidade intelectiva para tais atos e sustentar que os jovens infratores não possuem plena consciência dos atos ilícitos porventura cometidos.

A impunidade, certamente, é a causa principal da ocorrência, cada vez maior, de atos ilícitos entre os adolescentes. Certos de que se capturados sofrerão restrição de liberdade por não mais de 03 anos, os jovens infratores se sentem atraídos por essa vantagem. A impunidade, além de constranger, desrespeitar e violar os direitos das vítimas de crimes cometidos por menores infratores, incentiva a prática de novos crimes, bem como a formação de novos infratores.

(Izabelle Rhaissa F. Moreira. “Argumentos favoráveis à redução da maioridade penal”. https://jus.com.br, fevereiro de 2017. Adaptado.)

Texto 3

“Se prisão resolvesse alguma coisa, nós deveríamos ser um país muito mais seguro”, comenta Rafael Custódio, coordenador do programa de justiça da ONG Conectas Direitos Humanos. O sistema prisional brasileiro atravessa problemas históricos, como a superlotação e o alto índice de reincidência criminal. De acordo com dados do Conselho Nacional de Justiça, um em cada quatro condenados volta a cometer crimes. Nesse cenário, Custódio aponta que inserir menores de idade no sistema penal adulto contribuiria para que a violência aumentasse ao invés de diminuir. “O Brasil criou um sistema carcerário que viola direitos, não recupera ninguém e só produz mais violência. Diante dessa realidade, nós queremos trazer os adolescentes para essa lógica? Não faz sentido”.

Heloisa de Souza Dantas, mestre em Psicologia Comunitária pela Michigan State University, também afirma que a redução da maioridade penal não é o caminho para combater a violência. Além de investimentos em educação e saúde, a psicóloga defende que a sociedade deve mudar o tratamento dado a esse assunto. “É um país que precisa olhar os adolescentes como seus filhos e não como inimigos”. Sobre o debate acerca do assunto, a psicóloga acha que está se formando uma “cortina de fumaça” que desvia as atenções do problema real. A maioria dos atos infracionais cometidos por jovens estão relacionados ao tráfico de drogas, enquanto crimes hediondos representam um número menor. Souza aponta que um investimento maior em inteligência policial ajudaria a pegar os “peixes grandes” do tráfico de drogas ao invés de manter a política de encarceramento em massa, que não tem ajudado a reduzir os índices de violência no Brasil.

(Natália Silva. “Os riscos da redução da maioridade penal”. www.cartacapital.com.br, 08.11.2018. Adaptado.)

Com base nos textos apresentados e em seus próprios conhecimentos, escreva um texto dissertativo-argumentativo, empregando a norma-padrão da língua portuguesa, sobre o tema:`,
  afterBlockTypes: ['source', 'subheading', 'prose', 'prose', 'prose', 'source', 'subheading', 'quote', 'quote', 'source', 'command'],
  statementTail: 'A redução da maioridade penal\npode colaborar para a diminuição da violência no Brasil?', tailBlockTypes: ['headline'],
  parts: [{ id: 'T', prompt: 'Produza um texto dissertativo-argumentativo em norma-padrão da língua portuguesa sobre o tema proposto.', expected: 'Não há resposta única. A proposta editorial espera uma tese clara sobre a relação entre redução da maioridade penal e diminuição da violência, com argumentos que considerem responsabilização, prevenção, ressocialização e as condições do sistema de justiça.' }],
  studyNotes: [
    'Orientação editorial, não oficial: apresente uma tese clara, examine argumentos favoráveis e contrários e sustente sua posição com repertório pertinente.',
    'A redação não recebe nota automática nem deve ser comparada a um gabarito de alternativa.',
  ],
});
