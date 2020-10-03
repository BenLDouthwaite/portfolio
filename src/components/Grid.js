import { useCanvas } from "./Canvas";

export const Grid = () => {
  const context = useCanvas();

  const xTarget = 300;
  const yTarget = 100;
  if (context !== null) {
    // Reference coordinates
    context.fillStyle = "green";
    for (var i = 0; i < 1500; i += 50) {
      for (var j = 0; j < 1200; j += 50) {
        context.fillRect(i, j, 2, 2);
      }
    }
    context.fillRect(xTarget, yTarget, 30, 30);
  }

  return null;
};
