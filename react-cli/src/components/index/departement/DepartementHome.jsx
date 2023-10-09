import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Outlet,
} from "react-router-dom";
import SideBar from "./include/SideBar";
import "./departement.css";
function DepartementHome() {
  const navigate = useNavigate();
  const about = () => {
    navigate("/about");
  };
  return (
    <>
      <main className="departement-home">
        <SideBar />
        <div className="outlet-container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default DepartementHome;
