import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import headshot from "./Hayden square.jpg";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

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
            <li><NavLink to="/homepage/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink></li>
            <li><NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")}>Experience</NavLink></li>
          </ul>
        </nav>

        <main className="Content">
          <Routes>
            <Route
              path="/homepage/"
              element={
                <div>
                  <h1>Home</h1>
                  <h2> Welcome</h2>
                  <p>Welcome to Hayden Kirkeide's new portfolio! Here, using the menu you can: </p>
                  <ul> 
                    <li> learn about my personal experiences in my About section </li>
                    <li> view projects I've completed (including the one you're looking at!)</li>
                    <li> gain a more comprehensive understanding of my education, work experience, and see relevant classes I've taken</li>
                    </ul>
                    <p> and much more. This site is still a work in progress, so check
                      back regularly to see if I've added any more projects to my portfolio.
                    </p>
                    <p> Please don't hesitate to contact me at haydenkirkeide@gmail.com and please enjoy! </p>
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;