import React, { useState, useEffect } from "react";
import "./App.css";
import blueLogoGif from "./assets/logos/blueSlazzzor.com.gif";
import Loading from "./assets/modules/loading";
const GithubContainer = React.lazy(() => import ("./assets/modules/githubContainer"));


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.onreadystatechange = () => {
      setTimeout(() => setIsLoaded(true), 1500);
    };
    if (document.readyState === "complete"){
      setTimeout(() => setIsLoaded(true), 1500);
    };
  }, []);

  if (!isLoaded) {
    return (
      <Loading /> 
    )
  };


  return (
      <div className="container">
        <div>
          <img src={blueLogoGif} alt="slazzzor.com" />
        </div> 
        <div className="profilesContainer">
          <GithubContainer />
        </div>
      </div>
  );
}

export default App;
