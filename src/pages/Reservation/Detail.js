import React from 'react';
import { FaUserCircle, FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function ReservationDetailPage() {
    const navigate = useNavigate();

    const navigateToPage = (path) => {
        navigate(path);
    };

    const randomId = Math.floor(Math.random() * (10 ** 6))
    return (
        <div className="flex flex-col items-center min-h-screen bg-white px-4">
            {/* 상단 로고와 사용자 아이콘 */}
            <div className="flex justify-between items-center w-full py-4">
                <button onClick={() => navigateToPage('/MainPage')} className="text-6xl text-[#0046af] font-extrabold">M</button >
                <h1 className="text-3xl text-[#0046af] mt-1 font-extrabold">예약 조회</h1>
                <button onClick={() => navigateToPage('/MyPage')} className="text-3xl text-gray-700">
                    <FaUserCircle className="text-5xl text-[#0046af]"></FaUserCircle>
                </button>
            </div>

            {/* 지도 */}
            <div className="w-full max-w-md mt-4 h-60 bg-gray-200 rounded-lg">
                여기에 맵 API 삽입예정임
                google naver Leaflet
            </div>

            {/* 예약 정보 */}
            <div className="w-full max-w-md mt-4 space-y-4   p-4 rounded-lg ">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-[#0046af]">가게이름 이런건가</h2>
                    <FaShareAlt className="text-2xl text-gray-600" />
                </div>

                <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-[#0046af]" />
                    <span>예약주소</span>
                </div>

                <div className="flex justify-between items-center border-b pb-2">
                    <span>2024년 09월 03일 오후 1시 30분</span>
                </div>

                <div className="flex justify-between items-center border-b pb-2">
                    <span>예약금</span>
                    <span>20,000원</span>
                </div>

                <div className="flex justify-between items-center border-b pb-2">
                    <span>예약 확인 코드</span>
                    <span>{randomId}</span>
                </div>

                <div className="space-y-1">
                    <h3 className="text-[#0046af] font-semibold">설명</h3>
                    <p className="text-gray-600">
                        주저리 주저리                     </p>
                </div>
            </div>

            <div className="flex space-x-4 mt-8 w-full max-w-md">
                <button className="flex-grow bg-[#0046af] text-white font-bold p-4 rounded-lg text-lg">
                    예약 확정하기
                </button>
                <button className="flex-grow bg-red-500 text-white font-bold p-4 rounded-lg text-lg">
                    예약 삭제하기
                </button>
            </div>
        </div>

    );
}

export default ReservationDetailPage;
