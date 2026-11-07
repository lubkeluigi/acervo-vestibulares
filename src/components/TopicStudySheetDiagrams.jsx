import React from 'react';

const ArrowDefs = ({ id = 'topic-arrow', color = '#527e6c' }) => <defs>
  <marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill={color} /></marker>
</defs>;

function DiagramBadge({ x, y, children, tone = 'purple' }) {
  return <g transform={`translate(${x} ${y})`} className={`topic-diagram-badge ${tone}`}><circle r="14" /><text textAnchor="middle" dominantBaseline="central">{children}</text></g>;
}

export function StudySheetArtwork({ type }) {
  const title =
    type === 'membrane' ? 'Membrana e transportes' :
    type === 'biomolecules' ? 'Biomoléculas e enzimas' :
    type === 'bioenergetics' ? 'Bioenergética: fotossíntese e respiração' :
    type === 'endocrine' ? 'Sistema endócrino e regulação hormonal' :
    type === 'nervous' ? 'Tecido nervoso e células da glia' :
    type === 'ecology' ? 'Ecologia: teias tróficas e ciclos' :
    type === 'botany' ? 'Botânica: ciclos e fisiologia vegetal' :
    type === 'parasitology' ? 'Parasitologia médica e endemias' :
    type === 'cell' ? 'Célula eucariota e organelas' :
    'DNA, RNA e expressão gênica';
  return <svg className="study-sheet-artwork" viewBox="0 0 280 175" role="img" aria-label={title}>
    <title>{title}</title>
    <ArrowDefs id={`art-${type}-arrow`} />
    {type === 'cell' ? <>
      <rect x="12" y="12" width="256" height="151" rx="25" fill="#fcf9fd" />
      <circle cx="140" cy="88" r="62" fill="#f4edfa" stroke="#7051a5" strokeWidth="1.8" />
      <circle cx="120" cy="85" r="28" fill="#e8d9fa" stroke="#7051a5" strokeWidth="1.5" />
      <circle cx="114" cy="82" r="10" fill="#7051a5" />
      <rect x="156" y="60" width="30" height="20" rx="5" fill="#fdeceb" stroke="#d45a55" strokeWidth="1.2" />
      <path d="M152 105c12-6 24 6 36 0" stroke="#3687be" strokeWidth="2.5" strokeLinecap="round" />
      <text x="140" y="34" textAnchor="middle" className="art-kicker" fill="#7051a5">ULTRAESTRUTURA CELULAR</text>
      <text x="140" y="146" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#7051a5">RER → GOLGI → LISOSSOMOS</text>
    </> : type === 'botany' ? <>
      <rect x="12" y="12" width="256" height="151" rx="25" fill="#f2faf4" />
      <path d="M140 148V60" stroke="#3b8d5a" strokeWidth="3" strokeLinecap="round" />
      <path d="M140 95c24-20 45-6 40 18-18 6-36-6-40-18Z" fill="#a4d7b5" stroke="#3b8d5a" strokeWidth="1.5" />
      <path d="M140 120c-24-20-45-6-40 18 18 6 36-6 40-18Z" fill="#a4d7b5" stroke="#3b8d5a" strokeWidth="1.5" />
      <circle cx="140" cy="50" r="14" fill="#fbe893" stroke="#c38822" strokeWidth="1.5" />
      <text x="140" y="34" textAnchor="middle" className="art-kicker" fill="#3b8d5a">CICLOS & FISIOLOGIA</text>
      <text x="140" y="146" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#1f6137">XILEMA (DIXON) · FLOEMA (MÜNCH)</text>
    </> : type === 'parasitology' ? <>
      <rect x="12" y="12" width="256" height="151" rx="25" fill="#fdf7f7" />
      <circle cx="80" cy="85" r="26" fill="#fde4e1" stroke="#d45a55" strokeWidth="1.5" />
      <text x="80" y="89" textAnchor="middle" fontSize="10" fontWeight="700" fill="#d45a55">VETOR</text>
      <path d="M112 85h54" stroke="#d45a55" strokeWidth="2.5" markerEnd={`url(#art-${type}-arrow)`} />
      <circle cx="200" cy="85" r="26" fill="#def3ec" stroke="#2c867c" strokeWidth="1.5" />
      <text x="200" y="89" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2c867c">HOMEM</text>
      <text x="140" y="34" textAnchor="middle" className="art-kicker" fill="#d45a55">PARASITOLOGIA MÉDICA</text>
      <text x="140" y="146" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#a83c37">CHAGAS · MALÁRIA · TENÍASE</text>
    </> : type === 'bioenergetics' ? <>
      <rect x="12" y="12" width="256" height="151" rx="25" fill="#f4faf5" />
      <circle cx="56" cy="48" r="16" fill="#f9d57a" stroke="#c38822" strokeWidth="1.5" />
      <rect x="36" y="80" width="94" height="66" rx="14" fill="#dff2e5" stroke="#3b8d5a" strokeWidth="1.6" />
      <text x="83" y="103" textAnchor="middle" className="art-title" fill="#1f6137" fontSize="12" fontWeight="700">CLORO</text>
      <text x="83" y="117" textAnchor="middle" className="art-kicker" fill="#1f6137">PLASTO</text>
      <text x="83" y="136" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3b8d5a">O₂ + ATP</text>
      <path d="M136 102h18" stroke="#7051a5" strokeWidth="2.5" markerEnd={`url(#art-${type}-arrow)`} />
      <rect x="160" y="70" width="96" height="76" rx="14" fill="#fdeceb" stroke="#d45a55" strokeWidth="1.6" />
      <text x="208" y="96" textAnchor="middle" className="art-title" fill="#a83c37" fontSize="12" fontWeight="700">MITOCÔN</text>
      <text x="208" y="110" textAnchor="middle" className="art-kicker" fill="#a83c37">DRIA</text>
      <text x="208" y="131" textAnchor="middle" fontSize="10" fontWeight="700" fill="#d45a55">~28 ATP</text>
      <text x="140" y="36" textAnchor="middle" className="art-kicker" fill="#7051a5">FOTOSSÍNTESE × RESPIRAÇÃO</text>
    </> : type === 'endocrine' ? <>
      <rect x="12" y="12" width="256" height="151" rx="25" fill="#fcf9fd" />
      <rect x="74" y="24" width="132" height="34" rx="10" fill="#e8d9fa" stroke="#7051a5" strokeWidth="1.5" />
      <text x="140" y="45" textAnchor="middle" className="art-title" fontSize="11" fontWeight="700" fill="#7051a5">HIPOTÁLAMO</text>
      <path d="M110 58v26" stroke="#7051a5" strokeWidth="2" markerEnd={`url(#art-${type}-arrow)`} />
      <path d="M170 58v26" stroke="#dc6260" strokeWidth="2" markerEnd={`url(#art-${type}-arrow)`} />
      <rect x="42" y="88" width="94" height="64" rx="12" fill="#dff0fa" stroke="#3687be" strokeWidth="1.5" />
      <text x="89" y="112" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3687be">INSULINA</text>
      <text x="89" y="130" textAnchor="middle" fontSize="9.5" fill="#555">glicose ↓ sangue</text>
      <rect x="148" y="88" width="94" height="64" rx="12" fill="#fde4e1" stroke="#dc6260" strokeWidth="1.5" />
      <text x="195" y="112" textAnchor="middle" fontSize="11" fontWeight="700" fill="#dc6260">GLUCAGON</text>
      <text x="195" y="130" textAnchor="middle" fontSize="9.5" fill="#555">glicose ↑ sangue</text>
    </> : type === 'nervous' ? <>
      <rect x="12" y="12" width="256" height="151" rx="25" fill="#f7f5fa" />
      <circle cx="68" cy="88" r="24" fill="#e8daf6" stroke="#7352a4" strokeWidth="2" />
      <circle cx="68" cy="88" r="9" fill="#7352a4" />
      <path d="M92 88h132" stroke="#6e5b50" strokeWidth="6" strokeLinecap="round" />
      {[108, 142, 176].map((x) => (
        <rect key={x} x={x} y="74" width="26" height="28" rx="8" fill="#b8d6a9" stroke="#1c1d22" strokeWidth="1.2" />
      ))}
      <circle cx="236" cy="88" r="9" fill="#d45a55" />
      <text x="140" y="38" textAnchor="middle" className="art-kicker" fill="#7352a4">IMPULSO SALTATÓRIO</text>
      <text x="140" y="145" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#4a75b9">OLIGODENDRÓCITOS & SCHWANN</text>
    </> : type === 'ecology' ? <>
      <rect x="12" y="12" width="256" height="151" rx="25" fill="#f3faf6" />
      <circle cx="46" cy="42" r="14" fill="#f9d57a" stroke="#b58a37" strokeWidth="1.4" />
      <rect x="30" y="86" width="56" height="56" rx="10" fill="#bbd9bf" stroke="#418767" strokeWidth="1.4" />
      <text x="58" y="118" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#1f6137">PROD</text>
      <path d="M90 114h18" stroke="#418767" strokeWidth="2.5" markerEnd={`url(#art-${type}-arrow)`} />
      <rect x="112" y="92" width="54" height="50" rx="10" fill="#bdcce6" stroke="#3e86ac" strokeWidth="1.4" />
      <text x="139" y="121" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#245a76">CONS 1º</text>
      <path d="M170 114h18" stroke="#418767" strokeWidth="2.5" markerEnd={`url(#art-${type}-arrow)`} />
      <rect x="192" y="98" width="54" height="44" rx="10" fill="#ebc6bb" stroke="#bd6156" strokeWidth="1.4" />
      <text x="219" y="124" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#8d372e">TOPO</text>
      <text x="140" y="42" textAnchor="middle" className="art-kicker" fill="#418767">TEIA TRÓFICA & PIRÂMIDES</text>
      <text x="140" y="62" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7952a8">PPL = PPB − R · CICLOS</text>
    </> : type === 'membrane' ? <>
      <rect x="12" y="12" width="256" height="151" rx="25" fill="#fbf9fd" />
      <text x="28" y="34" className="art-kicker">EXTERNO</text><text x="28" y="153" className="art-kicker">CITOSOL</text>
      <g stroke="#c5a8d6" strokeWidth="2">{Array.from({ length: 12 }, (_, i) => <g key={i}><circle cx={35 + i * 19} cy="67" r="7" fill="#d9c0e8" /><path d={`M${35 + i * 19} 75l-4 24M${35 + i * 19} 75l5 24`} /><circle cx={35 + i * 19} cy="121" r="7" fill="#d9c0e8" /><path d={`M${35 + i * 19} 113l-4-19M${35 + i * 19} 113l5-19`} /></g>)}</g>
      <rect x="112" y="48" width="43" height="91" rx="18" fill="#8fc8b5" stroke="#477c68" strokeWidth="2" /><rect x="126" y="53" width="15" height="81" rx="7" fill="#fff" />
      <path d="M63 43v89M133 40v94" fill="none" stroke="#527e6c" strokeWidth="2.5" markerStart={`url(#art-${type}-arrow)`} markerEnd={`url(#art-${type}-arrow)`} />
      <path d="M215 137V42" fill="none" stroke="#b9664d" strokeWidth="3" markerEnd={`url(#art-${type}-arrow)`} />
      <rect x="192" y="59" width="47" height="67" rx="20" fill="#f4c1a9" stroke="#b9664d" strokeWidth="2" /><text x="215" y="96" textAnchor="middle" className="art-label">ATP</text>
    </> : type === 'biomolecules' ? <>
      <rect x="12" y="12" width="256" height="151" rx="25" fill="#fafbf7" />
      <g fill="none" stroke="#c5d7ca" strokeWidth="2"><path d="M78 55L128 80M202 55L153 80M78 125L128 98M202 125L153 98" /></g>
      <circle cx="140" cy="89" r="32" fill="#e7d9f0" stroke="#8062a6" strokeWidth="2" /><text x="140" y="86" textAnchor="middle" className="art-title">BIO</text><text x="140" y="99" textAnchor="middle" className="art-kicker">MOLÉCULAS</text>
      {[[54,49,'#f2cf80','C'],[226,49,'#efaa8c','L'],[54,128,'#9dcdb9','P'],[226,128,'#b9a5d2','N']].map(([x,y,color,label]) => <g key={label}><circle cx={x} cy={y} r="25" fill={color} /><text x={x} y={y + 1} textAnchor="middle" dominantBaseline="central" className="art-title">{label}</text></g>)}
      <text x="54" y="83" textAnchor="middle" className="art-kicker">CARBOIDRATOS</text><text x="226" y="83" textAnchor="middle" className="art-kicker">LIPÍDIOS</text><text x="54" y="160" textAnchor="middle" className="art-kicker">PROTEÍNAS</text><text x="226" y="160" textAnchor="middle" className="art-kicker">NUCLEOTÍDEOS</text>
    </> : <>
      <rect x="12" y="12" width="256" height="151" rx="25" fill="#faf9fd" />
      <path d="M39 48C76 22 76 76 112 48S148 22 148 48M39 69C76 43 76 97 112 69S148 43 148 69" fill="none" stroke="#8062a6" strokeWidth="4" strokeLinecap="round" />
      <g stroke="#b9a2cd" strokeWidth="2"><path d="M54 43v20M76 40v24M98 44v20M121 43v21" /></g>
      <path d="M88 88v31h55" fill="none" stroke="#527e6c" strokeWidth="2.5" markerEnd={`url(#art-${type}-arrow)`} />
      <path d="M150 119h83" stroke="#8062a6" strokeWidth="4" strokeLinecap="round" /><g fill="#6d9f89"><circle cx="166" cy="119" r="5" /><circle cx="185" cy="119" r="5" /><circle cx="207" cy="119" r="5" /></g>
      <path d="M178 101c-18-22-48 0-25 15h51c24-16-5-37-26-15Z" fill="#e1b7a0" stroke="#a9644d" strokeWidth="2" />
      <path d="M192 91c13-25 28-18 24-3s14 13 20-2" fill="none" stroke="#c49539" strokeWidth="3" strokeLinecap="round" />
      <text x="37" y="103" className="art-title">DNA</text><text x="151" y="143" className="art-kicker">RNAm</text><text x="205" y="76" className="art-kicker">PROTEÍNA</text>
    </>}
  </svg>;
}

