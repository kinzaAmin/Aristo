import React from "react";
import close from "../assets/images/CLOSE.png"
import "../assets/style/Screen2.scss";
import Lastpart from "./subcomponents/Screen2-last";
import Centerpart from "./subcomponents/S2center";
import Closemodal from "./Closemodal";
//import People from "./subcomponents/Peoples";
import { useState } from "react";
const Screen = () => {
    const [closebtn, setclosebtn] = useState()
    const handleShow = () => {
        setclosebtn(true);
    }
    const handleClose = () => {
        setclosebtn(false)
    }
    return (

        <div className="screen2-container" style={{display:"flex" , flexDirection:"row" }}>
            <div >
                <img alt="cross-btn" src={close} className="s2-crossicon" style={{ cursor: "pointer" }} onClick={() => setclosebtn(!closebtn)} />
            </div>
            <div className="d-flex flex-column">
                <div className="s2-center">
                    <Centerpart />
                </div>
                <div className="screen2-lastportion">
                    <Lastpart />
                </div>

                

            </div>

            
            {closebtn && <Closemodal onShow={handleShow} onHide={handleClose} />}
        </div>

    )
}
export default Screen;