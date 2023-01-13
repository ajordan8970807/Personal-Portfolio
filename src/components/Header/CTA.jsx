import React from 'react'
import Resume from '../../assets/Technical Resume - alj12.22.pdf'

const CTA = () => {
  return (
    <div>
      <a href= {Resume} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CTA