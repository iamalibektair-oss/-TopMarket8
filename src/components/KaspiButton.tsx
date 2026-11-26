import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Timer } from 'lucide-react';
import { KASPI_URL } from '../data/content';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function trackKaspiClick() {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead');
  }
}

interface KaspiButtonProps {
  label: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  pulse?: boolean;
  className?: string;
}

export function KaspiLogoMark({
  inverted = false,
  size = 'md',
}: {
  inverted?: boolean;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dim = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-9 w-9',
  }[size];

  if (inverted) {
    return (
      <span
        aria-hidden="true"
        className={`inline-flex items-center justify-center rounded-xl overflow-hidden leading-none shrink-0 shadow-xs ${dim}`}
      >
        <img
          src="/assets/aistudio/images__4__51f3c7c7.png"
          alt="Kaspi.kz"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover"
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-full overflow-hidden bg-white leading-none shrink-0 ${dim}`}
    >
      <img
        src="/assets/aistudio/images__4__51f3c7c7.png"
        alt="Kaspi.kz"
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover scale-[1.34]"
      />
    </span>
  );
}

function renderKaspiLabel(label: string) {
  const kaspiIdx = label.indexOf('Kaspi.kz');
  if (kaspiIdx === -1) {
    return <span>{label}</span>;
  }
  const before = label.slice(0, kaspiIdx);
  const brand = label.slice(kaspiIdx, kaspiIdx + 'Kaspi.kz'.length);
  const after = label.slice(kaspiIdx + 'Kaspi.kz'.length);
  return (
    <span>
      <span className="font-normal">{before}</span>
      <span className="font-bold">{brand}</span>
      <span className="font-normal">{after}</span>
    </span>
  );
}

export function KaspiButton({
  label,
  size = 'md',
  fullWidth = false,
  pulse = false,
  className = '',
}: KaspiButtonProps) {
  const sizeClasses = {
    sm: 'pl-2 pr-2 py-1.5 text-xs min-h-[40px] gap-2',
    md: 'pl-2.5 pr-2.5 py-2 text-sm min-h-[48px] gap-3',
    lg: 'pl-3 pr-3 py-2.5 text-base min-h-[54px] gap-3.5',
    xl: 'pl-3.5 pr-3.5 py-3 text-base sm:text-lg min-h-[60px] gap-4',
  }[size];

  const arrowBoxClasses = {
    sm: 'h-6 w-6',
    md: 'h-7 w-7',
    lg: 'h-8 w-8',
    xl: 'h-9 w-9',
  }[size];

  const logoSize = size === 'sm' ? 'sm' : size === 'xl' ? 'lg' : 'md';

  const buttonElement = (
    <motion.a
      href={KASPI_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackKaspiClick}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      className={`relative z-10 group inline-flex items-center justify-between rounded-full bg-[#F14635] text-white tracking-[-0.01em] transition-colors duration-150 hover:bg-[#D93829] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F14635] shadow-sm hover:shadow-md whitespace-nowrap shrink-0 ${sizeClasses} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
    >
      <KaspiLogoMark size={logoSize} />
      <span className="px-1">{renderKaspiLabel(label)}</span>
      <span
        aria-hidden="true"
        className={`inline-flex items-center justify-center rounded-full bg-white/20 text-white shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${arrowBoxClasses}`}
      >
        <ArrowUpRight className="h-4 w-4 stroke-[2.25]" />
      </span>
    </motion.a>
  );

  if (!pulse) {
    return buttonElement;
  }

  return (
    <div className={`relative inline-flex ${fullWidth ? 'w-full' : 'w-fit'}`}>
      <motion.span
        aria-hidden="true"
        animate={{
          scale: [1, 1.035, 1],
          opacity: [0.35, 0, 0.35],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -inset-1 rounded-full bg-[#F14635]/35"
      />
      {buttonElement}
    </div>
  );
}

interface KaspiPlaqueProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  formattedTimer: string;
  isExpired: boolean;
  timerHint: string;
}

export function KaspiPlaque({
  title,
  subtitle,
  buttonLabel,
  formattedTimer,
  isExpired,
  timerHint,
}: KaspiPlaqueProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 360, damping: 26 }}
      className="rounded-2xl border border-[#F14635]/25 bg-[#FDFCFB] p-5 sm:p-6 shadow-xs transition-shadow hover:shadow-md"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <KaspiLogoMark inverted size="lg" />
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[#1C242B] leading-snug">
              {title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#4B5864]">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#3B6E5C] shrink-0" aria-hidden="true" />
                <span>{subtitle}</span>
              </span>
              {!isExpired && (
                <span className="inline-flex items-center gap-1.5 font-medium text-[#D93829]">
                  <Timer className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span className="font-mono-tabular font-bold">{formattedTimer}</span>
                  <span>{timerHint}</span>
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="shrink-0">
          <KaspiButton label={buttonLabel} size="lg" className="w-full lg:w-auto" />
        </div>
      </div>
    </motion.div>
  );
}
