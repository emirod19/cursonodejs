const http = require('http')
const { createSecurePair } = require('tls')

const server = http.createServer(function(request,response){
    console.log(request.url)
    if(request.url ===  '/')
        {
            response.write('welcome to the server')
            return response.end()
        }
    if(request.url === '/about'){
        response.write('chupala bien puto!')
        return response.end()}
    response.write(`<h1> Not found </h1> 
    <p> Esta página no se encontró </p>
    <a href='/'> volver a la pagina principal </a>`)
    return response.end()
})

server.listen(3000)

console.log('Servidor escuchando en puerto 3000')

