import styles from './DepthRings.module.css'

// depth: label strings for each ring (outer → inner)
const DEFAULT_DEPTHS = ['200m', '100m', '50m', '25m', '10m', '5m', '1m']

export default function DepthRings({
  rings = 9,
  depths = DEFAULT_DEPTHS,
  className = '',
  label = 'Going deeper',
}) {
  const W = 1440
  const H = 320
  const cx = W / 2
  // Source point sits just below the visible viewport so arcs clip cleanly at the bottom edge
  const cy = H + 40
  const minR = 60
  const maxR = W * 0.62

  const arcs = Array.from({ length: rings }, (_, i) => {
    const t = i / (rings - 1)
    const r = minR + t * (maxR - minR)
    const opacity = 0.42 - t * 0.32          // strongest near center, fades out
    const strokeW = 0.6 + (1 - t) * 0.4      // slightly thicker near center
    const depthLabel = depths[Math.min(i, depths.length - 1)]
    // Label x position: right edge of the arc (cx + r), clamp within viewbox
    const labelX = Math.min(cx + r + 10, W - 16)
    const labelY = cy - 12  // just above the chord bottom — won't be visible but serves as reference
    // Use a point on the arc at ~30° from horizontal to place the label
    const angle = Math.PI * 0.18   // 32° from horizontal
    const arcLabelX = Math.min(cx + r * Math.cos(angle) + 8, W - 8)
    const arcLabelY = cy - r * Math.sin(angle)

    return { r, opacity, strokeW, depthLabel, arcLabelX, arcLabelY }
  })

  return (
    <div className={`${styles.root} ${className}`} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="dd-rings-clip">
            <rect x="0" y="0" width={W} height={H} />
          </clipPath>
          <linearGradient id="dd-ring-color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
            <stop offset="100%" stopColor="#000cff" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        <g clipPath="url(#dd-rings-clip)">
          {arcs.map(({ r, opacity, strokeW, depthLabel, arcLabelX, arcLabelY }, i) => (
            <g key={i} opacity={opacity}>
              <circle
                cx={cx}
                cy={cy}
                r={r}
                stroke="url(#dd-ring-color)"
                strokeWidth={strokeW}
              />
              {/* Depth label — only show on visible arcs */}
              {arcLabelY < H - 4 && arcLabelY > 0 && (
                <text
                  x={arcLabelX}
                  y={arcLabelY}
                  fontSize="9"
                  fontFamily="'SF Mono', 'Fira Code', monospace"
                  fill="var(--accent)"
                  fillOpacity={0.55}
                  letterSpacing="0.08em"
                >
                  {depthLabel}
                </text>
              )}
            </g>
          ))}

          {/* Source point */}
          <circle cx={cx} cy={cy} r={3} fill="var(--accent)" opacity={0.5} />
          <circle cx={cx} cy={cy} r={7} stroke="var(--accent)" strokeWidth={0.75} opacity={0.25} />

          {/* Center vertical axis */}
          <line
            x1={cx} y1={0}
            x2={cx} y2={H}
            stroke="var(--accent)"
            strokeWidth={0.5}
            strokeDasharray="3 8"
            opacity={0.18}
          />
        </g>
      </svg>

      {label && (
        <div className={styles.label}>
          <span className={styles.labelText}>{label}</span>
        </div>
      )}
    </div>
  )
}
