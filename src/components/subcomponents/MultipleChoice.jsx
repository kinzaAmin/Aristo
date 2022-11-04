import React from "react";
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
import cross from "../../assets/images/blackcross.png";
import "../../assets/style/Closemodal.scss";
// import "../assets/style/mainview.css";
//import closebtn from "../../assets/images/modalclosebtn.png"
const MultipleChoice = (props) => {

  return (

    <div className="closemodal-container" onShow={props.handleShow} >
      <div className="centerd">
        <div className="header d-flex flex-row  justify-content-between w-50 position-relative" style={{left:"1%"}}>
              <img src={cross} style={{width:"5%" , height:"30%" , position:"relative" , top:"29%" , cursor:"pointer" }} onClick={props.onHide}   />
          <div style={{  display:"flex" , justifyContent:"center" ,position:"relative" , top:"4%" }}>
          {/* <img alt="close-button" src={closebtn}  onClick={props.onHide} style={{cursor:"pointer"}}   /> */}
            <img alt="info" src={props.pic}  style={{marginTop:"5%"}} />
            </div>

        </div>
        
        <br />

        <div className="modal-body" style={{width: "100vw" ,height:"100%" , display:"flex", justifyContent:"center" , alignContent:"center" , flexDirection:"column" , position:"relative"   }}>
          <div style={{width:"100%" , display:"flex" , flexDirection:"column" , position:"relative" , bottom:"10%" , left:"4%" }}>

          <span className=" modal-h1" style={{ position:"relative" ,right:"18px"}}>  {props.heading} </span><br /> 
          <span className="modal-h2 " style={{position:"relative" ,right:"2px"  , width:"13%" , height:"85%"}}> {props.content}</span> 
          </div>
          
          <br/>
          <div className=" d-flex flex-row  justify-content-between" style={{position:"relative" , bottom:"3%"  , height:"30%" , width:"17%" , left:"30px"  }}>
            <button className="btn1 modal-btn1  " onClick={props.handleMultipleChoice}  style={{position:"relative" , paddingLeft:"2%" , paddingTop:"9px" , height:"90%" , width:"45%" , backgroundColor:"#DA00FF" , color:"#FFFFFF"}}> {props.btn1} </button>
            <button className="btn2 modal-btn2" style={{position:"relative" , paddingLeft:"25px" , paddingTop:"9px" , height:"90%" , width:"45%"}} onClick={props.handleClassic}  > {props.btn2} </button>
          </div>
        </div>
      </div>
    </div>

  )
}


export default MultipleChoice;