import React from "react";
import icon1 from "../../assets/images/icon1.png";
//import swtich from "../../assets/images/swtich.png";
import hr from "../..//assets/images/hr.png";
import closebtn from "../../assets/images/modalclosebtn.png";
import "../../assets/style/micmodal.scss";
import Micmodal2 from "./Micmodal2";
import { useState } from "react";
import Micsetting from "./Micsetting";
import { Switch } from "@mui/material";
//import Cammodal3 from "./Cammodal3";
const Micmodal = (props) => {

const [ismicmodal2 , setmicmodal2] = useState(false);
const[ismicmodall2 , setmicmodall2 ]= useState(false);
const[ismicsetting , setmicsetting] = useState(false)
const hide =() => {
    setmicmodal2(false)
}
const hiidde =() => {
    setmicmodall2(false)

}

const diasppear =() => {
    setmicsetting(false)
}



    return (

        <div className="micmodal-main" >


            <div className="micmodal-content d-flex flex-column"  >

                <div style={{width:"10%" , height:"10%" , position:"relative" , right:"40%"}}>
                      <img alt="closebtn" src={closebtn} style={{cursor:"pointer"}} onClick={props.onHide}  />
                </div>

                {/* <div style={{ width: "100%", height: "100%" , display: "flex", flexDirection: "column"}}> */}

                <div className="micmodal-div1"  >

                    <div style={{ width: "100%", height: "100%", display: "flex" , justifyContent:"space-between" , cursor:"pointer" }}  onClick={ () => setmicmodal2(!ismicmodal2)} >

                        <div style={{ width: "70%", height: "100%"   }}>
                            <span style={{textDecoration:"underline" , lineHeight:"-0.5em" , letterSpacing:"-0.05em" }} className="micmodalspan">{props.text1}</span>
                        </div>


                        <div style={{ width: "10%", height: "  100%" }}>
                            <img src={icon1}  />
                        </div>


                    </div>



                    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", top: "22%"  , alignItems:"center"  , justifyContent:"space-between" , cursor:"pointer"  }}   onClick={ () => setmicmodall2(!ismicmodall2)} >

                        <div style={{ width: "70%", height: "100%"  }}>
                            <span  style={{textDecoration:"underline" , lineHeight:"-0.5em" , letterSpacing:"-0.05em"}}   className="micmodalspan">A{props.text2}</span>
                        </div>


                        <div style={{ width: "10%", height: "100%" }}>
                            <img src={icon1}  />
                        </div>


                    </div>


                </div>



                <img alt="hr" src={hr} style={{width:"90%" , position:"relative" , top:"9%"}}/>




                <div className="micmodal-div2" >


                    <div style={{ width: "100%", height: "100%", position: "relative" ,  paddingTop:"5%"}}>
                        <span className="micmodal-span2"  style={{lineHeight:"30px" , letterSpacing:"2px" , cursor:"pointer"}} onClick={ () => setmicsetting(!ismicsetting)}>{props.text3}</span>

                    </div>

                </div>


                <img alt="hr" src={hr} style={{width:"90%" , position:"relative" , bottom:"5%"}} />




                <div className="micmodal-div3"  >

                    <div style={{ width: "100%", height: "100%", display: "flex" }}>


                        <div style={{ width: "20%", height: "  100%",  position:"relative" , paddingTop:"5%"}}>
                            <Switch color="success"/>
                            {/* <img alt="" src={swtich} style={{cursor:"pointer"}} /> */}
                        </div>


                        <div style={{ width: "70%", height: "100%",  paddingTop:"3%"  }}>
                            <span className="micmodal-span2"  style={{lineHeight:"20px" , letterSpacing:"2px"}}>{props.text4}</span>
                        </div>


                    </div>

                </div>



            </div>

                      {ismicmodal2 && <Micmodal2 onHide={hide} option1="MİKTROFON SEÇ"  option2="TuneTune HD Mic" option3="Ultra HD Sony Mic" option4="Ultra HD Samsung Mic"/>}
                      {ismicmodall2 && <Micmodal2 onHide={hiidde} option1="SES ÇIKIŞI SEÇ"  option2="TuneTune HD Hoparlör" option3="Ultra HD Sony Hoparlör" option4="Ultra HD Samsung Hop." />}
                    {ismicsetting && <Micsetting onHide={diasppear}/>}
       
        </div>
    )
}

export default Micmodal;