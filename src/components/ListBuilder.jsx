import React, { useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  BookmarkCheck,
  Check,
  CheckSquare,
  ChevronRight,
  FileDown,
  FilePlus2,
  Filter,
  ListChecks,
  Play,
  Plus,
  RotateCcw,
  Share2,
  Shuffle,
  Sparkles,
  Trash2,
  X,
} from 'lucide-react';
import { getContents, getSubtopics, subjects, exams, SUBJECT_COLORS } from '../data/questions.js';
import { isOpenQuestion } from './OpenResponse.jsx';
import PrintList from './PrintList.jsx';

const DIFFICULTY_ORDER = { 'Fácil': 0, 'Média': 1, 'Difícil': 2 };
const ORDER_OPTIONS = [
  ['selection', 'Ordem da seleção'],
  ['original', 'Numeração original'],
  ['subject', 'Agrupar por disciplina'],
  ['difficulty', 'Agrupar por dificuldade'],
  ['random', 'Embaralhar questões'],
];

export function seededShuffle(items, seed = 1) {
  const result = [...items];
  let state = (Number(seed) || 1) >>> 0;
  const random = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function snippet(question) {
  const source = [question.statement, question.statementAfter, question.statementTail].filter(Boolean).join(' ');
  return `${source
    .replace(/<[^>]+>/g, ' ')
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/[${}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 142)}…`;
}

function createFreshDraftId() {
  return `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

export default function ListBuilder({
  questions,
  list,
  setList,
  onPractice,
  notify,
  onSaveCustomList,
  onShareCustomList,
}) {
  const [showPreview, setShowPreview] = useState(false);
  const [saving, setSaving] = useState(false);

  const requestedFilters = {
    exam: 'Todas',
    type: 'Todos',
    subject: 'Todas',
    content: 'Todos',
    subtopic: 'Todos',
    difficulty: 'Todas',
    ...(list.filters || {}),
  };
  const contents = getContents(requestedFilters.subject);
  const content =
    requestedFilters.content === 'Todos' || contents.includes(requestedFilters.content)
      ? requestedFilters.content
      : 'Todos';
  const subtopics = getSubtopics(requestedFilters.subject, content);
  const subtopic =
    requestedFilters.subtopic === 'Todos' || subtopics.includes(requestedFilters.subtopic)
      ? requestedFilters.subtopic
      : 'Todos';
  const filters = { ...requestedFilters, content, subtopic };

  const filtered = useMemo(
    () =>
      questions.filter(
        (question) =>
          (filters.exam === 'Todas' || question.exam === filters.exam) &&
          (filters.type === 'Todos' ||
            (filters.type === 'Objetivas'
              ? !isOpenQuestion(question)
              : filters.type === 'Discursivas'
              ? question.kind === 'discursive'
              : question.kind === 'essay')) &&
          (filters.subject === 'Todas' || question.subject === filters.subject) &&
          (filters.content === 'Todos' || question.content === filters.content) &&
          (filters.subtopic === 'Todos' || question.subtopic === filters.subtopic) &&
          (filters.difficulty === 'Todas' || question.difficulty === filters.difficulty)
      ),
    [questions, filters]
  );

  const selectedSet = useMemo(() => new Set(list.selectedIds), [list.selectedIds]);

  const alreadySelectedInFilterCount = useMemo(
    () => filtered.reduce((acc, q) => acc + (selectedSet.has(q.id) ? 1 : 0), 0),
    [filtered, selectedSet]
  );
  const unselectedInFilterCount = filtered.length - alreadySelectedInFilterCount;
  const allFilteredAreSelected = filtered.length > 0 && unselectedInFilterCount === 0;

  const selected = useMemo(
    () => list.selectedIds.map((id) => questions.find((question) => question.id === id)).filter(Boolean),
    [questions, list.selectedIds]
  );

  const ordered = useMemo(() => {
    const copy = [...selected];
    if (list.order === 'original') return copy.sort((a, b) => questions.indexOf(a) - questions.indexOf(b));
    if (list.order === 'subject')
      return copy.sort((a, b) => a.subject.localeCompare(b.subject, 'pt-BR') || questions.indexOf(a) - questions.indexOf(b));
    if (list.order === 'difficulty')
      return copy.sort(
        (a, b) =>
          (DIFFICULTY_ORDER[a.difficulty] ?? 9) - (DIFFICULTY_ORDER[b.difficulty] ?? 9) ||
          questions.indexOf(a) - questions.indexOf(b)
      );
    if (list.order === 'random') return seededShuffle(copy, list.seed);
    return copy;
  }, [selected, list.order, list.seed, questions]);

  const patch = (value) =>
    setList((current) => ({
      ...current,
      draftId: current.draftId || createFreshDraftId(),
      ...value,
    }));

  const patchFilters = (value) => patch({ filters: { ...filters, ...value } });

  const toggle = (id) =>
    patch({
      selectedIds: list.selectedIds.includes(id)
        ? list.selectedIds.filter((item) => item !== id)
        : [...list.selectedIds, id],
    });

  /**
   * Seleciona TODAS as questões filtradas atualmente e SOMA à lista existente,
   * sem jamais excluir questões que já tinham sido selecionadas em buscas/filtros anteriores.
   */
  const selectAllFiltered = () => {
    if (!filtered.length) {
      notify('Nenhuma questão encontrada com os filtros atuais.', 'error');
      return;
    }
    const existing = new Set(list.selectedIds);
    const toAdd = filtered.map((q) => q.id).filter((id) => !existing.has(id));
    if (toAdd.length === 0) {
      notify(
        `Todas as ${filtered.length} questões deste filtro já estão na sua lista! Altere a matéria, tema ou subtema para adicionar mais.`
      );
      return;
    }
    const previousCount = list.selectedIds.length;
    const nextIds = [...list.selectedIds, ...toAdd];
    patch({ selectedIds: nextIds });
    if (previousCount > 0) {
      notify(
        `+${toAdd.length} ${toAdd.length === 1 ? 'questão adicionada' : 'questões adicionadas'}! As ${previousCount} anteriores foram mantidas (total: ${nextIds.length}).`
      );
    } else {
      notify(
        `${toAdd.length} ${toAdd.length === 1 ? 'questão selecionada' : 'questões selecionadas'} na lista!`
      );
    }
  };

  /**
   * Remove apenas as questões correspondentes ao filtro atual, preservando as de outros filtros.
   */
  const removeFilteredOnly = () => {
    if (!alreadySelectedInFilterCount) return;
    const filteredIds = new Set(filtered.map((q) => q.id));
    const nextIds = list.selectedIds.filter((id) => !filteredIds.has(id));
    patch({ selectedIds: nextIds });
    notify(
      `${alreadySelectedInFilterCount} ${
        alreadySelectedInFilterCount === 1 ? 'questão deste filtro removida' : 'questões deste filtro removidas'
      }. Restam ${nextIds.length} na lista.`
    );
  };

  /**
   * Sorteia N questões dentre as filtradas (ainda não selecionadas) e SOMA à lista atual,
   * sem apagar seleções anteriores.
   */
  const selectRandom = () => {
    if (!filtered.length) {
      notify('Nenhuma questão corresponde aos filtros escolhidos.', 'error');
      return;
    }
    const existing = new Set(list.selectedIds);
    const availablePool = filtered.filter((q) => !existing.has(q.id));
    const pool = availablePool.length > 0 ? availablePool : filtered;
    const quantity = Math.max(1, Math.min(Number(list.quantity) || 1, pool.length));
    const seed = (Number(list.seed) || 0) + 1;
    const chosen = seededShuffle(pool, seed).slice(0, quantity);
    const chosenIds = chosen.map((q) => q.id).filter((id) => !existing.has(id));
    const nextIds = [...list.selectedIds, ...chosenIds];
    patch({ selectedIds: nextIds, quantity, seed });
    notify(
      chosenIds.length > 0
        ? `+${chosenIds.length} ${
            chosenIds.length === 1 ? 'questão sorteada adicionada' : 'questões sorteadas adicionadas'
          } à lista (total: ${nextIds.length}).`
        : 'As questões sorteadas já estavam na sua lista.'
    );
  };

  const move = (id, direction) => {
    const index = list.selectedIds.indexOf(id);
    const target = index + direction;
    if (index < 0 || target < 0 || target >= list.selectedIds.length) return;
    const ids = [...list.selectedIds];
    [ids[index], ids[target]] = [ids[target], ids[index]];
    patch({ selectedIds: ids });
  };

  const startNewBlankList = () => {
    setList((current) => ({
      ...current,
      draftId: createFreshDraftId(),
      title: 'Lista de exercícios',
      subtitle: '',
      author: current.author || '',
      selectedIds: [],
    }));
    notify('Nova lista em branco iniciada!');
  };

  const handlePublishList = async ({ silent = false } = {}) => {
    if (!ordered.length || !onSaveCustomList) return null;
    const draftId = list.draftId || createFreshDraftId();
    if (!list.draftId) {
      patch({ draftId });
    }
    setSaving(true);
    try {
      const savedObj = await onSaveCustomList(
        {
          id: draftId,
          title: list.title,
          subtitle: list.subtitle,
          author: list.author,
          questionIds: ordered.map((q) => q.id),
          styleTemplate: list.styleTemplate || 'fuvest',
          includeKey: list.includeKey !== false,
          order: list.order || 'selection',
        },
        { silent }
      );
      return savedObj;
    } finally {
      setSaving(false);
    }
  };

  const handleOpenPdfPreview = async () => {
    if (!ordered.length) return;
    await handlePublishList({ silent: true });
    setShowPreview(true);
  };

  const startPractice = async () => {
    if (!ordered.length) return;
    const savedObj = await handlePublishList({ silent: true });
    onPractice(ordered, savedObj?.title || list.title);
  };

  const handleShare = async () => {
    if (!ordered.length) return;
    const savedObj = await handlePublishList({ silent: true });
    if (savedObj && onShareCustomList) {
      onShareCustomList(savedObj);
    }
  };

  const activeFilterSummary = [
    filters.subject !== 'Todas' ? filters.subject : null,
    filters.content !== 'Todos' ? filters.content : null,
    filters.subtopic !== 'Todos' ? filters.subtopic : null,
    filters.exam !== 'Todas' ? filters.exam : null,
    filters.type !== 'Todos' ? filters.type : null,
    filters.difficulty !== 'Todas' ? filters.difficulty : null,
  ].filter(Boolean);

  return (
    <section className="list-builder">
      <div className="list-builder-heading">
        <div>
          <span className="eyebrow">PDF A4 EM DUAS COLUNAS + PUBLICAÇÃO AUTOMÁTICA NO ACERVO</span>
          <h1>Fazedor de listas personalizadas</h1>
          <p>
            Filtre por matéria, tema e subtema, use <strong>Selecionar todas</strong> para acumular questões de diferentes assuntos e salve sua lista para todos no site verem.
          </p>
        </div>
        <div className="list-heading-actions">
          {ordered.length > 0 && (
            <button
              type="button"
              className="button button-quiet"
              onClick={startNewBlankList}
              title="Iniciar uma nova lista do zero sem apagar a anterior já salva"
            >
              <FilePlus2 size={17} /> Nova lista
            </button>
          )}
          <button
            type="button"
            className="button button-secondary"
            disabled={!ordered.length || saving}
            onClick={() => handlePublishList({ silent: false })}
            title="Salvar e publicar esta lista para todos os visitantes do site"
          >
            <BookmarkCheck size={18} /> {saving ? 'Salvando…' : 'Salvar lista no site'}
          </button>
          <button
            type="button"
            className="button button-secondary"
            disabled={!ordered.length}
            onClick={handleOpenPdfPreview}
          >
            <FileDown size={18} /> Visualizar PDF
          </button>
          <button
            type="button"
            className="button button-primary"
            disabled={!ordered.length}
            onClick={startPractice}
          >
            <Play size={17} /> Responder lista
          </button>
        </div>
      </div>

      <div className="list-config-card">
        <label className="list-title-field">
          <span>Título da lista (visível para todos no site)</span>
          <input
            value={list.title}
            maxLength={80}
            onChange={(event) => patch({ title: event.target.value })}
            placeholder="Ex.: Revisão Citologia e Genética"
          />
        </label>
        <label>
          <span>Ordenação</span>
          <select value={list.order} onChange={(event) => patch({ order: event.target.value })}>
            {ORDER_OPTIONS.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="list-template-field">
          <span>Estilo do caderno</span>
          <select
            value={list.styleTemplate || 'fuvest'}
            onChange={(event) => patch({ styleTemplate: event.target.value })}
          >
            <option value="fuvest">Preto e branco (FUVEST)</option>
            <option value="vunesp">Detalhes azuis (VUNESP)</option>
          </select>
        </label>
        {list.order === 'random' && (
          <button
            type="button"
            className="button button-quiet list-shuffle-button"
            onClick={() => patch({ seed: (Number(list.seed) || 0) + 1 })}
          >
            <Shuffle size={17} /> Embaralhar novamente
          </button>
        )}
        <label className="answer-key-toggle">
          <input
            type="checkbox"
            checked={list.includeKey}
            onChange={(event) => patch({ includeKey: event.target.checked })}
          />
          <span>
            <strong>Incluir gabarito</strong>
            <small>Em página separada do PDF</small>
          </span>
        </label>
      </div>

      <div className="list-builder-grid">
        <div className="list-picker">
          <div className="list-filter-head">
            <div>
              <Filter size={18} />
              <strong>Filtrar questões por Matéria, Tema e Subtema</strong>
              <span>{filtered.length} disponíveis</span>
            </div>
            <div className="list-filter-head-actions">
              <button
                type="button"
                className="text-button"
                onClick={() =>
                  patchFilters({
                    exam: 'Todas',
                    type: 'Todos',
                    subject: 'Todas',
                    content: 'Todos',
                    subtopic: 'Todos',
                    difficulty: 'Todas',
                  })
                }
              >
                <RotateCcw size={14} /> Limpar filtros
              </button>
            </div>
          </div>

          <div className="list-filters">
            <label>
              <span>Matéria / Disciplina</span>
              <select
                value={filters.subject}
                onChange={(event) =>
                  patchFilters({ subject: event.target.value, content: 'Todos', subtopic: 'Todos' })
                }
              >
                <option value="Todas">Todas</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Tema / Conteúdo</span>
              <select
                value={filters.content}
                onChange={(event) => patchFilters({ content: event.target.value, subtopic: 'Todos' })}
              >
                <option value="Todos">Todos</option>
                {contents.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Subtema</span>
              <select
                value={filters.subtopic}
                onChange={(event) => patchFilters({ subtopic: event.target.value })}
              >
                <option value="Todos">Todos</option>
                {subtopics.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Prova / Banca</span>
              <select value={filters.exam} onChange={(event) => patchFilters({ exam: event.target.value })}>
                <option value="Todas">Todas</option>
                {exams.map((exam) => (
                  <option key={exam} value={exam}>
                    {exam}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Tipo de questão</span>
              <select value={filters.type} onChange={(event) => patchFilters({ type: event.target.value })}>
                <option value="Todos">Todos</option>
                <option value="Objetivas">Objetivas</option>
                <option value="Discursivas">Discursivas</option>
                <option value="Redação">Redação</option>
              </select>
            </label>
            <label>
              <span>Dificuldade</span>
              <select
                value={filters.difficulty}
                onChange={(event) => patchFilters({ difficulty: event.target.value })}
              >
                <option value="Todas">Todas</option>
                <option value="Fácil">Fácil</option>
                <option value="Média">Média</option>
                <option value="Difícil">Difícil</option>
              </select>
            </label>
          </div>

          {/* Barra destacada de Selecionar Todas (cumulativa entre filtros) */}
          <div className="list-select-all-bar">
            <div className="select-all-info">
              <div className="select-all-title-row">
                <strong>
                  {filtered.length}{' '}
                  {filtered.length === 1 ? 'questão encontrada' : 'questões encontradas'}
                </strong>
                {activeFilterSummary.length > 0 && (
                  <span className="select-all-filter-pills">
                    {activeFilterSummary.map((pill) => (
                      <em key={pill}>{pill}</em>
                    ))}
                  </span>
                )}
              </div>
              <small>
                Ao clicar em <strong>Selecionar todas</strong>, as questões abaixo são{' '}
                <strong>somadas</strong> à sua lista sem remover as questões de filtros anteriores.
              </small>
            </div>

            <div className="select-all-buttons">
              <button
                type="button"
                className={`button ${
                  allFilteredAreSelected ? 'button-secondary' : 'button-primary'
                } select-all-main-btn`}
                disabled={!filtered.length}
                onClick={selectAllFiltered}
              >
                <CheckSquare size={17} />
                {allFilteredAreSelected
                  ? `Todas selecionadas (${filtered.length}) ✓`
                  : alreadySelectedInFilterCount > 0
                  ? `Selecionar todas (+${unselectedInFilterCount} de ${filtered.length})`
                  : `Selecionar todas (${filtered.length})`}
              </button>
              {alreadySelectedInFilterCount > 0 && (
                <button
                  type="button"
                  className="button button-quiet select-all-remove-btn"
                  onClick={removeFilteredOnly}
                  title="Remover da lista apenas as questões deste filtro atual"
                >
                  <X size={15} /> Desmarcar estas ({alreadySelectedInFilterCount})
                </button>
              )}
            </div>
          </div>

          <div className="random-picker">
            <label>
              <span>Sortear quantidade</span>
              <input
                type="number"
                min="1"
                max={Math.max(filtered.length, 1)}
                value={list.quantity}
                onChange={(event) => patch({ quantity: event.target.value })}
              />
            </label>
            <button type="button" className="button button-secondary" onClick={selectRandom}>
              <Shuffle size={17} /> Sortear e somar à lista
            </button>
            <small>
              O sorteio também soma novas questões do filtro atual sem apagar o que você já selecionou antes.
            </small>
          </div>

          <div className="list-picker-table" role="list" aria-label="Questões disponíveis">
            {filtered.map((question) => {
              const checked = selectedSet.has(question.id);
              return (
                <button
                  type="button"
                  className={`list-pick-row ${checked ? 'selected' : ''} ${
                    question.kind === 'essay' ? 'list-pick-row-essay' : ''
                  }`}
                  key={question.id}
                  onClick={() => toggle(question.id)}
                  role="listitem"
                  aria-pressed={checked}
                >
                  <span className="list-pick-check">{checked && <Check size={15} />}</span>
                  <span className="list-pick-number">
                    {question.kind === 'essay' ? 'Redação' : `Q${question.number.replace(/\D/g, '')}`}
                  </span>
                  <span className="list-pick-main">
                    <strong>
                      {question.content} · {question.subtopic}
                    </strong>
                    <small>
                      {question.detail} — {snippet(question)}
                    </small>
                    <span>
                      <i style={{ background: SUBJECT_COLORS[question.subject] }} />
                      {question.exam} · {question.phase} · {question.subject} · {question.difficulty}
                      {isOpenQuestion(question)
                        ? ` · ${question.kind === 'essay' ? 'Redação' : 'Discursiva'}`
                        : ''}
                    </span>
                  </span>
                  <span className="list-pick-add">{checked ? <X size={16} /> : <Plus size={16} />}</span>
                </button>
              );
            })}
            {!filtered.length && (
              <div className="list-empty-filter">Nenhuma questão encontrada com esses filtros.</div>
            )}
          </div>
        </div>

        <aside className="list-selection-panel">
          <div className="selection-panel-head">
            <div>
              <ListChecks size={19} />
              <strong>Sua lista acumulada</strong>
            </div>
            <span>
              {ordered.length}/{questions.length}
            </span>
          </div>
          <div className="selection-summary">
            <strong>{ordered.length}</strong>
            <span>{ordered.length === 1 ? 'questão selecionada' : 'questões selecionadas'}</span>
            {ordered.length > 0 && (
              <button
                type="button"
                className="text-button danger-text"
                onClick={() => patch({ selectedIds: [] })}
              >
                <Trash2 size={14} /> Esvaziar
              </button>
            )}
          </div>
          <div className="selection-order-note">
            {ORDER_OPTIONS.find(([value]) => value === list.order)?.[1]}
            {list.order === 'selection' && ' · use as setas para reorganizar'}
          </div>
          <div className="selected-question-list">
            {ordered.map((question, index) => (
              <div className="selected-question-row" key={question.id}>
                <span className="selected-order-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>
                    {question.number}
                    {isOpenQuestion(question)
                      ? ` · ${question.kind === 'essay' ? 'Redação' : 'Discursiva'}`
                      : ''}
                  </strong>
                  <small>
                    {question.exam} · {question.subject} · {question.subtopic || question.content}
                  </small>
                </div>
                {list.order === 'selection' && (
                  <span className="selected-move-buttons">
                    <button
                      type="button"
                      aria-label={`Mover ${question.number} para cima`}
                      disabled={index === 0}
                      onClick={() => move(question.id, -1)}
                    >
                      <ArrowUp size={14} />
                    </button>
                    <button
                      type="button"
                      aria-label={`Mover ${question.number} para baixo`}
                      disabled={index === ordered.length - 1}
                      onClick={() => move(question.id, 1)}
                    >
                      <ArrowDown size={14} />
                    </button>
                  </span>
                )}
                <button
                  type="button"
                  className="selected-remove"
                  aria-label={`Remover ${question.number}`}
                  onClick={() => toggle(question.id)}
                >
                  <X size={15} />
                </button>
              </div>
            ))}
            {!ordered.length && (
              <div className="selection-empty">
                <ListChecks size={32} />
                <strong>Comece sua seleção</strong>
                <p>
                  Escolha a matéria, o tema e o subtema e clique em <strong>Selecionar todas</strong> para somar questões de vários assuntos.
                </p>
              </div>
            )}
          </div>
          {ordered.length > 0 && (
            <div className="selection-panel-footer">
              <button
                type="button"
                className="button button-secondary selection-publish-btn"
                disabled={saving}
                onClick={() => handlePublishList({ silent: false })}
              >
                <BookmarkCheck size={16} /> {saving ? 'Salvando…' : 'Salvar lista para todos verem'}
              </button>
              <div className="selection-panel-actions">
                <button type="button" className="button button-secondary" onClick={handleOpenPdfPreview}>
                  Prévia PDF <ChevronRight size={16} />
                </button>
                <button type="button" className="button button-primary" onClick={startPractice}>
                  Responder <Play size={15} />
                </button>
              </div>
              {onShareCustomList && (
                <button type="button" className="text-button selection-share-link" onClick={handleShare}>
                  <Share2 size={14} /> Copiar link direto desta lista
                </button>
              )}
            </div>
          )}
        </aside>
      </div>
      {showPreview && (
        <PrintList
          questions={ordered}
          title={list.title.trim() || 'Lista de exercícios'}
          showKey={list.includeKey}
          styleTemplate={list.styleTemplate || 'fuvest'}
          onBack={() => setShowPreview(false)}
        />
      )}
    </section>
  );
}
