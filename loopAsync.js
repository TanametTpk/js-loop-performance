const createArr = require("./createArray")
const measure = require('./timeMeasure')
const fetch = require("node-fetch");

const arr = createArr(1000)

const forLoop = async() => {

    let results = []

    for (let i = 0; i < arr.length; i++){

        let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let json = await res.json()
        results.push(json)

    }

}

const mapLoop = async() => {

    let results = await Promise.all(arr.map( async(i) => {

        let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let json = await res.json()
        return json

    }))

}

measure("for loop", forLoop)
measure("map loop", mapLoop)