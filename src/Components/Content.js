import { React, useRef, useState } from 'react';
import Home from './Content Section/Home';
import About from './Content Section/About';

export default function Content() {

     const contentSection = useRef(null);
     const [isScrolled, updateScroll] = useState(false)
     
     const handleScroll = ()=> (contentSection.current.scrollTop > 50) ? updateScroll(true) : updateScroll(false);
     const scrollers = (pathDown) => {
          return (!isScrolled) ? <div className="text-center p-5"><small><a href={pathDown} className='text-dark'>SCROLL DOWN <i className="fa-solid fa-arrow-down"></i></a></small></div> : <></>
     }

     return (
     <section className='content-section' ref={contentSection} onScroll={handleScroll}>
          <Home />
          {scrollers('#about')}
          <About />
     </section>
     )
}
