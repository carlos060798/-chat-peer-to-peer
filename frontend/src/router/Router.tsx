import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayautAuth from "../layouts/LayautAuth";
import PageNotFound from "../pages/PageNotFound";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import ChatConverter from "../pages/Chat";
import LayautApp from "../layouts/LayautApp";
import { ReactNode } from "react";
import { Navigate } from "react-router";



export default function Router() {

  const ProtectedRoute = ({ element }: { element: ReactNode }) => {
    const userid = localStorage.getItem('userid');
    return userid ? element : <Navigate to="/login" />;
  };


  const RootRedirect = () => {
    const userid = localStorage.getItem('userid');
    return <Navigate to={userid ? "/chat" : "/login"} />
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route element={<LayautAuth />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectedRoute element={<LayautApp />} />}>
          <Route path="/chat" element={<ChatConverter />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
