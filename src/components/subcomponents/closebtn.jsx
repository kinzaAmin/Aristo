import React , {useState} from "react";
import Closemodal from "../Closemodal";
import close from "../../assets/images/CLOSE.png";
import "../../assets/style/Screen2.scss";
import info from "../../assets/images/info.png";
const Closebttn = () => {

    const [ismodal, setmodal] = useState(false)
    const handleShow = () => {
        setmodal(true);
    }
    const handleClose = () => {
        setmodal(false)
    }

    return(
       
        <>
         <div className="close-btn">
                        <img alt="CLOSE BUTTON" src={close} onClick={() => setmodal(!ismodal)} className="cross-icon"  style={{cursor:"pointer"}}/>
                    </div>

                    {ismodal && <Closemodal onShow={handleShow} onHide={handleClose} pic= {info} heading="Kapatmak İstiyor Musun?"  content= " Gerçekten çıkmak istiyor musun? " btn1= " İptal"  btn2="Onayla"/>}
        </>
    )
}
export default Closebttn;