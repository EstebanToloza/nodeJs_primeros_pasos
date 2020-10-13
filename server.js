const express = require('express') //requiere que importe el paquete express instalado

//import easyDB from 'easydb-io'
const easyDB = require('easydb-io')

const server = express() //el módulo express ejecutado se guarda en server

const docs = express.static("docs") //configuramos la ruta para que express "busque" los archivos estáticos
const urlenconded = express.urlencoded({ extended: true }) //configuración cuando la información la envía un form, la convierte a object
const json = express.json() //convierte de json a object

const baseDeProductos = easyDB({
    database: 'edcccf5e-84f7-4732-8d35-1a2676e48046',
    token: 'a2dd9864-bd68-48dd-ba32-e0abc9a84a1e'
    })

server.use ( docs )
server.use( urlenconded )
server.use( json )

server.listen(2000) //configuración del puerto

server.post("/agregar", async function(request, response){  //en request va toda la información que envía la aplicación cliente -headers, body, en response van todas los métodos y configuraciones para dar una respuesta al request

    const ID = "P" + Math.random().toString(36).slice(2) // <-- Ej Pafei0rkgas:
    await baseDeProductos.put(ID, request.body )

    response.end("Mira la consola!")
    //response.end("Hola clase desde NodeJs!")  //el .end va porque es la última operación que debe realizar la función y devolverle al navegador
})

server.get("/mostrar", async (req, res) => {

    const productos = await baseDeProductos.list()
    //console.log(productos)
    res.json(productos)

    //res.end("acá hay que mostrar los productos...")
})

