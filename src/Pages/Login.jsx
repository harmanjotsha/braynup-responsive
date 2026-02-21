import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="LoginMain">
        <Navbar />
        <div className="loginBox">
          <h2>Login Here</h2>

          <ul className="loginVia">
            <li className="loginIcon">
              <i class="fa-brands fa-google"></i>
            </li>
            <li className="loginIcon">
              <i class="fa-brands fa-github "></i>
            </li>
            <li className="loginIcon">
              <i class="fa-brands fa-facebook "></i>
            </li>
          </ul>

          <div className="inputBox">
            <i class="fa-solid fa-envelope"></i>
            <input type="text" placeholder="Enter Email" />
          </div>
          <div className="inputBox">
            <i class="fa-solid fa-key"></i>
            <input type="password" placeholder="Enter Password" />
          </div>
          <button className="logBtn">Log in</button>
          <div className="extraLinks">
            <h3>
              Forget Password <a href="#">Click Here</a>
            </h3>
            <h3>
              Dont have an account ? <NavLink to="/register">Sign Up</NavLink>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
