import { React } from 'react';
import Home from './Content Section/Home';
import About from './Content Section/About';
import Works from './Content Section/Works';

export default function Content() {
     return (
     <section className='content-section'>
          <Home />
          <About />
          <Works/>
     </section>
     )
}
