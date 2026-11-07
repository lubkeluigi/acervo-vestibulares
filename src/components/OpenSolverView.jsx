import React from 'react';
import { ArrowLeft, ArrowRight, Bookmark, Check, ChevronLeft, ChevronRight, CircleHelp, FileText, GraduationCap, PenLine, RotateCcw } from 'lucide-react';
import QuestionContent from './QuestionContent.jsx';
import { QuestionStudySheetLink } from './StudySheets.jsx';
import { OpenResponseEditor, OpenResponseReview, isEditorialCorrection, openAssessment, responseStatus } from './OpenResponse.jsx';
import { FilterTag, TaxonomyTags } from './QuestionTaxonomy.jsx';

export default function OpenSolverView({ question, queue, answers, saved, onToggleSaved, onAnswerOpen, onBack, onNavigateQuestion, notify, sessionTitle, onOpenSheet, onFilterTag }) {
  const savedAnswer = answers[question.id] || {};
  const responses = savedAnswer.responses || {};
  const scores = savedAnswer.scores || {};
  const reviewed = Boolean(savedAnswer.reviewed);
  const position = queue.indexOf(question.id);
  const isSaved = saved.includes(question.id);
  const status = responseStatus(question, responses);
  const assessment = openAssessment(question, scores);
  const essay = question.kind === 'essay';
  const editorial = isEditorialCorrection(question);

  const save = (patch) => onAnswerOpen(question, { ...savedAnswer, ...patch });
  const changeResponse = (partId, text) => save({ responses: { ...responses, [partId]: text } });
  const changeScore = (partId, score) => save({ scores: { ...scores, [partId]: score }, reviewed: true });
  const review = () => {
    if (status === 'blank') { notify(essay ? 'Escreva sua redação antes de liberar a comparação.' : 'Escreva ao menos uma resposta antes de comparar.'); return; }
    save({ reviewed: true });
    notify(essay ? 'Sua redação foi salva. A proposta não recebe nota automática.' : editorial ? 'Proposta de correção liberada. Agora registre sua autoavaliação.' : 'Resposta oficial liberada. Agora registre sua autoavaliação.');
    window.setTimeout(() => document.querySelector('.open-response-review')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  return <div className="page solver-page open-solver-page">
    <div className="solver-navigation">
      <button className="back-button" onClick={onBack}><ArrowLeft size={18} /> Voltar {sessionTitle ? 'aos simulados' : 'ao banco'}</button>
      <div className="question-position"><span>{sessionTitle || 'Questão'}</span><strong>{position + 1} <i>/</i> {queue.length}</strong></div>
      <div className="question-nav-buttons"><button disabled={position <= 0} onClick={() => onNavigateQuestion(-1)} aria-label="Questão anterior"><ChevronLeft size={19} /></button><button disabled={position >= queue.length - 1} onClick={() => onNavigateQuestion(1)} aria-label="Próxima questão"><ChevronRight size={19} /></button></div>
    </div>
    <div className="solver-layout">
      <main className="solver-main">
        <section className="solver-card">
          <div className="solver-meta">
            <div className="question-origin"><FilterTag field="exam" value={question.exam} onFilter={onFilterTag} className="exam-badge" /><FilterTag field="year" value={question.year} onFilter={onFilterTag} className="year-filter-tag" /><i /><span>{question.number}</span>{question.phase && <><i /><span>{question.phase}</span></>}<FilterTag field="type" value={essay ? 'Redação' : 'Discursiva'} onFilter={onFilterTag} className="question-kind-badge" /></div>
            <button className={`bookmark-button ${isSaved ? 'saved' : ''}`} onClick={onToggleSaved}><Bookmark size={19} fill={isSaved ? 'currentColor' : 'none'} /><span>{isSaved ? 'Salva' : 'Salvar'}</span></button>
          </div>
          <TaxonomyTags question={question} onFilter={onFilterTag} className="solver-tags" showDifficulty />
          <div className="open-mode-notice"><PenLine size={19} /><div><strong>{essay ? 'Produção de texto' : 'Questão discursiva'}</strong><p>{essay ? 'Escreva seu texto e salve para revisar. A redação não entra na correção automática.' : editorial ? 'Apresente a resolução e a resposta de cada item. Depois, compare com a proposta de correção do acervo e atribua sua pontuação de estudo.' : 'Apresente a resolução e a resposta de cada item. Depois, compare com a resposta oficial e atribua sua pontuação.'}</p></div></div>
          <QuestionContent question={question} className="open-solver-content" eager />
          {!reviewed && <OpenResponseEditor question={question} value={responses} onChange={changeResponse} />}
          <div className="answer-actions">
            {!reviewed ? <button className="button button-ghost" disabled={status === 'blank'} onClick={review}><FileText size={17} /> {editorial ? 'Ver proposta de correção' : 'Ver resposta oficial'}</button> : <button className="button button-ghost" onClick={() => save({ reviewed: false, scores: {} })}><RotateCcw size={17} /> Editar e refazer autoavaliação</button>}
            {!reviewed ? <button className="button button-primary" onClick={review}>Concluir e comparar <ArrowRight size={17} /></button> : position < queue.length - 1 ? <button className="button button-primary" onClick={() => onNavigateQuestion(1)}>Próxima questão <ArrowRight size={17} /></button> : <button className="button button-primary" onClick={onBack}>Concluir <Check size={17} /></button>}
          </div>
        </section>
        {reviewed && <QuestionStudySheetLink question={question} onOpenSheet={onOpenSheet} />}
        {reviewed && <OpenResponseReview question={question} responses={responses} scores={scores} onScoreChange={changeScore} />}
        <div className="solver-bottom-nav"><button disabled={position <= 0} onClick={() => onNavigateQuestion(-1)}><ArrowLeft size={16} /> Questão anterior</button><span>{question.subject} · {question.content}</span><button disabled={position >= queue.length - 1} onClick={() => onNavigateQuestion(1)}>Próxima questão <ArrowRight size={16} /></button></div>
      </main>
      <aside className="solver-aside">
        <div className="aside-card focus-card"><span className="aside-card-icon"><GraduationCap size={20} /></span><h3>Autoavaliação guiada</h3><p>{editorial ? 'Produza sua resposta antes de consultar a proposta do acervo e use os critérios de estudo para avaliar cada item.' : 'Produza sua resposta antes de consultar o oficial e use os critérios para avaliar cada item.'}</p><div className="focus-checklist"><span className={status !== 'blank' ? 'done' : ''}><i>{status !== 'blank' && <Check size={11} />}</i>Escreva sua resposta</span><span className={reviewed ? 'done' : ''}><i>{reviewed && <Check size={11} />}</i>{editorial ? 'Compare com a proposta' : 'Compare com o oficial'}</span>{assessment.totalItems > 0 && <span className={assessment.complete ? 'done' : ''}><i>{assessment.complete && <Check size={11} />}</i>Registre sua pontuação</span>}</div></div>
        <div className="aside-card aside-tip"><CircleHelp size={18} /><div><strong>Correção transparente</strong><p>A nota das discursivas é uma autoavaliação. Ela não altera a porcentagem de acertos das objetivas.</p></div></div>
        <div className="aside-source"><FileText size={15} /><span>Fonte: {question.exam} {question.year}, {question.phase}.<br /><a href={question.originalUrl} target="_blank" rel="noreferrer">Abrir prova original <ArrowRight size={11} /></a></span></div>
      </aside>
    </div>
  </div>;
}
