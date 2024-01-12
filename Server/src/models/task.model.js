// Defino el modelo de datos para las tareas 
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Hace referencia al modelo de datos de los usuarios
        required: true
    },
}, {
    timestamps: true,
})

export default mongoose.model("Task", taskSchema); // Exporto el modelo de datos para poder usarlo en otras partes de la aplicación