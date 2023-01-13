import React from 'react'
import './Contatct.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {MdAlternateEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_trn9jjb', 'template_wul2vtj', form.current, 'iS2-7z9cOXTvSz61u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <HiOutlineMailOpen className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>adri.brown89@gmail.com</h5>
            <a href="mailto:adri.brown89@gmail.com">Send a message</a>
          </article>

          <article className="contact-option">
            <MdAlternateEmail className='contact-option-icon' />
            <h4>LinkedIn Message</h4>
            <a href="https://www.linkedin.com/in/adrienne-jordan389/">Send a message</a>
          </article>
        </div>

        {/* === CONTACT FORM === */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name Here Please' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message Here' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message!</button>
        </form>

      </div>

    </section>
  )
}

export default Contact