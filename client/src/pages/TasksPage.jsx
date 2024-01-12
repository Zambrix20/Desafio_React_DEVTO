import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import MainHomePosts from "../components/MainHomePosts";

export default function TasksPage() {

    const { getTasks, tasks } = useTasks();
    // console.log(user);

    //Apenas cargue la pagina, se ejecuta la funcion getTasks y muestra las tareas
    // useEffect(() => {
    //     getTasks();
    // }, []);

    // if (tasks.length === 0) return (
    //     <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    //         <h1>No hay tareas</h1>
    //     </div>
    // )

    return (
        // <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div className="grid grid-cols-[20%_52%_24%] max-w-screen-xl mx-auto gap-4 ">
            <AsideLeft />
            {/* {
                // El task contiene el id, title, description, createdAt, updatedAt y es pasado como props a TaskCard
                tasks.map((task) => (
                    <TaskCard key={task._id} task={task} /> // Le pasamos el task a TaskCard para que lo muestre en pantalla
                ))
            } */}
            <MainHomePosts />
            <AsideRight />
        </div>
        // </div>
    )
}

