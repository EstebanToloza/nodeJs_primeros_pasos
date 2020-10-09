const express = require('express') //requiere que importe el paquete express instalado
const easyDB = require('easydb-io')

const server = express() //el módulo express ejecutado se guarda en server


const docs = express.static("docs")
const urlenconded = express.urlencoded({ extended: true }) //configuración cuando la información la envía un form, la convierte a object
const json = express.json() //convierte de json a object

const baseDeProductos = easyDB({
    database: 'fcbad5d4-2370-4853-8807-3f289618b508',
    token: 'db7ecd29-764b-4bc7-8960-15c7c1b2136c'
    })

server.use ( docs )
server.use( urlenconded )
server.use( json )

server.listen(2000) //configuración del puerto

server.post("/agregar", async function(request, response){  //en request va toda la información que envía la aplicación cliente -headers, body, en response van todas los métodos y configuraciones para dar una respuesta al request

    const ID = "P" + Math.random().toString(36).slice(2)
    await baseDeProductos.put(ID, request.body )

    response.end("Mira la consola!")
    //response.end("Hola clase desde NodeJs!") //el .end va porque es la última operación que debe realizar la función y devolverle al navegador
})

server.get("/mostrar", async (request, response) => {

    const productos = await baseDeProductos.list()

    console.log(productos)

    response.end("acá hay que mostrar los productos...")
})

