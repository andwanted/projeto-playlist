import React from 'react';
import Quadro from './Quadro';
import listaExercicios from './exercicios.json';

function Exercicios() {
    return (
        <div>
            {listaExercicios.map((grupo, index) => (
                <Quadro
                    key={index}
                    titulo={grupo.grupo}
                    conteudo={grupo.exercicios.join(', ')}
                />
            ))}
        </div>
    );
}

export default Exercicios;