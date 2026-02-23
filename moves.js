import { checkVisited, valid } from "./checkValidity.js";

export { knightsMoves, visitedLocations };

function knightsMoves(start, end){
    if ( JSON.stringify(start) === JSON.stringify(end) ){
        console.log(`Your already here at [${start}] in 0 moves!`)
        return
    }
    if ((!valid(start) || !valid(end)) || checkVisited(start) == true){
        console.log("Please choose numbers from 0 to 7")
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

const possibleMoves = [
    [-1, 2], [1, 2], [2, 1], [2, -1],
    [1, -2], [-1, -2], [-2, -1], [-2, 1] 
]

const visitedLocations = []
