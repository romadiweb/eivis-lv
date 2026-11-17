type IntegrationVariant = "existing" | "custom";

const integrations = [
  { name: "Horizon", logo: "/horizon-logo.png", x: 89 },
  { name: "eParaksts", logo: "/eparaksts-logo.png", x: 351 },
];

function IntegrationIllustration({ variant }: { variant: IntegrationVariant }) {
  const existing = variant === "existing";

  return (
    <svg
      className="integration-feature__art"
      viewBox="0 0 440 184"
      fill="none"
      role={existing ? "img" : undefined}
      aria-label={existing ? "EIVIS integrāciju piemēri — Horizon un eParaksts" : undefined}
      aria-hidden={!existing || undefined}
    >
      <g stroke="#dce2eb" strokeWidth="1" strokeDasharray="4 6">
        <path d="M28 92h384M220 18v148M89 30v124m262-124v124" />
        <rect x="53" y="33" width="334" height="118" rx="24" />
      </g>
      <g stroke="#a9c4eb" strokeWidth="1.25">
        <path d="M117 92h66m74 0h66" />
        {!existing && <path d="M220 55V39h58m-58 90v16h-58" />}
      </g>
      <g fill="#fff" stroke="#3777db" strokeWidth="1.25">
        <circle className="integration-feature__signal" cx="151" cy="92" r="3" />
        <circle className="integration-feature__signal" cx="289" cy="92" r="3" />
      </g>
      <rect x="183" y="55" width="74" height="74" rx="20" fill="#eef4fd" stroke="#b9ceec" />
      <image href="/eivis-logo-icon-black.svg" x="199" y="71" width="42" height="42" />
      {existing ? integrations.map(({ name, logo, x }) => (
        <g key={name}>
          <rect x={x - 28} y="64" width="56" height="56" rx="14" fill="#fff" stroke="#d7dfe9" />
          <image href={logo} x={x - 20} y="72" width="40" height="40" />
          <text x={x} y="137" textAnchor="middle" fill="#5f6368" fontSize="10">{name}</text>
        </g>
      )) : (
        <g fill="#fff" stroke="#c7d3e3" strokeWidth="1.25">
          <rect x="61" y="69" width="56" height="46" rx="9" />
          <rect x="323" y="69" width="56" height="46" rx="9" />
          <rect x="278" y="24" width="46" height="30" rx="7" />
          <rect x="116" y="130" width="46" height="30" rx="7" />
          <path d="M72 81h34m-34 9h24m-24 9h29m233-18h34m-34 9h20m-20 9h27M289 35h24m-24 8h14m-176 98h24m-24 8h14" />
        </g>
      )}
    </svg>
  );
}

export function IntegrationFeature({ variant, label, title, description }: {
  variant: IntegrationVariant;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <article className="integration-feature">
      <IntegrationIllustration variant={variant} />
      <p className="integration-feature__label">{label}</p>
      <h2>{title}</h2>
      <p className="integration-feature__description">{description}</p>
    </article>
  );
}
