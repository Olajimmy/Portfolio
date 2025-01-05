import { useState } from "react";
import { Route, Routes } from "react-router";
import Projects from "./components/Projects";
import { Link } from "react-router";
import Resume from "./components/Resume";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {
  return (
    <>
      <div>Welcome to the my Portfolio</div>
      <Link to="/welcome">Explore</Link>

      <Routes>
        <Route path="/" element={<div></div>} />

        <Route path="/welcome" element={<Welcome />} />

        <Route path="/Projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