export function MembraneTransportDiagram() {
  const xs = Array.from({ length: 23 }, (_, i) => 48 + i * 30);
  return <svg className="topic-diagram-svg" viewBox="0 0 760 440" role="img" aria-labelledby="membrane-diagram-title membrane-diagram-desc">
    <title id="membrane-diagram-title">Estrutura da membrana e três formas de transporte</title>
    <desc id="membrane-diagram-desc">Bicamada fosfolipídica com difusão simples, canal de transporte facilitado e bomba de sódio e potássio. Setas passivas têm dois sentidos; a bomba exporta três sódios e importa dois potássios com ATP.</desc>
    <ArrowDefs id="membrane-arrow-green" /><ArrowDefs id="membrane-arrow-coral" color="#b9664d" />
    <rect x="1" y="1" width="758" height="438" rx="18" fill="#fdfcff" stroke="#e4ddea" />
    <text x="30" y="39" className="diagram-kicker">MEIO EXTRACELULAR</text><text x="30" y="402" className="diagram-kicker">CITOSOL</text>
    <text x="730" y="39" textAnchor="end" className="diagram-note">mosaico fluido · representação sem escala</text>
    <g className="membrane-bilayer" stroke="#b69ac7" strokeWidth="2">
      {xs.map((x) => <g key={x}><circle cx={x} cy="154" r="10" fill="#dcc7e9" /><path d={`M${x - 3} 164l-4 42M${x + 3} 164l5 42`} /><circle cx={x} cy="267" r="10" fill="#dcc7e9" /><path d={`M${x - 3} 257l-4-39M${x + 3} 257l5-39`} /></g>)}
    </g>
    <g fill="#f2cc75" stroke="#b78b35" strokeWidth="1.4">{[190, 393, 652].map((x) => <path key={x} d={`M${x} 187l8 13-8 13-8-13Z`} />)}</g>
    <path d="M318 135C305 152 307 183 312 206C306 232 307 265 322 286H388C400 262 399 231 392 207C399 178 400 151 385 135Z" fill="#9fd3bf" stroke="#477c68" strokeWidth="3" />
    <path d="M343 143C336 170 338 248 345 278H365C373 245 373 174 365 143Z" fill="#fff" stroke="#6ba58f" strokeWidth="2" />
    <path d="M533 143C516 159 520 189 527 210C518 235 522 270 544 283H604C621 260 616 234 611 210C619 183 616 154 598 141Z" fill="#f2b79c" stroke="#b9664d" strokeWidth="3" />
    <path d="M545 174c18-14 44-14 57 2M544 244c20 13 41 12 58-2" fill="none" stroke="#d38566" strokeWidth="3" strokeLinecap="round" />
    <path d="M138 79V337" fill="none" stroke="#527e6c" strokeWidth="3" markerStart="url(#membrane-arrow-green)" markerEnd="url(#membrane-arrow-green)" />
    <path d="M354 78V337" fill="none" stroke="#527e6c" strokeWidth="3" markerStart="url(#membrane-arrow-green)" markerEnd="url(#membrane-arrow-green)" />
    <path d="M558 332V79" fill="none" stroke="#b9664d" strokeWidth="3" markerEnd="url(#membrane-arrow-coral)" />
    <path d="M590 79V332" fill="none" stroke="#527e6c" strokeWidth="3" markerEnd="url(#membrane-arrow-green)" />
    <g className="diagram-transport-label"><text x="138" y="66" textAnchor="middle">O₂ / CO₂</text><text x="354" y="66" textAnchor="middle">íons / água</text><text x="540" y="65" textAnchor="middle" className="coral">3 Na⁺</text><text x="623" y="65" textAnchor="middle">2 K⁺</text></g>
    <g className="diagram-small"><text x="138" y="365" textAnchor="middle">difusão simples</text><text x="354" y="365" textAnchor="middle">difusão facilitada</text><text x="575" y="365" textAnchor="middle">transporte ativo primário</text><text x="565" y="319" textAnchor="middle" className="diagram-strong">ATP → ADP + Pi</text></g>
    <DiagramBadge x={43} y={122}>1</DiagramBadge><DiagramBadge x={309} y={111} tone="green">2</DiagramBadge><DiagramBadge x={514} y={111} tone="coral">3</DiagramBadge>
    <g className="diagram-note"><text x="48" y="118">1 · bicamada</text><text x="306" y="302">2 · proteína</text><text x="516" y="302">3 · bomba</text></g>
  </svg>;
}

