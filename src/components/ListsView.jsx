import React, { useEffect, useMemo, useState } from 'react';
import {
  BookmarkCheck,
  ChevronDown,
  ChevronUp,
  Clock,
  FileDown,
  Layers,
  ListChecks,
  Play,
  Plus,
  Share2,
  Sliders,
  Sparkles,
  Trash2,
  Users,
  Waves,
} from 'lucide-react';
import { CURATED_LISTS, getCuratedQuestions } from '../data/curatedLists.js';
import {
  buildCustomListObject,
  decodeListFromHash,
  deleteCustomList,
  encodeListToHash,
  fetchAllCustomLists,
  saveCustomList,
} from '../data/customListsStore.js';
import { SUBJECT_COLORS, subjects } from '../data/questions.js';
import ListBuilder from './ListBuilder.jsx';
import PrintList from './PrintList.jsx';

function snippet(question) {
  const source = [question.statement, question.statementAfter, question.statementTail].filter(Boolean).join(' ');
  return `${source
    .replace(/<[^>]+>/g, ' ')
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/[${}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160)}…`;
}

function formatShortDate(iso) {
  if (!iso) return 'Recente';
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return 'Recente';
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  } catch {
    return 'Recente';
  }
}

export default function ListsView({
  questions,
  list,
  setList,
  onPractice,
  notify,
  onOpenQuestion,
}) {
  const [activeTab, setActiveTab] = useState('curated'); // 'curated' | 'custom' | 'builder'
  const [subjectFilter, setSubjectFilter] = useState('Todas');
  const [expandedListId, setExpandedListId] = useState(null);
  const [previewList, setPreviewList] = useState(null);
  const [customLists, setCustomLists] = useState([]);

  // Carrega listas personalizadas salvas no servidor + localStorage + hash compartilhado
  useEffect(() => {
    let mounted = true;
    fetchAllCustomLists().then((loaded) => {
      if (!mounted) return;
      setCustomLists(loaded);
    });

    if (typeof window !== 'undefined' && window.location.hash.startsWith('#lista=')) {
      const imported = decodeListFromHash(window.location.hash, questions);
      if (imported) {
        saveCustomList(imported).then((updated) => {
          if (mounted) {
            setCustomLists(updated);
            notify(`Lista compartilhada "${imported.title}" importada e salva!`);
          }
        });
      }
    }

    return () => {
      mounted = false;
    };
  }, [questions]);

  // Separate featured hero list and standard curated lists
  const featuredList = useMemo(() => CURATED_LISTS.find((l) => l.featured), []);
  const otherLists = useMemo(() => {
    let items = CURATED_LISTS.filter((l) => !l.featured);
    if (subjectFilter !== 'Todas') {
      items = items.filter((l) => l.subject === subjectFilter);
    }
    return items;
  }, [subjectFilter]);

  const filteredCustomLists = useMemo(() => {
    if (subjectFilter === 'Todas') return customLists;
    return customLists.filter(
      (item) =>
        item.subject === subjectFilter ||
        (Array.isArray(item.subjects) && item.subjects.includes(subjectFilter))
    );
  }, [customLists, subjectFilter]);

  const featuredQuestions = useMemo(
    () => (featuredList ? getCuratedQuestions(featuredList, questions) : []),
    [featuredList, questions]
  );

  const handleSaveCustomList = async (config, { silent = false } = {}) => {
    const built = buildCustomListObject(config, questions);
    if (!built) {
      if (!silent) notify('Selecione ao menos uma questão para salvar a lista.', 'error');
      return null;
    }
    const updated = await saveCustomList(built);
    setCustomLists(updated);
    if (!silent) {
      notify(`Lista "${built.title}" salva e publicada para todos verem!`);
    }
    return built;
  };

  const handleDeleteCustomList = async (item) => {
    const updated = await deleteCustomList(item.id);
    setCustomLists(updated);
    notify(`Lista "${item.title}" removida.`);
  };

  const handleShareCustomList = async (item) => {
    const hash = encodeListToHash(item);
    const url = `${window.location.origin}${window.location.pathname}${hash}`;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        notify(`Link da lista "${item.title}" copiado para a área de transferência!`);
        return;
      }
    } catch {
      // fallback
    }
    window.location.hash = hash;
    notify(`Link gerado na barra de endereço para "${item.title}"!`);
  };

  const handleStartPractice = (curatedItem) => {
    const listQuestions = getCuratedQuestions(curatedItem, questions);
    if (!listQuestions.length) {
      notify('Nenhuma questão encontrada para esta lista.', 'error');
      return;
    }
    onPractice(listQuestions, curatedItem.title);
  };

  const handlePreviewPdf = (curatedItem) => {
    const listQuestions = getCuratedQuestions(curatedItem, questions);
    if (!listQuestions.length) {
      notify('Nenhuma questão encontrada para gerar PDF.', 'error');
      return;
    }
    setPreviewList({
      questions: listQuestions,
      title: curatedItem.title,
      showKey: curatedItem.includeKey !== false,
      styleTemplate: curatedItem.styleTemplate || list.styleTemplate || 'fuvest',
    });
  };

  const handleCustomizeInBuilder = (curatedItem) => {
    setList((current) => ({
      ...current,
      draftId: curatedItem.isCustom ? curatedItem.id : undefined,
      title: curatedItem.title,
      styleTemplate: curatedItem.styleTemplate || current.styleTemplate || 'fuvest',
      includeKey: curatedItem.includeKey !== false,
      selectedIds: [...curatedItem.questionIds],
    }));
    setActiveTab('builder');
    notify(`Lista "${curatedItem.title}" carregada no Fazedor de listas!`);
  };

  const toggleExpand = (listId) => {
    setExpandedListId((current) => (current === listId ? null : listId));
  };

  const renderListCard = (item, isCustom = false) => {
    const itemQuestions = getCuratedQuestions(item, questions);
    if (!itemQuestions.length) return null;
    const isExpanded = expandedListId === item.id;
    return (
      <div
        key={item.id}
        className={`curated-list-card ${isCustom ? 'custom-saved-list-card' : ''}`}
      >
        <div className="card-top-row">
          <span
            className="card-subject-pill"
            style={{ borderColor: SUBJECT_COLORS[item.subject] || '#1b7a5a' }}
          >
            <i style={{ background: SUBJECT_COLORS[item.subject] || '#1b7a5a' }} />{' '}
            {item.subjects && item.subjects.length > 1
              ? `${item.subject} +${item.subjects.length - 1}`
              : item.subject}
          </span>
          <span className={`card-badge ${isCustom ? 'card-badge-custom' : ''}`}>
            {isCustom ? 'Personalizada' : item.badge}
          </span>
          <span className="card-count">{itemQuestions.length} questões</span>
        </div>

        <h4 className="card-title">{item.title}</h4>
        <p className="card-subtitle">
          {item.subtitle}
          {isCustom && item.createdAt ? ` · Criada em ${formatShortDate(item.createdAt)}` : ''}
        </p>

        <p className="card-desc">{item.description}</p>

        {/* Concept Pills */}
        {item.keyConcepts && item.keyConcepts.length > 0 && (
          <div className="card-concepts">
            {item.keyConcepts.slice(0, 3).map((concept, idx) => (
              <span key={idx} className="card-concept-pill">
                {concept}
              </span>
            ))}
            {item.keyConcepts.length > 3 && (
              <span className="card-concept-pill-more">+{item.keyConcepts.length - 3}</span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="card-actions">
          <button
            type="button"
            className="button button-primary button-sm"
            onClick={() => handleStartPractice(item)}
            title="Iniciar prática interativa"
          >
            <Play size={14} /> Responder
          </button>
          <button
            type="button"
            className="button button-secondary button-sm"
            onClick={() => handlePreviewPdf(item)}
            title="Visualizar ou Imprimir PDF A4"
          >
            <FileDown size={14} /> PDF
          </button>
          <button
            type="button"
            className="button button-quiet button-sm"
            onClick={() => handleCustomizeInBuilder(item)}
            title="Carregar e editar questões no Fazedor de listas"
          >
            <Sliders size={14} /> {isCustom ? 'Editar' : 'Personalizar'}
          </button>
          {isCustom && (
            <button
              type="button"
              className="button button-ghost button-sm"
              onClick={() => handleShareCustomList(item)}
              title="Copiar link direto desta lista"
            >
              <Share2 size={14} />
            </button>
          )}
          <button
            type="button"
            className="button button-ghost button-sm"
            onClick={() => toggleExpand(item.id)}
            title="Ver questões incluídas"
          >
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {isCustom && (
            <button
              type="button"
              className="button button-ghost button-sm danger-text"
              onClick={() => handleDeleteCustomList(item)}
              title="Excluir lista personalizada"
            >
              <Trash2 size={14} />
            </button>
          )}
        </div>

        {/* Card Question List Preview */}
        {isExpanded && (
          <div className="card-questions-drawer">
            <div className="card-drawer-head">
              <strong>Questões da lista ({itemQuestions.length}):</strong>
            </div>
            <div className="card-drawer-list">
              {itemQuestions.map((q, idx) => (
                <div key={q.id} className="card-drawer-item">
                  <span className="card-drawer-idx">{idx + 1}.</span>
                  <div className="card-drawer-content">
                    <span className="card-drawer-exam">
                      {q.exam} {q.year ? `· ${q.year}` : ''} · {q.subject} ({q.subtopic || q.content})
                    </span>
                    <span className="card-drawer-text">{snippet(q)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="page lists-hub-page">
      {/* Top Header */}
      <div className="lists-hub-header">
        <div className="lists-hub-header-main">
          <span className="eyebrow">ACERVO DE QUESTÕES · LISTAS PRONTAS & DA COMUNIDADE</span>
          <h1>Listas de questões</h1>
          <p>
            Resolva listas temáticas do acervo, explore as listas personalizadas criadas no site por estudantes e professores ou monte sua própria lista sob medida para responder e imprimir em PDF.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="lists-hub-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'curated'}
            className={`lists-hub-tab-btn ${activeTab === 'curated' ? 'active' : ''}`}
            onClick={() => setActiveTab('curated')}
          >
            <Sparkles size={16} />
            <span>Todas as listas</span>
            <span className="lists-tab-badge">{CURATED_LISTS.length + customLists.length}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'custom'}
            className={`lists-hub-tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
            onClick={() => setActiveTab('custom')}
          >
            <Users size={16} />
            <span>Listas personalizadas</span>
            <span className="lists-tab-badge">{customLists.length}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'builder'}
            className={`lists-hub-tab-btn ${activeTab === 'builder' ? 'active' : ''}`}
            onClick={() => setActiveTab('builder')}
          >
            <Sliders size={16} />
            <span>Montar lista personalizada</span>
            {list.selectedIds.length > 0 && (
              <span className="lists-tab-badge active-selection">{list.selectedIds.length}</span>
            )}
          </button>
        </div>
      </div>

      {/* VIEW: CURATED + COMMUNITY LISTS */}
      {activeTab === 'curated' && (
        <div className="lists-curated-container">
          {/* Seção em destaque: Listas Personalizadas Criadas no Site */}
          <div className="curated-section-divider" style={{ marginTop: 0 }}>
            <div className="curated-section-title">
              <BookmarkCheck size={20} />
              <div>
                <h3>Listas personalizadas criadas no site ({customLists.length})</h3>
                <p>
                  Todas as listas personalizadas montadas e salvas no site ficam visíveis aqui para todos responderem ou baixarem em PDF.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="button button-primary button-sm"
              onClick={() => setActiveTab('builder')}
            >
              <Plus size={15} /> Criar nova lista personalizada
            </button>
          </div>

          {customLists.length > 0 ? (
            <div className="curated-lists-grid" style={{ marginBottom: 34 }}>
              {filteredCustomLists.map((item) => renderListCard(item, true))}
            </div>
          ) : (
            <div className="custom-lists-empty-banner" style={{ marginBottom: 30 }}>
              <div>
                <strong>Nenhuma lista personalizada criada ainda</strong>
                <p>
                  Monte uma lista escolhendo matéria, tema e subtema no Fazedor de Listas — ela ficará salva aqui automaticamente para todos verem!
                </p>
              </div>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => setActiveTab('builder')}
              >
                <Sliders size={16} /> Montar primeira lista
              </button>
            </div>
          )}

          {/* Spotlight Hero: El Niño e La Niña */}
          {featuredList && (
            <section className="featured-list-hero" aria-label="Lista em Destaque">
              <div className="featured-hero-ambient" />
              <div className="featured-hero-content">
                <div className="featured-hero-meta-row">
                  <span className="featured-hero-badge">
                    <Waves size={14} /> {featuredList.badge}
                  </span>
                  <span
                    className="featured-hero-subject-pill"
                    style={{ borderColor: SUBJECT_COLORS[featuredList.subject] }}
                  >
                    <i style={{ background: SUBJECT_COLORS[featuredList.subject] }} />{' '}
                    {featuredList.subject} · {featuredList.category}
                  </span>
                  <span className="featured-hero-count">
                    <ListChecks size={14} /> {featuredQuestions.length} questões
                  </span>
                  <span className="featured-hero-diff">
                    Dificuldade: <strong>{featuredList.difficulty}</strong>
                  </span>
                </div>

                <h2 className="featured-hero-title">{featuredList.title}</h2>
                <p className="featured-hero-subtitle">{featuredList.subtitle}</p>

                <p className="featured-hero-desc">{featuredList.description}</p>

                {/* Key Concepts Pills */}
                <div className="featured-hero-concepts">
                  <span className="concepts-label">Conceitos-chave:</span>
                  <div className="concepts-pills">
                    {featuredList.keyConcepts.map((concept, idx) => (
                      <span key={idx} className="concept-pill">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Vestibulares Included */}
                <div className="featured-hero-exams">
                  <span className="exams-label">Vestibulares contemplados:</span>
                  <div className="exams-tags">
                    {featuredList.examTags.map((tag) => (
                      <span key={tag} className="exam-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Main Action Bar */}
                <div className="featured-hero-actions">
                  <button
                    type="button"
                    className="button button-primary hero-btn-play"
                    onClick={() => handleStartPractice(featuredList)}
                  >
                    <Play size={17} /> Responder lista no site
                  </button>
                  <button
                    type="button"
                    className="button button-secondary hero-btn-pdf"
                    onClick={() => handlePreviewPdf(featuredList)}
                  >
                    <FileDown size={17} /> Visualizar / Baixar PDF
                  </button>
                  <button
                    type="button"
                    className="button button-quiet hero-btn-customize"
                    onClick={() => handleCustomizeInBuilder(featuredList)}
                  >
                    <Sliders size={16} /> Personalizar no Fazedor
                  </button>
                  <button
                    type="button"
                    className="button button-ghost hero-btn-expand"
                    onClick={() => toggleExpand(featuredList.id)}
                  >
                    {expandedListId === featuredList.id ? (
                      <>
                        <ChevronUp size={16} /> Ocultar questões
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} /> Ver {featuredQuestions.length} questões da lista
                      </>
                    )}
                  </button>
                </div>

                {/* Expandable Question Drawer */}
                {expandedListId === featuredList.id && (
                  <div className="featured-hero-questions-drawer">
                    <div className="drawer-header">
                      <strong>Questões incluídas nesta lista ({featuredQuestions.length})</strong>
                      <small>Clique em "Responder lista" para resolver todas de forma interativa</small>
                    </div>
                    <div className="drawer-question-grid">
                      {featuredQuestions.map((q, idx) => (
                        <div key={q.id} className="drawer-question-card">
                          <div className="drawer-q-meta">
                            <span className="drawer-q-num">Q{String(idx + 1).padStart(2, '0')}</span>
                            <span className="drawer-q-exam">
                              {q.exam} {q.year ? `· ${q.year}` : ''}
                            </span>
                            <span className="drawer-q-subtopic">{q.subtopic}</span>
                            <span className="drawer-q-diff">{q.difficulty}</span>
                          </div>
                          <p className="drawer-q-snippet">{snippet(q)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Section Divider & Filter Bar */}
          <div className="curated-section-divider">
            <div className="curated-section-title">
              <Layers size={18} />
              <div>
                <h3>Listas temáticas recomendadas do Acervo</h3>
                <p>
                  Seleções estruturadas para aprofundar tópicos de alta incidência nos vestibulares de Medicina e gerais.
                </p>
              </div>
            </div>

            <div className="curated-subject-filters">
              <span className="filters-label">Filtrar por matéria:</span>
              {['Todas', ...subjects].map((sub) => (
                <button
                  type="button"
                  key={sub}
                  className={`subject-chip-btn ${subjectFilter === sub ? 'active' : ''}`}
                  onClick={() => setSubjectFilter(sub)}
                >
                  {sub !== 'Todas' && <i style={{ background: SUBJECT_COLORS[sub] || '#666' }} />}
                  <span>{sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Other Curated Lists Grid */}
          <div className="curated-lists-grid">
            {otherLists.map((item) => renderListCard(item, false))}
          </div>
        </div>
      )}

      {/* VIEW: DEDICATED CUSTOM LISTS TAB */}
      {activeTab === 'custom' && (
        <div className="lists-curated-container">
          <div className="curated-section-divider" style={{ marginTop: 0 }}>
            <div className="curated-section-title">
              <Users size={19} />
              <div>
                <h3>Todas as listas personalizadas criadas no site ({filteredCustomLists.length})</h3>
                <p>
                  Qualquer lista salva no Fazedor de Listas aparece aqui para todos os usuários praticarem ou gerarem PDF.
                </p>
              </div>
            </div>

            <div className="curated-subject-filters">
              <span className="filters-label">Matéria:</span>
              {['Todas', ...subjects].map((sub) => (
                <button
                  type="button"
                  key={sub}
                  className={`subject-chip-btn ${subjectFilter === sub ? 'active' : ''}`}
                  onClick={() => setSubjectFilter(sub)}
                >
                  {sub !== 'Todas' && <i style={{ background: SUBJECT_COLORS[sub] || '#666' }} />}
                  <span>{sub}</span>
                </button>
              ))}
            </div>
          </div>

          {filteredCustomLists.length > 0 ? (
            <div className="curated-lists-grid">
              {filteredCustomLists.map((item) => renderListCard(item, true))}
            </div>
          ) : (
            <div className="custom-lists-empty-banner">
              <div>
                <strong>Nenhuma lista personalizada encontrada para este filtro</strong>
                <p>Use o Fazedor de Listas para criar e publicar uma nova lista personalizada.</p>
              </div>
              <button
                type="button"
                className="button button-primary"
                onClick={() => setActiveTab('builder')}
              >
                <Plus size={16} /> Criar lista personalizada
              </button>
            </div>
          )}
        </div>
      )}

      {/* VIEW: CUSTOM LIST BUILDER */}
      {activeTab === 'builder' && (
        <div className="lists-builder-wrapper">
          <ListBuilder
            questions={questions}
            list={list}
            setList={setList}
            onPractice={onPractice}
            notify={notify}
            onSaveCustomList={handleSaveCustomList}
            onShareCustomList={handleShareCustomList}
          />

          {customLists.length > 0 && (
            <div style={{ marginTop: 42 }}>
              <div className="curated-section-divider">
                <div className="curated-section-title">
                  <BookmarkCheck size={19} />
                  <div>
                    <h3>Listas personalizadas já salvas no site ({customLists.length})</h3>
                    <p>Suas listas salvas e as listas criadas pela comunidade aparecem abaixo.</p>
                  </div>
                </div>
              </div>
              <div className="curated-lists-grid">
                {customLists.map((item) => renderListCard(item, true))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODAL: PRINT LIST PREVIEW */}
      {previewList && (
        <PrintList
          questions={previewList.questions}
          title={previewList.title}
          showKey={previewList.showKey !== false}
          styleTemplate={previewList.styleTemplate || 'fuvest'}
          onBack={() => setPreviewList(null)}
        />
      )}
    </div>
  );
}
