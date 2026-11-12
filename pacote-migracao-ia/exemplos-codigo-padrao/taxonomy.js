/**
 * Taxonomia canônica unificada do Banco de Questões.
 * Padroniza Matéria -> Conteúdo -> Subtópico para todas as 2.993 questões de todos os vestibulares.
 */

const normalize = (value) => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export const CANONICAL_CONTENTS = {
  "Matemática": [
    "Álgebra",
    "Geometria plana",
    "Geometria espacial",
    "Geometria analítica",
    "Trigonometria",
    "Análise combinatória e probabilidade",
    "Estatística",
    "Matemática financeira e proporcionalidade"
  ],
  "Física": [
    "Mecânica",
    "Termologia e termodinâmica",
    "Óptica",
    "Ondulatória e acústica",
    "Eletricidade e magnetismo",
    "Física moderna e astrofísica",
    "Grandezas e medidas"
  ],
  "Química": [
    "Química geral e inorgânica",
    "Estrutura atômica e tabela periódica",
    "Ligações e interações moleculares",
    "Estequiometria",
    "Soluções e propriedades coligativas",
    "Termoquímica e cinética",
    "Equilíbrio químico e ácido-base",
    "Eletroquímica e oxirredução",
    "Química orgânica"
  ],
  "Biologia": [
    "Citologia e metabolismo celular",
    "Genética e biologia molecular",
    "Evolução",
    "Ecologia",
    "Fisiologia humana",
    "Diversidade e classificação",
    "Botânica e fisiologia vegetal",
    "Zoologia e fisiologia animal"
  ],
  "História": [
    "História Antiga",
    "História Medieval",
    "História Moderna",
    "História Contemporânea",
    "Brasil Colonial",
    "Brasil Império",
    "Brasil República",
    "História, fontes e cultura"
  ],
  "Geografia": [
    "Cartografia",
    "Geografia física",
    "Geografia humana",
    "Geografia econômica",
    "Geopolítica e relações internacionais",
    "Meio ambiente e sustentabilidade"
  ],
  "Português": [
    "Interpretação de texto",
    "Semântica e coesão",
    "Morfologia",
    "Sintaxe",
    "Linguagem e discurso",
    "Produção textual"
  ],
  "Literatura": [
    "Teoria e interpretação literária",
    "Escolas e períodos literários",
    "Literatura contemporânea"
  ],
  "Inglês": [
    "Compreensão textual",
    "Vocabulário e semântica",
    "Gramática e coesão"
  ],
  "Filosofia": [
    "História da filosofia",
    "Filosofia social e política",
    "Ética e teoria do conhecimento"
  ],
  "Sociologia": [
    "Sociedade e cultura",
    "Cidadania e participação",
    "Trabalho e desigualdades"
  ],
  "Artes": [
    "História e teoria da arte",
    "Artes visuais"
  ]
};

const EXPLICIT_OVERRIDES = new Map([
  ["famerp2024-p1-q01", ["Interpretação de texto", "Intertextualidade e relações entre textos", "Intertextualidade no cartum de Rafael Corrêa"]],
  ["famerp2024-p1-q02", ["Linguagem e discurso", "Variação linguística e norma-padrão", "Registro e linguagem no artigo de divulgação científica"]],
  ["famerp2024-p1-q03", ["Semântica e coesão", "Sinonímia, antonímia e polissemia", "Expressão coloquial e sentido em contexto"]],
  ["famerp2024-p1-q04", ["Interpretação de texto", "Ironia, humor e duplo sentido", "Tonalidade irônica no artigo de Drauzio Varella"]],
  ["famerp2024-p1-q05", ["Semântica e coesão", "Coesão referencial e sequencial", "Coesão textual por elipse e não repetição"]],
  ["famerp2024-p1-q06", ["Sintaxe", "Período composto por coordenação e subordinação", "Relação semântica da oração subordinada adverbial"]],
  ["famerp2024-p1-q07", ["Sintaxe", "Pontuação e uso da vírgula", "Emprego da vírgula para marcar elipse verbal"]],
  ["famerp2024-p1-q08", ["Interpretação de texto", "Compreensão global e inferências", "Inferência de sentimento e humor na tirinha"]],
  ["famerp2015-p1-q01", ["Álgebra", "Funções exponenciais e logarítmicas", "Decaimento radioativo e função exponencial"]],
  ["famerp2015-p1-q09", ["Análise combinatória e probabilidade", "Combinações e arranjos", "Escalação e combinações de jogadores"]],
  ["famerp2015-p1-q10", ["Álgebra", "Sistemas lineares e matrizes", "Pontuação de prova e sistema de equações"]],
  ["famerp2015-p1-q34", ["Mecânica", "Gravitação universal e órbitas", "Afastamento da Lua e gravitação"]],
  ["famerp2015-p1-q35", ["Mecânica", "Trabalho, potência e energia", "Energia metabólica e trabalho do corpo humano"]],
  ["famerp2015-p1-q42", ["História Medieval", "Crise do feudalismo e Renascimento comercial", "Conceito e invenção da Idade Média"]],
  ["famerp2015-p1-q46", ["Brasil República", "República da Espada e República Velha", "Movimento operário e anarquismo"]],
  ["famerp2015-p1-q47", ["Brasil Império", "Economia cafeeira e trabalho escravizado e imigrante", "Estímulo à imigração e trabalho cafeeiro"]],
  ["famerp2015-p1-q48", ["Brasil República", "República da Espada e República Velha", "Cangaço, Coluna Prestes e Padre Cícero"]],
  ["famerp2015-p1-q50", ["Brasil República", "Ditadura Militar (1964-1985)", "Discursos da imprensa antes do Golpe de 1964"]],
  ["famerp2015-p1-q56", ["Química geral e inorgânica", "Substâncias, misturas e separação", "Atividade experimental e separação de misturas"]],
  ["famerp2015-p1-q57", ["Química geral e inorgânica", "Química ambiental e poluição", "Fotossíntese e ciclo do carbono"]],
  ["famerp2015-p2-q09", ["Estequiometria", "Leis ponderais e estequiometria simples", "Conservação das massas e reações com palha de aço"]],
  ["famerp2016-p1-q03", ["Geometria plana", "Triângulos e trigonometria no triângulo", "Trajeto e teorema de Pitágoras"]],
  ["famerp2016-p1-q08", ["Análise combinatória e probabilidade", "Princípio fundamental e permutações", "Distribuição de escolas e contagem"]],
  ["famerp2016-p1-q14", ["Ecologia", "Impactos ambientais e conservação", "Eutrofização e enriquecimento por nitrogênio e fósforo"]],
  ["famerp2016-p1-q51", ["Química geral e inorgânica", "Substâncias, misturas e separação", "Separação magnética e densidade de metais"]],
  ["famerp2016-p1-q52", ["Química geral e inorgânica", "Gases e transformações gasosas", "Densidade e volume de gases em cilindros"]],
  ["famerp2016-p1-q53", ["Estequiometria", "Massa molar e número de mols", "Teor de nitrogênio em fertilizantes"]],
  ["famerp2017-p1-q04", ["Matemática financeira e proporcionalidade", "Aritmética e matemática básica", "Escala de coma de Glasgow e pontuação"]],
  ["famerp2017-p1-q13", ["Genética e biologia molecular", "Alelos múltiplos e tipos sanguíneos", "Herança de grupos sanguíneos ABO e fator Rh"]],
  ["famerp2017-p1-q51", ["Química geral e inorgânica", "Substâncias, misturas e separação", "Ciclo hidrológico e mudanças de estado físico"]],
  ["famerp2017-p1-q58", ["Termoquímica e cinética", "Entalpia e calor de reação", "Combustão de etanol e gasolina"]],
  ["famerp2017-p2-q09", ["Química geral e inorgânica", "Substâncias, misturas e separação", "Quilates e pureza em ligas metálicas de ouro"]],
  ["famerp2018-p1-q54", ["Química geral e inorgânica", "Funções inorgânicas (ácidos, bases, sais, óxidos)", "Classificação e fórmulas de sais inorgânicos"]],
  ["famerp2018-p1-q71", ["Matemática financeira e proporcionalidade", "Porcentagem e aumentos/descontos", "Porcentagens sucessivas de casos clínicos"]],
  ["famerp2018-p1-q76", ["Análise combinatória e probabilidade", "Combinações e arranjos", "Troca de livros e revistas por combinações"]],
  ["famerp2018-p1-q78", ["Matemática financeira e proporcionalidade", "Razões, proporções e regra de três", "Consumo de ração e proporcionalidade"]],
  ["famerp2019-p1-q44", ["Zoologia e fisiologia animal", "Vertebrados e cordados", "Notocorda e tubo neural no desenvolvimento de cordados"]],
  ["famerp2019-p1-q47", ["Zoologia e fisiologia animal", "Invertebrados e artrópodes", "Morfologia e diversidade do filo Mollusca"]],
  ["famerp2019-p1-q53", ["Ligações e interações moleculares", "Forças intermoleculares", "Umectantes e ligações de hidrogênio com a água"]],
  ["famerp2019-p1-q59", ["Química orgânica", "Polímeros e biomoléculas", "Hidrólise enzimática da lactose e carboidratos"]],
  ["famerp2019-p2-q06", ["Evolução", "Origem da vida e evolução química", "Experimentos de Needham e biogênese"]],
  ["famerp2019-p2-q15", ["Mecânica", "Cinemática escalar e vetorial", "Voltas na pista e velocidade média"]],
  ["famerp2020-p1-q27", ["Brasil Império", "Segundo Reinado e política imperial", "Consolidação política do Brasil Império"]],
  ["famerp2020-p1-q64", ["Mecânica", "Gravitação universal e órbitas", "Satélite geoestacionário e órbita"]],
  ["famerp2020-p1-q75", ["Análise combinatória e probabilidade", "Princípio fundamental e permutações", "Sobreposição de cores e contagem"]],
  ["famerp2020-p1-q78", ["Matemática financeira e proporcionalidade", "Porcentagem e aumentos/descontos", "Lucro e porcentagem na compra e venda de carro"]],
  ["famerp2021-p1-q51", ["Estrutura atômica e tabela periódica", "Modelos atômicos e partículas", "Lâmpadas de gás rarefeito e transições eletrônicas de Bohr"]],
  ["famerp2021-p1-q53", ["Estequiometria", "Massa molar e número de mols", "Decomposição de clorato de potássio e cálculo de massa gasosa"]],
  ["famerp2021-p2-q15", ["Mecânica", "Gravitação universal e órbitas", "Missões espaciais e mecânica orbital"]],
  ["famerp2022-p1-q54", ["Ligações e interações moleculares", "Ligações químicas (iônica, covalente, metálica)", "Teoria de Arrhenius e condutividade elétrica de eletrólitos"]],
  ["famerp2022-p1-q60", ["Química orgânica", "Reações orgânicas", "Biocombustíveis, diesel e pegada de carbono nos transportes"]],
  ["famerp2023-p1-q42", ["Ecologia", "Impactos ambientais e conservação", "Chuva ácida e emissão de óxidos de enxofre e nitrogênio"]],
  ["famerp2023-p1-q47", ["Evolução", "Origem da vida e evolução química", "Hipóteses autotrófica e heterotrófica no surgimento da vida"]],
  ["famerp2023-p1-q61", ["Grandezas e medidas", "Análise dimensional e gráficos", "Equação dimensional de grandezas físicas"]],
  ["famerp2023-p1-q79", ["Análise combinatória e probabilidade", "Combinações e arranjos", "Pacotinhos de figurinhas e combinações"]],
  ["famerp2023-p1-q80", ["Matemática financeira e proporcionalidade", "Juros simples e compostos", "Crescimento anual do PIB e juros compostos"]],
  ["uea2024vu-q43", ["Evolução", "Origem da vida e evolução química", "Método científico e investigação biológica"]],
]);

