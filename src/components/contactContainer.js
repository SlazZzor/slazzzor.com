import '../App.css';
import 'react-loading-skeleton/dist/skeleton.css'


function ContactContainer() {
    return (
        <div className="widgetContainer" id="contactContainer">
            <div className="logoContainer">
                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier"></g><g></g><g> <path d="M20.7639 12H10.0556M3 8.00003H5.5M4 12H5.5M4.5 16H5.5M9.96153 12.4896L9.07002 15.4486C8.73252 16.5688 8.56376 17.1289 8.70734 17.4633C8.83199 17.7537 9.08656 17.9681 9.39391 18.0415C9.74792 18.1261 10.2711 17.8645 11.3175 17.3413L19.1378 13.4311C20.059 12.9705 20.5197 12.7402 20.6675 12.4285C20.7961 12.1573 20.7961 11.8427 20.6675 11.5715C20.5197 11.2598 20.059 11.0295 19.1378 10.5689L11.3068 6.65342C10.2633 6.13168 9.74156 5.87081 9.38789 5.95502C9.0808 6.02815 8.82627 6.24198 8.70128 6.53184C8.55731 6.86569 8.72427 7.42461 9.05819 8.54246L9.96261 11.5701C10.0137 11.7411 10.0392 11.8266 10.0493 11.9137C10.0583 11.991 10.0582 12.069 10.049 12.1463C10.0387 12.2334 10.013 12.3188 9.96153 12.4896Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                <a className="boldText">Contact me</a>
                <svg viewBox="0 0 512 512" width="50px" height="50px" fill="#000000"><g></g><g></g><g> <circle cx="256" cy="256" r="256"></circle> <g> <path style={{fill: "#FFFFFF"}} d="M384.64,346.48H127.36c-12.88,0-23.36-10.56-23.36-23.36V159.36c0-12.88,10.56-23.36,23.36-23.36 h257.2c12.88,0,23.36,10.56,23.36,23.36v163.68C408,335.92,397.44,346.48,384.64,346.48z"></path> <polygon style={{fill: "#FFFFFF"}} points="337.84,416.64 337.84,323.04 220.96,323.04 "></polygon> </g> <rect x="244.32" y="206.16" width="23.36" height="23.36"></rect> <rect x="197.52" y="206.16" width="23.36" height="23.36"></rect> <rect x="150.8" y="206.16" width="23.36" height="23.36"></rect> <rect x="291.04" y="206.16" width="23.36" height="23.36"></rect> <rect x="337.84" y="206.16" width="23.36" height="23.36"></rect> <rect x="244.32" y="252.96" width="23.36" height="23.36"></rect> <rect x="291.04" y="252.96" width="23.36" height="23.36"></rect> <rect x="337.84" y="252.96" width="23.36" height="23.36"></rect> </g></svg>
            </div>
            <div className='profilesContainer' style={{height: "100%", justifyContent: "center"}}>
                <div id="gap">
                    <svg id="Livello_1" data-name="Livello 1" viewBox="0 0 240 240" height={40}><defs><linearGradient id="linear-gradient" x1="120" y1="240" x2="120" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d93d2"/><stop offset="1" stop-color="#38b0e3"/></linearGradient></defs><title>Telegram_logo</title><circle cx="120" cy="120" r="120" fill="url(#linear-gradient)"/>
                        <path d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z" fill="#c8daea"/><path d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763" fill="#a9c6d8"/><path d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z" fill="#fff"/> 
                    </svg>
                    <a className="boldText" href="https://t.me/SlazZzor" target="_blank" rel="noopener noreferrer"> @SlazZzor </a>
                </div>
                <div id="gap">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                    </svg>
                    <div className="boldText"> slazzzor@gmail.com </div>
                </div>
                <div id="gap">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
                <div className="boldText" href="https://www.linkedin.com/in/slavik-rozputnii-221a3b261/" target="_blank" rel="noopener noreferrer"> Slavik Rozputnii </div>
                </div>
            </div>
        </div> 
    );
};


export default ContactContainer;
