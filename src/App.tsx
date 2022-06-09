import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Landing from './components/views/Landing/Landing'
import SearchBar from "./components/commons/SearchBar/SearchBar";
import SignUp from "./components/views/SignUp/SignUp";

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/views/Login/Login";
import About from "./components/views/about/About";
import AdminPanel from "./components/views/AdminPanel/AdminPanel";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/adminpanel" element={<AdminPanel/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/home"  element={<SearchBar/>}>
            <Route index  element={<h1>Ho3me Default child</h1>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
