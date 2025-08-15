import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import LandingLayout from '../components/layouts/LandingLayout';
import ScrollToTop from '../components/ScrollToTop';
import { PATH_NAME } from '../constants';
import AuthPage from '../pages/auth';
import NotFound from '../pages/notfound';
import MemberPage from '../pages/user';
import AdminRoutes from './AdminRoutes';
import GuestRoute from './GuestRoute';
import MemberRoutes from './MemberRoutes';

const LandingPage = lazy(() => import('../pages/landing'));
const AdminHome = lazy(() => import('../pages/admin'));
const ServicePage = lazy(() => import('../pages/service'));
const CostPage = lazy(() => import('../pages/cost'));
const ProductPage = lazy(() => import('../pages/product'));
const PaymentPage = lazy(() => import('../pages/payment'));

const PackageManagerPage = lazy(
  () => import('../pages/user/package-management'),
);
const CommunityManagementPage = lazy(
  () => import('../pages/user/community-management'),
);
const MemberInfoPage = lazy(() => import('../pages/user/info-management'));
const PlanManagementPage = lazy(() => import('../pages/user/plan-management'));
const MinigameManagementPage = lazy(
  () => import('../pages/user/minigame-management'),
);

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
        <ScrollToTop />
        <Outlet />
      </LandingLayout>
    ),
    children: [
      {
        path: PATH_NAME.HOME,
        element: withSuspense(LandingPage),
      },
      {
        path: PATH_NAME.PRODUCT,
        element: withSuspense(ProductPage),
      },
      {
        path: PATH_NAME.SERVICE,
        element: withSuspense(ServicePage),
      },
      {
        path: PATH_NAME.COST,
        element: withSuspense(CostPage),
      },
      {
        path: PATH_NAME.PAYMENT,
        element: withSuspense(PaymentPage),
      },
      {
        element: <MemberRoutes />,
        children: [
          {
            path: PATH_NAME.USER,
            element: withSuspense(MemberPage),
            children: [
              { path: 'info', element: withSuspense(MemberInfoPage) },
              {
                path: 'packages',
                element: withSuspense(PackageManagerPage),
              },
              { path: 'plan', element: withSuspense(PlanManagementPage) },
              {
                path: 'minigames',
                element: withSuspense(MinigameManagementPage),
              },
              {
                path: 'community',
                element: withSuspense(CommunityManagementPage),
              },
            ],
          },
        ],
      },
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
