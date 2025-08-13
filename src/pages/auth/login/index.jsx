import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  SafetyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../services/auth';

function Login({ onSwitchToLogin }) {
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate('/');
    },
    onError: (err) => {
      console.error('err', err);
    },
  });

  const handleSubmit = async (values) => {
    loginMutate(values);
  };

  return (
    <div className="bg-white relative rounded-2xl shadow-xl p-8 md:p-10">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-b-full" />
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <SafetyOutlined className="text-3xl text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Đăng nhập tài khoản
        </h2>
        <p className="text-gray-600">Truy cập dịch vụ tổ chức sự kiện</p>
        <p
          onClick={() => navigate('/')}
          className="mt-2 text-blue-600 hover:text-blue-700 cursor-pointer font-medium transition-colors"
        >
          Quay về trang chủ
        </p>
      </div>
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{ rememberMe: false }}
        requiredMark={false}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên đăng nhập',
            },
            { min: 8, message: 'Tối thiểu 8 ký tự' },
          ]}
          className="mb-5"
        >
          <Input
            prefix={<UserOutlined className="text-gray-400" />}
            placeholder="Tên đăng nhập"
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
          ]}
          className="mb-2"
        >
          <Input
            prefix={<LockOutlined className="text-gray-400" />}
            type={showPassword ? 'text' : 'password'}
            placeholder="Mật khẩu"
            size="large"
            className="!py-3 !px-4 !text-base !rounded-lg"
            suffix={
              <button
                type="button"
                onClick={togglePassword}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </button>
            }
          />
        </Form.Item>
        <div className="flex items-center justify-between mb-6">
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <Checkbox className="text-gray-600">Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          loading={isPending}
          className="w-full !h-12 !text-base !font-semibold !border-0 !rounded-lg"
          size="large"
        >
          Đăng nhập
        </Button>

        <div className="text-center mt-3">
          <span className="text-gray-600">Bạn chưa có tài khoản? </span>
          <Link
            className="text-blue-900 hover:text-blue-800 font-semibold transition-colors"
            onClick={onSwitchToLogin}
          >
            Đăng ký ngay
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
