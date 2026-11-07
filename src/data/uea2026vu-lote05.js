import { q, img } from './uea2026vu-helpers.js';

function adapt(raw) {
  const correctIndex = raw.alternatives.findIndex((alternative) => alternative.isCorrect);
  const answer = 'ABCDE'[correctIndex];
  if (correctIndex < 0) throw new Error(`Gabarito ausente na questão ${raw.number}`);
  const why = raw.alternatives[correctIndex].analysis.replace(/^Correta\.\s*/, '');
  const wrong = Object.fromEntries(raw.alternatives
    .map((alternative, index) => [index, alternative.analysis])
    .filter(([index]) => index !== correctIndex));
  const sourceText = raw.source?.replace(/^Fonte:\s*/, '');
  const images = (raw.media || []).map((item) => img(
    item.src.split('/').pop(), item.alt, sourceText ? `(${sourceText})` : '',
  ));
  let statement = raw.statement;
  const sourceBlocks = {};
  if (sourceText && images.length === 0) {
    statement += `\n\n(${sourceText})`;
    sourceBlocks.blockTypes = ['prose', 'source'];
  }
  return q({
    n: raw.number,
    subject: raw.subject,
    content: raw.content,
    difficulty: raw.difficulty === 'easy' ? 'Fácil' : raw.difficulty === 'medium' ? 'Média' : 'Difícil',
    statement,
    ...sourceBlocks,
    ...(raw.command ? { statementAfter: raw.command, afterBlockTypes: ['command'] } : {}),
    ...(images.length ? { images } : {}),
    alternatives: raw.alternatives.map((alternative) => alternative.text),
    answer,
    why,
    wrong,
    resolution: [raw.resolution],
    timeMinutes: raw.timeMinutes,
    skills: raw.skills,
    tags: raw.tags,
  });
}

