import React, { useState, useEffect } from 'react';
import './header.css' 
import TrackVisibility from 'react-on-screen';

export default function Header() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(150);
  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
  const period = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setSpeed(100);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(() => handleTyping(), speed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum]);

  return (
    <header id="home">
      <div className="header__container">
        <div className='intro'>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={`md:w-1/2 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                <h1 className="text-3xl md:text-5xl font-bold">
                  {`Hi! I'm Afra`}{' '}
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "Web Designer", "UI/UX Designer"]'>
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="cta">
                    {/* <a href={CV} download className='btn'>Download CV</a> */}
                    <a download className='btn'>Download CV</a>
                    <a href="#contacts" className='btn btn-primary'>Contact Me</a>
                </div>
              </div>
            )}
          </TrackVisibility>
        </div>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className='introImg'>
              <div className={`mt-8 md:mt-0 md:w-1/2 flex justify-center ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}>
                <img
                  src="3d.png"
                  alt="Intro"
                />
              </div>
              
            </div>

          )}
        </TrackVisibility>
      </div>
    </header>
  );
}
