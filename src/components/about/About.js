import React from "react";
import './about.css' 

export default function About() {
    return (
        <section id='about'>
          
          <h5>Get To Know</h5>
          <h2>About Me</h2>
    
          <div className="container about__container">
    
              <div className="about__me">
                <div className="about__me-image">
                    <img className="me" src='me.jpg' alt="Me" />
                </div>
              </div>
    
              <div className="about__content">
                <p>
                        I'm a <b>Software Engineering Undergradute</b> at the Birkbeck Univerity in London. 
                        I'm an enthusiastic and driven UX/UI designer seeking a challenging opportunity to apply 
                        and expand my technical skills. 
                        With a strong academic foundation in software engineering and hands-on experience in various programming languages,
                        I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
                        
                </p>
    
              </div>
          </div>
        </section>
      )
}