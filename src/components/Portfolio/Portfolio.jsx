import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.jpg'
import img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: img1,
    title: 'Project 1',
    github: 'https://github.com/ajordan8970807',
    livedemo: 'https://github.com/ajordan8970807'
  },

  {
    id: 2,
    image: img1,
    title: 'Project 2',
    github: 'https://github.com/ajordan8970807',
    livedemo: 'https://github.com/ajordan8970807'
  },

  {
    id: 3,
    image: img1,
    title: 'Project 3',
    github: 'https://github.com/ajordan8970807',
    livedemo: 'https://github.com/ajordan8970807'
  },

  {
    id: 4,
    image: img1,
    title: 'Project 4',
    github: 'https://github.com/ajordan8970807',
    livedemo: 'https://github.com/ajordan8970807'
  },

  {
    id: 5,
    image: img1,
    title: 'Project 5',
    github: 'https://github.com/ajordan8970807',
    livedemo: 'https://github.com/ajordan8970807'
  },

  {
    id: 6,
    image: img1,
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
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={livedemo} className='btn btn-primary' target='_blank'>Live Demo</a>
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