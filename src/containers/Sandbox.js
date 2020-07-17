import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default function Sandbox() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="Home">
      <div className="lander">
        <h3>sandbox</h3>
        <Button onClick={() => setCount(count + 1)}>increment</Button>
        <Badge variant="secondary">{count}</Badge>
      </div>
    </div>
  );
}
