import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
// import qilinganda Bu Appni App papkadagi index.js dan avtomatik olyapdi
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
);