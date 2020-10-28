class Coordinate { 
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get getX() {
        return this.x;
    }
    get getY() {
        return this.y;
    } 
}

module.exports = Coordinate