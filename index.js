const coordinate = require('./coordinate');
const hasEmpMine = require('./utils').hasEMPMine;
const create2DArray = require('./utils').create2DArray;

const AXIS_LENGTH = 5;
var graph = [[]];
graph = create2DArray([AXIS_LENGTH * 2], [AXIS_LENGTH * 2], (row, column) => row + column);

console.log(graph)
// maintains a record of the places visited  
var characterLocations = []; //keep track of the last coordinates that the character visited

var moves = [[-1, 0], [1, 0], [0, -1], [0, 1]]; //possible movements

characterLocations.push(new coordinate(0, 0));// starting coordinate in the view of a real-world graph

graph[AXIS_LENGTH, AXIS_LENGTH] = true;
//graph[0 + AXIS_LENGTH][0 + AXIS_LENGTH] = true; // the actual coordinate of the origin point in our graph
var area = 1;
//console.log(`characterLocations:::: ${JSON.stringify(characterLocations)}`)
while (Array.isArray(characterLocations) && characterLocations.length > 0) { // O(n^3)
    var charlocation = characterLocations.pop(); // fetch and remove the last location that the character was in
    var lastLocation = new coordinate(charlocation);

    moves.forEach(move => {
        //console.log(`moves : ${moves[i]}`)            
        var move = new coordinate(move);   
        var newX = lastLocation.getX + move.getX; // new x coordinate in the real-world graph after moving
        var newY = lastLocation.getY + move.getY; // new y coordinate in the real-world graph after moving
        var isSafe = !hasEmpMine(newX, newY); // O(n)
        let x = newX + AXIS_LENGTH; // the actual x coordinate in our graph
        let y = newY + AXIS_LENGTH; // the actual y coordinate in our graph
        // check if this coordinate in our graph has been visited before, and if it's safe
        if (!graph[x, y] && isSafe) {
            graph[x, y] = true; // move the character to the new coordinates, and mark as visited
            area += 1; // increment count since this is a safe position
            characterLocations.push(new coordinate(newX, newY)); // push the current real-world location of the character to the stack
        }
    })


}

console.log("The area that the character can travel in a ±" + AXIS_LENGTH + " x ±" + AXIS_LENGTH + " graph is " + area);

