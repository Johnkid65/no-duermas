import som from './som.jpeg';
import './App.css';
import Texto from './Texto';
import Libro from './Libro';
import Song from './Song';


function App() {
  return (
    <div className="App">
       <header className="App-header">
          <img src={som} className="App-logo" alt="logo" />
            <div>
              <button className="App-button" onClick={Libro}><Texto/></button>
            </div>
            <div>
            <Song/>
            </div>   
        </header>

      <div className="App-libro">
        <Libro/>
      </div>
    </div>
  );
}

export default App;
