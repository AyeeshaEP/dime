import api from './api-config';

export const getAllComments = async () => {
  const resp = await api.get('/comments');
  return resp.data;
}

export const getOneComent= async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
}

export const postComment = async (commentData) => {
  const resp = await api.post('/foods', { comment: commentData });
  return resp.data;
}

export const putComment = async (id, commentData) => {
  const resp = await api.put(`/coments/${id}`, { comment: commentData });
  return resp.data;
}

export const destroyComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp;
}