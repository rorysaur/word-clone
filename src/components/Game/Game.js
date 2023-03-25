import { useState } from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameOutcome from "../GameOutcome/GameOutcome";

import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([]);
  const [outcome, setOutcome] = useState();

  const addGuess = (newGuess) => {
    const results = checkGuess(newGuess, answer);
    const newGuessResults = [...guessResults, results];
    setGuessResults(newGuessResults);

    if (newGuess === answer) {
      setOutcome("win");
    } else if (newGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setOutcome("loss");
    }
  };

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput addGuess={addGuess} outcome={outcome} />
      <GameOutcome
        outcome={outcome}
        numGuesses={guessResults.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
