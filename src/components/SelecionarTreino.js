import React from 'react';
import treinos from '../data/treinosPreDefinidos';
import { useTreino } from '../context/TreinoContext';
import './styles.css';


const ordem = ['A', 'B', 'C', 'D'];

const SelecionarTreino = () => {
  const { adicionarExercicio, definirUltimoTreino, ultimoTreino } = useTreino();

  const selecionarTreino = (letra) => {
    treinos[letra].forEach(exercicio => {
      adicionarExercicio(exercicio);
    });
    definirUltimoTreino(letra);
  };

  const sugestao = () => {
    if (!ultimoTreino) return 'A';
    const indexAtual = ordem.indexOf(ultimoTreino);
    return ordem[(indexAtual + 1) % ordem.length];
  };

  return (
    <div className="selecionar-treino">
      <h3>Selecionar treino pré-definido:</h3>
      <div>
        {ordem.map((letra) => (
          <button key={letra} onClick={() => selecionarTreino(letra)}>
            Treino {letra}
          </button>
        ))}
      </div>
      <p><strong>Sugestão de hoje:</strong> Treino {sugestao()}</p>
    </div>
  );
};

export default SelecionarTreino;
