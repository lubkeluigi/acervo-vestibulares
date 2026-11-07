import { createGroup } from './uea2024ce-helpers.js';

const { q, essay } = createGroup(2);

export const uea2024ce2Questions = [
  q({
  "n": 1,
  "statement": "Durante a República (509 a.C. – 27 a.C.), a cidade de Roma foi conquistando novos territórios e dominando outros povos para além da península Itálica. Essa expansão causou um impacto profundo na economia romana, que passou a ser caracterizada",
  "alternatives": [
    "pela produção agrária autossuficiente com base no trabalho servil.",
    "pela ausência de moedas no comércio realizado por escambo.",
    "pela produção agrícola em latifúndios com base no trabalho de escravizados.",
    "pela produção artesanal com base na mão de obra assalariada.",
    "pelo comércio marítimo de especiarias vindas do Oriente."
  ],
  "answer": "C",
  "subject": "História",
  "content": "Expansão territorial e economia na Roma republicana",
  "difficulty": "Fácil",
  "why": "A expansão romana ampliou os latifúndios e a escravização em massa; a produção agrícola em grandes propriedades apoiou-se no trabalho de escravizados.",
  "wrong": {
    "0": "A produção não era autossuficiente nem baseada em servos, relações associadas principalmente ao feudalismo medieval.",
    "1": "A economia romana era monetizada e integrada por amplas redes comerciais, não por ausência de moedas.",
    "3": "A mão de obra assalariada artesanal não foi a base da economia agrária expansionista descrita.",
    "4": "O comércio de especiarias com o Oriente não resume a transformação agrária e escravista da República romana."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 2,
  "statement": "Analise o quadro de autoria desconhecida, produzido entre 1625–1650. Nele, Martinho Lutero está cercado por seus seguidores.",
  "alternatives": [
    "conversão forçada de judeus, que passavam a ser chamados de “cristãos novos” nas colônias da América.",
    "nova doutrina cristã, que defendia a livre interpretação da Bíblia pelos fiéis.",
    "formação da Companhia de Jesus, que tinha o objetivo de expandir a fé católica.",
    "contrarreforma, que publicou uma lista de livros proibidos aos seguidores do catolicismo.",
    "teoria da predestinação, que advogava a ideia da salvação pré-estabelecida por Deus."
  ],
  "answer": "B",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce2-q02-quadro-lutero.svg",
      "alt": "Quadro com Martinho Lutero sentado entre seus seguidores, produzido entre 1625 e 1650."
    }
  ],
  "statementAfter": "O quadro faz referência à",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "História",
  "content": "Reforma protestante e livre interpretação da Bíblia",
  "difficulty": "Fácil",
  "why": "Martinho Lutero foi figura central da Reforma protestante, que defendia a leitura e a interpretação da Bíblia pelos fiéis, sem mediação exclusiva do clero.",
  "wrong": {
    "0": "A conversão forçada de judeus e a categoria de cristãos-novos não constituem a doutrina lutarana representada.",
    "2": "A Companhia de Jesus foi criada no contexto católico da Contrarreforma, não pela Reforma de Lutero.",
    "3": "O Index de livros proibidos foi instrumento da Contrarreforma católica.",
    "4": "A predestinação é especialmente associada ao calvinismo, e não à referência direta a Lutero no quadro."
  }
}),

  q({
  "n": 3,
  "statement": "O recrudescimento dos tumultos no dia seguinte à demissão do ministro das finanças Jacques Necker levou à jornada decisiva de 14 de julho: o povo toma a Bastilha, fortaleza e prisão real, que ainda resistia. O alcance desse episódio vai muito além de um acontecimento pontual. Ele é o símbolo da arbitrariedade real e, de certo modo, do Antigo Regime que se encontra em decadência. (Michel Vovelle. A Revolução Francesa 1789-1799, 2019. Adaptado.)",
  "alternatives": [
    "da relação de suserania e vassalagem.",
    "da monarquia parlamentar.",
    "do absolutismo monárquico.",
    "do poder dos senhores feudais.",
    "da fraternidade do povo francês."
  ],
  "answer": "C",
  "statementAfter": "O episódio citado no excerto representou, de alguma maneira, a decadência do Antigo Regime francês, porque a Bastilha era um símbolo",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "História",
  "content": "Queda da Bastilha e crise do absolutismo",
  "difficulty": "Fácil",
  "why": "A Bastilha simbolizava o poder arbitrário e o absolutismo monárquico; sua tomada tornou-se marco da Revolução Francesa e da crise do Antigo Regime.",
  "wrong": {
    "0": "Suserania e vassalagem são relações típicas do feudalismo medieval, não o símbolo político enfatizado no episódio.",
    "1": "A monarquia parlamentar limita o rei por instituições representativas; a Bastilha representava o poder real arbitrário.",
    "3": "Os senhores feudais não eram o poder concentrado representado pela fortaleza e prisão real.",
    "4": "A fraternidade revolucionária não era o significado da Bastilha enquanto instituição do Antigo Regime."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 4,
  "statement": "A crise que resultou na eclosão da Primeira Guerra Mundial ocorreu no âmbito de um sistema de relações internacionais cujas raízes remontavam à Paz de Westfália (1648), ao final da Guerra dos Trinta Anos. O grupo de quatro a seis países mais poderosos da Europa firmava ou rompia alianças em busca de seus próprios interesses, no âmbito de um equilíbrio geral de poder, mas, em períodos de paz, esses países raramente se dividiam em campos armados hostis entre si. Isso mudou na década anterior à deflagração da Primeira Guerra Mundial [...]. (Lawrence Sondhaus. A Primeira Guerra Mundial, 2017.)",
  "alternatives": [
    "à proposta do pan-eslavismo.",
    "à assinatura do Tratado de Versalhes.",
    "à partilha da África e da Ásia pelos europeus.",
    "à tensão na região dos Bálcãs.",
    "à formação da Tríplice Entente."
  ],
  "answer": "E",
  "statementAfter": "Entre os antecedentes da Primeira Guerra Mundial, o exposto no excerto refere-se",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "História",
  "content": "Alianças militares e antecedentes da Primeira Guerra Mundial",
  "why": "O excerto descreve a passagem de alianças flexíveis para blocos militares hostis, como a Tríplice Entente, formada por França, Reino Unido e Rússia antes da guerra.",
  "wrong": {
    "0": "O pan-eslavismo era uma corrente nacionalista, não o sistema de blocos de grandes potências descrito.",
    "1": "O Tratado de Versalhes foi assinado depois da guerra, em 1919.",
    "2": "A partilha imperialista contribuiu para rivalidades, mas o foco do texto é a organização de alianças militares fixas.",
    "3": "As tensões nos Bálcãs foram outro antecedente, porém o trecho trata especificamente da polarização entre alianças."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 5,
  "statement": "As sociedades pré-colombianas eram numerosas e diferentes umas das outras. Algumas delas consistiam em agrupamentos pequenos, enquanto outras reuniam uma grande população em um imenso território. Esse era o caso das sociedades maia, asteca e inca, que possuíam algumas características semelhantes, tais como",
  "alternatives": [
    "a existência de cidades-Estado, o artesanato desenvolvido e a contabilidade dos recursos estatais por meio de quipus (cordas com nós).",
    "a formação de impérios, o uso de moedas de metais no comércio e a presença da escrita hieroglífica.",
    "a subordinação de outros povos, a criação das chinampas (ilhas artificiais para o plantio) e o monoteísmo.",
    "a organização de Estados teocráticos, o desenvolvimento da agricultura e a formação de centros urbanos.",
    "a consolidação de reinos independentes, a mobilidade social e a construção de pirâmides."
  ],
  "answer": "D",
  "subject": "História",
  "content": "Características comuns das sociedades maia, asteca e inca",
  "difficulty": "Fácil",
  "why": "Maias, astecas e incas desenvolveram agricultura, centros urbanos e Estados nos quais autoridade política e religiosa se articulavam, caracterizando organizações teocráticas.",
  "wrong": {
    "0": "Quipus eram utilizados pelos incas, e cidades-Estado não constituem característica comum às três sociedades.",
    "1": "Uso de moedas metálicas e escrita hieroglífica não foram traços compartilhados pelos três povos.",
    "2": "Chinampas eram uma técnica asteca, e essas sociedades eram politeístas.",
    "4": "Mobilidade social e consolidação de reinos independentes não descrevem adequadamente os Estados centralizados e hierarquizados citados."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 6,
  "statement": "Embora a escravidão já existisse na África Ocidental antes da chegada dos europeus, ela assumiu outro significado. Doravante, o cativo tornou-se uma “peça”, termo que evoca por si mesmo sua condição de mercadoria, cujo valor podia oscilar de acordo com a lei da oferta e da procura. Essa escravidão em massa, por sua vez, inundou a Europa, e depois toda a América, com uma categoria social completamente privada de direitos que passava a constituir a base de toda a exploração econômica, motivo pelo qual certos pesquisadores identificam a existência de organizações sociais escravistas específicas na Era Moderna. (José Rivair Macedo. História da África, 2015.)",
  "alternatives": [
    "ao caráter mercantil em larga escala da escravidão moderna.",
    "ao respeito à diversidade cultural dos escravizados.",
    "à semelhança entre a escravidão praticada pelos africanos e pelos europeus.",
    "à inclusão dos escravizados nas sociedades coloniais.",
    "ao papel dos africanos na organização do tráfico negreiro."
  ],
  "answer": "A",
  "statementAfter": "O excerto apresenta alguns aspectos das “organizações sociais escravistas” do século XV ao XIX. Um desses aspectos apresentados refere-se",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "História",
  "content": "Escravidão moderna e mercantilização de africanos",
  "why": "O texto destaca a transformação do cativo em mercadoria e a escravização em larga escala integrada ao comércio atlântico e à exploração econômica moderna.",
  "wrong": {
    "1": "A mercantilização e a privação de direitos contradizem a ideia de respeito à diversidade cultural dos escravizados.",
    "2": "O excerto ressalva que a escravidão prévia na África não era igual à escravidão moderna em massa.",
    "3": "Os escravizados formavam uma categoria privada de direitos, não integrada plenamente às sociedades coloniais.",
    "4": "Embora houvesse participação de agentes africanos no tráfico, o aspecto explicado no trecho é a mercantilização do cativo."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 7,
  "statement": "A sociedade brasileira organizou-se hierarquicamente pela cor da pele, ocupando os brancos o topo da hierarquia, os mulatos, mestiços e outros pardos, o meio, e os africanos escravizados, a base. [...] Os engenhos não criaram essas hierarquias, mas suas estruturas internas, com proprietários de origem europeia, trabalhadores coagidos, primeiro indígenas e depois africanos, e uma série de artesãos e outras posições ocupadas por brancos pobres, ex-escravos libertos e povos de origem mista, tendiam a reforçar e expor as estruturas constituintes da sociedade. Neste sentido, os engenhos foram ao mesmo tempo geradores e espelhos da sociedade brasileira durante a grande época açucareira. (Stuart Schwartz. “O Nordeste açucareiro no Brasil colonial”. In: João Luís R. Fragoso e Maria de Fátima Gouvêa. O Brasil Colonial, 2018.)",
  "alternatives": [
    "consolidação de estruturas sociais baseadas na etnia e na ocupação dos indivíduos.",
    "grande mobilidade social baseada na possibilidade de alforria dos escravizados.",
    "democracia racial fundada na miscigenação de brancos, negros e indígenas.",
    "diversificação das atividades econômicas fundada na agricultura e no artesanato.",
    "ocupação do sertão estimulada pela necessidade de novas terras para o plantio."
  ],
  "answer": "A",
  "statementAfter": "O excerto relaciona os engenhos de açúcar do período colonial à",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "História",
  "content": "Engenhos e hierarquia social no Brasil colonial",
  "why": "Os engenhos reproduziam e reforçavam hierarquias baseadas na origem étnica e na ocupação, reunindo proprietários, trabalhadores coagidos, artesãos e libertos em posições desiguais.",
  "wrong": {
    "1": "A possibilidade excepcional de alforria não eliminava a rigidez das estruturas escravistas e hierárquicas.",
    "2": "A miscigenação coexistiu com desigualdade e dominação; o texto não descreve democracia racial.",
    "3": "O foco não é a diversificação econômica, mas a reprodução social das desigualdades no mundo do engenho.",
    "4": "A expansão para o sertão não é a relação entre engenhos e sociedade apresentada no excerto."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 8,
  "statement": "Analise a imagem que retrata o líder Zumbi do Quilombo dos Palmares, morto em 20 de novembro de 1695. Atualmente essa data é considerada o “Dia Nacional de Zumbi e da Consciência Negra”.",
  "alternatives": [
    "empreendeu a conquista do governo da capitania de Pernambuco.",
    "constituiu uma das formas de resistência ao regime escravista.",
    "organizou mocambos compostos por escravizados libertos pelas cartas de alforria.",
    "participou da formação do movimento abolicionista no Brasil.",
    "consistiu em uma comunidade autônoma de africanos islamizados."
  ],
  "answer": "B",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce2-q08-zumbi-palmares.svg",
      "alt": "Imagem de Zumbi dos Palmares com os dizeres Zumbi dos Palmares e Consciência Negra."
    }
  ],
  "statementAfter": "A relação entre o líder Zumbi e o Dia da Consciência Negra justifica-se porque o Quilombo dos Palmares",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "História",
  "content": "Quilombo dos Palmares e resistência à escravidão",
  "difficulty": "Fácil",
  "why": "Palmares reuniu comunidades quilombolas que resistiram à escravidão e aos ataques coloniais; Zumbi tornou-se símbolo dessa luta e da consciência negra.",
  "wrong": {
    "0": "O quilombo não conquistou o governo da capitania de Pernambuco.",
    "2": "Os mocambos acolhiam sobretudo pessoas que fugiam da escravidão, não apenas libertos por cartas de alforria.",
    "3": "Palmares foi destruído em 1695, muito antes da organização do movimento abolicionista oitocentista.",
    "4": "A comunidade não era definida como um grupo autônomo exclusivamente de africanos islamizados."
  }
}),

  q({
  "n": 9,
  "statement": "Em 7 de janeiro de 1835, começou a Cabanagem. Liderados por Antônio Vinagre, os rebeldes (tapuios, cabanos, negros e indígenas) tomaram o quartel e o palácio do governo de Belém, assassinando o presidente Lobo e Souza e apoderando-se de grande material bélico. Ao mesmo tempo, nomearam um novo presidente do Grão-Pará: Félix Antônio Clemente Malcher, que se encontrava até então preso por conta de sua atuação considerada contrária ao regime imperial. O governo, pressionado pela crescente radicalização do movimento, não duraria muito. Malcher, latifundiário e dono de engenhos de açúcar, acabou por trair seu grupo aliado — conclamou que depusessem armas, voltassem ao trabalho, além de jurar obediência à Regência —, sendo deposto em 19 de fevereiro do mesmo ano. (Lilia M. Schwarcz e Heloisa M. Starling. Brasil: uma biografia, 2015. Adaptado.)",
  "alternatives": [
    "restringiu-se a uma revolta de senhores de engenho.",
    "reuniu grupos sociais distintos com reivindicações próprias.",
    "utilizou de métodos democráticos para a conquista do poder.",
    "contou com apoio irrestrito das elites provinciais.",
    "apoiou o golpe da maioridade para restabelecer a monarquia."
  ],
  "answer": "B",
  "statementAfter": "Com base no excerto, a Cabanagem",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "História",
  "content": "Cabanagem e participação de grupos sociais no Grão-Pará",
  "why": "O excerto mostra tapuios, cabanos, negros, indígenas e setores proprietários com interesses distintos e conflitos internos, caracterizando uma revolta socialmente heterogênea.",
  "wrong": {
    "0": "A presença de Malcher não reduz a Cabanagem a uma revolta de senhores; o texto enumera ampla participação popular.",
    "2": "A tomada de quartéis, os assassinatos e as deposições evidenciam conflito armado, não métodos democráticos.",
    "3": "Malcher rompe com os aliados e as elites não oferecem apoio irrestrito ao movimento.",
    "4": "O golpe da maioridade ocorreu em 1840, depois do início da Cabanagem, e não é a finalidade descrita."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 10,
  "statement": "Analise a charge, que retrata o presidente Rodrigues Alves sancionando a Lei da Vacina Obrigatória em 1904 no Rio de Janeiro.",
  "alternatives": [
    "a imigração em massa de portugueses para a capital, já que a implementação da vacina eliminaria a varíola, doença temida pelos estrangeiros.",
    "a insatisfação da elite gaúcha com o governo federal, já que a campanha de vacinação ficou restrita à capital.",
    "a instalação de diferentes postos de vacinação pela capital, medida que fez aumentar a popularidade do governo entre as camadas sociais mais pobres.",
    "um motim popular contra a obrigatoriedade da vacina e contra as reformas urbanas e sanitárias promovidas pelo governo.",
    "um levante que reuniu os marinheiros contra os castigos físicos e a falta de vacinas para a prevenção de doenças na Marinha nacional."
  ],
  "answer": "D",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce2-q10-charge-vacina.svg",
      "alt": "Charge de Rodrigues Alves e autoridades sanitárias sobre a Lei da Vacina Obrigatória de 1904."
    }
  ],
  "statementAfter": "Essa lei desencadeou",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "História",
  "content": "Revolta da Vacina e reformas urbanas no Rio de Janeiro",
  "difficulty": "Fácil",
  "why": "A obrigatoriedade vacinal, associada às ações coercitivas e às reformas urbanas e sanitárias, desencadeou em 1904 um motim popular no Rio de Janeiro.",
  "wrong": {
    "0": "A lei não foi uma política de atração de imigrantes portugueses, e a revolta decorreu da imposição das medidas sanitárias.",
    "1": "O conflito envolveu a população da capital federal, não a insatisfação da elite gaúcha.",
    "2": "A campanha provocou resistência popular, em vez de simplesmente elevar a popularidade do governo.",
    "4": "A Revolta da Chibata, de 1910, reuniu marinheiros contra castigos; não é o episódio de 1904."
  }
}),

  q({
  "n": 11,
  "statement": "Analise a fotografia da campanha pelas “Diretas Já”, realizada entre os anos 1983 e 1984 durante o processo de redemocratização do Brasil.",
  "alternatives": [
    "pedia o fim das eleições indiretas para governadores e prefeitos das grandes capitais do país.",
    "demandava a anulação dos atos institucionais e da censura decretada pelos presidentes da República ao longo do regime militar.",
    "exigia a aprovação de emenda constitucional pelo Congresso Nacional para restabelecer as eleições diretas para Presidente da República.",
    "pleiteava a anistia para os presos políticos e para os exilados pela ditadura civil-militar.",
    "reivindicava a volta do pluripartidarismo e a garantia de livre organização dos sindicatos dos trabalhadores da área cultural."
  ],
  "answer": "C",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce2-q11-diretas-ja.svg",
      "alt": "Fotografia de multidão na campanha Diretas Já, com faixa de artistas e intelectuais."
    }
  ],
  "statementAfter": "Essa campanha",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "História",
  "content": "Diretas Já e emenda Dante de Oliveira",
  "difficulty": "Fácil",
  "why": "A campanha Diretas Já mobilizou-se pela aprovação da emenda Dante de Oliveira, que restabeleceria eleições diretas para presidente durante a redemocratização.",
  "wrong": {
    "0": "O foco era a eleição presidencial, e não as eleições indiretas para governadores e prefeitos.",
    "1": "A campanha não tinha como proposta central anular todos os atos institucionais e a censura pretérita.",
    "3": "A anistia de 1979 antecedeu a campanha de 1983–1984.",
    "4": "O pluripartidarismo e a liberdade sindical não eram a reivindicação específica das Diretas Já."
  }
}),

  q({
  "n": 12,
  "statement": "Fernando Henrique Cardoso (FHC) governou o Brasil entre 1995 e 2003. Com a economia estabilizada e o apoio do Congresso Nacional, a presidência de FHC adotou",
  "alternatives": [
    "reformas de base e reestruturou o sistema tributário nacional.",
    "planos de ampliação da malha ferroviária e encerrou o programa de reforma agrária.",
    "medidas populistas e garantiu um aumento real do salário mínimo de 100%.",
    "projetos de industrialização e implantou novas indústrias de base no país.",
    "práticas neoliberais e executou a privatização de grandes empresas estatais."
  ],
  "answer": "E",
  "subject": "História",
  "content": "Neoliberalismo e privatizações no governo FHC",
  "difficulty": "Fácil",
  "why": "Os governos FHC adotaram reformas de orientação neoliberal, abertura econômica e privatização de grandes estatais, como as do setor de telecomunicações e a Vale.",
  "wrong": {
    "0": "Não houve implementação das reformas de base nem uma reestruturação tributária com o sentido apresentado.",
    "1": "O período não foi marcado pela ampliação ferroviária nem pelo encerramento da reforma agrária.",
    "2": "O aumento real de 100% do salário mínimo e a caracterização como governo populista são incorretos.",
    "3": "A política econômica não teve como eixo a implantação de novas indústrias de base estatais."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 13,
  "statement": "O infográfico apresenta a distribuição geográfica de determinado grupo populacional do Brasil.",
  "alternatives": [
    "quilombolas, sendo que a maior parte desse grupo está vinculada à agricultura familiar.",
    "indígenas, sendo que a maior parte desse grupo vive em áreas sem demarcação oficial.",
    "caiçaras, sendo que a maior parte desse grupo tem como fonte de renda o extrativismo.",
    "ribeirinhos, sendo que a maior parte desse grupo desenvolve a pesca comercial.",
    "venezuelanos, sendo que a maior parte desse grupo vive na condição de refúgio humanitário."
  ],
  "answer": "B",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce2-q13-distribuicao-indigenas.svg",
      "alt": "Infográfico com a distribuição da população indígena brasileira por grandes regiões e o total de 1 693 535 pessoas."
    }
  ],
  "statementAfter": "A partir de conhecimentos sobre a população brasileira, tem-se que o grupo populacional apresentado no infográfico corresponde aos",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Geografia",
  "content": "Distribuição regional da população indígena brasileira",
  "why": "O total de 1.693.535 pessoas e a distribuição com maior contingente no Norte correspondem à população indígena registrada no Censo 2022; como assinala a alternativa, grande parte desse grupo vive em áreas sem demarcação oficial.",
  "wrong": {
    "0": "Os quilombolas não apresentam esse total nem a distribuição regional mostrada, e a agricultura familiar não é o vínculo definidor de todo o grupo.",
    "2": "Caiçaras concentram-se sobretudo no litoral do Sudeste e do Sul, sem a distribuição e o contingente do infográfico.",
    "3": "Ribeirinhos têm forte presença amazônica, mas o total nacional e os valores regionais identificam os indígenas; além disso, pesca comercial não define a maioria.",
    "4": "A população venezuelana refugiada é numericamente menor e tem distribuição mais concentrada, especialmente em Roraima."
  }
}),

  q({
  "n": 14,
  "statement": "Examine as pirâmides etárias do Brasil e do estado do Amazonas, segundo dados do Censo Demográfico 2022, do Instituto Brasileiro de Geografia e Estatística (IBGE).",
  "alternatives": [
    "infantil, o que desobriga o estado de realizar investimentos em áreas assistenciais relacionados à população adulta ou idosa.",
    "adulta, o que exige maior ação das políticas públicas voltadas a emprego e renda no estado em relação ao cenário do país.",
    "adulta, o que exige maior arrecadação do sistema público de previdência pelo estado em relação ao contexto do país.",
    "jovem, o que possibilita uma transição demográfica acelerada ao estado, quando comparado com o contexto do país.",
    "jovem, o que assegura um maior período de bônus demográfico ao estado, quando comparado com o cenário do país."
  ],
  "answer": "E",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce2-q14-piramides-etarias.svg",
      "alt": "Pirâmides etárias do Brasil e do Amazonas segundo o Censo Demográfico 2022, com percentuais por sexo e faixa etária."
    }
  ],
  "statementAfter": "O exame das pirâmides etárias permite concluir que a população do Amazonas possui, proporcionalmente à população do Brasil, mais pessoas na faixa etária",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Geografia",
  "content": "Pirâmides etárias do Brasil e do Amazonas",
  "why": "O Amazonas apresenta proporções maiores de crianças e jovens e uma base etária mais jovem que a do Brasil, o que tende a prolongar o período de bônus demográfico.",
  "wrong": {
    "0": "A maior proporção infantil não desobriga políticas para adultos e idosos, cujas necessidades continuam presentes.",
    "1": "Não se conclui que toda a população adulta seja proporcionalmente maior; o contraste central é a estrutura mais jovem do Amazonas.",
    "2": "A previdência se relaciona principalmente ao envelhecimento, e o gráfico não sustenta maior arrecadação por esse motivo.",
    "3": "Uma população mais jovem não assegura transição demográfica acelerada; essa transição depende de mudanças na fecundidade e na mortalidade."
  }
}),

  q({
  "n": 15,
  "statement": "No Brasil, a migração indígena para os centros urbanos tem se intensificado nos últimos 30 anos implicando tanto desafios particulares para preservar a identidade étnica como a falta de emprego, de acesso à saúde, à educação, à moradia adequada e a outros direitos fundamentais. A vulnerabilidade de povos, famílias ou pessoas indígenas é reconhecida no Relatório da Organização das Nações Unidas sobre a Promoção e a Proteção dos Direitos Humanos de Migrantes no Contexto de Grandes Movimentos. A migração de indígenas para as cidades, voluntária ou forçada, em geral decorre da violação dos direitos, como nos casos em que é motivada pela expulsão dos territórios de origem, insegurança econômica, ausência ou precariedade de serviços básicos. (Mariana W. V. de Castilho e Ela W. V de Castilho. Confluências, dezembro de 2023. Adaptado.)",
  "alternatives": [
    "a incerteza do direito à cidade, pois, na cidade do consumo, o espaço urbano é estabelecido pelos princípios de seguridade social.",
    "a fragilização das identidades étnico-culturais, pois, na cidade do espetáculo, o espaço urbano é restrito às premissas coloniais.",
    "a precarização das condições de vida, pois, na cidade capitalista, o espaço urbano é condição e reflexo das desigualdades socioespaciais.",
    "a inconstância do direito à espoliação urbana, pois, na cidade do capital, o espaço urbano é fragmentado e dissociado do interesse individual.",
    "a insegurança econômica, pois, na cidade da mercadoria, o espaço urbano é um complexo de equidade e justiça social."
  ],
  "answer": "C",
  "statementAfter": "Caracteriza uma consequência da realidade indígena retratada no excerto:",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Geografia",
  "content": "Migração indígena urbana e desigualdades socioespaciais",
  "why": "A precarização das condições de vida decorre da inserção desigual dos indígenas na cidade capitalista, onde moradia, trabalho e serviços reproduzem desigualdades socioespaciais.",
  "wrong": {
    "0": "O texto aponta vulnerabilidade concreta, não incerteza do direito; além disso, a cidade do consumo não é definida pela seguridade social.",
    "1": "A alternativa restringe a análise às premissas coloniais e à cidade do espetáculo, sem explicar as condições materiais destacadas.",
    "3": "Espoliação urbana e interesse individual não formam a relação de desigualdade descrita, e “inconstância do direito” não é consequência apresentada.",
    "4": "A insegurança econômica é mencionada como causa de migrações forçadas, mas a cidade da mercadoria não é um complexo de equidade e justiça social."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 16,
  "statement": "Analise a charge do cartunista Gilmar Fraga, publicada em 07.12.2023.",
  "alternatives": [
    "imperial do governo venezuelano ao tentar invadir parte do território do Suriname, que está em zona de interesse comercial entre os dois países, para extrair recursos naturais de origem fóssil.",
    "suprema do governo venezuelano ao tentar conquistar parte do território do Suriname, que está em situação de contestação diplomática entre os dois países, para lograr os recursos provenientes de óleo mineral.",
    "hegemônica do governo venezuelano ao tentar ocupar parte do território da Colômbia, que está em situação de domínio internacional, para obter o domínio sobre os recursos energéticos regionais.",
    "unilateral do governo venezuelano ao desejar anexar o território da Guiana, que está em situação de litígio entre os dois países, para acessar importantes reservas de hidrocarbonetos.",
    "centralizadora do governo venezuelano ao desejar apossar parte do território da Guiana Francesa, que está em disputa entre os dois países, para estabelecer o controle soberano sobre os recursos naturais."
  ],
  "answer": "D",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce2-q16-charge-esequibo.svg",
      "alt": "Charge de Nicolás Maduro sobre um barril de petróleo, com placa indicando Essequibo."
    }
  ],
  "statementAfter": "A crítica presente na charge faz menção à posição",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Geografia",
  "content": "Disputa territorial de Essequibo e recursos energéticos",
  "why": "A charge representa a ação unilateral da Venezuela sobre Essequibo, região em litígio com a Guiana, associando a pretensão territorial ao acesso a reservas de petróleo e outros hidrocarbonetos.",
  "wrong": {
    "0": "O território em disputa pertence à Guiana, não ao Suriname, e “imperial” não é a caracterização da alternativa correta.",
    "1": "Além de citar o Suriname, a alternativa usa “suprema” e “óleo mineral”, inadequados ao caso.",
    "2": "A disputa não envolve anexação de território colombiano nem domínio internacional da Colômbia.",
    "4": "Guiana Francesa é um departamento ultramarino francês e não é o território de Essequibo disputado por Venezuela e Guiana."
  }
}),

  q({
  "n": 17,
  "statement": "Produtores rurais de Apuí, no interior do estado do Amazonas, usam a floresta como aliada e conseguem incrementar produção de café no município. Com 52 hectares de café plantado e beneficiando direta e indiretamente mais de 60 famílias, o projeto Café Apuí é uma experiência bem-sucedida de cultivo. Antes da chegada do projeto, a realidade da produção era bem diferente. Os agricultores plantavam o café da forma tradicional e, depois de um tempo, desistiam do cultivo, porque a plantação não evoluía e o valor pago pelo que conseguiam colher não era satisfatório. (Cassandra Castro. https://agenciacenarium.com.br, 15.09.2021. Adaptado.)",
  "alternatives": [
    "a consolidação do sistema de produção agroflorestal e a promoção do desenvolvimento local de base sustentável.",
    "o estímulo ao uso da técnica agrícola da coivara e a fixação do trabalhador formal no campo.",
    "a realização da reforma agrária local e o fomento ao espírito de cooperativismo entre os produtores.",
    "o estabelecimento do sistema de manejo em terraceamento e a ampliação do empreendorismo social.",
    "a dinamização do agronegócio e o incentivo para a realização de projetos vinculados à economia planificada."
  ],
  "answer": "A",
  "statementAfter": "Considerando o contexto apresentado, caracterizam ações que contribuíram para a valorização da agricultura familiar em comunidades tradicionais no estado do Amazonas:",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Geografia",
  "content": "Sistemas agroflorestais e agricultura familiar no Amazonas",
  "difficulty": "Fácil",
  "why": "O Café Apuí associa cultivo agrícola e floresta em sistemas agroflorestais, fortalecendo a agricultura familiar e o desenvolvimento local com base sustentável.",
  "wrong": {
    "1": "A coivara envolve corte e queima e não corresponde ao uso da floresta como aliada; o projeto também não se define por trabalho formal assalariado.",
    "2": "O texto não relata reforma agrária nem apresenta o cooperativismo como ação central.",
    "3": "Terraceamento controla erosão em declives e não descreve o sistema agroflorestal de Apuí.",
    "4": "A experiência é de agricultura familiar sustentável, não de agronegócio ou economia planificada."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 18,
  "statement": "O presidente colombiano, Gustavo Petro, solicitou ao Brasil apoio à adesão do seu país a um conjunto de nações parceiras economicamente que, em 2023, passou por uma expansão. O Brasil atuou em favor da adesão da Argentina na última cúpula desse conjunto de nações parceiras, mas, com a desistência de ingresso do novo governo argentino, perdeu-se a ideia de certo equilíbrio regional na expansão, critério defendido por Brasília. O país continua como único membro da América Latina. (Felipe Frazão. www.estadao.com.br, 23.04.2024. Adaptado.)",
  "alternatives": [
    "ao BRICS e emergentes.",
    "à OMC e do Sul-Global.",
    "ao MERCOSUL e sul-americanos.",
    "à OCDE e industrializados.",
    "ao G20 e em desenvolvimento."
  ],
  "answer": "A",
  "statementAfter": "Com base no excerto, o conjunto de nações do qual o Brasil é parte integrante corresponde __________, que, diante da entrada de novos membros, aumentou a visibilidade dos países __________ perante a comunidade internacional, especialmente nos momentos para celebrar acordos comerciais.\n\nAs lacunas do texto são preenchidas, respectivamente, por:",
  "afterBlockTypes": [
    "prose",
    "command"
  ],
  "subject": "Geografia",
  "content": "BRICS, expansão e países emergentes",
  "difficulty": "Fácil",
  "why": "O Brasil integra os BRICS, ampliados em 2023; o grupo reúne economias emergentes e ampliou sua visibilidade nas negociações e nos acordos internacionais.",
  "wrong": {
    "1": "A OMC não é o conjunto cuja adesão argentina foi defendida pelo Brasil nesse contexto, e “Sul-Global” não completa a identificação pedida.",
    "2": "O Mercosul é bloco regional sul-americano e não teve a expansão internacional descrita em 2023.",
    "3": "A OCDE reúne economias em sua maioria industrializadas, mas o Brasil não é membro pleno e o episódio argentino não corresponde ao texto.",
    "4": "O G20 não é o grupo citado, e a Argentina já integra esse fórum."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 19,
  "statement": "Leia a postagem realizada pela Empresa Brasileira de Pesquisa Agropecuária (Embrapa) em sua conta no Instagram, em 29.12.2023.",
  "alternatives": [
    "pelo uso da terra, o que restringe a expansão urbana.",
    "pela fotossíntese, capaz de compensar parte das emissões de CO₂.",
    "pelo estabelecimento de barreiras físicas à circulação atmosférica.",
    "pela adoção de regras de combate ao sobrepastoreio.",
    "pela restrição à utilização de espécies exóticas à região."
  ],
  "answer": "B",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce2-q19-postagem-ilpf.svg",
      "alt": "Postagem da Embrapa com lavoura, pecuária e floresta e a afirmação de que sistemas ILPF mitigam gases de efeito estufa no bioma Amazônia."
    }
  ],
  "statementAfter": "¹ ILPF: Integração Lavoura-Pecuária-Floresta.\n\nO resultado anunciado pelo emprego do sistema ILPF é explicado",
  "afterBlockTypes": [
    "prose",
    "command"
  ],
  "subject": "Geografia",
  "content": "ILPF e mitigação de gases de efeito estufa",
  "difficulty": "Fácil",
  "why": "Na integração lavoura-pecuária-floresta, a vegetação realiza fotossíntese e fixa carbono, compensando parte das emissões de CO₂ e contribuindo para a mitigação anunciada.",
  "wrong": {
    "0": "O uso da terra em ILPF não tem como resultado direto restringir a expansão urbana.",
    "2": "O sistema não cria barreiras físicas à circulação atmosférica.",
    "3": "O manejo do pastoreio pode reduzir degradação, mas a mitigação de CO₂ destacada decorre da fixação de carbono pela fotossíntese.",
    "4": "A ILPF pode usar espécies cultivadas, inclusive exóticas; a mitigação não depende de sua proibição."
  }
}),

  q({
  "n": 20,
  "statement": "A proposta de redivisão territorial do estado do Amazonas aparece como discurso libertador para as “sofridas populações do interior”, que dependem de inúmeros serviços públicos que estão mais concentrados na capital. Outro discurso é que uma divisão municipal trará o poder para mais próximo da população, ao transformar os distritos em municípios. É preciso ter coragem para defender um novo arranjo político-administrativo que não seja apenas oportunista, mas que considere, pelo menos, um aspecto fundamental: a rede urbana amazonense. (Ricardo J. B. Nogueira. https://bncamazonas.com.br, 17.03.2024. Adaptado.)",
  "alternatives": [
    "na inflexibilidade da rede urbana consolidada perante as áreas de fronteira agrícola.",
    "no desequilíbrio da atual rede urbana que tem priorizado comunidades interioranas.",
    "na restrição que a atual rede urbana impõe à criação de novas cidades médias.",
    "na necessidade de novas infraestruturas de transporte para alavancar índices sociais.",
    "no combate à dispersão desigual dos serviços públicos na atual hierarquia urbana."
  ],
  "answer": "E",
  "statementAfter": "A proposta de redivisão territorial do estado do Amazonas pauta-se",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Geografia",
  "content": "Redivisão territorial e rede urbana do Amazonas",
  "why": "O texto critica a concentração dos serviços na capital e relaciona a redivisão ao enfrentamento da distribuição desigual de serviços na hierarquia urbana amazonense.",
  "wrong": {
    "0": "A proposta não se fundamenta na inflexibilidade da rede diante de fronteiras agrícolas.",
    "1": "O problema apontado é a concentração na capital, não priorização das comunidades interioranas.",
    "2": "O excerto não apresenta restrição da rede à criação de cidades médias como fundamento da proposta.",
    "3": "Embora infraestrutura seja relevante, o argumento explícito do texto é a dispersão desigual dos serviços públicos."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 21,
  "statement": "Segundo menor bioma do Brasil, com área superior apenas à do Pantanal, já perdeu 30% de sua vegetação nativa nas últimas três décadas e meia para a atividade agrícola. Esse bioma está intimamente associado à apreciação da identidade cultural da região — a manutenção da paisagem move a cultura e a economia de muitos municípios. A contemplação de paisagens e o turismo em hotéis-fazenda são atividades importantes, mas o bioma está sendo convertido em lavouras. (Meghie Rodrigues. https://revistapesquisa.fapesp.br, 2024. Adaptado.)",
  "alternatives": [
    "ao Cerrado e à atividade da pecuária bovina.",
    "ao Pampa e à produção da monocultura da uva.",
    "ao Pampa e à prática da silvicultura.",
    "à Mata Atlântica e à produção de cana-de-açúcar.",
    "à Mata Atlântica e ao cultivo da monocultura do café."
  ],
  "answer": "C",
  "statementAfter": "Apresentados no excerto, o bioma e uma das principais atividades econômicas que causam sua degradação correspondem, respectivamente,",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Geografia",
  "content": "Degradação do Pampa e expansão da silvicultura",
  "why": "O Pampa é o segundo menor bioma brasileiro e tem áreas de vegetação nativa convertidas para a silvicultura, com plantios comerciais de árvores como pinus e eucalipto.",
  "wrong": {
    "0": "O Cerrado não é o segundo menor bioma, e a paisagem de hotéis-fazenda descrita é associada ao Pampa.",
    "1": "A produção de uva existe no Sul, mas não é a principal atividade de conversão ampla da vegetação nativa indicada.",
    "3": "A Mata Atlântica não é o segundo menor bioma, e a cana-de-açúcar não corresponde à paisagem cultural descrita.",
    "4": "O café não identifica o bioma nem a atividade central do excerto."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 22,
  "statement": "O crescimento desordenado de Manaus, em um processo histórico, privilegiou o transporte de rodas motorizado em detrimento de outros modais, como o hidroviário. Para Marcos Castro, professor da Universidade Federal do Amazonas (UFAM), mesmo sendo cortada por igarapés e cercada por rios, a cidade nunca teve propostas concretas sobre o transporte coletivo urbano hidroviário. Segundo Castro, essa seria uma das soluções para desconcentrar a operação do transporte rodoviário. O professor completa, ainda, que a interligação das zonas ocorreria por meio de portos em toda a orla de Manaus. Nos bairros, a possibilidade seria a instalação de hidrovias urbanas nos igarapés. (Marcelo Moreira. https://amazonasatual.com.br, 08.09.2023. Adaptado.)",
  "alternatives": [
    "a condição da baixa profundidade dos rios em planalto e as barreiras para conter alagamentos nos igarapés.",
    "a variação do movimento das marés durante os dias e a poluição do lixo urbano descartado nos igarapés.",
    "o elevado potencial pesqueiro dos rios e a intensa impermeabilização das áreas no entorno dos igarapés.",
    "as oscilações do nível dos rios em diferentes épocas do ano e o processo de canalização dos igarapés.",
    "as demandas da água para o abastecimento urbano por meio dos rios e a ação do assoreamento nos igarapés."
  ],
  "answer": "D",
  "statementAfter": "São fatores que limitam a implantação do modal hidroviário em Manaus:",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Geografia",
  "content": "Limites do transporte hidroviário urbano em Manaus",
  "why": "A oscilação sazonal do nível dos rios dificulta a operação regular, e a canalização dos igarapés restringe seu aproveitamento como hidrovias urbanas.",
  "wrong": {
    "0": "Manaus não está em região de rios de planalto, e as barreiras contra alagamentos não são o par de fatores apresentado.",
    "1": "A poluição é um problema real, mas a variação diária de marés não caracteriza os rios de Manaus.",
    "2": "A impermeabilização agrava problemas urbanos, porém o elevado potencial pesqueiro não limita o modal.",
    "4": "O assoreamento pode dificultar a navegação, mas a demanda de água para abastecimento não é o fator limitante indicado."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 23,
  "statement": "Examine a ilustração do cartunista britânico David A. Parkins.",
  "alternatives": [
    "a corrida tecnológica entre o governo dos dois países para assegurar a hegemonia mundial dos semicondutores.",
    "o acirramento pelo registro de marcas patentes tecno-analógicas entre os setores produtivos dos dois países.",
    "a disparada na guerra cambial entre os dois países para manter a paridade do dólar com a moeda chinesa.",
    "a ruptura diplomática entre os dois países para consolidar unilateralmente as zonas de influência econômica na América Latina.",
    "a repentina Guerra Fria voltada para a proteção do mercado consumidor interno, no setor de inovações."
  ],
  "answer": "A",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce2-q23-disputa-tecnologica.svg",
      "alt": "Ilustração de Estados Unidos e China em disputa sobre uma estrutura de circuito eletrônico, com bandeiras dos dois países."
    }
  ],
  "statementAfter": "Sobre as disputas comerciais entre a China e os Estados Unidos, a ilustração representa",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Geografia",
  "content": "Disputa tecnológica entre China e Estados Unidos",
  "why": "Os circuitos e as bandeiras representam a rivalidade tecnológica sino-americana, especialmente a disputa pela hegemonia na produção e no controle de semicondutores.",
  "wrong": {
    "1": "A ilustração não trata de registro de marcas “tecno-analógicas”, mas da competição estratégica por tecnologia.",
    "2": "Não há elementos de câmbio ou de paridade entre dólar e moeda chinesa.",
    "3": "A disputa não representa ruptura diplomática nem zonas de influência na América Latina.",
    "4": "A rivalidade atual não é apresentada como repentina Guerra Fria voltada apenas à proteção do mercado interno."
  }
}),

  q({
  "n": 24,
  "statement": "A lógica aplicada para o fornecimento de energia elétrica em outras regiões do Brasil é inadequada para a Amazônia. As matrizes energéticas ambientalmente corretas devem ser as principais alternativas de geração de energia elétrica para comunidades e regiões excluídas eletricamente no Amazonas, sejam pelas dificuldades físicas ou geográficas. As energias renováveis podem contribuir para sanar o apagão histórico vivenciado por populações tradicionais em pleno século XXI; na região amazônica, há o predomínio da matriz energética baseada no diesel. (www.wwf.org.br, 20.03.2024. Adaptado.)",
  "alternatives": [
    "o deslocamento de populações tradicionais.",
    "a construção de usinas nucleares.",
    "a expansão da rede de termelétricas.",
    "o investimento em energia solar.",
    "o fornecimento de gás natural por gasodutos."
  ],
  "answer": "D",
  "statementAfter": "Com base no excerto, uma opção para sanar as dificuldades na geração de energia elétrica e também atender aos interesses ambientais na Amazônia brasileira é",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Geografia",
  "content": "Energia solar e eletrificação sustentável na Amazônia",
  "difficulty": "Fácil",
  "why": "A energia solar é renovável, pode ser gerada de forma distribuída e atende comunidades isoladas com menor impacto que a matriz baseada em diesel.",
  "wrong": {
    "0": "Deslocar populações tradicionais não resolve a geração de energia e agrava impactos sociais.",
    "1": "Usinas nucleares exigem infraestrutura complexa e não são a alternativa ambiental apontada para comunidades isoladas.",
    "2": "Ampliar termelétricas fósseis mantém ou aumenta emissões e não substitui adequadamente a matriz a diesel.",
    "4": "Gasodutos e gás natural envolvem combustível fóssil e infraestrutura extensa, contrariando a proposta renovável do excerto."
  },
  "blockTypes": [
    "prose"
  ]
}),

  q({
  "n": 25,
  "statement": "Considere a tirinha de Will Leite, publicada no perfil @will.tirando do Instagram.",
  "alternatives": [
    "confirma, para o leitor, a veracidade das afirmações feitas pelo cliente.",
    "expõe, para o leitor, a dificuldade de Jair para cumprir horários.",
    "explicita, para o leitor, a relação de amizade existente entre os dois personagens.",
    "aponta, para o leitor, uma contradição nas considerações feitas pelo cliente.",
    "revela, para o leitor, o desinteresse de Jair por seu trabalho."
  ],
  "answer": "A",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce2-q25-tirinha-jair.svg",
      "alt": "Tirinha de Will Leite: cliente reclama que ninguém liga para ele; ao ouvir que o bar está fechando, Jair diz que ninguém liga para suas dores."
    }
  ],
  "statementAfter": "A atitude de Jair, no último quadrinho,",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Interpretação de tirinha e confirmação de sentido",
  "difficulty": "Média",
  "why": "Ao anunciar apenas que o bar está fechando, Jair desconsidera a queixa do cliente e confirma, pelo comportamento, a afirmação de que ninguém liga para ele e para suas dores.",
  "wrong": {
    "1": "A fala sobre o fechamento do bar não expõe dificuldade pessoal de Jair para cumprir horários.",
    "2": "A atitude não explicita amizade, mas falta de acolhimento da queixa do cliente.",
    "3": "Não há contradição nas considerações do cliente: a reação de Jair as confirma.",
    "4": "Jair está trabalhando e informa o fechamento; a cena não revela desinteresse dele por seu trabalho."
  }
}),

  q({
  "n": 26,
  "alternatives": [
    "medrosa.",
    "estrategista.",
    "otimista.",
    "carismática.",
    "fantasiosa."
  ],
  "answer": "E",
  "common": "ciranda",
  "statementAfter": "De acordo com a cena narrada, a personagem Virgínia, quando criança, era:",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Literatura",
  "content": "Ciranda de pedra: caracterização de Virgínia",
  "difficulty": "Fácil",
  "why": "Virgínia imagina que os bichos têm alma e que pessoas podem voltar como animais ou borboletas, revelando uma criança fantasiosa.",
  "wrong": {
    "0": "Embora sinta angústia, o traço construído pela cena é a imaginação, e não uma caracterização geral como medrosa.",
    "1": "Não há planejamento estratégico na sequência de pensamentos e ações da personagem.",
    "2": "A personagem se julga feia e ruim e se angustia, comportamento incompatível com o otimismo.",
    "3": "A cena não apresenta interações que comprovem carisma; seu foco é o mundo imaginário de Virgínia."
  }
}),

  q({
  "n": 27,
  "alternatives": [
    "uma tia de Virgínia, casada com Tio Daniel.",
    "a irmã de Conrado.",
    "a empregada da casa onde Virgínia mora na infância.",
    "uma das irmãs de Virgínia.",
    "a mãe de Virgínia."
  ],
  "answer": "C",
  "common": "ciranda",
  "statementAfter": "No romance, a personagem Luciana é",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Literatura",
  "content": "Ciranda de pedra: personagem Luciana",
  "difficulty": "Média",
  "why": "No romance Ciranda de pedra, Luciana é a empregada da casa em que Virgínia vive na infância.",
  "wrong": {
    "0": "Luciana não é tia de Virgínia nem esposa de tio Daniel; sua função na casa é a de empregada.",
    "1": "Não existe, na caracterização da personagem, a relação de irmandade com Conrado indicada na alternativa.",
    "3": "Luciana não é apresentada no romance como uma das irmãs de Virgínia.",
    "4": "A mãe de Virgínia é Laura, não Luciana."
  }
}),

  q({
  "n": 28,
  "alternatives": [
    "grosseira.",
    "vaga.",
    "falsa.",
    "longa.",
    "apressada."
  ],
  "answer": "B",
  "common": "ciranda",
  "statementAfter": "No trecho “— Estou fazendo uma coisa — respondeu evasivamente” (7º parágrafo), a palavra “evasivamente” indica que a resposta foi",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Evasivamente e valor semântico em contexto",
  "difficulty": "Fácil",
  "why": "Evasivamente significa de maneira evasiva, ou seja, a resposta de Virgínia foi vaga e não esclareceu o que ela estava fazendo.",
  "wrong": {
    "0": "A resposta não contém agressividade ou grosseria.",
    "2": "O texto permite concluir que a resposta é vaga, mas não comprova que seu conteúdo seja falso.",
    "3": "A fala é curta e não pode ser caracterizada como longa.",
    "4": "O advérbio caracteriza a falta de clareza, não a velocidade da resposta."
  }
}),

  q({
  "n": 29,
  "alternatives": [
    "quem mandava nela seria seu pai.",
    "quem mandaria nela era seu pai.",
    "quem mandava nela era seu pai.",
    "quem mandaria nela seria seu pai.",
    "quem manda nela é seu pai."
  ],
  "answer": "C",
  "common": "ciranda",
  "statementAfter": "A fala “quem manda em mim é meu pai” (11º parágrafo), passada ao discurso indireto, assume a seguinte redação:",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Discurso direto e indireto",
  "difficulty": "Média",
  "why": "Na passagem ao discurso indireto em contexto narrativo passado, “manda” e “é” tornam-se “mandava” e “era”: quem mandava nela era seu pai.",
  "wrong": {
    "0": "O segundo verbo não deve ir para o condicional “seria”; a forma adequada é “era”.",
    "1": "A primeira forma está no condicional e a segunda no pretérito imperfeito, combinação que não preserva a correspondência verbal.",
    "3": "Os condicionais “mandaria” e “seria” introduzem hipótese ou futuro do pretérito e alteram o sentido da fala.",
    "4": "Manter “manda” e “é” no presente não realiza a transposição temporal exigida pelo discurso indireto."
  }
}),

  q({
  "n": 30,
  "alternatives": [
    "consequência.",
    "causa.",
    "alternativa.",
    "finalidade.",
    "explicação."
  ],
  "answer": "C",
  "common": "ciranda",
  "statementAfter": "“— Ou você abre ou conto para o seu tio.” (9º parágrafo) Em relação à primeira, a segunda oração expressa uma",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Orações coordenadas alternativas",
  "difficulty": "Fácil",
  "why": "A conjunção “ou” estabelece relação de alternância entre abrir a porta e contar para o tio; portanto, a segunda oração é coordenada alternativa.",
  "wrong": {
    "0": "Embora a fala implique uma ameaça, a relação sintática marcada por “ou” é de alternância, não de consequência.",
    "1": "A segunda oração não apresenta a causa da primeira.",
    "3": "Não há conector de finalidade nem indicação de finalidade sintática entre as orações.",
    "4": "Ela não explica a primeira oração, mas oferece outra possibilidade."
  }
}),

  q({
  "n": 31,
  "statement": "Considere a tirinha de Pablo Carballo, publicada no perfil @opablocarballo do Instagram.",
  "alternatives": [
    "fato pontual, isolado, no presente.",
    "fato repetitivo.",
    "estado suposto, hipotético.",
    "estado contínuo, duradouro.",
    "fato pontual, isolado, no passado."
  ],
  "answer": "D",
  "blockTypes": [
    "label"
  ],
  "visuals": [
    {
      "file": "uea2024ce2-q31-tirinha-ainda.svg",
      "alt": "Tirinha de Pablo Carballo: uma personagem pergunta o que a outra está fazendo e recebe a resposta de que ainda está sem fazer nada."
    }
  ],
  "statementAfter": "A palavra “ainda”, no último quadrinho, indica que “tá sem fazer nada” é um",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Ainda e aspecto verbal em tirinha",
  "difficulty": "Fácil",
  "why": "O advérbio “ainda” apresenta a situação de estar sem fazer nada como um estado que se mantém ao longo do tempo, contínuo e duradouro.",
  "wrong": {
    "0": "“Ainda” prolonga a situação e não a reduz a um ponto isolado do presente.",
    "1": "A repetição é sugerida por “de novo”, enquanto “ainda” expressa a continuidade do estado.",
    "2": "A personagem afirma uma situação real no diálogo, sem marcar suposição ou hipótese.",
    "4": "O estado não é apresentado como um fato pontual encerrado no passado."
  }
}),

  q({
  "n": 32,
  "alternatives": [
    "acontece depois que um relacionamento afetivo já acabou.",
    "beneficia um dos envolvidos em um relacionamento afetivo, mas não ambos.",
    "ocorre na fase final de um relacionamento afetivo, quando ele já está destinado a acabar.",
    "parece positivo, mas que destrói um relacionamento afetivo discretamente e aos poucos.",
    "prejudica um relacionamento afetivo e pode levá-lo ao término."
  ],
  "answer": "A",
  "common": "serial",
  "statementAfter": "No contexto em que está inserida, a palavra sublinhada em “É uma traição p̲ó̲s̲t̲u̲m̲a̲, retardatária, residual” (1º parágrafo) tem o sentido de algo que",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Póstuma e sentido em contexto",
  "difficulty": "Fácil",
  "why": "“Póstuma” refere-se ao que ocorre depois do fim; no texto, a traição acontece depois que o relacionamento afetivo já acabou.",
  "wrong": {
    "1": "O texto não apresenta a traição como benefício a um dos envolvidos.",
    "2": "O sentido não é o da fase final antes do término, mas o de algo posterior ao fim do relacionamento.",
    "3": "A crítica não descreve um benefício aparente que destrói aos poucos uma relação ainda existente.",
    "4": "A ação descrita não conduz ao término: ela ocorre quando o relacionamento já terminou."
  }
}),

  q({
  "n": 33,
  "alternatives": [
    "ao eufemismo.",
    "à personificação.",
    "à hipérbole.",
    "à metalinguagem.",
    "ao pleonasmo."
  ],
  "answer": "B",
  "common": "serial",
  "statementAfter": "Em “porém a consciência não é boba e um dia se vinga” (13º parágrafo), o autor recorre, sobretudo,",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Personificação em crônica",
  "difficulty": "Fácil",
  "why": "A consciência recebe características e ações humanas — não ser boba e vingar-se —, recurso de personificação ou prosopopeia.",
  "wrong": {
    "0": "Não se suaviza uma ideia desagradável; ao contrário, atribui-se à consciência a possibilidade de vingança.",
    "2": "Não há exagero intensificador que constitua hipérbole.",
    "3": "O autor não volta a discussão para a própria linguagem ou para o ato de escrever, portanto não predomina metalinguagem.",
    "4": "Não há repetição redundante de sentido que caracterize pleonasmo."
  }
}),

  q({
  "n": 34,
  "alternatives": [
    "“história”.",
    "“fórmula”.",
    "“ninguém”.",
    "“Você”.",
    "“assunto”."
  ],
  "answer": "D",
  "common": "serial",
  "statementAfter": "“Acredita em s̲u̲a̲ inocência porque ninguém comentará o assunto.” (13º parágrafo)\n\nO pronome sublinhado refere-se a",
  "afterBlockTypes": [
    "quote",
    "command"
  ],
  "subject": "Português",
  "content": "Referenciação pronominal e possessividade",
  "difficulty": "Média",
  "why": "O possessivo “sua” retoma “Você”, sujeito das ações descritas: a pessoa acredita na própria inocência.",
  "wrong": {
    "0": "“História” integra a expressão “história feliz” e não funciona como antecedente do possessivo.",
    "1": "“Fórmula” pertence ao parágrafo anterior e não é o ser a quem se atribui a inocência.",
    "2": "“Ninguém” é sujeito da oração seguinte e não o referente de “sua”.",
    "4": "“Assunto” é objeto da fala de outras pessoas e não o possuidor indicado pelo pronome."
  }
}),

  q({
  "n": 35,
  "alternatives": [
    "“É como remanejar presentes, aproveitar alianças antigas” (5º parágrafo).",
    "“Alcança aquilo que foi ensaiado com o antecessor” (11º parágrafo).",
    "“um segredo com pequenas chances de ser revelado, porém a consciência não é boba” (13º parágrafo).",
    "“É quando você insiste em escrever e tecer declarações exatamente iguais” (2º parágrafo).",
    "“apaga a invenção a dois e a costura por caminhos surpreendentes e inesquecíveis” (12º parágrafo)."
  ],
  "answer": "E",
  "common": "serial",
  "statementAfter": "Ocorre uma palavra formada com um prefixo que expressa negação em:",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Português",
  "content": "Prefixo de negação e formação de palavras",
  "difficulty": "Média",
  "why": "Em “inesquecíveis”, o prefixo “in-” acrescenta negação a “esquecíveis”: que não podem ser esquecidos.",
  "wrong": {
    "0": "Em “remanejar”, “re-” indica repetição ou nova realização da ação.",
    "1": "Em “antecessor”, “ante-” indica anterioridade, e não negação.",
    "2": "Em “revelado”, o prefixo “re-” não possui valor de negação.",
    "3": "Em “insiste”, o elemento inicial não expressa negação; a palavra não significa “não existe” ou sentido semelhante."
  }
}),

  q({
  "n": 36,
  "statement": "Leia o poema “Sanduíche matinal”, de Astrid Cabral.\n\nSanduíche matinal\n\nMastigam-se ao café\nentre fatias torradas\njornais com pingos de sangue\njornais com furos de bala.\n\nNo portal da manhã\no sinistro sanduíche\nenergiza os transeuntes do dia.\n\n(Engavetado o remorso\ndos crimes bem menores)\n\nOmissões? traições? covardias?\nTransgressões mínimas.\nTodos, subitamente, melhores.\n\n(Astrid Cabral. Intramuros, 2011.)",
  "alternatives": [
    "faz com que as infrações usuais e cotidianas pareçam, para o leitor, pequenas em comparação com os crimes noticiados.",
    "estabelece um critério objetivo do que é correto, dando ao leitor uma sensação reconfortante de justiça social.",
    "desperta no leitor um instinto destrutivo que o leva a ter prazer em presenciar o sofrimento alheio.",
    "oferece ao leitor um espelho para suas próprias atitudes, conduzindo-o ao sofrimento e ao sentimento de culpa a respeito de suas transgressões cotidianas.",
    "prepara o leitor para a violência da realidade urbana, fazendo com que fique mais precavido em sua rotina no espaço público."
  ],
  "answer": "A",
  "blockTypes": [
    "label",
    "poem-title",
    "poem",
    "poem",
    "poem",
    "poem",
    "source"
  ],
  "works": [
    "Intramuros"
  ],
  "statementAfter": "No contexto apresentado pelo poema, a leitura matinal dos jornais",
  "afterBlockTypes": [
    "command"
  ],
  "subject": "Literatura",
  "content": "Sanduíche matinal: poesia e violência",
  "difficulty": "Média",
  "why": "Os crimes violentos dos jornais fazem as transgressões cotidianas parecerem mínimas; com o remorso “engavetado”, os leitores se sentem subitamente melhores.",
  "wrong": {
    "1": "O poema ironiza a comparação moral e não estabelece critério objetivo de justiça social.",
    "2": "Não há despertar de instinto destrutivo nem prazer explícito com o sofrimento alheio.",
    "3": "O poema diz que o remorso é engavetado, portanto a leitura não conduz ao sofrimento e à culpa.",
    "4": "O efeito apresentado não é precaução na rotina, mas a sensação ilusória de superioridade moral."
  }
}),

  essay({
  "statement": "REDAÇÃO\n\nTexto 1\n\nA interação de crianças com a internet ocorre cada vez mais cedo e de forma ampla. Cerca de um terço dos usuários da rede no mundo é de crianças e adolescentes, segundo dados da pesquisa TIC Kids on-line, produzida pelo Comitê Gestor da Internet (CGO.br). Ao todo, 95% das crianças e adolescentes de 9 a 17 anos acessaram a internet em 2023. Entre as crianças de 9 a 10 anos, 68% disseram ter perfis em redes sociais.\n\n“Importante destacar as oportunidades de aprendizado e entretenimento e acesso a direitos fundamentais dessa presença de crianças e adolescentes no ambiente digital, mas também os riscos de exploração, exposição e acesso a conteúdos inapropriados”, diz Maria Mello, coordenadora do Programa Criança e Consumo do Instituto Alana, entidade de histórica atuação nos direitos da infância.\n\n(Pedro Rafael Vilela. https://agenciabrasil.ebc.com.br, 14.03.2024. Adaptado.)\n\nTexto 2\n\nO governador da Flórida, nos Estados Unidos, Ron DeSantis, sancionou um projeto de lei que limita o acesso de menores de 16 anos a redes sociais. A norma entrará em vigor em 1º de janeiro de 2025. A partir do ano que vem, crianças com menos de 14 anos estarão proibidas de acessar as plataformas de redes sociais, e adolescentes entre 14 e 15 anos podem ter acesso, desde que obtenham consentimento dos pais, uma medida que, segundo seus apoiadores, protegerá esses jovens e crianças dos riscos on-line à saúde mental.\n\nApoiadores afirmam que a lei conterá os efeitos prejudiciais das redes sociais sobre o bem-estar das crianças que usam essas plataformas excessivamente e que, como resultado, podem sofrer de ansiedade, depressão e outros problemas de saúde mental.\n\n(https://g1.globo.com, 26.03.2024. Adaptado.)\n\nTexto 3",
  "blockTypes": [
    "label",
    "subheading",
    "quote",
    "quote",
    "source",
    "subheading",
    "quote",
    "quote",
    "source",
    "subheading"
  ],
  "visuals": [
    {
      "file": "uea2024ce2-redacao-texto3.svg",
      "alt": "Charge sobre restrição de menores em redes sociais: Instagram e Facebook dizem Toma que o filho é teu ao devolver uma criança aos pais."
    }
  ],
  "statementAfter": "Texto 4\n\nProibir o uso das redes sociais não é a solução e achar que elas vão deixar de existir é ilusão. Uma das correntes positivas encontradas nas redes é o aprendizado. Hoje, já é possível encontrar diversos perfis para se aprender temas diversos que vão desde cozinhar até falar outro idioma. A própria plataforma do TikTok já disponibiliza uma seção “Aprender” com conteúdos mais educativos. Além do acesso ao conhecimento, as redes sociais também ampliaram as interações sociais. Conhecer novas pessoas com interesses em comum, por exemplo, faz com que as redes sociais promovam aspectos de socialização e de comunicação. Isso acontece com mais intensidade durante a adolescência, já que essa é uma fase em que há a inclusão social do indivíduo em grupos.\n\n(Carolina Delboni. www.estadao.com.br, 14.08.2023. Adaptado.)\n\nCom base nos textos apresentados e em seus próprios conhecimentos, escreva um texto dissertativo-argumentativo, empregando a norma-padrão da língua portuguesa, sobre o tema:",
  "afterBlockTypes": [
    "subheading",
    "quote",
    "source",
    "command"
  ],
  "statementTail": "Crianças e adolescentes devem ser proibidos de acessar redes sociais?",
  "tailBlockTypes": [
    "headline"
  ],
  "parts": [
    {
      "id": "T",
      "prompt": "Produza um texto dissertativo-argumentativo em norma-padrão da língua portuguesa.",
      "expected": "Não há resposta única. A proposta editorial espera uma argumentação sobre a proibição do acesso de crianças e adolescentes às redes sociais, considerando direitos, aprendizado, socialização, mediação familiar e riscos à saúde e à segurança."
    }
  ],
  "studyNotes": [
    "Orientação editorial, não oficial: apresente uma tese clara sobre a proibição, examine benefícios e riscos do ambiente digital e defenda seu ponto de vista com argumentos relacionados aos textos motivadores e a conhecimentos próprios.",
    "A redação não recebe nota automática nem deve ser comparada a um gabarito de alternativa."
  ]
}),
];
