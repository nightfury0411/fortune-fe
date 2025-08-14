import axiosClient from '../configs/axiosClient';

const getStaff = () => {
  return axiosClient.get(`/Staff`);
};

const getStaffDetail = (userName) => {
  return axiosClient.post(`/Staff/userName=${userName}`);
};

export { getStaff, getStaffDetail };
