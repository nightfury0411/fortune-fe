import { Button, message } from 'antd';
import PackageCard from '../../components/packages/card';

const Cost = () => {
  const packages = {
    title: 'CUSTOMIZABLE',
    description:
      'Gói cá nhân hoá và không giới hạn, được cấp quyền vào hệ thống chỉnh sửa, gia tăng các tính năng theo nhu cầu.',
    price: '1.500.000 VNĐ/tháng',
    features: [
      '8 sự kiện / tháng',
      'Bản kế hoạch tuỳ chỉnh theo yêu cầu',
      'Trọn gói minigames',
      'Được cấp quyền tuỳ chỉnh nâng cao: Nền tảng Wheels of Fortune',
      'Hỗ trợ thuê nhân lực, thiết bị, địa điểm',
    ],
  };

  const handleBuyPackage = () => {
    message.info('Tính năng đang được phát triển');
  };

  return (
    <section className="py-12">
      <div className="flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-4 mb-12">
        <h1 className="text-primary font-bold text-xl md:text-2xl lg:text-3xl my-5">
          Gia tăng sự kết nối và gắn bó giữa nhân sự với dịch vụ cá nhân hoá tổ
          chức sự kiện giải trí của Wheels of Fortune
        </h1>

        <Button
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
        />
      </div>
    </section>
  );
};

export default Cost;
