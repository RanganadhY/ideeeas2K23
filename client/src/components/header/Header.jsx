import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { RxHamburgerMenu,RxCross1 } from 'react-icons/rx';

import './header.css'
import sitLogo from '../../assets/images/icons/sit.png'
import wieLogo from '../../assets/images/icons/wie.png'
import ieeeLogo from '../../assets/images/icons/IEEE.webp'
import ieeEmbc from "../../assets/images/icons/IEEE-EMBS-BC-logo-white.png"
import ieeComSoc from "../../assets/images/icons/ieee-comsoc.png"
import ieePhotonics from "../../assets/images/icons/Photonics.png"
import ieeEmbs from "../../assets/images/icons/embs.png"
import ieeSpax from "../../assets/images/icons/SpaaX (1).png"
import ieeeBangaloreSection from "../../assets/images/icons/Bangalore-Section-Logo-white-1-01.png"
import {imgLinks} from './headerLinks'


function Header(props) {
  
  const [clicked, setClick] = useState(false);

  const HandleClick = () => {
    setClick(!clicked);

  }

    const handleIconClick = async(name) => {
      if(name === "sit")
      window.open("http://www.sit.ac.in/html/home.html","_blank")
      if(name === "ieee")
      window.open("https://www.ieee.org/","_blank")
      if(name === "ieeePhotonics")
      window.open("https://ieeephotonics.org/","_blank")
      if(name === "ieeeBangaloreSection")
      window.open("https://ieeebangalore.org/","_blank")
      if(name === "ieeeSpax")
      window.open("https://tinyurl.com/2urchbun","_blank")
      if(name === "ieeeEmbs")
      window.open("https://www.embs.org/","_blank")
      if(name === "ieeeComSoc")
      window.open("https://www.comsoc.org/","_blank")
      if(name === "wie")
      window.open("https://wie.ieee.org/","_blank")
    }
  
  return (
    <>
      <nav>
        <div className='header-icons-container' >
          <div className='header-icon' onClick={() => handleIconClick("sit")}> <img src={sitLogo} /></div>
          <div className='header-icon' onClick={() => handleIconClick("ieeeBangaloreSection")}> <img src={ieeeBangaloreSection} /></div>
          <div className='header-icon' onClick={() => handleIconClick("ieeePhotonics")} > <img src={ieePhotonics} /></div>
          <div className='header-icon' onClick={() => handleIconClick("ieeeComSoc")}> <img src={ieeComSoc} /></div>
          <div className='header-icon' onClick={() => handleIconClick("ieeeEmbs")}> <img src={ieeEmbs} /></div>
          <div className='header-icon' onClick={() => handleIconClick("ieeeSpax")}> <img src={ieeSpax} /></div>
          <div className='header-icon' onClick={() => handleIconClick("wie")}> <img src={wieLogo} /></div>
          <div className='header-icon' onClick={() => handleIconClick("ieee")}> <img src={ieeeLogo} /></div>
        </div>
        <div className="header-hamburger" onClick={HandleClick} >

          {/* <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i> */}
          {clicked?<RxCross1/> : <RxHamburgerMenu/> }
        </div>
      </nav>
      <div className='header-link'>
        <ul className={clicked ? 'header-list' : 'header-list-close'}>
          <li> <Link className='header-links' exact to="/" activeClassName="active">Home</Link> </li>
          <li> <Link className='header-links' exact to="/ScrollingPage" activeClassName="active">About </Link> </li>
          <li> <Link className='header-links' exact to="/contact" activeClassName="active">Contact</Link> </li>

        </ul>
      </div>
    </>
  )
}

export default Header

