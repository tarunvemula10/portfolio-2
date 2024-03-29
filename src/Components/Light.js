import { React } from 'react';

export default function Light(props) {

     return (
     <div className='d-flex justify-content-center bulb-section'>
          <div>
               <div className="d-flex justify-content-center">
                    <div className="string bg-dark"></div>
               </div>
               <div className="cap bg-dark"></div>
               <div className="p-bulb d-flex justify-content-center">
                    <div id='bulb' className={`${props.lightClass} ${props.lightColor}`} onClick={props.handleThemeStatus}></div>
                    <div className={`spot-light d-flex justify-content-center align-items-center ${props.displayStatus}`}>
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
          {/* <div className="d-flex justify-content-center align-items-center text-center skills-belt">
               <div>
                    <h1 className={`${props.contextTextColor} ${props.contextBackgroundColor}`}>FRONTEND</h1>
                    <h1 className={`${props.contextTextColor} ${props.contextBackgroundColor}`}>BACKEND</h1>
                    <h1 className={`${props.contextTextColor} ${props.contextBackgroundColor}`}>FULLSTACK</h1>
                    <h1 className={`${props.contextTextColor} ${props.contextBackgroundColor}`}>DEVELOPER</h1>
               </div>
          </div> */}
     </div>
     )
}