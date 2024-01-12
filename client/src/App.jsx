import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import TaskFormPage from './pages/TaskFormPage';
import HomePage from './pages/HomePage';
import DetailPost from './pages/DetailPost';

import ProtectedRoute from './ProtectedRoute';
import { TasksProvider } from './context/TasksContext';
import Navbar from './components/Navbar';

export default function App() {
  return (
    // Usamos el AuthProvider para dar el contexto de usuario a toda la aplicación
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <Navbar />
          <main className='container mx-auto px-4'>
            <Routes>
              {/* Rutas publicas */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Rutas privadas - usuarios ya logueados */}
              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/detail-task/:id" element={<DetailPost />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  )
}
