import React from "react";

function Projects() {
  const projects = [
    { name: "Lab 1 — D3 Bar Chart", url: "#" },
    { name: "Lab 2 — D3 Interactions", url: "#" },
    { name: "Final Project", url: "#" },
    { name: "Test Project", url: "#" },
    { name: "this is the one im working on ", url: "#" },
    { name: "is this still working", url: "#" }
  ];

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.name}>
            <a href={p.url}>{p.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;