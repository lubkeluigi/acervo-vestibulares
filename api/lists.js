import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_FILE = path.resolve(process.cwd(), 'public', 'custom-lists.json');
const DIST_FILE = path.resolve(process.cwd(), 'dist', 'custom-lists.json');
const TMP_FILE = '/tmp/acervo-custom-lists.json';

function readJsonSafe(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.lists)) {
        return parsed.lists;
      }
    }
  } catch {
    // ignore read errors
  }
  return [];
}

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

export function loadAllStoredLists() {
  const publicLists = readJsonSafe(PUBLIC_FILE);
  const distLists = readJsonSafe(DIST_FILE);
  const tmpLists = readJsonSafe(TMP_FILE);
  return mergeLists(publicLists, distLists, tmpLists);
}

export function saveAllStoredLists(lists) {
  const payload = JSON.stringify({ lists }, null, 2);
  try {
    fs.writeFileSync(TMP_FILE, payload, 'utf-8');
  } catch {
    // ignore tmp write error
  }
  try {
    if (fs.existsSync(path.dirname(PUBLIC_FILE))) {
      fs.writeFileSync(PUBLIC_FILE, payload, 'utf-8');
    }
  } catch {
    // read-only in serverless environment
  }
  try {
    if (fs.existsSync(path.dirname(DIST_FILE))) {
      fs.writeFileSync(DIST_FILE, payload, 'utf-8');
    }
  } catch {
    // ignore if dist does not exist or is read-only
  }
}

export function sanitizeListPayload(raw) {
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

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  if (typeof res.status === 'function') {
    try { res.status(statusCode); } catch {}
  }
  if (typeof res.setHeader === 'function') {
    try { res.setHeader('Content-Type', 'application/json; charset=utf-8'); } catch {}
  }
  if (typeof res.json === 'function') {
    res.json(data);
    return;
  }
  if (typeof res.end === 'function') {
    res.end(JSON.stringify(data));
    return;
  }
}

export default async function handler(req, res) {
  if (typeof res.setHeader === 'function') {
    try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    } catch {}
  }

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    if (typeof res.end === 'function') res.end();
    return;
  }

  if (req.method === 'GET') {
    const lists = loadAllStoredLists();
    sendJson(res, 200, { lists });
    return;
  }

  if (req.method === 'POST') {
    try {
      let body = req.body;
      if (!body || typeof body === 'string') {
        const rawBody = typeof body === 'string'
          ? body
          : await new Promise((resolve, reject) => {
              let data = '';
              if (!req.on) return resolve('');
              req.on('data', (chunk) => {
                data += chunk;
                if (data.length > 1_000_000) reject(new Error('Payload too large'));
              });
              req.on('end', () => resolve(data));
              req.on('error', reject);
            });
        body = rawBody ? JSON.parse(rawBody) : {};
      }

      const incomingItems = Array.isArray(body.lists)
        ? body.lists.map(sanitizeListPayload).filter(Boolean)
        : [sanitizeListPayload(body.list || body)].filter(Boolean);

      if (!incomingItems.length) {
        sendJson(res, 400, { error: 'Lista inválida ou sem questões selecionadas.' });
        return;
      }

      const currentLists = loadAllStoredLists();
      const updatedLists = mergeLists(currentLists, incomingItems);
      saveAllStoredLists(updatedLists);

      sendJson(res, 200, { ok: true, lists: updatedLists, saved: incomingItems[0] });
      return;
    } catch (err) {
      sendJson(res, 500, { error: err.message || 'Erro ao salvar lista.' });
      return;
    }
  }

  if (req.method === 'DELETE') {
    try {
      let id = req.query?.id;
      if (!id && req.url) {
        const urlObj = new URL(req.url, 'http://localhost');
        id = urlObj.searchParams.get('id');
      }
      const currentLists = loadAllStoredLists();
      const updatedLists = id ? currentLists.filter((item) => item.id !== id) : currentLists;
      saveAllStoredLists(updatedLists);

      sendJson(res, 200, { ok: true, lists: updatedLists });
      return;
    } catch (err) {
      sendJson(res, 500, { error: err.message || 'Erro ao remover lista.' });
      return;
    }
  }

  sendJson(res, 405, { error: 'Method Not Allowed' });
}
