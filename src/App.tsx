import React, { useState, JSX } from "react";

type Cell = {
  color: string | null;
  count: number;
  initialized: boolean;
  message: string;
};

// List of colors
// The candidate needs to randomly choose a color for each cell
const COLORS = ["#e63946", "#2a9d8f", "#45529d", "#f4c661" ];

// Create an empty grid table.
// Then the matrix starts from scratch with empty cell and default values.
function createEmptyGrid(size: number): Cell[][] {
  return Array.from({ length: size }, () =>
    // NOTE: please find out the attributes of each cell.
    Array.from({ length: size }, () => ({ color: null, count: 0, initialized: false, message: '' }))
  );
}

// rotate the cells clockwise
function rotateClockwise(grid: Cell[][]) {
  /**
   Q3) Rotate cells clockwise by 90 degree

   For example, in a simple 3x3 matrix (grid size should not be matter):

  [Before]
    1, 2, 3
    4, 5, 6
    7, 8, 9
  
  [After]
    7, 4, 1
    8, 5, 2
​    9, 6, 3​
   */
}

// rotate the cells counter clockwise
function rotateCounterClockwise(grid: Cell[][]) {
  // Q4) Rotate cells counter clockwise by 90 degree

  /**
   Q4) Rotate cells counter clockwise by 90 degree

   For example, in a simple 3x3 matrix (grid size should not be matter):

  [Before]
    1, 2, 3
    4, 5, 6
    7, 8, 9
  
  [After]
    3, 6, 9
    2, 5, 8
​    1, 4, 7​
   */
}

const tableStyle: React.CSSProperties = {
  borderCollapse: "collapse",
  marginTop: 12,
};

const cellStyleBase: React.CSSProperties = {
  width: 62,
  height: 62,
  border: "1px solid #ccc",
  textAlign: "center",
  verticalAlign: "middle",
  userSelect: "none",
  fontWeight: 600,
  cursor: "pointer",
};

// The default grid table size
const initialInputSize = 3;

// Component
export default function GridMatrix(): JSX.Element {
  const [sizeInput, setSizeInput] = useState<number | ''>(initialInputSize);
  const [grid, setGrid] = useState<Cell[][]>(() => createEmptyGrid(initialInputSize));

  // `Create Grid` button event function
  // configure grid size and reset the cells
  const createGrid = () => {
    if (sizeInput === '') return;

    const size = Math.max(3, sizeInput);
    const oddSize = size % 2 === 0 ? size + 1 : size;
    setSizeInput(oddSize);
    setGrid(createEmptyGrid(oddSize));
  };

  // `Reset` button event function
  // reset grid except for the size
  const resetGrid = () => {
    setGrid(createEmptyGrid(grid.length));
  };

  // left mouse click event function
  const handleLeftClick = (row: number, column: number) => {
    /**
    Q1) Mouse Left-Click Event

    When a user left-clicks on a cell, the following actions should occur:

    1. Fill the Cell: The cell should be filled with a randomly chosen color listed above in `COLORS`.
       (Apply this color using the color property with an inline style.)

    2. Display a Count Number: A count number should be displayed within the cell,
       with the value determined by the following conditions:

      Case 1 (New Color):
        If the cell is empty and no other cells currently have the randomly chosen color,
        the count number should be 1.

      Case 2 (Existing Color):
        If the cell is empty but other cells already have the same color,
        the new count number will be the maximum existing count number plus one.
        For example, New Number = max(existing numbers) + 1.

      Case 3 (Update Existing Cells):
        If a cell is already filled with a color and a count number,
        and you click it again, you should update the count number plus one for all cells of that same color together.
    */
  };

  // right mouse click event function
  const handleRightClick = (row: number, column: number) => {
    /**
    Q2) Mouse Right-Click Event
    
    When a user right-clicks on a cell, the following actions should occur:

    1. Decrement Count Number: The count number in the cell will be decremented based on these conditions:

      Case 1 (Single Cell):
        If the clicked cell is the only cell with its specific color, its count number should decrement by one.

      Case 2 (Multiple Cells):
        If other cells also have the same color, the count number in all cells of that color should decrement 
        by one simultaneously.

      Case 3 (Empty Cell):
        If the cell is empty, nothing should happen. The cell's state remains unchanged.

    2. Clear the Cell: If the count number in any cell reaches zero after a decrement,
      that cell should revert to being an empty cell (i.e., its color and count number are removed). 
      This action applies to any cell that hits zero, regardless of whether it was the one right-clicked.
    */
  };

  // `Rotate 90 Degree CW` button event
  const handleRotateClockwise = () => {
    // Implement `rotateClockwise` function above
    // setGrid((prev) => rotateClockwise(prev));
  };

  // `Rotate 90 Degree CCW` button event
  const handleRotateCounterClockwise = () => {
    // Implement `rotateCounterClockwise` function above
    // setGrid((prev) => rotateCounterClockwise(prev));
  };

  return (
    <div style={{ fontFamily: "system-ui, Arial, sans-serif", padding: 20 }}>
      <h2>Grid Matrix</h2>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <label>
          Grid Size (odd ≥ 3):
          <input
            type="number"
            min={3}
            max={15}
            step={2}
            value={sizeInput}
            onChange={(e) => {
              const inputValue = e.target.value;
              const numberRegex = /^\d+$/;
              const lastValidSize = sizeInput === '' ? '' : Number(sizeInput);

              if (inputValue === '') {
                setSizeInput('');
                return;
              }

              if (!numberRegex.test(inputValue)) {
                setSizeInput('');
                return;
              }

              const number = Number(inputValue);

              if (inputValue === '1') {
                  setSizeInput(number);
                  return;
              }

              if (inputValue.length >= 2 || (number >= 3 && number <= 9)) {
                  if (number > 101 || number < 3) {
                      setSizeInput(lastValidSize);
                      return;
                  }

                  if (number % 2 === 0) {
                      setSizeInput(lastValidSize);
                      return;
                  }
              }

              setSizeInput(number);
            }}
            style={{ width: 80, marginLeft: 8 }}
          />
        </label>
        <button onClick={createGrid}>Create Grid</button>
        <button onClick={handleRotateClockwise}>Rotate 90° CW</button>
        <button onClick={handleRotateCounterClockwise}>Rotate 90° CCW</button>
        <button onClick={resetGrid}>Reset</button>
      </div>
      <div style={{ overflow: "auto" }} onContextMenu={(e) => e.preventDefault()}>
        <table style={tableStyle}>
          <tbody>
            {grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${rowIndex}-${cellIndex}`}
                    onClick={() => handleLeftClick(rowIndex, cellIndex)}
                    onContextMenu={() => handleRightClick(rowIndex, cellIndex)}
                    style={{ ...cellStyleBase, background: cell.color ?? "transparent", color: cell.color ? "#fff" : "inherit" }}
                  >
                    { cell.message || cell.count || null }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
