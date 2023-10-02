import '../App.css';
import {useEffect, useState} from "react";
import githubLogo from "../assets/logos/githubLogo.png"
import blankPfp from "../assets/logos/blankPfp.png"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function GithubContainer() {
    const [profileInfo, setProfileInfo] = useState()
    const [reposInfo, setReposInfo] = useState();
    const [isProfileLoaded, setIsProfileLoaded] = useState(false);


    function renderRepos(){
        if (reposInfo) {
            return reposInfo.sort((a, b) => (Date.parse(b["pushed_at"]) - Date.parse(a["pushed_at"]))).slice(0, 5).map((value, index) => 
                (
                    <div className="gitRepositories" key={index}>
                        <div className="gitRepositoryInfo">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                            </svg>
                            {value["stargazers_count"]}        
                            <div className="gitRepositoryName">
                                <a className="gitRepoText" href={value["html_url"]}  target="_blank" rel="noopener noreferrer"> {value["name"]} </a>
                            </div>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                            </svg>
                            {value["forks_count"]}
                        </div>
                    </div>
                )
            )
        }
    };

    useEffect(() => {
        fetch(`https://api.github.com/users/slazzzor`)
            .then(result => result.json()
            .then(jsonResult => {
                setProfileInfo(jsonResult);
                setIsProfileLoaded(true);
            }))
    }, []);

    useEffect(() => {
        fetch(`https://api.github.com/users/SlazZzor/repos`)
            .then(result => result.json()
            .then(jsonResult => {
                setReposInfo(jsonResult);
                console.log(jsonResult)
            }))
    }, []);

    return (
        <div className="gitWidgetContainer">
            <div className="gitWidgetLogoContainer">
                <div>
                    <img src={githubLogo} alt="git logo" height={50} width={50}></img>
                </div>
                <a className="gitText" href="https://github.com/SlazZzor" target="_blank" rel="noopener noreferrer"> SlazZzor </a>
                    <img src={isProfileLoaded ? profileInfo["avatar_url"] : blankPfp} alt="git pfp" className="gitImg" height={50} width={50}></img>    
                </div>
            {isProfileLoaded ? renderRepos() : <Skeleton count={5} style={{display: "flex", flex: 2}}/>}
        </div> 
    );
};


export default GithubContainer;
