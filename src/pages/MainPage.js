import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4">
      {/* 상단 로고와 사용자 아이콘 */}
      <div className="flex justify-between items-center w-full py-4">
        <button onClick={() => navigateToPage('/MainPage')} className="text-6xl text-[#0046af] font-extrabold">M</button >
        <h1 className="text-3xl text-[#0046af] mt-1 font-extrabold">메인 페이지</h1>
        <button onClick={() => navigateToPage('/MyPage')} className="text-3xl text-gray-700">
          <FaUserCircle className="text-5xl text-[#0046af]"></FaUserCircle>
        </button>
      </div>

      {/* 예약 생성 및 예약 참여 버튼 틀 */}
      <div className="container mx-auto flex justify-between items-center mt-16 max-w-2xl">
        <div className="flex flex-col items-center flex-grow " >
          <img onClick={() => navigateToPage('/ReservationCreatePage')} src="/buttonIcons/calendarPlus.png" alt="예약 생성" className="h-auto cursor-pointer" />
          <h1 className="text-[#0046af] text-4xl mt-2 pb-6 font-bold">예약 생성</h1>
        </div>

        <div className="flex flex-col items-center flex-grow " >
          <img onClick={() => navigateToPage('/OnConstruction')} src="/buttonIcons/calendarCheck.png" alt="예약 참여" className="h-auto cursor-pointer" />
          <h1 className="text-[#0046af] text-4xl mt-2 pb-6 font-bold">예약 참여</h1>
        </div>
      </div>

      {/* 진행중인 예약 리스트 틀 */}
      <div className="container mx-auto mt-12 max-w-2xl">
        <h2 className="text-2xl font-extrabold text-[#0046af]">진행중인 예약</h2>
        <div className="grid grid-cols-3 gap-4 mt-6 text-gray-600 ">
          <div className="text-left font-bold ml-4">예&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;약</div>  {/* 왼쪽 정렬 */}
          <div className="font-bold text-center">예약 상태</div>      {/* 중앙 정렬 */}
          <div className="font-bold text-center">예약자 유형</div>    {/* 중앙 정렬 */}
        </div>
        <hr className='border-solid 3px mt-3'></hr>

        {/* 세부 항목 */}
        {/* 서버에서 userInfo 받아오는걸로 수정해야함 */}
        {Array(6).fill(0).map((_, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 py-2 border-b">
            <div>
              <p className="font-bold text-blue-700">서버에서 resTitle 받아오는걸로 수정해야함</p>
              <p>서버에서 resDate 받아오는걸로 수정해야함</p>
            </div>
            <div>서버에서 resState 받아오는걸로 수정해야함</div>
            <div>서버에서 resType 받아오는걸로 수정해야함</div>
          </div>
        ))}
      </div>
    </div >
  );
}

export default MainPage;
