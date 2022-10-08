import { useState } from 'react'
import './App.css'
import som from './som.jpeg';
import Texto from './Texto';
import Libro from './Libro';
import Song from './Song';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <header className="App-header">
          <img src={som} className="App-logo" alt="logo" />
            <div className="App-link">
              <Texto/>
            </div>
            <div>
            <Song/>
            </div>   
        </header>

      <div className="App-libro">
        <Libro/>
      </div>
    </div>
  )
}

export default App
