import React, { useState } from "react";
import { Canvas } from "../components/Canvas";
import { useDimensions } from "../components/use-dimensions";
import { Circle } from "../components/Circle";
import { Line } from "../components/Line";
import BinaryTree from "../datastructures/binary-tree";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const Tree = () => {
  function initBtree(
    values = [10, 6, 4, 2, 3, 1, 8, 9, 14, 12, 13, 18, 17, 16, 15]
  ) {
    const btree = new BinaryTree();
    values.forEach((value) => btree.insert(value));
    return btree;
  }

  const [btree, setBtree] = useState(initBtree());
  const [nodesString, setNodesString] = useState("");
  const [yOffset, setYOffset] = useState(100);

  const [ref, { width, height, dpr }] = useDimensions();
  console.log(width, height, dpr);

  function addNode(nodes, node, x, y, px, py, xos) {
    xos = xos / 2;

    nodes.push(<Circle x={x} y={y} size={20} text={node.value} />);
    if (px !== null && py !== null) {
      nodes.push(<Line sx={x} sy={y} ex={px} ey={py} />);
    }

    if (node.left != null) {
      addNode(nodes, node.left, x - xos, y + yOffset, x, y, xos);
    }
    if (node.right != null) {
      addNode(nodes, node.right, x + xos, y + yOffset, x, y, xos);
    }
  }

  const nodes = [];
  if (btree.root !== null) {
    addNode(nodes, btree.root, width / 2, 100, null, null, width / 2);
  }

  return (
    <div className="page" ref={ref}>
      {width === undefined || height === undefined || dpr === undefined ? (
        <div>{"🤔"}</div>
      ) : (
        <>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Node values to generate tree"
              aria-label="Node values to generate tree"
              value={nodesString}
              onChange={(event) => {
                const nodesString = event.target.value;
                setNodesString(nodesString);
              }}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={() => {
                  const nodeValues = nodesString
                    .split(",")
                    .map((value) => value.trim())
                    .map((value) => parseInt(value, 10));
                  setBtree(initBtree(nodeValues));
                }}
              >
                Generate
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <Button
            variant="outline-secondary"
            onClick={() => {
              setYOffset(yOffset - 10)
            }}
          >
          decrease y offset
          </Button>
          <Canvas width={width} height={height} dpr={dpr} isAnimating={true}>
            {/*<Grid />*/}
            {nodes}
          </Canvas>
        </>
      )}
    </div>
  );
};

export default Tree;
