import React from "react";
import close from "../../assets/images/peopleclose.png";
import active from "../../assets/images/active.png";
import SurveyResultPerson from "./SurveyResultPerson";
import SurveyResultDetails from "./SurveyResultDetailss";
import plus from "../../assets/images/plus.png";
import { useState } from "react";
import Survey from "./Survey";
const SurveyResults = (props) => {
    //const[isSurveyResult , setSurveyResult] = useState(true)
    const [isSurveyDetails, setSurveyDetails] = useState(false)
    const [isSurveyQuestion2, setSurveyQuestion2] = useState(false)
    const [isSurveyQuestion3, setSurveyQuestion3] = useState(false)
    const [isSurveyQuestion4, setSurveyQuestion4] = useState(false)
    const [isSurveyResult , setSurveyResult]= useState(true)
    //const [isSurveyShow , setSurveyShow] =useState (false)
    const [isSurvey , setSurvey]= useState(false)

    const handleClose = () => {
        setSurvey(false)

    }
   



    return (

       <>

      { isSurveyResult ? <div className=" d-flex flex-column   position-absolute" style={{ width: "25%", height: "96%", backgroundColor: "#1B1B1B", overflowY: "scroll", overflowX: "hidden" , scrollbarWidth:"thin" ,left:"73%" , bottom:"2%" }}   >

            <div className=" d-flex flex-row   justify-content-between position-relative" style={{ width: "70%", height: "8%" }} >

                <div style={{ width: "10%", height: "10%" }} onClick={props.onHide}  >
                    <img src={close}  style={{ cursor: "pointer", position: "relative", top: "10px", left: "60%" }}   />
                </div>

                <div className="d-flex flex-column   " style={{ width: "50%", height: "100%" }}  >
                    <span className="camera position-relative" style={{ left: "25%" }}> Anket</span>
                    <img src={active} />

                </div>



            </div>


          




            <div className="d-flex flex-column  w-75 rounded justify-content-between " style={{ left: "15%", height: '10%', position: "relative", border: "1px solid #DA00FF" }}  >

                <SurveyResultPerson surveyNumber=" Anket 1/4" passive="Pasif" title="Anket Başlığı" onClick={() => setSurveyDetails(!isSurveyDetails)} />

            </div>




            {isSurveyDetails && <div className=" w-75  position-relative rounded " style={{ left: "15%", border: "1px solid #DA00FF", height: "50%", top: "2%" , zIndex:"2" }} >


                <SurveyResultDetails surveyNo=" Anket 1 / 4" passive=" Pasif" Question1=" Anket Soru 1" answer1=" Anket Cevap 1" numberOfAnswers="13 Cevap" answer2=" Anket Cevap 2" totalanswers=" 7 Cevap" onHide={() => setSurveyDetails(false)} />


            </div>}



            <div className="d-flex flex-column  w-75 rounded justify-content-between " style={{ left: "15%", height: '10%', position: "relative", border: "1px solid #DA00FF", top: "6%" }}  >

                <SurveyResultPerson surveyNumber=" Anket 1/4" passive="Pasif" title="Anket Başlığı" onClick={() => setSurveyQuestion2(!isSurveyQuestion2)} />

            </div>


            {isSurveyQuestion2 && <div className=" w-75  position-relative rounded" style={{ left: "15%", border: "1px solid #DA00FF", height: "50%", top: "8%" }} >


                <SurveyResultDetails surveyNo=" Anket 2 / 4" passive="Aktif " Question1=" Anket Soru 2" answer1=" Anket Cevap 1" numberOfAnswers="13 Cevap" answer2=" Anket Cevap 2" totalanswers=" 7 Cevap"  onHide={() => setSurveyQuestion2(false)}/>


            </div>}



            <div className="d-flex flex-column  w-75 rounded justify-content-between " style={{ height: '10%', position: "relative", left: "15%", border: "1px solid #DA00FF", top: "10%" }}  >

                <SurveyResultPerson surveyNumber=" Anket 3/4" passive="Aktif" title="Anket Başlığı" onClick={() => setSurveyQuestion3(!isSurveyQuestion3)} />

            </div>

            {isSurveyQuestion3 && <div className=" w-75  position-relative rounded" style={{ top: "12%", left: "15%", border: "1px solid #DA00FF", height: "50%" }} >


                <SurveyResultDetails surveyNo=" Anket 3/ 4" passive="Aktif " Question1=" Anket Soru 2" answer1=" Anket Cevap 1" numberOfAnswers="13 Cevap" answer2=" Anket Cevap 2" totalanswers=" 7 Cevap" onHide={() => setSurveyQuestion3(false)} />


            </div>}



            <div className="d-flex flex-column  w-75 rounded justify-content-between " style={{ height: '10%', position: "relative", left: "15%", border: "1px solid #DA00FF", top: "14%" }}  >

                <SurveyResultPerson surveyNumber=" Anket 4/4" passive="Aktif" title="Anket Başlığı" onClick={() => setSurveyQuestion4(!isSurveyQuestion4)} />

            </div>

            {isSurveyQuestion4 && <div className=" w-75  position-relative rounded" style={{ top: "16%", left: "15%", border: "1px solid #DA00FF", height: "50%" }} >


                <SurveyResultDetails surveyNo=" Anket 4 / 4" passive="Aktif " Question1=" Anket Soru 2" answer1=" Anket Cevap 1" numberOfAnswers="13 Cevap" answer2=" Anket Cevap 2" totalanswers=" 7 Cevap" onHide={() => setSurveyQuestion4(false)} />


            </div>}

           


            <div className="d-flex flex-row   justify-content-between " style={{ width: "45%", height: "6%", position: "relative", left: "35%" , marginTop:"40%" }}  >

                <div className="bg-primary rounded" style={{ width: "40%", height: "40px", position: "relative", cursor: "pointer" , top:"8%"}}  onClick={ ()=> { setSurveyResult(false) ; setSurvey(true) }}  >
                    <img src={plus} style={{ width: "30%", height: "20px", position: "relative", left: "38%", top: "15%" }} />

                </div>

                <div className="position-relative" style={{ right: "25%", top: "15%" , right:"8%"  }}   >
                    <span className="surveybtn2">Yeni Anket Oluştur</span>
                </div>

            </div>

        </div> :  ""}
        {isSurvey && <Survey onHide={handleClose}/>}
        
        </>
    )
}

export default SurveyResults;