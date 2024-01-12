import { createContext, useContext, useEffect, useState } from "react";

import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth';
import Cookies from 'js-cookie';
import { set } from "zod";

// Usamos un contextoi para poder acceder a los datos del usuario en cualquier parte de la aplicación
export const AuthContext = createContext();

// Hook para usar el contexto de usuario en cualquier parte de la aplicación
export const useAuth = () => {
    const context = useContext(AuthContext); // Obtenemos el contexto de usuario
    if (!context) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }

    return context; // Retornamos el contexto de usuario
}

// El children es el componente que se va a renderizar dentro de este componente AuthProvider
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null) // El usuario que se va a logear o registrar en la aplicación
    const [isAuthenticated, setIsAuthenticated] = useState(false) // Para saber si el usuario esta logeado o no [true, false]
    const [errors, setErrors] = useState([]) // Para guardar los errores que se produzcan en el formulario de registro [null, {error}]
    const [loading, setLoading] = useState(true)

    // Funcion para registrar al usuario
    const signup = async (user) => {
        try {
            const res = await registerRequest(user); // Para enviar los datos al backend y registrar al usuario
            console.log(res.data);
            setUser(res.data); // Guardamos el usuario en el estado
            setIsAuthenticated(true); // El usuario esta autenticado
        } catch (error) {
            // console.log(error.response.data);
            setErrors(error.response.data); // Guardamos los errores en el estado
        }
    }

    // Funcion para loguear al usuario
    const signin = async (user) => {
        try {
            const res = await loginRequest(user); // Para enviar los datos al backend y registrar al usuario
            console.log(res);
            setIsAuthenticated(true); // El usuario esta autenticado
            setUser(res.data); // Guardamos el usuario en el estado
        } catch (error) {
            // console.log(error.response.data);

            // Si el error es un array de errores entonces lo guardamos en el estado
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data); // Guardamos los errores en el estado
            }

            // Si el error es un objeto de error entonces lo guardamos en el estado como un array
            setErrors([error.response.data.message])
        }
    }

    // Funcion para cerrar sesion del usuario 
    const logout = () => {
        Cookies.remove('token'); // Eliminamos la cookie del usuario
        setIsAuthenticated(false); // El usuario no esta autenticado
        setUser(null); // Limpiamos el usuario
    }

    // Funcion para eliminar los mensajes de error despues de 5 segundos
    // Usamos un useEffect para que se ejecute cada vez que el estado de errors cambie
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]); // Aqui se limpia el estado de errors
            }, 5000);
            return () => clearTimeout(timer); // Limpiamos el timer para que no se ejecute mas de una vez cada que cambie el estado de errors
        }
    }, [errors])

    // Funcion cuando cargue la aplicacion
    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get(); // Obtenemos la cookie del usuario

            if (!cookies.token) {
                setIsAuthenticated(false); // El usuario no esta autenticado
                setLoading(false) // Ya termino de cargar la aplicación
                return setUser(null); // Limpiamos el usuario
            }
            // setIsAuthenticated(true); // El usuario esta autenticado
            // console.log('token found: ', cookies.token);
            try {
                const res = await verifyTokenRequest(cookies.token)
                if (!res.data) {
                    setIsAuthenticated(false); // El usuario no esta autenticado
                    setLoading(false) // Ya termino de cargar la aplicación
                    return
                }

                setIsAuthenticated(true); // El usuario esta autenticado
                setUser(res.data); // Guardamos el usuario en el estado
                setLoading(false) // Ya termino de cargar la aplicación

            } catch (error) {
                setIsAuthenticated(false); // El usuario no esta autenticado
                setUser(null); // Limpiamos el usuario
                setLoading(false) // Ya termino de cargar la aplicación
            }


        }
        checkLogin(); // 
    }, [])


    return (
        // Se exporta el singup y el usuario para que se pueda usar en cualquier parte de la aplicación
        // Se usa children para renderizar el componente que se le pase como hijo a este componente AuthProvider
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors,
            loading,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}