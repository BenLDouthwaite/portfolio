import { useCanvas } from "./Canvas";

export const Line = ({ sx = 300, sy = 100, ex = 100, ey = 200 }) => {
  const context = useCanvas();

  if (context !== null) {
    context.beginPath();
    context.moveTo(sx, sy);
    context.lineTo(ex, ey);
    context.stroke();
  }

  return null;
};
