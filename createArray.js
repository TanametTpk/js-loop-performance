
const createArray = (n) => {

    if (!n) n = 1000000

    const arr = []

    for (i = 0 ; i < n; i++){
        arr.push(i)
    }

    return arr

}

module.exports = createArray