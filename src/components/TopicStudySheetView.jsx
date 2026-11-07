import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle2, ChevronRight, Clock3, ExternalLink, GraduationCap, Layers3, Printer, Target } from 'lucide-react';
import { getSheetQuestions } from '../data/studySheets.js';
import '../topic-study-sheets.css';
import {
  BiomoleculeMapDiagram,
  DnaReplicationDiagram,
  EnzymeEnergyDiagram,
  EnhancedBioenergeticsDiagram,
  EnhancedEndocrineDiagram,
  EnhancedNervousDiagram,
  EnhancedEcologyDiagram,
  EnhancedBotanyDiagram,
  EnhancedParasitologyDiagram,
} from './TopicStudySheetDiagrams.jsx';
import { EnhancedGeneExpressionDiagram, EnhancedMembraneDiagram } from './EnhancedStudySheetFigures.jsx';
import BookVectorFigure from './BookVectorFigure.jsx';

const diagrams = {
  membrane: EnhancedMembraneDiagram,
  biomolecules: BiomoleculeMapDiagram,
  'gene-expression': EnhancedGeneExpressionDiagram,
  'enzyme-energy': EnzymeEnergyDiagram,
  replication: DnaReplicationDiagram,
  bioenergetics: EnhancedBioenergeticsDiagram,
  endocrine: EnhancedEndocrineDiagram,
  nervous: EnhancedNervousDiagram,
  ecology: EnhancedEcologyDiagram,
  botany: EnhancedBotanyDiagram,
  parasitology: EnhancedParasitologyDiagram,
};

function SheetDiagram({ type }) {
  const Diagram = diagrams[type];
  return Diagram ? <Diagram /> : null;
}

