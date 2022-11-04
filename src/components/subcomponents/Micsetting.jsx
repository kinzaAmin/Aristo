import React, { useState } from "react";
import "../../assets/style/micsetting.scss";
import closebtn from "../../assets/images/modalclosebtn.png";
import line from "../../assets/images/active.png";
import dropdown from "../../assets/images/dropdown.png";
import dashes from "../../assets/images/dashes.png";

// import volumecontroller from "../../assets/images/volumecontroller.png";
// import volumelines from "../../assets/images/volumelines.png";
import { Slider } from "@mui/material";
const Micsetting = (props) => {
const [buttonclicked , setbuttonclick] = useState("Testi Başlat")
const [isclickedimg , setclikedimg] = useState(dashes)
const handleclick = () => {
    setbuttonclick ("Testi Durdur")
}

    const mark = [

        {
            value: 0, label: "start"

        },

        {

            value: 100, label: "middle"
        },



        {

            value: 200, label: "full volume"
        }

    ]


   
    return (

        <div className="micsetting-container">

            <div className="micsetting-div1 ">

                <div  >
                    <img alt="closebtn" src={closebtn} style={{ cursor: "pointer" }} onClick={props.onHide} />
                </div>

                <div className="div1-content camera">
                    <span style={{ width: "100%", height: "12%", position: "relative", left: "15%" }}>Ses Giriş Çıkışını Test Et</span>
                    <img src={line} style={{ width: "100%", height: "10%" }} />
                </div>


            </div>

            <div className="micsetting-div2">

                <div className="d-flex flex-row" style={{ width: "100%", height: "100%", justifyContent: "space-between" }}>


                    <div className="div2-leftside">

                        <span className="title" style={{ letterSpacing: "2px" }}>Giriş Aygıtı</span>

                        <div className="dropdown d-flex flex-row " style={{textColor:"#0E48F6" }}>

                            <select   className="subtitle" style={{ width: "100%", outline: "none" , textColor:"#0E48F6"  }}>
                                <option   className="subtitle">TuneTune HD Mic</option>
                                <option   className="subtitle">Ultra HD Sony Mic</option>
                                <option    className="subtitle">Ultra HD Samsung Mic</option>
                               
                            </select>




                            {/* 
                            <div className="subtitle" style={{ width: "70%", height: "20%", position: "relative", top: "35%", left: "8%" , letterSpacing:"1px"}}>
                                TuneTune HD Music
                            </div>

                            <div style={{ width: "8%", height: "40%",  position: "relative", left: "15%", top: "21%" }}>
                                <img alt="dropdown" src={dropdown} style={{ width: "83%", height: "80%" , cursor:"pointer"}} onClick={ () => setHdmusic=(!isHdmusic)}/>
                            </div> */}


                        </div>


                        <div className="volume-leftside ">
                            <span className="title" style={{ letterSpacing: "2px" }}>Giriş Sesi</span>
                            <div className="d-flex flex-row" style={{ width: "100%", height: "30%", position: "relative" }}>

                                <Slider color="primary" defaultValue={50} max={200} step={30} valueLabelDisplay="auto" />


                            </div>
                        </div>



                    </div>



                    <div className="div2-rightside">

                        <span className="title" style={{ letterSpacing: "2px" }}>Çıkış Aygıtı</span>

                        <div className="dropdownrightside d-flex flex-row subtitle">





                        <select   className="subtitle" style={{ width: "100%", outline: "none" , textColor:"#0E48F6"  }}>
                                <option   className="subtitle" > Default Hoparlör</option>
                                <option   className="subtitle">HDMI1_Screen</option>
                                <option    className="subtitle">5+1 System</option>
                               
                            </select>
                            {/* <div className="subtitle" style={{ width: "70%", height: "20%", position: "relative", top: "35%", left: "8%", letterSpacing: "1px" }}>
                                Default Hoparlör
                            </div>

                            <div style={{ width: "8%", height: "40%", position: "relative", left: "15%", top: "21%" }}>
                                <img alt="dropdown" src={dropdown} style={{ width: "83%", height: "80%", cursor: "pointer" }} />
                            </div> */}
                        </div>


                        <div className="volume-rightside">
                            <span className="title" style={{ letterSpacing: "2px" }}>Çıkış Sesi</span>
                            <div className="d-flex flex-row" style={{ width: "100%", height: "30%", position: "relative" }}>

                                <Slider color="primary" defaultValue={50} max={200} step={30} valueLabelDisplay="auto" />


                            </div>
                        </div>



                    </div>

                </div>



                <div className="div2-lowerpart">

                    <span className="title" style={{ letterSpacing: "2px" }}>Mikrofon Testi</span>

                    <div className="d-flex flex-row" style={{ width: "100%", position: "relative", top: "10%" }}>
                        <div className=" button-text" style={{ width: "18%", height: "100%", backgroundColor: "#0E48F6", padding: "1% 1% 1% 1%", borderRadius: "7px", paddingLeft: "5%", cursor: "pointer" }}   onClick={handleclick }> {buttonclicked} </div>
                        
                        <img alt="dashes" src={dashes} style={{ width: "79%", height: "60%", position: "relative", left: "1%", top: "22%", letterSpacing: "2px" }} /> 
                         

                    </div>


    
                    <p style={{ position: "relative", marginTop: "3%", width: "90%", letterSpacing: "2.5px" }} className="subtitle1">Mikrofonunda bir sorun yaşıyorsan buradan test edebilirsin. Testi başlattıktan sonra birşeyler söyle biz de sana sesini dinletelim.</p>

                </div>







            </div>



        </div>
    )
}

export default Micsetting;