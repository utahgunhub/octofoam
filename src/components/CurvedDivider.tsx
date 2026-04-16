interface CurvedDividerProps {
  topColor?: string;
  bottomColor?: string;
  accentColor?: string;
  direction?: "down" | "up";
  /** When true, the top edge is transparent so a background behind shows through */
  transparentTop?: boolean;
  /** When true, the bottom edge is transparent so a background behind shows through */
  transparentBottom?: boolean;
  className?: string;
}

const CurvedDivider = ({
  topColor = "#5c97d0",
  bottomColor = "hsl(170, 40%, 97%)",
  accentColor = "#634390",
  direction = "down",
  transparentTop = false,
  transparentBottom = false,
  className = "",
}: CurvedDividerProps) => {
  const topFill = transparentTop ? "transparent" : topColor;
  const bottomFill = transparentBottom ? "transparent" : bottomColor;

  // "down" = top section flows into the next section with a wave.
  // "up" = inverse wave for the opposite transition direction.
  const waveDown = (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px] block">
      <rect width="1440" height="120" fill={topFill} />
      <path
        d="M0,34 C180,86 360,-6 540,34 C720,74 900,-6 1080,34 C1260,74 1350,24 1440,34 L1440,120 L0,120 Z"
        fill={bottomFill}
      />
      <path
        d="M0,34 C180,86 360,-6 540,34 C720,74 900,-6 1080,34 C1260,74 1350,24 1440,34"
        fill="none"
        stroke={accentColor}
        strokeOpacity="1"
        strokeWidth="6"
      />
    </svg>
  );

  const waveUp = (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px] block">
      <rect width="1440" height="120" fill={bottomFill} />
      <path
        d="M0,86 C180,34 360,126 540,86 C720,46 900,126 1080,86 C1260,46 1350,96 1440,86 L1440,0 L0,0 Z"
        fill={topFill}
      />
      <path
        d="M0,86 C180,34 360,126 540,86 C720,46 900,126 1080,86 C1260,46 1350,96 1440,86"
        fill="none"
        stroke={accentColor}
        strokeOpacity="1"
        strokeWidth="6"
      />
    </svg>
  );

  return (
    <div className={`w-full overflow-hidden leading-none ${className}`.trim()} style={{ marginTop: "-1px", marginBottom: "-1px" }}>
      {direction === "down" ? waveDown : waveUp}
    </div>
  );
};

export default CurvedDivider;
