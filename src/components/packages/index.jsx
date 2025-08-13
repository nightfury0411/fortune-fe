import { message } from 'antd';
import PackageCard from './card';

const Packages = () => {
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
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <PackageCard
          pkg={packages}
          isBuy={true}
          handleBuyPackage={handleBuyPackage}
        />
      </div>
    </div>
  );
};
export default Packages;
