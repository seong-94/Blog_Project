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

function App() {
  const [isAuth, setAuth] = useState(false);

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setAuth(false);
      window.location.pathname = "/login"; //오류 .....
    });
  };
  return (
    <div>
      <nav>
        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <button onClick={signUserOut}> Log Out </button>
        )}
        <Link to="/"> Home </Link>
        <Link to="/createpost"> Createpost </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
