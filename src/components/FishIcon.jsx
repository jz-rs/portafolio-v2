// Pez espina (símbolo personal). Usa currentColor para tomar el color del contexto.
export default function FishIcon({ size = 28, title = "" }) {
  return (
    <svg
      viewBox="0 0 48 72"
      height={size}
      width={(size * 48) / 72}
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : "true"}
      fill="currentColor"
      stroke="currentColor"
    >
      {/* cabeza con el ojo recortado */}
      <path
        stroke="none"
        fillRule="evenodd"
        d="M24 2 L42 30 Q24 33 6 30 Z M18.5 20 a2.8 2.8 0 1 0 0.01 0 Z"
      />
      {/* columna */}
      <rect x="22.5" y="29" width="3" height="28" rx="1.5" stroke="none" />
      {/* costillas */}
      <g strokeWidth="3.4" strokeLinecap="round" fill="none">
        <path d="M9 35 H39" />
        <path d="M10.5 42 H37.5" />
        <path d="M12.5 49 H35.5" />
        <path d="M15.5 56 H32.5" />
      </g>
      {/* cola */}
      <path stroke="none" d="M24 57 L12 70 Q24 64.5 36 70 Z" />
    </svg>
  );
}
