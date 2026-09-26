import { useReveal } from '@/hooks/useReveal';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '8yr', label: 'Combined Experience' },
  { value: '100%', label: 'Client Retention' },
  { value: '<1s', label: 'Avg. Load Time' },
];

export function Stats() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative py-20 lg:py-28 bg-[#050505] border-y border-[#1a1a1a]">
      <div
        ref={ref}
        className={`reveal ${isVisible ? 'is-visible' : ''} max-w-7xl mx-auto px-6 lg:px-10`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center lg:text-left"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display text-5xl lg:text-6xl font-700 tracking-tight text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
