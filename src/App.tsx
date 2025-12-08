import { useState } from 'react';
import './App.css'
import { HangImage } from './components/HangImage'
import { letters } from './helpers/letters'

function App() {

  const [word] = useState<string>('COMPUTADORA');
  const [hiddenWord, setHiddenWord] = useState<string>('_ '.repeat(word.length));
  const [attempts, setAttempts] = useState<number>(0);

  const checkLetter = (letter: string) => {

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9)); //Math se usa para que en pantalla, en los intentos, no aparezca un número mayor a 9 
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(' '));
    
  }

  return (
    <div className="App">
      {/* Imagenes */}
      <HangImage imageNumber={attempts} />

      {/* Palabra oculta */}
      <h3>{hiddenWord}</h3>

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
