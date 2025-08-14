import axiosClient from '../configs/axiosClient';

const getMiniGame = () => {
  return axiosClient.get(`/MiniGame`);
};

const getMiniGameDetail = (id) => {
  return axiosClient.get(`/MiniGame/${id}`);
};

const createMiniGame = (payload) => {
  return axiosClient.post(`/MiniGame`, payload);
};

const updateMiniGame = ({ id, payload }) => {
  return axiosClient.put(`/MiniGame/${id}`, payload);
};

const uploadMiniGame = ({ mgName, mgDes, publicId, file }) => {
  const formData = new FormData();
  formData.append('file', file);

  return axiosClient.post(
    `/MiniGame/upload?mgName=${mgName}&mgDes=${mgDes}&publicId=${publicId}`,
    formData,
  );
};

const getMiniGameDownload = (id) => {
  return axiosClient.get(`/MiniGame/download/${id}`, {
    responseType: 'arraybuffer',
  });
};

export {
  getMiniGame,
  getMiniGameDetail,
  createMiniGame,
  updateMiniGame,
  uploadMiniGame,
  getMiniGameDownload,
};
