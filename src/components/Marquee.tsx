const items = [
  'Website Design & Development',
  'Digital Presence',
  'Custom Digital Solutions',
  'Website Maintenance',
  'Your Vision, Digitally Built',
];

export function Marquee() {
  return (
    <div className="relative border-y border-[#1a1a1a] py-4 overflow-hidden bg-[#050505]">
      <div className="marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-xs md:text-sm text-neutral-400 font-display tracking-wider uppercase flex items-center gap-8">
            {item}
            <span className="text-[#7c3aed]">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
