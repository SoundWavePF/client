import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Landing from './components/views/Landing/Landing'
import SignUp from "./components/views/SignUp/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/views/about/About";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