const DEFAULT_FALLBACKS = {
  "Matemática": [
    "Álgebra",
    "Equações e inequações"
  ],
  "Física": [
    "Mecânica",
    "Cinemática escalar e vetorial"
  ],
  "Química": [
    "Química geral e inorgânica",
    "Substâncias, misturas e separação"
  ],
  "Biologia": [
    "Citologia e metabolismo celular",
    "Organelas citoplasmáticas e citoesqueleto"
  ],
  "História": [
    "História Contemporânea",
    "Mundo globalizado e contemporâneo"
  ],
  "Geografia": [
    "Geografia humana",
    "Dinâmica populacional e demografia"
  ],
  "Português": [
    "Interpretação de texto",
    "Compreensão global e inferências"
  ],
  "Literatura": [
    "Teoria e interpretação literária",
    "Leitura e análise de poemas"
  ],
  "Inglês": [
    "Compreensão textual",
    "Ideia principal e inferências"
  ],
  "Filosofia": [
    "História da filosofia",
    "Filosofia Moderna e teoria do conhecimento"
  ],
  "Sociologia": [
    "Sociedade e cultura",
    "Cultura, etnocentrismo e identidade"
  ],
  "Artes": [
    "História e teoria da arte",
    "História da arte e teoria estética"
  ]
};

