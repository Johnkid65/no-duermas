import { useState } from 'react'
import './App.css'
import som from './som.jpeg';
import Texto from './Texto';
import Libro from './Libro';
import Song from './Song';
import som2 from './som2.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <header className="App-header">
          <img src={som2} className="App-logo" alt="img" />
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
