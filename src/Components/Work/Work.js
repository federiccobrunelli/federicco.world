
import React, {useEffect, useState} from "react";
import { Link, useRouteMatch } from 'react-router-dom';

import study_timer_demo from "./study_timer_demo.gif";
import federicco_world from "./federicco_world_demo.gif";



                {/* 
                  THIS COULD BE IMPROVED USING useRouteMatch AND BECOME SOMETHING LIKE THIS:

                    First, before return () ->     
                    
                    const {path, url} = useRouteMatch()
    
                    <Link className="study_timer title" to={`${url}/study_timer`}><span>study-timer.com</span></Link>
                */}




export function Work() {
  const {path, url} = useRouteMatch()
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });


  const useMousePosition = () => {

    const updateMousePosition = e => {
      setMousePosition({ 
        x: (e.clientX/200).toFixed(2), 
        y: (e.clientY/200).toFixed(2) });
    };
  
    useEffect(() => {

      const target = document.getElementsByClassName("federicco_world_img")
  
      target[0].addEventListener("mousemove", updateMousePosition);
  
      return () => target[0].removeEventListener("mousemove", updateMousePosition);
    }, []);
  
    return mousePosition;
  };
  const { x, y } = useMousePosition();




  return (


            <div className="Work">




                {/* STUDY-TIMER.COM */}
                <Link className="study_timer title" to={`${url}/study_timer`}><span>study-timer.com</span></Link>
                <Link className="study_timer_img square" to={`${url}/study_timer`}>
                  <img src={study_timer_demo} alt="study_timer_demo"/>
                </Link>



                {/* FEDERICCO.WORLD */}
                <Link className="federicco_world title" to={`${url}/federicco_world`}><span>federicco.world </span>{mousePosition.x}</Link>
                <Link className="federicco_world_img square" to={`${url}/federicco_world`}>
                  <img src={federicco_world} alt="federicco_world"/>
                </Link>



                {/* GRAPHILIGHT.IT */}
                <Link className="federicco_world2 title" to={`${url}/federicco_world`}><span>graphilight.it</span></Link>
                <Link className="federicco_world_img2 square" to={`${url}/federicco_world`}>
                  <img src={federicco_world} alt="federicco_world"/>
                </Link>


                

            </div>




  );
}




