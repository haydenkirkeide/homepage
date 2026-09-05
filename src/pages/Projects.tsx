import React from "react";

function Projects() {
  const projects = [
    { name: "Assignment #0", url: "/projects/assignment0" }
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