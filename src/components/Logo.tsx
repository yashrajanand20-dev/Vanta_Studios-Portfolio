interface LogoProps {
  variant?: 'full' | 'horizontal' | 'icon' | 'wordmark';
  className?: string;
  imgClassName?: string;
}

export function Logo({ variant = 'horizontal', className = '', imgClassName = '' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <img
        src="./vanta-mark.webp"
        alt="Vanta Studios"
        className={`h-7 w-auto object-contain ${imgClassName || className}`}
      />
    );
  }

  if (variant === 'wordmark') {
    return (
      <img
        src="./vanta-wordmark.webp"
        alt="Vanta Studios"
        className={`h-6 w-auto object-contain ${imgClassName || className}`}
      />
    );
  }

  if (variant === 'full') {
    return (
      <img
        src="./vanta-logo.webp"
        alt="Vanta Studios"
        className={`h-12 w-auto object-contain ${imgClassName || className}`}
      />
    );
  }

  // Default: horizontal lockup (icon + wordmark)
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="./vanta-horizontal.webp"
        alt="Vanta Studios"
        className={`h-7 w-auto object-contain ${imgClassName}`}
      />
    </div>
  );
}
