export function Spotlight() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_72%)] blur-2xl animate-spotlight" />
      <div className="absolute right-[-8%] top-[18%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--fg)_8%,transparent),transparent_70%)] blur-xl" />
    </div>
  );
}
