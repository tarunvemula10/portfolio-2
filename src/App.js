import './App.css';
import { React,useState } from 'react';
import Navbar from './Components/Navbar';
import Cursor from './Components/Cursor';
import Home from './Components/Home';
import About from './Components/About';
import Works from './Components/Works';
import Contact  from './Components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [isDark, updateIsDark] = useState(false);
  const [currentTheme, updateTheme] = useState({navBackground : 'bg-body-tertiary', textColor : 'text-dark', themeStateIcon : 'fa-moon'});
  const [lightStatus, updateLightStatus] = useState({lightClass : 'bulb-off', lightColor : 'bg-secondary', displayStatus : 'd-none'}); 

  const handleThemeStatus = ()=> {
    if(!isDark) {
      updateIsDark(true);
      updateTheme({navBackground : 'bg-black', textColor : 'text-light', themeStateIcon : 'fa-sun'});
      updateLightStatus({lightClass : 'bulb-on', lightColor : 'bg-light', displayStatus : 'd-block'});
    } else {
      updateIsDark(false);
      updateTheme({navBackground : 'bg-body-tertiary', textColor : 'text-dark', themeStateIcon : 'fa-moon'});
      updateLightStatus({lightClass : 'bulb-off', lightColor : 'bg-secondary', displayStatus : 'd-none'});
    }
  }

  return (
    <>
      <BrowserRouter>
      <Cursor 
        toggleDotColor = {!isDark ? 'light' : 'black'}
        toggleCircleColor = {!isDark ? 'light' : 'black'}
      />
      <div className="d-flex">
        <Navbar 
          isDark={isDark}
          navBackground={currentTheme.navBackground}
          textColor={currentTheme.textColor}
          themeStateIcon={currentTheme.themeStateIcon}
          handleThemeStatus = {handleThemeStatus}
          themeStatus = {isDark ? 'Light Mode' : 'Dark Mode'}
        />
        <section className={`content-section ${isDark ? 'bg-dark' : 'bg-white'}`}>
          <Routes>
            <Route path='/' element = {
              <Home 
              lightClass = {lightStatus.lightClass}
              lightColor = {lightStatus.lightColor}
              displayStatus = {lightStatus.displayStatus}
              handleThemeStatus = {handleThemeStatus}
              toggleHeadingColor = {isDark ?  'white' : 'black'}
              textColor = {currentTheme.textColor}
              buttonColor = {isDark ? 'light' : 'dark'}
              />
            }/>
            <Route path='/about' element={
              <About
                toggleTitleColor = {isDark ? 'white' : 'black'}
                toggleTextColor = {currentTheme.textColor}
                toggleButtonColor = {isDark ? 'light' : 'dark'}
              />
            }/>
            <Route path='/works' element={<Works/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </section>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;