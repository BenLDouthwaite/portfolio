import React, { useState } from "react";
import { Canvas } from "../components/Canvas";
import { useDimensions } from "../components/use-dimensions";
import { Circle } from "../components/Circle";
import { Grid } from "../components/Grid";
import { Line } from "../components/Line";
import BinaryTree from "../datastructures/binary-tree";

const Tree = () => {
  function initBtree() {
    const btree = new BinaryTree();
    btree.insert(10);
    btree.insert(6);
    btree.insert(4);
    btree.insert(2);
    btree.insert(3);
    btree.insert(1);
    btree.insert(8);
    btree.insert(9);
    btree.insert(14);
    btree.insert(12);
    btree.insert(13);
    btree.insert(18);
    btree.insert(17);
    btree.insert(16);
    btree.insert(15);
    // btree.traversal();
    return btree;
  }

  const [btree, setBtree] = useState(initBtree());

  const [ref, { width, height, dpr }] = useDimensions();

  console.log(width, height, dpr);
  // console.log("BTREE", btree);

  function addNode(nodes, node, x, y, px, py, xos) {
    xos = xos / 2;

    nodes.push(<Circle x={x} y={y} text={node.value} />);
    if (px !== null && py !== null) {
      nodes.push(<Line sx={x} sy={y} ex={px} ey={py} />);
    }

    if (node.left != null) {
      addNode(nodes, node.left, x - xos, y + 100, x, y, xos);
    }
    if (node.right != null) {
      addNode(nodes, node.right, x + xos, y + 100, x, y, xos);
    }
  }
  // Custom traversal to map to nodes.
  const nodes = [];

  if (btree.root !== null) {
    addNode(nodes, btree.root, width / 2, 100, null, null, width / 2);
  }

  return (
    <div className="page" ref={ref}>
      {width === undefined || height === undefined || dpr === undefined ? (
        <div>{"🤔"}</div>
      ) : (
        <Canvas width={width} height={height} dpr={dpr} isAnimating={true}>
          <Grid />
          {nodes}
        </Canvas>
      )}
    </div>
  );
};

export default Tree;
