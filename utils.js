const SAFE_THRESHOLD = 23;

// check if coordinate is safe
function hasEMPMine( x, y) { // O(n)
    var tempX = Math.abs(x); 
    var tempY = Math.abs(y);
    var sumX = 0, sumY = 0;
    while (tempX > 0) {
        sumX += tempX % 10;
        tempX /= 10;
    }

    while (tempY > 0) {
        sumX += tempY % 10;
        tempY /= 10;
    }

    return sumX + sumY > SAFE_THRESHOLD;
}

function create2DArray(rows, columns, value = (x, y) => 0) {
    var array = new Array(rows);
    for (var i = 0; i < rows; i++) {
      array[i] = new Array(columns);
      for (var j = 0; j < columns; j++) {
        array[i][j] = value(i, j);
      }
    }
  
    return array;
  }
  
//   var array = create2DArray(2, 2, (row, column) => row + column);
//   console.log(array);
  
module.exports = {hasEMPMine,create2DArray}
