'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { workflowSteps } from '@/lib/constants';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import {
  Radar,
  MessageCircle,
  Filter,
  Shield,
  RefreshCw,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

const iconsMap: Record<string, any> = {
  Radar,
  MessageCircle,
  Filter,
  Shield,
  RefreshCw,
  TrendingUp,
};

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="lux-section py-28 md:py-36">

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up">
            <div className="lux-pill">
              <span className="lux-pill-dot" />
              <span className="lux-pill-text">
                Autonomous Architecture
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#F2F2F2] sm:text-4xl lg:text-5xl">
              The Six-Stage{' '}
              <span className="lux-metal-text">
                Recovery Pipeline
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-[#92969D] sm:text-lg">
              A closed-loop autonomous system built specifically to capture hesitation, eliminate friction, and convert dormant leads into attributed sales.
            </p>
          </ScrollReveal>
        </div>

        {/* Workflow Horizontal Step Progress Bar */}
        <div className="mt-16 hidden lg:block">
          <div className="relative flex items-center justify-between">
            {/* Connecting Track Line */}
            <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white/[0.07]" />
            <div
              className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-[#2877C7]/70 via-[#A9E8F4] to-[#F2F2F2] transition-all duration-500"
              style={{ width: `${(activeStep / (workflowSteps.length - 1)) * 100}%` }}
            />

            {workflowSteps.map((step, idx) => {
              const Icon = iconsMap[step.icon] || Radar;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="group relative z-10 flex flex-col items-center focus:outline-none"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'border-[#9DDEEE]/60 bg-[#14202B] text-white shadow-[0_0_22px_rgba(80,175,215,0.3)]'
                        : isPast
                        ? 'border-[#C7C9CD]/60 bg-[#0C1015] text-[#C7C9CD]'
                        : 'border-white/10 bg-[#07090C] text-[#92969D] group-hover:border-[#85C8E1]/30 group-hover:text-[#C7D0D8]'
                    }`}
                  >
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <span
                    className={`mt-3 font-mono text-xs font-semibold tracking-wider uppercase transition-colors ${
                      isActive ? 'text-[#F2F2F2]' : 'text-[#92969D]'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Spotlight */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {(() => {
              const current = workflowSteps[activeStep];
              const Icon = iconsMap[current.icon] || Radar;

              return (
                <motion.div
                  key={current.number}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="lux-panel lux-card-accent p-8 md:p-10"
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-4xl font-extrabold text-[#C7C9CD]/30">
                          {current.number}
                        </span>
                        <div className="lux-icon h-12 w-12 !text-[#F2F2F2]">
                          <Icon size={24} strokeWidth={2} aria-hidden="true" />
                        </div>
                      </div>
                      <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#F2F2F2]">
                        {current.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#92969D]">
                        {current.description}
                      </p>
                    </div>

                    <div className="lux-inner p-6 md:col-span-8">
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} strokeWidth={2.5} className="text-[#C7C9CD]" aria-hidden="true" />
                          <span className="font-mono text-xs uppercase tracking-wider text-[#C7C9CD]">
                            Stage Logic & Automation Parameters
                          </span>
                        </div>
                        <span className="font-mono text-xs text-[#92969D]">
                          STATUS: OPERATIONAL
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="lux-inner p-4">
                          <span className="text-[11px] font-mono uppercase text-[#92969D]">
                            Trigger Condition
                          </span>
                          <p className="mt-1 text-xs text-[#C7C9CD]">
                            {activeStep === 0 && 'Cart hesitation > 120s or WhatsApp inactivity trigger'}
                            {activeStep === 1 && 'Personalized context injection via WhatsApp Cloud API'}
                            {activeStep === 2 && 'Intent scoring & product requirement extraction'}
                            {activeStep === 3 && 'Dynamic objection rebuttal matching trained knowledge'}
                            {activeStep === 4 && 'Scheduled non-intrusive cadence via Make.com scenario'}
                            {activeStep === 5 && 'Instant checkout generation & CRM order attributed'}
                          </p>
                        </div>
                        <div className="lux-inner p-4">
                          <span className="text-[11px] font-mono uppercase text-[#92969D]">
                            Business Output
                          </span>
                          <p className="mt-1 text-xs text-[#C7C9CD]">
                            {activeStep === 0 && 'Zero undetected lost visitors across all touchpoints'}
                            {activeStep === 1 && '98%+ WhatsApp open rate with direct human-like tone'}
                            {activeStep === 2 && 'Priority routing for high-ticket prospective purchases'}
                            {activeStep === 3 && 'Resolves buyer anxiety around delivery, price & fit'}
                            {activeStep === 4 && 'Recovers prospects days after initial abandonment'}
                            {activeStep === 5 && 'Direct attribution to top-line e-commerce GMV'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>

        {/* Mobile View: All 6 Cards in Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {workflowSteps.map((step, idx) => {
            const Icon = iconsMap[step.icon] || Radar;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`lux-card cursor-pointer p-5 ${
                  activeStep === idx ? 'lux-card-accent !border-[#9DDEEE]/40' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-[#92969D]">{step.number}</span>
                  <Icon size={20} strokeWidth={2} className="text-[#C7C9CD]" aria-hidden="true" />
                </div>
                <h4 className="mt-2 text-base font-semibold text-[#F2F2F2]">{step.title}</h4>
                <p className="mt-1 text-xs text-[#92969D]">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
