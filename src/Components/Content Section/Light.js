import {React, useState} from 'react';

export default function Light() {
     
     const [lights, updateLights] = useState(false);
     const [lightClass, updateLightClass] = useState('bulb-off');
     const [lightColor, updateLightColor] = useState('bg-secondary');
     const [displayStatus, updateDisplayStatus] = useState('d-none');

     const handleBulbClick = ()=> {
          if(!lights) {
               updateLights(true);
               updateLightColor('bg-light');
               updateLightClass('bulb-on');
               updateDisplayStatus('d-block')
          } else {
               updateLights(false);
               updateLightColor('bg-secondary');
               updateLightClass('bulb-off');
               updateDisplayStatus('d-none');
          }
     }

     return (
     <div className='d-flex justify-content-center bulb-section'>
          <div>
               <div className="d-flex justify-content-center">
                    <div className="string bg-dark"></div>
               </div>
               <div className="cap bg-dark"></div>
               <div className="p-bulb d-flex justify-content-center">
                    <div id='bulb' className={`${lightClass} ${lightColor}`} onClick={handleBulbClick}></div>
                    <div className={`spot-light d-flex justify-content-center align-items-center ${displayStatus}`}>
                         <div className="circle-1 d-flex justify-content-center align-items-center">
                              <div className="circle-2 d-flex justify-content-center align-items-center">
                                   <div className="circle-3 d-flex justify-content-center align-items-center">
                                        <div className="circle-4 d-flex justify-content-center align-items-center"></div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div className="d-flex justify-content-center align-items-center text-center skills-belt">
               <div>
                    <h1 className='text-light bg-black'>FRONTEND</h1>
                    <h1 className='text-light bg-black'>BACKEND</h1>
                    <h1 className='text-light bg-black'>FULLSTACK</h1>
                    <h1 className='text-light bg-black'>DEVELOPER</h1>
               </div>
          </div>
     </div>
     )
}