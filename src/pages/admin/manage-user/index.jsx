import { useMutation, useQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import { Helmet } from 'react-helmet';
import { getAllOrder, updateOrderContact } from '../../../services/order';
import { notify } from '../../../utils';
import { useState } from 'react';

const ManageUser = () => {
  const [loadingId, setLoadingId] = useState(null);

  const { data: orders, refetch } = useQuery({
    queryKey: ['orders'],
    queryFn: getAllOrder,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const { mutate: updateOrderMutate } = useMutation({
    mutationFn: updateOrderContact,
    onSuccess: () => {
      notify('success', {
        description: 'Cập nhật trạng thái liên hệ của đơn hàng thành công',
      });
      refetch();
      setLoadingId(null);
    },
    onError: (err) => {
      notify('error', {
        description: err?.response?.data?.message || 'Lỗi hệ thống',
      });
      setLoadingId(null);
    },
  });

  const handleUpdate = (order) => {
    if (order.contact) return;

    setLoadingId(order.id);
    updateOrderMutate(order.id);
  };

  const orderList = orders?.data ?? [];

  return (
    <>
      <Helmet>
        <title>Fortune | Hệ thống người dùng </title>
      </Helmet>
      <section className="p-4 space-y-4 mx-14">
        {orderList.map((order) => (
          <div
            key={order.id}
            className="flex flex-wrap justify-between items-center bg-sub3 rounded-lg p-4"
          >
            <p className="text-[15px] font-medium leading-6 text-primary">
              Người dùng: {order?.userName} ({order?.fullName}) ({order?.email})
              gửi yêu cầu mua gói{' '}
              <span className="font-bold text-primary">
                {order.packageName ? `${order?.packageName}` : 'gói'}
              </span>
            </p>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <Button
                loading={loadingId === order.id}
                onClick={() => handleUpdate(order)}
                type={order?.contact ? 'primary' : 'default'}
                className={`!py-4 !px-3 font-medium shadow-md ${
                  !order?.contact
                    ? '!border-primary !border-2 !text-primary'
                    : '!border-2'
                }`}
              >
                {order?.contact ? 'Đã liên hệ' : 'Chưa liên hệ'}
              </Button>
              <Button
                type={order?.status === 'Paid' ? 'primary' : 'default'}
                className={`!py-4 !px-3 font-medium shadow-md cursor-default ${
                  order?.status === 'Pending'
                    ? '!border-primary !border-2 !text-primary'
                    : '!border-2'
                }`}
              >
                {order?.status === 'Paid' ? 'Đã thanh toán' : 'Chưa thanh toán'}
              </Button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ManageUser;
