import React from "react";
import "../assets/style/mainview.scss";
import curlyhair from "../assets/images/curlyhair.png";
import mic from "../assets/images/mic.png";
import cam from "../assets/images/cam.png";
const Imgpart = () => {
    return (
        <>
            <img alt="person" src={curlyhair} style={{ borderRadius: "8px", zIndex: "-1" }} >

            </img>
            <div style={{ display: "flex", zIndex: "2", marginTop: "-90px", marginLeft: "320px", position: "relative" }}>
                <img alt="video" src={mic} />
                <img alt="audio" src={cam} />
            </div>
        </>
    )
}
export default Imgpart;