import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

export function useDimensions() {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState();
  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useEffect(() => {
    if (node !== undefined) {
      let request;
      const measure = () => {
        request = window.requestAnimationFrame(() => {
          const rect = node.getBoundingClientRect();
          console.log("RECT:", rect.height, rect.width);
          setDimensions({
            width: rect.width,
            height: rect.height,
            dpr: window.devicePixelRatio || 1,
          });
        });
      };
      measure();

      const resizeListener = debounce(measure, 100);
      window.addEventListener("resize", resizeListener);

      return () => {
        window.removeEventListener("resize", resizeListener);
        window.cancelAnimationFrame(request);
      };
    }
  }, [node]);

  return [ref, dimensions];
}
