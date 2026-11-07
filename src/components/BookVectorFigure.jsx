import React from 'react';
import '../book-vector-figures.css';

export default function BookVectorFigure({ figure, className = '' }) {
  return <figure className={`book-vector-figure ${className}`.trim()}>
    <span className="diagram-scroll-hint">Arraste a figura para explorar →</span>
    <div className="book-vector-scroll">
      <img src={figure.src} alt={figure.alt} width={figure.width} height={figure.height} decoding="async" />
    </div>
    <figcaption>
      <strong>{figure.title}</strong>
      {figure.caption && <span>{figure.caption}</span>}
      <small className="figure-credit">{figure.credit}</small>
    </figcaption>
  </figure>;
}
