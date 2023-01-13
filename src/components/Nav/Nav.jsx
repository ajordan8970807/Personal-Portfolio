import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserNinja} from 'react-icons/fa'
import {AiOutlineExperiment} from 'react-icons/ai'
import {MdOutlineDesignServices} from 'react-icons/md'
import {BsPhoneVibrate} from 'react-icons/bs'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome/>
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <FaUserNinja/>
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <AiOutlineExperiment/>
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <MdOutlineDesignServices/>
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BsPhoneVibrate/>
      </a>
    </nav>
  )
}

export default Nav