import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  //diptach
  const dispatch = useDispatch();
  //navigate
  const navigate = useNavigate();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3>SIGN IN</h3>
      <input
        type="email"
        placeholder="EMAIL"
        onChange={(e) => setLogin({ ...login, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="PASSWORD"
        onChange={(e) =>
          setLogin({
            ...login,
            password: e.target.value,
          })
        }
      />

      <>
        {" "}
        <button
          className="submit"
          onClick={() => {
            dispatch(userLogin(login));
            setTimeout(() => {
              navigate("/profile");
            }, 1500);
          }}
        >
          Login
        </button>
      </>

      <h5>
        You don't have acount? <Link to="/register">Sign up</Link>
      </h5>
      <h5>
        You forgot your password?{" "}
        <Link to="/forgotpassword">Reset password</Link>
      </h5>
    </form>
  );
};

export default Login;
