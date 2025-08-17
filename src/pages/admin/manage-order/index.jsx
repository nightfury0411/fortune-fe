import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import { Helmet } from 'react-helmet';
import { getAllOrder } from '../../../services/order';
import { getUser } from '../../../services/user';

const ManageOrder = () => {
  const { data: orderResponse, isLoading: isLoadingOrder } = useQuery({
    queryKey: ['orders'],
    queryFn: getAllOrder,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const { data: userResponse } = useQuery({
    queryKey: ['users'],
    queryFn: getUser,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const userList = userResponse?.data ?? [];
  const orderList = orderResponse?.data ?? [];

  const usersWithOrderInfo = [];

  userList.forEach((user) => {
    const userOrders = orderList.filter(
      (order) => order?.userName === user?.userName,
    );

    if (userOrders.length > 0) {
      userOrders.forEach((order, orderIndex) => {
        usersWithOrderInfo.push({
          ...user,
          packageName: order.packageName,
          status: order.status,
          contact: order.contact,
          hasOrder: true,
          orderIndex: orderIndex + 1,
          orderId: order.id,
          totalOrders: userOrders?.length,
        });
      });
    } else {
      usersWithOrderInfo.push({
        ...user,
        packageName: 'Chưa mua gói',
        status: 'No Package',
        contact: false,
        hasOrder: false,
        orderIndex: 0,
        orderId: null,
        totalOrders: 0,
      });
    }
  });

  if (isLoadingOrder) {
    return (
      <>
        <Helmet>
          <title>Fortune | Quản lý đơn </title>
        </Helmet>
        <div className="flex items-center justify-center">
          <Spin size="large" />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Fortune | Quản lý đơn </title>
      </Helmet>
      <section className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {usersWithOrderInfo?.map((user, index) => (
            <div
              key={
                user.orderId
                  ? `${user.user_id}-${user.orderId}`
                  : `user-${user.user_id}-${index}`
              }
              className={`bg-white border rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow ${
                !user.hasOrder ? 'opacity-75' : ''
              }`}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#3a3a87] bg-gray-100 flex items-center justify-center">
                <span className="text-[#3a3a87] font-bold text-xl">
                  {(user.fullName && user.fullName.charAt(0)?.toUpperCase()) ||
                    '?'}
                </span>
              </div>

              <p className="mt-4 text-[#3a3a87] font-medium break-words">
                {user.userName} ({user.fullName})
              </p>

              <p className="text-[#3a3a87] break-words text-sm">{user.email}</p>

              <p
                className={`mt-2 font-bold ${
                  user.hasOrder ? 'text-[#3a3a87]' : 'text-gray-500'
                }`}
              >
                {user.packageName}
              </p>
            </div>
          ))}
        </div>

        {usersWithOrderInfo?.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            Không có người dùng nào
          </div>
        )}
      </section>
    </>
  );
};

export default ManageOrder;
