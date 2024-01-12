import { z } from 'zod';

// Para validar los datos que se envian en el body de la peticion que son los datos del usuario
export const registerSchema = z.object({
    username: z.string({
        required_error: 'El nombre de usuario es requerido'
    }),

    email: z.string({
        required_error: 'El email es requerido'
    }).email({
        message: 'El email no es valido'
    }),

    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6, {
        message: 'La contraseña debe tener minimo 6 caracteres'
    }),
})

// Para vlaidar el login del usuario
export const loginSchema = z.object({
    email: z.string({
        required_error: 'El email es requerido'
    }).email({
        message: 'El email no es valido'
    }),

    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6, {
        message: 'La contraseña debe tener minimo 6 caracteres'
    }),
})