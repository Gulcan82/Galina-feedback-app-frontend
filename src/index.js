import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Das Root-Element, in dem die React-App gerendert wird.
 * 
 * @const {HTMLElement} root - Das DOM-Element, in dem die App angezeigt wird.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Rendert die Haupt-App-Komponente im `root`-Element.
 * 
 * @function render
 * @memberof root
 * @description React.StrictMode ist eine Entwicklungsfunktion, die hilft, potenzielle Probleme in der App zu erkennen.
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Funktion zur Messung der Performance der App.
 * 
 * @function reportWebVitals
 * @param {Function} [console.log] - Optional kann eine Funktion übergeben werden, um die Ergebnisse zu loggen.
 * @description Wenn du die Performance deiner App messen möchtest, kannst du `reportWebVitals(console.log)` oder
 * eine eigene Analyselösung angeben, um die Ergebnisse zu analysieren.
 */
reportWebVitals();
