'use client';

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
  ArrowRight,
  Zap,
  Lock,
  LineChart,
} from 'lucide-react';
import Link from 'next/link';

// Strongly typed icon dictionary ensuring guaranteed fallback
const iconDictionary = {
  Radar,
  MessageCircle,
  Filter,
  Shield,
  RefreshCw,
  TrendingUp,
} as const;

const stageDetails = [
  {
    trigger: 'Abandoned cart or unanswered WhatsApp inquiry detected > 90s.',
    action: 'Event packet dispatched via webhook to central orchestration layer.',
    aiBehavior: 'Scans catalog inventory, customer session data, and cart value.',
    kpi: '100% detection rate across web storefront and direct messages.',
  },
  {
    trigger: 'Verified high-intent lead ready for personalized contact.',
    action: 'WhatsApp Business Cloud API initiates dynamic context-rich message.',
    aiBehavior: 'Humanized tone, natural conversational phrasing, no generic bot boilerplate.',
    kpi: '98%+ message open rate, 45%+ direct conversational response rate.',
  },
  {
    trigger: 'Prospect replies with product, sizing, or availability questions.',
    action: 'Intent classification model segments customer purchasing urgency.',
    aiBehavior: 'Distinguishes genuine buyers needing clarity from casual price checkers.',
    kpi: 'Prioritizes high-margin transactions with immediate automated routing.',
  },
  {
    trigger: 'Customer raises friction points (pricing, delivery time, return policy).',
    action: 'Dynamic sales framework matches objection to validated resolution playbook.',
    aiBehavior: 'Addresses doubts empathetically, provides precise shipping timelines and guarantees.',
    kpi: '72% objection resolution success rate without human agent intervention.',
  },
  {
    trigger: 'Conversation remains open without immediate checkout.',
    action: 'Make.com scheduler schedules polite, non-intrusive re-engagement cadence.',
    aiBehavior: 'Adapts message timing based on user timezone and previous reply habits.',
    kpi: 'Recovers dormant leads up to 5 days after initial session drop-off.',
  },
  {
    trigger: 'Customer indicates intent to finalize purchase.',
    action: 'Generates 1-click pre-filled checkout link directly in WhatsApp.',
    aiBehavior: 'Syncs conversion attribution to Airtable CRM and Shopify analytics.',
    kpi: 'Attributed top-line revenue recovery deposited directly to your store GMV.',
  },
];

// Bento layout (12-col on lg, 6-col on md): 7+5 / 4+4+4 / 12
const bentoSpans = [
  'md:col-span-6 lg:col-span-7',
  'md:col-span-6 lg:col-span-5',
  'md:col-span-6 lg:col-span-4',
  'md:col-span-6 lg:col-span-4',
  'md:col-span-6 lg:col-span-4',
  'md:col-span-6 lg:col-span-12',
];

