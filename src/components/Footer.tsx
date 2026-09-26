import { Logo } from './Logo';
import { ArrowUp, ArrowUpRight, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#1a1a1a] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#top" className="inline-block" aria-label="Vanta Studios home">
              <Logo />
            </a>
            <p className="mt-6 text-sm text-neutral-400 max-w-sm leading-relaxed">
              A digital studio building premium websites and custom digital
              solutions for companies that expect more.
            </p>
            <p className="mt-4 text-xs font-mono text-neutral-500 uppercase tracking-wider">
              Your Vision, Digitally Built.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs text-neutral-500 uppercase tracking-wider mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Work', href: '#work' },
                { label: 'Services', href: '#services' },
                { label: 'Process', href: '#process' },
                { label: 'About', href: '#about' },
                { label: 'Start a Project', href: 'https://tally.so/r/445poX', external: true },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-sm text-neutral-400 hover:text-white transition-colors hover-underline inline-flex items-center gap-1"
                  >
                    {item.label}
                    {item.external && <ArrowUpRight size={12} className="text-neutral-500" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-4">
            <h4 className="text-xs text-neutral-500 uppercase tracking-wider mb-4 font-mono">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:yashrajanand20@gmail.com"
                  className="text-sm text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <Mail size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
                  yashrajanand20@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCmNNjC3hHQGppIdwK0JA7Zg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <Youtube size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
                  YouTube Channel
                  <ArrowUpRight size={12} className="text-neutral-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1a1a1a]">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Vanta Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors group"
            >
              Back to top
              <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
