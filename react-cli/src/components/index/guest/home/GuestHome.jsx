import { useNavigate } from "react-router-dom";
import './guesthome.css'
import PostContainer from "./postContainer/PostContainer";

function GuestHome(){
    const navigate = useNavigate();
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
          
          <PostContainer/>
        </main>
      </>
    );
}

export default GuestHome;