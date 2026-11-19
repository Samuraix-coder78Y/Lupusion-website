'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="lux-section lux-section-flip py-28 md:py-36">

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
        <ScrollReveal direction="up">
          <div className="lux-pill">
            <span className="lux-pill-dot" />
            <span className="lux-pill-text">
              Start Recovering Revenue Today
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="mt-8 text-4xl font-bold tracking-tight text-[#F2F2F2] sm:text-5xl lg:text-6xl">
            Stop Leaving E-Commerce Sales{' '}
            <span className="lux-metal-text">
              On The Table
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#92969D] sm:text-lg">
            Deploy an autonomous AI revenue recovery agent tailored to your brand. Seamlessly integrate with WhatsApp and your store in days.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary btn-lg group"
            >
              <span>Book an Architecture Demo</span>
              <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>

            <Link
              href="/solutions"
              className="btn-secondary btn-lg"
            >
              View System Architecture
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#92969D]">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} strokeWidth={2} className="text-[#C7C9CD]" aria-hidden="true" />
              <span>Production-Ready WhatsApp Cloud API</span>
            </div>
            <span className="hidden sm:inline text-white/10">•</span>
            <div>Zero Code Disruption to Existing Stack</div>
            <span className="hidden sm:inline text-white/10">•</span>
            <div>Dedicated Implementation Architecture</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
