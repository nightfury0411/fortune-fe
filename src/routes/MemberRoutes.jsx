import { Spin } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserData } from '../hooks/useUserData';

const MemberRoutes = () => {
  const { isLoading, userInfo } = useUserData();

  const isUser = userInfo && userInfo.role === 1;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return isUser ? <Outlet /> : <Navigate to="/" replace />;
};

export default MemberRoutes;
