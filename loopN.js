const createArr = require("./createArray")
const measure = require('./timeMeasure')

const arr = createArr()

const forLoop = () => {

    for (let i = 0; i < arr.length; i++){

        let dummy = arr[i]

    }

}

const forOfLoop = () => {

    for (let val of arr){
        let dummy = val
    }

}

const forLoopCacheLength = () => {

    const l = arr.length
    for (let i = 0; i < l; i++){

        let dummy = arr[i]

    }

}

const mapLoop = () => {

    arr.map(i => {
        let dummy = i
    })

}

const declearFuncMap = () => {

    const func = i => {
        let dummy = i
    }

    arr.map(func)

}

measure("for loop", forLoop)
measure("for cache length loop", forLoopCacheLength)
measure("for of loop", forOfLoop)
measure("map loop", mapLoop)
measure("func map loop", declearFuncMap)