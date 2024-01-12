// Pagina para crear tareas (Formulario)
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc); // Esto es para que dayjs pueda manejar fechas en formato UTC

export default function TaskFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks(); // Viene del context TasksContext
    // console.log(createTask);
    const navigate = useNavigate(); // Viene de react-router-dom - useNavigate es un hook que nos permite navegar entre paginas
    const params = useParams(); // Viene de react-router-dom - useParams es un hook que nos permite obtener los parametros de la url (en este caso el id de la tarea)

    // Usamos un useEffect para que cuando se cargue la pagina, se obtenga la tarea por su id y se muestre en el formulario para editarla (si es que se esta editando una tarea)
    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id);
                console.log(task);
                setValue("title", task.title); // Esto nor permite mostrar el titulo de la tarea en el formulario para editarla
                setValue("description", task.description); // Esto nor permite mostrar la descripcion de la tarea en el formulario para editarla
                setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD")); // Esto nor permite mostrar la fecha de la tarea en el formulario para editarla
            }
        }
        loadTask();
    }, []);

    const onSubmit = handleSubmit((data) => {
        // console.log(data);

        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs().utc().format(), // Si data.date existe, significa que se esta editando una tarea, entonces usamos la fecha que viene del formulario, sino usamos la fecha actual
        };

        if (params.id) {
            // Si params.id existe, significa que se esta editando una tarea
            // console.log("Editando tarea");
            // Usamos el spread operator para agregarle la propiedad date a data (data es un objeto que contiene el title, description y date de la tarea) y le pasamos la fecha en formato UTC
            updateTask(params.id, dataValid);
        } else {
            // Si params.id no existe, significa que se esta creando una tarea
            // console.log("Creando tarea");
            createTask(dataValid);
        }

        navigate("/tasks");
    });

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <form onSubmit={onSubmit}>
                    <label htmlFor="title">Titulo</label>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register("title")}
                        autoFocus
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    />

                    <label htmlFor="description">Descripcion</label>
                    <textarea
                        rows="3"
                        placeholder="Description"
                        {...register("description")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    ></textarea>

                    {/* <label htmlFor="date">Fecha</label>
                    <input
                        type="date"
                        placeholder="Date"
                        {...register("date")} // Usamos el register para registrar el input de fecha en el formulario (para que funcione el useForm)
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    /> */}

                    <button className="bg-indigo-500 px-3 py-2 rounded-none">Save</button>
                </form>
            </div>
        </div>
    );
}

// Me quede en el minuto 4:28:00 del video
// https://www.youtube.com/watch?v=NmkY4JgS21A&t=4474s&ab_channel=FaztCode
