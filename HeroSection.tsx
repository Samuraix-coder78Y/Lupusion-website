'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-cinema relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05070A]">
      <div className="hero-atmosphere absolute inset-0" aria-hidden="true">
        <div className="hero-halo hero-halo-left" />
        <div className="hero-halo hero-halo-right" />
        <div className="hero-horizon" />
        <div className="hero-grid" />

        <svg
          className="hero-light-ribbon absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hero-ribbon-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#153D74" stopOpacity="0" />
              <stop offset="0.23" stopColor="#2877C7" stopOpacity="0.55" />
              <stop offset="0.48" stopColor="#A9E8F4" stopOpacity="0.88" />
              <stop offset="0.61" stopColor="#F0F5F6" stopOpacity="0.8" />
              <stop offset="0.78" stopColor="#3A9AC7" stopOpacity="0.72" />
              <stop offset="1" stopColor="#183F78" stopOpacity="0" />
            </linearGradient>
            <filter id="hero-ribbon-blur" x="-10%" y="-60%" width="120%" height="220%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>
          <path
            className="hero-ribbon-glow"
            d="M-120 764C126 584 305 806 554 682C795 563 895 517 1094 559C1284 599 1392 477 1574 330"
            stroke="url(#hero-ribbon-gradient)"
            strokeWidth="46"
            strokeLinecap="round"
            filter="url(#hero-ribbon-blur)"
          />
          <path
            className="hero-ribbon-core"
            d="M-120 764C126 584 305 806 554 682C795 563 895 517 1094 559C1284 599 1392 477 1574 330"
            stroke="url(#hero-ribbon-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className="hero-ribbon-reflection"
            d="M-120 778C126 598 305 820 554 696C795 577 895 531 1094 573C1284 613 1392 491 1574 344"
            stroke="#7DD8F1"
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>

        <div className="hero-vignette absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#85C7E8]/15 bg-[#10151C]/70 px-4 py-1.5 backdrop-blur-md shadow-[0_0_34px_rgba(30,100,160,0.1)]"
        >
          <div className="hero-status-light h-1.5 w-1.5 rounded-full bg-[#9DDEEE]" />
          <span className="text-xs font-medium tracking-widest text-[#A5ADB8] uppercase">
            AI Revenue Recovery for E-Commerce
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-[#F2F2F2] sm:text-6xl lg:text-7xl"
        >
          Turn Lost Conversations Into{' '}
          <span className="hero-title-metal bg-gradient-to-r from-[#A8B6C7] via-[#F4F7F8] to-[#85C8E1] bg-clip-text text-transparent">
            Recovered Revenue
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#A0A8B2] sm:text-xl"
        >
          Lupusion&apos;s AI Revenue Recovery System detects abandoned conversations,
          re-engages prospects, and converts missed opportunities into closed deals —
          automatically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/contact"
            className="btn-primary group"
          >
            <span>Book a Demo</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/solutions"
            className="btn-secondary"
          >
            Explore Solutions
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="flex gap-1.5 opacity-25">
            <div className="h-8 w-px rotate-12 bg-gradient-to-b from-[#C7DCE8] to-transparent" />
            <div className="h-12 w-px rotate-6 bg-gradient-to-b from-[#C7DCE8] to-transparent" />
            <div className="h-10 w-px bg-gradient-to-b from-[#C7DCE8] to-transparent" />
            <div className="h-12 w-px -rotate-6 bg-gradient-to-b from-[#C7DCE8] to-transparent" />
            <div className="h-8 w-px -rotate-12 bg-gradient-to-b from-[#C7DCE8] to-transparent" />
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom-fade absolute bottom-0 left-0 right-0 h-40" aria-hidden="true" />
    </section>
  );
}
