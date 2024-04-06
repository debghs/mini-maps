document.getElementById('generateButton').addEventListener('click', generateMiniMap);

function generateMiniMap() {
  const mapDiv = document.getElementById('map');
  mapDiv.innerHTML = '';

  const mapWidth = mapDiv.offsetWidth;
  const cellSize = Math.floor(mapWidth / 30); // Calculate cell size based on map width
  const mapHeight = mapWidth; // Ensure the map is square

  mapDiv.style.height = mapHeight + 'px'; // Set map height to maintain square aspect ratio

  const miniMap = document.createElement('div');
  miniMap.className = 'mini-map';
  mapDiv.appendChild(miniMap);

  const terrainTypes = ['grass', 'water', 'mountain', 'forest'];

  for (let i = 0; i < 30; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < 30; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell ' + getRandomTerrain();
      cell.style.width = cellSize + 'px'; // Set cell width
      cell.style.height = cellSize + 'px'; // Set cell height
      row.appendChild(cell);
    }
    miniMap.appendChild(row);
  }
}

function getRandomTerrain() {
  const terrainTypes = ['grass', 'grass', 'grass', 'grass', 'water', 'water', 'mountain', 'forest', 'forest', 'forest'];
  return terrainTypes[Math.floor(Math.random() * terrainTypes.length)];
}


function getRandomTerrain() {
  const terrainTypes = ['grass', 'grass', 'grass', 'grass', 'water', 'water', 'mountain', 'forest', 'forest','forest'];
  return terrainTypes[Math.floor(Math.random() * terrainTypes.length)];
}
