import React from 'react';
import logoBlack from '../Assets/TV-black.png'
// import logoWhite from '../Assets/TV-white.png'

export default function Navbar() {

     const headerComboOne = ()=> {
          return (
          <div className='nav-1'>
               <div className="logo">
                    <img src={logoBlack} alt="" height='50px' width='70px' />
               </div>
               <div className='mt-5 nav-contents'>
                         <nav>
                              <a href="/" className='px-3 text-dark'>Home</a>
                              <a href="/" className='px-3 text-dark'>About</a>
                              <a href="/" className='px-3 text-dark'>Works</a>
                              <a href="/" className='px-3 text-dark'>Contact</a>
                         </nav>
               </div>
               <div className='state-icon'>
                    <i className="fa-solid fa-moon"></i>
               </div>
          </div>
          )
     }

     const headerComboTwo = ()=> {
          return (
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
               <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                         <img src={logoBlack} alt="" height='50px' width='70px' />
                    </a>
                    <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                         <div className="navbar-nav">
                              <a className="nav-link active" aria-current="page" href="/">Home</a>
                              <a className="nav-link" href="/">About</a>
                              <a className="nav-link" href="/">Works</a>
                              <a className="nav-link" href="/">Contact</a>
                         </div>
                    </div>
               </div>
          </nav>
          )
     }

     return (
     <header className='bg-body-tertiary'>
          {headerComboOne()}
          {headerComboTwo()}
     </header>
     )
}
