import { useForm } from 'react-hook-form';

import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, errors: signinErrors, isAuthenticated, } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        signin(data);
    })

    // Utilizamos este useEffect para que cuando el usuario se loguee, lo redirija a la pagina de tareas
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/tasks');
        }
    }, [isAuthenticated])

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                {
                    signinErrors.map((error, index) => (
                        <div key={index} className="bg-red-500 text-sm p-2 my-2 text-white text-center">
                            {error}
                        </div>
                    ))
                }
                <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
                <form onSubmit={onSubmit}>
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

                    <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded-md my-2">Login</button>
                </form>

                <p className='flex gap-x-2 justify-between mt-4'>
                    ¿No tienes una cuenta? <Link to="/register" className='text-sky-500'>Registrate</Link>
                </p>
            </div>
        </div>
    )
}
