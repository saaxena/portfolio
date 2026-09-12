"use client";

export function BackgroundBeams() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      {[8, 22, 36, 50, 64, 78, 92].map((y, i) => (
        <path
          key={y}
          d={`M -80 ${y} Q 20 ${y - 18} 40 ${y} T 90 ${y} T 140 ${y + 10}`}
          fill="none"
          stroke="url(#beam)"
          strokeWidth="0.35"
          vectorEffect="non-scaling-stroke"
          className="animate-beam"
          style={{ animationDelay: `${i * 0.7}s` }}
          pathLength={220}
          strokeDasharray="40 180"
        />
      ))}
    </svg>
  );
}
