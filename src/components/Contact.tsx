import { useReveal } from '@/hooks/useReveal';
import { ArrowUpRight, Mail, MessageSquare, Youtube } from 'lucide-react';
import { STUDIO_EMAIL, YOUTUBE_URL, TALLY_URL, handleEmailClick } from '@/utils/email';

export function Contact() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="contact" className="relative py-28 lg:py-40 bg-[#050505] overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} grid lg:grid-cols-12 gap-12 lg:gap-16 items-center`}>
          {/* Left pitch */}
          <div className="lg:col-span-6">
            <span className="text-xs text-[#7c3aed] tracking-[0.2em] uppercase font-medium">
              Start a Project
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 mt-4 tracking-tight text-balance">
              Let's build
              <br />
              <span className="text-neutral-500">your vision.</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed max-w-md">
              Whether you need a new website, a custom digital solution, or ongoing platform maintenance, submit your project details and we will follow up with clear next steps.
            </p>

            <div className="mt-10 space-y-4 max-w-md">
              <div className="flex items-center justify-between py-3.5 border-b border-[#1a1a1a]">
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Official Email</span>
                <a
                  href={`mailto:${STUDIO_EMAIL}`}
                  onClick={handleEmailClick}
                  className="text-sm text-neutral-200 hover:text-white transition-colors cursor-pointer"
                  title="Click to email or copy address"
                >
                  {STUDIO_EMAIL}
                </a>
              </div>
              <div className="flex items-center justify-between py-3.5 border-b border-[#1a1a1a]">
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Intake Process</span>
                <span className="text-sm text-neutral-300">Direct Tally Brief</span>
              </div>
              <div className="flex items-center justify-between py-3.5 border-b border-[#1a1a1a]">
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Status</span>
                <span className="text-sm text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new work
                </span>
              </div>
              <div className="flex items-center justify-between py-3.5 border-b border-[#1a1a1a]">
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">YouTube</span>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-200 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                >
                  <Youtube size={14} className="text-neutral-400 group-hover:text-red-500 transition-colors" />
                  @VantaStudios98
                  <ArrowUpRight size={13} className="text-neutral-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#0A0A0A] border border-[#1a1a1a] rounded-2xl p-8 lg:p-12 space-y-8">
              <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#1a1a1a] flex items-center justify-center text-[#7c3aed]">
                <MessageSquare size={22} />
              </div>

              <div>
                <h3 className="font-display text-2xl lg:text-3xl font-700 text-white tracking-tight">
                  Project Intake Form
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  Complete our quick structured project intake on Tally to share your requirements, scope, and timeline.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors"
                >
                  Start a Project
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={`mailto:${STUDIO_EMAIL}`}
                  onClick={handleEmailClick}
                  className="inline-flex items-center justify-center gap-2 text-sm text-neutral-300 hover:text-white px-6 py-3.5 rounded-full border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-300 hover:bg-[#111] cursor-pointer"
                  title="Click to email or copy address"
                >
                  <Mail size={15} />
                  Email Studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
