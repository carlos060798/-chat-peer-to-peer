import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayautAuth from "../layouts/LayautAuth";
import HomePage from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import ChatConverter from "../pages/Chat";
import LayautApp from "../layouts/LayautApp";
import { ReactNode } from "react";
import { Navigate } from "react-router";
/*
export default function Router() {
const ProtectedRoute = ({ element} : { element: ReactNode }) => {
    const token = localStorage.getItem('token');
    return token ? element : <Navigate to="/auth/login" />;
  };
  
  const RootRedirect = () => {
    const userid = localStorage.getItem('token');
    return <Navigate to={userid ? "/dashboard" : "/auth/login"} />;
  };


    return (
        <BrowserRouter>
            <Routes>

                <Route element={<LayautAuth />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
                <Route element={<LayautApp />}>
                    <Route path="/chat" element={<ChatConverter />}>
                    </Route>
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
} 
*/



export default function Router() {
  // Ruta protegida que redirige al login si no hay un userid en localStorage
  const ProtectedRoute = ({ element }: { element: ReactNode }) => {
    const userid = localStorage.getItem('userid'); // Buscar el userid en localStorage
    return userid ? element : <Navigate to="/login" />; // Si no existe, redirigir a login
  };

  // Redireccionar desde la raíz al chat o al login dependiendo de la autenticación
  const RootRedirect = () => {
    const userid = localStorage.getItem('userid');
    return <Navigate to={userid ? "/chat" : "/login"} />; // Si está logueado, ir a /chat
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Redireccionar al inicio adecuado (chat o login) */}
        <Route path="/" element={<RootRedirect />} />

        {/* Rutas públicas bajo el layout de autenticación */}
        <Route element={<LayautAuth />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Rutas protegidas bajo el layout de la aplicación */}
        <Route element={<ProtectedRoute element={<LayautApp />} />}>
          <Route path="/chat" element={<ChatConverter />} />
        </Route>

        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
