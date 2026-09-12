"use client";

import dynamic from "next/dynamic";

const NeuralPortrait = dynamic(() => import("./neural-portrait").then((m) => m.NeuralPortrait), {
  ssr: false,
  loading: () => <div className="h-[380px] w-full md:h-[460px]" />,
});

export function HeroVisual() {
  return <NeuralPortrait />;
}
