export default function Cell({
  id,
  cell,
  cells,
  onSetCell,
  go,
  setGo,
  winnigMessage,
}) {
  function handleClick(e) {
    // taken is the cell that we are gonna click

    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");

    // when the taken is empty (does not contain anything)

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
      }

      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
      }
    }

    // setting the textContent of the first child of the e.target (X or O)

    if (e.target.firstChild.classList.contains("circle")) {
      e.target.firstChild.textContent = "O";
      handleCellChange("circle");
      setGo("cross");
    }
    if (e.target.firstChild.classList.contains("cross")) {
      e.target.firstChild.textContent = "X";
      handleCellChange("cross");
      setGo("circle");
    }
  }

  function handleCellChange(className) {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    onSetCell(nextCells);
  }
  return (
    <div className="square" id={id} onClick={!winnigMessage && handleClick}>
      <div className={go}></div>
    </div>
  );
}
