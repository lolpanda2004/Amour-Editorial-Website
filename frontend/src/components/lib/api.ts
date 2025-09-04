import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getPages = async () => {
  const response = await api.get('/api/pages');
  return response.data;
};

export const submitForm = async (data: FormData) => {
  const response = await api.post('/api/forms', data);
  return response.data;
};

export default api;
