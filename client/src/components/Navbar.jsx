import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { isAuthenticated, logout, user } = useAuth(); // Obtenemos el estado de autenticación del usuario para saber si esta logeado o no
    console.log(user);

    return (
        <nav className="bg-white mb-3 flex justify-between py-3 px-10 text-black items-center">
            <Link to={isAuthenticated ? "/tasks" : "/"}>
                <h1 className="text-2xl font-bold text-white bg-black p-1">DEV</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li>
                            <Link
                                to="/add-task"
                                className="text-blue-600 p-3 font-semibold rounded-md border border-solid border-blue-900 hover:bg-blue-700 hover:text-white hover:underline"
                            >
                                Create Post
                            </Link>
                        </li>
                        <li
                            className="text-black font-bold"
                        >Bienvenido {user.username}</li>
                        <li>
                            <Link
                                to="/"
                                onClick={() => {
                                    logout();
                                }}
                                className="text-gray-600 p-3  rounded-md hover:bg-gray-100 hover:underline"
                            >
                                Log out
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login" className="text-gray-600 p-3  rounded-md hover:bg-gray-100 hover:underline">
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className="text-blue-600 p-3 font-semibold rounded-md border border-solid border-blue-900 hover:bg-blue-700 hover:text-white hover:underline "
                            >
                                Create account
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
