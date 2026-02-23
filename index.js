//* Knights Travails

class Queue {
    constructor() {
        this.path = []
    }   
    enqueue(pos){
        this.path.push(pos)
    }
    dequeue(){
        return this.path.shift()
    }
}

function valid(pos) {
    if (pos[0] >= 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] <= 7) {
        return true;
    }else {
        return false;
    }
}

function knightsMoves(start, end){
    const path = new Queue();
    if ( JSON.stringify(start) === JSON.stringify(end) ){
        console.log("Your already here!")
        return
    }
    if ((!valid(start) || !valid(end)) || checkVisited(start) == true){
        console.log("invalid")
    }else {
        path.enqueue(start)
        visitedLocations.push(start)
        console.log(path)
        console.log(visitedLocations)
        console.log("valid")
    }
}

function checkVisited (pos){
    const visited = JSON.stringify(visitedLocations)
    const position = JSON.stringify(pos)
    if ( visited.indexOf(position) >= 0){
        return true
    }else {
        return false
    }
}


const visitedLocations = [
    [7,1]
]

const possibleMoves = [
    [-1, 2], [1, 2], [2, 1], [2, -1],
    [1, -2], [-1, -2], [-2, -1], [-2, 1] 
]


knightsMoves([3, 1], [3,0])
