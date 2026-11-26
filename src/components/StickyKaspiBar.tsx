import { Timer } from 'lucide-react';
import { KaspiButton } from './KaspiButton';

interface StickyKaspiBarProps {
  formatted: string;
  isExpired: boolean;
  activeLabel: string;
  expiredLabel: string;
  buttonLabel: string;
}

export function StickyKaspiBar({
  formatted,
  isExpired,
  activeLabel,
  expiredLabel,
  buttonLabel,
}: StickyKaspiBarProps) {
  return (
    <div
      role="region"
      aria-label={buttonLabel}
      className="fixed bottom-0 inset-x-0 z-40 border-t border-[#DCE3E8] bg-[#FDFCFB]/95 backdrop-blur-md"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 shrink-0 ${
              isExpired
                ? 'bg-[#EAEFF2] text-[#45515C]'
                : 'bg-[#FFF0EE] text-[#D93829] border border-[#F14635]/25'
            }`}
          >
            <Timer className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="font-mono-tabular text-sm font-bold leading-none">
              {formatted}
            </span>
          </div>

          <span className="text-xs sm:text-sm font-medium text-[#1C242B] truncate">
            {isExpired ? expiredLabel : activeLabel}
          </span>
        </div>

        <KaspiButton label={buttonLabel} size="sm" />
      </div>
    </div>
  );
}
