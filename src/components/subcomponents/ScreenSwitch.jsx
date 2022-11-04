import React from "react";
import { Switch } from "@mui/material";
const Screenswitch = () => {
    return (
    <>
        <div className=" d-flex flex-row msg-text" style={{ width: '14%', height: "10%", backgroundColor: "#1B1B1B"  , position:"absolute" , left:"40%" , bottom:"18%" , alignItems:"center" , borderRadius:"10px" , letterSpacing:"2px" }}>
           <Switch color="success"/>
            <span>Ekran paylaşırken sistem bildirimlerini sustur.</span>

        </div> 
        
        </> 
    );
}
export default Screenswitch;