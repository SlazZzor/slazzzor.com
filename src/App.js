import React from "react";
import "./App.css";
import blueLogoGif from "./assets/logos/blueSlazzzor.com.gif";
import GithubContainer from "./components/githubContainer";
import LinkedInContainer from "./components/linkedInContainer";
import ContactContainer from "./components/contactContainer";
import ProjectsContainer from "./components/projectsContainer";


function App() {
  return (
    <div>
      <div className="logo">
          <img src={blueLogoGif} alt="slazzzor.com" />
      </div>
      <div className="container" id="main">
          <div className="profilesContainer">
            <div >
              <GithubContainer />
              <LinkedInContainer />
            </div>
            <div>
              <ContactContainer />
              <ProjectsContainer />
            </div>
          </div>
      </div> 
    </div>
  );
}

export default App;
