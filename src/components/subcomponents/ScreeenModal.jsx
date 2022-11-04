import React from "react";
import "../../assets/style/Screensharemodal.scss";
import closebtn from "../../assets/images/modalclosebtn.png"
import active from "../../assets/images/active.png";
//import Button from "react-bootstrap/Button";
import Center1 from "../ScreenShare-center1";
import Center2 from "../ScreenShare-center2";
import Center3 from "./Screenshare-center3";
import WhiteBoard from "./Whiteboard";
import { useState } from "react";
const ScreenShare = (props) => {

    const [isCenter1, setCenter1] = useState(true);
    const [isCenter2, setCenter2] = useState(false);
    const [isCenter3, setCenter3] = useState(false);
   const [isWhiteboard, setWhiteboard] = useState(false);
   const [isScreenshareModal , setScreenshareModal] = useState(true)
//   const   handleWhiteBoard = () => {
//     setWhiteboard (!isWhiteboard)
//     setScreenshareModal(false)
//   }

const handleWhiteBoard =() => {
    setWhiteboard(!isWhiteboard)
    setScreenshareModal(false)
}

    return (
        <>
       { isScreenshareModal ? <div className="scereenshare-container" onShow={props.show} >
            <div className="screenshare-center">
                <div className="screenshare-modal-upper">

                    <div>
                        <img alt="close-button" src={closebtn} onClick={props.onHide} style={{ cursor: "pointer", position: "relative", bottom: "50px" }} />

                    </div>


                    <div className="upperpart-heading">
                        <div className="d-flex flex-column">
                            <span className="screenmodal1 " style={{ cursor: "pointer" }}
                                onClick={(e) => {
                                    setCenter1(true)
                                    setCenter2(false)
                                    setCenter3(false)

                                }}
                            >Ekranlar
                            </span>
                            {isCenter1 && <img alt="" src={active} className="active-img" />}
                        </div>
                        <div className="d-flex flex-column">
                            <span className=" screenmodal1 " style={{ cursor: "pointer" }}

                                onClick={(e) => {

                                    setCenter1(false)
                                    setCenter2(true)
                                    setCenter3(false)

                                }}

                            >Pencereler</span>

                            {isCenter2 && <img alt="" src={active} className="active-img" />}

                        </div>

                        <div className="d-flex flex-column">
                            <span className="screenmodal1  " style={{ cursor: "pointer" }}
                                onClick={(e) => {

                                    setCenter1(false)
                                    setCenter2(false)
                                    setCenter3(true)

                                }}


                            >Gelişmiş</span>
                            {isCenter3 && <img alt="" src={active} className="active-img" />}

                        </div>

                    </div>

                </div>


                <div className="screen-view-part">


                    {isCenter1 && <Center1 />}
                    {isCenter2 && <Center2 />}
                    {isCenter3 && <Center3 onClick={handleWhiteBoard} />}

                </div>

                <div className="screenshare-modal-last" style={{ position: "relative", top: "80px" }}>
                    <div style={{ display: "flex" }}>
                        <input type="checkbox" style={{ width: "90px", height: "30px", border: "1px white solid", borderRadius: "50%" }} />
                        <span className="h2">Bilgisayarımın sesini paylaş</span>
                    </div>
                    <div >
                        <div style={{ backgroundColor: "#7600FF", width: "180%", height: "100%", padding: "35%", borderRadius: "10%", }} className="h2"> Paylaş</div>
                    </div>

                </div>

            </div>

           
        </div> : isWhiteboard && <WhiteBoard handleClose={()=> setWhiteboard(false)}/> }
            
            {/* {isWhiteboard && <WhiteBoard/>} */}
        </>

    )
}
export default ScreenShare;