import React from "react";
//import "../../assets/style/Closemodal.scss";
const Questionmodal = (props) => {

    return (


        <div className="" onShow={props.handleShow} style={{ width: "99%", height: "100vh", position: "absolute", zIndex: "2" , position:"absolute" , bottom:"0.5%" ,right:"1%" , boxShadow:"0px 8px 36px rgb(0 0 0 / 16%);" , overflowY:"hidden" , overflowX:"hidden" }} >


            <div className="d-flex flex-column bg-white  rounded" style={{ width: "20%", height: "30%", position: "absolute", bottom: "40%" , left:"45%" , zIndex:"4" , overflow:"hidden"}} onClick={props.show}>


                <div className="header" style={{ width: "20%", height: "24%", position: "relative", left: "40%", top: "4%" }}>

                    <div style={{ display: "flex", justifyContent: "center", position: "relative", top: "4%" , right:"9%" }}>

                        <img alt="info" src={props.pic} style={{}} />

                    </div>

                </div>



                <br />



                <div className="modal-body" style={{ width: "100vw", height: "100%", display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column", position: "relative" }}>

                    <div style={{ width: "100%", display: "flex", flexDirection: "column", position: "relative", bottom: "7%", left: "4%" , right:"4%" }}>

                       <div  style={{width:"20%" , height:"30%" ,position:"relative" , alignContent:"center" , right:"4%"}}>
                        
                         <span className=" modal-h1" style={{position:"relative" , letterSpacing: "1px" , width:"50%", height:"100%" ,  left:"25%"}}>{props.heading}</span>
                         
                          </div>
                          
                          <br />
                        <span className="subtitle2" style={{ width: "14%", hright: "70%", letterSpacing: "2px" }}>{props.text}</span>
                    </div>

                    <br />

                    <div className="footer" style={{ position: "relative", bottom: "10%", left: "2%", width: "16%", height: "30%", backgroundColor: "#DA00FF", borderRadius: "10px", cursor: "pointer" }} onClick={props.onHide}>

                        <div className=" question-btn"  style={{ width: "100%", height: "100%", alignItems: "center", position: "relative", paddingLeft: "40%", paddingTop: "6%", letterSpacing: "1px" }}>

                            {props.buttontext}

                        </div>
                    </div>

                </div>



            </div>


        </div>




    )
}
export default Questionmodal;