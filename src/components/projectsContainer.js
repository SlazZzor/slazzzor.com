import '../App.css';
import 'react-loading-skeleton/dist/skeleton.css'


function ProjectsContainer() {
    return (
        <div className="widgetContainer" id="projectsContainer">
            <div className="logoContainer">
                <svg fill="#000000" height="50px" width="50px" version="1.1" id="Capa_1" viewBox="0 0 511 511" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M471.5,167c21.78,0,39.5-17.72,39.5-39.5v-64c0-21.78-17.72-39.5-39.5-39.5h-432C17.72,24,0,41.72,0,63.5v64 C0,149.28,17.72,167,39.5,167H248v17H39.5C17.72,184,0,201.72,0,223.5v64C0,309.28,17.72,327,39.5,327H248v17H39.5 C17.72,344,0,361.72,0,383.5v64C0,469.28,17.72,487,39.5,487h432c21.78,0,39.5-17.72,39.5-39.5v-64c0-21.78-17.72-39.5-39.5-39.5 H263v-17h208.5c21.78,0,39.5-17.72,39.5-39.5v-64c0-21.78-17.72-39.5-39.5-39.5H263v-17H471.5z M496,383.5v64 c0,13.51-10.991,24.5-24.5,24.5h-432C25.991,472,15,461.01,15,447.5v-64c0-13.51,10.991-24.5,24.5-24.5h432 C485.009,359,496,369.99,496,383.5z M496,223.5v64c0,13.51-10.991,24.5-24.5,24.5h-432C25.991,312,15,301.01,15,287.5v-64 c0-13.51,10.991-24.5,24.5-24.5h432C485.009,199,496,209.99,496,223.5z M15,127.5v-64C15,49.99,25.991,39,39.5,39h432 c13.509,0,24.5,10.99,24.5,24.5v64c0,13.51-10.991,24.5-24.5,24.5h-432C25.991,152,15,141.01,15,127.5z"></path> <path d="M71.5,64C54.131,64,40,78.131,40,95.5S54.131,127,71.5,127S103,112.869,103,95.5S88.869,64,71.5,64z M71.5,112 c-9.098,0-16.5-7.402-16.5-16.5S62.402,79,71.5,79S88,86.402,88,95.5S80.598,112,71.5,112z"></path> <path d="M143.5,72C130.542,72,120,82.542,120,95.5s10.542,23.5,23.5,23.5S167,108.458,167,95.5S156.458,72,143.5,72z M143.5,104 c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5S148.187,104,143.5,104z"></path> <path d="M71.5,224C54.131,224,40,238.131,40,255.5S54.131,287,71.5,287s31.5-14.131,31.5-31.5S88.869,224,71.5,224z M71.5,272 c-9.098,0-16.5-7.402-16.5-16.5S62.402,239,71.5,239S88,246.402,88,255.5S80.598,272,71.5,272z"></path> <path d="M143.5,232c-12.958,0-23.5,10.542-23.5,23.5s10.542,23.5,23.5,23.5s23.5-10.542,23.5-23.5S156.458,232,143.5,232z M143.5,264c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5S148.187,264,143.5,264z"></path> <path d="M455.5,264h-264c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h264c4.142,0,7.5-3.357,7.5-7.5S459.642,264,455.5,264z"></path> <path d="M184,239.5c0,4.143,3.358,7.5,7.5,7.5h264c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-264 C187.358,232,184,235.357,184,239.5z"></path> <path d="M463,111.5c0-4.143-3.358-7.5-7.5-7.5h-264c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h264 C459.642,119,463,115.643,463,111.5z"></path> <path d="M191.5,87h264c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-264c-4.142,0-7.5,3.357-7.5,7.5S187.358,87,191.5,87z"></path> <path d="M71.5,384C54.131,384,40,398.131,40,415.5S54.131,447,71.5,447s31.5-14.131,31.5-31.5S88.869,384,71.5,384z M71.5,432 c-9.098,0-16.5-7.402-16.5-16.5S62.402,399,71.5,399S88,406.402,88,415.5S80.598,432,71.5,432z"></path> <path d="M143.5,392c-12.958,0-23.5,10.542-23.5,23.5s10.542,23.5,23.5,23.5s23.5-10.542,23.5-23.5S156.458,392,143.5,392z M143.5,424c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5S148.187,424,143.5,424z"></path> <path d="M455.5,424h-264c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h264c4.142,0,7.5-3.357,7.5-7.5S459.642,424,455.5,424z"></path> <path d="M184,399.5c0,4.143,3.358,7.5,7.5,7.5h264c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-264 C187.358,392,184,395.357,184,399.5z"></path> </g> </g></svg>
                <a className="boldText">My projects</a>
                <svg fill="#000000" height="50" width="50px" version="1.1" id="Capa_1" viewBox="0 0 463 463" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M175.5,0h-136C17.72,0,0,17.72,0,39.5v136C0,197.28,17.72,215,39.5,215h136c21.78,0,39.5-17.72,39.5-39.5v-136 C215,17.72,197.28,0,175.5,0z M200,175.5c0,13.509-10.991,24.5-24.5,24.5h-136C25.991,200,15,189.009,15,175.5v-136 C15,25.991,25.991,15,39.5,15h136c13.509,0,24.5,10.991,24.5,24.5V175.5z"></path> <path d="M423.5,0h-136C265.72,0,248,17.72,248,39.5v136c0,21.78,17.72,39.5,39.5,39.5h136c21.78,0,39.5-17.72,39.5-39.5v-136 C463,17.72,445.28,0,423.5,0z M448,175.5c0,13.509-10.991,24.5-24.5,24.5h-136c-13.509,0-24.5-10.991-24.5-24.5v-136 c0-13.509,10.991-24.5,24.5-24.5h136c13.509,0,24.5,10.991,24.5,24.5V175.5z"></path> <path d="M175.5,248h-136C17.72,248,0,265.72,0,287.5v136C0,445.28,17.72,463,39.5,463h136c21.78,0,39.5-17.72,39.5-39.5v-136 C215,265.72,197.28,248,175.5,248z M200,423.5c0,13.509-10.991,24.5-24.5,24.5h-136C25.991,448,15,437.009,15,423.5v-136 c0-13.509,10.991-24.5,24.5-24.5h136c13.509,0,24.5,10.991,24.5,24.5V423.5z"></path> <path d="M423.5,248h-136c-21.78,0-39.5,17.72-39.5,39.5v136c0,21.78,17.72,39.5,39.5,39.5h136c21.78,0,39.5-17.72,39.5-39.5v-136 C463,265.72,445.28,248,423.5,248z M448,423.5c0,13.509-10.991,24.5-24.5,24.5h-136c-13.509,0-24.5-10.991-24.5-24.5v-136 c0-13.509,10.991-24.5,24.5-24.5h136c13.509,0,24.5,10.991,24.5,24.5V423.5z"></path> </g> </g></svg>            </div>
            <div className='profilesContainer' style={{height: "100%", justifyContent: "center"}}>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50px" height="50px" viewBox="0 0 790.000000 825.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,825.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M545 8218 c-7 -18 -132 -348 -277 -733 l-263 -700 -3 -2849 c-1 -2108 1 -2852 9 -2862 10 -12 177 -14 995 -14 l984 0 0 -530 0 -530 548 0 547 0 530 530 530 530 810 0 810 0 1068 1068 1067 1067 0 2528 0 2527 -3671 0 -3670 0 -14 -32z m6645 -2671 l0 -1982 -627 -627 -628 -627 -2332 1 -2333 1 0 2608 0 2609 2960 0 2960 0 0 -1983z"/>
                        <path d="M2120 5728 c-124 -148 -231 -277 -237 -286 -11 -16 14 -41 232 -222 135 -113 245 -207 245 -210 0 -3 -110 -97 -245 -209 -216 -178 -244 -205 -233 -219 7 -9 115 -139 239 -288 l226 -273 289 240 c159 132 296 244 304 249 11 6 90 -55 305 -235 218 -183 293 -241 301 -232 35 38 464 555 464 560 0 3 -106 94 -235 202 -168 141 -233 201 -226 209 6 7 114 97 240 201 142 117 228 195 225 204 -2 7 -109 138 -236 292 -230 275 -233 278 -253 260 -58 -52 -558 -463 -568 -467 -7 -2 -144 106 -305 240 -160 135 -295 247 -299 249 -5 2 -109 -117 -233 -265z"/>
                        <path d="M5869 5751 c-213 -179 -300 -246 -310 -241 -8 5 -142 114 -298 244 l-284 235 -226 -273 c-124 -149 -232 -279 -239 -288 -11 -14 17 -41 225 -213 131 -109 238 -201 238 -205 0 -3 -101 -91 -225 -195 -124 -103 -231 -193 -238 -200 -11 -10 33 -68 226 -298 l240 -286 292 245 c161 134 295 244 299 244 5 0 297 -239 562 -461 l45 -38 232 279 c128 153 234 284 237 291 2 9 -91 92 -244 218 l-248 205 244 203 c133 112 243 207 243 210 0 4 -427 520 -464 560 -8 9 -84 -50 -307 -236z"/>
                    </g>
                </svg>
                <a className="boldText" href="https://multitwtch.pro/" target="_blank" rel="noopener noreferrer"> MultiTwitch </a>

                </div>
            </div>
        </div> 
    );
};


export default ProjectsContainer;