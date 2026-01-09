export default function TurbineBlades({ className, style }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{ position: "absolute", top: 0, left: 0, ...style }}
    >
      {/* Hub */}
      <circle cx="100" cy="100" r="12" fill="#FFFFFF" />

      {/* Blade 1 */}
      <path
        d="M100 12 
           C110 50, 115 80, 100 100"
        fill="#FFFFFF"
      />

      {/* Blade 2 */}
      <path
        transform="rotate(120 100 100)"
        d="M100 12 
          C110 50, 115 80, 100 100"
        fill="#FFFFFF"
      />

      {/* Blade 3 */}
      <path
        transform="rotate(240 100 100)"
        d="M100 12 
          C110 50, 115 80, 100 100"
        fill="#FFFFFF"
      />
    </svg>
  );
}
