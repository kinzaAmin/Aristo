import React, { useState } from "react";
import notepad from "../../assets/images/notepad.png";
import group from "../../assets/images/group.png";
import question from "../../assets/images/questionmark.png";
//import "../../assets/style/Screensharemodal.scss";
import "../../assets/style/Balloonmodal.scss";
import Questionmodal from "./Questionsmodal";
import questionlist from "../../assets/images/questionlist.png";
import questionmark from "../../assets/images/questionmark1.png";
//import WhiteBoard from "./Whiteboard";
//import Anket from "./Anket";
//import Addquestion from "./AddQuestions";



const Center4 = (props) => {



    const [isnotepad, setnotepad] = useState(false)
    const [isquestion, setquestion] = useState(false)
    //const [isWhiteBoard, setWhiteBoard] = useState(false)
    // const[isquestionmodal , setquestionmodal] = useState(true)
    //const[isquestionmodal , setquestionmodal]= useState(false)


    const handleclose = () => {
        setnotepad(false)
    }



    return (
        <>
            <div className="center4-container d-flex flex-column "  >

                <div className="w-60 h-100 d-flex flex-row  " >


                    <div className="center4-imgcontainer" style={{ width: "100%", height: "100%" }} onClick={props.Survey}  >
                        <img alt="" src={notepad} className="img " style={{ marginLeft: "40%", marginTop: "5%", paddingBottom: "5%", cursor: "pointer" }} />
                    </div>

                    <div className="center4-imgcontainer" style={{ marginLeft: "3%", width: "100%", height: "100%" }} onClick={props.handleGroupTraniee} >

                        <img alt="" src={group} className="img  " style={{ marginLeft: "35%", marginTop: "6%", paddingBottom: "5%", cursor: "pointer" }} />


                    </div>

                    <div className="center4-imgcontainer " style={{ marginLeft: "3%", width: "100%", height: "100%", cursor: "pointer" }} onClick={props.handleAddQuestions}>


                        {/* onClick={ () => setAddquestion(!isAddquestion)} */}


                        <img alt="" src={question} className="img" style={{ marginLeft: "40%", marginTop: "8%", paddingBottom: "2%", cursor: "pointer" }} OnClick={() => setquestion(!isquestion)} />


                    </div>

                </div>


                <div className="d-flex flex-row  justify-content-between      pl-100  " style={{ width: "90%", paddingLeft: "10%", position: "relative", top: "10%", left: "5%", marginTop: "5%" }}  >

                    <span className="screen-sharemodal-center " onClick={props.handleNotepade}>Anket</span>
                    <span className="screen-sharemodal-center " >Grup Odası</span>
                    <span className="screen-sharemodal-center"   >Soru - Cevap</span>

                </div>




            </div>

            {isnotepad && <Questionmodal heading="Anketleri Cevaplayın" text="Eğitmeniniz anket oluşturduğunda, anket ekranına erişebilirsiniz." buttontext="Anladım" pic={questionlist} onHHide={() => setnotepad(false)} />}
            {isquestion && <Questionmodal heading="Soru - Cevap" text="Eğitmeniniz Soru - Cevap oluşturduğunda, anket ekranına erişebilirsiniz." buttontext="Anladım" pic={questionmark} onHHide={handleclose} />}
            {/* {isAddquestion && <Addquestion/>}  */}

        </>
    )
}
export default Center4;