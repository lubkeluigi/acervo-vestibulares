import React from 'react';
import { SUBJECT_COLORS } from '../data/questions.js';

const normalize = (value) => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export function FilterTag({ field, value, onFilter, className = '', style, children, title }) {
  return (
    <button
      type="button"
      className={`filter-tag ${className}`}
      style={style}
      onClick={(event) => { event.stopPropagation(); onFilter(field, String(value)); }}
      onKeyDown={(event) => event.stopPropagation()}
      title={title || `Filtrar por ${value}`}
      aria-label={title || `Filtrar por ${value}`}
      data-filter-field={field}
      data-filter-value={String(value)}
    >
      {children ?? value}
    </button>
  );
}

export function TaxonomyTags({ question, onFilter, className = '', kindLabel = '', showDifficulty = false }) {
  return (
    <div className={`question-tags ${className}`}>
      <FilterTag field="subject" value={question.subject} onFilter={onFilter} className="subject-tag" style={{ '--subject-color': SUBJECT_COLORS[question.subject] }}><i />{question.subject}</FilterTag>
      <FilterTag field="content" value={question.content} onFilter={onFilter}>{question.content}</FilterTag>
      <FilterTag field="subtopic" value={question.subtopic} onFilter={onFilter} className="subtopic-tag">{question.subtopic}</FilterTag>
      {kindLabel && <FilterTag field="type" value={kindLabel} onFilter={onFilter} className="question-kind-badge">{kindLabel}</FilterTag>}
      {showDifficulty && <FilterTag field="difficulty" value={question.difficulty} onFilter={onFilter} className={`difficulty difficulty-${normalize(question.difficulty)}`}>{question.difficulty}</FilterTag>}
    </div>
  );
}
