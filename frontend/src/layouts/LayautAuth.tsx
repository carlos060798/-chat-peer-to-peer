import { Outlet } from "react-router-dom";
import {Navbar} from "../components/navbar";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function LayautAuth() {
 return (
    <div>
        <Navbar />
        <Outlet />
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover

            />
      
    </div>
 );
}

export default LayautAuth;