export function BiomoleculeMapDiagram() {
  const cards = [
    { x: 26, y: 35, color: '#fbf2d9', stroke: '#d3aa4c', badge: 'C', title: 'CARBOIDRATOS', lines: ['monossacarídeos → polissacarídeos', 'glicose · amido · glicogênio', 'celulose · quitina'] },
    { x: 434, y: 35, color: '#fff0e8', stroke: '#ce8869', badge: 'L', title: 'LIPÍDIOS', lines: ['triacilgliceróis · fosfolipídios', 'esteroides · ceras', 'reserva · membrana · sinalização'] },
    { x: 26, y: 278, color: '#edf7f1', stroke: '#6fa58c', badge: 'P', title: 'PROTEÍNAS', lines: ['aminoácidos → polipeptídeos', 'enzimas · transporte · defesa', 'estrutura determina função'] },
    { x: 434, y: 278, color: '#f3edf9', stroke: '#997bb3', badge: 'N', title: 'ÁCIDOS NUCLEICOS', lines: ['nucleotídeos → DNA e RNA', 'informação · expressão', 'ATP também é um nucleotídeo com função energética'] },
  ];
  return <svg className="topic-diagram-svg" viewBox="0 0 760 460" role="img" aria-labelledby="biomolecule-map-title biomolecule-map-desc">
    <title id="biomolecule-map-title">Mapa das quatro grandes classes de biomoléculas</title><desc id="biomolecule-map-desc">Carboidratos, lipídios, proteínas e ácidos nucleicos conectados a um centro comum, com suas unidades, exemplos e funções.</desc>
    <rect x="1" y="1" width="758" height="458" rx="18" fill="#fdfdfb" stroke="#dfe5dc" />
    <g fill="none" stroke="#c8d5ca" strokeWidth="3" strokeDasharray="6 7"><path d="M315 166L354 202M445 166L407 202M315 294L354 258M445 294L407 258" /></g>
    <circle cx="380" cy="230" r="69" fill="#e8ddf0" stroke="#8062a6" strokeWidth="3" /><circle cx="380" cy="230" r="57" fill="#f9f5fc" stroke="#c5afd5" />
    <text x="380" y="220" textAnchor="middle" className="diagram-center-title">BIO</text><text x="380" y="241" textAnchor="middle" className="diagram-center-title">MOLÉCULAS</text><text x="380" y="261" textAnchor="middle" className="diagram-note">estrutura → função</text>
    {cards.map((card) => <g key={card.badge}>
      <rect x={card.x} y={card.y} width="300" height="147" rx="16" fill={card.color} stroke={card.stroke} strokeWidth="2" />
      <circle cx={card.x + 35} cy={card.y + 34} r="20" fill={card.stroke} /><text x={card.x + 35} y={card.y + 35} textAnchor="middle" dominantBaseline="central" className="diagram-badge-text">{card.badge}</text>
      <text x={card.x + 66} y={card.y + 39} className="diagram-card-title">{card.title}</text>
      {card.lines.map((line, i) => <text key={line} x={card.x + 22} y={card.y + 76 + i * 24} className={i === 0 ? 'diagram-strong' : 'diagram-small'}>{line}</text>)}
    </g>)}
  </svg>;
}

export function EnzymeEnergyDiagram() {
  return <svg className="topic-diagram-svg" viewBox="0 0 760 390" role="img" aria-labelledby="enzyme-energy-title enzyme-energy-desc">
    <title id="enzyme-energy-title">Energia de ativação com e sem enzima</title><desc id="enzyme-energy-desc">Gráfico de energia livre pelo progresso de uma reação exergônica. A curva com enzima tem pico menor; reagentes, produtos e delta G permanecem nos mesmos níveis.</desc>
    <ArrowDefs id="enzyme-arrow" color="#8062a6" />
    <rect x="1" y="1" width="758" height="388" rx="18" fill="#fdfcff" stroke="#e3dce8" />
    <path d="M91 326V38M91 326H716" fill="none" stroke="#718078" strokeWidth="2" markerEnd="url(#enzyme-arrow)" />
    <text x="32" y="195" transform="rotate(-90 32 195)" textAnchor="middle" className="diagram-kicker">ENERGIA LIVRE</text><text x="410" y="366" textAnchor="middle" className="diagram-kicker">PROGRESSO DA REAÇÃO</text>
    <path d="M118 229C213 229 263 67 357 67C455 67 510 278 680 278" fill="none" stroke="#9a78b5" strokeWidth="4" strokeLinecap="round" />
    <path d="M118 229C224 229 278 153 366 153C457 153 533 278 680 278" fill="none" stroke="#4d9378" strokeWidth="4" strokeLinecap="round" />
    <g stroke="#b9c4bc" strokeDasharray="5 6"><path d="M112 229H682M112 278H682M357 67H429M366 153H438" /></g>
    <path d="M334 221V76" stroke="#9a78b5" strokeWidth="2" markerStart="url(#enzyme-arrow)" markerEnd="url(#enzyme-arrow)" /><path d="M405 221V161" stroke="#4d9378" strokeWidth="2" markerStart="url(#enzyme-arrow)" markerEnd="url(#enzyme-arrow)" />
    <text x="449" y="113" className="diagram-small">Eₐ sem enzima</text><text x="424" y="190" className="diagram-small green">Eₐ com enzima</text>
    <path d="M648 234V273" stroke="#c18b38" strokeWidth="2" markerStart="url(#enzyme-arrow)" markerEnd="url(#enzyme-arrow)" /><text x="618" y="220" textAnchor="middle" className="diagram-small amber">ΔG inalterado</text>
    <text x="111" y="250" className="diagram-small">reagentes</text><text x="650" y="301" textAnchor="end" className="diagram-small">produtos</text>
    <g><path d="M502 40h34" stroke="#9a78b5" strokeWidth="4" /><text x="545" y="45" className="diagram-small">sem enzima</text><path d="M502 62h34" stroke="#4d9378" strokeWidth="4" /><text x="545" y="67" className="diagram-small">com enzima</text></g>
  </svg>;
}

