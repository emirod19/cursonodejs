//console.log(module)

const myWebAddress = "instagram.com"
const myNumber= 33
const myArray=[234,567,890]
const user ={
    name:'ryan',
    lastname: "ray"
}
/* const group={
    myWebAddress:myWebAddress,
    myNumber:myNumber,
    myArray:myArray,
    user:user
} */
/* module.exports = {
    myWebAddress,
    myNumber,
    myArray,
    user
} */

module.exports.user=user
module.exports.myNumber=myNumber
module.exports.myArray=myArray
module.exports.myWebAddress=myWebAddress


/*console.log(module) */