import { Button } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO_WEB from '../../assets/logo_web.webp';
import NotificationBell from '../NotificationBell';
import UserMenu from '../UserMenu';
import NavElements from './NavElements';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [notificationCount] = useState(3);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogin = () => {
    setUser({
      name: 'Tuan An',
      email: 'ancntse171335@fpt.edu.vn',
      avatar: null,
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-gray-200 shadow-sm px-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <Link to="/" className="group flex items-center space-x-2">
              <div>
                <img src={LOGO_WEB} alt="logo" className="h-10 w-auto" />
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <NavElements />
            </nav>

            <div className="flex items-center space-x-3">
              {user ? (
                <>
                  <NotificationBell count={notificationCount} />
                  <div className="h-8 w-px bg-gray-300" />
                  <UserMenu user={user} onLogout={handleLogout} />
                </>
              ) : (
                <Button
                  type="primary"
                  onClick={handleLogin}
                  className=" text-white px-6 !py-5 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Đăng nhập
                </Button>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            {user ? (
              <>
                <NotificationBell count={notificationCount} />
                <UserMenu user={user} onLogout={handleLogout} mobile />
              </>
            ) : (
              <Button
                type="primary"
                onClick={handleLogin}
                className=" text-white px-6 !py-5 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Đăng nhập
              </Button>
            )}

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className={`w-6 h-6 text-gray-600 transform transition-transform duration-200 ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'}
        `}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
            <NavElements
              mobile
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
