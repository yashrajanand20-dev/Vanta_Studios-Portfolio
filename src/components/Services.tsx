import { useReveal } from '@/hooks/useReveal';
import { Code2, Globe, Cpu, Wrench } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Code2,
    title: 'Website Design & Development',
    description:
      'Bespoke digital architecture engineered from concept to launch. We create modern, responsive websites with precise typography, uncompromising performance, and purposeful brand identity.',
  },
  {
    number: '02',
    icon: Globe,
    title: 'Digital Presence',
    description:
      'Strategic presentation that establishes undeniable market authority. Clean search optimization, technical discoverability, and cohesive visual touchpoints that reflect your standards.',
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Custom Digital Solutions',
    description:
      'Tailored web applications, client portals, and bespoke integrations built to solve specific operational requirements with scalable, maintainable engineering.',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Website Maintenance',
    description:
      'Structured technical care, security management, performance monitoring, and continuous improvements to keep your digital platform resilient, fast, and up to date.',
  },
];

export function Services() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="services" className="relative py-28 lg:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} max-w-3xl mb-16 lg:mb-24`}>
          <span className="text-xs text-[#7c3aed] tracking-[0.2em] uppercase font-medium">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 mt-4 tracking-tight text-balance">
            Focused capabilities.
            <br />
            <span className="text-neutral-500">Built with technical discipline.</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            We focus exclusively on the core disciplines required to design, engineer, and maintain high-standard digital products.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const { ref, isVisible } = useReveal();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} group relative bg-[#0A0A0A] border border-[#1a1a1a] hover:border-[#2a2a2a] rounded-2xl p-8 lg:p-10 card-hover flex flex-col justify-between`}
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      <div>
        <div className="flex items-start justify-between mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#1a1a1a] flex items-center justify-center group-hover:border-[#7c3aed]/40 transition-colors duration-300">
            <Icon size={20} className="text-neutral-300 group-hover:text-white transition-colors" />
          </div>
          <span className="text-xs font-mono text-neutral-500 font-display tabular-nums tracking-widest">
            {service.number}
          </span>
        </div>

        <h3 className="font-display text-2xl font-600 mb-4 tracking-tight text-white">
          {service.title}
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-[#141414] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
        <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
          Core Capability
        </span>
      </div>
    </div>
  );
}
