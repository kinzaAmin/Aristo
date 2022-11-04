import React from "react";
import peopleclose from "../../assets/images/peopleclose.png";
import active from "../../assets/images/active.png";
import search from "../../assets/images/search.png";
import displaypic from "../../assets/images/displaypic.png"
//import mic1 from "../../assets/images/mic1.png";
import AddParticipant from "../../assets/images/AddParticipant.png";
import RemoveParticipant from "../../assets/images/RemoveParticipant.png";


const AddParticipantRemove = (props) => {




    return (
         
       

        <div  className="  d-flex flex-column    position-relative"  style={{marginTop:"-43%" , height:"910px" , width:"51%" , left:"1%" ,  backgroundColor:"rgba(0, 0, 0, 0.6)" , zIndex:"4" , transform:"translate(-50 , -50)"   }}>

            <div className="people-container    d-flex flex-column justify-content-between rounded position-relative " style={{ width: "75%", height: "905px ",zIndex:"3" ,marginTop: "0%", backgroundColor: "#1B1B1B" , left:"20%", boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0.6px" }} onShow={props.showw} >




                <div className="header  d-flex flex-row     justify-content-between" style={{ justifyContent: "space-between", width: "60%", height: "6%", margin: "3%" }}>
                    <div className="w-100% h-100%  ">
                        <img alt="close-button" src={peopleclose} style={{ cursor: "pointer" }} onClick={props.onHide} />

                    </div>

                    <div className="d-flex flex-column">
                        <span className="h1">Düzenle</span>
                        <img alt="" src={active} />
                    </div>
                </div>


                <div className="d-flex flex-row bg-light  position-relative rounded justify-content-between" style={{ height: "5%", left: "4%", width: "90%", bottom: "0%" }}>
                    <input type="text" placeholder="Katılımcı Ara" style={{ position: "relative", left: "2%", width: "84%", outline: "none", border: "none", color: "#DA00FF" }} />
                    <img src={search} style={{ width: "5%", height: "57%", position: "relative", top: "18%", right: "3%" }} />
                </div>







                <div className=" d-flex flex-column   " style={{ height: "80%", width: "100%", paddingLeft: "4%", paddingRight: "4%", justifyContent: "space-between", overflowY: "scroll", scrollbarWidth: "thinner" }}>



                    <div className="upper-content d-flex flex-row  justify-content-between  " style={{ width: "100%", height: "10%", position: "relative", top: "3%" }}>

                        <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                            <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                                <img alt="displaypic" src={displaypic} />

                            </div>

                            <div className="d-flex flex-column position-relative " style={{ right: "8%" }}   >
                                <span className="peopleComponent"  >Eğitmen Kişi 1</span>
                                <span className="peopleComponent1" style={{ paddingTop: "5%" }}>Eğitmen</span>

                            </div>
                        </div>
                        <div className="d-flex flex-row  w-50% h-100% " style={{ width: "20%", justifyContent: "space-between" }} >
                            <div className="w-100% h-100% position-relative" style={{ left: "28%", top: "10%" }}>
                                <img alt="mic" src={RemoveParticipant} />

                            </div>

                        </div>
                    </div>



                    <div className="upper-content d-flex flex-row w-100%   justify-content-between position-relative " style={{ width: "100%", top: "6%", height: "10%" }}>

                        <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                            <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                                <img alt="displaypic" src={displaypic} />

                            </div>

                            <div className="d-flex flex-column position-relative " style={{ right: "8%" }}   >
                                <span className="peopleComponent"  >Yönetici Kişi</span>
                                <span className="peopleComponent1" style={{ paddingTop: "5%" }}>Yönetici</span>

                            </div>
                        </div>
                        <div className="d-flex flex-row  w-50% h-100%" style={{ width: "20%", justifyContent: "space-between" }} >
                            <div className="w-100% h-100% position-relative" style={{ left: "28%", top: "16%" }}>
                                <img alt="mic" src={RemoveParticipant} />

                            </div>

                        </div>
                    </div>





                    <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between position-relative " style={{ top: "8%", height: "10%" }}>
                        <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                            <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                                <img alt="displaypic" src={displaypic} />

                            </div>

                            <div style={{ alignItems: "center", alignContent: "center", marginTop: "7%", position: "relative", right: "8%" }}>
                                <span className="peopleComponent" >Eğitmen Kişi 1</span>


                            </div>
                        </div>
                        <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                            <div className="w-100% h-100% position-relative" style={{ left: "28%", top: "16%" }}>
                                <img alt="mic" src={RemoveParticipant} />

                            </div>


                        </div>
                    </div>



                    <hr style={{ border: "1px solid #B9BBBE", position: "relative", top: "6%" }} />





                    <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between position-relative " style={{ top: "6%", height: "10%" }}>
                        <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                            <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                                <img alt="displaypic" src={displaypic} />

                            </div>

                            <div style={{ alignItems: "center", alignContent: "center", marginTop: "7%", position: "relative", right: "8%" }}>
                                <span className="peopleComponent" >Eğitmen Kişi 1</span>


                            </div>
                        </div>
                        <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                            <div className="w-100% h-100% position-relative" style={{ left: "28%", top: "16%" }}>
                                <img alt="mic" src={AddParticipant} />

                            </div>


                        </div>
                    </div>



                    <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between  position-relative " style={{ top: "8%", height: "10%" }}>
                        <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                            <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                                <img alt="displaypic" src={displaypic} />

                            </div>

                            <div style={{ alignItems: "center", alignContent: "center", marginTop: "7%", position: "relative", right: "8%" }}>
                                <span className="peopleComponent" >Eğitmen Kişi 1</span>


                            </div>
                        </div>
                        <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                            <div className="w-100% h-100% position-relative" style={{ left: "28%", top: "16%" }}>
                                <img alt="mic" src={AddParticipant} />

                            </div>


                        </div>
                    </div>



                    <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between  position-relative  " style={{ height: "10%", top: "10%" }}>
                        <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                            <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                                <img alt="displaypic" src={displaypic} />

                            </div>

                            <div style={{ alignItems: "center", alignContent: "center", marginTop: "7%", position: "relative", right: "8%" }}>
                                <span className="peopleComponent" >Eğitmen Kişi 1</span>


                            </div>
                        </div>
                        <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                            <div className="w-100% h-100% position-relative" style={{ left: "28%", top: "16%" }}>
                                <img alt="mic" src={AddParticipant} />

                            </div>


                        </div>
                    </div>




                    <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between  position-relative  " style={{ height: "10%", top: "12%" }}>
                        <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                            <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                                <img alt="displaypic" src={displaypic} />

                            </div>

                            <div style={{ alignItems: "center", alignContent: "center", marginTop: "7%", position: "relative", right: "8%" }}>
                                <span className="peopleComponent" >Eğitmen Kişi 1</span>


                            </div>
                        </div>
                        <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                            <div className="w-100% h-100% position-relative" style={{ left: "28%", top: "16%" }}>
                                <img alt="mic" src={AddParticipant} />

                            </div>


                        </div>
                    </div>

                    <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between  position-relative  " style={{ height: "10%", top: "14%" }}>
                        <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                            <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                                <img alt="displaypic" src={displaypic} />

                            </div>

                            <div style={{ alignItems: "center", alignContent: "center", marginTop: "7%", position: "relative", right: "8%" }}>
                                <span className="peopleComponent" >Eğitmen Kişi 1</span>


                            </div>
                        </div>
                        <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                            <div className="w-100% h-100% position-relative" style={{ left: "28%", top: "16%" }}>
                                <img alt="mic" src={AddParticipant} />

                            </div>


                        </div>
                    </div>


                    <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between  position-relative  " style={{ height: "10%", top: "16%" }}>
                        <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                            <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                                <img alt="displaypic" src={displaypic} />

                            </div>

                            <div style={{ alignItems: "center", alignContent: "center", marginTop: "7%", position: "relative", right: "8%" }}>
                                <span className="peopleComponent" >Eğitmen Kişi 1</span>


                            </div>
                        </div>
                        <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                            <div className="w-100% h-100% position-relative" style={{ left: "28%", top: "16%" }}>
                                <img alt="mic" src={AddParticipant} />

                            </div>


                        </div>
                    </div>


                    <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between  position-relative " style={{ height: "10%", top: "18%" }}>
                        <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                            <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                                <img alt="displaypic" src={displaypic} />

                            </div>

                            <div style={{ alignItems: "center", alignContent: "center", marginTop: "7%", position: "relative", right: "8%" }}>
                                <span className="peopleComponent" >Eğitmen Kişi 1</span>


                            </div>
                        </div>
                        <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                            <div className="w-100% h-100% position-relative" style={{ left: "28%", top: "16%" }}>
                                <img alt="mic" src={AddParticipant} />

                            </div>


                        </div>
                    </div>

                    <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between  position-relative " style={{ height: "10%", top: "20%" }}>
                        <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                            <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                                <img alt="displaypic" src={displaypic} />

                            </div>

                            <div style={{ alignItems: "center", alignContent: "center", marginTop: "7%", position: "relative", right: "8%" }}>
                                <span className="peopleComponent" >Eğitmen Kişi 1</span>


                            </div>
                        </div>
                        <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                            <div className="w-100% h-100% position-relative" style={{ left: "28%", top: "16%" }}>
                                <img alt="mic" src={AddParticipant} />

                            </div>


                        </div>
                    </div>










                </div>





            </div>

        </div>
    )
}
export default AddParticipantRemove;