/**
 * aiKnowledgeBase.js
 * Motor inteligente e base de conhecimento da assistente Sofia IA para vestibulares.
 */

import { STUDY_SHEETS } from './studySheets.js';
import { CURATED_LISTS } from './curatedLists.js';

// Base de resumos de alta incidência para respostas imediatas sem dependência externa
export const HIGH_YIELD_SUMMARIES = {
  'el-nino': {
    title: 'El Niño e La Niña (ENOS)',
    subject: 'Geografia / Climatologia',
    content: `
### 🌊 Fenômeno ENOS (El Niño - Oscilação do Sul)

* **El Niño (Fase Quente):**
  - **Mecanismo:** Enfraquecimento dos ventos alísios de leste para oeste. As águas quentes superficiais represam-se no Pacífico equatorial leste (costa do Peru).
  - **Oceano:** Supressão da ressurgência da Corrente fria de Humboldt no litoral peruano, prejudicando nutrientes e a atividade pesqueira.
  - **Célula de Walker:** Deslocamento dos centros de convecção e alteração profunda na circulação equatorial.
  - **Impactos no Brasil:**
    - **Norte / Amazônia e Nordeste:** Bloqueios atmosféricos provocam seca severa, estiagens prolongadas e alto risco de queimadas.
    - **Sul:** Frentes frias retidas geram chuvas torrenciais persistentes e inundações catastróficas.
    - **Sudeste / Centro-Oeste:** Verões mais quentes com chuvas irregulares.

* **La Niña (Fase Fria):**
  - **Mecanismo:** Intensificação extrema dos ventos alísios. Águas superficiais mais frias que o normal no Pacífico equatorial.
  - **Impactos no Brasil:** Estiagens severas no Sul; aumento expressivo de precipitações no Norte e no semiárido do Nordeste.

#### 📊 Quadro Comparativo Síntese:

| Parâmetro | El Niño (Fase Quente) | La Niña (Fase Fria) |
| :--- | :--- | :--- |
| **Ventos Alísios** | Enfraquecidos / Invertidos | Fortalecidos / Intensificados |
| **Temperatura do Pacífico Leste** | Anormalmente aquecida ($+0,5^\\circ\\text{C}$ a $+3^\\circ\\text{C}$) | Anormalmente resfriada |
| **Ressurgência de Humboldt (Peru)** | Suprimida (reduz cardumes) | Intensificada (águas ricas em nutrientes) |
| **Norte e Nordeste (Brasil)** | Seca severa e estiagens | Chuvas volumosas e cheias |
| **Sul (Brasil)** | Chuvas torrenciais e inundações | Estiagens severas e secas prolongadas |
`,
  },
  'mitose-meiose': {
    title: 'Divisão Celular: Mitose vs Meiose',
    subject: 'Biologia Celular',
    content: `
### 🧬 Mitose vs Meiose

* **Mitose (Equacional - $2n \\rightarrow 2n$):**
  - Ocorre em células somáticas para crescimento, regeneração tecidual e cicatrização.
  - **Fases em ordem:**
    1. **Prófase:** Condensação da cromatina, fragmentação da carioteca e início do fuso acromático.
    2. **Metáfase:** Cromossomos alinhados na placa equatorial com condensação máxima.
    3. **Anáfase:** Encurtamento das fibras do fuso e **separação das cromátides-irmãs**.
    4. **Telófase:** Reconstituição da carioteca, descondensação e citocinese.
  - *Mnemônico clássico:* **P**ró-**M**ete-**A**-**A**na-**T**elefonar (**P**rófase, **M**etáfase, **A**náfase, **T**elófase).

* **Meiose (Reducional + Equacional - $2n \\rightarrow n$):**
  - Ocorre na formação de gametas (animais) e esporos (vegetais).
  - **Meiose I (Reducional):** Ocorre o *crossing-over* (permutação gênica no Paquíteno da Prófase I) e a **separação dos cromossomos homólogos** na Anáfase I.
  - **Meiose II (Equacional):** Separação das **cromátides-irmãs** na Anáfase II. Gera 4 células haploides geneticamente diversas.

#### 📊 Quadro Comparativo: Mitose vs Meiose

| Aspecto | Mitose | Meiose |
| :--- | :--- | :--- |
| **Natureza da Divisão** | Equacional ($2n \\rightarrow 2n$) | Reducional (I) e Equacional (II) ($2n \\rightarrow n$) |
| **Tipo de Célula** | Células Somáticas | Células Germinativas (Gônadas) |
| **Nº de Células-filhas** | 2 células idênticas | 4 células geneticamente distintas |
| **Crossing-Over** | Não ocorre | Ocorre na Prófase I (Paquíteno) |
| **Papel Biológico** | Regeneração e crescimento | Variabilidade genética e reprodução |
`,
  },
  'leis-de-newton': {
    title: 'Leis de Newton e Dinâmica',
    subject: 'Física / Mecânica',
    content: `
### ⚡ As Três Leis de Newton

1. **1ª Lei (Princípio da Inércia):**
   - Todo corpo em repouso tende a permanecer em repouso, e todo corpo em movimento retilíneo uniforme (MRU) tende a continuar em MRU, a menos que uma força resultante não nula atue sobre ele ($\\Sigma \\vec{F} = 0 \\iff \\vec{a} = 0$).

2. **2ª Lei (Princípio Fundamental da Dinâmica):**
   - A aceleração que um corpo adquire é diretamente proporcional à força resultante que atua sobre ele e inversamente proporcional à sua massa:
     $$\\vec{F}_{res} = m \\cdot \\vec{a}$$

3. **3ª Lei (Ação e Reação):**
   - Para toda força de ação existe uma de reação com mesma intensidade, mesma direção e sentidos opostos, atuando sempre em **corpos distintos** (por isso, ação e reação *nunca se anulam*).
`,
  },
  'circuitos-eletricos': {
    title: 'Eletrodinâmica: Leis de Ohm e Circuitos',
    subject: 'Física / Eletricidade',
    content: `
### 🔌 Eletrodinâmica e Circuitos

* **1ª Lei de Ohm:**
  $$U = R \\cdot i \\quad \\text{("Você Ri")}$$
  - $U$: Diferença de potencial / Tensão em Volts ($\\text{V}$)
  - $R$: Resistência elétrica em Ohms ($\\Omega$)
  - $i$: Corrente elétrica em Ampères ($\\text{A}$)

* **Potência Elétrica Dissipada:**
  $$P = U \\cdot i = R \\cdot i^2 = \\frac{U^2}{R}$$

* **Associação de Resistores:**
  - **Em Série:** A corrente elétrica $i$ é a mesma em todos os resistores.
    $$R_{eq} = R_1 + R_2 + R_3 + \\dots$$
  - **Em Paralelo:** A d.d.p. $U$ é a mesma em todos os ramos.
    $$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots \\quad \\text{ou para dois:} \\quad R_{eq} = \\frac{R_1 \\cdot R_2}{R_1 + R_2}$$
`,
  },
  'termodinamica': {
    title: 'Termodinâmica e Máquinas Térmicas',
    subject: 'Física / Termologia',
    content: `
### 🔥 1ª e 2ª Leis da Termodinâmica

* **1ª Lei da Termodinâmica (Conservação de Energia):**
  $$Q = \\tau + \\Delta U$$
  - $Q > 0$: calor absorvido; $Q < 0$: calor cedido pelo sistema.
  - $\\tau = P \\cdot \\Delta V$: trabalho realizado em transformações isobáricas.
  - $\\Delta U$: variação da energia interna. Para gás ideal monoatômico: $\\Delta U = \\frac{3}{2} n R \\Delta T$. A energia interna depende apenas da temperatura absoluta.

* **Transformações Termodinâmicas Especiais:**
  - **Isotérmica ($T = \\text{constante}$):** $\\Delta U = 0 \\implies Q = \\tau$
  - **Isocórica ($V = \\text{constante}$):** $\\tau = 0 \\implies Q = \\Delta U$
  - **Adiabática ($Q = 0$):** Sem troca de calor com o meio $\\implies \\Delta U = -\\tau$

* **2ª Lei e Rendimento de Carnot:**
  $$\\eta_{Carnot} = 1 - \\frac{T_{fria}}{T_{quente}}$$
  *(Importante: as temperaturas $T_{fria}$ e $T_{quente}$ devem ser sempre expressas na escala Kelvin!)*
`,
  },
  'genetica-mendeliana': {
    title: 'Genética Mendeliana e Dogma Central',
    subject: 'Biologia / Genética',
    content: `
### 🧬 Genética e Biologia Molecular

* **1ª Lei de Mendel (Segregação dos Fatores):**
  - Cada característica é determinada por um par de alelos que se segregam durante a formação dos gametas.

* **2ª Lei de Mendel (Segregação Independente):**
  - Alelos de dois ou mais genes situados em cromossomos diferentes segregam de forma independente, gerando a proporção clássica de $9:3:3:1$ no di-hibridismo.

* **Dogma Central da Biologia:**
  $$\\text{DNA} \\xrightarrow{\\text{Transcrição}} \\text{RNA mensageiro} \\xrightarrow{\\text{Tradução (Ribossomos)}} \\text{Proteína}$$

* **Propriedades do Código Genético:**
  - **Degenerado / Redundante:** Vários códons de 3 trincas de bases podem especificar o mesmo aminoácido.
  - **Universal:** O mesmo códon codifica o mesmo aminoácido em quase todos os seres vivos.
`,
  },
};

