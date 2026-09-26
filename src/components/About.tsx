import { useReveal } from '@/hooks/useReveal';
import { Check, Mail } from 'lucide-react';

const principles = [
  'Purposeful design tailored to client objectives',
  'Technical execution with clean, modern codebases',
  'Clean digital experiences without clutter',
  'Meticulous attention to detail and typography',
  "Building strictly around the client's actual needs",
];

export function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="relative py-28 lg:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-12 lg:gap-24 items-start`}>
          {/* Left */}
          <div>
            <span className="text-xs text-[#7c3aed] tracking-[0.2em] uppercase font-medium">
              About Vanta Studios
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 mt-4 tracking-tight text-balance">
              A focused studio
              <br />
              <span className="text-neutral-500">committed to quality.</span>
            </h2>

            <div className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-400 bg-[#0e0e10] border border-[#1f1f23] px-4 py-2.5 rounded-full">
              <Mail size={14} className="text-[#7c3aed]" />
              <span>Studio Inquiries:</span>
              <a
                href="mailto:yashrajanand20@gmail.com"
                className="text-neutral-200 hover:text-white transition-colors underline font-medium"
              >
                yashrajanand20@gmail.com
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <p className="text-lg text-neutral-300 leading-relaxed">
              Vanta Studios is a small, serious digital studio dedicated to
              designing and engineering premium websites and digital solutions.
              We operate without bloat, allowing you to collaborate directly with
              the specialists building your product.
            </p>
            <p className="text-base text-neutral-400 leading-relaxed">
              We combine design precision with disciplined engineering to create
              digital presence that stands apart. We leverage modern tooling
              internally to accelerate build cycles, while ensuring the end product
              is durable, fast, and distinctly human in craftsmanship.
            </p>

            <div className="pt-4 space-y-3">
              {principles.map((principle) => (
                <div key={principle} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/30 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-[#7c3aed]" />
                  </div>
                  <span className="text-sm text-neutral-300">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
