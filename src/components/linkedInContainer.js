import { useState, useEffect } from 'react';
import "../App.css";
import linkedInLogo from "../assets/logos/linkedInLogo.png";
import blankPfp from "../assets/logos/blankPfp.png"


function LinkedInContainer(){
    const [profileInfo, setProfileInfo] = useState({});
    const [profilePhoto, setProfilePhoto] = useState({});
    const [jobCount, setJobCount] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/getProfileInfo")
            .then(result => result.json()
            .then((jsonInfo) => setProfileInfo(jsonInfo)))
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/getProfilePhoto")
            .then(result => result.blob()
            .then(photo => {
                setProfilePhoto(URL.createObjectURL(photo))
            }))
    }, [profileInfo])


    return (
        <div className="linkedInWidgetContainer"> 
            <div className="logoContainer">
                <img src={linkedInLogo} height={50} alt="LinkedIn logo"></img>
                <a href="https://www.linkedin.com/in/slavik-rozputnii-221a3b261/" target="_blank" rel="noopener noreferrer" className="boldText">Slavik Rozputnii</a>
                <img className="roundImg" src={Object.keys(profileInfo).length > 0 ? profilePhoto : blankPfp} height={50} width={50} alt="LinkedIn pfp"></img>
            </div>
            <div className="container">
                <div>
                    {profileInfo["contacts"]}
                </div>
                <div className="boldText">
                    Experience:
                </div>
            </div>
            <div className="infoContainer">
                <div onClick={() => setJobCount((jobCount - 1) % profileInfo?.jobsInfo?.length)} style={{visibility: jobCount === 0 ? "hidden" : "visible"}}>
                    <svg fill="#000000" height="40px" width="40px" version="1.1" viewBox="0 0 330 330"><g ></g><g></g><g > <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>
                </div>
                <div className="container">
                    <div className="boldText">
                        {profileInfo?.jobsInfo?.[jobCount].jobTitle}
                    </div>
                    <div className="descriptionText">
                        {profileInfo?.jobsInfo?.[jobCount].description}
                    </div>
                    <div>
                        {profileInfo?.jobsInfo?.[jobCount].experienceSlice}
                    </div>
                </div>
                <div onClick={() => setJobCount((jobCount + 1) % profileInfo?.jobsInfo?.length)} style={{visibility: jobCount === profileInfo?.jobsInfo?.length - 1 ? "hidden" : "visible"}}>
                    <svg fill="#000000" height="40px" width="40px" version="1.1" viewBox="0 0 330 330" transform="matrix(-1, 0, 0, 1, 0, 0)"><g ></g><g></g><g > <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>  
                </div>
            </div>
        </div>  
    )
}


export default LinkedInContainer