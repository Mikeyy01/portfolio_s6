import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Preloader from './Preloader';
import './homepage.css';
import './fonts.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);

  const handlePreloaderEnd = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(sectionRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, [loading]);

  return (
      <div className="port" style={{ height: '100vh' }}>
        {loading && <Preloader onEnd={handlePreloaderEnd} />}
        {!loading && (
            <div ref={contentRef}>
              <section className="section1" ref={sectionRef}>
                <div className="content">
                  <h1>MICHAEL<br />ASLANIDIS</h1>
                  <img src="/images/profile.png" alt="profile avatar" className="avatar" />
                </div>
              </section>
            </div>
        )}
      </div>
  );
};

export default App;
