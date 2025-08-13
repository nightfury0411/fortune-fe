import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import LandingLayout from '../components/layouts/LandingLayout';
import { PATH_NAME } from '../constants';
import AuthPage from '../pages/auth';
import NotFound from '../pages/notfound';
import AdminRoutes from './AdminRoutes';
import GuestRoute from './GuestRoute';

const LandingPage = lazy(() => import('../pages/landing'));
const AdminHome = lazy(() => import('../pages/admin'));

const withSuspense = (Component) => (
  <Suspense
    fallback={
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="large" />
      </div>
    }
  >
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    element: (
      <LandingLayout>
        <Outlet />
      </LandingLayout>
    ),
    children: [
      {
        path: PATH_NAME.HOME,
        element: withSuspense(LandingPage),
      },
      // {
      //   element: <MemberRoutes />,
      //   children: [
      //     {
      //       path: PATH_NAME.MEMBER,
      //       element: withSuspense(MemberPage),
      //       children: [
      //         { path: 'info', element: withSuspense(MemberInfo) },
      //         {
      //           path: 'change-password',
      //           element: withSuspense(ChangePassword),
      //         },
      //         { path: 'package', element: withSuspense(PackageManager) },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
  {
    element: <GuestRoute />,
    children: [
      {
        path: PATH_NAME.AUTH,
        element: <AuthPage />,
      },
    ],
  },

  {
    element: <AdminRoutes />,
    children: [
      {
        path: PATH_NAME.ADMIN,
        element: withSuspense(AdminHome),
      },
    ],
  },

  {
    path: PATH_NAME.NOT_FOUND,
    element: <NotFound />,
  },
]);

export default router;