// Mnemônicos populares de vestibular
export const MNEMONICS = [
  { topic: 'Mitose', phrase: 'Pró-Mete-A-Ana-Telefonar (Prófase, Metáfase, Anáfase, Telófase)' },
  { topic: 'Eletronegatividade', phrase: 'Fui Ontem No Clube, Briguei I Saí Correndo Para o Hospital (F > O > N > Cl > Br > I > S > C > P > H)' },
  { topic: 'Leis de Ohm', phrase: 'U = R . i ("Você Ri") | P = U . i ("Pui") | P = R . i² ("Prii")' },
  { topic: 'Equação de Clapeyron', phrase: 'P . V = n . R . T ("Por Você Nunca Rezei Tanto")' },
  { topic: 'Equação de Torricelli', phrase: 'v² = v₀² + 2 . a . Δs ("Vovô pegou vovó mais duas amigas num triângulo sexual")' },
  { topic: 'Classificação Biológica', phrase: 'Re-Fi-CO-Fa-G-E (Reino, Filo, Classe, Ordem, Família, Gênero, Espécie)' },
];

/**
 * Busca rápida e ranqueada de questões no acervo por termo
 */
export function searchQuestions(query, allQuestions, limit = 5) {
  if (!query || !query.trim() || !allQuestions) return [];
  const terms = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(/\s+/).filter(t => t.length > 2);
  if (!terms.length) return [];

  const scored = allQuestions.map((q) => {
    let score = 0;
    const target = `${q.exam} ${q.year || ''} ${q.number || ''} ${q.subject || ''} ${q.content || ''} ${q.subtopic || ''} ${q.statement || ''} ${q.detail || ''}`
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    for (const term of terms) {
      if (q.id && q.id.toLowerCase().includes(term)) score += 20;
      if (q.content && q.content.toLowerCase().includes(term)) score += 12;
      if (q.subtopic && q.subtopic.toLowerCase().includes(term)) score += 10;
      if (q.exam && q.exam.toLowerCase().includes(term)) score += 8;
      if (target.includes(term)) score += 3;
    }
    return { question: q, score };
  });

  return scored
    .filter((item) => item.score > 5)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.question);
}

/**
 * Formata mensagens para o formato aceito pela API Gemini v1beta:
 * - A primeira mensagem DEVE ter role 'user'
 * - Alterna estritamente entre 'user' e 'model'
 */
