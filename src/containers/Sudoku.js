import React from 'react'

const Cell = ({position, value}) => {
  return (
    <span> 
    {position}-
    {/* {value}  */}
    |
    </span>
  )
}

const Box = ({ cells }) => {

  cells = cells.map(cell => {
    return <Cell key={cell.key} position={cell.key} value={cell.value}/>
  })

  return (
    <>
    <table>
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
  )
}

const initBoard = () => {
  const values = []
  for (var x = 0; x < 81; x++) {
    values.push({ key: x })
  }

  shuffleBox(values, 0);
  shuffleBox(values, 4);
  shuffleBox(values, 8);

  const column1 = columnCells(values, 0)
  console.log(column1)
  const column3 = columnCells(values, 2)
  console.log(column3)
  const column5 = columnCells(values, 4)
  console.log(column5)

  randomiseBoardIndex(values, 72)
  randomiseBoardIndex(values, 75)
  randomiseBoardIndex(values, 78)
  randomiseBoardIndex(values, 36)
  randomiseBoardIndex(values, 29)
  randomiseBoardIndex(values, 42)
  randomiseBoardIndex(values, 73)
  randomiseBoardIndex(values, 3)
  randomiseBoardIndex(values, 4)
  randomiseBoardIndex(values, 5)
  randomiseBoardIndex(values, 6)
  randomiseBoardIndex(values, 7)
  randomiseBoardIndex(values, 8)
  randomiseBoardIndex(values, 9)

  const row2 = rowCells(values, 1)
  console.log(row2)
  return values
}

const randomiseBoardIndex = (board, boardIndex) => {
  if (board[boardIndex].value === undefined) {
//    var options = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const columnIndex = boardIndex % 9
//    const column = columnCells(board, columnIndex)
//    const columnValues = column.filter(c => c.value !== undefined).map(c => c.value)

//    options = options.filter(n => !columnValues.includes(n))

    const rowIndex = Math.floor(boardIndex / 9)
//    const row = rowCells(board, rowIndex)
//    const rowValues = row.filter(r => r.value !== undefined).map(c => c.value)

//    options = options.filter(n => !rowValues.includes(n))

    const co = Math.floor(columnIndex / 3)
    const ro = rowIndex - (rowIndex % 3)
    const boxIndex = ro + co

    console.log("BO", boardIndex, boxIndex, columnIndex, rowIndex)
  } else {
    console.log("Other")
    console.log(board[boardIndex])
  }
}

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const rowCells = (board, rowIndex) => {
  let cells = []
  for (let i = rowIndex * 9; i < rowIndex * 9 + 9; i++) {
    cells.push(board[i])
  }
  return cells
}

const columnCells = (board, columnIndex) => {
  let cells = []
  for (let i = columnIndex; i < 81; i += 9) {
    cells.push(board[i])
  }
  return cells
}

const boxCells = (board, boxIndex) => {
  const x = boxIndex % 3
  const y = Math.floor(boxIndex / 3) 
  const base = x * 3 + y * 27
  const row1 = board.slice(base, base + 3)
  const row2 = board.slice(base + 9, base + 9 + 3)
  const row3 = board.slice(base + 18, base + 18 + 3)
  const cells = [].concat(row1, row2, row3)
  return cells
}

const Sudoku = () => {
  
//  const [board, setBoard] = useState(initBoard());
  const board = initBoard();

  const boxes = []
  for (var i = 0; i < 9; i++) {
    boxes.push(<Box cells={boxCells(board, i)}/>)
  }

  return (
    <div className="page" >
      <h1>sudoku</h1>
      <table>
        <tbody>
        <tr>
          <td>
            {boxes[0]}
          </td>
          <td>
            {boxes[1]}
          </td>
          <td>
            {boxes[2]}
          </td>
        </tr>
        <tr>
          <td>
            {boxes[3]}
          </td>
          <td>
            {boxes[4]}
          </td>
          <td>
            {boxes[5]}
          </td>
        </tr>
        <tr>
          <td>
            {boxes[6]}
          </td>
          <td>
            {boxes[7]}
          </td>
          <td>
            {boxes[8]}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sudoku;

function shuffleBox(values, boxIndex) {
  const box = boxCells(values, boxIndex);
  var myArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  shuffle(myArray);
  for (var i = 0; i < 9; i++) {
    box[i].value = myArray[i];
  }
}
