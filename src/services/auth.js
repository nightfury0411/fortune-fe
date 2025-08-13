import axiosClient from '../configs/axiosClient';

const login = (payload) => {
  return axiosClient.post(`/User/login`, payload);
};
const register = (payload) => {
  return axiosClient.post(`/User/register`, payload);
};

export { login, register };
