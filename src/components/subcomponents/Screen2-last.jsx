import React, { useState } from "react";
import mic1 from "../../assets/images/mic1.png";
import cam1 from "../../assets/images/cam1.png";
import vector from "../../assets/images/vector.png";
import subtract from "../../assets/images/Subtract.png";
import emoji from "../../assets/images/emoji.png";
import people from "../../assets/images/people.png";
import chat from "../../assets/images/chat.png";
import ballons from "../../assets/images/ballons.png";
import fullscreen from "../../assets/images/fullscreen.png";
import Micmodal from "./Micmodal";
import Cammodal from "./Cammodal";
//import BaloonModal from "./BallonModal";
import Balloonmodal from "../Balloonmodal";
import ScreenShare from "../../components/subcomponents/ScreeenModal";
import Chat from "./Chat";
import People from "./Peoples";
import Emoji from "./Emoji";
import Screenswitch from "./ScreenSwitch";
//import Fullscreen from "./Fullscreen";
//import S3upperLeft from "./Screen3Uppercontent";
import "../../assets/style/Screen2.scss";

const Lastpart = (props) => {
   
    const [isScreenShare, setScreenShare] = useState(false);
    const [ismodal, setmodal] = useState(false);
    const [ispeople, setpeople] = useState(false);
    const [ischat, setchat] = useState(false);
    const [isEmoji, setEmoji] = useState(false);
    const [ismicmodal, setmicmodal] = useState(false);
    const [iscammodal, setcammodal] = useState(false);
    const [isswitch, setswitch] = useState(false)
//onst[isFullscreen , setFullscreen] = useState(false)


//const screensize = document.getElementById("fulscren")

    const show = () => {
        setScreenShare(true);
    }

    const close = () => {
        setScreenShare(false);
    }
    const Display = () => {
        setmodal(true)
    }
    const Hide = () => {
        setmodal(false)
    }
    const showw = () => {
        setpeople(true)
    }

    const hidee = () => {
        setpeople(false)
    }

    const display = () => {
        setchat(true)
    }

    const hiide = () => {
        setchat(false)
    }

    const cloose = () => {
        setmicmodal(false)
    }
    const closecammodal = () => {
        setcammodal(false)
    }





    return (
        <div style={{ width: "100%", height: "100%", display: "flex" }}>

            <div className="mic-cam">
                <div style={{ width: "14%", height: "70px", display: "flex", flexDirection: "row", justifyContent: "space-between", position: "relative", left: "5%" }}>

                    <div style={{ width: "40%", height: "85%", borderRadius: "50%", backgroundColor: "#1B1B1B" }} >
                        <div style={{ position: "relative", left: "55%", bottom: "5%" }}>
                            <img alt="mic-vector" src={vector} style={{ cursor: "pointer" }} onClick={() => setmicmodal(!ismicmodal)} />
                        </div>

                        <div style={{ width: "100%", height: "100%", position: "relative", bottom: "16%", left: "37%" }}>
                            <img alt="mic" src={mic1} style={{ cursor: "pointer" }} />
                        </div>

                    </div>

                    <div style={{ width: "40%", height: "85%", borderRadius: "50%", backgroundColor: "#1B1B1B" }} >
                        <div style={{ position: "relative", left: "55%", bottom: "5%" }}>
                            <img alt="mic-vector" src={vector} style={{ cursor: "pointer" }} onClick={() => setcammodal(!iscammodal)} />
                        </div>

                        <div style={{ width: "100%", height: "100%", position: "relative", bottom: "16%", left: "32%" }}>
                            <img alt="mic" src={cam1} style={{ cursor: "pointer" }} />
                        </div>

                    </div>

                </div>




            </div>
            <div className="mid-section" style={{ display: "flex", position: "relative", top: "2px", bottom: "9px", right: "20%", justifyContent: "space-between", width: "40%", marginBottom: "3px" }}>

                <div style={{ width: "100%", height: "100%", borderRadius: "50%" }}>

                    <div style={{ width: "40%", height: "90%", borderRadius: "50%", backgroundColor: "#1B1B1B" }} >
                        <div style={{ position: "relative", left: "67%", bottom: "12%" }}>
                            <img alt="mic-vector" src={vector} style={{ cursor: "pointer" }} onClick={() => setswitch(!isswitch)} />
                        </div>

                        <div style={{ width: "100%", height: "100%", position: "relative", bottom: "16%", left: "27%" }}>
                            <img alt="mic" src={subtract} style={{ cursor: "pointer" }} onClick={() => setScreenShare(!isScreenShare)} />
                        </div>

                    </div>

                    {/* <img alt="screen" src={screen} style={{ cursor: "pointer" }} onClick={() => setScreenShare(!isScreenShare)} /> */}

                </div>

                <div style={{ width: "100%", height: "100%", borderRadius: "50%" }}>

                    <img alt="people" src={people} style={{ cursor: "pointer" }} onClick={() => { setpeople(!ispeople); props.toggleChatOrUser() }} />

                </div>

                <div style={{ width: "100%", height: "100%", borderRadius: "50%" }}>

                    <img alt="emoji" src={emoji} style={{ cursor: "pointer" }} onClick={() => setEmoji(!isEmoji)} />

                </div>

                <div style={{ width: "100%", height: "100%", borderRadius: "50%" }}>
                    <img alt="chat" src={chat} style={{ cursor: "pointer" }} onClick={() => { setchat(!ischat); props.toggleChatOrUser() }} />
                </div>

                <div style={{ width: "100%", height: "100%", borderRadius: "50%" }}>
                    <img alt="ballon" src={ballons} style={{ cursor: "pointer" }} onClick={() => setmodal(!ismodal)} />

                </div>


            </div>
            <div style={{ display: "flex", width: "88px", marginRight: "4px", position: "relative", top: "2px", left: "2px", right: "2px", marginBottom: "5px", paddingLeft: "4px" }}>

                <div style={{ width: "100%", height: "100%", borderRadius: "50%" }}>

                    <img alt="fullscreen" src={fullscreen} style={{ cursor: "pointer" }} onClick={props.screensize}  />

                </div>
            </div>

            {isScreenShare && <ScreenShare onShow={show} onHide={close} />}
            {ismodal && <Balloonmodal onDispay={Display} onHide={Hide} />}
            {ispeople && <People onShow={showw} onHide={hidee} />}
            {ischat && <Chat onShow={display} onHide={hiide} />}
            {isEmoji && <Emoji />}
            {isswitch && <Screenswitch />}
            {ismicmodal && <Micmodal text1="MİKROFON SEÇ" text2="SES ÇIKIŞI SEÇ" text3="Mikrofon ve ses çıkışını test et" text4="Görüşmeye katılırken kameramı kapat" onHide={cloose} />}
            {iscammodal && <Cammodal text1="KAMERA SEÇ" text2="ARKAPLAN AYARLARI" text3="ARKAPLAN AYARLARI" text4="Görüşmeye katılırken kameramı kapat" onHide={closecammodal} />}
            {/* {isFullscreen&& <Fullscreen/>} */}
        </div>
    )
}

export default Lastpart;