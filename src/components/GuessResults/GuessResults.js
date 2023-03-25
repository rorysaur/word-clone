import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, CHARS_PER_GUESS } from "../../constants";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
        const charResults =
          guessResults[i] ||
          range(CHARS_PER_GUESS).map(() => {
            return { letter: "", status: "" };
          });

        return (
          <p key={crypto.randomUUID()} className="guess">
            {charResults.map(({ letter, status }) => (
              <span key={crypto.randomUUID()} className={`cell ${status}`}>
                {letter}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
