import { useReveal } from '@/hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Lumen Finance',
    category: 'Web Design & Development',
    description: 'A fintech platform redesign focused on trust, clarity, and conversion.',
    image: 'https://images.pexels.com/photos/8903731/pexels-photo-8903731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React', 'TypeScript', 'Supabase'],
    year: '2026',
  },
  {
    title: 'Atelier Noir',
    category: 'Digital Presence & Brand',
    description: "A luxury fashion label's complete digital identity and e-commerce experience.",
    image: 'https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Next.js', 'Shopify', 'Design System'],
    year: '2026',
  },
  {
    title: 'Meridian Health',
    category: 'Custom Digital Solution',
    description: 'A patient portal and booking system that reduced no-shows by 40%.',
    image: 'https://images.pexels.com/photos/6278761/pexels-photo-6278761.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React', 'Node.js', 'HIPAA'],
    year: '2025',
  },
  {
    title: 'Form & Function',
    category: 'Website Maintenance',
    description: 'Ongoing performance, security, and feature work for a design studio.',
    image: 'https://images.pexels.com/photos/4006123/pexels-photo-4006123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Maintenance', 'Performance', 'SEO'],
    year: '2025',
  },
];

export function Work() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="work" className="relative py-28 lg:py-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6`}>
          <div className="max-w-2xl">
            <span className="text-xs text-[#7c3aed] tracking-[0.2em] uppercase font-medium">
              Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 mt-4 tracking-tight text-balance">
              Projects we're
              <br />
              <span className="text-neutral-500">proud to have shipped.</span>
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-xs">
            A selection of recent engagements across fintech, fashion,
            healthcare, and design.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-6 lg:space-y-8">
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { ref, isVisible } = useReveal();
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} group grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${
        isReversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#1a1a1a] group-hover:border-[#2a2a2a] transition-colors duration-500">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 flex gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider text-neutral-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs text-neutral-500">
          <span className="text-[#7c3aed]">{project.category}</span>
          <span>—</span>
          <span>{project.year}</span>
        </div>
        <h3 className="font-display text-3xl lg:text-4xl font-700 tracking-tight group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-base text-neutral-400 leading-relaxed max-w-md">
          {project.description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition-colors group/link"
        >
          View case study
          <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