export function GeneExpressionDiagram() {
  return <svg className="topic-diagram-svg" viewBox="0 0 760 470" role="img" aria-labelledby="gene-expression-title gene-expression-desc">
    <title id="gene-expression-title">Replicação, transcrição, processamento de RNA e tradução</title><desc id="gene-expression-desc">No núcleo, DNA se replica e origina pré-RNAm, que pode ser processado. RNAm maduro sai ao citoplasma, onde ribossomo e RNAt produzem uma cadeia polipeptídica.</desc>
    <ArrowDefs id="gene-arrow" /><ArrowDefs id="gene-purple-arrow" color="#8062a6" />
    <rect x="1" y="1" width="758" height="468" rx="18" fill="#fdfcff" stroke="#e2dce7" />
    <rect x="22" y="46" width="331" height="393" rx="38" fill="#f5eff9" stroke="#bca6cd" strokeWidth="2" /><path d="M354 62V423" stroke="#8f73a5" strokeWidth="4" strokeDasharray="10 8" />
    <text x="42" y="34" className="diagram-kicker">NÚCLEO · CÉLULA EUCARIOTA</text><text x="385" y="34" className="diagram-kicker">CITOSOL</text>
    <path d="M62 116C103 78 145 153 187 116S270 80 310 116M62 151C103 113 145 188 187 151S270 115 310 151" fill="none" stroke="#8062a6" strokeWidth="5" strokeLinecap="round" />
    <g stroke="#b59ac8" strokeWidth="2"><path d="M82 117v28M111 112v34M142 119v29M173 117v28M205 115v32M237 115v31M269 113v32M296 115v29" /></g>
    <text x="63" y="89" className="diagram-card-title">DNA</text>
    <path d="M74 178C34 160 31 106 57 89" fill="none" stroke="#8062a6" strokeWidth="2" markerEnd="url(#gene-purple-arrow)" /><text x="31" y="199" className="diagram-small">replicação</text>
    <path d="M188 169V215" stroke="#527e6c" strokeWidth="2.5" markerEnd="url(#gene-arrow)" /><text x="203" y="196" className="diagram-small green">transcrição</text>
    <path d="M74 242H290" stroke="#8062a6" strokeWidth="4" strokeLinecap="round" /><g fill="#9fcdb9" stroke="#4e8b70"><rect x="85" y="230" width="53" height="23" rx="5" /><rect x="171" y="230" width="46" height="23" rx="5" /><rect x="249" y="230" width="33" height="23" rx="5" /></g><path d="M139 241c13-35 20-35 32 0M218 241c12-35 20-35 31 0" fill="none" stroke="#b68b3e" strokeWidth="2" />
    <text x="74" y="276" className="diagram-small">pré-RNAm · éxons e íntrons</text>
    <path d="M188 288V323" stroke="#527e6c" strokeWidth="2.5" markerEnd="url(#gene-arrow)" /><text x="204" y="311" className="diagram-small green">processamento</text>
    <path d="M84 351H289" stroke="#4d9378" strokeWidth="4" strokeLinecap="round" /><g fill="#9fcdb9"><rect x="91" y="341" width="62" height="20" rx="4" /><rect x="164" y="341" width="57" height="20" rx="4" /><rect x="232" y="341" width="48" height="20" rx="4" /></g><circle cx="75" cy="351" r="8" fill="#d5a44b" /><path d="M290 351h24" stroke="#d5a44b" strokeWidth="4" strokeDasharray="3 4" />
    <text x="83" y="383" className="diagram-small">RNAm maduro · cap 5′ + poli-A</text>
    <path d="M318 351H422" stroke="#527e6c" strokeWidth="2.5" markerEnd="url(#gene-arrow)" /><rect x="346" y="333" width="16" height="37" rx="7" fill="#fdfcff" stroke="#8f73a5" strokeWidth="3" />
    <path d="M410 313H697" stroke="#4d9378" strokeWidth="4" strokeLinecap="round" /><g fill="#9fcdb9"><circle cx="449" cy="313" r="5" /><circle cx="486" cy="313" r="5" /><circle cx="523" cy="313" r="5" /><circle cx="560" cy="313" r="5" /><circle cx="597" cy="313" r="5" /><circle cx="634" cy="313" r="5" /></g>
    <path d="M467 288C446 261 474 244 505 250H580C615 250 631 277 610 294C586 309 491 308 467 288Z" fill="#edbda7" stroke="#ae664e" strokeWidth="3" /><path d="M491 327C512 347 585 349 605 326C589 311 508 311 491 327Z" fill="#f3d1c0" stroke="#ae664e" strokeWidth="3" />
    <path d="M537 243v-35l-14-15M537 208l15-15" fill="none" stroke="#c49339" strokeWidth="4" strokeLinecap="round" /><circle cx="537" cy="186" r="8" fill="#e5bd68" />
    <path d="M609 253C638 220 655 264 673 232S713 245 704 204" fill="none" stroke="#c49339" strokeWidth="4" strokeLinecap="round" /><g fill="#d6a64e"><circle cx="626" cy="243" r="5" /><circle cx="653" cy="250" r="5" /><circle cx="678" cy="229" r="5" /><circle cx="702" cy="215" r="5" /></g>
    <text x="470" y="380" className="diagram-card-title">RIBOSSOMO + RNAt</text><text x="606" y="180" className="diagram-small amber">cadeia polipeptídica</text><path d="M520 365V401H635" fill="none" stroke="#527e6c" strokeWidth="2.5" markerEnd="url(#gene-arrow)" /><text x="468" y="426" className="diagram-small green">tradução: códons → aminoácidos</text>
  </svg>;
}

export function DnaReplicationDiagram() {
  return <svg className="topic-diagram-svg replication-diagram" viewBox="0 0 760 310" role="img" aria-labelledby="replication-title replication-desc">
    <title id="replication-title">Replicação semiconservativa do DNA</title><desc id="replication-desc">Uma molécula parental com duas fitas roxas origina duas moléculas filhas, cada uma com uma fita parental roxa e uma fita nova verde.</desc>
    <ArrowDefs id="replication-arrow" />
    <rect x="1" y="1" width="758" height="308" rx="18" fill="#fdfcff" stroke="#e2dce7" />
    <text x="380" y="35" textAnchor="middle" className="diagram-kicker">DNA PARENTAL</text>
    <path d="M175 65H585M175 96H585" stroke="#8062a6" strokeWidth="7" strokeLinecap="round" /><g stroke="#c5b1d4" strokeWidth="2">{Array.from({ length: 12 }, (_, i) => <path key={i} d={`M${197 + i * 32} 67V94`} />)}</g>
    <path d="M380 112V151" stroke="#527e6c" strokeWidth="3" markerEnd="url(#replication-arrow)" />
    <text x="380" y="178" textAnchor="middle" className="diagram-small green">separação das fitas + síntese complementar 5′ → 3′</text>
    <g><path d="M56 218H339M56 249H339M421 218H704M421 249H704" strokeLinecap="round" strokeWidth="7" /><path d="M56 218H339M421 218H704" stroke="#8062a6" strokeWidth="7" strokeLinecap="round" /><path d="M56 249H339M421 249H704" stroke="#4d9378" strokeWidth="7" strokeLinecap="round" /></g>
    <text x="197" y="282" textAnchor="middle" className="diagram-small">DNA filho 1</text><text x="562" y="282" textAnchor="middle" className="diagram-small">DNA filho 2</text>
    <path d="M35 62h30" stroke="#8062a6" strokeWidth="6" /><text x="74" y="67" className="diagram-small">fita parental</text><path d="M35 88h30" stroke="#4d9378" strokeWidth="6" /><text x="74" y="93" className="diagram-small">fita nova</text>
  </svg>;
}

