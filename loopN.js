const createArr = require("./createArray")
const measure = require('./timeMeasure')
const _ = require('lodash')

const arr = createArr()

const forLoop = () => {

    let newArray = []

    for (let i = 0; i < arr.length; i++) {

        newArray.push(arr[i])

    }

}

const forOfLoop = () => {

    let newArray = []

    for (let val of arr){
        newArray.push(val)
    }

}

const forLoopCacheLength = () => {

    let newArray = []

    const l = arr.length

    for (let i = 0; i < l; i++) {

        newArray.push(arr[i])

    }

}

const mapLoop = () => {

    let newArray = arr.map(i => i)

}

const declearFuncMap = () => {

    const func = i => i

    let newArray = arr.map(func)

}

const lodashMap = () => {

    const func = i => i

    let newArray =  _.map(arr, func);

}

measure("for loop", forLoop)
measure("for cache length loop", forLoopCacheLength)
measure("for of loop", forOfLoop)
measure("map loop", mapLoop)
measure("func map loop", declearFuncMap)
measure("lodash map loop", lodashMap)
