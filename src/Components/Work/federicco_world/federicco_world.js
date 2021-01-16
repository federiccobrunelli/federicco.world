
import React from "react";
import { Link } from 'react-router-dom';
import img from '../federicco_world_demo.gif';
import sketch1 from './sketch1.png';
import sketch2 from './sketch2.png';
import sketch3 from './sketch3.png';
import figmaDemo from './figmaDemo.png';





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
          <h2>#WORKFLOW</h2>
          <p>
            <span className="brM"/>
              <h3>_Design First</h3> 
                <span className="brL"/>
                <h4>Palette:</h4>
                <span className="brS"/>
                I always start by choosing a good palette. For my webapp I went for my three favorite colors.<span className="brS"/>
                I love the contrast between black and white, and with a touch of #A2FFE6 it's been very easy to add a modern feel to such classic colors.
                <span className="brXXL"/>

                <img className="sketch1" src={sketch1}/>
                <img className="sketch2" src={sketch2}/>
                <img className="sketch3" src={sketch3}/>

                <span className="brXXL"/>

                <h4>Sketching:</h4>
                Next, I placed the palette in <a className="external_link" href="https://www.figma.com/" target="_blank">Figma</a> and I started sketching the UI until I came up with a design I really love.
                <span className="brL"/>

                <img className="figmaDemo" src={figmaDemo}/>
                <span className="brL"/>
                Looks messy right? <span role="img" aria-label="">😂</span>
                <span className="brXL"/>

              <h3>_Code After</h3> 
                <span className="brL"/>
                Ok, a guideline is set and coding can start. For this project I decided to do everything from scratch. <span className="brM"/>

                This is a react based web app, created using best practices and the latest industry standards like react hooks.<span className="brS"/>
                For the layout I've been using css at its full, using grid and <a className="external_link" href="https://styled-components.com/" target="_blank">Styled Components</a> where an interaction with React's state was necessary, 
                like the custom build burger menu.<span className="brS"/>

                The hardest work has been to make everything look great on any device, at the moment <a className="external_link" href="https://sass-lang.com/" target="_blank">SASS</a> has 
                been very helpful to organize the crazy amount of classes and CSS rules I created. <span className="brM"/>

                It's also been challenging to offer a mobile user the same background effect as a desktop user. As there was no option to follow the pointer, 
                creating a function that communicates with the native gyroscope seemed the best option. <span className="brM"/>

          </p>
</div>

    </div>

  );
}




