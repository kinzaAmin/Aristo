//import { Button } from "@mui/material";
import React, { useState } from "react";
import "../../assets/style/Addquestions.scss";
import active from "../../assets/images/active.png";
import close from "../../assets/images/peopleclose.png";
import Textarea from "./Textarea";
import man from "../../assets/images/man1.png";
import like from "../../assets/images/thumb.png";
import dell from "../../assets/images/dell.png";
import tick from "../../assets/images/tickmark.png";
import { Switch } from "@mui/material";
const Addquestion = (props) => {

    const [isTextarea, setTextarea] = useState(false)
    const hide = () => {
        setTextarea(false)
        setbuttonvisible(true)
    }
    const [isbuttonvisible, setbuttonvisible] = useState(true)
    // const showButton = () => {
    //     setbuttonvisible(!isbuttonvisible)
    // }
    return (


        <div className="addquestion-container p-3 d-flex flex-column" style={{ backgroundColor: "#1B1B1B", width: "25%" }} >

            <div className=" d-flex flex-column   p-3 h-50  " style={{ backgroundColor: "#1B1B1B", width: "90%" }}>


                <div className=" d-flex flex-row   justify-content-between  position-absolute" style={{ width: "60%", height: "3%" }} >
                    <div style={{ width: "10%", height: "10%" }}>
                        <img src={close} onClick={props.onHide} style={{ cursor: "pointer" }} />
                    </div>

                    <div className="d-flex flex-column   " style={{ width: "50%", height: "100%" }}  >
                        <span className="camera position-relative" style={{ left: "15%" }}> Soru-Cevap</span>
                        <img src={active} />

                    </div>



                </div>



                <div className="d-flex flex-row  justify-content-between position-relative rounded" style={{ width: "100%", height: "10%", border: "1px solid #7600FF", top: "20%", left: "3%" }} >

                    <span className="subtitle6  position-relative " style={{ top: '12px', left: "14px" }}>Sorulara izin ver</span>
                    <Switch />
                </div>







                <div className=" d-flex flex-row justify-content-between " style={{ width: "90%", height: "5%", position: "absolute", top: "22%" }}>


                    <div className="" style={{ width: "45%", height: "100%" }} >

                        <select className="rounded subtitle" id="cars" style={{ width: "100%", height: "100%" }}>
                            <option value="volvo" className="subtitle">Tüm Sorular</option>
                            <option value="saab" className="subtitle">Yanıtlanmayanlar</option>
                            <option value="mercedes" className="subtitle">Yanıtlananlar</option>

                        </select>
                    </div>


                    <div className="" style={{ width: "45%", height: "100%" }} >
                        <select className="rounded subtitle " id="cars" style={{ width: "100%", height: "100%" }}>
                            <option value="" className="subtitle" >Önce En Eski</option>
                            <option value="" className="subtitle" >Önce En Yeni</option>
                            <option value="mercedes" className="subtitle">Popüler</option>

                        </select>
                    </div>


                </div>



                {isbuttonvisible && <div className="d-flex flex-column  position-absolute rounded  " style={{ width: "90%", height: "20%", top: "32%", border: "2px solid #0E48F6", backgroundColor: "" }}      >






                    <div className="w-100 p-3  d-flex flex-column " style={{ height: "35%", bottom: "0%" }}>





                        <div className="w-100 p-3    positio-relative " style={{ height: "10%" }}>
                            <span className="w-100 p-3 h-100  camera2"  style={{ bottom:"20px" }}>  Sorulan Soru 1</span>
                        </div>




                        <div className="d-flex flex-row w-100  h-100  position-relative  justify-content-between " style={{ top: "10%"}} >

                            <div className="   d-flex flex-row  position-relative   w-50  justify-content-between " style={{top:"20%"}}>

                                      <img src={man} style={{width:"15%" , height:"100%"}} className="rounded-circle"/>
                                {/* <div className="position-relative bg-danger" style={{ }}  >
                                    <img src={man} className="rounded-circle" style={{ width:"55%" }} />
                                </div> */}

                                <div className="d-flex flex-column position-relative   justify-content-center" style={{ width: "100%", height: "100%", alignItems: "center"  , top:"10%" , left:"12%" , bottom:"2%"}} >

                                    <span className="subtitle5" style={{ position: "relative", top: "8%", width: "100%", height: "10%" }}  > Soru Soran Kişi</span> <br />
                                    <span className="subtitle5" style={{ position: "relative", bottom: "18%", width: "100%", height: "10%" }}> 10 Mart - 11.19</span>
                                </div>


                            </div>


                            <div className="  h-100   d-flex flex-row   justify-content-between" style={{ width: "30%" }}>

                                <span className="button-text" style={{ width: "10%", height: "10%", position: "relative", top: "30%", left: "10%" }}>Beğen</span>

                                <div className=" rounded  position-relative " style={{ width: "32%", height: "30px", border: "1px solid #0E48F6", top: "20%", right: "8%" }}>

                                    <img src={like} style={{ position: "relative", left: "30%" }} />

                                </div>

                            </div>

                        </div>



                        <div className="d-flex flex-row w-100 justify-content-between position-relative  h-100"  style={{top:"100%"  , borderTop: "1px solid purple"}} >


                            <div className="  h-100   d-flex flex-row   justify-content-between position-relative " style={{ width: "20%" , top:"45%" }}>

                                <span className="button-text" style={{ width: "10%", height: "10%", position: "relative", top: "30%", left: "10%" }}> Sil </span>

                                <div className=" rounded  position-relative " style={{ width: "52%", height: "100%", border: "1px solid #0E48F6", top: "20%", right: "8%" }}>

                                    <img src={dell} style={{ position: "relative", left: "36%" , width:"26%" , bottom:"5%" }} />

                                </div>

                            </div>





                            <div className="  h-100   d-flex flex-row  position-relative  justify-content-between" style={{ width: "30%" , top:"45%"  }}>

                                <span className="button-text" style={{ width: "10%", height: "10%", position: "relative", top: "30%", left: "10%" }}>Cevaplandı </span>

                                <div className=" rounded  position-relative " style={{ width: "32%", height: "95%", border: "1px solid #0E48F6", top: "20%", right: "8%" }}>

                                    <img src={tick} style={{ position: "relative", left: "30%", width:"35%"}} />

                                </div>

                            </div>


                        </div>



                    </div>

                    <div className="w-100 p-3  h-25 d-inline-block position-relative " style={{ left: "35%", top: "90%" }} >

                        <button type="button" class="btn btn-primary  button-text" onClick={() => { setTextarea(!isTextarea); setbuttonvisible(!isbuttonvisible) }}> +Yeni Soru Sorun</button>

                    </div>

                </div>}







            </div>


            {isTextarea && <Textarea onHide={hide} />}

        </div>


    )
}
export default Addquestion;


