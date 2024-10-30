import React from 'react'
import './myprojects.css' 


export default function Myprojects() {
    return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src='flight.jpg' alt="" />
            </div>
            <h3>Flight App</h3>
            <small className='text-light'>UX/UI Case study</small>
            <div className="portfolio__item-cta">
              {/* <a href="https://github.com/himani413/FashionGallery" target="_blank" rel='noreferrer' className='btn'>Github</a> */}
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src='squidgy.jpg' alt="" />
            </div>
            <h3>E-commerce app</h3>
            <small className='text-light'>UX/UI Case study and React.js</small>
            <div className="portfolio__item-cta">
              {/* <a href="https://github.com/Thakshila-Bandara/Beauty-Garden" target="_blank" rel='noreferrer' className='btn'>Github</a>   */}
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src='cupcake.jpg' alt="" />
            </div>
            <h3>Toronto Cupcake</h3>
            <small className='text-light'>UX/UI Case study</small>
            <div className="portfolio__item-cta">
              {/* <a href="https://github.com/Thakshila-Bandara/my-portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a> */}
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src='squidgy.jpg' alt="" />
            </div>
            <h3>E-commerce app</h3>
            <small className='text-light'>UX/UI Case study and React.js</small>
            <div className="portfolio__item-cta">
              {/* <a href="https://github.com/Thakshila-Bandara/Beauty-Garden" target="_blank" rel='noreferrer' className='btn'>Github</a>   */}
            </div>
            
        </article>
      </div>
    </section>
  )
}