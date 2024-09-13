import React, { useState } from 'react';
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function ReservationListPage() {
    const navigate = useNavigate();

    const navigateToPage = (path) => {
        navigate(path);
    };

    const reservations = [
        { title: "임시로 클라에서 검색되게함", date: "May 4th, 2024", status: "예약 상태", type: "게스트" },
        { title: "타이틀입니다", date: "May 4th, 2024", status: "예약 상태", type: "게스트" },
        { title: "개잠옴", date: "May 4th, 2024", status: "예약 상태", type: "게스트" },
        { title: "피자먹고싶네", date: "May 4th, 2024", status: "예약 상태", type: "게스트" },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredReservations = reservations.filter((reservation) =>
        reservation.title.includes(searchTerm)
    );
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

            {/* 검색창 */}
            <div className="relative w-full max-w-md mt-4">
                <input
                    type="text"
                    placeholder="Search here"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-[#0046af] pl-10"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>

            {/* 예약 목록 */}
            <div className="w-full max-w-md mt-8">
                <div className="grid grid-cols-3 gap-4 text-gray-600 font-bold mb-1 border-b pb-2">
                    <div className="text-left">예약</div>
                    <div className="text-center">예약 상태</div>
                    <div className="text-right">유저 상태</div>
                </div>

                {filteredReservations.map((reservation, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 py-2 border-b items-center">
                        <div className="text-left">
                            <p className="font-bold text-blue-700">{reservation.title}</p>
                            <p>{reservation.date}</p>
                        </div>
                        <div className="text-center">{reservation.status}</div>
                        <div className="text-right">{reservation.type}</div>
                    </div>
                ))}
            </div>
        </div >
    );
}


export default ReservationListPage;
