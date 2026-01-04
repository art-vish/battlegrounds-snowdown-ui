import { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Timer } from './Timer';
import { categories, pointValues, Question } from '@/data/quizData';
import { useTimer } from '@/hooks/useTimer';
import { Player } from './PlayerScores';

interface QuestionModalProps {
  categoryId: string;
  questionIndex: number;
  onClose: () => void;
  onShowAnswer: () => void;
  players: Player[];
  onAwardPoints: (playerId: number, points: number) => void;
}

export const QuestionModal = ({
  categoryId,
  questionIndex,
  onClose,
  onShowAnswer,
  players,
  onAwardPoints,
}: QuestionModalProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { timeLeft, progress, start, stop, getTimerColor } = useTimer(30);

  const category = categories.find((c) => c.id === categoryId);
  const question = category?.questions[questionIndex];
  const points = pointValues[questionIndex];

  useEffect(() => {
    start();
    return () => stop();
  }, [start, stop]);

  const handleShowAnswer = () => {
    stop();
    setShowAnswer(true);
    onShowAnswer();
  };

  const handleAwardPoints = (playerId: number) => {
    onAwardPoints(playerId, points);
    onClose();
  };

  if (!category || !question) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-card border-2 border-primary rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{category.icon}</span>
            <div>
              <h2 className="text-lg font-bold text-foreground military-text">{category.name}</h2>
              <span className="text-primary font-bold">{points} очков</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Timer */}
          {!showAnswer && (
            <div className="flex justify-center mb-6">
              <Timer timeLeft={timeLeft} progress={progress} colorClass={getTimerColor()} />
            </div>
          )}

          {/* Question */}
          <div className="text-center mb-6">
            <p className="text-xl sm:text-2xl font-medium text-foreground">{question.question}</p>
          </div>

          {/* Answer Section */}
          {showAnswer ? (
            <div className="space-y-4">
              <div className="bg-primary/20 border border-primary rounded-lg p-4">
                <h3 className="text-sm font-bold text-primary mb-2">ОТВЕТ:</h3>
                <p className="text-lg text-foreground">{question.answer}</p>
              </div>

              <div className="bg-secondary rounded-lg p-4">
                <h3 className="text-sm font-bold text-muted-foreground mb-2">ИСТОЧНИК:</h3>
                <a
                  href={question.patchNotesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Открыть Patch Notes
                </a>
              </div>

              {/* Award points to player */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-muted-foreground text-center">
                  НАЧИСЛИТЬ ОЧКИ ИГРОКУ:
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {players.map((player) => (
                    <Button
                      key={player.id}
                      onClick={() => handleAwardPoints(player.id)}
                      className="bg-primary text-primary-foreground hover:bg-primary/80"
                    >
                      {player.name} (+{points})
                    </Button>
                  ))}
                  <Button
                    onClick={onClose}
                    variant="outline"
                    className="border-muted-foreground"
                  >
                    Никто не ответил
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <Button
                onClick={handleShowAnswer}
                className="bg-primary text-primary-foreground hover:bg-primary/80 text-lg px-8 py-6 pubg-glow"
              >
                Показать ответ
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
