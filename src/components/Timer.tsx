interface TimerProps {
  timeLeft: number;
  progress: number;
  colorClass: string;
}

export const Timer = ({ timeLeft, progress, colorClass }: TimerProps) => {
  const getColorValue = () => {
    if (colorClass === 'timer-safe') return 'hsl(var(--timer-safe))';
    if (colorClass === 'timer-warning') return 'hsl(var(--timer-warning))';
    return 'hsl(var(--timer-danger))';
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        {/* Background circle */}
        <svg className="w-20 h-20 transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            className="text-muted"
          />
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke={getColorValue()}
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={`${2 * Math.PI * 36}`}
            strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        {/* Timer text */}
        <div 
          className="absolute inset-0 flex items-center justify-center text-2xl font-bold military-text"
          style={{ color: getColorValue() }}
        >
          {timeLeft}
        </div>
      </div>
      <span className="text-sm text-muted-foreground">секунд</span>
    </div>
  );
};
