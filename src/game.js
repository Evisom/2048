const random = () => {
    return [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
}

const newGame = () => {
    let map = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    let b1 = [0,0]
    let b2 = [0,0]
    while (b1[0] === b2[0] && b1[1] === b2[1]) {
        b1 = random()
        b2 = random()
    }
    map[b1[0]][b1[1]] = 2
    if (Math.random() >= 0.7) {
        map[b2[0]][b2[1]] = 4
    } else {
        map[b2[0]][b2[1]] = 2
    }
    return map
}

const deleteZeroes = (map) => {
    let cmap = [[],[],[],[]]
    for (let i = 0; i < map.length; i++) {
        for (let q = 0; q < map[i].length; q++) {
            if (map[i][q] !== 0) {
                cmap[i].push(map[i][q])
            }
        }
    }
    return cmap
}
const sumBlocks = (map) => {
    for (let i = 0; i < map.length; i++) {
        for (let q = 0; q < map[i].length; q++) {
            if (map[i][q] === map[i][q+1]) {
                map[i][q] = map[i][q]*2
                map[i][q+1] = 0
            }
        }
    }
    return map
}
const completeMap = (map) => {
    let cmap = map
    for (let i = 0; i < map.length; i ++) {
        while (map[i].length !== 4) {
            map[i].push(0)
        }
    }
    return cmap
}
const reverseMap = (map) => {
    for (let i = 0; i < map.length; i++) {
        map[i] = map[i].reverse()
    }
    return map
}
const rotateMap = (map) => {
    let cmap = [[], [], [], []]
    for (let i = 0; i < map.length; i++) {
        for (let q = 0; q < map[i].length; q++) {
            cmap[q][i] = map[i][q]
        }
    }
    return cmap
}
const compareMap = (map1, map2) => {
    let c = 0
    let a = 0
    for (let i = 0; i < map1.length; i++) {
        for (let q = 0; q < map1[i].length; q++) {
            a = a + 1
            if (map1[i][q] == map2[i][q]) {
                c = c + 1
            }
        }
    }
    if (c === a) {
        return true
    } else {
        return false
    }
}


const moveLeft = (map) => {
    map = completeMap(deleteZeroes(sumBlocks(deleteZeroes(map))))
    return map
}
const moveRight = (map) => {
    map = reverseMap(map)
    map = completeMap(deleteZeroes(sumBlocks(deleteZeroes(map))))
    map = reverseMap(map)
    return map
}
const moveUp = (map) => {
    map = rotateMap(map)
    map = moveLeft(map)
    map = rotateMap(map)
    return map
}
const moveDown = (map) => {
    map = rotateMap(reverseMap(rotateMap(map)))
    map = moveUp(map)
    map = rotateMap(reverseMap(rotateMap(map)))
    return map
}

const newBlock = (map) => {
    let c = 0
    for (let i = 0; i < map.length; i++) {
        for (let q = 0; q < map[i].length; q++) {
            if (map[i][q] == 0) {
                c++
            }
        }
    }
    if (c == 0) {
        return map
    }
    let b = random()
    while (map[b[0]][b[1]] !== 0) {
        b = random()
    }
    if (Math.random() >= 0.8) {
        map[b[0]][b[1]] = 4
    } else {
        map[b[0]][b[1]] = 2
    }
    return map
}


const move = (state, dir) => {
    let map = state.arr
    let cmap = map
    switch (dir) {
        case 0:
            map = moveLeft(map)
            break
        case 1:
            map = moveUp(map)
            break   
        case 2:
            map = moveRight(map)
            break    
        case 3:
            map = moveDown(map)
            break  
        default:
            break
    }
    // console.log(compareMap(map, cmap))
    if (!compareMap(map, cmap)) {
        map = newBlock(map)
    }
    
    state.arr = map
    return state
}



exports.move = move
exports.newGame = newGame