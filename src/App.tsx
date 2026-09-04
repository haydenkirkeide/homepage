import React from "react";
import "./App.css";

function App() {
  const projects = [
    { name: "Lab 1 — D3 Bar Chart", url: "#" },
    { name: "Lab 2 — D3 Interactions", url: "#" },
    { name: "Final Project", url: "#" },
    { name: "Test Project", url: "#" },
    { name: "this is the one im working on ", url: "#" },
    { name: "is this still working", url: "#" }
  ];

  return (
    <div className="App" id = "app">
      <header style={{ padding: "48px 24px" }}>
        <div className = "Section" > Homepage </div>
        <h1>Hayden Kirkeide</h1>
        <h2> About</h2>
        <p>Hayden Kirkeide is a multidisciplinary creative focusing on the intersection of art, 
          technology, and humanity through data science from and residing in Miami, Florida. 
          She is in the final semester of her Masters of Science in Data Science specializing in 
          Computer Science at Florida State University and holds Bachelors degrees in Communication 
          and Interdisciplinary Computing in the Visual Arts from the University of California at San 
          Diego (UC San Diego), where she graduated with High Honors. Previous works include the 
          completion of two Senior Thesis projects at UC San Diego, where survey and interview data 
          collected from online fan communities resulted in a 60+ page research paper and an interactive 
          data art installation in the Adam D. Kamil Gallery at UC San Diego’s Mandeville Arts Building. 
          Kirkeide plans on working as a data scientist following graduation and hopes to return to San 
          Diego sometime in the near future. </p>

        <h2> Experience </h2>
        <h3> Guest Experience Insights Analyst Intern </h3>
        <p> Carnival Cruise Line, Miami, Florida <br /> May 2026 - August 2026 </p>
      
        <ul> 
          <li> PL1 </li> 
          <li> PL2 </li> 
          <li> PL3 </li> 
          </ul>
        <h3> Technical Writing Intern </h3>
        <p> Hologic, Inc., San Diego, California </p>
        <ul> 
          <li> PL1 </li> 
          <li> PL2 </li> 
          <li> PL3 </li> 
          </ul>
        <h3> Digital and Consumer Marketing Intern </h3>
        <p> AutoNation, Inc., Fort Lauderdale, Florida </p>
        <ul> 
          <li> PL1 </li> 
          <li> PL2 </li> 
          <li> PL3 </li> 
          </ul>
      </header>

      <main style={{ padding: "0 24px" }}>
        <h2>Projects</h2>
        <ul>
          {projects.map((p) => (
            <li key={p.name}>
              <a href={p.url}>{p.name}</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;