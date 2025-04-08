import React from 'react';

function Quadro({ titulo, conteudo }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{titulo}</h2>
      <p>{conteudo}</p>
    </div>
  );
}

export default Quadro;
