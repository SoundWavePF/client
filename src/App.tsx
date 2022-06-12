import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Landing from './components/views/Landing/Landing'
import SearchBar from "./components/commons/SearchBar/SearchBar";
import SignUp from "./components/views/SignUp/SignUp";
import Home from "./components/views/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/views/Login/Login";
import About from "./components/views/about/About";
import AdminPanel from "./components/views/AdminPanel/AdminPanel";
import AlbumPlaylist from "./components/views/AlbumPlaylist/AlbumPlaylist";
import Error404 from "./components/views/error404/error404";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/favs" element={<h1>Favs</h1>}/>
        <Route path="/artist/:id" element={<h1>Artist</h1>}/>
        <Route path="/album/:id" element={<AlbumPlaylist/>}/>
        <Route path="/playlist/:id" element={<AlbumPlaylist/>}/>

        <Route path="/settings" element={<h1>Settings</h1>}/>
        <Route path="/panel_artist" element={<h1>Panel</h1>}/>
        <Route path="/admin" element={<AdminPanel/>}/>


        <Route path="/*" element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
