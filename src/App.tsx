import { useState } from "react";
import words from "./wordList.json";
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
 const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return <p>Hangman Initial Commit</p>;
}
export default App;
