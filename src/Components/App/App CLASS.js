
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


import {About} from '../About/About';
import {Hire} from '../Hire/Hire';
import {Work} from '../Work/Work';

import {study_timer} from "../Work/study_timer/study_timer.js"
import {federicco_world} from "../Work/federicco_world/federicco_world.js"


import {Home} from '../Home/Home';
import {Contact} from '../Contact/Contact'

import {resume} from './Brunelli_Federico_Resume.pdf';
import { render } from "@testing-library/react";





export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      x: null,
      y: null,

      xAcceleration: null,
      yAcceleration: null,
    }

    this.useMousePosition = this.useMousePosition.bind(this);
    //this.useRequestMotionPermission = this.useRequestMotionPermission.bind(this);
    


  }


  useMousePosition() {

  
    const updateMousePosition = e => {
      this.setState({ 
        x: (e.clientX/200).toFixed(2), 
        y: (e.clientY/200).toFixed(2) });
    };
  
      window.addEventListener("mousemove", updateMousePosition);
      return () => window.removeEventListener("mousemove", updateMousePosition);

  };








  // useRequestMotionPermission() {

  //     //iOS 13+
  //     if (typeof DeviceMotionEvent.requestPermission === 'function') {

  //       //show pop-up
  //         //onClick -> call this below
  //           //iOS13MotionFunc

  //         console.log('ios13+')

  //         //useIOS13MotionFunc()



        
  //     } else {
        

  //         if (window.DeviceMotionEvent) {
  //           console.log('non ios13+')
  
  
  //         const handleMotionEvent = event => {
  //             requestAnimationFrame(() =>
  //               this.setState({
  //                     xAcceleration: (-event.accelerationIncludingGravity.x+3.5).toFixed(4),
  //                     yAcceleration: (-event.accelerationIncludingGravity.y-5).toFixed(4),
  //                 }),
  //             );
  //         };
          
  //         window.addEventListener('devicemotion', handleMotionEvent, true);
  
  //         return () => window.removeEventListener('devicemotion', handleMotionEvent);
  //         }
        
  //     }
    
  // }


  
  

  render() {

    this.useMousePosition()

    return (

      <Router>
      <div className="Wrapper">

      <div className="Shadow pointer" style={{top: `${this.state.y}vh`, left: `${this.state.x}vw`}}></div>
      <div className="Shadow motion" style={{top: `${this.state.yAcceleration}vh`, left: `${this.state.xAcceleration}vw`}}></div>

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

          {/* <button onClick={useIOS13MotionFunc()}>Motion</button> */}


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
}











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


  // useIOS13MotionFunc() {
    
  //   const [deviceMotion, setDeviceMotion] = useState({ xAcceleration: null, yAcceleration: null });

  //   useEffect(() => {

  //   DeviceMotionEvent.requestPermission().then(response => {

  //     if (response === 'granted') {
  //         console.log('ios13+ response:' + response)
          
  //         if (window.DeviceMotionEvent) {
  //           console.log('we have motion')
  
  
  //         const handleMotionEvent = event => {
  //             requestAnimationFrame(() =>
  //               setDeviceMotion({
  //                     xAcceleration: (-event.accelerationIncludingGravity.x+2),
  //                     yAcceleration: (-event.accelerationIncludingGravity.y),
  //                 }),
  //             );
  //         };
  
  //         window.addEventListener('devicemotion', handleMotionEvent, true);
  
  //         return () => window.removeEventListener('devicemotion', handleMotionEvent);
  //         }

          
  //     }
  //   }).catch(console.error)
  // }, [])
  // return deviceMotion

  // };

