const fs = require('fs')

/* const first = fs.readFileSync('./data/first.txt','utf-8')
const second = fs.readFileSync('./data/second.txt')

console.log(first)
console.log(second.toString())

fs.writeFileSync('./data/third.txt','este es un puto tercer archivo, Viva Milei putos!!')

console.log(fs.readFileSync('./data/third.txt','utf-8'))

const title= ' esta es para vos'

fs.writeFileSync('./data/fourth.txt',title,{
    flag:'a'
}
) */

fs.readFile('./data/first.txt',function(error,data){
    if(error)
        console.log('te equivocaste puto', error)
    console.log(data.toString())

})


