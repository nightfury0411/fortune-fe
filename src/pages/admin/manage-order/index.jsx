import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { getUserPurchasePackage } from '../../../services/order';
import { getUser } from '../../../services/user';

const ManageOrder = () => {
  const {
    data: usersResponse,
    isLoading: usersLoading,
    error: usersError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUser,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const users = Array.isArray(usersResponse?.data) ? usersResponse.data : [];
  const userIds = users.map((user) => user?.user_id).filter(Boolean);

  const packageQueries = useQuery({
    queryKey: ['userPurchasePackages', userIds],
    queryFn: async () => {
      if (userIds.length === 0) return {};

      const packagePromises = userIds.map(async (userId) => {
        try {
          const packageData = await getUserPurchasePackage(userId);
          return {
            userId,
            packages: Array.isArray(packageData?.data) ? packageData.data : [],
          };
        } catch (error) {
          console.error(`Error fetching packages for user ${userId}:`, error);
          return { userId, packages: [] };
        }
      });

      const results = await Promise.all(packagePromises);

      return results.reduce((acc, { userId, packages }) => {
        if (userId) {
          acc[userId] = packages;
        }
        return acc;
      }, {});
    },
    enabled: userIds.length > 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const mappedUsers = useMemo(() => {
    if (!Array.isArray(users) || !packageQueries.data) return [];

    const result = [];

    users.forEach((user) => {
      if (!user || !user.user_id) return;

      const userPackages = packageQueries.data[user.user_id] || [];

      if (Array.isArray(userPackages) && userPackages.length > 0) {
        userPackages.forEach((packageItem, index) => {
          let packageName = '';
          if (typeof packageItem === 'string') {
            packageName = packageItem;
          } else if (packageItem && typeof packageItem === 'object') {
            packageName =
              packageItem.packageName ||
              packageItem.package_name ||
              packageItem.name ||
              packageItem.title ||
              JSON.stringify(packageItem);
          }

          result.push({
            username: user.userName || 'N/A',
            fullName: user.fullName || 'N/A',
            email: user.email || 'N/A',
            packageName: packageName || 'N/A',
            userId: user.user_id,
            isActive: Boolean(user.isActive),
            phone: user.phone || '',
            role: user.role || 'N/A',
            packageIndex: index + 1,
            totalPackages: userPackages.length,
          });
        });
      }
    });

    return result;
  }, [users, packageQueries.data]);

  if (usersError) {
    return (
      <>
        <Helmet>
          <title>Fortune | Quản lý đơn </title>
        </Helmet>
        <section className="p-4 sm:p-6">
          <div className="flex justify-center items-center h-64">
            <div className="text-red-600">
              Có lỗi xảy ra khi tải dữ liệu người dùng
            </div>
          </div>
        </section>
      </>
    );
  }

  if (packageQueries.error) {
    return (
      <>
        <Helmet>
          <title>Fortune | Quản lý đơn </title>
        </Helmet>
        <section className="p-4 sm:p-6">
          <div className="flex justify-center items-center h-64">
            <div className="text-red-600">
              Có lỗi xảy ra khi tải dữ liệu gói
            </div>
          </div>
        </section>
      </>
    );
  }

  if (usersLoading || packageQueries.isLoading) {
    return (
      <>
        <Helmet>
          <title>Fortune | Quản lý đơn </title>
        </Helmet>
        <div className="flex items-center justify-center">
          <Spin size="large" />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Fortune | Quản lý đơn </title>
      </Helmet>
      <section className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mappedUsers.map((user, index) => (
            <div
              key={user.userId ? `${user.userId}-${index}` : `user-${index}`}
              className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow ${
                !user.isActive ? 'opacity-60' : ''
              }`}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#3a3a87] bg-gray-100 flex items-center justify-center">
                <span className="text-[#3a3a87] font-bold text-xl">
                  {(user.fullName && user.fullName.charAt(0)?.toUpperCase()) ||
                    '?'}
                </span>
              </div>

              <p className="mt-4 text-[#3a3a87] font-medium break-words">
                {user.username} ({user.fullName})
              </p>

              <p className="text-[#3a3a87] break-words text-sm">{user.email}</p>

              {user.phone && (
                <p className="text-[#3a3a87] break-words text-sm">
                  {user.phone}
                </p>
              )}

              <p className="mt-2 font-bold text-[#3a3a87]">
                {user.packageName}
              </p>

              {!user.isActive && (
                <span className="mt-2 px-2 py-1 bg-red-100 text-red-600 text-xs rounded">
                  Không hoạt động
                </span>
              )}
            </div>
          ))}
        </div>

        {mappedUsers.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            Không có người dùng nào có gói
          </div>
        )}
      </section>
    </>
  );
};

export default ManageOrder;
