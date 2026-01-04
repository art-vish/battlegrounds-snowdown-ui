import { useState } from 'react';
import { Minus, Plus, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export interface Player {
  id: number;
  name: string;
  score: number;
}

interface PlayerScoresProps {
  players: Player[];
  onUpdateScore: (playerId: number, delta: number) => void;
  onUpdateName: (playerId: number, name: string) => void;
}

export const PlayerScores = ({ players, onUpdateScore, onUpdateName }: PlayerScoresProps) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  
  const maxScore = Math.max(...players.map(p => p.score));
  const hasScores = maxScore > 0;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {players.map((player) => {
        const isLeader = hasScores && player.score === maxScore;
        
        return (
          <div
            key={player.id}
            className={`bg-secondary/50 border-2 rounded-lg p-4 transition-all ${
              isLeader ? 'border-primary pubg-glow' : 'border-border'
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              {isLeader && <Crown className="w-5 h-5 text-primary" />}
              {editingId === player.id ? (
                <Input
                  value={player.name}
                  onChange={(e) => onUpdateName(player.id, e.target.value)}
                  onBlur={() => setEditingId(null)}
                  onKeyDown={(e) => e.key === 'Enter' && setEditingId(null)}
                  className="text-center font-bold text-lg bg-muted border-primary"
                  autoFocus
                />
              ) : (
                <h3
                  className="text-lg font-bold cursor-pointer hover:text-primary transition-colors military-text"
                  onClick={() => setEditingId(player.id)}
                >
                  {player.name}
                </h3>
              )}
            </div>
            
            <div className="text-3xl font-bold text-center text-primary mb-3 military-text">
              {player.score}
            </div>
            
            <div className="flex justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => onUpdateScore(player.id, -100)}
                className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => onUpdateScore(player.id, 100)}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
