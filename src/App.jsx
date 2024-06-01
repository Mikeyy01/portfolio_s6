import React, { useState } from 'react';
import Preloader from './Preloader';
import './homepage.css'

const App = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderEnd = () => {
    setLoading(false);
  };

  return (
      <div style={{ height: '100vh'}}>
        <section className="section1">
        </section>
        {loading && <Preloader onEnd={handlePreloaderEnd} />}
        {!loading && (
            <div>
                <section className="section2">
                 </section>
            </div>
        )}
      </div>
  );
};

export default App;
