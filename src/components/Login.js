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
      navigate("/");
    });
  };

  return (
    <div className="loginPage">
      <button className="Google_Login_btn" onClick={signInGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
