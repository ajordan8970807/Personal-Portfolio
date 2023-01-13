import React from 'react'
import './Footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
  import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>AdriCodes</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/adrienne-jordan389/"> <AiOutlineLinkedin/> </a>
        <a href="https://github.com/ajordan8970807"> <AiOutlineGithub/> </a>
        <a href="https://twitter.com/HypatiaDev"> <AiOutlineTwitter/> </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; AdriCodes. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer