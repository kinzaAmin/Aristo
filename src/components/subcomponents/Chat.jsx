import React from "react";
import close from "../../assets/images/peopleclose.png";
import man from "../../assets/images/man.png";
import user1 from "../../assets/images/user1.png";
import dp2 from "../../assets/images/dp2.png";
import attachment from "../../assets/images/attachment.png";
import send from "../../assets/images/send.png";
import sendmessagebtn from "../../assets/images/sendmessagebtn.png";
//import S3upperLeft from "./Screen3Uppercontent";
const Chat = (props) => {

    return (
        <>
            <div className="chat-container d-flex flex-column" style={{ width: "30%", height: "120%", padding: "2%", backgroundColor: "#1B1B1B", marginTop: "-45%", zIndex: "4"}} onShow={props.display}  >

                <div style={{ width: "100%", height: "8%" }}>
                    <div>
                        <img alt="close-button" src={close} style={{ cursor: "pointer" }} onClick={props.onHide} />
                    </div>
                </div>


                <div className="d-flex flex-row justify-content-between" style={{ width: "100%", height: "10%" }} >

                    <div style={{ display: "flex", flexDirection: "row", width: "40%", height: "10%", alignItems: "center", justifyContent: "space-between" }} >
                        <div ><img alt="man's picture" src={man} style={{ borderRadius: "4px", marginTop: "10px" }} /></div>
                        <span className="span2 h2 " style={{ paddingTop: "10%", paddingRight: "12%" }}>Brooklyn Williamson <br />Eğitmen</span>
                    </div>



                    <div className=" d-flex flex-column" style={{ width: "50%", height: "30%" }}>
                        <div style={{ width: "100%", height: "100%", marginLeft: "65%" }}>
                            <span className="peopleComponent1" >20 Katılımcı</span>
                        </div>


                        <div style={{ width: "50%", height: "30%", marginLeft: "50%" }} className="d-flex flex-row justify-content-between" >


                            <div style={{ width: "100%", height: "100%", borderRadius: "50%" }}>

                                <img alt="peoples list" src={user1} />

                            </div>

                            <div style={{ width: "100%", height: "100%", borderRadius: "50%" }}>

                                <img alt="peoples list" src={user1} />

                            </div>

                            <div style={{ width: "100%", height: "100%", borderRadius: "50%" }}>

                                <img alt="peoples list" src={user1} />

                            </div>

                            <div style={{ width: "100%", height: "100%", borderRadius: "50%" }}>

                                <img alt="peoples list" src={user1} />

                            </div>

                            <div style={{ width: "100%", height: "100%", borderRadius: "50%" }}>

                                <img alt="peoples list" src={user1} />

                            </div>
                        </div>



                    </div>



                </div>




                <div className="msgs-container d-flex flex-column  " style={{ width: "50%", height: "70%", marginLeft: "50%", justifyContent: "space-between", marginTop: "10%" }}>

                    <div className=" d-flex flex-column" style={{ width: "100%", height: "100%" }}>

                        <div style={{ width: "100%", height: "10%", fontFamily: "Helvetica Neue", fontWeight: "400px", fontStyle: "normal", fontSize: "11px", lineHeight: "24px" }}>

                            <span style={{ color: "#FFFFFF" }}>   Me to  </span>

                            <span style={{ color: "  #03C04A" }}>Eğitmen Kişi</span>
                            <span style={{ color: "#DA00FF " }}> (Direct Message)</span>



                        </div>


                        <div className=" d-flex flex-row " style={{ justifyContent: "space-between" }}>

                            <div style={{ width: "80%", height: "40%", backgroundColor: "#DA00FF", borderRadius: "24px 0px 24px 24px", paddingLeft: "7%" }}>

                                <div className="msg-text" style={{ width: "100%", height: "100%" }}>
                                    <span >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                    </span>

                                </div>
                            </div>

                            <div style={{ width: "10%", height: "50%", alignContent: "center", alignItems: "center" }}>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}> <img alt="" src={user1} style={{ borderRadius: "50%" }} /></div>
                            </div>

                        </div>


                    </div>





                    <div className=" d-flex flex-column" style={{ width: "100%", height: "100%", marginTop: "8%" }}>

                        <div style={{ width: "100%", height: "10%", fontFamily: "Helvetica Neue", fontWeight: "400px", fontStyle: "normal", fontSize: "11px", lineHeight: "24px" }}>

                            <span style={{ color: "#FFFFFF" }}>   Me to  </span>

                            <span style={{ color: "  #03C04A" }}>Eğitmen Kişi</span>
                            <span style={{ color: "#DA00FF " }}> (Direct Message)</span>



                        </div>


                        <div className=" d-flex flex-row " style={{ justifyContent: "space-between" }}>

                            <div style={{ width: "80%", height: "40%", backgroundColor: "#DA00FF", borderRadius: "24px 0px 24px 24px", paddingLeft: "7%" }}>

                                <div className="msg-text" style={{ width: "100%", height: "100%" }}>
                                    <span >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                    </span>

                                </div>
                            </div>

                            <div style={{ width: "10%", height: "50%", alignContent: "center", alignItems: "center" }}>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}> <img alt="" src={dp2} style={{ borderRadius: "50%" }} /></div>
                            </div>

                        </div>


                    </div>

                </div>









                <div className="msgs-container d-flex flex-column   " style={{ width: "70%", height: "70%", justifyContent: "space-between", marginTop: "7%" }}>

                    <div className=" d-flex flex-column" style={{ width: "100%", height: "100%" }}>

                        <div style={{ width: "100%", height: "10%", fontFamily: "Helvetica Neue", fontWeight: "400px", fontStyle: "normal", fontSize: "11px", lineHeight: "24px" }}>

                            <span style={{ color: "  #03C04A" }}>Eğitmen Kişi</span>

                            <span style={{ color: "#FFFFFF" }}>   to  </span>

                            <span style={{ color: "#DA00FF " }}> Everyone</span>



                        </div>


                        <div className=" d-flex flex-row " style={{ justifyContent: "space-between" }}>

                            <div style={{ width: "10%", height: "50%", alignContent: "center", alignItems: "center" }}>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}> <img alt="" src={dp2} style={{ borderRadius: "50%" }} /></div>
                            </div>

                            <div style={{ width: "80%", height: "40%", backgroundColor: "#0E48F6", borderRadius: "24px 0px 24px 24px", paddingLeft: "7%", marginLeft: "4%" }}>

                                <div className="msg-text" style={{ width: "100%", height: "100%" }}>
                                    <span >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                    </span>

                                </div>
                            </div>



                            <div style={{ width: "10%", height: "50%", marginLeft: "3%" }}>
                                <div style={{ width: "100%", height: "100%" }}>
                                    <img alt="send message" src={sendmessagebtn} />
                                </div>
                            </div>


                        </div>


                    </div>


                </div>




                <div className="msgs-container d-flex flex-column  " style={{ width: "50%", height: "70%", marginLeft: "50%", justifyContent: "space-between", marginTop: "5%" }}  >
                    <div className=" d-flex flex-column" style={{ width: "100%", height: "100%" }}>

                        <div style={{ width: "100%", height: "10%", fontFamily: "Helvetica Neue", fontWeight: "400px", fontStyle: "normal", fontSize: "11px", lineHeight: "24px" }}>

                            <span style={{ color: "#FFFFFF" }}>   Me to  </span>

                            <span style={{ color: "  #03C04A" }}>Eğitmen Kişi</span>
                            <span style={{ color: "#DA00FF " }}> (Direct Message)</span>



                        </div>


                        <div className=" d-flex flex-row " style={{ justifyContent: "space-between" }}>

                            <div style={{ width: "80%", height: "40%", backgroundColor: "#DA00FF", borderRadius: "24px 0px 24px 24px", paddingLeft: "7%" }}>

                                <div className="msg-text" style={{ width: "100%", height: "100%" }}>
                                    <span >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                    </span>

                                </div>
                            </div>

                            <div style={{ width: "10%", height: "50%", alignContent: "center", alignItems: "center" }}>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}> <img alt="" src={user1} style={{ borderRadius: "50%" }} /></div>
                            </div>

                        </div>


                    </div>
                </div>





                <div className="msgs-container d-flex flex-column   " style={{ width: "70%", height: "70%", justifyContent: "space-between", marginTop: "3%" }}>

                    <div className=" d-flex flex-column" style={{ width: "100%", height: "100%" }}>

                        <div style={{ width: "100%", height: "10%", fontFamily: "Helvetica Neue", fontWeight: "400px", fontStyle: "normal", fontSize: "11px", lineHeight: "24px" }}>

                            <span style={{ color: "  #03C04A" }}>Eğitmen Kişi</span>

                            <span style={{ color: "#FFFFFF" }}>   to  </span>

                            <span style={{ color: "#DA00FF " }}> Everyone</span>



                        </div>


                        <div className=" d-flex flex-row " style={{ justifyContent: "space-between" }}>

                            <div style={{ width: "10%", height: "50%", alignContent: "center", alignItems: "center" }}>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}> <img alt="" src={dp2} style={{ borderRadius: "50%" }} /></div>
                            </div>

                            <div style={{ width: "80%", height: "40%", backgroundColor: "#0E48F6", borderRadius: "24px 0px 24px 24px", paddingLeft: "7%", marginLeft: "4%" }}>

                                <div className="msg-text" style={{ width: "100%", height: "100%" }}>
                                    <span >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                    </span>

                                </div>
                            </div>



                            <div style={{ width: "10%", height: "50%", marginLeft: "3%" }}>
                                <div style={{ width: "100%", height: "100%" }}>
                                    <img alt="send message" src={sendmessagebtn} />
                                </div>
                            </div>


                        </div>


                    </div>


                </div>





                <div className="msgs-container d-flex flex-column  " style={{ width: "50%", height: "70%", marginLeft: "50%", justifyContent: "space-between", marginTop: "5%" }}  >
                    <div className=" d-flex flex-column" style={{ width: "100%", height: "100%" }}>

                        <div style={{ width: "100%", height: "10%", fontFamily: "Helvetica Neue", fontWeight: "400px", fontStyle: "normal", fontSize: "11px", lineHeight: "24px" }}>

                            <span style={{ color: "#FFFFFF" }}>   Me to  </span>

                            <span style={{ color: "  #03C04A" }}>Eğitmen Kişi</span>
                            <span style={{ color: "#DA00FF " }}> (Direct Message)</span>



                        </div>


                        <div className=" d-flex flex-row " style={{ justifyContent: "space-between" }}>

                            <div style={{ width: "80%", height: "40%", border:"1px  #DA00FF dashed ", borderRadius: "24px 0px 24px 24px", paddingLeft: "7%" }}>

                                <div className="msg-text" style={{ width: "100%", height: "100%" }}>
                                    <span >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                    </span>

                                </div>
                            </div>

                            <div style={{ width: "10%", height: "50%", alignContent: "center", alignItems: "center" }}>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}> <img alt="" src={user1} style={{ borderRadius: "50%" }} /></div>
                            </div>

                        </div>


                    </div>
                </div>











                <div style={{ width: "80%", height: "80px", backgroundColor: "#141414", position: "relative", left: "10%", marginTop: "8%", paddingTop: "3%", justifyContent: "space-between", borderRadius: "7px" }} className="d-flex flex-row ">

                    <div style={{ paddingTop: "3%", marginLeft: "2%", marginRight: "2%" }}>
                        <img alt="attachement button" src={attachment} />
                    </div>


                    <div style={{ width: "100%", height: "100%", alignItems: "center", alignContent: "center" }}>

                        <input type="text" placeholder="Text Message" style={{ width: "100%", height: "50px", outline: "none", border: "0px transparent solid", paddingLeft: "5%", backgroundColor: "#141414" }} />

                    </div>


                    <div style={{ paddingTop: "3%", marginLeft: "2%", marginRight: "5%" }}>
                        <img alt="send button" src={send} />
                    </div>

                </div>



            </div>






        </>

    )


}
export default Chat;