function formatGeminiContents(messages) {
  const result = [];
  let lastRole = null;

  for (const m of messages) {
    const role = m.role === 'assistant' ? 'model' : 'user';
    const text = (m.text || m.content || '').trim();
    if (!text) continue;

    // A API Gemini exige que a primeira mensagem seja 'user'
    if (result.length === 0 && role !== 'user') continue;

    if (role === lastRole && result.length > 0) {
      result[result.length - 1].parts[0].text += `\n\n${text}`;
    } else {
      result.push({ role, parts: [{ text }] });
      lastRole = role;
    }
  }

  return result;
}

/**
 * Validador de modelos de texto para vestibulares (exclui modelos de imagem/embedding com limite 0)
 */
export function isAllowedTextModel(name) {
  if (!name || typeof name !== 'string') return false;
  const n = name.toLowerCase().replace(/^models\//, '');
  // Bloqueia expressamente modelos de imagem, preview experimental de imagem, embeddings e áudio
  if (
    n.includes('image') ||
    n.includes('imagen') ||
    n.includes('embedding') ||
    n.includes('aqa') ||
    n.includes('tts') ||
    n.includes('whisper') ||
    n.includes('realtime')
  ) {
    return false;
  }
  // Aceita apenas modelos de texto da família Gemini ou Gemma
  return n.includes('gemini') || n.includes('gemma');
}

/**
 * Pontuação de modelos Gemini (prioriza modelos com cota gratuita ativa de 1.500 req/dia)
 */
export function scoreGeminiModel(name) {
  if (!isAllowedTextModel(name)) return -1;
  const n = name.toLowerCase().replace(/^models\//, '');

  // 1º lugar: Gemini 2.0 Flash (Mais rápido e moderno, 1.500 req/dia grátis)
  if (n === 'gemini-2.0-flash') return 100;
  // 2º lugar: Gemini 1.5 Flash (Ultra estável, alta tolerância de cota)
  if (n === 'gemini-1.5-flash') return 95;
  if (n === 'gemini-1.5-flash-latest') return 90;
  // 3º lugar: Gemini 2.0 Flash Lite (Leve e rápido)
  if (n === 'gemini-2.0-flash-lite' || n.includes('2.0-flash-lite')) return 85;
  // 4º lugar: Gemini 1.5 Flash 8B (Cota isolada de alta velocidade)
  if (n.includes('1.5-flash-8b')) return 80;
  // 5º lugar: Gemini 1.5 Pro
  if (n === 'gemini-1.5-pro' || n === 'gemini-1.5-pro-latest') return 75;
  if (n.includes('2.0-pro')) return 70;
  // 6º lugar: Gemini Pro legado
  if (n === 'gemini-pro') return 60;
  if (n.includes('2.0-flash')) return 50;
  if (n.includes('1.5-flash')) return 45;
  if (n.includes('gemini') && !n.includes('preview')) return 30;
  if (n.includes('gemini')) return 20;
  return 10;
}

/**
 * Formata erros de API em avisos amigáveis e informativos em português
 */
export function formatFriendlyApiError(rawError) {
  if (!rawError) return 'Não foi possível consultar a API externa.';
  const msg = typeof rawError === 'string' ? rawError : rawError.message || String(rawError);

  if (
    msg.includes('Quota exceeded') ||
    msg.includes('RESOURCE_EXHAUSTED') ||
    msg.includes('exceeded your current quota') ||
    msg.includes('rate-limit') ||
    msg.includes('free_tier_requests') ||
    msg.includes('Cota diária gratuita') ||
    msg.includes('Cota gratuita')
  ) {
    const retryMatch = msg.match(/retry in\s+([0-9a-z]+)/i);
    const retryTime = retryMatch ? ` (renovação prevista em aproximadamente ${retryMatch[1]})` : '';
    return `Sua cota diária gratuita do Google AI Studio foi atingida${retryTime}. O **Motor Local Autônomo** assumiu o atendimento da sua pergunta com acesso a todo o acervo!`;
  }

  if (msg.includes('API key not valid') || msg.includes('API_KEY_INVALID')) {
    return 'A chave de API informada é inválida. Por favor, verifique os caracteres no botão de engrenagem ⚙️.';
  }

  if (msg.includes('PERMISSION_DENIED')) {
    return 'Acesso não autorizado para esta chave de API no Google AI Studio.';
  }

  if (msg.includes('does not exist or you do not have access to it') || msg.includes('model not found')) {
    return 'O modelo de IA solicitado não está habilitado nesta chave. Tentamos alternar automaticamente para modelos disponíveis.';
  }

  return msg.length > 140 ? `${msg.slice(0, 140)}...` : msg;
}

/**
 * Descobre dinamicamente os modelos de TEXTO disponíveis na chave Google Gemini do usuário,
 * descartando modelos de imagem/preview com limite 0 no Free Tier.
 */
export async function discoverGeminiModels(cleanKey) {
  if (!cleanKey) return [];

  const endpoints = [
    `https://generativelanguage.googleapis.com/v1beta/models?key=${cleanKey}`,
    `https://generativelanguage.googleapis.com/v1/models?key=${cleanKey}`,
  ];

  let lastError = null;

  for (const url of endpoints) {
    try {
      const res = await fetch(url);
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        lastError = new Error(data.error?.message || `Erro HTTP ${res.status} ao consultar modelos`);
        if (res.status === 400 || res.status === 403) {
          throw lastError;
        }
        continue;
      }

      if (Array.isArray(data.models) && data.models.length > 0) {
        const contentModels = data.models
          .filter((m) => Array.isArray(m.supportedGenerationMethods) && m.supportedGenerationMethods.includes('generateContent'))
          .map((m) => m.name.replace(/^models\//, ''))
          .filter(isAllowedTextModel);

        if (contentModels.length > 0) {
          contentModels.sort((a, b) => scoreGeminiModel(b) - scoreGeminiModel(a));
          return contentModels;
        }
      }
    } catch (err) {
      lastError = err;
      if (err.message && (err.message.includes('API key not valid') || err.message.includes('PERMISSION_DENIED') || err.message.includes('API_KEY_INVALID'))) {
        throw err;
      }
    }
  }

  if (lastError) throw lastError;
  return [];
}

/**
 * Testa e valida uma chave de API (Gemini ou OpenAI) com feedback claro
 */
/**
 * Descobre dinamicamente os modelos habilitados na chave Groq do usuário
 * chamando GET https://api.groq.com/openai/v1/models
 */
export async function discoverGroqModels(cleanKey) {
  try {
    const res = await fetch('https://api.groq.com/openai/v1/models', {
      headers: { Authorization: `Bearer ${cleanKey}` },
    });
    if (!res.ok) return [];
    const data = await res.json().catch(() => ({}));
    if (Array.isArray(data.data) && data.data.length > 0) {
      const models = data.data
        .map((m) => m.id)
        .filter((id) => {
          const i = id.toLowerCase();
          return !i.includes('whisper') && !i.includes('guard') && !i.includes('embed') && !i.includes('audio') && !i.includes('tts');
        });

      const score = (id) => {
        const i = id.toLowerCase();
        if (i === 'llama-3.3-70b-versatile') return 100;
        if (i.includes('llama-3.3-70b')) return 95;
        if (i === 'llama-3.1-8b-instant') return 90;
        if (i.includes('llama-3.1-8b')) return 85;
        if (i.includes('qwen-2.5-32b')) return 84;
        if (i.includes('deepseek-r1-distill-llama-70b')) return 82;
        if (i.includes('gpt-oss-120b')) return 80;
        if (i.includes('gpt-oss-20b')) return 78;
        if (i.includes('llama3-70b')) return 75;
        if (i.includes('llama3-8b')) return 70;
        if (i.includes('mixtral')) return 65;
        if (i.includes('gemma2-9b')) return 60;
        if (i.includes('gemma')) return 50;
        return 10;
      };

      models.sort((a, b) => score(b) - score(a));
      return models;
    }
  } catch (_) {}
  return [];
}

export async function testApiKey(rawKey) {
  const cleanKey = (rawKey || '').trim().replace(/^["']|["']$/g, '');
  if (!cleanKey) return { ok: false, message: 'Insira uma chave para testar.' };

  // 1. Chave Groq Cloud (inicia com gsk_) — Ultra Rápido e 100% Gratuito com failover
  if (cleanKey.startsWith('gsk_')) {
    let groqCandidates = [];
    try {
      const discovered = await discoverGroqModels(cleanKey);
      if (discovered.length > 0) groqCandidates = discovered;
    } catch (_) {}

    const defaultFallbacks = [
      'llama-3.3-70b-versatile',
      'llama-3.1-8b-instant',
      'llama3-70b-8192',
      'llama3-8b-8192',
      'mixtral-8x7b-32768',
      'gemma2-9b-it',
    ];

    for (const fb of defaultFallbacks) {
      if (!groqCandidates.includes(fb)) groqCandidates.push(fb);
    }

    let lastGroqError = null;
    for (const model of groqCandidates.slice(0, 6)) {
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cleanKey}`,
          },
          body: JSON.stringify({
            model,
            messages: [{ role: 'user', content: 'responda: ok' }],
            max_tokens: 5,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          try {
            localStorage.setItem('sofia_active_groq_model', model);
            localStorage.setItem('sofia_active_gemini_model', `Groq (${model})`);
          } catch (_) {}
          return {
            ok: true,
            message: `⚡ Conectado à Groq (${model} — Ultra Rápido e Grátis)!`,
            model: `Groq (${model})`,
          };
        }

        const errMsg = data.error?.message || `Erro HTTP ${res.status} no modelo ${model}`;
        if (errMsg.includes('Invalid API Key') || res.status === 401) {
          return { ok: false, message: `Chave Groq inválida: ${errMsg}` };
        }
        lastGroqError = errMsg;
      } catch (e) {
        lastGroqError = e.message;
      }
    }

    return {
      ok: false,
      message: lastGroqError || 'Não foi possível validar a chave na Groq.',
    };
  }

  // 2. Chave OpenRouter (inicia com sk-or-) — Modelos Gratuitos
  if (cleanKey.startsWith('sk-or-')) {
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cleanKey}`,
          'HTTP-Referer': 'https://banco-de-questoes.local',
          'X-Title': 'Acervo Vestibulares',
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3.3-70b-instruct:free',
          messages: [{ role: 'user', content: 'responda: ok' }],
          max_tokens: 5,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        return { ok: false, message: data.error?.message || `Erro HTTP ${res.status} no OpenRouter` };
      }
      try { localStorage.setItem('sofia_active_gemini_model', 'OpenRouter (Llama 3.3 Free)'); } catch (_) {}
      return { ok: true, message: '🌐 Conectado ao OpenRouter (Llama 3.3 Free)!', model: 'OpenRouter Free' };
    } catch (e) {
      return { ok: false, message: `Erro de conexão com OpenRouter: ${e.message}` };
    }
  }

  // 3. Chave OpenAI padrão (inicia com sk-)
  if (cleanKey.startsWith('sk-')) {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cleanKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: 'responda: ok' }],
          max_tokens: 5,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        return { ok: false, message: data.error?.message || `Erro HTTP ${res.status} na API da OpenAI` };
      }
      try { localStorage.setItem('sofia_active_gemini_model', 'OpenAI (GPT-4o-mini)'); } catch (_) {}
      return { ok: true, message: '🧠 Conectado com sucesso à OpenAI (gpt-4o-mini)!', model: 'gpt-4o-mini' };
    } catch (e) {
      return { ok: false, message: `Erro de conexão: ${e.message}` };
    }
  }

  // 4. Chave Google Gemini — teste rápido com gemini-2.0-flash primeiro (FAST PATH)
  const quickModels = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-2.0-flash-lite'];
  for (const model of quickModels) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${cleanKey}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: 'responda: ok' }] }],
          generationConfig: { maxOutputTokens: 5 },
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        try { localStorage.setItem('sofia_active_gemini_model', model); } catch (_) {}
        return { ok: true, message: `🤖 Conectado com sucesso ao Google Gemini (${model})!`, model };
      }
      if (res.status === 400 || res.status === 403) {
        const msg = data.error?.message || '';
        if (msg.includes('API key not valid') || msg.includes('PERMISSION_DENIED') || msg.includes('API_KEY_INVALID')) {
          return { ok: false, message: `Chave inválida: ${msg}` };
        }
      }
    } catch (_) {}
  }

  // Se o teste rápido falhar, tenta a descoberta dinâmica
  try {
    const discovered = await discoverGeminiModels(cleanKey).catch(() => []);
    if (discovered.length > 0) {
      const chosen = discovered[0];
      try { localStorage.setItem('sofia_active_gemini_model', chosen); } catch (_) {}
      return { ok: true, message: `🤖 Conectado ao Google Gemini (${chosen})!`, model: chosen, availableCount: discovered.length };
    }
    return { ok: false, message: 'Não foi possível validar a chave nos modelos do Gemini. Verifique a cota ou os caracteres.' };
  } catch (err) {
    return { ok: false, message: err.message || 'Erro ao consultar a API do Google Generative Language.' };
  }
}

