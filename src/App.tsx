import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Landing from './components/views/Landing/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
