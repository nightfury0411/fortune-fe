import axiosClient from '../configs/axiosClient';

const getAllOrder = () => {
  return axiosClient.get(`/Order/GetAllOrder`);
};

const getUserPurchasePackage = () => {
  return axiosClient.get(`/Order/GetUserPurchasePackage`);
};

const updateOrderContact = (id) => {
  return axiosClient.put(`/Order/updateOrderContact/${id}`);
};

export { getAllOrder, getUserPurchasePackage, updateOrderContact };
