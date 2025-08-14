import { Navigate, Outlet } from 'react-router-dom';

const MemberRoutes = () => {
  const isMember = true;

  return isMember ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default MemberRoutes;
