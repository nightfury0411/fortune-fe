import { Navigate, Outlet } from 'react-router-dom';
import { useUserData } from '../hooks/useUserData';

const GuestRoute = () => {
  const { userInfo } = useUserData();

  console.log('check userInfo', userInfo);

  return userInfo ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestRoute;
