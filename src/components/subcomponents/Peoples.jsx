import React from "react";
import peopleclose from "../../assets/images/peopleclose.png";
import active from "../../assets/images/active.png";
import displaypic from "../../assets/images/displaypic.png"
import mic1 from "../../assets/images/mic1.png";
import cam1 from "../../assets/images/cam1.png";
const People = (props) => {


    return (

        <div className="people-container   d-flex flex-column  " style={{ width: "40%", height: "100% ", marginTop: "-40%" , zIndex:"3" , backgroundColor:"#1B1B1B" }} onShow={props.showw} >


            <div className="header  d-flex flex-row    justify-content-between" style={{ justifyContent: "space-between", width: "70%", height: "100%", margin: "3%" }}>
                <div className="w-100% h-100%  ">
                    <img alt="close-button" src={peopleclose} style={{ cursor: "pointer" }} onClick={props.onHide} />

                </div>

                <div className="d-flex flex-column">
                    <span className="h1">Katılımcılar</span>
                    <img alt="" src={active} />
                </div>
            </div>




            <div className=" d-flex flex-column justify-content-between  " style={{ marginTop: "5%", height: "100%", width: "100%" , paddingLeft:"4%" , paddingRight:"4%" }}>

                <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between" style={{width:"100%"}}>

                    <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between"  }}>

                        <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                            <img alt="displaypic" src={displaypic} />

                        </div>

                        <div className="d-flex flex-column position-relative " style={{right:"8%"}}   >
                            <span className="peopleComponent"  >Eğitmen Kişi 1</span>
                            <span className="peopleComponent1" style={{paddingTop:"5%"}}>Eğitmen</span>

                        </div>
                    </div>
                    <div className="d-flex flex-row  w-50% h-100%" style={{ width: "20%", justifyContent: "space-between"  }} >
                        <div className="w-100% h-100%">
                            <img alt="mic" src={mic1} />

                        </div>
                        <div className="w-100% h-100%">
                            <img alt="cam" src={cam1} />

                        </div>

                    </div>
                </div>



                <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between " style={{ marginTop: "5%" }}>
                    <div className="d-flex flex-row w-100% h-100%   " style={{ width: "45%", justifyContent: "space-between" }} >

                        <div className=" h-100%" style={{ borderRadius: "50%" }}>
                            <img alt="displaypic" src={displaypic} />

                        </div>

                        <div className="d-flex flex-column position-relative" style={{right:"8%"}} >
                            <span className="peopleComponent">Eğitmen Kişi 1</span>
                            <span className="peopleComponent1"  style={{paddingTop:"5%"}}>Eğitmen</span>

                        </div>
                    </div>
                    <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                        <div className="w-100% h-100%">
                            <img alt="mic" src={mic1} />

                        </div>
                        <div className="w-100% h-100%">
                            <img alt="cam" src={cam1} />

                        </div>

                    </div>
                </div>



                <hr style={{ border: "1px solid #B9BBBE" }} />





                <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between" style={{ marginTop: "5%" }}>
                    <div className="d-flex flex-row w-100% h-100% " style={{ width: "45%", justifyContent: "space-between" }}>

                        <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                            <img alt="displaypic" src={displaypic} />

                        </div>

                        <div className="d-flex flex-column position-relative" style={{paddingTop:"7%" , right:"8%"}}>
                            <span className="peopleComponent">Eğitmen Kişi 1</span>

                        </div>
                    </div>
                    <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }}>
                        <div className="w-100% h-100%">
                            <img alt="mic" src={mic1} />

                        </div>
                        <div className="w-100% h-100%">
                            <img alt="cam" src={cam1} />

                        </div>

                    </div>
                </div>



                <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between" style={{ marginTop: "5%" }}>
                    <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                        <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                            <img alt="displaypic" src={displaypic} />

                        </div>

                        <div className="d-flex flex-column position-relative" style={{paddingTop:"7%" , right:"8%"}}>
                            <span className="peopleComponent"  >Eğitmen Kişi 1</span>
                           
                        </div>
                    </div>
                    <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                        <div className="w-100% h-100%">
                            <img alt="mic" src={mic1} />

                        </div>
                        <div className="w-100% h-100%">
                            <img alt="cam" src={cam1} />

                        </div>

                    </div>
                </div>




                <div className="upper-content d-flex flex-row w-100% h-50%  justify-content-between" style={{ marginTop: "5%" }}>
                    <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                        <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                            <img alt="displaypic" src={displaypic} />

                        </div>

                        <div className="d-flex flex-column position-relative"   style={{paddingTop:"7%" , right:"8%"}}>
                            <span className="peopleComponent" >Eğitmen Kişi 1</span>
                          

                        </div>
                    </div>
                    <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                        <div className="w-100% h-100%">
                            <img alt="mic" src={mic1} />

                        </div>
                        <div className="w-100% h-100%">
                            <img alt="cam" src={cam1} />

                        </div>

                    </div>
                </div>



                <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between" style={{ marginTop: "5%" }}>
                    <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                        <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                            <img alt="displaypic" src={displaypic} />

                        </div>

                        <div className="d-flex flex-column position-relative"  style={{paddingTop:"7%" , right:"8%"}}>
                            <span className="peopleComponent" >Eğitmen Kişi 1</span>
                            

                        </div>
                    </div>
                    <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                        <div className="w-100% h-100%">
                            <img alt="mic" src={mic1} />

                        </div>
                        <div className="w-100% h-100%">
                            <img alt="cam" src={cam1} />

                        </div>

                    </div>
                </div>



                


                <div className="upper-content d-flex flex-row w-100% h-100%  justify-content-between" style={{ marginTop: "5%" }}>
                    <div className="d-flex flex-row  " style={{ width: "45%", justifyContent: "space-between" }}>

                        <div className="w-100% h-100%" style={{ borderRadius: "50%" }}>
                            <img alt="displaypic" src={displaypic} />

                        </div>

                        <div style={{alignItems:"center" , alignContent:"center" , marginTop:"7%" , position:"relative" , right:"8%"}}>
                            <span className="peopleComponent" >Eğitmen Kişi 1</span>
                           

                        </div>
                    </div>
                    <div className="d-flex flex-row " style={{ width: "20%", justifyContent: "space-between" }} >
                        <div className="w-100% h-100%">
                            <img alt="mic" src={mic1} />

                        </div>
                        <div className="w-100% h-100%">
                            <img alt="cam" src={cam1} />

                        </div>

                    </div>
                </div>





                





            </div>
        </div>
    )
}

export default People;