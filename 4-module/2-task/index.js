function makeDiagonalRed(table) {
  let trCells = table.querySelectorAll("tr");
  for (let i = 0; i < trCells.length; i++){
    table.rows[i].cells[i].style.backgroundColor = 'red';
  }
}
