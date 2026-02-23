//* Knights Travails


function valid(pos) {
    if (pos[0] >= 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] <= 7) {
        return true;
    }else {
        return false;
    }
}

function knightsMoves(start, end){
    if ( JSON.stringify(start) === JSON.stringify(end) ){
        console.log(`Your already here at [${start}] in 0 moves!`)
        return
    }
    if ((!valid(start) || !valid(end)) || checkVisited(start) == true){
        console.log("invalid")
    }else {
        const queue = [[start]];
        const visitedLocations = [];
        visitedLocations.push(start)

        while (queue.length > 0){
            const path = queue.shift();
            const [x, y] = path[path.length -1];
            for ( const [dx, dy] of possibleMoves){
                const nextMove = [dx +x, dy + y];
                if ( !valid(nextMove)){
                    continue
                }
                if (JSON.stringify(visitedLocations).indexOf(nextMove) >= 0){
                    continue
                }
                if (JSON.stringify(nextMove) === JSON.stringify(end)){
                    console.log(`You made it in ${path.length} moves! This is how you got here:`)
                    path.forEach((pos) => console.log(JSON.stringify(pos)))
                    return
                } else {
                    console.log(nextMove)
                    const newPath = [...path, nextMove]
                    queue.push(newPath);
                    visitedLocations.push(nextMove)
                }
            }
        }

    }
}

const visitedLocations = []

function checkVisited (pos){
    const visited = JSON.stringify(visitedLocations)
    const position = JSON.stringify(pos)
    if ( visited.indexOf(position) >= 0){
        return true
    }else {
        return false
    }
}

const possibleMoves = [
    [-1, 2], [1, 2], [2, 1], [2, -1],
    [1, -2], [-1, -2], [-2, -1], [-2, 1] 
]


knightsMoves([0, 0], [0, 0])
