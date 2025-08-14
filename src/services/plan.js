import axiosClient from '../configs/axiosClient';

const getPlan = () => {
  return axiosClient.get(`/Plan`);
};

const getPlanDetail = (id) => {
  return axiosClient.get(`/Plan/${id}`);
};

const createPlan = (payload) => {
  return axiosClient.post(`/Plan`, payload);
};

const updatePlan = ({ id, payload }) => {
  return axiosClient.put(`/Plan/${id}`, payload);
};

const uploadPlan = ({ mgName, mgDes, publicId, file }) => {
  const formData = new FormData();
  formData.append('file', file);

  return axiosClient.post(
    `/Plan/upload?planName=${mgName}&planDes=${mgDes}&publicId=${publicId}`,
    formData,
  );
};

const getPlanDownload = (id) => {
  return axiosClient.get(`/Plan/download/${id}`, {
    responseType: 'arraybuffer',
  });
};

export {
  createPlan,
  getPlan,
  getPlanDetail,
  getPlanDownload,
  updatePlan,
  uploadPlan,
};
