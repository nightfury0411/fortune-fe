import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_NAME } from '../../constants';
import { useUserData } from '../../hooks/useUserData';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';

const RoleRedirectWrapper = ({ children }) => {
  const navigate = useNavigate();

  const { userInfo } = useUserData();

  useEffect(() => {
    if (userInfo?.role === 3) {
      navigate(PATH_NAME.MANAGE_ORDER, { replace: true });
    }
  }, [userInfo?.role, navigate]);

  if (userInfo?.role === 3) {
    return null;
  }

  return children;
};

const LandingLayout = ({ children }) => {
  return (
    <RoleRedirectWrapper>
      <>
        <Navbar />
        <main className="min-h-screen bg-sub3">{children}</main>
        <Footer />
      </>
    </RoleRedirectWrapper>
  );
};

export default LandingLayout;
