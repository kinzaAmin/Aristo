import React, { useState } from "react";
import lapimg from "../../assets/images/lapimmg.png";
import frame from "../../assets/images/Frame.png";
import speaker from "../../assets/images/speaker.png";
import "../../assets/style/Screensharemodal.scss";
//import WhiteBoard from "./Whiteboard";

const Center3 = (props) => {
    
   //const [isWhiteboard, setWhiteboard] = useState(false);
    return (
        <>
           
                <div className="center3-container d-flex flex-column " >

                <div className="w-60 h-100 d-flex flex-row  " >


                    <div className="center3-imgcontainer"   >
                        <img alt="" src={lapimg} className="img " style={{ marginLeft: "24%", marginTop: "5%", cursor: "pointer" }} onClick = {props.onClick} />
                    </div>

                    <div className="center3-imgcontainer" style={{ marginLeft: "3%" }} >

                        <img alt="" src={frame} className="img  " style={{ marginLeft: "40%", marginTop: "6%" }} />


                    </div>

                    <div className="center3-imgcontainer " style={{ marginLeft: "3%" }}>


                        <img alt="" src={speaker} className="img" style={{ marginLeft: "40%", marginTop: "8%" }} />


                    </div>

                </div>


                <div className="d-flex flex-row  justify-content-between      pl-100  " style={{ width: "100%", paddingLeft: "60px", paddingRight: "100px" }}  >

                    <span className="screen-sharemodal-center"  >Beyaz Tahta</span>
                    <span className="screen-sharemodal-center" >İkinci Kamera</span>
                    <span className="screen-sharemodal-center">Ses</span>

                </div>

                {/* marginLeft:"20px" ,paddingLeft:"50px" */}


            </div> 

          {/* {isWhiteboard && <WhiteBoard/>} */}

        </>
    )
}
export default Center3;