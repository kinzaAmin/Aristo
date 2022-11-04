import React from "react";
//import close from "../assets/images/CLOSE.png"
import Textpart from "../components/Mainview-text";
import Imgpart from "../components/Main-img";
import Closemodal from "../components/Closemodal";
import Closebttn from "../components/subcomponents/closebtn";

import { useState } from "react";
//  import "../assets/style/mainview.css";

const Mainview = () => {

    const [ismodal, setmodal] = useState(false)
    const handleShow = () => {
        setmodal(true);
    }
    const handleClose = () => {
        setmodal(false)
    }

    return (
        <>
            <div className="main-cotainer">

                <div classname="view-content">
                    <div >
                       <Closebttn/>
                    </div>
                   
                    <div className="other-content" >
                        <div className="curly-hair">
                            <Imgpart />
                        </div>
                        <div className="text-part">
                            <Textpart />
                        </div>
                    </div>


                    </div>
                </div>

            
            {ismodal && <Closemodal onShow={handleShow} onHide={handleClose} />}
        </>
    )
}
export default Mainview;