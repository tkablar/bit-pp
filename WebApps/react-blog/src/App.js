import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import CreateCardsFunc from './components/TextCards';

function App() {
  return (
    <div>
      <Header />
      <CreateCardsFunc />
    </div>
  );
}

export default App;
