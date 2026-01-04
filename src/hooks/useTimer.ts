import { useState, useCallback, useEffect, useRef } from 'react';

export const useTimer = (initialSeconds: number = 30) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    setTimeLeft(initialSeconds);
    setIsRunning(true);
  }, [initialSeconds]);

  const stop = useCallback(() => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    stop();
    setTimeLeft(initialSeconds);
  }, [stop, initialSeconds]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  const getTimerColor = useCallback(() => {
    if (timeLeft > 15) return 'timer-safe';
    if (timeLeft > 5) return 'timer-warning';
    return 'timer-danger';
  }, [timeLeft]);

  return {
    timeLeft,
    isRunning,
    start,
    stop,
    reset,
    getTimerColor,
    progress: (timeLeft / initialSeconds) * 100,
  };
};
