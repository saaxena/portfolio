import { BackgroundBeams } from "@/components/background-beams";
import { Spotlight } from "@/components/spotlight";

export function SiteBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,var(--dot)_1px,transparent_0)] [background-size:22px_22px]" />
      <div className="absolute inset-0 [background-image:linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_70%)]" />
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_28%,black)]" />
      <BackgroundBeams />
      <Spotlight />
    </div>
  );
}
