//* Knights Travails

class Queue {
    constructor() {
        this.path = []
    }
    
    enqueue(pos){
        if(!valid(pos)) return null;
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

const possibleMoves = [
    [-1, 2], [1, 2], [2, 1], [2, -1],
    [1, -2], [-1, -2], [-2, -1], [-2, 1] 
]



const newPath = new Queue();

newPath.enqueue([3,5])
newPath.enqueue([7,8])
newPath.enqueue([5,3]);
newPath.enqueue([2,3])
newPath.enqueue([9,3])
console.log(newPath.dequeue())
console.log(newPath)
