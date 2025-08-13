import { Button } from 'antd';
import HERO_IMAGE from '../../../assets/images/home/hero.png';

const Banner = () => {
  return (
    <section>
      <div className="bg-base-color flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 text-white">
          <div className="flex flex-col justify-center items-start gap-4 px-6 sm:px-12 lg:px-[108px] py-10 sm:py-16 lg:py-20">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl lg:w-[75%]">
              Tạo sự kết nối cho nội bộ doanh nghiệp trong tổ chức sự kiện
            </h1>
            <h2 className="font-normal mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl lg:w-[85%]">
              Wheels of Fortune (được phát triển bởi FORTUNE) cung cấp dịch vụ
              về tổ chức sự kiện mang tính cá nhân hoá cho doanh nghiệp của bạn
            </h2>

            <div className="my-10 sm:my-16 lg:my-20 font-semibold w-full sm:w-44">
              <Button
                type="primary"
                className="!py-4 sm:!py-5 px-6 sm:px-8 text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                Tư vấn dịch vụ
              </Button>
              <p className="text-xs text-center mt-2">
                Tư vấn dịch vụ phù hợp với mọi nhu cầu
              </p>
            </div>

            <div>
              <p className="text-base sm:text-lg font-semibold">
                Bạn đã mua dịch vụ?
              </p>
              <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-6">
                <Button
                  type="primary"
                  className="!py-4 sm:!py-5 px-6 sm:px-8 text-base sm:text-lg font-semibold w-full sm:w-auto"
                >
                  Đăng nhập
                </Button>
                <Button
                  type="primary"
                  className="!py-4 sm:!py-5 px-6 sm:px-8 text-base sm:text-lg font-semibold w-full sm:w-auto"
                >
                  Đăng ký
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 h-64 sm:h-80 lg:h-auto">
          <img
            src={HERO_IMAGE}
            alt="hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
