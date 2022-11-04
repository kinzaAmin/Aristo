import React from "react";
import man from "../../assets/images/man1.png";
import screenshare1 from "../../assets/images/screenshare1.png";
import subtract2 from "../../assets/images/Subtract2.png";
import Group4 from "../../assets/images/Group4.png";
import rectangle from "../../assets/images/Rectangle9.png";
//import Lastpart from "./Screen2-last";
const fullscreen = () => {

    return (

        <div className="" style={{ height: "90%", borderRadius: "10px", backgroundImage: `url(${screenshare1})`, backgroundRepeat: "no-repeate" }} >


            <div className="d-flex flex-row w-50   position-relative" style={{ height: "5%", left: "27%" , cursor:"pointer" }}>

                <div className="d-flex flex-row h-100  " style={{ width: "35%" , backgroundColor:"#79C88E" }}>
                    <img src={subtract2} style={{ width: "15% ", height: "50%", position: "relative", top: "23%", left: "10%" }} />
                    <span className = "subtitle6"  style={{ position: "relative", left: "27%" , top:"24%" }}>Ekranınız Paylaşılıyor</span>


                </div>


                <div className="d-flex flex-row h-100  " style={{ width: "30%" , backgroundColor:"#494949" , cursor:"pointer" }}>
                    <img src={Group4} style={{ width: "10% ", height: "50%", position: "relative", top: "20%", left: "10%" }} />
                    <span className = "subtitle6"  style={{ position: "relative", left: "30%", top:"24%"  }}>Ekranı Çiz</span>


                </div>

                <div className="d-flex flex-row h-100  " style={{ width: "35%" , backgroundColor:"#DD5D61" , cursor:"pointer" }}>
                    <img src={rectangle} style={{ width: "8% ", height: "50%", position: "relative", top: "23%", left: "10%" }} />
                    <span className = "subtitle6"  style={{ position: "relative", left: "27%" , top:"24%" }}>Paylaşmayı durdur</span>


                </div>


            </div>


            <div style={{ width: "9%", height: "20%", backgroundColor: "green", position: "relative", left: "7%", top: "8%", borderRadius: "10px" }}>

                <img src={man} style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
            </div>




        </div>
    )
}
export default fullscreen;