import  React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './header.css'
import sitLogo from '../../assets/images/icons/sit.png'
import wieLogo from '../../assets/images/icons/wie.png'
import ieeeLogo from '../../assets/images/icons/IEEE.webp'
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "react-fontawesome";
import { Fabars } from 'react-icons/fa'

function Header() {

    const [clicked, setClick] = useState(false);

    const HandleClick = () => {
        setClick(!clicked);
    
      }
  return (
    <>
    <div className='header-icons-container'>
        <img className='header-icon' src = {sitLogo}/>
        <img className='header-icon' src = {ieeeLogo}/>

        <img className='header-icon' src = {wieLogo}/>
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
      
        <div className="header-hamburger" onClick={HandleClick} >

        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

     </div>
     <div className='header-links'>
     <ul className={clicked ? 'header-list' : 'header-list-close'}>
     {/* <li> <Link className='header-links' exact to="/" activeClassName="active" >Home </Link> </li> */}
     <li> <Link className='header-links' exact to="/about" activeClassName="active">About</Link> </li>
     {/* <li> <Link className='header-links' exact to="/eventsPage" activeClassName="active">Events</Link> </li> */}
     <li> <Link className='header-links' exact to="/contact" activeClassName="active">Contact</Link> </li>

   </ul>
   </div>
   </>
  )
}

export default Header