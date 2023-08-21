import { useEffect, useState } from "react";
import Cell from "./cell";

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

export default function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");
  let message = "It is " + go + "s go!";

  console.log(cells);

  function checkWinns() {
    let isDraw = true;

    WINNING_COMBOS.forEach((array) => {
      const circleWinns = array.every((cell) => cells[cell] === "circle");

      if (circleWinns) {
        setWinningMessage("Circle Wins!");
        isDraw = false;
      }

      const crossWinns = array.every((cell) => cells[cell] === "cross");

      if (crossWinns) {
        setWinningMessage("Cross Wins!");
        isDraw = false;
      }
    });

    if (isDraw && !cells.includes("")) {
      checkDraw();
    }
  }

  function checkDraw() {
    setWinningMessage("Draw!");
  }

  useEffect(() => {
    checkWinns();
  }, [cells]);

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            onSetCell={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  );
}
