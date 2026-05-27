import e from "express"
import UsuarioController from "../controllers/usuarios.js";

// Router para las rutas relacionadas con usuarios.
// Define los endpoints y los handlers (controladores) asociados.
const usauriosRouter = e.Router()

// GET /usuarios -> Lista usuarios
usauriosRouter.get('/', UsuarioController.listarUsuarios)

// POST /usuarios -> Crea un nuevo usuario
usauriosRouter.post('/', UsuarioController.crearUsuario)

export default usauriosRouter