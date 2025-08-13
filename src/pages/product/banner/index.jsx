import IMAGE1 from '../../../assets/images/home/product/image1.png';
import IMAGE2 from '../../../assets/images/home/product/image2.png';
import IMAGE3 from '../../../assets/images/home/product/image3.png';

const banners = [
  {
    image: IMAGE1,
    text: 'Tuỳ chỉnh, thiết kế bản kế hoạch & minigames',
  },
  {
    image: IMAGE2,
    text: 'Lựa chọn và tải xuống kho bản kế hoạch, minigames',
  },
  {
    image: IMAGE3,
    text: 'Gửi yêu cầu hỗ trợ hợp tác',
  },
];

const Banner = () => {
  return (
    <section>
      <div className="bg-base-color text-white py-10 px-4">
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-3xl max-w-xl font-bold text-center my-5">
            Hiệu chỉnh minigames dễ dàng và tối ưu nhất về mặt cá nhân hoá
          </h1>
        </div>

        <div className="flex justify-center">
          <p className="text-base max-w-4xl font-medium text-center my-5">
            Nền tảng trải nghiệm và tuỳ chỉnh minigames Wheels of Fortune giúp
            khách hàng tuỳ ý sáng tạo sự kiện nội bộ mang dấu ấn đặc trưng riêng
            của cá nhân hoặc doanh nghiệp
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 justify-center mt-8 w-full">
          {banners.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 basis-full sm:basis-1/2 lg:basis-1/4"
            >
              <img
                src={item.image}
                alt={`product-${index}`}
                className="w-40 h-40 object-contain mb-4"
              />
              <p className="text-sm md:text-[18px] font-medium max-w-[90%]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
