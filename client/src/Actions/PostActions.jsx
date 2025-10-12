import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const fetchAllPostsAction = async () => {
  const response = await axios.get(`${baseUrl}/posts`);
  return response.data;
};
