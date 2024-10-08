import React, { useState } from 'react';
import { createFeedback } from '../api/feedbackApi';

/**
 * FeedbackForm-Komponente
 * 
 * Diese Komponente ermöglicht es dem Benutzer, ein neues Feedback zu erstellen und es an das Backend zu senden.
 * 
 * @component
 * @param {Function} onFeedbackAdded - Eine Callback-Funktion, die nach dem erfolgreichen Hinzufügen eines Feedbacks aufgerufen wird.
 * @returns {JSX.Element} Das Formular zur Eingabe von Feedback.
 */
const FeedbackForm = ({ onFeedbackAdded }) => {
    // Zustand für Titel und Text des Feedbacks
    const [title, setTitle] = useState('');
    const [text, setText] = useState(''); 

    /**
     * Verarbeitet das Absenden des Formulars, um das Feedback an das Backend zu senden.
     * 
     * @async
     * @function handleSubmit
     * @param {Object} e - Das Ereignisobjekt des Formulars.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Sende das Feedback an das Backend
        await createFeedback({ title, text });
        // Setze die Eingabefelder zurück
        setTitle('');
        setText('');
        // Rufe die Callback-Funktion auf, um anzuzeigen, dass Feedback hinzugefügt wurde
        onFeedbackAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Feedback</h2>
            <input
                type="text"
                placeholder="Add Feedback Title Here"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <br/>
            <textarea 
                placeholder="Add Feedback Text Here"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <br/>
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
