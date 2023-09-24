import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  params: {
    part: 'snippet', // You may need to specify other parameters like 'q', 'maxResults', etc.
    maxResults: 50,
    q: '', // You can set the 'q' parameter dynamically when making the request
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (query) => {
  // Update the 'q' parameter in options based on the query
  options.params.q = query;

  try {
    const response = await axios.get(BASE_URL, options);
    console.log(response);
    return response.data;
   
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // You can choose to handle the error further or rethrow it
  }
};
