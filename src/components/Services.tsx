import { useReveal } from '@/hooks/useReveal';
import {
  Code2,
  Palette,
  Globe,
  Wrench,
  Smartphone,
  ShoppingCart,
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Website Design',
    description:
      'Bespoke, conversion-focused design systems that make your brand unmistakable online.',
    points: ['Brand-aligned visual systems', 'Conversion-optimized layouts', 'Design system documentation'],
  },
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Production-grade builds with modern frameworks, fast load times, and clean, scalable code.',
    points: ['React / Next.js / TypeScript', 'Edge-deployed performance', 'SEO-optimized architecture'],
  },
  {
    icon: Globe,
    title: 'Digital Presence',
    description:
      'A cohesive presence across search, social, and web that positions you as the obvious choice.',
    points: ['SEO & analytics setup', 'Social media integration', 'Content strategy'],
  },
  {
    icon: ShoppingCart,
    title: 'Custom Digital Solutions',
    description:
      'Tailored platforms, dashboards, and integrations built around how your business actually works.',
    points: ['Custom web applications', 'API & third-party integrations', 'Internal tooling'],
  },
  {
    icon: Smartphone,
    title: 'Responsive Experiences',
    description:
      'Every interface is engineered to feel native on mobile, tablet, and desktop from day one.',
    points: ['Mobile-first design', 'Cross-device testing', 'Progressive enhancement'],
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description:
      'Ongoing care, updates, and improvements so your site stays fast, secure, and current.',
    points: ['Performance monitoring', 'Security updates', 'Content & feature iterations'],
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
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 mt-4 tracking-tight text-balance">
            Services built for
            <br />
            <span className="text-neutral-500">serious digital work.</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            From first concept to ongoing maintenance, we cover the full spectrum
            of what a modern business needs to succeed online.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a] rounded-2xl overflow-hidden">
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
      className={`reveal ${isVisible ? 'is-visible' : ''} group relative bg-[#0A0A0A] p-8 lg:p-10 card-hover`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#1a1a1a] flex items-center justify-center group-hover:border-[#7c3aed]/30 transition-colors duration-400">
          <Icon size={20} className="text-neutral-300 group-hover:text-white transition-colors" />
        </div>
        <span className="text-xs text-neutral-700 font-display tabular-nums">
          0{index + 1}
        </span>
      </div>

      <h3 className="font-display text-xl font-600 mb-3 tracking-tight">
        {service.title}
      </h3>
      <p className="text-sm text-neutral-400 leading-relaxed mb-6">
        {service.description}
      </p>

      <ul className="space-y-2">
        {service.points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="w-1 h-1 rounded-full bg-[#7c3aed]" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
