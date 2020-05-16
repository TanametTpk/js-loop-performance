
const measure = (name, callback) => {

    console.time(name)

    callback()

    console.timeEnd(name)

}

module.exports = measure