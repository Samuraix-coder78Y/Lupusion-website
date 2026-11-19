'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { pricingTiers, PRICING_NOTE } from '@/lib/pricing';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function PricingCards() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section id="pricing" className="lux-section py-28 md:py-36">

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up">
            <div className="lux-pill">
              <span className="lux-pill-dot" />
              <span className="lux-pill-text">
                Transparent Investment
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#F2F2F2] sm:text-4xl lg:text-5xl">
              Predictable Pricing,{' '}
              <span className="lux-metal-text">
                Measurable Recovery
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-[#92969D] sm:text-lg">
              Choose the automation tier tailored to your monthly inquiry volume and operational complexity.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {pricingTiers.map((tier, index) => {
            const isFlagship = tier.highlighted;

            return (
              <ScrollReveal
                key={tier.id}
                direction="up"
                delay={0.15 * index}
                className="flex"
              >
                <div
                  className={`lux-card flex w-full flex-col justify-between !overflow-visible p-8 md:p-10 ${
                    isFlagship ? 'lux-card-accent !border-[#C7DCE8]/45 z-20' : ''
                  }`}
                >
                  {/* Flagship Badge */}
                  {isFlagship && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-[#C7C9CD]/40 bg-gradient-to-r from-[#202329] via-[#C7C9CD]/20 to-[#202329] px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#F2F2F2] shadow-lg backdrop-blur-md">
                        <Sparkles size={13} strokeWidth={2} className="text-[#F2F2F2]" aria-hidden="true" />
                        <span>{tier.badge || 'Most Popular — Best Value'}</span>
                      </div>
                    </div>
                  )}

                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold tracking-tight text-[#F2F2F2]">
                        {tier.name}
                      </h3>
                      {isFlagship && (
                        <span className="font-mono text-xs uppercase tracking-wider text-[#C7C9CD]">
                          FLAGSHIP
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[#92969D]">
                      {tier.description}
                    </p>

                    {/* Price display */}
                    <div className="mt-6 flex items-baseline gap-1 border-b border-white/[0.06] pb-6">
                      <span className="text-sm font-semibold text-[#92969D]">$</span>
                      <span className="text-5xl font-extrabold tracking-tight text-[#F2F2F2]">
                        {tier.price}
                      </span>
                      <span className="text-sm text-[#92969D] font-mono">
                        {tier.billingPeriod}
                      </span>
                    </div>

                    {/* Feature list */}
                    <div className="mt-6 space-y-3.5">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#92969D]">
                        Included in package:
                      </span>
                      {tier.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                              isFlagship
                                ? 'bg-[#F2F2F2] text-[#08090B]'
                                : 'bg-[#202329] text-[#C7C9CD]'
                            }`}
                          >
                            <Check size={11} strokeWidth={3} aria-hidden="true" />
                          </div>
                          <span
                            className={`text-sm ${
                              isFlagship ? 'text-[#F2F2F2] font-medium' : 'text-[#C7C9CD]'
                            }`}
                          >
                            {feat.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="mt-8 pt-6 border-t border-white/[0.04]">
                    <Link
                      href={tier.ctaHref}
                      className={`group flex w-full ${isFlagship ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Mandatory Configurable Pricing Note */}
        <div className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-[#92969D]/80">
            {PRICING_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
