import React from "react";
import closebtn from "../../assets/images/modalclosebtn.png";
import "../../assets/style/micmodal.scss";
const Micmodal2 = (props) => {
    return (

        <div className="micmodal2">
           
           
            <div style={{ width: "5%", height: "5%", position: "relative" }}>
                <img alt="closebtn" src={closebtn} style={{ cursor: "pointer" }} onClick={props.onHide} />
            </div>


            <div className="micmodal2-content">

                <div style={{ width: "100%", height: "10%" }}>
                    <span className="micmodalspan">  {props.option1}</span>
                </div>




                <div className="micmodal2-content2">

                    <div style={{ width: "70%", height: "30%", position: "relative", top: "10%", justifyContent: "space-between" }} className="d-flex flex-row">

                        <input type="radio" style={{ width: "40%", height: "100%" }} />

                        <span className="micmodal-span2" style={{ width: "100%", height: "100%" }} > {props.option2}</span>

                    </div>

                    <div style={{ width: "70%", height: "30%", position: "relative", top: "35%", justifyContent: "space-between" }} className="d-flex flex-row" >

                        <input type="radio" style={{ width: "40%", height: "100%" }} />

                        <span className="micmodal-span2" style={{ width: "100%", height: "100%" }}  onClick= {props.onClick}  >{props.option3}  </span>

                    </div>

                    <div style={{ width: "70%", height: "30%", position: "relative", top: "60%" ,  justifyContent: "space-between" }} className="d-flex flex-row" >

                    <input type="radio" style={{ width: "40%", height: "100%" }} />

                        <span className="micmodal-span2"  style={{ width: "100%", height: "100%" }}> {props.option4}</span>
                    
                    </div>

                </div>




            </div>

        </div>
    )
}

export default Micmodal2;