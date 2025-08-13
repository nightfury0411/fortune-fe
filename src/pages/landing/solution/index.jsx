import SOL1 from '../../../assets/images/home/solution/sol1.png';
import SOL2 from '../../../assets/images/home/solution/sol2.png';
import SOL3 from '../../../assets/images/home/solution/sol3.png';
import SectionHeader from '../../../components/SectionHeader';

const solutions = [
  {
    title: 'Đa dạng loại hình minigames',
    description:
      'Nhiều hoạt động áp dụng có thể áp dụng cho từng loại sự kiện, dựa theo bản kế hoạch đã thảo luận. Khách hàng có  thể tuỳ chỉnh mô hình hoạt động theo nhu cầu, sở thích',
    image: SOL1,
    reverse: false,
  },
  {
    title: 'Bảng giá phù hợp theo quy mô',
    description:
      'Khách hàng có thể lựa chọn mua gói dịch vụ tuỳ theo quy mô của sự kiện, nhu cầu, độ tuỳ chỉnh và cá nhân hoá trong từng mục được cung cấp',
    image: SOL2,
    reverse: true,
  },
  {
    title: 'Bản kế hoạch đáp ứng',
    description:
      'Bản kế hoạch đầu tay được FORTUNE cung cấp dựa theo yêu cầu của khách hàng. Bổ sung những yêu cầu đặc biệt, tuỳ chỉnh thêm nếu khách hàng có nhu cầu',
    image: SOL3,
    reverse: false,
  },
];

const Solution = () => {
  return (
    <section className="px-4">
      <SectionHeader
        subtitle="GIẢI PHÁP CHO DOANH NGHIỆP"
        title="Ý tưởng độc đáo - Hình thức cá nhân hoá"
      />
      <div className="flex flex-col gap-36 max-w-5xl mx-auto mt-20 sm:mt-36">
        {solutions.map((sol, index) => (
          <div
            key={index}
            className={`bg-white shadow-md flex flex-col md:flex-row rounded-[20px] overflow-hidden ${
              sol.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div
              className={`md:w-3/5 flex flex-col justify-center gap-4
              ${
                sol.reverse
                  ? 'items-end md:pr-20 md:pl-8 px-6'
                  : 'items-start md:pl-20 md:pr-8 px-6'
              } py-6 sm:py-10`}
            >
              <div className="w-full md:w-[70%]">
                <p className="text-lg sm:text-xl lg:text-2xl text-primary font-bold mb-4">
                  {sol.title}
                </p>
                <p className="text-base-color font-medium text-sm sm:text-base leading-relaxed">
                  {sol.description}
                </p>
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
      </div>
    </section>
  );
};

export default Solution;
