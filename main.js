const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080

const productsRouter = require('./routes/products')
const formProducts = require('./routes/newProduct')

app.use(express.urlencoded({ extended: true }))

app.use("/static", express.static(path.join(__dirname, 'public')))

app.use(express.json())

app.use("/api/products", productsRouter)

app.use('/', formProducts)

const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

server.on("error", (err) => {
    console.log(`Error: ${err.message}`)
})



// middleware es una funcion que se ejecuta en cada ruta. Se ejecuta antes de llegar al callback. Capas antes de llegar al callback final.





// APP RESTful ---> REpresentational State Transfer. 
// Operaciones CRUD ---> Create, Retrieve, Update, Delete.

//Arquitectura stateless. El servidor opera con una request a la vez, y cuando termina con una, no guarda ningun dato.
// Entonces pasa a la siguiente sin saber nada de la anterior.

//cache : operaciones comunes para no darle mas tareas al server si no guardar peticiones recurrentes. 
// Evita repetir varias conexiones entre server y cliente cuando son recurrentes.

// hipermedios permiten navegar entre medios realcionados entre si u otros recursos.

// API ---> Es una capa de abstraccion por el cual 2 medios se comunican.