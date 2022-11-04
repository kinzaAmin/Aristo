import React from "react";
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
//import info from "../assets/images/info.png";
import "../../assets/style/Closemodal.scss";
// import "../assets/style/mainview.css";
//import closebtn from "../../assets/images/modalclosebtn.png"
const QuestionDelete = (props) => {

    return (

        <div className="   " style={{ width: "100%", height: "100%", position: "absolute", zIndex: "4"  }} onShow={props.handleShow} >

            <div className=" rounded bg-light" style={{ width: "80%", height: "30%", position: "absolute", top: "15%" }}  >

                <div className="header">

                    <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                        {/* <img alt="close-button" src={closebtn}  onClick={props.onHide} style={{cursor:"pointer"}}   /> */}
                        <img alt="info" src={props.pic} style={{ marginTop: "5%" }} />

                    </div>
                </div><br />


                <div className="modal-body" style={{ width: "100vw", height: "100%", display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column", position: "relative", bottom: "17%", right: "4%" }}>
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", position: "relative", bottom: "10%", left: "4%" }}>

                        <span className=" modal-h1" style={{}}>  {props.heading} </span><br />
                        <span className="modal-h2" style={{ position: "relative", left: "18px" }}> {props.content}</span>
                    </div>

                    <br />
                    <div className="footer" style={{ position: "relative", bottom: "6%", left: "4%" }}>
                        <div className="btn1 modal-btn1" onClick={props.onHide} style={{ position: "relative", paddingLeft: "2%", paddingTop: "9px" }}   > {props.btn1} </div>
                        <div className="btn2 modal-btn2" style={{ position: "relative", paddingLeft: "35px", paddingTop: "9px" }} > {props.btn2} </div>
                    </div>
                </div>


            </div>

        </div>

    )
}


export default QuestionDelete;