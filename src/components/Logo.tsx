interface LogoProps {
  variant?: 'full' | 'icon' | 'wordmark';
  className?: string;
}

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  if (variant === 'wordmark') {
    return (
      <span className={`font-display font-700 tracking-tight ${className}`}>
        Vanta<span className="text-neutral-500"> Studios</span>
      </span>
    );
  }

  if (variant === 'icon') {
    return <VXMark className={className} />;
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <VXMark className="h-7 w-7" />
      <span className="font-display font-700 text-[15px] tracking-tight">
        Vanta<span className="text-neutral-500"> Studios</span>
      </span>
    </div>
  );
}

function VXMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vanta Studios logo"
    >
      <path
        d="M8 8L20 32L32 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M14 8L20 20L26 8"
        stroke="#7c3aed"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