export function EnhancedBioenergeticsDiagram() {
  return (
    <svg className="topic-diagram-svg" viewBox="0 0 760 440" role="img" aria-labelledby="bioenergetics-title bioenergetics-desc">
      <title id="bioenergetics-title">Bioenergética Celular: Fotossíntese e Respiração Conectadas</title>
      <desc id="bioenergetics-desc">Cloroplasto realiza fotossíntese com água, luz e CO2 gerando O2 e glicose; mitocôndria consome O2 e glicose gerando CO2, água e cerca de 30 ATP por fosforilação oxidativa.</desc>
      <ArrowDefs id="bio-arrow-green" color="#3b8d5a" />
      <ArrowDefs id="bio-arrow-coral" color="#d45a55" />
      <ArrowDefs id="bio-arrow-purple" color="#7051a5" />
      <rect x="1" y="1" width="758" height="438" rx="18" fill="#fdfdfb" stroke="#e2dce7" />

      {/* CLOROPLASTO */}
      <rect x="24" y="32" width="310" height="376" rx="22" fill="#f3faf6" stroke="#3b8d5a" strokeWidth="2" />
      <text x="44" y="64" className="diagram-kicker" fill="#2d6a45">CLOROPLASTO · FOTOSSÍNTESE</text>
      
      {/* Tilacoide / Fase Clara */}
      <rect x="42" y="86" width="274" height="136" rx="14" fill="#ffffff" stroke="#9ecdb3" strokeWidth="1.5" />
      <text x="58" y="112" className="diagram-card-title" fill="#2d6a45">ETAPA FOTOQUÍMICA (TILACÓIDES)</text>
      <text x="58" y="134" className="diagram-small">• Absorção de luz por pigmentos (clorofila).</text>
      <text x="58" y="154" className="diagram-small">• Fotólise da água: quebra de H₂O e liberação de O₂.</text>
      <text x="58" y="174" className="diagram-small">• Fotofosforilação acíclica/cíclica: síntese de ATP e NADPH.</text>
      <g fill="#2d6a45">
        <circle cx="270" cy="195" r="12" fill="#dff2e5" stroke="#3b8d5a" strokeWidth="1.5" />
        <text x="270" y="199" textAnchor="middle" fontSize="10" fontWeight="700">O₂</text>
      </g>

      {/* Estroma / Fase Química */}
      <rect x="42" y="242" width="274" height="150" rx="14" fill="#ffffff" stroke="#9ecdb3" strokeWidth="1.5" />
      <text x="58" y="268" className="diagram-card-title" fill="#2d6a45">ETAPA ENZIMÁTICA (ESTROMA)</text>
      <text x="58" y="290" className="diagram-small">• Ciclo de Calvin-Benson: fixação de CO₂ pela Rubisco.</text>
      <text x="58" y="310" className="diagram-small">• Consome ATP e NADPH produzidos na etapa clara.</text>
      <text x="58" y="330" className="diagram-small">• Produção de trioses fosfato que formam glicose e amido.</text>
      <text x="58" y="360" className="diagram-strong" fill="#2d6a45">Saldo líquido: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂</text>

      {/* CONEXÃO CENTRAL DE MATÉRIA */}
      <g stroke="#7051a5" strokeWidth="2.5" fill="none">
        <path d="M334 140h92" markerEnd="url(#bio-arrow-purple)" />
        <path d="M426 310h-92" markerEnd="url(#bio-arrow-purple)" />
      </g>
      <text x="380" y="126" textAnchor="middle" className="diagram-small" fill="#7051a5" fontWeight="700">O₂ + Glicose</text>
      <text x="380" y="332" textAnchor="middle" className="diagram-small" fill="#7051a5" fontWeight="700">CO₂ + H₂O</text>

      {/* MITOCÔNDRIA */}
      <rect x="426" y="32" width="310" height="376" rx="22" fill="#fef7f6" stroke="#d45a55" strokeWidth="2" />
      <text x="446" y="64" className="diagram-kicker" fill="#a83c37">MITOCÔNDRIA · RESPIRAÇÃO AERÓBIA</text>

      {/* Glicólise (Citosol) & Krebs */}
      <rect x="444" y="86" width="274" height="136" rx="14" fill="#ffffff" stroke="#eab5b2" strokeWidth="1.5" />
      <text x="460" y="112" className="diagram-card-title" fill="#a83c37">GLICÓLISE & CICLO DE KREBS</text>
      <text x="460" y="134" className="diagram-small">• Glicólise (citosol): 1 Glicose → 2 Piruvatos (saldo 2 ATP).</text>
      <text x="460" y="154" className="diagram-small">• Matriz mitocondrial: oxidação do piruvato a acetil-CoA.</text>
      <text x="460" y="174" className="diagram-small">• Ciclo do Ácido Cítrico: liberação de CO₂, geração de NADH e FADH₂.</text>
      <g fill="#a83c37">
        <circle cx="672" cy="195" r="12" fill="#fdeceb" stroke="#d45a55" strokeWidth="1.5" />
        <text x="672" y="199" textAnchor="middle" fontSize="10" fontWeight="700">CO₂</text>
      </g>

      {/* Fosforilação Oxidativa */}
      <rect x="444" y="242" width="274" height="150" rx="14" fill="#ffffff" stroke="#eab5b2" strokeWidth="1.5" />
      <text x="460" y="268" className="diagram-card-title" fill="#a83c37">CADEIA RESPIRATÓRIA (CRISTAS)</text>
      <text x="460" y="290" className="diagram-small">• Transporte de elétrons por citocromos.</text>
      <text x="460" y="310" className="diagram-small">• O₂ atua como aceptor final de elétrons e H⁺ formando H₂O.</text>
      <text x="460" y="330" className="diagram-small">• Gradiente de prótons aciona a ATP-sintase por quimiosmose.</text>
      <text x="460" y="360" className="diagram-strong" fill="#a83c37">Rendimento: ~30 a 32 ATP por glicose oxidada</text>
    </svg>
  );
}

