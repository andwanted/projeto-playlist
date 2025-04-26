import { TreinoProvider } from './context/TreinoContext';
import Home from './pages/Home';

function App() {
  return (
    <TreinoProvider>
      <Home />
    </TreinoProvider>
  );
}
