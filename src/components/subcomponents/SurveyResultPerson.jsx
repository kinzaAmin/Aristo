import React , {useState} from "react";
import arrow from "../../assets/images/downarrow.png";
import SurveyResultDetails from "./SurveyResultDetailss";


const SurveyResultPerson = (props) => {

    // const[isSurveyDetails , setSurveyDetails] = useState (false)




    return (
        <>
            <div className=" d-flex flex-row   h-25 justify-content-between  position-relative" style={{ width: "90%", left: "5%", top: '18%' }}>

                <span style={{ position: "relative", top: "19%" }} className=" survey-detail-subheading "  >{props.surveyNumber}</span>


                <div className=" h-75  position-relative d-flex flex-row justify-content-between" style={{ top: "19%", right: "1%", width: "18%" }} >
                    <button className="rounded-circle   position-relative " style={{ width: "14%", height: "50%", border: "none", marginTop: "9%" }} />
                    <span className="sd-1">{props.passive}</span>
                </div>

            </div>

            <div className="   d-flex flex-row justify-content-between  position-relative " style={{ width: "90%", height: "15%", left: "5%", bottom: "20%" }}>

                <span className="camera2">{props.title}</span>
                <img src={arrow} style={{cursor:"pointer"}} onClick={ props.onClick}  />

            </div>
              {/* {isSurveyDetails && <SurveyResultDetails/>} */}
        </>
    )


}
export default SurveyResultPerson;