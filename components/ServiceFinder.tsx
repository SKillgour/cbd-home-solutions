"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";

type Problem = {
  id: string;
  label: string;
  emoji: string;
};

type ServiceResult = {
  name: string;
  description: string;
  detail: string;
};

const PROBLEMS: Problem[] = [
  {
    id: "repaint",
    label: "My house needs a repaint",
    emoji: "🎨",
  },
  {
    id: "cold",
    label: "It's too cold in winter",
    emoji: "🥶",
  },
  {
    id: "repairs",
    label: "Something needs fixing",
    emoji: "🔧",
  },
  {
    id: "odd-jobs",
    label: "Just a few odd jobs",
    emoji: "📋",
  },
];

const RESULTS: Record<string, ServiceResult> = {
  repaint: {
    name: "Painting Services",
    description:
      "Interior and exterior repaints done right the first time. We prep properly, use quality paint, and leave the site tidy.",
    detail:
      "Whether it's a full interior refresh, exterior weatherboard, or a bold feature wall, CBD Painters has the crew and the experience to get it done cleanly and on time.",
  },
  cold: {
    name: "Insulation Services",
    description:
      "Keep the heat in and the cold out. We install ceiling, underfloor and wall insulation to make your home noticeably warmer.",
    detail:
      "A properly insulated home can make a huge difference in your power bills and comfort. We assess what your home needs and install the right product for your situation.",
  },
  repairs: {
    name: "Property Maintenance",
    description:
      "General repairs, fixes and upkeep for homes and commercial properties. We handle the stuff that gets put off.",
    detail:
      "Rotting weatherboards, leaky spouting, worn cladding - if it needs fixing, we can tackle it. CBD Home Solutions is the one call for general property maintenance in Manawatu.",
  },
  "odd-jobs": {
    name: "Handyman Services",
    description:
      "No job too small. We take care of those odd jobs that just need doing.",
    detail:
      "From hanging doors to patching walls, assembling flat-pack furniture to fixing that dripping tap - if it's a small job that needs a capable person, call us.",
  },
};

export default function ServiceFinder() {
  const [selected, setSelected] = useState<string | null>(null);

  const result = selected ? RESULTS[selected] : null;

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-[var(--color-surface)] overflow-hidden">
      {/* Header */}
      <div className="bg-[var(--color-primary)] px-8 py-7">
        <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
          Not Sure What You Need?
        </p>
        <h3
          className="text-white text-2xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
        >
          Tell us the problem
        </h3>
        <p className="text-white/60 text-sm mt-1">
          We&apos;ll point you to the right service in one step.
        </p>
      </div>

      <div className="p-8">
        {!result ? (
          /* Step 1: Pick a problem */
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
              Step 1 of 2 - What best describes your situation?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROBLEMS.map((p) => (
                <button
                  key={p.id}
                  className="finder-option"
                  onClick={() => setSelected(p.id)}
                >
                  <span className="text-2xl mb-2 block">{p.emoji}</span>
                  <span
                    className="font-semibold text-[var(--color-text)] text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {p.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Step 2: Result */
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
              Step 2 of 2 - Here&apos;s what you need
            </p>

            <div className="bg-[var(--color-surface)] rounded-xl p-6 mb-6">
              <div className="cbd-divider" />
              <h4
                className="text-[var(--color-primary)] text-xl font-extrabold mb-2"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
              >
                {result.name}
              </h4>
              <p className="text-[var(--color-text)] font-medium text-sm mb-3">
                {result.description}
              </p>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {result.detail}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="cbd-btn-primary">
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => setSelected(null)}
                className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] font-medium text-sm transition-colors"
              >
                <RotateCcw size={14} />
                Start over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
