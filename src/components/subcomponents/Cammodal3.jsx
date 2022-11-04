import React from "react";
import "../../assets/style/cammodal3.scss";
import closebtn from "../../assets/images/modalclosebtn.png";
import line from "../../assets/images/active.png";
//import background from "../../assets/images/backgroundimg.png";
import camera from "../../assets/images/camera1.png";
const Cammodal3 = (props) => {
    return (

        <div className="containermadal3" onShow={props.disp}>


            <div className="cammodal3-div1">

                <div style={{ width: "20%", height: "20%", cursor: "pointer" }}>
                    <img alt="closebtn" src={closebtn} onClick={props.onHide} />
                </div>

                <div className="div1-content d-flex flex-column" >

                    <span style={{ width: "100%", height: "60%", position: "relative", top: "5%"  }}  className="camera">Görüntüyü Test Et</span>

                    <img alt="underline" src={line} style={{ width: "100%", height: "10%" , position:"relative" , right:"15%"}} />

                </div>

            </div>



            <div className="cammodal3-div2">


                <div className="cammodal3-div2content">

                    <div style={{ width: "100%", height: "100%", backgroundColor: "#373737" , borderRadius:"3%" }} />

                    <img alt="camera" src={camera} style={{width:"23%" , height:"30%" , position:"relative" , bottom:"68%" , left:"42%" }}/>


                </div>
            </div>




         <div className="cammodal3-div3">

            <div className="btn  camera2" >
            Görüntüyü Test Et
            </div>

         </div>


        </div>
    )
}

export default Cammodal3;