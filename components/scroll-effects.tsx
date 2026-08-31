"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parallaxItems = prefersReducedMotion
      ? []
      : Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    const updateScrollState = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
        root.style.setProperty("--scroll-progress", `${progress}%`);
        root.style.setProperty("--scroll-progress-scale", `${progress / 100}`);
        root.dataset.scrolled = window.scrollY > 36 ? "true" : "false";

        parallaxItems.forEach((item) => {
          const bounds = item.getBoundingClientRect();
          const speed = Number(item.dataset.parallaxSpeed || "0.08");
          const centerOffset = window.innerHeight / 2 - (bounds.top + bounds.height / 2);
          const offset = Math.max(-42, Math.min(42, centerOffset * speed));
          item.style.setProperty("--parallax-y", `${offset}px`);
        });

        frame = 0;
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
      delete root.dataset.scrolled;
    };
  }, []);

  return <div aria-hidden="true" className="scroll-progress" />;
}
