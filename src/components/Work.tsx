import { useReveal } from '@/hooks/useReveal';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Apex Football Academy',
    category: 'Sports / Education',
    description:
      'A modern football academy website designed around player development, competitive training, and a strong athletic identity.',
    url: 'https://apex-football-academy.yashraj20.workers.dev/',
    displayUrl: 'apex-football-academy.yashraj20.workers.dev',
    badge: 'Selected Project 01',
  },
  {
    title: 'NOIR',
    category: 'Hospitality',
    description:
      'A sophisticated contemporary Indian restaurant website combining editorial presentation, premium visual direction, and a modern dining experience.',
    url: 'https://noir-dining.yashraj20.workers.dev/',
    displayUrl: 'noir-dining.yashraj20.workers.dev',
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
        <div className="space-y-10 lg:space-y-12">
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
            className="block relative aspect-[16/10] rounded-xl overflow-hidden bg-[#000000] border border-[#1f1f1f] group/preview"
          >
            {/* Window bar */}
            <div className="h-9 bg-[#111111] border-b border-[#1f1f1f] px-4 flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
              </div>
              <div className="font-mono text-[11px] text-neutral-400 truncate max-w-[200px] sm:max-w-xs">
                {project.displayUrl}
              </div>
              <ExternalLink size={12} className="text-neutral-400 group-hover/preview:text-white transition-colors" />
            </div>

            {/* Preview Body */}
            <div className="relative w-full h-[calc(100%-2.25rem)] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#0c0c0d] to-[#040404]">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <span className="font-display font-bold text-lg text-white">
                  {project.title.charAt(0)}
                </span>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#7c3aed] mb-1">
                {project.category}
              </span>
              <h4 className="font-display text-2xl font-600 text-white mb-3">
                {project.title}
              </h4>
              <p className="text-xs text-neutral-400 max-w-sm line-clamp-2 mb-4">
                {project.description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-white bg-[#1a1a1a] group-hover/preview:bg-white group-hover/preview:text-black px-4 py-2 rounded-full transition-all duration-300">
                Visit live website
                <ArrowUpRight size={13} />
              </div>
            </div>
          </a>
        </div>

        {/* Project Details */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#7c3aed] tracking-wider uppercase">
              {project.badge}
            </span>
            <span className="text-neutral-700">—</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">
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