const RULES = {
  "Matemática": [
    ["Análise combinatória e probabilidade", "Probabilidade simples e condicional", /probabilidade.*condicional|probabilidade simples|\bprobabilidade\b|probabil/i],
    ["Análise combinatória e probabilidade", "Combinações e arranjos", /combinac|arranjo|agrupamento|escolha de comiss|distribuicao de livros/i],
    ["Análise combinatória e probabilidade", "Princípio fundamental e permutações", /permutac|anagrama|principio fundamental|principio multiplicativo|fatorial|contagem/i],
    ["Estatística", "Médias, moda e mediana", /media ponderada|media aritmetica|mediana|moda|\bmedias\b|\bmedia\b/i],
    ["Estatística", "Gráficos, tabelas e frequências", /histograma|grafico de setores|grafico de barras|frequencia|distribuicao de frequencia|\bestatistica\b/i],
    ["Estatística", "Dispersão e desvio padrão", /desvio padrao|variancia|amplitude/i],
    ["Matemática financeira e proporcionalidade", "Juros simples e compostos", /juros|montante|capitalizac|taxa nominal|taxa efetiva/i],
    ["Matemática financeira e proporcionalidade", "Porcentagem e aumentos/descontos", /porcentagem|percentual|lucro|prejuizo|desconto/i],
    ["Matemática financeira e proporcionalidade", "Razões, proporções e regra de três", /proporcao|proporcional|regra de tres|razao|escala|divisao em partes|grandezas proporcionais|consumo de agua e variacao/i],
    ["Matemática financeira e proporcionalidade", "Aritmética e matemática básica", /minimo multiplo comum|\bmmc\b|\bmdc\b|maximo divisor|divisibilidade|calendario|notacao cientifica|operacoes basicas|fracao|fracoes|sistema binario|pensamento matematico|fluxograma.*resto da divisao|resto da divisao/i],
    ["Geometria analítica", "Circunferência no plano analítico", /geometria analitica.*circunferencia|circunferencia.*plano cartesiano|equacao da circunferencia/i],
    ["Geometria analítica", "Ponto e reta no plano", /plano cartesiano|coeficiente angular|equacao da reta|intersecao de retas|paralelismo e perpendicularismo|distancia entre pontos/i],
    ["Geometria analítica", "Distâncias, áreas e posições relativas", /geometria analitica|area de triangulo no plano|reflexoes|coordenadas/i],
    ["Geometria espacial", "Prismas e paralelepípedos", /paralelepipedo|prisma|cubo|bloco retangular/i],
    ["Geometria espacial", "Pirâmides e troncos", /piramide|tronco de/i],
    ["Geometria espacial", "Cilindros e cones", /cilindro|cone/i],
    ["Geometria espacial", "Esferas", /esfera|esferic/i],
    ["Geometria espacial", "Volumes e áreas espaciais", /geometria espacial|volume|capacidade|solido|diagonal espacial|distancias no espaco|angulos no espaco/i],
    ["Geometria plana", "Áreas de figuras planas", /area de figuras|area do triangulo|area do retangulo|area do trapezio|area hachurada|areas sombreadas|\bareas\b|\barea\b/i],
    ["Geometria plana", "Circunferência e círculo", /circunferencia|circulo|setor circular|arco|corda|raio da circunferencia/i],
    ["Geometria plana", "Triângulos e trigonometria no triângulo", /teorema de pitagoras|triangulo isosceles|triangulo equilatero|triangulo retangulo|pitagoras/i],
    ["Geometria plana", "Semelhança e congruência", /semelhanca|tales|teorema de tales|congruencia/i],
    ["Geometria plana", "Polígonos e ângulos", /poligono|hexagono|pentagono|quadrilatero|angulos internos|angulos/i],
    ["Trigonometria", "Ciclo e funções trigonométricas", /ciclo trigonometrico|seno|cosseno|tangente|funcao trigonometrica/i],
    ["Trigonometria", "Identidades e equações trigonométricas", /trigonometria|identidade trigonometrica|equacao trigonometrica|leis? dos senos|lei dos cossenos/i],
    ["Álgebra", "Sequências, PA e PG", /progressao aritmetica|progressao geometrica|\bpa\b|\bpg\b|progress|sequencia|termo geral|soma dos termos/i],
    ["Álgebra", "Funções exponenciais e logarítmicas", /logarit|exponencial/i],
    ["Álgebra", "Funções afins e quadráticas", /funcao afim|funcao quadratica|parabola|vertice da parabola|maximo de funcao|minimo de funcao|funcao do primeiro grau|funcao do segundo grau|\bfuncao\b|\bfuncoes\b/i],
    ["Álgebra", "Polinômios e equações algébricas", /polinomio|raizes complexas|teorema do resto|briot-ruffini|equacao algebrica/i],
    ["Álgebra", "Sistemas lineares e matrizes", /sistema linear|sistemas lineares|matriz|matrizes|determinante|escalonamento/i],
    ["Álgebra", "Números complexos", /numero complexo|numeros complexos|plano de argand|forma trigonometrica/i],
    ["Álgebra", "Equações e inequações", /equacao|equacoes|sistema de equacoes|inequacao|potencias|produtos notaveis|fatoracao|algebra/i],
  ],
  "Física": [
    ["Óptica", "Óptica da visão", /miopia|hipermetropia|astigmatismo|olho humano|visao|presbiopia/i],
    ["Óptica", "Lentes e instrumentos ópticos", /lente|lentes|convergente|divergente|microscopio|telescopio|luneta/i],
    ["Óptica", "Refração da luz e dispersão", /refracao|dispersao da luz|lei de snell|indice de refracao|reflexao total|angulo limite|prisma|arco-iris/i],
    ["Óptica", "Espelhos planos e esféricos", /espelho|concavo|convexo|imagem real|imagem virtual/i],
    ["Óptica", "Propagação da luz e princípios ópticos", /optica geometrica|propagacao retilinea|sombra|penumbra|camara escura|velocidade da luz|\boptica\b/i],
    ["Ondulatória e acústica", "Acústica e qualidades do som", /acustica|qualidades fisiologicas|altura do som|intensidade sonora|timbre|decibe|nivel sonoro|tubos sonoros|cordas vibrantes/i],
    ["Ondulatória e acústica", "Efeito Doppler e ressonância", /doppler|ressonancia/i],
    ["Ondulatória e acústica", "Fenômenos ondulatórios", /interferencia|difracao|polarizacao da luz|batimento/i],
    ["Ondulatória e acústica", "Características e equação das ondas", /onda|ondas|ondulatoria|comprimento de onda|frequencia|periodo|velocidade de propagacao|pulso/i],
    ["Termologia e termodinâmica", "Termodinâmica e máquinas térmicas", /termodinamica|ciclo termodinamico|maquina termica|rendimento|carnot|primeira lei da termodinamica|segunda lei da termodinamica|trabalho termodinamico/i],
    ["Termologia e termodinâmica", "Gases ideais e transformações", /gas ideal|gases|isotermica|isobarica|isovolumetrica|adiabatica|clapeyron|transformacoes gasosas/i],
    ["Termologia e termodinâmica", "Mudanças de fase e calor latente", /calor latente|mudanca de fase|ebulicao|fusao|vaporizacao|condensacao|curva de aquecimento/i],
    ["Termologia e termodinâmica", "Calorimetria e trocas de calor", /calorimetria|calor especifico|capacidade termica|troca de calor|equilibrio termico|quantidade de calor|\bcalor\b|potencia termica/i],
    ["Termologia e termodinâmica", "Termometria e dilatação térmica", /termometria|dilatacao|escala termometrica|celsius|fahrenheit|kelvin|coeficiente de dilatacao|termometro/i],
    ["Eletricidade e magnetismo", "Indução eletromagnética e transformadores", /inducao eletromagnetica|lei de faraday|lei de lenz|fluxo magnetico|transformador|gerador/i],
    ["Eletricidade e magnetismo", "Campo magnético e forças magnéticas", /campo magnetico|forca magnetica|lorentz|espectrometro|ima|imas|magnetismo|solenoide|fio percorrido/i],
    ["Eletricidade e magnetismo", "Capacitores e resistores", /capacitor|capacitancia|associacao de resistores|resistencia equivalente/i],
    ["Eletricidade e magnetismo", "Potência e energia elétrica", /potencia eletrica|energia eletrica|consumo de energia|joule|efeito joule|quilowatt/i],
    ["Eletricidade e magnetismo", "Circuitos elétricos e lei de Ohm", /circuito|lei de ohm|resistor|amperimetro|voltimetro|gerador eletrico|fem|corrente eletrica|diferenca de potencial|tensao|ddp|fusivel/i],
    ["Eletricidade e magnetismo", "Potencial e trabalho elétrico", /potencial eletrico|energia potencial eletrica|superficie equipotencial|trabalho da forca eletrica/i],
    ["Eletricidade e magnetismo", "Eletrostática e campo elétrico", /eletrostatica|carga eletrica|processos de eletrizacao|lei de coulomb|campo eletrico|blindagem eletrostatica/i],
    ["Física moderna e astrofísica", "Radiação e física nuclear", /nuclear|fissao|fusao nuclear|radioatividade|raios x|decaimento/i],
    ["Física moderna e astrofísica", "Relatividade e astrofísica", /relatividade|dilatacao temporal|contracao do espaco|astrofisica|cosmologia|nebulosa|buraco negro/i],
    ["Física moderna e astrofísica", "Efeito fotoelétrico e fótons", /efeito fotoeletrico|foton|fotons|quantizacao|funcao trabalho|dualidade onda-particula/i],
    ["Física moderna e astrofísica", "Física quântica e modelos atômicos", /bohr|modelo atomico de bohr|niveis de energia|fisica quantica|fisica moderna/i],
    ["Mecânica", "Hidrostática e empuxo", /hidrostatica|empuxo|arquimedes|pascal|pressao|manometro|densidade.*fluido|vasos comunicantes|barometro|prensa hidraulica|fluidos/i],
    ["Mecânica", "Gravitação universal e órbitas", /gravitacao|leis? de kepler|orbita|satelite|velocidade de escape|gravidade/i],
    ["Mecânica", "Estática e equilíbrio de corpos", /estatica|equilibrio|torque|momento de uma forca|centro de massa|alavanca/i],
    ["Mecânica", "Impulso e quantidade de movimento", /impulso|quantidade de movimento|colisao|choque|conservacao da quantidade de movimento/i],
    ["Mecânica", "Trabalho, potência e energia", /trabalho.*energia|energia cinetica|energia potencial|energia mecanica|conservacao da energia|potencia mecanica|rendimento mecanico/i],
    ["Mecânica", "Força de atrito e aplicações", /forca de atrito|atrito estatico|atrito cinetico|plano inclinado com atrito|\batrito\b/i],
    ["Mecânica", "Leis de Newton e dinâmica", /leis? de newton|dinamica|forca resultante|peso e normal|tensao na corda|roldana|polia|maquina de atwood/i],
    ["Mecânica", "Movimento circular", /movimento circular|\bmcu\b|\bmcqv\b|aceleracao centripeta|velocidade angular|periodo e frequencia/i],
    ["Mecânica", "Movimento uniforme e variado", /movimento uniforme|\bmu\b|\bmuv\b|movimento uniformemente variado|queda livre|lancamento vertical|lancamento horizontal|lancamento obliquo|torricelli/i],
    ["Mecânica", "Cinemática escalar e vetorial", /cinematica|velocidade media|aceleracao escalar|posicao.*tempo|grafico.*velocidade|deslocamento|distancia percorrida|\bmovimento\b/i],
    ["Mecânica", "Oscilações e movimento harmônico", /oscilacao|mhs|movimento harmonico|mola|pendulo/i],
    ["Grandezas e medidas", "Análise dimensional e gráficos", /analise dimensional|graficos?|ordem de grandeza|vetores|vetor|unidades de medida|conversao de unidades|sistema internacional/i],
    ["Grandezas e medidas", "Unidades, ordem de grandeza e vetores", /grandezas fisicas|medidas|proporcionalidade e unidades|algarismos significativos/i],
  ],
  "Química": [
    ["Eletroquímica e oxirredução", "Pilhas e potenciais de redução", /pilha|pilhas|potencial padrao|potencial de reducao|daniell|forca eletromotriz|fem/i],
    ["Eletroquímica e oxirredução", "Eletrólise e aplicações industriais", /eletrolise|leis? de faraday|galvanoplastia|anodo de sacrificio|protecao catodica/i],
    ["Eletroquímica e oxirredução", "Número de oxidação e reações redox", /oxirreducao|oxidorreducao|oxidacao|reducao|agente oxidante|agente redutor|nox|balanceamento redox/i],
    ["Equilíbrio químico e ácido-base", "pH, pOH e equilíbrio iônico", /\bph\b|\bpoh\b|equilibrio ionico|constante de acidez|ka|kb|kw|hidrolise salina|tampao|solucao tampao|indicador acido-base|titulacao/i],
    ["Equilíbrio químico e ácido-base", "Deslocamento de equilíbrio (Le Chatelier)", /le chatelier|deslocamento do equilibrio|principio de le chatelier/i],
    ["Equilíbrio químico e ácido-base", "Constante de equilíbrio (Kc e Kp)", /constante de equilibrio|\bkc\b|\bkp\b|grau de equilibrio|equilibrio homogeneo|equilibrio heterogeneo|quimico e acido-base/i],
    ["Equilíbrio químico e ácido-base", "Solubilidade e produto de solubilidade (Kps)", /produto de solubilidade|\bkps\b|precipitacao de sais|solubilidade de sais/i],
    ["Termoquímica e cinética", "Cinética química e velocidade de reação", /cinetica|velocidade da reacao|ordem de reacao|lei da velocidade|fatores que alteram a velocidade/i],
    ["Termoquímica e cinética", "Energia de ativação e catalisadores", /energia de ativacao|complexo ativado|catalisador|catalise|perfil energetico/i],
    ["Termoquímica e cinética", "Lei de Hess e energia de ligação", /lei de hess|energia de ligacao/i],
    ["Termoquímica e cinética", "Entalpia e calor de reação", /entalpia|termoquimica|calor de combustao|calor de formacao|reacao endotermica|reacao exotermica|\bdelta h\b/i],
    ["Soluções e propriedades coligativas", "Propriedades coligativas", /coligativas?|tonoscopia|ebuliometria|crioscopia|osmose|pressao osmotica|vant hoff/i],
    ["Soluções e propriedades coligativas", "Curvas de solubilidade", /curva de solubilidade|coeficiente de solubilidade|solucao saturada|insaturada|supersaturada/i],
    ["Soluções e propriedades coligativas", "Diluição e mistura de soluções", /diluicao|mistura de solucoes/i],
    ["Soluções e propriedades coligativas", "Concentrações e unidades (g/L, mol/L, título)", /concentracao|molaridade|\bmol\/l\b|titulo|ppm|densidade da solucao|\bsolucoes\b/i],
    ["Estequiometria", "Reagente limitante e reações consecutivas", /reagente limitante|reagente em excesso|reacoes consecutivas/i],
    ["Estequiometria", "Rendimento e pureza", /rendimento|grau de pureza|pureza e rendimento|impurezas/i],
    ["Estequiometria", "Leis ponderais e estequiometria simples", /leis ponderais|lavoisier|proust|proporcao estequiometrica/i],
    ["Estequiometria", "Massa molar e número de mols", /estequiometria|calculos estequiometricos|massa molar|numero de mols|volume molar|avogadro|quantidade de materia|balanceamento/i],
    ["Química orgânica", "Polímeros e biomoléculas", /polimer|polietileno|monomero|polimerizacao|biomoleculas|carboidratos|glicidios|lipideos|proteinas|aminoacidos|peptid|biodiesel|biocombustiv/i],
    ["Química orgânica", "Reações orgânicas", /reacoes organicas|substituicao|adicao|eliminacao|esterificacao|saponificacao|oxidacao de alcoois|combustao de hidrocarbonetos/i],
    ["Química orgânica", "Isomeria plana e espacial", /isomeria|isomero|enantiomero|quiral|carbono assimetrico|estereoisomeria|isomeria optica|isomeria geometrica|cis-trans/i],
    ["Química orgânica", "Funções orgânicas oxigenadas e nitrogenadas", /funcoes organicas|funcao organica|alcool|fenol|eter|aldeido|cetona|acido carboxilico|ester|amina|amida|haleto|nitrocomposto/i],
    ["Química orgânica", "Cadeias carbônicas e hibridização", /cadeia carbonica|hidrocarboneto|alcano|alceno|alcino|aromatico|benzeno|hibridizacao do carbono|formula estrutural|organica/i],
    ["Ligações e interações moleculares", "Forças intermoleculares", /interacoes intermoleculares|forcas intermoleculares|ligacao de hidrogenio|dipolo-dipolo|dipolo induzido|van der waals|london|tensao superficial|ponto de ebulicao de compostos/i],
    ["Ligações e interações moleculares", "Geometria molecular e polaridade", /geometria molecular|polaridade|momento dipolar|polar|apolar|repulsao dos pares/i],
    ["Ligações e interações moleculares", "Ligações químicas (iônica, covalente, metálica)", /ligacao ionica|ligacao covalente|ligacao metalica|ligacoes quimicas|regra do octeto|lewis|reticulo cristalino/i],
    ["Estrutura atômica e tabela periódica", "Radioatividade e reações nucleares", /radioatividade|decaimento|meia-vida|radiacao alfa|beta|gama|fissao nuclear|transmutacao/i],
    ["Estrutura atômica e tabela periódica", "Propriedades periódicas", /propriedades periodicas|raio atomico|energia de ionizacao|eletronegatividade|eletroafinidade|tabela periodica/i],
    ["Estrutura atômica e tabela periódica", "Distribuição eletrônica e íons", /distribuicao eletronica|camadas|subniveis|ions|cation|anion|linus pauling/i],
    ["Estrutura atômica e tabela periódica", "Modelos atômicos e partículas", /modelos atomicos|dalton|thomson|rutherford|bohr|protons|neutrons|eletrons|numero atomico|numero de massa|isotopos|isobaros|isotonos|estrutura atomica/i],
    ["Química geral e inorgânica", "Gases e transformações gasosas", /gases e transformacoes|clapeyron|pressao de gas|volume gasoso|gas ideal/i],
    ["Química geral e inorgânica", "Química ambiental e poluição", /quimica ambiental|chuva acida|efeito estufa|ozonio|camada de ozonio|aquecimento global|poluicao|lixo|reciclagem|sustentabilidade/i],
    ["Química geral e inorgânica", "Reações inorgânicas e hidrólise", /reacoes inorganicas|dupla troca|simples troca|sintese|decomposicao|precipitacao|neutralizacao/i],
    ["Química geral e inorgânica", "Funções inorgânicas (ácidos, bases, sais, óxidos)", /funcoes inorganicas|acidos|bases|sais|oxidos|acido sulfurico|acido cloridrico|hidroxido|nacl|carbonato/i],
    ["Química geral e inorgânica", "Substâncias, misturas e separação", /separacao de misturas|destilacao|filtracao|decantacao|centrifugacao|substancia pura|mistura homogenea|mistura heterogenea|estados fisicos|mudancas de estado|materia e transformacoes|densidade|tratamento de agua|quimica geral|metodologia cientifica|experimentacao/i],
  ],
  "Biologia": [
    ["Citologia e metabolismo celular", "Organelas citoplasmáticas e citoesqueleto", /organela|organelas|reticulo endoplasmatico|complexo golgiense|lisossomo|peroxissomo|mitocondria|cloroplasto|ribossomo|citoesqueleto|vacuolo|centriolo|celular animal|celular vegetal/i],
    ["Citologia e metabolismo celular", "Membrana plasmática e transportes", /membrana plasmatica|fosfolipid|transporte ativo|transporte passivo|difusao simples|difusao facilitada|osmose|bomba de sodio|endocitose|exocitose|permeabilidade/i],
    ["Citologia e metabolismo celular", "Ciclo celular e divisão (mitose e meiose)", /ciclo celular|mitose|meiose|interfase|anafase|metafase|profase|telofase|crossing-over|divisao celular|cancer|ploidia/i],
    ["Citologia e metabolismo celular", "Respiração celular e fermentação", /respiracao celular|glicolise|ciclo de krebs|cadeia respiratoria|fermentacao|atp|fosforilacao oxidativa|metabolismo energetico/i],
    ["Citologia e metabolismo celular", "Fotossíntese e quimiossíntese", /fotossintese|fase clara|fase escura|ciclo de calvin|clorofila|quimiossintese/i],
    ["Citologia e metabolismo celular", "Síntese proteica e enzimas", /sintese proteica|traducao|transcricao|ribossomo.*proteina|enzima|enzimas|catalise biologica|desnaturacao|cinetica enzimatica|citologia/i],
    ["Genética e biologia molecular", "Biotecnologia e engenharia genética", /biotecnologia|transgen|terapia genica|clonagem|pcr|eletroforese|crispr|dna recombinante|enzima de restricao|teste de paternidade/i],
    ["Genética e biologia molecular", "Herança ligada ao sexo e cariótipo", /ligada ao sexo|daltonismo|hemofilia|cromossomo x|cromossomo y|cariotipo|aneuploidia|trissomia|sindrome de down|gene sry/i],
    ["Genética e biologia molecular", "Alelos múltiplos e tipos sanguíneos", /sistema abo|fator rh|tipos sanguineos|aglutinacao|alelos multiplos|polialelia/i],
    ["Genética e biologia molecular", "Primeira e segunda leis de Mendel", /leis? de mendel|primeira lei|segunda lei|monoibridismo|diibridismo|dominancia|recessivo|heterozigoto|homozigoto|hereditariedade|alelo|alelos|genotipo|fenotipo|heranca|linkage|epistasia|pleiotropia/i],
    ["Genética e biologia molecular", "Estrutura do DNA, RNA e replicação", /dna|rna|replicao|replicacao|duplicacao do dna|acidos nucleicos|nucleotideos|base nitrogenada|mutacao|codigo genetico|genetica molecular|expressao genica/i],
    ["Evolução", "Especiação e cladogramas", /especiacao|isolamento reprodutivo|cladograma|filogenia|arvore filogenetica|ancestral comum|homologia|analogia|convergencia evolutiva/i],
    ["Evolução", "Seleção natural e adaptação", /selecao natural|adaptacao|mimetismo|camuflagem|resistencia a antibioticos|selecao sexual|deriva genetica/i],
    ["Evolução", "Teorias evolutivas e darwinismo", /darwin|lamarck|neodarwinismo|teoria sintetica da evolucao|evolucao|evolucion/i],
    ["Evolução", "Origem da vida e evolução química", /origem da vida|evolucao quimica|oparin|haldane|miller|uray|panspermia|geracao espontanea|biogenese|abiogenese|pasteur/i],
    ["Ecologia", "Impactos ambientais e conservação", /impactos ambientais|poluicao|eutrofizacao|biomagnificacao|bioacumulacao|desmatamento|queimadas|aquecimento global|efeito estufa|acidificacao oceanica|especies invasoras|conservacao|unidades de conservacao|lixo/i],
    ["Ecologia", "Dinâmica de populações e biomas", /dinamica de populacoes|potencial biotico|capacidade de suporte|bioma|biomas|cerrado|mata atlantica|caatinga|amazonia|pantanal|pampas|sucessao ecologica/i],
    ["Ecologia", "Relações ecológicas", /relacoes ecologicas|mutualismo|protocooperacao|comensalismo|inquilinismo|parasitismo|predacao|competicao|herbivoria|canibalismo/i],
    ["Ecologia", "Ciclos biogeoquímicos", /ciclos biogeoquimicos|ciclo do carbono|ciclo do nitrogenio|fixacao biologica|ciclo da agua|ciclo do fosforo/i],
    ["Ecologia", "Cadeias e teias alimentares", /cadeia alimentar|teia alimentar|niveis troficos|produtores|consumidores|decompositores|fluxo de energia|piramides ecologicas|nicho ecologico|habitat|\becologia\b/i],
    ["Fisiologia humana", "Sistema imunológico e vacinas", /sistema imunologico|imunidade|anticorpos|antigenos|linfocitos|vacina|vacinacao|soro|soroterapia|resposta imune|fagocitose/i],
    ["Fisiologia humana", "Sistema reprodutor e embriologia humana", /sistema reprodutor|reproducao humana|fecundacao|espermatozoide|ovulo|menstruacao|ciclo menstrual|anticoncepcional|embriologia|blastocisto|gastrulacao|neurulacao|anexos embrionarios|placenta/i],
    ["Fisiologia humana", "Sistema endócrino e hormônios", /sistema endocrino|hormonio|hormonios|hipofise|tireoide|pancreas|insulina|glucagon|adrenal|cortisol|adrenalina|estrogeno|progesterona|testosterona|\bgh\b|diabetes/i],
    ["Fisiologia humana", "Sistema nervoso e órgãos dos sentidos", /sistema nervoso|neuronio|sinapse|neurotransmissor|potencial de acao|arco reflexo|encefalo|cerebro|medula espinhal|visao|audicao|olfato|paladar/i],
    ["Fisiologia humana", "Sistema excretor e osmorregulação", /sistema excretor|rins|nefron|filtracao glomerular|reabsorcao|ureia|acido urico|amonia|urina|osmorregulacao|adh|aldosterona/i],
    ["Fisiologia humana", "Sistema respiratório e trocas gasosas", /sistema respiratorio|pulmoes|alveolos|hematose|trocas gasosas|ventilacao|diafragma|transporte de gases|hemoglobina|oxigenio|gas carbonico/i],
    ["Fisiologia humana", "Sistema circulatório e sangue", /sistema circulatorio|coracao|vasos sanguineos|arterias|veias|capilares|pressao arterial|sangue|hemacias|plaquetas|coagulacao|pequena circulacao|grande circulacao/i],
    ["Fisiologia humana", "Sistema digestório e nutrição", /sistema digestorio|digestao|estomago|intestino|enzimas digestivas|suco gastrico|bile|figado|absorcao de nutrientes|nutricao|vitaminas|fibras alimentares|obtencao de agua|\bfisiologia humana\b/i],
    ["Diversidade e classificação", "Vírus e viroses", /virus|virose|viroses|covid|dengue|hiv|influenza|capsideo|retrovirus|bacteriofago|sarampo|febre amarela/i],
    ["Diversidade e classificação", "Bactérias e arqueas", /bacteria|bacterias|bacteriana|procarionte|arquea|arqueas|parede celular bacteriana|conjugacao|plasmideo|cianobacteria/i],
    ["Diversidade e classificação", "Protozoários, algas e fungos", /protozoario|protozoarios|chagas|leishmaniose|malaria|ameba|alga|algas|fungo|fungos|levedura|micose|liquen/i],
    ["Diversidade e classificação", "Sistemática e taxonomia", /taxonomia|sistematica|regras de nomenclatura|dominios|reinos|filo|classe|ordem|familia|genero|especie|classificacao dos seres vivos/i],
    ["Botânica e fisiologia vegetal", "Fisiologia vegetal, condução e hormônios", /fisiologia vegetal|xilema|floema|seiva bruta|seiva elaborada|transpiracao|estomatos|hormonios vegetais|auxina|giberelina|citocinina|etileno|fotoperiodismo|fitocromo|gravitropismo|fototropismo/i],
    ["Botânica e fisiologia vegetal", "Morfologia, tecidos e histologia vegetal", /histologia vegetal|meristema|parenquima|colenquima|esclerenquima|epiderme vegetal|raiz|caule|folha/i],
    ["Botânica e fisiologia vegetal", "Grupos vegetais e reprodução", /briofita|pteridofita|gimnosperma|angiosperma|polinizacao|flor|flores|fruto|frutos|semente|sementes|gametofito|esporofito|dupla fecundacao|\bbotanica\b|vegetal|vegetais/i],
    ["Zoologia e fisiologia animal", "Parasitologia e verminoses", /parasit|verminose|lombriga|ascaridiase|esquistossomose|tenia|teníase|cisticercose|ancilostomose|filariose|platelminto|nematelminto/i],
    ["Zoologia e fisiologia animal", "Fisiologia animal comparada", /fisiologia animal|excrecao comparada|circulacao comparada|respiracao comparada|termorregulacao|pecilotermicos|homeotermicos/i],
    ["Zoologia e fisiologia animal", "Vertebrados e cordados", /vertebrado|vertebrados|peixes|anfibios|repteis|aves|mamiferos|cordados|notocorda/i],
    ["Zoologia e fisiologia animal", "Invertebrados e artrópodes", /invertebrados|poriferos|cnidarios|anelideos|moluscos|artropodes|insetos|crustaceos|aracnideos|equinodermos|metamorfose|zoologia|\banimal\b|\banimais\b/i],
  ],
  "História": [
    ["Brasil República", "Ditadura Militar (1964-1985)", /ditadura|golpe de 1964|atos institucionais|\bai-5\b|milagre economico|guerrilha|anistia|diretas ja|violencia da ditadura/i],
    ["Brasil República", "Era Vargas (1930-1945)", /era vargas|revolucao de 1930|constituicao de 1934|estado novo|clt|peleguismo|queremismo|getulio vargas|\bvargas\b|olga benario|prestes/i],
    ["Brasil República", "República da Espada e República Velha", /republica da espada|republica velha|cafe com leite|coronelismo|politica dos governadores|revolta da vacina|revolta da chibata|canudos|contestado|tenentismo|semana de arte moderna de 1922|coluna prestes|cangaco|padre cicero|caipira|modernizacao paulista|imigracao e ideologias|liberalismo oligarquico|primeira republica|belle epoque|borracha|oligarqu|corticos|insalubridade/i],
    ["Brasil República", "Período Democrático (1945-1964)", /periodo democratico|populismo|dutra|juscelino kubitschek|\bjk\b|brasilia|janio quadros|joao goulart|reformas de base|spvea/i],
    ["Brasil República", "Redemocratização e Nova República", /redemocratizacao|nova republica|constituicao de 1988|constituinte|sarney|plano cruzado|collor|impeachment|plano real|fhc|governo lula|programa nuclear brasileiro|desigualdade racial e democracia/i],
    ["Brasil Império", "Segundo Reinado e política imperial", /segundo reinado|d\. pedro ii|parlamentarismo as avessas|partido liberal|partido conservador|guerra do paraguai|tarifa alves branco|era maua|propaganda monarquica|brasil imperio|monarquia no brasil|ordem imperial/i],
    ["Brasil Império", "Economia cafeeira e trabalho escravizado e imigrante", /cafeicultura|lavoura cafeeira|vale do paraiba|oeste paulista|trabalho imigrante|parceria na lavoura|imigracao subvencionada|leis abolicionistas|lei eusebio de queiros|lei do ventre livre|lei dos sexagenarios|lei aurea|abolicionismo|escravid|trabalho escravo|escravizados|esforcos de estimulo a imigracao|cafe, imigracao|trabalho livre e escravo/i],
    ["Brasil Império", "Período Regencial e revoltas", /periodo regencial|regencia|guarda nacional|ato adicional|farroupilha|cabanagem|balaiada|sabina|revolta dos males|golpe da maioridade|conflitos no para/i],
    ["Brasil Império", "Independência e Primeiro Reinado", /independencia do brasil|primeiro reinado|d\. pedro i|constituicao da mandioca|constituicao de 1824|confederacao do equador|guerra da cisplatina|noite das garrafadas/i],
    ["Brasil Colonial", "Movimentos emancipacionistas", /inconfidencia mineira|conjuracao baiana|conjuracao dos alfaiates|revolucao pernambucana de 1817|rebelioes no brasil colonial|sedicoes/i],
    ["Brasil Colonial", "Sociedade colonial e administração", /governo-geral|capitanias hereditarias|camaras municipais|jesuitas|missoes|periodo joanino|corte no brasil|abertura dos portos|mulheres e familia no brasil|comercio ambulante|abastecimento em minas|economia colonial|antigo sistema colonial|sociedade colonial|administracao colonial|mundo atlantico|monarquia iberica|colonizacao e fronteiras/i],
    ["Brasil Colonial", "Expansão territorial e mineração", /bandeirantes|bandeirantismo|ciclo do ouro|mineracao|quinto|derrama|guerra dos emboabas|integracao da amazonia/i],
    ["Brasil Colonial", "Economia açucareira e escravidão", /engenho|cana-de-acucar|acucar|escravidao africana|trafico negreiro|quilombos|palmares|invasoes holandesas|mauricio de nassau|canavieir|albert eckhout/i],
    ["Brasil Colonial", "Primeiros contatos e indígenas", /pau-brasil|escambo|indigenas|antropofagia|carta de caminha|primeiros contatos|canibalismo|representacoes indigenas|brasil colonial/i],
    ["História Contemporânea", "Mundo globalizado e contemporâneo", /globalizacao|neoliberalismo|queda do muro de berlim|fim da uniao sovietica|atentados de 11 de setembro|primavera arabe|conflitos no oriente medio|desigualdade na ciencia|capitalismo contemporaneo|empresas transnacionais|investidores|banco mundial|ucrania|iraniana|contracultura/i],
    ["História Contemporânea", "Guerra Fria e descolonização", /guerra fria|cortina de ferro|plano marshall|doutrina truman|otan|pacto de varsovia|crise dos misseis|guerra da coreia|guerra do vietna|descolonizacao|apartheid|conferencia de bandung|assembleia geral da onu|onu|resolucoes da onu|decolonial|pan-americanismo/i],
    ["História Contemporânea", "Segunda Guerra Mundial", /segunda guerra|holocausto|nazismo|fascismo|eixo|aliados|dia d|stalingrado|hiroshima|nagasaki|feb|brasil na segunda guerra|pos-guerra|alemanha nazista/i],
    ["História Contemporânea", "Crise de 1929 e regimes totalitários", /crise de 1929|grande depressao|new deal|totalitarismo|nazifascismo|fascismo italiano|mussolini|hitler|stalinismo|franquismo|salazarismo|crise do liberalismo/i],
    ["História Contemporânea", "Primeira Guerra Mundial e Revolução Russa", /primeira guerra|trincheiras|tratado de versalhes|revolucao russa|bolcheviques|lenin|paz, pao e terra|uniao sovietica|aliancas politico-militares/i],
    ["História Contemporânea", "Imperialismo e Neocolonialismo", /imperialismo|neocolonialismo|partilha da africa|conferencia de berlim|guerra dos boeres|guerra do opio|revolta dos sipaios|doutrina monroe|expansao territorial dos estados unidos|politica dos estados unidos|relacoes interamericanas|mercado mundial|capitalismo britanico/i],
    ["História Contemporânea", "Revoluções Industriais e movimentos sociais", /revolucao industrial|maquina a vapor|capitalismo industrial|ludismo|cartismo|socialismo|marxismo|anarquismo|sindicatos|trabalho infantil e feminino|restauracao europeia|independencias da venezuela|independencia da america espanhola|independencia do peru|independencias e identidade/i],
    ["História Contemporânea", "Revolução Francesa e Era Napoleônica", /revolucao francesa|queda da bastilha|jacobinos|girondinos|declaracao dos direitos do homem|fase do terror|robespierre|napoleao|era napoleonica|bloqueio continental|congresso de viena|independencias latino-americanas/i],
    ["História Moderna", "Iluminismo e revoluções liberais", /iluminismo|voltaire|montesquieu|rousseau|locke|liberalismo|despotismo esclarecido|independencia dos eua|revolucao gloriosa|revolucao puritana|inglaterra no seculo xvii|westfalia/i],
    ["História Moderna", "Absolutismo e mercantilismo", /absolutismo|direito divino|maquiavel|hobbes|bossuet|luis xiv|mercantilismo|balanca comercial|metalismo|pacto colonial|formacao do estado moderno|antigo regime/i],
    ["História Moderna", "Expansão marítima e colonização", /expansao maritima|grandes navegacoes|pioneirismo portugues|tratado de tordesilhas|conquista da america|maias|incas|astecas|hispano-americana|colonizacao espanhola|historia moderna/i],
    ["História Moderna", "Reformas religiosas", /reforma protestante|lutero|calvino|anglicanismo|contrarreforma|concilio de trento|inquisicao|companhia de jesus/i],
    ["História Moderna", "Renascimento cultural e científico", /renascimento|humanismo|antropocentrismo|heliocentrismo|leonardo da vinci|michelangelo|galileu|copernico|imprensa/i],
    ["História Medieval", "Crise do feudalismo e Renascimento comercial", /peste negra|guerra dos cem anos|renascimento comercial|burguesia|feiras medievais|rotas comerciais|cruzadas|monarquias nacionais/i],
    ["História Medieval", "Mundo islâmico e Império Bizantino", /bizantino|constantinopla|justiniano|islamismo|maome|expansao arabe/i],
    ["História Medieval", "Igreja Católica e cultura medieval", /igreja catolica medieval|clero|teocentrismo|escolastica|tomas de aquino|catedrais|mosteiros|visao de mundo/i],
    ["História Medieval", "Feudalismo e sociedade medieval", /feudalismo|feudo|senhor feudal|servo|servidao|corveia|talha|suserania e vassalagem|sociedade estamental|\bidade media\b|medieval|visigodo/i],
    ["História Antiga", "Roma Antiga (República e Império)", /roma antiga|monarquia romana|republica romana|patricios|plebeus|guerras punicas|irmaos graco|triunvirato|julio cesar|imperio romano|pax romana|cristianismo em roma|crise do imperio romano|invasoes barbaras|imperios da antiguidade/i],
    ["História Antiga", "Grécia Antiga e democracia", /grecia antiga|polis|atenas|esparta|democracia ateniense|guerras medicas|guerra do peloponeso|periodo helenistico|alexandre|macedonia|helenismo|filosofia grega|mitologia grega|grega/i],
    ["História Antiga", "Antiguidade Oriental (Egito e Mesopotâmia)", /antiguidade oriental|egito antigo|farao|piramides|rio nilo|mesopotamia|sumerios|babilonia|hamurabi|escrita cuneiforme|hebreus|monoteismo|fenicios|persas|reino de mali|africa antiga|historia antiga/i],
    ["História, fontes e cultura", "História da arte e cultura material", /historia da arte|cultura material|patrimonio historico|fontes historicas|historiografia|memoria social/i],
    ["História, fontes e cultura", "Teoria da história, memória e patrimônio", /teoria da historia|memoria|patrimonio|arqueologia|narrativa historica|historia, fontes|historia geral/i],
  ],
  "Geografia": [
    ["Cartografia", "Sensoriamento remoto e geotecnologias", /sensoriamento remoto|satelite|geoprocessamento|\bsig\b|\bgps\b|drones|imagens de satelite/i],
    ["Cartografia", "Cartografia temática e leitura de mapas", /cartografia tematica|anamorfose|mapa tematico|curvas de nivel|isolinhas|perfil topografico|leitura de mapas/i],
    ["Cartografia", "Escalas, projeções e coordenadas", /escala|escalas|projecoes cartograficas|mercator|peters|coordenadas geograficas|latitude|longitude|fusos horarios|\bcartografia\b/i],
    ["Geografia física", "Vegetação e domínios morfoclimáticos", /dominios morfoclimaticos|ab saber|biomas brasileiros|cerrado|mata atlantica|caatinga|floresta amazonica|mata dos cocais|mata de araucarias|pantanal|campos|pradarias|savanas|tundra|taiga|vegetacao|mangue|manguezais|ecossistemas costeiros|zona costeira/i],
    ["Geografia física", "Pedologia e solos", /solos|pedologia|terra roxa|massape|lixiviacao|laterizacao|arenizacao|desertificacao|erosao do solo|conservacao do solo|serrapilheira|reciclagem de nutrientes|materia organica/i],
    ["Geografia física", "Hidrografia e bacias hidrográficas", /hidrografia|bacia hidrografica|bacias|aquifero|aquifero guarani|aquifero turkana|bacia amazonica|bacia do sao francisco|bacia do parana|regime fluvial|foz|meandros|vertentes/i],
    ["Geografia física", "Climatologia e zonas climáticas", /climatologia|clima|massas de ar|massa polar|massa equatorial|el nino|la nina|chuvas orograficas|chuvas convectivas|chuvas frontais|efeito estufa natural|inversao termica|ilhas de calor|zonas climaticas|atmosfera|circulacao atmosferica/i],
    ["Geografia física", "Geomorfologia e relevo", /geomorfologia|relevo|planalto|planicie|depressao|tectonica de placas|placas tectonicas|terremoto|tsunami|vulcanismo|deriva continental|intemperismo|agentes internos|agentes externos|rochas|ciclo das rochas|sedimentar|metamorfica|magmatica/i],
    ["Geografia humana", "Problemas socioespaciais e segregação", /segregacao socioespacial|favelizacao|periferizacao|gentrificacao|violencia urbana|saneamento basico|deficit habitacional|moradia|exclusao social/i],
    ["Geografia humana", "Urbanização e rede urbana", /urbanizacao|rede urbana|hierarquia urbana|metropole|megalópole|megacity|conurbacao|crescimento urbano|especulacao imobiliaria|mobilidade urbana|cidades/i],
    ["Geografia humana", "Migrações nacionais e internacionais", /migracao|migracoes|emigracao|imigracao|refugiados|deslocados internos|exodo rural|migracao pendular|transumancia|migracao de retorno|xenofobia|fluxos migratorios/i],
    ["Geografia humana", "Dinâmica populacional e demografia", /demografia|populacao|taxa de natalidade|taxa de mortalidade|fecundidade|crescimento vegetativo|transicao demografica|piramide etaria|envelhecimento da populacao|teoria malthusiana|densidade demografica|povoado|populoso|\bgeografia humana\b/i],
    ["Geografia econômica", "Transportes, logística e telecomunicações", /transportes|modal|ferrovia|rodovia|hidrovia|aeroviario|logistica|cabotagem|redes de comunicacao|fluxos e conexoes/i],
    ["Geografia econômica", "Matriz energética e recursos minerais", /matriz energetica|matriz eletrica|petroleo|pre-sal|gas natural|carvao mineral|energia hidreletrica|energia solar|energia eolica|biocombustiveis|mineracao|quadrilatero ferrifero|carajas/i],
    ["Geografia econômica", "Industrialização e modelos de produção", /industrializacao|modelos de producao|taylorismo|fordismo|toyotismo|concentracao industrial|desconcentracao industrial|polos tecnologicos|tecnopolos|industria 4\.0/i],
    ["Geografia econômica", "Espaço agrário e agropecuária", /espaco agrario|agropecuaria|agricultura|agronegocio|fronteira agricola|matopiba|concentracao fundiaria|reforma agraria|latifundio|agricultura familiar|modernizacao do campo|commodities|\bgeografia economica\b/i],
    ["Geopolítica e relações internacionais", "Ordem multipolar e organizações internacionais", /ordem mundial|guerra fria|multipolaridade|unipolaridade|onu|conselho de seguranca|omc|organizacao mundial do comercio|fmi|banco mundial|ocde|g7|g20/i],
    ["Geopolítica e relações internacionais", "Conflitos regionais e tensões geopolíticas", /conflitos|tensoes geopoliticas|oriente medio|israel|palestina|gaza|ucrania|russia|otan|mar do sul da china|fronteiras|disputas territoriais|separatismo/i],
    ["Geopolítica e relações internacionais", "Blocos econômicos e comércio internacional", /blocos economicos|uniao europeia|mercosul|usmca|nafta|brics|balanca comercial|protecionismo|livre comercio|tarifas|comercio bilateral|canal do panama|canal de suez/i],
    ["Geopolítica e relações internacionais", "Globalização e divisão internacional do trabalho", /globalizacao|divisao internacional do trabalho|\bdit\b|transnacionais|multinacionais|cadeias globais de valor|financeirizacao|comercio internacional|\bgeopolitica\b|china|insercao global/i],
    ["Meio ambiente e sustentabilidade", "Desenvolvimento sustentável e transição ecológica", /desenvolvimento sustentavel|sustentabilidade|transicao energetica|economia circular|solucoes baseadas na natureza|creditos de carbono|pegada ecologica/i],
    ["Meio ambiente e sustentabilidade", "Conferências e acordos ambientais", /acordo de paris|protocolo de kyoto|conferencias da onu|rio-92|rio\+20|cop|protocolo de montreal|protocolo de cartagena/i],
    ["Meio ambiente e sustentabilidade", "Mudanças climáticas e efeito estufa", /mudancas climaticas|aquecimento global|efeito estufa|descongelamento|aumento do nivel do mar|eventos extremos|ipcc/i],
    ["Meio ambiente e sustentabilidade", "Impactos ambientais e poluição", /impactos ambientais|poluicao das aguas|poluicao atmosferica|desmatamento|queimadas|perda de biodiversidade|residuos solidos|lixo urbano|contaminacao|desastres ambientais|meio ambiente|geografia geral/i],
  ],
  "Português": [
    ["Produção textual", "Redação dissertativo-argumentativa", /redacao|dissertativo-argumentativa|producao de texto|producao textual|tema da redacao|proposta de redacao|redacao dissertativa/i],
    ["Produção textual", "Estratégias argumentativas e tese", /estrategias argumentativas|tese|argumento de autoridade|contra-argumentacao|ponto de vista|projeto de texto/i],
    ["Linguagem e discurso", "Modalização e discurso citado (direto/indireto)", /modalizacao|discurso direto|discurso indireto|discurso indireto livre|marcas de subjetividade|polifonia|enunciacao|historicidade/i],
    ["Linguagem e discurso", "Funções da linguagem", /funcoes da linguagem|funcao emotiva|funcao referencial|funcao conativa|funcao apelativa|funcao metalinguistica|funcao fatica|funcao poetica/i],
    ["Linguagem e discurso", "Variação linguística e norma-padrão", /variacao linguistica|variedades linguisticas|dialeto|socioleto|norma-padrao|norma culta|registro formal|registro informal|coloquial|preconceito linguistico|estrangeirismo/i],
    ["Sintaxe", "Pontuação e uso da vírgula", /pontuacao|uso da virgula|virgula|dois-pontos|ponto e virgula|travessao|aspas|parenteses/i],
    ["Sintaxe", "Regência verbal, nominal e crase", /regencia verbal|regencia nominal|crase|emprego do sinal indicativo de crase/i],
    ["Sintaxe", "Concordância verbal e nominal", /concordancia verbal|concordancia nominal|concordancia do verbo/i],
    ["Sintaxe", "Período composto por coordenação e subordinação", /periodo composto|oracoes coordenadas|oracoes subordinadas|oracao subordinada substantiva|oracao subordinada adjetiva|oracao subordinada adverbial|oracoes reduzidas|conectivos oracionais|relacoes entre oracoes/i],
    ["Sintaxe", "Termos acessórios da oração", /adjunto adnominal|adjunto adverbial|aposto|vocativo/i],
    ["Sintaxe", "Termos essenciais e integrantes da oração", /sujeito|predicado|objeto direto|objeto indireto|complemento nominal|agente da passiva|termos da oracao|voz passiva|ordem dos termos|\bsintaxe\b/i],
    ["Morfologia", "Pronomes e emprego pronominal", /pronomes|pronome pessoal|pronome possessivo|pronome demonstrativo|pronome relativo|colocacao pronominal|proclise|enclise|mesoclise|referenc.*pronominal/i],
    ["Morfologia", "Verbos: tempos, modos e conjugação", /verbos|tempos verbais|modos verbais|presente do subjuntivo|pretérito|imperativo|formas nominais|infinitivo|gerundio|participio|conjugacao/i],
    ["Morfologia", "Classes de palavras", /classes? de palavras|substantiv|adjetiv|\\bartigos?\\b.*(definid|indefinid)|numeral|adverb|preposic|conjuncao|interjeic/i],
    ["Morfologia", "Estrutura e formação de palavras", /formacao de palavras|derivacao prefixal|derivacao sufixal|parassintetica|composicao|aglutinacao|justaposicao|radical|prefixo|sufixo|\bmorfologia\b/i],
    ["Semântica e coesão", "Ambiguidade e efeitos de sentido", /ambiguidade|duplo sentido|efeitos de sentido|trocadilho|humor verbal/i],
    ["Semântica e coesão", "Figuras de linguagem", /figuras de linguagem|metafora|metonimia|antitese|paradoxo|hiperbole|eufemismo|ironia|personificacao|prosopopeia|pleonasmo|alitera|sinestesia/i],
    ["Semântica e coesão", "Sinonímia, antonímia e polissemia", /sinonimia|antonimia|polissemia|homonimia|paronimia|sentido conotativo|sentido denotativo|denotac|conotac|semantica/i],
    ["Semântica e coesão", "Conectivos e conjunções", /conectivos|conjuncoes|valor semantico da conjuncao|coesao sequencial|relacao de causa|consequencia|concessao|oposicao|condicao|proporcao|finalidade/i],
    ["Semântica e coesão", "Coesão referencial e sequencial", /coesao|coesao referencial|anafora|catafora|deixis|mecanismos de coesao/i],
    ["Interpretação de texto", "Intertextualidade e relações entre textos", /intertextualidade|parodia|parafrase|dialogo entre textos|relacao entre textos/i],
    ["Interpretação de texto", "Ironia, humor e duplo sentido", /ironia|humor|sarcasmo|satira/i],
    ["Interpretação de texto", "Tirinhas, charges e multimodalidade", /tirinha|tira|charge|cartum|meme|linguagem verbal e nao verbal|multimodalidade|infografico/i],
    ["Interpretação de texto", "Gêneros e tipos textuais", /generos textuais|tipos textuais|narracao|dissertacao|descricao|injuntivo|cronica|conto|noticia|reportagem|artigo de opiniao|editorial/i],
    ["Interpretação de texto", "Compreensão global e inferências", /interpretacao de texto|compreensao textual|inferencia|intencao do autor|ideia central|tema do texto|leitura e interpretacao|lingua portuguesa/i],
  ],
  "Literatura": [
    ["Literatura contemporânea", "Intertextualidade na literatura atual", /intertextualidade|literatura contemporanea e memoria|reescrita|pos-modernismo/i],
    ["Literatura contemporânea", "Literatura afro-brasileira e indígena", /literatura afro|escritoras negras|carolina maria de jesus|conceicao evaristo|indigena|krenak/i],
    ["Literatura contemporânea", "Poesia e prosa contemporânea", /poesia contemporanea|prosa contemporanea|contos contemporaneos|cronica contemporanea|literatura contemporanea|marcio souza/i],
    ["Escolas e períodos literários", "Modernismo (3ª fase / Geração de 45)", /geracao de 45|clarice lispector|guimaraes rosa|joao cabral de melo neto|morte e vida severina|a hora da estrela|grande sertao: veredas/i],
    ["Escolas e períodos literários", "Modernismo (1ª e 2ª fases)", /modernismo|semana de 22|mario de andrade|oswald de andrade|manuel bandeira|drummond|carlos drummond|graciliano ramos|vidas secas|jorge amado|capitaes da areia|vinicius de moraes|cecilia meireles|macunaima/i],
    ["Escolas e períodos literários", "Pré-Modernismo", /pre-modernismo|euclides da cunha|os sertoes|lima barreto|triste fim de policarpo quaresma|monteiro lobato|augusto dos anjos/i],
    ["Escolas e períodos literários", "Parnasianismo e Simbolismo", /parnasianismo|olavo bilac|alberto de oliveira|raundo correia|simbolismo|cruz e sousa|alphonsus de guimaraens/i],
    ["Escolas e períodos literários", "Realismo e Naturalismo", /realismo|machado de assis|dom casmurro|memorias postumas de bras cubas|quincas borba|o alienista|naturalismo|aluisio azevedo|o cortico|raul pompeia|o ateneu/i],
    ["Escolas e períodos literários", "Romantismo", /romantismo|goncalves dias|alvares de azevedo|castro alves|jose de alencar|iracema|o guarani|senhora|memorias de um sargento de milicias|manuel antonio de almeida/i],
    ["Escolas e períodos literários", "Arcadismo", /arcadismo|neoclassicismo|claudio manuel da costa|tomas antonio gonzaga|marilia de dirceu|cartas chilenas|inconfidencia|fugere urbem|carpe diem|locus amoenus/i],
    ["Escolas e períodos literários", "Classicismo, Quinhentismo e Barroco", /camoes|os lusiadas|quinhentismo|carta de caminha|padre antonio vieira|sermoes|gregorio de matos|boca do inferno|barroco|gil vicente|auto da barca do inferno|humanismo/i],
    ["Teoria e interpretação literária", "Leitura e análise de poemas", /leitura de poemas|analise de poema|poema|poesia|estrofe|versos|rima|metrificacao|soneto|eu lirico|subjetividade lirica/i],
    ["Teoria e interpretação literária", "Estrutura da narrativa e foco narrativo", /estrutura da narrativa|foco narrativo|narrador|tempo psicologico|tempo cronologico|espaco|personagens|enredo|climax|desfecho/i],
    ["Teoria e interpretação literária", "Gêneros literários e recursos estilísticos", /generos literarios|genero lirico|genero epico|genero dramatico|teatro|recursos estilisticos|figuras poeticas|teoria literaria|literatura brasileira e portuguesa|fabula|oposicao de sentidos|metonimia|metalinguagem|autorreferencia|discurso indireto livre|fusao de vozes|cancao/i],
  ],
  "Inglês": [
    ["Gramática e coesão", "Graus de adjetivos e estruturas comparativas", /comparative|superlative|comparacao|graus dos adjetivos|as \.\.\. as/i],
    ["Gramática e coesão", "Verbos modais e tempos verbais", /modal verbs|modais|verb tenses|tempos verbais|simple past|present perfect|future|conditional|passive voice|modalizacao verbal/i],
    ["Gramática e coesão", "Referência pronominal", /pronoun reference|referencia pronominal|referencing|pronome|it refers to|referente/i],
    ["Gramática e coesão", "Conectivos e marcadores discursivos", /connectives|linkers|conjunctions|discourse markers|however|although|therefore|besides|conectivos|coesao|sintaxe e vocabulario/i],
    ["Vocabulário e semântica", "Expressões idiomáticas e phrasal verbs", /idioms|idiomatic expressions|phrasal verbs|expressoes idiomaticas/i],
    ["Vocabulário e semântica", "Sinônimos, antônimos e falsos cognatos", /synonyms|antonyms|false friends|falsos cognatos|sinonimos/i],
    ["Vocabulário e semântica", "Significado contextual de palavras", /vocabulary|in context|means|closest in meaning|vocabulario|significado de palavras|semantica/i],
    ["Compreensão textual", "Gêneros textuais em língua inglesa", /text genres|advertisement|campanha publicitaria|news article|essay|biography|scientific report|lyrics/i],
    ["Compreensão textual", "Propósito comunicativo e tom do autor", /purpose|author\'s tone|aim|main goal|proposito comunicativo|intencao do autor|tom do autor|finalidade/i],
    ["Compreensão textual", "Leitura de cartuns, tirinhas e imagens", /comic strip|cartoon|tirinha|charges?|poster|grafico|tabela|leitura de imagem|multimodal/i],
    ["Compreensão textual", "Ideia principal e inferências", /reading comprehension|main idea|infer|inferencia|according to the text|evidencia textual|compreensao textual|lingua inglesa/i],
  ],
  "Filosofia": [
    ["História da filosofia", "Filosofia Antiga (Sócrates, Platão, Aristóteles)", /socrates|socratico|platao|aristoteles|pre-socraticos|heraclito|parmenides|mito da caverna|mundo das ideias|teoria das quatro causas|filosofia antiga/i],
    ["História da filosofia", "Filosofia Medieval e patrística/escolástica", /patristica|agostinho|escolastica|tomas de aquino|fe e razao|filosofia medieval/i],
    ["História da filosofia", "Filosofia Moderna e teoria do conhecimento", /descartes|duvida metodica|cogito|racionalismo|empirismo|locke|hume|kant|criticismo|iluminismo|filosofia moderna/i],
    ["Filosofia social e política", "Contratualismo e teoria do Estado", /contratualismo|estado de natureza|contrato social|hobbes|locke|rousseau|maquiavel|soberania|poder/i],
    ["Filosofia social e política", "Poder, democracia e cidadania", /democracia|cidadania|marx|mais-valor|trabalho e critica social|escola de frankfurt|habermas|foucault|biopoder/i],
    ["Ética e teoria do conhecimento", "Ética e moral", /etica|moral|etica a nicomaco|imperativo categorico|utilitarismo|hannah arendt|banalidade do mal|etica contemporanea/i],
    ["Ética e teoria do conhecimento", "Epistemologia e teoria do conhecimento", /epistemologia|teoria do conhecimento|conhecimento|verdade|ceticismo|filosofia geral/i],
  ],
  "Sociologia": [
    ["Sociedade e cultura", "Socialização e instituições sociais", /socializacao|instituicoes sociais|familia|escola|igreja|durkheim|fato social|solidariedade mecanica|solidariedade organica|habitus|bourdieu/i],
    ["Sociedade e cultura", "Indústria cultural e meios de comunicação", /industria cultural|adorno|horkheimer|meios de comunicacao|redes sociais|influenciadores|padroes corporais|cultura de massa|sociedade do espetaculo/i],
    ["Sociedade e cultura", "Cultura, etnocentrismo e identidade", /cultura|etnocentrismo|relativismo cultural|identidade cultural|multiculturalismo|diversidade cultural|antropologia|memoria e linguagem social|sociedade e cultura/i],
    ["Cidadania e participação", "Estado, poder e democracia", /estado|poder|democracia|weber|acao social|tipos de dominacao|burocracia|florestan fernandes|cultura politica|regimes autoritarios/i],
    ["Cidadania e participação", "Movimentos sociais e política", /movimentos sociais|participacao social|politicas publicas|mobilizacao coletiva|politica ambiental/i],
    ["Cidadania e participação", "Direitos humanos e cidadania", /direitos humanos|cidadania|constituicao de 1988|direitos sociais|onu|povos indigenas|protagonismo social|minorias/i],
    ["Trabalho e desigualdades", "Globalização e mundo do trabalho", /globalizacao|sociedade de risco|ulrich beck|trabalho contemporaneo|plataformas|uberizacao|trabalho por aplicativo|flexibilizacao/i],
    ["Trabalho e desigualdades", "Desigualdades sociais e raciais", /desigualdade social|desigualdade racial|racismo estrutural|racismo institucional|preconceito|mito da democracia racial|interseccionalidade|estratificacao social/i],
    ["Trabalho e desigualdades", "Divisão do trabalho e relações de produção", /divisao do trabalho|trabalho domestico|genero|desigualdade de genero|marx|alienacao|luta de classes|relacoes de producao|trabalho e desigualdades|sociologia geral/i],
  ],
  "Artes": [
    ["História e teoria da arte", "Arte na Pré-História e Antiguidade", /arte rupestre|pre-historia|arte egipcia|arte grega|arte romana/i],
    ["História e teoria da arte", "Arte Moderna e vanguardas europeias", /vanguardas europeias|cubismo|futurismo|expressionismo|dadaismo|surrealismo|arte abstrata|modernismo|aby warburg|pathosformel|arte moderna/i],
    ["História e teoria da arte", "Arte Brasileira e Modernismo", /modernismo brasileiro|tarsila do amaral|anita malfatti|portinari|di cavalcanti|arte brasileira|antropofagia/i],
    ["História e teoria da arte", "História da arte e teoria estética", /historia da arte|teoria da arte|estetica|representacao|imagem e representacao/i],
    ["Artes visuais", "Elementos da composição visual", /composicao visual|ponto|linha|forma|cor|luz e sombra|perspectiva|textura|expressividade na pintura/i],
    ["Artes visuais", "Pintura, escultura, gravura e fotografia", /pintura|escultura|gravura|fotografia|colagem|cartum|desenho|artes visuais|arte e cultura visual/i],
  ],
};

/**
 * Aplica a taxonomia canônica a uma questão.
 * Mantém o detalhe editorial específico em question.detail enquanto padroniza content e subtopic.
 */
export function withTaxonomy(question) {
  const qid = question.id;
  if (EXPLICIT_OVERRIDES.has(qid)) {
    const [content, subtopic, detail] = EXPLICIT_OVERRIDES.get(qid);
    return { ...question, content, subtopic, detail: detail || question.detail || question.content };
  }

  let detail = question.detail || question.content || '';
  const isGenericDetail = /^(biologia|fisica|quimica|matematica|historia|geografia|portugues)\s+integrad[ao]/i.test(normalize(detail));

  const searchStr = `${question.content || ''} ${detail} ${question.subtopic || ''} ${question.statement ? question.statement.slice(0, 450) : ''}`;
  const text = normalize(searchStr);

  const subjectRules = RULES[question.subject] || [];
  const match = subjectRules.find(([, , regex]) => regex.test(text));

  const [content, subtopic] = match
    ? [match[0], match[1]]
    : (DEFAULT_FALLBACKS[question.subject] || ['Geral', 'Geral']);

  if (isGenericDetail) {
    detail = subtopic;
  }

  return { ...question, content, subtopic, detail };
}
