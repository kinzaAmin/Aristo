import React from "react";
import stop from "../../assets/images/red.png";
import minimize from "../../assets/images/yellow.png";
import maximize from "../../assets/images/green.png";
import sec from "../../assets/images/sec.png";
import metin from "../../assets/images/metin.png";
import ciz from "../../assets/images/ciz.png";
import sekil from "../../assets/images/sekil.png";
import vector1 from "../../assets/images/Vector1.png";
import silgi from "../../assets/images/silgi.png";
import color from "../../assets/images/color.png";
import geri from "../../assets/images/geri.png";
import ileri from "../../assets/images/ileri.png";
import cop from "../../assets/images/cop.png";
import save from "../../assets/images/save.png";
import "../../assets/style/WhiteBoard.scss";
const WhiteBoard = (props) => {
       return (


              <div className=" container ">

                     <div className="content  position-relative" style={{ width: "90%", height: "70%", left: "5%", backgroundColor: "white" }}>



                            <div className="centerd  d-flex flex-row position-relative rounded-0 " style={{ width: "100%", height: "5%", marginLeft: "10%" }} >



                                   <div className="  d-flex flex-row position-relative justify-content-between " style={{ width: "10%", height: "30%", top: "35%", right: "42%" }}>

                                          <img src={stop} onClick={props.handleClose}  style={{cursor:"pointer"}}/>
                                          <img src={minimize} style={{cursor:"pointer"}} />
                                          <img src={maximize} style={{cursor:"pointer"}} />

                                   </div>

                            </div>

                            <div className="bg-dark d-flex flex-column rounded position-relative " style={{ width: "13%", height: "40%", top: "22%" }}>

                                   <div className=" w-100 d-flex flex-row justify-content-between " style={{ height: "10%", borderBottom: "2px solid #FFFFFF", position: "relative", top: "1%"  }}>

                                          <img src={sec} style={{ position: "relative", left: "3%", height: "70%", top: "15%" , cursor:"pointer" }} />
                                          <span className="Whiteboard" style={{ position: "relative", right: "8%", top: "25%" }}>Seç</span>

                                   </div>

                                   <div className=" w-100 d-flex flex-row justify-content-between " style={{ height: "10%", borderBottom: "2px solid #FFFFFF", position: "relative", top: "1%" }}>

                                          <img src={metin} style={{ position: "relative", left: "3%", height: "70%", top: "15%" , cursor:"pointer" }} />
                                          <span className="Whiteboard" style={{ position: "relative", right: "8%", top: "25%" }}>Metin</span>

                                   </div>
                                   <div className=" w-100 d-flex flex-row justify-content-between " style={{ height: "10%", borderBottom: "2px solid #FFFFFF", position: "relative", top: "1%" }}>

                                          <img src={ciz} style={{ position: "relative", left: "3%", height: "70%", top: "15%" , cursor:"pointer" }} />
                                          <span className="Whiteboard" style={{ position: "relative", right: "8%", top: "25%" }}>Çiz</span>

                                   </div>

                                   <div className=" w-100 d-flex flex-row justify-content-between " style={{ height: "10%", borderBottom: "2px solid #FFFFFF", position: "relative", top: "1%" }}>

                                          <img src={sekil} style={{ position: "relative", left: "3%", height: "70%", top: "15%" , cursor:"pointer" }} />
                                          <span className="Whiteboard" style={{ position: "relative", right: "8%", top: "25%" }}>Şekil</span>

                                   </div>
                                   <div className=" w-100 d-flex flex-row justify-content-between " style={{ height: "10%", borderBottom: "2px solid #FFFFFF", position: "relative", top: "1%" }}>

                                          <img src={vector1} style={{ position: "relative", left: "3%", height: "70%", top: "15%", cursor:"pointer" }} />
                                          <span className="Whiteboard" style={{ position: "relative", right: "8%", top: "25%" }}>Vurgu</span>

                                   </div>
                                   <div className=" w-100 d-flex flex-row justify-content-between " style={{ height: "10%", borderBottom: "2px solid #FFFFFF", position: "relative", top: "1%" }}>

                                          <img src={silgi} style={{ position: "relative", left: "3%", height: "70%", top: "15%" , cursor:"pointer" }} />
                                          <span className="Whiteboard" style={{ position: "relative", right: "8%", top: "25%" }}>Silgi</span>

                                   </div>
                                   <div className=" w-100 d-flex flex-row justify-content-between " style={{ height: "10%", borderBottom: "2px solid #FFFFFF", position: "relative", top: "1%" }}>

                                          <img src={color} style={{ position: "relative", left: "3%", height: "70%", top: "15%", cursor:"pointer" }} />
                                          <span className="Whiteboard" style={{ position: "relative", right: "8%", top: "25%" }}>Renk</span>

                                   </div>
                                   <div className=" w-100 d-flex flex-row justify-content-between " style={{ height: "10%", borderBottom: "2px solid #FFFFFF", position: "relative", top: "1%" }}>

                                          <img src={geri} style={{ position: "relative", left: "3%", height: "70%", top: "15%" , cursor:"pointer" }} />
                                          <span className="Whiteboard" style={{ position: "relative", right: "8%", top: "25%" }}>Geri</span>

                                   </div>
                                   <div className=" w-100 d-flex flex-row justify-content-between " style={{ height: "10%", borderBottom: "2px solid #FFFFFF", position: "relative", top: "1%" }}>

                                          <img src={ileri} style={{ position: "relative", left: "3%", height: "70%", top: "15%" , cursor:"pointer" }} />
                                          <span className="Whiteboard" style={{ position: "relative", right: "8%", top: "25%" }}>İleri</span>

                                   </div>
                                   <div className=" w-100 d-flex flex-row justify-content-between " style={{ height: "10%", borderBottom: "2px solid #FFFFFF", position: "relative", top: "1%" }}>

                                          <img src={cop} style={{ position: "relative", left: "3%", height: "70%", top: "15%" , cursor:"pointer" }} />
                                          <span className="Whiteboard" style={{ position: "relative", right: "8%", top: "25%" }}>Temizle</span>

                                   </div>
                                   <div className=" w-100 d-flex flex-row justify-content-between " style={{ height: "10%", position: "relative", top: "1%" }}>

                                          <img src={save} style={{ position: "relative", left: "3%", height: "70%", top: "15%" , cursor:"pointer" }} />
                                          <span className="Whiteboard" style={{ position: "relative", right: "8%", top: "25%" }}>Kaydet</span>

                                   </div>

                            </div>

                     </div>
              </div>
       )
}

export default WhiteBoard;