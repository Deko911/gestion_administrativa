import { config as env } from "dotenv";
import z from "zod";

env()

// Esquema de las variables de entorno esperadas. Usamos `zod` para
// validar que todas las variables necesarias estén definidas y en el
// formato correcto antes de arrancar la aplicación.
const ExpectedEnv = z.object({
    USER_DB: z.string(),
    PASSWORD_DB: z.string(),
    HOST_DB: z.string(),
    PORT_DB: z.string(),
    NAME_DB: z.string(),
    PORT: z.string()
})

// Recolección de las variables de entorno desde `process.env`.
const Env = {
    USER_DB: process.env.USER_DB,
    PASSWORD_DB: process.env.PASSWORD_DB,
    HOST_DB: process.env.HOST_DB,
    PORT_DB: process.env.PORT_DB,
    NAME_DB: process.env.NAME_DB,
    PORT: process.env.PORT
}

// Validación: si falta alguna variable, la aplicación se detiene con error.
const result = ExpectedEnv.safeParse(Env)

if (result.error) {
    console.error("There are environment variables missing.")
    process.exit(1)
}

const config = result.data;


export default config
