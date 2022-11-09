import React from "react";
import styles from "./hangmanDrawing.module.css";

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      background: "black",
      border: "10px",
      borderRadius: "100%",
      position: "absolute",
      right: "1px",
      top: "50px",
    }}
    key={1}
  ></div>
);
const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      right: "20px",
      top: "99px",
    }}
    key={2}
  ></div>
);
const LEFT_ARM = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      right: "20px",
      top: "99px",
      rotate: "30deg",
    }}
    key={3}
  ></div>
);
const RIGHT_ARM = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      right: "-50px",
      top: "99px",
      rotate: "150deg",
    }}
    key={4}
  ></div>
);
const RIGHT_LEG = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      right: "-48px",
      top: "216px",
      rotate: "40deg",
    }}
    key={5}
  ></div>
);
const LEFT_LEG = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      right: "18px",
      top: "216px",
      rotate: "-40deg",
    }}
    key={6}
  ></div>
);
const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, RIGHT_LEG, LEFT_LEG];
type HangmanDrawingProps = {
  numberOfGuesses: number;
};
export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <div className={`${numberOfGuesses >= 6 && styles.loser}`}>
          {BODY_PARTS.slice(0, numberOfGuesses)}
        </div>
        <div
          style={{
            width: "8px",
            height: "50px",
            background: "black",
            position: "absolute",
            right: "22px",
          }}
        ></div>
        <div
          style={{
            width: "100px",
            height: "8px",
            background: "black",
            marginLeft: "120px",
          }}
        ></div>
        <div
          style={{
            width: "8px",
            height: "400px",
            background: "black",
            marginLeft: "120px",
          }}
        ></div>
        <div
          style={{
            width: "250px",
            height: "8px",
            background: "black",
          }}
        ></div>
      </div>
    </>
  );
}
