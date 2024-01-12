import { React, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

     const form = useRef(null);

     const sendMail = (e) => {
          e.preventDefault();

          emailjs.sendForm('service_tmpyi57', 'template_zdwk3fs', form.current, 'hAXMmn-Ohk1OyjU3N')
          .then((result) => {
               toast.success('Message Sent Successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
               });
          }, (error) => {
               toast.error('Error sending Message!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
               });
          });
     }

     return (
     <>
     <section className='contact-section d-flex align-items-center' id='contact'>
          <div className="container">
               <div className="row">
                    <div className="col-md d-flex align-items-center">
                         <h1>CONTACT</h1>
                    </div>
                    <div className="col-md">
                         <form ref={form} onSubmit={sendMail}>
                              <div className="mb-3">
                                   <label htmlFor="exampleFormControlInput1" className="form-label mx-2">Email address</label>
                                   <input type="email" name='sender_email' className="form-control shadow-none" id="exampleFormControlInput1" placeholder="eg. billy@email.com"/>
                              </div>
                              <div className="mb-3">
                                   <label htmlFor="exampleFormControlTextarea1" className="form-label mx-2">Message</label>
                                   <textarea name='sender_message' className="form-control shadow-none" id="exampleFormControlTextarea1" placeholder='Your Message Here' rows="3"></textarea>
                              </div>
                              <button type="submit" className='btn btn-dark'>SEND<i className="fa-solid fa-paper-plane px-2"></i></button>
                         </form>
                    </div>
               </div>
               <ToastContainer />
          </div>
     </section>
     <div className="text-center fs-4 socials">
          <a href="https://www.facebook.com/profile.php?id=100084423033595" target='_blank' rel='noreferrer' className="text-dark" ><i className="fa-brands fa-facebook-f pe-4"></i></a>
          <a href="https://twitter.com/tharunvemula10" className="text-dark" target='_blank' rel='noreferrer'><i className="fa-brands fa-x-twitter pe-4"></i></a>
          <a href="https://www.linkedin.com/in/tharun-vemula-077925215/" className="text-dark" target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin-in pe-4"></i></a>
          <a href="https://github.com/tarunvemula10" className="text-dark" target='_blank' rel='noreferrer'><i className="fa-brands fa-github"></i></a>
     </div>
     </>
     )
}