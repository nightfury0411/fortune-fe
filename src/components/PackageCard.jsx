import { Button } from 'antd';
import React from 'react';

const packages = [
  {
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
  },
  {
    title: 'ADVANCED',
    description:
      'Gói nâng cao, gia tăng trải nghiệm loạt minigames hấp dẫn với với nhu cầu tổ chức sự kiện có tần suất trung bình.',
    price: '1.000.000 VNĐ/tháng',
    features: [
      '4 sự kiện / tháng',
      'Bản kế hoạch tuỳ chỉnh theo yêu cầu',
      'Trọn gói minigames',
      'Được cấp quyền trải nghiệm: Nền tảng Wheels of Fortune',
    ],
  },
  {
    title: 'STANDARD',
    description:
      'Gói cơ bản, phù hợp với doanh nghiệp vừa và nhỏ, các tính năng tiêu chuẩn.',
    price: '900.000 VNĐ/tháng',
    features: [
      '4 sự kiện / tháng',
      'Bản kế hoạch tiêu chuẩn',
      'Minigames cơ bản',
      'Hỗ trợ thuê nhân lực cơ bản',
    ],
  },
];

const PackageCard = ({ pkg }) => {
  const [priceValue, priceUnit] = pkg.price.split(' ');
  return (
    <div className="bg-white w-[392px] rounded-xl p-6 shadow-md">
      <div className="flex flex-col items-center mb-6">
        <div className="h-16 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-primary text-center">
            {pkg.title}
          </h2>
        </div>

        <div className="h-20 flex items-center justify-center">
          <p className="text-gray-600 font-medium text-center leading-tight">
            {pkg.description}
          </p>
        </div>

        <div className="h-20 flex flex-col items-center justify-center">
          <div className="text-3xl font-semibold text-primary text-center">
            {priceValue}
            <span className="block text-base font-medium">{priceUnit}</span>
          </div>
        </div>

        <div className="h-12 flex items-center justify-center mt-2 ">
          <Button
            type="primary"
            className="text-white font-semibold px-8 shadow-md !py-5 rounded-lg mb-4 transition"
          >
            MUA GÓI
          </Button>
        </div>
      </div>

      <div className="min-h-[200px] flex flex-col justify-start">
        <div className="flex flex-col space-y-3">
          {pkg.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="relative w-4 h-4 mt-1 mr-3 flex-shrink-0">
                <span className="absolute w-4 h-4 bg-primary text-primary rounded-full"></span>
                <span className="absolute w-1.5 h-1.5 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </div>
              <span className="text-gray-600 font-medium leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Packages = () => {
  return (
    <div className="bg-gray-200 p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
