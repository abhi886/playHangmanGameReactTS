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
export default function Keyboard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: "1rem",
      }}
    >
      {KEYS.map((key) => {
        return (
          <button disabled className={`${styles.btn} `}>
            {key}
          </button>
        );
      })}
    </div>
  );
}
