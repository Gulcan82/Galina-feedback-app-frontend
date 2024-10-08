import React from "react";
import FeedbackItem from "./FeedbackItem";

/**
 * FeedbackList-Komponente
 * 
 * Diese Komponente zeigt eine Liste von Feedback-Einträgen an. Falls keine Feedbacks vorhanden sind,
 * wird eine Nachricht angezeigt. Jedes Feedback kann gelöscht werden, wobei die Parent-Komponente
 * über die Löschung informiert wird.
 * 
 * @component
 * @param {Array} feedbacks - Eine Liste von Feedback-Objekten, die angezeigt werden sollen (jedes enthält `id`, `title`, und `text`).
 * @param {Function} onFeedbackDeleted - Eine Callback-Funktion, die aufgerufen wird, wenn ein Feedback erfolgreich gelöscht wurde.
 * @returns {JSX.Element} Eine Liste von Feedback-Einträgen oder eine Nachricht, falls keine vorhanden sind.
 */
const FeedbackList = ({ feedbacks, onFeedbackDeleted }) => {
    return (
        <div>
            <h2>Feedback</h2>
            {feedbacks.length === 0 ? (
                <p>No feedback available.</p>  // Zeige eine Nachricht an, wenn keine Feedback-Einträge vorhanden sind
            ) : (
                feedbacks.map((feedback) => (
                    <FeedbackItem 
                        key={feedback.id}
                        feedback={feedback}
                        onDeleted={onFeedbackDeleted}  // Rufe die Funktion auf, wenn ein Feedback gelöscht wurde
                    />
                ))
            )}
        </div>
    );
};

export default FeedbackList;
