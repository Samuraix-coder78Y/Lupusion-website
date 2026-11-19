'use client';

import { motion } from 'framer-motion';
import { Bot, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import Link from 'next/link';

export default function SolutionOverviewSection() {
  return (
    <section className="lux-section lux-section-flip py-28 md:py-36">
      {/* Background glow resembling NeuroNest sphere/horizon */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[450px] w-[1100px] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-[#202329]/40 via-[#111317]/20 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="up">
              <div className="lux-pill">
                <span className="lux-pill-dot" />
                <span className="lux-pill-text">
                  The Lupusion Engine
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#F2F2F2] sm:text-4xl lg:text-5xl">
                An Autonomous Sales Force{' '}
                <span className="lux-metal-text">
                  That Never Sleeps
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-[#92969D] sm:text-lg">
                Lupusion replaces brittle keyword bots with adaptive AI agents engineered specifically for e-commerce. It actively detects customer hesitation, jumps in via WhatsApp Business Cloud, understands natural product questions, handles friction, and guides customers straight to checkout.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'Outcome-Driven Architecture',
                    desc: 'Optimized strictly for revenue recovery and closed checkouts, not superficial chat volume.',
                  },
                  {
                    title: 'Human-Nuanced Objection Handling',
                    desc: 'Answers pricing doubts, shipping queries, and sizing hesitations with conversational finesse.',
                  },
                  {
                    title: 'Zero Operational Friction',
                    desc: 'Directly hooks into WhatsApp Business API, Make.com, Airtable, and your existing CRM.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#C7C9CD]/30 bg-[#202329]/50 text-[#C7C9CD]">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F2F2F2]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F2F2F2]">{item.title}</h4>
                      <p className="text-xs text-[#92969D] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="mt-10">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#C7C9CD] transition-colors hover:text-white group"
                >
                  <span>Explore full technical architecture</span>
                  <ArrowUpRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Mockup / Interactive System Visual */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="lux-panel lux-card-accent !rounded-2xl p-6">
                {/* Header Mockup Bar */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                    <span className="ml-2 font-mono text-xs text-[#92969D]">
                      lupusion.agent.recovery // active
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C7C9CD] opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F2F2F2]"></span>
                    </span>
                    <span className="text-xs font-mono text-[#C7C9CD]">SYNCED</span>
                  </div>
                </div>

                {/* Simulated Conversation Feed */}
                <div className="mt-6 space-y-4">
                  {/* Lead message */}
                  <div className="flex flex-col items-start">
                    <span className="mb-1 text-[11px] font-mono text-[#92969D]">
                      Customer (WhatsApp) • 23s ago
                    </span>
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#202329]/80 px-4 py-3 text-sm text-[#C7C9CD] border border-white/5">
                      &quot;Hey, I left the black parka in my cart because I wasn&apos;t sure if size L runs large or true to size?&quot;
                    </div>
                  </div>

                  {/* AI Agent Analysis Tag */}
                  <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-[#08090B]/60 px-3 py-1 font-mono text-[11px] text-[#92969D]">
                    <Zap size={13} strokeWidth={2} className="text-[#C7C9CD]" aria-hidden="true" />
                    <span>Intent: Sizing Objection • Match Confidence: 99.4%</span>
                  </div>

                  {/* Lupusion Agent Response */}
                  <div className="flex flex-col items-end">
                    <span className="mb-1 text-[11px] font-mono text-[#C7C9CD]">
                      Lupusion AI Agent • Just now
                    </span>
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-[#202329] to-[#111317] border border-[#C7C9CD]/20 px-4 py-3 text-sm text-[#F2F2F2] shadow-lg">
                      &quot;Great question! The Arctic Parka has a tailored fit. If you usually layer heavy knits underneath, Size L is ideal. I have reserved your cart with 1-click express dispatch — would you like the link?&quot;
                    </div>
                  </div>

                  {/* Outcome Tag */}
                  <div className="rounded-xl border border-white/[0.06] bg-[#08090B]/50 p-3 mt-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#92969D]">Outcome Status</span>
                      <span className="text-[#C7C9CD] font-semibold">RECOVERED ($189.00)</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#202329]">
                      <div className="h-full w-full bg-gradient-to-r from-[#92969D] via-[#C7C9CD] to-[#F2F2F2]" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
