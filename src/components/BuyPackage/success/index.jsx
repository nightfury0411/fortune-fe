import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const SuccessRegistration = ({ initialValues }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 pt-14">
      <div className="text-center font-bold text-2xl mb-14">
        <p className="!text-primary !mb-2">Bạn đã gửi yêu cầu thành công</p>
        <p className="!mb-1 !text-primary">
          Chúng tôi sẽ liên hệ bạn qua SĐT / Email trong thời gian tới!
        </p>
        <p className="!text-primary">
          Đăng kí cùng với email hiện tại để quản lí các dịch vụ bạn đã mua!
        </p>
      </div>

      <div className="max-w-3xl w-full p-6 sm:p-10 border-2 border-primary rounded-xl bg-white shadow-lg">
        <Form
          id="buy-package-form"
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={initialValues}
        >
          <Form.Item name="fullName">
            <Input
              className="!border-primary !border-2 !py-3"
              placeholder="Tên người dùng"
            />
          </Form.Item>

          <Form.Item name="username">
            <Input
              className="!border-primary !border-2 !py-3"
              placeholder="Tên đăng nhập"
            />
          </Form.Item>

          <Form.Item name="email">
            <Input
              className="!border-primary !border-2 !py-3"
              placeholder="Email"
              disabled
            />
          </Form.Item>

          <Form.Item name="package">
            <Input
              className="!border-primary !border-2 !py-3"
              placeholder="Gói dịch vụ"
              disabled
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu' },
              { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự' },
            ]}
          >
            <Input.Password
              className="!border-primary !border-2 !py-3"
              placeholder="Mật khẩu"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Vui lòng nhập lại mật khẩu' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('Mật khẩu nhập lại không khớp'),
                  );
                },
              }),
            ]}
          >
            <Input.Password
              className="!border-primary !border-2 !py-3"
              placeholder="Nhập lại mật khẩu"
            />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-between gap-3 mt-6">
              <Button
                onClick={() => navigate('/')}
                type="primary"
                ghost
                className="!bg-primary !text-white !font-semibold w-48 !py-5"
              >
                Về trang chủ
              </Button>
              <Button
                type="primary"
                className="!bg-primary !text-white !font-semibold w-48 !py-5"
                htmlType="submit"
              >
                Đăng ký
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default SuccessRegistration;
