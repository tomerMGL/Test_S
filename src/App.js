import './App.css';
import Render from './Render';
import config from './config';

function App() {
  return (
    <div className="App">
        {Render(config.simulation)}
    </div>
  );
}

export default App;