/**
 * Chamada à API externa (Groq, Google Gemini, OpenRouter ou OpenAI) com rota otimizada de baixa latência
 */
export async function callExternalAiApi({ apiKey, messages, questionContext, systemPrompt }) {
  const cleanKey = (apiKey || '').trim().replace(/^["']|["']$/g, '');
  if (!cleanKey) throw new Error('Chave de API não informada.');

  let fullSystemPrompt = systemPrompt || `Você é Sofia, tutora especialista nos vestibulares paulistas e nacionais de Medicina (FAMERP, FAMEMA, FUVEST, UNICAMP, UNESP, UEA, UERJ, ENEM).
Você é didática, encorajadora, rigorosa cientificamente e direta ao ponto.
Formate suas respostas em bom Markdown (títulos, listas com marcadores e negrito bem definidos).
Ao fazer comparações conceituais ou sintetizar dados (ex: El Niño vs La Niña, Mitose vs Meiose, etc.), use tabelas organizadas em Markdown (| Coluna 1 | Coluna 2 |).
Quando houver fórmulas matemáticas ou químicas, utilize formatação LaTeX ($formula$).
Se o aluno estiver resolvendo uma questão específica, baseie-se estritamente nos dados dela.`;

  if (questionContext) {
    fullSystemPrompt += `\n\n[CONTEXTO DA QUESTÃO SENDO RESOLVIDA PELO ALUNO]:
Vestibular: ${questionContext.exam} ${questionContext.year || ''}
Número: ${questionContext.number}
Disciplina: ${questionContext.subject}
Conteúdo: ${questionContext.content}
Subtópico: ${questionContext.subtopic}
Enunciado: ${questionContext.statement}
${questionContext.statementAfter ? `Texto complementar: ${questionContext.statementAfter}` : ''}
Alternativas: ${JSON.stringify(questionContext.alternatives || [])}
Gabarito correto: ${questionContext.correct !== undefined ? questionContext.correct : 'Discursiva'}
Resolução oficial: ${JSON.stringify(questionContext.resolution || '')}
`;
  }

  // 1. ROTA GROQ CLOUD (inicia com gsk_) — Ultra Rápida (latência < 400ms) com failover dinâmico
  if (cleanKey.startsWith('gsk_')) {
    const groqMessages = [
      { role: 'system', content: fullSystemPrompt },
      ...messages.map((m) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.text || m.content || '',
      })),
    ];

    let savedModel = null;
    try {
      savedModel = localStorage.getItem('sofia_active_groq_model');
    } catch (_) {}

    const groqCandidates = [];
    if (savedModel) groqCandidates.push(savedModel);

    try {
      const discovered = await discoverGroqModels(cleanKey);
      for (const m of discovered) {
        if (!groqCandidates.includes(m)) groqCandidates.push(m);
      }
    } catch (_) {}

    const defaultFallbacks = [
      'llama-3.1-8b-instant',
      'llama-3.3-70b-versatile',
      'llama3-70b-8192',
      'llama3-8b-8192',
      'mixtral-8x7b-32768',
      'gemma2-9b-it',
    ];
    for (const fb of defaultFallbacks) {
      if (!groqCandidates.includes(fb)) groqCandidates.push(fb);
    }

    let lastGroqError = null;
    for (const model of groqCandidates.slice(0, 6)) {
      try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cleanKey}`,
          },
          body: JSON.stringify({
            model,
            messages: groqMessages,
            temperature: 0.3,
            max_tokens: 1800,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            try {
              localStorage.setItem('sofia_active_groq_model', model);
              localStorage.setItem('sofia_active_gemini_model', `Groq (${model})`);
            } catch (_) {}
            return reply;
          }
        }

        const errorData = await response.json().catch(() => ({}));
        const errMsg = errorData.error?.message || `Erro HTTP ${response.status} na API da Groq (${model})`;

        if (response.status === 401 || errMsg.toLowerCase().includes('invalid api key')) {
          throw new Error(`Chave Groq inválida: ${errMsg}`);
        }

        lastGroqError = new Error(errMsg);
      } catch (err) {
        if (err.message && err.message.includes('Chave Groq inválida')) {
          throw err;
        }
        lastGroqError = err;
      }
    }

    throw lastGroqError || new Error('Não foi possível obter resposta da Groq com os modelos disponíveis.');
  }

  // 2. ROTA OPENROUTER (inicia com sk-or-) — Modelos Gratuitos com failover
  if (cleanKey.startsWith('sk-or-')) {
    const orMessages = [
      { role: 'system', content: fullSystemPrompt },
      ...messages.map((m) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.text || m.content || '',
      })),
    ];

    const openRouterModels = [
      'meta-llama/llama-3.3-70b-instruct:free',
      'google/gemini-2.0-flash-exp:free',
      'meta-llama/llama-3.1-8b-instruct:free',
      'deepseek/deepseek-r1:free',
      'qwen/qwen-2.5-72b-instruct:free',
    ];

    let lastOrError = null;
    for (const model of openRouterModels) {
      try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cleanKey}`,
            'HTTP-Referer': 'https://banco-de-questoes.local',
            'X-Title': 'Acervo Vestibulares',
          },
          body: JSON.stringify({
            model,
            messages: orMessages,
            temperature: 0.3,
            max_tokens: 1800,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) return reply;
        }

        const errorData = await response.json().catch(() => ({}));
        const errMsg = errorData.error?.message || `Erro HTTP ${response.status} no OpenRouter (${model})`;
        if (response.status === 401 || errMsg.toLowerCase().includes('invalid api key')) {
          throw new Error(`Chave OpenRouter inválida: ${errMsg}`);
        }
        lastOrError = new Error(errMsg);
      } catch (err) {
        if (err.message && err.message.includes('Chave OpenRouter inválida')) {
          throw err;
        }
        lastOrError = err;
      }
    }

    throw lastOrError || new Error('Não foi possível obter resposta do OpenRouter com os modelos gratuitos.');
  }

  // 3. ROTA OPENAI (inicia com sk-)
  if (cleanKey.startsWith('sk-')) {
    const openaiMessages = [
      { role: 'system', content: fullSystemPrompt },
      ...messages.map((m) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.text || m.content || '',
      })),
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cleanKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: openaiMessages,
        temperature: 0.4,
        max_tokens: 1800,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `Erro HTTP ${response.status} na API OpenAI`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || 'Resposta sem conteúdo recebida.';
  }

  // 4. ROTA GOOGLE GEMINI COM FAST PATH (Latência < 1s)
  const geminiContents = formatGeminiContents(messages);

  // FAST PATH: Se já temos um modelo salvo ou padrão 'gemini-2.0-flash', tenta direto SEM requisição prévia de ListModels
  const savedModel = typeof localStorage !== 'undefined' ? localStorage.getItem('sofia_active_gemini_model') : null;
  const initialModel = (savedModel && isAllowedTextModel(savedModel)) ? savedModel : 'gemini-2.0-flash';

  try {
    const fastUrl = `https://generativelanguage.googleapis.com/v1beta/models/${initialModel}:generateContent?key=${cleanKey}`;
    const fastRes = await fetch(fastUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: geminiContents,
        systemInstruction: { parts: [{ text: fullSystemPrompt }] },
        generationConfig: { temperature: 0.4, maxOutputTokens: 1800 },
      }),
    });

    if (fastRes.ok) {
      const fastData = await fastRes.json();
      const text = fastData.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        try { localStorage.setItem('sofia_active_gemini_model', initialModel); } catch (_) {}
        return text;
      }
    }
  } catch (_) {
    // Continua para a lista de failover se o FAST PATH falhar
  }

  // FAILOVER: Lista prioritária caso o FAST PATH encontre 404 ou 429
  let candidateModels = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-2.0-flash-lite', 'gemini-1.5-flash-8b', 'gemini-pro'];

  let lastError = null;
  let quotaError = null;

  for (const model of candidateModels) {
    if (model === initialModel) continue; // Já tentado no fast path

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${cleanKey}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: geminiContents,
          systemInstruction: { parts: [{ text: fullSystemPrompt }] },
          generationConfig: { temperature: 0.4, maxOutputTokens: 1800 },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          try { localStorage.setItem('sofia_active_gemini_model', model); } catch (_) {}
          return text;
        }
      }

      const errorData = await response.json().catch(() => ({}));
      const errMsg = errorData.error?.message || '';

      if (response.status === 429 || errMsg.includes('Quota exceeded') || errMsg.includes('RESOURCE_EXHAUSTED')) {
        console.warn(`Modelo ${model} sem cota. Tentando próximo modelo...`);
        quotaError = errMsg;
        continue;
      }

      // Se for problema de systemInstruction, tenta embutindo na mensagem do usuário
      if (response.status === 400 && (errMsg.includes('system') || errMsg.includes('instruction'))) {
        const fallbackContents = JSON.parse(JSON.stringify(geminiContents));
        if (fallbackContents.length > 0 && fallbackContents[0].parts?.[0]) {
          fallbackContents[0].parts[0].text = `[Instruções do Sistema]:\n${fullSystemPrompt}\n\n[Mensagem do Aluno]:\n${fallbackContents[0].parts[0].text}`;
        }
        const fallbackRes = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: fallbackContents,
            generationConfig: { temperature: 0.4, maxOutputTokens: 1800 },
          }),
        });

        if (fallbackRes.ok) {
          const fallbackData = await fallbackRes.json();
          const fbText = fallbackData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (fbText) {
            try { localStorage.setItem('sofia_active_gemini_model', model); } catch (_) {}
            return fbText;
          }
        }
      }

      lastError = new Error(errMsg || `Erro HTTP ${response.status} (${model})`);

      if (response.status === 400 && (errMsg.includes('API key not valid') || errMsg.includes('API_KEY_INVALID'))) {
        throw lastError;
      }
    } catch (e) {
      lastError = e;
      if (e.message && (e.message.includes('API key not valid') || e.message.includes('API_KEY_INVALID'))) {
        throw e;
      }
    }
  }

  if (quotaError) {
    throw new Error(quotaError);
  }

  throw lastError || new Error('Não foi possível obter resposta da API Gemini.');
}

/**
 * Gera explicação profunda ou dica da questão atual selecionada
 */
export function explainCurrentQuestion(question, mode = 'full') {
  if (!question) {
    return 'Nenhuma questão está selecionada no momento. Abra uma questão no Banco de Questões ou no Solver para que eu possa analisá-la!';
  }

  const letters = ['A', 'B', 'C', 'D', 'E'];
  const correctLetter = typeof question.correct === 'number' ? letters[question.correct] : '';
  const correctAlt = question.alternatives && typeof question.correct === 'number' ? question.alternatives[question.correct] : null;
  const correctText = typeof correctAlt === 'string' ? correctAlt : correctAlt?.text || '';

  const resolutionText = Array.isArray(question.resolution)
    ? question.resolution.join('\n\n')
    : question.resolution || 'Resolução comentada padrão em processo editorial.';

  if (mode === 'hint') {
    return `
💡 **Dica Pedagógica sem Spoiler** (*${question.exam} ${question.year || ''} · ${question.number}*):

* **Tópico central:** ${question.subject} → **${question.content}** (${question.subtopic}).
* **Onde focar sua atenção:** Leia atentamente o comando da questão e observe os conceitos-chave envolvidos. Preste atenção nas condições de contorno (ex: se o enunciado pede uma afirmação *correta* ou *incorreta*, ou se há dados numéricos relevantes).
* **Pergunta norteadora:** Pense: *"Qual princípio físico, biológico ou químico rege essa situação antes de olhar as alternativas?"* Elimine as opções que contenham generalizações absolutas ("sempre", "nunca", "exclusivamente") se o fenômeno admitir exceções.
* *Tente formular o raciocínio na sua mente antes de marcar! Se quiser a resolução completa, é só pedir!*
`;
  }

  if (mode === 'why-wrong') {
    if (!question.alternatives || !question.alternatives.length) {
      return `Esta questão é do tipo discursiva/redação. Os critérios oficiais exigem precisão conceitual e clareza de argumentação.`;
    }
    let analysis = `### ❌ Análise dos Distratores (${question.exam} · ${question.number})\n\n`;
    analysis += `**Gabarito Correto:** Alternativa **${correctLetter}**\n\n`;

    question.alternatives.forEach((alt, idx) => {
      const letChar = letters[idx];
      const text = typeof alt === 'string' ? alt : alt?.text || '';
      if (idx === question.correct) {
        analysis += `* **Alternativa ${letChar} (CORRETA):** ${text.slice(0, 140)}...\n  *(Esta alternativa traz a correspondência científica exata descrita no enunciado e nas teorias vigentes).* \n\n`;
      } else {
        analysis += `* **Alternativa ${letChar} (INCORRETA):** ${text.slice(0, 140)}...\n  *(Distrator típico: costuma trocar a relação de causa e efeito, inverter grandezas ou aplicar um conceito fora de contexto).* \n\n`;
      }
    });

    analysis += `\n**Resumo da Resolução Oficial:**\n${resolutionText}`;
    return analysis;
  }

  // Resolução passo a passo completa
  return `
### 📖 Resolução Comentada Detalhada
**${question.exam} ${question.year || ''} · ${question.number}** (${question.subject} · ${question.content})

---

#### 1. O que a questão exige?
A questão avalia a compreensão de **${question.subtopic}**, dentro de **${question.content}**. É fundamental articular o texto-base com as teorias fundamentais da disciplina.

#### 2. Resolução Passo a Passo:
${resolutionText}

${correctLetter ? `#### 3. Conclusão e Gabarito:
A alternativa correta é a **${correctLetter}**:
> *"${correctText}"*` : ''}

---
*💡 Quer uma dica sobre como esse assunto costuma cair em outros vestibulares como FUVEST e FAMERP? É só me perguntar!*
`;
}

