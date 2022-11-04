import React from "react";
import clap from "../../assets/images/clap.png";
import like from "../../assets/images/like.png";
import handraise from "../../assets/images/handraise.png";
import laugh from "../../assets/images/laugh.png";
import wow from "../../assets/images/wow.png";
import celebrate from "../../assets/images/celebrate.png";
//import { useState } from "react";
//import man from "../../assets/images/man.png";
const Emoji = () => {



    return (

        <div className="emoji-container-main  d-flex flex-column" style={{ width: "18%", height: "18%", zIndex: "3", backgroundColor: "#1B1B1B", position: "absolute", left: "50%", bottom: "14%", borderRadius: "10px" }}>

            <div className="emoji-picker d-flex flex-row  justify-content-between" style={{ width: "80%", height: "30%", justifyContent: "space-between", position: "relative", left: "10%", top: "10%" }}  >


                <div style={{ width: "10%", height: "10%" }}>

                    <div style={{ width: "100%", height: "100%", cursor: "pointer" }}>
                        <img alt="clap" src={clap} />
                    </div>

                </div>


                <div style={{ width: "10%", height: "10%" }}>

                    <div style={{ width: "100%", height: "100%", cursor: "pointer" }}>
                        <img alt="clap" src={like} />
                    </div>

                </div>

                <div style={{ width: "10%", height: "10%" }}>

                    <div style={{ width: "100%", height: "100%", cursor: "pointer" }}>
                        <img alt="clap" src={handraise} />
                    </div>

                </div>

                <div style={{ width: "10%", height: "10%" }}>

                    <div style={{ width: "100%", height: "100%", cursor: "pointer" }}>
                        <img alt="clap" src={laugh} />
                    </div>

                </div>

                <div style={{ width: "10%", height: "10%" }}>

                    <div style={{ width: "100%", height: "100%", cursor: "pointer" }}>
                        <img alt="clap" src={wow} />
                    </div>

                </div>

                <div style={{ width: "10%", height: "10%" }}>

                    <div style={{ width: "100%", height: "100%", cursor: "pointer" }}>
                        <img alt="clap" src={celebrate} />
                    </div>

                </div>

                {/* <div style={{ width: "10%", height: "10%"  }}>
                      
                    <div style={{width:"100%" , height:"100%"}}>
                        <img alt="clap" src={ man} />
                    </div>
                              
                </div> */}



            </div>



            <div style={{ width: "80%", height: "40%", marginTop: "7%", backgroundColor: "#2F2F2F", marginLeft: "10%", borderRadius: "7.5px" }}  >

                <div className="d-flex flex-row" style={{ width: "70%", height: "50%",  justifyContent: "space-between" , marginLeft:"18%" , marginTop:"6%"}}>

                    <div style={{ width: "10%", height: "10%" , paddingLeft:"10%" }}>

                        <div style={{ width: "100%", height: "100%" }}>
                            <img alt="clap" src={handraise} />
                        </div>

                    </div>


                    <div  style={{ width: "80%", height: "10%"  , paddingTop:"2%" , paddingLeft:"6%"}} >
                    <div style={{ width: "100%", height: "100%"  }}>
                            <span className="screenmodal1">El Kaldır</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Emoji;