import React from "react";
import Circle from "../components/Circle";
import SquareCanvas from "../components/SquareCanvas";

export default function Canvas() {
  return (
    <div className="Home">
      <div className="lander">
        <h3>canvas</h3>
        <Circle />
        <SquareCanvas />
      </div>
    </div>
  );
}
