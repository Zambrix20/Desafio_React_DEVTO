// import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Main_DetailPost() {

    const { setValue, register } = useForm();
    const { getTask } = useTasks();
    const { user } = useAuth();

    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");

    const params = useParams();

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id);
                console.log('task', task);

                // Verificar si el título no es nulo antes de establecerlo
                if (task && task.title) {
                    setValue("title", task.title);
                    setTitleValue(task.title);
                }

                // Verificar si la descripción no es nula antes de establecerla
                if (task && task.description) {
                    setValue("description", task.description);
                    setDescriptionValue(task.description); // Esto nos permite mostrar la descripcion de la tarea 
                }

                // setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
            }
        }
        loadTask();
    }, [params.id, getTask, setValue]); // Agregamos getTask y setValue como dependencias del useEffect para que se ejecute cada vez que cambien los valores de getTask y setValue
    // Ademas, agregamos el params.id como dependencia para que se ejecute cada vez que cambie el id de la tarea en la url

    return (
        <div>
            {/* VER TaskFormPage y traer los valores */}
            <article
                className="bg-white rounded-md mb-5 hover:border-zinc-500/50 border-solid border-[1px] "
            >
                <img
                    // src="https://res.cloudinary.com/practicaldev/image/fetch/s--F6jCmbz_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zbyro9f39xdeowboserg.png"
                    src="https://picsum.photos/650/273"
                    alt=""
                    className="w-full rounded-t-md object-cover"
                />
                <div className="p-5">
                    <div className="flex flex-row gap-2 items-center mb-2 px-10">
                        <img
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--80Xs8zXP--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1067852/9c972a7a-5c3e-4663-ad30-21fe9b9b0c62.jpeg"
                            alt="Ben Halpern"
                            className="w-10 h-10 rounded-full border-solid border-2 border-gray-400/50"
                        />
                        <div className="leading-none">
                            <h3 className="font-semibold cursor-pointer hover:text-blue-700 p-1">
                                {user.username}
                            </h3>
                            <p className="text-xs text-gray-500 pl-1">Posted on 7 ene</p>
                        </div>
                    </div>
                    <div className="pl-10">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row gap-2 items-center mt-3 mb-3">
                                <div className="flex flex-row-reverse items-center gap-8">
                                    <div className="flex justify-center items-center gap-2">
                                        <img
                                            src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                            className="w-6 h-6"
                                        />
                                        <span>23</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <img
                                            src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                            className="w-6 h-6"
                                        />
                                        <span>12</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <img
                                            src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                            className="w-6 h-6"
                                        />
                                        <span>9</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <img
                                            src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                            className="w-6 h-6"
                                        />
                                        <span>15</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <img
                                            src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                            className="w-6 h-6"
                                        />
                                        <span>262</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="font-bold text-4xl mb-3">
                            {titleValue}
                        </h2>

                        <div className="flex flex-wrap">
                            <Link to="#" className="p-2 rounded-md hover:bg-gray-300/30">
                                <span>#</span> github
                            </Link>
                            <Link to="#" className="p-2 rounded-md hover:bg-blue-300/30">
                                <span className="text-blue-600">#</span> profile
                            </Link>
                            <Link to="#" className="p-2 rounded-md hover:bg-green-300/30">
                                <span className="text-green-600">#</span> beginners
                            </Link>
                            <Link to="#" className="p-2 rounded-md hover:bg-yellow-300/30">
                                <span className="text-yellow-300">#</span> tutorial
                            </Link>
                        </div>
                        <p className="text-xl py-6">
                            {descriptionValue}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}