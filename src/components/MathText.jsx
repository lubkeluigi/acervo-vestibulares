import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const MATH_PARTS = /(\$\$[\s\S]*?\$\$|\$(?!\s)(?:\\.|[^$\n])*?(?<!\s)\$)/g;
const UNDERLINE_PARTS = /(<u>[\s\S]*?<\/u>)/g;

function decodeEntities(value) {
  return value.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

// Renders plain (non-math) text that may contain explicit <u>...</u> markers
// as real underline elements, without using dangerouslySetInnerHTML.
function renderUnderline(text, keyPrefix) {
  if (!text.includes('<u>')) return text;
  return text.split(UNDERLINE_PARTS).map((segment, i) => {
    if (segment.startsWith('<u>') && segment.endsWith('</u>')) {
      return <u key={`${keyPrefix}-u-${i}`}>{segment.slice(3, -4)}</u>;
    }
    return segment ? <React.Fragment key={`${keyPrefix}-t-${i}`}>{segment}</React.Fragment> : null;
  });
}

export function renderMathHtml(math, displayMode = false) {
  return katex.renderToString(decodeEntities(math), {
    displayMode,
    output: 'html',
    throwOnError: false,
    strict: 'ignore',
  });
}

// Receives HTML-escaped prose and replaces only the explicitly delimited math.
export function renderMixedMathHtml(escapedText) {
  return escapedText.split(MATH_PARTS).map((part) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return `<span class="math-display">${renderMathHtml(part.slice(2, -2), true)}</span>`;
    }
    if (part.startsWith('$') && part.endsWith('$')) {
      return `<span class="math-inline">${renderMathHtml(part.slice(1, -1))}</span>`;
    }
    return part;
  }).join('');
}

export default function MathText({ text, display = false }) {
  const value = String(text ?? '');
  if (display) {
    return <span className="math-display" aria-label={value} dangerouslySetInnerHTML={{ __html: renderMathHtml(value, true) }} />;
  }
  return <>{value.split(MATH_PARTS).map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      const math = part.slice(2, -2);
      return <span className="math-display" aria-label={math} key={index} dangerouslySetInnerHTML={{ __html: renderMathHtml(math, true) }} />;
    }
    if (part.startsWith('$') && part.endsWith('$')) {
      const math = part.slice(1, -1);
      return <span className="math-inline" aria-label={math} key={index} dangerouslySetInnerHTML={{ __html: renderMathHtml(math) }} />;
    }
    return <React.Fragment key={index}>{renderUnderline(part, `part-${index}`)}</React.Fragment>;
  })}</>;
}
