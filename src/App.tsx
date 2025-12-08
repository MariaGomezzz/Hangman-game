import { useState } from 'react';
import './App.css'
import { HangImage } from './components/HangImage'
import { letters } from './helpers/letters'

function App() {

  const [attempts, setAttempts] = useState<number>(0);

  const checkLetter = (letter: string) => {
    //Math se usa para que en pantalla, en los intentos, no aparezca un número mayor a 9 
    setAttempts(Math.min(attempts + 1, 9));
  }

  return (
    <div className="App">
      {/* Imagenes */}
      <HangImage imageNumber={attempts} />

      {/* Palabra oculta */}
      <h3>_ _ _ _ _</h3>

      {/* Contador de intentos */}
      <h3> Intentos: {attempts}</h3>

      {/* Teclado letras */}
      {
        letters.map((letter) => (
          <button
            onClick={() => checkLetter(letter)}
            key={letter}
          >
            {letter}
          </button>
        ))
      }
    </div>
  )
}

export default App
