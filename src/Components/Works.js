import React from 'react';
import { Link } from 'react-router-dom';

export default function Works(props) {

     const accordionItems = (projectId, projectTitle, projectDescription, projectLink) => {
          return (
               <div key={projectId}>
                    <div className={`accordion-item border-bottom ${props.accordionBackground}`}>
                         <h2 className="accordion-header">
                              <button className={`accordion-button ${props.accordionBackground} ${props.textColor}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${projectId}`} aria-expanded="true" aria-controls={`${projectId}`}>
                                   {projectTitle}
                              </button>
                         </h2>
                         <div id={projectId} className={`accordion-collapse collapse ${props.textColor}`} data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                   <p>{projectDescription}</p>
                                   <a href={projectLink} className={`${props.textColor} ${props.toggleBorderColor}`} target='_blank' rel='noreferrer'>VISIT WEBSITE <i className="fa-solid fa-arrow-up-right-from-square px-2"></i></a>
                              </div>
                         </div>
                    </div>
               </div>
          );
     }

     const accordionContents = [
          { 
               projectId : 'collapseOne',
               projectTitle : 'Digital Clock',
               projectDescription : `
               Dive into my Digital Clock website—a minimalist 
               timekeeping experience with maximum impact. The clean 
               design and precise functionality make every second count. 
               Discover a fusion of form and function in the digital realm.`,
               projectLink : 'https://tharunvemula-digitalclock.netlify.app/'
          },{
               projectId : 'collapseTwo',
               projectTitle : 'Hospital Management System',
               projectDescription : `
               Explore my Hospital Management System—a digital solution for efficient 
               healthcare operations. It seamlessly manages appointments, records, and 
               resources with a user-friendly interface, prioritizing health and technology. 
               Welcome to a healthcare ecosystem where management meets compassion.
               `,
               projectLink : 'https://tharunvemula-hospitalmsystem.netlify.app/'
          },{
               projectId: 'collapseThree',
               projectTitle : `Foodie's Hub`,
               projectDescription : `
               A digital hub for a delightful dining experience. It goes 
               beyond showcasing menus, seamlessly combining aesthetics 
               and functionality. Explore a user-friendly interface that 
               brings the restaurant's essence to the online realm. Welcome 
               to a tasteful journey where culinary excellence meets digital finesse.` ,
               projectLink : 'https://tharunvemula-foodieshub.netlify.app/'
          },{
               projectId : 'collapseFour',
               projectTitle : `Traveler's Adda`,
               projectDescription : `
               Embark on a virtual journey with my Travel Agency Website—a digital 
               gateway to explore destinations and plan adventures. Seamlessly blending 
               aesthetics and functionality, it goes beyond typical travel sites. Navigate 
               through enticing itineraries and immersive visuals in a user-friendly 
               interface. Welcome to a travel experience where wanderlust meets digital convenience.`,
               projectLink : 'https://tharunvemula-travelersadda.netlify.app/'
          }
     ];

     

     return (
     <section id='works' className='works-section d-flex align-items-center'>
          <div className="container">
               <div className="row">
                    <div className="col-md d-flex align-items-center">
                         <h1 className={`${props.toggleHeadingColor}`}>WORKS</h1>
                    </div>
                    <div className="col-md">
                         <div className="accordion">
                              {accordionContents.map((contents)=> {
                                   return accordionItems(contents.projectId, contents.projectTitle, contents.projectDescription, contents.projectLink);
                              })}
                         </div>
                         <Link to="/contact" className={`btn btn-${props.toggleButtonColor} my-4`}>CONTACT ME</Link>
                    </div>
               </div>
          </div>
     </section>
     )
}
