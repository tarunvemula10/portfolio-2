import { React, useEffect, useRef } from 'react';

export default function Cursor() {

     const cursorDot = useRef(null);
     const cursorOutline = useRef(null);

     useEffect(()=> {

          function mouseMove(e) {
               const posX = e.clientX;
               const posY = e.clientY;
     
               cursorDot.current.style.left = `${posX}px`;
               cursorDot.current.style.top = `${posY}px`;

               cursorOutline.current.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
               }, {duration: 500, fill:'forwards'});
          }
          window.addEventListener('mousemove', mouseMove);

          return _ => window.removeEventListener('mousemove', mouseMove);
     }, [])

     return (
     <>
          <div className="cursor-dot" ref={cursorDot}></div>
          <div className="cursor-circle" ref={cursorOutline}></div>
     </>
     )
}