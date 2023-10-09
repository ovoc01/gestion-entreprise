import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import EmbaucheButton from "../embaucheButton/EmbaucheButton";
function SideBar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="departement-sidebar">
        <span className="logo">Services</span>
          <EmbaucheButton />
        <ul>
          <li><Link to="annonces"> Listes annonces</Link></li>
          
        </ul>

      </nav>
    </>
  );
}

export default SideBar;
