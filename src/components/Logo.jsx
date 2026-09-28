export default function Logo({ size = 28, dark = false }) {
  const stroke = dark ? '#F5F0E6' : '#1F3A2E'
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" opacity={dark ? 0.85 : 1}>
        <line x1="30" y1="30" x2="30" y2="6" />
        <line x1="30" y1="30" x2="49" y2="14" />
        <line x1="30" y1="30" x2="54" y2="30" />
        <line x1="30" y1="30" x2="47" y2="47" />
        <line x1="30" y1="30" x2="30" y2="54" />
        <line x1="30" y1="30" x2="13" y2="44" />
        <line x1="30" y1="30" x2="7" y2="24" />
      </g>
      <circle cx="30" cy="30" r="5" fill="#A9782F" />
    </svg>
  )
}
