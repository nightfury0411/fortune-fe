import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import PackageCard from '../../components/packages/card';
import { getPackage } from '../../services/package';
import { payment } from '../../services/payment';
import { formatCurrency, notify } from '../../utils';
import { Helmet } from 'react-helmet';

const { TextArea } = Input;

const Service = () => {
  const [form] = Form.useForm();
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const { mutate: paymentMutate } = useMutation({
    mutationFn: payment,
    onSuccess: (res) => {
      console.log('check res', res);
      const checkoutUrl = res?.data?.checkoutUrl?.replace(/^redirect:/, '');

      if (!checkoutUrl) {
        setIsButtonLoading(false);
        return notify('error', {
          description: 'Không tìm thấy URL thanh toán.',
        });
      }

      notify('success', {
        description: 'Vui lòng đợi 3 giây để chuyển đến trang thanh toán...',
      });

      setTimeout(() => {
        window.location.href = checkoutUrl;
        setIsButtonLoading(false);
      }, 3000);
    },
    onError: (err) => {
      notify('error', {
        description: err?.response?.data?.message || 'Lỗi hệ thống',
      });
    },
  });

  const { data: packageRes, isPending } = useQuery({
    queryKey: ['packages'],
    queryFn: getPackage,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const packageData = packageRes?.data?.[0] ?? null;

  const packages = {
    id: packageData?.package_Id,
    title: 'CUSTOMIZABLE',
    description: packageData?.description ?? '',
    price: packageData?.price ? `${formatCurrency(packageData.price)}` : '',
    features: [
      '8 sự kiện / tháng',
      'Bản kế hoạch tuỳ chỉnh theo yêu cầu',
      'Trọn gói minigames',
      'Được cấp quyền tuỳ chỉnh nâng cao: Nền tảng Wheels of Fortune',
      'Hỗ trợ thuê nhân lực, thiết bị, địa điểm',
    ],
  };

  const onFinish = (values) => {
    setIsButtonLoading(true);
    const payload = {
      id: packages?.id,
      guestEmail: values.email,
    };

    paymentMutate(payload);
  };

  return (
    <>
      <Helmet>
        <title>Fortune | Tư vấn dịch vụ</title>
      </Helmet>
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="border border-primary rounded-xl overflow-hidden shadow-lg bg-white max-w-5xl w-full">
          <div className="bg-primary text-white py-3 text-center font-bold text-lg">
            SẴN SÀNG KẾT NỐI DOANH NGHIỆP CỦA BẠN
          </div>

          <div>
            <p className="text-center text-lg mt-5 font-medium">
              GÓI ĐANG CHỌN:{' '}
              <span className="text-primary font-bold">{packages.title}</span>
            </p>

            <div className="p-6 sm:p-10 flex flex-col md:flex-row gap-8">
              <div className="flex-1 w-full md:w-[60%] space-y-6">
                <Form
                  id="buy-package-form"
                  className="buy-package-form"
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                >
                  <Form.Item
                    name="fullName"
                    rules={[
                      { required: true, message: 'Vui lòng nhập họ và tên' },
                    ]}
                  >
                    <Input
                      className="!border-primary !border-2 !py-3"
                      placeholder="Họ và tên"
                    />
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập số điện thoại',
                      },
                      {
                        pattern: /^[0-9]{9,11}$/,
                        message: 'Số điện thoại không hợp lệ',
                      },
                    ]}
                  >
                    <Input
                      className="!border-primary !border-2 !py-3"
                      placeholder="Số điện thoại"
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: 'Vui lòng nhập email' },
                      { type: 'email', message: 'Email không hợp lệ' },
                    ]}
                  >
                    <Input
                      className="!border-primary !border-2 !py-3"
                      placeholder="Email"
                    />
                  </Form.Item>

                  <Form.Item name="company">
                    <Input
                      className="!border-primary !border-2 !py-3"
                      placeholder="Tên công ty / tổ chức (Bỏ trống nếu đăng ký cho cá nhân)"
                    />
                  </Form.Item>

                  <Form.Item name="note">
                    <TextArea
                      className="!border-primary !border-2 !py-3"
                      rows={8}
                      placeholder="Ghi chú"
                    />
                  </Form.Item>
                </Form>
              </div>

              <div className="w-full md:w-[40%] rounded-xl flex flex-col items-end">
                <PackageCard
                  pkg={packages}
                  isBuy={false}
                  handleBuyPackage={() => {}}
                  loading={isPending}
                  className="border"
                />
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <Button
                htmlType="submit"
                form="buy-package-form"
                type="primary"
                ghost
                loading={isButtonLoading}
                className="!bg-primary !text-white !font-semibold w-48 !py-5"
              >
                GỬI YÊU CẦU
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
