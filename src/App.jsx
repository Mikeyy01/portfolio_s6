import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Preloader from './Preloader';
import './homepage.css';
import './navbar.css';
import './fonts.css';
import initializeBlobity from './blobityConfig';
import { FaFilePdf } from "react-icons/fa6";


const App = () => {
  const [loading, setLoading] = useState(true);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const avatarRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);
  const navbarRef = useRef(null);

  const handlePreloaderEnd = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(sectionRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo([headingRef.current, avatarRef.current],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.4, stagger: 0.2 }
      );

      gsap.fromTo([bottomLeftRef.current, bottomRightRef.current],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.8, stagger: 0.2 }
      );

      gsap.fromTo(navbarRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.2 }
      );

      // Initialize Blobity using the setup function
      const blobity = initializeBlobity();

      return () => {
        blobity.destroy();
      };
    }
  }, [loading]);

  return (
      <div className="port" style={{ height: '100vh' }}>
        {loading && <Preloader onEnd={handlePreloaderEnd} />}
        {!loading && (
            <div ref={contentRef}>
              <section className="section1" ref={sectionRef}>
                <div className="top-left">
                  <button className="resume-button" data-blobity>VIEW RESUME</button>
                </div>
                <div className="top-right">
                  <a href="https://github.com" className="social-link" data-blobity>GITHUB</a>
                  <a href="https://linkedin.com" className="social-link" data-blobity>LINKEDIN</a>
                </div>
                <div className="content">
                  <h1 ref={headingRef}>MICHAEL<br />ASLANIDIS</h1>
                  <img ref={avatarRef} src="/images/profile.png" alt="profile avatar" className="avatar" />
                </div>
                <div className="bottom-left" ref={bottomLeftRef}>
                  <p>Professional Video Editor &<br />Aspiring Front-End Developer</p>
                </div>
                <div className="bottom-right" ref={bottomRightRef}>
                  <p>Dedicated to crafting immersive video <br />edits and engaging front-end <br />experiences.</p>
                </div>
              </section>
              <nav className="fixed-navbar" ref={navbarRef}>
                <a href="-" target="_blank" >
                  <FaFilePdf />
                </a>
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </nav>
              <section></section>
            </div>
        )}
      </div>
  );
};

export default App;
