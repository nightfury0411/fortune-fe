import { Button, Form, Input, Modal } from 'antd';
import { CheckCircle, Home, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PackageCard from '../../components/packages/card';
import { PATH_NAME } from '../../constants';

const { TextArea } = Input;

const Service = () => {
  const [isBuyPackage, setIsBuyPackage] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

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

  const handleNavigateHome = () => {
    setIsBuyPackage(false);
    navigate(PATH_NAME.HOME);
  };

  const handleRegister = () => {
    setIsBuyPackage(false);
    navigate(PATH_NAME.AUTH, { state: { isLoginForm: false } });
  };

  const closeModal = () => {
    setIsBuyPackage(false);
  };

  return (
    <>
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

              <div className="w-full md:w-[40%] rounded-xl flex flex-col items-end">
                <PackageCard
                  pkg={packages}
                  isBuy={false}
                  handleBuyPackage={() => setIsBuyPackage(true)}
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
                className="!bg-primary !text-white !font-semibold w-48 !py-5"
              >
                GỬI YÊU CẦU
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={isBuyPackage}
        onCancel={closeModal}
        footer={null}
        centered
        width={450}
        className="success-modal"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-blue-500 to-blue-600 rounded-t-lg"></div>

        <div className="text-center pt-6">
          <div className="mb-2">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="text-green-600" size={40} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Thành Công</h2>

          <div className="text-left space-y-3 mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-blue-600 font-medium mb-2">
              Bạn đã gửi yêu cầu thành công
            </p>
            <p className="text-blue-600 font-medium mb-2">
              Chúng tôi sẽ liên hệ bạn qua SĐT / Email trong thời gian tới!
            </p>
            <p className="text-blue-600 font-medium">
              Đăng ký cùng với email hiện tại để quản lý các dịch vụ bạn đã mua!
            </p>
          </div>

          <div className="space-y-3">
            <Button
              type="primary"
              size="large"
              onClick={handleRegister}
              className="w-full !h-12"
              icon={<UserPlus size={20} />}
            >
              <span className="mb-0.5 font-medium">Đăng ký</span>
            </Button>

            <Button
              size="large"
              onClick={handleNavigateHome}
              className="w-full !h-12"
              icon={<Home size={20} />}
            >
              <span className="mb-0.5 font-medium"> Về trang chủ</span>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Service;
