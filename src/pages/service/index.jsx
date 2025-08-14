import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import PackageCard from '../../components/packages/card';
import SuccessRegistration from '../../components/BuyPackage/success';

const { TextArea } = Input;

const Service = () => {
  const [isBuyPackage, setIsBuyPackage] = useState(false);
  const [form] = Form.useForm();

  const packages = {
    title: 'CUSTOMIZABLE',
    description:
      'Gói cá nhân hoá và không giới hạn, được cấp quyền vào hệ thống chỉnh sửa, gia tăng các tính năng theo nhu cầu.',
    price: '1.500.000 VNĐ/tháng',
    features: [
      '8 sự kiện / tháng',
      'Bản kế hoạch tuỳ chỉnh theo yêu cầu',
      'Trọn gói minigames',
      'Được cấp quyền tuỳ chỉnh nâng cao: Nền tảng Wheels of Fortune',
      'Hỗ trợ thuê nhân lực, thiết bị, địa điểm',
    ],
  };

  const onFinish = (values) => {
    console.log('Form data:', values);
    setIsBuyPackage(true);
  };

  return (
    <>
      {isBuyPackage ? (
        <SuccessRegistration
          initialValues={{
            fullName: form.getFieldValue('fullName'),
            username: form.getFieldValue('email')?.split('@')[0],
            email: form.getFieldValue('email'),
            package: 'CUSTOMIZABLE',
          }}
        />
      ) : (
        <section className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="border border-primary rounded-xl overflow-hidden shadow-lg bg-white max-w-5xl w-full">
            <div className="bg-primary text-white py-3 text-center font-bold text-lg">
              SẴN SÀNG KẾT NỐI DOANH NGHIỆP CỦA BẠN
            </div>

            <div>
              <p className="text-center text-lg mt-5 font-medium">
                GÓI ĐANG CHỌN:{' '}
                <span className="text-primary font-bold">CUSTOMIZABLE</span>
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

                {/* Package Card Section */}
                <div className="w-full md:w-[40%] rounded-xl flex flex-col items-end">
                  <PackageCard
                    pkg={packages}
                    isBuy={false}
                    handleBuyPackage={() => setIsBuyPackage(true)}
                    className="border"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mb-8">
                <Button
                  htmlType="submit"
                  form="buy-package-form"
                  type="primary"
                  ghost
                  className="!bg-primary !text-white !font-semibold w-48 !py-5"
                >
                  GỬI YÊU CẦU
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Service;
