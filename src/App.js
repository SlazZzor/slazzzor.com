import React from "react";
import "./App.css";
import blueLogoGif from "./assets/logos/blueSlazzzor.com.gif";
import { useMediaQuery } from 'react-responsive'
import GithubContainer from "./components/githubContainer";
import ContactContainer from "./components/contactContainer";
import ProjectsContainer from "./components/projectsContainer";


function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  
  return (
      <div className="container" id={isDesktopOrLaptop ? "main" : ""}>
        <div className="logo">
          <img src={blueLogoGif} alt="slazzzor.com" />
        </div>
          <div className={isDesktopOrLaptop ? "profilesContainer" : "mobileProfileContainer"}>
            <div>
              <GithubContainer />
            </div>
            <div>
              <ContactContainer />
              <ProjectsContainer />
            </div>
          </div>
      </div> 
  );
}

export default App;
