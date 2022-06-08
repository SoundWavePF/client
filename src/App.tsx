import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Landing from './components/views/Landing/Landing'
import SearchBar from "./components/commons/SearchBar/SearchBar";
import SignUp from "./components/views/SignUp/SignUp";

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/views/Login/Login";
import About from "./components/views/about/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/player"  element={<SearchBar/>}/>
      </Routes>
    </div>
  );
}

export default App;
