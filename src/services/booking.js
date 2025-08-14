import axiosClient from '../configs/axiosClient';

const getBooking = () => {
  return axiosClient.get(`/Booking`);
};

const getBookingDetail = (id) => {
  return axiosClient.get(`/Booking/${id}`);
};

const createBooking = (payload) => {
  return axiosClient.post(`/Booking`, payload);
};

const updateBooking = ({ id, payload }) => {
  return axiosClient.put(`/Booking/${id}`, payload);
};

export { getBooking, getBookingDetail, createBooking, updateBooking };
