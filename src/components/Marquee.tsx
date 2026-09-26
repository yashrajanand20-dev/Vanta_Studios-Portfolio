const items = [
  'Website Design',
  'Web Development',
  'Digital Presence',
  'Custom Solutions',
  'Website Maintenance',
  'Brand Strategy',
  'UI / UX Design',
  'E-Commerce',
];

export function Marquee() {
  return (
    <div className="relative border-y border-[#1a1a1a] py-5 overflow-hidden bg-[#050505]">
      <div className="marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-sm text-neutral-500 font-display tracking-wide flex items-center gap-8">
            {item}
            <span className="text-[#7c3aed]">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
