import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AsideRight_DetailPost() {
    const { user } = useAuth(); // Obtenemos el estado de autenticación del usuario para saber si esta logeado o no

    return (
        <aside className="flex flex-col gap-4">
            <div className="bg-white border-t-[30px] border border-t-black rounded-t-md rounded-b-md">
                <section className="p-4 pt-0 flex flex-col gap-4 h-[fit-content]">
                    <div className="-mt-4 flex gap-2 ">
                        <img
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--80Xs8zXP--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1067852/9c972a7a-5c3e-4663-ad30-21fe9b9b0c62.jpeg"
                            alt="Ben Halpern"
                            className="w-12 h-12 rounded-full border-solid border-2 border-gray-400/50 cursor-pointer"
                        />
                        <h2 className="mt-5 font-bold cursor-pointer hover:text-blue-800 ">
                            {user.username}
                        </h2>
                    </div>
                    <button className="bg-blue-700 text-white rounded-md px-4 py-2 w-full hover:bg-blue-800">
                        Follow
                    </button>
                    <p className="text-base leading-6">
                        Software engineer. I write about my experiences and the cool stuff I
                        learn!
                    </p>
                    <div className="grid gap-3">
                        <ul>
                            <div className="text-sm font-semibold uppercase tracking-wide">
                                LOCATION
                            </div>
                            <div>Philippines</div>
                        </ul>
                        <ul>
                            <div className="text-sm font-semibold uppercase tracking-wide">
                                EDUCATION
                            </div>
                            <div>Computer Engineering</div>
                        </ul>
                        <ul>
                            <div className="text-sm font-semibold uppercase tracking-wide">
                                PRONOUNS
                            </div>
                            <div>He/Him</div>
                        </ul>
                        <ul>
                            <div className="text-sm font-semibold uppercase tracking-wide">
                                Work
                            </div>
                            <div>Software Engineer</div>
                        </ul>
                        <ul>
                            <div className="text-sm font-semibold uppercase tracking-wide">
                                JOINED
                            </div>
                            <div>19 abr 2023</div>
                        </ul>
                    </div>
                </section>
            </div>
            <section className="bg-white rounded-md border-solid border border-gray-200">
                <header className="font-bold text-xl p-4">
                    {" "}
                    More from{" "}
                    <span className="text-blue-700 hover:cursor-pointer">
                        {user.username}
                    </span>
                </header>
                <div className="flex flex-col gap-2">
                    <div className="p-4 flex flex-col gap-3">
                        <div>How I Cobntributd One Line of Code to Ethereum</div>
                        <div className="flex flex-wrap gap-2 text-gray-500 text-sm leading-4">
                            <Link>
                                <span>#</span>opensource
                            </Link>
                            <Link>
                                <span>#</span>ethereum
                            </Link>
                            <Link>
                                <span>#</span>softwareengineering
                            </Link>
                            <Link>
                                <span>#</span>begginers
                            </Link>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                        <div>How to Reliably ReAD QR Codes in Node.js</div>
                        <div className="flex flex-wrap gap-2 text-gray-500 text-sm leading-4">
                            <Link>
                                <span>#</span>tutorial
                            </Link>
                            <Link>
                                <span>#</span>node
                            </Link>
                            <Link>
                                <span>#</span>typescript
                            </Link>
                            <Link>
                                <span>#</span>qr
                            </Link>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                        <div href="">My First Open Source Contribution: How I Did it</div>
                        <div className="flex flex-wrap gap-2 text-gray-500 text-sm leading-4">
                            <Link>
                                <span>#</span>opensource
                            </Link>
                            <Link>
                                <span>#</span>web3
                            </Link>
                            <Link>
                                <span>#</span>learning
                            </Link>
                            <Link>
                                <span>#</span>begginers
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
    );
}
