"use client";

import { Brain, Layers, Search, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";

const stages = [
  { icon: Layers, label: "Tokens", hint: "chunk + parse" },
  { icon: Search, label: "Retrieve", hint: "embed + FAISS" },
  { icon: Brain, label: "Reason", hint: "LLM + tools" },
  { icon: Sparkles, label: "Output", hint: "grounded text" },
];

export function NeuralFlow() {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-3xl border border-line bg-[var(--card)] p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-mute">System graph</p>
        <h2 className="mt-2 font-display text-2xl text-foreground md:text-3xl">A neural net for products</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-mute">
          This is how I ship GenAI: not a single prompt, but layers that pass signal forward — the same idea as a
          network, applied to retrieval, tools, and evaluation.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <div key={stage.label} className="relative rounded-2xl border border-line px-4 py-5">
                <span className="absolute -top-2 right-3 h-2 w-2 rounded-full bg-accent animate-pulseSoft" />
                <Icon className="h-5 w-5 text-accent" />
                <p className="mt-3 font-display text-lg text-foreground">{stage.label}</p>
                <p className="text-xs text-mute">{stage.hint}</p>
                {i < stages.length - 1 ? (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-accent/50 sm:block" />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
