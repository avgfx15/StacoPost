import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

// / Fetch All Posts Action
export const fetchAllPostsAction = async (pageParams) => {
  const response = await axios.get(`${baseUrl}/posts`, {
    params: { page: pageParams, limit: 5 },
  });
  return response.data;
};

// / Fetch Single Post Action
export const fetchSinglePostAction = async (slug) => {
  const response = await axios.get(`${baseUrl}/posts/${slug}`);

  return response.data;
};

// + Create New Post Action
export const createNewPostAction = async (newPost, token) => {
  console.log(newPost);
  console.log(token);
  const response = await axios.post(`${baseUrl}/posts`, newPost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// - Delete Single Post Action
export const deleteSinglePostAction = async (postId, token) => {
  const response = await axios.delete(`${baseUrl}/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// / Fetch All Categories Action
export const fetchAllCategoriesAction = async () => {
  const response = await axios.get(`${baseUrl}/categories`);
  return response.data;
};

// + Create New Category Action
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

// - Delete Category Action
export const deleteCategoryAction = async (categoryId, token) => {
  const response = await axios.delete(`${baseUrl}/categories/${categoryId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// / Fetch All Comments By PostId Action
export const fetchCommentsByPostIdAction = async (postId) => {
  const response = await axios.get(`${baseUrl}/comments/${postId}`);
  return response.data;
};

// + Create New Comment For a Post By PostId Action
export const createCommentForPostAction = async (
  postId,
  commentDesc,
  token
) => {
  const response = await axios.post(
    `${baseUrl}/comments/${postId}`,
    { commentDesc },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
