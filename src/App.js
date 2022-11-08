import './styles/App.css';
import Drum from './Drum';
import ControlPanel from './ControlPanel';



function App() {
  return (
    <div className="app">
      <div className="container">
        <p className="description">
          A simple web application dedicated to satisfying all your
          musical adventures
        </p>
        <div className="drum-container">
          <Drum />
          <ControlPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
