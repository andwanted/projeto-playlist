import React, { useState } from 'react';
import FiltrosBiblioteca from '../FiltrosBiblioteca';
import ExercicioCard from '../ExercicioCard';
import exercicios from '../exercicios.json';
import { useTreino } from '../../context/TreinoContext';
import './styles.css';

const QuadroBiblioteca = () => {
  const [filtros, setFiltros] = useState({});
  const { adicionarExercicio } = useTreino();

  const filtrarExercicios = () => {
    return exercicios.filter((ex) => {
      const grupoOk = !filtros.grupo || ex.grupo === filtros.grupo;
      const dificuldadeOk = !filtros.dificuldade || ex.dificuldade === filtros.dificuldade;
      return grupoOk && dificuldadeOk;
    });
  };

  const exerciciosFiltrados = filtrarExercicios();

  return (
    <div className="quadro-biblioteca">
      <h2>📚 Biblioteca de Exercícios</h2>
      <FiltrosBiblioteca onFiltrar={setFiltros} />

      <div className="lista-exercicios">
        {exerciciosFiltrados.map((ex) => (
          <ExercicioCard
            key={ex.id}
            exercicio={ex}
            aoAdicionar={() => adicionarExercicio(ex)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuadroBiblioteca;
