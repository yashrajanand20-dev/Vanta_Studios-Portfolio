import { useReveal } from '@/hooks/useReveal';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We understand your goals, audience, and functional requirements. No assumptions or generic templates — an honest analysis of what needs to be built.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We establish visual direction, editorial rhythm, and responsive layouts. Every design choice has intent before any code is written.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We engineer your product with clean, modern technology. Clean codebases, accessibility standards, and performant delivery throughout.',
  },
  {
    number: '04',
    title: 'Refine',
    description:
      'Rigorous cross-device testing, typographic polishing, and responsive QA to ensure seamless execution on mobile, tablet, and desktop.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Final deployment, DNS configuration, and transition into reliable ongoing maintenance and care.',
  },
];

export function Process() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="process" className="relative py-28 lg:py-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} max-w-3xl mb-16 lg:mb-24`}>
          <span className="text-xs text-[#7c3aed] tracking-[0.2em] uppercase font-medium">
            Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 mt-4 tracking-tight text-balance">
            A disciplined workflow.
            <br />
            <span className="text-neutral-500">From initial concept to deployment.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-[#0A0A0A] border border-[#1a1a1a] rounded-2xl p-6 lg:p-7 flex flex-col justify-between"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div>
                <span className="font-mono text-sm text-[#7c3aed] font-semibold tracking-wider mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-600 tracking-tight text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
