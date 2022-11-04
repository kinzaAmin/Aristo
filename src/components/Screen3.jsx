import React from "react";
import "../assets/style/Screen3.scss";
//import man from "../assets/images/man.png";
import S3center from "./subcomponents/Screen3-center";
import Closebttn from "./subcomponents/closebtn";
//import People from "./subcomponents/Peoples";
import Lastpart from "./subcomponents/Screen2-last";
import S3upperLeft from "./subcomponents/Screen3Uppercontent";
import { useState } from "react";
import Fullscreen from "./subcomponents/Fullscreen";
//import { useState } from "react";
const Screen3 = () => {
    const [isLeftColumnVisible, setIsLeftColumnVisible] = useState(true)
    const handleChatAndUser = () => {
        setIsLeftColumnVisible(!isLeftColumnVisible)
    }

    const [isScreenmedium, setmediumscreen] = useState(true)
    const screenfull = () => {
        setmediumscreen(!isScreenmedium)
    }

    const[isForm , setForm] = useState(false)
    //    const[isWb , setWb]=useState(false)


    return (
        <div className="Screen3-container"    >

            {isScreenmedium && <div className="screen3-upparcontainer  w-100  h-60   d-flex flex-row  justify-content-between" style={{ justifyContent: "space-between" }} >

                {isLeftColumnVisible && <div className="uppercontent1 " >

                    <S3upperLeft />



                </div>}


                <div className="screen3-center">
                    <S3center  />
                </div>

                <div>
                    <Closebttn />

                </div>

            </div> ?   
            <div className="screen3-upparcontainer  w-100  h-60   d-flex flex-row  justify-content-between" style={{ justifyContent: "space-between" }} >

            {isLeftColumnVisible && <div className="uppercontent1 " >

                <S3upperLeft />



            </div>}


            <div className="screen3-center">
                <S3center  />
            </div>

            <div>
                <Closebttn />

            </div>

        </div>
            
            
            :<Fullscreen />  
            
            
            }


            {/* ? : <Fullscreen /> */}


            <div className="screen3-lower w-100% d-flex flex-row justify-content-between " style={{ marginTop: "2%" }}  >
                <Lastpart toggleChatOrUser={handleChatAndUser} screensize={screenfull} />

            </div>




        </div>
    )
}

export default Screen3;