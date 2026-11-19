'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#08090B]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#111317]/50 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block group focus:outline-none"
              aria-label="Lupusion Home"
            >
              <Image
                src="/brand/lupusion-logo-horizontal.svg"
                alt="Lupusion"
                width={400}
                height={99}
                unoptimized
                className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90 sm:h-11"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[#92969D]">
              AI-powered revenue recovery for e-commerce businesses. Turning lost
              conversations into closed deals.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#C7C9CD]">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#92969D] transition-colors duration-200 hover:text-[#F2F2F2]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#C7C9CD]">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="btn-primary !px-5 !py-2.5"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-[#92969D]/60">
            &copy; {new Date().getFullYear()} Lupusion. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-[#92969D]/40 cursor-default">
              Privacy Policy
            </span>
            <span className="text-xs text-[#92969D]/40 cursor-default">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