export const uea2026vuLote05 = [
  {
    id: 'uea2026vu-q57', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 57, subject: 'Matemática', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'medium', timeMinutes: 5,
    statement: 'Em um plano cartesiano, a parábola que representa a função f(x) = −x² + bx + c, em que b e c são constantes reais, tem vértice V(3, 4), intersecta o eixo das ordenadas no ponto (0, −5) e intersecta o eixo das abscissas nos pontos A e B.',
    command: 'A abscissa do ponto B é',
    media: [{ src: '/images/uea2026vu/uea2026vu-q57-parabola.svg', alt: 'Parábola com vértice V(3, 4), intercepto (0, -5) e raízes A e B.' }],
    alternatives: [
      { id: 'a', text: '4.', isCorrect: false, analysis: 'Se B fosse 4, f(4) = −16 + 24 − 5 = 3, e não zero.' },
      { id: 'b', text: '6.', isCorrect: false, analysis: 'Para x = 6, f(6) = −36 + 36 − 5 = −5; logo, 6 não é raiz.' },
      { id: 'c', text: '5.', isCorrect: true, analysis: 'Correta. As raízes de −x² + 6x − 5 = 0 são 1 e 5; B é a raiz à direita do eixo de simetria, portanto tem abscissa 5.' },
      { id: 'd', text: '5,5.', isCorrect: false, analysis: 'Para x = 5,5, f(5,5) = −2,25, valor diferente de zero.' },
      { id: 'e', text: '4,5.', isCorrect: false, analysis: 'Para x = 4,5, f(4,5) = 1,75; esse ponto não está sobre o eixo das abscissas.' },
    ],
    resolution: 'Como f(0) = c = −5, tem-se c = −5. A abscissa do vértice é xᵥ = −b/[2·(−1)] = b/2 = 3, logo b = 6. Assim, f(x) = −x² + 6x − 5. Fazendo f(x) = 0, obtém-se x² − 6x + 5 = (x − 1)(x − 5) = 0. As raízes são 1 e 5; pela figura, B é a interseção à direita do vértice, logo sua abscissa é 5.',
    content: 'Parábola e função quadrática', subtopic: 'Vértice, coeficientes e raízes', skills: ['Determinar coeficientes de uma função quadrática a partir de seu gráfico.', 'Calcular e interpretar as raízes de uma equação do segundo grau.'], tags: ['função quadrática', 'parábola', 'vértice'],
  },
  {
    id: 'uea2026vu-q58', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 58, subject: 'Matemática', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'medium', timeMinutes: 5,
    statement: 'Um terreno retangular ABCD, com 30 m de comprimento, será utilizado como espaço comunitário para aulas de artesanato. Nesse terreno, serão construídos um galpão, uma cozinha e banheiros (W). Os banheiros ocuparão uma área de 12 m² e a cozinha terá 24 m² de área.',
    command: 'A área destinada ao galpão será de',
    media: [{ src: '/images/uea2026vu/uea2026vu-q58-terreno.svg', alt: 'Terreno retangular com galpão, cozinha e banheiros W, comprimento de 30 metros e altura de 4 metros para os banheiros.' }],
    alternatives: [
      { id: 'a', text: '333 m².', isCorrect: false, analysis: 'Subtrair 27 m² da área total de 360 m² não corresponde à soma das áreas da cozinha e dos banheiros, que é 36 m².' },
      { id: 'b', text: '324 m².', isCorrect: true, analysis: 'Correta. O terreno mede 30 m × 12 m; retirando 24 m² da cozinha e 12 m² dos banheiros, restam 324 m² para o galpão.' },
      { id: 'c', text: '342 m².', isCorrect: false, analysis: 'Esse valor corresponde a retirar apenas 18 m² de 360 m², metade da área conjunta de cozinha e banheiros.' },
      { id: 'd', text: '351 m².', isCorrect: false, analysis: 'Esse resultado subtrai somente 9 m² da área total e não utiliza corretamente as áreas de 24 m² e 12 m².' },
      { id: 'e', text: '360 m².', isCorrect: false, analysis: '360 m² é a área do terreno inteiro, antes de excluir a cozinha e os banheiros.' },
    ],
    resolution: 'Os banheiros têm área 12 m² e altura 4 m; portanto, a largura da faixa lateral é 12/4 = 3 m. A cozinha tem área 24 m² e a mesma largura de 3 m, logo sua altura é 24/3 = 8 m. A altura total do terreno é 8 + 4 = 12 m e sua área é 30·12 = 360 m². Assim, a área do galpão é 360 − 24 − 12 = 324 m². Equivalentemente, o galpão tem dimensões 27 m × 12 m.',
    content: 'Áreas de figuras planas', subtopic: 'Retângulos e decomposição de áreas', skills: ['Determinar dimensões de retângulos a partir de áreas.', 'Decompor uma região retangular e calcular áreas parciais.'], tags: ['área', 'retângulo', 'galpão'],
  },
  {
    id: 'uea2026vu-q59', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 59, subject: 'Matemática', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'medium', timeMinutes: 4,
    statement: 'Para sustentar uma prateleira, foi fixada na parede uma estrutura de metal no formato de um triângulo retângulo ABC, reto em A, com BC = 20 cm, AB = x cm e AC = 12 cm. A figura mostra o perfil dessa estrutura.',
    command: 'Sabendo que a largura da prateleira, que ficará apoiada sobre o lado AB da estrutura de metal, tem 14 cm a mais do que o próprio lado AB, a medida da largura dessa prateleira é',
    media: [{ src: '/images/uea2026vu/uea2026vu-q59-prateleira.svg', alt: 'Estrutura triangular ABC de sustentação de uma prateleira, com hipotenusa de 20 cm e lado AC de 12 cm.' }],
    alternatives: [
      { id: 'a', text: '22 cm.', isCorrect: false, analysis: 'Uma prateleira de 22 cm implicaria x = 8 cm, mas 8² + 12² = 208 ≠ 20².' },
      { id: 'b', text: '25 cm.', isCorrect: false, analysis: 'Nesse caso, x = 11 cm e 11² + 12² = 265, diferente de 400.' },
      { id: 'c', text: '20 cm.', isCorrect: false, analysis: 'Com largura 20 cm, x = 6 cm; os catetos 6 cm e 12 cm não formam hipotenusa de 20 cm.' },
      { id: 'd', text: '28 cm.', isCorrect: false, analysis: 'Essa largura daria x = 14 cm, mas 14² + 12² = 340 ≠ 400.' },
      { id: 'e', text: '30 cm.', isCorrect: true, analysis: 'Correta. Pelo Teorema de Pitágoras, x = 16 cm; como a prateleira tem 14 cm a mais, sua largura é 16 + 14 = 30 cm.' },
    ],
    resolution: 'Como o triângulo é reto em A, BC é a hipotenusa. Pelo Teorema de Pitágoras: x² + 12² = 20², portanto x² = 400 − 144 = 256 e, sendo x positivo, x = 16 cm. A largura da prateleira é x + 14 = 16 + 14 = 30 cm.',
    content: 'Triângulo retângulo e Teorema de Pitágoras', subtopic: 'Relações métricas no triângulo retângulo', skills: ['Aplicar o Teorema de Pitágoras.', 'Resolver uma equação quadrática simples em contexto geométrico.'], tags: ['triângulo retângulo', 'Pitágoras', 'prateleira'],
  },
  {
    id: 'uea2026vu-q60', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 60, subject: 'Matemática', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'medium', timeMinutes: 4,
    statement: 'O número de acidentes com bicicletas ocorridos em determinada cidade, em 5 dias de uma semana, foram registrados no gráfico a seguir, no qual o número de acidentes ocorridos na sexta-feira está representado por x.',
    command: 'Sabendo que o número de acidentes ocorridos na sexta-feira superou em 5 acidentes a média aritmética do número de acidentes ocorridos nesses 5 dias, a diferença entre o número de acidentes ocorridos na sexta-feira e o número de acidentes ocorridos na terça-feira foi',
    media: [{ src: '/images/uea2026vu/uea2026vu-q60-acidentes.svg', alt: 'Gráfico de acidentes com bicicletas: 8, 4, 11, 12 e x de segunda a sexta-feira.' }],
    alternatives: [
      { id: 'a', text: '12.', isCorrect: false, analysis: 'Uma diferença de 12 daria x = 16; nesse caso, a média seria 10,2 e x superaria a média em 5,8, não em 5.' },
      { id: 'b', text: '11.', isCorrect: true, analysis: 'Correta. A condição sobre a média fornece x = 15; como houve 4 acidentes na terça-feira, a diferença pedida é 15 − 4 = 11.' },
      { id: 'c', text: '9.', isCorrect: false, analysis: 'Essa diferença daria x = 13 e média 9,6; a sexta-feira superaria a média em apenas 3,4 acidentes.' },
      { id: 'd', text: '14.', isCorrect: false, analysis: 'Com diferença 14, x seria 18 e a média 10,6, de modo que o excesso sobre a média seria 7,4.' },
      { id: 'e', text: '15.', isCorrect: false, analysis: '15 é o valor de x, ou seja, o total de acidentes na sexta-feira, e não a diferença em relação à terça-feira.' },
    ],
    resolution: 'A soma dos acidentes de segunda a quinta-feira é 8 + 4 + 11 + 12 = 35. Como x supera em 5 a média dos cinco dias: x = (35 + x)/5 + 5. Multiplicando por 5: 5x = 35 + x + 25, logo 4x = 60 e x = 15. Na terça-feira ocorreram 4 acidentes; portanto, a diferença solicitada é 15 − 4 = 11.',
    content: 'Estatística e média aritmética', subtopic: 'Média aritmética e interpretação de gráficos', skills: ['Ler dados em um gráfico de colunas.', 'Formular uma equação a partir da média aritmética.'], tags: ['média aritmética', 'gráfico de colunas', 'estatística'],
  },
  {
    id: 'uea2026vu-q61', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 61, subject: 'Física', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'easy', timeMinutes: 2,
    statement: 'Um avião decolou da cidade do Rio de Janeiro para um voo sem escala até Manaus. Sabe-se que a velocidade escalar média e o tempo de voo foram, aproximadamente, de 700 km/h e 4 h.',
    command: 'Nessas condições, a distância percorrida pelo avião foi de, aproximadamente,',
    alternatives: [
      { id: 'a', text: '3 600 km.', isCorrect: false, analysis: 'Para percorrer 3 600 km a 700 km/h, seriam necessárias mais de 5 h, e não 4 h.' },
      { id: 'b', text: '2 100 km.', isCorrect: false, analysis: '2 100 km corresponde a 700 km/h durante 3 h, uma hora a menos que a informada.' },
      { id: 'c', text: '2 800 km.', isCorrect: true, analysis: 'Correta. Pela velocidade média, ΔS = v·Δt = 700·4 = 2 800 km.' },
      { id: 'd', text: '3 200 km.', isCorrect: false, analysis: 'Com 3 200 km em 4 h, a velocidade média seria 800 km/h, superior à fornecida.' },
      { id: 'e', text: '1 400 km.', isCorrect: false, analysis: '1 400 km é o produto de 700 km/h por apenas 2 h.' },
    ],
    resolution: 'A velocidade escalar média é v = ΔS/Δt. Logo, ΔS = v·Δt = 700 km/h·4 h = 2 800 km.',
    content: 'Cinemática e velocidade média', subtopic: 'Velocidade escalar média', skills: ['Aplicar a definição de velocidade escalar média.', 'Calcular distância a partir de velocidade e intervalo de tempo.'], tags: ['cinemática', 'velocidade média', 'distância'],
  },
  {
    id: 'uea2026vu-q62', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 62, subject: 'Física', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'medium', timeMinutes: 3,
    statement: 'Em uma usina hidrelétrica, a fonte primária de energia é a energia potencial gravitacional da água armazenada no reservatório. Considere que em uma dessas usinas, no decorrer de um segundo, a água que alimenta uma das unidades geradoras de energia elétrica desça por uma tubulação, passando por grades de proteção que causam uma perda de 55 MJ de energia. Essa água, ao chegar à turbina, girando-a, perde, devido a atritos, mais 35 MJ. Por fim, a turbina aciona o gerador de energia elétrica, que, por sua vez, perde, também devido a atritos, 25 MJ. A figura mostra um esquema dessa usina hidrelétrica e o trajeto percorrido pela água.',
    source: 'Fonte: https://earthsci.org. Adaptado.',
    media: [{ src: '/images/uea2026vu/uea2026vu-q62-hidreletrica.svg', alt: 'Esquema de usina hidrelétrica com grades, fluxo de água, turbina, gerador e energia elétrica.' }],
    command: 'Sabendo que cada unidade geradora dessa usina produz 700 MJ de energia elétrica a cada segundo, a quantidade total de energia potencial gravitacional dedicada à geração de energia elétrica em uma unidade geradora dessa usina, por segundo, é de',
    alternatives: [
      { id: 'a', text: '815 MJ.', isCorrect: true, analysis: 'Correta. A energia inicial deve cobrir os 700 MJ úteis e as perdas de 55 + 35 + 25 = 115 MJ, totalizando 815 MJ.' },
      { id: 'b', text: '790 MJ.', isCorrect: false, analysis: '790 MJ corresponde a somar somente as perdas das grades e da turbina, omitindo os 25 MJ perdidos no gerador.' },
      { id: 'c', text: '775 MJ.', isCorrect: false, analysis: 'Esse valor prevê apenas 75 MJ de perdas, enquanto o enunciado totaliza 115 MJ.' },
      { id: 'd', text: '830 MJ.', isCorrect: false, analysis: '830 MJ atribui 130 MJ às perdas, 15 MJ a mais que a soma informada.' },
      { id: 'e', text: '750 MJ.', isCorrect: false, analysis: 'Nesse caso haveria somente 50 MJ de perdas, insuficientes para as três etapas descritas.' },
    ],
    resolution: 'Pela conservação da energia, a energia potencial inicial é igual à energia elétrica útil somada a todas as perdas. Em um segundo: Eₚ = 700 + 55 + 35 + 25 = 815 MJ.',
    content: 'Conservação e dissipação de energia', subtopic: 'Transformações e perdas de energia', skills: ['Aplicar a conservação da energia em um sistema com dissipação.', 'Distinguir energia útil e perdas em etapas sucessivas.'], tags: ['energia potencial', 'conservação', 'hidrelétrica'],
  },
  {
    id: 'uea2026vu-q63', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 63, subject: 'Física', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'easy', timeMinutes: 2,
    statement: 'A fotografia mostra um barco de massa 140 kg conduzido, em um rio, por um pescador de massa 80 kg.',
    source: 'Fonte: https://canoadetolda.org.br',
    media: [{ src: '/images/uea2026vu/uea2026vu-q63-barco.webp', alt: 'Barco conduzido por um pescador em um rio.' }],
    command: 'Considere que, no instante em que a fotografia foi tirada, o barco estava com aceleração de 0,50 m/s². Nesse instante, a intensidade da resultante das forças que atuavam sobre esse barco era de',
    alternatives: [
      { id: 'a', text: '440 N.', isCorrect: false, analysis: '440 N é o dobro da força resultante calculada com a massa total e a aceleração fornecida.' },
      { id: 'b', text: '30 N.', isCorrect: false, analysis: '30 N corresponderia a uma massa acelerada de 60 kg, que não representa o sistema barco–pescador.' },
      { id: 'c', text: '40 N.', isCorrect: false, analysis: '40 N considera apenas a massa do pescador: 80·0,50. É necessário incluir também o barco.' },
      { id: 'd', text: '110 N.', isCorrect: true, analysis: 'Correta. A massa do conjunto é 140 + 80 = 220 kg; pela segunda lei de Newton, Fᵣ = 220·0,50 = 110 N.' },
      { id: 'e', text: '90 N.', isCorrect: false, analysis: 'Com a aceleração de 0,50 m/s², 90 N corresponderia a uma massa de 180 kg, não aos 220 kg do conjunto.' },
    ],
    resolution: 'O barco é conduzido pelo pescador, que se desloca com ele; portanto, a massa do conjunto é m = 140 + 80 = 220 kg. Pela segunda lei de Newton: Fᵣ = m·a = 220·0,50 = 110 N.',
    content: 'Dinâmica e segunda lei de Newton', subtopic: 'Força resultante e massa do sistema', skills: ['Identificar a massa total de um sistema.', 'Aplicar a segunda lei de Newton.'], tags: ['dinâmica', 'força resultante', 'segunda lei de Newton'],
  },
  {
    id: 'uea2026vu-q64', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 64, subject: 'Física', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'easy', timeMinutes: 2,
    statement: 'Ao se analisar um incêndio natural em uma floresta, pode-se perceber as três modalidades de transferência de energia térmica. A __________ pode ser exemplificada quando uma folha em brasa, sobre o solo da mata, toca outra folha seca, incendiando-a. Já a movimentação do ar aquecido que leva o calor para o alto da copa das árvores configura um exemplo de transferência de calor por __________. De modo geral, toda a propagação de calor, próxima ou a distância, ocorre por ondas eletromagnéticas, configurando um exemplo de troca de calor por __________.',
    command: 'As lacunas do texto são preenchidas, respectivamente, por:',
    alternatives: [
      { id: 'a', text: 'condução — convecção — irradiação.', isCorrect: true, analysis: 'Correta. O contato entre as folhas exemplifica condução; o ar aquecido em movimento, convecção; e as ondas eletromagnéticas, irradiação.' },
      { id: 'b', text: 'irradiação — convecção — condução.', isCorrect: false, analysis: 'Apenas convecção está correta: o contato entre folhas não é irradiação e ondas eletromagnéticas não caracterizam condução.' },
      { id: 'c', text: 'irradiação — condução — convecção.', isCorrect: false, analysis: 'As três lacunas estão inadequadas: contato é condução, movimento de ar é convecção e propagação por ondas é irradiação.' },
      { id: 'd', text: 'convecção — condução — irradiação.', isCorrect: false, analysis: 'A última lacuna está correta, mas contato entre folhas não é convecção e transporte por ar aquecido não é condução.' },
      { id: 'e', text: 'convecção — irradiação — condução.', isCorrect: false, analysis: 'A sequência troca os três processos: a situação exige condução, convecção e irradiação, respectivamente.' },
    ],
    resolution: 'Na condução, o calor é transferido por contato e sem transporte macroscópico de matéria, como entre as folhas. Na convecção, o transporte ocorre pelo movimento de um fluido, como o ar aquecido que sobe. Na irradiação, a energia térmica é transmitida por ondas eletromagnéticas, inclusive a distância. A sequência é condução — convecção — irradiação.',
    content: 'Transferência de energia térmica', subtopic: 'Condução, convecção e irradiação', skills: ['Diferenciar os três processos de transferência de calor.', 'Reconhecer esses processos em situações cotidianas.'], tags: ['calor', 'condução', 'convecção', 'irradiação'],
  },
  {
    id: 'uea2026vu-q65', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 65, subject: 'Física', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'easy', timeMinutes: 3,
    statement: 'Reduzir o tempo de uso do aparelho de ar condicionado é um exemplo de ação que contribui para o consumo consciente de energia elétrica. Como comparação ao consumo de energia de um aparelho de ar condicionado, considere uma lâmpada de 15 W que fica acesa durante 6 h. Nesse intervalo de tempo, essa lâmpada consome tanta energia elétrica quanto um aparelho de ar condicionado de 900 W funcionando durante',
    alternatives: [
      { id: 'a', text: '10 min.', isCorrect: false, analysis: 'Em 10 min = 1/6 h, o aparelho consumiria 900·1/6 = 150 Wh, mais que os 90 Wh da lâmpada.' },
      { id: 'b', text: '18 min.', isCorrect: false, analysis: 'Em 18 min = 0,3 h, o consumo seria 900·0,3 = 270 Wh, o triplo do necessário.' },
      { id: 'c', text: '12 min.', isCorrect: false, analysis: 'Em 12 min = 0,2 h, o ar condicionado consumiria 180 Wh, o dobro da energia da lâmpada.' },
      { id: 'd', text: '6 min.', isCorrect: true, analysis: 'Correta. A lâmpada consome 15·6 = 90 Wh; o tempo do aparelho é 90/900 = 0,1 h = 6 min.' },
      { id: 'e', text: '15 min.', isCorrect: false, analysis: 'Em 15 min = 0,25 h, o consumo seria 225 Wh, superior aos 90 Wh calculados.' },
    ],
    resolution: 'A energia consumida é E = P·Δt. Para a lâmpada: E = 15 W·6 h = 90 Wh. Igualando ao consumo do ar condicionado: 900·Δt = 90, logo Δt = 0,1 h. Como 1 h = 60 min, Δt = 0,1·60 = 6 min.',
    content: 'Potência e energia elétrica', subtopic: 'Consumo de energia e unidades', skills: ['Relacionar potência, energia e tempo.', 'Converter horas em minutos em cálculos de consumo.'], tags: ['potência', 'energia elétrica', 'consumo consciente'],
  },
  {
    id: 'uea2026vu-q66', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 66, subject: 'Física', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'easy', timeMinutes: 2,
    statement: 'Existe um fluxo contínuo de cargas elétricas entre a ionosfera e a superfície da Terra, denominado corrente de bom tempo, que ocorre em regiões em que não há tempestade. Considerando toda a Terra, esse deslocamento de cargas elétricas corresponde a uma corrente elétrica de 1000 A.',
    command: 'Nessas condições, a cada minuto, a quantidade de carga elétrica transportada entre a ionosfera e a superfície da Terra é igual a',
    alternatives: [
      { id: 'a', text: '360 000 C.', isCorrect: false, analysis: 'Esse valor é seis vezes a carga transportada em um minuto com corrente de 1000 A.' },
      { id: 'b', text: '3 600 000 C.', isCorrect: false, analysis: '3 600 000 C corresponde a uma hora: 1000 A·3600 s, e não a um minuto.' },
      { id: 'c', text: '60 000 C.', isCorrect: true, analysis: 'Correta. Como 1 A = 1 C/s e 1 min = 60 s, Q = i·Δt = 1000·60 = 60 000 C.' },
      { id: 'd', text: '600 000 C.', isCorrect: false, analysis: '600 000 C seria transportada em 600 s = 10 min.' },
      { id: 'e', text: '10 000 C.', isCorrect: false, analysis: 'Com 1000 A, 10 000 C corresponde a apenas 10 s.' },
    ],
    resolution: 'A intensidade da corrente é i = Q/Δt. Portanto, Q = i·Δt. Convertendo um minuto para 60 s: Q = 1000 C/s·60 s = 60 000 C.',
    content: 'Corrente elétrica e carga', subtopic: 'Relação entre corrente, carga e tempo', skills: ['Aplicar a definição de corrente elétrica.', 'Converter minutos em segundos no cálculo de carga.'], tags: ['corrente elétrica', 'carga elétrica', 'ionosfera'],
  },
  {
    id: 'uea2026vu-q67', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 67, subject: 'Física', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'easy', timeMinutes: 2,
    statement: 'A exposição às radiações eletromagnéticas, dependendo da intensidade, do tipo e da duração da exposição, traz riscos à saúde. As radiações que apresentam maior risco são as de alta energia, denominadas radiações ionizantes. Dois exemplos de radiações ionizantes são',
    alternatives: [
      { id: 'a', text: 'os raios gama e a radiação infravermelha.', isCorrect: false, analysis: 'Os raios gama são ionizantes, mas a radiação infravermelha não possui energia suficiente para ionizar a matéria.' },
      { id: 'b', text: 'os raios X e os raios gama.', isCorrect: true, analysis: 'Correta. Raios X e raios gama são radiações eletromagnéticas de alta energia e, portanto, ionizantes.' },
      { id: 'c', text: 'as micro-ondas e a radiação infravermelha.', isCorrect: false, analysis: 'Micro-ondas e radiação infravermelha são não ionizantes.' },
      { id: 'd', text: 'as micro-ondas e os raios X.', isCorrect: false, analysis: 'Os raios X são ionizantes, mas as micro-ondas não são.' },
      { id: 'e', text: 'os raios gama e as micro-ondas.', isCorrect: false, analysis: 'A alternativa reúne uma radiação ionizante, os raios gama, e uma não ionizante, as micro-ondas.' },
    ],
    resolution: 'Radiações ionizantes têm energia suficiente para retirar elétrons de átomos e moléculas. Entre as radiações citadas, raios X e raios gama pertencem a essa categoria. Micro-ondas e radiação infravermelha têm frequências e energias de fótons menores e são classificadas como não ionizantes.',
    content: 'Radiações eletromagnéticas e ionização', subtopic: 'Radiações ionizantes e não ionizantes', skills: ['Classificar radiações eletromagnéticas quanto à ionização.', 'Relacionar energia da radiação a riscos à saúde.'], tags: ['radiação ionizante', 'raios X', 'raios gama'],
  },
  {
    id: 'uea2026vu-q68', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 68, subject: 'Física', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'easy', timeMinutes: 2,
    statement: 'A produção de energia elétrica em grande escala é feita, na maioria das usinas, por meio de um dispositivo denominado dínamo, que transforma energia mecânica em energia elétrica. A usina em que o processo de produção de energia elétrica ocorre sem o uso desse dispositivo é a',
    alternatives: [
      { id: 'a', text: 'termelétrica.', isCorrect: false, analysis: 'Em termelétricas convencionais, o vapor movimenta turbinas acopladas a geradores ou dínamos.' },
      { id: 'b', text: 'nuclear.', isCorrect: false, analysis: 'A usina nuclear usa o calor da fissão para produzir vapor e acionar turbinas e geradores.' },
      { id: 'c', text: 'eólica.', isCorrect: false, analysis: 'O vento gira as pás e o eixo do aerogerador, convertendo energia mecânica em elétrica.' },
      { id: 'd', text: 'hidrelétrica.', isCorrect: false, analysis: 'A água movimenta turbinas conectadas a geradores, dispositivos eletromecânicos de conversão.' },
      { id: 'e', text: 'solar.', isCorrect: true, analysis: 'Correta. Na usina solar fotovoltaica, as células convertem a radiação solar diretamente em energia elétrica, sem dínamo.' },
    ],
    resolution: 'Termelétricas, nucleares, eólicas e hidrelétricas empregam, em seus processos usuais, turbinas ou rotores acoplados a geradores elétricos. Na geração solar fotovoltaica, o efeito fotovoltaico converte diretamente a energia luminosa em eletricidade, sem a etapa mecânica e sem dínamo.',
    content: 'Produção de energia elétrica', subtopic: 'Fontes e processos de geração', skills: ['Comparar processos de geração de energia elétrica.', 'Reconhecer a conversão direta na geração solar fotovoltaica.'], tags: ['usinas', 'energia solar', 'dínamo'],
  },
  {
    id: 'uea2026vu-q69', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 69, subject: 'Física', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'easy', timeMinutes: 2,
    statement: 'A matriz elétrica brasileira passou por transformações significativas na última década. Há dez anos, as hidrelétricas dominavam a matriz elétrica, respondendo por mais de 70% da energia gerada no Brasil. Atualmente, essa participação caiu para 50%, embora ainda seja uma fonte importante. Em contrapartida, dois novos tipos de usinas de energia elétrica, que são limpas e renováveis, e que eram praticamente inexistentes há uma década, têm se tornado significativas, e hoje, juntas, representam mais de 20% da matriz elétrica do Brasil.',
    source: 'Fonte: www.cnnbrasil.com.br, 12.09.2024. Adaptado.',
    command: 'Os dois tipos de usinas que usam fontes renováveis e que se tornaram significativas na matriz elétrica brasileira na última década são as',
    alternatives: [
      { id: 'a', text: 'térmicas e eólicas.', isCorrect: false, analysis: 'As eólicas integram o par descrito, mas as térmicas convencionais não são o novo par de fontes limpas e renováveis destacado no texto.' },
      { id: 'b', text: 'eólicas e solares.', isCorrect: true, analysis: 'Correta. A expansão recente da matriz brasileira é marcada pelas usinas eólicas e solares, ambas renováveis e de baixa emissão na operação.' },
      { id: 'c', text: 'nucleares e eólicas.', isCorrect: false, analysis: 'A energia nuclear não é renovável e não compõe, com a eólica, o par de expansão descrito.' },
      { id: 'd', text: 'solares e térmicas.', isCorrect: false, analysis: 'As solares estão corretas, mas as térmicas não completam o par de fontes limpas e renováveis em destaque.' },
      { id: 'e', text: 'solares e nucleares.', isCorrect: false, analysis: 'Embora a solar seja uma das respostas, a nuclear não é fonte renovável.' },
    ],
    resolution: 'O texto se refere às fontes que passaram de participação praticamente inexistente para uma fatia conjunta superior a 20% da matriz elétrica brasileira em dez anos. Esse movimento corresponde à expansão das usinas eólicas, movidas pelo vento, e solares, alimentadas pela radiação do Sol.',
    content: 'Energia elétrica e fontes renováveis', subtopic: 'Matriz elétrica brasileira', skills: ['Interpretar informações sobre a matriz elétrica.', 'Identificar fontes renováveis em expansão no Brasil.'], tags: ['matriz elétrica', 'energia eólica', 'energia solar'],
  },
  {
    id: 'uea2026vu-q70', examId: 'uea-vestibular-2026-conhecimentos-gerais', number: 70, subject: 'Física', year: 2026,
    phase: 'Conhecimentos Gerais', modality: 'vestibular-unificado', banca: 'VUNESP', type: 'objective', difficulty: 'easy', timeMinutes: 3,
    statement: 'A figura ilustra as perturbações que dois tipos de ondas produzidas em um terremoto provocam no solo. As ondas P, primárias, são mais velozes e as primeiras a atingir o local afetado pelo terremoto. As ondas S, secundárias, chegam pouco tempo depois.',
    source: 'Fonte: https://sites.northwestern.edu. Adaptado.',
    media: [{ src: '/images/uea2026vu/uea2026vu-q70-ondas-sismicas.svg', alt: 'Perturbações das ondas sísmicas P e S no solo.' }],
    command: 'Essas ondas são',
    alternatives: [
      { id: 'a', text: 'eletromagnéticas, e a onda P é longitudinal, enquanto a onda S é transversal.', isCorrect: false, analysis: 'As orientações de P e S estão corretas, mas ondas sísmicas são mecânicas, pois se propagam por deformações do solo.' },
      { id: 'b', text: 'mecânicas, e a onda P é transversal, enquanto a onda S é longitudinal.', isCorrect: false, analysis: 'A natureza mecânica está correta, mas a classificação foi invertida: P é longitudinal e S é transversal.' },
      { id: 'c', text: 'mistas, e a onda P é transversal, enquanto a onda S é longitudinal.', isCorrect: false, analysis: 'Ondas sísmicas não são classificadas como mistas nesse contexto, e a alternativa também inverte os movimentos de P e S.' },
      { id: 'd', text: 'mecânicas, e a onda P é longitudinal, enquanto a onda S é transversal.', isCorrect: true, analysis: 'Correta. As ondas sísmicas propagam energia por meio do solo; P produz compressões e expansões longitudinais, e S provoca oscilações transversais.' },
      { id: 'e', text: 'eletromagnéticas, e a onda P é transversal, enquanto a onda S é longitudinal.', isCorrect: false, analysis: 'A natureza está incorreta e as direções de vibração de P e S foram invertidas.' },
    ],
    resolution: 'Ondas sísmicas são ondas mecânicas porque necessitam de um meio material e se propagam por deformações das rochas e do solo. Nas ondas P, as partículas oscilam na direção de propagação, com compressões e expansões: são longitudinais. Nas ondas S, a oscilação é perpendicular à propagação: são transversais.',
    content: 'Ondas mecânicas e ondas sísmicas', subtopic: 'Ondas longitudinais e transversais', skills: ['Classificar ondas quanto à natureza e à direção de vibração.', 'Distinguir ondas sísmicas P e S.'], tags: ['ondas mecânicas', 'ondas sísmicas', 'ondas P e S'],
  },
].map(adapt);
