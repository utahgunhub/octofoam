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
  topColor = "hsl(225, 100%, 32%)",
  bottomColor = "hsl(170, 40%, 97%)",
  accentColor = "hsl(160, 100%, 50%)",
  direction = "down",
  transparentTop = false,
  transparentBottom = false,
  className = "",
}: CurvedDividerProps) => {
  const topFill = transparentTop ? "transparent" : topColor;
  const bottomFill = transparentBottom ? "transparent" : bottomColor;

  // "down" = curve bows downward (top color on top, bottom peeks up as a bowl)
  // "up" = curve bows upward (bottom color on bottom, top drapes down)
  const curveDown = (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px] block">
      <rect width="1440" height="120" fill={topFill} />
      <path d="M0,20 Q720,140 1440,20 L1440,120 L0,120 Z" fill={accentColor} />
      <path d="M0,24 Q720,144 1440,24 L1440,120 L0,120 Z" fill={bottomFill} />
    </svg>
  );

  const curveUp = (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px] block">
      <rect width="1440" height="120" fill={bottomFill} />
      <path d="M0,100 Q720,-20 1440,100 L1440,0 L0,0 Z" fill={accentColor} />
      <path d="M0,96 Q720,-24 1440,96 L1440,0 L0,0 Z" fill={topFill} />
    </svg>
  );

  return (
    <div className={`w-full overflow-hidden leading-none ${className}`.trim()} style={{ marginTop: "-1px", marginBottom: "-1px" }}>
      {direction === "down" ? curveDown : curveUp}
    </div>
  );
};

export default CurvedDivider;
