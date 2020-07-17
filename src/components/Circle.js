import React, { useEffect } from "react";
import { useRef } from "react";

const getPixelRatio = (context) => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  return (window.devicePixelRatio || 1) / backingStore;
};

const Circle = () => {
  console.log("clcle");

  let ref = useRef();

  useEffect(() => {
    console.log("use effect");

    let canvas = ref.current;
    let ctx = canvas.getContext("2d");

    let ratio = getPixelRatio(ctx);
    let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    let requestId,
      i = 0,
      rad = 0;

    const render = () => {
      rad = (canvas.width / 2) * Math.abs(Math.cos(i));
      // console.log(rad);
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, rad, 0, 2 * Math.PI);
      ctx.fill();
      i += 0.05;
      requestId = requestAnimationFrame(render);
      // console.log(requestId);
    };

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  console.log("pre render");

  return <canvas ref={ref} style={{ width: "100px", height: "100px" }} />;
};

export default Circle;
