import { useQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import PackageCard from '../../components/packages/card';
import { PATH_NAME } from '../../constants';
import { getUserPurchasePackage } from '../../services/order';
import { getPackage } from '../../services/package';
import { formatCurrenyPackage } from '../../utils';

const Cost = () => {
  const navigate = useNavigate();

  const { data: packageRes, isPending } = useQuery({
    queryKey: ['packages'],
    queryFn: getPackage,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const packageData =
    packageRes?.data?.find(
      (pkg) =>
        pkg?.description?.includes('Gói cá nhân hoá') ||
        pkg?.description?.includes('không giới hạn'),
    ) ?? null;

  const packages = {
    title: packageData?.name ?? '',
    description: packageData?.description ?? '',
    price: packageData?.price
      ? `${formatCurrenyPackage(packageData.price)}`
      : '',
    features: [
      '8 sự kiện / tháng',
      'Bản kế hoạch tuỳ chỉnh theo yêu cầu',
      'Trọn gói minigames',
      'Được cấp quyền tuỳ chỉnh nâng cao: Nền tảng Wheels of Fortune',
      'Hỗ trợ thuê nhân lực, thiết bị, địa điểm',
    ],
  };

  const { data: userPurchasePackageRes } = useQuery({
    queryKey: ['userPurchasePackage'],
    queryFn: getUserPurchasePackage,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const handleBuyPackage = () => {
    navigate(PATH_NAME.SERVICE);
  };

  const purchasedPackage = Array.isArray(userPurchasePackageRes?.data)
    ? userPurchasePackageRes.data
    : [];

  const hasPackage = purchasedPackage.length > 0;

  return (
    <>
      <Helmet>
        <title>Fortune | Bảng giá</title>
      </Helmet>
      <section className="py-12">
        <div className="flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-4 mb-12">
          {!hasPackage ? (
            <>
              <h1 className="text-primary font-bold text-xl md:text-2xl lg:text-3xl my-5">
                Gia tăng sự kết nối và gắn bó giữa nhân sự với dịch vụ cá nhân
                hoá tổ chức sự kiện giải trí của Wheels of Fortune
              </h1>

              <Button
                onClick={() => navigate(PATH_NAME.SERVICE)}
                type="primary"
                className="text-white uppercase my-5 font-semibold px-8 shadow-md !py-5 rounded-lg transition"
              >
                Đăng ký ngay
              </Button>
            </>
          ) : (
            <div className="p-6 rounded-lg text-center">
              <h2 className="text-primary font-bold text-lg mb-6">
                Bạn hiện đang dùng gói này.
              </h2>
              <div className="flex items-center justify-center gap-4">
                <Button
                  type="primary"
                  onClick={() => navigate(PATH_NAME.HOME)}
                  className="bg-primary text-white font-semibold px-6 py-4 rounded-lg shadow-md"
                >
                  Về trang chủ
                </Button>
              </div>
            </div>
          )}
        </div>

        {!hasPackage && (
          <div className="flex justify-center">
            <PackageCard
              pkg={packages}
              isBuy={true}
              handleBuyPackage={handleBuyPackage}
              loading={isPending}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Cost;
