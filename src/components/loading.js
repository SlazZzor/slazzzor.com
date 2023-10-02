import '../App.css';
import pinkLogoGif from "../assets/logos/pinkSlazzzor.com.gif";


function Loading() {
    return (
        <div className="loading">
            <img src={pinkLogoGif} alt="slazzzor.com" />
        </div>
    );
}

export default Loading;
