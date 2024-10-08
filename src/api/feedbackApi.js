import { BACKEND_URL } from '../config';

/**
 * Sendet eine Anfrage an den Backend-Server, um ein neues Feedback zu erstellen.
 * 
 * @async
 * @function createFeedback
 * @param {Object} feedback - Das Feedback-Objekt, das erstellt werden soll (mit `title` und `text`).
 * @returns {Promise<Object>} Die Antwort des Servers im JSON-Format, enthält das erstellte Feedback.
 * @throws {Error} Wird ausgelöst, wenn die Anfrage fehlschlägt.
 */
export const createFeedback = async (feedback) => {
    const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
    });
    return response.json();
}

/**
 * Ruft alle Feedback-Einträge vom Backend-Server ab.
 * 
 * @async
 * @function getFeedback
 * @returns {Promise<Array>} Eine Liste von Feedback-Einträgen im JSON-Format.
 * @throws {Error} Wird ausgelöst, wenn die Anfrage fehlschlägt.
 */
export const getFeedback = async () => {
    const response = await fetch(BACKEND_URL);
    return response.json();
}

/**
 * Sendet eine Anfrage an den Backend-Server, um ein Feedback anhand des Titels zu löschen.
 * 
 * @async
 * @function deleteFeedback
 * @param {string} title - Der Titel des Feedbacks, das gelöscht werden soll.
 * @returns {Promise<Object>} Die Antwort des Servers im JSON-Format, enthält den Löschstatus.
 * @throws {Error} Wird ausgelöst, wenn die Anfrage fehlschlägt.
 */
export const deleteFeedback = async (title) => {
    const response = await fetch(`${BACKEND_URL}/${title}`, {
        method: 'DELETE'
    });
    return response.json();
}
