import logo from './logo.svg';
import './App.css';
import CreateHeader from './components/Header';
import CreateFooter from './components/Footer';
import CreateUserList from './components/CreateList';

function App() {
  return (
    <div>
      <CreateHeader />
      <CreateUserList />
      <CreateFooter />
    </div>

  );
}

export default App;
