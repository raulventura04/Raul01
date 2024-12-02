import React, { useState, useEffect } from 'react';
import { Brain, CheckCircle2, XCircle } from 'lucide-react';

interface Skill {
  category: string;
  name: string;
}

export function SkillGame() {
  const [score, setScore] = useState(0);
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const skills: Skill[] = [
    { category: 'Backend Development', name: 'Java' },
    { category: 'Backend Development', name: 'Spring Boot' },
    { category: 'Backend Development', name: 'Node.js' },
    { category: 'Banco de Dados', name: 'MySQL' },
    { category: 'Banco de Dados', name: 'PostgreSQL' },
    { category: 'Banco de Dados', name: 'MongoDB' },
    { category: 'Linguagens', name: 'Python' },
    { category: 'Linguagens', name: 'TypeScript' },
    { category: 'Controle de Versão', name: 'Git' },
    { category: 'Controle de Versão', name: 'GitHub' },
    { category: 'Background Científico', name: 'Análise de Dados' },
    { category: 'Background Científico', name: 'Metodologia Científica' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  const getRandomSkill = () => {
    const randomIndex = Math.floor(Math.random() * skills.length);
    return skills[randomIndex];
  };

  const getRandomCategories = (correctCategory: string) => {
    const wrongCategories = categories.filter(cat => cat !== correctCategory);
    const shuffled = wrongCategories.sort(() => 0.5 - Math.random());
    return [correctCategory, ...shuffled.slice(0, 2)].sort(() => 0.5 - Math.random());
  };

  const startNewRound = () => {
    const newSkill = getRandomSkill();
    setCurrentSkill(newSkill);
    setOptions(getRandomCategories(newSkill.category));
    setFeedback(null);
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    startNewRound();
  };

  const handleAnswer = (category: string) => {
    if (!currentSkill) return;

    if (category === currentSkill.category) {
      setScore(prev => prev + 1);
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }

    setTimeout(startNewRound, 1000);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Brain className="w-12 h-12 mx-auto text-secondary mb-4" />
            <h2 className="text-3xl font-bold text-primary mb-4">Jogo das Habilidades</h2>
            <p className="text-gray-600">Combine a habilidade com sua categoria correta!</p>
          </div>

          {!gameStarted ? (
            <button
              onClick={startGame}
              className="block mx-auto px-6 py-3 bg-secondary text-white rounded-lg hover:bg-primary transition-colors"
            >
              Começar Jogo
            </button>
          ) : (
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-primary mb-2">Pontuação: {score}</div>
                {currentSkill && (
                  <div className="text-xl font-semibold text-secondary mb-4">
                    {currentSkill.name}
                  </div>
                )}
              </div>

              <div className="grid gap-4">
                {options.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(category)}
                    className={`
                      p-4 rounded-lg text-left transition-all
                      ${feedback === null ? 'hover:bg-gray-50' : ''}
                      ${feedback === 'correct' && category === currentSkill?.category ? 'bg-green-100' : ''}
                      ${feedback === 'incorrect' && category === currentSkill?.category ? 'bg-green-100' : ''}
                      ${feedback === 'incorrect' && category !== currentSkill?.category ? 'bg-red-100' : ''}
                      border-2 border-gray-200
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category}</span>
                      {feedback !== null && category === currentSkill?.category && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                      {feedback === 'incorrect' && category !== currentSkill?.category && (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}