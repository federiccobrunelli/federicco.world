
import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';

import study_timer_demo from "./media/study_timer_demo.gif";
import federicco_world from "./media/federicco_world_demo.gif";
import graphilight from "./media/graphilight_demo.gif";
import netflix_clone from "./media/netflix_clone.png";
import amici_rent from "./media/amici_rent.png";



export function Work() {
  const { url } = useRouteMatch()

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

        {/* GRAPHILIGHT.IT */}
        <div className='cardWrapper'>
          <a className="graphilight_title title_projects" href='https://www.graphilight.it' target='_blank' rel="noopener noreferrer"><span>graphilight.it <span className='freelance_tag'>(freelance)</span></span>&nbsp;</a>
          <a className="graphilight_img square_projects" href='https://www.graphilight.it' target='_blank' rel="noopener noreferrer">
            <img src={graphilight} alt="graphilight" />
          </a>
        </div>


        {/* AMICI RENT */}
        <div className='cardWrapper'>
          <a className="amici_rent_title title_projects" href='https://github.com/federiccobrunelli/amici-rent' target='_blank' rel="noopener noreferrer"><span>amicirent.it <span className='freelance_tag'>(in progress)</span></span>&nbsp;</a>
          <a className="amici_rent_img square_projects" href='https://github.com/federiccobrunelli/amici-rent' target='_blank' rel="noopener noreferrer">
            <img src={amici_rent} alt="amici_rent" />
          </a>
        </div>


        {/* NETFLIX CLONE */}
        <div className='cardWrapper'>
          <a className="title_projects" href='https://github.com/federiccobrunelli/netflix-clone' target='_blank' rel="noopener noreferrer"><span>Netflix-Clone</span></a>
          <a className="square_projects" href='https://github.com/federiccobrunelli/netflix-clone' target='_blank' rel="noopener noreferrer">
            <img src={netflix_clone} alt="netflix_clone" />
          </a>
        </div>

        {/* FEDERICCO.WORLD */}
        <div className='cardWrapper'>
          <Link className="federicco_world_title title_projects" to={`${url}/federicco_world`}><span>federicco.world </span></Link>
          <Link className="federicco_world_img square_projects" to={`${url}/federicco_world`}>
            <img src={federicco_world} alt="federicco_world" />
          </Link>
        </div>

        {/* STUDY-TIMER.COM */}
        <div className='cardWrapper'>
          <Link className="study_timer_title title_projects" to={`${url}/study_timer`}><span>study-timer.com</span></Link>
          <Link className="study_timer_img square_projects" to={`${url}/study_timer`}>
            <img src={study_timer_demo} alt="study_timer" />
          </Link>
        </div>


      </div>
    </div>




  );
}




