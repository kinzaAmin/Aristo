import React from "react";
//import mans3 from "../../assets/images/mans3.png"
import arrow1 from "../../assets/images/arrow1.png";
import girl2 from "../../assets/images/girl2.png";
import arrow2 from "../../assets/images/arrow2.png";
import ScreenNotshareImg from "./ScreenNotsharing";
import ScreenshareImg from "./screenShare-img";
//import Form from "./Form";
//import WhiteBoard from "./Whiteboard";
import { useState } from "react";
//import { useSlotProps } from "@mui/base";
const S3center = () => {


    const [isscrennsharing, setScreennsharing] = useState(<ScreenNotshareImg/>)
   
    

    const disp = () => {
        setScreennsharing(false)
    }
    const remove = () => {
        setScreennsharing(false)
    }

    return (

        <>
            <div className="s3center-upper1" >
                {isscrennsharing ? <ScreenNotshareImg onShow={disp} onHide={remove} /> : <ScreenshareImg />}

                {/* <ScreenNotshareImg/> */}
                {/* <ScreenshareImg/> */}
                {/* <img alt="" src={mans3} style={{ width: "100%", height: "100%" }} /> */}
            </div>
            <div className="d-flex flex-row " style={{ justifyContent: "space-between", width: "100%", height: "100%", alignItems: "center", alignContent: "center", paddingRight:"8%", marginTop: "3%" , position:"relative" , left:"5%" }} >

                <div className="s3center-upper2 "   >
                    <img alt="" src={arrow1} className="arrow" style={{ cursor: "pointer" }}  />
                </div>

                <div className="d-flex flex-row  justify-content-between" style={{ width: "100%", marginRight: "8%" }}>

                   <div style={{width:"100%" , height:"100%" , borderRadius:"50%" }}> <img alt="" src={girl2}  /> </div>
                   
                   <div style={{width:"100%" , height:"100%" , borderRadius:"50%" , marginLeft:"1%"}}> <img alt="" src={girl2}  /> </div>

                   <div style={{width:"100%" , height:"100%" , borderRadius:"50%" , marginLeft:"1%"}}> <img alt="" src={girl2}  /> </div>

                   <div style={{width:"100%" , height:"100%" , borderRadius:"50%"  , marginLeft:"1%"}}> <img alt="" src={girl2}  /> </div>

                  <div style={{width:"100%" , height:"100%" , borderRadius:"50%"  , marginLeft:"1%"}}>  <img alt="" src={girl2}  /> </div>

                  <div style={{width:"100%" , height:"100%" , borderRadius:"50%"  , marginLeft:"1%"}}> <img alt="" src={girl2}  />  </div> 

                   <div style={{width:"100%" , height:"100%" , borderRadius:"50%" , marginLeft:"1%"}}> <img alt="" src={girl2}  /> </div>

                   <div style={{width:"100%" , height:"100%" , borderRadius:"50%" , marginLeft:"1%"}}>  <img alt="" src={girl2}  /> </div>

                </div>

                <div className="s3center-upper2 ">
                    <img alt="" src={arrow2} style={{ cursor: "pointer" }} onClick={() => setScreennsharing(!isscrennsharing)} />
                </div>
            </div>
            
              
        </>
    )
}
export default S3center;