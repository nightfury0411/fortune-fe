import axiosClient from '../configs/axiosClient';

const getUser = () => {
  return axiosClient.get(`/User/User`);
};

const updateUser = (payload) => {
  return axiosClient.post(`/User/update-user`, payload);
};

export { getUser, updateUser };
