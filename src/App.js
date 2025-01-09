import './App.css';
import { RoutesPath } from './Routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <NavBar />
      <RoutesPath className="grow"/>
      <Footer />
    </div>
  );
}

export default App;
