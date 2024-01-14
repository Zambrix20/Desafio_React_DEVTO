// import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import { useEffect, useState } from "react";

export default function Main_DetailPost() {

    const { setValue, register } = useForm();
    const { getTask } = useTasks();

    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");

    const params = useParams();

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id);
                console.log(task);

                // Verificar si el título no es nulo antes de establecerlo
                if (task && task.title) {
                    setValue("title", task.title);
                    setTitleValue(task.title);
                }

                if (task && task.description) {
                    setValue("description", task.description);
                    setDescriptionValue(task.description);
                }

                // setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
            }
        }
        loadTask();
    }, [params.id, getTask, setValue]);

    return (
        <div>
            {/* VER TaskFormPage y traer los valores */}
            <article
                className="bg-white rounded-md mb-5 cursor-pointer hover:border-zinc-500/50 border-solid border-[1px] "
            >
                <img
                    // src="https://res.cloudinary.com/practicaldev/image/fetch/s--F6jCmbz_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zbyro9f39xdeowboserg.png"
                    src="https://picsum.photos/650/273"
                    alt=""
                    className="w-full rounded-t-md object-cover"
                />
                <div className="p-5">
                    <div className="flex flex-row gap-2 items-center mb-2">
                        <img
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--80Xs8zXP--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1067852/9c972a7a-5c3e-4663-ad30-21fe9b9b0c62.jpeg"
                            alt="Ben Halpern"
                            className="w-10 h-10 rounded-full border-solid border-2 border-gray-400/50 "
                        />
                        {/* <div className="relative bottom-3">
                                <h3 className="font-semibold hover:bg-gray-300/30 rounded-md p-1">Jasper Gabriel</h3>
                                <p className=" absolute top-7 left-1">Jan 7</p>
                            </div> */}
                        <div className="leading-none cursor-pointer">
                            <h3 className="font-semibold hover:bg-gray-300/30 rounded-md p-1">
                                Jasper Gabriel
                            </h3>
                            <p className="pl-1">Jan 7</p>
                        </div>
                    </div>
                    <div className="pl-10">
                        <h2 className="font-bold text-4xl hover:text-blue-700 cursor-pointer mb-3">
                            {/* {register("title") && register("title").value} */}
                            {titleValue}
                        </h2>
                        <p
                            className="text-xl"
                        >
                            {descriptionValue}
                        </p>
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
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row gap-2 items-center mt-3 mb-3">
                                <div className="flex flex-row items-center gap-1 cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md">
                                    <div className="flex flex-row-reverse items-center gap-0">
                                        <div className="rounded-full bg-gray-200/75 w-8 h-8 flex justify-center items-center border-solid border-2 border-white">
                                            <img
                                                src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                                alt=""
                                                className="w-6 h-6"
                                            />
                                        </div>
                                        <div className="rounded-full bg-gray-200/75 w-8 h-8 flex justify-center items-center border-solid border-2 border-white ">
                                            <img
                                                src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                                className="w-6 h-6"
                                            />
                                        </div>
                                        <div className="rounded-full bg-gray-200/75 w-8 h-8 flex justify-center items-center border-solid border-2 border-white ">
                                            <img
                                                src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                                className="w-6 h-6"
                                            />
                                        </div>
                                        <div className="rounded-full bg-gray-200/75 w-8 h-8 flex justify-center items-center border-solid border-2 border-white ">
                                            <img
                                                src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                                className="w-6 h-6"
                                            />
                                        </div>
                                        <div className="rounded-full bg-gray-200/75 w-8 h-8 flex justify-center items-center border-solid border-2 border-white ">
                                            <img
                                                src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                                className="w-6 h-6"
                                            />
                                        </div>
                                    </div>
                                    <span>257 reactions</span>
                                </div>

                                <div className="flex flex-row gap-2 cursor-pointer hover:bg-gray-100 py-2 px-2 rounded-md">
                                    <img
                                        src="https://img.icons8.com/windows/32/1A1A1A/messaging-.png"
                                        alt="messaging-"
                                        className="w-6 h-6"
                                    />
                                    <span>89 comments</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <small>7 min read</small>
                                <div className="hover:bg-gray-100 rounded-md py-2 px-1">
                                    <img
                                        src="https://img.icons8.com/sf-regular/48/1A1A1A/bookmark-ribbon.png"
                                        alt="bookmark-ribbon"
                                        className="w-8 h-6 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex gap-x-2 items-center justify-end">
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md"
                            onClick={() => {
                                deleteTask(task._id);
                            }}
                        >
                            Borrar
                        </button>
                        <Link
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md"
                            to={`/tasks/${task._id}`}
                        >Editar</Link>
                    </div> */}
                </div>

            </article >

        </div>

    )
}