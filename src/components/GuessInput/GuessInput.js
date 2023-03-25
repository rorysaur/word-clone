import { useState } from "react";

function GuessInput({ addGuess, outcome }) {
  const [guess, setGuess] = useState("");

  const onGuessSubmit = (e) => {
    e.preventDefault();

    console.log({ guess });
    addGuess(guess);

    setGuess("");
  };

  return (
    <form onSubmit={onGuessSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        value={guess}
        disabled={!!outcome}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        maxLength={5}
        pattern="\w{5}"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
