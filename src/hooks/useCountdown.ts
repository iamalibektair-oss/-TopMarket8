import { useEffect, useState } from 'react';

const INITIAL_DURATION_SECONDS = 20 * 60; // 20:00

export function useCountdown(initialSeconds: number = INITIAL_DURATION_SECONDS) {
  const [secondsLeft, setSecondsLeft] = useState<number>(initialSeconds);

  useEffect(() => {
    const targetTime = Date.now() + initialSeconds * 1000;

    const tick = () => {
      const remaining = Math.max(0, Math.ceil((targetTime - Date.now()) / 1000));
      setSecondsLeft(remaining);
      return remaining;
    };

    const interval = window.setInterval(() => {
      const remaining = tick();
      if (remaining <= 0) {
        window.clearInterval(interval);
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, [initialSeconds]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isExpired = secondsLeft <= 0;

  return {
    secondsLeft,
    formatted,
    isExpired,
  };
}
