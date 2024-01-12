
import { useEffect } from "react";
import TaskCard from "./TaskCard";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

export default function MainHomePosts() {

    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    if (tasks.length === 0) return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <h1>No hay tareas</h1>
        </div>
    )

    return (
        <main className="text-black">
            <header>
                <nav className="text-black items-start h-15">
                    <ul className="flex flex-row text-lg">
                        <li className="hover:bg-white/50 hover:text-blue-700 p-3">
                            <Link to="#" className="font-bold">
                                Relevant
                            </Link>
                        </li>
                        <li className="hover:bg-white/50 hover:text-blue-700 p-3">
                            <Link to="https://dev.to/latest">Latest</Link>
                        </li>
                        <li className="hover:bg-white/50 hover:text-blue-700 p-3">
                            <Link to="https://dev.to/top/week">Top</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {
                // El task contiene el id, title, description, createdAt, updatedAt y es pasado como props a TaskCard
                tasks.map((task) => (
                    <TaskCard key={task._id} task={task} /> // Le pasamos el task a TaskCard para que lo muestre en pantalla
                ))
            }
        </main>
    )
}
