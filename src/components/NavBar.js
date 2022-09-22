import { useState } from "react";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket as login,
  faRightFromBracket as logout,
} from "@fortawesome/free-solid-svg-icons";
import { auth, provider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ isAuth, setAuth }) {
  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        {!isAuth ? (
          <Link to="/login">
            <FontAwesomeIcon icon={login}></FontAwesomeIcon>
          </Link>
        ) : (
          <>
            <Link to="/createpost">Createpost</Link>
            <FontAwesomeIcon
              onClick={signUserOut}
              icon={logout}
            ></FontAwesomeIcon>
          </>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
