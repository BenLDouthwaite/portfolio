import React from "react";
import { Board } from "../components/Board";
import { initBoard } from "../utils/sudokuBoardGenerator";

const Sudoku = () => {
  const boardState = initBoard();
  const board = Board(boardState);

  return (
    <div className="page">
      <h1>sudoku</h1>
      {board}
    </div>
  );
};

export default Sudoku;
