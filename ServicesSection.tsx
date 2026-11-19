'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/constants';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import {
  MessageSquare,
  Headphones,
  Target,
  Clock,
  Database,
  DollarSign,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, any> = {
  MessageSquare,
  Headphones,
  Target,
  Clock,
  Database,
  DollarSign,
};

export default function ServicesSection() {
  return (
    <section className="lux-section lux-section-flip py-28 md:py-36">

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up">
            <div className="lux-pill">
              <span className="lux-pill-dot" />
              <span className="lux-pill-text">
                Comprehensive Capabilities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#F2F2F2] sm:text-4xl lg:text-5xl">
              Engineered For E-Commerce{' '}
              <span className="lux-metal-text">
                Conversion
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-[#92969D] sm:text-lg">
              We architect custom AI infrastructure tailored to your catalog, messaging channels, and sales pipeline.
            </p>
          </ScrollReveal>
        </div>

        {/* Services 3x2 Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || MessageSquare;
            const isFlagship = service.title === 'AI Revenue Recovery';

            return (
              <ScrollReveal key={service.title} direction="up" delay={0.08 * index}>
                <div
                  className={`lux-card group flex h-full flex-col justify-between p-8 ${isFlagship ? 'lux-card-accent' : ''}`}
                >
                  {isFlagship && (
                    <div className="absolute right-6 top-6 rounded-full border border-[#85C8E1]/30 bg-[#0F1A24]/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#F2F2F2]">
                      Flagship Solution
                    </div>
                  )}

                  <div>
                    <div
                      className={`lux-icon h-12 w-12 ${isFlagship ? '!border-[#85C8E1]/40 !text-white' : ''}`}
                    >
                      <Icon size={24} strokeWidth={2} aria-hidden="true" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-[#F2F2F2]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#92969D]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.04]">
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C7C9CD] transition-colors group-hover:text-white"
                    >
                      <span>Explore workflow</span>
                      <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
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
