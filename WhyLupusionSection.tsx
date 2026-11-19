'use client';

import { motion } from 'framer-motion';
import { whyLupusion } from '@/lib/constants';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Award, ShoppingCart, MessageSquare, Layers } from 'lucide-react';

const icons = [Award, ShoppingCart, MessageSquare, Layers];

export default function WhyLupusionSection() {
  return (
    <section className="lux-section lux-section-flip py-28 md:py-36">

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up">
            <div className="lux-pill">
              <span className="lux-pill-dot" />
              <span className="lux-pill-text">
                The Strategic Advantage
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#F2F2F2] sm:text-4xl lg:text-5xl">
              Why Forward-Thinking Brands{' '}
              <span className="lux-metal-text">
                Choose Lupusion
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-[#92969D] sm:text-lg">
              We do not build generic chatbot widgets. We engineer hardened, outcome-obsessed revenue recovery engines.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyLupusion.map((item, index) => {
            const Icon = icons[index] || Award;
            return (
              <ScrollReveal key={item.title} direction="up" delay={0.1 * index}>
                <div className="lux-card group flex h-full flex-col justify-between p-7">
                  <div>
                    <div className="lux-icon h-12 w-12">
                      <Icon size={24} strokeWidth={2} aria-hidden="true" />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-[#F2F2F2]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#92969D]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/[0.04] pt-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#92969D]/60 group-hover:text-[#C7C9CD]">
                      0{index + 1} // STANDARD
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
