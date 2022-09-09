import "./css/App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import { auth, provider } from "./firebase";
import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket as login,
  faRightFromBracket as logout,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"));

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
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </div>
  );
}

export default App;
