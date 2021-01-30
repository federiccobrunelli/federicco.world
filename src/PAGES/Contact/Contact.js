import React from "react";
import contact_pic from "./media/contact_picture.png";
import instagram from "./media/instagram.png";
import linkedin from "./media/linkedin.png";
import github from "./media/github.png";
import fiverr from "./media/fiverr.png"
import dribbble from "./media/dribbble.png"






export function Contact() {

  return (


                <div className="Contact">
                <div className="contact_title">Contact</div>
                <img className="contact_pic" src={contact_pic} alt=""/>
                <div className="black_div"></div>
                <div className="contact_p">



                  <div className="text">
                  

                  <h3 className="name">Brunelli Federico</h3>
                  
                  <h3>+49 162 337 67 55</h3>
                  <h3>federiccoworld@gmail.com</h3>
                  <br/>

                  <a href="https://www.instagram.com/federiccobrunelli/" target="_blank" rel="noopener noreferrer">
                    <img className="instagram hyperlink" src={instagram} alt="link to instagram"/>
                  </a>

                  <a href="https://www.linkedin.com/in/federico-brunelli-5aba08199/" target="_blank" rel="noopener noreferrer">
                    <img className="linkedin hyperlink" src={linkedin} alt="link to linkedin"/>
                  </a>

                  <a href="https://github.com/federiccobrunelli" target="_blank" rel="noopener noreferrer">
                    <img className="github hyperlink" src={github} alt="link to github"/>
                  </a>

                  <a href="https://dribbble.com/Federicco" target="_blank" rel="noopener noreferrer">
                    <img className="linkedin hyperlink" src={dribbble} alt="link to dribbble"/>
                  </a>

                  <a href="https://www.fiverr.com/federiccob" target="_blank" rel="noopener noreferrer">
                    <img className="github hyperlink" src={fiverr} alt="link to fiverr"/>
                  </a>

                  <br/>
                  </div>

                </div>
            </div>


  );
}




