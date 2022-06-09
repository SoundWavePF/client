import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Landing from './components/views/Landing/Landing'
import SearchBar from "./components/commons/SearchBar/SearchBar";
import SignUp from "./components/views/SignUp/SignUp";
import Home from "./components/views/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/views/Login/Login";
import About from "./components/views/about/About";
import AdminPanel from "./components/views/AdminPanel/AdminPanel";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/adminpanel" element={<AdminPanel/>}/>

        <Route path="/signup" element={<SignUp/>}/>

        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/favs" element={<h1>Favs</h1>}/>
        <Route path="/artist/:id" element={<h1>Artist</h1>}/>
        <Route path="/album/:id" element={<h1>Album</h1>}/>
        <Route path="/playlist/:id" element={<h1>Playlists</h1>}/>

        <Route path="/settings" element={<h1>Settings</h1>}/>
        <Route path="/panel_artist" element={<h1>Panel</h1>}/>
        <Route path="/admin" element={<h1>Admin</h1>}/>

        <Route path="/*" element={<h1>  404  </h1>}/>
      </Routes>
    </div>
  );
}

export default App;
