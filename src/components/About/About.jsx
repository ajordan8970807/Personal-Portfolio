import React from 'react'
import './About.css'
import Me from '../../assets/Me.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {IoLibrarySharp} from 'react-icons/io5'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year of Working Knowledge</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3 Local Small Businesses</small>
            </article>

            <article className='about__card'>
              <IoLibrarySharp className='about__icon'/>
              <h5>Projects</h5>
              <small>10 Completed projects and counting</small>
            </article>
          </div>

          <p>
          After realizing my artistic talent for drawing and indulgent creative creation in my teen years, I took it and have been running with it ever since. Doodling, drawing portraits, digital art, to majoring in film production while in college. Anything that I can create that can be useful and enjoyable to those around me, gives me a sense of happiness and accomplishment.
          <br/>
          <br/>
          Having 10 years of corporate work experience, which in that time I've honed and expanded my knowledge in various fields with a main focus in Administrative Assistance. Though I've worn many hats within the Administrative field, I've continued my technological education to become a successful Web Developer. I've learned that my talent of building rapport with my peers and clients alike gives me a better insight into how I can best utilize my skills and creativity to get to where I want to be.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Chat!</a>
        </div>
      </div>
    </section>
  )
}

export default About