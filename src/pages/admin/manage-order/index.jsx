import { Helmet } from 'react-helmet';

const users = [
  {
    username: '[tên đăng nhập]',
    fullName: '[tên người dùng]',
    email: '[email]',
    packageName: 'Gói Customizable',
  },
  {
    username: 'ml24',
    fullName: 'Mai Linh',
    email: 'ml24@gmail.com',
    packageName: 'Gói Customizable',
  },
  {
    username: 'ml24',
    fullName: 'Mai Linh',
    email: 'ml24@gmail.com',
    packageName: 'Gói Customizable',
  },
  {
    username: 'ml24',
    fullName: 'Mai Linh',
    email: 'ml24@gmail.com',
    packageName: 'Gói Customizable',
  },
  {
    username: 'ml24',
    fullName: 'Mai Linh',
    email: 'ml24@gmail.com',
    packageName: 'Gói Customizable',
  },
  {
    username: 'ml24',
    fullName: 'Mai Linh',
    email: 'ml24@gmail.com',
    packageName: 'Gói Customizable',
  },
  {
    username: 'ml24',
    fullName: 'Mai Linh',
    email: 'ml24@gmail.com',
    packageName: 'Gói Customizable',
  },
  {
    username: 'ml24',
    fullName: 'Mai Linh',
    email: 'ml24@gmail.com',
    packageName: 'Gói Customizable',
  },
];

const ManageOrder = () => {
  return (
    <>
      <Helmet>
        <title>Fortune | Quản lý đơn </title>
      </Helmet>
      <section className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#3a3a87] bg-gray-100" />

              <p className="mt-4 text-[#3a3a87] font-medium break-words">
                {user.username} ({user.fullName})
              </p>

              <p className="text-[#3a3a87] break-words">{user.email}</p>

              <p className="mt-2 font-bold text-[#3a3a87]">
                {user.packageName}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ManageOrder;
