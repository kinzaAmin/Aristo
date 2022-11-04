import React from "react";
import aqua2 from "../../assets/images/aqua2.png";
import grey from "../../assets/images/grey.png";
import pink2 from "../../assets/images/pink2.png";
import yellow2 from "../../assets/images/yellow2.png";
import pinkshadow from "../../assets/images/pinkshadow.png"
const Centerpart = () => {
    return (
        <>
            <div style={{ dispay: "flex", flexDirection: "column", width: "85px", height: "30px", position: "relative", left: "80px" }}>
                <div style={{ display: "flex" }}>
                    <div>
                        <img alt="pic" src={grey} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex" }} >
                            <img alt="pic" src={yellow2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                            <img alt="pic" src={pink2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                            <img alt="pic" src={aqua2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />


                        </div>

                        <div style={{ display: "flex" }}>

                            <img alt="pic" src={pinkshadow} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                            <img alt="pic" src={aqua2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                            <img alt="pic" src={yellow2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />


                        </div>

                    </div>

                </div>

                <div style={{ display: "flex" , flexDirection:"column" }}>

                    <div className="set-image" style={{ display: "flex" }}>
                        <img alt="pic" src={pink2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                        <img alt="pic" src={yellow2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                        <img alt="pic" src={pink2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                        <img alt="pic" src={aqua2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                        <img alt="pic" src={aqua2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                    </div> 

                    <div style={{ display: "flex" }}>
                        <img alt="pic" src={pink2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                        <img alt="pic" src={yellow2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                        <img alt="pic" src={pink2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                        <img alt="pic" src={aqua2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                        <img alt="pic" src={aqua2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />

                    </div>
                    <div style={{ display: "flex" }}>
                        <img alt="pic" src={pink2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                        <img alt="pic" src={yellow2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                        <img alt="pic" src={pink2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                        <img alt="pic" src={aqua2} style={{ paddingLeft: "5px", paddingTop: "10px" }} />
                    </div>
                </div>

            </div>

        </>
    )
}
export default Centerpart;