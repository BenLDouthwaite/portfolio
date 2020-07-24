import React from "react";
import { Canvas } from "../components/Canvas";
import { useDimensions } from "../components/use-dimensions";
import { Circle } from "../components/Circle";
import { Grid } from "../components/Grid";
import { Line } from "../components/Line";

const Tree = () => {
  const [ref, { width, height, dpr }] = useDimensions();

  console.log(width, height, dpr);

  return (
    <div className="page" ref={ref}>
      {width === undefined || height === undefined || dpr === undefined ? (
        <div>{"🤔"}</div>
      ) : (
        <Canvas width={width} height={height} dpr={dpr} isAnimating={true}>
          <Grid />
          <Circle x={300} y={100} text={"5"} />

          <Circle x={200} y={200} text={"4"} />
          <Line sx={300} sy={100} ex={200} ey={200} />

          <Circle x={400} y={200} text={"6"} />
          <Line sx={300} sy={100} ex={400} ey={200} />

          <Circle x={500} y={300} text={"7"} />
          <Line sx={400} sy={200} ex={500} ey={300} />

          <Circle x={600} y={400} text={"8"} />
          <Line sx={500} sy={300} ex={600} ey={400} />
        </Canvas>
      )}
    </div>
  );
};

export default Tree;
