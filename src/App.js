import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Home/index';

function App() {
  return (
    <div>
      <Helmet>
        <title>Spot Us</title>
        <meta name="description" content="Spot Us - Development of Young Sports Talents" />
      </Helmet>
      <Navbar />
    </div>
  );
}

export default App;
