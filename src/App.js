import { useState, useEffect } from 'react';
import './App.css';
import blueLogoGif from "./assets/logos/blueSlazzzor.com.gif";
import Loading from './assets/modules/loading';
import GithubContainer from './assets/modules/githubContainer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setIsLoaded(true);
      }
    }
  }, []);

  if (!isLoaded) {
    return (
      <Loading />
    )
  };

  return (
    <div className="container">
      <div className="logoContainer">
        <img src={blueLogoGif} alt="slazzzor.com" />
      </div> 
      <div>
        <GithubContainer />
      </div>
    </div>
  );
}

export default App;
