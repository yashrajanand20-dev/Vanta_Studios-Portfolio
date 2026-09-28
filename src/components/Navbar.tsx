import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/85 backdrop-blur-xl border-b border-[#1a1a1a]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center group" aria-label="Vanta Studios home">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 hover-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="mailto:vantastudios98@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white border border-[#2a2a2a] hover:border-[#3a3a3a] px-5 py-2 rounded-full transition-all duration-300 hover:bg-[#111] group"
            >
              Start a Project
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-400 group-hover:text-white" />
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-display text-neutral-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:vantastudios98@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 text-base font-medium text-black bg-white hover:bg-neutral-200 px-8 py-3.5 rounded-full mt-4 transition-colors"
          >
            Start a Project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </>
  );
}
