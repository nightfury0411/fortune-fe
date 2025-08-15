import { notification } from 'antd';

export const notify = (type, { description, duration = 3 } = {}) => {
  const defaultMessages = {
    info: 'Thông báo',
    success: 'Thành công',
    error: 'Lỗi',
    warning: 'Cảnh báo',
  };

  if (!['info', 'success', 'error', 'warning'].includes(type)) {
    console.warn('Loại thông báo không hợp lệ:', type);
    return;
  }

  notification[type]({
    message: defaultMessages[type],
    ...(description && { description }),
    duration,
  });
};

export const formatDate = (dateString) => {
  if (!dateString || dateString.length < 14) return dateString;

  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);
  const hour = dateString.substring(8, 10);
  const minute = dateString.substring(10, 12);
  const second = dateString.substring(12, 14);

  return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
};

export const formatCurrency = (amount) => {
  const amountInVND = parseInt(amount);
  return `${amountInVND.toLocaleString('vi-VN')} VND`;
};

export const getResponseCodeMessagePayos = (code) => {
  const messages = {
    '00': 'Thành công',
    '01': 'Giao dịch chưa hoàn tất',
    '02': 'Giao dịch bị từ chối',
    '03': 'URL merchant không hợp lệ',
    '04': 'Không thực hiện được giao dịch',
    '05': 'Giao dịch đã tồn tại',
    '06': 'Giao dịch không tồn tại',
    '07': 'Yêu cầu bị từ chối',
  };
  return messages[code] || 'Không xác định';
};
