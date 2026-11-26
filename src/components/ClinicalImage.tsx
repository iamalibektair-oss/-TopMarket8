import { useState } from 'react';
import { Droplets } from 'lucide-react';

interface ClinicalImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function ClinicalImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  priority = false,
}: ClinicalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#EEF3F0] via-[#F7F9F8] to-[#E7F0F5] p-6 text-center text-[#3D4E49] ${className}`}
      >
        <Droplets className="h-6 w-6 text-[#154734]/60" aria-hidden="true" />
        <span className="text-xs font-medium">{fallbackTitle || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
