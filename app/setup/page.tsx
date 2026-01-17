"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Stage = "early" | "scaling" | "established";

export default function SetupPage() {
  const [stage, setStage] = useState<Stage>("early");
  const router = useRouter();

  return (
    <main className="min-h-screen w-full bg-background text-foreground transition-colors duration-300">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-36 right-[-120px] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute bottom-[-180px] left-[-140px] h-[560px] w-[560px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-14">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
            Let&apos;s set up your workspace
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us about your company so we can tailor your lead scoring models.
          </p>
        </header>

        {/* Step box */}
        <section className="mt-10 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-blue-600/20 text-xs font-semibold text-blue-500 ring-1 ring-blue-500/20">
                1
              </div>
              <div className="text-sm font-semibold text-foreground">Business Basics</div>
            </div>
            <div className="text-xs text-muted-foreground">Step 1 of 4</div>
          </div>

          <div className="mt-4 h-2 w-full rounded-full bg-secondary">
            <div className="h-2 w-[25%] rounded-full bg-blue-600" />
          </div>

          <div className="mt-3 text-xs text-muted-foreground">Next: Target Audience & ICP</div>
        </section>

        {/* Form */}
        <section className="mt-6 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-colors duration-300">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-medium text-muted-foreground">
                Business Name
              </label>
              <input
                className="h-11 w-full rounded-xl border border-input bg-background/50 px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10 transition-colors"
                placeholder="e.g. Acme Corp"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium text-muted-foreground">
                Company Website
              </label>
              <input
                className="h-11 w-full rounded-xl border border-input bg-background/50 px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10 transition-colors"
                placeholder="example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium text-muted-foreground">
                Primary Industry
              </label>
              <select className="h-11 w-full rounded-xl border border-input bg-background/50 px-4 text-sm text-foreground outline-none focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10 transition-colors">
                <option value="">Select industry...</option>
                <option>SaaS</option>
                <option>Agency</option>
                <option>E-commerce</option>
                <option>Services</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium text-muted-foreground">
                Business Model
              </label>
              <select className="h-11 w-full rounded-xl border border-input bg-background/50 px-4 text-sm text-foreground outline-none focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10 transition-colors">
                <option value="">Select type...</option>
                <option>B2B</option>
                <option>B2C</option>
                <option>B2B2C</option>
                <option>Marketplace</option>
              </select>
            </div>
          </div>

          {/* Stage */}
          <div className="mt-6">
            <label className="mb-3 block text-xs font-medium text-muted-foreground">
              Business Stage
            </label>

            <div className="grid gap-4 md:grid-cols-3">
              <StageCard
                title="Early Stage"
                desc="Finding product-market fit. Less than 10 employees."
                active={stage === "early"}
                onClick={() => setStage("early")}
              />
              <StageCard
                title="Scaling"
                desc="Growing revenue and team. 10-100 employees."
                active={stage === "scaling"}
                onClick={() => setStage("scaling")}
              />
              <StageCard
                title="Established"
                desc="Stable market presence. 100+ employees."
                active={stage === "established"}
                onClick={() => setStage("established")}
              />
            </div>
          </div>

          {/* Footer buttons */}
          <div className="mt-6 border-t border-border pt-5">
            <div className="flex items-center justify-between">
              <button type="button" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cancel
              </button>

              <button
                type="button"
                onClick={() => router.push("/dashboard")}
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                Save &amp; Continue →
              </button>
            </div>
          </div>
        </section>

        {/* Help footer */}
        <footer className="mt-6 text-center text-xs text-muted-foreground/80">
          Need help setting up?{" "}
          <a className="text-blue-500 hover:text-blue-400" href="#">
            Read our documentation
          </a>{" "}
          or{" "}
          <a className="text-blue-500 hover:text-blue-400" href="#">
            contact support
          </a>
          .
        </footer>
      </div>
    </main>
  );
}

function StageCard({
  title,
  desc,
  active,
  onClick,
}: {
  title: string;
  desc: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative w-full rounded-2xl border p-4 text-left transition-all duration-200",
        "bg-card/50 hover:bg-card hover:shadow-md",
        active ? "border-blue-500/60 ring-4 ring-blue-500/10 bg-card" : "border-border",
      ].join(" ")}
    >
      <span
        className={[
          "absolute right-4 top-4 h-4 w-4 rounded-full border transition-colors",
          active ? "border-blue-400 bg-blue-500/30" : "border-border",
        ].join(" ")}
      />
      <div className="text-sm font-semibold text-foreground">{title}</div>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{desc}</p>
    </button>
  );
}
