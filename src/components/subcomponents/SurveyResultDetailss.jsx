import React from "react";
import arrow2 from "../../assets/images/upwardarrow.png";
import Progress_bar from "./Progressbar";
import { Switch } from "@mui/material";
const SurveyResultDetails = (props) => {

    return (
        <>
            <div className=" d-flex flex-row    justify-content-between position-relative" style={{ width: "90%", height: "10%", left: "5%", top: '5%' }}>

                <span style={{ position: "relative", top: "19%" }}  className="survey-detail-subheading">{props.surveyNo}</span>


                <div className=" h-50  position-relative d-flex flex-row justify-content-between" style={{ top: "19%", right: "1%", width: "18%" }} >
                    <button className="rounded-circle  position-relative " style={{ width: "14%", height: "50%", border: "none", marginTop: "9%" }} />
                    <span className="sd-1">{props.passive}</span>
                </div>

            </div>



            <div className="   d-flex flex-row justify-content-between  position-relative " style={{ width: "90%", height: "4%", left: "5%", top: "7%" }}>

                <span className="camera2">{props.Question1}</span>
                <img src={arrow2} style={{cursor:"pointer"}} onClick={props.onHide}/>

            </div>


            <div className="   position-relative d-flex flex-column" style={{ left: "5%", top: "15%", width: "90%", height: "17%" }}>

                <div className="  position-relative d-flex flex-row justify-content-between" style={{ width: "100%", height: "40%" }}>
                    <span className="subtitle6">{props.answer1}</span>
                    <span className="sd-2">{props.numberOfAnswers}</span>
                </div>

                <div style={{ position: "relative", bottom: "15%", width: "100%" }} >

                    <Progress_bar bgcolor=" #03C04A" progress='80' height={10} />
                    {/* <progress id="file" max="100" value="70"> 70% </progress> */}
                </div>

            </div>



            <div className="   position-relative d-flex flex-column " style={{ left: "5%", top: "17%", width: "90%", height: "17%" }}>

                <div className="  position-relative d-flex flex-row justify-content-between" style={{ width: "100%", height: "40%" }}>
                    <span className="subtitle6">{props.answer2}</span>
                    <span className="sd-2">{props.totalanswers}</span>
                </div>

                <div style={{ position: "relative", bottom: "15%", width: "100%" }} >

                    <Progress_bar bgcolor=" #03C04A" progress='40' height={10}  />
                    {/* <progress id="file" max="100" value="70"> 70% </progress> */}
                </div>

            </div>



            <div className="   position-relative d-flex flex-row justify-content-between " style={{  top: "22%", width: "100%", height: "13%", borderTop: "1px solid #0E48F6", borderBottom: " 1px solid #0E48F6 ", }}>

                <span className="subtitle6" style={{ position: "relative", top: "26%" , left:"6%" }}>Sonuçları herkese göster</span>
                <div style={{ position: "relative", top: "0%" }}  >    <Switch /></div>
            </div>



            <div style={{ position: "relative", top:"26%", left: "34%"  }}>

                <button className="btn btn-primary button-text "> Anketi Sonlandır</button>

            </div>


        </>
    )
}
export default SurveyResultDetails;