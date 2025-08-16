import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import PackageCard from '../../../components/packages/card';
import { getUserPurchasePackage } from '../../../services/order';

const PackageManagement = () => {
  const userId = localStorage.getItem('userId');

  const packageQueries = useQuery({
    queryKey: ['userPurchasePackages', userId],
    queryFn: () => getUserPurchasePackage(userId),
    enabled: !!userId,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const defaultPackage = {
    title: 'CUSTOMIZABLE',
    description:
      'Gói cá nhân hoá và không giới hạn, được cấp quyền vào hệ thống chỉnh sửa, gia tăng các tính năng theo nhu cầu.',
    price: '1.500.000',
    features: [
      '8 sự kiện / tháng',
      'Bản kế hoạch tuỳ chỉnh theo yêu cầu',
      'Trọn gói minigames',
      'Được cấp quyền tuỳ chỉnh nâng cao: Nền tảng Wheels of Fortune',
      'Hỗ trợ thuê nhân lực, thiết bị, địa điểm',
    ],
  };

  const purchasedPackage = packageQueries.data?.data?.[0];

  return (
    <>
      <Helmet>
        <title>Fortune | Gói dịch vụ đã mua</title>
      </Helmet>
      <section className="my-5 ml-20">
        {purchasedPackage ? (
          <PackageCard
            className="border-2 border-primary"
            pkg={{ ...defaultPackage, title: purchasedPackage }}
            isBuy={false}
            handleBuyPackage={() => {}}
          />
        ) : (
          <div className="text-gray-500 text-lg">Bạn chưa mua gói nào</div>
        )}
      </section>
    </>
  );
};

export default PackageManagement;
