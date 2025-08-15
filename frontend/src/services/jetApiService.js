const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getJets = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/jets`);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const error = new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
      error.status = response.status;
      throw error;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching jets:", error);
    throw error;
  }
};

export const getJetById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/jets/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching jet ${id}:`, error);
    throw error;
  }
};
