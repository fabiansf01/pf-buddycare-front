import React from "react"
import { footercontenedor, fuentefooter } from "../css/footer.css";
const Footer = () => {
    return(
        <div className="footercontenedor">
               <div class="flexbox-container">
         <div><img  src={require('../assets/face_tb.png')} width="60" height="60"/></div>
         <div><img  src={require('../assets/instagram_tg.png')} width="60" height="60"/></div>
         <div><img  src={require('../assets/email_tb.png')} width="60" height="60"/></div>
         <div><img  src={require('../assets/wap_tb.png')} width="60" height="60"/></div>
         <div><img  src={require('../assets/telegram_tg.png')} width="60" height="60"/></div>
         </div>

         <div>
        <br></br>
        <p className="fuentefooter"> (C) 2022 - Proyecto final soy Henry - Grupo 10 </p>
        </div>  


        </div>
        
    )
}

export default Footer