export default function SolutionsPage() {
  return (
    <div className="bg-[#08090B] pt-24 text-[#F2F2F2]">
      {/* 1. Hero Section */}
      <section className="lux-section !border-t-0 py-24 lg:py-32">

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
          <ScrollReveal direction="up">
            <div className="lux-pill">
              <span className="lux-pill-dot" />
              <span className="lux-pill-text">
                Comprehensive Architecture
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-[#F2F2F2] sm:text-6xl lg:text-7xl">
              The AI Revenue{' '}
              <span className="lux-metal-text">
                Recovery System
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#92969D] sm:text-xl">
              An enterprise-grade autonomous pipeline combining WhatsApp Business API, intelligent objection handling, and real-time CRM orchestration to recover lost e-commerce transactions.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="btn-primary"
              >
                <span>Deploy Recovery System</span>
                <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <Link
                href="#pipeline"
                className="btn-secondary"
              >
                Inspect Workflow Pipeline
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Key Architecture Metrics */}
      <section className="lux-strip relative py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                metric: '< 90s',
                label: 'Average Engagement Latency',
                desc: 'Instant contact before buyer intent diminishes',
              },
              {
                metric: '98%',
                label: 'Message Open Rate',
                desc: 'Delivered directly into WhatsApp personal chat',
              },
              {
                metric: '24 / 7 / 365',
                label: 'Autonomous Coverage',
                desc: 'Zero downtime during holidays or night peak hours',
              },
              {
                metric: '100%',
                label: 'CRM Synchronization',
                desc: 'Bi-directional tracking into Airtable and Shopify/Klaviyo',
              },
            ].map((stat, idx) => (
              <div key={idx} className="border-l border-[#85C8E1]/20 pl-6">
                <div className="text-3xl font-bold tracking-tight text-[#F2F2F2]">
                  {stat.metric}
                </div>
                <div className="mt-1 text-sm font-semibold text-[#C7C9CD]">
                  {stat.label}
                </div>
                <p className="mt-1 text-xs text-[#92969D]">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Six-Step Recovery Workflow — Bento Grid */}
      <section id="pipeline" className="lux-section py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal direction="up">
              <div className="section-label">
                <span>Autonomous Workflow</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#F2F2F2] sm:text-4xl lg:text-5xl">
                End-to-End <span className="lux-metal-text">Pipeline</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="mt-4 text-base text-[#92969D]">
                A continuous, closed-loop recovery sequence engineered specifically to detect hesitation and systematically convert abandoned interest into completed checkouts.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-12">
            {workflowSteps.map((step, idx) => {
              const Icon = iconDictionary[step.icon as keyof typeof iconDictionary] || Radar;
              const detail = stageDetails[idx];
              const isLast = idx === workflowSteps.length - 1;
              const rows = [
                { label: 'Activation Trigger', text: detail.trigger },
                { label: 'Platform Action', text: detail.action },
                { label: 'AI Agent Behavior', text: detail.aiBehavior },
                { label: 'Quantified Impact', text: detail.kpi },
              ];

              return (
                <ScrollReveal
                  key={step.number}
                  direction="up"
                  delay={0.06 * idx}
                  className={bentoSpans[idx]}
                >
                  <article
                    className={`lux-card group flex h-full flex-col p-7 md:p-8 ${
                      isLast ? 'lux-card-accent' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="lux-icon h-12 w-12">
                        <Icon size={22} strokeWidth={2} aria-hidden="true" />
                      </div>
                      <span className="font-mono text-4xl font-black leading-none text-white/[0.09] transition-colors duration-500 group-hover:text-[#85C8E1]/25">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-tight text-[#F2F2F2]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#92969D]">
                      {step.description}
                    </p>

                    <dl
                      className={`mt-6 grid gap-3 border-t border-white/[0.06] pt-5 ${
                        isLast || idx < 2 ? 'sm:grid-cols-2' : ''
                      }`}
                    >
                      {rows.map((row) => (
                        <div key={row.label} className="lux-inner p-3.5">
                          <dt className="font-mono text-[10px] uppercase tracking-wider text-[#85C8E1]/70">
                            {row.label}
                          </dt>
                          <dd className="mt-1 text-xs leading-relaxed text-[#C7C9CD]">
                            {row.text}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Tangible Business Benefits (Full & Complete) */}
      <section className="lux-section lux-section-flip py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-label">
              <span>Financial Impact</span>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#F2F2F2] sm:text-4xl lg:text-5xl">
              Tangible Business Benefits
            </h2>
            <p className="mt-4 text-base text-[#92969D]">
              Moving beyond vanity metrics and generic chat vanity to deliver bottom-line, auditable revenue recovery.
            </p>
          </div>

          {/* 3 Comprehensive Cards */}
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: LineChart,
                kpi: '+32%',
                kpiLabel: 'Average Recovered GMV',
                title: 'Directly Attributed Revenue',
                subtitle: 'Auditable checkout conversions',
                desc: 'Every recovered conversation is tagged with unique recovery links and UTM parameters. You see exact dollar amounts attributed to the Lupusion agent in your analytics dashboard.',
                bullets: [
                  'Full attribution matching in Shopify & Klaviyo',
                  'Auditable ROI dashboard with net recovery totals',
                  'Zero guesswork on customer source of checkout',
                ],
              },
              {
                icon: Zap,
                kpi: '95%',
                kpiLabel: 'Repetitive Queries Resolved',
                title: 'Eliminated Human Fatigue',
                subtitle: 'Continuous 24/7 autonomous support',
                desc: 'Human sales reps burn out answering repetitive questions about sizing, inventory availability, and shipping times. Lupusion handles 95% of routine questions with conversational finesse.',
                bullets: [
                  'Zero response latency during peak night traffic',
                  'Frees human staff for VIP enterprise accounts',
                  'Consistent tone and objection handling across all chats',
                ],
              },
              {
                icon: Lock,
                kpi: '100%',
                kpiLabel: 'Enterprise Data Isolation',
                title: 'Isolated Enterprise Security',
                subtitle: 'Strict privacy & compliance standards',
                desc: 'Your customer data, pricing tiers, and product catalogs remain securely compartmentalized in private cloud infrastructure. Zero external training on public language models.',
                bullets: [
                  'Full compliance with GDPR & Meta Business Cloud API',
                  'Encrypted credential storage with dedicated tokens',
                  'Proprietary catalog safeguards with strict access control',
                ],
              },
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="lux-card group flex flex-col justify-between !rounded-3xl p-8"
                >
                  <div>
                    {/* Top row with icon & KPI metric */}
                    <div className="flex items-center justify-between">
                      <div className="lux-icon h-14 w-14 !rounded-2xl !text-[#F2F2F2]">
                        <Icon size={26} strokeWidth={2} aria-hidden="true" />
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-2xl font-black text-[#F2F2F2]">
                          {benefit.kpi}
                        </div>
                        <div className="font-mono text-[10px] uppercase text-[#92969D]">
                          {benefit.kpiLabel}
                        </div>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="mt-8 text-xl font-bold tracking-tight text-[#F2F2F2]">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-[#C7C9CD]">
                      {benefit.subtitle}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-[#92969D]">
                      {benefit.desc}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-6">
                      {benefit.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#C7C9CD]">
                          <CheckCircle2 size={15} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[#F2F2F2]" aria-hidden="true" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card footer indicator */}
                  <div className="mt-8 border-t border-white/[0.04] pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#92969D]/60 group-hover:text-[#C7C9CD]">
                      BENEFIT_0{i + 1} // VERIFIED OUTCOME
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Conversion Action */}
          <div className="lux-panel lux-card-accent mt-20 p-8 text-center md:p-12">
            <h3 className="text-2xl font-bold text-[#F2F2F2] sm:text-3xl">
              Ready to recover abandoned revenue in your store?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#92969D]">
              Schedule a technical consultation to review our live WhatsApp Cloud API integration and calculate your monthly revenue recovery potential.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                <span>Book Architecture Consultation</span>
                <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <Link href="/#pricing" className="btn-secondary">
                View Pricing Tiers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
