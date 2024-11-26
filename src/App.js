import './App.css';
import { RoutesPath } from './Routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <RoutesPath />
      <Footer />
    </div>
  );
}

export default App;
