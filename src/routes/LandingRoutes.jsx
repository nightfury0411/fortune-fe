import { Navigate, Outlet } from 'react-router-dom';
import { useUserData } from '../hooks/useUserData';
import { PATH_NAME } from '../constants';

const LandingRoutes = () => {
  const { userInfo } = useUserData();

  if (userInfo?.role === 1) {
    return <Navigate to={PATH_NAME.USER_INFO} replace />;
  } else if (userInfo?.role === 3) {
    return <Navigate to={PATH_NAME.MANAGE_ORDER} replace />;
  }

  return <Outlet />;
};

export default LandingRoutes;
