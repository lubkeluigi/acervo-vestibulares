import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle2, ChevronRight, Clock3, FileText, GraduationCap, Layers3, Printer, Sparkles, Target } from 'lucide-react';
import { getSheetForQuestion, getSheetQuestions, STUDY_SHEETS } from '../data/studySheets.js';
import { CellTypeDiagram } from './StudySheetDiagrams.jsx';
import { EnhancedCellMap } from './EnhancedStudySheetFigures.jsx';
import { StudySheetArtwork } from './TopicStudySheetDiagrams.jsx';
import TopicStudySheetView from './TopicStudySheetView.jsx';
import BookVectorFigure from './BookVectorFigure.jsx';

const structureRows = [
  ['Membrana plasmática', 'Delimita a célula e controla trocas com o ambiente.', 'Bicamada fosfolipídica com proteínas; existe também nas células com parede.'],
  ['Citoplasma e citosol', 'Abriga reações e as estruturas celulares.', 'Citosol é a porção fluida; citoplasma inclui citosol e componentes nele presentes.'],
  ['Núcleo e nucléolo', 'O núcleo guarda a maior parte do DNA; o nucléolo produz componentes dos ribossomos.', 'O nucléolo é uma região nuclear, sem membrana própria.'],
  ['Ribossomos', 'Fazem a tradução do RNA e a síntese de proteínas.', 'Não têm membrana; podem estar livres no citosol ou aderidos ao RER.'],
  ['Retículo endoplasmático rugoso (RER)', 'Dobra, modifica e encaminha proteínas produzidas por ribossomos aderidos.', 'Os pontos ficam na face externa das membranas, não dentro do retículo.'],
  ['Retículo endoplasmático liso (REL)', 'Sintetiza lipídios, participa da destoxificação e pode armazenar cálcio.', 'Não apresenta ribossomos aderidos.'],
  ['Complexo golgiense', 'Modifica, organiza e empacota moléculas para diferentes destinos.', 'Forma vesículas; não é o local de tradução das proteínas.'],
  ['Lisossomos', 'Realizam digestão intracelular com enzimas em ambiente ácido.', 'Digerem materiais e organelas; não “produzem energia”.'],
  ['Mitocôndrias', 'Convertem energia de nutrientes em ATP durante a respiração celular.', 'Dupla membrana, DNA próprio e cristas internas; existem em células vegetais também.'],
  ['Cloroplastos', 'Realizam a fotossíntese em vegetais e algas fotossintetizantes.', 'Apresentam tilacoides e clorofila; células animais e de fungos não os possuem.'],
  ['Vacúolos', 'Armazenam substâncias e participam do equilíbrio hídrico.', 'O grande vacúolo central é típico de células vegetais; vacúolos não são exclusivos delas.'],
  ['Citoesqueleto', 'Dá suporte, mantém a forma e participa do transporte intracelular e da movimentação.', 'Microtúbulos e microfilamentos formam vias e estruturas dinâmicas.'],
  ['Centríolos', 'Organizam microtúbulos em células animais e em alguns outros grupos.', 'Não são universais: plantas superiores, em geral, não apresentam centríolos típicos.'],
];

const legend = [
  [1, 'Membrana plasmática'], [2, 'Citoplasma'], [3, 'Núcleo'], [4, 'Nucléolo'], [5, 'Ribossomos'],
  [6, 'Retículo endoplasmático rugoso'], [7, 'Complexo golgiense'], [8, 'Lisossomo'], [9, 'Mitocôndria'], [10, 'Citoesqueleto'],
  [11, 'Centríolos'], [12, 'Vacúolo'],
];

