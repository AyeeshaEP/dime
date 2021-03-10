import api from './api-config';

export const getAllSeries = async () => {
  const resp = await api.get('/series');
  return resp.data;
}

export const getOneSeries = async (id) => {
  const resp = await api.get(`/series/${id}`);
  return resp.data;
}