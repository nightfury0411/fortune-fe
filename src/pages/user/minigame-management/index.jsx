import React from 'react';

const minigames = [
  'Bingo Sinh Nhật',
  'Đoán Tuổi Qua Ảnh',
  'Bốc Thăm May Mắn',
  'Ai Là Ai',
  'Trivia Cặp Đôi',
  'Photo Challenge',
  'Vòng Quay May Mắn',
  'Khoảnh Khắc Đáng Nhớ',
  'Đố Vui Kiến Thức',
  'Mini Hackathon',
  'Amazing Race',
  'Kéo Co',
  'Thi Plank',
  'Chạy Tiếp Sức',
  'Thử Thách Gia Đình',
  'Vẽ Tranh Chung',
  'Giới Thiệu Chéo',
  'Thẻ Câu Hỏi Vui',
  'Video Kỷ Niệm',
  'Guess Who',
];

const MinigameManagement = () => {
  return (
    <div className="min-h-screen px-20 py-14 flex justify-center mr-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-14 items-stretch">
        {minigames.map((event, idx) => (
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

export default MinigameManagement;
