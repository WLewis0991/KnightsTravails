import { visitedLocations } from "./moves.js"

export {checkVisited, valid}

function checkVisited (pos){
    const visited = JSON.stringify(visitedLocations)
    const position = JSON.stringify(pos)
    if ( visited.indexOf(position) >= 0){
        return true
    }else {
        return false
    }
}


function valid(pos) {
    if (pos[0] >= 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] <= 7) {
        return true;
    }else {
        return false;
    }
}
