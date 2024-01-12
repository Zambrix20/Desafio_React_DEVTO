import { createContext, useContext, useState } from "react";

import {
    createTaskRequest,
    getTasksRequest,
    deleteTaskRequest,
    getTaskRequest,
    updateTaskRequest,
} from "../api/tasks";

const TasksContext = createContext();

export const useTasks = () => {
    // Esto es para que no se tenga que estar pasando el context por cada componente que lo necesite,
    // sino que se pueda usar el hook useTasks para obtener el context y usarlo en cualquier componente
    const context = useContext(TasksContext);

    if (!context) {
        throw new Error("useTasks debe estar dentro del TasksProvider");
    }

    return context;
};

export function TasksProvider({ children }) {
    // El children es el componente que se va a renderizar dentro del provider

    const [tasks, setTasks] = useState([]); // El estado inicial de las tareas es un arreglo vacio []

    // Funcion para obtener todas tareas del backend
    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            // console.log(res);
            setTasks(res.data); // Guardamos las tareas en el estado de tareas
        } catch (error) {
            console.error(error);
        }
    };

    // Funcion que guarda las tareas en el backend
    const createTask = async (task) => {
        // console.log(task);
        const res = await createTaskRequest(task);
        console.log(res);
    };

    // Funcion para borrar una tarea del backend
    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id);
            // console.log(res);
            // Si el status es 204, significa que se borro correctamente la tarea del backend
            if (res.status === 204) {
                // Filtramos las tareas y guardamos todas las tareas que no tengan el id que se borro
                // Esto es para que se actualice la lista de tareas en el frontend
                const newTasks = tasks.filter((task) => task._id !== id);
                setTasks(newTasks); // Guardamos las tareas en el estado de tareas para que se actualice la lista de tareas en el frontend
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Funcion para obtener una tarea por su id
    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id); // Obtenemos la tarea por su id del backend
            // console.log(res);
            return res.data; // Retornamos la tarea que se obtuvo del backend (res.data es la tarea)
        } catch (error) {
            console.error(error);
        }
    };

    // Funcion para actualizar una tarea
    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task); // Actualizamos la tarea por su id en el backend            
        } catch (error) {
            console.error(error);
        }
    };

    return (
        // El value es lo que se va a pasar a los componentes que esten dentro del provider (en este caso, el componente children)
        // El children es el componente que se va a renderizar dentro del provider (en este caso, el componente App.jsx)
        <TasksContext.Provider
            value={{ tasks, createTask, getTasks, deleteTask, getTask, updateTask }}
        >
            {children}
        </TasksContext.Provider>
    );
}
