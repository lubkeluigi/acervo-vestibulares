/**
 * Gerenciamento e sincronização de listas personalizadas criadas no site.
 * Salva no servidor (/api/lists -> public/custom-lists.json) e sincroniza
 * com localStorage e links compartilháveis (#lista=...) para que todas as
 * listas personalizadas fiquem disponíveis para todos os usuários.
 */

const STORAGE_KEY = 'acervo:custom-lists-v1';
const DELETED_IDS_KEY = 'acervo:custom-lists-deleted-v1';

function readLocalLists() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalLists(lists) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
  } catch {
    // ignore storage errors
  }
}

function readDeletedIds() {
  try {
    const raw = localStorage.getItem(DELETED_IDS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function addDeletedId(id) {
  try {
    const deleted = readDeletedIds();
    deleted.add(id);
    localStorage.setItem(DELETED_IDS_KEY, JSON.stringify([...deleted]));
  } catch {
    // ignore
  }
}

export function mergeCustomLists(...collections) {
  const deleted = readDeletedIds();
  const map = new Map();
  for (const col of collections) {
    if (!Array.isArray(col)) continue;
    for (const item of col) {
      if (!item || !item.id || deleted.has(item.id)) continue;
      if (!Array.isArray(item.questionIds) || !item.questionIds.length) continue;
      const existing = map.get(item.id);
      if (
        !existing ||
        new Date(item.updatedAt || item.createdAt || 0) >=
          new Date(existing.updatedAt || existing.createdAt || 0)
      ) {
        map.set(item.id, item);
      }
    }
  }
  return Array.from(map.values()).sort(
    (a, b) =>
      new Date(b.updatedAt || b.createdAt || 0) -
      new Date(a.updatedAt || a.createdAt || 0)
  );
}

/**
 * Constrói metadados ricos automaticamente a partir das questões selecionadas.
 */
export function buildCustomListObject(config, allQuestions) {
  const questionMap = new Map(allQuestions.map((q) => [q.id, q]));
  const rawIds = Array.isArray(config.questionIds || config.selectedIds)
    ? config.questionIds || config.selectedIds
    : [];
  const validQuestions = [];
  const seen = new Set();

  for (const id of rawIds) {
    if (seen.has(id)) continue;
    const q = questionMap.get(id);
    if (q) {
      seen.add(id);
      validQuestions.push(q);
    }
  }

  if (!validQuestions.length) return null;

  // Contabiliza disciplinas por frequência
  const subjectCounts = new Map();
  const contents = [];
  const subtopics = [];
  const examTags = [];
  const difficulties = new Set();
  let objectiveCount = 0;
  let discursiveCount = 0;
  let essayCount = 0;

  for (const q of validQuestions) {
    if (q.subject) {
      subjectCounts.set(q.subject, (subjectCounts.get(q.subject) || 0) + 1);
    }
    if (q.content && !contents.includes(q.content)) contents.push(q.content);
    if (q.subtopic && !subtopics.includes(q.subtopic)) subtopics.push(q.subtopic);
    if (q.exam && !examTags.includes(q.exam)) examTags.push(q.exam);
    if (q.difficulty) difficulties.add(q.difficulty);
    if (q.kind === 'essay') essayCount += 1;
    else if (q.kind === 'discursive') discursiveCount += 1;
    else objectiveCount += 1;
  }

  const sortedSubjects = Array.from(subjectCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([sub]) => sub);

  const primarySubject = sortedSubjects[0] || 'Biologia';
  const isMultiSubject = sortedSubjects.length > 1;

  // Define título inteligente caso o usuário tenha mantido o padrão "Lista de exercícios"
  const rawTitle = (config.title || '').trim();
  const isDefaultTitle =
    !rawTitle ||
    rawTitle.toLowerCase() === 'lista de exercícios' ||
    rawTitle.toLowerCase() === 'lista de exercicios';

  let finalTitle = rawTitle;
  if (isDefaultTitle) {
    if (subtopics.length === 1) {
      finalTitle = `${primarySubject}: ${subtopics[0]}`;
    } else if (contents.length === 1) {
      finalTitle = `${primarySubject}: ${contents[0]}`;
    } else if (!isMultiSubject) {
      finalTitle = `${primarySubject} — ${contents.slice(0, 2).join(' e ')}`;
    } else {
      finalTitle = `Lista Multidisciplinar (${sortedSubjects.slice(0, 3).join(', ')})`;
    }
  }

  const category = isMultiSubject
    ? `Multidisciplinar (${sortedSubjects.slice(0, 3).join(' · ')})`
    : contents[0] || primarySubject;

  const autoSubtitle =
    (config.subtitle || '').trim() ||
    (subtopics.length
      ? subtopics.slice(0, 4).join(' · ')
      : contents.slice(0, 3).join(' · '));

  const typeParts = [];
  if (objectiveCount > 0) typeParts.push(`${objectiveCount} ${objectiveCount === 1 ? 'objetiva' : 'objetivas'}`);
  if (discursiveCount > 0) typeParts.push(`${discursiveCount} ${discursiveCount === 1 ? 'discursiva' : 'discursivas'}`);
  if (essayCount > 0) typeParts.push(`${essayCount} ${essayCount === 1 ? 'redação' : 'redações'}`);

  const autoDescription =
    (config.description || '').trim() ||
    `Lista personalizada com ${validQuestions.length} ${validQuestions.length === 1 ? 'questão' : 'questões'} (${typeParts.join(', ')}) abordando ${contents.slice(0, 4).join(', ')} nos vestibulares ${examTags.slice(0, 5).join(', ')}.`;

  let difficultyLabel = 'Média';
  if (difficulties.size === 1) {
    difficultyLabel = [...difficulties][0];
  } else if (difficulties.has('Fácil') && difficulties.has('Difícil')) {
    difficultyLabel = 'Fácil a Difícil';
  } else if (difficulties.has('Média') && difficulties.has('Difícil')) {
    difficultyLabel = 'Média a Difícil';
  } else if (difficulties.has('Fácil') && difficulties.has('Média')) {
    difficultyLabel = 'Fácil a Média';
  }

  const keyConcepts = [...subtopics, ...contents].filter(Boolean).slice(0, 6);
  const now = new Date().toISOString();

  return {
    id:
      config.id ||
      `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
    title: finalTitle,
    subtitle: autoSubtitle,
    description: autoDescription,
    author: (config.author || 'Comunidade').trim(),
    badge: 'Lista Personalizada',
    subject: primarySubject,
    subjects: sortedSubjects,
    category,
    difficulty: difficultyLabel,
    keyConcepts,
    examTags: examTags.slice(0, 8),
    questionIds: validQuestions.map((q) => q.id),
    styleTemplate: config.styleTemplate === 'vunesp' ? 'vunesp' : 'fuvest',
    includeKey: config.includeKey !== false,
    order: config.order || 'selection',
    isCustom: true,
    createdAt: config.createdAt || now,
    updatedAt: now,
  };
}

export async function fetchAllCustomLists() {
  const localLists = readLocalLists();
  let serverLists = [];
  let staticLists = [];

  try {
    const res = await fetch('/api/lists', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.lists)) {
        serverLists = data.lists;
      }
    }
  } catch {
    // ignore API error
  }

  try {
    const resStatic = await fetch('/custom-lists.json', { cache: 'no-store' });
    if (resStatic.ok) {
      const dataStatic = await resStatic.json();
      if (dataStatic && Array.isArray(dataStatic.lists)) {
        staticLists = dataStatic.lists;
      }
    }
  } catch {
    // ignore static fetch error
  }

  const merged = mergeCustomLists(staticLists, serverLists, localLists);
  writeLocalLists(merged);

  // Se houver listas locais que ainda não estão no servidor, sincroniza em background
  if (localLists.length > 0) {
    const serverIds = new Set(serverLists.map((l) => `${l.id}:${l.updatedAt || ''}`));
    const unsynced = localLists.filter((l) => !serverIds.has(`${l.id}:${l.updatedAt || ''}`));
    if (unsynced.length > 0) {
      fetch('/api/lists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lists: unsynced }),
      }).catch(() => undefined);
    }
  }

  return merged;
}

export async function saveCustomList(listObj) {
  if (!listObj || !listObj.id || !Array.isArray(listObj.questionIds) || !listObj.questionIds.length) {
    return readLocalLists();
  }
  const currentLocal = readLocalLists();
  const updatedLocal = mergeCustomLists(currentLocal, [listObj]);
  writeLocalLists(updatedLocal);

  try {
    const res = await fetch('/api/lists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ list: listObj }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.lists)) {
        const merged = mergeCustomLists(updatedLocal, data.lists);
        writeLocalLists(merged);
        return merged;
      }
    }
  } catch {
    // fallback to local lists if offline
  }

  return updatedLocal;
}

export async function deleteCustomList(listId) {
  if (!listId) return readLocalLists();
  addDeletedId(listId);
  const currentLocal = readLocalLists().filter((item) => item.id !== listId);
  writeLocalLists(currentLocal);

  try {
    const res = await fetch(`/api/lists?id=${encodeURIComponent(listId)}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.lists)) {
        const merged = mergeCustomLists(currentLocal, data.lists);
        writeLocalLists(merged);
        return merged;
      }
    }
  } catch {
    // ignore
  }

  return currentLocal;
}

export function encodeListToHash(listObj) {
  try {
    const compact = {
      i: listObj.id,
      t: listObj.title,
      s: listObj.subtitle || '',
      a: listObj.author || 'Comunidade',
      q: listObj.questionIds,
      st: listObj.styleTemplate || 'fuvest',
      k: listObj.includeKey !== false ? 1 : 0,
      c: listObj.createdAt,
    };
    const json = JSON.stringify(compact);
    const encoded = btoa(encodeURIComponent(json));
    return `#lista=${encoded}`;
  } catch {
    return '';
  }
}

export function decodeListFromHash(hash, allQuestions) {
  try {
    if (!hash || !hash.startsWith('#lista=')) return null;
    const encoded = hash.slice('#lista='.length);
    const json = decodeURIComponent(atob(encoded));
    const compact = JSON.parse(json);
    if (!compact || !Array.isArray(compact.q) || !compact.q.length) return null;
    return buildCustomListObject(
      {
        id: compact.i,
        title: compact.t,
        subtitle: compact.s,
        author: compact.a,
        questionIds: compact.q,
        styleTemplate: compact.st,
        includeKey: compact.k !== 0,
        createdAt: compact.c,
      },
      allQuestions
    );
  } catch {
    return null;
  }
}
