import React from 'react';
import resume from './tharun_vemula_resume.pdf';
import { Link } from 'react-router-dom';

export default function About(props) {
     return (
     <section id="about" className='about-section d-flex align-items-center'>
          <div className="container">
               <div className="row">
                    <div className="col-md d-flex align-items-center">
                         <h1 className={`${props.toggleTitleColor}`}>ABOUT</h1>
                    </div>
                    <div className={`col-md ${props.toggleTextColor}`}>
                         <p>
                              Greetings! I'm Tharun Vemula, a Fullstack Developer, well-versed in 
                              the art of crafting seamless digital experiences. With a meticulous 
                              eye for detail and adept problem-solving skills, I navigate both 
                              front-end and back-end development realms effortlessly. My code isn't 
                              just functional; it's an art form that transforms ideas into 
                              interactive and dynamic web applications. Committed to staying at 
                              the forefront of technology, I am your go-to architect for turning 
                              visions into reality in the digital landscape. 
                              Welcome to a world where innovation meets expertise.
                         </p>
                         <h5>MY SKILLS : </h5>
                         <p>HTML, CSS, Javascript, Java, J2EE, React, SQL</p>
                         <h5>TOOLS : </h5>
                         <p>Visual Studio code, Eclipse, Intellij idea, Github</p>
                         <div className="my-2">
                              <Link to="/works" className={`btn btn-${props.toggleButtonColor} border-2`}>MY WORKS</Link>
                              <a className={`btn btn-outline-${props.toggleButtonColor} border-2 mx-2`} href={resume} target='_blank' rel='noreferrer'>MY CV <i className="fa-solid fa-arrow-up-right-from-square px-2"></i></a>
                         </div>
                    </div>
               </div>
          </div>
     </section>
     )
}
