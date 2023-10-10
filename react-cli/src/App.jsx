import "./App.css";
import "./bulma/css/bulma.css"
import "./bulma/css/bulma.min.css"
import {
  useNavigate,
  useLocation,
  Routes,
  Route,
} from "react-router-dom";
import {Toaster} from 'sonner'
import IndexButton from "./components/index/button/IndexButton";
import GuestHome from "./components/index/guest/home/GuestHome";
import Postulation from "./components/index/guest/home/postContainer/postulation/Postulation";

import LoginForm from "./components/index/login/LoginForm";
import Error404 from "./components/error/Error404";
import DepartementHome from "./components/index/departement/DepartementHome";
import CreateAnnonce from "./components/index/departement/createAnnonce/CreateAnnonce"
import ListAnnonces from "./components/index/departement/listAnnonces/ListAnnonces";
import CVMaker from "./components/index/departement/cVMaker/CVMaker";
import QCMMaker from "./components/index/departement/qCMMaker/QCMMaker";

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
    <>
    <Toaster richColors />
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
              <Route index element={
                  <><h1 className="title">Bonjour</h1></>
              }></Route>
              <Route path="create-annonce" element={<CreateAnnonce />}></Route>
              <Route path="annonces/*" >
                <Route index={true} element={<ListAnnonces />}></Route>
                <Route path=":idAnnonce/cv" element={<CVMaker/>}></Route>
                <Route path=":idAnnonce/questionnaire" element={<QCMMaker/>}></Route>
              </Route>
        </Route>
        
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
