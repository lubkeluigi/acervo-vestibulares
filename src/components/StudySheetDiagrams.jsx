import React from 'react';

function Badge({ x, y, n, tone = 'purple' }) {
  return <g className={`cell-map-badge badge-${tone}`} transform={`translate(${x} ${y})`}><circle r="15" /><text textAnchor="middle" dominantBaseline="central">{n}</text></g>;
}

function Mitochondrion({ x, y, rotate = 0, scale = 1 }) {
  return <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
    <path d="M-48-19C-31-39 20-34 44-11C59 5 35 31 4 31C-27 31-61 10-48-19Z" fill="url(#mito-fill)" stroke="#b9664d" strokeWidth="2.4" />
    <path d="M-34-8C-23-22-17 9-6-7S12-19 16 0S32 14 39-2M-33 10C-20-3-14 22-1 8S18-3 28 12" fill="none" stroke="#b9664d" strokeWidth="3" strokeLinecap="round" />
  </g>;
}

export function CellMapDiagram() {
  return <svg className="cell-map-svg" viewBox="0 0 720 500" role="img" aria-labelledby="cell-map-title cell-map-desc">
    <title id="cell-map-title">Mapa esquemático de uma célula eucariota animal</title>
    <desc id="cell-map-desc">Célula com membrana, citoplasma, núcleo, nucléolo, ribossomos, retículo endoplasmático rugoso, complexo golgiense, lisossomo, mitocôndrias, citoesqueleto e pequenos vacúolos. Números conectam o desenho à legenda.</desc>
    <defs>
      <radialGradient id="cell-fill" cx="45%" cy="40%" r="70%"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#f3edfa" /></radialGradient>
      <radialGradient id="nucleus-fill" cx="35%" cy="30%" r="75%"><stop offset="0" stopColor="#f2eafd" /><stop offset="1" stopColor="#d8c4ed" /></radialGradient>
      <linearGradient id="mito-fill" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffe2c9" /><stop offset="1" stopColor="#f6b596" /></linearGradient>
      <linearGradient id="vacuole-fill" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e2f5fb" /><stop offset="1" stopColor="#b9dfea" /></linearGradient>
    </defs>
    <path d="M130 86C194 24 298 45 365 57C462 22 589 67 632 153C686 236 653 349 569 413C487 477 369 450 271 459C159 456 70 384 72 280C50 204 76 137 130 86Z" fill="url(#cell-fill)" stroke="#8062a6" strokeWidth="4" strokeLinejoin="round" />
    <path d="M139 99C199 43 296 61 363 72C457 40 574 79 615 159" fill="none" stroke="#d4c3e6" strokeWidth="2" strokeLinecap="round" />
    <g fill="none" stroke="#bfd0c8" strokeWidth="2" opacity=".8">
      <path d="M125 331C236 262 285 370 403 340S563 260 616 306" />
      <path d="M174 105C209 194 303 127 381 114S532 162 581 234" />
      <path d="M229 421C253 350 345 410 420 392S504 374 548 394" />
      <path d="M105 244C202 230 228 114 309 91" />
    </g>
    <g stroke="#89a99d" strokeWidth="1.5" fill="#f8fffb">
      <ellipse cx="154" cy="277" rx="42" ry="54" fill="url(#vacuole-fill)" stroke="#6fa9b9" strokeWidth="2.4" />
      <path d="M131 267C143 250 166 250 179 266M129 288C146 305 166 303 181 286" fill="none" stroke="#a2ceda" />
    </g>
    <g fill="none" stroke="#9677b7" strokeWidth="5" strokeLinecap="round">
      <path d="M181 172C209 137 265 144 288 171" /><path d="M169 189C205 157 260 163 289 190" /><path d="M166 209C199 180 249 184 276 209" /><path d="M176 231C204 205 237 208 258 226" />
    </g>
    <g fill="#66527f">
      {[...Array(9)].map((_, i) => <circle key={`rer-dot-a-${i}`} cx={179 + i * 12} cy={154 + (i % 2) * 3} r="3" />)}
      {[...Array(8)].map((_, i) => <circle key={`rer-dot-b-${i}`} cx={166 + i * 13} cy={175 + (i % 2) * 3} r="3" />)}
      {[...Array(7)].map((_, i) => <circle key={`rer-dot-c-${i}`} cx={174 + i * 13} cy={197 + (i % 2) * 3} r="3" />)}
    </g>
    <g>
      <circle cx="366" cy="238" r="85" fill="url(#nucleus-fill)" stroke="#8062a6" strokeWidth="3.5" />
      <circle cx="366" cy="238" r="76" fill="none" stroke="#ac91c8" strokeWidth="2" />
      <g fill="#fff" stroke="#8062a6" strokeWidth="1.5">
        <circle cx="318" cy="172" r="5" /><circle cx="411" cy="174" r="5" /><circle cx="292" cy="237" r="5" /><circle cx="440" cy="246" r="5" /><circle cx="329" cy="309" r="5" /><circle cx="407" cy="302" r="5" />
      </g>
      <g fill="none" stroke="#b39acb" strokeWidth="3" strokeLinecap="round">
        <path d="M326 222C340 195 363 212 377 190S410 197 408 219" /><path d="M317 257C337 272 350 251 367 273S398 281 415 257" /><path d="M342 289C338 265 370 261 379 239" />
      </g>
      <circle cx="373" cy="235" r="25" fill="#9a78b9" opacity=".9" /><circle cx="366" cy="228" r="9" fill="#bfa5d4" opacity=".65" />
    </g>
    <g fill="none" stroke="#4b9a86" strokeWidth="6" strokeLinecap="round">
      <path d="M478 192C508 179 543 190 548 207" /><path d="M469 208C504 195 539 208 541 224" /><path d="M466 227C496 214 527 226 529 241" /><path d="M470 245C493 237 512 244 516 257" />
    </g>
    <g fill="#b8e0d3" stroke="#4b9a86" strokeWidth="1.5"><circle cx="552" cy="243" r="8" /><circle cx="460" cy="266" r="6" /><circle cx="538" cy="270" r="5" /></g>
    <Mitochondrion x={514} y={347} rotate={-18} />
    <Mitochondrion x={235} y={356} rotate={18} scale={.86} />
    <Mitochondrion x={516} y={116} rotate={12} scale={.67} />
    <g>
      <circle cx="260" cy="118" r="29" fill="#fff0ae" stroke="#c59d38" strokeWidth="2.4" />
      <g fill="#dbb85a">{[[250,108],[269,105],[275,122],[256,132],[244,121]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" />)}</g>
    </g>
    <g fill="#67527e" opacity=".9">
      {[[312,129],[332,116],[409,119],[439,143],[296,341],[335,369],[410,353],[445,324],[588,271],[189,303],[129,194],[459,91],[395,407],[461,391]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" />)}
    </g>
    <g transform="translate(380 383)">
      <g transform="rotate(-20)" fill="#f6c96f" stroke="#b78a38" strokeWidth="1.6">{[0,9,18].map(x=><rect key={x} x={x-14} y="-18" width="7" height="35" rx="3" />)}</g>
      <g transform="translate(29 10) rotate(65)" fill="#f6c96f" stroke="#b78a38" strokeWidth="1.6">{[0,9,18].map(x=><rect key={x} x={x-14} y="-18" width="7" height="35" rx="3" />)}</g>
    </g>
    <g fill="none" stroke="#9b87b5" strokeWidth="1.6" strokeDasharray="4 5">
      <path d="M101 102L139 126" /><path d="M588 89L558 142" /><path d="M360 137L360 153" /><path d="M425 229L399 233" /><path d="M143 184L169 192" /><path d="M147 250L178 231" /><path d="M557 209L539 215" /><path d="M244 86L253 92" /><path d="M551 373L535 360" /><path d="M601 330L584 319" /><path d="M380 424L380 402" /><path d="M118 326L135 306" />
    </g>
    <Badge x={91} y={91} n={1} /><Badge x={600} y={76} n={2} tone="green" /><Badge x={360} y={122} n={3} /><Badge x={440} y={229} n={4} /><Badge x={130} y={180} n={5} /><Badge x={132} y={253} n={6} /><Badge x={573} y={207} n={7} tone="green" /><Badge x={237} y={72} n={8} tone="amber" /><Badge x={566} y={389} n={9} tone="coral" /><Badge x={610} y={330} n={10} tone="green" /><Badge x={380} y={440} n={11} tone="amber" /><Badge x={105} y={343} n={12} tone="green" />
  </svg>;
}

export function CellTypeDiagram({ type = 'animal' }) {
  const title = type === 'plant' ? 'Célula vegetal esquemática' : type === 'prokaryote' ? 'Célula procarionte esquemática' : 'Célula animal esquemática';
  return <svg className="cell-type-svg" viewBox="0 0 280 175" role="img" aria-label={title}>
    <title>{title}</title>
    {type === 'plant' ? <>
      <rect x="24" y="18" width="232" height="139" rx="30" fill="#eef7df" stroke="#739453" strokeWidth="5" />
      <rect x="32" y="26" width="216" height="123" rx="24" fill="#fbfff6" stroke="#a6bd82" strokeWidth="2" />
      <rect x="83" y="40" width="121" height="94" rx="43" fill="#d9eef3" stroke="#84b5c2" strokeWidth="2" />
      <circle cx="72" cy="79" r="30" fill="#ddc9ed" stroke="#8767a6" strokeWidth="2.5" /><circle cx="75" cy="77" r="9" fill="#a180ba" />
      <g fill="#a9d184" stroke="#5e8b49" strokeWidth="1.8"><ellipse cx="215" cy="48" rx="20" ry="10" transform="rotate(-20 215 48)" /><ellipse cx="215" cy="129" rx="20" ry="10" transform="rotate(20 215 129)" /><ellipse cx="49" cy="128" rx="18" ry="9" transform="rotate(20 49 128)" /></g>
      <g stroke="#5e8b49" strokeWidth="1"><path d="M203 48h24M204 126h22M39 127h20" /></g>
      <path d="M52 38C60 27 78 33 81 44C72 52 58 51 52 38Z" fill="#f7c2a1" stroke="#b9664d" strokeWidth="1.8" />
    </> : type === 'prokaryote' ? <>
      <path d="M42 78C46 29 98 17 156 26C221 30 250 62 236 110C220 155 156 158 99 146C53 137 34 114 42 78Z" fill="#eef5fa" stroke="#5e879d" strokeWidth="5" />
      <path d="M51 79C56 42 98 31 153 38C207 40 234 65 224 105C209 139 158 146 103 134C63 127 45 108 51 79Z" fill="#fbfdff" stroke="#a1bfce" strokeWidth="2" />
      <path d="M104 78C118 49 163 57 167 81C170 105 130 111 119 91C105 69 154 67 181 97" fill="none" stroke="#8b6aac" strokeWidth="4" strokeLinecap="round" />
      <g fill="#657e8c">{[[81,62],[86,111],[196,64],[197,115],[136,127],[113,43],[215,89],[68,87]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" />)}</g>
      <path d="M234 103C266 105 256 140 275 141M237 92C264 82 268 103 274 110" fill="none" stroke="#5e879d" strokeWidth="2.5" strokeLinecap="round" />
    </> : <>
      <path d="M48 60C69 20 127 23 157 31C202 15 246 47 240 91C248 132 195 154 151 145C106 161 54 141 42 105C29 87 35 74 48 60Z" fill="#faf5fd" stroke="#8062a6" strokeWidth="4" />
      <circle cx="140" cy="85" r="38" fill="#ddc9ed" stroke="#8062a6" strokeWidth="2.5" /><circle cx="143" cy="83" r="12" fill="#a180ba" />
      <path d="M65 104C52 88 70 69 88 81C101 96 83 119 65 104Z" fill="#f7c2a1" stroke="#b9664d" strokeWidth="2" /><path d="M195 60C185 43 207 36 219 50C229 67 205 77 195 60Z" fill="#f7c2a1" stroke="#b9664d" strokeWidth="2" />
      <path d="M67 102C72 93 76 111 84 97M198 59C204 48 208 65 215 55" fill="none" stroke="#b9664d" strokeWidth="2" />
      <ellipse cx="198" cy="117" rx="19" ry="13" fill="#d9eef3" stroke="#84b5c2" strokeWidth="2" />
      <g fill="#67527e">{[[104,42],[181,102],[98,126],[210,89],[60,62]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3.5" />)}</g>
    </>}
  </svg>;
}
