import { useReveal } from '@/hooks/useReveal';
import { Check } from 'lucide-react';

const principles = [
  'Design is a business tool, not decoration',
  'Speed and accessibility are non-negotiable',
  'Every decision is backed by a reason',
  'We build for longevity, not trends',
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
              The Studio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 mt-4 tracking-tight text-balance">
              A small studio
              <br />
              <span className="text-neutral-500">with high standards.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <p className="text-lg text-neutral-300 leading-relaxed">
              Vanta Studios is a digital studio that treats every project like
              it's our own. We're small by design — it means you work directly
              with the people building your product, not a layer of account
              managers.
            </p>
            <p className="text-base text-neutral-400 leading-relaxed">
              We believe AI is a powerful tool for development and research, but
              it's not the product. The product is the finished digital
              experience we deliver to you — and it should feel like it was built
              with care, precision, and intent.
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
