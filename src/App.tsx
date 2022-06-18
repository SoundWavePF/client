import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/views/Landing/Landing'
import SignUp from "./components/views/SignUp/SignUp";
import Home from "./components/views/Home/Home";
import Login from "./components/views/Login/Login";
import About from "./components/views/about/About";
import AdminPanel from "./components/views/AdminPanel/AdminPanel";
import AlbumPlaylist from "./components/views/AlbumPlaylist/AlbumPlaylist";
import Library from "./components/views/Library/Library";
import Error404 from "./components/views/error404/error404";
import UserSettings from "./components/views/UserSettings/UserSettings";
import Genre from "./components/views/Genre/Genre";
import FileUpload from "./components/views/FileUpload/FileUpload";
import Player from "./components/commons/Player/Player";
import Top from "./components/views/Top/Top";
import About2 from "./components/views/about/About2";
import ArtistProfile from './components/commons/ArtistProfile/ArtistProfile'
import Artist from "./components/views/Artist/Artist";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/about" element={<About2 />} />
        <Route path="/home" element={<><Home/><Player/></>}/>
        <Route path="/playlists" element={<><Library/><Player/></>}/>
        <Route path="/favorites" element={<><Library/><Player/></>}/>
        <Route path="/top" element={<><Top/><Player/></>} />

        <Route path="/artist/:id" element={<><Artist/><Player/></>} />
        <Route path="/album/:id" element={<><AlbumPlaylist /><Player/></>} />
        <Route path="/playlist/:id" element={<><AlbumPlaylist /><Player/></>} />
        <Route path="/genre/:id" element={<><Genre /><Player/></>} />

        <Route path="/settings" element={<UserSettings />} />
        <Route path="/panel_artist" element={< ArtistProfile/>} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/file" element={<FileUpload />} />

        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
