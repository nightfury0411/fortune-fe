import axiosClient from '../configs/axiosClient';

const getPackage = () => {
  return axiosClient.get(`/Package`);
};

export { getPackage };
