import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';

const links = {
  Services: ['Web Design', 'Development', 'Digital Presence', 'Maintenance'],
  Studio: ['About', 'Process', 'Work', 'Contact'],
  Connect: ['Email', 'Twitter', 'LinkedIn', 'Dribbble'],
};

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#1a1a1a] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 text-sm text-neutral-400 max-w-xs leading-relaxed">
              A digital studio building premium websites and custom digital
              solutions for companies that expect more.
            </p>
            <p className="mt-4 text-xs text-neutral-600">
              Your Vision, Digitally Built.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs text-neutral-500 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-neutral-400 hover:text-white transition-colors hover-underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1a1a1a]">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Vanta Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Terms
            </a>
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
