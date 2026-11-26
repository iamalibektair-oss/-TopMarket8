import { Clock, Timer } from 'lucide-react';

interface CountdownBannerProps {
  formatted: string;
  isExpired: boolean;
  activePrefix: string;
  activeSuffix: string;
  expiredMessage: string;
  variant?: 'hero' | 'final';
}

export function CountdownBanner({
  formatted,
  isExpired,
  activePrefix,
  activeSuffix,
  expiredMessage,
  variant = 'hero',
}: CountdownBannerProps) {
  const isFinal = variant === 'final';

  return (
    <div
      role="status"
      aria-live="polite"
      className={`rounded-xl border transition-colors ${
        isExpired
          ? 'border-[#DCE2E7] bg-[#F3F5F7] text-[#3B4650]'
          : isFinal
          ? 'border-[#F14635]/30 bg-[#FDFCFB] text-[#1C242B]'
          : 'border-[#F14635]/20 bg-[#FDFCFB] text-[#1C242B]'
      } ${isFinal ? 'p-5 sm:p-6' : 'p-4 sm:p-5'}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-5">
        <div
          className={`inline-flex items-center gap-2 self-start rounded-lg px-3.5 py-2 shrink-0 ${
            isExpired
              ? 'bg-[#E5E9ED] text-[#45515C]'
              : 'bg-[#FFF0EE] text-[#D93829] border border-[#F14635]/25'
          }`}
        >
          {isExpired ? (
            <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
          ) : (
            <Timer className="h-4 w-4 shrink-0" aria-hidden="true" />
          )}
          <span className="font-mono-tabular text-xl sm:text-2xl font-bold tracking-tight">
            {formatted}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-[#1C242B]">
          {isExpired ? (
            <span className="font-medium text-[#3C4852]">{expiredMessage}</span>
          ) : (
            <>
              <span>{activePrefix} </span>
              <span className="font-mono-tabular font-bold text-[#F14635]">{formatted}</span>{' '}
              <span className="text-[#4B5864]">{activeSuffix}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
