
import React from "react";
import { Link } from 'react-router-dom';
import img from '../federicco_world_demo.gif'




export function federicco_world() {

  return (

    <div className="federicco_world_demo">

        <img className="federicco_world_img_demo" src={img} alt="federicco.world demo"/>

        <Link className="skills made_with">
                    <Link className="Link small" >Made with:</Link>
                    <br/>
                    <Link className="Link" >CSS3</Link>
                    <Link className="Link" >HTML5</Link>
                    <Link className="Link" >JavaScript</Link>
                    <Link className="Link" >ReactJs</Link>
        </Link>

        <div className="federicco_world_content">
          <p>As the domain anticipates, welcome to my world!

              I designed and coded this website trying to showcase as much I could my style.

              it’s based on HTML5, CSS3, ReactJs, Javascript and SASS.</p>
</div>

    </div>

  );
}




