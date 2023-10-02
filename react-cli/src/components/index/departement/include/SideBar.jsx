import "./sidebar.css";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Navlist from "./navlist/Navlist";
import BesoinPersonnel from "../besoinPersonnel/BesoinPersonnel";
import { FaBars } from "react-icons/fa";
import EmbaucheButton from "../embaucheButton/EmbaucheButton";
function SideBar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="departement-sidebar">
        <span className="logo">Services</span>
        <ul>
          <EmbaucheButton />
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default SideBar;
