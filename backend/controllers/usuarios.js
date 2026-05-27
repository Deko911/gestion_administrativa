import UsuarioModel from "../models/usuarios.js";

// Controlador que expone las acciones relacionadas con usuarios.
// Cada método maneja la petición HTTP correspondiente y utiliza
// el `UsuarioModel` para interactuar con la base de datos.
export default class UsuarioController {
    // Recupera la lista de usuarios y responde con JSON.
    static async listarUsuarios(req, res) {
        const usuarios = await UsuarioModel.listarUsuarios()
        res.json(usuarios)
    }

    // Valida y crea un nuevo usuario a partir del body de la petición.
    // Devuelve un objeto con el estado de la operación.
    static async crearUsuario(req, res) {
        const input = {...req.body}
        const usuario = await UsuarioModel.crearUsuario(input)
        res.json({ status: 'success', message: 'Usuario creado' })
    }
}
