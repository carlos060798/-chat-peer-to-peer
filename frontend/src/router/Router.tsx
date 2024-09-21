import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayautAuth from "../layouts/LayautAuth";
import HomePage from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import ChatConverter from "../pages/Chat";
import LayautApp from "../layouts/LayautApp";
export default function Router() {
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