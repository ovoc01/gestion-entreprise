import { useNavigate } from "react-router-dom";
import './guesthome.css'
import PostContainer from "./postContainer/PostContainer";

function GuestHome(){
    const navigate = useNavigate();
    const home = ()=>{
      navigate('/')
    }
    return (
      <>
        <main className="guest-home">
          <div className="announce">
            <h1 className="title">
              Trouver le travail qui <span>vous correspond</span>
            </h1>
            <h2>
              The best opportunities in some of the best companies so you find
              the job that's right for you.
            </h2>
          </div>
          <button className="button" style={{backgroundColor:" #5088F7",color:"white",marginTop:"10px"}} onClick={home}>Retour a l'accueil</button>
          <PostContainer/>
        </main>
      </>
    );
}

export default GuestHome;