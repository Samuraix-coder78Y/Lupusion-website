export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  billingPeriod: string;
  description: string;
  features: PricingFeature[];
  badge?: string;
  highlighted?: boolean;
  ctaText: string;
  ctaHref: string;
}

export const PRICING_NOTE =
  'Pricing and implementation scope are subject to confirmation. Third-party platform and usage fees may apply.';

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 299,
    currency: 'USD',
    billingPeriod: '/month',
    description: 'Essential WhatsApp automation to start recovering revenue.',
    features: [
      { text: 'WhatsApp automation setup', included: true },
      { text: 'Basic AI responses', included: true },
      { text: 'Lead qualification', included: true },
      { text: 'One automation workflow', included: true },
      { text: 'Basic CRM integration', included: true },
      { text: 'Standard support', included: true },
    ],
    ctaText: 'Get Started',
    ctaHref: '/contact',
  },
  {
    id: 'revenue-recovery',
    name: 'Revenue Recovery',
    price: 499,
    currency: 'USD',
    billingPeriod: '/month',
    description:
      'Our flagship AI system — built to recover lost conversations and turn them into revenue.',
    badge: 'Most Popular — Best Value',
    highlighted: true,
    features: [
      { text: 'Everything in Starter', included: true },
      { text: 'Advanced AI conversations', included: true },
      { text: 'Intelligent qualification', included: true },
      { text: 'AI objection handling', included: true },
      { text: 'Automated follow-up sequences', included: true },
      { text: 'CRM synchronization', included: true },
      { text: 'Up to three workflows', included: true },
      { text: 'Performance monitoring', included: true },
      { text: 'Priority support', included: true },
    ],
    ctaText: 'Start Recovering Revenue',
    ctaHref: '/contact',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: 599,
    currency: 'USD',
    billingPeriod: '/month',
    description:
      'Full-scale AI automation with advanced customization and dedicated optimization.',
    features: [
      { text: 'Everything in Revenue Recovery', included: true },
      { text: 'Advanced AI customization', included: true },
      { text: 'Additional workflows', included: true },
      { text: 'Multiple integrations', included: true },
      { text: 'Advanced reporting', included: true },
      { text: 'Customized follow-up logic', included: true },
      { text: 'Monthly optimization review', included: true },
      { text: 'Dedicated priority support', included: true },
    ],
    ctaText: 'Go Advanced',
    ctaHref: '/contact',
  },
];
