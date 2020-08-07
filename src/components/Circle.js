import { useCanvas } from "./Canvas";

export const Circle = ({ x = 300, y = 100, size = 40, text = "0" }) => {
  const context = useCanvas();

  if (context !== null) {
    // Text
    context.fillStyle = "rgba(0, 0, 0, 1)";
    const font = "bold " + size + "px Arial";
    const width = context.measureText(text).width;
    // TODO This is an approximation, how to improve?
    const height = context.measureText("M").width;
    context.font = font;
    context.fillText(text, x - width / 2, y + height / 3);

    // Circle
    context.fillStyle = "rgba(255, 255, 255, 1)";
    context.strokeStyle = "rgba(20, 10, 50, 1)";
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);

    context.closePath();
    context.fill(); // colour fill
    context.lineWidth = 5;
    context.stroke(); // outline
  }

  return null;
};
