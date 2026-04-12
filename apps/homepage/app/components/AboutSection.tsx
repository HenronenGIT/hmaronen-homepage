"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { InfoCardItem } from "../homepage-data";

type AboutSectionProps = {
  paragraphs: readonly string[];
  cards: InfoCardItem[];
};

const MOBILE_BREAKPOINT_PX = 960;

function readBorderBoxHeight(entry: ResizeObserverEntry): number {
  const [first] = entry.borderBoxSize ?? [];
  if (first) {
    return first.blockSize;
  }
  return entry.contentRect.height;
}

export default function AboutSection({ paragraphs, cards }: AboutSectionProps) {
  const leftCardRef = useRef<HTMLElement>(null);
  const [stackMaxHeightPx, setStackMaxHeightPx] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = leftCardRef.current;
    if (!el) {
      return;
    }

    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX}px)`);

    const applyHeight = (entry?: ResizeObserverEntry): void => {
      if (mq.matches) {
        setStackMaxHeightPx(null);
        return;
      }
      if (entry) {
        setStackMaxHeightPx(readBorderBoxHeight(entry));
        return;
      }
      const rect = el.getBoundingClientRect();
      setStackMaxHeightPx(rect.height);
    };

    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) {
        return;
      }
      applyHeight(entry);
    });

    const onMqChange = (): void => {
      applyHeight();
    };

    mq.addEventListener("change", onMqChange);
    ro.observe(el);
    applyHeight();

    return () => {
      mq.removeEventListener("change", onMqChange);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="section-shell reveal" id="about">
      <div className="shell about-section-grid">
        <div className="about-section-head section-copy">
          <p className="section-kicker">About</p>
          <h2 className="section-title">Lets keep it brief.</h2>
        </div>

        <article ref={leftCardRef} className="info-card about-copy-card">
          <div className="body-stack">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <div
          className="info-card-stack about-info-stack"
          style={
            stackMaxHeightPx !== null
              ? { maxHeight: `${stackMaxHeightPx}px` }
              : undefined
          }
        >
          {cards.map((card) => {
            const content = (
              <article key={card.label} className="info-card">
                <p className="eyebrow-label">{card.label}</p>
                <h3>{card.value}</h3>
                {card.detail ? <p>{card.detail}</p> : null}
              </article>
            );

            if (!card.href) {
              return content;
            }

            return (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="info-card-link"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
