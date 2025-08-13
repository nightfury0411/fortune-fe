import REQUEST from '../../../assets/images/home/request/request.png';

const Request = () => {
  return (
    <section className="relative">
      <img
        src={REQUEST}
        alt="request"
        className="w-full h-72 sm:h-[472px] object-cover"
      />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full px-4">
          <div className="bg-white/70 max-w-5xl mx-auto backdrop-blur-sm rounded-[20px] p-6 sm:p-10 text-center">
            <h2 className="text-primary font-extrabold text-lg sm:text-3xl mb-4">
              KẾT NỐI CÙNG FORTUNE
            </h2>
            <p className="text-base-color font-medium text-sm sm:text-base mb-6 max-w-xl mx-auto">
              Chỉ cần bạn đưa ra yêu cầu, chúng tôi sẽ góp những ý tưởng độc đáo
              và thực hiện hoá nó một cách hiệu quả nhất
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition">
              GỬI YÊU CẦU
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Request;
