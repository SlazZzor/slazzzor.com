import './App.css';
import logoGif from "./assets/logos/blueSlazzzor.com.gif";
import GithubContainer from './assets/modules/githubContainer';

function App() {
  return (
    <div className="container">
      <div className="logoContainer">
        <img src={logoGif} alt="slazzzor.com" />
      </div> 
      <div>
        <GithubContainer />
      </div>
    </div>
  );
}

export default App;
