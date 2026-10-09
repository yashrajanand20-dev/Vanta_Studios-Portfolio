interface LogoProps {
  variant?: 'full' | 'icon';
  className?: string;
  imgClassName?: string;
}

export function Logo({ variant = 'full', className = '', imgClassName = '' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <img
        src="./vanta-mark.webp"
        alt="Vanta Studios"
        className={`h-8 w-auto object-contain ${imgClassName || className}`}
      />
    );
  }

  // Official stacked logo: emblem centered directly above the Vanta Studios wordmark
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="./vanta-logo.webp"
        alt="Vanta Studios"
        className={`h-11 sm:h-12 w-auto object-contain ${imgClassName}`}
      />
    </div>
  );
}
