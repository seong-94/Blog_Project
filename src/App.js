import "./css/App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import NavBar from "./components/NavBar";
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
import SideMenu from "./components/SideMenu";

function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <div>
      <SideMenu />
    </div>
  );
}

export default App;
{
  /* <NavBar isAuth={isAuth} setAuth={setAuth} />
<Routes>
  <Route path="/" element={<Home isAuth={isAuth} />} />
  <Route path="/login" element={<Login setAuth={setAuth} />} />
  <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
</Routes> */
}
