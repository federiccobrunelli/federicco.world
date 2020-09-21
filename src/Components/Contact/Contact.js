import React from "react";
import { Link } from 'react-router-dom';
import contact_pic from "./contact_picture.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png"
import github from "./github.png"






export function Contact() {

  return (


                <div className="Contact">
                <div className="contact_title">Contacts</div>
                <img className="contact_pic" src={contact_pic} alt=""/>
                <div className="black_div"></div>
                <div className="contact_p">



                  <div className="text">
                  

                  <h3 className="name">Brunelli Federico</h3>
                  
                  <h3>+49 162 337 67 55</h3>
                  <h3>federiccoworld@gmail.com</h3>
                  <br/>

                  <a href="https://www.instagram.com/federiccobrunelli/" target="_blank">
                    <img className="instagram hyperlink" src={instagram} alt="link to instagram"/>
                  </a>

                  <a href="https://www.linkedin.com/in/federico-brunelli-5aba08199/" target="_blank">
                    <img className="linkedin hyperlink" src={linkedin} alt="link to linkedin"/>
                  </a>

                  <a href="https://github.com/federiccobrunelli" target="_blank">
                    <img className="github hyperlink" src={github} alt="link to github"/>
                  </a>
                  
                  <br/>
                  </div>



                  {/* <img  className="qr"src={qr_code} alt="qr code"/> */}




                </div>
            </div>


  );
}




