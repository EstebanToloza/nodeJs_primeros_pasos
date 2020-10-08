const express = require('express') //requiere que importe el paquete express instalado

const server = express() //el módulo express ejecutado se guarda en server

const docs = express.static("docs")

server.use ( docs )

server.listen(2000) //configuración del puerto

server.get("/", function(request, response){  //en request va toda la información que envía la aplicación cliente -headers, body, en response van todas los métodos y configuraciones para dar una respuesta al request
    
    response.write("<h1>Titulo principal</h1>")
    response.end("Hola clase desde NodeJs!")               
                                              //el .end va porque es la última operación que debe realizar la función y devolverle al navegador
})

