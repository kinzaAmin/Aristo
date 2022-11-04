import React , {useState} from "react";
import close from "../../assets/images/peopleclose.png";
import active from "../../assets/images/active.png";
import timer from "../../assets/images/timer.png";
import mix from "../../assets/images/mix.png";
import cleaner from "../../assets/images/cleaner.png";
import circle from "../../assets/images/circle.png";
import pencil from "../../assets/images/pencil.png";
import plus from "../../assets/images/plus.png";
//import AddParticipantRemove from "./AddParicipantRemovejsx";
import AddParticipantRemovee from "../../assets/images/Addparticipantremove.png"
//import People from "../subcomponents/Peoples";
import AddParticipantRemove from "./AddParticipantRemove";
const GroupTraniee = (props) => {

const [isParticipant , setParticipant]=useState(false)
const [isParticipant2 , setParticipant2]=useState(false)
const [isParticipant3 , setParticipant3]=useState(false)
//nned to set people modal

    return (

        <>
            <div className="d-flex flex-column  position-absolute p-3 rounded " style={{ width: "30%", height: "95%", left: "68%", bottom: "2%" , backgroundColor:"#1B1B1B" }}>

                <div className=" d-flex flex-row   justify-content-between position-relative" style={{ width: "70%", height: "8%" }} >

                    <div style={{ width: "10%", height: "10%" }} onClick={props.onHide} >
                        <img src={close} style={{ cursor: "pointer" }} />
                    </div>

                    <div className="d-flex flex-column   " style={{ width: "40%", height: "100%" }}  >
                        <span className="camera position-relative" style={{}}> Grup Odaları</span>
                        <img src={active} style={{ height: "6%", width: "70%" }} />

                    </div>



                </div>



                <div className="  d-flex flex-row position-relative justify-content-between  " style={{ marginTop: "5%", height: "10%", left: "19%", width: "60%", alignItems: "center" }} >


                    <div className=" rounded-circle d-flex flex-column position-relative" style={{ border: "1px solid #FFFFFF", width: "14%", height: "45px", alignItems: "center", alignContent: "center" }}>

                        <div style={{ position: "relative", alignContent: "center", alignItems: "center", top: "9px", cursor: "pointer" }} >

                            <img alt="timer-icon " src={timer} />

                        </div>

                        <div style={{ position: "relative", top: "50%" }}>
                            <span className="surveysubtitle"> Zamanlayıcı</span>   
                            
                        </div>


                    </div>


                    <div className=" rounded-circle  d-flex flex-column " style={{ border: "1px solid #FFFFFF", width: "14%", height: "45px", alignItems: "center", alignContent: "center" }}>


                        <div style={{ position: "relative", alignContent: "center", alignItems: "center", top: "9px" }}>

                            <img alt="timer-icon " src={mix} />

                        </div>


                        <div style={{ position: "relative", top: "50%" }}>
                            <span className="surveysubtitle"> Karıştır</span>
                        </div>
                    </div>





                    <div className=" rounded-circle  d-flex flex-column " style={{ border: "1px solid #FFFFFF", width: "14%", height: "45px", alignItems: "center", alignContent: "center" }}>


                        <div style={{ position: "relative", alignContent: "center", alignItems: "center", top: "9px" }}>

                            <img alt="timer-icon " src={cleaner} />

                        </div>


                        <div style={{ position: "relative", top: "50%" , right:"5%"}}>
                            <span className="surveysubtitle"> Temizle</span>
                        </div>
                    </div>


                </div>





                <div className="d-flex flex-column  position-relative" style={{ height: "50%", top: "6%" }}>

                    <div className="rounded-circle position-relative " style={{ height: "9%", width: "4%", alignContent: "center", border: "1px solid #0E48F6", left: "93%", top: "8%", zIndex: "2", backgroundColor: "#1B1B1B" }}   >

                        <img src={pencil} style={{ position: "relative", width: "70%", height: "50%", left: "12%", bottom: "10%", }} />

                    </div>

                    <div className="rounded  position-relative d-flex flex-row  justify-content-between " style={{ width: "90%", height: "30%", border: "1px solid #0E48F6", left: "5%", zIndex: "1" }}>



                        <div className="d-flex flex-column    position-relative " style={{ top: "25%", left: "3%" , width:"37%" , height:"60%" }} >

                            <div className="d-flex flex-row justify-content-between " style={{ width: "100%" }}>
                                <span className="camera2">Grup Odası 1</span>
                                <img src={circle} className="rounded-circle position-relative" style={{ height: "60%", top: "20%" , right:"12%" }}   />
                            </div>

                            <div>
                                <span className="subtitle7"  >8 kişi</span>
                            </div>

                        </div>




                        <div className="  h-100 position-relative d-flex flex-row justify-content-between" style={{ width: "38%", alignItems: "center", right: "3%" }} >
                            <span className="surveybtn2" style={{ position: "relative" }}>Katılımcı ekle - çıkar</span>
                            <img src={AddParticipantRemovee} style={{cursor:"pointer"}}  onClick={()=> setParticipant(!isParticipant)}/>

                        </div>



                    </div>

                </div>



                <div className="d-flex flex-column  position-relative" style={{ height: "50%", bottom: "10%" }}>
                    <div className="rounded-circle position-relative " style={{ height: "9%", width: "4%", alignContent: "center", border: "1px solid #0E48F6", left: "93%", top: "8%", zIndex: "2", backgroundColor: "#1B1B1B" }}   >

                        <img src={pencil} style={{ position: "relative", width: "70%", height: "50%", left: "12%", bottom: "10%", }} />

                    </div>

                    <div className="rounded  position-relative d-flex flex-row  justify-content-between " style={{ width: "90%", height: "30%", border: "1px solid #0E48F6", left: "5%", zIndex: "1" }}>



                        <div className="d-flex flex-column   position-relative " style={{ top: "25%", left: "3%" , width:"37%" , height:"60%" }} >

                            <div className="d-flex flex-row justify-content-between " style={{ width: "100%" }}>
                                <span className="camera2">Grup Odası 1</span>
                                <img src={circle} className="rounded-circle position-relative" style={{ height: "60%", top: "20%" , right:"12%" }} />
                            </div>

                            <div>
                                <span className="subtitle7" >8 kişi</span>
                            </div>

                        </div>




                        <div className="  h-100 position-relative d-flex flex-row justify-content-between" style={{ width: "38%", alignItems: "center", right: "3%" }} >
                            <span  className="surveybtn2" style={{ position: "relative"  }}>Katılımcı ekle - çıkar</span>
                            <img src={AddParticipantRemovee} style={{cursor:"pointer"}} onClick={()=> setParticipant2(!isParticipant2)} />

                        </div>



                    </div>

                </div>


                <div className="d-flex flex-column  position-relative" style={{ height: "50%", bottom: "25%" }}>

                    <div className="rounded-circle position-relative " style={{ height: "9%", width: "4%", alignContent: "center", border: "1px solid #0E48F6", left: "93%", top: "6%", zIndex: "2", backgroundColor: "#1B1B1B" }}   >

                        <img src={pencil} style={{ position: "relative", width: "70%", height: "50%", left: "12%", bottom: "10%", }} />

                    </div>

                    <div className="rounded  position-relative d-flex flex-row  justify-content-between " style={{ width: "90%", height: "30%", border: "1px solid #0E48F6", left: "5%", zIndex: "1" }}>



                        <div className="d-flex flex-column   position-relative " style={{ top: "25%", left: "3%" , width:"37%" , height:"60%"  }} >

                            <div className="d-flex flex-row justify-content-between " style={{ width: "100%" }}>
                                <span className="camera2">Grup Odası 1</span>
                                <img src={circle} className="rounded-circle position-relative" style={{ height: "60%", top: "20%" , right:"12%" }} />
                            </div>

                            <div>
                                <span className="subtitle7">8 kişi</span>
                            </div>

                        </div>




                        <div className="  h-100 position-relative d-flex flex-row justify-content-between" style={{ width: "38%", alignItems: "center", right: "3%" }} >
                            <span className="surveybtn2" style={{ position: "relative" }}>Katılımcı ekle - çıkar</span>
                            <img src={AddParticipantRemovee} style={{cursor:"pointer"}} onClick={()=> setParticipant3(!isParticipant3)} />

                        </div>



                    </div>

                </div>





                <div className="d-flex flex-row  justify-content-between" style={{ width: "29%", height: "40%", position: "absolute",  left: "10%" , top:"65%" }}>

                    <div className="bg-primary rounded" style={{ width: "33%", height: "39px", position: "relative", cursor: "pointer" }} >
                        <img src={plus} style={{ width: "20%", height: "20px", position: "relative", left: "38%", top: "15%" }} />

                    </div>

                    <div className="position-relative" style={{ right: "25%", top: "7px" , left:"1px"  }}>
                        <span className="surveybtn2">Grup Odası Ekle</span>
                    </div>

                </div>


                <div className="d-flex flex-row  position-relative justify-content-between  " style={{width:"38%" , height:"10%" , left:"62%" }}>
                    
                    <span className="button-text" style={{textDecoration:"underline" , position:'relative'  , top:"35%" , left:"15%" }}>Odaları Kapat</span>

                   <div className="btn btn-primary  button-text" style={{position:"relative" , paddingTop:"6%" }}> Odaları Aç</div>

                </div>





            </div>
            {isParticipant && <AddParticipantRemove onHide={ ()=> setParticipant(false)}/>}
            {isParticipant2 && <AddParticipantRemove onHide={ ()=> setParticipant2(false)}/>}
            {isParticipant3 && <AddParticipantRemove onHide={ ()=> setParticipant3(false)}/>}
        </>
    )
}

export default GroupTraniee;