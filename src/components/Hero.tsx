import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 60%)',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs text-neutral-400 tracking-wider uppercase">
              Available for new projects — Q4 2026
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-700 leading-[0.95] tracking-tight text-balance animate-fade-up delay-100">
            Your Vision,
            <br />
            <span className="text-gradient">Digitally Built.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed animate-fade-up delay-300">
            Vanta Studios is a digital studio crafting premium websites, custom
            digital solutions, and brand-defining online experiences for
            companies that expect more.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-500">
            <a
              href="#contact"
              className="btn-primary group inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors"
            >
              Start a Project
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 text-sm text-neutral-300 hover:text-white px-7 py-3.5 rounded-full border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-6 lg:left-10 hidden md:flex items-center gap-3 animate-fade-in delay-700">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-neutral-600 to-transparent" />
          <span className="text-xs text-neutral-500 tracking-wider uppercase rotate-90 origin-left translate-y-8">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
