const planes = [
  { x: 142, y: 222 },
  { x: 239, y: 146 },
  { x: 336, y: 70 },
];

export function AdoptionIllustration({ stage }: { stage: number }) {
  return (
    <div className="adoption__art" aria-hidden="true">
      <svg viewBox="0 0 660 470" fill="none">
        <g stroke="#e2e6ed" strokeWidth="1" strokeDasharray="4 6">
          <path d="M63 272 374 434 600 314 289 152Z" />
          <path d="m106 250 310 162M149 227l310 162m-353-94 225-119m-182 142 225-120" />
          <path d="M142 222v90m97-166v126m97-202v151m215-38v132" />
        </g>
        <g className="adoption__wires" data-shown={stage >= 1} stroke="#3777db" strokeWidth="1.25">
          <path d="M320 321v34l97-52v-58" />
          <circle cx="320" cy="321" r="3" fill="#fff" />
          <circle cx="417" cy="245" r="3" fill="#fff" />
        </g>
        <g className="adoption__wires" data-shown={stage >= 2} stroke="#3777db" strokeWidth="1.25">
          <path d="M417 245v34l97-52v-58m-97 110 51 27 46-25" />
          <circle cx="514" cy="169" r="3" fill="#fff" />
          <circle cx="514" cy="281" r="3" fill="#fff" />
        </g>
        {[...planes].reverse().map(({ x, y }, index) => {
          const layer = planes.length - 1 - index;
          return (
            <g key={x} className="adoption__plane" data-shown={layer <= stage} transform={`matrix(.89 .46 -.89 .46 ${x + 112} ${y})`}>
              <rect className="adoption__plane-base" y="7" width="200" height="126" rx="8" />
              <rect className="adoption__plane-face" width="200" height="126" rx="8" />
              <g className="adoption__plane-details">
                <path d="M0 25h200M48 25v101M62 42h55m-55 9h32M13 44h21m-21 13h17m-17 13h21" />
                <circle cx="13" cy="13" r="2" />
                <circle cx="22" cy="13" r="2" />
                <rect x="62" y="65" width="54" height="42" rx="4" fill="#f1f5fc" />
                <rect x="124" y="65" width="60" height="42" rx="4" />
                <path d="m73 91 12-9 9 6 12-12m30 4h34m-34 9h25m-25 9h17" />
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
