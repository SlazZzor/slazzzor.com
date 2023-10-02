import React, { Suspense } from "react";
import "./App.css";
import blueLogoGif from "./assets/logos/blueSlazzzor.com.gif";
import Loading from "./components/loading";
import GithubContainer from "./components/githubContainer";
import LinkedInContainer from "./components/linkedInContainer";


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
