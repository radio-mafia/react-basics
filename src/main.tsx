import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const rootNode: HTMLElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
