'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Meet the Teacher', href: '/teacher' },
    { name: 'Courses', href: '/courses' },
    { name: 'Fees', href: '/fees' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-white/75 backdrop-blur-xl border-b border-sand-dune-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
          : 'py-3.5 bg-alice-blue-50/70 backdrop-blur-md border-b border-sand-dune-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with micro-scale on hover */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none flex-shrink-0 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Logo size="md" showTagline={false} />
          </Link>

          {/* Desktop Navigation Floating Pill Container */}
          <nav className="hidden lg:flex items-center p-1 rounded-full bg-white/60 backdrop-blur-md border border-sand-dune-200/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_2px_8px_rgba(15,23,42,0.02)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-tight whitespace-nowrap transition-all duration-200 group/nav ${
                    isActive
                      ? 'text-white bg-dark-wine-700 shadow-sm shadow-dark-wine-700/25'
                      : 'text-ink-black-700 hover:text-dark-wine-700 hover:bg-white/80 active:scale-95'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {link.name}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
                    )}
                  </span>
                  {!isActive && (
                    <span className="absolute inset-x-2 bottom-1 h-0.5 bg-dark-wine-700/0 group-hover/nav:bg-dark-wine-700/40 rounded-full transition-all duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions (Glowing Interactive CTA) */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <Link
              href="/admissions"
              className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-dark-wine-700 via-dark-wine-600 to-dark-wine-700 bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-md shadow-dark-wine-700/20 hover:shadow-lg hover:shadow-dark-wine-700/30 active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Mobile Menu Button with Glass Ring */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/admissions"
              className="inline-flex items-center px-3.5 py-1.5 text-xs font-bold rounded-full bg-dark-wine-700 text-white shadow-xs active:scale-95 transition-transform"
            >
              Apply
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-2xl text-ink-black-900 bg-white/70 backdrop-blur-md border border-sand-dune-200 hover:bg-white active:scale-90 transition-all shadow-xs"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Menu with Glassmorphism */}
      {isOpen && (
        <div className="lg:hidden mx-4 mt-2 bg-white/95 backdrop-blur-2xl border border-sand-dune-200/90 rounded-3xl p-4 space-y-1.5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-white bg-dark-wine-700 shadow-xs'
                    : 'text-ink-black-700 hover:text-dark-wine-700 hover:bg-sand-dune-100/80 active:scale-[0.98]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-sand-dune-200 flex flex-col gap-2">
            <Link
              href="/admissions"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-bold bg-dark-wine-700 text-white shadow-md active:scale-95 transition-all"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
