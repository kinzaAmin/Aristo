import React from "react";
import man from "../../assets/images/man.png";
const S3upperLeft =() => {
    return(
        <>
        <span className="span1 h1" >Örnek Eğitim 01</span>
                        <div style={{ display: "flex", flexDirection: "row", width: "60%", height: "10%", alignItems: "center", justifyContent: "space-between" }} >
                            <div ><img alt="man's picture" src={man} style={{ borderRadius: "4px", marginTop: "10px" }} /></div>
                            <span className="span2 h2 " style={{ paddingTop: "10%", paddingRight: "12%" }}>Brooklyn Williamson <br />Eğitmen</span>
                        </div>
        </>
    )
}
export default S3upperLeft;