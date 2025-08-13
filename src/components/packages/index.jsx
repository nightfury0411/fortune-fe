import PackageCard from './card';

const Packages = () => {
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

  return (
    <div className="p-8">
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
