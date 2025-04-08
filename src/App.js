import React, { useState } from 'react';
import Quadro from './components/Quadro';
import listaExercicios from './components/exercicios.json';

function App() {
  // Inicializa o estado 'grupoSelecionado' com o primeiro grupo de exercícios da lista
  const [grupoSelecionado, setGrupoSelecionado] = useState(listaExercicios[0]);

  // Inicializa o estado 'exercicioSelecionado' com o primeiro exercício do primeiro grupo
  const [exercicioSelecionado, setExercicioSelecionado] = useState(grupoSelecionado.exercicios[0]);

  // Função chamada quando o grupo de exercícios é alterado no 'select'
  const handleGrupoChange = (event) => {
    // Encontra o grupo selecionado na lista de exercícios com base no valor do 'select'
    const selectedGrupo = listaExercicios.find(grupo => grupo.grupo === event.target.value);

    // Atualiza o estado 'grupoSelecionado' com o grupo encontrado
    setGrupoSelecionado(selectedGrupo);

    // Reseta o exercício selecionado para o primeiro exercício do novo grupo
    setExercicioSelecionado(selectedGrupo.exercicios[0]);
  };

  // Função chamada quando o exercício é alterado no 'select'
  const handleExercicioChange = (event) => {
    // Atualiza o estado 'exercicioSelecionado' com o exercício selecionado
    setExercicioSelecionado(event.target.value);
  };

  return (
    <div>
      {/* Div para a seleção do exercício */}
      <div className="selecao-exercicio">
        {/* Select para escolher o grupo de exercícios */}
        <select onChange={handleGrupoChange}>
          {/* Mapeia a lista de exercícios para criar as opções do 'select' */}
          {listaExercicios.map(grupo => (
            <option key={grupo.grupo} value={grupo.grupo}>
              {grupo.grupo}
            </option>
          ))}
        </select>

        {/* Select para escolher o exercício dentro do grupo selecionado */}
        <select onChange={handleExercicioChange}>
          {/* Mapeia os exercícios do grupo selecionado para criar as opções do 'select' */}
          {grupoSelecionado.exercicios.map(exercicio => (
            <option key={exercicio} value={exercicio}>
              {exercicio}
            </option>
          ))}
        </select>
      </div>

      {/* Div para o quadro principal que exibe o exercício selecionado */}
      <div className="quadro-principal">
        {/* Renderiza o componente 'Quadro' com o título do grupo e o exercício selecionado */}
        <Quadro titulo={grupoSelecionado.grupo} conteudo={exercicioSelecionado} />
      </div>
    </div>
  );
}

export default App;