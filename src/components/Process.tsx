import { useReveal } from '@/hooks/useReveal';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business, your audience, and what success looks like. No assumptions, no templates — just listening.',
    duration: 'Week 1',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We craft a visual direction and user experience that reflects your brand. You see the full picture before a single line of code is written.',
    duration: 'Week 2–3',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We engineer your site with modern, scalable technology. Fast, accessible, and built to last — with you in the loop the entire way.',
    duration: 'Week 3–5',
  },
  {
    number: '04',
    title: 'Launch & Care',
    description:
      'We deploy, test, and monitor. Then we stick around — keeping your site fast, secure, and evolving with your business.',
    duration: 'Ongoing',
  },
];

export function Process() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="process" className="relative py-28 lg:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} max-w-3xl mb-16 lg:mb-24`}>
          <span className="text-xs text-[#7c3aed] tracking-[0.2em] uppercase font-medium">
            How We Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 mt-4 tracking-tight text-balance">
            A process that's
            <br />
            <span className="text-neutral-500">transparent from day one.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-[#1a1a1a] lg:-translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const { ref, isVisible } = useReveal();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} relative grid lg:grid-cols-2 gap-6 lg:gap-16 items-center`}
    >
      {/* Dot on the line */}
      <div className="absolute left-0 lg:left-1/2 top-2 lg:-translate-x-1/2 w-3 h-3 rounded-full bg-[#7c3aed] border-2 border-black z-10" />

      {/* Content */}
      <div
        className={`pl-8 lg:pl-0 ${
          isLeft ? 'lg:pr-16 lg:text-right' : 'lg:order-2 lg:pl-16'
        }`}
      >
        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
          <span className="font-display text-sm text-[#7c3aed] tabular-nums">{step.number}</span>
          <span className="text-xs text-neutral-600 uppercase tracking-wider">{step.duration}</span>
        </div>
        <h3 className="font-display text-2xl lg:text-3xl font-700 tracking-tight mb-3">
          {step.title}
        </h3>
        <p className={`text-base text-neutral-400 leading-relaxed max-w-md lg:max-w-sm ${isLeft ? 'lg:ml-auto' : ''}`}>
          {step.description}
        </p>
      </div>

      {/* Spacer for the other half */}
      <div className="hidden lg:block" />
    </div>
  );
}
