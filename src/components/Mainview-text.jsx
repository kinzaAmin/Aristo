import React from "react";
import man from "../assets/images/man.png";
import aqua from "../assets/images/aqua.png";
import OE from "../assets/images/OE.png";
import PINK from "../assets/images/PINK-OE.png";
import yellow from "../assets/images/yellow-oe.png";
import sixteen from "../assets/images/sixteen.png";
import "../assets/style/mainview.scss";
const Textpart = () => {
    return (
        <>

            <span className="span1 h1">Örnek Eğitim 01</span>
            <div style={{ display: "flex", marginLeft: "40px" }}>
                <div ><img alt="man's picture" src={man} style={{ borderRadius: "4px", marginTop: "10px" }} /></div>
                <span className="span2 h2">Brooklyn Williamson <br />Eğitmen</span>
            </div> <br /> <br />
            <span className="span1 h1">Katılmaya Hazır Mısın?</span>

            <div className="oe-images" style={{ marginLeft: "50px", marginTop: "10px" }} >
                <img alt="IMAGE" src={aqua} />
                <img alt="IMAGE" src={OE} style={{ marginLeft: "3px" }} />
                <img alt="IMAGE" src={PINK} style={{ marginLeft: "3px" }} />
                <img alt="IMAGE" src={yellow} style={{ marginLeft: "3px" }} />
                <img alt="IMAGE" src={sixteen} style={{ marginLeft: "3px" }} />
            </div>
            <div className="button">
                Katılma Talebi Gönder
            </div>

        </>
    )
}
export default Textpart;