export function EnhancedEndocrineDiagram() {
  return (
    <svg className="topic-diagram-svg" viewBox="0 0 760 440" role="img" aria-labelledby="endocrine-title endocrine-desc">
      <title id="endocrine-title">Regulação Hormonal e Eixo Hipotálamo-Hipófise</title>
      <desc id="endocrine-desc">Hipotálamo controla adeno-hipófise e neuro-hipófise; controle da glicemia pelo pâncreas com insulina e glucagon.</desc>
      <ArrowDefs id="endo-arrow-violet" color="#7051a5" />
      <ArrowDefs id="endo-arrow-coral" color="#d45a55" />
      <ArrowDefs id="endo-arrow-blue" color="#3687be" />
      <rect x="1" y="1" width="758" height="438" rx="18" fill="#fdfdfb" stroke="#e2dce7" />

      {/* BLOCO 1: EIXO HIPOTÁLAMO-HIPÓFISE */}
      <rect x="24" y="26" width="712" height="190" rx="16" fill="#fcf9fd" stroke="#bda4d6" strokeWidth="1.5" />
      <text x="44" y="52" className="diagram-kicker" fill="#583d7a">EIXO HIPOTÁLAMO-HIPÓFISE & RETROALIMENTAÇÃO NEGATIVA</text>

      {/* Hipotálamo */}
      <rect x="44" y="68" width="180" height="132" rx="12" fill="#ffffff" stroke="#7051a5" strokeWidth="1.4" />
      <text x="58" y="94" className="diagram-card-title" fill="#7051a5">HIPOTÁLAMO</text>
      <text x="58" y="118" className="diagram-small">• Integra sistema nervoso e endócrino.</text>
      <text x="58" y="136" className="diagram-small">• Secreta fatores liberadores (TRH, GnRH, CRH).</text>
      <text x="58" y="156" className="diagram-small">• Produz ADH e Ocitocina.</text>

      {/* Seta Hipotálamo -> Adeno */}
      <path d="M224 116h40" stroke="#7051a5" strokeWidth="2.5" markerEnd="url(#endo-arrow-violet)" />

      {/* Adeno-hipófise */}
      <rect x="268" y="68" width="220" height="132" rx="12" fill="#ffffff" stroke="#3687be" strokeWidth="1.4" />
      <text x="282" y="94" className="diagram-card-title" fill="#3687be">ADENO-HIPÓFISE (ANTERIOR)</text>
      <text x="282" y="118" className="diagram-small">• Glândula epitelial verdadeira: produz e secreta hormônios tróficos.</text>
      <text x="282" y="146" className="diagram-strong" fill="#3687be">• TSH, ACTH, FSH, LH, GH e Prolactina.</text>
      <text x="282" y="172" className="diagram-small">• Sob feedback negativo dos hormônios periféricos.</text>

      {/* Neuro-hipófise */}
      <rect x="508" y="68" width="210" height="132" rx="12" fill="#ffffff" stroke="#d45a55" strokeWidth="1.4" />
      <text x="522" y="94" className="diagram-card-title" fill="#d45a55">NEURO-HIPÓFISE (POSTERIOR)</text>
      <text x="522" y="118" className="diagram-small">• Extensão de tecido nervoso: NÃO sintetiza hormônios!</text>
      <text x="522" y="146" className="diagram-strong" fill="#d45a55">• Armazena e libera ADH (vasopressina) e Ocitocina.</text>
      <text x="522" y="172" className="diagram-small">• Liberação estimulada por impulsos axonais hipotalâmicos.</text>

      {/* BLOCO 2: ALÇA PANCREÁTICA DA GLICEMIA */}
      <rect x="24" y="232" width="712" height="182" rx="16" fill="#fdfbf5" stroke="#dfc892" strokeWidth="1.5" />
      <text x="44" y="258" className="diagram-kicker" fill="#8d6824">CONTROLE DA GLICEMIA: PÂNCREAS ENDÓCRINO (ILHOTAS DE LANGERHANS)</text>

      {/* Células Beta e Insulina */}
      <rect x="44" y="274" width="320" height="124" rx="12" fill="#ffffff" stroke="#3687be" strokeWidth="1.4" />
      <text x="58" y="300" className="diagram-card-title" fill="#3687be">CÉLULAS β → INSULINA (HIPOGLICEMIANTE)</text>
      <text x="58" y="322" className="diagram-small">• Estímulo: elevação da glicose sanguínea após refeição.</text>
      <text x="58" y="342" className="diagram-small">• Ação: estimula captação celular de glicose (GLUT-4) e glicogênese hepática e muscular.</text>
      <text x="58" y="372" className="diagram-strong" fill="#3687be">Resultado: Redução da glicemia de volta à faixa basal (~90 mg/dL).</text>

      {/* Células Alfa e Glucagon */}
      <rect x="384" y="274" width="334" height="124" rx="12" fill="#ffffff" stroke="#d45a55" strokeWidth="1.4" />
      <text x="398" y="300" className="diagram-card-title" fill="#d45a55">CÉLULAS α → GLUCAGON (HIPERGLICEMIANTE)</text>
      <text x="398" y="322" className="diagram-small">• Estímulo: queda da glicose sanguínea em períodos de jejum.</text>
      <text x="398" y="342" className="diagram-small">• Ação: ativa glicogenólise (quebra do glicogênio) e gliconeogênese no fígado.</text>
      <text x="398" y="372" className="diagram-strong" fill="#d45a55">Resultado: Elevação da glicemia para nutrir encéfalo e tecidos vitais.</text>
    </svg>
  );
}

export function EnhancedNervousDiagram() {
  return (
    <svg className="topic-diagram-svg" viewBox="0 0 760 440" role="img" aria-labelledby="nervous-title nervous-desc">
      <title id="nervous-title">Morfologia Neuronal, Condução Saltatória e Células Gliais</title>
      <desc id="nervous-desc">Neurônio com dendritos, soma, axônio mielinizado, condução saltatória nos nós de Ranvier e comparação de células gliais.</desc>
      <ArrowDefs id="nerv-arrow-violet" color="#7051a5" />
      <ArrowDefs id="nerv-arrow-coral" color="#d45a55" />
      <ArrowDefs id="nerv-arrow-green" color="#3b8d5a" />
      <rect x="1" y="1" width="758" height="438" rx="18" fill="#fdfdfb" stroke="#e2dce7" />

      {/* ESQUEMA DO NEURÔNIO */}
      <rect x="24" y="24" width="712" height="196" rx="16" fill="#f8f6fc" stroke="#cbb8df" strokeWidth="1.5" />
      <text x="44" y="48" className="diagram-kicker" fill="#604284">ESTRUTURA NEURONAL & FLUXO DO IMPULSO (CENTÍFUGO UNIDIRECIONAL)</text>

      {/* Dendritos e Soma */}
      <circle cx="110" cy="120" r="38" fill="#ffffff" stroke="#7051a5" strokeWidth="2" />
      <circle cx="110" cy="120" r="14" fill="#e8d9fa" stroke="#7051a5" strokeWidth="1.5" />
      <text x="110" y="124" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7051a5">SOMA</text>
      
      {/* Prolongamentos dendríticos */}
      <path d="M72 120H42M85 88L60 68M85 152L60 172M110 82V52M110 158V188" stroke="#7051a5" strokeWidth="3" strokeLinecap="round" />
      <text x="44" y="138" fontSize="9" fontWeight="700" fill="#7051a5">Dendritos</text>

      {/* Axônio */}
      <line x1="148" y1="120" x2="620" y2="120" stroke="#4a3e56" strokeWidth="5" strokeLinecap="round" />

      {/* Bainha de mielina segmentos */}
      {[180, 260, 340, 420, 500].map((x) => (
        <g key={x}>
          <rect x={x} y="96" width="60" height="48" rx="10" fill="#dff0fa" stroke="#3687be" strokeWidth="1.8" />
          <text x={x + 30} y={125} textAnchor="middle" fontSize="9" fontWeight="700" fill="#3687be">Mielina</text>
        </g>
      ))}

      {/* Nós de Ranvier e Condução Saltatória */}
      <path d="M165 90Q210 50 250 90Q290 50 330 90Q370 50 410 90Q450 50 490 90Q530 50 570 90" fill="none" stroke="#d45a55" strokeWidth="2.5" strokeDasharray="4 3" markerEnd="url(#nerv-arrow-coral)" />
      <text x="370" y="58" textAnchor="middle" fontSize="11" fontWeight="700" fill="#d45a55">CONDUÇÃO SALTATÓRIA NOS NÓS DE RANVIER (~120 m/s)</text>

      {/* Terminais sinápticos */}
      <path d="M620 120l40-30M620 120l45 0M620 120l40 30" stroke="#4a3e56" strokeWidth="3" strokeLinecap="round" />
      <circle cx="665" cy="90" r="6" fill="#d45a55" />
      <circle cx="670" cy="120" r="6" fill="#d45a55" />
      <circle cx="665" cy="150" r="6" fill="#d45a55" />
      <text x="682" y="124" fontSize="10" fontWeight="700" fill="#a83c37">Sinapses</text>

      {/* BLOCO DAS CÉLULAS DA GLIA */}
      <rect x="24" y="234" width="712" height="180" rx="16" fill="#f4faf6" stroke="#b4dfc8" strokeWidth="1.5" />
      <text x="44" y="258" className="diagram-kicker" fill="#246a48">CÉLULAS DA GLIA (NEURÓGLIA): SUPORTE, PROTEÇÃO E MIELINIZAÇÃO</text>

      {/* Card 1: Mielinização comparada */}
      <rect x="44" y="274" width="320" height="124" rx="12" fill="#ffffff" stroke="#3687be" strokeWidth="1.4" />
      <text x="58" y="298" className="diagram-card-title" fill="#3687be">MIELINIZAÇÃO: SNC × SNP</text>
      <text x="58" y="322" className="diagram-small">• <tspan fontWeight="700">Oligodendrócitos:</tspan> formam a mielina no Sistema Nervoso Central (encéfalo e medula). Uma única célula envolve múltiplos axônios.</text>
      <text x="58" y="356" className="diagram-small">• <tspan fontWeight="700">Células de Schwann:</tspan> formam a mielina no Sistema Nervoso Periférico (nervos). Cada célula reveste apenas um segmento axonal.</text>

      {/* Card 2: Astrócitos e Micróglia */}
      <rect x="384" y="274" width="334" height="124" rx="12" fill="#ffffff" stroke="#3b8d5a" strokeWidth="1.4" />
      <text x="398" y="298" className="diagram-card-title" fill="#2e7149">ASTRÓCITOS & MICRÓGLIA</text>
      <text x="398" y="322" className="diagram-small">• <tspan fontWeight="700">Astrócitos:</tspan> pés vasculares formam a Barreira Hematoencefálica (BHE), nutrem neurônios (lactato) e regulam íons K⁺ no fluido extracelular.</text>
      <text x="398" y="356" className="diagram-small">• <tspan fontWeight="700">Micróglia:</tspan> macrófagos residentes do tecido nervoso derivados da medula óssea; realizam fagocitose de debris e defesa imunitária.</text>
    </svg>
  );
}

