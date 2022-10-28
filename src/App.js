import './App.css';
import ControlPanel from './ControlPanel';
import Drum from './Drum';



function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="drum-container">
          <Drum />
          <ControlPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
