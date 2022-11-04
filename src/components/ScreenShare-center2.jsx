import React from "react";
import screenview from "../assets/images/screenview.png";
import googleimg from "../assets/images/googlescreen.png";
import twitterimg from "../assets/images/twitterscreen.png";
import webimg from "../assets/images/webscreen.png";
import spotifyimg from "../assets/images/spotifyscreeen.png";
import figmaimg from "../assets/images/figmascreen.png";
import "../assets/style/Screensharemodal.scss";
//import googlescreen from "";
const Center2 = () => {
    return (

        <div style={{ display: "flex", flexDirection: "column"  , position:"relative"  , right:"70px"  , width:"100%"  , height:"100%"}}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="center-2">

                    <div style={{ width: "67%", height: "100%", position: "relative", right: "37px" }}>

                        <img alt="" src={googleimg}  />

                    </div>

                    <div style={{ display: "flex"   , position:"relative" , top:"8px" , position:"relative" , top:"8px"}}  className="screen-sharemodal-center">Google Chrome - Google</div>
                    
                </div>

                <div className="center-2" style={{ marginLeft: "30px" }}>

                    <div style={{ width: "67%", height: "100%", position: "relative", right: "37px" }}>

                        <img alt="" src={twitterimg} />

                    </div>

                    <div style={{ display: "flex" , position:"relative" , top:"8px" }} className="screen-sharemodal-center" >Google Chrome - Twitter</div>
                </div>

                <div className="center-2" style={{ marginLeft: "30px" }}>

                    <div style={{ width: "67%", height: "100%", position: "relative", right: "37px" }}>

                        <img alt="" src={webimg} />

                    </div>

                    <div style={{ display: "flex"  , position:"relative" , top:"8px"}} className="screen-sharemodal-center" >  Keynote - Responsive
                        Screen Project</div>
                </div>

            </div>


            <div style={{ display: "flex", flexDirection: "row", }}>
                <div className="center-2" style={{ marginTop: "40px" }}>

                    <div style={{ width: "67%", height: "100%", position: "relative", right: "6px" }}>

                        <img alt="" src={spotifyimg} />

                    </div>

                    <div style={{ display: "flex" , position:"relative" , top:"8px" }}  className="screen-sharemodal-center">
                    Spotify
                    </div>
                </div>

                <div className="center-2" style={{ marginLeft: "30px", marginTop: "40px" }}>

                    <div style={{ width: "67%", height: "100%", position: "relative", right: "6px", backgroundColor: "pinks" }}>

                        <img alt="" src={figmaimg} />

                    </div>

                    <div style={{ display: "flex" , position:"relative" , top:"8px" }}  className="screen-sharemodal-center"> Figma - Yaşam Atölyesi</div>
                </div>

                {/* <div className="center-2" style={{ marginLeft: "30px", marginTop: "40px" }}>

                    <div style={{ width: "67%", height: "100%", position: "relative", right: "37px", backgroundColor: "pinks" }}>

                        <img alt="" src={screenview} />

                    </div>

                    <div style={{ display: "flex" }} className="screen-sharemodal-center"  > Figma - Yaşam Atölyesi</div>
                </div> */}


            </div>



        </div>
    )
}
export default Center2;