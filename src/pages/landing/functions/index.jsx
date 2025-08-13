import COMMENTS from '../../../assets/images/home/function/comment-nodes.png';
import HANDSHAKE from '../../../assets/images/home/function/handshake.png';
import LIGHT_BULB from '../../../assets/images/home/function/lightbulb.png';
import SLIDERS from '../../../assets/images/home/function/sliders.png';
import SectionHeader from '../../../components/SectionHeader';

const FUNCTIONS_DATA = [
  {
    img: LIGHT_BULB,
    title: 'Ý tưởng sáng tạo',
    description:
      'Khách hàng cung cấp yêu cầu. FORTUNE tư vấn và đưa ra ý tưởng phù hợp nhất',
  },
  {
    img: COMMENTS,
    title: 'Kết nối giao tiếp',
    description:
      'Tổng hợp, phân tích, lập bản kế hoạch và thảo luận với khách hàng',
  },
  {
    img: SLIDERS,
    title: 'Tùy chỉnh linh hoạt',
    description:
      'Khách hàng chốt bản kế hoạch. FORTUNE cấp quyền cho khách hàng thử nghiệm cá nhân hoá minigames',
  },
  {
    img: HANDSHAKE,
    title: 'Hợp tác lâu dài',
    description:
      'Khách hàng hài lòng với ý tưởng đã được cá nhân hoá. FORTUNE đảm bào sự hỗ trợ nếu có vấn đề phát sinh',
  },
];

const Functions = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16">
      <SectionHeader
        subtitle="CHÚNG TÔI LÀ ĐỐI TÁC HOÀN HẢO"
        title="Hỗ trợ doanh nghiệp của bạn kết nối"
        className="mb-24"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FUNCTIONS_DATA.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6   transition"
          >
            <img src={item.img} alt={item.title} className="h-24 mb-4" />

            <p className="text-base-color text-sm font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Functions;
