import { Button } from 'antd';

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
    <div className="bg-white w-[392px] rounded-xl p-6 shadow-md flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-col items-center mb-4 justify-center">
          <h2 className="text-2xl font-bold text-primary mb-2">{pkg.title}</h2>
          <p className="text-[#444444] font-medium mb-4 text-center">
            {pkg.description}
          </p>
          <div className="text-3xl font-semibold text-primary mb-4 text-center">
            {priceValue}
            <span className="block text-base font-medium">{priceUnit}</span>
          </div>
          <Button
            type="primary"
            className="text-white font-semibold px-8 shadow-md !py-5 rounded-lg mb-4 transition"
          >
            MUA GÓI
          </Button>
        </div>

        <div className="flex flex-col items-start space-y-4">
          {pkg.features.map((feature, index) => (
            <div key={index} className="flex items-center jus">
              <div className="relative w-4 h-4 mt-0.5 mr-3 flex-shrink-0">
                <span className="absolute w-4 h-4 bg-primary rounded-full"></span>
                <span className="absolute w-1.5 h-1.5 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </div>
              <span className="text-[#444444] font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Packages = () => {
  return (
    <div className="bg-gray-200 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} />
        ))}
        {packages.length < 3 &&
          Array.from({ length: 3 - packages.length }).map((_, i) => (
            <div key={`empty-${i}`} className="bg-transparent h-full"></div>
          ))}
      </div>
    </div>
  );
};

export default Packages;
