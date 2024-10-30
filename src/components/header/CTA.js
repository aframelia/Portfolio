import React from 'react'
// import CV from '../../assets/AfraCV.pdf'

export default function CTA() {

  return (
    
    <div className="cta">

        {/* <a href={CV} download className='btn'>Download CV</a> */}
        <a download className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}