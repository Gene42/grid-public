# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Interview Test

### Test goal: To measure the candidate's ability to solve complex application problems in using efficient data structures and algorithms

This test is designed to measure the candidate's ability to demonstrate proficiency in the following areas:

- Complex Scenario Resolution: The ability to implement a single, unified function that successfully and correctly handles multiple simultaneous conditions or scenarios.
- Algorithmic Problem-Solving: The capability to design and implement effective and efficient algorithms to resolve complex application requirements.
- (Bonus) Advanced State Management: The skill in handling and reconciling multiple logical values for a single state variable within a function.

### Instructions: There are 4 main questions for the candidate to resolve within 40 minutes. We can provide the 5th question when we have spare time

```
  // Q1) Mouse Left-Click Event
  const handleLeftClick = (row: number, column: number) => {
    /**

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
```

[Result](<Screencast from 2025-09-25 20-46-06.webm>)

```
  // Q2) Mouse Right-Click Event
  const handleRightClick = (row: number, column: number) => {
    /**
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
```

[Result](<Screencast from 2025-09-25 20-50-17.webm>)

```
// Q3) Rotate cells clockwise by 90 degree
function rotateClockwise(grid: Cell[][]) {
  /**
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
```

[Result](<Screencast from 2025-09-25 20-55-41.webm>)

```
// Q4) Rotate cells counter clockwise by 90 degree
function rotateCounterClockwise(grid: Cell[][]) {
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
```

[Result](<Screencast from 2025-09-25 20-58-24.webm>)

```
// Q5) - Bonus.
// Provide this feature only if there is spare time.
// Show a video demo instead of full implementation.
// When the user clicks an empty cell, if there are other cells with the same color,
// display the color’s title for one second.
// Hint: use `setTimeout`.
```

[Result](<Screencast from 2025-09-25 21-06-44.webm>)
