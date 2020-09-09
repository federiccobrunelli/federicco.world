
import React from "react";
import { Link } from 'react-router-dom';
import img from '../study_timer_demo.gif'




export function study_timer() {

  return (

    <div className="study_timer_demo">

        <img className="study_timer_img_demo" src={img} alt="Study-timer.com demo"/>

        <Link className="skills made_with">
                    <Link className="Link small" >Made with:</Link>
                    <br/>
                    <Link className="Link" >CSS3</Link>
                    <Link className="Link" >Styled Components</Link>
                    <Link className="Link" >HTML5</Link>
                    <Link className="Link" >JavaScript</Link>
                    <Link className="Link" >ReactJs</Link>
        </Link>



        <div className="content study_timer_content">
          <h1><a href="https://www.study-timer.com">STUDY-TIMER.COM</a></h1>
          <br/>

          <p>study-timer.com is a useful tool to track how much time you’re spending either having a break or studying. </p>
          <br/>


          <p>I’ve been using a similar app to keep track of my commitment to study since I started my path to web-development.</p>
          <br/>

          <p>Once I had enough skills I decide to design and code my own version.</p>
          <br/>

          <p>I’ll keep adding features along with my improved skills, next to come is a mobile/desktop version and a backend to store all the statistics of registered users.</p>
        </div>

    </div>

  );
}




