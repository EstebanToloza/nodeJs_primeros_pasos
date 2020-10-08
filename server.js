const express = require('express') //requiere que importe el paquete express instalado

const server = express() //el módulo express ejecutado se guarda en server

const docs = express.static("docs")
const urlenconded = express.urlencoded({ extended: true }) //configuración cuando la información la envía un form, la convierte a objetc
const json = express.json() //convierte de json a objet

const baseDeProductos = []

server.use ( docs )
server.use( urlenconded )
server.use( json )

server.listen(2000) //configuración del puerto

server.post("/agregar", function(request, response){  //en request va toda la información que envía la aplicación cliente -headers, body, en response van todas los métodos y configuraciones para dar una respuesta al request
    
    baseDeProductos.push( request.body )

    console.log('La base de datos de productos tiene: ')
    console.log(baseDeProductos)

    response.end("Mira la consola!")

    //response.end("Hola clase desde NodeJs!") //el .end va porque es la última operación que debe realizar la función y devolverle al navegador
})

