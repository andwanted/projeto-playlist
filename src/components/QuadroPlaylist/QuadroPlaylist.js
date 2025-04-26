import { useTreino } from '../../context/TreinoContext';
import './styles.css';

const QuadroPlaylist = () => {
  const { playlist, removerExercicio, limparPlaylist } = useTreino();

  return (
    <div className="quadro-playlist">
      <h2>🎧 Treino de Hoje</h2>

      {playlist.length === 0 ? (
        <p>Nenhum exercício selecionado ainda.</p>
      ) : (
        <ul>
          {playlist.map((exercicio) => (
            <li key={exercicio.id}>
              <span>{exercicio.nome}</span>
              <button onClick={() => removerExercicio(exercicio.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}

      {playlist.length > 0 && (
        <button onClick={limparPlaylist}>Limpar tudo</button>
      )}
    </div>
  );
};

export default QuadroPlaylist;
