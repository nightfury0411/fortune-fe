import axiosClient from '../configs/axiosClient';

const getAllOrder = () => {
  return axiosClient.get(`/Order/GetAllOrder`);
};

const getUserPurchasePackage = (userId) => {
  return axiosClient.get(`/Order/GetUserPurchasePackage/${userId}`);
};

export { getAllOrder, getUserPurchasePackage };
