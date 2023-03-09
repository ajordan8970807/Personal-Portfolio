import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/smaller-slj.gif'
import img2 from '../../assets/sale-img2.gif'
import img3 from '../../assets/arcade.gif'
import img4 from '../../assets/guess-what.gif'
import img5 from '../../assets/puppy-bowl.gif'
import img6 from '../../assets/inprogress.gif'
import bmo from '../../assets/bmo.png'
import bolt from '../../assets/lighting_bolt.png'

const data = [
  {
    id: 1,
    image: img1,
    title: 'MF Wear', bolt,
    github: 'https://github.com/ajordan8970807/sam.l.jackson.shop',
    livedemo: 'https://astonishing-choux-4932cb.netlify.app/'
  },

  {
    id: 2,
    image: img2,
    title: 'Consortium of Stranger\'s Things',
    github: 'https://github.com/ajordan8970807/strangers-things-project',
    livedemo: 'https://jazzy-sunshine-acd011.netlify.app/'
  },

  {
    id: 3,
    image: img3,
    title: 'AJ\'s Arcade',
    github: 'https://github.com/ajordan8970807',
    livedemo: 'https://harmonious-flan-ec499c.netlify.app/'
  },

  {
    id: 4,
    image: img4,
    title: 'Guessing Game',
    github: 'https://github.com/ajordan8970807',
    livedemo: 'https://62dccfe74c2bea17c5aac08c--dulcet-banoffee-367158.netlify.app/'
  },

  {
    id: 5,
    image: img5,
    title: 'Puppy Bowl',
    github: 'https://github.com/ajordan8970807',
    livedemo: 'https://classy-muffin-89c79a.netlify.app/'
  },

  {
    id: 6,
    image: img6,
    title: 'Project 6',
    github: 'https://github.com/ajordan8970807',
    livedemo: 'https://github.com/ajordan8970807'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          data.map(({id,image, title, github, livedemo}) => {
            return ( 
              <article key={id} className='portfolio-item'>
                <div className="portfolio-item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                  <div className='portfolio-item-cta'>
                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href={livedemo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio