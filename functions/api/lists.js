// Cloudflare Pages Function — equivalente a api/lists.js (usado na Vercel).
//
// Implementa o mesmo contrato de /api/lists (GET / POST / DELETE) para a
// feature de "listas personalizadas" (salvar/compartilhar listas de questões),
// mas usando Cloudflare KV como armazenamento persistente real, em vez de
// arquivos locais (que em ambiente serverless não sobrevivem entre invocações).
//
// CONFIGURAÇÃO NECESSÁRIA NO PAINEL DA CLOUDFLARE (uma única vez):
//   Workers & Pages > [seu projeto] > Settings > Functions > KV namespace bindings
//   Variable name: LISTS_KV  →  escolha/crie um KV namespace (ex: "acervo-custom-lists")
//
// Convenção de rotas do Cloudflare Pages: este arquivo em functions/api/lists.js
// responde automaticamente por requisições em /api/lists.

const KV_KEY = 'custom-lists';

function mergeLists(...collections) {
  const map = new Map();
  for (const col of collections) {
    if (!Array.isArray(col)) continue;
    for (const item of col) {
      if (!item || !item.id || !Array.isArray(item.questionIds) || !item.questionIds.length) continue;
      const existing = map.get(item.id);
      if (!existing || new Date(item.updatedAt || item.createdAt || 0) >= new Date(existing.updatedAt || existing.createdAt || 0)) {
        map.set(item.id, item);
      }
    }
  }
  return Array.from(map.values()).sort(
    (a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0)
  );
}

function sanitizeListPayload(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const questionIds = Array.isArray(raw.questionIds)
    ? Array.from(new Set(raw.questionIds.filter((id) => typeof id === 'string' && id.trim())))
    : [];
  if (!questionIds.length) return null;

  const now = new Date().toISOString();
  const id = typeof raw.id === 'string' && raw.id.trim()
    ? raw.id.trim().slice(0, 80)
    : `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

  const title = typeof raw.title === 'string' && raw.title.trim()
    ? raw.title.trim().slice(0, 100)
    : 'Lista personalizada';

  const subtitle = typeof raw.subtitle === 'string' && raw.subtitle.trim()
    ? raw.subtitle.trim().slice(0, 180)
    : '';

  const description = typeof raw.description === 'string' && raw.description.trim()
    ? raw.description.trim().slice(0, 500)
    : '';

  const author = typeof raw.author === 'string' && raw.author.trim()
    ? raw.author.trim().slice(0, 60)
    : 'Comunidade';

  const subject = typeof raw.subject === 'string' && raw.subject.trim()
    ? raw.subject.trim()
    : 'Multidisciplinar';

  const subjects = Array.isArray(raw.subjects)
    ? raw.subjects.filter((s) => typeof s === 'string').slice(0, 12)
    : [subject];

  const category = typeof raw.category === 'string' && raw.category.trim()
    ? raw.category.trim().slice(0, 120)
    : 'Lista Personalizada';

  const difficulty = typeof raw.difficulty === 'string' && raw.difficulty.trim()
    ? raw.difficulty.trim().slice(0, 50)
    : 'Variada';

  const keyConcepts = Array.isArray(raw.keyConcepts)
    ? raw.keyConcepts.filter((c) => typeof c === 'string' && c.trim()).slice(0, 10)
    : [];

  const examTags = Array.isArray(raw.examTags)
    ? raw.examTags.filter((e) => typeof e === 'string' && e.trim()).slice(0, 12)
    : [];

  const styleTemplate = raw.styleTemplate === 'vunesp' ? 'vunesp' : 'fuvest';
  const includeKey = raw.includeKey !== false;
  const order = typeof raw.order === 'string' ? raw.order : 'selection';

  return {
    id,
    title,
    subtitle,
    description,
    author,
    badge: 'Personalizada',
    subject,
    subjects,
    category,
    difficulty,
    keyConcepts,
    examTags,
    questionIds,
    styleTemplate,
    includeKey,
    order,
    isCustom: true,
    createdAt: raw.createdAt || now,
    updatedAt: now,
  };
}

// Lê uma "semente" estática opcional (public/custom-lists.json, versionada no
// repo) e combina com o que está salvo no KV. Isso permite publicar listas
// curadas via commit, além das salvas dinamicamente pelos usuários.
async function loadStaticSeedLists(env) {
  if (!env.ASSETS || typeof env.ASSETS.fetch !== 'function') return [];
  try {
    const res = await env.ASSETS.fetch('https://assets.local/custom-lists.json');
    if (!res.ok) return [];
    const parsed = await res.json();
    return Array.isArray(parsed.lists) ? parsed.lists : [];
  } catch {
    return [];
  }
}

async function loadKvLists(env) {
  if (!env.LISTS_KV) return [];
  try {
    const raw = await env.LISTS_KV.get(KV_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed.lists) ? parsed.lists : [];
  } catch {
    return [];
  }
}

async function loadAllStoredLists(env) {
  const [seed, kv] = await Promise.all([loadStaticSeedLists(env), loadKvLists(env)]);
  return mergeLists(seed, kv);
}

async function saveAllStoredLists(env, lists) {
  if (!env.LISTS_KV) {
    throw new Error('KV namespace "LISTS_KV" não está configurado neste projeto Cloudflare Pages.');
  }
  await env.LISTS_KV.put(KV_KEY, JSON.stringify({ lists }));
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'no-store, no-cache, must-revalidate',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS_HEADERS },
  });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestGet({ env }) {
  const lists = await loadAllStoredLists(env);
  return json({ lists });
}

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json().catch(() => ({}));

    const incomingItems = Array.isArray(body.lists)
      ? body.lists.map(sanitizeListPayload).filter(Boolean)
      : [sanitizeListPayload(body.list || body)].filter(Boolean);

    if (!incomingItems.length) {
      return json({ error: 'Lista inválida ou sem questões selecionadas.' }, 400);
    }

    const currentLists = await loadAllStoredLists(env);
    const updatedLists = mergeLists(currentLists, incomingItems);
    await saveAllStoredLists(env, updatedLists);

    return json({ ok: true, lists: updatedLists, saved: incomingItems[0] });
  } catch (err) {
    return json({ error: err.message || 'Erro ao salvar lista.' }, 500);
  }
}

export async function onRequestDelete({ request, env }) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    const currentLists = await loadAllStoredLists(env);
    const updatedLists = id ? currentLists.filter((item) => item.id !== id) : currentLists;
    await saveAllStoredLists(env, updatedLists);

    return json({ ok: true, lists: updatedLists });
  } catch (err) {
    return json({ error: err.message || 'Erro ao remover lista.' }, 500);
  }
}
