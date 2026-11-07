import React from 'react';
import '../enhanced-study-sheets.css';

const IMAGE_ROOT = '/images/study-sheets';

function EnhancedDefs({ id, color = '#4f8f76' }) {
  return <defs><marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill={color} /></marker><filter id={`${id}-soft-shadow`} x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#40334b" floodOpacity=".16" /></filter></defs>;
}

function SvgLabel({ x, y, w, text, leader, small = false }) {
  return <g className="enhanced-callout"><path d={leader} className="enhanced-leader" /><rect x={x} y={y} width={w} height={small ? 31 : 36} rx="9" className="enhanced-label-bg" /><text x={x + 12} y={y + (small ? 21 : 24)} className={small ? 'enhanced-small' : 'enhanced-label'}>{text}</text></g>;
}

function NumberBadge({ x, y, n, to, tone = 'purple' }) {
  return <g className={`enhanced-number-badge ${tone}`}><path d={`M${x} ${y}L${to[0]} ${to[1]}`} /><circle cx={x} cy={y} r="20" /><text x={x} y={y + 1} textAnchor="middle" dominantBaseline="central">{n}</text></g>;
}

export function EnhancedCellMap() {
  return <svg className="enhanced-sheet-svg" viewBox="0 0 1376 768" role="img" aria-labelledby="enhanced-cell-title enhanced-cell-desc">
    <title id="enhanced-cell-title">Célula animal em corte com organelas numeradas</title><desc id="enhanced-cell-desc">Ilustração tridimensional de uma célula animal. Números identificam membrana, citoplasma, núcleo, nucléolo, ribossomos, retículo rugoso, Golgi, lisossomo, mitocôndria, citoesqueleto, centríolos e vacúolo.</desc>
    <EnhancedDefs id="enhanced-cell-arrow" /><image href={`${IMAGE_ROOT}/celula-animal-base.png`} x="0" y="0" width="1376" height="768" />
    <g filter="url(#enhanced-cell-arrow-soft-shadow)">
      <NumberBadge x={315} y={540} n={1} to={[365, 505]} />
      <NumberBadge x={1080} y={590} n={2} to={[970, 555]} tone="green" />
      <NumberBadge x={540} y={150} n={3} to={[575, 215]} />
      <NumberBadge x={720} y={300} n={4} to={[650, 325]} />
      <NumberBadge x={470} y={480} n={5} to={[545, 470]} />
      <NumberBadge x={610} y={560} n={6} to={[640, 495]} />
      <NumberBadge x={1050} y={435} n={7} to={[970, 410]} tone="green" />
      <NumberBadge x={405} y={290} n={8} to={[458, 320]} tone="amber" />
      <NumberBadge x={950} y={180} n={9} to={[895, 255]} tone="coral" />
      <NumberBadge x={920} y={665} n={10} to={[860, 600]} tone="green" />
      <NumberBadge x={420} y={420} n={11} to={[470, 385]} tone="amber" />
      <NumberBadge x={875} y={130} n={12} to={[825, 195]} tone="green" />
    </g>
  </svg>;
}

export function EnhancedMembraneDiagram() {
  return <svg className="enhanced-sheet-svg" viewBox="0 0 1376 768" role="img" aria-labelledby="enhanced-membrane-title enhanced-membrane-desc">
    <title id="enhanced-membrane-title">Membrana plasmática e proteínas de transporte</title><desc id="enhanced-membrane-desc">Bicamada fosfolipídica com difusão simples, canal, carreador e bomba de sódio e potássio. Setas e rótulos SVG indicam os mecanismos.</desc>
    <EnhancedDefs id="enhanced-membrane-green" /><EnhancedDefs id="enhanced-membrane-coral" color="#b9664d" />
    <image href={`${IMAGE_ROOT}/membrana-transportes-base.png`} x="0" y="0" width="1376" height="768" />
    <text x="42" y="55" className="enhanced-compartment">MEIO EXTRACELULAR</text><text x="42" y="724" className="enhanced-compartment">CITOSOL</text>
    <SvgLabel x={510} y={65} w={278} text="bicamada fosfolipídica" leader="M650 101L625 286" />
    <SvgLabel x={900} y={82} w={146} text="glicocálix" leader="M973 118L1000 237" small />
    <g fill="none" stroke="#4f8f76" strokeWidth="4"><path d="M130 196V584" markerStart="url(#enhanced-membrane-green)" markerEnd="url(#enhanced-membrane-green)" /><path d="M310 196V584" markerStart="url(#enhanced-membrane-green)" markerEnd="url(#enhanced-membrane-green)" /><path d="M745 196V584" markerStart="url(#enhanced-membrane-green)" markerEnd="url(#enhanced-membrane-green)" /><path d="M1145 196V584" markerEnd="url(#enhanced-membrane-green)" /></g>
    <path d="M1095 584V196" fill="none" stroke="#b9664d" strokeWidth="4" markerEnd="url(#enhanced-membrane-coral)" />
    <g className="enhanced-ion-label"><text x="130" y="174" textAnchor="middle">O₂ / CO₂</text><text x="310" y="174" textAnchor="middle">íons / água</text><text x="745" y="174" textAnchor="middle">soluto</text><text x="1045" y="174" textAnchor="middle" className="coral">3 Na⁺</text><text x="1210" y="174" textAnchor="middle">2 K⁺</text></g>
    <g className="enhanced-transport-label"><text x="130" y="644" textAnchor="middle">difusão simples</text><text x="310" y="644" textAnchor="middle">canal</text><text x="745" y="644" textAnchor="middle">carreador</text><text x="1120" y="644" textAnchor="middle">bomba Na⁺/K⁺</text><text x="1120" y="676" textAnchor="middle" className="enhanced-small">ATP → ADP + Pi</text></g>
  </svg>;
}

