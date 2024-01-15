import app from "./app.js";
import { connectDB } from "./db.js";

connectDB()

app.get("/api", (req, res) => {
    try {
        res.send("Bienvenido a mi API, para entrar a la API de tareas, ingresa a /api/tasks")

    } catch (error) {
        res.send(error)
    }

})

app.listen(4000, () => {
    console.log("Server is running on port 4000")
})