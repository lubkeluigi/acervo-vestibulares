import { q } from './uea2024vu-helpers.js';

export const uea2024vuLote05 = [
  q({
  "n": 57,
  "statement": "Considere o retângulo $ABCD$, com $AD=10\\ \\mathrm{cm}$, $DC=16\\ \\mathrm{cm}$ e o triângulo $DCP$, em que $P$ é o ponto médio do lado $AB$. Seja $S$ o ponto médio do lado $BC$ e $Q$ um ponto no interior do retângulo $ABCD$, tal que $BPQS$ seja um retângulo, conforme mostra a figura.",
  "alternatives": [
    "$15\\ \\mathrm{cm^2}$.",
    "$10\\ \\mathrm{cm^2}$.",
    "$20\\ \\mathrm{cm^2}$.",
    "$18\\ \\mathrm{cm^2}$.",
    "$8\\ \\mathrm{cm^2}$."
  ],
  "answer": "B",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q57-retangulo-pqr.svg",
      "alt": "Retângulo ABCD de 10 por 16 centímetros com pontos P, Q, R e S e triângulo PQR destacado."
    }
  ],
  "statementAfter": "Sabendo que o lado $\\overline{PC}$ intersecta o lado $\\overline{QS}$ no ponto $R$, a área do triângulo $PQR$, destacado na figura, é",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Matemática",
  "content": "Geometria plana e área de triângulo",
  "why": "Os pontos médios fornecem PQ = 5 cm. A interseção de PC com QS determina QR = 4 cm; como PQ e QR são perpendiculares, a área de PQR é 10 cm².",
  "resolution": [
    "Adote $D=(0,0)$, $C=(16,0)$, $B=(16,10)$ e $A=(0,10)$. Como $P$ e $S$ são pontos médios, $P=(8,10)$, $Q=(8,5)$ e $S=(16,5)$.",
    "A reta $PC$ intersecta $y=5$ em $R=(12,5)$. Assim, $PQ=5$ e $QR=4$, logo $[PQR]=\\frac{5\\cdot4}{2}=10\\ \\mathrm{cm^2}$."
  ],
  "wrong": {
    "0": "15 cm² não corresponde ao semiproduto dos catetos PQ = 5 cm e QR = 4 cm.",
    "2": "20 cm² seria o produto 5 × 4 sem dividir por dois; a área do triângulo exige o fator 1/2.",
    "3": "18 cm² não resulta das medidas determinadas pelos pontos médios e pela interseção.",
    "4": "8 cm² não corresponde à base QR = 4 cm e à altura PQ = 5 cm do triângulo destacado."
  }
}),

  q({
  "n": 58,
  "statement": "Considere o retângulo $ABCD$, com $AB=12\\ \\mathrm{cm}$, $AD=9\\ \\mathrm{cm}$ e $EC=13\\ \\mathrm{cm}$, sendo $E$ um ponto sobre o lado $\\overline{AD}$, conforme mostra a figura.",
  "alternatives": [
    "35 cm.",
    "28 cm.",
    "30 cm.",
    "25 cm.",
    "32 cm."
  ],
  "answer": "E",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q58-triangulo-ace.svg",
      "alt": "Retângulo ABCD com lados 12 e 9 centímetros, ponto E em AD, EC de 13 centímetros e triângulo ACE destacado."
    }
  ],
  "statementAfter": "O perímetro do triângulo $ACE$, destacado na figura, é igual a",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Matemática",
  "content": "Teorema de Pitágoras e perímetro",
  "why": "No retângulo, AC = 15 cm. No triângulo CDE, DE = 5 cm; portanto AE = 4 cm. O perímetro de ACE é 15 + 13 + 4 = 32 cm.",
  "resolution": [
    "$AC=\\sqrt{AB^2+BC^2}=\\sqrt{12^2+9^2}=15$ cm. No triângulo $CDE$, $DE=\\sqrt{CE^2-CD^2}=\\sqrt{13^2-12^2}=5$ cm.",
    "Como $AD=9$ cm, $AE=9-5=4$ cm. Logo, o perímetro é $AC+CE+AE=15+13+4=32$ cm."
  ],
  "wrong": {
    "0": "35 cm não corresponde à soma 15 + 13 + 4 obtida para os lados do triângulo.",
    "1": "28 cm omite parte do comprimento necessário e não satisfaz os dois teoremas de Pitágoras.",
    "2": "30 cm resultaria de um valor incorreto para AE; o valor correto é 4 cm.",
    "3": "25 cm é menor que a soma de AC e CE, que já é 28 cm, e portanto é impossível."
  }
}),

  q({
  "n": 59,
  "statement": "Uma fábrica de doces faz bombons maciços de chocolate na forma de um prisma reto de base quadrada e com $1{,}5\\ \\mathrm{cm}$ de altura, conforme mostra a figura.",
  "alternatives": [
    "1,5 cm.",
    "0,5 cm.",
    "2,5 cm.",
    "1,0 cm.",
    "2,0 cm."
  ],
  "answer": "E",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q59-prisma.svg",
      "alt": "Prisma reto de base quadrada com aresta da base x e altura de 1,5 centímetro."
    }
  ],
  "statementAfter": "Sabendo que para fabricar 85 bombons desse tipo são necessários $510\\ \\mathrm{cm^3}$ de massa de chocolate, a medida da aresta da base, indicada na figura pela letra $x$, é igual a",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Matemática",
  "content": "Volume de prisma de base quadrada",
  "difficulty": "Fácil",
  "why": "Cada bombom usa 510 ÷ 85 = 6 cm³. Com altura 1,5 cm, a base tem área 4 cm²; sendo quadrada, sua aresta mede 2,0 cm.",
  "resolution": [
    "O volume de cada bombom é $\\frac{510}{85}=6\\ \\mathrm{cm^3}$. Como $V=x^2\\cdot1{,}5$, temos $x^2=4$.",
    "Como $x>0$, $x=2{,}0\\ \\mathrm{cm}$."
  ],
  "wrong": {
    "0": "1,5 cm é a altura do prisma, não a aresta da base; com essa aresta, o volume seria 3,375 cm³.",
    "1": "Com 0,5 cm, cada bombom teria apenas 0,375 cm³, volume incompatível com os 6 cm³ necessários.",
    "2": "Com 2,5 cm, o volume por bombom seria 9,375 cm³, superior ao calculado.",
    "3": "Com 1,0 cm, os 85 bombons usariam somente 127,5 cm³, e não 510 cm³."
  }
}),

  q({
  "n": 60,
  "statement": "O setor de vendas de determinada empresa dividiu um bônus de R$ 15.000,00 entre os três funcionários que obtiveram os maiores valores em vendas no 1º bimestre de 2024, de modo diretamente proporcional ao valor das vendas de cada um. Desses três vendedores, Marcos não foi quem obteve o maior valor em vendas, e Pedro, que recebeu R$ 4.500,00 de bônus, foi quem obteve o menor valor em vendas.",
  "alternatives": [
    "R$ 5.000,00.",
    "R$ 6.500,00.",
    "R$ 6.000,00.",
    "R$ 5.500,00.",
    "R$ 7.000,00."
  ],
  "answer": "D",
  "statementAfter": "Sabendo que o valor das vendas feitas por Pedro foi 90% do valor das vendas feitas por Marcos e que o valor total das vendas feitas por esses três vendedores foi R$ 900.000,00, o bônus recebido pelo funcionário que obteve o maior valor em vendas foi",
  "afterBlockTypes": [
    "command"
  ],
  "blockTypes": [
    "prose"
  ],
  "subject": "Matemática",
  "content": "Divisão proporcional e porcentagem",
  "why": "Pedro recebeu 30% do bônus e, portanto, realizou R$ 270 mil em vendas. Marcos vendeu R$ 300 mil e o terceiro vendedor, R$ 330 mil; seu bônus foi R$ 5.500,00.",
  "resolution": [
    "A fração de Pedro é $\\frac{4500}{15000}=0{,}30$. Logo, suas vendas foram $0{,}30\\cdot900000=270000$ reais.",
    "Como Pedro vendeu 90% de Marcos, Marcos vendeu $270000/0{,}9=300000$. O maior vendedor vendeu $900000-270000-300000=330000$.",
    "O bônus do maior vendedor é $15000\\cdot\\frac{330000}{900000}=5500$ reais."
  ],
  "wrong": {
    "0": "R$ 5.000,00 é o bônus de Marcos, que não obteve o maior valor em vendas.",
    "1": "R$ 6.500,00 excede a parcela proporcional às vendas de R$ 330 mil.",
    "2": "R$ 6.000,00 corresponderia a 40% do bônus, mas o maior vendedor responde por 330/900 das vendas, não 40%.",
    "4": "R$ 7.000,00 não é compatível com a divisão proporcional do total de R$ 15.000,00."
  }
}),

  q({
  "n": 61,
  "statement": "O mostrador de um relógio digital possui um recurso gráfico visual que auxilia na contagem do tempo. Esse recurso consiste basicamente em um pequeno display circular segmentado em cinco partes iguais, conforme a figura. No sentido horário, a cada segundo, uma das cinco partes é acesa. Após todas as cinco partes estarem acesas, a contagem dos segundos continua, porém agora as partes são apagadas uma a uma, na mesma sequência. O processo se repete indefinidamente.",
  "alternatives": [
    "1 vez.",
    "10 vezes.",
    "6 vezes.",
    "3 vezes.",
    "5 vezes."
  ],
  "answer": "C",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q61-display.svg",
      "alt": "Relógio digital com display circular dividido em cinco setores iguais, alguns acesos em vermelho."
    }
  ],
  "statementAfter": "Considerando que no início da contagem dos segundos o display circular esteja totalmente apagado, durante o período de 1 minuto esse display ficará totalmente aceso",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Matemática",
  "content": "Periodicidade e contagem de ciclos",
  "difficulty": "Fácil",
  "why": "O display acende cinco partes em cinco segundos e depois as apaga em mais cinco. Em 60 segundos há seis ciclos de 10 segundos, ficando totalmente aceso seis vezes.",
  "resolution": [
    "O display fica totalmente aceso nos segundos 5, 15, 25, 35, 45 e 55.",
    "Portanto, em um minuto, isso ocorre 6 vezes."
  ],
  "wrong": {
    "0": "Uma vez contaria apenas o primeiro ciclo e ignoraria os demais dentro do minuto.",
    "1": "Dez é a duração do ciclo em segundos, não o número de vezes em que o display fica aceso.",
    "3": "Três corresponderia a apenas metade dos seis ciclos completos do minuto.",
    "4": "Cinco é o número de segmentos do display, não a quantidade de vezes em um minuto."
  }
}),

  q({
  "n": 62,
  "statement": "Um motorista de aplicativo estima que, para obter um ganho adequado, deve realizar viagens que totalizam no mínimo 21 km em no máximo 30 min.",
  "alternatives": [
    "44 km/h.",
    "46 km/h.",
    "42 km/h.",
    "48 km/h.",
    "50 km/h."
  ],
  "answer": "C",
  "statementAfter": "Para isso, o motorista deve desenvolver uma velocidade média mínima de",
  "afterBlockTypes": [
    "command"
  ],
  "blockTypes": [
    "prose"
  ],
  "subject": "Física",
  "content": "Velocidade média e conversão de unidades",
  "difficulty": "Fácil",
  "why": "Trinta minutos equivalem a 0,5 h. A velocidade média mínima é 21 km ÷ 0,5 h = 42 km/h.",
  "resolution": [
    "$v_m=\\frac{\\Delta s}{\\Delta t}=\\frac{21\\ \\mathrm{km}}{0{,}5\\ \\mathrm{h}}=42\\ \\mathrm{km/h}$."
  ],
  "wrong": {
    "0": "44 km/h permitiria cumprir a meta, mas não é a velocidade mínima necessária.",
    "1": "46 km/h é superior ao mínimo de 42 km/h calculado.",
    "3": "48 km/h também supera o valor mínimo pedido no enunciado.",
    "4": "50 km/h excede a velocidade mínima necessária para percorrer 21 km em 30 minutos."
  }
}),

  q({
  "n": 63,
  "statement": "No ramo da construção civil, normas mínimas de segurança são estabelecidas para assegurar que não haja riscos às pessoas. Apesar disso, é bastante comum nesse ramo ultrapassar esses níveis mínimos para garantir maior margem de segurança. Um exemplo dessa prática é a instalação de redes de proteção para janelas e sacadas de apartamentos. A rede de proteção ilustrada na figura possui 10 parafusos de fixação, sendo que cada um deles pode suportar até $540\\ \\mathrm{N}$ de tração sem que seja arrancado da parede.",
  "alternatives": [
    "6 pessoas.",
    "15 pessoas.",
    "3 pessoas.",
    "9 pessoas.",
    "12 pessoas."
  ],
  "answer": "A",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q63-rede-protecao.svg",
      "alt": "Rede de proteção instalada em janela e fixada às paredes por dez parafusos."
    }
  ],
  "statementAfter": "Considerando a massa de uma pessoa como sendo de $90\\ \\mathrm{kg}$ e a aceleração da gravidade igual a $10\\ \\mathrm{m/s^2}$, a rede representada na figura seria capaz de suportar uma força equivalente ao peso de até",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Força peso e equilíbrio de forças",
  "difficulty": "Fácil",
  "why": "Os dez parafusos suportam 5.400 N. Cada pessoa pesa 90 × 10 = 900 N; assim, 5.400 ÷ 900 = 6 pessoas.",
  "resolution": [
    "A força máxima é $F=10\\cdot540=5400\\ \\mathrm{N}$. O peso de uma pessoa é $P=mg=90\\cdot10=900\\ \\mathrm{N}$.",
    "Logo, $n=\\frac{5400}{900}=6$ pessoas."
  ],
  "wrong": {
    "1": "Quinze pessoas pesariam 13.500 N, muito acima dos 5.400 N suportados.",
    "2": "Três pessoas pesam 2.700 N, valor suportável, mas inferior à capacidade máxima solicitada.",
    "3": "Nove pessoas pesariam 8.100 N, excedendo a resistência total dos parafusos.",
    "4": "Doze pessoas pesariam 10.800 N, o dobro da capacidade da rede."
  }
}),

  q({
  "n": 64,
  "statement": "Um motorista distraído está descendo uma pista de declive acentuado com seu carro quando percebe que logo à frente há uma lombada. Assustado, o motorista inicia o processo de frenagem, de forma que o carro começa a derrapar. Derrapando, o carro diminui sua velocidade até parar pouco antes da lombada.",
  "alternatives": [
    "$\\Delta E_c=0$",
    "$\\Delta E_{Ta}+\\Delta E_{Tp}=0$",
    "$\\Delta E_c+\\Delta E_P+\\Delta E_{Tp}+\\Delta E_{Ta}=0$",
    "$\\Delta E_c+\\Delta E_P=0$",
    "$\\Delta E_P=0$"
  ],
  "answer": "C",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q64-frenagem.svg",
      "alt": "Sequência de um carro descendo uma rampa e diminuindo a velocidade até parar antes de uma lombada."
    }
  ],
  "statementAfter": "Suponha que, nesse processo, estavam envolvidas apenas a energia cinética do carro ($E_c$), a energia potencial gravitacional do carro ($E_P$), a energia térmica dos pneus ($E_{Tp}$) e a energia térmica do asfalto da pista ($E_{Ta}$). Considerando a variação dessas grandezas, representada por $\\Delta$, desde o início da frenagem até a parada do carro, tem-se que:",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Conservação e transformação de energia",
  "why": "Como o sistema considerado reúne todas as formas de energia envolvidas, a energia total se conserva: a soma de todas as variações é igual a zero.",
  "resolution": [
    "Pela conservação da energia, $\\Delta E_c+\\Delta E_P+\\Delta E_{Tp}+\\Delta E_{Ta}=0$. A perda de energia mecânica do carro é convertida em energia térmica dos pneus e do asfalto."
  ],
  "wrong": {
    "0": "O carro perde velocidade até parar, portanto sua energia cinética diminui e ΔE꜀ não é zero.",
    "1": "Os pneus e o asfalto recebem energia térmica; a soma dessas variações é positiva, não nula.",
    "3": "A soma das variações mecânicas não é zero porque há transformação em energia térmica.",
    "4": "O carro desce a pista, de modo que sua energia potencial gravitacional diminui."
  }
}),

  q({
  "n": 65,
  "statement": "Um serralheiro corta segmentos de uma barra metálica e os imerge em água para resfriar após o corte. Suponha que esse serralheiro tenha imergido uma dezena de segmentos metálicos idênticos, a 50 ºC cada, em um balde contendo água a 25 ºC.",
  "alternatives": [
    "15 ºC.",
    "20 ºC.",
    "10 ºC.",
    "30 ºC.",
    "25 ºC."
  ],
  "answer": "D",
  "statementAfter": "Desconsiderando perdas de calor para o ambiente e para o material do qual é feito o balde, dentre os valores apresentados, a temperatura de equilíbrio dos segmentos metálicos após o resfriamento poderá ser de",
  "afterBlockTypes": [
    "command"
  ],
  "blockTypes": [
    "prose"
  ],
  "subject": "Física",
  "content": "Equilíbrio térmico e troca de calor",
  "difficulty": "Fácil",
  "why": "Sem perdas externas, os metais cedem calor à água. O equilíbrio deve ficar entre 25 °C e 50 °C; entre as opções compatíveis com resfriamento efetivo dos segmentos, 30 °C é a resposta.",
  "wrong": {
    "0": "15 °C é inferior à temperatura inicial da água e exigiria retirada de calor do sistema.",
    "1": "20 °C também está abaixo dos 25 °C iniciais da água, que deve receber calor dos metais.",
    "2": "10 °C é incompatível com a água inicialmente a 25 °C e sem refrigeração externa.",
    "4": "Manter exatamente 25 °C exigiria que os segmentos não transferissem calor à água, incompatível com seu resfriamento."
  }
}),

  q({
  "n": 66,
  "statement": "Com as mãos úmidas, uma pessoa removeu uma bandeja de gelo do congelador e notou que seus dedos grudaram sobre a superfície dos cubos de gelo. Isso ocorreu pelo fato de que a água, associada à umidade nos dedos da pessoa, congelou-se ao tocar os cubos de gelo.",
  "alternatives": [
    "as temperaturas tanto dos cubos de gelo quanto da água nos dedos da pessoa diminuíram.",
    "o calor foi transferido da água nos dedos da pessoa para os cubos de gelo.",
    "a temperatura dos cubos de gelo foi transferida para a água nos dedos da pessoa.",
    "a temperatura da água nos dedos da pessoa foi transferida para os cubos de gelo.",
    "o calor foi transferido dos cubos de gelo para a água nos dedos da pessoa."
  ],
  "answer": "B",
  "statementAfter": "Afirma-se que, nesse processo,",
  "afterBlockTypes": [
    "command"
  ],
  "blockTypes": [
    "prose"
  ],
  "subject": "Física",
  "content": "Calor, temperatura e mudança de estado",
  "difficulty": "Fácil",
  "why": "Para congelar, a água nos dedos perde calor. Esse calor é transferido da água, inicialmente mais quente, para os cubos de gelo, mais frios.",
  "wrong": {
    "0": "A água perde calor, mas os cubos recebem energia; não é correto afirmar que ambos necessariamente diminuem de temperatura.",
    "2": "Temperatura é uma grandeza associada ao estado térmico e não uma substância transferida entre corpos.",
    "3": "Também aqui se confunde temperatura com calor; o que flui espontaneamente é energia térmica.",
    "4": "O sentido proposto aqueceria a água, enquanto o congelamento exige transferência da água para o gelo."
  }
}),

  q({
  "n": 67,
  "statement": "Quando um inseto é capturado pela teia de uma aranha, tenta em vão escapar da armadilha, puxando e repuxando a teia, que não o larga. O movimento oscilatório da teia, por sua vez, nessa vã tentativa de fuga do inseto, alerta a aranha informando-a de que há um inseto capturado.",
  "alternatives": [
    "gravitacional.",
    "elétrica.",
    "de atrito.",
    "magnética.",
    "elástica."
  ],
  "answer": "E",
  "statementAfter": "Nesse cenário, está associada ao movimento oscilatório da teia uma força",
  "afterBlockTypes": [
    "command"
  ],
  "blockTypes": [
    "prose"
  ],
  "subject": "Física",
  "content": "Força elástica e movimento oscilatório",
  "difficulty": "Fácil",
  "why": "A deformação dos fios produz força elástica restauradora, associada à oscilação da teia puxada e repuxada pelo inseto.",
  "wrong": {
    "0": "A força gravitacional atua sobre os corpos, mas não é a força restauradora principal da oscilação dos fios.",
    "1": "Não há interação elétrica indicada como origem do movimento oscilatório.",
    "2": "O atrito pode dissipar energia, mas não é a força elástica que restaura a teia deformada.",
    "3": "Não há campos ou materiais magnéticos envolvidos na oscilação descrita."
  }
}),

  q({
  "n": 68,
  "statement": "Os planetas do Sistema Solar podem ser classificados entre rochosos e gasosos. O gráfico a seguir, que descreve a relação entre a densidade dos planetas e a distância deles ao Sol, auxilia nessa caracterização.",
  "alternatives": [
    "Júpiter – Netuno.",
    "Urano – Mercúrio.",
    "Vênus – a Terra.",
    "Marte – Netuno.",
    "Mercúrio – Saturno."
  ],
  "answer": "B",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q68-planetas.svg",
      "alt": "Gráfico da densidade dos planetas em gramas por centímetro cúbico em função da distância ao Sol em quilômetros."
    }
  ],
  "statementAfter": "Com base no gráfico, afirma-se que __________ é um planeta gasoso e __________ é um planeta rochoso.\n\nAs lacunas do texto são preenchidas, respectivamente, por:",
  "afterBlockTypes": [
    "prose",
    "command"
  ],
  "subject": "Física",
  "content": "Sistema Solar e densidade dos planetas",
  "why": "Urano é um planeta gasoso e apresenta baixa densidade no gráfico. Mercúrio é rochoso e aparece com a maior densidade entre os planetas representados.",
  "wrong": {
    "0": "Júpiter e Netuno são ambos gasosos; a segunda lacuna pede um planeta rochoso.",
    "2": "Vênus e Terra são rochosos, portanto a primeira lacuna não pode ser preenchida por Vênus.",
    "3": "Marte é rochoso e Netuno é gasoso; a alternativa inverte as categorias solicitadas.",
    "4": "Mercúrio é rochoso e Saturno é gasoso, também em ordem inversa à pedida."
  }
}),

  q({
  "n": 69,
  "statement": "Na grande maioria das usinas de produção de energia elétrica, independentemente de qual seja a fonte de energia empregada, há sempre um princípio básico envolvido, que é a movimentação de turbinas para a conversão de energia __________ em energia elétrica. Mesmo que indiretamente, esse princípio está presente na conversão da energia potencial gravitacional em usinas __________ e da energia térmica, proveniente de combustíveis fósseis e nucleares, em usinas __________ e __________, respectivamente.\n\nAs lacunas do texto são preenchidas, por:",
  "alternatives": [
    "mecânica – hidrelétricas – termoelétricas – termonucleares.",
    "sonora – eólicas – hidrelétricas – termoelétricas.",
    "química – hidrelétricas – eólicas – termonucleares.",
    "térmica – eólicas – termonucleares – termoelétricas.",
    "mecânica – termonucleares – termoelétricas – eólicas."
  ],
  "answer": "A",
  "statementAfter": "As lacunas do texto são preenchidas, por:",
  "afterBlockTypes": [
    "command"
  ],
  "blockTypes": [
    "prose",
    "command"
  ],
  "subject": "Física",
  "content": "Transformação de energia em usinas",
  "why": "As turbinas convertem energia mecânica em elétrica. A energia potencial gravitacional é aproveitada em hidrelétricas; calor de combustíveis fósseis e de reações nucleares é usado, respectivamente, em termoelétricas e termonucleares.",
  "wrong": {
    "1": "Energia sonora e usinas eólicas não correspondem às conversões de energia potencial gravitacional e térmica descritas.",
    "2": "A energia química não é a grandeza comum à rotação das turbinas, e usinas eólicas não usam o calor de combustíveis fósseis.",
    "3": "Energia térmica não preenche a primeira lacuna, e a sequência de usinas está incompatível com as fontes indicadas.",
    "4": "A primeira lacuna está correta, mas hidrelétricas, e não termonucleares, aproveitam a energia potencial gravitacional; eólicas não usam calor nuclear."
  }
}),

  q({
  "n": 70,
  "statement": "Sob a iluminação de uma lâmpada, um estudante segura uma caneta paralelamente à superfície de uma mesa, projetando sobre a mesa uma sombra dessa caneta. Com o auxílio de uma régua, ele mede algumas dimensões, que estão indicadas na imagem.",
  "alternatives": [
    "165 cm.",
    "115 cm.",
    "130 cm.",
    "145 cm.",
    "100 cm."
  ],
  "answer": "A",
  "blockTypes": [
    "prose"
  ],
  "visuals": [
    {
      "file": "uea2024vu-q70-sombra.svg",
      "alt": "Lâmpada, caneta e mesa: sombra de 22 centímetros, caneta de 20 centímetros e altura de 15 centímetros."
    }
  ],
  "statementAfter": "Considere que a lâmpada e a caneta se encontrem em um plano ortogonal à superfície da mesa. Com base nas medidas obtidas, o estudante conclui que a lâmpada está distanciada da mesa em",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Física",
  "content": "Sombra e semelhança de triângulos",
  "why": "Pela semelhança entre os triângulos formados pelos raios de luz, a razão entre sombra e caneta é 22/20. Isso fornece H/(H − 15) = 22/20, logo H = 165 cm.",
  "resolution": [
    "Se $H$ é a altura da lâmpada até a mesa, a distância vertical entre lâmpada e caneta é $H-15$.",
    "Por semelhança, $\\frac{H}{H-15}=\\frac{22}{20}$. Assim, $20H=22H-330$, logo $H=165\\ \\mathrm{cm}$."
  ],
  "wrong": {
    "1": "115 cm não satisfaz a proporção 22/20 entre as distâncias da lâmpada à mesa e à caneta.",
    "2": "130 cm produziria uma razão diferente da estabelecida pela caneta e por sua sombra.",
    "3": "145 cm não é solução de 20H = 22(H − 15).",
    "4": "100 cm não atende à semelhança de triângulos com altura da caneta de 15 cm."
  }
}),
];
