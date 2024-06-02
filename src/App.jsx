import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from './Preloader';
import './homepage.css';
import './navbar.css';
import './fonts.css';
import initializeBlobity from './blobityConfig';
import { FaFilePdf, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { GiOpenBook } from "react-icons/gi";
import videoPort from './images/VideoPort.png';
import laptopBg from './images/LaptopBG.png';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const section2Ref = useRef(null);
  const headingRef = useRef(null);
  const avatarRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);
  const navbarRef = useRef(null);

  const laptopImgRef = useRef(null);
  const projectInfoRef = useRef(null);
  const projectIconsRef = useRef(null);

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

      ScrollTrigger.create({
        trigger: section2Ref.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo([laptopImgRef.current, projectInfoRef.current, projectIconsRef.current],
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
          );
        },
      });

      return () => {
        blobity.destroy();
        ScrollTrigger.kill();
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
                <a href="-" target="_blank" data-blobity-tooltip="View CV">
                  <FaFilePdf />
                </a>
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </nav>
              <section className="section2" ref={section2Ref}>
                <div className="laptop-background" ref={laptopImgRef}>
                  <img src={laptopBg} alt="Laptop background" className="laptop-bg"/>
                  <img src={videoPort} alt="Portfolio on laptop" className="video-port"/>
                </div>
                <div className="project-info" ref={projectInfoRef}>
                  <div className="project-icons" ref={projectIconsRef}>
                    <div className="icon-circle" data-blobity><FaGithub /></div>
                    <div className="icon-circle" data-blobity><TbMovie /></div>
                    <div className="icon-circle" data-blobity><GiOpenBook /></div>
                    <div className="icon-circle" data-blobity><FaExternalLinkAlt /></div>
                  </div>
                  <div className="project-details">
                    <h2>Video Portfolio</h2>
                    <p>Personal Portfolio showcasing videos I've edited.</p>
                    <p className="project-tags">JAVASCRIPT  BOOTSTRAP  ANIMATE.CSS</p>
                  </div>
                </div>
              </section>
            </div>
        )}
      </div>
  );
};

export default App;
