const PATH_NAME = {
  HOME: '/',
  AUTH: '/auth',
  PRODUCT: '/product',
  NOT_FOUND: '*',
  USER: '/user',
  ADMIN: '/admin',
  COST: '/cost',
  SERVICE: '/service',
  PAYMENT: '/payment',
  PAYMENT_SUCCESS: '/payment/success',
  PAYMENT_CANCEL: '/payment/cancel',
  USER_INFO: '/user/info',
};

const NAV_ELEMENTS = [
  {
    name: 'Sản phẩm',
    path: '/product',
  },
  {
    name: 'Bảng giá',
    path: '/cost',
  },
  {
    name: 'Tư vấn dịch vụ',
    path: '/service',
  },
];

export { PATH_NAME, NAV_ELEMENTS };
