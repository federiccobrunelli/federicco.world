
import React from "react";
import { Link } from 'react-router-dom';

import study_timer_demo from "./study_timer_demo.gif";
import federicco_world from "./federicco_world_demo.gif";








export function Work() {


  return (


            <div className="Work">




                <Link className="study_timer title" to="/work/study_timer"><span>study-timer.com</span></Link>
                <Link className="study_timer_img square" to="/work/study_timer">
                  <img src={study_timer_demo} alt="study_timer_demo"/>
                </Link>



                <Link className="federicco_world title" to="/work/federicco_world"><span>federicco.world</span></Link>
                <Link className="federicco_world_img square" to="/work/federicco_world">
                  <img src={federicco_world} alt="federicco_world"/>
                </Link>
                

            </div>




  );
}




