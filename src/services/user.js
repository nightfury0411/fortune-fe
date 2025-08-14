import axiosClient from '../configs/axiosClient';

const getUser = () => {
  return axiosClient.get(`/User/User`);
};

export { getUser };
