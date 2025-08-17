import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import { Helmet } from 'react-helmet';
import { getAllOrder } from '../../../services/order';

const ManageOrder = () => {
  const { data: orderResponse, isLoading: isLoadingOrder } = useQuery({
    queryKey: ['orders'],
    queryFn: getAllOrder,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const orderListActive =
    orderResponse &&
    orderResponse.data?.filter((item) => item?.status === 'Paid');

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
          {orderListActive?.map((user, index) => (
            <div
              key={user.userId ? `${user.userId}-${index}` : `user-${index}`}
              className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow`}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#3a3a87] bg-gray-100 flex items-center justify-center">
                <span className="text-[#3a3a87] font-bold text-xl">
                  {(user.fullName && user.fullName.charAt(0)?.toUpperCase()) ||
                    '?'}
                </span>
              </div>

              <p className="mt-4 text-[#3a3a87] font-medium break-words">
                {user.username} ({user.fullName})
              </p>

              <p className="text-[#3a3a87] break-words text-sm">{user.email}</p>

              {user.phone && (
                <p className="text-[#3a3a87] break-words text-sm">
                  {user.phone}
                </p>
              )}

              <p className="mt-2 font-bold text-[#3a3a87]">
                {user.packageName}
              </p>
            </div>
          ))}
        </div>

        {orderListActive?.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            Không có người dùng nào có gói
          </div>
        )}
      </section>
    </>
  );
};

export default ManageOrder;
