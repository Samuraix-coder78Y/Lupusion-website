'use client';

import { motion } from 'framer-motion';
import { MessageSquareOff, Clock, TrendingDown, AlertCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

const problems = [
  {
    icon: Clock,
    title: 'The 5-Minute Lead Decay',
    stat: '80%',
    statLabel: 'drop in conversion when response takes > 5 mins',
    description:
      'In e-commerce, high-intent prospects move fast. When inquiries wait hours for a human rep, buyers have already purchased from competitors.',
  },
  {
    icon: MessageSquareOff,
    title: 'Silent Conversation Drop-offs',
    stat: '67%',
    statLabel: 'of WhatsApp and direct chats stall indefinitely',
    description:
      'Visitors express initial interest, ask about sizing, pricing, or shipping, and then drop off. Without structured recovery, that conversation is lost forever.',
  },
  {
    icon: TrendingDown,
    title: 'Inconsistent Manual Follow-ups',
    stat: '$10k+',
    statLabel: 'average monthly revenue silently abandoned',
    description:
      'Manual sales reps forget follow-up sequences or send repetitive generic prompts that irritate customers instead of resolving core objections.',
  },
];

export default function ProblemSection() {
  return (
    <section className="lux-section py-28 md:py-36">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up">
            <div className="lux-pill">
              <AlertCircle size={14} strokeWidth={2} className="text-[#92969D]" aria-hidden="true" />
              <span className="lux-pill-text">
                The Revenue Leak
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#F2F2F2] sm:text-4xl lg:text-5xl">
              Where E-Commerce Revenue{' '}
              <span className="bg-gradient-to-r from-[#92969D] via-[#C7C9CD] to-[#F2F2F2] bg-clip-text text-transparent">
                Silently Bleeds
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-[#92969D] sm:text-lg">
              You invest heavily to drive traffic and spark buyer conversations. Yet most prospective buyers vanish at the critical moment of intent.
            </p>
          </ScrollReveal>
        </div>

        {/* Problem Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} direction="up" delay={0.15 * index}>
                <div className="lux-card group flex h-full flex-col justify-between p-8">
                  {/* Subtle top corner accent */}
                  <div className="absolute right-6 top-6 h-1 w-1 rounded-full bg-[#92969D]/40 transition-colors group-hover:bg-[#F2F2F2]" />

                  <div>
                    <div className="lux-icon h-12 w-12">
                      <Icon size={24} strokeWidth={2} aria-hidden="true" />
                    </div>

                    <div className="mt-6">
                      <div className="text-2xl font-bold tracking-tight text-[#F2F2F2]">
                        {item.stat}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-[#92969D]">
                        {item.statLabel}
                      </div>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-[#F2F2F2]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#92969D]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/[0.04] pt-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#92969D]/70 group-hover:text-[#C7C9CD]">
                      Impact: Compounding Margin Loss
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
