import { PREDICTION_API_URL } from '../config';

// Create a new prediction
export const createPrediction = async (question) => {
  try {
    const response = await fetch(`${PREDICTION_API_URL}/prediction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error creating prediction:', error);
  }
};

// Get all predictions from the API
export const getPredictions = async () => {
  try {
    const response = await fetch(`${PREDICTION_API_URL}/prediction`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result.map(prediction => ({
      question: prediction.question,
      predictionId: prediction.predictionId,
      prediction: prediction.prediction,
    }));
  } catch (error) {
    console.error('Error fetching predictions:', error);
    return [];
  }
};

// Delete a specific prediction by ID
export const deletePrediction = async (id) => {
  try {
    const response = await fetch(`${PREDICTION_API_URL}/prediction/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result.message;
  } catch (error) {
    console.error(`Error deleting prediction with ID ${id}:`, error);
  }
};