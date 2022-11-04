import { useSlotProps } from "@mui/base";
import React, { useState } from "react";
import { useEffect } from "react";
import Questionlist from "../../assets/images/questionlist.png";
const Timer = (props) => {

    const [Minutes, setMinutes] = useState(2)
    const [Seconds, setSeconds] = useState(59)

    var timerr
    useEffect(() => {
        timerr = setInterval(() => {
            setSeconds(Seconds - 1);

            if ( Seconds == 0) {

              (Minutes>0) ?  setMinutes(Minutes - 1) : setSeconds(Seconds)  (Minutes==0)? setMinutes(0) :setSeconds(0)
             
                   setSeconds(59);
                 
                    
                 }

            // if ( Seconds == 59) {

            //    (Minutes<10) ?  setMinutes(Minutes + 1) : setMinutes(Minutes) ; setSeconds(0)
             
                
            // }


        }, 1000);
        return () => clearInterval(timerr)

    });

    return (

        <div className=" d-flex flex-column justify-content-between rounded " style={{ width: "20%", height: "37%", position: "absolute", marginLeft: "30%", bottom: "350px", alignContent: "center", alignItems: "center" , backgroundColor:"#FFFFFF" }}>

            <div className=" position-relative" style={{ top: "6%" }}>
                <img src={Questionlist} />
            </div>

            <div className="d-flex flex-column justify-content-between  position-relative" style={{width:"70%" , height:"17%" , right:"5%" }}>
                <span className="position-relative timer-heading" style={{ left: "36%" }}>Zamanlayıcı</span>
                <span  className="position-relative  timer-content " style={{ left:"20%" , letterSpacing:"2%" }}>Aşağıdan dakika ve saniye değeri giriniz</span>
            </div>

            <div className=" position-relative " style={{width:"55%" , height:"15%" , bottom:"5%" , left:"9%"}}>
                <h1 style={{color:"#DA00FF"}}>{Minutes < 10 ? "0" + Minutes : Minutes} : {Seconds < 10 ? "0" + Seconds : Seconds < 10 ? "0" + Seconds : Seconds}</h1>
            </div>

            <div className="d-flex flex-row justify-content-between  position-relative" style={{ bottom: "9%" , width:"70%"  }}>

                <div className="btn1 modal-btn1" style={{ position: "relative", paddingLeft: "16%", paddingTop: "9px" , left:"3%" }} onClick={props.onHide}>Kapat</div>
                <div className="btn2 modal-btn2" style={{ position: "relative", paddingLeft: "35px", paddingTop: "9px" }} > Uygula </div>


            </div>

        </div>

    )
}
export default Timer;