
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


import {About} from '../About/About';
import {Hire} from '../Hire/Hire';
import {Work} from '../Work/Work';

import {study_timer} from "../Work/study_timer/study_timer.js"
import {federicco_world} from "../Work/federicco_world/federicco_world.js"


import {Home} from '../Home/Home';
import {Contact} from '../Contact/Contact'

import {resume} from './Brunelli_Federico_Resume.pdf';





export default function App() {


  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  
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






























//   DeviceMotionEvent.requestPermission()
// .then(response => {
//   if (response == 'granted') {
//     window.addEventListener('devicemotion', (e) => {
//       // do something with e
//     })
//   }
// })
// .catch(console.error)



  // const useDeviceMotion = () => {

    
  //   const [deviceMotion, setDeviceMotion] = useState({ xAcceleration: null, yAcceleration: null });

  //   useEffect(() => {
  //       if (window.DeviceMotionEvent) {
  //         console.log('it works')


  //       const handleMotionEvent = event => {
  //           requestAnimationFrame(() =>
  //             setDeviceMotion({
  //                   xAcceleration: (-event.accelerationIncludingGravity.x+2),
  //                   yAcceleration: (-event.accelerationIncludingGravity.y),
  //               }),
  //           );
  //       };

  //       window.addEventListener('devicemotion', handleMotionEvent, true);

  //       return () => window.removeEventListener('devicemotion', handleMotionEvent);
  //       }
  //       }, []);


  //       return deviceMotion
  //   }

  // const { xAcceleration, yAcceleration } = useDeviceMotion()


  const useRequestMotionPermission = () => {
    const [deviceMotion, setDeviceMotion] = useState({ xAcceleration: null, yAcceleration: null });

    useEffect(() => {
      if (typeof DeviceMotionEvent.requestPermission === 'function') {
        // iOS 13+
          console.log('ios13+')
          DeviceMotionEvent.requestPermission().then(response => {


            if (response === 'granted') {
                console.log('ios13+ response:' + response)
                
                if (window.DeviceMotionEvent) {
                  console.log('we have motion')
        
        
                const handleMotionEvent = event => {
                    requestAnimationFrame(() =>
                      setDeviceMotion({
                            xAcceleration: (-event.accelerationIncludingGravity.x+2),
                            yAcceleration: (-event.accelerationIncludingGravity.y),
                        }),
                    );
                };
        
                window.addEventListener('devicemotion', handleMotionEvent, true);
        
                return () => window.removeEventListener('devicemotion', handleMotionEvent);
                }

                
            }


          }).catch(console.error)
        
      } else {
        

          if (window.DeviceMotionEvent) {
            console.log('non ios13+')
  
  
          const handleMotionEvent = event => {
              requestAnimationFrame(() =>
                setDeviceMotion({
                      xAcceleration: (-event.accelerationIncludingGravity.x+2),
                      yAcceleration: (-event.accelerationIncludingGravity.y),
                  }),
              );
          };
          
          window.addEventListener('devicemotion', handleMotionEvent, true);
  
          return () => window.removeEventListener('devicemotion', handleMotionEvent);
          }

          console.log(deviceMotion)
  
          
        
      }
      

    }, []);
    return deviceMotion
  }


  
  const { xAcceleration, yAcceleration } = useRequestMotionPermission()
  
  


  return (

    <Router>
    <div className="Wrapper">

    <div className="Shadow pointer" style={{top: `${y}vh`, left: `${x}vw`}}></div>
    <div className="Shadow motion" style={{top: `${yAcceleration}vh`, left: `${xAcceleration}vw`}}></div>

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

        {/* <button onClick={useRequestMotionPermission}>Motion</button> */}


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
        <Link className="Link" to="" download target="_blank">résumé</Link>
      
      </div>

    </div>

    </div>
    </Router>

  );
}




