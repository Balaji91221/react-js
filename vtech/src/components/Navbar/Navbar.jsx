import React from 'react'
import './Navbar.css'

import {useState} from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav className='navbar'>
      <h3>Vtech</h3>
      <ul className='nav-items'>
    <li className='home'><a href="#" onClick={()=> setActiveNav('#')}  className={activeNav ==='#' ? 'home': ''}>home</a></li>
    <li className='services'><a href="#Services" onClick={()=> setActiveNav('#Services')} className={activeNav ==='#services' ? 'active': ''} >services</a></li>
    <li className='project'><a href="#Project" onClick={()=> setActiveNav('#Project')} className={activeNav ==='#project' ? 'active': ''} >project details</a></li>
    <li className='contact'><a href="#Contact" onClick={()=> setActiveNav('#Contact')} className={activeNav ==='#contact' ? 'active': ''} >contact me</a></li>
    </ul>
    </nav>
  )
}

export default Navbar


   