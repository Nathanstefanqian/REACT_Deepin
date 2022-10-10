import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style/style.scss'
import ReactSVG from 'react-svg'
// import { STATIC_RESOURCES_URL } from 'https://image-5gw.pages.dev/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />

    </React.StrictMode>
);
reportWebVitals();