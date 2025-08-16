import { useQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import { Helmet } from 'react-helmet';
import { getAllOrder } from '../../../services/order';

const ManageUser = () => {
  const { data: orders } = useQuery({
    queryKey: ['orders'],
    queryFn: getAllOrder,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const orderList = orders?.data ?? [];

  return (
    <>
      <Helmet>
        <title>Fortune | Hệ thống người dùng </title>
      </Helmet>
      <section className="p-4 space-y-4 mx-14">
        {orderList.map((order, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between items-center bg-sub3 rounded-lg p-4"
          >
            <p className="text-[15px] font-medium leading-6 text-primary">
              Người dùng: {order?.userName} ({order?.fullName}) ({order?.email})
              gửi yêu cầu mua{' '}
              <span className="font-bold text-primary">
                {order.packageName ? `${order?.packageName}` : 'gói'}
              </span>
            </p>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <Button
                type={order?.contacted ? 'primary' : 'default'}
                className={`!py-4 !px-3 font-medium ${
                  !order?.contacted
                    ? '!border-primary !border-2 !text-primary'
                    : ''
                }`}
              >
                {/* {order?.contacted ? 'Đã liên hệ' : 'Chưa liên hệ'} */}
              </Button>
              <Button
                type={order?.paid === 'Paid' ? 'primary' : 'default'}
                className={`!py-4 !px-3 font-medium ${
                  !order?.paid ? '!border-primary !border-2 !text-primary' : ''
                }`}
              >
                {order?.staus === 'Paid' ? 'Đã thanh toán' : 'Chưa thanh toán'}
              </Button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ManageUser;
