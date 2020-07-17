import React from "react";
import { Canvas } from "../components/Canvas";
import { getHexagonsToFillZone } from "../components/random-helpers";
import { Hexagon } from "../components/Hexagon";
import { useDimensions } from "../components/use-dimensions";

const CanvasPage = () => {
  const [ref, { width, height, dpr }] = useDimensions();

  return (
    <div className="page" ref={ref}>
      {width === undefined || height === undefined || dpr === undefined ? (
        <div>{"🤔"}</div>
      ) : (
        <Canvas width={width} height={height} dpr={dpr} isAnimating={true}>
          {getHexagonsToFillZone({
            height: height * dpr,
            width: width * dpr,
          }).map((hexagon, index) => (
            <Hexagon key={index} {...hexagon} />
          ))}
        </Canvas>
      )}
    </div>
  );
};

export default CanvasPage;