const traps = [
  ['Ribossomo é organela membranosa?', 'Não. Ribossomos são complexos de RNA e proteínas, sem membrana.'],
  ['Planta só faz fotossíntese?', 'Não. Células vegetais também têm mitocôndrias e respiram, inclusive durante o dia.'],
  ['Toda proteína passa pelo RER e pelo Golgi?', 'Não. Essa rota é típica de proteínas de secreção, membranas e algumas organelas; ribossomos livres produzem outras proteínas no citosol.'],
  ['Vírus é uma célula?', 'Não. Vírus são acelulares, não têm organelas nem metabolismo próprio e dependem de células hospedeiras.'],
  ['Toda célula eucariota mantém núcleo e organelas?', 'Há exceções: hemácias maduras de mamíferos perdem o núcleo e as organelas durante a diferenciação.'],
];

export function QuestionStudySheetLink({ question, onOpenSheet }) {
  const sheet = getSheetForQuestion(question.id);
  if (!sheet) return null;
  return <button className="question-study-sheet-link" onClick={() => onOpenSheet(sheet.id)}>
    <span className="question-study-sheet-icon"><GraduationCap size={21} /></span>
    <span><small>FICHA RESUMO DESTE ASSUNTO</small><strong>{sheet.title}</strong><em>Revise os conceitos e depois retome a prática.</em></span>
    <ArrowRight size={18} />
  </button>;
}

export function StudySheetsIndex({ questions, onOpenSheet }) {
  return <div className="page study-sheets-index">
    <div className="page-heading"><div><span className="eyebrow">REVISÃO POR ASSUNTO</span><h1>Fichas resumo</h1><p>Conteúdo organizado por assunto, conectado às questões que você já está praticando.</p></div></div>
    <section className="study-sheets-welcome">
      <div><span className="hero-kicker"><Sparkles size={15} /> UMA FICHA, VÁRIAS QUESTÕES</span><h2>Resumo do assunto<br /><em>com questões relacionadas.</em></h2><p>As fichas são reutilizadas por questões do mesmo assunto. Você entende a estrutura, compara os conceitos e volta a praticar sem refazer o mesmo resumo.</p></div>
      <div className="study-sheets-welcome-flow" aria-label="Fluxo de estudo"><span><Target size={21} /> Questão</span><ChevronRight size={18} /><span><BookOpen size={21} /> Ficha</span><ChevronRight size={18} /><span><CheckCircle2 size={21} /> Prática</span></div>
    </section>
    <div className="section-heading study-sheets-section-heading"><div><span className="eyebrow">COMECE POR AQUI</span><h2>Fichas disponíveis</h2><p>Mapas, comparações, armadilhas e questões do próprio acervo.</p></div><span>{STUDY_SHEETS.length} {STUDY_SHEETS.length === 1 ? 'ficha' : 'fichas'}</span></div>
    <div className="study-sheet-card-grid">
      {STUDY_SHEETS.map((sheet) => {
        const related = getSheetQuestions(sheet, questions);
        return <button className="study-sheet-topic-card" key={sheet.id} onClick={() => onOpenSheet(sheet.id)}>
          <span className="study-sheet-topic-art">{sheet.layout === 'topic' || sheet.artwork ? <StudySheetArtwork type={sheet.artwork} /> : <CellTypeDiagram type="animal" />}</span>
          <span className="study-sheet-topic-copy"><small>{sheet.subject} · {sheet.content}</small><strong>{sheet.title}</strong><p>{sheet.description}</p><span className="study-sheet-topic-meta"><span><Layers3 size={15} /> Mapa + tabelas</span><span><BookOpen size={15} /> {related.length} questões conectadas</span></span><span className="study-sheet-topic-cta">Abrir ficha <ArrowRight size={17} /></span></span>
        </button>;
      })}
    </div>
  </div>;
}

function ReusedFigure({ asset, onOpen }) {
  return <figure className="reused-question-figure"><img src={asset.src} alt={asset.alt} /><figcaption><span><FileText size={13} /> Imagem reutilizada do acervo · {asset.credit}</span><button onClick={onOpen}>Ver questão de origem <ArrowRight size={12} /></button></figcaption></figure>;
}

