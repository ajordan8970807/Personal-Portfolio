import React from 'react'
import './Services.css'
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className='service'>
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='services-list'>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Samuel L. Jackson's wig collection be poppin'.</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Samuel L. Jackson's wig collection be poppin'.</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Samuel L. Jackson's wig collection be poppin'.</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Samuel L. Jackson's wig collection be poppin'.</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Samuel L. Jackson's wig collection be poppin'.</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Samuel L. Jackson's wig collection be poppin'.</p>
            </li>
          </ul>
        </article>

{/* === CARD BREAK! === */}

<article className='service'>
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className='services-list'>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Where Is My Super Suit?!</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Where Is My Super Suit?!</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Where Is My Super Suit?!</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Where Is My Super Suit?!</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Where Is My Super Suit?!</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Where Is My Super Suit?!</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Where Is My Super Suit?!</p>
            </li>
          </ul>
        </article>

{/* === CARD BREAK === */}

<article className='service'>
          <div className="service-head">
            <h3>Content Creation</h3>
          </div>
          <ul className='services-list'>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Oh, I'm sorry, did I break your concentration?</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Oh, I'm sorry, did I break your concentration?</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Oh, I'm sorry, did I break your concentration?</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Oh, I'm sorry, did I break your concentration?</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Oh, I'm sorry, did I break your concentration?</p>
            </li>

            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Oh, I'm sorry, did I break your concentration?</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services