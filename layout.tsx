import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Lupusion — AI Revenue Recovery for E-Commerce',
  description:
    'Lupusion is a premium AI automation agency that recovers lost revenue for e-commerce businesses through intelligent WhatsApp automation, lead qualification, and AI-powered follow-ups.',
  keywords: [
    'AI automation',
    'revenue recovery',
    'e-commerce',
    'WhatsApp automation',
    'lead qualification',
    'AI agents',
  ],
  openGraph: {
    title: 'Lupusion — AI Revenue Recovery for E-Commerce',
    description:
      'Turn lost conversations into recovered revenue with AI-powered automation.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-[#08090B] text-[#F2F2F2] antialiased selection:bg-[#C7C9CD]/20 selection:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
