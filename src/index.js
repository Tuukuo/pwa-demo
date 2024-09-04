import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


if (process.env.NODE_ENV === 'production') {
  
  const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  navigator.serviceWorker.register(swUrl)
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
