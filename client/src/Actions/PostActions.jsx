import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const fetchAllPostsAction = async (pageParams) => {
  const response = await axios.get(`${baseUrl}/posts`, {
    params: { page: pageParams, limit: 5 },
  });
  return response.data;
};
