import db from "../utils/db.js"
import { validarUsuario } from "../utils/validator.js"

// Consultas SQL usadas por el modelo de usuarios.
const QUERYS = {
    listarUsuarios: `SELECT u.id, u.nombre, t.tipo as 'tipo_documento', u.documento, r.rol FROM Usuario u
                        INNER JOIN TipoDocumento t ON u.tipoDocumento = t.id
                        INNER JOIN Rol r ON u.rol = r.id`,
    crearUsuario: `INSERT INTO Usuario (tipoDocumento, documento, nombre, rol) VALUES (?, ?, ?, ?)`
}

// Modelo que encapsula la lógica de acceso a datos para usuarios.
// Las funciones devuelven datos listos para ser usados por los controladores.
export default class UsuarioModel{
    // Devuelve un array con todos los usuarios (join con tablas relacionadas).
    static async listarUsuarios() {
        const [result, _] = await db.query(QUERYS.listarUsuarios)
        return result
    }

    // Valida la entrada, crea el usuario en la base de datos y
    // retorna el objeto de usuario validado.
    static async crearUsuario(input) {
        const usuario = validarUsuario(input); 
        const [result, _] = await db.query(QUERYS.crearUsuario,
            [usuario.tipoDocumento, usuario.documento, usuario.nombre, usuario.rol])
        return usuario
    }
}
