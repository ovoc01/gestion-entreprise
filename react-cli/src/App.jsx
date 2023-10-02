import "./App.css";
import "./bulma/css/bulma.css"
import "./bulma/css/bulma.min.css"
import {
  useNavigate,
  useLocation,
  Routes,
  Route,
} from "react-router-dom";
import IndexButton from "./components/index/button/IndexButton";
import GuestHome from "./components/index/guest/home/GuestHome";
import Postulation from "./components/index/guest/home/postContainer/postulation/Postulation";

import LoginForm from "./components/index/login/LoginForm";
import Error404 from "./components/error/Error404";
import DepartementHome from "./components/index/departement/DepartementHome";
import BesoinPersonnel from "./components/index/departement/besoinPersonnel/BesoinPersonnel";

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const consultPost = () => {
      navigate("/post");
      console.log("location", location.pathname);
    };
    const connect = () => {
      navigate("/login");
    };
  return (
      <Routes>
        <Route
          path="/"
          element={
            <div className="index">
              <IndexButton
                text="Consulter les postes disponibles"
                onClick={consultPost}
              />
              <span>Ou se connectez</span>
              <IndexButton text="Se connectez" onClick={connect} />
            </div>
          }
        ></Route>
        <Route path="/post/*" >
            <Route index={true} element={<GuestHome />}/>
            <Route path="postuler/" element={<Postulation/>}>
                <Route path=":id" ></Route>
            </Route>
        </Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/departement/*" element={<DepartementHome />}>
              <Route index element={<BesoinPersonnel />}></Route>
              <Route path="embauche" element= {<BesoinPersonnel/>}>
              </Route>
        </Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
  );
}

export default App;
