import { CheckCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LOGO_WEB from '../../assets/images/logo_web.webp';
import Login from './login';
import Register from './register';

function AuthPage() {
  const location = useLocation();
  const [isLoginForm, setIsLoginForm] = useState(true);

  useEffect(() => {
    if (location.state && typeof location.state.isLoginForm === 'boolean') {
      setIsLoginForm(location.state.isLoginForm);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-white via-slate-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 border-8 border-white rounded-full -translate-x-20 -translate-y-20" />
          <div className="absolute bottom-0 right-0 w-60 h-60 border-8 border-white rounded-full translate-x-20 translate-y-20" />
        </div>

        <div className="flex flex-col justify-center px-16 relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div>
                <img src={LOGO_WEB} alt="logo" className="h-16 w-auto" />
                <p className="text-slate-700 font-medium">
                  Kết nối – Gắn kết – Ghi dấu
                </p>
              </div>
            </div>

            <h2 className="md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Giải pháp Event nội bộ giúp tăng sự kết nối tại các buổi tiệc và
              họp mặt
            </h2>
            <p className="text-slate-700 text-base mb-12">
              <span className="font-bold text-primary">FORTUNE</span> mang đến
              dịch vụ tổ chức sự kiện nội bộ kết hợp các minigame cộng đồng,
              giúp phá băng không khí, tăng tính gắn kết và để lại ấn tượng sâu
              đậm cho khách mời.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircleOutlined className="text-2xl !text-indigo-600" />
              <span className="text-slate-800 text-lg font-medium">
                Minigame trực tiếp và trực tuyến đa dạng, dễ tham gia
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircleOutlined className="text-2xl !text-indigo-600" />
              <span className="text-slate-800 text-lg font-medium">
                Tăng tương tác và phá băng trong mọi buổi tiệc
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircleOutlined className="text-2xl !text-indigo-600" />
              <span className="text-slate-800 text-lg font-medium">
                Giúp doanh nghiệp tạo dấu ấn với khách hàng & nhân viên
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircleOutlined className="text-2xl !text-indigo-600" />
              <span className="text-slate-800 text-lg font-medium">
                Linh hoạt tổ chức cho nhiều nhóm và quy mô khác nhau
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <p className="text-4xl font-bold text-indigo-600">200+</p>
              <p className="text-slate-700 font-medium">Sự kiện đã tổ chức</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600">50+</p>
              <p className="text-slate-700 font-medium">Minigame độc quyền</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600">95%</p>
              <p className="text-slate-700 font-medium">Khách hàng hài lòng</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center">
            <div className="flex items-center justify-center gap-3 mb-1">
              <img src={LOGO_WEB} alt="logo" className="h-8 w-auto mb-2" />
            </div>
          </div>

          {isLoginForm ? (
            <Login onSwitchToLogin={() => setIsLoginForm(false)} />
          ) : (
            <Register onSwitchToLogin={() => setIsLoginForm(true)} />
          )}

          <div className="text-center mt-6 text-sm text-slate-600">
            <p>© 2025 FORTUNE. Dịch vụ và giải pháp Event nội bộ.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
