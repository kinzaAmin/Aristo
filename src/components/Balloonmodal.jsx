import React from "react";
//import "../assets/style/Screensharemodal.scss"
//import Center3 from "./subcomponents/Screenshare-center3";
import Center4 from "./subcomponents/Balloonmodal-center";
import "../assets/style/Balloonmodal.scss";
import closebtn from "../assets/images/modalclosebtn.png"
import active from "../assets/images/active.png"
import { useState } from "react";
import Addquestion from "./subcomponents/AddQuestions";
import Survey from "./subcomponents/Survey";
import Questionmodal from "./subcomponents/Questionsmodal";
import questionlist from "../assets/images/questionlist.png";
import GroupTraniee from "./subcomponents/GroupTraniee";
// import notepad from "../assets/images/notepad.png";
const Balloonmodal = (props) => {
    const [isAddquestion, setAddquestion] = useState(false)
    const [isQuestionsModalVisible, setQuestionModalVisible] = useState(true)
    const [isNotepadmodal, setNotepadmodal] = useState(true)
    const [isSurvey, setSurvey] = useState(false)
    const [isQuestionmodal, setQuestionmodal] = useState(false)
    const [isGroupTraniee, setGroupTraniee] = useState(false)

    const AddQuestionShow = () => {
        setAddquestion(true)
    }
    const handleClose = () => {
        setAddquestion(false)
    }
    const handleSurvey = () => {
        setSurvey(!isSurvey)
        setNotepadmodal(false)
        setQuestionmodal(false)
    }

    const closeSurvey = () => {
        setSurvey(false)
    }
    const showNotepad = () => {
        setQuestionmodal(true)
        setSurvey(false)
    }

    const hideNotepadquestionmodal = () => {
        setQuestionmodal(false)
    }
    const handleGroupp = () => {
        setGroupTraniee(true)
    }
    const handleHide = () => {
        setGroupTraniee(false)
    }



    return (
        <>

            {isQuestionsModalVisible && <div className="ballonmodal-contaier" onShow={props.show} onClick={() => setQuestionModalVisible(!isQuestionsModalVisible)}>


                {isNotepadmodal && <div className="modal-center"  >
                    <div className="-upper d-flex flex-row   justify-content-between w-80%" style={{ marginRight: "8%" }} >

                        <div>
                            <img alt="close-button" src={closebtn} onClick={props.onHide} style={{ cursor: "pointer", position: "relative" }} />

                        </div>


                        <div className="modal-heading">
                            <div className="d-flex flex-column">
                                <span className="screenmodal1 " >
                                    Ekranlar
                                </span>
                                <div style={{ position: "relative", right: "10%" }}>
                                    <img alt="heading-nderline" src={active} />
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="screen-view">

                        <Center4 handleAddQuestions={AddQuestionShow} Survey={handleSurvey} handleNotepade={showNotepad} handleGroupTraniee={handleGroupp} />


                    </div>



                </div>}


            </div>}


            {isAddquestion && <Addquestion onHide={handleClose} />}
            {isSurvey && <Survey onHide={closeSurvey} />}
            {isQuestionmodal && <Questionmodal heading="Anketleri Cevaplayın" text="Eğitmeniniz anket oluşturduğunda, anket ekranına erişebilirsiniz." buttontext="Anladım" pic={questionlist} onHide={hideNotepadquestionmodal} />}
            {isGroupTraniee && <GroupTraniee onHide={handleHide} />}


        </>
    )


}
export default Balloonmodal;