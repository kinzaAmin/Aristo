import React from "react";
import "../../assets/style/cammodal.scss";

import icon1 from "../../assets/images/icon1.png";
//import swtich from "../../assets/images/swtich.png";
import hr from "../..//assets/images/hr.png";
import closebtn from "../../assets/images/modalclosebtn.png";
import Cammodal3 from "./Cammodal3";
import Micmodal2 from "./Micmodal2";
import { Switch } from "@mui/material";
import { useState } from "react";

const Cammodal = (props) => {

    const [iscam2, setcam2] = useState(false)
    const[iscam2modal2  , setcam2modal2] = useState(false)
    const [iscammodal3 , setcammodal3] = useState(false)
 const hide = () =>{
    setcam2(false)
 }

 const hiidee = ()  => {
    setcam2modal2(false)
 }

 const disable = () => {
    setcammodal3(false)
 }

//  const modalHandler = () =>{
//     setcammodal3(!iscammodal3)
//  }

    return (

        <div className="cammodal-main">
            <div className="cammodal-content d-flex flex-column"  >

                <div style={{ width: "10%", height: "10%", position: "relative", right: "40%" }}>
                    <img alt="closebtn" src={closebtn} style={{ cursor: "pointer" }} onClick={props.onHide} />
                </div>

                {/* <div style={{ width: "100%", height: "100%" , display: "flex", flexDirection: "column"}}> */}

                <div className="cammodal-div1"  >

                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-between", cursor: "pointer" }} onClick={() => setcam2(!iscam2)}  >

                        <div style={{ width: "70%", height: "100%" }}>
                            <span style={{ textDecoration: "underline", lineHeight: "-0.5em", letterSpacing: "-0.05em" }} className="micmodalspan">{props.text1}</span>
                        </div>


                        <div style={{ width: "10%", height: "  100%" }}>
                            <img src={icon1} />
                        </div>


                    </div>



                    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", top: "22%", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }} onClick={() => setcam2modal2(!iscam2modal2)} >

                        <div style={{ width: "70%", height: "100%" }}>
                            <span style={{ textDecoration: "underline", lineHeight: "-0.5em", letterSpacing: "-0.05em" }} className="micmodalspan">A{props.text2}</span>
                        </div>


                        <div style={{ width: "10%", height: "100%" }}>
                            <img src={icon1} />
                        </div>


                    </div>


                </div>



                <img alt="hr" src={hr} style={{ width: "90%", position: "relative", top: "9%" }} />




                <div className="cammodal-div2" >


                    <div style={{ width: "100%", height: "100%", position: "relative", paddingTop: "5%" }}>
                        <span className="micmodal-span2" style={{ lineHeight: "30px", letterSpacing: "2px", cursor: "pointer" }}  onClick={ () => setcammodal3(!iscammodal3)}>{props.text3}</span>

                    </div>

                </div>


                <img alt="hr" src={hr} style={{ width: "90%", position: "relative", bottom: "5%" }} />




                <div className="cammodal-div3"  >

                    <div style={{ width: "100%", height: "100%", display: "flex" }}>


                        <div style={{ width: "20%", height: "  100%", position: "relative", paddingTop: "5%" }}>

                            <Switch color="success"/>
                            {/* <img alt="" src={swtich} style={{ cursor: "pointer" }} /> */}
                        </div>


                        <div style={{ width: "70%", height: "100%", paddingTop: "3%" }}>
                            <span className="micmodal-span2" style={{ lineHeight: "20px", letterSpacing: "2px" }}>{props.text4}</span>
                        </div>


                    </div>

                </div>



            </div>


            {iscam2 && <Micmodal2 option1="KAMERA SEÇ "  option2=" Facetime HD Camera" option3=" Ultra HD Sony Camera" option4=" Ultra HD Samsung Camera" onHide={hide}/>}

            {iscam2modal2 && <Micmodal2 option1="ARKAPLAN AYARLARI "  option2="Arkaplanımı bulanıklaştır  " option3="Yeşil ekranım var " option4="Görüntümü Çevir " onHide={hiidee}  style={{position:"relative" , left:"15%"}} />}
            {iscammodal3 && <Cammodal3 onHide={disable}/>}
        </div>
    )
}

export default Cammodal;