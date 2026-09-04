import React from "react";
import "./App.css";
import headshot from "./Hayden square.jpg";

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
        <img src={headshot} alt="Hayden Kirkeide" className="profile-photo" />
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

        <h2> Education </h2>
        <h3> Florida State University </h3>
        <p> Tallahassee, Florida | Expected Graduation Date: December 2026 </p>
        <ul>
          <li> M.S. Data Science: Computer Science</li>
          <li> GPA: 3.9/4.0 </li>
        </ul>
        <h3> University of California, San Diego</h3>
        <p> La Jolla, California | Graduation Date: June 2025 </p>
        <ul>
          <li> B.A. Communication </li>
          <li> B.A. Interdisciplinary Computing and the Visual Arts </li>
          <ul> <li> Applied Computer Science </li></ul>
          <li> GPA: 3.7/4.0</li>
        </ul>

        <h2> Experience </h2>
        <h3> Guest Experience Insights Analyst Intern </h3>
        <p> Carnival Cruise Line, Miami, Florida <br /> May 2026 - August 2026 </p>
      
        <ul> 
          <li> Constructing real-time dashboard in Power BI to track performance of 10+ operational updates aboard Carnival Conquest. </li> 
          <li> Recalculating Net Promoter Score-to-annual revenue ratio to enhance revenue forecasting through SQL and SAS querying. </li> 
          <li> Implementing guest segmentation and clustering algorithm to pinpoint satisfaction gaps across Carnival’s 29 ships using SAS. </li> 
          </ul>
        <h3> Undergraduate Admissions Student Assistant </h3>
        <p> UC San Diego Office of Undergraduate Admissions, La Jolla, California <br /> December 2021 - December 2024 </p>
        <ul> 
          <li> Analyzed frequency distribution and likelihood of guest communication in Python, resulting an optimized staffing schedule.</li> 
          <li> Maintained running analytic dashboard of student records and documents in Slate, averaging around 30 incoming files a day. </li> 
          <li> Coordinated daily shipments of admissions materials to Admissions Officers, overseeing delivery of over 36,000 brochures.
 </li> 
          </ul>
        <h3> Technical Writing Intern </h3>
        <p> Hologic, Inc., San Diego, California <br /> June 2023 - August 2023 </p>
        <ul> 
          <li> Overhauled global Technical Writer’s Handbook using HTML, XML, and CSS languages in single-source authoring software.
 </li> 
          <li> Streamlined Standard Operating Procedure workflows in Agile, enhancing global Technical Writing team efficiency by 8%.
 </li> 
          <li> Updated 3 life cycle process documentation management for diagnostic systems in single-source authoring software.
 </li> 
          </ul>
        <h3> Digital and Consumer Marketing Intern </h3>
        <p> AutoNation, Inc., Fort Lauderdale, Florida </p>
        <ul> 
          <li> Analyzed statistics of 320+ AutoNation franchises using MySQL, revealing a 43% increase in purchases of used vehicles.
          <li> Monitored click-through conversion rate and traffic of AutoNation site over a 10 week period, yielding a 34% success rate.
 </li> 
          <li> Received training in Google Analytics for AutoNation’s web-based services, resulting in a Google Analytics Basic Certificate. </li> 
 </li> 
          </ul>

      <h2> Relevant Coursework </h2>
      <h3> Florida State University </h3> 
      <ul> 
        <li> IN PROGRESS </li>
        <ul> <li> CAP 5619: Deep and Reinforcement Learning  </li>
        
        
        <li> STA 5635: Machine Learning  </li>
        <li> CIS 5370: Computer Security  </li>
        <li> CIS 5390: Introduction to Data Visualization  </li></ul>
        
        <li> PREVIOUSLY COMPLETED </li>
        <ul>
        <li> CAP 5769: Advanced Data Science </li>
        
        <li> STA 5207: Applied Regression Methods </li>
        <li> CAP 5768: Introduction to Data Science </li>
        </ul>

      </ul>
      <h3> UC San Diego </h3>
      <ul> 
        <li> COGS 9: Introduction to Data Science</li>
        <li> CSE 8A: Introduction to Python </li>
        <li> CSE 8B: Introduction to Java </li>
        <li> PSYC 60: Introduction to Statistics </li>
        <li> VIS 142: Practices in Computing Arts </li>
        <li> VIS 146A: Computer Controlled Fabrication </li>
        <li> VIS 147A: Electronic Technologies for Art </li>
        <li> VIS 41: Design Communication </li>
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