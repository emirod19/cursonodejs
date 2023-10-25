const {readFile}= require('fs/promises')
/* const {promisify}=require('util')
const readFilePromise= promisify(readFile) *///esto reemplaza a la promesa de abajo
/* const getText= (pathFile)=>{
    return new Promise(function(resolve, reject){
        readFile(pathFile,'utf-8',(err,data) => {
            if(err)
            {reject(err);}
            else {resolve(data);}
        });
    });
}
 */
/* getText('./data/fourth.txt')
    .then((result) => console.log(result))
    .catch(error => console.log(error)); */

async function read(){
    try{
        const result = await readFile('./data/first.txt','utf-8')
        console.log(result)
        const result2 = await readFile('./data/second.txt','utf-8')
        console.log(result2)
    }
    catch(error){
        console.log(error)
    }
}

read()

/* readFile('.\data\first.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)}
    console.log(data)
}) */