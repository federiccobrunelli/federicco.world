
import React from "react";
import { Link } from 'react-router-dom';
import Portrait from '../App/Images/Portrait.jpg'




export function About() {

  return (

    <div className="about">

        <img className="about_Portrait" src={Portrait} alt="Federico Brunelli Portrait"/>

        <Link className="skills">
                    <Link className="Link shorter" >Federico Brunelli</Link>
                    <Link className="Link" style={{fontSize: '.92em'}}>Italian, 24</Link>
                    <Link className="Link small" >Based in:</Link>
                    <Link className="Link shorter" >Berlin, Germany</Link>
                    <span className="brS"/>
                    <Link className="Link" >I speak: <span role="img" aria-label="italian, english, german flag">🇮🇹🇬🇧🇩🇪</span></Link>

          </Link>


        <div className="aboutContent">
          <h1>WHO AM I?</h1>
          <span className="brXL"/>

          <h2>#ROOTS</h2>
          <p>Hey there! <span role="img" aria-label="hello wave">👋</span><br/> 
          I'm Federico Brunelli, 24 years old, I was born in Verona, Italy - the hometown of Romeo & Juliet.
          <span className="brM"/>

          There, I felt surrounded by too much romanticism and way too few creative ideas, so one night I bought a one-way flight to Berlin 
          thinking I was going on an adventure but now, after 3 years, I know I was actually going to my real home.
          <span className="brM"/>
          I have a big passion for <a className="external_link" href="https://www.youtube.com/watch?v=2ALb2b6R1uA&ab_channel=BoardSports" target="_blank">kitesurfing</a>, <a className="external_link" href="https://www.youtube.com/watch?v=vSVZrZGm6Mo&ab_channel=RedBull" target="_blank">wakeboarding</a> and all those watersports not many people know about. <span role="img" aria-label="">😂</span></p>
          <span className="brXXXL"/>


          <h2>#EDUCATION</h2>
          <p>For the last 9 months, I have been studying web development while maintaining 2 jobs at <a className="external_link" href="https://www.beetsandroots.de/" target="_blank">Beets&Roots</a> and <a className="external_link" href="https://www.berlkoenig.de/" target="_blank">Berlkönig</a>.
          <span className="brM"/>
          Due to the pandemic I've recently spent less time working and have been able to focus more on my education, raising my commitment from 60 to 130+ hours per month.
          <span className="brM"/>
          During this time I've been building up experience with HTML5, CSS3, Javascript-ES6 and ReactJs, mostly through <a className="external_link" href="https://www.codecademy.com/learn/paths/web-development" target="_blank">Codecademy's</a> interactive lessons and projects.
          <span className="brM"/>
          I've always approached my studies with a hands-on mentality and have trained myself to be as independent as possible.
          <span className="brM"/>
          I have learned the most through developing my own projects and by adding functionalities to the ones required by Codecademy.
          </p>
          <span className="brXXXL"/>


          <h2>#STRENGTH</h2>
          <p>This approach to self-education has taught me a lot about web-development, as well as teaching me to be a resourceful problem-solver.</p> 
          <br/>
          <p>I have encountered a lot of obstacles and points at which solving a specific problem seemed impossible, but by pushing myself to try again, learn more and infinite hours googling, I always found what was necessary to complete my work. You can expect that from me with any task I'd be assigned to.</p>
          <span className="brXXXL"/>

          <h2>#WORK AVAILABILITY</h2>
          <p>
            I'm looking for a Junior front-end developer position, in a young and innovative company where I can express myself, grow with the team and be able to work remotely.
            <span className="brM"/>
            I would be especially interested to work in an environment where my hard and soft skills can be challenged every day.
            <span className="brM"/>
            If you think I'm a good fit for your team, you can get in touch <Link className="Link deco" to="/hire">here</Link> and have a look at my <Link className="Link deco" to="/files/Brunelli_Federico_Resume.pdf" target="_blank">résumé</Link> in the meantime.

          </p>

        </div>

    </div>

  );
}