function CellStudySheetView({ sheet, questions, onBack, onOpenQuestion, onPractice, notify }) {
  const related = getSheetQuestions(sheet, questions);
  const nucleusQuestion = related.find((question) => question.id === sheet.assets.nucleus.questionId);
  const energyQuestion = related.find((question) => question.id === sheet.assets.energy.questionId);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const copyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}${window.location.search}#ficha=${sheet.id}`;
    try { await navigator.clipboard.writeText(url); notify('Link da ficha copiado.'); } catch { notify(`Link da ficha: ${url}`); }
  };
  return <div className="page study-sheet-page">
    <div className="study-sheet-navigation no-print"><button className="back-button" onClick={onBack}><ArrowLeft size={18} /> Voltar</button><div><button className="button button-secondary" onClick={copyLink}>Copiar link</button><button className="button button-secondary" onClick={() => window.print()}><Printer size={16} /> Imprimir / salvar PDF</button></div></div>
    <header className="study-sheet-hero">
      <div className="study-sheet-hero-copy"><span className="eyebrow">{sheet.eyebrow}</span><h1>Célula <span>&</span> organelas</h1><p>{sheet.description}</p><div className="study-sheet-hero-tags"><span><BookOpen size={15} /> Conteúdo para revisão</span><span><Layers3 size={15} /> 13 estruturas essenciais</span><span><Target size={15} /> {related.length} questões conectadas</span></div><div className="study-sheet-hero-actions no-print"><button className="button button-primary" onClick={() => onPractice(related)}>Praticar as {related.length} questões <ArrowRight size={17} /></button><button className="button button-ghost" onClick={() => scrollTo('sheet-map')}>Começar pelo mapa</button></div></div>
      <div className="study-sheet-hero-note"><span className="handwritten-note">leitura de esquemas</span><strong>Observe localização,<br />membrana e componentes.</strong><p>Essas características ajudam a identificar as organelas e relacioná-las às suas funções.</p><div className="note-underline" /></div>
    </header>
    <nav className="study-sheet-anchor-nav no-print" aria-label="Seções da ficha">{[['sheet-map','Mapa'],['sheet-structures','Estruturas'],['sheet-circuits','Circuitos'],['sheet-compare','Comparações'],['sheet-traps','Não confunda'],['sheet-questions','Questões']].map(([id,label]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}</nav>

    <section className="sheet-section" id="sheet-map">
      <div className="sheet-section-heading"><span className="sheet-section-number">01</span><div><span className="eyebrow">VISÃO GERAL</span><h2>Mapa da célula animal</h2><p>Esta é uma célula eucariota animal esquemática. Use os números para localizar as estruturas antes de estudar as funções.</p></div></div>
      <div className="cell-map-layout">
        <div className="cell-map-card"><span className="diagram-scroll-hint">Arraste o diagrama para explorar →</span><div className="enhanced-svg-scroll"><EnhancedCellMap /></div><div className="cell-map-legend">{legend.map(([n,label]) => <span key={n}><i>{n}</i>{label}</span>)}</div><small className="diagram-disclaimer">Representação didática, sem escala. A forma e a quantidade de organelas variam conforme o tipo celular.<span className="figure-credit">{sheet.figureCredits.main}</span></small></div>
        <aside className="central-memory-card"><span className="handwritten-note">leitura do mapa</span><h3>Identifique as estruturas numeradas.</h3><p>Consulte a legenda abaixo do esquema e use a tabela seguinte para revisar as funções.</p><div className="memory-paths"><div><span>1</span><p><strong>Delimitar e trocar</strong>Membrana e citoplasma</p></div><div><span>2</span><p><strong>Guardar e expressar informação</strong>Núcleo e ribossomos</p></div><div><span>3</span><p><strong>Produzir e encaminhar</strong>RER, Golgi e vesículas</p></div><div><span>4</span><p><strong>Transformar e sustentar</strong>Mitocôndrias e citoesqueleto</p></div></div><div className="handwritten-arrow">consulte a legenda e a tabela ↗</div></aside>
      </div>
    </section>

    <section className="sheet-section" id="sheet-structures">
      <div className="sheet-section-heading"><span className="sheet-section-number">02</span><div><span className="eyebrow">TABELA COMPARATIVA</span><h2>Funções das estruturas celulares</h2><p>A terceira coluna é o lembrete para reconhecer a estrutura e evitar a confusão mais comum.</p></div></div>
      <div className="sheet-table-wrap"><table className="sheet-structure-table"><thead><tr><th>Estrutura</th><th>Função principal</th><th>Como reconhecer / não confundir</th></tr></thead><tbody>{structureRows.map(([name,func,note],index) => <tr key={name}><th scope="row"><span className="structure-index">{String(index + 1).padStart(2,'0')}</span>{name}</th><td>{func}</td><td>{note}</td></tr>)}</tbody></table></div>
    </section>

    <section className="sheet-section" id="sheet-circuits">
      <div className="sheet-section-heading"><span className="sheet-section-number">03</span><div><span className="eyebrow">IMAGEM → RACIOCÍNIO</span><h2>Síntese proteica e metabolismo energético</h2><p>As ilustrações vêm do próprio acervo. A ficha acrescenta a leitura conceitual; a questão continua disponível para prática.</p></div></div>
      <div className="sheet-circuit-grid">
        <article className="sheet-circuit-card"><div className="circuit-card-heading"><span>A</span><div><small>NÚCLEO + RIBOSSOMOS + RER</small><h3>Da informação à proteína</h3></div></div><ReusedFigure asset={sheet.assets.nucleus} onOpen={() => onOpenQuestion(nucleusQuestion, related)} /><ol className="circuit-steps"><li><span>1</span><p><strong>Transcrição</strong>O DNA serve de molde para a produção de RNA.</p></li><li><span>2</span><p><strong>Transporte seletivo</strong>Poros nucleares permitem a passagem de pequenas moléculas, como nucleotídeos, e a saída de RNAs processados, como RNAm e RNAt.</p></li><li><span>3</span><p><strong>Tradução</strong>Ribossomos leem o RNAm e montam cadeias de aminoácidos.</p></li><li><span>4</span><p><strong>Processamento e destino</strong>Em proteínas de secreção, membranas e algumas organelas, RER e Golgi continuam o trabalho.</p></li></ol><div className="circuit-warning"><strong>Nucléolo desenvolvido → alta demanda de ribossomos.</strong> É por isso que ele se relaciona à intensa síntese de proteínas.</div></article>
        <article className="sheet-circuit-card"><div className="circuit-card-heading"><span>B</span><div><small>MITOCÔNDRIA + CLOROPLASTO</small><h3>Duas organelas, trocas conectadas</h3></div></div><ReusedFigure asset={sheet.assets.energy} onOpen={() => onOpenQuestion(energyQuestion, related)} /><div className="energy-comparison"><div><span className="energy-icon mito">M</span><h4>Mitocôndria</h4><p>Respiração celular</p><ul><li>Usa O₂ e nutrientes</li><li>Libera CO₂ e água</li><li>Produz ATP utilizável</li></ul></div><div><span className="energy-icon chloro">C</span><h4>Cloroplasto</h4><p>Fotossíntese</p><ul><li>Usa CO₂, água e luz</li><li>Libera O₂</li><li>Produz carboidratos</li></ul></div></div><div className="energy-balance"><span className="handwritten-note">e quando as taxas se comparam?</span><div><strong>R &gt; F</strong><p>Predominam consumo de O₂ e liberação de CO₂.</p></div><div><strong>R = F</strong><p>Ponto de compensação fótica: saldo gasoso líquido zero.</p></div><div><strong>F &gt; R</strong><p>Predominam consumo de CO₂ e liberação de O₂.</p></div><small>R = respiração · F = fotossíntese</small></div><div className="circuit-warning"><strong>A planta também respira.</strong> A fotossíntese não substitui a respiração celular; os processos trocam matéria e energia.</div></article>
      </div>
    </section>

    <section className="sheet-section" id="sheet-compare">
      <div className="sheet-section-heading"><span className="sheet-section-number">04</span><div><span className="eyebrow">COMPARE PARA ENTENDER</span><h2>Comparação entre os três tipos de organização celular</h2><p>O que muda é a organização interna. Membrana plasmática, citoplasma, material genético e ribossomos são características celulares compartilhadas.</p></div></div>
      {sheet.bookFigures?.length > 0 && <div className="book-vector-grid">{sheet.bookFigures.map((figure) => <BookVectorFigure key={figure.src} figure={figure} />)}</div>}
      <div className="cell-type-grid">
        <article className="cell-type-card animal"><span className="cell-type-label">EUCARIOTA · ANIMAL</span><CellTypeDiagram type="animal" /><h3>Organização interna compartimentada</h3><ul><li>Núcleo delimitado por envoltório.</li><li>Organelas membranosas.</li><li>Sem parede celular e sem cloroplastos.</li><li>Vacúolos geralmente menores.</li></ul></article>
        <article className="cell-type-card plant"><span className="cell-type-label">EUCARIOTA · VEGETAL</span><CellTypeDiagram type="plant" /><h3>Parede, cloroplastos e vacúolo central</h3><ul><li>Parede celular de celulose, além da membrana.</li><li>Cloroplastos em tecidos fotossintetizantes.</li><li>Grande vacúolo central participa do turgor.</li><li><strong>Também possui mitocôndrias.</strong></li></ul></article>
        <article className="cell-type-card prokaryote"><span className="cell-type-label">PROCARIOTA · BACTÉRIAS E ARQUEAS</span><CellTypeDiagram type="prokaryote" /><h3>Sem núcleo membranoso</h3><ul><li>DNA na região do nucleoide.</li><li>Sem organelas membranosas.</li><li>Apresenta ribossomos e citoplasma.</li><li>Muitas possuem parede celular.</li></ul></article>
      </div>
      <div className="acellular-callout"><span className="acellular-icon"><FileText size={22} /></span><div><span className="handwritten-note">e os vírus?</span><h3>Ficam de fora da classificação celular.</h3><p>São estruturas acelulares: possuem material genético e componentes proteicos, mas não apresentam citoplasma, organelas ou metabolismo próprio. Sua replicação depende de uma célula hospedeira.</p></div><button className="button button-secondary no-print" onClick={() => onOpenQuestion(related.find((question) => question.id === 'univesp2026-q49'), related)}>Ver a questão do bacteriófago <ArrowRight size={15} /></button></div>
      <div className="sheet-applications"><div className="sheet-applications-heading"><span className="handwritten-note">aplicações</span><h3>Quatro aplicações para conectar ao acervo</h3></div><div className="sheet-application-grid">
        <article><span>ÁGUA + MEMBRANA</span><h4>Osmose e plasmólise</h4><p>Na osmose, a água atravessa a membrana sem gasto direto de ATP. Meio <strong>hipertônico → saída de água</strong>; em uma célula vegetal, pode ocorrer plasmólise. Meio <strong>hipotônico → entrada de água</strong>.</p></article>
        <article><span>MICROTÚBULOS + TRANSPORTE</span><h4>Pigmentos em movimento</h4><p>Microtúbulos funcionam como trilhos do transporte intracelular. Sua fragmentação prejudica a dispersão de organelas pigmentares e pode alterar a coloração celular.</p></article>
        <article><span>PROCARIONTES + ENERGIA</span><h4>Quimiossíntese, sem luz</h4><p>Bactérias e arqueias podem obter energia de substâncias químicas inorgânicas para sintetizar matéria orgânica. <strong>Procarionte não é sinônimo de heterótrofo.</strong></p></article>
        <article><span>ALVOS + ANTIBIÓTICOS</span><h4>Ribossomo ou parede</h4><p>Aminoglicosídeos atuam no ribossomo bacteriano; cefalosporinas prejudicam a parede e favorecem a lise osmótica. Antibióticos <strong>não atuam contra vírus</strong>.</p></article>
      </div></div>
    </section>

    <section className="sheet-section" id="sheet-traps">
      <div className="sheet-section-heading"><span className="sheet-section-number">05</span><div><span className="eyebrow">NÃO CONFUNDA</span><h2>Cinco pontos que costumam gerar confusão</h2><p>Compare as perguntas e respostas e revise os conceitos que ainda estiverem confusos.</p></div></div>
      <div className="sheet-trap-grid">{traps.map(([title,answer],index) => <article key={title}><span>{String(index + 1).padStart(2,'0')}</span><h3>{title}</h3><p>{answer}</p></article>)}</div>
      <div className="sheet-final-check"><div><span className="handwritten-note">autoavaliação</span><h3>Checklist de revisão</h3></div><div className="sheet-checklist">{['localizar as principais estruturas em um esquema?', 'explicar por que nucléolo e síntese proteica estão relacionados?', 'comparar RER, REL e complexo golgiense?', 'distinguir respiração de fotossíntese sem apagar as conexões?', 'reconhecer o que procariontes e eucariontes compartilham?', 'justificar por que vírus não são células?'].map((item) => <span key={item}><Check size={14} />{item}</span>)}</div></div>
    </section>

    <section className="sheet-section sheet-related-section" id="sheet-questions">
      <div className="sheet-section-heading"><span className="sheet-section-number">06</span><div><span className="eyebrow">VOLTE À PRÁTICA</span><h2>{related.length} questões relacionadas a esta ficha</h2><p>Todas reutilizam este conteúdo de revisão; não há um resumo diferente para cada questão.</p></div><button className="button button-primary no-print" onClick={() => onPractice(related)}>Praticar sequência <ArrowRight size={16} /></button></div>
      <div className="sheet-question-grid">{related.map((question,index) => <article className="sheet-question-card" key={question.id}><div className="sheet-question-card-top"><span>{String(index + 1).padStart(2,'0')}</span><small>{question.kind === 'discursive' ? 'Discursiva' : 'Objetiva'} · {question.difficulty}</small></div><div className="question-origin"><span className="exam-badge">{question.exam}</span><span>{question.year}</span><i /><span>{question.number}</span></div><h3>{question.detail}</h3><p>{question.subtopic}</p><button onClick={() => onOpenQuestion(question, related)}>Resolver questão <ArrowRight size={15} /></button></article>)}</div>
      <div className="sheet-reuse-proof"><CheckCircle2 size={21} /><div><strong>Conteúdo compartilhado</strong><p>As {related.length} questões apontam para esta mesma ficha. Uma atualização feita aqui vale para todas elas.</p></div></div>
    </section>
    <aside className="sheet-sources" aria-label="Fontes de verificação"><div><GraduationCap size={20} /><span><strong>Verificação editorial</strong><p>Conteúdo e ilustração confrontados com os livros preservados no acervo de referências. O crédito da base visual aparece junto ao mapa.</p></span></div><ul>{sheet.sources.map((source) => <li key={source.title}><strong className="source-book-title">{source.title}</strong><span>{source.note}</span></li>)}</ul></aside>
    <footer className="study-sheet-footer"><span><Clock3 size={14} /> Síntese editorial do Acervo · revisada em 5 nov. 2026</span><span>Fontes e créditos por figura · questões vinculadas à origem.</span></footer>
  </div>;
}

export function StudySheetView(props) {
  if (props.sheet.id === 'celula-e-organelas') {
    return <CellStudySheetView {...props} />;
  }
  return <TopicStudySheetView {...props} />;
}

