import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setAuth }) {
  let navigate = useNavigate();

  const signInGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setAuth(true);
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="loginPage">
      <button className="Google_Login_btn" onClick={signInGoogle}>
        Google Login
      </button>
    </div>
  );
}

export default Login;
