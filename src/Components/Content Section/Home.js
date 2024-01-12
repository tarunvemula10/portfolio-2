import React from 'react';
import Light from './Light';

export default function Home() {
     return (
     <>
     <Light/>
     <section className='home' id='home'>
          <div className="container">
               <div>
                    <p>HI THERE, I AM</p>
                    <h1>THARUN VEMULA</h1>
                    <p>BEING THE CHANGE AND MAKING THE CHANGE</p>
               </div>
               <div className="my-2">
                    <a href="/" className="btn btn-dark border-2">KNOW ME</a>
                    <a href="/" className="btn btn-outline-dark mx-2 border-2">LET'S TALK</a>
               </div>
          </div>
     </section>
     </>
     )
}
