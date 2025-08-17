import axiosClient from '../configs/axiosClient';

const getAllOrder = () => {
  return axiosClient.get(`/Order/GetAllOrder`);
};

const getUserPurchasePackage = (userId) => {
  return axiosClient.get(`/Order/GetUserPurchasePackage?userId=${userId}`);
};

const updateOrderContact = (id) => {
  return axiosClient.put(`/Order/updateOrderContact/${id}`);
};

export { getAllOrder, getUserPurchasePackage, updateOrderContact };
