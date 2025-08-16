import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  SafetyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PATH_NAME } from '../../../constants';
import { login } from '../../../services/auth';
import { notify } from '../../../utils';

function Login({ onSwitchToLogin }) {
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const { mutate: loginMutate, isPending: isLoadingLogin } = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      notify('success', { description: 'Đăng nhập thành công' });

      const accessToken = res?.data;
      const refreshToken = res?.data;

      if (accessToken && refreshToken) {
        Cookies.set('accessToken', accessToken);
        const decoded = jwtDecode(accessToken);
        const role =
          decoded[
            'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
          ];
        const userId =
          decoded[
            'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
          ];
        if (userId) {
          localStorage.setItem('userId', userId);
        }
        if (role === 1) {
          navigate(PATH_NAME.USER_INFO);
        } else {
          navigate(PATH_NAME.MANAGE_ORDER);
        }
      }
    },
    onError: (err) => {
      if (err && err.status === 401) {
        notify('error', { description: 'Thông tin đăng nhập không hợp lệ' });
        return;
      }
      notify('error', {
        description: err?.response?.data?.message || 'Lỗi hệ thống',
      });
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
          name="userName"
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

        <Button
          type="primary"
          htmlType="submit"
          loading={isLoadingLogin}
          className="w-full !h-12 mt-6 !text-base !font-semibold !border-0 !rounded-lg"
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
