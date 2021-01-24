import { shuffle, shift } from './arrayUtils'

const possibleValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

const initBoard = () => {
    const values = []
    for (var x = 0; x < 81; x++) {
      values.push({ key: x })
    }
  
    setRow(0, values, shuffle(possibleValues))
    setRow(1, values, shift(rowValues(values, 0), 3))
    setRow(2, values, shift(rowValues(values, 1), 3))
    setRow(3, values, shift(rowValues(values, 2), 1))
    setRow(4, values, shift(rowValues(values, 3), 3))
    setRow(5, values, shift(rowValues(values, 4), 3))
    setRow(6, values, shift(rowValues(values, 5), 1))
    setRow(7, values, shift(rowValues(values, 6), 3))
    setRow(8, values, shift(rowValues(values, 7), 3))
    console.log("Board init done", values)

    console.log("Valid Board? : ", validate(values))

    return values
}

const setRow = (rowIndex, board, values) => {
    const startOffset = rowIndex * 9
    for (let i = 0; i < 9; i++) {
      const boardIndex = i + startOffset
      board[boardIndex].value = values[i]
    }
}

const rowCells = (board, rowIndex) => {
    let cells = []
    for (let i = rowIndex * 9; i < rowIndex * 9 + 9; i++) {
      cells.push(board[i])
    }
    return cells
}
  
const validate = (board) => {
    if (board === undefined) {
        return false;
    }
    
    for (let i = 0; i < 9; i++) {
      if (!arrayIsUnique(columnValues(board, i))) {
        return false
      }
      if (!arrayIsUnique(rowValues(board, i))) {
        return false
      }
      if (!arrayIsUnique(boxValues(board, i))) {
        return false
      }
    }
    console.log("Board Validated")
    return true
}

const arrayIsUnique = a => {
  return a.length === new Set(a).size;
}

const columnCells = (board, columnIndex) => {
    let cells = []
    for (let i = columnIndex; i < 81; i += 9) {
      cells.push(board[i])
    }
    return cells
  }

const rowValues = (board, rowIndex) => {
    return rowCells(board, rowIndex).map(cell => cell.value)
}

const columnValues = (board, columnIndex) => {
  return columnCells(board, columnIndex).map(cell => cell.value)
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

const boxValues = (board, boxIndex) => {
  return boxCells(board, boxIndex).map(cell => cell.value)
}

//const randomiseBoardIndex = (board, boardIndex) => {
//    if (board[boardIndex].value === undefined) {
//      var options = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
//      const columnIndex = boardIndex % 9
//      const column = columnCells(board, columnIndex)
//      const columnValues = column.filter(c => c.value !== undefined).map(c => c.value)
//
//      options = options.filter(n => !columnValues.includes(n))
//
//      const rowIndex = Math.floor(boardIndex / 9)
//      const row = rowCells(board, rowIndex)
//      const rowValues = row.filter(r => r.value !== undefined).map(c => c.value)
//
//      options = options.filter(n => !rowValues.includes(n))
//
//      const co = Math.floor(columnIndex / 3)
//      const ro = rowIndex - (rowIndex % 3)
//      const boxIndex = ro + co
//
//      // console.log("BO", boardIndex, boxIndex, columnIndex, rowIndex, options)
//
//      if (options.length === 0) {
//        console.log("NO OPTIONS TO ASSIGN. BAD LOGIC")
//        console.log("BO", boardIndex, boxIndex, columnIndex, rowIndex, options)
//        board[boardIndex].value = "??"
//      }
//      const rand = options[Math.floor(Math.random() * options.length)];
//      board[boardIndex].value = rand
//    } else {
//      // console.log("Other", board[boardIndex])
//    }
//  }
  
export { initBoard }