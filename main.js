//const { Writable } = require("typeorm/platform/PlatformTools")

const { myWebAddress } = require("./modules/myModule")


const {myNumber,myArray} = module.require('./modules/myModule')

console.log(myNumber)
console.log(myWebAddress)
console.log(myArray)