export default function TopicStudySheetView({ sheet, questions, onBack, onOpenQuestion, onPractice, notify }) {
  const related = getSheetQuestions(sheet, questions);
  const { overview, table, mechanisms, applications } = sheet;
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const copyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}${window.location.search}#ficha=${sheet.id}`;
    try { await navigator.clipboard.writeText(url); notify('Link da ficha copiado.'); } catch { notify(`Link da ficha: ${url}`); }
  };
  const anchors = [['sheet-map', 'Mapa'], ['sheet-structures', 'Comparação'], ['sheet-circuits', 'Mecanismos'], ['sheet-compare', 'Aplicações'], ['sheet-traps', 'Não confunda'], ['sheet-questions', 'Questões']];

  return <div className="page study-sheet-page topic-study-sheet-page">
    <div className="study-sheet-navigation no-print"><button className="back-button" onClick={onBack}><ArrowLeft size={18} /> Voltar</button><div><button className="button button-secondary" onClick={copyLink}>Copiar link</button><button className="button button-secondary" onClick={() => window.print()}><Printer size={16} /> Imprimir / salvar PDF</button></div></div>

    <header className="study-sheet-hero topic-study-sheet-hero">
      <div className="study-sheet-hero-copy"><span className="eyebrow">{sheet.eyebrow}</span><h1>{sheet.title}</h1><p>{sheet.description}</p><div className="study-sheet-hero-tags"><span><BookOpen size={15} /> Conteúdo verificado</span>{sheet.tags.map((tag) => <span key={tag}><Layers3 size={15} /> {tag}</span>)}<span><Target size={15} /> {related.length} questões conectadas</span></div><div className="study-sheet-hero-actions no-print"><button className="button button-primary" onClick={() => onPractice(related)}>Praticar as {related.length} questões <ArrowRight size={17} /></button><button className="button button-ghost" onClick={() => scrollTo('sheet-map')}>Começar pelo mapa</button></div></div>
      <div className="study-sheet-hero-note"><span className="handwritten-note">{sheet.heroNote.kicker}</span><strong>{sheet.heroNote.title}</strong><p>{sheet.heroNote.text}</p><div className="note-underline" /></div>
    </header>
    <nav className="study-sheet-anchor-nav no-print" aria-label="Seções da ficha">{anchors.map(([id, label]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}</nav>

    <section className="sheet-section" id="sheet-map">
      <div className="sheet-section-heading"><span className="sheet-section-number">01</span><div><span className="eyebrow">{overview.eyebrow}</span><h2>{overview.title}</h2><p>{overview.description}</p></div></div>
      <div className="cell-map-layout topic-map-layout">
        <figure className="cell-map-card topic-diagram-card"><span className="diagram-scroll-hint">Arraste o diagrama para explorar →</span><SheetDiagram type={sheet.diagram} /><figcaption className="diagram-disclaimer">{overview.caption}{sheet.figureCredits?.[sheet.diagram] && <small className="figure-credit">{sheet.figureCredits[sheet.diagram]}</small>}</figcaption></figure>
        <aside className="central-memory-card"><span className="handwritten-note">{overview.memoryKicker}</span><h3>{overview.memoryTitle}</h3><p>{overview.memoryText}</p><div className="memory-paths">{overview.paths.map((path, index) => <div key={path.title}><span>{index + 1}</span><p><strong>{path.title}</strong>{path.text}</p></div>)}</div><div className="handwritten-arrow">use o esquema como roteiro ↗</div></aside>
      </div>
    </section>

    <section className="sheet-section" id="sheet-structures">
      <div className="sheet-section-heading"><span className="sheet-section-number">02</span><div><span className="eyebrow">{table.eyebrow}</span><h2>{table.title}</h2><p>{table.description}</p></div></div>
      <span className="table-scroll-hint">Arraste a tabela para ver todas as colunas →</span><div className="sheet-table-wrap"><table className="sheet-structure-table topic-sheet-table"><thead><tr>{table.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{table.rows.map((row, index) => <tr key={row[0]}><th scope="row"><span className="structure-index">{String(index + 1).padStart(2, '0')}</span>{row[0]}</th>{row.slice(1).map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>
    </section>

    <section className="sheet-section" id="sheet-circuits">
      <div className="sheet-section-heading"><span className="sheet-section-number">03</span><div><span className="eyebrow">{mechanisms.eyebrow}</span><h2>{mechanisms.title}</h2><p>{mechanisms.description}</p></div></div>
      {sheet.bookFigures?.length > 0 && <div className="book-vector-grid">{sheet.bookFigures.map((figure) => <BookVectorFigure key={figure.src} figure={figure} />)}</div>}
      {sheet.secondaryDiagram && <div className={sheet.supportingDiagram || sheet.supportingBookFigure ? 'enhanced-mechanism-visuals' : ''}>
        {sheet.supportingDiagram && <figure className="topic-secondary-figure"><span className="diagram-scroll-hint">Arraste o diagrama para explorar →</span><SheetDiagram type={sheet.supportingDiagram} /><figcaption>Encaixe entre enzima e substrato no sítio ativo.<small className="figure-credit">{sheet.figureCredits?.[sheet.supportingDiagram]}</small></figcaption></figure>}
        {sheet.supportingBookFigure && <BookVectorFigure figure={sheet.supportingBookFigure} className="topic-secondary-figure" />}
        <figure className="topic-secondary-figure"><span className="diagram-scroll-hint">Arraste o diagrama para explorar →</span><SheetDiagram type={sheet.secondaryDiagram} /><figcaption>{mechanisms.secondaryCaption}{sheet.figureCredits?.[sheet.secondaryDiagram] && <small className="figure-credit">{sheet.figureCredits[sheet.secondaryDiagram]}</small>}</figcaption></figure>
      </div>}
      <div className="topic-mechanism-grid">{mechanisms.cards.map((card, index) => <article className="topic-mechanism-card" key={card.title}><div className="circuit-card-heading"><span>{String.fromCharCode(65 + index)}</span><div><small>{card.kicker}</small><h3>{card.title}</h3></div></div><p className="topic-mechanism-intro">{card.text}</p><ul>{card.points.map((point) => <li key={point}><ChevronRight size={14} /> <span>{point}</span></li>)}</ul></article>)}</div>
    </section>

    <section className="sheet-section" id="sheet-compare">
      <div className="sheet-section-heading"><span className="sheet-section-number">04</span><div><span className="eyebrow">{applications.eyebrow}</span><h2>{applications.title}</h2><p>{applications.description}</p></div></div>
      <div className="sheet-application-grid topic-application-grid">{applications.items.map((item) => <article key={item.title}><span>{item.tag}</span><h4>{item.title}</h4><p>{item.text}</p></article>)}</div>
    </section>

    <section className="sheet-section" id="sheet-traps">
      <div className="sheet-section-heading"><span className="sheet-section-number">05</span><div><span className="eyebrow">NÃO CONFUNDA</span><h2>Seis pontos que costumam gerar confusão</h2><p>As respostas evitam regras absolutas e explicitam as condições que costumam aparecer nos enunciados.</p></div></div>
      <div className="sheet-trap-grid">{sheet.traps.map(([title, answer], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{answer}</p></article>)}</div>
      <div className="sheet-final-check"><div><span className="handwritten-note">autoavaliação</span><h3>Checklist de revisão</h3></div><div className="sheet-checklist">{sheet.checklist.map((item) => <span key={item}><Check size={14} />{item}</span>)}</div></div>
    </section>

    <section className="sheet-section sheet-related-section" id="sheet-questions">
      <div className="sheet-section-heading"><span className="sheet-section-number">06</span><div><span className="eyebrow">VOLTE À PRÁTICA</span><h2>{related.length} questões relacionadas a esta ficha</h2><p>A mesma ficha é reutilizada por todas estas questões; o resumo não é duplicado no acervo.</p></div><button className="button button-primary no-print" onClick={() => onPractice(related)}>Praticar sequência <ArrowRight size={16} /></button></div>
      <div className="sheet-question-grid">{related.map((question, index) => <article className="sheet-question-card" key={question.id}><div className="sheet-question-card-top"><span>{String(index + 1).padStart(2, '0')}</span><small>{question.kind === 'discursive' ? 'Discursiva' : 'Objetiva'} · {question.difficulty}</small></div><div className="question-origin"><span className="exam-badge">{question.exam}</span><span>{question.year}</span><i /><span>{question.number}</span></div><h3>{question.detail}</h3><p>{question.subtopic}</p><button onClick={() => onOpenQuestion(question, related)}>Resolver questão <ArrowRight size={15} /></button></article>)}</div>
      <div className="sheet-reuse-proof"><CheckCircle2 size={21} /><div><strong>Conteúdo compartilhado</strong><p>As {related.length} questões apontam para esta mesma ficha. Uma atualização feita aqui vale para todas elas.</p></div></div>
    </section>

    <aside className="sheet-sources" aria-label="Fontes de verificação"><div><GraduationCap size={20} /><span><strong>Verificação editorial</strong><p>Redação própria confrontada com referências independentes. Bases visuais, recriações e lettering são identificados por figura; as questões mantêm suas fontes de origem.</p></span></div><ul>{sheet.sources.map((source) => <li key={source.url || source.title}>{source.url ? <a href={source.url} target="_blank" rel="noreferrer">{source.title} <ExternalLink size={12} /></a> : <strong className="source-book-title">{source.title}</strong>}<span>{source.note}</span></li>)}</ul></aside>
    <footer className="study-sheet-footer"><span><Clock3 size={14} /> Síntese editorial do Acervo · revisada em 5 nov. 2026</span><span>Lettering vetorial autoral · fontes e créditos por figura.</span></footer>
  </div>;
}
