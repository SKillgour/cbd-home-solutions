"use client";

import { useEffect } from "react";

export default function CBDScrollAnimations() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Fade + lift reveals
        const reveals = document.querySelectorAll(".cbd-reveal");
        reveals.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

        // Stagger groups
        const staggerGroups = document.querySelectorAll(".cbd-stagger-group");
        staggerGroups.forEach((group) => {
          const items = group.querySelectorAll(".cbd-stagger-item");
          gsap.fromTo(
            items,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: group,
                start: "top 85%",
                once: true,
              },
            }
          );
        });

        // Count-up stats
        const stats = document.querySelectorAll(".cbd-count-stat");
        stats.forEach((el) => {
          const target = parseFloat(el.getAttribute("data-target") || "0");
          const suffix = el.getAttribute("data-suffix") || "";
          const obj = { val: 0 };

          gsap.fromTo(
            obj,
            { val: 0 },
            {
              val: target,
              duration: 1.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
              onUpdate: () => {
                el.textContent =
                  Number.isInteger(target)
                    ? Math.round(obj.val).toString() + suffix
                    : obj.val.toFixed(1) + suffix;
              },
            }
          );
        });
      });
    };

    init();

    return () => {
      ctx?.revert();
    };
  }, []);

  return null;
}