export function EnhancedEcologyDiagram() {
  return (
    <svg className="topic-diagram-svg" viewBox="0 0 760 440" role="img" aria-labelledby="ecology-title ecology-desc">
      <title id="ecology-title">Teias Tróficas, Fluxo de Energia e Biomagnificação</title>
      <desc id="ecology-desc">Fluxo unidirecional de energia com dissipação em calor vs biomagnificação exponencial de poluentes acumulados no topo trófico.</desc>
      <ArrowDefs id="eco-arrow-green" color="#3b8d5a" />
      <ArrowDefs id="eco-arrow-coral" color="#d45a55" />
      <rect x="1" y="1" width="758" height="438" rx="18" fill="#fdfdfb" stroke="#e2dce7" />

      {/* FLUXO TRÓFICO LINEAR */}
      <rect x="24" y="24" width="712" height="196" rx="16" fill="#f4faf6" stroke="#9ecdb3" strokeWidth="1.5" />
      <text x="44" y="50" className="diagram-kicker" fill="#2d6a45">FLUXO DE ENERGIA UNIDIRECIONAL (PIRÂMIDE SEMPRE DIRETA: ~10% APROVEITADO)</text>

      {/* 4 Caixas de Níveis Tróficos */}
      {[
        { x: 44, w: 140, title: 'PRODUTORES', sub: 'Plantas / Fitoplâncton', energy: '10.000 kcal', fill: '#dff2e5', stroke: '#3b8d5a' },
        { x: 220, w: 140, title: 'CONS. PRIMÁRIO', sub: 'Herbívoros / Zooplâncton', energy: '1.000 kcal', fill: '#dff0fa', stroke: '#3687be' },
        { x: 396, w: 140, title: 'CONS. SECUNDÁRIO', sub: 'Carnívoros', energy: '100 kcal', fill: '#faeed9', stroke: '#c38822' },
        { x: 572, w: 144, title: 'CONS. TERCIÁRIO', sub: 'Predador de topo', energy: '10 kcal', fill: '#fdeceb', stroke: '#d45a55' },
      ].map((lvl, idx) => (
        <g key={lvl.title}>
          <rect x={lvl.x} y={72} width={lvl.w} height={126} rx="12" fill="#ffffff" stroke={lvl.stroke} strokeWidth="1.5" />
          <rect x={lvl.x} y={72} width={lvl.w} height={26} rx="12" fill={lvl.fill} />
          <text x={lvl.x + lvl.w / 2} y={89} textAnchor="middle" fontSize="10" fontWeight="700" fill={lvl.stroke}>{lvl.title}</text>
          <text x={lvl.x + lvl.w / 2} y={118} textAnchor="middle" className="diagram-small">{lvl.sub}</text>
          <text x={lvl.x + lvl.w / 2} y={148} textAnchor="middle" fontSize="12" fontWeight="700" fill={lvl.stroke}>{lvl.energy}</text>
          <text x={lvl.x + lvl.w / 2} y={172} textAnchor="middle" fontSize="9" fill="#888">dissipa ~90% calor</text>
          {idx < 3 && (
            <path d={`M${lvl.x + lvl.w} 120h30`} stroke="#3b8d5a" strokeWidth="2.5" markerEnd="url(#eco-arrow-green)" />
          )}
        </g>
      ))}

      {/* CONTRASTE: BIOMAGNIFICAÇÃO TRÓFICA */}
      <rect x="24" y="234" width="712" height="180" rx="16" fill="#fdfbf5" stroke="#e8d7a8" strokeWidth="1.5" />
      <text x="44" y="258" className="diagram-kicker" fill="#915f10">CONTRASTE FUNDAMENTAL: BIOMAGNIFICAÇÃO TRÓFICA DE POLUENTES (DDT / MERCÚRIO)</text>

      <g transform="translate(44, 274)">
        <rect x="0" y="0" width="672" height="122" rx="12" fill="#ffffff" stroke="#c38822" strokeWidth="1.2" />
        <text x="18" y="26" className="diagram-card-title" fill="#915f10">A ENERGIA DIMINUI, MAS OS POLUENTES PERSISTENTES AUMENTAM AO LONGO DA CADEIA!</text>
        <text x="18" y="52" className="diagram-small">• <tspan fontWeight="700">Substâncias não biodegradáveis e lipossolúveis</tspan> (ex: metilmercúrio, agrotóxicos clorados como DDT) não são excretadas pelos organismos.</text>
        <text x="18" y="76" className="diagram-small">• Cada nível trófico consome grandes quantidades de biomassa do nível inferior, acumulando cumulativamente os contaminantes.</text>
        <text x="18" y="102" className="diagram-strong" fill="#d45a55">Resultado: A maior concentração do veneno por grama de tecido SEMPRE ocorre no predador de topo da teia!</text>
      </g>
    </svg>
  );
}

export function EnhancedBotanyDiagram() {
  return (
    <svg className="topic-diagram-svg" viewBox="0 0 760 440" role="img" aria-labelledby="botany-title botany-desc">
      <title id="botany-title">Metagênese Vegetal e Condução de Seivas</title>
      <desc id="botany-desc">Evolução dos ciclos vegetais de briófitas a angiospermas; condução por xilema (Dixon) e floema (Münch).</desc>
      <ArrowDefs id="bot-arrow-green" color="#3b8d5a" />
      <ArrowDefs id="bot-arrow-blue" color="#3687be" />
      <rect x="1" y="1" width="758" height="438" rx="18" fill="#fdfdfb" stroke="#e2dce7" />

      {/* METAGÊNESE COMPARADA */}
      <rect x="24" y="24" width="712" height="190" rx="16" fill="#f4faf6" stroke="#9ecdb3" strokeWidth="1.5" />
      <text x="44" y="48" className="diagram-kicker" fill="#2d6a45">EVOLUÇÃO DOS CICLOS REPRODUTIVOS: REDUÇÃO DO GAMETÓFITO (n) E DOMINÂNCIA DO ESPORÓFITO (2n)</text>

      {[
        { x: 44, w: 160, title: 'BRIÓFITAS (Musgos)', phase: 'Gametófito (n) DOMINANTE', rep: 'Esporófito (2n) efêmero', water: 'Depende de água (anterozoide)', seed: 'Avasculares · Sem semente' },
        { x: 220, w: 160, title: 'PTERIDÓFITAS', phase: 'Esporófito (2n) DOMINANTE', rep: 'Prótalo (n) transitório', water: 'Depende de água', seed: 'Vasculares · Sem semente' },
        { x: 396, w: 160, title: 'GIMNOSPERMAS', phase: 'Esporófito árvore (2n)', rep: 'Tubo polínico (sifonogamia)', water: 'Independe de água!', seed: 'Sementes nuas (pinhão)' },
        { x: 572, w: 164, title: 'ANGIOSPERMAS', phase: 'Esporófito florido (2n)', rep: 'Dupla fecundação (3n)', water: 'Flores atraentes e frutos', seed: 'Semente protegida no fruto' },
      ].map((grp) => (
        <g key={grp.title}>
          <rect x={grp.x} y={64} width={grp.w} height={134} rx="12" fill="#ffffff" stroke="#3b8d5a" strokeWidth="1.3" />
          <rect x={grp.x} y={64} width={grp.w} height={24} rx="12" fill="#dff2e5" />
          <text x={grp.x + grp.w / 2} y={80} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#2d6a45">{grp.title}</text>
          <text x={grp.x + 10} y={106} fontSize="9.5" fontWeight="700" fill="#3687be">• {grp.phase}</text>
          <text x={grp.x + 10} y={126} className="diagram-small">• {grp.rep}</text>
          <text x={grp.x + 10} y={146} className="diagram-small">• {grp.water}</text>
          <text x={grp.x + 10} y={168} fontSize="9" fontWeight="700" fill="#2d6a45">• {grp.seed}</text>
        </g>
      ))}

      {/* CONDUÇÃO DE SEIVAS */}
      <rect x="24" y="228" width="712" height="186" rx="16" fill="#f8fafc" stroke="#b9d6eb" strokeWidth="1.5" />
      <text x="44" y="252" className="diagram-kicker" fill="#265a7f">TRANSPORTE DE SEIVA: XILEMA (DIXON) × FLOEMA (MÜNCH)</text>

      {/* Xilema */}
      <rect x="44" y="268" width="320" height="132" rx="12" fill="#ffffff" stroke="#3687be" strokeWidth="1.4" />
      <text x="58" y="294" className="diagram-card-title" fill="#3687be">XILEMA: SEIVA BRUTA (INORGÂNICA)</text>
      <text x="58" y="316" className="diagram-small">• Sentido ascendente obrigatório: Raiz → Folhas.</text>
      <text x="58" y="336" className="diagram-small">• Células mortas com reforço de lignina (traqueídes e elementos de vaso).</text>
      <text x="58" y="356" className="diagram-strong" fill="#3687be">• Teoria da Coesão-Tensão (Dixon):</text>
      <text x="58" y="376" className="diagram-small">A transpiração nos estômatos cria tensão contínua puxando a coluna líquida sem gastar ATP.</text>

      {/* Floema */}
      <rect x="384" y="268" width="334" height="132" rx="12" fill="#ffffff" stroke="#3b8d5a" strokeWidth="1.4" />
      <text x="398" y="294" className="diagram-card-title" fill="#2d6a45">FLOEMA: SEIVA ELABORADA (ORGÂNICA)</text>
      <text x="398" y="316" className="diagram-small">• Sentido da fonte para o dreno (bidirecional): Folha → Raízes/Frutos.</text>
      <text x="398" y="336" className="diagram-small">• Células vivas anucleadas (tubos crivados e células companheiras).</text>
      <text x="398" y="356" className="diagram-strong" fill="#2d6a45">• Hipótese do Fluxo de Pressão (Münch):</text>
      <text x="398" y="376" className="diagram-small">A sacarose é bombeada ativamente para o floema, atraindo água do xilema por osmose e gerando fluxo de massa.</text>
    </svg>
  );
}

