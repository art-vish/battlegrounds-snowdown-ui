import { categories, pointValues } from '@/data/quizData';

interface GameBoardProps {
  answeredQuestions: Set<string>;
  onSelectQuestion: (categoryId: string, questionIndex: number) => void;
}

export const GameBoard = ({ answeredQuestions, onSelectQuestion }: GameBoardProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {categories.map((category) => (
              <th
                key={category.id}
                className="bg-secondary/80 border-2 border-border p-3 text-center min-w-[140px]"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-xs sm:text-sm font-bold text-foreground military-text leading-tight">
                    {category.name}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pointValues.map((points, rowIndex) => (
            <tr key={points}>
              {categories.map((category) => {
                const questionId = `${category.id}-${rowIndex}`;
                const isAnswered = answeredQuestions.has(questionId);
                
                return (
                  <td
                    key={questionId}
                    className={`border-2 border-border p-0 ${isAnswered ? 'cell-answered' : ''}`}
                  >
                    <button
                      onClick={() => !isAnswered && onSelectQuestion(category.id, rowIndex)}
                      disabled={isAnswered}
                      className={`w-full h-20 text-2xl sm:text-3xl font-bold transition-all ${
                        isAnswered
                          ? 'bg-muted text-muted-foreground cursor-not-allowed'
                          : 'bg-secondary hover:bg-primary hover:text-primary-foreground cursor-pointer pubg-glow'
                      } military-text`}
                    >
                      {points}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
