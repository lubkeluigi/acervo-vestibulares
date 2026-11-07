import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CloudRain,
  Compass,
  ExternalLink,
  Eye,
  FileDown,
  FileText,
  Filter,
  Flame,
  Layers,
  ListChecks,
  Play,
  Printer,
  RotateCcw,
  Sliders,
  Sparkles,
  Waves,
  Wind,
  Zap
} from 'lucide-react';
import { CURATED_LISTS, getCuratedQuestions } from '../data/curatedLists.js';
import { SUBJECT_COLORS } from '../data/questions.js';
import ListBuilder from './ListBuilder.jsx';
import PrintList from './PrintList.jsx';
import { isOpenQuestion } from './OpenResponse.jsx';

function snippet(question) {
  const source = [question.statement, question.statementAfter, question.statementTail].filter(Boolean).join(' ');
  return `${source.replace(/\\[a-zA-Z]+/g, '').replace(/[${}]/g, '').replace(/\s+/g, ' ').trim().slice(0, 160)}…`;
}

export default function ListsView({
  questions,
  list,
  setList,
  onPractice,
  notify,
  onOpenQuestion
}) {
  const [activeTab, setActiveTab] = useState('curated'); // 'curated' | 'builder'
  const [subjectFilter, setSubjectFilter] = useState('Todas');
  const [expandedListId, setExpandedListId] = useState(null);
  const [previewList, setPreviewList] = useState(null);

  // Separate featured hero list and standard curated lists
  const featuredList = useMemo(() => CURATED_LISTS.find((l) => l.featured), []);
  const otherLists = useMemo(() => {
    let items = CURATED_LISTS.filter((l) => !l.featured);
    if (subjectFilter !== 'Todas') {
      items = items.filter((l) => l.subject === subjectFilter);
    }
    return items;
  }, [subjectFilter]);

  const featuredQuestions = useMemo(
    () => (featuredList ? getCuratedQuestions(featuredList, questions) : []),
    [featuredList, questions]
  );

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
      styleTemplate: list.styleTemplate || 'fuvest'
    });
  };

  const handleCustomizeInBuilder = (curatedItem) => {
    setList((current) => ({
      ...current,
      title: curatedItem.title,
      selectedIds: [...curatedItem.questionIds]
    }));
    setActiveTab('builder');
    notify(`Lista "${curatedItem.title}" carregada no Fazedor de listas!`);
  };

  const toggleExpand = (listId) => {
    setExpandedListId((current) => (current === listId ? null : listId));
  };

  return (
    <div className="page lists-hub-page">
      {/* Top Header */}
      <div className="lists-hub-header">
        <div className="lists-hub-header-main">
          <span className="eyebrow">ACERVO DE QUESTÕES · LISTAS PRONTAS & PERSONALIZADAS</span>
          <h1>Listas de questões</h1>
          <p>
            Resolva listas temáticas selecionadas com foco nos assuntos mais cobrados dos grandes vestibulares ou monte listas sob medida para praticar e imprimir em PDF.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="lists-hub-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'curated'}
            className={`lists-hub-tab-btn ${activeTab === 'curated' ? 'active' : ''}`}
            onClick={() => setActiveTab('curated')}
          >
            <Sparkles size={16} />
            <span>Listas temáticas do Acervo</span>
            <span className="lists-tab-badge">{CURATED_LISTS.length}</span>
          </button>
          <button
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

      {/* VIEW: CURATED LISTS */}
      {activeTab === 'curated' && (
        <div className="lists-curated-container">
          {/* Spotlight Hero: El Niño e La Niña */}
          {featuredList && (
            <section className="featured-list-hero" aria-label="Lista em Destaque">
              <div className="featured-hero-ambient" />
              <div className="featured-hero-content">
                <div className="featured-hero-meta-row">
                  <span className="featured-hero-badge">
                    <Waves size={14} /> {featuredList.badge}
                  </span>
                  <span className="featured-hero-subject-pill" style={{ borderColor: SUBJECT_COLORS[featuredList.subject] }}>
                    <i style={{ background: SUBJECT_COLORS[featuredList.subject] }} /> {featuredList.subject} · {featuredList.category}
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
                    className="button button-primary hero-btn-play"
                    onClick={() => handleStartPractice(featuredList)}
                  >
                    <Play size={17} /> Responder lista no site
                  </button>
                  <button
                    className="button button-secondary hero-btn-pdf"
                    onClick={() => handlePreviewPdf(featuredList)}
                  >
                    <FileDown size={17} /> Visualizar / Baixar PDF
                  </button>
                  <button
                    className="button button-quiet hero-btn-customize"
                    onClick={() => handleCustomizeInBuilder(featuredList)}
                  >
                    <Sliders size={16} /> Personalizar no Fazedor
                  </button>
                  <button
                    className="button button-ghost hero-btn-expand"
                    onClick={() => toggleExpand(featuredList.id)}
                  >
                    {expandedListId === featuredList.id ? (
                      <>
                        <ChevronUp size={16} /> Ocultar questões
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} /> Ver 10 questões da lista
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
                            <span className="drawer-q-exam">{q.exam} {q.year ? `· ${q.year}` : ''}</span>
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
                <h3>Outras listas temáticas recomendadas</h3>
                <p>Seleções estruturadas para aprofundar tópicos de alta incidência nos vestibulares de Medicina e gerais.</p>
              </div>
            </div>

            <div className="curated-subject-filters">
              <span className="filters-label">Filtrar por disciplina:</span>
              {['Todas', 'Biologia', 'Física', 'Geografia'].map((sub) => (
                <button
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
            {otherLists.map((item) => {
              const itemQuestions = getCuratedQuestions(item, questions);
              const isExpanded = expandedListId === item.id;
              return (
                <div key={item.id} className="curated-list-card">
                  <div className="card-top-row">
                    <span className="card-subject-pill" style={{ borderColor: SUBJECT_COLORS[item.subject] }}>
                      <i style={{ background: SUBJECT_COLORS[item.subject] }} /> {item.subject}
                    </span>
                    <span className="card-badge">{item.badge}</span>
                    <span className="card-count">{itemQuestions.length} questões</span>
                  </div>

                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-subtitle">{item.subtitle}</p>

                  <p className="card-desc">{item.description}</p>

                  {/* Concept Pills */}
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

                  {/* Actions */}
                  <div className="card-actions">
                    <button
                      className="button button-primary button-sm"
                      onClick={() => handleStartPractice(item)}
                      title="Iniciar prática interativa"
                    >
                      <Play size={14} /> Responder
                    </button>
                    <button
                      className="button button-secondary button-sm"
                      onClick={() => handlePreviewPdf(item)}
                      title="Visualizar ou Imprimir PDF A4"
                    >
                      <FileDown size={14} /> PDF
                    </button>
                    <button
                      className="button button-quiet button-sm"
                      onClick={() => handleCustomizeInBuilder(item)}
                      title="Carregar questões no Fazedor de listas"
                    >
                      <Sliders size={14} /> Personalizar
                    </button>
                    <button
                      className="button button-ghost button-sm"
                      onClick={() => toggleExpand(item.id)}
                      title="Ver questões incluídas"
                    >
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {/* Card Question List Preview */}
                  {isExpanded && (
                    <div className="card-questions-drawer">
                      <div className="card-drawer-head">
                        <strong>Questões da lista:</strong>
                      </div>
                      <div className="card-drawer-list">
                        {itemQuestions.map((q, idx) => (
                          <div key={q.id} className="card-drawer-item">
                            <span className="card-drawer-idx">{idx + 1}.</span>
                            <div className="card-drawer-content">
                              <span className="card-drawer-exam">{q.exam} {q.year ? `· ${q.year}` : ''} ({q.subtopic})</span>
                              <span className="card-drawer-text">{snippet(q)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
          />
        </div>
      )}

      {/* MODAL: PRINT LIST PREVIEW */}
      {previewList && (
        <PrintList
          questions={previewList.questions}
          title={previewList.title}
          showKey={true}
          styleTemplate={previewList.styleTemplate || 'fuvest'}
          onBack={() => setPreviewList(null)}
        />
      )}
    </div>
  );
}
