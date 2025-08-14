import { message } from 'antd';
import { CircleUser, LogIn, LogOut, User, UserPlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PATH_NAME } from '../../constants';

const UserDropdown = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate(PATH_NAME.AUTH);
    message.success('Đăng xuất thành công');
  };

  return (
    <div className="relative group">
      <CircleUser
        color="#454699"
        strokeWidth={2}
        size={32}
        className="cursor-pointer"
      />

      <div
        className="
          absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transform -translate-y-2 group-hover:translate-y-0
          transition-all duration-200 ease-in-out
          z-50
        "
      >
        {user ? (
          <>
            <Link
              to="/user/info"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <User size={16} /> Quản lý tài khoản
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <LogOut size={16} /> Đăng xuất
            </button>
          </>
        ) : (
          <>
            <Link
              to={PATH_NAME.AUTH}
              state={{ isLoginForm: true }}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <LogIn size={16} /> Đăng nhập
            </Link>
            <Link
              to={PATH_NAME.AUTH}
              state={{ isLoginForm: false }}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <UserPlus size={16} /> Đăng ký
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDropdown;
