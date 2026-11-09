import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Check, FileDown, Loader2, Monitor, Printer } from 'lucide-react';
import QuestionContent, { AlternativeBody } from './QuestionContent.jsx';
import { isEditorialCorrection, isOpenQuestion } from './OpenResponse.jsx';

const ANSWER_LETTERS = ['A', 'B', 'C', 'D', 'E'];

const PAGE_WIDTH = 794;
const PAGE_HEIGHT = 1123;
const CONTENT_WIDTH = 698;
const CONTENT_HEIGHT = 1020;
const COLUMN_GAP = 32;
const COLUMN_WIDTH = (CONTENT_WIDTH - COLUMN_GAP) / 2; // 333px
const QUESTION_GAP = 16;
const PRINT_ROOT_ID = 'pdf-print-root';

function questionKey(question) {
  return question.id || String(question.number);
}

function displayNumber(number) {
  return String(number).padStart(2, '0');
}

function answerLabel(question) {
  if (question.annulled) return 'ANULADA';
  if (isOpenQuestion(question)) return question.kind === 'essay' ? 'REDAÇÃO' : 'DISCURSIVA';
  return Number.isInteger(question.correct) ? (ANSWER_LETTERS[question.correct] || '—') : '—';
}

function PrintQuestion({
  question,
  number,
  scale = 1,
  innerScale = 1,
  scaledHeight = null,
  template,
  wide = false,
  idScope = 'visible',
}) {
  const fontSizePx = Number((12 * scale).toFixed(2));
  const useTransformBox = innerScale < 0.995;

  const innerContent = (
    <>
      <header className="pdf-question-header">
        {template === 'vunesp' ? (
          <div className="pdf-vunesp-heading" aria-label={`Questão ${displayNumber(number)}`}>
            <span className="pdf-vunesp-marker" aria-hidden="true" />
            <span className="pdf-vunesp-label">QUESTÃO</span>
            <strong className="pdf-vunesp-number">{displayNumber(number)}</strong>
          </div>
        ) : (
          <strong className="pdf-fuvest-number">{displayNumber(number)}</strong>
        )}
      </header>
      {question.annulled ? (
        <p className="pdf-annulled">
          <strong>QUESTÃO ANULADA.</strong>
        </p>
      ) : (
        <>
          <QuestionContent question={question} eager />
          {isOpenQuestion(question) ? (
            <div className="pdf-open-response-space">
              {(question.parts || []).map((part) => {
                const hasTemplate = Boolean(part.responseTemplate);
                return (
                  <div
                    className={`pdf-open-response-item${hasTemplate ? ' pdf-has-template' : ''}`}
                    key={`${idScope}-${questionKey(question)}-${part.id}`}
                  >
                    <strong className="pdf-open-item-title">
                      {question.kind === 'essay'
                        ? 'Resolução e resposta'
                        : `Item ${part.id}) · resolução e resposta`}
                    </strong>
                    {hasTemplate ? (
                      <div className="pdf-response-template-container">
                        <div className="pdf-response-template-box">
                          <div className="pdf-response-template-header">
                            <span className="pdf-response-template-badge">
                              CAMPO OFICIAL DE RESOLUÇÃO E RESPOSTA
                            </span>
                          </div>
                          <div className="pdf-response-template-stage">
                            <img
                              src={part.responseTemplate.src}
                              alt={part.responseTemplate.alt || 'Esquema de resposta'}
                              className="pdf-response-template-img"
                            />
                          </div>
                          {part.responseTemplate.caption && (
                            <div className="pdf-response-template-caption">
                              {part.responseTemplate.caption}
                            </div>
                          )}
                        </div>
                        <div className="pdf-response-template-lines">
                          <div className="pdf-writing-lines" aria-hidden="true">
                            {Array.from({ length: 6 }, (_, line) => (
                              <i key={line} />
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="pdf-writing-lines" aria-hidden="true">
                        {Array.from(
                          { length: question.kind === 'essay' ? 18 : 4 },
                          (_, line) => (
                            <i key={line} />
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="pdf-alternatives">
              {(question.alternatives || []).map((alternative, index) => (
                <div
                  className="pdf-alternative"
                  key={`${idScope}-${questionKey(question)}-${index}`}
                >
                  <span className="pdf-alternative-letter">({ANSWER_LETTERS[index]})</span>
                  <div className="pdf-alternative-body">
                    <AlternativeBody
                      question={question}
                      alternative={alternative}
                      index={index}
                      eager
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );

  return (
    <article
      className={`pdf-question${wide ? ' pdf-question-wide' : ''}${
        question.annulled ? ' pdf-question-annulled' : ''
      }`}
      data-print-question={questionKey(question)}
      data-diagram={question.diagram || ''}
      data-original-number={question.number}
      style={{
        '--pdf-q-scale': scale,
        fontSize: `${fontSizePx}px`,
        ...(useTransformBox && scaledHeight
          ? { height: `${Math.ceil(scaledHeight)}px`, overflow: 'hidden' }
          : {}),
      }}
    >
      {useTransformBox ? (
        <div
          className="pdf-question-transform-inner"
          style={{
            width: `${(100 / innerScale).toFixed(3)}%`,
            transform: `scale(${innerScale})`,
            transformOrigin: 'top left',
          }}
        >
          {innerContent}
        </div>
      ) : (
        innerContent
      )}
    </article>
  );
}

function PageHeader({ title, template, answerKey = false }) {
  const documentTitle = title.trim() || 'Lista de exercícios';
  return (
    <header className="pdf-page-header">
      <span className="pdf-running-left" aria-hidden="true" />
      <strong>{answerKey ? `${documentTitle} — Gabarito` : documentTitle}</strong>
    </header>
  );
}

function PageFooter({ page, total, template }) {
  return (
    <footer className="pdf-page-footer">
      <span>Lista de exercícios</span>
      <strong>{displayNumber(page)}</strong>
      <span>{template === 'fuvest' ? `${page} / ${total}` : ''}</span>
    </footer>
  );
}

function AnswerKey({ questions, page, total, title, template }) {
  const hasEditorialOpen = questions.some(
    (question) => isOpenQuestion(question) && isEditorialCorrection(question)
  );
  const hasOfficialOpen = questions.some(
    (question) => isOpenQuestion(question) && !isEditorialCorrection(question)
  );
  const openAnswerNote = hasEditorialOpen
    ? hasOfficialOpen
      ? ' Nas discursivas, consulte as respostas esperadas e os critérios de autoavaliação no modo “Responder lista”.'
      : ' Nas discursivas, consulte as propostas de correção do acervo e os critérios de estudo no modo “Responder lista”; esse material não é oficial.'
    : ' Nas discursivas, consulte a resposta oficial esperada e os critérios de autoavaliação no modo “Responder lista”.';
  return (
    <section
      className={`pdf-page pdf-page-${template} pdf-answer-page`}
      data-page-kind="answer-key"
      style={{ width: PAGE_WIDTH, height: PAGE_HEIGHT }}
    >
      <PageHeader title={title} template={template} answerKey />
      <div className="pdf-page-content pdf-answer-content">
        <div className="pdf-answer-intro">
          <h2>GABARITO</h2>
          <p>
            {questions.length} {questions.length === 1 ? 'questão' : 'questões'} · respostas na
            ordem desta lista
          </p>
        </div>
        <div className="pdf-answer-key">
          {questions.map((question, index) => (
            <div className="pdf-answer-item" key={questionKey(question)}>
              <strong>{displayNumber(index + 1)}</strong>
              <span>{answerLabel(question)}</span>
            </div>
          ))}
        </div>
        <p className="pdf-answer-note">
          Questões anuladas são identificadas expressamente. A numeração acima corresponde à ordem
          escolhida para esta lista.{questions.some(isOpenQuestion) ? openAnswerNote : ''}
        </p>
      </div>
      <PageFooter page={page} total={total} template={template} />
    </section>
  );
}

function fitPrintMath(root) {
  if (!root) return;
  root.querySelectorAll('.math-display').forEach((math) => {
    math.style.fontSize = '';
    const computed = getComputedStyle(math);
    const initialSize = parseFloat(computed.fontSize) || 12;
    const horizontalPadding =
      (parseFloat(computed.paddingLeft) || 0) + (parseFloat(computed.paddingRight) || 0);
    const available = math.clientWidth - horizontalPadding;
    const content = math.scrollWidth - horizontalPadding;
    if (available <= 0 || content <= available + 1) return;

    let size = Math.max(8.5, Math.floor(initialSize * (available / content) * 0.96 * 10) / 10);
    math.style.fontSize = `${size}px`;
    for (
      let attempt = 0;
      attempt < 4 && math.scrollWidth > math.clientWidth + 1 && size > 8.5;
      attempt += 1
    ) {
      size = Math.max(8.5, size - 0.5);
      math.style.fontSize = `${size}px`;
    }
  });
}

async function waitForPrintResources(container) {
  if (document.fonts) {
    try {
      await document.fonts.ready;
      if (document.fonts.load) {
        await Promise.all([
          document.fonts.load('12px "Roboto Condensed"'),
          document.fonts.load('700 12px "Roboto Condensed"'),
        ]);
      }
    } catch {
      // ignore font loading errors
    }
  }
  const images = container ? Array.from(container.querySelectorAll('img')) : [];
  await Promise.all(
    images.map((image) => {
      if (image.complete && image.naturalWidth > 0) return Promise.resolve();
      if (image.decode) return image.decode().catch(() => undefined);
      return new Promise((resolve) => {
        image.addEventListener('load', resolve, { once: true });
        image.addEventListener('error', resolve, { once: true });
      });
    })
  );
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}

/**
 * Empacota os itens sequencialmente em páginas de 2 colunas explícitas
 * (leftItems e rightItems), garantindo separação exata das colunas em
 * qualquer navegador (Chrome, Safari iOS/macOS, Firefox, Edge, Mobile).
 */
function packItemsIntoPages(items) {
  const pages = [];
  let leftItems = [];
  let rightItems = [];
  let leftUsed = 0;
  let rightUsed = 0;
  let fillingRight = false;

  const flushNormalPage = () => {
    if (!leftItems.length && !rightItems.length) return;
    pages.push({
      kind: 'normal',
      leftItems,
      rightItems,
    });
    leftItems = [];
    rightItems = [];
    leftUsed = 0;
    rightUsed = 0;
    fillingRight = false;
  };

  for (const item of items) {
    if (item.wide) {
      flushNormalPage();
      pages.push({
        kind: 'wide',
        items: [item],
      });
      continue;
    }

    const itemH = item.height;

    if (!fillingRight) {
      const gap = leftItems.length > 0 ? QUESTION_GAP : 0;
      if (leftItems.length === 0 || leftUsed + gap + itemH <= CONTENT_HEIGHT) {
        leftItems.push(item);
        leftUsed += gap + itemH;
        continue;
      }
      // Não cabe mais na coluna da esquerda -> passa para a coluna da direita da mesma página
      fillingRight = true;
    }

    const rightGap = rightItems.length > 0 ? QUESTION_GAP : 0;
    if (rightItems.length === 0 || rightUsed + rightGap + itemH <= CONTENT_HEIGHT) {
      rightItems.push(item);
      rightUsed += rightGap + itemH;
    } else {
      // Coluna da direita também encheu -> fecha a página e inicia nova página na coluna da esquerda
      flushNormalPage();
      leftItems.push(item);
      leftUsed = itemH;
    }
  }

  flushNormalPage();
  return pages;
}

export default function PrintList({
  questions,
  title,
  showKey,
  onBack,
  styleTemplate = 'fuvest',
}) {
  const template = styleTemplate === 'vunesp' ? 'vunesp' : 'fuvest';
  const [showPreview, setShowPreview] = useState(true);
  const [previewScale, setPreviewScale] = useState(1);
  const [stable, setStable] = useState(false);
  const [layout, setLayout] = useState(null);
  const [adjustment, setAdjustment] = useState('');
  const [layoutWarning, setLayoutWarning] = useState('');
  const [audit, setAudit] = useState({ maxOverflowX: 0, maxOverflowY: 0, pagesChecked: 0 });
  const measureBankRef = useRef(null);
  const measureColumnRef = useRef(null);
  const measureWideRef = useRef(null);
  const pagesRef = useRef(null);
  const previewViewportRef = useRef(null);
  const adjustmentsRef = useRef(0);
  const totalPages = (layout?.pages.length || 0) + (showKey ? 1 : 0);

  useEffect(() => {
    setStable(false);
    setLayout(null);
    setLayoutWarning('');
    setAdjustment('');
    setAudit({ maxOverflowX: 0, maxOverflowY: 0, pagesChecked: 0 });
    adjustmentsRef.current = 0;
  }, [questions, template]);

  useEffect(() => {
    if (!showPreview || !previewViewportRef.current) return undefined;
    const viewport = previewViewportRef.current;
    const updateScale = () => {
      const available = Math.max(280, viewport.clientWidth - 36);
      setPreviewScale(Math.min(1, available / PAGE_WIDTH));
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [showPreview, layout]);

  // 1ª Fase: Mede a altura real (offsetHeight, sem interferência de transform scale)
  useLayoutEffect(() => {
    let cancelled = false;
    setStable(false);
    setLayout(null);
    setLayoutWarning('');
    setAdjustment('');
    adjustmentsRef.current = 0;

    const measure = async () => {
      await waitForPrintResources(measureBankRef.current);
      if (cancelled || !measureColumnRef.current || !measureWideRef.current) return;
      fitPrintMath(measureColumnRef.current);
      fitPrintMath(measureWideRef.current);

      const columnNodes = Array.from(
        measureColumnRef.current.querySelectorAll('[data-print-question]')
      );
      const wideNodes = Array.from(
        measureWideRef.current.querySelectorAll('[data-print-question]')
      );

      // Usa offsetHeight (dimensão de layout CSS pura 1:1, imune a qualquer transform scale de tela mobile)
      const columnHeights = new Map(
        columnNodes.map((node) => [
          node.dataset.printQuestion,
          node.offsetHeight || node.getBoundingClientRect().height,
        ])
      );
      const wideHeights = new Map(
        wideNodes.map((node) => [
          node.dataset.printQuestion,
          node.offsetHeight || node.getBoundingClientRect().height,
        ])
      );

      const items = questions.map((question, index) => {
        const key = questionKey(question);
        const rawColumnHeight = columnHeights.get(key) || 260;
        const rawWideHeight = wideHeights.get(key) || rawColumnHeight;

        // Questões discursivas/redação ou questões com conjuntos gráficos muito extensos ocupam largura inteira
        const wide =
          isOpenQuestion(question) ||
          question.diagram === 'fuvest2027Q44' ||
          rawColumnHeight > CONTENT_HEIGHT * 1.32;

        const rawHeight = wide ? rawWideHeight : rawColumnHeight;
        const capacity = CONTENT_HEIGHT - 8;

        let scale = 1;
        let innerScale = 1;
        if (rawHeight > capacity) {
          const neededRatio = (capacity / rawHeight) * 0.97;
          scale = Math.max(0.76, Math.min(1, neededRatio));
          if (neededRatio < 0.76) {
            innerScale = Math.max(0.65, neededRatio / scale);
          }
        }

        const effectiveHeight = Math.ceil(rawHeight * scale * innerScale);

        return {
          key,
          question,
          number: index + 1,
          wide,
          rawHeight,
          scale,
          innerScale,
          scaledHeight: innerScale < 0.995 ? Math.min(capacity, effectiveHeight) : null,
          height: Math.min(capacity, effectiveHeight),
        };
      });

      const pages = packItemsIntoPages(items);

      if (!cancelled) {
        setLayout({ pages });
        setAdjustment('Medição editorial concluída. Verificando as colunas…');
      }
    };

    measure().catch((error) => {
      if (cancelled) return;
      console.error('Falha ao medir a impressão:', error);
      setLayoutWarning('Não foi possível medir a lista. Reabra a visualização e tente novamente.');
    });
    return () => {
      cancelled = true;
    };
  }, [questions, template]);

  // 2ª Fase: Verifica se alguma coluna individual ou página wide teve overflow vertical
  useLayoutEffect(() => {
    if (!layout || !pagesRef.current) return;
    fitPrintMath(pagesRef.current);

    const pageSections = Array.from(
      pagesRef.current.querySelectorAll('section[data-page-kind="questions"]')
    );
    if (pageSections.length !== layout.pages.length) return;

    let maxOverflowX = 0;
    let maxOverflowY = 0;
    const columnOverflows = [];

    pageSections.forEach((section, pageIndex) => {
      const pageData = layout.pages[pageIndex];
      if (!pageData) return;

      if (pageData.kind === 'wide') {
        const wideContainer = section.querySelector('.pdf-page-content-wide');
        if (!wideContainer) return;
        const ovX = Math.max(0, wideContainer.scrollWidth - wideContainer.clientWidth);
        const ovY = Math.max(0, wideContainer.scrollHeight - wideContainer.clientHeight);
        maxOverflowX = Math.max(maxOverflowX, ovX);
        maxOverflowY = Math.max(maxOverflowY, ovY);
        if (ovY > 3 || ovX > 4) {
          columnOverflows.push({
            pageIndex,
            side: 'wide',
            overflowX: ovX,
            overflowY: ovY,
            node: wideContainer,
          });
        }
      } else {
        const leftCol = section.querySelector('.pdf-column-left');
        const rightCol = section.querySelector('.pdf-column-right');
        if (leftCol) {
          const ovX = Math.max(0, leftCol.scrollWidth - leftCol.clientWidth);
          const ovY = Math.max(0, leftCol.scrollHeight - leftCol.clientHeight);
          maxOverflowX = Math.max(maxOverflowX, ovX);
          maxOverflowY = Math.max(maxOverflowY, ovY);
          if (ovY > 3) {
            columnOverflows.push({
              pageIndex,
              side: 'left',
              overflowX: ovX,
              overflowY: ovY,
              node: leftCol,
            });
          }
        }
        if (rightCol) {
          const ovX = Math.max(0, rightCol.scrollWidth - rightCol.clientWidth);
          const ovY = Math.max(0, rightCol.scrollHeight - rightCol.clientHeight);
          maxOverflowX = Math.max(maxOverflowX, ovX);
          maxOverflowY = Math.max(maxOverflowY, ovY);
          if (ovY > 3) {
            columnOverflows.push({
              pageIndex,
              side: 'right',
              overflowX: ovX,
              overflowY: ovY,
              node: rightCol,
            });
          }
        }
      }
    });

    setAudit({ maxOverflowX, maxOverflowY, pagesChecked: pageSections.length });

    if (!columnOverflows.length) {
      setStable(true);
      setAdjustment('');
      setLayoutWarning('');
      return;
    }

    setStable(false);
    if (adjustmentsRef.current >= 35) {
      setStable(true);
      setAdjustment('');
      return;
    }
    adjustmentsRef.current += 1;
    const first = columnOverflows[0];
    setAdjustment(
      `Ajuste fino de colunas ${adjustmentsRef.current}/35 · página ${first.pageIndex + 1}`
    );

    setLayout((currentLayout) => {
      if (!currentLayout) return currentLayout;
      const pages = currentLayout.pages.map((p) =>
        p.kind === 'wide'
          ? { ...p, items: p.items.map((it) => ({ ...it })) }
          : {
              ...p,
              leftItems: p.leftItems.map((it) => ({ ...it })),
              rightItems: p.rightItems.map((it) => ({ ...it })),
            }
      );

      for (const ov of columnOverflows) {
        const page = pages[ov.pageIndex];
        if (!page) continue;

        if (ov.side === 'left' && page.kind === 'normal') {
          if (page.leftItems.length > 1) {
            // Move o último item da coluna da esquerda para o topo da coluna da direita
            const [moved] = page.leftItems.splice(-1, 1);
            page.rightItems.unshift(moved);
            break;
          }
          const single = page.leftItems[0];
          if (single) {
            const ratioY = ov.node.scrollHeight ? ov.node.clientHeight / ov.node.scrollHeight : 0.94;
            const factor = Math.max(0.86, Math.min(0.96, ratioY * 0.98));
            if (single.scale > 0.76) {
              single.scale = Math.max(0.74, single.scale * factor);
            } else {
              single.innerScale = Math.max(0.58, (single.innerScale || 1) * factor);
              single.scaledHeight = CONTENT_HEIGHT - 6;
            }
            break;
          }
        } else if (ov.side === 'right' && page.kind === 'normal') {
          if (page.rightItems.length > 1) {
            // Move o último item da coluna da direita para a próxima página
            const [moved] = page.rightItems.splice(-1, 1);
            const next = pages[ov.pageIndex + 1];
            if (next && next.kind === 'normal') {
              next.leftItems.unshift(moved);
            } else {
              pages.splice(ov.pageIndex + 1, 0, {
                kind: 'normal',
                leftItems: [moved],
                rightItems: [],
              });
            }
            break;
          }
          const single = page.rightItems[0];
          if (single) {
            const ratioY = ov.node.scrollHeight ? ov.node.clientHeight / ov.node.scrollHeight : 0.94;
            const factor = Math.max(0.86, Math.min(0.96, ratioY * 0.98));
            if (single.scale > 0.76) {
              single.scale = Math.max(0.74, single.scale * factor);
            } else {
              single.innerScale = Math.max(0.58, (single.innerScale || 1) * factor);
              single.scaledHeight = CONTENT_HEIGHT - 6;
            }
            break;
          }
        } else if (ov.side === 'wide' && page.kind === 'wide') {
          const single = page.items[0];
          if (single) {
            const ratioY = ov.node.scrollHeight ? ov.node.clientHeight / ov.node.scrollHeight : 0.94;
            const factor = Math.max(0.86, Math.min(0.96, ratioY * 0.98));
            if (single.scale > 0.76) {
              single.scale = Math.max(0.74, single.scale * factor);
            } else {
              single.innerScale = Math.max(0.58, (single.innerScale || 1) * factor);
              single.scaledHeight = CONTENT_HEIGHT - 6;
            }
            break;
          }
        }
      }

      return { pages };
    });
  }, [layout, totalPages, showPreview]);

  const printPdf = () => {
    window.print();
  };

  const questionPages = layout?.pages || [];
  const status = useMemo(() => {
    if (!layout) return 'Compondo colunas e medindo figuras…';
    if (!stable) return adjustment || 'Verificando a paginação…';
    return `${questionPages.length} ${
      questionPages.length === 1 ? 'página de questões' : 'páginas de questões'
    } · 2 colunas separadas e alinhadas`;
  }, [layout, stable, adjustment, questionPages.length]);

  const renderPagesMarkup = (isPrint = false) => {
    if (!layout) return null;
    return (
      <div
        id={isPrint ? PRINT_ROOT_ID : undefined}
        className={`pdf-print-root ${isPrint ? 'pdf-print-portal' : 'pdf-print-preview'} pdf-theme-${template}`}
        aria-hidden={isPrint ? true : undefined}
      >
        <div
          ref={isPrint ? undefined : pagesRef}
          className="pdf-pages"
          data-print-ready={stable ? 'true' : 'false'}
        >
          {questionPages.map((page, pageIndex) => (
            <section
              className={`pdf-page pdf-page-${template}${
                page.kind === 'wide' ? ' pdf-page-wide' : ''
              }`}
              data-page-kind="questions"
              data-page-index={pageIndex}
              key={`page-${pageIndex}-${
                page.kind === 'wide'
                  ? page.items.map((item) => item.key).join('-')
                  : [...page.leftItems, ...page.rightItems].map((item) => item.key).join('-')
              }`}
              style={{ width: PAGE_WIDTH, height: PAGE_HEIGHT }}
            >
              <PageHeader title={title} template={template} />
              {page.kind === 'wide' ? (
                <div className="pdf-page-content pdf-page-content-wide">
                  {page.items.map((item) => (
                    <PrintQuestion
                      key={item.key}
                      question={item.question}
                      number={item.number}
                      scale={item.scale}
                      innerScale={item.innerScale || 1}
                      scaledHeight={item.scaledHeight}
                      template={template}
                      wide
                    />
                  ))}
                </div>
              ) : (
                <div className="pdf-page-content pdf-page-two-columns">
                  <div className="pdf-column pdf-column-left" data-column-side="left">
                    {page.leftItems.map((item) => (
                      <PrintQuestion
                        key={item.key}
                        question={item.question}
                        number={item.number}
                        scale={item.scale}
                        innerScale={item.innerScale || 1}
                        scaledHeight={item.scaledHeight}
                        template={template}
                        wide={false}
                      />
                    ))}
                  </div>
                  <div className="pdf-column-divider" aria-hidden="true">
                    <span className="pdf-column-rule-line" />
                  </div>
                  <div className="pdf-column-right pdf-column" data-column-side="right">
                    {page.rightItems.map((item) => (
                      <PrintQuestion
                        key={item.key}
                        question={item.question}
                        number={item.number}
                        scale={item.scale}
                        innerScale={item.innerScale || 1}
                        scaledHeight={item.scaledHeight}
                        template={template}
                        wide={false}
                      />
                    ))}
                  </div>
                </div>
              )}
              <PageFooter page={pageIndex + 1} total={totalPages} template={template} />
            </section>
          ))}
          {showKey && (
            <AnswerKey
              questions={questions}
              page={questionPages.length + 1}
              total={totalPages}
              title={title}
              template={template}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`print-list print-list-${template}`}>
      {/* Banco de medição em escala 1:1 pura (fora do container com transform scale e desmontado após medir) */}
      {!layout && (
        <div
          ref={measureBankRef}
          className={`pdf-measure-bank pdf-theme-${template}`}
          aria-hidden="true"
        >
          <div
            ref={measureColumnRef}
            className={`pdf-measure-lane pdf-page-${template}`}
            style={{ width: COLUMN_WIDTH }}
          >
            {questions.map((question, index) => (
              <PrintQuestion
                key={`column-${questionKey(question)}`}
                question={question}
                number={index + 1}
                template={template}
                idScope="measure-column"
              />
            ))}
          </div>
          <div
            ref={measureWideRef}
            className={`pdf-measure-lane pdf-page-${template}`}
            style={{ width: CONTENT_WIDTH }}
          >
            {questions.map((question, index) => (
              <PrintQuestion
                key={`wide-${questionKey(question)}`}
                question={question}
                number={index + 1}
                template={template}
                wide
                idScope="measure-wide"
              />
            ))}
          </div>
        </div>
      )}

      <div className="print-toolbar">
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          <ArrowLeft size={18} /> Voltar à lista
        </button>
        <div className="print-toolbar-title">
          <span className="eyebrow">PDF editorial A4 · Duas colunas</span>
          <h1>{title}</h1>
          <p>
            {questions.length} {questions.length === 1 ? 'questão' : 'questões'} ·{' '}
            {showKey ? 'com gabarito ao final' : 'sem gabarito'}
          </p>
        </div>
        <div className="print-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowPreview((value) => !value)}
          >
            <Monitor size={18} /> {showPreview ? 'Ocultar visualização' : 'Mostrar visualização'}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={printPdf}
            disabled={!stable || !layout}
          >
            {stable ? <FileDown size={18} /> : <Loader2 size={18} className="spin" />}
            {stable ? 'Gerar PDF / Imprimir' : 'Preparando páginas…'}
          </button>
        </div>
      </div>

      <div className={`print-status ${stable ? 'is-ready' : ''}`} role="status" aria-live="polite">
        {stable ? <Check size={17} /> : <Loader2 size={17} className="spin" />}
        <span>{status}</span>
        {stable && audit.pagesChecked > 0 && (
          <small>
            Colunas A4 verificadas ({audit.pagesChecked}{' '}
            {audit.pagesChecked === 1 ? 'página' : 'páginas'})
          </small>
        )}
      </div>
      {layoutWarning && (
        <div className="print-warning" role="alert">
          {layoutWarning}
        </div>
      )}
      <p className="print-tip">
        <Printer size={15} /> Na janela de impressão, use papel A4, escala 100% e margens “Nenhuma”
        (ou Padrão). O layout utiliza duas colunas explícitas compatíveis com todos os navegadores e
        celulares/tablets.
      </p>

      <div
        className="print-preview-viewport"
        ref={previewViewportRef}
        style={{
          '--preview-scale': previewScale,
          display: showPreview ? 'block' : 'none',
        }}
      >
        <div className="print-preview-scaler" style={{ width: PAGE_WIDTH * previewScale }}>
          <div className="print-preview-zoom" style={{ width: PAGE_WIDTH }}>
            {renderPagesMarkup(false)}
          </div>
        </div>
      </div>
      {layout && typeof document !== 'undefined' && createPortal(renderPagesMarkup(true), document.body)}
    </div>
  );
}
