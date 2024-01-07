import React from 'react';
import resume from './tharun_vemula_resume.pdf'

export default function About() {
     return (
     <section id="about" className='about-section d-flex align-items-center'>
          <div className="container">
               <div className="row">
                    <div className="col-md d-flex align-items-center">
                         <h1>ABOUT</h1>
                    </div>
                    <div className="col-md text-dark">
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
                         <p>Vs code, Eclipse IDE, Intellij idea, Github</p>
                         <a href="/" className="btn btn-dark border-2">MY WORKS</a>
                         <a className="btn btn-outline-dark border-2 mx-2" href={resume} target='_blank' rel='noreferrer'>MY CV <i className="fa-solid fa-arrow-up-right-from-square px-2"></i></a>
                    </div>
               </div>
          </div>
     </section>
     )
}
