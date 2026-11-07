import { exams, questions, subjects, years } from '../data/questions.js';

export const FILTER_KEYS = ['exam', 'type', 'subject', 'content', 'subtopic', 'year', 'difficulty', 'status'];

export const FILTER_LABELS = {
  exam: 'Prova', type: 'Tipo', subject: 'Matéria', content: 'Conteúdo',
  subtopic: 'Subtema', year: 'Ano', difficulty: 'Dificuldade', status: 'Situação',
};

export const TYPE_OPTIONS = ['Objetivas', 'Discursivas', 'Redação'];
export const DIFFICULTY_OPTIONS = ['Fácil', 'Média', 'Difícil'];
export const STATUS_OPTIONS = ['Não resolvidas', 'Corretas', 'Incorretas'];

export const createDefaultFilters = () => ({
  search: '', exam: [], type: [], subject: [], content: [], subtopic: [], year: [], difficulty: [], status: [],
});

const OPTION_SETS = {
  exam: new Set(exams),
  type: new Set(TYPE_OPTIONS),
  subject: new Set(subjects),
  content: new Set(questions.map((question) => question.content)),
  subtopic: new Set(questions.map((question) => question.subtopic)),
  year: new Set(years.map(String)),
  difficulty: new Set(DIFFICULTY_OPTIONS),
  status: new Set(STATUS_OPTIONS),
};

function selectedValues(value, key) {
  const legacyEmpty = key === 'exam' || key === 'subject' || key === 'difficulty' || key === 'status' ? 'Todas' : 'Todos';
  const values = Array.isArray(value) ? value : value && value !== legacyEmpty ? [value] : [];
  return [...new Set(values.map(String).filter((item) => OPTION_SETS[key].has(item)))];
}

export function sanitizeFilters(candidate) {
  const defaults = createDefaultFilters();
  if (!candidate || typeof candidate !== 'object') return defaults;
  for (const key of FILTER_KEYS) defaults[key] = selectedValues(candidate[key], key);
  defaults.search = typeof candidate.search === 'string' ? candidate.search : '';
  return defaults;
}

export function matchesSelection(value, selections) {
  return selections.length === 0 || selections.includes(String(value));
}

export function countActiveFilters(filters) {
  return FILTER_KEYS.reduce((total, key) => total + (filters[key]?.length || 0), 0);
}

export function cloneFilters(filters) {
  return sanitizeFilters(filters);
}
