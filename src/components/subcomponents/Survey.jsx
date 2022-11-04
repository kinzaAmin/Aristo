import React, { useEffect } from "react";
import close from "../../assets/images/peopleclose.png";
import active from "../../assets/images/active.png";
import timer from "../../assets/images/timer.png";
import cleaner from "../../assets/images/cleaner.png";
import closee from "../../assets/images/crossx.png";
import add from "../../assets/images/add.png";
import plus from "../../assets/images/plus.png";
import QuestionDelete from "./QuestionDelete";
import info from "../../assets/images/info.png";
import edit from "../../assets/images/pencil.png";
import Questionlist from "../../assets/images/questionlist.png";
import { useState } from "react";
import SurveyResults from "./SurveyResults";
import MultipleChoice from "../subcomponents/MultipleChoice";
import Classic from "./Classic";
import Timer from "./Timer";

//import { useSlotProps } from "@mui/base";
//import QuestionDelete from "./QuestionDelete";
//import{ AddBoxIcon} from '../../@mui/icons-material';
const Survey = (props) => {

    const [isQuestionDelete, setQuestionDelete] = useState(false)
    const [isMultipleChoice, setMultipleChoice] = useState(false)
    const [isEditMcq, setEditMcq] = useState(false)
    const [isSurveyResult, setSurveyResult] = useState(false)
    const [isResultShow, setResultShow] = useState(true)
    const [isClassic, setClassic] = useState(false)
    const [isTimer, setTimer] = useState(false)
    //const [isGroupTraniee ,setGroupTraniee] = useState(false)
    //const[isShowMcqEdit , setShowMcqEdit] = useState(true)
    const deleteQuestion = () => {
        setQuestionDelete(false)

    }
    const handleClose = () => {
        setMultipleChoice(false)
    }
    const handleShow = () => {
        setMultipleChoice(true)
    }
    const handleShowMultipleChoice = () => {
        setMultipleChoice(false)
        setEditMcq(true)
    }
    const handleCloseSurveyResult = () => {
        setSurveyResult(false)
    }
    const ShowClassic = () => {
        setClassic(!isClassic)
        setEditMcq(false)
        setMultipleChoice(false)
    }

    const showMultipleChoice = () => {
        setClassic(false)
        setEditMcq(!isEditMcq)
        setMultipleChoice(false)
    }
    const handleTimermodal = () => {
        setTimer(false)
    }


    // useEffect(() => {
    //     setTimer(true)
    // }, [isTimer])


    return (

        <>
            {isResultShow ? <div className="   d-flex flex-column , position-absolute" style={{ marginTop: "-40%", height: "96%", width: "24%", left: "72%", backgroundColor: "#1B1B1B", overflowX: "hidden", overflowY: "hidden" }}     >


                <div className="   d-flex flex-column"  >

                    <div className="w-100 p-3 h-100 ">


                        <div className=" d-flex flex-row   justify-content-between position-relative" style={{ width: "70%", height: "8%" }} >

                            <div style={{ width: "10%", height: "10%" }} onClick={props.onHide} >
                                <img src={close} style={{ cursor: "pointer" }} />
                            </div>

                            <div className="d-flex flex-column   " style={{ width: "50%", height: "100%" }}  >
                                <span className="camera position-relative" style={{ left: "15%" }}> Soru-Cevap</span>
                                <img src={active} />

                            </div>



                        </div>

                        <div className="  d-flex flex-row position-relative justify-content-between" style={{ marginTop: "11%", height: "20%", left: "29%", width: "40%" }} >


                            <div className=" rounded-circle d-flex flex-column position-relative" style={{ border: "1px solid #FFFFFF", width: "29%", height: "45px", alignItems: "center", alignContent: "center" }}>

                                <div style={{ position: "relative", alignContent: "center", alignItems: "center", top: "9px", cursor: "pointer" }} onClick={() => setTimer(!isTimer)}>

                                    <img alt="timer-icon " src={timer} />

                                </div>

                                <div style={{ position: "relative", top: "50%" }}>
                                    <span className="surveysubtitle"> Zamanlayıcı</span>
                                </div>


                            </div>

                            <div className=" rounded-circle  d-flex flex-column " style={{ border: "1px solid #FFFFFF", width: "29%", height: "45px", alignItems: "center", alignContent: "center" }}>


                                <div style={{ position: "relative", alignContent: "center", alignItems: "center", top: "9px" }}>

                                    <img alt="timer-icon " src={cleaner} />

                                </div>


                                <div style={{ position: "relative", top: "50%" }}>
                                    <span className="surveysubtitle"> Temizle</span>
                                </div>
                            </div>


                        </div>




                        <div className=" d-flex flex-column  position-relative" style={{ width: "60%", height: "20%", top: "30%", left: "6%" }}>

                            <div className="d-flex flex-column    position-relative" style={{ width: "50%", height: "100%", borderBottom: "1px solid #0E48F6", position: "relative" }}  >
                                <span className="camera2 position-relative" style={{ top: "35%" }}> Anket Başlığı</span>

                            </div>

                        </div>



                    </div>


                    {isEditMcq ? <div className=" d-flex flex-column justify-content-between" style={{ width: "79%", height: "100%", marginTop: "5%", marginLeft: "10%" }} onClick={handleShowMultipleChoice} >


                        <div className="d-flex flex-row rounded justify-content-between" style={{ border: "1px solid #DA00FF", width: "100%", height: "80%" }}>

                            <span className="survey-detail-subheading position-relative" style={{ top: "20%", left: "4%" }}    >Örnek Soru 1</span>
                            <div className="d-flex flex-row rounded justify-content-between " style={{ width: "20%", height: "90%", position: "relative", right: "4%" }}>
                                <img src={edit} style={{ width: "25%", height: "60%", position: "relative", top: "27%" }} />
                                <span className="sd-1" style={{ position: "relative", marginTop: "7%" }}>Düzenle</span>
                            </div>

                        </div>

                        <div className="d-flex flex-row rounded justify-content-between" style={{ border: "1px solid #DA00FF", width: "100%", height: "80%%", marginTop: "5%" }}>

                            <span className="survey-detail-subheading position-relative " style={{ top: "20%", left: "4%" }}>Örnek Soru 1</span>
                            <div className="d-flex flex-row rounded justify-content-between " style={{ width: "20%", height: "90%", position: "relative", right: "4%" }}>
                                <img src={edit} style={{ width: "25%", height: "60%", position: "relative", top: "27%" }} />
                                <span className="sd-1" style={{ position: "relative", marginTop: "7%" }}>Düzenle</span>
                            </div>

                        </div>


                    </div> : ""}


                    <div className="d-flex flex-column " style={{ height: "70%", width: "80%", marginLeft: "10%" }} >

                        <div className="rounded-circle" style={{ border: "1px solid #DA00FF", width: "6%", height: "22px", position: "relative", top: "12px", left: "95%", zIndex: "3", cursor: "pointer" }}>

                            <img alt="" src={closee} style={{ position: "relative", left: "5px", bottom: "3px", width: "50%", height: "50%" }} onClick={() => setQuestionDelete(!isQuestionDelete)} />
                        </div>


                        {isClassic ? <Classic /> :



                            <div className="  rounded  " style={{ width: "98%", height: "70%", border: "1px solid #DA00FF", position: "relative", zIndex: "1" }}>




                                <div className="rounded " style={{ width: "90%", height: "17%", position: "relative", marginTop: "10%", left: "5%", right: "5%" }}>

                                    <div className="" style={{ width: "90%", height: "70%", position: "relative", left: "4%" }} >
                                        <div className="rounded" style={{ width: "100%", height: "100%" }}>
                                            <textarea className="rounded  surveytextarea" style={{ borderBottom: " 2px solid #0E48F6", outline: "none" }} type="text" placeholder="Örnek Soru 1" rows="2" cols="38" maxLength="300" />
                                        </div>
                                    </div>



                                    <div className=" position-relative d-flex flex-row justify-content-between" style={{ width: "100%", height: "70%", marginTop: "12%" }} >



                                        <div className="position-relative" style={{ width: "16%", height: "50%" }}>
                                            <input type="radio" className="position-relative" style={{ width: "26px", height: "30px", marginTop: "20%" }} />
                                        </div>

                                        <div className="rounded position-relative d-flex flex-row" style={{ width: "100%", height: "80%", left: "10px" }}>


                                            <div >

                                                <textarea className="rounded  surveytextarea" style={{ borderBottom: " 2px solid #0E48F6", zIndex: "-1", outline: "none" }} type="text" placeholder="1. Seçenek" maxLength="300" rows="2" cols="33" />

                                            </div>




                                            <div className="rounded-circle" style={{ backgroundColor: "#EA4949", width: "20px", height: "18px", position: "relative", zIndex: "2", right: "5%", bottom: "7px", cursor: "pointer" }}>

                                                <img alt="" src={closee} style={{ position: "relative", left: "7px", bottom: "5px" }} />

                                            </div>


                                        </div>





                                    </div>

                                    <div className="surveytextareasize" style={{ position: "relative", left: "90%", top: "4%" }}>
                                        0/300
                                    </div>


                                </div>




                                <div className="rounded " style={{ width: "90%", height: "15%", position: "relative", top: "15px", left: "5%", right: "5%" }}>




                                    <div className="   position-relative d-flex flex-row justify-content-between" style={{ width: "100%", height: "70%", marginTop: "25%" }} >



                                        <div className="position-relative" style={{ width: "16%", height: "50%" }}>
                                            <input type="radio" className="position-relative" style={{ width: "26px", height: "30px", marginTop: "10%" }} />
                                        </div>

                                        <div className="rounded position-relative d-flex flex-row" style={{ width: "100%", height: "80%", left: "10px" }}>


                                            <div >

                                                <textarea className="rounded  surveytextarea" style={{ borderBottom: " 2px solid #0E48F6", outline: "none" }} type="text" placeholder="1. Seçenek" rows="2" cols="33" maxLength="300" />

                                            </div>




                                            <div className="rounded-circle" style={{ backgroundColor: "#EA4949", width: "20px", height: "18px", position: "relative", right: "5%", bottom: "7px", cursor: "pointer" }}>

                                                <img alt="" src={closee} style={{ position: "relative", left: "8px", bottom: "5px" }} />

                                            </div>


                                        </div>





                                    </div>

                                    <div className="surveytextareasize" style={{ position: "relative", left: "90%", top: "10%" }}>
                                        0/300
                                    </div>


                                </div>












                                <div className="d-flex flex-row  justify-content-between " style={{ width: "40%", height: "20%", position: "relative", left: "5%", top: "10%" }}>

                                    <div className="rounded-circle" style={{ width: "12%", height: "20%", background: "white", position: "relative", cursor: "pointer" }}>
                                        <img alt="" src={add} style={{ width: "40%", height: "40%", position: "relative", left: "30%", bottom: "6px" }} />

                                    </div>


                                    <div className="subtitle3" style={{ position: "relative", top: "5px", letterSpacing: "1px", right: "12%" }}>
                                        Seçenek ekleyin
                                    </div>


                                </div>



                                <div className="rounded" style={{ width: "30%", height: "50px", border: "2px solid #FFFFFF", boxShadow: "0px 4px 20px #8532E6", position: "relative", left: "58%", marginBottom: "16%", cursor: "pointer" }}>

                                    <span className=" surveybtn1" style={{ width: "80%", height: "100%", position: "relative", left: "36%", top: "20%" }}>Kaydet</span>

                                </div>



                            </div>}





                        <div className="d-flex flex-row   justify-content-between" style={{ width: "40%", height: "40%", position: "relative", marginTop: "5%", left: "35%" }}>

                            <div className="bg-primary rounded" style={{ width: "35%", height: "40px", position: "relative", cursor: "pointer" }} onClick={() => setMultipleChoice(!isMultipleChoice)} >
                                <img src={plus} style={{ width: "30%", height: "20px", position: "relative", left: "38%", top: "15%" }} />

                            </div>

                            <div className="position-relative" style={{ right: "25%", top: "7px" }}>
                                <span className="surveybtn2">Soru Ekle</span>
                            </div>

                        </div>




                        <button className="btn btn-primary" style={{ width: " 40%", height: "15%", position: "relative", left: "30%", top: "26px", marginBottom: "50px", cursor: "pointer" }} onClick={() => { setResultShow(false); setSurveyResult(true) }}  >

                            <span className=" button-text"  >Anketi Oluştur</span>

                        </button >







                    </div>
                </div>






                {isQuestionDelete && <QuestionDelete pic={info} heading="Kapatmak İstiyor Musun?" content=" Gerçekten çıkmak istiyor musun? " btn1=" İptal" btn2="Onayla" onHide={deleteQuestion} />}

                {/* {isSurveyResults && <SurveyResults />} */}
            </div> : ""}


            {isSurveyResult && <SurveyResults onHide={handleCloseSurveyResult} />}
            {isMultipleChoice && <MultipleChoice onShow={handleShow} onHide={handleClose} pic={Questionlist} heading="Çoktan Seçmeli veya Klasik" content=" Bir sonraki sorunuz için çoktan seçmeli   veya klasik türlerinden birini seçiniz. " btn1=" Çoktan Seçmeli" btn2="Klasik" handleClassic={ShowClassic} handleMultipleChoice={showMultipleChoice} />}
            {isTimer && <Timer onHide={handleTimermodal} />}
        </>

    )
}

export default Survey;