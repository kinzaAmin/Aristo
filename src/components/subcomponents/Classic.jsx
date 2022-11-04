import React from "react";
// import closee from "../../assets/images/crossx.png";
// import QuestionDelete from "./QuestionDelete";
// import info from "../../assets/images/info.png";
//import QuestionDelete from "./QuestionDelete";
const Classic = () => {

    //const [isQuestionDelete, setQuestionDelete] = useState(false)

    return (

        <>


            {/* <div className="rounded-circle" style={{ border: "1px solid #DA00FF", width: "6%", height: "22px", position: "relative", top: "12px", left: "95%", zIndex: "3", cursor: "pointer" }}>

                <img alt="" src={closee} style={{ position: "relative", left: "5px", bottom: "3px", width: "50%", height: "50%" }} onClick={() => setQuestionDelete(!isQuestionDelete)} />
            </div> */}

            <div className="  rounded  " style={{ width: "98%", height: "59%", border: "1px solid #DA00FF", position: "relative", zIndex: "1" }}>




                <div className="rounded " style={{ width: "90%", height: "17%", position: "relative", marginTop: "10%", left: "5%", right: "5%" }}>

                    <div className="" style={{ width: "90%", height: "70%", position: "relative", left: "4%" }} >
                        <div className="rounded" style={{ width: "100%", height: "100%" }}>
                            <textarea className="rounded  surveytextarea" style={{ borderBottom: " 2px solid #0E48F6", outline: "none" }} type="text" placeholder="Örnek Soru 1" rows="2" cols="38" maxLength="300" />
                        </div>

                        <div className="surveytextareasize" style={{ position: "relative", left: "90%", top: "10%" }}>
                            0/300
                        </div>
                    </div>



                    <div className=" position-relative d-flex flex-row justify-content-between" style={{ width: "100%", height: "90%", marginTop: "12%" }} >



                        {/* <div className="position-relative" style={{ width: "16%", height: "50%" }}>
                            <input type="radio" className="position-relative" style={{ width: "26px", height: "30px", marginTop: "20%" }} />
                        </div> */}

                        <div className="rounded position-relative d-flex flex-row" style={{ width: "100%", height: "80%", left: "10px" }}>


                            <div >

                                <textarea className="rounded  surveytextarea" style={{ borderBottom: " 2px solid #0E48F6", zIndex: "-1", outline: "none" }} type="text" placeholder="1. Seçenek" maxLength="300" rows="10" cols="40" />

                            </div>

                        </div>

                    </div>

                    <div className="surveytextareasize" style={{ position: "relative", left: "90%", top: "180%" }}>
                        0/300
                    </div>


                </div>





                <div className="rounded" style={{ width: "30%", height: "50px", border: "2px solid #FFFFFF", boxShadow: "0px 4px 20px #8532E6", position: "relative", left: "58%", marginTop: "60%", cursor: "pointer" }}>

                    <span className=" surveybtn1" style={{ width: "80%", height: "100%", position: "relative", left: "36%", top: "20%" }}>Kaydet</span>

                </div>



            </div>






        </>


    )
}
export default Classic;