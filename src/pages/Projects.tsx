import React from "react";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
        <h2> Table of Contents </h2>
        <ol> 
            <li> Assignment #0</li>
        </ol>
      <h2> Assignment #0 </h2>
      <h3>Background</h3>
      <p>As a creative, I have had to have a portfolio website since the start of my studies in 2021. 
        I first began using Squarespace to host my work since it was the only real website builder 
        that I knew of, but quickly realized that it was too restrictive in its file storage and design 
        capabilities. Ever since, I had been looking for a strong website that would allow me to have 
        greater creative control over how my work is presented; I tried Cargo, Wix, everything you can 
        think of. When I learned our first assignment was to create our own website with the capability 
        to essentially control every part of the presentation, I knew I had found the right opportunity 
        to redo my portfolio. I set out to build a new home for my work, creative, coding, and everything 
        in between. My website is for recruiters, classmates, friends and fellow creatives looking for a 
        library of my work. I chose to employ the React.js method we learned during Lab #0 because it 
        would give me the greatest control over how I presented my work. Since I have a lot of experience 
        in several different factors (including graphic design!), being able to put my vast experience at 
        the forefront of my page in the manner that I felt was best was absolutely necessary; being able 
        to change the CSS and HTML code for the website gave me the best capabilities to do so. While this 
        is certainly not the final iteration of my website, this assignment gave me the best opportunity 
        to learn how to front-end develop and deploy my own website, and I will be working on it throughout 
        the semester to improve it as I become more and more familiar with it.
        </p>
        <h3> Main Steps </h3>
        <p> I followed the setup from Lab #0 to link the site to GitHub as well as deploy changes during production. I initiated the development 
            process by putting in npm start to my terminal, and then connecting it to Git using the instructions we completed in the lab. I ran 
            into one major roadblock, which was due to the fact that I did not have GitHub education. I was not able to deploy the site, which 
            put me quite far behind in the development process but I was able to catch up once my application was accepted. I was able to s
            uccessfully deploy my project to GitHub sites, available at this website. I then used HTML assist sites to look up relevant tags, 
            like those for bulleted lists, images, subheadings, and images to organize my homepage. I ran into small issues like my tagging being 
            off since I’m out of practice with HTML, but everything was pretty much smooth sailing. I started writing the About Me section first 
            as professionally as I could, including information from my bachelors degrees and previous work experience. I then moved to Experience, 
            where I essentially copied my resume information into the Experience.tsx file (and learned how to use break tags!). Next, I wrote the 
            education portion of my About Me section, choosing to showcase my undergraduate degrees and my GPAs at both universities I attended. 
            I then included the Relevant Coursework section in Experience since I’m planning to use this site as my new portfolio; I plan on 
            expanding this to a tiered menu once I am more familiar with React. I deployed my changes to GitHub using the following commands, as 
            included in the Lab #0 instructions: </p>
<ol> <li> git add . </li> <li> git commit -m "detail changes"</li> <li> git push </li> <li> npm run deploy</li> </ol>
        <p>I expanded the pages into a “burger” menu, with interactive subpages where I combined my work experience, education, and relevant 
    coursework experience into the Experience page and created a fully navigable Projects page, where I copied and pasted this exact assignment into 
    the page you're reading right now! I plan on expanding this assignment on my own time throughout the semester and adding more details like personal projects and additional 
    information about me, but this assignment has gotten me into a great place to start.
</p>
<h3> Interactivity (Bonus)</h3>
<p> I wanted to organize my site similarly to my original Squarespace site, so I decided to use the same “burger” sidebar I had employed on that 
    site. As I mentioned before, I combined my education, experience, and additional relevant coursework section into one single “Experience” 
    page accessible from the sidebar menu. I also separated out the About Me section into a separate page, calling it “About” and adding in my 
    short bio. I finally workshopped the “Projects” section into its own page in the menu, letting users have easy access to navigating between 
    pages and the home. I also added a Homepage link (which I wrote a short letter on) and added it to the menu; in my experience, I get mad when 
    there’s no way to go back and forth between the homepage and subpages, so I made sure to include it in my own website. My sidebar “burger” 
    menu increases navigability and legibility on my site, since being able to interact with organized homes for information is a good tenet of 
    web design. Some additional changes I made were changing the favicon (the picture that comes up in the corner when you have a tab open) to 
    my logo as well as changing the “React Site” title of the page to “Hayden Kirkeide” to reflect my ownership of the page, a feature which I 
    think make it look more professional and reinforces my ownership over it.
</p>
    </div>
  );
}

export default Projects;