import { React } from 'react';
import logoBlack from '../Assets/TV-black.png'
import logoWhite from '../Assets/TV-white.png';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) { 

     const headerComboOne = ()=> {
          return (
          <div className='nav-1'>
               <div className="logo">
                    <img src={(props.isDark) ? logoWhite : logoBlack} alt="" height='50px' width='70px' />
               </div>
               <div className='mt-5 nav-contents'>
                    <nav>
                         <NavLink to="/" className={`px-3 ${props.textColor}`}>Home</NavLink>
                         <NavLink to="/about" className={`px-3 ${props.textColor}`}>About</NavLink>
                         <NavLink to="/works" className={`px-3 ${props.textColor}`}>Works</NavLink>
                         <NavLink to="/contact" className={`px-3 ${props.textColor}`}>Contact</NavLink>
                    </nav>
               </div>
               <div className='state-icon' onClick={props.handleThemeStatus}>
                    <i className={`fa-solid ${props.themeStateIcon} ${props.textColor}`}></i>
               </div>
          </div>
          )
     }

     const headerComboTwo = ()=> {
          return (
          <nav className={`navbar navbar-expand-lg ${props.navBackground}`}>
               <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                         <img src={(props.isDark) ? logoWhite : logoBlack} alt="" height='50px' width='70px' />
                    </Link>
                    <button className={`d-flex justify-content-center align-items-center navbar-toggler shadow-none border-${props.isDark ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span className={`fa-solid fa-bars ${props.textColor}`}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                         <div className="navbar-nav">
                              <NavLink className={`nav-link ${props.textColor}`} aria-current="page" to="/">Home</NavLink>
                              <NavLink className={`nav-link ${props.textColor}`} to="/about">About</NavLink>
                              <NavLink className={`nav-link ${props.textColor}`} to="/works">Works</NavLink>
                              <NavLink className={`nav-link ${props.textColor}`} to="/contact">Contact</NavLink>
                              <div className='state-icon' onClick={props.handleThemeStatus}>
                                   <i className={`fa-solid ${props.themeStateIcon} ${props.textColor} px-3`}></i>
                                   <span className={`${props.textColor}`}>{props.themeStatus}</span>
                              </div>
                         </div>
                    </div>
               </div>
          </nav>
          )
     }

     return (
     <header className={`${props.navBackground}`}>
          {headerComboOne()}
          {headerComboTwo()}
     </header>
     )
}
