import React from 'react';

const events = [
  'Tiệc Sinh Nhật',
  'Tiệc Cuối Năm (Year-End Party)',
  'Lễ Kỷ Niệm Ngày Cưới',
  'Tiệc Mừng Thành Công (Tốt nghiệp, Thăng chức)',
  'Workshop Nội Bộ / Chia Sẻ Kiến Thức',
  'Teambuilding',
  'Ngày Sức Khỏe (Health Day)',
  'Ngày Gia Đình (Family Day)',
  'Tiệc Chào Đón Nhân Viên / Thành Viên Mới',
  'Tiệc Chia Tay (Retirement, Farewell Party)',
];

const PlanManagement = () => {
  return (
    <div className="min-h-screen px-20 py-14 flex justify-center mr-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-14 items-stretch">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-white font-bold rounded-lg p-8 flex items-center justify-center text-center text-blue-900 text-lg shadow-md min-h-[370px] h-full"
          >
            {event}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanManagement;
