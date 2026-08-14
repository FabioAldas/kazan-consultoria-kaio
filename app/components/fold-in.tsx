"use client";

import { useEffect } from "react";

const SELECTOR = [
  ".offer__intro",
  ".offer__card",
  ".offer__close",
  ".process__intro",
  ".process__stage",
  ".process__impl .process__stage-head",
  ".process__impl-grid li",
  ".process__close",
  ".why__intro",
  ".why__card",
  ".why__close",
  ".about__copy",
  ".about__photo",
  ".nexo__copy",
  ".nexo__deck",
  ".nexo__inner > .video",
  ".partners__intro",
  ".partners__feature",
  ".partners__marquee",
  ".partners__close",
  ".cta__inner",
].join(", ");

export function FoldIn() {
  useEffect(() => {
    const nodes = document.querySelectorAll(SELECTOR);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      nodes.forEach((node) => node.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return null;
}
