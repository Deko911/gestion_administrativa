import e from "express"
import cors from "cors"
import helmet from "helmet"

import db from "./utils/db.js"
import config from "./utils/config.js"
import usuariosRouter from "./routes/usuarios.js"

const app = e()

app.use(cors())
app.use(e.json())

// Monta el router de usuarios en la ruta base `/usuarios`.
app.use('/usuarios', usuariosRouter)

// Endpoint simple en la raíz para comprobar que el servidor responde.
app.use('/', (req, res) => {
    res.send("Hola")
})

// Inicia el servidor en el puerto definido en la configuración.
app.listen(config.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${config.PORT}`)
})