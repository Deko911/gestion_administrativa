import mysql from "mysql2/promise"
import config from "./config.js";


// Crea y devuelve una conexión a la base de datos MySQL.
// Si la conexión falla, se registra el error y se detiene el proceso.
/**
 * @returns {Promise<mysql.Connection>}
 */
async function connectDB() {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: config.HOST_DB,
            user: config.USER_DB,
            password: config.PASSWORD_DB,
            database: config.NAME_DB,
            port: config.PORT_DB
        });
    } catch (error) {
        console.error("Error connecting with db: ", error)
        process.exit(1)
    }
    return connection
}

// Conexión reutilizable exportada para que los modelos puedan ejecutar
// consultas usando la misma instancia.
const connection = await connectDB()

export default connection

