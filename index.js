//* Knights Travails

class Queue {
    constructor() {
        this.path = []
    }
    
    enqueue(pos){
        if(!valid(pos)){
            return null
        } else{
        visited.push(pos)
        this.path.push(pos)
        }
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
    if ((!valid(start) || !valid(end)) || visited.includes(start)){
        console.log("invalid")
    }else {
        path.enqueue(start)
        console.log(path)
    }
}

function checkVisited (pos){
    const visited = JSON.stringify(visitedLocation)
    const position = JSON.stringify(pos)
    if ( visited.indexOf(position) >= 0){
        console.log("visited")
    }else {
        console.log("not visited")
    }
}


const visitedLocation = [
    [7,1]
]

const possibleMoves = [
    [-1, 2], [1, 2], [2, 1], [2, -1],
    [1, -2], [-1, -2], [-2, -1], [-2, 1] 
]


checkVisited([7, 1])
