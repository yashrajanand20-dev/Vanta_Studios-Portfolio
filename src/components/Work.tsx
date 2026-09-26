import { useReveal } from '@/hooks/useReveal';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Apex Football Academy',
    category: 'Sports / Education',
    description:
      'A modern football academy website designed around player development, competitive training, and a strong athletic identity.',
    url: 'https://apex-football-academy.yashrajan20.workers.dev/',
    displayUrl: 'apex-football-academy.yashrajan20.workers.dev',
    image: './apex.webp',
    badge: 'Selected Project 01',
  },
  {
    title: 'NOIR',
    category: 'Hospitality',
    description:
      'A sophisticated contemporary Indian restaurant website combining editorial presentation, premium visual direction, and a modern dining experience.',
    url: 'https://noir-dining.yashrajan20.workers.dev/',
    displayUrl: 'noir-dining.yashrajan20.workers.dev',
    image: './noir.webp',
    badge: 'Selected Project 02',
  },
];

export function Work() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="work" className="relative py-28 lg:py-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6`}
        >
          <div className="max-w-2xl">
            <span className="text-xs text-[#7c3aed] tracking-[0.2em] uppercase font-medium">
              Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 mt-4 tracking-tight text-balance">
              Engineered for
              <br />
              <span className="text-neutral-500">digital distinction.</span>
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
            Explore our featured client websites live in production.
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
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
      className={`reveal ${isVisible ? 'is-visible' : ''} group bg-[#0A0A0A] border border-[#1a1a1a] hover:border-[#2a2a2a] rounded-2xl p-6 lg:p-10 transition-all duration-500`}
    >
      <div
        className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isReversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Visual Preview Container */}
        <div className="lg:col-span-7">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-[16/10] rounded-xl overflow-hidden bg-[#000000] border border-[#1f1f1f] group/preview shadow-2xl"
          >
            {/* Window bar */}
            <div className="h-9 bg-[#111111] border-b border-[#1f1f1f] px-4 flex items-center justify-between text-xs text-neutral-400 z-10 relative">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/70" />
              </div>
              <div className="font-mono text-[11px] text-neutral-400 truncate max-w-[200px] sm:max-w-xs">
                {project.displayUrl}
              </div>
              <ExternalLink size={12} className="text-neutral-400 group-hover/preview:text-white transition-colors" />
            </div>

            {/* Screenshot Image with interactive overlay */}
            <div className="relative w-full h-[calc(100%-2.25rem)] overflow-hidden bg-[#080808]">
              <img
                src={project.image}
                alt={`${project.title} live screenshot`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover/preview:opacity-20 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 text-xs font-medium text-black bg-white px-3.5 py-1.5 rounded-full shadow-lg opacity-90 group-hover/preview:opacity-100 transition-opacity">
                Live Site
                <ArrowUpRight size={13} />
              </div>
            </div>
          </a>
        </div>

        {/* Project Details */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#7c3aed] tracking-wider uppercase font-medium">
              {project.badge}
            </span>
            <span className="text-neutral-700">—</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider font-mono">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-3xl lg:text-4xl font-700 tracking-tight text-white">
            {project.title}
          </h3>

          <p className="text-base text-neutral-400 leading-relaxed">
            {project.description}
          </p>

          <div className="pt-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white border border-[#2a2a2a] hover:border-[#3a3a3a] px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-[#141414] group/link"
            >
              Launch Website
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
