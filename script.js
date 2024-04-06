document.getElementById('generateButton').addEventListener('click', generateMiniMap);

function generateMiniMap() {
  const mapDiv = document.getElementById('map');
  mapDiv.innerHTML = '';

  const mapWidth = mapDiv.offsetWidth;
  const mapHeight = mapWidth; // Ensure the map is square

  const cellSize = Math.floor(mapWidth / 30); // Calculate cell size based on map width
  const numRows = Math.floor(mapHeight / cellSize); // Calculate number of rows based on map height
  const numCols = Math.floor(mapWidth / cellSize); // Calculate number of columns based on map width

  //mapDiv.style.height = mapHeight + 'px'; // Set map height to maintain square aspect ratio

  const miniMap = document.createElement('div');
  miniMap.className = 'mini-map';
  mapDiv.appendChild(miniMap);

  const terrainTypes = ['grass', 'water', 'mountain', 'forest'];

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < numCols; j++) {
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

