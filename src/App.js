import React, { Suspense } from "react";
import "./App.css";
import blueLogoGif from "./assets/logos/blueSlazzzor.com.gif";
import Loading from "./assets/modules/loading";
import GithubContainer from "./assets/modules/githubContainer";
import LinkedInContainer from "./assets/modules/linkedInContainer";


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="container">
        <div>
          <img src={blueLogoGif} alt="slazzzor.com" />
        </div> 
        <div className="profilesContainer">
          <GithubContainer />
          <LinkedInContainer />
        </div>
      </div>
    </Suspense>
      
  );
}

export default App;
