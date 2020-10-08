import React from "react";

const boxCells = (board, boxIndex) => {
  const x = boxIndex % 3;
  const y = Math.floor(boxIndex / 3);
  const base = x * 3 + y * 27;
  const row1 = board.slice(base, base + 3);
  const row2 = board.slice(base + 9, base + 9 + 3);
  const row3 = board.slice(base + 18, base + 18 + 3);
  const cells = [].concat(row1, row2, row3);
  return cells;
};

const Board = (values) => {
  const style = {
    border: "1px solid black",
  };
  // return values
  const boxes = [];
  for (var i = 0; i < 9; i++) {
    boxes.push(<Box cells={boxCells(values, i)} />);
  }

  return (
    <>
      <table style={style}>
        <tbody>
          <tr>
            <td>{boxes[0]}</td>
            <td>{boxes[1]}</td>
            <td>{boxes[2]}</td>
          </tr>
          <tr>
            <td>{boxes[3]}</td>
            <td>{boxes[4]}</td>
            <td>{boxes[5]}</td>
          </tr>
          <tr>
            <td>{boxes[6]}</td>
            <td>{boxes[7]}</td>
            <td>{boxes[8]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Box = ({ cells }) => {
  const style = {
    // border: "1px solid black",
  };

  cells = cells.map((cell) => {
    return <Cell key={cell.key} position={cell.key} value={cell.value} />;
  });

  return (
    <>
      <table style={style}>
        <tbody>
          <tr>
            <td>{cells[0]}</td>
            <td>{cells[1]}</td>
            <td>{cells[2]}</td>
          </tr>
          <tr>
            <td>{cells[3]}</td>
            <td>{cells[4]}</td>
            <td>{cells[5]}</td>
          </tr>
          <tr>
            <td>{cells[6]}</td>
            <td>{cells[7]}</td>
            <td>{cells[8]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Cell = ({ position, value }) => {
  const style = {
    height: "50px",
    width: "50px",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
  };
  return (
    <>
      <div style={style}>
        <span>
          <b>{value}</b>
        </span>
      </div>
    </>
  );
};
export { Board };
