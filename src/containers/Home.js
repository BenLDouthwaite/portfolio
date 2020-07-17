import React, { useEffect, useState } from "react";
import "./Home.css";
import Badge from "react-bootstrap/lib/Badge";
import Button from "react-bootstrap/lib/Button";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="Home">
      <div className="lander">
        <h1>Home</h1>
        <p>Subtitle</p>
        <Button onClick={() => setCount(count + 1)}>increment</Button>
        <Badge variant="secondary">{count}</Badge>
      </div>
    </div>
  );
}
