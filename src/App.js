import Home from "./components/Home";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import "./css/App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login"> login </Link>
        <Link to="/createpost"> createpost </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
