import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const tabs = [
  { label: 'Chỉnh sửa thông tin cá nhân', path: 'info' },
  { label: 'Các gói dịch vụ đã mua', path: 'packages' },
  { label: 'Bản kế hoạch', path: 'plan' },
  { label: 'Minigames', path: 'minigames' },
  { label: 'Cộng đồng', path: 'community' },
];

const MemberPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = location.pathname.split('/').pop();

  return (
    <div className="flex mx-auto rounded-xl min-h-[600px]">
      <div className="w-72 bg-white rounded-b-xl p-6 flex flex-col gap-4 shadow h-[600px]">
        <div className="w-36 h-36 rounded-full border-2 border-primary mx-auto flex items-center justify-center relative">
          <div className="absolute bottom-0 right-0 size-9 bg-primary border-primary rounded-full flex items-center justify-center">
            <svg
              className="size-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
          </div>
        </div>

        <p className="text-center text-base text-gray-700">
          Người dùng: [Tên người dùng]
        </p>

        <nav className="flex flex-col text-base-color font-medium justify-center items-center mt-4 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`px-4 py-3 rounded-lg w-full text-center text-base transition-colors duration-200 ${
                currentTab === tab.path
                  ? 'bg-primary text-white font-medium'
                  : 'hover:bg-gray-100 hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 ml-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MemberPage;
