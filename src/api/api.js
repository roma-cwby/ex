import axios from 'axios';

export const addPost = async body => {
  return await axios.post('/api/posts', body);
};

export const getOwnPost = async () => {
  return await axios.get('/api/posts/own');
};

export const getAllPosts = async () => {
  return await axios.get('/api/posts');
};

export const getPostById = async id => {
  return await axios.get(`/api/posts/${id}`);
};

export const updatePost = async (id, data) => {
  return await axios.put(`/api/posts/${id}`, data);
};

export const deletePost = async id => {
  return await axios.delete(`/api/posts/${id}`);
};

export const toggleLike = async id => {
  return await axios.patch(`/api/posts/${id}`);
};

export const addCommentary = async (id, data) => {
  return await axios.patch(`/api/posts/${id}/commentary`, data);
};

export const updateCommentary = async (id, commentId, data) => {
  return await axios.patch(`/api/posts/${id}/commentary/${commentId}`, data);
};

export const deleteCommentary = async (id, commentId) => {
  return await axios.delete(`/api/posts/${id}/commentary/${commentId}`);
};

export const search = async (q, g) => {
  if (q && g) {
    const genres = g.join('-');
    return await axios.get(`/api/posts/search?q=${q}&genres=${genres}`);
  }

  if (!q) {
    const genres = g.join('-');
    return await axios.get(`/api/posts/search?genres=${genres}`);
  }

  return await axios.get(`/api/posts/search?q=${q}`);
};
