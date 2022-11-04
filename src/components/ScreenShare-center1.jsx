import React from "react";
import screenview from "../assets/images/screenview.png";
const ScreenShare1 = () => {
    return(

        <div  style={{display:"flex"  , width:"70%" , height:"100%" , position:"relative" , right:"20px" , justifyContent:"space-between" }}>
     
        <div style={{ display: "flex", flexDirection: "column" }}  >
                        <img alt="screen" src={screenview} />
                        <span className="h2" style={{ letterSpacing: "-0.05em", position: "relative", top: "6px", left: "100px" }}>Ekran 1</span>

                    </div>
                    
                    <div style={{ display: "flex", flexDirection: "column" }} >
                        <img alt="screen" src={screenview} />
                        <span className="h2" style={{ letterSpacing: "-0.05em", position: "relative", top: "6px", left: "100px" }}>Ekran 2</span>
                    </div>
       
        </div>
    )
}
export default ScreenShare1;