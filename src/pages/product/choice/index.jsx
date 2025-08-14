import { Button } from 'antd';
import FUNC1 from '../../../assets/images/product/func1.png';
import FUNC2 from '../../../assets/images/product/func2.png';
import FUNC3 from '../../../assets/images/product/func3.png';
import FUNC4 from '../../../assets/images/product/func4.png';
import { PATH_NAME } from '../../../constants';
import { useNavigate } from 'react-router-dom';

const Choice = () => {
  const navigate = useNavigate();
  const solutions = [
    {
      title: 'Kho Minigames',
      description: [
        'Nhiều loại hình (Chơi trên nền tảng, hoạt động trong nhà / ngoài trời',
        'Phù hợp với mọi doanh nghiệp',
        'Mở quyền truy cập, giúp khách hàng tự do tuỳ chỉnh',
      ],
      image: FUNC1,
      reverse: false,
    },
    {
      title: 'KHO LƯU TRỮ BẢN KẾ HOẠCH',
      description: [
        'Kho bản kế hoạch đa dạng cho mọi loại sự kiện',
        'Tải về bản kế hoạch có sẵn hoặc tải lên kho',
        'Tính năng kho lưu trữ cho cá nhân, doanh nghiệp và cộng đồng',
      ],
      image: FUNC2,
      reverse: true,
    },
    {
      title: 'HỖ TRỢ TỐI ĐA',
      description: [
        'Hỗ trợ mọi mặt về kĩ thuật',
        'Hỗ trợ liên kết đối tác bên cho thuê nhân lực, thiết bị, địa điểm',
        'Hỗ trợ chuẩn bị kế hoạch dự phòng',
      ],
      image: FUNC3,
      reverse: false,
    },
    {
      title: 'TRI ÂN KHÁCH HÀNG 1 NĂM',
      description: [
        'Khách hàng sử dụng gói trên 1 năm (tiếp tục sử dụng) được tặng 2 tháng vào năm sau',
      ],
      image: FUNC4,
      reverse: true,
    },
  ];

  return (
    <section>
      <h1 className="font-bold text-lg text-center sm:text-xl lg:text-2xl text-primary my-14">
        NHIỀU LỰA CHỌN - ĐÁP ỨNG NHU CẦU TỐI ƯU
      </h1>

      <div className="flex flex-col gap-14 max-w-5xl items-center mx-auto">
        {solutions.map((sol, index) => (
          <div
            key={index}
            className={`bg-white shadow-md flex flex-col md:flex-row rounded-[20px] overflow-hidden ${
              sol.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-3/5 flex flex-col justify-center gap-4 items-start px-6 md:px-20 py-6 sm:py-10">
              <div className="w-full">
                <p className="text-lg sm:text-xl lg:text-2xl text-primary font-bold mb-4">
                  {sol.title}
                </p>
                <ul className="space-y-3">
                  {sol.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="relative w-4 h-4 mt-1 flex-shrink-0">
                        <span className="absolute w-4 h-4 bg-primary rounded-full"></span>
                        <span className="absolute w-1.5 h-1.5 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </div>
                      <span className="text-base-color font-medium text-sm sm:text-base leading-relaxed">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-2/5">
              <img
                src={sol.image}
                alt={sol.title}
                className="w-full h-56 sm:h-60 md:h-72 object-cover rounded-[20px]"
              />
            </div>
          </div>
        ))}
        <Button
          onClick={() => navigate(PATH_NAME.SERVICE)}
          type="primary"
          className="text-white w-36 mb-12 uppercase font-semibold px-10 shadow-md !py-5 rounded-lg transition"
        >
          Đăng ký ngay
        </Button>
      </div>
    </section>
  );
};

export default Choice;
