
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import {isAndroid, isIOS} from 'react-device-detect';


import {About} from '../About/About';
import {Hire} from '../Hire/Hire';
import {Work} from '../Work/Work';

import {study_timer} from "../Work/study_timer/study_timer.js"
import {federicco_world} from "../Work/federicco_world/federicco_world.js"


import {Home} from '../Home/Home';
import {Contact} from '../Contact/Contact'

//import {resume} from '../../../public/files/Brunelli_Federico_Resume.pdf';






export default function App() {

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [deviceMotion, setDeviceMotion] = useState({ xAcceleration: null, yAcceleration: null });
  const [isSeen, setIsSeen] = useState({ seen: false });



  const useMousePosition = () => {
  
    const updateMousePosition = e => {
      setMousePosition({ 
        x: (e.clientX/200).toFixed(2), 
        y: (e.clientY/200).toFixed(2) });
    };
  
    useEffect(() => {

      window.addEventListener("mousemove", updateMousePosition);
  
      return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);
  
    return mousePosition;
  };
  const { x, y } = useMousePosition();



  const  useIOS13MotionFunc = () => {

    DeviceMotionEvent.requestPermission().then(response => {

      if (response === 'granted') {
          console.log('ios13+ response:' + ' ' + response)
          console.log('seen?:' + ' ' + isSeen.seen);
          
          if (window.DeviceMotionEvent) {
            console.log('we have motion')
  
  
          const handleMotionEvent = event => {
              requestAnimationFrame(() =>
                setDeviceMotion({
                      xAcceleration: (-event.accelerationIncludingGravity.x+4)/1.713545626,
                      yAcceleration: (-event.accelerationIncludingGravity.y)/1.913545626,
                  }),

              );
          };

          setIsSeen({ seen: !isSeen.seen })
          console.log('seen?:' + ' ' + isSeen.seen);
          
          
  
          window.addEventListener('devicemotion', handleMotionEvent, true);
  
          return () => window.removeEventListener('devicemotion', handleMotionEvent);
          }
      } else {
        console.log('ios13+ response:' + ' ' + response)
        setIsSeen({ seen: !isSeen.seen })
        console.log('seen?:' + ' ' + isSeen.seen);
      }

    }).catch(console.error)

  return deviceMotion

  };

  const useRequestMotionPermission = () => {

    useEffect(() => {

        if (typeof DeviceMotionEvent == 'function' && typeof DeviceMotionEvent.requestPermission === 'function') {

              console.log('ios13+')
              
                setIsSeen({
                  seen: !isSeen.seen
                });
              
              
              console.log(isSeen.seen)
              

          } else {
              if (window.DeviceMotionEvent) {
                console.log('non ios13+')
                if (isIOS) { 
                    
                  console.log('iphone')
      
                    const handleMotionEvent = event => {
                      requestAnimationFrame(() =>
                          setDeviceMotion({
                            xAcceleration: (event.accelerationIncludingGravity.x+6)/2.13545626,
                            yAcceleration: (-event.accelerationIncludingGravity.y)/2.13545626,
                            }),
                        );
                    };
                      
                    window.addEventListener('devicemotion', handleMotionEvent, true);
                    window.removeEventListener('devicemotion', handleMotionEvent);
                  
                  } else if (isAndroid) {

                    console.log('Android')

                    const handleMotionEvent = event => {
                      requestAnimationFrame(() =>
                        setDeviceMotion({
                          xAcceleration: (-event.accelerationIncludingGravity.x+6)/2.13545626,
                          yAcceleration: (event.accelerationIncludingGravity.y)/2.13545626,
                          }),
                      );
                  };
                    
                  window.addEventListener('devicemotion', handleMotionEvent, true);
                  return () => window.removeEventListener('devicemotion', handleMotionEvent);

                  } else {
                    console.log('Desktop')
      
                    const handleMotionEvent = event => {
                      requestAnimationFrame(() =>
                          setDeviceMotion({
                            xAcceleration: (event.accelerationIncludingGravity.x+6)/2.13545626,
                            yAcceleration: (-event.accelerationIncludingGravity.y)/2.13545626,
                            }),
                        );
                    };
                      
                    window.addEventListener('devicemotion', handleMotionEvent, true);
                    return () => window.removeEventListener('devicemotion', handleMotionEvent);
                  }
              }
          };
    }, []);

    return { deviceMotion, isSeen, }
  
  }
  
  useRequestMotionPermission()

  
  

  return (

    <Router>
    <div className="Wrapper">

    <div className="Shadow pointer" style={{top: `${y}vh`, left: `${x}vw`}}></div>
    <div className="Shadow motion" style={{top: `${deviceMotion.yAcceleration}vh`, left: `${deviceMotion.xAcceleration}vw`, }}></div>

    <div className="App" >


      <Link className="logo" to="/" >
        <span>F</span>
        <span>E</span>
        <span>D</span>
        <span>E</span>
        <span>R</span>
        <span>I</span>
        <span>C</span>
        <span>C</span>
        <span>O</span>
        <span>.</span>
        <span>W</span>
        <span>O</span>
        <span>R</span>
        <span>L</span>
        <span>D</span>
        </Link>


        {isSeen.seen ? <button className="popUp" onClick={ useIOS13MotionFunc }>
          Hey there!👋 <br/> 
          Wanna see a cool effect? <br/>
          <span>please click here</span><br/>
          and allow "Motion and Orientation Access"</button> : null}

      <Switch>

        <Route exact path="/" component={Home}/>
        <Route path="/hire" component={Hire}/>
        <Route path="/about" component={About}/>
        <Route exact path="/work" component={Work}/>
        <Route path="/work/study_timer" component={study_timer}/>
        <Route path="/work/federicco_world" component={federicco_world}/>
        <Route path="/contact" component={Contact}/>

      </Switch>



      <div className="footer"> 
        
        <Link className="Link" to="/about">about</Link>
        <Link className="Link" to="/contact">contact</Link>
        <Link className="Link" to="/">home</Link>
        <Link className="Link" exact="true" to="/work">projects</Link>
        <Link className="Link" to="/files/Brunelli_Federico_Resume.pdf" download="Brunelli_Federico_Resume.pdf" target="_blank">résumé</Link>
      
      </div>

    </div>

    </div>
    </Router>

  );
}


