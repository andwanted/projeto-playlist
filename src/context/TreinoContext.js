// TreinoContext.js
import React, { createContext, useContext, useState } from 'react';

const TreinoContext = createContext();

export const useTreino = () => useContext(TreinoContext);

export const TreinoProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [ultimoTreino, setUltimoTreino] = useState(null);

  const adicionarExercicio = (exercicio) => {
    if (!playlist.some(e => e.id === exercicio.id)) {
      setPlaylist([...playlist, exercicio]);
    }
  };

  const removerExercicio = (id) => {
    setPlaylist(playlist.filter(e => e.id !== id));
  };

  const limparPlaylist = () => {
    setPlaylist([]);
  };

  const definirUltimoTreino = (letra) => {
    setUltimoTreino(letra);
  };

  return (
    <TreinoContext.Provider
      value={{
        playlist,
        adicionarExercicio,
        removerExercicio,
        limparPlaylist,
        ultimoTreino,
        definirUltimoTreino,
      }}
    >
      {children}
    </TreinoContext.Provider>
  );
};
