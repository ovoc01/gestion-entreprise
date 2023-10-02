import { useNavigate } from "react-router-dom";
import "./Login.css";
function LoginForm() {
    const navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        navigate("/departement");
    }
  return (
    <>
      <main className="container-login">
        <form action="" className="form-login" onSubmit={submit}>
          <span className="title">Login</span>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="username" />
            </div>
            <p className="help is-success"></p>
          </div>
          <div className="field">
            <div className="control">
              <input className="input" type="password" placeholder="******" />
            </div>
            <p className="help is-success"></p>
          </div>
          <input type="submit" value="Login" className=" button is-link" />
        </form>
      </main>
    </>
  );
}

export default LoginForm;
