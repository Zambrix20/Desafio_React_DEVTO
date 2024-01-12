import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AsideLeft() {
    const { isAuthenticated } = useAuth(); // Obtenemos el estado de autenticación del usuario para saber si esta logeado o no

    return (
        <aside className="text-black">
            {!isAuthenticated && (
                <div className="bg-white flex flex-col p-4 gap-4 rounded-md border-solid border border-gray-200 h-[fit-content]">
                    <h2 className="font-bold text-2xl">
                        DEV Community is a community of 1,233,306 amazing developers
                    </h2>
                    <p className="text-gray-500">
                        We're a place where coders share, stay up-to-date and grow their
                        careers.
                    </p>
                    <div className="flex flex-col items-center gap-1">
                        <Link
                            to="/register"
                            className="hover:bg-blue-700 text-blue-700 hover:text-white font-medium py-2 px-4 rounded-md border border-blue-700 w-full text-center hover:underline underline-offset-2"
                        >
                            Create account
                        </Link>
                        <Link
                            to="/login"
                            className="hover:bg-purple-50 py-2 px-4 rounded-md w-full text-center hover:underline underline-offset-2"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            )}

            <nav className="my-4">
                <ul className="cursor-pointer">
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        {/* icono home png */}
                        <img
                            src="https://img.icons8.com/color/48/home--v1.png"
                            className="w-6 h-6"
                        />
                        <Link to="/">Home</Link>
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/avantgarde/100/overview-pages-3.png"
                            className="w-6 h-6"
                        />
                        <Link to="#">Reading List</Link>
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/fluency/48/microphone.png"
                            className="w-6 h-6"
                        />
                        <Link to="#">Podcast</Link>
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/emoji/48/movie-camera-emoji.png"
                            className="w-6 h-6"
                        />
                        <Link to="#">Videos</Link>
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/office/16/tags.png"
                            className="w-6 h-6"
                        />
                        <Link to="#">Tags</Link>
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/fluency/48/light--v1.png"
                            className="w-6 h-6"
                        />
                        <Link to="#">FAQ</Link>
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/emoji/48/shopping-bags.png"
                            className="w-6 h-6"
                        />
                        <Link to="#">Forem Shop</Link>
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/fluency/48/filled-like--v1.png"
                            className="w-6 h-6"
                        />
                        <Link to="#">Advertise on DEV</Link>
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/pulsar-color/48/about.png"
                            className="w-6 h-6"
                        />
                        <Link to="#">About</Link>
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/fluency/48/french-horn.png"
                            className="w-6 h-6"
                        />
                        <Link to="#">Contact</Link>
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/isometric/50/open-book.png"
                            className="w-6 h-6"
                        />
                        <Link to="#">Guides</Link>
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/emoji/48/thinking-face.png"
                            className="w-6 h-6"
                        />
                        <Link to="#">Software comparisons</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
