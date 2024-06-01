import React, { useState } from 'react';
import Preloader from './Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderEnd = () => {
    setLoading(false);
  };

  return (
      <div>
        {loading && <Preloader onEnd={handlePreloaderEnd} />}
        {!loading && (
            <div>
            </div>
        )}
      </div>
  );
};

export default App;
