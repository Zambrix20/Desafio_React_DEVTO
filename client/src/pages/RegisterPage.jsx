import { useForm } from "react-hook-form";

import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
    // Del formState obtenemos los errores para mostrarlos en el formulario
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth(); // Para usar el contexto de usuario
    const navigate = useNavigate(); // Para redireccionar al usuario a otra ruta

    // Usamos el useEffect para redireccionar al usuario a la ruta /tasks si ya esta autenticado (registrado)
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/tasks"); // Redireccionamos al usuario a la ruta /tasks
        }
    }, [isAuthenticated]);

    // Función que se ejecuta al enviar el formulario
    const onSubmit = handleSubmit(async (values) => {
        // console.log(values);
        signup(values); // Enviamos los datos al backend para registrar al usuario, values es un objeto con los datos del usuario
    });

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className="bg-zinc-800 max-w-md p-10 rounded-md">
                <h1 className="text-2xl font-bold text-center mb-4">Registrarse</h1>
                {
                    registerErrors.map((error, index) => (
                        <div key={index} className="bg-red-500 text-sm p-2 my-2 text-white">
                            {error}
                        </div>
                    ))
                }
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        {...register("username", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Username"
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm">
                            El nombre de usuario es requerido
                        </p>
                    )}
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Email"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">El email es requerido</p>
                    )}
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Password"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">
                            La contraseña es requerida
                        </p>
                    )}

                    <button type="submit"
                        className="bg-sky-500 text-white px-4 py-2 rounded-md my-2"
                    >Register</button>
                </form>

                <p className='flex gap-x-2 justify-between mt-4'>
                    ¿Ya tienes una cuenta? <Link to="/login" className='text-sky-500'>Inicia sesión</Link>
                </p>
            </div>
        </div>
    );
}
