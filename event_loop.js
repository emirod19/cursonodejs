/* console.log('first')
setTimeout(()=>{
console.log('second')},3000)
console.log('third') */
const http = require('http')

const server= http.createServer((req, res)=> {
    if(req.url==='/'){
        res.write('welcome to the server')
        return res.end()
    }
    if(req.url==='/about'){
        //blocking code
/*         for(let i=0; i<100000;i++)
        {
            console.log(Math.random() * i)
        } */
        res.write('welcome to the fucking about of the server')
        return res.end()
    }
    res.end('not fucking found')
})

server.listen(3000)
console.log('server on port 3000')