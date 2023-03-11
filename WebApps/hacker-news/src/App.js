import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateHeader from './components/Header';
import { AutoStory } from './components/AutoStory';
import GetIds from './components/GetIds';
import Container from './components/Container';



function App() {
  return (
    <div>
      <CreateHeader />
      
      <ol style={{backgroundColor: "#f6f6ee"}}>
        <Container />
      </ol>

    </div>
    
  );
}

export default App;
