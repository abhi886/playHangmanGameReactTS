import React from "react";
import styles from "./keyboard.module.css";
const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addingGuessedLetter: (letter: string) => void;
};
export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addingGuessedLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: "1rem",
      }}
    >
      {KEYS.map((key, i) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addingGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isActive || isInactive}
            key={i}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
