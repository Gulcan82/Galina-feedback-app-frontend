/**
 * Funktion zur Erfassung von Web-Vitals für Performance-Messungen.
 * 
 * Diese Funktion lädt dynamisch das `web-vitals`-Paket und ruft verschiedene Metriken wie CLS, FID, FCP, LCP und TTFB ab,
 * um die Performance der Anwendung zu messen. Wenn eine Funktion übergeben wird, wird diese Funktion mit den Performance-Daten aufgerufen.
 * 
 * @function reportWebVitals
 * @param {Function} [onPerfEntry] - Eine optionale Callback-Funktion, die mit den erfassten Performance-Daten aufgerufen wird.
 * @returns {void}
 */
const reportWebVitals = (onPerfEntry) => {
  // Überprüfen, ob `onPerfEntry` eine Funktion ist
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamisches Importieren des `web-vitals`-Moduls und Abrufen der Web-Vitals-Daten
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Erfassung der einzelnen Metriken und Aufruf der Callback-Funktion
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
