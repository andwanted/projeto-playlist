import React from 'react';
import QuadroBiblioteca from '../components/QuadroBiblioteca/QuadroBiblioteca';
import QuadroPlaylist from '../components/QuadroPlaylist/QuadroPlaylist';
import SelecionarTreino from '../components/SelecionarTreino';
import './styles.css';

const Home = () => {
  return (
    <div className="container-home">
      <div className="quadro-superior">
        <SelecionarTreino />
        <QuadroPlaylist />
      </div>
      <div className="quadro-inferior">
        <QuadroBiblioteca />
      </div>
    </div>
  );
};

export default Home;
