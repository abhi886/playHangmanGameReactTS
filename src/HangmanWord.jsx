import React from "react";
const word = "test";
const guessedLetter = ["t", "e"];
export default function HangmanWord() {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25rem",
        fontSize: "2rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1rem solid black" }} key={index}>
          <span
            style={{
              visibility: guessedLetter.includes(letter) ? "visible" : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
