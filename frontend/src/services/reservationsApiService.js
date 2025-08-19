import API_BASE_URL from "../config/api";

// Services pour les Réservations
export const getReservations = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/reservations`);
    return handleResponse(response);
  } catch (error) {
    console.error("Error fetching reservations:", error);
    throw error;
  }
};

export const getReservationById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reservations/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching reservation ${id}:`, error);
    throw error;
  }
};

export const createReservation = async (reservationData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error creating reservation:", error);
    throw error;
  }
};

export const updateReservation = async (id, reservationData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reservations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error updating reservation ${id}:`, error);
    throw error;
  }
};

export const deleteReservation = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reservations/${id}`, {
      method: "DELETE",
    });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error deleting reservation ${id}:`, error);
    throw error;
  }
};

// Fonction utilitaire pour gérer les réponses
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const error = new Error(
      errorData.message || `HTTP error! status: ${response.status}`
    );
    error.status = response.status;
    throw error;
  }
  return await response.json();
};
