
import React, { useContext } from "react";
import './../styles/App.css';
import authContext from "../context/authContext";
import { Link, Route, Routes } from "react-router-dom";
import Playground from "./Playground";
import Login from "./Login";

const App = () => {

  const { isLoggedIn } = useContext(authContext)
  return (
    <div className="main-container" >
      {/* Do not remove the main div */}
      <p>
        {!isLoggedIn ? "You are not authenticated, Please login first" : "Logged in, Now you can enter playground"}
      </p>
      <ul>
        <li><Link to='/playground' >Playground</Link></li>
        <li><Link to='/login' >Login</Link></li>
      </ul>
      <Routes>
        <Route path="/playground" element={<Playground/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App