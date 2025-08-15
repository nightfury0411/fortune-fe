import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import NavbarAdmin from '../../components/layouts/NavbarAdmin';

const tabs = [
  { label: 'Quản lý đơn', path: 'manage-order' },
  { label: 'Hệ thống người dùng', path: 'manage-user' },
];

const AdminPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = location.pathname.split('/').pop();

  return (
    <>
      <NavbarAdmin />
      <main className="m-20 h-[calc(100vh-241px)] rounded-[10px] border-2 border-primary overflow-hidden flex flex-col">
        <div className="flex gap-2">
          {tabs.map((tab, index) => {
            const isActive = currentTab === tab.path;
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className={`border-2 border-t-0 text-lg p-2 transition-colors duration-200 font-semibold
                ${isActive ? 'bg-primary text-white border-primary' : 'text-gray-800 hover:bg-gray-100 border-primary'}
                ${index === 0 ? 'rounded-br-[10px] border-l-0' : 'rounded-b-[10px]'}
              `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AdminPage;