export function EnhancedParasitologyDiagram() {
  return (
    <svg className="topic-diagram-svg" viewBox="0 0 760 440" role="img" aria-labelledby="parasitology-title parasitology-desc">
      <title id="parasitology-title">Parasitologia Médica: Ciclos das Grandes Doenças</title>
      <desc id="parasitology-desc">Transmissão, hospedeiros intermediários e definitivos de Esquistossomose, Teníase x Cisticercose, Chagas e Malária.</desc>
      <ArrowDefs id="par-arrow-coral" color="#d45a55" />
      <rect x="1" y="1" width="758" height="438" rx="18" fill="#fdfdfb" stroke="#e2dce7" />

      {/* GRID 2x2 DAS 4 DOENÇAS */}
      {/* 1. Esquistossomose */}
      <rect x="24" y="24" width="345" height="186" rx="14" fill="#f3faf6" stroke="#3b8d5a" strokeWidth="1.5" />
      <text x="40" y="50" className="diagram-kicker" fill="#2d6a45">ESQUISTOSSOMOSE (SCHISTOSOMA MANSONI)</text>
      <rect x="40" y="66" width="313" height="130" rx="10" fill="#ffffff" stroke="#9ecdb3" strokeWidth="1.2" />
      <text x="52" y="88" className="diagram-small">• <tspan fontWeight="700">HD:</tspan> Homem (vasos mesentéricos). • <tspan fontWeight="700">HI:</tspan> Caramujo Biomphalaria.</text>
      <text x="52" y="108" className="diagram-small">• Fezes na água doce → ovo libera o <tspan fontWeight="700">miracídio ciliado</tspan>.</text>
      <text x="52" y="128" className="diagram-small">• Caramujo libera milhares de <tspan fontWeight="700" fill="#d45a55">cercárias bifurcadas</tspan>.</text>
      <text x="52" y="148" className="diagram-small">• <tspan fontWeight="700" fill="#d45a55">Penetração ativa cutânea</tspan> em "lagoas de coceira".</text>
      <text x="52" y="172" className="diagram-strong" fill="#2d6a45">Profilaxia: Saneamento básico e controle de caramujos.</text>

      {/* 2. Teníase x Cisticercose */}
      <rect x="391" y="24" width="345" height="186" rx="14" fill="#fef7f6" stroke="#d45a55" strokeWidth="1.5" />
      <text x="407" y="50" className="diagram-kicker" fill="#a83c37">COMPLEXO TENÍASE × CISTICERCOSE</text>
      <rect x="407" y="66" width="313" height="130" rx="10" fill="#ffffff" stroke="#eab5b2" strokeWidth="1.2" />
      <text x="419" y="88" className="diagram-strong" fill="#3687be">TENÍASE (VERME ADULTO NO INTESTINO):</text>
      <text x="419" y="108" className="diagram-small">Ingestão de carne de porco/boi malcozida com <tspan fontWeight="700">cisticercos</tspan>.</text>
      <text x="419" y="132" className="diagram-strong" fill="#d45a55">CISTICERCOSE HUMANA (GRAVE / NEUROLÓGICA):</text>
      <text x="419" y="152" className="diagram-small">Ingestão acidental de <tspan fontWeight="700" fill="#d45a55">OVOS de T. solium</tspan> em água/verduras com fezes humanas!</text>
      <text x="419" y="176" fontSize="9" fontWeight="700" fill="#a83c37">Carne de porco NUNCA transmite cisticercose!</text>

      {/* 3. Doença de Chagas */}
      <rect x="24" y="228" width="345" height="186" rx="14" fill="#fdfbf5" stroke="#c38822" strokeWidth="1.5" />
      <text x="40" y="254" className="diagram-kicker" fill="#915f10">DOENÇA DE CHAGAS (TRYPANOSOMA CRUZI)</text>
      <rect x="40" y="270" width="313" height="130" rx="10" fill="#ffffff" stroke="#e8d7a8" strokeWidth="1.2" />
      <text x="52" y="292" className="diagram-small">• Vetor: Percevejo "barbeiro" hematófago noturno.</text>
      <text x="52" y="312" className="diagram-small">• <tspan fontWeight="700">Transmissão vetorial:</tspan> fezes do barbeiro ao coçar a picada.</text>
      <text x="52" y="332" className="diagram-small">• <tspan fontWeight="700" fill="#d45a55">Transmissão oral:</tspan> açaí ou caldo de cana moídos com barbeiros.</text>
      <text x="52" y="352" className="diagram-small">• <tspan fontWeight="700">Amastigotas intracelulares</tspan> no miocárdio → cardiomegalia.</text>
      <text x="52" y="376" className="diagram-strong" fill="#915f10">Profilaxia: Casas de alvenaria e higiene de alimentos.</text>

      {/* 4. Malária */}
      <rect x="391" y="228" width="345" height="186" rx="14" fill="#f8fafc" stroke="#3687be" strokeWidth="1.5" />
      <text x="407" y="254" className="diagram-kicker" fill="#265a7f">MALÁRIA (PLASMODIUM VIVAX & FALCIPARUM)</text>
      <rect x="407" y="270" width="313" height="130" rx="10" fill="#ffffff" stroke="#b9d6eb" strokeWidth="1.2" />
      <text x="419" y="292" className="diagram-small">• Vetor e HD: Fêmea do mosquito-prego (Anopheles).</text>
      <text x="419" y="312" className="diagram-small">• Picada inocula <tspan fontWeight="700">esporozoítos</tspan> → ciclo hepático no fígado.</text>
      <text x="419" y="332" className="diagram-small">• <tspan fontWeight="700">Merozoítos</tspan> invadem e rompem hemácias sincronizadamente.</text>
      <text x="419" y="352" className="diagram-small">• Liberação de toxinas pirógenas gera as <tspan fontWeight="700" fill="#d45a55">febres terçãs</tspan>.</text>
      <text x="419" y="376" className="diagram-strong" fill="#265a7f">Profilaxia: Mosquiteiros, repelentes e tratamento rápido.</text>
    </svg>
  );
}
