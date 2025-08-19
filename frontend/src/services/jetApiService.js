const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log('🔍 API_BASE_URL:', API_BASE_URL);

export const getJets = async () => {
  try {
      console.log('🚀 Fetching jets from:', `${API_BASE_URL}/jets`);
    const response = await fetch(`${API_BASE_URL}/jets`);

       console.log('📡 Response status:', response.status);
    console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));
    

  if (!response.ok) {
      // Vérifier si la réponse contient du JSON
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      } else {
        // Si ce n'est pas du JSON, obtenir le texte brut
        const errorText = await response.text();
        console.error('❌ Non-JSON error response:', errorText);
        throw new Error(`HTTP error ${response.status}: ${errorText.substring(0, 100)}`);
      }
    }

      // Vérifier le Content-Type de la réponse
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const responseText = await response.text();
      console.error('❌ Expected JSON but got:', contentType);
      console.error('❌ Response text:', responseText);
      throw new Error(`Expected JSON response, got ${contentType}. Response: ${responseText.substring(0, 100)}`);
    }
    
    const jsonData = await response.json();
    console.log('✅ Successfully fetched jets:', jsonData);
    
    return jsonData;
  } catch (error) {
    console.error("❌ Error fetching jets:", error);
    throw error;
  }
};

export const getJetById = async (id) => {
  try {
    console.log('🚀 Fetching jet by ID:', `${API_BASE_URL}/jets/${id}`);
    
    const response = await fetch(`${API_BASE_URL}/jets/${id}`);
    
    if (!response.ok) {
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      } else {
        const errorText = await response.text();
        throw new Error(`HTTP error ${response.status}: ${errorText.substring(0, 100)}`);
      }
    }
    
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error(`Expected JSON response, got ${contentType}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`❌ Error fetching jet ${id}:`, error);
    throw error;
  }

};
