import { Outlet } from "react-router-dom";
import { NavbarApp } from "../components/navbarchat";

function  LayautApp() {
  return (
    <div className="container">
      < NavbarApp/>
      <Outlet />

    </div>
  );
}

export default LayautApp;