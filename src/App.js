import React from 'react';
import ListaDeQuadros from './components/ListaDeQuadros';
import listaExercicios from './components/exercicios.json'; // Importe o array diretamente

function App() {
  const quadros = listaExercicios.map(grupo => ({
    titulo: grupo.grupo,
    conteudo: grupo.exercicios.join(', ')
  }));

  return (
    <div className="App">
      <ListaDeQuadros quadros={quadros} />
    </div>
  );
}

export default App;
