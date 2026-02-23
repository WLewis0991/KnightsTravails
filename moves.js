import { valid } from "./checkValidity.js";

export { knightsMoves };

function knightsMoves(start, end){
    if ( JSON.stringify(start) === JSON.stringify(end) ){
        console.log(`Your already here at [${start}] in 0 moves!`)
        return
    }
    if ((!valid(start) || !valid(end))){
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
                if (visitedLocations.some(
                    ([vx, vy]) => vx === nextMove[0] && vy === nextMove[1]
                )) {
                    continue;
                }
                if (nextMove[0] === end[0] && nextMove[1] === end[1]){
                    console.log(`You made it in ${path.length} moves! This is how you got here:`)
                    path.forEach((pos) => console.log(JSON.stringify(pos)))
                    console.log(JSON.stringify(nextMove))
                    return
                } else {
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