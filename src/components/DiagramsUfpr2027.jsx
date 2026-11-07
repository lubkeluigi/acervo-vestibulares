import React from 'react';

const SANS = 'Arial, Helvetica, sans-serif';
const SERIF = 'Times New Roman, Georgia, serif';

/**
 * UFPR 2027 - Questão 01
 * Gráfico duplo de barras empilhadas (HEV, PHEV, BEV) e linha de participação percentual (2015-2025).
 * Estilo técnico limpo padrão VUNESP.
 */
export function Ufpr2027Q01() {
  const years = [
    { year: '2015', hev: 1.0, phev: 0, bev: 0, pct: '0%', pctVal: 0 },
    { year: '2016', hev: 1.1, phev: 0, bev: 0, pct: '0%', pctVal: 0 },
    { year: '2017', hev: 3.3, phev: 0, bev: 0, pct: '0%', pctVal: 0 },
    { year: '2018', hev: 4.0, phev: 0, bev: 0, pct: '0%', pctVal: 0 },
    { year: '2019', hev: 11.9, phev: 0.5, bev: 0.5, pct: '0%', pctVal: 0 },
    { year: '2020', hev: 19.7, phev: 1.0, bev: 0.7, pct: '1%', pctVal: 1 },
    { year: '2021', hev: 24.0, phev: 7.0, bev: 4.0, pct: '2%', pctVal: 2 },
    { year: '2022', hev: 29.0, phev: 12.0, bev: 8.5, pct: '3%', pctVal: 3 },
    { year: '2023', hev: 42.0, phev: 30.5, bev: 21.5, pct: '4%', pctVal: 4 },
    { year: '2024', hev: 52.0, phev: 64.0, bev: 61.0, pct: '7%', pctVal: 7 },
    { year: '2025', hev: 43.0, phev: 101.0, bev: 80.0, pct: '9%', pctVal: 9 },
  ];

  const leftX = 72;
  const rightX = 590;
  const bottomY = 270;
  const topY = 60;
  const plotH = bottomY - topY; // 210px

  const yVehicle = (val) => bottomY - (val / 250) * plotH;
  const yPct = (pct) => bottomY - (pct / 10) * plotH;

  const colWidth = 47;
  const barW = 20;

  const points = years.map((d, i) => {
    const cx = leftX + 24 + i * colWidth;
    const cy = yPct(d.pctVal);
    return { cx, cy, ...d };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.cx} ${p.cy}`).join(' ');

  return (
    <svg viewBox="0 0 660 380" role="img" aria-labelledby="q01-title" className="question-svg" fontFamily={SANS}>
      <title id="q01-title">Gráfico de licenciamento de veículos eletrificados e participação no licenciamento total no Brasil de 2015 a 2025</title>
      
      {/* Título do gráfico */}
      <text x="330" y="32" textAnchor="middle" fontSize="14" fontWeight="700" fill="#151515">
        Licenciamento de eletrificados e participação no licenciamento total
      </text>

      {/* Linhas de grade horizontais cinza claro */}
      {[50, 100, 150, 200, 250].map((val) => (
        <line key={val} x1={leftX} y1={yVehicle(val)} x2={rightX} y2={yVehicle(val)} stroke="#e0e0e0" strokeWidth="1" />
      ))}
      <line x1={leftX} y1={bottomY} x2={rightX} y2={bottomY} stroke="#b0b0b0" strokeWidth="1" />

      {/* Eixo esquerdo - Milhares de veículos */}
      {[0, 50, 100, 150, 200, 250].map((val) => (
        <text key={val} x={leftX - 8} y={yVehicle(val) + 4} textAnchor="end" fontSize="11" fill="#333333">
          {val}
        </text>
      ))}
      <g transform={`rotate(-90 22 ${topY + plotH / 2})`}>
        <text x="22" y={topY + plotH / 2} textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#222222">
          Milhares de veículos
        </text>
      </g>

      {/* Eixo direito - Participação percentual (%) */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
        <text key={val} x={rightX + 8} y={yPct(val) + 4} textAnchor="start" fontSize="11" fill="#333333">
          {val}%
        </text>
      ))}
      <g transform={`rotate(90 ${rightX + 48} ${topY + plotH / 2})`}>
        <text x={rightX + 48} y={topY + plotH / 2} textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#222222">
          Participação no licenciamento total
        </text>
      </g>

      {/* Barras empilhadas */}
      {points.map((p) => {
        const bx = p.cx - barW / 2;
        const hHev = (p.hev / 250) * plotH;
        const hPhev = (p.phev / 250) * plotH;
        const hBev = (p.bev / 250) * plotH;

        const yHev = bottomY - hHev;
        const yPhev = yHev - hPhev;
        const yBev = yPhev - hBev;

        return (
          <g key={p.year}>
            {/* HEV - barra inferior grafite/preto */}
            {hHev > 0.5 && (
              <rect x={bx} y={yHev} width={barW} height={hHev} fill="#262626" />
            )}
            {/* PHEV - barra intermediária branca com contorno sutil */}
            {hPhev > 0.5 && (
              <rect x={bx} y={yPhev} width={barW} height={hPhev} fill="#ffffff" stroke="#777777" strokeWidth="0.8" />
            )}
            {/* BEV - barra superior cinza médio */}
            {hBev > 0.5 && (
              <rect x={bx} y={yBev} width={barW} height={hBev} fill="#808080" />
            )}
            {/* Rótulo do ano no eixo X */}
            <text x={p.cx} y={bottomY + 18} textAnchor="middle" fontSize="11" fill="#222222">
              {p.year}
            </text>
          </g>
        );
      })}

      {/* Linha de participação percentual com marcadores */}
      <path d={linePath} fill="none" stroke="#151515" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
      {points.map((p) => (
        <g key={`dot-${p.year}`}>
          <circle cx={p.cx} cy={p.cy} r="4" fill="#151515" />
          <text x={p.cx} y={p.cy - 7} textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#151515">
            {p.pct}
          </text>
        </g>
      ))}

      {/* Legenda inferior */}
      <g transform="translate(18, 328)">
        <text x="0" y="14" fontSize="12" fontWeight="700" fill="#151515">Legenda:</text>
        
        {/* HEV */}
        <rect x="75" y="4" width="22" height="12" fill="#262626" />
        <text x="103" y="14" fontSize="11" fill="#222222">HEV</text>

        {/* PHEV */}
        <rect x="145" y="4" width="22" height="12" fill="#ffffff" stroke="#777777" strokeWidth="1" />
        <text x="173" y="14" fontSize="11" fill="#222222">PHEV</text>

        {/* BEV */}
        <rect x="225" y="4" width="22" height="12" fill="#808080" />
        <text x="253" y="14" fontSize="11" fill="#222222">BEV</text>

        {/* Linha % */}
        <line x1="295" y1="10" x2="325" y2="10" stroke="#151515" strokeWidth="2.2" />
        <circle cx="310" cy="10" r="3.5" fill="#151515" />
        <text x="333" y="14" fontSize="11" fill="#222222">%</text>

        {/* Descrições das siglas à direita */}
        <text x="400" y="4" fontSize="10" fill="#333333">
          <tspan fontWeight="700">HEV:</tspan> Veículo híbrido elétrico.
        </text>
        <text x="400" y="18" fontSize="10" fill="#333333">
          <tspan fontWeight="700">PHEV:</tspan> Veículo híbrido elétrico plug-in.
        </text>
        <text x="400" y="32" fontSize="10" fill="#333333">
          <tspan fontWeight="700">BEV:</tspan> Veículo elétrico a bateria.
        </text>
      </g>
    </svg>
  );
}

/**
 * UFPR 2027 - Questão 10
 * Heredograma de 3 gerações com indivíduos afetados por herança autossômica recessiva.
 * Estilo VUNESP clássico: linhas retas ortogonais nítidas, círculos e quadrados precisos.
 */
export function Ufpr2027Q10() {
  const nodeW = 28;
  const nodeR = 14;

  const Male = ({ x, y, affected }) => (
    <rect
      x={x - nodeW / 2}
      y={y - nodeW / 2}
      width={nodeW}
      height={nodeW}
      fill={affected ? '#111111' : '#ffffff'}
      stroke="#111111"
      strokeWidth="2"
    />
  );

  const Female = ({ x, y, affected }) => (
    <circle
      cx={x}
      cy={y}
      r={nodeR}
      fill={affected ? '#111111' : '#ffffff'}
      stroke="#111111"
      strokeWidth="2"
    />
  );

  return (
    <svg viewBox="0 0 540 280" role="img" aria-labelledby="q10-title" className="question-svg" fontFamily={SANS}>
      <title id="q10-title">Heredograma de três gerações com indivíduos afetados por condição autossômica recessiva</title>

      {/* ================= GERAÇÃO I ================= */}
      {/* Casal Esquerdo: Homem afetado (1) x Mulher normal (2) */}
      <line x1="125" y1="45" x2="210" y2="45" stroke="#111111" strokeWidth="1.8" />
      <line x1="167.5" y1="45" x2="167.5" y2="85" stroke="#111111" strokeWidth="1.8" />
      <Male x={125} y={45} affected={true} />
      <Female x={210} y={45} affected={false} />

      {/* Casal Direito: Homem normal (3) x Mulher afetada (4) */}
      <line x1="335" y1="45" x2="420" y2="45" stroke="#111111" strokeWidth="1.8" />
      <line x1="377.5" y1="45" x2="377.5" y2="85" stroke="#111111" strokeWidth="1.8" />
      <Male x={335} y={45} affected={false} />
      <Female x={420} y={45} affected={true} />

      {/* ================= GERAÇÃO II ================= */}
      {/* Linha de irmandade do casal esquerdo (I-1 e I-2): x de 110 até 225 */}
      <line x1="110" y1="85" x2="225" y2="85" stroke="#111111" strokeWidth="1.8" />
      <line x1="110" y1="85" x2="110" y2="135" stroke="#111111" strokeWidth="1.8" />
      <line x1="167.5" y1="85" x2="167.5" y2="135" stroke="#111111" strokeWidth="1.8" />
      <line x1="225" y1="85" x2="225" y2="135" stroke="#111111" strokeWidth="1.8" />

      {/* Filhos do casal esquerdo */}
      <Male x={110} y={135} affected={false} />
      <Female x={167.5} y={135} affected={false} />
      <Female x={225} y={135} affected={false} />

      {/* Casamento à esquerda: Mulher afetada externa x Homem II-1 */}
      <line x1="45" y1="135" x2="110" y2="135" stroke="#111111" strokeWidth="1.8" />
      <Female x={45} y={135} affected={true} />
      <line x1="77.5" y1="135" x2="77.5" y2="175" stroke="#111111" strokeWidth="1.8" />

      {/* Linha de irmandade do casal direito (I-3 e I-4): x de 295 até 485 */}
      <line x1="295" y1="85" x2="485" y2="85" stroke="#111111" strokeWidth="1.8" />
      <line x1="295" y1="85" x2="295" y2="135" stroke="#111111" strokeWidth="1.8" />
      <line x1="365" y1="85" x2="365" y2="135" stroke="#111111" strokeWidth="1.8" />
      <line x1="485" y1="85" x2="485" y2="135" stroke="#111111" strokeWidth="1.8" />

      {/* Filhos do casal direito */}
      <Male x={295} y={135} affected={false} />
      <Male x={365} y={135} affected={true} />
      <Female x={485} y={135} affected={false} />

      {/* Casamento central consanguíneo/entre ramos: Mulher II-3 x Homem II-4 */}
      <line x1="225" y1="135" x2="295" y2="135" stroke="#111111" strokeWidth="1.8" />
      <line x1="260" y1="135" x2="260" y2="175" stroke="#111111" strokeWidth="1.8" />

      {/* Casamento à direita: Homem II-5 (afetado) x Mulher externa (afetada) */}
      <line x1="365" y1="135" x2="420" y2="135" stroke="#111111" strokeWidth="1.8" />
      <Female x={420} y={135} affected={true} />
      <line x1="392.5" y1="135" x2="392.5" y2="175" stroke="#111111" strokeWidth="1.8" />

      {/* ================= GERAÇÃO III ================= */}
      {/* Filhos do Casamento 1 (esquerda): Irmandade x de 45 a 110 */}
      <line x1="45" y1="175" x2="110" y2="175" stroke="#111111" strokeWidth="1.8" />
      <line x1="45" y1="175" x2="45" y2="225" stroke="#111111" strokeWidth="1.8" />
      <line x1="110" y1="175" x2="110" y2="225" stroke="#111111" strokeWidth="1.8" />
      <Male x={45} y={225} affected={true} />
      <Female x={110} y={225} affected={false} />

      {/* Filhos do Casamento 2 (centro): Irmandade x de 195 a 305 */}
      <line x1="195" y1="175" x2="305" y2="175" stroke="#111111" strokeWidth="1.8" />
      <line x1="195" y1="175" x2="195" y2="225" stroke="#111111" strokeWidth="1.8" />
      <line x1="250" y1="175" x2="250" y2="225" stroke="#111111" strokeWidth="1.8" />
      <line x1="305" y1="175" x2="305" y2="225" stroke="#111111" strokeWidth="1.8" />
      <Male x={195} y={225} affected={false} />
      <Female x={250} y={225} affected={false} />
      <Female x={305} y={225} affected={true} />

      {/* Filhos do Casamento 3 (direita): Irmandade x de 365 a 420 */}
      <line x1="365" y1="175" x2="420" y2="175" stroke="#111111" strokeWidth="1.8" />
      <line x1="365" y1="175" x2="365" y2="225" stroke="#111111" strokeWidth="1.8" />
      <line x1="420" y1="175" x2="420" y2="225" stroke="#111111" strokeWidth="1.8" />
      <Female x={365} y={225} affected={true} />
      <Male x={420} y={225} affected={true} />
    </svg>
  );
}

/**
 * UFPR 2027 - Questão 26
 * Gráfico da Força F (N) em função do comprimento L (cm) da mola.
 * Ponto de início (5,0; 0) e ponto final (15; 0,90).
 */
export function Ufpr2027Q26() {
  return (
    <svg viewBox="0 0 540 240" role="img" aria-labelledby="q26-title" className="question-svg" fontFamily={SANS}>
      <title id="q26-title">Gráfico de força de tração F em Newtons em função do comprimento total L em centímetros da mola</title>
      <defs>
        <marker id="q26-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 1L8 5L0 9Z" fill="#111111" />
        </marker>
      </defs>

      {/* Linhas de projeção pontilhadas */}
      <line x1="85" y1="125" x2="280" y2="125" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />
      <line x1="280" y1="190" x2="280" y2="125" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />
      <line x1="85" y1="60" x2="390" y2="60" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />
      <line x1="390" y1="190" x2="390" y2="60" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />

      {/* Eixos cartesianos */}
      <line x1="85" y1="210" x2="85" y2="25" stroke="#111111" strokeWidth="1.6" markerEnd="url(#q26-arrow)" />
      <line x1="55" y1="190" x2="480" y2="190" stroke="#111111" strokeWidth="1.6" markerEnd="url(#q26-arrow)" />

      {/* Rótulos dos eixos */}
      <text x="45" y="24" fontSize="16" fill="#111111">
        <tspan fontStyle="italic">F</tspan> (N)
      </text>
      <text x="440" y="222" fontSize="16" fill="#111111">
        <tspan fontStyle="italic">L</tspan> (cm)
      </text>

      {/* Origem */}
      <text x="73" y="204" textAnchor="end" fontSize="14" fill="#111111">0</text>

      {/* Traços de escala do eixo vertical */}
      <line x1="81" y1="125" x2="89" y2="125" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="130" textAnchor="end" fontSize="14" fill="#111111">0,45</text>

      <line x1="81" y1="60" x2="89" y2="60" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="65" textAnchor="end" fontSize="14" fill="#111111">0,90</text>

      {/* Traços de escala do eixo horizontal */}
      <line x1="170" y1="186" x2="170" y2="194" stroke="#111111" strokeWidth="1.4" />
      <text x="170" y="212" textAnchor="middle" fontSize="14" fill="#111111">5,0</text>

      <line x1="280" y1="186" x2="280" y2="194" stroke="#111111" strokeWidth="1.4" />
      <text x="280" y="212" textAnchor="middle" fontSize="14" fill="#111111">10</text>

      <line x1="390" y1="186" x2="390" y2="194" stroke="#111111" strokeWidth="1.4" />
      <text x="390" y="212" textAnchor="middle" fontSize="14" fill="#111111">15</text>

      {/* Reta da Lei de Hooke */}
      <line x1="170" y1="190" x2="390" y2="60" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * UFPR 2027 - Questão 28
 * Gráfico de velocidade v (m/s) em função do tempo t (s) para MRUV.
 * Reta passando por (0, 0), (2, 4), (6, 12), (10, 20).
 */
export function Ufpr2027Q28() {
  return (
    <svg viewBox="0 0 500 440" role="img" aria-labelledby="q28-title" className="question-svg" fontFamily={SANS}>
      <title id="q28-title">Gráfico da velocidade v em metros por segundo em função do tempo t em segundos</title>
      <defs>
        <marker id="q28-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 1L8 5L0 9Z" fill="#111111" />
        </marker>
      </defs>

      {/* Linhas de projeção pontilhadas */}
      <line x1="85" y1="316" x2="148" y2="316" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />
      <line x1="148" y1="380" x2="148" y2="316" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />

      <line x1="85" y1="188" x2="274" y2="188" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />
      <line x1="274" y1="380" x2="274" y2="188" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />

      <line x1="85" y1="60" x2="400" y2="60" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />
      <line x1="400" y1="380" x2="400" y2="60" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />

      {/* Eixos cartesianos */}
      <line x1="85" y1="405" x2="85" y2="25" stroke="#111111" strokeWidth="1.6" markerEnd="url(#q28-arrow)" />
      <line x1="55" y1="380" x2="465" y2="380" stroke="#111111" strokeWidth="1.6" markerEnd="url(#q28-arrow)" />

      {/* Rótulos dos eixos */}
      <text x="42" y="24" fontSize="16" fill="#111111">
        <tspan fontStyle="italic">v</tspan> (m/s)
      </text>
      <text x="430" y="412" fontSize="16" fill="#111111">
        <tspan fontStyle="italic">t</tspan> (s)
      </text>

      {/* Origem */}
      <text x="73" y="395" textAnchor="end" fontSize="14" fill="#111111">0</text>

      {/* Traços de escala do eixo vertical */}
      <line x1="81" y1="316" x2="89" y2="316" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="321" textAnchor="end" fontSize="14" fill="#111111">4</text>

      <line x1="81" y1="252" x2="89" y2="252" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="257" textAnchor="end" fontSize="14" fill="#111111">8</text>

      <line x1="81" y1="188" x2="89" y2="188" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="193" textAnchor="end" fontSize="14" fill="#111111">12</text>

      <line x1="81" y1="124" x2="89" y2="124" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="129" textAnchor="end" fontSize="14" fill="#111111">16</text>

      <line x1="81" y1="60" x2="89" y2="60" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="65" textAnchor="end" fontSize="14" fill="#111111">20</text>

      {/* Traços de escala do eixo horizontal */}
      <line x1="148" y1="376" x2="148" y2="384" stroke="#111111" strokeWidth="1.4" />
      <text x="148" y="402" textAnchor="middle" fontSize="14" fill="#111111">2</text>

      <line x1="211" y1="376" x2="211" y2="384" stroke="#111111" strokeWidth="1.4" />
      <text x="211" y="402" textAnchor="middle" fontSize="14" fill="#111111">4</text>

      <line x1="274" y1="376" x2="274" y2="384" stroke="#111111" strokeWidth="1.4" />
      <text x="274" y="402" textAnchor="middle" fontSize="14" fill="#111111">6</text>

      <line x1="337" y1="376" x2="337" y2="384" stroke="#111111" strokeWidth="1.4" />
      <text x="337" y="402" textAnchor="middle" fontSize="14" fill="#111111">8</text>

      <line x1="400" y1="376" x2="400" y2="384" stroke="#111111" strokeWidth="1.4" />
      <text x="400" y="402" textAnchor="middle" fontSize="14" fill="#111111">10</text>

      {/* Reta do gráfico v x t */}
      <line x1="85" y1="380" x2="400" y2="60" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * UFPR 2027 - Questão 30
 * Gráfico do comprimento de onda lambda (cm) em função do período T (s).
 * Reta passando por (20, 50), (40, 100), (60, 150).
 */
export function Ufpr2027Q30() {
  return (
    <svg viewBox="0 0 540 260" role="img" aria-labelledby="q30-title" className="question-svg" fontFamily={SANS}>
      <title id="q30-title">Gráfico do comprimento de onda lambda em centímetros em função do período T em segundos</title>
      <defs>
        <marker id="q30-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 1L8 5L0 9Z" fill="#111111" />
        </marker>
      </defs>

      {/* Linhas de projeção pontilhadas */}
      <line x1="85" y1="166" x2="195" y2="166" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />
      <line x1="195" y1="210" x2="195" y2="166" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />

      <line x1="85" y1="118" x2="305" y2="118" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />
      <line x1="305" y1="210" x2="305" y2="118" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />

      <line x1="85" y1="70" x2="415" y2="70" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />
      <line x1="415" y1="210" x2="415" y2="70" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />

      {/* Eixos cartesianos */}
      <line x1="85" y1="230" x2="85" y2="25" stroke="#111111" strokeWidth="1.6" markerEnd="url(#q30-arrow)" />
      <line x1="55" y1="210" x2="480" y2="210" stroke="#111111" strokeWidth="1.6" markerEnd="url(#q30-arrow)" />

      {/* Rótulos dos eixos */}
      <text x="42" y="24" fontSize="16" fill="#111111">
        <tspan fontStyle="italic">&lambda;</tspan> (cm)
      </text>
      <text x="445" y="242" fontSize="16" fill="#111111">
        <tspan fontStyle="italic">T</tspan> (s)
      </text>

      {/* Origem */}
      <text x="73" y="224" textAnchor="end" fontSize="14" fill="#111111">0</text>

      {/* Traços de escala do eixo vertical */}
      <line x1="81" y1="166" x2="89" y2="166" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="171" textAnchor="end" fontSize="14" fill="#111111">50</text>

      <line x1="81" y1="118" x2="89" y2="118" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="123" textAnchor="end" fontSize="14" fill="#111111">100</text>

      <line x1="81" y1="70" x2="89" y2="70" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="75" textAnchor="end" fontSize="14" fill="#111111">150</text>

      {/* Traços de escala do eixo horizontal */}
      <line x1="195" y1="206" x2="195" y2="214" stroke="#111111" strokeWidth="1.4" />
      <text x="195" y="232" textAnchor="middle" fontSize="14" fill="#111111">20</text>

      <line x1="305" y1="206" x2="305" y2="214" stroke="#111111" strokeWidth="1.4" />
      <text x="305" y="232" textAnchor="middle" fontSize="14" fill="#111111">40</text>

      <line x1="415" y1="206" x2="415" y2="214" stroke="#111111" strokeWidth="1.4" />
      <text x="415" y="232" textAnchor="middle" fontSize="14" fill="#111111">60</text>

      {/* Reta do gráfico */}
      <line x1="195" y1="166" x2="415" y2="70" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * UFPR 2027 - Questão 31
 * Diagrama Termodinâmico P x V.
 * Processo 1 linear de A(2V0, 4P0) até B(4V0, P0), Processo 2 isobárico de B(4V0, P0) até C(8V0, P0).
 */
export function Ufpr2027Q31() {
  return (
    <svg viewBox="0 0 560 320" role="img" aria-labelledby="q31-title" className="question-svg" fontFamily={SANS}>
      <title id="q31-title">Diagrama pressão P por volume V com processo 1 de A para B e processo 2 de B para C</title>
      <defs>
        <marker id="q31-axis-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 1L8 5L0 9Z" fill="#111111" />
        </marker>
        <marker id="q31-line-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 1L8 5L0 9Z" fill="#111111" />
        </marker>
      </defs>

      {/* Linhas de projeção pontilhadas */}
      <line x1="85" y1="75" x2="175" y2="75" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />
      <line x1="175" y1="260" x2="175" y2="75" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />

      <line x1="85" y1="210" x2="265" y2="210" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />
      <line x1="265" y1="260" x2="265" y2="210" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />

      <line x1="445" y1="260" x2="445" y2="210" stroke="#444444" strokeWidth="1.3" strokeDasharray="2 3" />

      {/* Eixos cartesianos */}
      <line x1="85" y1="285" x2="85" y2="25" stroke="#111111" strokeWidth="1.6" markerEnd="url(#q31-axis-arrow)" />
      <line x1="55" y1="260" x2="520" y2="260" stroke="#111111" strokeWidth="1.6" markerEnd="url(#q31-axis-arrow)" />

      {/* Rótulos dos eixos */}
      <text x="65" y="24" fontSize="17" fontStyle="italic" fill="#111111">P</text>
      <text x="505" y="288" fontSize="17" fontStyle="italic" fill="#111111">V</text>

      {/* Origem */}
      <text x="73" y="274" textAnchor="end" fontSize="14" fill="#111111">0</text>

      {/* Escala vertical (P0, 2P0, 3P0, 4P0) */}
      <line x1="81" y1="210" x2="89" y2="210" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="215" textAnchor="end" fontSize="14" fill="#111111">
        <tspan fontStyle="italic">P</tspan><tspan fontSize="10" dy="3">0</tspan>
      </text>

      <line x1="81" y1="165" x2="89" y2="165" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="170" textAnchor="end" fontSize="14" fill="#111111">
        2<tspan fontStyle="italic">P</tspan><tspan fontSize="10" dy="3">0</tspan>
      </text>

      <line x1="81" y1="120" x2="89" y2="120" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="125" textAnchor="end" fontSize="14" fill="#111111">
        3<tspan fontStyle="italic">P</tspan><tspan fontSize="10" dy="3">0</tspan>
      </text>

      <line x1="81" y1="75" x2="89" y2="75" stroke="#111111" strokeWidth="1.4" />
      <text x="78" y="80" textAnchor="end" fontSize="14" fill="#111111">
        4<tspan fontStyle="italic">P</tspan><tspan fontSize="10" dy="3">0</tspan>
      </text>

      {/* Escala horizontal (2V0, 4V0, 6V0, 8V0) */}
      <line x1="175" y1="256" x2="175" y2="264" stroke="#111111" strokeWidth="1.4" />
      <text x="175" y="284" textAnchor="middle" fontSize="14" fill="#111111">
        2<tspan fontStyle="italic">V</tspan><tspan fontSize="10" dy="3">0</tspan>
      </text>

      <line x1="265" y1="256" x2="265" y2="264" stroke="#111111" strokeWidth="1.4" />
      <text x="265" y="284" textAnchor="middle" fontSize="14" fill="#111111">
        4<tspan fontStyle="italic">V</tspan><tspan fontSize="10" dy="3">0</tspan>
      </text>

      <line x1="355" y1="256" x2="355" y2="264" stroke="#111111" strokeWidth="1.4" />
      <text x="355" y="284" textAnchor="middle" fontSize="14" fill="#111111">
        6<tspan fontStyle="italic">V</tspan><tspan fontSize="10" dy="3">0</tspan>
      </text>

      <line x1="445" y1="256" x2="445" y2="264" stroke="#111111" strokeWidth="1.4" />
      <text x="445" y="284" textAnchor="middle" fontSize="14" fill="#111111">
        8<tspan fontStyle="italic">V</tspan><tspan fontSize="10" dy="3">0</tspan>
      </text>

      {/* Trajetória do Processo 1 (de A até B com seta no meio) */}
      <line x1="175" y1="75" x2="225" y2="150" stroke="#111111" strokeWidth="2.8" markerEnd="url(#q31-line-arrow)" strokeLinecap="round" />
      <line x1="220" y1="142" x2="265" y2="210" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
      <text x="240" y="132" fontSize="13" fill="#111111" transform="rotate(56 240 132)">
        processo 1
      </text>

      {/* Trajetória do Processo 2 (de B até C com seta no meio) */}
      <line x1="265" y1="210" x2="360" y2="210" stroke="#111111" strokeWidth="2.8" markerEnd="url(#q31-line-arrow)" strokeLinecap="round" />
      <line x1="355" y1="210" x2="445" y2="210" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
      <text x="355" y="198" textAnchor="middle" fontSize="13" fill="#111111">
        processo 2
      </text>

      {/* Pontos A, B, C */}
      <circle cx="175" cy="75" r="4.5" fill="#111111" />
      <text x="175" y="62" textAnchor="middle" fontSize="15" fontWeight="700" fill="#111111">A</text>

      <circle cx="265" cy="210" r="4.5" fill="#111111" />
      <text x="277" y="200" fontSize="15" fontWeight="700" fill="#111111">B</text>

      <circle cx="445" cy="210" r="4.5" fill="#111111" />
      <text x="445" y="198" textAnchor="middle" fontSize="15" fontWeight="700" fill="#111111">C</text>
    </svg>
  );
}

/**
 * UFPR 2027 - Questão 37
 * Representação espacial com cunhas (wedge-dash) das moléculas quirais A e B de 2,3-dibromobutano.
 * Molécula A com cunhas sólidas preenchidas para frente; Molécula B com cunhas tracejadas para trás.
 */
export function Ufpr2027Q37() {
  return (
    <svg viewBox="0 0 460 220" role="img" aria-labelledby="q37-title" className="question-svg" fontFamily={SANS}>
      <title id="q37-title">Estruturas espaciais das moléculas quirais enantiômeras A e B de 2,3-dibromobutano</title>

      {/* ================= MOLÉCULA A ================= */}
      <g transform="translate(20, 0)">
        {/* Esqueleto carbônico em zigue-zague */}
        <polyline
          points="40,135 90,105 140,135 190,105"
          fill="none"
          stroke="#111111"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* C2: Cunha cheia apontando para CIMA para o Br */}
        <polygon points="87,105 93,105 96,62 84,62" fill="#111111" />
        <text x="90" y="52" textAnchor="middle" fontSize="18" fontWeight="700" fill="#111111">Br</text>

        {/* C3: Cunha cheia apontando para BAIXO para o Br */}
        <polygon points="137,135 143,135 146,178 134,178" fill="#111111" />
        <text x="140" y="196" textAnchor="middle" fontSize="18" fontWeight="700" fill="#111111">Br</text>

        {/* Rótulo da molécula A */}
        <text x="115" y="215" textAnchor="middle" fontSize="20" fontWeight="700" fill="#111111">A</text>
      </g>

      {/* ================= MOLÉCULA B ================= */}
      <g transform="translate(240, 0)">
        {/* Esqueleto carbônico em zigue-zague */}
        <polyline
          points="40,135 90,105 140,135 190,105"
          fill="none"
          stroke="#111111"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* C2: Cunha tracejada apontando para CIMA para o Br */}
        <g stroke="#111111" strokeWidth="2.2" strokeLinecap="round">
          <line x1="88" y1="98" x2="92" y2="98" />
          <line x1="87" y1="91" x2="93" y2="91" />
          <line x1="86" y1="84" x2="94" y2="84" />
          <line x1="85" y1="77" x2="95" y2="77" />
          <line x1="84" y1="70" x2="96" y2="70" />
          <line x1="83" y1="63" x2="97" y2="63" />
        </g>
        <text x="90" y="52" textAnchor="middle" fontSize="18" fontWeight="700" fill="#111111">Br</text>

        {/* C3: Cunha tracejada apontando para BAIXO para o Br */}
        <g stroke="#111111" strokeWidth="2.2" strokeLinecap="round">
          <line x1="138" y1="142" x2="142" y2="142" />
          <line x1="137" y1="149" x2="143" y2="149" />
          <line x1="136" y1="156" x2="144" y2="156" />
          <line x1="135" y1="163" x2="145" y2="163" />
          <line x1="134" y1="170" x2="146" y2="170" />
          <line x1="133" y1="177" x2="147" y2="177" />
        </g>
        <text x="140" y="196" textAnchor="middle" fontSize="18" fontWeight="700" fill="#111111">Br</text>

        {/* Rótulo da molécula B */}
        <text x="115" y="215" textAnchor="middle" fontSize="20" fontWeight="700" fill="#111111">B</text>
      </g>
    </svg>
  );
}

/**
 * UFPR 2027 - Questão 43
 * Retângulos ABCD e EFGH com lados em progressão geométrica.
 * Estilo VUNESP para geometria plana: vértices pontuais pretos, letras itálicas clássicas.
 */
export function Ufpr2027Q43() {
  return (
    <svg viewBox="0 0 600 220" role="img" aria-labelledby="q43-title" className="question-svg" fontFamily={SERIF}>
      <title id="q43-title">Retângulos ABCD e EFGH com lados em progressão geométrica crescente</title>

      {/* Retângulo ABCD (menor, à esquerda) */}
      <rect x="70" y="100" width="115" height="65" fill="none" stroke="#111111" strokeWidth="2.2" />
      <circle cx="70" cy="165" r="4.2" fill="#111111" />
      <circle cx="70" cy="100" r="4.2" fill="#111111" />
      <circle cx="185" cy="100" r="4.2" fill="#111111" />
      <circle cx="185" cy="165" r="4.2" fill="#111111" />

      <text x="50" y="182" fontSize="23" fontStyle="italic" fill="#111111">A</text>
      <text x="50" y="93" fontSize="23" fontStyle="italic" fill="#111111">B</text>
      <text x="195" y="93" fontSize="23" fontStyle="italic" fill="#111111">C</text>
      <text x="195" y="182" fontSize="23" fontStyle="italic" fill="#111111">D</text>

      {/* Retângulo EFGH (maior, à direita) */}
      <rect x="290" y="45" width="260" height="120" fill="none" stroke="#111111" strokeWidth="2.2" />
      <circle cx="290" cy="165" r="4.2" fill="#111111" />
      <circle cx="290" cy="45" r="4.2" fill="#111111" />
      <circle cx="550" cy="45" r="4.2" fill="#111111" />
      <circle cx="550" cy="165" r="4.2" fill="#111111" />

      <text x="270" y="182" fontSize="23" fontStyle="italic" fill="#111111">E</text>
      <text x="270" y="38" fontSize="23" fontStyle="italic" fill="#111111">F</text>
      <text x="560" y="38" fontSize="23" fontStyle="italic" fill="#111111">G</text>
      <text x="560" y="182" fontSize="23" fontStyle="italic" fill="#111111">H</text>
    </svg>
  );
}

/**
 * UFPR 2027 - Questão 44
 * Sequência de 3 sólidos geométricos com setas de transformação:
 * 1) Cubo inicial
 * 2) Cubo com corte plano no vértice superior frontal esquerdo (destaque do tetraedro)
 * 3) Sólido resultante truncado em todos os 8 vértices (cuboctaedro).
 */
export function Ufpr2027Q44() {
  // Coordenadas base do cubo em projeção axonométrica
  // Vértices da face frontal: A (sup-esq), B (sup-dir), C (inf-dir), D (inf-esq)
  // Vértices da face traseira: E (sup-esq), F (sup-dir), G (inf-dir), H (inf-esq)
  const A1 = [18, 45];
  const B1 = [186, 45];
  const C1 = [188, 206];
  const D1 = [38, 200];
  const E1 = [80, 18];
  const F1 = [208, 18];
  const G1 = [208, 150];
  const H1 = [80, 150];

  const mid = (p1, p2) => [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
  const shift = (p, dx) => [p[0] + dx, p[1]];

  const dx2 = 412;
  const A2 = shift(A1, dx2);
  const B2 = shift(B1, dx2);
  const C2 = shift(C1, dx2);
  const D2 = shift(D1, dx2);
  const E2 = shift(E1, dx2);
  const F2 = shift(F1, dx2);
  const G2 = shift(G1, dx2);
  const H2 = shift(H1, dx2);

  // Pontos médios das 3 arestas concorrentes em A2 (corte plano do 1º tetraedro)
  const M_topFront = mid(A2, B2); // aresta superior frontal
  const M_leftFront = mid(A2, D2); // aresta vertical frontal
  const M_topDepth = mid(A2, E2); // aresta superior profundidade

  const dx3 = 812;
  const A3 = shift(A1, dx3);
  const B3 = shift(B1, dx3);
  const C3 = shift(C1, dx3);
  const D3 = shift(D1, dx3);
  const E3 = shift(E1, dx3);
  const F3 = shift(F1, dx3);
  const G3 = shift(G1, dx3);
  const H3 = shift(H1, dx3);

  // 12 pontos médios do cuboctaedro (Fig 3)
  const mAB = mid(A3, B3);
  const mBC = mid(B3, C3);
  const mCD = mid(C3, D3);
  const mDA = mid(D3, A3);

  const mEF = mid(E3, F3);
  const mFG = mid(F3, G3);
  const mGH = mid(G3, H3);
  const mHE = mid(H3, E3);

  const mAE = mid(A3, E3);
  const mBF = mid(B3, F3);
  const mCG = mid(C3, G3);
  const mDH = mid(D3, H3);

  const ptStr = (p) => `${p[0]},${p[1]}`;

  return (
    <svg viewBox="0 0 1060 230" role="img" aria-labelledby="q44-title" className="question-svg" fontFamily={SANS}>
      <title id="q44-title">Esquema de cortes planos nos vértices de um cubo gerando um cuboctaedro truncado</title>
      <defs>
        <marker id="q44-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 1L8 5L0 9Z" fill="#111111" />
        </marker>
      </defs>

      {/* ================= FIGURA 1: CUBO INICIAL ================= */}
      {/* Arestas ocultas/internas (cinza claro) */}
      <line x1={E1[0]} y1={E1[1]} x2={H1[0]} y2={H1[1]} stroke="#d2d2d2" strokeWidth="1.2" />
      <line x1={D1[0]} y1={D1[1]} x2={H1[0]} y2={H1[1]} stroke="#d2d2d2" strokeWidth="1.2" />
      <line x1={G1[0]} y1={G1[1]} x2={H1[0]} y2={H1[1]} stroke="#d2d2d2" strokeWidth="1.2" />

      {/* Arestas visíveis da face frontal */}
      <polygon
        points={`${ptStr(A1)} ${ptStr(B1)} ${ptStr(C1)} ${ptStr(D1)}`}
        fill="none"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Face superior e lateral direita */}
      <polyline points={`${ptStr(A1)} ${ptStr(E1)} ${ptStr(F1)} ${ptStr(B1)}`} fill="none" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" />
      <polyline points={`${ptStr(F1)} ${ptStr(G1)} ${ptStr(C1)}`} fill="none" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" />

      {/* ================= PRIMEIRA SETA ================= */}
      <line x1="242" y1="118" x2="320" y2="118" stroke="#111111" strokeWidth="1.8" markerEnd="url(#q44-arrow)" />

      {/* ================= FIGURA 2: CORTE DO PRIMEIRO TETRAEDRO ================= */}
      {/* Arestas ocultas/internas (cinza claro) */}
      <line x1={E2[0]} y1={E2[1]} x2={H2[0]} y2={H2[1]} stroke="#d2d2d2" strokeWidth="1.2" />
      <line x1={D2[0]} y1={D2[1]} x2={H2[0]} y2={H2[1]} stroke="#d2d2d2" strokeWidth="1.2" />
      <line x1={G2[0]} y1={G2[1]} x2={H2[0]} y2={H2[1]} stroke="#d2d2d2" strokeWidth="1.2" />

      {/* Arestas do cubo preservadas */}
      <polyline points={`${ptStr(M_leftFront)} ${ptStr(D2)} ${ptStr(C2)} ${ptStr(B2)} ${ptStr(M_topFront)}`} fill="none" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" />
      <polyline points={`${ptStr(M_topFront)} ${ptStr(B2)} ${ptStr(F2)} ${ptStr(E2)} ${ptStr(M_topDepth)}`} fill="none" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" />
      <polyline points={`${ptStr(F2)} ${ptStr(G2)} ${ptStr(C2)}`} fill="none" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" />

      {/* Face triangular do corte plano entre os 3 pontos médios */}
      <polygon
        points={`${ptStr(M_topFront)} ${ptStr(M_leftFront)} ${ptStr(M_topDepth)}`}
        fill="#f6f6f6"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Destaque do tetraedro removido (linhas até o vértice original A2) */}
      <line x1={M_topFront[0]} y1={M_topFront[1]} x2={A2[0]} y2={A2[1]} stroke="#111111" strokeWidth="1.5" />
      <line x1={M_leftFront[0]} y1={M_leftFront[1]} x2={A2[0]} y2={A2[1]} stroke="#111111" strokeWidth="1.5" />
      <line x1={M_topDepth[0]} y1={M_topDepth[1]} x2={A2[0]} y2={A2[1]} stroke="#111111" strokeWidth="1.5" />

      {/* ================= SEGUNDA SETA ================= */}
      <line x1="660" y1="118" x2="738" y2="118" stroke="#111111" strokeWidth="1.8" markerEnd="url(#q44-arrow)" />

      {/* ================= FIGURA 3: CUBOCTAEDRO TRUNCADO ================= */}
      {/* Arestas traseiras/ocultas (faint gray) */}
      <line x1={mGH[0]} y1={mGH[1]} x2={mHE[0]} y2={mHE[1]} stroke="#d8d8d8" strokeWidth="1.1" />
      <line x1={mHE[0]} y1={mHE[1]} x2={mDH[0]} y2={mDH[1]} stroke="#d8d8d8" strokeWidth="1.1" />
      <line x1={mDH[0]} y1={mDH[1]} x2={mGH[0]} y2={mGH[1]} stroke="#d8d8d8" strokeWidth="1.1" />
      <line x1={mEF[0]} y1={mEF[1]} x2={mHE[0]} y2={mHE[1]} stroke="#d8d8d8" strokeWidth="1.1" />
      <line x1={mGH[0]} y1={mGH[1]} x2={mFG[0]} y2={mFG[1]} stroke="#d8d8d8" strokeWidth="1.1" />
      <line x1={mCD[0]} y1={mCD[1]} x2={mDH[0]} y2={mDH[1]} stroke="#d8d8d8" strokeWidth="1.1" />
      <line x1={mDA[0]} y1={mDA[1]} x2={mDH[0]} y2={mDH[1]} stroke="#d8d8d8" strokeWidth="1.1" />

      {/* Face Frontal Diamante/Quadrado: mAB - mBC - mCD - mDA */}
      <polygon
        points={`${ptStr(mAB)} ${ptStr(mBC)} ${ptStr(mCD)} ${ptStr(mDA)}`}
        fill="none"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Face Superior Diamante: mAB - mBF - mEF - mAE */}
      <polygon
        points={`${ptStr(mAB)} ${ptStr(mBF)} ${ptStr(mEF)} ${ptStr(mAE)}`}
        fill="none"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Face Lateral Direita Diamante: mBC - mBF - mFG - mCG */}
      <polygon
        points={`${ptStr(mBC)} ${ptStr(mBF)} ${ptStr(mFG)} ${ptStr(mCG)}`}
        fill="none"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Triângulo do vértice A (superior-frontal-esquerdo): mAB - mDA - mAE */}
      <polygon
        points={`${ptStr(mAB)} ${ptStr(mDA)} ${ptStr(mAE)}`}
        fill="none"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Triângulo do vértice B (superior-frontal-direito): mAB - mBC - mBF */}
      <polygon
        points={`${ptStr(mAB)} ${ptStr(mBC)} ${ptStr(mBF)}`}
        fill="none"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Triângulo do vértice C (inferior-frontal-direito): mBC - mCD - mCG */}
      <polygon
        points={`${ptStr(mBC)} ${ptStr(mCD)} ${ptStr(mCG)}`}
        fill="none"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Triângulo do vértice F (superior-traseiro-direito): mEF - mBF - mFG */}
      <polygon
        points={`${ptStr(mEF)} ${ptStr(mBF)} ${ptStr(mFG)}`}
        fill="none"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Aresta inferior visível mCD - mCG */}
      <line x1={mCD[0]} y1={mCD[1]} x2={mCG[0]} y2={mCG[1]} stroke="#111111" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export const UFPR2027_DIAGRAMS = {
  ufpr2027Q01: <Ufpr2027Q01 />,
  ufpr2027Q10: <Ufpr2027Q10 />,
  ufpr2027Q26: <Ufpr2027Q26 />,
  ufpr2027Q28: <Ufpr2027Q28 />,
  ufpr2027Q30: <Ufpr2027Q30 />,
  ufpr2027Q31: <Ufpr2027Q31 />,
  ufpr2027Q37: <Ufpr2027Q37 />,
  ufpr2027Q43: <Ufpr2027Q43 />,
  ufpr2027Q44: <Ufpr2027Q44 />,
};
