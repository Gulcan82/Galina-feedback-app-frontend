import React from "react";
import { deleteFeedback } from "../api/feedbackApi";

/**
 * FeedbackItem-Komponente
 * 
 * Diese Komponente zeigt ein einzelnes Feedback an und ermöglicht es, das Feedback zu löschen.
 * 
 * @component
 * @param {Object} feedback - Das Feedback-Objekt, das angezeigt wird (enthält `title` und `text`).
 * @param {Function} onDeleted - Eine Callback-Funktion, die aufgerufen wird, wenn das Feedback erfolgreich gelöscht wurde.
 * @returns {JSX.Element} Die visuelle Darstellung eines Feedback-Eintrags mit einer Löschfunktion.
 */
const FeedbackItem = ({ feedback, onDeleted }) => {

    /**
     * Verarbeitet das Löschen des Feedbacks, indem eine Anfrage an das Backend gesendet wird.
     * 
     * @async
     * @function handleDelete
     * @returns {Promise<void>} Löscht das Feedback und ruft die Callback-Funktion `onDeleted` auf.
     */
    const handleDelete = async () => {
        await deleteFeedback(feedback.title);  // Lösche das Feedback basierend auf dem Titel
        onDeleted();  // Rufe die Callback-Funktion auf, um anzuzeigen, dass das Feedback gelöscht wurde
    }

    return (
        <div className="feedback-item">
            <h3>{feedback.title}</h3>
            <p>{feedback.text}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default FeedbackItem;
