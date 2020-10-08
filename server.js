const express = require('express')

const server = express()

server.listen(80)

server.get("/", function(request, response){  //en request va toda la información que envía la aplicación cliente -headers, body,
    response.end("Hola mundo!")               //en response van todas los métodos y configuraciones para dar una respuesta al request
                                              //el .end va porque es la última operación que debe realizar la función y devolverle al navegador
})                                            