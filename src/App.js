import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { getFeedback } from './api/feedbackApi';
import './styles/App.css';

/**
 * Haupt-App-Komponente der Feedback-App.
 * 
 * Diese Komponente verwaltet den Zustand der Feedback-Einträge und ermöglicht
 * das Hinzufügen und Löschen von Feedbacks. Sie lädt beim ersten Rendern die
 * vorhandenen Feedbacks von der API und aktualisiert die Anzeige nach
 * Änderungen.
 * 
 * @component
 * @returns {JSX.Element} Die Hauptanzeige der App mit Formular und Liste.
 */
function App() {
  // Zustand, um die Feedback-Einträge zu speichern
  const [feedbacks, setFeedbacks] = useState([]);

  // Effekt-Hook, der beim ersten Rendern ausgeführt wird, um Feedbacks zu laden
  useEffect(() => {
      loadFeedback();
  }, []); // Leeres Array bedeutet, dass der Effekt nur beim ersten Rendern ausgeführt wird

  /**
   * Lädt die Feedback-Daten von der API und setzt den Zustand.
   * 
   * @async
   * @function loadFeedback
   * @returns {Promise<void>} Lädt die Feedback-Daten und aktualisiert den Zustand.
   */
  const loadFeedback = async () => {
    const feedbackData = await getFeedback();
    setFeedbacks(feedbackData);  // Setzt die geladenen Feedback-Einträge in den Zustand
  }

  return (
    <div className='container'>
      <h1>Feedback App</h1>
      {/* Formular zum Hinzufügen von Feedback */}
      <FeedbackForm onFeedbackAdded={loadFeedback}/>
      {/* Liste der vorhandenen Feedback-Einträge */}
      <FeedbackList feedbacks={feedbacks} onFeedbackDeleted={loadFeedback}/>
    </div>
  );
}

export default App;
