export function RequestsIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
      <path d="M160 48v37m0 79v19" className="capabilities__line" />
      <path d="M160 48v37" pathLength={100} className="capabilities__signal" />
      <rect x="129" y="27" width="62" height="22" rx="11" className="capabilities__surface" />
      <circle cx="141" cy="38" r="3" className="capabilities__dot capabilities__permission" />
      <text x="150" y="41">Iesniegts</text>
      <rect x="111" y="94" width="110" height="70" rx="9" className="capabilities__surface capabilities__back" />
      <rect x="99" y="83" width="110" height="70" rx="9" className="capabilities__surface" />
      <path d="M115 101h36m-36 12h66m-66 12h47" className="capabilities__line" />
      <rect x="115" y="133" width="8" height="8" rx="2" className="capabilities__surface" />
      <path d="m117 137 2 2 5-5" className="capabilities__accent-line" />
    </svg>
  );
}

const stages = [
  { x: 93, label: "Saņemts" },
  { x: 160, label: "Izskatīšanā" },
  { x: 227, label: "Apstiprināts" },
];

export function ApprovalIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
      <rect x="55" y="72" width="210" height="84" rx="11" className="capabilities__surface capabilities__back" />
      <rect x="44" y="53" width="232" height="90" rx="11" className="capabilities__surface" />
      <path d="M59 70h9v11h-9zM61 73h5m-5 4h4" className="capabilities__line" />
      <text x="75" y="79" className="capabilities__svg-title">Pieteikums</text>
      <path d="M93 104h134" className="capabilities__line" />
      {stages.map(({ x, label }, index) => (
        <g key={label} className="capabilities__stage" data-stage={index}>
          <circle cx={x} cy="104" r="4" className="capabilities__surface" />
          <text x={x} y="124" textAnchor="middle">{label}</text>
        </g>
      ))}
    </svg>
  );
}

export function PermissionsIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
      <path d="M101 66v15h118V66m-59 0v29" className="capabilities__line" />
      <path d="M160 66v29" className="capabilities__accent-line capabilities__permission-line" />
      {[101, 160, 219].map((x) => (
        <g key={x}>
          <circle cx={x} cy="51" r="15" className="capabilities__surface" />
          <circle cx={x} cy="48" r="3" className="capabilities__line" />
          <path d={`M${x - 5} 57q0-4 5-4t5 4`} className="capabilities__line" />
        </g>
      ))}
      <rect x="77" y="95" width="166" height="68" rx="10" className="capabilities__surface" />
      <text x="92" y="116" className="capabilities__svg-title">Piekļuves tiesības</text>
      <path d="M92 128h135m-135 12h48m-48 11h38" className="capabilities__line" />
      <circle cx="183" cy="140" r="3" className="capabilities__surface" />
      <circle cx="201" cy="140" r="3" className="capabilities__dot capabilities__permission" />
      <circle cx="219" cy="140" r="3" className="capabilities__surface" />
      <path d="M180 151h6m12 0h6m12 0h6" className="capabilities__line" />
    </svg>
  );
}
