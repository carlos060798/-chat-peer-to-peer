import { Outlet } from "react-router-dom";
import {Navbar} from "../components/navbar";


function LayautAuth(  ) {
 return (
    <div>
        <Navbar />
        <Outlet />
      
    </div>
 );
}

export default LayautAuth;