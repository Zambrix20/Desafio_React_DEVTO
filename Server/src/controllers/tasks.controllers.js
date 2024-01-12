import Task from '../models/task.model.js';

// Funciones para las rutas de las tareas y la base de datos donde se guardaran los datos de las tareas

export const getTasks = async (req, res) => {
    try {
        // Busca todas las tareas en la base de datos, usamos el populate para que nos devuelva los datos del usuario que creo la tarea
        // Ademas de que usamos req.user.id para obtener el id del usuario que envia la petición
        const tasks = await Task.find({ user: req.user.id }).populate("user");

        res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
};

export const getTask = async (req, res) => {
    try {
        // Usamos req.params.id para obtener el id que envia el cliente en la petición y usamos el populate para que nos devuelva los datos del usuario que creo la tarea
        const task = await Task.findById(req.params.id).populate("user");
        if (!task) return res.status(404).json({ message: "Task not found" });

        res.json(task);
    } catch (error) {
        return res.status(404).json({ message: "Task not found" });
    }
};

export const createTask = async (req, res) => {
    try {
        const { title, description, date } = req.body; // Usamos req.body para obtener los datos que envia el cliente en la petición

        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id // Usamos req.user.id para obtener el id del usuario que envia la petición
        });

        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
};
export const deleteTask = async (req, res) => {
    try {
        const taskEliminated = await Task.findByIdAndDelete(req.params.id); // Usamos req.params.id para obtener el id que envia el cliente en la petición
        if (!taskEliminated) return res.status(404).json({ message: "The Task was already deleted" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Task not found" });
    }
};
export const updateTask = async (req, res) => {
    try {
        // Usamos req.params.id para obtener el id que envia el cliente en la petición y req.body para obtener los datos que envia el cliente en la petición, ademas de el {new: true} para que devuelva los datos actualizados
        const taskUpdated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!taskUpdated) return res.status(404).json({ message: "Task not updated" });

        res.json(taskUpdated);
    } catch (error) {
        return res.status(404).json({ message: "Task not found" });
    }
};