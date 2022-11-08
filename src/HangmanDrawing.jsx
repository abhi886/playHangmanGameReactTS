import React from "react";

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
  ></div>
);
const hangman = [
  { HEAD },
  { BODY },
  { LEFT_ARM },
  { RIGHT_ARM },
  { RIGHT_LEG },
  { LEFT_LEG },
];
export default function HangmanDrawing() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {/* {console.log(hangman[0][key])} */}
      {/* {hangman.slice(0, 6).map((h, i) => {
        for (const [key, value] of Object.entries(h)) {
          return value;
        }
      })} */}
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
  );
}
