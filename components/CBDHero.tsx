"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Clock } from "lucide-react";

export default function CBDHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        // Split heading into word spans
        const heading = headingRef.current;
        if (heading) {
          const text = heading.innerText;
          const words = text.split(" ");
          heading.innerHTML = words
            .map(
              (w) =>
                `<span class="hero-word" style="display:inline-block;overflow:hidden;vertical-align:bottom"><span class="hero-word-inner" style="display:inline-block">${w}</span></span>`
            )
            .join(" ");

          const inners = heading.querySelectorAll(".hero-word-inner");
          gsap.set(inners, { yPercent: 60, opacity: 0 });
          gsap.to(inners, {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power2.out",
            stagger: 0.15,
            delay: 0.3,
          });
        }

        // Sub text gentle drift
        if (subRef.current) {
          gsap.set(subRef.current, { opacity: 0, y: 16 });
          gsap.to(subRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power1.out",
            delay: 1.1,
          });
        }

        // CTAs drift up
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { opacity: 0, y: 16 });
          gsap.to(ctaRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power1.out",
            delay: 1.3,
          });
        }

        // Badge
        if (badgeRef.current) {
          gsap.set(badgeRef.current, { opacity: 0, y: 10 });
          gsap.to(badgeRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power1.out",
            delay: 1.5,
          });
        }
      });
    };

    init();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section className="cbd-hero">
      {/* Background Image */}
      <div className="cbd-hero-bg">
        <Image
          src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=1920&q=80"
          alt="Painter on ladder working on exterior house repaint"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="cbd-hero-overlay" />

      {/* Content */}
      <div className="cbd-hero-content">
        <div className="container py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="section-label mb-4" style={{ color: "var(--color-accent)" }}>
              Manawatu&apos;s Trusted Trades
            </div>

            <h1
              ref={headingRef}
              className="text-white leading-[1.05] mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
              }}
            >
              One Call. Every Job.
            </h1>

            <p
              ref={subRef}
              className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Painting, insulation, property maintenance and handyman services
              across Manawatu.
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-10">
              <Link href="/contact" className="cbd-btn-primary text-base px-7 py-3.5">
                Get a Free Quote
                <ArrowRight size={17} />
              </Link>
              <Link href="/services" className="cbd-btn-ghost text-base px-7 py-3.5">
                Our Services
              </Link>
            </div>

            <div ref={badgeRef}>
              <div className="hours-badge">
                <Clock size={14} className="text-[var(--color-accent)]" />
                <span>Mon-Sat 9am-5pm</span>
                <span className="text-white/40 mx-1">|</span>
                <a
                  href="tel:0800222249"
                  className="font-semibold hover:text-white transition-colors"
                >
                  0800 22 22 49
                </a>
                <Phone size={13} className="text-[var(--color-accent)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
