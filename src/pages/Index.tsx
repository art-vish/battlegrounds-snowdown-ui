import { useState, useCallback } from 'react';
import { RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Snowflakes } from '@/components/Snowflakes';
import { PlayerScores, Player } from '@/components/PlayerScores';
import { GameBoard } from '@/components/GameBoard';
import { QuestionModal } from '@/components/QuestionModal';
import { useGameSounds } from '@/hooks/useGameSounds';

const initialPlayers: Player[] = [
  { id: 1, name: 'Игрок 1', score: 0 },
  { id: 2, name: 'Игрок 2', score: 0 },
  { id: 3, name: 'Игрок 3', score: 0 },
];

const Index = () => {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  const [selectedQuestion, setSelectedQuestion] = useState<{
    categoryId: string;
    questionIndex: number;
  } | null>(null);

  const { playSniperSound, playExplosionSound, toggleBackgroundMusic, isMusicPlaying } = useGameSounds();

  const handleSelectQuestion = useCallback((categoryId: string, questionIndex: number) => {
    playSniperSound();
    setSelectedQuestion({ categoryId, questionIndex });
  }, [playSniperSound]);

  const handleShowAnswer = useCallback(() => {
    playExplosionSound();
  }, [playExplosionSound]);

  const handleCloseModal = useCallback(() => {
    if (selectedQuestion) {
      const questionId = `${selectedQuestion.categoryId}-${selectedQuestion.questionIndex}`;
      setAnsweredQuestions((prev) => new Set([...prev, questionId]));
    }
    setSelectedQuestion(null);
  }, [selectedQuestion]);

  const handleAwardPoints = useCallback((playerId: number, points: number) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === playerId ? { ...p, score: p.score + points } : p))
    );
  }, []);

  const handleUpdateScore = useCallback((playerId: number, delta: number) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === playerId ? { ...p, score: Math.max(0, p.score + delta) } : p))
    );
  }, []);

  const handleUpdateName = useCallback((playerId: number, name: string) => {
    setPlayers((prev) => prev.map((p) => (p.id === playerId ? { ...p, name } : p)));
  }, []);

  const handleReset = useCallback(() => {
    setPlayers(initialPlayers);
    setAnsweredQuestions(new Set());
    setSelectedQuestion(null);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Snowflakes />
      
      <div className="relative z-10 container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary military-text mb-2">
            🎮 PUBG QUIZ
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 military-text">
            🎄 Slavibara's XmaS BootCamp 2026 🎄
          </p>
        </div>

        {/* Reset Button and Music Toggle */}
        <div className="flex justify-between mb-4">
          <Button
            onClick={toggleBackgroundMusic}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {isMusicPlaying ? (
              <>
                <Volume2 className="w-4 h-4 mr-2" />
                Музыка вкл
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 mr-2" />
                Музыка выкл
              </>
            )}
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Сброс игры
          </Button>
        </div>

        {/* Player Scores */}
        <PlayerScores
          players={players}
          onUpdateScore={handleUpdateScore}
          onUpdateName={handleUpdateName}
        />

        {/* Game Board */}
        <GameBoard
          answeredQuestions={answeredQuestions}
          onSelectQuestion={handleSelectQuestion}
        />

        {/* Footer */}
        <div className="text-center mt-8 text-muted-foreground text-sm">
          <p>Нажмите на имя игрока, чтобы изменить его • Используйте +/− для корректировки очков</p>
        </div>
      </div>

      {/* Question Modal */}
      {selectedQuestion && (
        <QuestionModal
          categoryId={selectedQuestion.categoryId}
          questionIndex={selectedQuestion.questionIndex}
          onClose={handleCloseModal}
          onShowAnswer={handleShowAnswer}
          players={players}
          onAwardPoints={handleAwardPoints}
        />
      )}
    </div>
  );
};

export default Index;
