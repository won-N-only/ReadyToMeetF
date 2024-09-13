import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/Main');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4">
      {/* 상단 로고와 사용자 아이콘 */}
      <div className="flex justify-between items-center w-full py-4">
        <div className="text-6xl font-bold text-[#0046ff]">M</div>
        <h1 className="text-3xl font-bold text-[#0046ff] mt-1">메인 페이지</h1>
        <div className="text-3xl text-gray-700">
          <FaUserCircle className="text-5xl text-[#0046ff]"></FaUserCircle>
        </div>
      </div>

      {/* 예약 생성 및 예약 참여 버튼 섹션 */}
      <div className="flex justify-between items-center w-full mt-8">
        <div className="flex flex-col items-center w-full">
          {/* 예약 생성 이미지 */}
          <img src="/buttonIcons/calendarPlus.png" alt="예약 생성" className="w-full h-auto" />
          <h1 className="text-[#0046ff] text-xl py-2 px-6 mt-4">예약 생성</h1>
        </div>

        <div className="flex flex-col items-center w-full">
          {/* 예약 참여 이미지 */}
          <img src="/buttonIcons/calendarCheck.png" alt="예약 참여" className="w-full h-auto" />
          <h1 className="text-[#0046ff] text-xl py-2 px-6 mt-4">예약 참여</h1>
        </div>
      </div>


      {/* 진행중인 예약 리스트 틀 */}
      <div className="w-full mt-12">
        <h2 className="text-xl font-bold text-[#0046ff]">진행중인 예약</h2>
        <div className="grid grid-cols-3 gap-4 mt-4 text-gray-600">
          <div className="font-bold">예약</div>
          <div className="font-bold">예약 상태</div>
          <div className="font-bold">예약자 유형</div>
        </div>

        {/* 세부 항목 */}
        {Array(6).fill(0).map((_, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 py-2 border-b">
            <div>
              <p className="font-bold text-blue-700">예약 제목</p>
              <p>May 4th, 2024</p>
            </div>
            <div>예약 상태</div>
            <div>게스트</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
