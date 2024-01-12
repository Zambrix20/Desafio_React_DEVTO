import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function ProtectedRoute() {

    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <h1>Loading...</h1>
    }
    // Si no hay usuario logueado, redirigimos a la página de login
    if (!isAuthenticated && !loading) {
        return <Navigate to="/login" replace />
    }

    return (
        // Usamos el componente Outlet para renderizar las rutas que estan dentro de este componente
        // Las rutas que estan dentro de este componente son las rutas privadas
        <Outlet />
    )
}
