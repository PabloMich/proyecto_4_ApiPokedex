import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Inicio from './components/page/Inicio';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Inicio />
      </Router>
    </div>
  );
}

export default App;
