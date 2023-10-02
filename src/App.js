import React, { Suspense } from "react";
import "./App.css";
import blueLogoGif from "./assets/logos/blueSlazzzor.com.gif";
import Loading from "./components/loading";
import GithubContainer from "./components/githubContainer";
import LinkedInContainer from "./components/linkedInContainer";
import ContactContainer from "./components/contactContainer";


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="container" id="main">
        <div>
          <img src={blueLogoGif} alt="slazzzor.com" />
        </div> 
        <div className="profilesContainer">
          <div >
            <GithubContainer />
            <LinkedInContainer />
          </div>
          <div>
            <ContactContainer />
          </div>
        </div>
      </div>
    </Suspense>
      
  );
}

export default App;
