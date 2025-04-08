import React from 'react';
import Quadro from './Quadro';

function ListaDeQuadros({ quadros }) {
  if (!Array.isArray(quadros)) {
    return <div>Dados inválidos.</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {quadros.map(({ titulo, conteudo }, index) => (
        <Quadro key={index} titulo={titulo} conteudo={conteudo} />
      ))}
    </div>
  );
}

export default ListaDeQuadros;
