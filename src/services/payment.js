import axiosClient from '../configs/axiosClient';

const payment = ({ id, guestEmail }) => {
  return axiosClient.post(`/payment/${id}/checkout?guestEmail=${guestEmail}`);
};

export { payment };