/**
 * Motor central de resposta da assistente (Híbrido: Local Inteligente + API Externa com fallback transparente)
 */
export async function getAssistantResponse({
  userPrompt,
  currentQuestion,
  allQuestions,
  chatHistory = [],
  apiKey = null,
}) {
  const query = userPrompt.trim().toLowerCase();
  const cleanKey = (apiKey || '').trim().replace(/^["']|["']$/g, '');

  // Se o usuário configurou uma chave de API, tenta a chamada externa
  if (cleanKey.length > 10) {
    try {
      const messages = [...chatHistory, { role: 'user', text: userPrompt }];
      return await callExternalAiApi({
        apiKey: cleanKey,
        messages,
        questionContext: currentQuestion,
      });
    } catch (err) {
      console.warn('Falha na API da Chave:', err.message);
      const friendlyNotice = formatFriendlyApiError(err.message);
      // Gera a resposta local e inclui o aviso transparente e acolhedor
      const localFallback = generateLocalResponse(query, currentQuestion, allQuestions);
      return `⚠️ **Aviso:** ${friendlyNotice}\n\n*Resposta gerada pelo Motor Local Autônomo:* \n\n${localFallback}`;
    }
  }

  return generateLocalResponse(query, currentQuestion, allQuestions);
}

function generateLocalResponse(query, currentQuestion, allQuestions) {
  // 1. Pedidos diretos sobre a questão atual
  if (currentQuestion) {
    if (
      query.includes('dica') ||
      query.includes('sem spoiler') ||
      query.includes('como começo') ||
      query.includes('como comeco') ||
      query.includes('onde foco') ||
      (query.includes('ajuda') && query.length < 35)
    ) {
      return explainCurrentQuestion(currentQuestion, 'hint');
    }

    if (
      query.includes('distrator') ||
      (query.includes('por que') && (query.includes('errad') || query.includes('incorret') || query.includes('outras'))) ||
      query.includes('quais sao as erradas') ||
      query.includes('eliminar alternativas')
    ) {
      return explainCurrentQuestion(currentQuestion, 'why-wrong');
    }

    if (
      query.includes('explique') ||
      query.includes('resolva') ||
      query.includes('resolucao') ||
      query.includes('resolução') ||
      query.includes('passo a passo') ||
      query.includes('gabarito') ||
      query.includes('esta questao') ||
      query.includes('essa questao') ||
      query.includes('esta questão') ||
      query.includes('essa questão') ||
      query.includes('nao entendi') ||
      query.includes('não entendi') ||
      query.includes('como faz') ||
      query.includes('resposta') ||
      query.includes('alternativa') ||
      (query.length < 35 && !query.includes('buscar') && !query.includes('procure'))
    ) {
      return explainCurrentQuestion(currentQuestion, 'full');
    }
  }

  // 2. Busca de questões no acervo de 2.993 itens
  if (
    query.startsWith('buscar') ||
    query.startsWith('procure') ||
    query.startsWith('questoes de') ||
    query.startsWith('questão de') ||
    query.includes('recomende questoes') ||
    query.includes('me dê questoes') ||
    query.includes('exercicios de')
  ) {
    const cleanTerm = query
      .replace(/^(buscar|procure|questoes de|questão de|recomende questoes|me de questoes|me dê questoes|exercicios de)\s+/i, '')
      .trim();

    const matches = searchQuestions(cleanTerm, allQuestions, 5);
    if (!matches.length) {
      return `Não encontrei questões exatas para o termo **"${cleanTerm}"**. Experimente pesquisar por tópicos gerais como *"El Niño"*, *"Genética"*, *"Termodinâmica"*, *"Ecologia"*, *"Mitose"* ou pelo nome do vestibular (ex: *"FAMERP"* ou *"FUVEST"*).`;
    }

    let reply = `🔍 Encontrei **${matches.length} questões relevantes** no acervo sobre **"${cleanTerm}"**:\n\n`;
    matches.forEach((q, idx) => {
      reply += `${idx + 1}. **[${q.id}]** — **${q.exam} ${q.year || ''} · ${q.number}** (${q.subject} · ${q.content})\n`;
      reply += `   > *${q.statement.slice(0, 110).trim()}...*\n\n`;
    });
    reply += `\n*Dica: Clique nos botões acima para abrir a questão imediatamente no Solver!*`;
    return reply;
  }

  // 3. Mnemônicos e macetes
  if (query.includes('mnemonico') || query.includes('macete') || query.includes('memorizar')) {
    let reply = `🧠 **Macetes e Mnemônicos Essenciais para Vestibulares:**\n\n`;
    MNEMONICS.forEach((m) => {
      reply += `* **${m.topic}:** ${m.phrase}\n`;
    });
    reply += `\n*Tem algum assunto específico de Biologia, Química ou Física que você precisa memorizar? É só pedir!*`;
    return reply;
  }

  // 4. Resumos de alta incidência cadastrados
  if (query.includes('el nino') || query.includes('el niño') || query.includes('la nina') || query.includes('la niña') || query.includes('enos')) {
    return HIGH_YIELD_SUMMARIES['el-nino'].content;
  }
  if (query.includes('mitose') || query.includes('meiose') || query.includes('divisao celular')) {
    return HIGH_YIELD_SUMMARIES['mitose-meiose'].content;
  }
  if (query.includes('newton') || query.includes('inercia') || query.includes('dinamica')) {
    return HIGH_YIELD_SUMMARIES['leis-de-newton'].content;
  }
  if (query.includes('circuito') || query.includes('ohm') || query.includes('resistor') || query.includes('potencia eletrica')) {
    return HIGH_YIELD_SUMMARIES['circuitos-eletricos'].content;
  }
  if (query.includes('termodinamica') || query.includes('carnot') || query.includes('calorimetria')) {
    return HIGH_YIELD_SUMMARIES['termodinamica'].content;
  }
  if (query.includes('mendel') || query.includes('dogma') || query.includes('transcricao') || query.includes('dna')) {
    return HIGH_YIELD_SUMMARIES['genetica-mendeliana'].content;
  }

  // 5. Integração com as Fichas Resumo de Biologia (STUDY_SHEETS)
  const matchedSheet = STUDY_SHEETS.find((s) => {
    const qNorm = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const tNorm = s.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const cNorm = s.content.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return qNorm.includes(tNorm) || tNorm.split(' ').some((word) => word.length > 4 && qNorm.includes(word)) || qNorm.includes(cNorm);
  });

  if (matchedSheet) {
    return `
### 📑 Ficha Resumo Editorial: ${matchedSheet.title}
**${matchedSheet.eyebrow || matchedSheet.content}**

${matchedSheet.description}

* **Tópicos e Mecanismos:** ${matchedSheet.keyConcepts ? matchedSheet.keyConcepts.join(' · ') : matchedSheet.content}
* **Questões associadas no acervo:** ${matchedSheet.questionIds ? matchedSheet.questionIds.length : 0} questões com gabarito e resolução.
* **Referência didática:** ${matchedSheet.figureCredits?.main || 'Material didático unificado.'}

*💡 Você pode abrir a ficha completa na aba **Fichas Resumo** para ver os esquemas visuais detalhados!*
`;
  }

  // 6. Resposta padrão estruturada
  return `
Olá! Sou a **Sofia IA**, sua tutora especializada nos 2.993 exercícios do acervo.

Aqui estão algumas formas práticas de interagir comigo:
1. 💡 **Dúvidas sobre a questão atual:** Se estiver no Solver, me peça uma *"dica sem spoiler"* ou a *"resolução passo a passo"*.
2. ❌ **Análise de alternativas:** Pergunte *"por que as outras estão erradas?"* para entender os distratores da questão.
3. 🔍 **Buscar exercícios:** Peça *"busque questões de El Niño"*, *"questões de Genética FAMERP"* ou *"termodinamica"*.
4. 📚 **Resumos teóricos:** Peça resumos de tópicos como *Mitose e Meiose*, *Leis de Ohm*, *Termodinâmica*, *Fotossíntese*, etc.
5. 🧠 **Mnemônicos:** Peça macetes para memorizar fórmulas e sequências biológicas.

O que você gostaria de revisar agora?
`;
}
