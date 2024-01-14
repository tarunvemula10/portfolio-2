import React from 'react';
import Light from './Light';
import { Link } from 'react-router-dom';

export default function Home(props) {

     return (
     <>
     <Light 
          lightClass = {props.lightClass}
          lightColor = {props.lightColor}
          displayStatus = {props.displayStatus}
          handleThemeStatus = {props.handleThemeStatus}
     />
     <section className='home' id='home'>
          <div className={`container`}>
               <div>
                    <p className={`${props.textColor}`}>HI THERE, I AM</p>
                    <h1 className={`${props.toggleHeadingColor}`}>THARUN VEMULA</h1>
                    <p className={`${props.textColor}`}>BEING THE CHANGE AND MAKING THE CHANGE</p>
               </div>
               <div className="my-2">
                    <Link to="/about" className={`btn btn-${props.buttonColor} border-2`}>KNOW ME</Link>
                    <Link to="/contact" className={`btn btn-outline-${props.buttonColor} mx-2 border-2`}>LET'S TALK</Link>
               </div>
          </div>
     </section>
     </>
     )
}
