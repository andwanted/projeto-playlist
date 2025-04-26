import React, { useState } from 'react';
import './styles.css';


const FiltrosBiblioteca = ({ onFiltrar }) => {
  const [grupo, setGrupo] = useState('');
  const [dificuldade, setDificuldade] = useState('');

  const aplicarFiltros = () => {
    onFiltrar({ grupo, dificuldade });
  };

  return (
    <div className="filtros-biblioteca">
      <select value={grupo} onChange={(e) => setGrupo(e.target.value)}>
        <option value="">Grupo Muscular</option>
        <option value="peito">Peito</option>
        <option value="costas">Costas</option>
        <option value="perna">Perna</option>
        <option value="ombro">Ombro</option>
        {/* Adicione mais se quiser */}
      </select>

      <select value={dificuldade} onChange={(e) => setDificuldade(e.target.value)}>
        <option value="">Dificuldade</option>
        <option value="iniciante">Iniciante</option>
        <option value="intermediario">Intermediário</option>
        <option value="avancado">Avançado</option>
      </select>

      <button onClick={aplicarFiltros}>Filtrar</button>
    </div>
  );
};

export default FiltrosBiblioteca;
