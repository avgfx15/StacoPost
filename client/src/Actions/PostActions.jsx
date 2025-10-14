import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const fetchAllPostsAction = async (pageParams) => {
  const response = await axios.get(`${baseUrl}/posts`, {
    params: { page: pageParams, limit: 5 },
  });
  return response.data;
};

export const fetchAllCategoriesAction = async () => {
  const response = await axios.get(`${baseUrl}/categories`);
  return response.data;
};

export const createCategoryAction = async (categoryName, token) => {
  const response = await axios.post(
    `${baseUrl}/categories`,
    { name: categoryName },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteCategoryAction = async (categoryId, token) => {
  const response = await axios.delete(`${baseUrl}/categories/${categoryId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
