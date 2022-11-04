import React from "react";

const Textarea = (props) => {
    return (

      

            

        <div style= {{width:"80%" , height:"50%" , position:"relative" , left:"14%" , top:"8%"}}   onClick={props.display}>

             
             <div  className="rounded"  style={{width:"100%"  , height:"50%" , border:"1px solid #7600FF"}} >
             <textarea  placeholder="Lütfen bu alana sorunuzu yazınız"  rows="4" cols="30"  style={{width:"100%"  , height:"100%"}} className="rounded"/>
                </div>
             <div>
                <span>İsminiz ve sorunuz kaydedilecek.</span>
             </div>

             <div className="d-flex flex-row bg-warning justify-content-between  position-relative" style={{width:"70%"  , height:"10%" , left:"30%" , top:"7%"}}>

             <button className="btn btn-light" style={{width:"40%" , height:"80%"}} >İptal</button>
                <button className="btn btn-primary"  style={{width:"40%"  , height:"80%"}}  onClick={props.onHide} >Gönder</button>
             
             </div>

        </div>
       
    )
}
export default Textarea;