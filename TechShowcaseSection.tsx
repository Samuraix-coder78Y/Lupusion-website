'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStack } from '@/lib/constants';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import {
  MessageSquareCode,
  Workflow,
  Database,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const techIcons = [MessageSquareCode, Workflow, Database, Cpu];

export default function TechShowcaseSection() {
  const [selectedTech, setSelectedTech] = useState(0);

  return (
    <section className="lux-section py-28 md:py-36">

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up">
            <div className="lux-pill">
              <span className="lux-pill-dot" />
              <span className="lux-pill-text">
                Integration & Tech Stack
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#F2F2F2] sm:text-4xl lg:text-5xl">
              Enterprise Infrastructure,{' '}
              <span className="lux-metal-text">
                Zero Overhead
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-[#92969D] sm:text-lg">
              We leverage enterprise-grade APIs and orchestration platforms to guarantee real-time latency, high availability, and rock-solid privacy.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Technology Matrix */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Tech Stack Selector */}
          <div className="space-y-4 lg:col-span-5">
            {techStack.map((tech, idx) => {
              const Icon = techIcons[idx] || Layers;
              const isSelected = selectedTech === idx;

              return (
                <button
                  key={tech.name}
                  onClick={() => setSelectedTech(idx)}
                  className={`lux-card w-full text-left p-5 ${isSelected ? 'lux-card-accent !border-[#9DDEEE]/40' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`lux-icon h-11 w-11 ${isSelected ? '!border-[#85C8E1]/50 !text-white' : ''}`}
                    >
                      <Icon size={20} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-semibold text-[#F2F2F2]">
                          {tech.name}
                        </h4>
                        <div
                          className={`h-2 w-2 rounded-full transition-colors ${
                            isSelected ? 'bg-[#9DDEEE] shadow-[0_0_10px_rgba(122,214,238,0.7)]' : 'bg-transparent'
                          }`}
                        />
                      </div>
                      <p className="mt-1 text-xs text-[#92969D] line-clamp-1">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Architectural Blueprint Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {(() => {
                const tech = techStack[selectedTech];
                const Icon = techIcons[selectedTech] || Layers;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="lux-panel lux-card-accent !rounded-2xl p-8 md:p-10"
                  >
                    {/* Architectural header */}
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
                      <div className="flex items-center gap-3">
                        <div className="lux-icon h-10 w-10 !rounded-lg !text-[#F2F2F2]">
                          <Icon size={20} strokeWidth={2} aria-hidden="true" />
                        </div>
                        <div>
                          <span className="font-mono text-xs uppercase tracking-wider text-[#92969D]">
                            Active Component
                          </span>
                          <h3 className="text-lg font-bold text-[#F2F2F2]">
                            {tech.name}
                          </h3>
                        </div>
                      </div>
                      <span className="rounded-full border border-white/10 bg-[#202329]/60 px-3 py-1 font-mono text-[11px] text-[#C7C9CD]">
                        LATENCY &lt; 850MS
                      </span>
                    </div>

                    {/* Architectural description */}
                    <p className="mt-6 text-sm leading-relaxed text-[#92969D]">
                      {tech.description}
                    </p>

                    {/* Operational Metrics Mockup */}
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/[0.04] bg-[#08090B]/80 p-4">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#92969D]">
                          <ShieldCheck size={16} strokeWidth={2} className="text-[#C7C9CD]" aria-hidden="true" />
                          <span>SECURITY PROTOCOL</span>
                        </div>
                        <p className="mt-2 text-xs text-[#F2F2F2]">
                          End-to-End Encryption, strict sandboxed API tokens, GDPR & Meta Cloud Verified compliant.
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/[0.04] bg-[#08090B]/80 p-4">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#92969D]">
                          <Zap size={16} strokeWidth={2} className="text-[#C7C9CD]" aria-hidden="true" />
                          <span>SYNCHRONIZATION RATE</span>
                        </div>
                        <p className="mt-2 text-xs text-[#F2F2F2]">
                          Bi-directional webhook ingestion syncing conversations with CRM pipelines in under 1 second.
                        </p>
                      </div>
                    </div>

                    {/* Pipeline representation */}
                    <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#202329]/20 p-4 font-mono text-xs text-[#92969D]">
                      <div className="flex items-center justify-between">
                        <span>PIPELINE ROUTING:</span>
                        <span className="text-[#C7C9CD]">Cloud_API ➔ Make_Scenario ➔ AI_Core ➔ Airtable_CRM</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