export function EnhancedEnzymeFigure() {
  return <svg className="enhanced-sheet-svg" viewBox="0 0 1376 768" role="img" aria-labelledby="enhanced-enzyme-title enhanced-enzyme-desc">
    <title id="enhanced-enzyme-title">Complexo enzima–substrato</title><desc id="enhanced-enzyme-desc">Ilustração molecular de uma enzima lavanda com um substrato dourado encaixado no sítio ativo.</desc>
    <EnhancedDefs id="enhanced-enzyme-arrow" /><image href={`${IMAGE_ROOT}/enzima-substrato-base.png`} x="0" y="0" width="1376" height="768" />
    <SvgLabel x={80} y={90} w={132} text="enzima" leader="M212 126L405 250" />
    <SvgLabel x={1000} y={110} w={172} text="sítio ativo" leader="M1000 146L815 340" />
    <SvgLabel x={1030} y={535} w={154} text="substrato" leader="M1030 552L790 400" />
    <SvgLabel x={80} y={596} w={294} text="complexo enzima–substrato" leader="M374 612L565 465" small />
  </svg>;
}

export function EnhancedGeneExpressionDiagram() {
  return <svg className="enhanced-sheet-svg" viewBox="0 0 1376 768" role="img" aria-labelledby="enhanced-gene-title enhanced-gene-desc">
    <title id="enhanced-gene-title">Expressão gênica do núcleo ao ribossomo</title><desc id="enhanced-gene-desc">DNA e RNA polimerase no núcleo, RNAm atravessando o poro nuclear e ribossomo com RNAt e polipeptídeo no citosol.</desc>
    <EnhancedDefs id="enhanced-gene-arrow" /><image href={`${IMAGE_ROOT}/expressao-genica-base.png`} x="0" y="0" width="1376" height="768" />
    <text x="48" y="55" className="enhanced-compartment">NÚCLEO</text><text x="1190" y="55" className="enhanced-compartment">CITOSOL</text>
    <SvgLabel x={65} y={135} w={92} text="DNA" leader="M157 171L260 285" small />
    <SvgLabel x={245} y={82} w={190} text="RNA polimerase" leader="M340 118L420 255" small />
    <SvgLabel x={555} y={88} w={172} text="poro nuclear" leader="M641 124L710 335" small />
    <SvgLabel x={615} y={565} w={112} text="RNAm" leader="M727 582L805 455" small />
    <SvgLabel x={945} y={90} w={102} text="RNAt" leader="M996 126L950 285" small />
    <SvgLabel x={1125} y={92} w={180} text="polipeptídeo" leader="M1125 128L1070 250" small />
    <SvgLabel x={1075} y={594} w={158} text="ribossomo" leader="M1154 594L1110 520" />
    <g fill="none" stroke="#4f8f76" strokeWidth="3"><path d="M225 686H525" markerEnd="url(#enhanced-gene-arrow)" /><path d="M875 686H1240" markerEnd="url(#enhanced-gene-arrow)" /></g>
    <text x="375" y="724" textAnchor="middle" className="enhanced-process-label">transcrição</text><text x="1055" y="724" textAnchor="middle" className="enhanced-process-label">tradução</text>
  </svg>;
}
