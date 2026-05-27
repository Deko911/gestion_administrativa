import z from "zod"

// Esquema de validación para la entrada de usuario. Define campos
// obligatorios y mensajes de error legibles para cada caso.
const UsuarioInput = z.object({
    tipoDocumento: z.number({ error: "El tipo de documento es obligatorio" }),
    documento: z.string({ error: "El documento es obligatorio" }).min(6, { error: "El documento debe tener minimo 6 digitos" }).max(10, { error: "El documento debe tener maximo 10 digitos" }),
    nombre: z.string({ error: "El nombre es obligatorio" }).min(5, { error: "El nombre debe tener minimo 5 letras" }).max(80, { error: "El nombre debe tener maximo 80 letras" }),
    rol: z.number({ error: "El rol es obligatorio" })
})

// Valida el objeto `input` según el esquema y lanza una excepción
// si algún campo no cumple las reglas. Devuelve el objeto validado.
export function validarUsuario(input) {
    return UsuarioInput.parse(input)
}