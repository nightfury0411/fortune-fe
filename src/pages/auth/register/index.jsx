import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  MailOutlined,
  MehOutlined,
  PhoneOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import { register } from '../../../services/auth';
import { notify } from '../../../utils';

function Register({ onSwitchToLogin }) {
  const recaptchaSiteKey = import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY || '';
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const onCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  const { mutate: mutateRegister, isPending: isLoadingRegis } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      notify('success', {
        description: 'Đăng ký thành công. Vui lòng đăng nhập để vào hệ thống',
      });
      onSwitchToLogin();
    },
    onError: (err) => {
      notify('error', {
        description: err?.response?.data?.message || 'Lỗi hệ thống',
      });
    },
  });

  const handleSubmit = async (values) => {
    if (!captchaVerified) {
      notify('warning', {
        description: 'Vui lòng xác nhận CAPTCHA',
      });
      return;
    }

    mutateRegister(values);
  };

  return (
    <div className="bg-white relative rounded-2xl shadow-xl p-8 md:p-10">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-b-full" />

      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <UserAddOutlined className="text-3xl text-blue-900" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Đăng ký</h1>
        <p className="text-gray-600">
          Chào mừng đến với dịch vụ tổ chức sự kiện
        </p>
      </div>

      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        scrollToFirstError
      >
        <Form.Item
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
          name="email"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập email!',
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
          name="fullname"
          rules={[
            { required: true, message: 'Vui lòng nhập họ và tên!' },
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

        <Form.Item
          name="phone"
          rules={[
            { required: true, message: 'Vui lòng nhập số điện thoại!' },
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

        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Vui lòng nhập mật khẩu!' },
            { min: 8, message: 'Mật khẩu tối thiểu 8 ký tự' },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
              message:
                'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số',
            },
          ]}
          className="[&_.ant-form-item-explain]:text-left mb-4"
        >
          <Input
            prefix={<LockOutlined />}
            type={showPassword ? 'text' : 'password'}
            placeholder="Mật khẩu"
            size="large"
            className="!py-3 !px-4 !text-base !rounded-lg"
            suffix={
              <div onClick={togglePassword} className="cursor-pointer">
                {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </div>
            }
          />
        </Form.Item>

        <div className="mb-3 flex w-full max-w-[300px] justify-start">
          <ReCAPTCHA sitekey={recaptchaSiteKey} onChange={onCaptchaChange} />
        </div>

        <Button
          type="primary"
          htmlType="submit"
          loading={isLoadingRegis}
          className="w-full flex justify-center items-center !h-12 !text-lg !font-semibold !border-0 !rounded-lg"
          size="large"
        >
          Đăng ký
        </Button>

        <div className="text-center mt-3">
          <span className="text-gray-600">Đã có tài khoản? </span>
          <Link
            className="text-blue-900 hover:text-blue-800 font-semibold transition-colors"
            onClick={onSwitchToLogin}
          >
            Đăng nhập ngay
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Register;
