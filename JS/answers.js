console.log("hello world");
const table = document.getElementById("times-tables");

for (let i = 1; i <= 12; i++) {
  const row = document.createElement("tr");
  for (let j = 1; j <= 12; j++) {
    const cell = document.createElement("td");
    cell.textContent = i * j;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
