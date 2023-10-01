import { useState, useEffect } from 'react';
import "../../App.css";
import linkedInLogo from "../logos/linkedInLogo.png";
import blankPfp from "../logos/blankPfp.png"


function LinkedInContainer(){
    const [profileInfo, setProfileInfo] = useState({});
    const [profilePhoto, setProfilePhoto] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/getProfileInfo")
            .then(result => result.json()
            .then((jsonInfo) => setProfileInfo(jsonInfo)))
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/getProfilePhoto")
            .then(result => result.blob()
            .then(photo => setProfilePhoto(URL.createObjectURL(photo))))
    }, [profileInfo])




    return (
        <div className="linkedInWidgetContainer"> 
            <div className="gitWidgetLogoContainer">
                <img src={linkedInLogo} height={50} alt="LinkedIn logo"></img>
                <a href="https://www.linkedin.com/in/slavik-rozputnii-221a3b261/" target="_blank" rel="noopener noreferrer" className="gitText">{profileInfo["profileName"]}</a>
                <img className="gitImg" src={Object.keys(profileInfo).length > 0 ? profilePhoto : blankPfp} height={50} width={50} alt="LinkedIn pfp"></img>
            </div>
        </div>  
    )
}


export default LinkedInContainer