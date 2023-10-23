const http = require('http')

http.createServer(function(request,response){
    response.write('Hello world')
    response.end()
}).listen(3000)

console.log('Servidor escuchando en puerto 3000')