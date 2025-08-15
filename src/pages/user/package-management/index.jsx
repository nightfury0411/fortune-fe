import React from 'react';
import PackageCard from '../../../components/packages/card';
import { Helmet } from 'react-helmet';

const PackageManagement = () => {
  const packages = {
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

  return (
    <>
      <Helmet>
        <title>Fortune | Gói dịch vụ đã mua</title>
      </Helmet>
      <section className="my-5 ml-20">
        <div>
          <PackageCard
            className="border-2 border-primary"
            pkg={packages}
            isBuy={false}
            handleBuyPackage={() => {}}
          />
        </div>
      </section>
    </>
  );
};

export default PackageManagement;
