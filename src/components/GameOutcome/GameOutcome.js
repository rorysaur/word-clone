import React from "react";

function GameOutcome({ outcome, numGuesses, answer }) {
  if (!outcome) return null;

  const hasWon = outcome === "win";

  return (
    <>
      {hasWon && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{numGuesses} guesses</strong>.
          </p>
        </div>
      )}
      {!hasWon && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GameOutcome;
