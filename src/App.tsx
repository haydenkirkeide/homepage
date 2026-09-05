import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import headshot from "./Hayden square.jpg";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Assignment0 from "./pages/ProjectFiles/Assignment0";

function App() {
  return (
    <BrowserRouter >
      <div className="App" id="app">
        <nav className="Sidebar">
          <img src={headshot} alt="Hayden Kirkeide" className="profile-photo" />
          <h1>Hayden Kirkeide</h1>

          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="burger-icon">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <ul className="menu-links">
            <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink></li>
            <li><NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")}>Experience</NavLink></li>
          </ul>
        </nav>

        <main className="Content">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2>Homepage</h2>
                  <p>Welcome to my personal website! Use the menu to explore my About, Projects, and Experience pages.</p>
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/assignment0" element={<Assignment0 />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;