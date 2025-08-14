import {
  MailOutlined,
  MehOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const InfoManagement = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('values', values);
  };

  return (
    <div className="space-y-6 h-full p-6 mr-6 rounded-b-xl bg-white shadow ">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Thông tin cơ bản</h2>
        <p className="text-gray-600 mt-2">
          Quản lý thông tin tài khoản của bạn
        </p>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="mx-auto p-6 bg-white rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Form.Item
              label="Tên đăng nhập"
              name="userName"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên đăng nhập',
                },
                { min: 8, message: 'Tên đăng nhập tối thiểu 8 ký tự' },
                {
                  pattern: /^[a-zA-Z0-9]+$/,
                  message:
                    'Tên đăng nhập chỉ được chứa chữ và số, không khoảng trắng hoặc ký tự đặc biệt',
                },
              ]}
              className="[&_.ant-form-item-explain]:text-left mb-4"
            >
              <Input
                prefix={<MehOutlined />}
                placeholder="Tên đăng nhập"
                size="large"
                className="!py-3 !px-4 !text-base !rounded-lg"
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập email',
                },
                { min: 8, message: 'Tên đăng nhập tối thiểu 8 ký tự' },
                { type: 'email', message: 'Email không hợp lệ' },
              ]}
              className="[&_.ant-form-item-explain]:text-left mb-4"
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                size="large"
                className="!py-3 !px-4 !text-base !rounded-lg"
              />
            </Form.Item>

            <Form.Item
              label="Họ và tên"
              name="fullname"
              rules={[
                { required: true, message: 'Vui lòng nhập họ và tên' },
                { min: 3, message: 'Họ và tên tối thiểu 3 ký tự' },
                {
                  pattern: /^[a-zA-ZÀ-ỹ\s]+$/,
                  message: 'Họ và tên chỉ được chứa chữ cái và khoảng trắng',
                },
              ]}
              className="[&_.ant-form-item-explain]:text-left mb-4"
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Họ và tên"
                autoFocus
                size="large"
                className="!py-3 !px-4 !text-base !rounded-lg"
              />
            </Form.Item>
          </div>

          <div className="space-y-4">
            <Form.Item
              label="Số diện thoại"
              name="phone"
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại' },
                {
                  pattern: /^[0-9]{10}$/,
                  message: 'Số điện thoại phải gồm đúng 10 chữ số',
                },
              ]}
              className="[&_.ant-form-item-explain]:text-left mb-4"
            >
              <Input
                prefix={<PhoneOutlined className="text-gray-400 rotate-90" />}
                placeholder="Số điện thoại"
                autoFocus
                size="large"
                className="!py-3 !px-4 !text-base !rounded-lg"
              />
            </Form.Item>
          </div>
        </div>
        <div className="flex justify-start pt-8 border-t border-gray-200 mt-8">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="!h-12 !px-8 !text-base !font-semibold !rounded-lg  !border-0 !shadow-md hover:!shadow-lg transition-all duration-200"
          >
            Cập nhật thông tin
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default InfoManagement;
