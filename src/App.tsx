import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Landing from './components/views/Landing/Landing'
import SignUp from "./components/views/SignUp/SignUp";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
