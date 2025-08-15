import { useQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import PackageCard from '../../components/packages/card';
import { PATH_NAME } from '../../constants';
import { getPackage } from '../../services/package';
import { formatCurrency } from '../../utils';

const Cost = () => {
  const navigate = useNavigate();
  const { data: packageRes, isPending } = useQuery({
    queryKey: ['packages'],
    queryFn: getPackage,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const packageData = packageRes?.data?.[0] ?? null;

  const packages = {
    title: 'CUSTOMIZABLE',
    description: packageData?.description ?? '',
    price: packageData?.price ? `${formatCurrency(packageData.price)}` : '',
    features: [
      '8 sự kiện / tháng',
      'Bản kế hoạch tuỳ chỉnh theo yêu cầu',
      'Trọn gói minigames',
      'Được cấp quyền tuỳ chỉnh nâng cao: Nền tảng Wheels of Fortune',
      'Hỗ trợ thuê nhân lực, thiết bị, địa điểm',
    ],
  };

  const handleBuyPackage = () => {
    navigate(PATH_NAME.SERVICE);
  };

  return (
    <section className="py-12">
      <div className="flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-4 mb-12">
        <h1 className="text-primary font-bold text-xl md:text-2xl lg:text-3xl my-5">
          Gia tăng sự kết nối và gắn bó giữa nhân sự với dịch vụ cá nhân hoá tổ
          chức sự kiện giải trí của Wheels of Fortune
        </h1>

        <Button
          onClick={() => navigate(PATH_NAME.SERVICE)}
          type="primary"
          className="text-white uppercase my-5 font-semibold px-8 shadow-md !py-5 rounded-lg transition"
        >
          Đăng ký ngay
        </Button>
      </div>
      <div className="flex justify-center">
        <PackageCard
          pkg={packages}
          isBuy={true}
          handleBuyPackage={handleBuyPackage}
          loading={isPending}
        />
      </div>
    </section>
  );
};

export default Cost;
