import { Button } from 'antd';
import { Helmet } from 'react-helmet';

const orders = [
  {
    username: '[tên đăng nhập]',
    fullName: '[tên người dùng]',
    email: '[email]',
    packageName: 'Customizable',
    contacted: true,
    paid: true,
  },
  {
    username: 'ml24',
    fullName: 'Mai Linh',
    email: 'ml24@gmail.com',
    packageName: 'Customizable',
    contacted: true,
    paid: true,
  },
  {
    username: 'qt99',
    fullName: 'Quang Tran',
    email: 'qt99@gmail.com',
    packageName: '',
    contacted: false,
    paid: false,
  },
  {
    username: 'hl07',
    fullName: 'Hoang Long',
    email: 'hl07@gmail.com',
    packageName: '',
    contacted: false,
    paid: false,
  },
];

const ManageUser = () => {
  return (
    <>
      <Helmet>
        <title>Fortune | Hệ thống người dùng </title>
      </Helmet>
      <section className="p-4 space-y-4 mx-20 my-10">
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between items-center bg-sub3 rounded-lg p-4"
          >
            <p className="text-[15px] font-medium leading-6 text-primary">
              Người dùng: {order.username} ({order.fullName}) ({order.email})
              gửi yêu cầu mua{' '}
              <span className="font-bold text-primary">
                {order.packageName ? `gói ${order.packageName}` : 'gói'}
              </span>
            </p>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <Button
                type={order.contacted ? 'primary' : 'default'}
                className={`!py-4 !px-3 font-medium ${
                  !order.contacted
                    ? '!border-primary !border-2 !text-primary'
                    : ''
                }`}
              >
                {order.contacted ? 'Đã liên hệ' : 'Chưa liên hệ'}
              </Button>
              <Button
                type={order.paid ? 'primary' : 'default'}
                className={`!py-4 !px-3 font-medium ${
                  !order.paid ? '!border-primary !border-2 !text-primary' : ''
                }`}
              >
                {order.paid ? 'Đã thanh toán' : 'Chưa thanh toán'}
              </Button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ManageUser;
