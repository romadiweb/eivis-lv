import { Globe } from "lucide-react";
import { FeatureCard } from "./update-card";
import "./device-feature-card.css";

const devices = [
  { logo: "/device-apple.svg", x: 164 },
  { logo: "/device-android.svg", label: "android", x: 300 },
  { label: "www", x: 436 },
];

const connections = [
  "M300 112 C300 173 164 143 164 207",
  "M300 112 V207",
  "M300 112 C300 173 436 143 436 207",
];

export function EivisDeviceConnections() {
  return (
    <svg className="device-feature-card__diagram" viewBox="80 0 440 300" fill="none" aria-hidden="true">
      <g strokeLinecap="round">
        {connections.map((path, index) => (
          <g key={path}>
            <path d={path} className="device-feature-card__connection" />
            <path
              d={path}
              pathLength="100"
              className="device-feature-card__signal"
              data-center={index === 1 || undefined}
            />
          </g>
        ))}
      </g>
      <rect className="device-feature-card__platform" x="256" y="24" width="88" height="88" rx="22" />
      <image href="/eivis-logo-icon-black.svg" x="276" y="44" width="48" height="48" />
      {devices.map(({ logo, label, x }, index) => (
        <g key={x} className="device-feature-card__device" data-center={index === 1 || undefined}>
          <rect x={x - 36} y="207" width="72" height="72" rx="17" />
          <g className="device-feature-card__device-symbol">
            {logo ? (
              <image href={logo} x={x - 16} y={label ? 218 : 227} width="32" height="32" />
            ) : (
              <Globe x={x - 10} y={226} size={20} strokeWidth={1.65} />
            )}
            {label && <text x={x} y="260" textAnchor="middle">{label}</text>}
          </g>
        </g>
      ))}
    </svg>
  );
}

export function DeviceFeatureCard() {
  return (
    <FeatureCard
      title={<>Viena sistēma.<br />Vairākas platformas.</>}
      description="Atveriet EIVIS tīmekļa pārlūkā Apple, Android un citās ierīcēs. Jūsu darba vide pielāgojas ekrānam."
    >
      <EivisDeviceConnections />
    </FeatureCard>
  );
}
