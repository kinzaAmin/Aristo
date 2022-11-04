import React from "react";
import Screenshare from "../../assets/images/screenshare1.png";
const ScreenshareImg = (props) => {
    return(

        <>
         <img alt="" src={Screenshare} style={{ width: "90%", height: "20%" , position:"relative" ,left:"6%", marginBottom:"6%"  ,  boxShadow:"0px 85px 61px  rgba( 0,0,0,0.6)"}} onshow={props.disp} onHide={props.remove} />
        </>
    )
}
export default ScreenshareImg;