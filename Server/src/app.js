import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";


const app = express()

app.use(cors({
    origin: 'http://localhost:5173', // URL del cliente que va a consumir la API
    credentials: true // Permite que el cliente envie cookies al servidor
})) // Permite que el servidor acepte peticiones de otros dominios (CORS)
app.use(morgan('dev')) // Muestra las peticiones que se hacen al servidor en consola
app.use(express.json()) // Permite que el servidor entienda JSON  
app.use(cookieParser()) // Permite que el servidor entienda las cookies que se envian desde el cliente (navegador)

app.use('/api', authRoutes) // Rutas de autenticación (login, register)
app.use('/api', tasksRoutes) // Rutas de tareas (tasks)

export default app;