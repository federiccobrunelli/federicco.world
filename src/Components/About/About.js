
import React from "react";
import { Link } from 'react-router-dom';
import Portrait from '../App/Images/Portrait.jpg'




export function About() {

  return (

    <div className="about">

        <img className="about_Portrait" src={Portrait} alt="Federico Brunelli Portrait"/>

        <Link className="skills">
                    <Link className="Link" >Italian, 24</Link>
                    <Link className="Link small" >Based in:</Link>
                    <Link className="Link shorter" >Berlin, Germany</Link>
                    <br/>
                    <Link className="Link small" >Fluent in:</Link>
                    <Link className="Link" >CSS3</Link>
                    <Link className="Link" >SASS</Link>
                    <Link className="Link" >HTML5</Link>
                    <Link className="Link" >JavaScript</Link>
                    <Link className="Link" >ReactJs</Link>
          </Link>


        <div className="aboutContent">
          <p>My name is Federico Brunelli, I come from Verona in Italy and I've been living in Berlin for 3 years. </p>
          <br/>
          <p>For the last 8 months, I have been studying web development with an average of 60 hours per month while maintaining a part- time job at Beets&Roots and a MiniJob at Berlkönig.</p>

          <br/>

          <p>Due to the pandemic I've recently spent less time working and have been able to focus more on my education, raising my commitment to 130+ hours per month (breaks excluded).</p>
          <br/>
          <p>During this time I've been building up experience with HTML5, CSS3, Javascript ES6 and ReactJs, mostly through Codecademy's interactive lessons and projects.</p>
          <br/>
          <p>I've always approached my studies with a hands-on mentality and have trained myself to be as independent as possible.</p>
          <br/>
          <p>I have learned the most through developing my own projects and by adding functionalities to the ones required by Codecademy.</p>
          <br/>
          <br/>

          <p>This approach to self-education has taught me a lot about development, as well as teaching me to be a resourceful problem-solver.</p> 
          <br/>
          <p>I have encountered a lot of obstacles, and points at which solving a specific problem seemed impossible, but by pushing myself to try again, learn more and infinite hours googling, I always found what was necessary to complete my work. You can expect that from me with any task I'd be assigned to.</p>
          <br/>


          <p>You can find a working project at this link: https://study-timer.com .</p>
          <p>I developed this simple time tracking app in a week. I started from zero and coded, designed and deployed the app fully independently. </p>
          <br/>
          <p>I'm also planning to create a back-end to store all the user data and create an overview of the personal stats. A desktop and mobile version is on the way too.</p>

        </div>

    </div>

  );
}




