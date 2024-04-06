document.getElementById('generateButton').addEventListener('click', generateMiniMap);

function generateMiniMap() {
  const mapDiv = document.getElementById('map');
  mapDiv.innerHTML = '';

  const miniMap = document.createElement('div');
  miniMap.className = 'mini-map';
  mapDiv.appendChild(miniMap);

  const terrainTypes = ['grass', 'water', 'mountain', 'forest'];

  for (let i = 0; i < 30; i++) { // Adjusted to create 40 rows
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < 30; j++) { // Adjusted to create 40 cells in each row
      const cell = document.createElement('div');
      cell.className = 'cell ' + getRandomTerrain();
      row.appendChild(cell);
    }
    miniMap.appendChild(row);
  }
}

function getRandomTerrain() {
  const terrainTypes = ['grass', 'grass', 'grass', 'grass', 'water', 'water', 'mountain', 'forest', 'forest','forest'];
  return terrainTypes[Math.floor(Math.random() * terrainTypes.length)];
}
