import { Button } from 'antd';

const PackageCard = ({ pkg, isBuy, handleBuyPackage }) => {
  const [priceValue, priceUnit] = pkg.price.split(' ');

  return (
    <div className="bg-white max-w-[392px] rounded-xl p-6 shadow-md">
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
        {isBuy && (
          <div className="h-12 flex items-center justify-center mt-2 ">
            <Button
              onClick={handleBuyPackage}
              type="primary"
              className="text-white font-semibold px-8 shadow-md !py-5 rounded-lg mb-4 transition"
            >
              MUA GÓI
            </Button>
          </div>
        )}
      </div>

      <div className="min-h-[200px] flex flex-col justify-start">
        <div className="flex flex-col space-y-3">
          {pkg.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="relative w-4 h-4 mt-1.5 mr-3 flex-shrink-0">
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

export default PackageCard;
