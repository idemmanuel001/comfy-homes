import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com';

export const  fetchApi = async (url) => {
  const response = await axios.get((url),
    {
      headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '97795a3803msh325e2ed4a7bbe59p1dd9b0jsnab71b10b7bab'
        //process.env.NEXT_PUBLIC_RAPID_API_KEY
      }
    });

    return response;
};

