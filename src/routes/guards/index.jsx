import { Navigate } from 'react-router-dom';
import { PATH_NAME } from '../../constants';
import { useUserData } from '../../hooks/useUserData';

const AdminRedirectGuard = ({ children }) => {
  const { userInfo } = useUserData();

  if (userInfo?.role === 3) {
    return <Navigate to={PATH_NAME.MANAGE_ORDER} replace />;
  }

  return children;
};

export default AdminRedirectGuard;
