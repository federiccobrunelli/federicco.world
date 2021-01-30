
import React from "react";
import { Link } from 'react-router-dom';
import img from '../media/federicco_world_demo.gif';



export function federicco_world() {

  return (

    <div className="federicco_world_demo">

        <img className="federicco_world_img_demo" src={img} alt="federicco.world demo"/>

        <Link className="skills made_with">
                    <Link className="Link small" >Made with:</Link>
                    <br/>
                    <Link className="Link" >SASS</Link>
                    <Link className="Link" >CSS3</Link>
                    <Link className="Link" >HTML5</Link>
                    <Link className="Link" >JavaScript</Link>
                    <Link className="Link" >ReactJs</Link>
        </Link>

        <div className="federicco_world_content">
          <h1>Project #2: FEDERICCO.WORLD</h1>
          <span className="brXL"/>
          <p>As the domain anticipates, welcome to my world! <br/>
          <span className="brS"/>
          Everything you see here has been 100% my work. I designed, wrote and coded this website trying to showcase my personality, style and skills as much I could.
          <span className="brS"/>
          It all started with a simple create-react-app <span role="img" aria-label="love at first sight">👩‍❤️‍👨</span></p>
          <span className="brL"/>

    </div>

    </div>

  );
}




