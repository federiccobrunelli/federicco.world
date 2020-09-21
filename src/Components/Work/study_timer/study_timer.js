
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
          <h1><a href="https://www.study-timer.com" alt="" target="_blank">STUDY-TIMER.COM</a></h1>
          <br/>

          <p><a href="https://www.study-timer.com" alt="" target="_blank" className="external_link">
            study-timer.com</a> is an incredibly useful tool to track the time spent on a break or focused on a task.

          <span className="brM"/>
          <h2>#USE CASE SCENARIO</h2>
          <span className="brS"/>
          It can be used in many situations but I found it to be a key element to give myself a structure when studying and to keep me motivated to do more every day. 
          I've been storing all this sessions data on an excel file which gave me an excellent overview of my progress and commitment.

          <span className="brM"/>
          <h2>#HISTORY</h2>
          <span className="brS"/>
          I’ve been using a similar app at beginning of my learning path, and after 6 months once I had enough knowledge I developed my own time-tracking application.
          
          <span className="brM"/>
          <h2>#NEXT UPDATES</h2>
          <span className="brS"/>
          I have plans to keep adding features along with my improved skills by creating a desktop/mobile version using React Native and adding back-end functionalities to give users the ability to register, 
          save every session and get an overview of their progress.
          <span className="brM"/>
          
          </p>
        </div>

    </div>

  );
}




