import api from './api-config';

export const getAllSeries = async () => {
  const resp = await api.get('/series');
  return resp.data;
}