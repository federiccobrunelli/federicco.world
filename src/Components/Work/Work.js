
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from 'react-router-dom';

import study_timer_demo from "./study_timer_demo.gif";
import federicco_world from "./federicco_world_demo.gif";
import graphilight from "./graphilight_demo.gif";
import netflix_clone from "./netflix_clone.png";



{/* 
                  THIS COULD BE IMPROVED USING useRouteMatch AND BECOME SOMETHING LIKE THIS:

                    First, before return () ->     
                    
                    const {path, url} = useRouteMatch()
    
                    <Link className="study_timer title" to={`${url}/study_timer`}><span>study-timer.com</span></Link>
                */}




export function Work() {
  const { path, url } = useRouteMatch()

  //to make 3d effect with card
  // const [mousePosition, setMousePosition] = useState({ x: null, y: null });


  // const useMousePosition = () => {

  //   const updateMousePosition = e => {
  //     setMousePosition({ 
  //       x: (e.clientX/200).toFixed(2), 
  //       y: (e.clientY/200).toFixed(2) });
  //   };

  //   useEffect(() => {

  //     const target = document.getElementsByClassName("federicco_world_img")

  //     target[0].addEventListener("mousemove", updateMousePosition);

  //     return () => target[0].removeEventListener("mousemove", updateMousePosition);
  //   }, []);

  //   return mousePosition;
  // };
  // const { x, y } = useMousePosition();




  return (

    <div className="Work_wrapper">

      <div className="Work">





        {/* STUDY-TIMER.COM */}
        <div className='cardWrapper'>
          <Link className="study_timer_title title_projects" to={`${url}/study_timer`}><span>study-timer.com</span></Link>
          <Link className="study_timer_img square_projects" to={`${url}/study_timer`}>
            <img src={study_timer_demo} alt="study_timer" />
          </Link>
        </div>



        {/* FEDERICCO.WORLD */}
        <div className='cardWrapper'>
          <Link className="federicco_world_title title_projects" to={`${url}/federicco_world`}><span>federicco.world </span></Link>
          <Link className="federicco_world_img square_projects" to={`${url}/federicco_world`}>
            <img src={federicco_world} alt="federicco_world" />
          </Link>
        </div>



        {/* GRAPHILIGHT.IT */}
        <div className='cardWrapper'>
          <a className="graphilight_title title_projects" href='https://www.graphilight.it' target='_blank'><span>graphilight.it <span className='freelance_tag'>(freelance)</span></span>&nbsp;</a>
          <a className="graphilight_img square_projects" href='https://www.graphilight.it' target='_blank'>
            <img src={graphilight} alt="graphilight" />
          </a>
        </div>
        <div className='cardWrapper'>
          <a className="title_projects" href='https://github.com/federiccobrunelli/netflix-clone' target='_blank'><span>Netflix-Clone</span></a>
          <a className="square_projects" href='https://github.com/federiccobrunelli/netflix-clone' target='_blank'>
            <img src={netflix_clone} alt="netflix_clone" />
          </a>
        </div>




      </div>
    </div>




  );
}




