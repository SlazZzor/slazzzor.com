import '../../App.css';
import {useEffect, useState} from "react";
import githubLogo from "../logos/githubLogo.png"

function GithubContainer() {
    const [profileInfo, setProfileInfo] = useState({})

    useEffect(() => {
        fetch(`https://api.github.com/users/slazzzor`)
            .then(result => result.json()
            .then(jsonResult => {
                setProfileInfo(jsonResult);
                console.log(jsonResult)
            }))
    }, [])
    return (
        <div className="gitContainer">
            <img src={githubLogo} alt="git logo" height={75}></img>
            <img src={profileInfo["avatar_url"]} alt="git pfp" className="gitImg" height={50}></img>
            <a className="gitText" href="https://github.com/SlazZzor" target="_blank" rel="noopener noreferrer"> SlazZzor </a>
        </div>
    );
}

export default GithubContainer;
