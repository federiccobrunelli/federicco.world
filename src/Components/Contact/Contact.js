
import React from "react";
//import { Link } from 'react-router-dom';
import contact_pic from "./contact_picture.png"






export function Contact() {

  return (


                <div className="Contact">
                <h1 className="contact_title">Contacts</h1>
                <img className="contact_pic" src={contact_pic} alt=""/>
                <div className="black_div"></div>
                <div className="contact_p">



                  <div className="text">
                  <h3>Brunelli Federico</h3>
                  <br/>
                  <h3>+49 162 337 67 55</h3>
                  <h3>brunelliifederico@gmail.com</h3>
                  <br/>
                  <h3>IG @FedericcoBrunelli</h3>
                  <h3>Linkedin @Brunelli Federico</h3>
                  </div>

                  {/* <img  className="qr"src={qr_code} alt="qr code"/> */}




                </div>
            </div>


  );
}




